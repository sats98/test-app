import { Response } from 'express';
import config from '../../config/config';
import { isProduction } from '../../utils';

export const REFRESH_TOKEN_COOKIE = 'refreshToken';
export const OAUTH_STATE_COOKIE = 'gh_oauth_state';

export const setRefreshTokenCookie = (res: Response, token: string) => {
  res.cookie(REFRESH_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    maxAge: config.jwt.refreshExpiration * 1000,
    path: '/api/auth',
  });
};

export const clearRefreshTokenCookie = (res: Response) => {
  res.clearCookie(REFRESH_TOKEN_COOKIE, { path: '/api/auth' });
};

export const setOauthStateCookie = (res: Response, state: string) => {
  res.cookie(OAUTH_STATE_COOKIE, state, {
    httpOnly: true,
    secure: isProduction,
    sameSite: 'lax',
    maxAge: 5 * 60 * 1000,
    path: '/api/auth',
  });
};

export const clearOauthStateCookie = (res: Response) => {
  res.clearCookie(OAUTH_STATE_COOKIE, { path: '/api/auth' });
};
