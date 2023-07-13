import React, { Fragment } from "react"
import { isString } from "@wpmudev/react-utils"

interface RecipientNameProps {
	children?: React.ReactNode
}

const RecipientName: React.FC<RecipientNameProps> = ({ children }) => {
	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "name" used in the name element is not a string type.\n\n`,
		)
	}

	return (
		<Fragment>
			{children && <span className="sui-recipient__name">{children}</span>}
		</Fragment>
	)
}

export { RecipientName, RecipientNameProps }
