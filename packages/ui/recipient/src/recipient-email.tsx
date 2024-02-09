import React, { Fragment } from "react"
import { generateCN, isString } from "@wpmudev/sui-utils"
import { useStyles, useStylesTypes } from "@wpmudev/sui-hooks"

interface RecipientEmailProps extends useStylesTypes {
	children?: React.ReactNode
}

const RecipientEmail: React.FC<RecipientEmailProps> = ({
	children,
	...props
}) => {
	const { suiInlineClassname } = useStyles(props)

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
