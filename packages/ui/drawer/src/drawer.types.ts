/**
 * Importing React from "react"
 */
import React, { HTMLProps } from "react"

import { TooltipProps } from "@wpmudev/sui-tooltip"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

/**
 * Define props for the Drawer component
 */
export interface DrawerTypes
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	/**
	 * Optional class name for styling
	 */
	className?: string

	/**
	 * Content to be rendered inside the Drawer
	 */
	children: React.ReactNode

	/**
	 * Indicates whether the Drawer is open or not
	 */
	isOpen?: boolean

	/**
	 * Indicates whether the Drawer is open or not
	 */
	isFullWidth?: boolean

	/**
	 * Size of the Drawer, default is "default" or can be "sm"
	 */
	size?: "default" | "sm"

	/**
	 * Position of the Drawer, default is "right" or can be "left"
	 */
	placement?: "left" | "right"

	/**
	 * Indicates whether the Drawer has a container
	 */
	hasContainer?: boolean

	/**
	 * Indicates whether the Drawer has a container
	 */
	hasOverlay?: boolean

	/**
	 * Indicates whether shadow should be disabled for the Drawer
	 */
	disableShadow?: boolean

	/**
	 * Indicates whether Drawer should close when clicked outside
	 */
	outerClickClose?: boolean
}

/**
 * Define props for the DrawerHeader component
 */
export interface DrawerHeaderTypes extends SuiStyleType {
	/**
	 * Title to be displayed in the DrawerHeader
	 */
	title: string

	/**
	 * Optional class name for styling
	 */
	className?: string

	/**
	 * Has back button.
	 */
	back?: {
		show: boolean

		mobileOnly?: boolean

		/**
		 * Has back button.
		 */
		action?: () => void
	}

	/**
	 * Has back button.
	 */
	onBack?: () => void

	/**
	 * Optional hint text to be displayed
	 */
	hintText?: string

	/**
	 * Tooltip options for additional information
	 */
	tooltipOptions?: TooltipProps
}

/**
 * Define props for the DrawerFooter component
 */
export interface DrawerFooterTypes extends SuiStyleType {
	/**
	 * Optional class name for styling
	 */
	className?: string

	/**
	 * Content to be rendered inside the DrawerFooter
	 */
	children: React.ReactNode
}

/**
 * Define actions that can be performed on the Drawer
 */
export type DrawerActions = {
	/**
	 * Function to open the Drawer
	 */
	open: () => void

	/**
	 * Function to hide the Drawer
	 */
	hide: () => void

	/**
	 * Function to toggle the visibility of the Drawer
	 */
	toggle: () => void
}
