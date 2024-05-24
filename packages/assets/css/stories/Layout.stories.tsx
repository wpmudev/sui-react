import React from "react"

// Import documentation main page.
import docs from "./content/Layout/Main.mdx"

interface LayoutProps {
	fullwidth: boolean
	vertical: boolean
	horizontal: boolean
}

// Configure default options.
export default {
	title: "SUI/CSS Framework/Layout",
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
		interactions: {
			disabled: true,
		},
	},
}

// Build "Layout" story.
const Layout = ({ fullwidth, vertical, horizontal }: LayoutProps) => {
	const barSettings = {
		fullwidth,
		vertical,
		horizontal,
	}

	return <TopBar settings={barSettings} />
}
Layout.args = {
	fullwidth: false,
	vertical: false,
	horizontal: false,
}
Layout.argTypes = {
	fullwidth: {
		name: "Full Width",
		control: {
			type: "boolean",
		},
	},
	vertical: {
		name: "Vertical Spacing",
		control: {
			type: "boolean",
		},
	},
	horizontal: {
		name: "Horizontal Spacing",
		control: {
			type: "boolean",
		},
	},
}

// Build "Box" component.
interface BoxProps {
	top: boolean
	children: React.ReactElement
}

const Box: React.FC<BoxProps> = ({ top, children }) => {
	const boxStyles: React.CSSProperties = {
		background: "#FFF",
	}

	if (top) {
		boxStyles.padding = "16px 0"
	} else {
		boxStyles.padding = 30
		boxStyles.borderRadius = 4
	}

	return <div style={boxStyles}>{children}</div>
}

// Build "Box Wrapper" component.
const BoxWrapper = ({ children }: { children: React.ReactElement }) => {
	const boxStyles: React.CSSProperties = {
		padding: "0 32px",
	}

	return <div style={boxStyles}>{children}</div>
}

// Build "Logo" component.
const Logo: React.FC = () => {
	const logoStyles: React.CSSProperties = {
		width: 48,
		height: 48,
		display: "flex",
		flexFlow: "row wrap",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 16,
		background: "#2DC4E0",
		color: "#FFF",
		fontSize: 22,
		lineHeight: 1,
		fontWeight: 700,
		textAlign: "center",
	}

	return <div style={logoStyles}>L</div>
}

// Build "Top Bar" component.
interface TopBarProps {
	settings: {
		fullwidth: boolean
		vertical: boolean
		horizontal: boolean
	}
}

const TopBar: React.FC<TopBarProps> = ({ settings }) => {
	const barSettings = Object.assign(
		{
			fullwidth: false,
			vertical: false,
			horizontal: false,
		},
		settings,
	)

	const vSpacing = barSettings.vertical ? " sui-layout--vertical" : ""
	const hSpacing = barSettings.horizontal ? " sui-layout--horizontal" : ""

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
	)
}

// Publish required stories.
export { Layout }
