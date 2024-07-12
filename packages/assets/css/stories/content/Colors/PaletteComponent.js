import React, { Fragment } from "react"
import { Section, Row, Col, Card } from "@wpmudev/sui-docs"

// Build "palettes" component.
const Palettes = ({ arrays = [], colors, name, wrapper }) => {
	const printArrays = arrays.map((arr, index) => {
		const hasIntro = !isUndefined(arr.intro) ? true : false
		const hasTitle = !isUndefined(arr.title) ? true : false
		const hasDescription = !isUndefined(arr.description) ? true : false
		const hasWrapper = hasIntro || hasTitle || hasDescription ? true : false
		const hasPalette = !isUndefined(arr.palette) ? true : false
		const hasType = !isUndefined(arr.type) ? true : false

		return (
			<BuildSections
				key={index}
				{...(hasWrapper && { wrapper: true })}
				{...(hasIntro && { intro: arr.intro })}
				{...(hasTitle && { title: arr.title })}
				{...(hasDescription && { description: arr.description })}
				{...(hasPalette && { palette: arr.palette })}
				{...(hasType && { type: arr.type })}
				data={arr.colors}
			/>
		)
	})

	const objColors = Object.assign({}, colors)

	return (
		<Fragment>
			{/** Print array data */}
			{arrays.length > 0 && printArrays}

			{/** Variant Colors */}
			{Object.keys(objColors).length > 0 && (
				<BuildSections
					data={objColors}
					{...(!isUndefined(name) && { palette: name })}
					{...(!isUndefined(wrapper) && { wrapper })}
				/>
			)}
		</Fragment>
	)
}

// Build "sections" component.
const BuildSections = ({
	wrapper,
	intro,
	title,
	description,
	data,
	palette,
	type,
}) => {
	const rows = (
		<BuildRows
			data={data}
			{...(!isUndefined(palette) && { palette })}
			{...(!isUndefined(type) && { type })}
		/>
	)

	if (true === wrapper) {
		return (
			<Section style={{ paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>
				{(!isUndefined(intro) ||
					!isUndefined(title) ||
					!isUndefined(description)) && (
					<div className="csb-section__contained" style={{ marginBottom: 20 }}>
						{!isUndefined(intro) && intro}

						{!isUndefined(title) && (
							<h2 className="csb-section__title">{title}</h2>
						)}

						{!isUndefined(description) && description}
					</div>
				)}

				{rows}
			</Section>
		)
	}

	return rows
}

// Build "rows builder" component.
const BuildRows = ({ data, palette, type = "none" }) => {
	const colsLimit = 3
	const contents = Object.keys(data)
		.map((key, index) => {
			let setTheme = key < 40 ? "light" : "dark"
			let setPrefix = key === 50 ? "Base" : key < 40 ? "Light" : "Dark"

			switch (key) {
				case "white":
				case "transparent": {
					setTheme = "light"
					setPrefix = ""
					break
				}
				case "black": {
					setTheme = "dark"
					setPrefix = ""
					break
				}
			}

			return (
				<Col key={index} size="2">
					<Card.Color
						theme={setTheme}
						content={{
							palette,
							shade: "alpha" === type ? `a${key}` : key,
							prefix: setPrefix,
							hex: data[key],
						}}
						overWhite={true}
					/>
				</Col>
			)
		})
		.reduce((row, column, index) => {
			index % colsLimit === 0 && row.push([])
			row[row.length - 1].push(column)

			return row
		}, [])
		.map((rowContent, index) => {
			return <Row key={`row-${index}`}>{rowContent}</Row>
		})

	return contents
}

// Check if element is undefined.
const isUndefined = (element, isNumber = false) => {
	const isValid = "undefined" !== typeof element
	const isNotEmpty = "" !== element

	if (element && isValid && isNotEmpty) {
		if (isNumber) {
			if (Number.isNaN(element)) {
				return false
			}
		} else {
			return false
		}
	}

	return true
}

// Publish required component(s).
export { Palettes }
