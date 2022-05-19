import { Schema, model as createModel, Document } from 'mongoose';
import { User } from '../types/UserType';
import MongoModel from './MongoModel';

interface UserDocument extends User, Document {}

const userSchema = new Schema<UserDocument>(
  {
    userName: String,
    email: String,
    password: String,
    tasks: Array,
  },
  { versionKey: false },
);

class UserModel extends MongoModel<User> {
  constructor(model = createModel('user', userSchema)) {
    super(model);
  }
}

export default UserModel;