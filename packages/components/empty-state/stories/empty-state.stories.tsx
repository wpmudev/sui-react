import React from "react"

// Import required component.
import { EmptyState as SuiEmptyState } from "../src"
import { Button } from "@wpmudev/sui-button"
import { Row } from "@wpmudev/sui-grid"
import svgImage from "./images/empty-state.svg"

// Import documentation main page.
import docs from "./EmptyState.mdx"

// Build "EmptyState" story.
const EmptyState = ({ title, content, ...props}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiEmptyState {...props}>
						<Row>
							<h3 className="sui-heading--h3">{title}</h3>
							<p>{content}</p>
						</Row>
						<Row align={{ md: "inline" }}>
							<Button appearance="secondary" color="blue" isSmall={true}>
								Primary
							</Button>
							<Button appearance="primary" color="blue" isSmall={true}>
								Secondary
							</Button>
						</Row>
					</SuiEmptyState>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
EmptyState.args = {
	title: "This site has not yet been scanned.",
	content:
		"Defender watches and protects your login area for attackers trying to randomly guess login details for your site and locks them out after a set number of failed attempts.",
	logo: svgImage,
}

// Set controls for story arguments.
EmptyState.argTypes = {
	title: {
		name: "Title",
		description: "The title of the box.",
		control: {
			type: "text",
		},
	},
	content: {
		name: "Content",
		description: "The description of the box.",
		control: {
			type: "text",
		},
	},
	logo: {
		name: "Logo",
		description: "The logo inside the box.",
		control: {
			type: "text",
		},
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Advanced/Empty State",
	component: EmptyState,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { EmptyState }
