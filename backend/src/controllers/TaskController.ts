import { Response } from 'express';
import Controller from '.';
import {
  RequestWithBody,
} from '../interfaces/RequestInterfaces';
import TaskService from '../services/TaskService';
import { TaskType } from '../types/TasksType';
import { UserData } from '../types/UserDataType';

class TaskController extends Controller<UserData> {
  private _route: string;

  constructor(
    public service: TaskService,
    route = '/task',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<TaskType>,
    res: Response,
  ): Promise<typeof res> => {
    const { body } = req;
    const { authorization } = req.headers;
 
    const { status, response } = await this.service.create(authorization, body);

    return res.status(status).json(response);
  };

  readOne = async (
    req: RequestWithBody<TaskType>,
    res: Response,
  ): Promise<typeof res> => {
    const { id } = req.headers;
    
    const { status, response } = await this.service.readOne(id as string);

    return res.status(status).json(response);
  };
}

export default TaskController;