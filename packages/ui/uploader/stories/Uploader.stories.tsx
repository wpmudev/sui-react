import React, { Fragment } from "react"

import { FormField } from "@wpmudev/sui-form-field"

// Import required component(s)
import { Uploader as SuiUploader } from "../src"

// Import documentation main page
import docs from "./Uploader.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Uploader",
	component: SuiUploader,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build story
export const Uploader = ({ ...props }) => {
	const fieldAttrs = {
		label: "Upload file",
		helper: "Upload files",
	}

	return (
		<Fragment>
			<div
				className="sui-layout"
				style={{
					margin: 20,
					padding: 20,
					borderRadius: 4,
					background: "#fff",
				}}
			>
				<FormField id="uploader" {...fieldAttrs}>
					<SuiUploader {...props} maxSize={1000000} />
				</FormField>
			</div>
		</Fragment>
	)
}

Uploader.args = {
	btnTitle: "",
	accept: "*",
	multiple: false,
	allowDragAndDrop: true,
}

Uploader.argTypes = {
	btnTitle: {
		name: "Button Title",
		control: {
			type: "text",
		},
	},
	multiple: {
		name: "Allow multiple files",
		control: {
			type: "boolean",
		},
	},
	allowDragAndDrop: {
		name: "Drag & Drop",
		control: {
			type: "boolean",
		},
	},
	accept: {
		name: "Allowed file types",
		control: {
			type: "text",
		},
	},
}
