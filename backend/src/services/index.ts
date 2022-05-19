import { Model } from '../interfaces/ModelInterface';
import { ResponseError, ResponseUser } from '../interfaces/ResponsesInterface';

abstract class Service<T> {
  constructor(public model: Model<T>) {}

  abstract create(obj: T): Promise<ResponseUser<T> | ResponseError>;
}

export default Service;