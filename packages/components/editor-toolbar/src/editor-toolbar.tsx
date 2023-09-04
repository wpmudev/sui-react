import React, { FC } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

import { EditorToolbarProps } from "./editor-toolbar.types"

const EditorToolbar: FC<EditorToolbarProps> = ({
	title,
	actions,
	children,
	allowBack = true,
	onBackClick = () => {},
	onSettingClick = () => {},
}) => {
	// Generate CSS class names for the editor toolbar component
	const classNames = generateCN("sui-editor-toolbar", {})

	const settingButton = (
		<Button
			appearance="tertiary"
			icon="settings"
			color="black"
			isSmall={true}
			iconOnly={true}
			onClick={onSettingClick}
		/>
	)

	let actionsList = []

	if (!!actions) {
		actionsList = [...actions(settingButton)]
	}

	// Render actions list
	const actionButtons = actionsList?.map((action, index) => (
		<div className="sui-editor-toolbar__actions-item" key={index}>
			{action}
		</div>
	))

	return (
		// Render the editor-toolbar component
		<div className={classNames}>
			{(!!title || !!allowBack) && (
				<div className="sui-editor-toolbar__main">
					{allowBack && (
						<Button
							appearance="tertiary"
							icon="chevron-left"
							color="black"
							isSmall={true}
							iconOnly={true}
							onClick={onBackClick}
						/>
					)}
					{title && (
						<div className="sui-editor-toolbar__main-title">{title}</div>
					)}
				</div>
			)}
			<div className="sui-editor-toolbar__body">{children}</div>
			<div className="sui-editor-toolbar__actions">{actionButtons}</div>
		</div>
	)
}

// Export the editor-toolbar component
export { EditorToolbar }
