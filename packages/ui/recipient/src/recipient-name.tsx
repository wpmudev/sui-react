import React, { Fragment } from "react"
import { generateCN, isString } from "@wpmudev/sui-utils"
import { useStyles, useStylesTypes } from "@wpmudev/sui-hooks"

interface RecipientNameProps extends useStylesTypes {
	children?: React.ReactNode
}

const RecipientName: React.FC<RecipientNameProps> = ({
	children,
	...props
}) => {
	const { cssCN } = useStyles(props)

	if (!!children && !isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "name" used in the name element is not a string type.\n\n`,
		)
	}

	return (
		<Fragment>
			{children && (
				<span className={generateCN("sui-recipient__name", {}, cssCN)}>
					{children}
				</span>
			)}
		</Fragment>
	)
}

export { RecipientName }
export type { RecipientNameProps }
