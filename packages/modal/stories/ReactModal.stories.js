import React, { Fragment } from "react"

// Import required component
import { Modal as SuiModal } from "../lib/react-modal"
import { Box, BoxGroup } from "@wpmudev/react-box"
import { Button } from "@wpmudev/react-button"

// Import documentation main page
import docs from "./ReactModal.mdx"

// Configure default options
export default {
	title: "SUI/Components/Compound Elements/Modal",
	component: SuiModal,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

const triggerContent = ({ openModal }) => {
	return (
		<Button appearance="primary" color="blue" onClick={openModal}>
			Save Configs
		</Button>
	)
}

const modalContent = () => {
	return (
		<BoxGroup>
			<p style={{ margin: 0 }}>
				Are you sure you want to apply the Default config config to this site?
				We recommend you have a backup available as your existing settings
				configuration will be overridden.
			</p>
		</BoxGroup>
	)
}

const modalFooter = ({ closeModal }) => {
	return (
		<Fragment>
			<Button appearance="secondary" color="black" onClick={closeModal}>
				Cancel
			</Button>
			<Button appearance="primary" color="blue" onClick={closeModal}>
				Apply
			</Button>
		</Fragment>
	)
}

// Build "Modal" story
const Modal = ({ example, ...args }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiModal {...args} />
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Modal.args = {
	id: "uniqueId",
	title: "Apply config",
	icon: {
		name: "info-alt",
		color: "blue",
	},
	isSmall: true,
	timer: 0,
	trigger: triggerContent,
	content: modalContent,
	footer: modalFooter,
}

// Set controls for story arguments.
Modal.argTypes = {
	title: {
		name: "Title",
	},
	icon: {
		name: "Icon",
	},
	timer: {
		table: {
			disable: true,
		},
	},
	trigger: {
		table: {
			disable: true,
		},
	},
	content: {
		table: {
			disable: true,
		},
	},
	footer: {
		table: {
			disable: true,
		},
	},
}

// Publish required stories.
export { Modal }
