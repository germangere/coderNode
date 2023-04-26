import assert from 'assert/strict';
import { userLogin, userSignup } from '../services/auth.service.js';
import { userSingleton } from '../model/daos/userSingleton.js';


describe('Auth user', async function () {

    const DB = userSingleton();
    const user = {
        email: 'algun@mail.com',
        name: 'Test',
        password: 'password',
        address: 'Bella calle 123',
        age: 79,
        phone: 36998723
    }

    it('debería crear una nueva cuenta de usuario', async function () {
        const result = await userSignup(user);
        assert.notStrictEqual(result, false, 'Usuario existente');

        const expected = await DB.listarByEmail(user.email);
        assert.strictEqual(user.email, expected.email);

    })

    it('debería loggear a un usuario registrado', async function () {
        const result = await userLogin(user);
        assert.strictEqual(true, result)
    })
})