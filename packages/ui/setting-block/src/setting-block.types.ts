import React from "react"

/**
 * Defines the props for a SettingBlock component.
 */
interface SettingBlockProps {
	/**
	 * The title of the setting block.
	 * This prop is required and should be a string.
	 */
	title?: React.ReactNode

	/**
	 * An optional description for the setting block.
	 * It can be a string.
	 */
	description?: React.ReactNode

	/**
	 * Indicates whether this setting block is for Pro users.
	 * This prop is optional and should be a boolean.
	 */
	isPro?: boolean

	/**
	 * When set to true, it makes section adapt to the available width of its container
	 */
	isFluid?: boolean

	/**
	 * Optional children elements or components that can be nested within the SettingBlock.
	 * These can be any valid React nodes.
	 */
	children?: React.ReactNode

	/**
	 * An optional CSS class name to apply custom styling to the SettingBlock.
	 * Should be a string.
	 */
	className?: string

	/**
	 * Setting block actions
	 */
	actions?: React.ReactNode
}

export type { SettingBlockProps }
