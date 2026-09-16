type JwtConfig = {
  secret: string;
  expiration: number;
  refreshSecret: string;
  refreshExpiration: number;
};

export default JwtConfig;
