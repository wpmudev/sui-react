import React, { FC } from "react"
import { Refresh, Spinner, CheckAlt } from "@wpmudev/sui-icons"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { EditorToolbarFieldProps } from "./editor-toolbar.types"
import { useStyles } from "@wpmudev/sui-hooks"

const EditorToolbarField: FC<EditorToolbarFieldProps> = ({
	status = "saved",
	statusText = "",
	children,
	...styleProps
}) => {
	const { cssCN } = useStyles(styleProps)
	// Generate CSS class names for the editor toolbar component
	const classNames = generateCN("sui-editor-toolbar__field", {}, cssCN)

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
		<div className={classNames}>
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

// Export the editor-toolbar-field component
export { EditorToolbarField }
