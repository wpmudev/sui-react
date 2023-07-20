import React, { useState } from "react"
import { isUndefined, isEmpty, isFunction } from "@wpmudev/react-utils"

import { Toggle } from "@wpmudev/react-toggle"
import { Tooltip } from "@wpmudev/react-tooltip"
// import { IconButton } from "@wpmudev/react-icon-button";
import { Tag } from "@wpmudev/react-tag"

export const Integration = ({
	title,
	description,
	additionalInfo = "",
	image,
	isDisabled = false,
	isActive = false,
	isSettings = false,
	isPro = false,
	onSettingsClick,
	onClick,
}) => {
	const has = {}
	const set = {}

	// Define image object
	set.icon = Object.assign(
		{
			src: "",
			alt: "",
		},
		image,
	)

	// Props validation
	has.title = !isUndefined(title) && !isEmpty(title) ? true : false
	has.description =
		!isUndefined(description) && !isEmpty(description) ? true : false
	has.additionalInfo =
		!isUndefined(additionalInfo) && !isEmpty(additionalInfo) ? true : false

	// Define component states
	;[has.state, set.state] = useState()
	;[has.hover, set.hover] = useState(false)
	;[has.focus, set.focus] = useState(false)
	;[has.active, set.active] = useState(isActive)

	// Define container props
	set.containerProps = {
		className: "sui-integration",
	}

	// Define toggle props
	set.toggleProps = {
		defaultValue: has.active,
		isLabelHidden: true,
		isDisabled: set.disabled,
		onClick: (e) => {
			set.active(!has.active)

			if (isFunction(onClick)) {
				onClick(e)
			}
		},
		onMouseEnter: () => set.hover(true),
		onMouseDownCapture: () => set.focus(true),
		onMouseUpCapture: () => set.focus(true),
		onMouseLeave: () => set.hover(false),
		onBlurCapture: () => set.focus(false),
	}

	// Settings button props.
	set.settingsProps = {
		icon: "settings",
		label: "settings",
		appearance: "tertiary",
		color: "black",
		isSmall: true,
		isDisabled: set.disabled,
		onClick: (e) => {
			if (isFunction(onSettingsClick)) {
				onSettingsClick(e)
			}
		},
	}

	if (has.active && !isDisabled) {
		set.containerProps.className += " sui-integration--active"
	}

	if (isDisabled || isPro) {
		set.containerProps.className += " sui-integration--disabled"
		set.disabled = true
	} else {
		if (has.hover) {
			set.containerProps.className += " sui-integration--hover"
		}

		if (has.focus) {
			set.containerProps.className += " sui-integration--focus"
		}
	}

	return (
		<div {...set.containerProps}>
			<div className="sui-integration__header">
				<img
					src={set.icon.src}
					alt={set.icon.alt}
					className="sui-integration__icon"
				/>
				{/*{isSettings && has.active && (*/}
				{/*	<IconButton {...set.settingsProps}/>*/}
				{/*)}*/}
				<Toggle {...set.toggleProps} />
			</div>
			<div className="sui-integration__info">
				{has.title && <h3 className="sui-integration__title">{title}</h3>}
				{has.additionalInfo && (
					<Tooltip type="icon" icon="info" customWidth={160}>
						{additionalInfo}
					</Tooltip>
				)}
				{isPro && (
					<Tag design="outlined" color="black" isSmall={true}>
						PRO
					</Tag>
				)}
			</div>
			{has.description && (
				<p className="sui-integration__description">{description}</p>
			)}
		</div>
	)
}
