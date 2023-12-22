import React from "react"
import { Close } from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"

interface PopoverCloseProps {
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

// Build "PopoverClose" component.
const PopoverClose: React.FC<PopoverCloseProps> = ({}) => {
	return (
		<span className="sui-tooltip__icon" aria-hidden="true">
			<Close size="sm" />
		</span>
	)
}

// Publish required component(s).
export { PopoverClose }
