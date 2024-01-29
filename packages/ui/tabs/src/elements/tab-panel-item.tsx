// Import necessary modules and types
import React, { useContext } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { TabContext } from "./tab-context"
import { TabContextProps, TabPanelItemProps } from "../tabs.types"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

// Define the TabPanelItem component as a functional component
const TabPanelItem: React.FC<TabPanelItemProps> = ({ children, id }) => {
	// Get the tab context using the useContext hook
	const tabCtx = useContext<TabContextProps | null>(TabContext)

	// Get the tab ID from the tab context
	const tabId = tabCtx?.id

	// Get the current active index from the tab context
	const current = tabCtx?.currentIndex

	// Check if the current tab panel is active based on its ID
	const isActive = current === parseInt(id as string)

	// children default content
	children = useDefaultChildren(children, "Tab panel item")

	// Render the tab panel (div element) with appropriate attributes and CSS classes
	return (
		<div
			role="tabpanel"
			id={`${tabId}--panel-${id}`}
			aria-labelledby={`${tabId}--tab-${id}`}
			tabIndex={isActive ? 0 : -1}
			className={generateCN("sui-tab__panel-item", {
				active: isActive,
			})}
		>
			{/* Render the content of the tab panel */}
			{children}
		</div>
	)
}

// Export the TabPanelItem component
export { TabPanelItem }
