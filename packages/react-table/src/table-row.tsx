import React from "react"
import { TableRowProps } from "./table.types"

const TableRow: React.FC<TableRowProps> = ({ children, ...props }) => {
	return (
		<tr className="sui-table__row" {...props}>
			{children}
		</tr>
	)
}

export { TableRow }
