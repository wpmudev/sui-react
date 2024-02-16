// @ts-nocheck
import React, { useState } from "react"

import { Toggle } from "@wpmudev/sui-toggle"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Tag } from "@wpmudev/sui-tag"
import { Button } from "@wpmudev/sui-button"

import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { isFunction, generateCN, isEmpty } from "@wpmudev/sui-utils"

import { IntegrationProps } from "./integration.types"

const Integration: React.FC<IntegrationProps> = ({
	title = "title",
	description,
	additionalInfo = "",
	image = { alt: "amazon", src: "https://placehold.co/50" },
	isDisabled = false,
	active = true,
	isSettings = false,
	isPro = false,
	onSettingsClick,
	onClick,
	...props
}) => {
	// Define image object
	const icon = Object.assign(
		{
			src: "",
			alt: "",
		},
		image,
	)

	const [isHovered, isFocused, methods] = useInteraction({})

	// Define component states
	const [isActive, setIsActive] = useState(active)
	const { suiInlineClassname } = useStyles(props)

	// Define container props
	const classNames = generateCN(
		"sui-integration",
		{
			active: isActive && !isDisabled,
			disabled: isDisabled || isPro,
			hover: !isDisabled && !isPro && isHovered,
			focus: !isDisabled && !isPro && isFocused,
		},
		suiInlineClassname,
	)

	// Define toggle props
	const toggleProps = {
		defaultValue: isActive,
		isLabelHidden: true,
		...(!isEmpty(title) && { label: `Toggle ${title}` }),
		isDisabled,
		onClick: (e) => {
			setIsActive(!isActive)

			if (isFunction(onClick)) {
				onClick(e)
			}
		},
		...methods,
	}

	// Settings button props.
	const settingsProps = {
		className: "sui-integration-setting-btn",
		icon: "Settings",
		label: "settings",
		type: "tertiary",
		color: "black",
		iconOnly: true,
		isSmall: true,
		isDisabled,
		onClick: (e) => {
			if (isFunction(onSettingsClick)) {
				onSettingsClick(e)
			}
		},
	}

	return (
		<div className={classNames} data-testid="integration">
			<div className="sui-integration__header">
				{!!icon?.src && (
					<img
						src={icon?.src ?? ""}
						alt={icon?.alt ?? ""}
						className="sui-integration__icon"
					/>
				)}
				{isSettings && isActive && <Button {...settingsProps} />}
				<Toggle {...toggleProps} />
			</div>
			<div className="sui-integration__info">
				{!!title && (
					<h3 className="sui-heading--h4 sui-integration__title">{title}</h3>
				)}
				{!!additionalInfo && (
					<Tooltip type="icon" name="info" icon="Info" customWidth={160}>
						{additionalInfo}
					</Tooltip>
				)}
				{isPro && (
					<Tag design="outlined" colorScheme="black" isSmall={true}>
						PRO
					</Tag>
				)}
			</div>
			{!!description && (
				<p className="sui-integration__description">{description}</p>
			)}
		</div>
	)
}

export { Integration }
