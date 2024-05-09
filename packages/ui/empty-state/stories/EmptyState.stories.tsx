import React from "react"

// Import required component.
import { EmptyState as SuiEmptyState } from "../src"
import { Button } from "@wpmudev/sui-button"
import { Col, Row } from "@wpmudev/sui-grid"
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
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
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
				<Col>
					<h3 className="sui-heading--h3">
						This site has not yet been scanned.
					</h3>
					<p>
						{" "}
						Defender watches and protects your login area for attackers trying
						to randomly guess login details for your site and locks them out
						after a set number of failed attempts.{" "}
					</p>
				</Col>
			</Row>

			<Row>
				<Col>
					<Button type="secondary" colorScheme="blue">
						Primary
					</Button>
					<Button type="primary" colorScheme="blue">
						Secondary
					</Button>
				</Col>
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