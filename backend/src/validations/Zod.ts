import { ResponseError } from '../interfaces/ResponsesInterfaces';
import { UserData, UserDataSchema } from '../types/UserDataType';

class Zod {
  protected userData = UserDataSchema;

  userDataValidation(obj: UserData): void | ResponseError {
    const parsedUser = this.userData.safeParse(obj);
    if (!parsedUser.success) {      
      return {
        status: 401,
        response: { error: parsedUser.error },
      };
    }
  }
}
export default Zod;