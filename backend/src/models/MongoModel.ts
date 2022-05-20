import { Model as M, Document } from 'mongoose';
import { Model } from '../interfaces/ModelInterface';
import { UserEmail, UserOrTaskId } from '../types';
import { TaskType } from '../types/TasksType';

abstract class MongoModel<T> implements Model<T> {
  constructor(public model: M<T & Document>) {}

  create = async (obj: T): Promise<T> => this.model.create(obj);

  readOne = async (obj: UserEmail | UserOrTaskId):
  Promise<T | null> => this.model.findOne(obj);

  creatTask = async (id:string, obj: TaskType): Promise<T | null> => {
    const response = await this.model.findByIdAndUpdate(
      id, 
      { 
        $push: { tasks: { ...obj, date: new Date() } },
      }, 
      { new: true },
    );
    return response;
  };
}

export default MongoModel;