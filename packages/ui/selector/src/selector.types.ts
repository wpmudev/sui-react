import React from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { TagProps } from "@wpmudev/sui-tag"
import { useStylesTypes } from "@wpmudev/sui-hooks"
/**
 * Represents the properties for a Selector component.
 */
interface SelectorProps
	extends Partial<
			Omit<HTMLInputElement, "name" | "value" | "onChange" | "children">
		>,
		useStylesTypes {
	/** The label text for the radio input */
	label?: string
	/** The name attribute for the radio input */
	name?: string
	/** The value of the radio input */
	value?: string | number
	/** Whether the radio input is checked */
	isChecked?: boolean
	/** Whether the radio input is disabled */
	isDisabled?: boolean
	/** Whether the selector is a pro feature */
	isPro?: boolean
	/** Whether the selector item width is fluid */
	isFluid?: boolean
	/** Event handler for radio input change */
	onChange?(isChecked: boolean, value: string | number, name: string): void
	/** The alignment of the Selector component */
	alignment?: "left" | "center"
	/** The variation style of the Selector component */
	variation?: "default" | "icon-only" | "compound" | "image"
	/** URL for an icon or brand image */
	iconOrBrandUrl?: string | IconsNamesType
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
	onRemove?(): void
	/** Specifiy the color of the tag */
	tagColor?: TagProps["color"]
}

interface SelectorOptionProps extends useStylesTypes {
	iconOrBrandUrl: SelectorProps["iconOrBrandUrl"]
	title: SelectorProps["title"]
	description: SelectorProps["description"]
	imageUrl: SelectorProps["imageUrl"]
	isChecked: SelectorProps["isChecked"]
	alignment: SelectorProps["alignment"]
	variation: SelectorProps["variation"]
	tag: SelectorProps["tag"]
	onRemove: SelectorProps["onRemove"]
	tagColor: SelectorProps["tagColor"]
	isPro: SelectorProps["isPro"]
	allowRemove: SelectorProps["allowRemove"]
}

export type { SelectorProps, SelectorOptionProps }
