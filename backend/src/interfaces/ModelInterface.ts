import { UserEmail, UserOrTaskId } from '../types';

export interface Model<T> {
  create(obj: T): Promise<T>
  readOne(obj: UserOrTaskId | UserEmail): Promise<T | null>
}