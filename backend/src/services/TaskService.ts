import Service from '.';
import {
  ResponseError,
  ResponseTask,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { TaskType } from '../types/TasksType';
import { User } from '../types/UserType';

class UserService extends Service<User> {
  constructor(public model:UserModel) {
    super(model);
  }

  creatTask = async (token: string, obj:TaskType):
  Promise<ResponseTask<TaskType> | ResponseError> => {
    const tokenValidate = this.jwt.validate(token);
    if ('status' in tokenValidate) return tokenValidate;

    const response = await this.model.creatTask(tokenValidate.id, obj);
    if (response === null) {
      return {
        status: 404,
        response: { error: 'User Not Found' },
      };
    }
    return { status: 200, response: response.tasks };
  };
}

export default UserService;