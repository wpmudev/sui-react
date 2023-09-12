import React from "react"

// Import required component.
import { Textarea as SuiTextarea } from "../src"

// Import documentation main page.
import docs from "./ReactTextarea.mdx"
import { FormField } from "@wpmudev/sui-form-field"
import { isEmpty } from "@wpmudev/sui-utils"

// Build "Textarea" story.
const Textarea = ({
	label = "",
	description = "",
	isSmall = false,
	isDisabled = false,
	errorMessage = "",
}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	const error = Object.assign({
		state: !isEmpty(errorMessage ?? ""),
		text: errorMessage,
	})

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<FormField
						id="textaread-id"
						label={label}
						helper={description}
						isLabelHidden={true}
						error={error}
						isSmall={isSmall}
						isDisabled={isDisabled}
					>
						<SuiTextarea
							id="textarea-default"
							rows="4"
							placeholder="Placeholder"
							description={description}
							descriptionId="desc-id"
							isSmall={isSmall}
							error={error}
							isDisabled={isDisabled}
						/>
					</FormField>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Textarea.args = {
	label: "Label",
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
