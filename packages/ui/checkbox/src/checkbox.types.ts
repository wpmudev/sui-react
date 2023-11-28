import React, { ReactNode, HTMLAttributes } from "react"

interface _CheckboxGroupInnerProps
	extends Omit<CheckboxGroupProps, "_isMultiGroup"> {}

/**
 * Define the props for a CheckboxGroups component.
 */
interface CheckboxGroupsProps {
	/**
	 * Whethers the group of checkboxes is disabled or not
	 */
	isDisabled?: boolean

	/**
	 * The children elements of the groups
	 */
	children: React.ReactNode

	/**
	 * The props to share with all children
	 */
	commonCheckboxProps?: CheckboxProps

	/**
	 * When a change happens
	 */
	onChange?: CheckboxGroupProps["onChange"]
}

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
	 *
	 * A callback function to handle checkbox button selection changes, with two signatures
	 * - A Single argument which represent a list of items
	 * - 3 Arguments for a single item: id, isChecked and groupId
	 *
	 */
	onChange?(id: string, isChecked: boolean, groupId: boolean | string): void
	onChange?(items: CheckBoxItemsList): void

	/**
	 * Common checkbox props to be passed in checkbox items
	 */
	commonCheckboxProps?: CheckboxProps

	/**
	 * Checkbox group title
	 */
	title?: ReactNode
}

/**
 * Represents the properties for a checkbox component.
 */
interface CheckboxProps
	extends Omit<HTMLAttributes<HTMLInputElement>, "defaultValue" | "label"> {
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

type CheckBoxItemsList = CheckboxItemTypes[]

/**
 * Define the props for the context of a Checkbox component, which includes properties inherited from CheckboxGroupProps.
 */
interface CheckboxContextProps {
	items: CheckBoxItemsList
	setItems: (items: CheckboxContextProps["items"]) => void
	onChange?: CheckboxProviderTypes["onChange"]
}

interface CheckboxProviderTypes {
	/**
	 * children elements
	 */
	children: React.ReactNode
	/**
	 *
	 * A callback function to handle checkbox button selection changes, with two signatures
	 * - A Single argument which represent a list of items
	 * - 3 Arguments for a single item: id, isChecked and groupId
	 *
	 */
	onChange(items: CheckBoxItemsList): void
	onChange(id: string, isChecked?: boolean, groupId?: boolean | string): void
}

export type {
	CheckboxProps,
	CheckboxGroupProps,
	_CheckboxGroupInnerProps,
	CheckboxContextProps,
	CheckboxItemTypes,
	CheckBoxItemsList,
	CheckboxProviderTypes,
	CheckboxGroupsProps,
}
