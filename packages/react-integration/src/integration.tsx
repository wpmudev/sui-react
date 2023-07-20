import React, { useState } from "react"
import { isFunction, generateCN } from "@wpmudev/react-utils"
import { Toggle } from "@wpmudev/react-toggle"
import { Tooltip } from "@wpmudev/react-tooltip"
import { Tag } from "@wpmudev/react-tag"
import { useInteraction } from "@wpmudev/react-hooks"

import { IntegrationProps } from "./integration.types"

const Integration: React.FC<IntegrationProps> = ({
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
	// const has = {}
	// const set = {}

	// Define image object
	const icon = Object.assign(
		{
			src: "",
			alt: "",
		},
		image,
	)

	// Props validation
	// has.title = !isUndefined(title) && !isEmpty(title) ? true : false
	// has.description =
	// 	!isUndefined(description) && !isEmpty(description) ? true : false
	// has.additionalInfo =
	// 	!isUndefined(additionalInfo) && !isEmpty(additionalInfo) ? true : false

	const [isHovered, isFocused, methods] = useInteraction({})

	// Define component states
	// const [state, setState] = useState()
	const [isActive, setIsActive] = useState(isActive)

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
	// const settingsProps = {
	// 	icon: "settings",
	// 	label: "settings",
	// 	appearance: "tertiary",
	// 	color: "black",
	// 	isSmall: true,
	// 	isDisabled,
	// 	onClick: (e) => {
	// 		if (isFunction(onSettingsClick)) {
	// 			onSettingsClick(e)
	// 		}
	// 	},
	// }

	// if (isDisabled || isPro) {
	// 	set.disabled = true
	// }

	return (
		<div className={classNames}>
			<div className="sui-integration__header">
				<img src={icon.src} alt={icon.alt} className="sui-integration__icon" />
				{/*{isSettings && has.active && (*/}
				{/*	<IconButton {...settingsProps}/>*/}
				{/*)}*/}
				<Toggle {...toggleProps} />
			</div>
			<div className="sui-integration__info">
				{!!title && <h3 className="sui-integration__title">{title}</h3>}
				{!!additionalInfo && (
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
			{!!description && (
				<p className="sui-integration__description">{description}</p>
			)}
		</div>
	)
}

export { Integration }
