import React, { ReactNode } from "react"
import { generateCN } from "@wpmudev/sui-utils"

interface RadioGroupProps {
	isInline: boolean
	children: ReactNode
}

const RadioGroup = ({
	isInline = true,
	children,
	...props
}: RadioGroupProps) => {
	return (
		<div
			className={generateCN("sui-radio-group", { inline: isInline })}
			role="radiogroup"
		>
			{React.Children.map(children, (child) =>
				React.cloneElement(child as React.ReactElement<any>, {
					...props,
				}),
			)}
		</div>
	)
}

export { RadioGroup }
