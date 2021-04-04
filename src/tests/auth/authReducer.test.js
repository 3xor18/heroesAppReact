import authReducer from '../../auth/authReducer';
import { types } from '../../types/types';
describe('AuthTest', () => {
	test('Retornar el estado por defecto', () => {
		const response = authReducer({ logged: false }, {});
		expect(response).toEqual({ logged: false });
	});

	test('debe de autenticar y colocar el name del usuario', () => {
		const action = { type: types.logIn, payload: { name: '3xor' } };
		const state = authReducer({ logged: false }, action);
		expect(state).toEqual({ logged: true, name: '3xor' });
	});

	test('debe de borrar el name y loged en false', () => {
		const action = { type: types.logOut, payload: { name: '3xor' } };
		const state = authReducer({ logged: true }, action);
		expect(state).toEqual({ logged: false });
	});
});
