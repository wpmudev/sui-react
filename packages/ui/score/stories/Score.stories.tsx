import React from "react"

// Import required component.
import { Score as SuiScore, ScoreProps } from "../src"

// Import documentation main page.
import docs from "./Score.mdx"

// Build "Score" story.
const Score = ({
	bar,
	value,
	description,
	state,
	isSmall,
	isPercentage,
	color,
}: ScoreProps & { color?: string }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiScore
						bar={bar}
						value={value}
						description={description}
						state={state}
						isSmall={isSmall}
						isPercentage={isPercentage}
					/>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Score.args = {
	bar: 15,
	value: 15,
	description: "",
	isPercentage: false,
	state: "warning",
	isSmall: true,
}

// Set controls for story arguments.
Score.argTypes = {
	bar: {
		name: "Circle Bar",
		description: "The score circle.",
		control: {
			type: "range",
			min: 0,
			max: 100,
			step: 1,
		},
	},
	value: {
		name: "Score Value",
		description: "The score value to display.",
		control: "number",
	},
	description: {
		name: "Description",
		description: "The score content to display.",
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
		description: "The scores color variation according to type.",
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
		description: "The scores component size.",
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Core/Score",
	component: Score,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { Score }
