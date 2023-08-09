import React, { Fragment } from "react"

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
				<SuiUploader
					{...props}
					fieldAttrs={{
						label: "Upload file",
						helper: "Upload files",
						isSmall: true,
					}}
					onChange={(files) => {
						console.log("files", files)
					}}
				/>
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
