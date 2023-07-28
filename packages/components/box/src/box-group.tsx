import React, { Children, Fragment } from "react"
import { generateCN, isObject } from "@wpmudev/sui-utils"

import { BoxGroupProps } from "./box-group.types"

// Create box group component
const BoxGroup: React.FC<BoxGroupProps> = ({ isInline = true, children }) => {
	// Build content based in slots
	const slots = Children.map(children, (child, index) => {
		const { slot, children: content } = child.props ?? {}

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

	// generate classnames
	const classNames = generateCN("sui-box-group", {
		inline: isInline,
	})

	return <div className={classNames}>{slots}</div>
}

// Publish component(s)
export { BoxGroup }
