// Interface definition for the TabContextProps
import React, { HTMLProps, ProviderProps } from "react"
import { IconProps } from "@wpmudev/sui-icon"

/**
 * Props for the main `Tabs` component that represents the container for all tabs.
 *
 * @interface TabsProps
 * @augments {HTMLProps<HTMLDivElement>}
 */
interface TabsProps extends HTMLProps<HTMLDivElement> {
	className?: string // Additional CSS class names for the `Tabs` component.
	children?: React.ReactNode // The children components rendered inside the `Tabs` component.
}

/**
 * Props for the `TabContext` that provides the tab context to child components.
 *
 * @interface TabContextProps
 */
interface TabContextProps {
	id: string // Unique ID for the tab context.
	currentIndex?: number // Current active tab index (optional).
	switchTab: (index: number) => void // Function to switch to a specific tab by index.
}

/**
 * Props for the `TabNav` component that represents the container for tab navigation
 * in a tabbed interface.
 *
 * @interface TabNavProps
 */
interface TabNavProps {
	children?: React.ReactNode // Content of the tab navigation (can be any valid React node).
}

/**
 * Props for the `TabPanel` component that represents the container for tab panels
 * in a tabbed interface.
 *
 * @interface TabPanelProps
 * @augments {TabNavProps}
 */
interface TabPanelProps extends TabNavProps {}

/**
 * Props for the `TabPanelItem` component that represents a single tab panel in a tabbed interface.
 *
 * @interface TabPanelItemProps
 * @augments {TabNavProps}
 */
interface TabPanelItemProps extends TabNavProps {
	id?: string // Unique ID for the tab panel.
}

/**
 * Props for the `TabNavItem` component that represents a single tab item in a tabbed interface.
 *
 * @interface TabNavItemProps
 */
interface TabNavItemProps {
	id?: string // Unique ID for the tab item.
	children?: React.ReactNode // Content of the tab item (can be any valid React node).
	icon?: React.ReactNode | never // An optional icon to display with the tab item.
	stateIcon?: "InfoAlt" | "CheckAlt" | "" | never
	stateIconColor?: IconProps["color"] | never
	isDisabled?: Boolean
}

// Interface definition for the TabProviderProps
interface TabProviderProps extends Omit<ProviderProps<any>, "value"> {}

// Nav scroll directions
type TabNavScrollDirection = "right" | "left"

export type {
	TabsProps,
	TabContextProps,
	TabNavProps,
	TabNavItemProps,
	TabProviderProps,
	TabPanelProps,
	TabPanelItemProps,
	TabNavScrollDirection,
}
