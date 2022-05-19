import Service from '.';
import {
  ResponseError,
  ResponseUser,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { UserData } from '../types/UserDataType';
import { UserId } from '../types/UserIdType';
import { User } from '../types/UserType';

class UserService extends Service<User> {
  constructor(public model:UserModel) {
    super(model);
  }

  create = async (obj:UserData):
  Promise<ResponseUser<UserId> | ResponseError> => {
    const response = await this.model.create({ ...obj, tasks: [] }) as UserId;

    return { status: 201, response };
  };
}

export default UserService;