import * as sinon from 'sinon';
import chai from 'chai';
import UserService from '../../../services/UserService';
import { UserId } from '../../../types/UserIdType';
import UserModel from '../../../models/UserModel';

const model = new UserModel();
const service = new UserService(model);
const { expect } = chai;

const payload = {
  _id: '6260bca97c58e5a0b7847cfa',
  userame: 'Roberto',
  email: 'roberto@email.com',
  password: '$2b$10$JOmGDGptDGC1.eLa3OMj0uAk4FxZT2SjLH0lbP3Uh9W7iDHGN3Lp6',
  tasks: [],
}

describe('3 - Test UserService', () => {
  describe('3.1 - method create', () => {
    describe('a - if success', () => {
      before(async () => {
        sinon
          .stub(service.model, 'create')
          .resolves(payload as unknown as UserId);
      });
    
      after(()=>{
        sinon.restore();
      });
    
      it('return the user created in the db', async () => {
        const response = await service.create({
          userName: 'Roberto',
          email: 'roberto@email.com',
          password: 'password',
        });
        expect(response).to.be.deep.equal({
          status: 201,
          response: {
            user: payload,
            token: 'token'
          },
        });
      });
    });
    describe('b - if fail', () => {
      it('return the user created in the db', async () => {
        const response = await service.create({
          userName: '',
          email: 'roberto@email.com',
          password: 'password',
        })
        expect(response.status).to.be.deep.equal(400);
      });
    });
  });
});