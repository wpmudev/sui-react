import React from 'react';
import docs from './Colors.mdx';
import { Palettes } from './Colors.map';

import '../src/colors.scss';

export default {
	title: 'SUI/CSS Framework/Colors',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

const Colors = ({ palette, secondary, subpalette, extended, shade }) => {
	let getPalette, getShade, showAllPalettes, colorName, colorHex, colorHsl;

	switch (palette) {
		case 'secondary':
			if ('all' === subpalette) {
				getPalette = secondary + 'General';
				showAllPalettes = true;
			} else {
				getPalette = secondary + subpalette;
			}
			break;

		case 'extended':
			getPalette = extended;
			break;

		default:
			getPalette = palette;
			showAllPalettes = false;
			break;
	}

	switch (shade) {
		case 10:
		case 20:
		case 30:
		case 40:
			colorName = 'Dark / ' + shade;
			break;

		case 50:
			colorName = 'Base / ' + shade;
			break;

		default:
			colorName = 'Light / ' + shade;
			break;
	}

	if (!isUndefined(Palettes[getPalette][shade])) {
		getShade = Palettes[getPalette][shade];
		colorHex = getShade.hex;
		colorHsl = getShade.hsl;

		return (
			<>
				<CardStyles />

				<div className="sui-layout sui-layout--spacing sui-layout--justify">
					<div className="sui-layout__content">
						{/** Iterate all shades in palette */}
						<div className="sui-row sui-row--inline">
							<div className="sui-col">
								<Shades>
									{Object.keys(Palettes[getPalette]).map(
										(key) => {
											return (
												<div
													key={key}
													label={key}
													hex={
														Palettes[getPalette][
															key
														].hex
													}
												/>
											);
										}
									)}
								</Shades>
							</div>
						</div>
						{showAllPalettes && (
							<div className="sui-row sui-row--inline">
								<div className="sui-col">
									<Shades>
										{Object.keys(
											Palettes[secondary + 'Variant']
										).map((key) => {
											return (
												<div
													key={key}
													label={key}
													hex={
														Palettes[
															secondary +
																'Variant'
														][key].hex
													}
												/>
											);
										})}
									</Shades>
								</div>
							</div>
						)}

						{/** Show selected shade from palette */}
						<div className="sui-row sui-row-md--inline">
							<div className="sui-col sui-col--4">
								<Card
									title={colorName}
									{...(!isUndefined(Palettes[getPalette]) && {
										palette: getPalette,
									})}
									{...('secondary' !== palette && {
										shade: shade,
									})}
									hex={colorHex}
									hsl={colorHsl}
								/>
							</div>
							{'secondary' !== palette && (
								<div className="sui-col sui-col--4">
									{/** Show selected background */}
									<h4
										className="sui-overline"
										style={{ marginTop: 0 }}
									>
										Background Color
									</h4>
									<div
										className={`sui-bg-${
											'extended' === palette
												? extended
												: palette
										}--${shade}`}
										style={{
											height: 50,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'center',
											borderRadius: 4,
										}}
									>
										<p
											style={{
												flex: '0 0 auto',
												color:
													shade > 50
														? '#000'
														: '#fff',
											}}
										>
											.sui-bg-
											{'extended' === palette
												? extended
												: palette}
											--{shade}
										</p>
									</div>

									{/** Show selected text color */}
									<h4
										className="sui-overline"
										style={{ marginTop: 30 }}
									>
										Text Color
									</h4>
									<p
										className={`sui-color-${
											'extended' === palette
												? extended
												: palette
										}--${shade}`}
									>
										.sui-color-
										{'extended' === palette
											? extended
											: palette}
										--{shade}
									</p>
								</div>
							)}
							{showAllPalettes && (
								<div className="sui-col sui-col--4">
									<Card
										title={colorName}
										hex={
											Palettes[secondary + 'Variant'][
												shade
											].hex
										}
										hsl={
											Palettes[secondary + 'Variant'][
												shade
											].hsl
										}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</>
		);
	}

	return <p>Unexistent palette and/or shade.</p>;
};
Colors.args = {
	palette: 'primary',
	secondary: 'smush',
	subpalette: 'General',
	extended: 'neutral',
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
		name: 'Product',
		control: {
			type: 'select',
			options: {
				Smush: 'smush',
				Hummingbird: 'hummingbird',
				SmartCrawl: 'smartcrawl',
				Defender: 'defender',
				Forminator: 'forminator',
				Branda: 'branda',
				Beehive: 'beehive',
				Snapshot: 'snapshot',
				Hustle: 'hustle',
			},
		},
		if: {
			arg: 'palette',
			eq: 'secondary',
		},
	},
	subpalette: {
		name: 'Type',
		control: {
			type: 'inline-radio',
			options: {
				All: 'all',
				General: 'General',
				Variant: 'Variant',
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
	shade: {
		name: 'Color Shade',
		control: {
			type: 'range',
			min: 10,
			max: 100,
			step: 5,
		},
	},
};

const isUndefined = (element) => {
	if (element && 'undefined' !== typeof element && '' !== element) {
		return false;
	}

	return true;
};

const Card = ({ title, palette, shade, hex, hsl }) => {
	return (
		<div className="csb-card">
			{!isUndefined(hex) && (
				<div className="csb-card__color" style={{ background: hex }}>
					{!isUndefined(title) && <span>{title}</span>}
				</div>
			)}

			<div className="csb-card__info">
				{!isUndefined(palette) && !isUndefined(shade) && (
					<>
						<div className="sui-row sui-row--inline">
							<div className="sui-col">
								<h5>SCSS Variable</h5>
								<p>
									$sui-color-{palette}--{shade}
								</p>
							</div>
						</div>

						<div className="sui-row sui-row--inline">
							<div className="sui-col">
								<h5>Class Names</h5>
								<code>
									.sui-bg-{palette}--{shade}
								</code>
								<code>
									.sui-color-{palette}--{shade}
								</code>
							</div>
						</div>
					</>
				)}

				{(!isUndefined(hex) || !isUndefined(hsl)) && (
					<div className="sui-row sui-row-md--inline">
						{!isUndefined(hex) && (
							<div
								className={`sui-col${
									!isUndefined(hex) && !isUndefined(hsl)
										? ' sui-col-md--6'
										: ''
								}`}
							>
								<h5>HEX</h5>
								<p>{hex}</p>
							</div>
						)}

						{!isUndefined(hsl) && (
							<div
								className={`sui-col${
									!isUndefined(hex) && !isUndefined(hsl)
										? ' sui-col-md--6'
										: ''
								}`}
							>
								<h5>HSL</h5>
								<p>{hsl}</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

const CardStyles = () => {
	return (
		<style>
			{`
					.csb-card {
						overflow: hidden;
						border-radius: 4px;
						background: #fff;
					}

					.csb-card__color {
						height: 120px;
						position: relative;
					}

					.csb-card__color span {
						display: block;
						position: absolute;
						right: 30px;
						bottom: 30px;
						left: 30px;
						color: #fff;
						font-size: 12px;
						line-height: 20px;
						font-weight: 600;
						text-transform: uppercase;
					}

					.csb-card__info {
						padding: 30px;
					}

					.csb-card__info h5,
					.csb-card__info p {
						color: #505050;
						line-height: 20px;
					}

					.csb-card__info h5 {
						margin: 0 0 5px;
						font-size: 12px;
						font-weight: 600;
						text-transform: uppercase;
					}

					.csb-card__info p {
						margin: 0;
						font-size: 14px;
					}

					.csb-card__info code {
						display: block;
						margin: 5px 0;
						padding: 5px 10px;
						border-radius: 2px;
						-moz-border-radius: 2px;
						-webkit-border-radius: 2px;
						font-size: 11px;
						font-family: monospace;
					}
				`}
		</style>
	);
};

const Shades = ({ children }) => {
	const shadesStyles = {
		display: 'flex',
		margin: '-10px',
	};

	const bullets = React.Children.map(children, (bullet, index) => {
		const wrapperStyle = {
			flex: '0 0 auto',
			padding: 10,
		};

		const bulletStyle = {
			width: 40,
			height: 40,
			borderRadius: '100%',
			background: '#fff',
		};

		if (
			bullet.props.hex &&
			'undefined' !== typeof bullet.props.hex &&
			'' !== bullet.props.hex
		) {
			bulletStyle.background = bullet.props.hex;
		}

		return (
			<div key={index} style={wrapperStyle}>
				<div style={bulletStyle} />
				{!isUndefined(bullet.props.label) && (
					<p style={{ margin: '5px 0 0', fontSize: '12px', fontFamily: 'monospace', textAlign: 'center' }}>
						{bullet.props.label}
					</p>
				)}
			</div>
		);
	});

	return <div style={shadesStyles}>{bullets}</div>;
};

export { Colors };
