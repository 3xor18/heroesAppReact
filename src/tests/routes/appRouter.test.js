import { mount } from 'enzyme';
import AuthContext from '../../auth/AuthContext';
import { AppRouter } from '../../routers/AppRouter';

describe('test', () => {
	const contextValue = { dispath: jest.fn(), user: { logged: false } };

	test('debe mostar el login si no esta auth', () => {
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper).toMatchSnapshot();
	});

	test('should mostar componente marvel si esta auth', () => {
		const contextValue = { dispath: jest.fn(), user: { logged: true, name: '3xor' } };
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);
		expect(wrapper.find('.navbar').exists()).toBe(true);
	});
});
