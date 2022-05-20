import { z } from 'zod'; 
import { UserLogin } from './UserLoginType';

const UserDataSchema = z.object({
  userName: z.string({
    required_error: 'userName is required',
    invalid_type_error: 'userName must be a string',
  }).min(3, { message: 'userName must be 3 or more characters long' }),
});

export type UserData = UserLogin & z.infer<typeof UserDataSchema>;
export { UserDataSchema };