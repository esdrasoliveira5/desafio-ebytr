import Service from '.';
import {
  ResponseError,
  ResponseUser,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { UserData } from '../types/UserDataType';
import { UserId } from '../types/UserIdType';
import { User } from '../types/UserType';
import Zod from '../validations/Zod';

class UserService extends Service<User> {
  constructor(public model:UserModel, public zod: Zod) {
    super(model, zod);
  }

  create = async (obj:UserData):
  Promise<ResponseUser<UserId> | ResponseError> => {
    const dataValidation = this.zod.userData(obj);
    if (dataValidation) return dataValidation;

    const response = await this.model.create({ ...obj, tasks: [] }) as UserId;

    return { status: 201, response };
  };
}

export default UserService;