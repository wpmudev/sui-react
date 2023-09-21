import React, { ReactNode } from "react"
import { generateCN } from "@wpmudev/sui-utils"

interface RadioGroupProps {
	name: string
	isInline: boolean
	children: ReactNode
}

const RadioGroup = ({
	isInline = true,
	children,
	name = "",
	...props
}: RadioGroupProps) => {
	return (
		<div
			className={generateCN("sui-radio-group", { inline: isInline })}
			role="radiogroup"
			{...props}
		>
			{React.Children.map(children, (child) =>
				React.cloneElement(child as React.ReactElement<any>, {
					name,
				}),
			)}
		</div>
	)
}

export { RadioGroup }
