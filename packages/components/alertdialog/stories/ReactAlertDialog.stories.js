import React from "react"

// Import required component(s)
import { AlertDialog as SuiAlertDialog } from "../src"

// Import documentation main page
import docs from "./ReactAlertDialog.mdx"

// Configure default options
export default {
	title: "SUI/Components/Core/Alert Dialog",
	component: SuiAlertDialog,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const sampleOneContent = ({ closeModal }) => {
	return (
		<React.Fragment>
			<div>
				test
				<button onClick={closeModal}>Close</button>
			</div>
		</React.Fragment>
	)
}

const triggerContent = ({ openModal }) => {
	return <button onClick={openModal}>Open modal</button>
}

// Build story
export const AlertDialog = ({ example, ...props }) => {
	const set = {}

	set.box = {
		margin: 0,
		padding: "30px",
		border: "white" === props.color ? "1px solid #E6E6E6" : 0,
		borderRadius: "4px",
		background: "white" === props.color ? "#333" : "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={set.box}>
					<SuiAlertDialog {...props} />
				</div>
			</div>
		</div>
	)
}

AlertDialog.args = {
	example: "standard",
	dialogId: "myUniqueId",
	titleId: "myUniqueId__title",
	size: "lg",
	modalContent: sampleOneContent,
	triggerContent,
	triggerTimer: 2000,
}

AlertDialog.argTypes = {
	example: {
		name: "Example",
		control: {
			type: "select",
			options: {
				"Example: Standard": "standard",
			},
		},
	},
}
