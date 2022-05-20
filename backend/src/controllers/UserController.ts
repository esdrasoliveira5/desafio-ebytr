import { Response } from 'express';
import Controller from '.';
import {
  RequestWithBody,
} from '../interfaces/RequestInterfaces';
import UserService from '../services/UserService';
import { UserData } from '../types/UserDataType';
import { UserLogin } from '../types/UserLoginType';

class UserController extends Controller<UserData> {
  private _route: string;

  constructor(
    public service: UserService,
    route = '/user',
  ) {
    super(service);
    this._route = route;
  }

  get route() { return this._route; }

  create = async (
    req: RequestWithBody<UserData>,
    res: Response,
  ): Promise<typeof res> => {
    const { body } = req;
    
    const { status, response } = await this.service.create(body);

    return res.status(status).json(response);
  };

  readOne = async (
    req: RequestWithBody<UserLogin>,
    res: Response,
  ): Promise<typeof res> => {
    const { body } = req;
    
    const { status, response } = await this.service.readOne(body);

    return res.status(status).json(response);
  };
}

export default UserController;