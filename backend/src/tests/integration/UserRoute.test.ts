import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp = require('chai-http');

import { Response } from 'superagent';
import UserModel from '../../models/UserModel';
import server from '../../index';
const user = new UserModel();

chai.use(chaiHttp);

const { expect } = chai;

const payload = {
  _id: '6260bca97c58e5a0b7847cfa',
  userName: 'Roberto',
  email: 'roberto@email.com',
  password: 'password',
  tasks: [],
}

describe('1 - Test endpoint POST /user', () => {
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
    it('a) return status 201 and the user created', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/user')
         .set('X-API-Key', 'foobar')
         .send({
          "userName": "Roberto",
          "email": "roberto@email.com",
          "password": "roberto_password",
      });
      expect(chaiHttpResponse).to.have.status(201);
      expect(chaiHttpResponse.body).to.deep.equal({
        "_id": "6260bca97c58e5a0b7847cfa",
        "userName": "Roberto",
        "email": "roberto@email.com",
        "password": "password",
        "tasks": [],
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
         .post('/user')
         .set('X-API-Key', 'foobar')
         .send({
          "userName": "Roberto",
          "email": "roberto@email.com",
          "password": "roberto_password",
      });
      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Erro: Internal Server Error"});
    });
  })
});

describe('2 - Test endpoint POST /user/login', () => {
  describe('2.1 - if success', () => {
    let chaiHttpResponse: Response;

    before(() => {
      sinon
      .stub(user.model, 'findOne')
      .resolves(null);
    });
    after(()=>{
      sinon.restore();
    });
    it('a) return status 200', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/user')
         .set('X-API-Key', 'foobar')
         .send({
          "email": "roberto@email.com",
          "password": "roberto_password",
      });
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.deep.equal({ user: payload, token: 'token' });
    });
  });
  describe('2.2 - if fail', () => {
    let chaiHttpResponse: Response;
    before(() => {
      sinon
      .stub(user.model, 'findOne')
      .resolves(null);
    });
    after(()=>{
      sinon.restore();
    });

    it('a) return status 500 and the error message "Internal Server Error"', async () => {
      chaiHttpResponse = await chai
         .request(server.app)
         .post('/user/login')
         .set('X-API-Key', 'foobar')
         .send({
          "email": "roberto@email.com",
          "password": "roberto_password",
      });
      expect(chaiHttpResponse).to.have.status(500);
      expect(chaiHttpResponse.body).to.deep.equal({ "error": "Erro: Internal Server Error"});
    });
  })
});