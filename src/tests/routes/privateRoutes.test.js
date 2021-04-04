import React from 'react';
import { mount } from 'enzyme';
import { PrivateRoutes } from '../../routers/PrivateRoutes';
import { MemoryRouter } from 'react-router';

describe('private router', () => {
	const props = { location: { pathname: '/marvel' } };
	Storage.prototype.setItem = jest.fn();

	test('debe mostar el componente sie ta auh y guardar localStore', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoutes isAuthenticated={true} {...props} component={() => <span>Listo!</span>} />
			</MemoryRouter>
		);
		expect(wrapper.find('span').exists()).toBe(true);
		expect(localStorage.setItem).toBeCalledWith('lastPath', '/marvel');
	});

	test('debe bloquear el componente si no esta Auth', () => {
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoutes isAuthenticated={false} {...props} component={() => <span>Listo!</span>} />
			</MemoryRouter>
		);
		expect(wrapper.find('span').exists()).toBe(false);
	});
});
