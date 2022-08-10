import React, { Children } from 'react';

export const Row = ({
	alignXS,
	alignSM,
	alignMD,
	alignLG,
	alignXL,
	children,
}) => {
	let xs, sm, md, lg, xl;

	switch (alignXS) {
		case 'inline':
			xs = ' sui-row--inline';
			break;

		default:
			xs = '';
			break;
	}

	switch (alignSM) {
		case 'inline':
		case 'stacked':
			sm = ' sui-row-sm--' + alignSM;
			break;

		default:
			sm = '';
			break;
	}

	switch (alignMD) {
		case 'inline':
		case 'stacked':
			md = ' sui-row-md--' + alignMD;
			break;

		default:
			md = '';
			break;
	}

	switch (alignLG) {
		case 'inline':
		case 'stacked':
			lg = ' sui-row-lg--' + alignLG;
			break;

		default:
			lg = '';
			break;
	}

	switch (alignXL) {
		case 'inline':
		case 'stacked':
			xl = ' sui-row-xl--' + alignXL;
			break;

		default:
			xl = '';
			break;
	}

	return <div className={`sui-row${xs}${sm}${md}${lg}${xl}`}>{children}</div>;
};

export const Col = ({ size, children }) => {
	return (
		<div
			className={`sui-col${
				size && size !== '' ? ' sui-col--' + size : ''
			}`}
		>
			{children}
		</div>
	);
};

export const Grid = ({
	alignXS,
	alignSM,
	alignMD,
	alignLG,
	alignXL,
	children,
}) => {
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

	return (
		<Row
			alignXS={alignXS}
			alignSM={alignSM}
			alignMD={alignMD}
			alignLG={alignLG}
			alignXL={alignXL}
		>
			{columns}
		</Row>
	);
};

export const GridSample = ({
	size,
	border,
	alignXS,
	alignSM,
	alignMD,
	alignLG,
	alignXL,
}) => {
	let numbColumns = 12;
	let printColumns = [];

	if (size && size !== '') {
		numbColumns = 12 / size;
	}

	if (Number.isInteger(numbColumns)) {
		for (let i = 0; i < numbColumns; i++) {
			printColumns.push(
				<div key={i} size={size}>
					<BlockSample border={border}>.sui-col--{size}</BlockSample>
				</div>
			);
		}
	} else {
		printColumns.push(
			<div size={size}>
				<BlockSample border={border}>.sui-col--{size}</BlockSample>
			</div>
		);

		printColumns.push(
			<div size={12 - size}>
				<BlockSample color="blue" border={border}>
					.sui-col--{12 - size}
				</BlockSample>
			</div>
		);
	}

	return (
		<Grid
			alignXS={alignXS}
			alignSM={alignSM}
			alignMD={alignMD}
			alignLG={alignLG}
			alignXL={alignXL}
		>
			{printColumns}
		</Grid>
	);
};

export const BlockSample = ({ parent, color, border, children }) => {
	const decorator = {
		minHeight: 60,
		overflow: 'hidden',
		borderRadius: 4 + 'px',
		fontSize: 10 + 'px',
		lineHeight: 16 + 'px',
		fontFamily: 'Menlo, Courier, monospace',
		fontWeight: 'bold',
	};

	if (parent && parent === true) {
		decorator.padding = '15px 10px';
	} else {
		decorator.display = 'flex';
		decorator.alignItems = 'center';
		decorator.justifyContent = 'center';
		decorator.padding = 5;
	}

	switch (color) {
		case 'blue':
			decorator.background = '#e1eaff';
			decorator.color = '#0056b1';

			if (border && border === true) {
				decorator.border = '1px solid #0056b1';
			}
			break;

		default:
			decorator.background = '#f9e1ff';
			decorator.color = '#8d00b1';

			if (border && border === true) {
				decorator.border = '1px solid #8d00b1';
			}
			break;
	}

	return <div style={decorator}>{children}</div>;
};
