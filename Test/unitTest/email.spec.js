const {validate}= require ("../../back/email")
describe('Test servicio email', () => {
    it('email con @ then return true ', async () => {
        const email = "abc@abc.com";
        const response = true
        expect(validate(email)).toBe(response);
    });

    it('email sin @ then return false ', async () => {
        const email = "abcabc.com";
        const response = false
        expect(validate(email)).toBe(response);
    });

    it('email vacío then return false ', async () => {
        const email = "";
        const response = false
        expect(validate(email)).toBe(response);
    });

    it('email con mas de @ then return false ', async () => {
        const email = "abc@@abc";
        const response = false
        expect(validate(email)).toBe(response);
    });

    it('email con otro caracter !@ then return false ', async () => {
        const email = "abc*abc";
        const response = false
        expect(validate(email)).toBe(response);
    });

});