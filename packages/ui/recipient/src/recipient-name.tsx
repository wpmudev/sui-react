import React, { Fragment, useId } from "react"
import { generateCN, isString, SuiStyleType } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

interface RecipientNameProps extends SuiStyleType {
	id?: string
	children?: React.ReactNode
}

const RecipientName: React.FC<RecipientNameProps> = ({
	id,
	children,
	_style = {},
}) => {
	const generatedId = useId()
	const recipientNameId = id || `sui-recipient-name-${generatedId}`
	const { suiInlineClassname } = useStyles(_style)

	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "name" used in the name element is not a string type.\n\n`,
		)
	}

	return (
		<Fragment>
			{children && (
				<span
					id={recipientNameId}
					className={generateCN("sui-recipient__name", {}, suiInlineClassname)}
				>
					{children}
				</span>
			)}
		</Fragment>
	)
}

export { RecipientName }
export type { RecipientNameProps }
