import React, { Fragment, useCallback, useState } from "react"
import {
	isUndefined,
	isEmpty,
	isFunction,
	generateCN,
} from "@wpmudev/sui-utils"

// Import required component(s).
import { Button as Base } from "./button"
import { ToggleButtonProps } from "./button-toggle.types"

// Build "Toggle Button" component.
const ToggleButton: React.FC<ToggleButtonProps> = ({
	href,
	htmlFor,
	appearance,
	color,
	isSmall = false,
	isDisabled = false,
	isSelected = false,
	className,
	icon,
	children,
	onClick,
	...props
}) => {
	const isLink = !isUndefined(href)
	const isLabel = !isUndefined(htmlFor) && !isEmpty(htmlFor)

	if (isLink) {
		throw new Error(
			`Invalid parameter. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "href" is not supported by this component since toggle elements cannot be a link. Use default or label button instead.`,
		)
	}

	// Define button states.
	const [isChecked, setIsChecked] = useState<boolean>(isSelected)

	// Define button actions.
	const handleChange = useCallback(() => {
		setIsChecked(!isChecked)
	}, [isChecked])

	// Create button classes
	const classNames = generateCN(
		"sui-button",
		{
			selected: isSelected,
		},
		className,
	)

	return (
		<Base
			{...(isLabel && { htmlFor })}
			appearance={appearance}
			color={color}
			isSmall={!!isSmall}
			isDisabled={!!isDisabled}
			startIcon={icon ?? ""}
			className={classNames}
			{...(isFunction(onClick) && { onClick })}
			{...(!isLabel && { "aria-pressed": isSelected })}
			{...(!isLabel && { ...props })}
		>
			{isLabel && (
				<Fragment>
					<input
						id={htmlFor}
						className="sui-screen-reader-only"
						type="checkbox"
						tabIndex={isChecked ? 0 : -1}
						checked={isChecked}
						onChange={handleChange}
						{...(isDisabled && { disabled: isDisabled })}
						{...props}
					/>
					{children}
				</Fragment>
			)}
			{!isLabel && children}
		</Base>
	)
}

// Publish required component(s).
export { ToggleButton }
