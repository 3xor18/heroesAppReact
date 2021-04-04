import { types } from '../types/types';

/* const state = {
	name: 'Gerson',
	logged: true,
}; */

const authReducer = (state = {}, action) => {
	switch (action.type) {
		case types.logIn:
			return { ...action.payload, logged: true };

		case types.logOut:
			return { logged: false };

		default:
			return state;
	}
};

export default authReducer;
