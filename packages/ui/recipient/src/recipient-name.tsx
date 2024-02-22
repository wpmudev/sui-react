import React, { Fragment } from "react"
import { generateCN, isString, SuiStyleType } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"

interface RecipientNameProps extends SuiStyleType {
	children?: React.ReactNode
}

const RecipientName: React.FC<RecipientNameProps> = ({
	children,
	_style = {},
	...props
}) => {
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
