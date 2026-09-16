import Config from '../types/config';

const prodConfig: Config = {
  clientUrl: process.env.CLIENT_URL || '<client url here>',
  db: {
    uri: process.env.MONGO_URI || '<mongodb uri here>',
    options: {
      user: process.env.MONGO_USERNAME || '',
      pass: process.env.MONGO_USERNAME || '',
      dbName: 'prod',
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET || '<jwt secret here>',
    expiration: 360000,
    refreshSecret: process.env.JWT_REFRESH_SECRET || '<jwt refresh secret here>',
    refreshExpiration: 60 * 60 * 24 * 7,
  },
  github: {
    clientId: process.env.GITHUB_CLIENT_ID || '<github client id here>',
    clientSecret: process.env.GITHUB_CLIENT_SECRET || '<github client secret here>',
    callbackUrl: process.env.GITHUB_CALLBACK_URL || '<github callback url here>',
  },
};

export default prodConfig;
