import React from "react"
import { TableProps } from "./table.types"

const Table: React.FC<TableProps> = ({ children, ...props }) => {
	return (
		<table className="sui-table" {...props}>
			{children}
		</table>
	)
}

export { Table }
