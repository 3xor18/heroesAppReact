import React from 'react';
import { HeroresList } from '../herores/HeroresList';

export const MarvelScreen = () => {
	const publisher = 'Marvel Comics';
	return (
		<div>
			<h1>Marvel Comics</h1>
			<hr />
			<HeroresList publisher={publisher} />
		</div>
	);
};
