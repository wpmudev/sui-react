// Import necessary modules and types
import React, { FC, useCallback, useContext } from "react"
import { generateCN } from "@wpmudev/sui-utils"

import { TabContextProps, TabNavItemProps } from "./tabs.types"
import { TabContext } from "./tab-context"
import { InfoAlt, CheckAlt } from "@wpmudev/sui-icons"

// Define the TabNavItem component as a functional component
const TabNavItem: FC<TabNavItemProps> = ({
	id,
	icon,
	stateIcon,
	stateIconColor,
	children,
}) => {
	// Get the tab context using the useContext hook
	const tabCtx = useContext<TabContextProps | null>(TabContext)

	// Get the tab ID from the tab context
	const tabId = tabCtx?.id

	// Get the current active index from the tab context
	const current = tabCtx?.currentIndex

	// Check if the current tab item is active based on its ID
	const isActive = current === parseInt(id as string)

	/**
	 * Callback function to handle tab click events.
	 * It calls the `switchTab` function from the tab context to switch to the clicked tab.
	 */
	const onTabClick = useCallback(() => {
		tabCtx?.switchTab(parseInt(id as string))
	}, [id, tabCtx])

	// List of expected state icons
	const stateIcons = {
		InfoAlt,
		CheckAlt,
	}

	// extract state icon
	const StateIcon = stateIcons[stateIcon]

	// Render the tab header (button element) with appropriate attributes and event handlers
	return (
		<button
			id={`${tabId}--tab-${id}`}
			data-index={id}
			role="tab"
			type="button"
			className={generateCN("sui-tab__nav-item", {
				active: isActive,
			})}
			aria-selected={isActive}
			aria-controls={`${tabId}--panel-${id}`}
			tabIndex={isActive ? 0 : -1}
			onClick={onTabClick}
		>
			{/* Render the optional icon if provided */}
			{!!icon && icon}
			{/* Render the content of the tab item */}
			{children}
			{!!stateIcon && <StateIcon color={stateIconColor} size="sm" />}
		</button>
	)
}

// Export the TabNavItem component
export { TabNavItem }
