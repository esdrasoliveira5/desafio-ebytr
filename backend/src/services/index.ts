import { Model } from '../interfaces/ModelInterface';
import { ResponseError, ResponseUser } from '../interfaces/ResponsesInterfaces';
import Zod from '../validations/Zod';

abstract class Service<T> {
  constructor(public model: Model<T>, public zod: Zod) {}

  abstract create(obj: T): Promise<ResponseUser<T> | ResponseError>;
}

export default Service;