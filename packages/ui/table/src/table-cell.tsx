import React, { Fragment, useCallback, useContext, useRef } from "react"

import {
	_renderRestPropsSafely,
	generateCN,
	handleOnKeyDown,
	isEmpty,
} from "@wpmudev/sui-utils"
import Icons from "@wpmudev/sui-icons"
import {
	useDefaultChildren,
	useInteraction,
	useStyles,
} from "@wpmudev/sui-hooks"

import { TableCellProps } from "./table.types"
import { TableContext, TableSortBy } from "./table-context"

/**
 * TableCell Component
 *
 * Represents a cell within a table row, either a regular cell (td) or a heading cell (th).
 * It can display content, optionally have a drag icon, and accepts additional classNames and props.
 *
 * @param  root0
 * @param  root0.id
 * @param  root0.children
 * @param  root0.isHeading
 * @param  root0.className
 * @param  root0.hasDragIcon
 * @param  root0.isAction
 * @param  root0.isSortable
 * @param  root0.isSticky
 * @param  root0.isTrim
 * @param  root0.isPrimary
 * @param  root0.style
 * @param  root0.colSpan
 * @param  root0.htmlProps
 * @param  root0._style
 *
 * @return {JSX.Element} The JSX representation of the TableCell component.
 */
const TableCell: React.FC<TableCellProps> = ({
	id,
	children,
	isHeading = false,
	className = "",
	hasDragIcon = false,
	isAction = false,
	isSortable = false,
	isSticky = false,
	isTrim = false,
	isPrimary = false,
	style = {},
	colSpan,
	htmlProps = {},
	_style = {},
}): JSX.Element => {
	// Define element tag name based on whether it's a heading cell (th) or a regular cell (td).
	const TagName: "td" | "th" = isHeading ? "th" : "td"

	const [hovered, focused, methods] = useInteraction({})
	const { suiInlineClassname } = useStyles(_style, className)

	// Default children content
	children = useDefaultChildren(children, "{cell children content}")

	// Table context
	const ctx = useContext(TableContext)
	const { sortBy, setSortBy, triggerAction, hasStickyCols } = ctx! ?? {}

	const ref = useRef<HTMLTableCellElement | null>(null)

	const sortBtnClassNames = generateCN("sui-table__cell-btn", {
		hovered,
		focused,
	})

	// Current order
	const order = id === sortBy?.column ? sortBy?.order : ""

	/**
	 * When column sort heading clicked
	 *
	 * @type {() => void}
	 */
	const onSortClick = useCallback(() => {
		const sortData = { column: id, order: "desc" === order ? "asc" : "desc" }
		setSortBy(sortData as TableSortBy)
		// Pass to parent component
		triggerAction("sort-columns", sortData)
	}, [id, order, setSortBy, triggerAction])

	// Default sort icon
	let SortIcon = Icons.CaretUpDown

	// Icon based on the sorting
	if (!isEmpty(order) && sortBy?.column === id) {
		SortIcon = order === "desc" ? Icons.CaretDown : Icons.CaretUp
	}

	// Sorting button props
	let sortBtnProps: Record<string, any> = {}

	if (isSortable) {
		sortBtnProps.role = "button"
		sortBtnProps.tabIndex = 0
		sortBtnProps.className = sortBtnClassNames
		sortBtnProps.onClick = onSortClick
		sortBtnProps.onKeyDown = (
			e: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
		) => handleOnKeyDown(e, onSortClick)
		sortBtnProps = { ...sortBtnProps, ...methods }
	}

	return (
		<TagName
			ref={ref}
			className={generateCN(
				"sui-table__cell",
				{
					sortable: isSortable,
					sticky: isSticky,
					trim: isTrim,
					primary: isPrimary,
					"is-sticky-active": hasStickyCols && isSticky,
				},
				suiInlineClassname,
			)}
			{...(isHeading && { scope: "col" })}
			role={isHeading ? "rowheader" : "cell"}
			style={style}
			colSpan={colSpan}
			{..._renderRestPropsSafely(htmlProps)}
		>
			{hasDragIcon && (
				<Icons.Grip className="sui-table__cell--drag" size="sm" />
			)}
			{!isAction ? (
				<div {...sortBtnProps}>
					<span>{children}</span>
					{isSortable && <SortIcon size="xs" />}
				</div>
			) : (
				<Fragment>
					{children}
					{isSortable && <SortIcon size="xs" />}
				</Fragment>
			)}
		</TagName>
	)
}

export { TableCell }
