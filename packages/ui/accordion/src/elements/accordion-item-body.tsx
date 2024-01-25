import React from "react"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import { useDefaultChildren } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

// The AccordionBody component is defined as a functional component using React.FC.
const AccordionItemBody: React.FC<{
	children?: React.ReactNode // The content of the accordion item, which can be any valid React node.
	hasPadding?: boolean
}> = ({ children, hasPadding = true }) => {
	// Default children content
	children = useDefaultChildren(children)

	const classNames = generateCN("sui-accordion__item", {
		body: true,
		"no-padding": !hasPadding,
	})
	return (
		<div className={classNames} data-testid="accordion-body">
			<Box>
				<BoxGroup isInline={false}>{children}</BoxGroup>
			</Box>
		</div>
	)
}

export { AccordionItemBody }
