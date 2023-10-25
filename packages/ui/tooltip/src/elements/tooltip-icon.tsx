import React from "react"
import { isUndefined, isEmpty, generateCN } from "@wpmudev/sui-utils"

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
	size?: string
}

// Build "Icon" component.
const Icon: React.FC<TooltipIconProps> = ({
	name = "tooltip",
	size = "md",
}) => {
	const hasIcon = !isUndefined(name) && !isEmpty(name ?? "")

	if (!hasIcon) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`,
		)
	}

	const classNames = generateCN("suicons", {
		[name]: !isEmpty(name),
		[size]: true,
	})

	return (
		<span className="sui-tooltip__icon" aria-hidden="true">
			<span className={classNames} />
		</span>
	)
}

// Publish required component(s).
export { Icon }
