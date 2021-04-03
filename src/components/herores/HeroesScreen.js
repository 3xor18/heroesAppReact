import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroesScreen = ({ history }) => {
	const { heroeId } = useParams();
	const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

	if (!hero) {
		return <Redirect to="/" />;
	}
	const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

	const handleClick = () => {
		if (history.length <= 2) history.push('/');
		history.goBack();
	};
	return (
		<div className="row mt-5 ">
			<div className="col-4">
				<img src={`../assets/heroes/${heroeId}.jpg`} alt="Hero" className="img-thumbnail animate__animated animate__fadeInLeft" />
			</div>
			<div className="col-8 animate__animated animate__fadeIn">
				<h3>{superhero}</h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b>AlterEgo:</b>
						{alter_ego}
					</li>
					<li className="list-group-item">
						<b>Publisher:</b>
						{publisher}
					</li>
					<li className="list-group-item">
						<b>First Appearance:</b>
						{first_appearance}
					</li>
				</ul>
				<h5>Charactes</h5>
				<p>{characters}</p>
				<button className="btn btn-warning" onClick={handleClick}>
					Regresar
				</button>
			</div>
		</div>
	);
};
