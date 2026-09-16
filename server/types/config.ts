import DbConfig from './db-config';
import GithubConfig from './github-config';
import JwtConfig from './jwt-config';

type Config = {
  clientUrl: string;
  db: DbConfig;
  jwt: JwtConfig;
  github: GithubConfig;
};

export default Config;
