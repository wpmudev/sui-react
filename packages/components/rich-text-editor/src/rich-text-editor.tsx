import React, { useState, useCallback, useId } from "react"
// import { default as RTextEditor } from "react-rte"

import { generateCN } from "@wpmudev/sui-utils"

import { RichTextEditorProps } from "./rich-text-editor.types"

import { FormField } from "@wpmudev/sui-form-field"
import { Button } from "@wpmudev/sui-button"
import { Notification } from "@wpmudev/sui-notification"
import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"

/**
 * RichTextEditor Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @param {RichTextEditorProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the RichTextEditor component
 */
const RichTextEditor: React.FC<RichTextEditorProps> = ({ className = "" }) => {
	const [editorType, setEditorType] = useState<string>("visual")
	// Generate class names
	const classNames = generateCN("sui-rich-text-editor", {}, className ?? "")
	// const [editorValue, setEditorValue] = useState("")

	const id = useId()

	return (
		<FormField id={id} label="Label" helper="Helper text for rich text editor.">
			<div className={classNames}>
				<div className="sui-rich-text-editor__header">
					<SegmentedControl
						name="type"
						defaultValue={editorType as string}
						onChange={(type) => setEditorType(type as string)}
					>
						<SegmentedControlButton value="visual">
							Visual
						</SegmentedControlButton>
						<SegmentedControlButton value="code">Code</SegmentedControlButton>
					</SegmentedControl>
					<Button appearance="secondary" icon="add" color="black">
						Add field
					</Button>
				</div>
				<div className="sui-rich-text-editor__content">
					<Notification
						id="notice"
						icon="InfoAlt"
						size="fluid"
						message="Note: The editor here needs to be created with wp_editor(), and since that is part of the WP ecosystem and can't be used outside of it, we will develop it once this SUI version is ready to use within WordPress."
					/>
				</div>
			</div>
		</FormField>
	)
}

export { RichTextEditor }
