import React, { Children, Fragment } from "react"
import { generateCN, isObject } from "@wpmudev/react-utils"

/**
 * Represents the properties for a box group component.
 */
interface BoxGroupProps {
	/**
	 * Indicates whether the boxes should be displayed inline or not.
	 */
	isInline?: boolean
	/**
	 * The content of the box group.
	 */
	children?: React.ReactNode
}

// Create box group component
const BoxGroup = ({ isInline = true, children }: BoxGroupProps) => {
	// Build content based in slots
	const slots = Children.map(children, (child, index) => {
		const { slot, children: content } = child.props

		if (isObject(child) && ["left", "right"].includes(slot)) {
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
export { BoxGroup, BoxGroupProps }
