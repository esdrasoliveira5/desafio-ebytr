import { Response } from 'express';
import Controller from '.';
import {
  RequestWithBody,
} from '../interfaces/RequestInterfaces';
import UserService from '../services/UserService';
import { UserData } from '../types/UserDataType';

class UserController extends Controller<UserData> {
  constructor(
    service = new UserService(),
  ) {
    super(service);
  }

  create = async (
    req: RequestWithBody<UserData>,
    res: Response,
  ): Promise<typeof res> => {
    const { body } = req;
    
    const { status, response } = await this.service.create(body);

    return res.status(status).json(response);
  };
}

export default UserController;