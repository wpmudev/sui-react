import React, { Fragment } from "react"
import { isString } from "@wpmudev/react-utils"

// import { IconButton } from '@wpmudev/react-icon-button';

interface RecipientButtonProps {
	children?: React.ReactNode
}

// Build "Button" component.
const RecipientButton: React.FC<RecipientButtonProps> = ({ children }) => {
	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "children" used in the button element is not a string type.\n\n`,
		)
	}

	return (
		<Fragment>
			{/*	<IconButton
				label={children}
				appearance="tertiary"
				isSmall={true}
				{...props}
			/>*/}
		</Fragment>
	)
}

// Publish required component(s).
export { RecipientButton }
