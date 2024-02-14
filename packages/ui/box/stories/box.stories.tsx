import React from "react"

// Import required component(s)
import { Box as SuiBox, BoxGroup, BoxGroupProps } from "../src"
import { Row, Col } from "@wpmudev/sui-grid"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./box.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Box",
	component: SuiBox,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Box = ({ ...props }: BoxGroupProps) => {
	const styles = {
		padding: 20,
		borderRadius: 4,
		background: "#F8F8F8",
	}

	const { hasPadding } = props

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiBox {...props}>
					<BoxGroup hasPadding={hasPadding}>
						<Row align={{ md: "inline" }}>
							<Col size="6">
								<div style={styles}>Left block</div>
							</Col>
							<Col size="6">
								<div style={styles}>Right block</div>
							</Col>
						</Row>
					</BoxGroup>
				</SuiBox>
			</div>
		</div>
	)
}

Box.args = {
	title: "Box Label",
	icon: "Hub",
	headerLeft: [
		<span
			key="1"
			className="sui-tag sui-tag--outlined-navy sui-tag--sm sui-tag--uppercase"
		>
			<span className="sui-tag__label">Pro</span>
		</span>,
	],
	headerRight: [
		<Button key="1" appearance="primary" color="blue" isSmall={true}>
			Run Action
		</Button>,
	],
	hasPadding: true,
	hideMobileIcon: false,
}

// Set controls for story arguments.
Box.argTypes = {
	title: {
		name: "Title",
		control: "text",
	},
	icon: {
		name: "Icon",
		control: "text",
	},
	hideMobileIcon: {
		name: "Hide icon on mobile",
		control: "boolean",
	},
	headerLeft: {
		name: "Header Left",
	},
	headerRight: {
		name: "Header Right",
	},
	hasPadding: {
		name: "Spacing",
		control: "boolean",
	},
}
