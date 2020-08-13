/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const mongoose = require('mongoose');
const User = require('../models/User');
// Assertion Style
chai.should();
chai.use(chaiHttp);

describe('AUTH API', () => {
  // Test the registration api

  describe('POST /api/auth/register', () => {
    it('It should register a user', (done) => {
      const registrationData = {
        name: 'Onasanya tunde',
        email: 'onsas@gmail.com',
        password: 'testing',
        role: 'admin'
      };
      chai
        .request(server)
        .post('/api/auth/register')
        .send(registrationData)
        .end((err, response) => {
          response.should.have.status(201);
          done();
        });
    });
  });

  describe('POST /api/auth/register', () => {
    it('It should {not register} a user', (done) => {
      const registrationData = {
        name: 'Onasanya tunde',
        email: 'onasanysss@gmail.com',
        password: 'testing',
        role: 'admin'
      };
      chai
        .request(server)
        .post('/api/auth/register')
        .send(registrationData)
        .end((err, response) => {
          response.should.have.status(400);
          done();
        });
    });
  });

  //   User login

  describe('POST /api/auth/login', () => {
    it('It should login a user', (done) => {
      const loginData = {
        email: 'onasanyass@gmail.com',
        password: 'passwords'
      };
      chai
        .request(server)
        .post('/api/auth/login')
        .send(loginData)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('access_token');
          done();
        });
    });
  });

  afterEach((done) => {
    User.findOneAndDelete({ email: 'onsas@gmail.com' }).exec();
    done();
  });
  after((done) => {
    mongoose.connection.close();
    server.close(done());
    // done()
  });
});
