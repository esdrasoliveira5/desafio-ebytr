import Service from '.';
import {
  ResponseError,
  ResponseTask,
  ResponseTasks,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { TaskType } from '../types/TasksType';
import { User } from '../types/UserType';

class TaskService extends Service<User> {
  constructor(public model:UserModel) {
    super(model);
  }

  create = async (token: string | undefined, obj:TaskType):
  Promise<ResponseTasks<TaskType> | ResponseError> => {
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

  readOne = async (token: string | undefined, id: string):
  Promise<ResponseTask<TaskType> | ResponseError> => {
    const tokenValidate = this.jwt.validate(token);
    if ('status' in tokenValidate) return tokenValidate;
    const zodValidation = this.zod.idValidation(id);
    if (zodValidation) return zodValidation;
    const response = await this.model.readOne({ _id: tokenValidate.id });
    if (response === null) {
      return {
        status: 404,
        response: { error: 'User Not Found' },
      };
    }
    
    const filterTask = response.tasks.filter(
      (task) => task._id?.toString() === id,
    );
    return { status: 200, response: filterTask[0] };
  };
}

export default TaskService;