import React from 'react';
import { HeroresList } from '../herores/HeroresList';

export const DcScreen = () => {
	const publisher = 'DC Comics';
	return (
		<div>
			<h1>Dc Comics</h1>
			<hr />
			<HeroresList publisher={publisher} />
		</div>
	);
};
