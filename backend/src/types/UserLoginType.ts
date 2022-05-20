import { z } from 'zod'; 

const UserLoginSchema = z.object({
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }).email({ message: 'email invalid' }),
  password: z.string({
    required_error: 'password is required',
    invalid_type_error: 'password must be a string',
  }),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;
export { UserLoginSchema };