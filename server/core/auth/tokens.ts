import * as jwt from 'jsonwebtoken';
import config from '../../config/config';
import { IUser } from '../../models/user';

export const generateAccessToken = (user: IUser): string =>
  jwt.sign({ username: user.username }, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });

export const generateRefreshToken = (user: IUser): string =>
  jwt.sign({ username: user.username }, config.jwt.refreshSecret, {
    expiresIn: config.jwt.refreshExpiration,
  });
