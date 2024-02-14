import React from "react"

import { isString } from "@wpmudev/sui-utils"
import { Tooltip, TooltipProps } from "@wpmudev/sui-tooltip"

interface RecipientButtonProps extends TooltipProps {
	className?: string
	children?: React.ReactNode
}

// Build "Button" component.
const RecipientButton: React.FC<RecipientButtonProps> = ({
	children,
	...props
}) => {
	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "children" used in the button element is not a string type.\n\n`,
		)
	}

	return (
		<Tooltip
			label={children as string}
			type="tertiary"
			iconOnly={true}
			isSmall={true}
			{...props}
		>
			{children}
		</Tooltip>
	)
}

// Publish required component(s).
export { RecipientButton }
