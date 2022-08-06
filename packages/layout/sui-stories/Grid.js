import React, { Children } from 'react';

export const Row = ({ stacked, children }) => {
	return (
		<div
			className={`sui-row${
				stacked && stacked === true
					? ' sui-row--stacked'
					: ' sui-row--inline'
			}`}
		>
			{children}
		</div>
	);
};

export const Col = ({ size, stacked, children }) => {
	return (
		<div
			className={`sui-col${
				size && size !== '' ? ' sui-col--' + size : ''
			}${
				stacked && stacked === true
					? ' sui-col--stacked-spacing'
					: ' sui-col--inline-spacing'
			}`}
		>
			{children}
		</div>
	);
};

export const Grid = ({ stacked, children }) => {
	const columns = Children.map(children, (child, index) => {
		return (
			<Col
				key={index}
				size={child.props.size}
				stacked={child.props.stacked}
			>
				{child.props.children}
			</Col>
		);
	});

	return <Row stacked={stacked}>{columns}</Row>;
};

export const GridSample = ({ size }) => {
	let numbColumns = 12;
	let printColumns = [];

	if (size && size !== '') {
		numbColumns = 12 / size;
	}

	if (Number.isInteger(numbColumns)) {
		for (let i = 0; i < numbColumns; i++) {
			printColumns.push(
				<div key={i} size={size}>
					<BlockSample>.sui-col--{size}</BlockSample>
				</div>
			);
		}
	} else {
		printColumns.push(
			<div size={size}>
				<BlockSample>.sui-col--{size}</BlockSample>
			</div>
		);

		printColumns.push(
			<div size={12 - size}>
				<BlockSample color="blue">.sui-col--{12 - size}</BlockSample>
			</div>
		);
	}

	return <Grid>{printColumns}</Grid>;
};

const BlockSample = ({ color, children }) => {
	const decorator = {
		minHeight: 60,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 5,
		borderRadius: 4 + 'px',
		fontSize: 10 + 'px',
		lineHeight: 16 + 'px',
		fontFamily: 'Menlo, Courier, monospace',
		fontWeight: 'bold',
	};

	switch (color) {
		case 'blue':
			decorator.background = '#e1eaff';
			decorator.color = '#0056b1';
			break;

		default:
			decorator.background = '#f9e1ff';
			decorator.color = '#8d00b1';
			break;
	}

	return <div style={decorator}>{children}</div>;
};
