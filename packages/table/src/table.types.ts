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
interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
	/**
	 * Children nodes of the table row.
	 */
	children?: React.ReactNode
}

export { TableProps, TableSectionProps, TableCellProps, TableRowProps }
