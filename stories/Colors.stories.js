import React from 'react';

// Import documentation main page.
import docs from './content/Colors/Main.mdx';

// Import required depdendencies.
import { Palettes } from './content/Colors/Map';
import { Section, Row, Col, Card, Message } from '@wpmudev/storybook';

// Import required styles.
import "../src/_core/_colors.scss";

// Configure default options.
export default {
	title: 'SUI/CSS Framework/Colors',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Colors" story.
const Colors = ({ palette, secondary, extended, shade, type }) => {
	/**
	 * Semantic colors
	 * Get the list of colors available from the "Palettes" map.
	 */
	const mapColors =
		palette === 'primary'
			? Palettes[palette]
			: palette === 'secondary'
			? Palettes[secondary][type]
			: Palettes[extended];

	/**
	 * Colors by class name
	 * Get the required palette name for the color class.
	 */
	const setPalette =
		palette === 'primary'
			? palette
			: palette === 'secondary'
			? secondary
			: extended;
	const codeStyles = {
		display: 'block',
		padding: 18,
		borderRadius: 4,
		backgroundColor: 'transparent',
		fontWeight: 400,
		fontSize: '13px',
		lineHeight: '24px',
		fontFamily: 'monospace',
	};

	/**
	 * Colors information
	 * Get the required properties for the color card.
	 */
	const setTheme = shade > 60 ? 'light' : 'dark';
	const setPrefix = shade === 50 ? 'Base' : shade > 50 ? 'Light' : 'Dark';
	const setColor = mapColors[shade];
	const setClass = palette === 'secondary' ? false : true;
	const setVars = true;
	const setVarName = 'primary' === setPalette
		? setPalette
		: 'secondary' === palette
			? `${palette}-${setPalette}-${type}`
			: `${palette}-${setPalette}`;

	/**
	 * Statements
	 * Check if the selected shade exists.
	 */
	const doesShadeExists =
		palette === 'primary'
			? shade in Palettes[palette]
			: palette === 'secondary'
			? shade in Palettes[secondary][type]
			: shade in Palettes[extended];

	if (!doesShadeExists) {
		return (
			<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
				<Message color="yellow" style={{ background: '#FFF' }}>
					<p>
						The selected shade doesn't exists on the{' '}
						<strong style={{ textTransform: 'capitalize' }}>
							{setPalette}
						</strong>{' '}
						colors list.
					</p>
				</Message>
			</div>
		);
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
						display: 'flex',
						flexFlow: 'row wrap',
						margin: '-5px',
					}}
				>
					{Object.keys(mapColors).map((key, index) => {
						return (
							<div key={ index } style={{ padding: 5 }}>
								<div
									style={{
										padding: 10,
										borderRadius: 4,
										background:
											key > 60 ? '#141934' : '#FFF',
									}}
								>
									<span
										key={index}
										style={{
											width: 40,
											height: 40,
											display: 'block',
											borderRadius: 40,
											backgroundColor: mapColors[key],
										}}
										aria-label={`${setPalette} palette, shade ${shade}`}
									/>

									<span
										style={{
											display: 'block',
											marginTop: 5,
											color:
												key > 60
													? '#E9EAEE'
													: '#1A1A1A',
											fontSize: '12px',
											lineHeight: '24px',
											fontFamily: 'monospace',
											textAlign: 'center',
										}}
										aria-hidden="true"
									>
										{key}
									</span>
								</div>
							</div>
						);
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
							<p
								className="sui-overline"
								style={{ color: '#000' }}
							>
								Background color
							</p>
							<code
								style={{
									...codeStyles,
									backgroundColor: setColor,
									color:
										'light' === setTheme ? '#000' : '#FFF',
									textAlign: 'center',
								}}
							>
								.sui-bg-{setPalette}--{shade}
							</code>
						</Col>
					</Row>

					<Row>
						<Col size="2">
							<p
								className="sui-overline"
								style={{ color: '#000' }}
							>
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
							<p
								className="sui-overline"
								style={{ color: '#000' }}
							>
								Border color
							</p>
							<code
								style={{
									...codeStyles,
									borderWidth: '3px',
									borderStyle: 'solid',
									borderColor: setColor,
									textAlign: 'center',
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
							content={{
								palette: setVarName,
								shade: shade,
								prefix: setPrefix,
								hex: setColor,
								variables: setVars,
							}}
						/>
					</Col>
				</Row>
			</Section>
		</div>
	);
};
Colors.args = {
	palette: 'primary',
	secondary: 'smush',
	extended: 'neutral',
	type: 'general',
	shade: 50,
};
Colors.argTypes = {
	palette: {
		name: 'Palette',
		control: {
			type: 'select',
			options: {
				Primary: 'primary',
				Secondary: 'secondary',
				Extended: 'extended',
			},
		},
	},
	secondary: {
		name: 'Sub Palette',
		control: {
			type: 'select',
			options: {
				Smush: 'smush',
				Hummingbird: 'hummingbird',
				SmartCrawl: 'smartcrawl',
				Defender: 'defender',
				Forminator: 'forminator',
				Hustle: 'hustle',
				Beehive: 'beehive',
				Branda: 'branda',
				Snapshot: 'snapshot',
				'WPMU DEV Dashboard': 'dashboard',
				Shipper: 'shipper',
				IVT: 'ivt',
				'Broken Link Checker': 'blc',
				Hub: 'hub',
			},
		},
		if: {
			arg: 'palette',
			eq: 'secondary',
		},
	},
	extended: {
		name: 'Sub Palette',
		control: {
			type: 'select',
			options: {
				Neutral: 'neutral',
				Success: 'success',
				Warning: 'warning',
				Error: 'error',
			},
		},
		if: {
			arg: 'palette',
			eq: 'extended',
		},
	},
	type: {
		name: 'Type',
		control: {
			type: 'inline-radio',
			options: {
				General: 'general',
				Variant: 'variant',
			},
		},
		if: {
			arg: 'palette',
			eq: 'secondary',
		},
	},
	shade: {
		name: 'Shade',
		control: {
			type: 'range',
			min: 10,
			max: 100,
			step: 5,
		},
	},
};

// Publish required stories.
export { Colors };
