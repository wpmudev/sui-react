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
import { useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

// TableHead component represents the head section of a table.
const TableHead: React.FC<TableHeadProps> = ({
	children,
	hasActions = false,
	_htmlProps = {},
	_style = {},
	...props
}) => {
	const { suiInlineClassname } = useStyles(_style)

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
	}, [children, setColumns])

	return (
		<thead
			className={generateCN("sui-table__head", {}, suiInlineClassname)}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
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
