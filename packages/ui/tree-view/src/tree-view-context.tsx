import React, { createContext, FC, useState } from "react"
import { TreeViewContextProps, TreeViewProviderProps } from "./tree-view.types"

// Create the context for the TreeView component
const TreeViewContext = createContext<TreeViewContextProps | null>(null)

/**
 * TreeViewProvider Component
 *
 * A provider component that wraps the tree view component
 * to provide context values to the tree view and its descendants.
 *
 * @param {TreeViewProviderProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the TreeViewProvider component
 */
const TreeViewProvider: FC<TreeViewProviderProps> = ({ children, value }) => {
	// @todo: Uncomment the following code to handle checked items
	// const [checkItems, setCheckItems] = useState<
	// 	TreeViewContextProps["checkList"]
	// >([])

	// @todo: Add logic to handle checked items and make check work!

	return (
		<TreeViewContext.Provider value={value as TreeViewContextProps}>
			{/* Render the tree view component and its descendants */}
			{children}
		</TreeViewContext.Provider>
	)
}

export { TreeViewContext, TreeViewProvider }
