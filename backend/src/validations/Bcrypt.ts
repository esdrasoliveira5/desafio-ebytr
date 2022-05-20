import bcrypt = require('bcrypt');
import { ResponseError } from '../interfaces/ResponsesInterfaces';

class Bcrypt {
  private salt: string;

  protected bcrypt = bcrypt;

  constructor() {
    this.salt = bcrypt.genSaltSync(10);
  }

  async hashIt(password: string): Promise<string> {
    const hashed = await this.bcrypt.hash(password, this.salt);
    return hashed;
  }

  async compareIt(password: string, hashedPassword: string):
  Promise<void | ResponseError> {
    const response = await this.bcrypt.compare(password, hashedPassword);
    if (!response) {
      return {
        status: 401,
        response: { error: 'Invalid Password' },
      };
    }
  }
}

export default Bcrypt;