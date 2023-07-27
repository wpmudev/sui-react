import React, { HTMLProps } from "react"

/**
 * Interface representing the properties of a table section.
 */
interface TableSectionProps extends HTMLProps<HTMLTableSectionElement> {
	/**
	 * Children nodes of the table section.
	 */
	children?: React.ReactNode
}

/**
 * Interface representing the properties of a table.
 */
interface TableProps extends HTMLProps<HTMLTableElement> {
	/**
	 * Children nodes of the table.
	 */
	children?: React.ReactNode

	/**
	 * ARIA label for the table.
	 */
	ariaLabel?: string

	/**
	 * Determines if the table allows checkable rows with checkboxes.
	 */
	allowCheck?: boolean

	/**
	 * Determines if the table supports drag-and-drop reordering of rows.
	 */
	isDraggable?: boolean

	hasToolbar?: boolean

	/**
	 * Callback function triggered when a row is checked/unchecked (used in checkable tables).
	 */
	onCheck: () => void
}

/**
 * Interface representing the properties of a table cell.
 */
interface TableCellProps
	extends HTMLProps<HTMLTableCellElement | HTMLTableHeaderCellElement> {
	/**
	 * Children nodes of the table cell.
	 */
	children?: React.ReactNode
}

/**
 * Interface representing the properties of a table row.
 */
interface TableRowProps extends Omit<HTMLProps<HTMLTableRowElement>, "id"> {
	/**
	 * The unique ID of the table row.
	 */
	id: number | string

	/**
	 * Determines if the row is under the table header.
	 */
	isUnderHeader?: boolean

	/**
	 * Determines if the row is expandable (can show additional content when expanded).
	 */
	isExpandable?: boolean

	/**
	 * Content to display when the row is expanded (if isExpandable is true).
	 */
	expandableContent?: React.ReactNode

	/**
	 * Children nodes of the table row.
	 */
	children?: React.ReactNode
}

/**
 * Interface for the table context
 */
interface TableContextProps {
	/**
	 * Allows row selection with checkboxes
	 */
	allowCheck?: boolean
	/**
	 * Array of selected row IDs
	 */
	selected: number[]
	/**
	 * Supports drag-and-drop reordering
	 */
	isDraggable?: boolean
	/**
	 * Array of table rows with additional data
	 */
	rows: Record<string, any>[]
	/**
	 * Function to handle row selection
	 */
	onSelect: (
		id: number | string,
		isChecked: boolean,
		isSelectAll?: boolean,
	) => void
	/**
	 * Function to set the table rows
	 */
	setRows(rows: Record<string, any>[]): void
	/**
	 * Indicates whether to force collapse in drag-and-drop reordering
	 */
	forceCollapse: boolean
	/**
	 * Function to set the forceCollapse state
	 */
	setForceCollapse(collapse: boolean): void
}

/**
 * Interface for the table context provider
 */
interface TableContextProviderProps {
	/**
	 * Value to be provided by the table context
	 */
	value: Pick<TableContextProps, "allowCheck" | "isDraggable">
	/**
	 * Children components to be wrapped by the context provider
	 */
	children: React.ReactNode // children components to be wrapped by the context provider
}

export type {
	TableProps,
	TableSectionProps,
	TableCellProps,
	TableRowProps,
	TableContextProps,
	TableContextProviderProps,
}
