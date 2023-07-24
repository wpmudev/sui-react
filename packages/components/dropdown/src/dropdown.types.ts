import React from 'react';

/**
 * Represents the properties for a dropdown component.
 */
interface DropdownProps {
	/**
	 * The unique identifier of the dropdown.
	 */
	id: string
	/**
	 * The label for the dropdown.
	 */
	label?: string
	/**
	 * Indicates whether the dropdown has a call-to-action button.
	 */
	hasCta?: boolean
	/**
	 * Indicates whether the dropdown should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean
	/**
	 * The current selected value of the dropdown.
	 */
	current: number
	/**
	 * The content of the dropdown.
	 */
	children?: React.ReactNode
}

export { DropdownProps}
