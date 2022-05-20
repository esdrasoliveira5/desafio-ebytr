import Service from '.';
import {
  ResponseError,
  ResponseLogin,
} from '../interfaces/ResponsesInterfaces';
import UserModel from '../models/UserModel';
import { TaskType } from '../types/TasksType';
import { User } from '../types/UserType';

class TaskService extends Service<User> {
  constructor(public model:UserModel) {
    super(model);
  }

  create = async (obj:TaskType):
  Promise<ResponseLogin<TaskType> | ResponseError> => {

  };

  readOne = async (obj: User): Promise<ResponseError | ResponseLogin<User>> => {
    console.log('AQUI');
  };
}

export default TaskService;