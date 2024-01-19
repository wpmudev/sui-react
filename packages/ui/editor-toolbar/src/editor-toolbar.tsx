import React, { FC } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

import { EditorToolbarProps } from "./editor-toolbar.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

const EditorToolbar: FC<EditorToolbarProps> = ({
	title = "Toolbar Title",
	actions,
	children,
	allowBack = true,
	alignCenter = false,
	onBackClick = () => {},
	onSettingClick = () => {},
}) => {
	// Generate CSS class names for the editor toolbar component
	const classNames = generateCN("sui-editor-toolbar", {
		right: !alignCenter,
		center: alignCenter,
	})

	// Default children content
	children = useDefaultChildren(children)

	const settingButton = (
		<Button
			appearance="tertiary"
			icon="Settings"
			color="black"
			iconOnly={true}
			aria-label="settings"
			onClick={onSettingClick}
		/>
	)

	let actionsList: React.ReactNode[] = []

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
		<div className={classNames} data-testid="editor-toolbar">
			{(!!title || !!allowBack) && (
				<div className="sui-editor-toolbar__content--left">
					<div className="sui-editor-toolbar__main">
						{allowBack && (
							<div>
								<Button
									appearance="tertiary"
									icon="ChevronLeft"
									color="black"
									iconOnly={true}
									onClick={onBackClick}
									aria-label="back"
									data-testid="editor-toolbar-back-btn"
								/>
							</div>
						)}
						{title && (
							<h3 className="sui-heading--h4 sui-editor-toolbar__main-title">
								{title}
							</h3>
						)}
					</div>
				</div>
			)}
			{!!children && (
				<div
					className={generateCN("sui-editor-toolbar__content", {})}
					data-testid="editor-toolbar-content"
				>
					{!!children && (
						<div className="sui-editor-toolbar__body">{children}</div>
					)}
				</div>
			)}
			{!!actionButtons && (
				<div className="sui-editor-toolbar__actions">
					{!!actionButtons && actionButtons}
				</div>
			)}
		</div>
	)
}

// Export the editor-toolbar component
export { EditorToolbar }
