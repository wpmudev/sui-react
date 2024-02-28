import React, { useContext } from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import {
	SuiHTMLAttributes,
	SuiStyleType,
	generateCN,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"
import { AccordionContext } from "../accordion-context"

interface AccordionItemFooterTypes extends SuiStyleType, SuiHTMLAttributes {
	children?: React.ReactNode
}

// The AccordionFooter component is defined as a functional component using React.FC.
const AccordionItemFooter: React.FC<AccordionItemFooterTypes> = ({
	children,
	_htmlProps,
	_style,
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

	const { suiInlineClassname } = useStyles(_style)

	const classNames = generateCN(
		"sui-accordion__item",
		{
			footer: true,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} {..._renderHTMLPropsSafely(_htmlProps)}>
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
