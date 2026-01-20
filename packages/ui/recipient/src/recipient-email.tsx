import React, { Fragment, useId } from "react"
import { generateCN, isString, SuiStyleType } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

interface RecipientEmailProps extends SuiStyleType {
	id?: string
	children?: React.ReactNode
}

const RecipientEmail: React.FC<RecipientEmailProps> = ({
	id,
	children,
	_style = {},
}) => {
	const generatedId = useId()
	const recipientEmailId = id || `sui_recipient_email_${generatedId}`
	const { suiInlineClassname } = useStyles(_style)

	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "email" used in the name element is not a string type.\n\n`,
		)
	}

	return (
		<Fragment>
			{children && (
				<span
					id={recipientEmailId}
					className={generateCN("sui-recipient__email", {}, suiInlineClassname)}
				>
					{children}
				</span>
			)}
		</Fragment>
	)
}

export { RecipientEmail }
export type { RecipientEmailProps }
