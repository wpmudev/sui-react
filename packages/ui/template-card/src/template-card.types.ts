import React, { HTMLProps, ReactNode } from "react"

import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"
import { TagProps } from "@wpmudev/sui-tag"

// Define a type that represents the possible values for a Card button.
type CardValueType = string | number | undefined

/**
 * Define the props for a RadioGroup component.
 */
interface CardGroupProps
	extends SuiHTMLAttributes<HTMLProps<HTMLDivElement>>,
		SuiStyleType {
	/**
	 * The id of the radio group.
	 */
	id?: string

	/**
	 * The name of the radio group.
	 */
	name?: string

	/**
	 * The children components rendered inside the radio group.
	 */
	children?: ReactNode

	/**
	 * A callback function to handle radio button selection changes.
	 */
	onChange?(value: CardValueType): void

	/**
	 * The default value for the radio group (optional).
	 */
	defaultValue?: CardValueType

	/**
	 * Add additional className
	 */
	className?: string
}

interface CardProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>>,
		SuiStyleType {
	/**
	 * The unique identifier for the radio button (optional).
	 */
	id?: string

	/**
	 * The title text for the radio button (optional).
	 */
	title?: string

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
	tag?: TagProps

	/**
	 * Add additional className
	 */
	className?: string
}

interface CardInputProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>>,
		SuiStyleType,
		CardProps {}

interface CardContentProps
	extends SuiHTMLAttributes<HTMLProps<HTMLInputElement>>,
		SuiStyleType,
		CardProps {}

/**
 * Define the props for the context of a Radio component, which includes properties inherited from RadioGroupProps.
 */
interface CardContextProps extends CardGroupProps {
	/**
	 * The currently selected value within the radio group (optional).
	 */
	current?: CardValueType

	/**
	 * A function to set the currently selected value within the radio group.
	 */
	setCurrent(value: CardValueType): void
}

export type {
	CardValueType,
	CardGroupProps,
	CardContextProps,
	CardProps,
	CardInputProps,
	CardContentProps,
}
