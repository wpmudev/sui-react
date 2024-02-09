import React from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import {
	useDefaultChildren,
	useStyles,
	useStylesTypes,
} from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

interface AccordionItemFooterTypes extends useStylesTypes {
	children?: React.ReactNode
}

// The AccordionFooter component is defined as a functional component using React.FC.
const AccordionItemFooter: React.FC<AccordionItemFooterTypes> = ({
	children,
	...styleProps
}) => {
	// Default content when children is empty
	children = useDefaultChildren(children)

	const { cssCN } = useStyles(styleProps)

	const classNames = generateCN(
		"sui-accordion__item",
		{
			footer: true,
		},
		cssCN,
	)

	return (
		<div className={classNames}>
			<Box>
				<BoxGroup isInline={false}>{children}</BoxGroup>
			</Box>
		</div>
	)
}

export { AccordionItemFooter }
