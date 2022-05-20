import { Model } from '../interfaces/ModelInterface';
import { ResponseError, ResponseUser } from '../interfaces/ResponsesInterfaces';
import Zod from '../validations/Zod';

abstract class Service<T> {
  protected zod: Zod;

  constructor(public model: Model<T>) {
    this.zod = new Zod();
  }

  abstract create(obj: T): Promise<ResponseUser<T> | ResponseError>;
}

export default Service;