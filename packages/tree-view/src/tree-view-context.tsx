import React, { createContext, FC, useContext, useState } from "react"
import { TreeViewContextProps, TreeViewProviderProps } from "./tree-view.types"

const TreeViewContext = createContext<TreeViewContextProps | null>(null)

const TreeViewProvider: FC<TreeViewProviderProps> = ({ children, value }) => {
	// const [checkItems, setCheckItems] = useState<
	// 	TreeViewContextProps["checkList"]
	// >([])

	// @todo: make check works!

	return (
		<TreeViewContext.Provider value={{ ...value }}>
			{children}
		</TreeViewContext.Provider>
	)
}

export { TreeViewContext, TreeViewProvider }
