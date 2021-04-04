import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router';
import AuthContext from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('test', () => {
	const historyMock = {
		push: jest.fn(),
		replace: jest.fn(),
		location: {},
		listen: jest.fn(),
		createHref: jest.fn(),
	};

	const contextValue = { dispath: jest.fn(), user: { logged: false } };
	const wrapper = mount(
		<AuthContext value={contextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<Navbar />
				</Router>
			</MemoryRouter>
		</AuthContext>
	);

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('should mostrarse correcto', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('.clase').text().trim()).toEqual('algo');
	});

	test('should click', () => {
		wrapper.find('button').prop('onClick')();
		expect(contextValue.dispath).toHaveBeenCalledWith({ type: types.logOut });
		expect(historyMock.replace).toHaveBeenCalledWith('/login');
	});
});
