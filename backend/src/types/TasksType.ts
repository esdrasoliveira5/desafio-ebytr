import { z } from 'zod';

const TasksSchema = z.object({
  _id: z.string().optional(),
  name: z.string({
    required_error: 'name is required',
    invalid_type_error: 'name must be a string',
  }).min(3, { message: 'name must be 3 or more characters long' }),
  description: z.string({
    required_error: 'description is required',
    invalid_type_error: 'description must be a string',
  }).min(5, { message: 'description must be 5 or more characters long' }),
  status: z.string().and(z.literal('pendente')
    .or(z.literal('em andamento'))
    .or(z.literal('pronto'))),
  date: z.string().optional(),
});

export type TaskType = z.infer<typeof TasksSchema>;
export { TasksSchema };