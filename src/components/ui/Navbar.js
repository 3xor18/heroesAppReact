import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
	const {
		user: { name, logged },
		dispatch,
	} = useContext(AuthContext);

	const history = useHistory();

	const handleClick = () => {
		dispatch({ type: types.logOut });
		history.replace('/login');
	};
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand col-1" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse col-5">
				<div className="navbar-nav">
					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/marvel">
						Marvel
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/dc">
						DC
					</NavLink>

					<NavLink activeClassName="active" className="nav-item nav-link" exact to="/search">
						Search
					</NavLink>
				</div>
			</div>

			<ul className="navbar-nav  col-6">
				<div className="col-9"></div>
				{logged && <span className="nav-item nav-link col-1 text-info">{name}</span>}

				<button className="nav-item nav-link col-2 btn" onClick={handleClick}>
					Logout
				</button>
			</ul>
		</nav>
	);
};
