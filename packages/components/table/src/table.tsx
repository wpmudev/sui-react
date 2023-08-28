import React, { useRef, Children as RChild } from "react"

import { isEmpty, generateCN } from "@wpmudev/sui-utils"

import { TableProps } from "./table.types"
import { TableContextProvider } from "./table-context"
import { TableToolbar } from "./table-toolbar"

// Table component to display a table with optional toolbar and context
const Table: React.FC<TableProps> = ({
	children,
	type = "",
	hasToolbar = true,
	ariaLabel = "",
	allowCheck,
	isDraggable,
	filtersPopover,
	filters,
	onAction,
	bulkActions,
	noBorderRadius,
	noSideBorder,
	isStripped = false,
	stickyCols = false,
	...props
}) => {
	// Reference to the table element
	const ref = useRef<HTMLTableElement | null>(null)

	// Define tag design
	// Limited to: solid (default) and outlined
	const classNames = generateCN("sui-table", {
		"no-border-radius": noBorderRadius,
		"no-side-borders": noSideBorder,
		stripe: isStripped,
		sticky: stickyCols,
		draggable: isDraggable,
	})

	// Component name to exclude from the children array
	const componentToExclude = "TableFooter"
	// Convert the children to an array
	const childrenArray = RChild.toArray(children)

	// Find the footer component within the array of children
	const TFooter = childrenArray.find(
		({ type: childType }) => childType.name === componentToExclude,
	)

	// Render the TableContextProvider to provide context with optional props
	return (
		<TableContextProvider
			props={{
				allowCheck,
				isDraggable,
				filters,
				onAction,
				bulkActions,
				filtersPopover,
				stickyCols,
			}}
		>
			<div className={classNames}>
				{/* Render the TableToolbar component if hasToolbar is true */}
				{hasToolbar && <TableToolbar />}
				<div className="sui-table__wrapper">
					<table
						{...props}
						className="sui-table__table"
						ref={ref}
						role="grid"
						tabIndex={-1}
						cellSpacing="0"
						cellPadding="0"
						// Set the aria-label attribute if ariaLabel is provided and not empty
						{...(!isEmpty(ariaLabel ?? "") && { "aria-label": ariaLabel })}
					>
						{children.filter(
							({ type: cType }) => componentToExclude !== cType.name,
						)}
					</table>
				</div>
				{!!TFooter && TFooter}
			</div>
		</TableContextProvider>
	)
}

export { Table }
