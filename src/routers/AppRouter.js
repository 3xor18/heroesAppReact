import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashBoardRoutes } from './DashBoardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoutes';

export const AppRouter = () => {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute exact path="/login" component={LoginScreen} isAuthenticated={user.logged} />
					<PrivateRoutes path="/" component={DashBoardRoutes} isAuthenticated={user.logged} />
				</Switch>
			</div>
		</Router>
	);
};
