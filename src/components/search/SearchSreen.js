import React, { useMemo } from 'react';
import { useLocation } from 'react-router';
import { heroes } from '../../data/heroes';
import { HeroeCard } from '../herores/HeroeCard';
import { useForm } from '../hooks/FormHook';
import queryString from 'query-string';
import { getHeroByName } from '../../selectors/getHeroByName';

export const SearchSreen = ({ history }) => {
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const [formValues, handleInputChange] = useForm({
		searchText: q,
	});
	const { searchText } = formValues;

	const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`);
	};

	return (
		<div>
			<h1>Search Screen</h1>
			<hr />

			<div className="row">
				<div className="col-4">
					<h4>SearchForm</h4>
					<hr />
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="Find your hero"
							className="form-control"
							name="searchText"
							value={searchText}
							onChange={handleInputChange}
							autoComplete="off"
						/>
						<button className="btn form-control btn-outline-primary mt-2" type="submit">
							Search
						</button>
					</form>
				</div>
				<div className="col-8">
					<h4>Results</h4>
					<hr />
					{q === '' && <div className="alert alert-info">Search a hero</div>}
					{q.length > 0 && heroesFiltered.length === 0 && <div className="alert alert-danger">Hero Dont exits</div>}
					{heroesFiltered && heroesFiltered.map((heroe) => <HeroeCard {...heroe} key={heroe.id} />)}
				</div>
			</div>
		</div>
	);
};
