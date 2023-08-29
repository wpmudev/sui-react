import React, { createContext, FC, useCallback, useState } from "react"

import {
	TableContextProps,
	TableContextProviderProps,
	TableExpectedAction,
	TableToolbarFilterTypes,
} from "./table.types"

// create the table context
const TableContext = createContext<TableContextProps | null>(null)

export type TableSortBy = {
	column: string
	order: "asc" | "desc"
}

export type TableColumnType = {
	title: string
	isPrimary?: boolean
}

// table context provider to provide the context to its children
const TableContextProvider: FC<TableContextProviderProps> = ({
	children,
	props = {},
}) => {
	// state to store filtered values
	const [filterValues, setFilterValues] = useState<
		Record<string, Pick<TableToolbarFilterTypes, "id" | "value">>[]
	>([])

	// state for selected rows
	const [selected, setSelected] = useState<Array<number | string>>([])
	// state for table rows
	const [rows, setRows] = useState<Record<string, any>[]>([])
	const [columns, setColumns] = useState<TableColumnType[]>([])
	// state to force collapse in drag-and-drop reordering
	const [forceCollapse, setForceCollapse] = useState(false)
	const [sortBy, setSortBy] = useState<TableSortBy>({
		column: "",
		order: "asc",
	})

	// function to handle row selection in the table
	const onSelect = useCallback(
		(id: number | string, isChecked = false, isSelectAll) => {
			// add or remove the selected row based on the current selection status
			let tempSelected: Array<number | string> = [...selected]

			switch (true) {
				// select all checkbox changed
				case typeof isSelectAll !== "undefined":
					tempSelected = (isChecked ? rows : []) as Array<number | string>
					break
				// table row checkbox checked
				case isChecked:
					tempSelected.push(id)
					break
				// table row checkbox unchecked
				case !isChecked:
					tempSelected.splice(tempSelected.indexOf(id), 1)
					break
			}

			setSelected(tempSelected)
		},
		[rows, selected],
	)

	// set a filter value in the table context.
	const setFilter = useCallback(
		(id: string, val: string | number) => {
			setFilterValues({
				...filterValues,
				[id]: val,
			})
		},
		[filterValues],
	)

	// trigger an action in the table context.
	const triggerAction = useCallback(
		(action: TableExpectedAction, data: unknown) => {
			props?.onAction?.(action, data)
		},
		[props],
	)

	// apply the filters
	const applyFilters = useCallback(() => {
		triggerAction("apply-filters", filterValues)
	}, [filterValues, triggerAction])

	// clear the filters
	const clearFilters = useCallback(() => {
		setFilterValues([])
		triggerAction("apply-filters", [])
	}, [triggerAction])

	// provide the table context to its children with the appropriate values
	return (
		<TableContext.Provider
			value={{
				...props,
				triggerAction,
				// table rows
				rows,
				setRows,
				// table columns
				columns,
				setColumns,
				// table selected rows
				selected,
				onSelect,
				// force-collapse all table rows
				forceCollapse,
				setForceCollapse,
				// filtered values
				filterValues,
				setFilter,
				// column sorting
				sortBy,
				setSortBy,
				applyFilters,
				clearFilters,
			}}
		>
			{children}
		</TableContext.Provider>
	)
}

export { TableContext, TableContextProvider }
