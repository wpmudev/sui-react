import React, { useEffect, useState } from "react"

// Import required component(s)
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { SegmentedControlProps } from "./segmented-control.types"
import { SegmentedControlContext } from "./segmented-control-context"
import {
	useDefaultChildren,
	useScrollable,
	useStyles,
} from "@wpmudev/sui-hooks"
import { ChevronLeft, ChevronRight } from "@wpmudev/sui-icons"

const SegmentedControl: React.FC<SegmentedControlProps> = ({
	name = "segmented-control",
	defaultValue = "",
	onChange = () => {},
	children,
	isFullWidth = false,
	ariaAttrs = {},
	_htmlProps,
	_style = {},
}) => {
	const { containerRef, isScrollableLeft, isScrollableRight, scroll } =
		useScrollable()
	/**
	 * State to track the current selected value of the segmented control.
	 */
	const [value, setValue] = useState<string | number>("")

	// default children content
	children = useDefaultChildren(children)

	const { suiInlineClassname } = useStyles(_style)

	// update default value when it changes
	useEffect(() => {
		setValue(defaultValue)
	}, [defaultValue])

	/**
	 * Generate class names for the segmented control based on the isFullWidth prop.
	 */
	const classNames = generateCN(
		"sui-segmented-control",
		{
			"full-width": isFullWidth,
		},
		suiInlineClassname,
	)

	/**
	 * Handle click events on the segmented control items.
	 *
	 * @param {string} val - The value of the clicked segment.
	 */
	const onClick = (val: string) => {
		// Update the state with the newly selected value.
		setValue(val)
		// Call the onChange callback function if provided, passing the new value.
		if (onChange) {
			onChange(val)
		}
	}

	/**
	 * Render the SegmentedControlContext.Provider to provide the context values to child components.
	 * The context includes:
	 *
	 * @property {string}          name    - The name of the segmented control.
	 * @property {Function}        onClick - The click event handler for the segmented control items.
	 * @property {string | number} value   - The current selected value of the segmented control.
	 */
	return (
		<SegmentedControlContext.Provider
			value={{
				name,
				onClick,
				value,
			}}
		>
			<div className="sui-segmented-control__container">
				{isScrollableLeft && (
					<button
						className="sui-tab__arrow sui-tab__arrow--left"
						onClick={() => scroll("left")}
					>
						<ChevronLeft size="sm" />
					</button>
				)}
				{/* Render the segmented control with the provided children inside a div with appropriate class names. */}
				<div
					ref={containerRef}
					role="radiogroup"
					className={classNames}
					data-testid="segmented-control"
					{...ariaAttrs}
					{..._renderHTMLPropsSafely(_htmlProps)}
				>
					{children}
				</div>
				{isScrollableRight && (
					<button
						className="sui-tab__arrow sui-tab__arrow--right"
						onClick={() => scroll("right")}
					>
						<ChevronRight size="sm" />
					</button>
				)}
			</div>
		</SegmentedControlContext.Provider>
	)
}

// Export SegmentedControl component
export { SegmentedControl }
