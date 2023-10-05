import React, {
	Children,
	cloneElement,
	ReactElement,
	ReactNode,
	useContext,
	useEffect,
} from "react"

import { TableHeadProps } from "./table.types"
import { TableContext } from "./table-context"

// TableHead component represents the head section of a table.
<<<<<<< HEAD
const TableHead: React.FC<TableSectionProps> = ({ children, ...props }) => {
=======
const TableHead: React.FC<TableHeadProps> = ({
	children,
	hasActions = false,
	...props
}) => {
>>>>>>> ac032a5 (fix(table): code improvements + add unit-test)
	// convert table columns to array
	const tableCols = Children.toArray(children!)

	const ctx = useContext(TableContext)
	const { setColumns } = ctx!

	useEffect(() => {
		if ("props" in children) {
			const { children: cols } = children?.props ?? {}

			// set columns
			setColumns(
				Children.map(cols, (column) => ({
					title: column.props.children,
					isPrimary: column.props.isPrimary,
				})),
			)
		}
	}, [])

	return (
		<thead className="sui-table__head" {...props}>
			{tableCols.map((child: ReactNode) =>
				cloneElement(child! as ReactElement, {
					...(child as ReactElement)?.props,
					isUnderHeader: true,
				}),
			)}
		</thead>
	)
}

export { TableHead }
