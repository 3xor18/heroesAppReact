import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/hetHeroesByPublisher';
import { HeroeCard } from './HeroeCard';

export const HeroresList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
	return (
		<div className="row animate__animated animate__fadeIn">
			{heroes.map((heroe) => (
				<HeroeCard key={heroe.id} {...heroe} />
			))}
		</div>
	);
};
