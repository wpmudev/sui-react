import React from "react"
import { isUndefined, isEmpty } from "@wpmudev/sui-utils"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { TooltipIconProps } from "../tooltip.types"

// Build "Icon" component.
const Icon: React.FC<TooltipIconProps> = ({
	id,
	name = "Info",
	size = "sm",
	colorScheme = "",
	onClick = () => null,
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

	return (
		<span
			id={id}
			className="sui-tooltip__icon"
			aria-hidden="true"
			onClick={onClick}
		>
			<IconTag size={size} colorScheme={colorScheme} />
		</span>
	)
}

// Publish required component(s).
export { Icon }
