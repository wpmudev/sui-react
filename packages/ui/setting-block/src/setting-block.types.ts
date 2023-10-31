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
	 * Optional children elements or components that can be nested within the SettingBlock.
	 * These can be any valid React nodes.
	 */
	children?: React.ReactNode

	/**
	 * An optional CSS class name to apply custom styling to the SettingBlock.
	 * Should be a string.
	 */
	className?: string
}

export type { SettingBlockProps }
