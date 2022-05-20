import { UserEmail, UserOrTaskId } from '../types';
import { TaskType } from '../types/TasksType';

export interface Model<T> {
  create(obj: T): Promise<T>
  readOne(obj: UserOrTaskId | UserEmail): Promise<T | null>
  creatTask(id: string, obj: TaskType): Promise<T | null>
}