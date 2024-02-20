import React, { Children, cloneElement, isValidElement, ReactNode } from "react"
import { TabPanelProps } from "../tabs.types"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

/**
 * TabPanel Component
 *
 * A React component that serves as a container for tab panels in a tabbed interface.
 *
 * @param {Object} props          - The props for the TabPanel component.
 * @param {*}      props.children - The content to be displayed within the TabPanel.
 *
 * @return {JSX.Element} The TabPanel component.
 */
const TabPanel: React.FC<TabPanelProps> = ({ children, ...props }) => {
	const { suiInlineClassname } = useStyles(props)

	return (
		<div className={generateCN("sui-tab__panel", {}, suiInlineClassname)}>
			{/* Map through the children to clone and update their props */}
			{Children.map(children, (child: ReactNode, index: number) => {
				if (isValidElement(child)) {
					// Clone the child element and add the "id" prop with the current index
					return cloneElement(child, { id: `${index}` } as object)
				}
				return null
			})}
		</div>
	)
}

// Export the TabPanel component
export { TabPanel }
