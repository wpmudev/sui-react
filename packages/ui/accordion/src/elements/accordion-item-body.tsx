import React, { useContext } from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import {
	useDefaultChildren,
	useStyles,
	useStylesTypes,
} from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"
import { AccordionContext } from "../accordion-context"

interface AccordionItemBodyType extends useStylesTypes {
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
	hasPadding?: boolean
}

// The AccordionBody component is defined as a functional component using React.FC.
const AccordionItemBody: React.FC<AccordionItemBodyType> = ({
	children,
	hasPadding = true,
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

	// Default children content
	children = useDefaultChildren(children)
	const { suiInlineClassname } = useStyles(styleProps)

	const classNames = generateCN(
		"sui-accordion__item",
		{
			body: true,
			"no-padding": !hasPadding,
		},
		suiInlineClassname,
	)

	return (
		<div className={classNames} data-testid="accordion-body">
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

export { AccordionItemBody }
