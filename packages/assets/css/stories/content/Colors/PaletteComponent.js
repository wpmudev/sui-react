import React, { Fragment } from 'react';
import { Section, Row, Col, Card } from '@wpmudev/storybook';

// Build "palettes" component.
const Palettes = ({ arrays = [], colors, name, wrapper }) => {
	const printArrays = arrays.map((arr, index) => {
		const hasIntro = !isUndefined(arr.intro) ? true : false;
		const hasTitle = !isUndefined(arr.title) ? true : false;
		const hasDescription = !isUndefined(arr.description) ? true : false;
		const hasWrapper =
			hasIntro || hasTitle || hasDescription ? true : false;
		const hasPalette = !isUndefined(arr.palette) ? true : false;

		return (
			<BuildSections
				key={index}
				{...(hasWrapper && { wrapper: true })}
				{...(hasIntro && { intro: arr.intro })}
				{...(hasTitle && { title: arr.title })}
				{...(hasDescription && { description: arr.description })}
				{...(hasPalette && { palette: arr.palette })}
				data={arr.colors}
			/>
		);
	});

	const objColors = Object.assign({}, colors);

	return (
		<Fragment>
			{/** Print array data */}
			{arrays.length > 0 && printArrays}

			{/** Variant Colors */}
			{Object.keys(objColors).length > 0 && (
				<BuildSections
					data={objColors}
					{...(!isUndefined(name) && { palette: name })}
					{...(!isUndefined(wrapper) && { wrapper: wrapper })}
				/>
			)}
		</Fragment>
	);
};

// Build "sections" component.
const BuildSections = ({
	wrapper,
	intro,
	title,
	description,
	data,
	palette,
}) => {
	const rows = (
		<BuildRows
			data={data}
			{...(!isUndefined(palette) && { palette: palette })}
		/>
	);

	if (true === wrapper) {
		return (
			<Section
				style={{ paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}
			>
				{(!isUndefined(intro) ||
					!isUndefined(title) ||
					!isUndefined(description)) && (
					<div
						className="csb-section__contained"
						style={{ marginBottom: 20 }}
					>
						{!isUndefined(intro) && intro}

						{!isUndefined(title) && (
							<h2 className="csb-section__title">{title}</h2>
						)}

						{!isUndefined(description) && description}
					</div>
				)}

				{rows}
			</Section>
		);
	}

	return rows;
};

// Build "rows builder" component.
const BuildRows = ({ data, palette }) => {
	const colsLimit = 3;

	const contents = Object.keys(data)
		.map((key, index) => {
			const setTheme = key > 60 ? 'light' : 'dark';
			const setPrefix = key === 50 ? 'Base' : key > 60 ? 'Light' : 'Dark';

			return (
				<Col key={index} size="2">
					<Card.Color
						theme={setTheme}
						content={{
							palette: palette,
							shade: key,
							prefix: setPrefix,
							hex: data[key],
						}}
						overWhite={true}
					/>
				</Col>
			);
		})
		.reduce((row, column, index) => {
			index % colsLimit === 0 && row.push([]);
			row[row.length - 1].push(column);

			return row;
		}, [])
		.map((rowContent, index) => {
			return <Row key={`row-${index}`}>{rowContent}</Row>;
		});

	return contents;
};

// Check if element is undefined.
const isUndefined = (element, isNumber = false) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;

	if (element && isValid && isNotEmpty) {
		if (isNumber) {
			if (Number.isNaN(element)) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
};

// Publish required component(s).
export { Palettes };
