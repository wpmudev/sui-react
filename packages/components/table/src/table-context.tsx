import React, { createContext, FC, useCallback, useState } from "react"

import { TableContextProps, TableContextProviderProps } from "./table.types"

// create the table context
const TableContext = createContext<TableContextProps | null>(null)

// table context provider to provide the context to its children
const TableContextProvider: FC<TableContextProviderProps> = ({
	children,
	value = {},
}) => {
	// state for selected rows
	const [selected, setSelected] = useState<Record<string, any>[]>([])
	// state for table rows
	const [rows, setRows] = useState<Record<string, any>[]>([])
	// state to force collapse in drag-and-drop reordering
	const [forceCollapse, setForceCollapse] = useState(false)

	// function to handle row selection in the table
	const onSelect = useCallback(
		(id: number | string, isChecked = false, isSelectAll) => {
			// add or remove the selected row based on the current selection status
			let clonedSelected: Record<string, any>[] = [...selected]

			switch (true) {
				// select all checkbox changed
				case typeof isSelectAll !== "undefined":
					clonedSelected = isChecked ? rows : []
					break
				// table row checkbox checked
				case isChecked:
					clonedSelected.push(id)
					break
				// table row checkbox unchecked
				default:
					clonedSelected.splice(clonedSelected.indexOf(id), 1)
			}

			setSelected(clonedSelected)
		},
		[rows, selected],
	)

	// provide the table context to its children with the appropriate values
	return (
		<TableContext.Provider
			value={{
				...value,
				rows,
				selected,
				onSelect,
				setRows,
				forceCollapse,
				setForceCollapse,
			}}
		>
			{children}
		</TableContext.Provider>
	)
}

export { TableContext, TableContextProvider }
