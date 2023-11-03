import React, { FC } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

import { EditorToolbarProps } from "./editor-toolbar.types"

const EditorToolbar: FC<EditorToolbarProps> = ({
	title,
	actions,
	children,
	allowBack = true,
	alignCenter = false,
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
									icon="chevron-left"
									color="black"
									isSmall={true}
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
			{!!children && !!actionButtons && (
				<div
					className={generateCN("sui-editor-toolbar__content", {
						base: false,
						right: !alignCenter,
						center: alignCenter,
					})}
					data-testid="editor-toolbar-content"
				>
					{!!children && (
						<div className="sui-editor-toolbar__body">{children}</div>
					)}
					<div className="sui-editor-toolbar__actions">
						{!!actionButtons && actionButtons}
					</div>
				</div>
			)}
		</div>
	)
}

// Export the editor-toolbar component
export { EditorToolbar }
