import React, {
	Children,
	cloneElement,
	FC,
	isValidElement,
	ReactNode,
} from "react"

import { TabNavProps } from "../tabs.types"

/**
 * TabNav
 *
 * React component that represents the container for tab navigation
 * in a tabbed interface.
 *
 * @param {TabNavProps} props - Props for the TabNav component.
 * @return {JSX.Element} The TabNav component.
 */
const TabNav: FC<TabNavProps> = ({ children }) => {
	return (
		<div className="sui-tab__nav" role="tablist" aria-orientation="horizontal">
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

// Export the TabNav component
export { TabNav }
