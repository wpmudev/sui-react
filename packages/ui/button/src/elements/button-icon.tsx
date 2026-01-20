import React from "react"
import { isUndefined, isEmpty, generateCN } from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"

interface ButtonIconProps {
	/**
	 * Optional ID for the icon element
	 *
	 * @type {string | undefined}
	 */
	id?: string
	/**
	 * Icon name
	 *
	 * @type {string | undefined}
	 */
	name: string
	/**
	 * Icon size
	 *
	 * @type {string}
	 */
	size?: IconProps["size"]

	/**
	 * Additional className
	 *
	 * @type {string}
	 */
	className?: string
}

// Build "Icon" component.
const Icon: React.FC<ButtonIconProps> = ({
	id,
	name,
	size = "sm",
	className = "",
}) => {
	const hasIcon = !isUndefined(name) && !isEmpty(name ?? "")

	if (!hasIcon) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`,
		)
	}

	const IconName = name

	// Set Icon & iconColor based on "variation" value
	const IconTag = Icons[IconName as IconsNamesType]

	const classes = generateCN("sui-button__icon", {}, className)

	return (
		<span
			id={id}
			className={classes}
			aria-hidden="true"
			data-testid="button-icon"
		>
			<IconTag id={`${id}_icon`} size={size} />
		</span>
	)
}

// Publish required component(s).
export { Icon }
