import { z } from 'zod'; 
import { TasksSchema } from './TasksType';

const UserSchema = z.object({
  userName: z.string({
    required_error: 'userName is required',
    invalid_type_error: 'userName must be a string',
  }).min(3, { message: 'userName must be 3 or more characters long' }),
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }).email({ message: 'email invalid' }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }),
  tasks: z.array(TasksSchema),
});

export type User = z.infer<typeof UserSchema>;
export { UserSchema };