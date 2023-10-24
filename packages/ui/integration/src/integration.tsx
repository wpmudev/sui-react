// @ts-nocheck
import React, { useState } from "react"

import { Toggle } from "@wpmudev/sui-toggle"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Tag } from "@wpmudev/sui-tag"
import { Button } from "@wpmudev/sui-button"

import { useInteraction } from "@wpmudev/sui-hooks"
import { isFunction, generateCN } from "@wpmudev/sui-utils"

import { IntegrationProps } from "./integration.types"

const Integration: React.FC<IntegrationProps> = ({
	title,
	description,
	additionalInfo = "",
	image,
	isDisabled = false,
	active = false,
	isSettings = false,
	isPro = false,
	onSettingsClick,
	onClick,
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
	// const [state, setState] = useState()
	const [isActive, setIsActive] = useState(active)

	// Define container props
	const classNames = generateCN("sui-integration", {
		active: isActive && !isDisabled,
		disabled: isDisabled || isPro,
		hover: !isDisabled && !isPro && isHovered,
		focus: !isDisabled && !isPro && isFocused,
	})

	// Define toggle props
	const toggleProps = {
		defaultValue: isActive,
		isLabelHidden: true,
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
		icon: "settings",
		label: "settings",
		appearance: "tertiary",
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
				<img src={icon.src} alt={icon.alt} className="sui-integration__icon" />
				{isSettings && isActive && <Button {...settingsProps} />}
				<Toggle {...toggleProps} />
			</div>
			<div className="sui-integration__info">
				{!!title && (
					<h3 className="sui-heading--h4 sui-integration__title">{title}</h3>
				)}
				{!!additionalInfo && (
					<Tooltip type="icon" name="info" icon="info" customWidth={160}>
						{additionalInfo}
					</Tooltip>
				)}
				{isPro && (
					<Tag design="outlined" color="black" isSmall={true}>
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