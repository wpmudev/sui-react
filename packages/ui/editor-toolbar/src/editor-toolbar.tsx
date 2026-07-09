import React, { FC, useId } from "react"

import { Button } from "@wpmudev/sui-button"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

import { EditorToolbarProps } from "./editor-toolbar.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const EditorToolbar: FC<EditorToolbarProps> = ({
	id,
	title = "Toolbar Title",
	actions,
	disableSetting = false,
	disableBack = false,
	children,
	allowBack = true,
	alignCenter = false,
	onBackClick = () => {},
	onSettingClick = () => {},
	_htmlProps,
	_style = {},
}) => {
	const generatedId = useId()
	const editorToolbarId = id || `sui-editor-toolbar-${generatedId}`
	const { suiInlineClassname } = useStyles(_style)
	// Generate CSS class names for the editor toolbar component
	const classNames = generateCN(
		"sui-editor-toolbar",
		{
			right: !alignCenter,
			center: alignCenter,
		},
		suiInlineClassname,
	)

	// Default children content
	children = useDefaultChildren(children)

	const settingButton = (
		<Button
			type="tertiary"
			icon="Settings"
			colorScheme="black"
			iconOnly={true}
			onClick={onSettingClick}
			isDisabled={disableSetting}
			_htmlProps={{
				"aria-label": "settings",
			}}
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
		<div
			id={editorToolbarId}
			className={classNames}
			data-testid="editor-toolbar"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{(!!title || !!allowBack) && (
				<div className="sui-editor-toolbar__content--left">
					<div className="sui-editor-toolbar__main">
						{allowBack && (
							<div>
								<Button
									type="tertiary"
									icon="ChevronLeft"
									colorScheme="black"
									iconOnly={true}
									onClick={onBackClick}
									isDisabled={disableBack}
									_htmlProps={{
										"aria-label": "back",
										"data-testid": "editor-toolbar-back-btn",
									}}
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
