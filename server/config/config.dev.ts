import Config from '../types/config';

const devConfig: Config = {
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  db: {
    uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_USERNAME || '',
      dbName: 'dev',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'jwtSecret',
    expiration: 360000,
    refreshSecret: process.env.JWT_REFRESH_SECRET || 'jwtRefreshSecret',
    refreshExpiration: 60 * 60 * 24 * 7,
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID || '',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    callbackUrl:
      process.env.GITHUB_CALLBACK_URL ||
      'http://localhost:3000/auth/github/callback',
  },
};

export default devConfig;
