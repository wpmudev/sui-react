import React, { createContext, FC, useCallback, useContext } from "react"

import {
	TreeViewCheckType,
	TreeViewContextProps,
	TreeViewProviderProps,
} from "./tree-view.types"
import { getCheckIndex, getGroupState, groupSet, mergeItems } from "./helpers"

// Create the context for the TreeView component
const TreeViewContext = createContext<TreeViewContextProps | null>(null)

export const useTreeViewContext = () => {
	const ctx = useContext(TreeViewContext)

	const { items, setItems } = ctx

	/**
	 * When checkbox item toggles
	 */
	const onCheck = useCallback(
		(obj: TreeViewCheckType) => {
			const { id, group, isChecked, type } = obj

			setItems((prev) => {
				const cloned = [...prev]

				// Handle group check
				if ("group" === type && "undefined" !== typeof isChecked) {
					const state = getGroupState(group, prev)

					return mergeItems(
						cloned,
						groupSet(group, prev, {
							isChecked: ["none", "indeterminate"].includes(state) ?? isChecked,
						}),
					)
				}

				// find index
				const index = getCheckIndex(id, group, prev)

				// Modify if already exists
				if (index > -1) {
					cloned[index] = obj
				} else {
					cloned.push(obj)
				}

				return cloned
			})
		},
		[setItems],
	)

	return {
		allowCheck: ctx?.allowCheck,
		showIcons: ctx?.showIcons,
		items,
		onCheck,
	}
}

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
	return (
		<TreeViewContext.Provider value={value as TreeViewContextProps}>
			{/* Render the tree view component and its descendants */}
			{children}
		</TreeViewContext.Provider>
	)
}

export { TreeViewContext, TreeViewProvider }
