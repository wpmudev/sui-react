import React from 'react';

import { Grid as SuiGrid } from './Grid';
import { Block } from './Block';

export const Grid = ({ size, alignment }) => {
	let numbColumns = 12;
	let printColumns = [];

	if ('undefined' !== typeof size && '' !== size) {
		numbColumns = 12 / size;
	}

	if (Number.isInteger(numbColumns)) {
		for (let i = 0; i < numbColumns; i++) {
			printColumns.push(
				<div key={i} size={size}>
					<Block>.sui-col--{size}</Block>
				</div>
			);
		}
	} else {
		printColumns.push(
			<div size={size}>
				<Block>.sui-col--{size}</Block>
			</div>
		);

		printColumns.push(
			<div size={12 - size}>
				<Block color="blue">.sui-col--{12 - size}</Block>
			</div>
		);
	}

	return <SuiGrid alignment={alignment}>{printColumns}</SuiGrid>;
};
