import React from "react"

// Import required component.
import { Textarea as SuiTextarea } from "../src"

// Import documentation main page.
import docs from "./ReactTextarea.mdx"

// Build "Textarea" story.
const Textarea = ({
	example,
	description,
	color,
	size,
	isSmall,
	isDisabled,
	errorMessage,
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== "white" ? "#fff" : "#333",
	}

	const props = {}

	props.color = color

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiTextarea
						id="textarea-default"
						rows="4"
						placeholder="Placeholder"
						description={description}
						descriptionId="desc-id"
						isSmall={isSmall}
						isDisabled={isDisabled}
						errorMessage={errorMessage}
					/>

					{/*	{"textarea-error" === example && (
						<SuiTextarea
							id="textarea-default"
							rows="4"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							errorMessage="This is an error."
							errorId="error-id"
							isSmall={isSmall}
							isDisabled={isDisabled}
						/>
					)}*/}
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Textarea.args = {
	description: "Help text",
	isSmall: false,
	isDisabled: false,
	errorMessage: "",
}

// Set controls for story arguments.
Textarea.argTypes = {
	description: {
		name: "Description",
	},
	isSmall: {
		name: "Small",
	},
	isDisabled: {
		name: "Disabled",
	},
	errorMessage: {
		name: "Error Message",
		control: {
			type: "text",
		},
	},
}

// Configure default options.
export default {
	title: "SUI/Components/Forms/Textarea",
	component: Textarea,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Publish required stories.
export { Textarea }
