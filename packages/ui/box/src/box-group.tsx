import React, { Children, Fragment, ReactElement, useId } from "react"
import {
	_renderHTMLPropsSafely,
	generateCN,
	isObject,
} from "@wpmudev/sui-utils"

import { BoxGroupProps } from "./box-group.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Create box group component
const BoxGroup: React.FC<BoxGroupProps> = ({
	id,
	isInline = true,
	children,
	className = "",
	isHeader = false,
	isFooter = false,
	hasPadding = true,
	_htmlProps = {},
	_style = {},
}) => {
	const generatedId = useId()
	const boxGroupId = id || `sui_box_group_${generatedId}`

	const { suiInlineClassname } = useStyles(_style, className)

	// Build content based in slots
	const slots = Children.map(children, (child, index) => {
		const {
			slot,
			children: content,
			id: childId,
		} = (child as ReactElement)?.props ?? {}

		if (isObject(child) && ["left", "right"].includes(slot ?? "")) {
			return (
				<div
					key={`sui-box-group--${index}`}
					id={childId || `${boxGroupId}_slot_${slot}`}
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
			id={boxGroupId}
			className={classNames}
			data-testid="box-group"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{slots}
		</div>
	)
}

// Publish component(s)
export { BoxGroup }
