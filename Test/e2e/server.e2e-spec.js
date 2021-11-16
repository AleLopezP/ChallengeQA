const supertest = require("supertest")
describe('Test servicio e2e Login', () => {
    let host;
    beforeEach(async () => {
        host = supertest("http://localhost:3000")
    });

    afterEach(async () => {
        host = null
    });

    it('email con @ then return true ', async () => {
        const request = {
            email: "abc@abc.com",
            password: "123456"
        };
        const response = {
            code: 201,
            msg: 'LOGIN VALID'
        };
        return host
            .post("/login")
            .send(request)
            .expect(200)
            .expect(response)
            .then ((response) => {
                expect(response.body.code).toBe(201)
                expect(response.body.code).toBe(200)
            })
    });

});

describe('Test servicio e2e Registro', () => {
    let host;
    beforeEach(async () => {
        host = supertest("http://localhost:3000")
    });

    afterEach(async () => {
        host = null
    });

    it('email con @ then return true ', async () => {
        const request = {
            email: "abc@abc.com",
            password: "123456"
        };
        const response = {
            code: 201,
            msg: 'LOGIN VALID'
        };
        return host
            .post("/register")
            .send(request)
            .expect(200)
            .expect(response)
            .then ((response) => {
                expect(response.body.code).toBe(201)
            })
    });

});