import React, { ReactNode, HTMLAttributes } from "react"

interface _CheckboxGroupInnerProps
	extends Omit<CheckboxGroupProps, "_isMultiGroup"> {}

/**
 * Define the props for a CheckboxGroup component.
 */
interface CheckboxGroupProps {
	/**
	 * Indicates whether the checkbox buttons should be displayed inline.
	 */
	isInline?: boolean

	/**
	 * When group has sub-items
	 */
	hasSubItems?: boolean

	/**
	 * When CheckboxGroup component is under CheckBoxGroups
	 */
	_isMultiGroup?: boolean

	/**
	 * The children components rendered inside the checkbox group.
	 */
	children: ReactNode

	/**
	 * A callback function to handle checkbox button selection changes.
	 */
	onChange?(id: string, isChecked: boolean, groupId: boolean | string): void

	/**
	 * Common checkbox props to be passed in checkbox items
	 */
	commonCheckboxProps: CheckboxProps

	/**
	 * Checkbox group title
	 */
	title?: ReactNode
}

/**
 * Represents the properties for a checkbox component.
 */
interface CheckboxProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "defaultValue"> {
	/**
	 * The unique identifier for the checkbox button (optional).
	 */
	id?: string

	/**
	 * Group ID (for context)
	 */
	groupId?: string

	/**
	 * The name of the checkbox
	 */
	name?: string

	/**
	 * The label for the checkbox.
	 */
	label?: string

	/**
	 * The label for the checkbox.
	 */
	value?: string

	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean

	/**
	 * Indicates whether the checkbox should be displayed as small or not.
	 */
	isSmall?: boolean

	/**
	 * Indicates whether the checkbox is disabled or not.
	 */
	isDisabled?: boolean

	/**
	 * Indicates whether checkbox is checked or not
	 */
	isChecked?: boolean

	/**
	 * Mark checkbox checked as indeterminate
	 */
	isIndeterminate?: boolean

	/**
	 * Checkbox onChange callback
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} e
	 */
	onChange?(e: React.ChangeEvent<HTMLInputElement>): void
}

type CheckboxItemTypes = {
	id: string
	groupId?: string | boolean
	isChecked?: boolean
}

/**
 * Define the props for the context of a Checkbox component, which includes properties inherited from CheckboxGroupProps.
 */
interface CheckboxContextProps {
	items: CheckboxItemTypes[]
	setItems: (items: CheckboxContextProps["items"]) => void
	onChange?: CheckboxProviderTypes["onChange"]
}

interface CheckboxProviderTypes {
	children: React.ReactNode
	onChange(items: CheckboxItemTypes[]): void
}

export type {
	CheckboxProps,
	CheckboxGroupProps,
	_CheckboxGroupInnerProps,
	CheckboxContextProps,
	CheckboxItemTypes,
	CheckboxProviderTypes,
}
