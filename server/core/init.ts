import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { Express } from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import config from '../config/config';
import { isProduction } from '../utils';

export const initMiddleware = (app: Express) => {
  app.use(cors({ origin: config.clientUrl, credentials: true }));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};

export const initMongoose = () => {
  mongoose.connect(config.db.uri, config.db.options, (err) => {
    if (err) {
      console.log('could not connect to mongodb');
    }
    mongoose.set('debug', !isProduction);
  });
};

export const initAuth = (app: Express) => {
  app.use(passport.initialize());
};
