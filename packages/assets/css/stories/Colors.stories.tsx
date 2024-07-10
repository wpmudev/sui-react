import React from "react"

// Import documentation main page.
import docs from "./content/Colors/Main.mdx"

// Import required depdendencies.
import { Palettes } from "./content/Colors/Map"
import { Section, Row, Col, Card, Message } from "@wpmudev/sui-docs"

interface ColorProps {
	palette?: "primary" | "secondary" | "extended"
	secondary?:
		| "smush"
		| "hummingbird"
		| "smartcrawl"
		| "defender"
		| "forminator"
		| "hustle"
		| "beehive"
		| "branda"
		| "snapshot"
		| "dashboard"
		| "shipper"
		| "ivt"
		| "blc"
		| "hub"
	extended?: "neutral" | "success" | "warning" | "error"
	shade: number
	type?: "general" | "variant"
}

// Configure default options.
export default {
	title: "SUI/CSS Framework/Colors",
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Colors" story.
const Colors = ({ palette, secondary, extended, shade, type }: ColorProps) => {
	/**
	 * Semantic colors
	 * Get the list of colors available from the "Palettes" map.
	 */
	let mapColors
	if (palette === "primary") {
		mapColors = Palettes[palette]
	} else if (palette === "secondary") {
		mapColors = Palettes[secondary][type]
	} else {
		mapColors = Palettes[extended]
	}

	/**
	 * Colors by class name
	 * Get the required palette name for the color class.
	 */
	let setPalette
	if (palette === "primary") {
		setPalette = palette
	} else if (palette === "secondary") {
		setPalette = secondary
	} else {
		setPalette = extended
	}

	const codeStyles = {
		display: "block",
		padding: 18,
		borderRadius: 4,
		backgroundColor: "transparent",
		fontWeight: 400,
		fontSize: "13px",
		lineHeight: "24px",
		fontFamily: "monospace",
	}

	/**
	 * Colors information
	 * Get the required properties for the color card.
	 */
	const setTheme = shade > 60 ? "dark" : "light"
	let setPrefix
	if (shade === 50) {
		setPrefix = "Base"
	} else if (shade > 50) {
		setPrefix = "Dark"
	} else {
		setPrefix = "Light"
	}
	const setColor: string = mapColors[shade]
	const setClass = palette === "secondary" ? false : true
	const setVars = true
	let setVarName
	if (palette === "primary") {
		setVarName = setPalette
	} else if (palette === "secondary") {
		setVarName = `${palette}-${setPalette}-${type}`
	} else {
		setVarName = `${palette}-${setPalette}`
	}

	/**
	 * Statements
	 * Check if the selected shade exists.
	 */
	let doesShadeExists
	if (palette === "primary") {
		doesShadeExists = shade in Palettes[palette]
	} else if (palette === "secondary") {
		doesShadeExists = shade in Palettes[secondary][type]
	} else {
		doesShadeExists = shade in Palettes[extended]
	}

	if (!doesShadeExists) {
		return (
			<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
				<Message color="yellow" style={{ background: "#FFF" }}>
					<p>
						The selected shade doesn&apos;t exists on the{" "}
						<strong style={{ textTransform: "capitalize" }}>
							{setPalette}
						</strong>{" "}
						colors list.
					</p>
				</Message>
			</div>
		)
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<Section
				title="Semantic colors"
				style={{
					paddingTop: 0,
					paddingRight: 0,
					paddingLeft: 0,
				}}
			>
				<div
					style={{
						display: "flex",
						flexFlow: "row wrap",
						margin: "-5px",
					}}
				>
					{Object.keys(mapColors).map((key, index) => {
						return (
							<div key={index} style={{ padding: 5 }}>
								<div
									style={{
										padding: 10,
										borderRadius: 4,
										background: Number(key) < 30 ? "#141934" : "#FFF",
									}}
								>
									<span
										key={index}
										style={{
											width: 40,
											height: 40,
											display: "block",
											borderRadius: 40,
											backgroundColor: mapColors[key],
										}}
										aria-label={`${setPalette} palette, shade ${shade}`}
									/>

									<span
										style={{
											display: "block",
											marginTop: 5,
											color: Number(key) < 30 ? "#E9EAEE" : "#1A1A1A",
											fontSize: "12px",
											lineHeight: "24px",
											fontFamily: "monospace",
											textAlign: "center",
										}}
										aria-hidden="true"
									>
										{key}
									</span>
								</div>
							</div>
						)
					})}
				</div>
			</Section>
			{setClass && (
				<Section
					title="Colors by class name"
					style={{
						paddingTop: 0,
						paddingRight: 0,
						paddingLeft: 0,
					}}
				>
					<Row>
						<Col size="2">
							<p className="sui-overline" style={{ color: "#000" }}>
								Background color
							</p>
							<code
								style={{
									...codeStyles,
									backgroundColor: setColor,
									color: "light" === setTheme ? "#000" : "#FFF",
									textAlign: "center",
								}}
							>
								.sui-bg-{setPalette}--{shade}
							</code>
						</Col>
					</Row>

					<Row>
						<Col size="2">
							<p className="sui-overline" style={{ color: "#000" }}>
								Text color
							</p>
							<code
								style={{
									...codeStyles,
									padding: 0,
									color: setColor,
								}}
							>
								.sui-color-{setPalette}--{shade}
							</code>
						</Col>
					</Row>

					<Row>
						<Col size="2">
							<p className="sui-overline" style={{ color: "#000" }}>
								Border color
							</p>
							<code
								style={{
									...codeStyles,
									borderWidth: "3px",
									borderStyle: "solid",
									borderColor: setColor,
									textAlign: "center",
								}}
							>
								.sui-border-{setPalette}--{shade}
							</code>
						</Col>
					</Row>
				</Section>
			)}

			<Section
				title="Colors information"
				style={{
					paddingTop: 0,
					paddingRight: 0,
					paddingLeft: 0,
				}}
			>
				<Row>
					<Col size="2">
						<Card.Color
							theme={setTheme}
							content={
								{
									palette: setVarName,
									shade,
									prefix: setPrefix,
									hex: setColor,
									variables: setVars,
								} as any
							}
						/>
					</Col>
				</Row>
			</Section>
		</div>
	)
}
Colors.args = {
	palette: "primary",
	secondary: "smush",
	extended: "neutral",
	type: "general",
	shade: 50,
}
Colors.argTypes = {
	palette: {
		name: "Palette",
		options: ["primary", "secondary", "extended"],
		control: {
			type: "select",
			labels: {
				primary: "Primary",
				secondary: "Secondary",
				extended: "Extended",
			},
		},
	},
	secondary: {
		name: "Sub Palette",
		options: [
			"smush",
			"hummingbird",
			"smartcrawl",
			"defender",
			"forminator",
			"hustle",
			"beehive",
			"branda",
			"snapshot",
			"dashboard",
			"shipper",
			"ivt",
			"blc",
			"hub",
		],
		control: {
			type: "select",
			labels: {
				smush: "Smush",
				hummingbird: "Hummingbird",
				smartCrawl: "Smartcrawl",
				defender: "Defender",
				forminator: "Forminator",
				hustle: "Hustle",
				beehive: "Beehive",
				branda: "Branda",
				snapshot: "Snapshot",
				dashboard: "WPMU DEV Dashboard",
				shipper: "Shipper",
				ivt: "IVT",
				blc: "Broken Link Checker",
				hub: "Hub",
			},
		},
		if: {
			arg: "palette",
			eq: "secondary",
		},
	},
	extended: {
		name: "Sub Palette",
		options: ["neutral", "success", "warning", "error"],
		control: {
			type: "select",
			labels: {
				neutral: "Neutral",
				success: "Success",
				warning: "Warning",
				error: "Error",
			},
		},
		if: {
			arg: "palette",
			eq: "extended",
		},
	},
	type: {
		name: "Type",
		options: ["general", "variant"],
		control: {
			type: "inline-radio",
			labels: {
				general: "General",
				variant: "Variant",
			},
		},
		if: {
			arg: "palette",
			eq: "secondary",
		},
	},
	shade: {
		name: "Shade",
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 5,
		},
	},
}

// Publish required stories.
export { Colors }
