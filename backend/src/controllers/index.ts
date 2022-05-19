import { Response } from 'express';
import {
  RequestWithBody,
} from '../interfaces/RequestInterfaces';

import Service from '../services';

abstract class Controller<T> {
  constructor(public service: Service<T>) {}

  abstract create(req: RequestWithBody<T>, res: Response):
  Promise<typeof res>;
}

export default Controller;