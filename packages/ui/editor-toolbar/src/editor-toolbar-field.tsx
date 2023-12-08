import React, { FC } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"
import { Refresh, Spinner, CheckAlt } from "@wpmudev/sui-icons"
import { isEmpty } from "@wpmudev/sui-docs/src/utils"
import { EditorToolbarFieldProps } from "./editor-toolbar.types"

const EditorToolbarField: FC<EditorToolbarFieldProps> = ({
	status = "saved",
	statusText = "",
	children,
}) => {
	let StatusTag = <CheckAlt size="sm" color="success" />
	let StatusText = "Saved"

	if ("saving" === status) {
		StatusTag = <Spinner size="sm" color="neutral" />
		StatusText = "Saving"
	} else if ("unsaved" === status) {
		StatusTag = <Refresh size="sm" color="warning" />
		StatusText = "Unsaved changes"
	}

	if (!isEmpty(statusText)) {
		StatusText = StatusText
	}

	return (
		// Render the editor-toolbar component
		<div className="sui-editor-toolbar__field">
			{children}
			<div className="sui-editor-toolbar__field--status">
				{StatusTag}
				{StatusText && (
					<div className="sui-editor-toolbar__field--status-text">
						{StatusText}
					</div>
				)}
			</div>
		</div>
	)
}

// Export the editor-toolbar component
export { EditorToolbarField }
