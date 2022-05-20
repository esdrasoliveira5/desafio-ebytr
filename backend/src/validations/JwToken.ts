import Jwt, { SignOptions } from 'jsonwebtoken';
import * as path from 'path';
import fs = require('fs');
import { ResponseError } from '../interfaces/ResponsesInterfaces';
import { TokenType } from '../types';

class JwToken {
  private secret: string;

  private jwtConfig: SignOptions;

  protected jwt = Jwt;

  constructor() {
    this.secret = fs.readFileSync(path.resolve('jwt.evaluation.key'), 'utf8');
    this.jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };
  }

  generate(data: TokenType): string {
    const token: string = this.jwt.sign(data, this.secret, this.jwtConfig);
    return token;
  }

  validate(token: string | undefined): ResponseError | TokenType {
    if (token === undefined) {
      return {
        status: 400,
        response: { error: 'Invalid Token' },
      };
    }
    try {
      const decoded = this.jwt.verify(token, this.secret) as TokenType;
      return decoded;
    } catch (err) {
      return {
        status: 400,
        response: { error: 'Invalid Token' },
      };
    }
  }
}
export default JwToken;