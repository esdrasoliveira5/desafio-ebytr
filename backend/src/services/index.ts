import { Model } from '../interfaces/ModelInterface';
import Bcrypt from '../validations/Bcrypt';
import JwToken from '../validations/JwToken';
import Zod from '../validations/Zod';

abstract class Service<T> {
  protected zod: Zod;

  protected bcrypt: Bcrypt;

  protected jwt: JwToken;

  constructor(public model: Model<T>) {
    this.zod = new Zod();
    this.bcrypt = new Bcrypt();
    this.jwt = new JwToken();
  }
}

export default Service;