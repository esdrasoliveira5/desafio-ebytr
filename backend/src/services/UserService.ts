import Service from '.';
import {
  ResponseError,
  ResponseUser,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { User } from '../types/UserType';

class UserService extends Service<User> {
  constructor(model = new UserModel()) {
    super(model);
  }

  create = async (obj:User):
  Promise<ResponseUser<User> | ResponseError> => {
    const response = await this.model.create(obj);

    return { status: 201, response };
  };
}

export default UserService;