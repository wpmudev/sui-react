import { HTMLProps, ReactNode } from "react"
import { validationPropsType } from "@wpmudev/sui-hooks"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

// Define a type that represents the possible values for a radio button.
type RadioValueType = string | number | undefined

/**
 * Define the props for a RadioGroup component.
 */
interface RadioGroupProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType,
		validationPropsType {
	/**
	 * The name of the radio group.
	 */
	name?: string

	/**
	 * Indicates whether the radio buttons should be displayed inline.
	 */
	isInline?: boolean

	/**
	 * The children components rendered inside the radio group.
	 */
	children?: ReactNode

	/**
	 * A callback function to handle radio button selection changes.
	 */
	onChange?(value: RadioValueType): void

	/**
	 * The default value for the radio group (optional).
	 */
	defaultValue?: RadioValueType

	/**
	 * Indicates whether the radio buttons should be displayed with a smaller size (optional).
	 */
	isSmall?: boolean

	/**
	 * Indicates whether the radio group should be displayed as a block element (optional).
	 */
	asBlock?: boolean

	/**
	 * Indicates whether the radio button is disabled (optional).
	 */
	isDisabled?: boolean

	/**
	 * Add additional className
	 */
	className?: string
}

/**
 * Define the props for a Radio component.
 */
interface RadioProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>>,
		SuiStyleType {
	/**
	 * The unique identifier for the radio button (optional).
	 */
	id?: string

	/**
	 * The label text for the radio button (optional).
	 */
	label?: string

	/**
	 * A description or additional information about the radio button (optional).
	 */
	description?: string

	/**
	 * Radio value
	 */
	value?: string

	/**
	 * A tag associated with the radio button (optional).
	 */
	tag?: string

	/**
	 * Indicates whether the radio button is disabled (optional).
	 */
	isDisabled?: boolean
}

/**
 * Define the props for the context of a Radio component, which includes properties inherited from RadioGroupProps.
 */
interface RadioContextProps
	extends Omit<RadioGroupProps, "isInline" | "children">,
		validationPropsType {
	/**
	 * The currently selected value within the radio group (optional).
	 */
	current?: RadioValueType

	/**
	 * A function to set the currently selected value within the radio group.
	 */
	setCurrent(value: RadioValueType): void
}

export type { RadioProps, RadioGroupProps, RadioContextProps, RadioValueType }
