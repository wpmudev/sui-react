import React, {
	Children,
	cloneElement,
	createElement,
	useContext,
	useEffect,
} from "react"
import { TableSectionProps } from "./table.types"
import { TableContext } from "./table-context"

// TableHead component represents the head section of a table.
const TableHead: React.FC<TableSectionProps> = ({
	children,
	hasActions = false,
	...props
}) => {
	// convert table columns to array
	const tableCols = Children.toArray(children)

	const { setColumns } = useContext(TableContext)

	useEffect(() => {
		const { children: cols } = children.props

		// set columns
		setColumns(
			Children.map(cols, (column) => ({
				title: column.props.children,
				isPrimary: column.props.isPrimary,
			})),
		)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<thead className="sui-table__head" {...props}>
			{tableCols.map((child: React.ReactNode) =>
				cloneElement(child, { ...child.props, isUnderHeader: true }),
			)}
		</thead>
	)
}

export { TableHead }
