const {length}= require ("../../back/password")
describe('Test servicio password', () => {
    it('password contiene 5 caracteres then return true ', async () => {
        const password = "abcde";
        const response = true
        expect(length(password)).toBe(response);
    });

});