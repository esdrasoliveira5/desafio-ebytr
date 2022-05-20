import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';
import { UserEmail, UserOrTaskId } from '../types';

abstract class MongoModel<T> implements Model<T> {
  constructor(public model: M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create(obj);

  readOne = async (obj: UserEmail | UserOrTaskId):
  Promise<T | null> => this.model.findOne(obj);
}

export default MongoModel;