import { ResponseError } from '../interfaces/ResponsesInterfaces';
import { UserData, UserDataSchema } from '../types/UserDataType';
import { UserLogin, UserLoginSchema } from '../types/UserLoginType';

class Zod {
  protected userLogin = UserLoginSchema;

  protected userData = UserDataSchema;

  userLoginValidation(obj: UserLogin): void | ResponseError {
    const parsedUser = this.userLogin.safeParse(obj);
    if (!parsedUser.success) {      
      return {
        status: 400,
        response: { error: parsedUser.error },
      };
    }
  }

  userDataValidation(obj: UserData): void | ResponseError {
    const valid = this.userLoginValidation(obj);
    if (valid) return valid;
    const parsedUser = this.userData.safeParse(obj);
    if (!parsedUser.success) {      
      return {
        status: 400,
        response: { error: parsedUser.error },
      };
    }
  }
}
export default Zod;