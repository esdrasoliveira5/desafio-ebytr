import * as sinon from 'sinon';
import chai from 'chai';
import UserModel from '../../../models/UserModel';

const user = new UserModel();
const { expect } = chai;

const payload = {
  _id: '6260bca97c58e5a0b7847cfa',
  userame: 'Roberto',
  email: 'roberto@email.com',
  password: '$2b$10$JOmGDGptDGC1.eLa3OMj0uAk4FxZT2SjLH0lbP3Uh9W7iDHGN3Lp6',
  tasks: [],
}


describe('2 - Test UserModel', () => {
  describe('2.1 - method create', () => {
    before(async () => {
      sinon
        .stub(user.model, 'create')
        .resolves(payload);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the user created in the db', async () => {
      const response = await user.create({
        userName: 'Roberto',
        email: 'roberto@email.com',
        password: 'password',
        tasks: [],
      })
      expect(response).to.be.deep.equal(payload);
    });
  });

  describe('2.1 - method findOne', () => {
    before(async () => {
      sinon
        .stub(user.model, 'findOne')
        .resolves(payload);
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the user created in the db', async () => {
      const response = await user.findOne({
        email: 'roberto@email.com',
      })
      expect(response).to.be.deep.equal(payload);
    });
  });
});