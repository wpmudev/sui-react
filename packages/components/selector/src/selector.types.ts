import React from "react"

/**
 * Represents the properties for a Selector component.
 */
interface SelectorProps
	extends Partial<
		Omit<HTMLInputElement, "name" | "value" | "onChange" | "children">
	> {
	/** The label text for the radio input */
	label: string
	/** The name attribute for the radio input */
	name: string
	/** The value of the radio input */
	value: string | number
	/** Whether the radio input is checked */
	isChecked?: boolean
	/** Whether the radio input is disabled */
	isDisabled?: boolean
	/** Whether the selector is a pro feature */
	isPro?: boolean
	/** Event handler for radio input change */
	onChange?(isChecked: boolean, value: string | number, name: string): void
	/** The alignment of the Selector component */
	alignment?: "left" | "center"
	/** The variation style of the Selector component */
	variation?: "default" | "icon-only" | "compound" | "image"
	/** URL for an icon or brand image */
	iconOrBrandUrl?: string
	/** The title text */
	title?: string
	/** The description text */
	description?: string
	/** URL for an image */
	imageUrl?: string
	/** Optional tag content */
	tag?: React.ReactNode
	/** Whether removal of the Selector is allowed */
	allowRemove?: boolean
	/** Event handler for removing the Selector */
	onRemove?(name: string, value: string | number): void
	/** Specifiy the color of the tag */
	tagColor:
		| "default"
		| "blue"
		| "yellow"
		| "red"
		| "green"
		| "white"
		| "black"
		| "navy"
}

interface SelectorOptionProps
	extends Pick<
		SelectorProps,
		| "iconOrBrandUrl"
		| "title"
		| "description"
		| "imageUrl"
		| "isChecked"
		| "alignment"
		| "variation"
		| "tag"
		| "allowRemove"
		| "onRemove"
		| "tagColor"
		| "isPro"
	> {}

export type { SelectorProps, SelectorOptionProps }
