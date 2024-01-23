import React, { Children, Fragment, ReactElement } from "react"
import { generateCN, isObject } from "@wpmudev/sui-utils"

import { BoxGroupProps } from "./box-group.types"

// Create box group component
const BoxGroup: React.FC<BoxGroupProps> = ({
	isInline = true,
	children,
	isHeader = false,
	isFooter = false,
	hasPadding = true,
	style,
}) => {
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
	const classNames = generateCN("sui-box-group", {
		inline: isInline,
		header: isHeader,
		footer: isFooter,
		"no-padding": !hasPadding,
	})

	return (
		<div className={classNames} style={style} data-testid="box-group">
			{slots}
		</div>
	)
}

// Publish component(s)
export { BoxGroup }
