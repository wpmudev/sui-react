import React from 'react';
import docs from './Colors.mdx';

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

const getValidShade = (name, shade) => {
	let valid;

	switch (name) {
		case 'primary':
		case 'success':
		case 'error':
		case 'warning':
			switch (shade) {
				case 10:
				case 30:
				case 50:
				case 70:
				case 90:
					valid = true;
					break;

				default:
					valid = false;
					break;
			}
			break;

		case 'neutral':
			switch (shade) {
				case 10:
				case 50:
				case 60:
				case 70:
				case 80:
				case 90:
				case 95:
				case 100:
					valid = true;
					break;

				default:
					valid = false;
					break;
			}
			break;

		default:
			valid = false;
			break;
	}

	return valid;
};

const Tag = ({ status, text }) => {
	const tagColor = `sui-color-${status}--90`;
	const tagBg = `sui-bg-${status}--50`;
	const tagStyles = {
		verticalAlign: 'middle',
		padding: '5px 15px',
		borderRadius: '20px',
		fontSize: '12px',
		fontWeight: 500,
		lineHeight: '14px',
	};

	return (
		<span className={tagColor + ' ' + tagBg} style={tagStyles}>
			{text}
		</span>
	);
};

export const Colors = ({ palette, colorShade, backgroundShade }) => {
	const backgroundName = palette;
	const hasBackground =
		backgroundName && '' !== backgroundName ? true : false;
	const getBackground = hasBackground
		? backgroundName + '--' + backgroundShade
		: '';
	const classBackground = hasBackground ? 'sui-bg-' + getBackground : '';
	const validBackground = getValidShade(backgroundName, backgroundShade);

	const colorName = palette;
	const hasColor = colorName && '' !== colorName ? true : false;
	const getColor = hasColor ? colorName + '--' + colorShade : '';
	const classColor = hasColor ? 'sui-color-' + getColor : '';
	const validColor = getValidShade(colorName, colorShade);

	const boxStyles = {
		height: 60,
		display: 'flex',
		alignItems: 'center',
		padding: '5px 30px',
		borderRadius: 4,
	};

	const listStyles = {
		display: 'flex',
		flexWrap: 'wrap',
		background: '#fff',
		border: '1px solid #333',
	};

	const listColStyles = {
		width: 50 + '%',
		flex: '0 0 auto',
		margin: 0,
		padding: '8px 20px',
		borderBottom: '1px solid #333',
		fontSize: '14px',
		lineHeight: '24px',
	};

	const listColLastStyles = {
		...listColStyles,
		borderBottom: 0,
	};

	return (
		<div className="sui-layout sui-layout--spacing sui-layout--justify">
			<div className="sui-layout__content">
				<div
					{...(hasBackground && { className: classBackground })}
					style={boxStyles}
				>
					<span
						className={`sui-overline${
							hasColor && ' ' + classColor
						}`}
					>
						The quick brown fox jumps over a lazy dog.
					</span>
				</div>
				<div style={{ maxWidth: 600, marginTop: 30 }}>
					<p>
						Edit the controls below and create the proper class
						name. When the palette with the shade combination
						doesn't return a valid match for the class name, hence
						it doesn't exist in the stylesheet, you will see a red
						tag with the "invalid" text.
					</p>
					<dl style={listStyles}>
						<dt style={listColStyles}>Background Class</dt>
						<dd style={listColStyles}>
							{validBackground ? (
								<Tag
									status="primary"
									text={`.${classBackground}`}
								/>
							) : (
								<Tag
									status="error"
									text={`Shade ${backgroundShade} doesn't exist.`}
								/>
							)}
						</dd>
						<dt style={listColLastStyles}>Text Color Class</dt>
						<dd style={listColLastStyles}>
							{validColor ? (
								<Tag status="primary" text={`.${classColor}`} />
							) : (
								<Tag
									status="error"
									text={`Shade ${colorShade} doesn't exist.`}
								/>
							)}
						</dd>
					</dl>
				</div>
			</div>
		</div>
	);
};
Colors.args = {
	palette: 'primary',
	backgroundShade: 50,
	colorShade: 90,
};
Colors.argTypes = {
	palette: {
		name: 'Palette',
		control: {
			type: 'select',
			options: {
				Primary: 'primary',
				Neutral: 'neutral',
				Success: 'success',
				Warning: 'warning',
				Error: 'error',
			},
		},
	},
	backgroundShade: {
		name: 'Background Shade',
		control: {
			type: 'range',
			min: 10,
			max: 100,
			step: 5,
		},
	},
	colorShade: {
		name: 'Color Shade',
		control: {
			type: 'range',
			min: 10,
			max: 100,
			step: 5,
		},
	},
};
