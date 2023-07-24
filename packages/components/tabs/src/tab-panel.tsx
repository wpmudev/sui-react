import React, { Children, cloneElement, isValidElement, ReactNode } from "react"
import { TabPanelProps } from "./tabs.types"

/**
 * TabPanel
 *
 * React component that represents the container for tab panels
 * in a tabbed interface.
 *
 *
 * @param {TabNavProps} props - Props for the TabPanel component.
 * @return {JSX.Element} The TabPanel component.
 */
const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
	return (
		<div className="sui-tab__panel">
			{/* Map through the children to clone and update their props */}
			{Children.map(children, (child: ReactNode, index: number) => {
				if (isValidElement(child)) {
					// Clone the child element and add the "id" prop with the current index
					return cloneElement(child, { id: `${index}` })
				}
			})}
		</div>
	)
}

// Export the TabPanel component
export { TabPanel }
