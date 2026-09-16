interface IGithubAuthorizeResponse {
  url: string;
}

export interface IGithubCallbackResponse {
  accessToken: string;
  user: {
    username: string;
    email?: string;
  };
}

export default IGithubAuthorizeResponse;
