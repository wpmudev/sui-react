import React, { Children } from 'react';

import { Row } from './Row';
import { Col } from './Col';

export const Grid = ({ alignment, children }) => {
	const columns = Children.map(children, (column, index) => {
		const hasSize =
			'undefined' !== typeof column.props.size &&
			'' !== column.props.size;

		return (
			<Col key={`col-${index}`} {...(hasSize && { size: column.props.size })}>
				{column.props.children}
			</Col>
		);
	});

	return <Row alignment={alignment}>{columns}</Row>;
};
