import React, { Fragment } from "react"
import { generateCN, isString, SuiStyleType } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

interface RecipientEmailProps extends SuiStyleType {
	children?: React.ReactNode
}

const RecipientEmail: React.FC<RecipientEmailProps> = ({
	children,
	_style = {},
}) => {
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
