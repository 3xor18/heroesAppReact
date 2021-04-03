import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { DcScreen } from '../components/dc/DcScreen';
import { HeroesScreen } from '../components/herores/HeroesScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchSreen } from '../components/search/SearchSreen';
import { Navbar } from '../components/ui/Navbar';

export const DashBoardRoutes = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-2">
				<Switch>
					<Route exact path="/search" component={SearchSreen} />
					<Route exact path="/marvel" component={MarvelScreen} />
					<Route exact path="/heroe/:heroeId" component={HeroesScreen} />
					<Route exact path="/dc" component={DcScreen} />
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};
