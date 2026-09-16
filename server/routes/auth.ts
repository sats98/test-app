import { NextFunction, Request, Response, Router } from 'express';
import { check, validationResult } from 'express-validator';
import HttpStatusCodes from 'http-status-codes';
import passport from 'passport';
import '../core/auth/strategies/local';
import * as jwt from 'jsonwebtoken';
import config from '../config/config';
import {
  clearOauthStateCookie,
  clearRefreshTokenCookie,
  OAUTH_STATE_COOKIE,
  REFRESH_TOKEN_COOKIE,
  setOauthStateCookie,
  setRefreshTokenCookie,
} from '../core/auth/cookies';
import {
  buildAuthorizeUrl,
  exchangeCodeForToken,
  fetchGithubProfile,
  fetchPrimaryGithubEmail,
  generateState,
} from '../core/auth/github';
import { generateAccessToken, generateRefreshToken } from '../core/auth/tokens';
import User from '../models/user';

const router: Router = Router();

// @route   POST api/auth/local
// @desc    Login with local user
// @access  Public
router.post(
  '/local',
  [
    check('username', 'Username is required').exists(),
    check('password', 'Password is required').exists(),
  ],
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }
    passport.authenticate('local', (err, user, info) => {
      if (!user || err) {
        return res.status(HttpStatusCodes.UNAUTHORIZED).send();
      }
      const token = jwt.sign({ username: user.username }, config.jwt.secret);
      return res.status(HttpStatusCodes.OK).send({ token: token });
    })(req, res, next);
  }
);

// @route   GET api/auth/github
// @desc    Get the GitHub authorize redirect url, and stash an anti-CSRF
//          state value in an httpOnly cookie for later validation
// @access  Public
router.get('/github', (_req: Request, res: Response) => {
  const state = generateState();
  setOauthStateCookie(res, state);
  return res.status(HttpStatusCodes.OK).json({ url: buildAuthorizeUrl(state) });
});

// @route   POST api/auth/github/callback
// @desc    Exchange the code the client received from GitHub for a GitHub
//          access token, fetch the GitHub profile/email, upsert the local
//          user and mint our own access + refresh tokens
// @access  Public
router.post(
  '/github/callback',
  [
    check('code', 'code is required').exists(),
    check('state', 'state is required').exists(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(HttpStatusCodes.BAD_REQUEST)
        .json({ errors: errors.array() });
    }

    const { code, state } = req.body;
    const cookieState = req.cookies?.[OAUTH_STATE_COOKIE];
    clearOauthStateCookie(res);

    if (!cookieState || cookieState !== state) {
      return res
        .status(HttpStatusCodes.UNAUTHORIZED)
        .json({ message: 'invalid or expired oauth state' });
    }

    try {
      const githubAccessToken = await exchangeCodeForToken(code);
      const profile = await fetchGithubProfile(githubAccessToken);
      const email = profile.email || (await fetchPrimaryGithubEmail(githubAccessToken));
      const githubId = String(profile.id);

      let user = await User.findOne({ githubId });
      if (!user) {
        user = await User.create({
          username: `github_${profile.login}`.toLowerCase(),
          githubId,
          email,
          authProvider: 'github',
        });
      }

      const accessToken = generateAccessToken(user);
      const refreshToken = generateRefreshToken(user);
      setRefreshTokenCookie(res, refreshToken);

      return res.status(HttpStatusCodes.OK).json({
        accessToken,
        user: { username: user.username, email: user.email },
      });
    } catch (err) {
      console.log(err);
      return res.status(HttpStatusCodes.UNAUTHORIZED).send();
    }
  }
);

// @route   POST api/auth/refresh
// @desc    Mint a new access token from the refresh token cookie
// @access  Public (requires valid refresh token cookie)
router.post('/refresh', (req: Request, res: Response) => {
  const refreshToken = req.cookies?.[REFRESH_TOKEN_COOKIE];
  if (!refreshToken) {
    return res.status(HttpStatusCodes.UNAUTHORIZED).send();
  }

  jwt.verify(
    refreshToken,
    config.jwt.refreshSecret,
    async (err: jwt.VerifyErrors | null, payload: any) => {
      if (err) {
        return res.status(HttpStatusCodes.UNAUTHORIZED).send();
      }
      const user = await User.findOne({ username: payload.username });
      if (!user) {
        return res.status(HttpStatusCodes.UNAUTHORIZED).send();
      }
      const accessToken = generateAccessToken(user);
      return res.status(HttpStatusCodes.OK).json({ accessToken });
    }
  );
});

// @route   POST api/auth/logout
// @desc    Clear the refresh token cookie
// @access  Public
router.post('/logout', (_req: Request, res: Response) => {
  clearRefreshTokenCookie(res);
  return res.status(HttpStatusCodes.OK).send();
});

export default router;
