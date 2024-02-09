import React, { ReactNode, useState } from "react"

// Import required component(s)
import { generateCN } from "@wpmudev/sui-utils"

import { SegmentedControlProps } from "./segmented-control.types"
import { SegmentedControlContext } from "./segmented-control-context"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

const SegmentedControl: React.FC<SegmentedControlProps> = ({
	name = "segmented-control",
	defaultValue = "",
	onChange = () => {},
	children,
	isFullWidth = false,
	...props
}) => {
	/**
	 * State to track the current selected value of the segmented control.
	 */
	const [value, setValue] = useState<string | number>(defaultValue)

	// default children content
	children = useDefaultChildren(children)

	const { suiInlineClassname } = useStyles(props)

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
			{/* Render the segmented control with the provided children inside a div with appropriate class names. */}
			<div className={classNames} data-testid="segmented-control">
				{children}
			</div>
		</SegmentedControlContext.Provider>
	)
}

// Export SegmentedControl component
export { SegmentedControl }
