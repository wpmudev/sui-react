/**
 *
 * External dependencies
 *
 */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 *
 * Internal dependencies
 *
 */
import "./table.scss"

interface ColumnObject {
	columns: {
		[key: string]: React.ReactNode
	}
}

interface TableProps {
	headers: string[]
	content: ColumnObject[]
	border?: boolean
}

const Table: React.FunctionComponent<TableProps> = ({
	headers = [],
	content = [],
	border = false,
}) => {
	const heads = headers.map((col, index) => {
		return <th key={index}>{col}</th>
	})

	const rows = content.map((row, index) => {
		const columns = Object.keys(row.columns).map((col, idxCol) => {
			return <td key={`${index}-${idxCol}`}>{row.columns[col]}</td>
		})

		return <tr key={index}>{columns}</tr>
	})

	const tableClasses = classnames({
		"csb-table": true,
		"csb-table--borders": border,
	})

	return (
		<table className={tableClasses}>
			{heads.length > 0 && (
				<thead>
					<tr>{heads}</tr>
				</thead>
			)}

			<tbody>{rows}</tbody>
		</table>
	)
}

export default Table
