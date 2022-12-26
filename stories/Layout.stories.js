import React from 'react';

// Import documentation main page.
import docs from './content/Layout/Main.mdx';

// Import required styles.
import "../src/_core/_layout.scss";

// Configure default options.
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

// Build "Layout" story.
const Layout = ({ fullwidth, vertical, horizontal }) => {
	const barSettings = {
		fullwidth: fullwidth,
		vertical: vertical,
		horizontal: horizontal,
	};

	return <TopBar settings={barSettings} />;
};
Layout.args = {
	fullwidth: false,
	vertical: false,
	horizontal: false,
};
Layout.argTypes = {
	fullwidth: {
		name: 'Full Width',
		control: {
			type: 'boolean',
		},
	},
	vertical: {
		name: 'Vertical Spacing',
		control: {
			type: 'boolean',
		},
	},
	horizontal: {
		name: 'Horizontal Spacing',
		control: {
			type: 'boolean',
		},
	},
};

// Build "Box" component.
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

// Build "Box Wrapper" component.
const BoxWrapper = ({ children }) => {
	const boxStyles = {
		padding: '0 32px',
	};

	return <div style={boxStyles}>{children}</div>;
};

// Build "Logo" component.
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

// Build "Top Bar" component.
const TopBar = ({ settings }) => {
	const barSettings = Object.assign(
		{
			fullwidth: false,
			vertical: false,
			horizontal: false,
		},
		settings
	);

	const vSpacing = barSettings.vertical ? ' sui-layout--vertical' : '';
	const hSpacing = barSettings.horizontal ? ' sui-layout--horizontal' : '';

	return (
		<div className={`sui-layout${vSpacing}${hSpacing}`}>
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

// Publish required stories.
export { Layout };
