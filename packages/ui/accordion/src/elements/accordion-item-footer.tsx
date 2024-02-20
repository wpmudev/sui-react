import React, { useContext } from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import {
	useDefaultChildren,
	useStyles,
	useStylesTypes,
} from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"
import { AccordionContext } from "../accordion-context"

interface AccordionItemFooterTypes extends useStylesTypes {
	children?: React.ReactNode
}

// The AccordionFooter component is defined as a functional component using React.FC.
const AccordionItemFooter: React.FC<AccordionItemFooterTypes> = ({
	children,
	...styleProps
}) => {
	// Get the "toggle" method and "isCurrentlyExpanded" state from the current AccordionItem
	const { spacing, isFlushed } = useContext(AccordionContext)

	let styles = {}

	// custom spacing
	if (spacing) {
		styles = {
			padding: spacing,
		}
	}

	// Default content when children is empty
	children = useDefaultChildren(children)

	const { suiInlineClassname } = useStyles(styleProps)

	const classNames = generateCN(
		"sui-accordion__item",
		{
			footer: true,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames}>
			{!isFlushed ? (
				<Box>
					<BoxGroup style={styles} isInline={false}>
						{children}
					</BoxGroup>
				</Box>
			) : (
				children
			)}
		</div>
	)
}

export { AccordionItemFooter }
