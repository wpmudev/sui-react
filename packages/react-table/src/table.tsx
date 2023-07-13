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

const Table: React.FC<TableProps> = ({ children, ...props }) => {
	return (
		<table className="sui-table" {...props}>
			{children}
		</table>
	)
}

export { Table, TableProps, TableSectionProps }
