import { Document, Model, model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

/**
 * interface to model the schema for typescript
 * @param username:string
 * @param password:string
 */
export interface IUser extends Document {
  username: string;
  password?: string;
  email?: string;
  githubId?: string;
  authProvider?: 'local' | 'github';
  comparePassword: (candidatePassword: string, callback: any) => void;
}

const userSchema: Schema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
  },
  githubId: {
    type: String,
    unique: true,
    sparse: true,
  },
  authProvider: {
    type: String,
    enum: ['local', 'github'],
    default: 'local',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre<IUser>('save', function save(next) {
  const user = this;

  if (!user.isModified('password') || !user.password) {
    return next();
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(this.password as string, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (
  candidatePassword: string,
  callback: any
) {
  bcrypt.compare(
    candidatePassword,
    this.password,
    (err: Error, isMatch: boolean) => {
      callback(err, isMatch);
    }
  );
};

const User: Model<IUser> = model('User', userSchema);

export default User;
