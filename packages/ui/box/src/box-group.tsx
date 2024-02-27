import React, { Children, Fragment, ReactElement } from "react"
import {
	_renderRestPropsSafely,
	generateCN,
	isObject,
} from "@wpmudev/sui-utils"

import { BoxGroupProps } from "./box-group.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Create box group component
const BoxGroup: React.FC<BoxGroupProps> = ({
	isInline = true,
	children,
	isHeader = false,
	isFooter = false,
	hasPadding = true,
	_htmlProps = {},
	_style = {},
}) => {
	const { suiInlineClassname } = useStyles(_style)

	// Build content based in slots
	const slots = Children.map(children, (child, index) => {
		const { slot, children: content } = (child as ReactElement)?.props ?? {}

		if (isObject(child) && ["left", "right"].includes(slot ?? "")) {
			return (
				<div
					key={`sui-box-group--${index}`}
					className={`sui-box-group__slot sui-box-group__${slot}`}
				>
					{content}
				</div>
			)
		}

		return <Fragment key={`sui-box-group--${index}`}>{child}</Fragment>
	})

	// Generate classnames
	const classNames = generateCN(
		"sui-box-group",
		{
			inline: isInline,
			header: isHeader,
			footer: isFooter,
			"no-padding": !hasPadding,
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classNames}
			data-testid="box-group"
			{..._renderRestPropsSafely(_htmlProps)}
		>
			{slots}
		</div>
	)
}

// Publish component(s)
export { BoxGroup }
