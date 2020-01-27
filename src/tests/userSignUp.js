import {expect,use,request} from 'chai';
import chaiHttp from 'chai-http';
import server from '../index';
use(chaiHttp);

describe('user SignUp',()=>{
    it('will retrun 201 status',(done)=>{
        request(server)
        .post('/api/v1/auth/signup')
        .send({
            firstname:'eugene',
            lastname:'sadmm',
            email:'weod@gmail.com',
            password:'sad123'
        }).end((err,result)=>{
            expect(result).to.have.status(201);
        })
        done();
    })
})