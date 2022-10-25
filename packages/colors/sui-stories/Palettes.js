import React, { Fragment } from "react";

import { Section } from '@wpmudev/docs-section';
import { Row, Col } from '@wpmudev/docs-grid';
import { Card } from '@wpmudev/docs-card';

// Build "palettes" component.
const Palettes = ({ general, variant, arrays = [], colors, wrapper, intro, title, description, scss }) => {
	const hasIntro = !isUndefined( intro ) ? true : false;
	const hasTitle = !isUndefined( title ) ? true : false;
	const hasDescription = !isUndefined( description ) ? true : false;
	const hasWrapper = hasIntro || hasTitle || hasDescription ? true : false;
	const hasScss = !isUndefined( scss ) ? true : false;

	const objGeneral = Object.assign(
		{},
		general
	);

	const objVariant = Object.assign(
		{},
		variant
	);

	const printArrays = arrays.map( ( arr, index ) => {
		const hasIntro = !isUndefined( arr.intro ) ? true : false;
		const hasTitle = !isUndefined( arr.title ) ? true : false;
		const hasDescription = !isUndefined( arr.description ) ? true : false;
		const hasWrapper = hasIntro || hasTitle || hasDescription ? true : false;
		const hasScss = !isUndefined( arr.scss ) ? true : false;

		return (
			<BuildSections
				key={ index }
				{ ... ( hasWrapper && { wrapper: true } ) }
				{ ... ( hasIntro && { intro: arr.intro } ) }
				{ ... ( hasTitle && { title: arr.title } ) }
				{ ... ( hasDescription && { description: arr.description } ) }
				data={ arr.colors }
				{ ... ( hasScss && { scss: arr.scss } ) } />
		);
	});

	const objColors = Object.assign(
		{},
		colors
	);

	return (
		<Fragment>
			{/** General Colors */}
			{ Object.keys( objGeneral ).length > 0 && (
				<BuildSections
					title="General Colors"
					data={ objGeneral }
					{ ... ( hasWrapper && { wrapper: true } ) }
					{ ... ( hasIntro && { intro: intro } ) }
					{ ... ( hasTitle && { title: title } ) }
					{ ... ( hasDescription && { description: description } ) }
					{ ... ( hasScss && { scss: scss } ) }
				/>
			)}

			{/** Variant Colors */}
			{ Object.keys( objVariant ).length > 0 && (
				<BuildSections
					title="Variant Colors"
					data={ objVariant }
					{ ... !isUndefined( wrapper ) && { wrapper: wrapper } }
					{ ... !isUndefined( scss ) && { scss: scss } }
				/>
			)}

			{/** Print array data */}
			{ ( arrays.length > 0 ) && printArrays }

			{/** Variant Colors */}
			{ Object.keys( objColors ).length > 0 && (
				<BuildSections
					data={ objColors }
					{ ... !isUndefined( wrapper ) && { wrapper: wrapper } }
					{ ... !isUndefined( scss ) && { scss: scss } }
				/>
			)}
		</Fragment>
	);
}

// Build "sections" component.
const BuildSections = ({ wrapper, intro, title, description, data, scss }) => {
	const rows = <BuildRows data={ data } { ... ( !isUndefined( scss ) && { scss: scss } ) } />;

	if ( true === wrapper ) {
		return (
			<Section style={{ paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>
				{ ( !isUndefined( intro ) || !isUndefined( title ) || !isUndefined( description ) ) && (
					<div className="csb-section__contained" style={{ marginBottom: 20 }}>
						{ !isUndefined( intro ) && intro }

						{ !isUndefined( title ) && (
							<h2 className="csb-section__title">
								{ title }
							</h2>
						)}

						{ !isUndefined( description ) && description }
					</div>
				)}

				{ rows }
			</Section>
		);
	}

	return rows;
}

// Build "rows builder" component.
const BuildRows = ({ data, scss }) => {
	const colsLimit = 3;

	const contents = Object.keys( data ).map( ( key, index ) => {
		const setTheme = key > 60 ? 'light' : 'dark';
		const setPrefix = key === 50 ? 'Base' : key > 60 ? 'Light' : 'Dark';

		return (
			<Col key={ index } size="2">
				<Card.Color
					theme={ setTheme }
					content={{
						shade: key,
						prefix: setPrefix,
						hex: data[key],
						variables: !isUndefined( scss ) ? scss : false,
					}}
					overWhite={ true } />
			</Col>
		);
	}).reduce( ( row, column, index ) => {
		index % colsLimit === 0 && row.push([]);
		row[row.length - 1].push( column );

		return row;
	}, []).map( ( rowContent, index ) => {
		return (
			<Row key={`row-${ index }`}>
				{ rowContent }
			</Row>
		);
	} );

	return contents;
}

// Check if element is undefined.
const isUndefined = (element, isNumber = false) => {
	const isValid = 'undefined' !== typeof element;
	const isNotEmpty = '' !== element;

	if ( element && isValid && isNotEmpty ) {
		if ( isNumber ) {
			if ( Number.isNaN(element) ) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}

// Publish required component(s).
export { Palettes }
