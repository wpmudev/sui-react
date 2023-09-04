import React, { useState } from "react"

// Import required component(s)
import { EditorToolbar as SuiEditorToolbar } from "../src"
import { Button } from "@wpmudev/sui-button"
import { BoxGroup } from "@wpmudev/sui-box"

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
export const EditorToolbar = ({ example, ...props }) => {
	const [editorType, setEditorType] = useState("visual")

	const actions = (settingBtn) => {
		return [
			<Button
				key={0}
				appearance="tertiary"
				icon="save"
				color="black"
				isSmall={true}
			>
				Save Draft
			</Button>,
			<Button
				key={1}
				appearance="secondary"
				icon="show"
				color="black"
				isSmall={true}
				isFullWidth={true}
			>
				Preview
			</Button>,
			<Button
				key={2}
				appearance="primary"
				icon="globe"
				color="blue"
				isSmall={true}
				isFullWidth={true}
			>
				Publish
			</Button>,
			settingBtn,
		]
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div>
					<SuiEditorToolbar {...props} actions={actions}>
						<BoxGroup isInline={true}>
							<SegmentedControl
								name="type"
								defaultValue={editorType}
								onChange={(t) => setEditorType(t)}
							>
								<SegmentedControlButton value="visual">
									Visual
								</SegmentedControlButton>
								<SegmentedControlButton value="code">
									Code
								</SegmentedControlButton>
							</SegmentedControl>
						</BoxGroup>
					</SuiEditorToolbar>
				</div>
			</div>
		</div>
	)
}

EditorToolbar.args = {
	title: "",
	allowBack: true,
}

EditorToolbar.argTypes = {
	title: {
		control: {
			type: "text",
		},
	},
	allowBack: {
		control: {
			type: "boolean",
		},
	},
}
