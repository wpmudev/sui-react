import React, { ReactNode } from "react"
import { generateCN } from "@wpmudev/sui-utils"

interface RadioGroupProps {
	isInline: boolean
	children: ReactNode
}

const RadioGroup = ({ isInline, children }: RadioGroupProps) => {
	return (
		<div
			className={generateCN("sui-radio-group", { inline: isInline })}
			role="radiogroup"
		>
			{children}
		</div>
	)
}

export { RadioGroup }
