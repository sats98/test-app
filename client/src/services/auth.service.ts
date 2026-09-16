import IUser from '../interfaces/user';
import { AxiosResponse } from 'axios';
import Axios from 'axios-observable';
import AppConfig from './../config/app.config';
import { Observable } from 'rxjs';
import IAuthResponse from '../interfaces/auth-response';
import IGithubAuthorizeResponse, {
  IGithubCallbackResponse,
} from '../interfaces/github-auth-response';

const authService = {
  login,
  logout,
  getGithubAuthorizeUrl,
  githubCallback,
};

function login(user: IUser): Observable<AxiosResponse<IAuthResponse>> {
  return Axios.post<IAuthResponse>(`${AppConfig.baseUrl}/api/auth/local`, user);
}

function logout(): Observable<AxiosResponse<void>> {
  return Axios.post<void>(
    `${AppConfig.baseUrl}/api/auth/logout`,
    {},
    { withCredentials: true }
  );
}

function getGithubAuthorizeUrl(): Observable<AxiosResponse<IGithubAuthorizeResponse>> {
  return Axios.get<IGithubAuthorizeResponse>(
    `${AppConfig.baseUrl}/api/auth/github`,
    { withCredentials: true }
  );
}

function githubCallback(
  code: string,
  state: string
): Observable<AxiosResponse<IGithubCallbackResponse>> {
  return Axios.post<IGithubCallbackResponse>(
    `${AppConfig.baseUrl}/api/auth/github/callback`,
    { code, state },
    { withCredentials: true }
  );
}

export default authService;
