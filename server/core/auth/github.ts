import axios from 'axios';
import crypto from 'crypto';
import config from '../../config/config';

const GITHUB_AUTHORIZE_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const GITHUB_USER_URL = 'https://api.github.com/user';
const GITHUB_EMAILS_URL = 'https://api.github.com/user/emails';

export const generateState = (): string =>
  crypto.randomBytes(16).toString('hex');

export const buildAuthorizeUrl = (state: string): string => {
  const params = new URLSearchParams({
    client_id: config.github.clientId,
    redirect_uri: config.github.callbackUrl,
    scope: 'read:user user:email',
    state,
    allow_signup: 'true',
  });
  return `${GITHUB_AUTHORIZE_URL}?${params.toString()}`;
};

interface GithubTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  error?: string;
  error_description?: string;
}

export const exchangeCodeForToken = async (code: string): Promise<string> => {
  const { data } = await axios.post<GithubTokenResponse>(
    GITHUB_TOKEN_URL,
    {
      client_id: config.github.clientId,
      client_secret: config.github.clientSecret,
      code,
      redirect_uri: config.github.callbackUrl,
    },
    { headers: { Accept: 'application/json' } }
  );
  if (!data.access_token) {
    throw new Error(data.error_description || 'failed to obtain github access token');
  }
  return data.access_token;
};

export interface GithubProfile {
  id: number;
  login: string;
  name: string | null;
  avatar_url: string;
  email: string | null;
}

interface GithubEmail {
  email: string;
  primary: boolean;
  verified: boolean;
}

export const fetchGithubProfile = async (
  githubAccessToken: string
): Promise<GithubProfile> => {
  const { data } = await axios.get<GithubProfile>(GITHUB_USER_URL, {
    headers: { Authorization: `token ${githubAccessToken}` },
  });
  return data;
};

export const fetchPrimaryGithubEmail = async (
  githubAccessToken: string
): Promise<string | undefined> => {
  const { data } = await axios.get<GithubEmail[]>(GITHUB_EMAILS_URL, {
    headers: { Authorization: `token ${githubAccessToken}` },
  });
  const primary = data.find((e) => e.primary && e.verified) || data.find((e) => e.verified);
  return primary?.email;
};
