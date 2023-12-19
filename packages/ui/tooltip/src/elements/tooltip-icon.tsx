import React from "react"
import { isUndefined, isEmpty, generateCN } from "@wpmudev/sui-utils"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"

interface TooltipIconProps {
	/**
	 * Icon name
	 *
	 * @type {string | undefined}
	 */
	name?: string
	/**
	 * Icon size
	 *
	 * @type {string}
	 */
	size?: IconProps["size"]
}

// Build "Icon" component.
const Icon: React.FC<TooltipIconProps> = ({ name = "Info", size = "sm" }) => {
	const hasIcon = !isUndefined(name) && !isEmpty(name ?? "")

	if (!hasIcon) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`,
		)
	}

	const IconName = name

	// Set Icon & iconColor based on "variation" value
	const IconTag = Icons[IconName as IconsNamesType]

	return (
		<span className="sui-tooltip__icon" aria-hidden="true">
			<IconTag size={size} />
		</span>
	)
}

// Publish required component(s).
export { Icon }
