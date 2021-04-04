import { mount } from 'enzyme';
import { MemoryRouter, Route, Router } from 'react-router';
import { HeroesScreen } from '../../../components/herores/HeroesScreen';

describe('test heroe Screen', () => {
	const historyMock = { length: 10, push: jest.fn(), goBack: jest.fn() };

	test('redireccioar si no recibe nada', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<HeroesScreen history={historyMock} />
			</MemoryRouter>
		);
		expect(wrapper.find('Redirect').exists()).toBe(true);
	});

	test('mostrar el heroe si el parametro ok', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:heroeId" component={HeroesScreen} />
			</MemoryRouter>
		);
		expect(wrapper.find('.row').exists()).toBe(true);
	});

	test('regresar a la pantalla con push', () => {
		const historyMock = { length: 1, push: jest.fn(), goBack: jest.fn() };
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:heroeId" component={() => <HeroesScreen history={historyMock} />} />
			</MemoryRouter>
		);
		wrapper.find('button').prop('onClick')();
		expect(historyMock.push).toHaveBeenCalledWith('/');
		expect(historyMock.goBack).not.toHaveBeenCalled();
	});

	test('regresar a la pantalla goBack', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:heroeId" component={() => <HeroesScreen history={historyMock} />} />
			</MemoryRouter>
		);
		wrapper.find('button').prop('onClick')();
		expect(historyMock.push).not.toHaveBeenCalled();
		expect(historyMock.goBack).toHaveBeenCalled();
	});

	test('Redirect por parametro malo', () => {
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				<Route path="/hero/:heroeId" component={() => <HeroesScreen history={historyMock} />} />
			</MemoryRouter>
		);
		expect(wrapper.text()).toBe('');
	});
});
