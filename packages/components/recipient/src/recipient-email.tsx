import React, { Fragment } from "react"
import { isString } from "@wpmudev/sui-utils"

interface RecipientEmailProps {
	children?: React.ReactNode
}

const RecipientEmail: React.FC<RecipientEmailProps> = ({ children }) => {
	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "email" used in the name element is not a string type.\n\n`,
		)
	}

	return (
		<Fragment>
			{children && <span className="sui-recipient__email">{children}</span>}
		</Fragment>
	)
}

export { RecipientEmail }
export type { RecipientEmailProps }
