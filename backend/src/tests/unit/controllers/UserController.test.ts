import { Request, Response } from 'express';
import * as sinon from 'sinon';
import chai from 'chai';
import UserController from '../../../controllers/UserController';
import UserService from '../../../services/UserService';
import UserModel from '../../../models/UserModel';

const { expect } = chai;

const model = new UserModel();
const service = new UserService(model);
const controller = new UserController(service);
const request = {} as Request;
const response = {} as Response;

const payload = {
  _id: '6260bca97c58e5a0b7847cfa',
  userName: 'Roberto',
  email: 'roberto@email.com',
  password: '$2b$10$JOmGDGptDGC1.eLa3OMj0uAk4FxZT2SjLH0lbP3Uh9W7iDHGN3Lp6',
  tasks: [],
}

describe('1 - Test UserController', () => {
  describe('1.1 - method create', () => {
    before(async () => {
      request.body = {
        userName: 'Roberto',
        email: 'roberto@email.com',
        password: 'roberto_password',
      }
      response.status = sinon.stub().returns(response)
      response.json = sinon.stub()
      
      sinon
        .stub(controller.service, 'create')
        .resolves({ status: 201, response: { user: payload, token: 'token'} });
    });
  
    after(()=>{
      sinon.restore();
    })
  
    it('return the status 201 and the user created', async () => {
      await controller.create(request, response);
      
      expect((response.status as sinon.SinonStub).calledWith(201)).to.be.equal(true);
      expect((response.json as sinon.SinonStub).calledWith({ user: payload, token: 'token'})).to.be.equal(true);
    });
  });
});