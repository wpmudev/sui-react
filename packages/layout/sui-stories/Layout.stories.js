import React from 'react';
import docs from './Layout.mdx';

import '../src/layout.scss';

export default {
	title: 'SUI/CSS Framework/Layout',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
		interactions: {
			disabled: true,
		},
	},
};

const Layout = ({ fullwidth, justify, spacing }) => {
	const barSettings = {
		fullwidth: fullwidth,
		justify: justify,
		spacing: spacing,
	};

	return <TopBar settings={barSettings} />;
};
Layout.args = {
	fullwidth: false,
	justify: false,
	spacing: false,
};
Layout.argTypes = {
	fullwidth: {
		name: 'Full Width',
		control: {
			type: 'boolean',
		},
	},
	justify: {
		name: 'Top Spacing',
		control: {
			type: 'boolean',
		},
	},
	spacing: {
		name: 'Sides Spacing',
		control: {
			type: 'boolean',
		},
	},
};

const Box = ({ top, children }) => {
	const boxStyles = {
		background: '#FFF',
	};

	if (top) {
		boxStyles.padding = '16px 0';
	} else {
		boxStyles.padding = 30;
		boxStyles.borderRadius = 4;
	}

	return <div style={boxStyles}>{children}</div>;
};

const BoxWrapper = ({ children }) => {
	const boxStyles = {
		padding: '0 32px',
	};

	return <div style={boxStyles}>{children}</div>;
};

const Logo = () => {
	const logoStyles = {
		width: 48,
		height: 48,
		display: 'flex',
		flexFlow: 'row wrap',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 16,
		background: '#2DC4E0',
		color: '#FFF',
		fontSize: 22,
		lineHeight: 1,
		fontWeight: 700,
		textAlign: 'center',
	};

	return <div style={logoStyles}>L</div>;
};

const TopBar = ({ settings }) => {
	const barSettings = Object.assign(
		{
			fullwidth: false,
			justify: false,
			spacing: false,
		},
		settings
	);

	const isJustify = barSettings.justify ? ' sui-layout--justify' : '';
	const hasSpacing = barSettings.spacing ? ' sui-layout--spacing' : '';

	return (
		<div className={`sui-layout${isJustify}${hasSpacing}`}>
			{barSettings.fullwidth ? (
				<div className="sui-layout__content">
					<Box top={true}>
						<BoxWrapper>
							<Logo />
						</BoxWrapper>
					</Box>
				</div>
			) : (
				<Box top={true}>
					<BoxWrapper>
						<Logo />
					</BoxWrapper>
				</Box>
			)}
		</div>
	);
};

// Publish the story.
export { Layout };
