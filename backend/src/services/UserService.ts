import Service from '.';
import {
  ResponseError,
  ResponseLogin,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { UserData } from '../types/UserDataType';
import { UserId } from '../types/UserIdType';
import { UserLogin } from '../types/UserLoginType';
import { User } from '../types/UserType';

class UserService extends Service<User> {
  constructor(public model:UserModel) {
    super(model);
  }

  create = async (obj:UserData):
  Promise<ResponseLogin<UserId> | ResponseError> => {
    const dataValidation = this.zod.userDataValidation(obj);
    if (dataValidation) return dataValidation;

    const hash = await this.bcrypt.hashIt(obj.password);

    const response = await this.model.create({
      ...obj,
      password: hash,
      tasks: [],
    }) as UserId;

    const token = this.jwt.generate({ 
      id: response._id,
      email: response.email,
    });

    return { status: 201, response: { user: response, token } };
  };

  async readOne(obj: UserLogin):
  Promise<ResponseError | ResponseLogin<UserId>> {
    const data = this.zod.userLoginValidation(obj);
    if (data) return data;
    const response = await this.model.readOne({ email: obj.email }) as UserId;
    const hash = await this.bcrypt.compareIt(obj.password, response.password);
    if (hash) return hash;
    const token = this.jwt.generate({ 
      id: response._id,
      email: response.email,
    });
    if (response === null) {
      return { status: 404, response: { error: 'Not Found' } };
    }
    return { status: 200, response: { user: response, token } };
  }
}

export default UserService;