import React, { useState } from "react"

// Import required component.
import { EmptyState as SuiEmptyState } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page.
import docs from "./EmptyState.mdx"

// Build "EmptyState" story.
const EmptyState = ({ color }) => {
	const [mode, setMode] = useState<string>("desktop")

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		// background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiEmptyState
						logo={LOGO}
						title="This site has not yet been scanned."
						content="Defender watches and protects your login area for attackers trying to randomly guess login details for your site and locks them out after a set number of failed attempts."
					>
						<Button appearance="secondary" color="blue" isSmall={true}>
							Primary button
						</Button>
						<Button appearance="primary" color="blue" isSmall={true}>
							Primary button
						</Button>
					</SuiEmptyState>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
EmptyState.args = {}

// Set controls for story arguments.
EmptyState.argTypes = {
	bar: {
		name: "Circle Bar",
		description: "The EmptyState circle.",
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
	},
	value: {
		name: "EmptyState Value",
		description: "The EmptyState value to display.",
		control: "number",
	},
	content: {
		name: "Content",
		description: "The EmptyState content to display.",
		control: "text",
		if: {
			arg: "isSmall",
			eq: true,
		},
	},
	isPercentage: {
		name: "Show Percentage",
		description: "The percentage to display.",
	},
	state: {
		name: "Type",
		description: "The EmptyStates color variation according to type.",
		options: ["default", "error", "warning", "success"],
		control: {
			type: "select",
			labels: {
				default: "Type: Default",
				error: "Type: Error",
				warning: "Type: Warning",
				success: "Type: Success",
			},
		},
	},
	isSmall: {
		name: "Small",
		description: "The EmptyStates component size.",
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Core/Empty State",
	component: EmptyState,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const LOGO = (
	<svg
		width="152"
		height="119"
		viewBox="0 0 152 119"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g filter="url(#filter0_ddd_7075_76556)">
			<rect x="16" y="15" width="120" height="86" rx="4" fill="white" />
		</g>
		<path
			d="M16 19C16 16.7909 17.7909 15 20 15H132C134.209 15 136 16.7909 136 19V29H16V19Z"
			fill="#333333"
		/>
		<circle cx="27" cy="22" r="3" fill="#E6E6E6" />
		<circle cx="37" cy="22" r="3" fill="#E6E6E6" />
		<circle cx="47" cy="22" r="3" fill="#E6E6E6" />
		<rect
			x="67"
			y="51"
			width="18"
			height="20"
			rx="4"
			fill="#F2F2F2"
			stroke="#AAAAAA"
			stroke-width="2"
		/>
		<path
			d="M62 51V50C62 48.3431 63.3431 47 65 47H66"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M90 71L90 72C90 73.6569 88.6569 75 87 75L86 75"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M86 47L87 47C88.6569 47 90 48.3431 90 50L90 51"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M66 75L65 75C63.3431 75 62 73.6569 62 72L62 71"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<line
			x1="72"
			y1="57"
			x2="80"
			y2="57"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<line
			x1="72"
			y1="61"
			x2="80"
			y2="61"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<path
			d="M72 65H78"
			stroke="#AAAAAA"
			stroke-width="2"
			stroke-linecap="round"
		/>
		<defs>
			<filter
				id="filter0_ddd_7075_76556"
				x="0"
				y="0"
				width="152"
				height="119"
				filterUnits="userSpaceOnUse"
				color-interpolation-filters="sRGB"
			>
				<feFlood flood-opacity="0" result="BackgroundImageFix" />
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="2" />
				<feGaussianBlur stdDeviation="2" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.1 0"
				/>
				<feBlend
					mode="normal"
					in2="BackgroundImageFix"
					result="effect1_dropShadow_7075_76556"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="1" />
				<feGaussianBlur stdDeviation="8" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.05 0"
				/>
				<feBlend
					mode="normal"
					in2="effect1_dropShadow_7075_76556"
					result="effect2_dropShadow_7075_76556"
				/>
				<feColorMatrix
					in="SourceAlpha"
					type="matrix"
					values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					result="hardAlpha"
				/>
				<feOffset dy="6" />
				<feGaussianBlur stdDeviation="6" />
				<feColorMatrix
					type="matrix"
					values="0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0 0.45098 0 0 0 0.08 0"
				/>
				<feBlend
					mode="normal"
					in2="effect2_dropShadow_7075_76556"
					result="effect3_dropShadow_7075_76556"
				/>
				<feBlend
					mode="normal"
					in="SourceGraphic"
					in2="effect3_dropShadow_7075_76556"
					result="shape"
				/>
			</filter>
		</defs>
	</svg>
)

// Publish required stories.
export { EmptyState }
