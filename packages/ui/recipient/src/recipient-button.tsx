import React, { useId } from "react"

import { isString } from "@wpmudev/sui-utils"
import { Tooltip, TooltipProps } from "@wpmudev/sui-tooltip"

interface RecipientButtonProps extends TooltipProps {
	id?: string
	className?: string
	children?: React.ReactNode
}

// Build "Button" component.
const RecipientButton: React.FC<RecipientButtonProps> = ({
	id,
	className,
	children,
	customWidth,
	buttonProps,
}) => {
	const generatedId = useId()
	const recipientButtonId = id || `sui_recipient_button_${generatedId}`
	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "children" used in the button element is not a string type.\n\n`,
		)
	}

	return (
		<Tooltip
			id={recipientButtonId}
			buttonProps={{
				type: "tertiary",
				colorScheme: "black",
				iconOnly: true,
				isSmall: true,
				...buttonProps,
			}}
			type="button"
			label={children as string}
			className={className}
			customWidth={customWidth}
		>
			{children}
		</Tooltip>
	)
}

// Publish required component(s).
export { RecipientButton }
