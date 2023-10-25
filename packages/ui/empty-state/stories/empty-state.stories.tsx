import React from "react"

// Import required component.
import { EmptyState as SuiEmptyState } from "../src"
import { Button } from "@wpmudev/sui-button"
import { Row } from "@wpmudev/sui-grid"
import { EmptyStateProps } from "../src/empty-state.types"

import SvgImage from "./images/empty-state.svg"

// Import documentation main page.
import docs from "./EmptyState.mdx"

// Build "EmptyState" story.
const EmptyState = ({
	children,
	...props
}: {
	children: React.ReactNode
	props: EmptyStateProps
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiEmptyState {...props}>{children}</SuiEmptyState>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
EmptyState.args = {
	logo: SvgImage,
	children: (
		<>
			<Row>
				<h3 className="sui-heading--h3">This site has not yet been scanned.</h3>
				<p>
					{" "}
					Defender watches and protects your login area for attackers trying to
					randomly guess login details for your site and locks them out after a
					set number of failed attempts.{" "}
				</p>
			</Row>

			<Row align={{ md: "center" }}>
				<Button appearance="secondary" color="blue" isSmall={true}>
					Primary
				</Button>
				<Button appearance="primary" color="blue" isSmall={true}>
					Secondary
				</Button>
			</Row>
		</>
	),
}

// Set controls for story arguments.
EmptyState.argTypes = {
	children: {
		name: "Children",
		description: "The content of the box",
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
