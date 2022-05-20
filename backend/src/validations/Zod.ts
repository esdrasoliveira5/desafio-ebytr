import { ResponseError } from '../interfaces/ResponsesInterfaces';
import { UserData, UserDataSchema } from '../types/UserDataType';

class Zod {
  userData = (obj: UserData): void | ResponseError => {
    const parsedUser = UserDataSchema.safeParse(obj);
    if (!parsedUser.success) {      
      return {
        status: 401,
        response: { error: parsedUser.error },
      };
    }
  };
}
export default Zod;