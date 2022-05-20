import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import { Response } from 'superagent';
import server from '../../index';
import UserModel from '../../models/UserModel';

const user = new UserModel();

chai.use(chaiHttp);

const { expect } = chai;

const payload = {
  _id: '6260bca97c58e5a0b7847cfa',
  name: 'Lavar Carro',
  description: 'Lavar o carro',
  status: 'password',
  date: '11/05/2022',
}

describe('1 - Test endpoint POST /task', () => {
  describe('1.1 - if success', () => {
    let chaiHttpResponse: Response;

    before(() => {
      sinon
      .stub(user.model, 'create')
      .resolves(payload);
    });
    after(()=>{
      sinon.restore();
    });
    it('a) return status 200', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/task')
         .set('X-API-Key', 'foobar')
         .send({
          name: 'Lavar Carro',
          description: 'Lavar o carro',
          status: 'password',
          date: '11/05/2022',
      });
      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.deep.equal({
        _id: '6260bca97c58e5a0b7847cfa',
        name: 'Roberto',
        description: 'roberto@email.com',
        status: 'password',
        date: '11/05/2022',
      });
    });
  });
  describe('1.2 - if fail', () => {
    let chaiHttpResponse: Response;
    before(() => {
      sinon
      .stub(user.model, 'create')
      .rejects({ message: 'Internal Server Error'});
    });
    after(()=>{
      sinon.restore();
    });

    it('a) return status 500 and the error message "Internal Server Error"', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/task')
         .set('X-API-Key', 'foobar')
         .send({
          name: 'Roberto',
          description: 'roberto@email.com',
          status: 'password',
          date: '11/05/2022',
      });
      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Erro: Internal Server Error"});
    });
  })
});