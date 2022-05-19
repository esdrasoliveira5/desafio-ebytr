import { z } from 'zod'; 
import { TasksSchema } from './TasksType';
import { UserData } from './UserDataType';

const UserSchema = z.object({
  tasks: z.array(TasksSchema),
});

export type User = UserData & z.infer<typeof UserSchema>;
export { UserSchema };