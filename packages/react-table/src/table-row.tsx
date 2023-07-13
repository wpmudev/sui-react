import React, { HTMLProps } from "react"

/**
 * Interface representing the properties of a table row.
 */
interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
	/**
	 * Children nodes of the table row.
	 */
	children?: React.ReactNode
}

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
	return (
		<tr className="sui-table__row" {...props}>
			{children}
		</tr>
	)
}

export { TableRow }
export type { TableRowProps }
