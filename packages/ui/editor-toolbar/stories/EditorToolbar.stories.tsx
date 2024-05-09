import React, { useState } from "react"

// Import required component(s)
import { EditorToolbarField, EditorToolbar as SuiEditorToolbar } from "../src"
import { Button } from "@wpmudev/sui-button"

import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"

// Import documentation main page
import docs from "./EditorToolbar.mdx"
import { Input } from "@wpmudev/sui-input"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Editor Toolbar",
	component: SuiEditorToolbar,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

interface EditorToolbarProps {
	example: "example-1" | "example-2"
	status: "unsaved" | "saving" | "saved"
	// Add other expected props with their types here
}

// Build story
export const EditorToolbar = ({
	example,
	status,
	...props
}: EditorToolbarProps) => {
	const [editorType, setEditorType] = useState<string | number>("visual")

	const actions = (settingBtn: React.ReactNode) => {
		return [
			<Button
				key={0}
				type="secondary"
				icon="Show"
				colorScheme="black"
				isFullWidth={true}
				isResponsive={true}
			>
				Preview
			</Button>,
			<Button
				key={1}
				type="primary"
				icon="Globe"
				colorScheme="blue"
				isFullWidth={true}
			>
				Publish
			</Button>,
			settingBtn,
		]
	}

	return (
		<div className="sui-layout">
			<div className="sui-layout__content">
				{"example-1" === example ? (
					<SuiEditorToolbar {...props} alignCenter={true} actions={actions}>
						<SegmentedControl
							name="type"
							defaultValue={editorType}
							onChange={(t) => setEditorType(t)}
						>
							<SegmentedControlButton
								icon="Desktop"
								isResponsive={true}
								value="visual"
							>
								Visual
							</SegmentedControlButton>
							<SegmentedControlButton
								icon="Desktop"
								isResponsive={true}
								value="code"
							>
								Code
							</SegmentedControlButton>
						</SegmentedControl>
					</SuiEditorToolbar>
				) : (
					<SuiEditorToolbar {...props} actions={actions}>
						<SegmentedControl
							name="type"
							defaultValue={editorType}
							onChange={(t) => setEditorType(t)}
						>
							<EditorToolbarField status={status}>
								<Input id="form-name" type="text" defaultValue="Form name" />
							</EditorToolbarField>
						</SegmentedControl>
					</SuiEditorToolbar>
				)}
			</div>
		</div>
	)
}

EditorToolbar.args = {
	example: "example-1",
	title: "Title",
	allowBack: true,
	status: "unsaved",
}

EditorToolbar.argTypes = {
	example: {
		name: "Example",
		options: ["example-1", "example-2"],
		control: {
			type: "select",
			labels: {
				"example-1": "Example: Tabs",
				"example-2": "Example: Fields",
			},
		},
	},
	title: {
		name: "Title",
		control: {
			type: "text",
		},
	},
	allowBack: {
		name: "Back Button",
		control: {
			type: "boolean",
		},
	},
	status: {
		name: "Status",
		options: ["unsaved", "saving", "saved"],
		control: {
			type: "select",
			labels: {
				unsaved: "Unsaved",
				saving: "Saving",
				saved: "Saved",
			},
		},
		if: {
			arg: "example",
			eq: "example-2",
		},
	},
}