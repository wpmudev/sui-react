import React, { useState } from "react"

// Import required component(s)
import { EditorToolbar as SuiEditorToolbar } from "../src"
import { Button } from "@wpmudev/sui-button"

import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"

// Import documentation main page
import docs from "./editor-toolbar.mdx"

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

// Build story
export const EditorToolbar = ({ ...props }) => {
	const [editorType, setEditorType] = useState<string | number>("visual")

	const actions = (settingBtn: React.ReactNode) => {
		return [
			<Button
				key={0}
				appearance="tertiary"
				icon="Save"
				color="black"
				isResponsive={true}
			>
				Save Draft
			</Button>,
			<Button
				key={1}
				appearance="secondary"
				icon="Show"
				color="black"
				isFullWidth={true}
				isResponsive={true}
			>
				Preview
			</Button>,
			<Button
				key={2}
				appearance="primary"
				icon="Globe"
				color="blue"
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
				<SuiEditorToolbar {...props} actions={actions}>
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
			</div>
		</div>
	)
}

EditorToolbar.args = {
	title: "Title",
	allowBack: true,
	alignCenter: true,
}

EditorToolbar.argTypes = {
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
	alignCenter: {
		name: "Center Content",
		control: {
			type: "boolean",
		},
	},
}
