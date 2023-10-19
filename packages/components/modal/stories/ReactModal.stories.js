import React, { useRef } from "react"

// Import required component
import { Modal as SuiModal, ModalBody, ModalFooter, ModalHeader } from "../src"
import { Button } from "@wpmudev/sui-button"

// Import documentation main page
import docs from "./ReactModal.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Modal",
	component: SuiModal,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Modal" story
const Modal = ({ ...props }) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: "#fff",
	}

	const ref = useRef(null)

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiModal {...props} ref={ref}>
						<ModalHeader title="Apply Config">
							Choose the audience you want to send form data to.
						</ModalHeader>
						<ModalBody>
							Are you sure you want to apply the Default config to this site? We
							recommend you have a backup available as your existing settings
							configuration will be overridden.
						</ModalBody>
						<ModalFooter>
							<Button
								appearance="secondary"
								color="blue"
								isSmall={true}
								onClick={() => ref.current.closeModal()}
							>
								Cancel
							</Button>
							<Button appearance="primary" color="blue" isSmall={true}>
								Apply
							</Button>
						</ModalFooter>
					</SuiModal>
					<Button
						appearance="primary"
						color="blue"
						onClick={() => {
							ref.current.openModal()
						}}
					>
						Apply Config
					</Button>
				</div>
			</div>
		</div>
	)
}

// Set story arguments.
Modal.args = {
	id: "uniqueId",
	icon: {
		name: "info-alt",
		color: "blue",
	},
	size: "sm",
	variant: "simple",
}

// Set controls for story arguments.
Modal.argTypes = {
	id: {
		name: "Id",
		control: {
			type: "text",
		},
	},
	icon: {
		name: "Icon",
		control: {
			type: "object",
		},
	},
	size: {
		name: "Size",
		options: ["sm", "lg"],
		control: {
			type: "select",
			labels: {
				sm: "Small (sm)",
				lg: "Large (lg)",
			},
		},
	},
	variant: {
		name: "Variant",
		options: ["simple", "advanced", "app-connect"],
		control: {
			type: "select",
			labels: {
				simple: "Simple",
				advanced: "Advanced",
				"app-connect": "App connect",
			},
		},
	},
}

// Publish required stories.
export { Modal }
