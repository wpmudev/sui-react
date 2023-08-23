import React, { useRef } from "react"

import { isEmpty, generateCN } from "@wpmudev/sui-utils"

import { TableProps } from "./table.types"
import { TableContextProvider } from "./table-context"
import { TableToolbar } from "./table-toolbar"

// Table component to display a table with optional toolbar and context
const Table: React.FC<TableProps> = ({
	children,
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
	...props
}) => {
	// Reference to the table element
	const ref = useRef<HTMLTableElement | null>(null)

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
			}}
		>
			<div
				className={generateCN("sui-table", {
					"no-border-radius": noBorderRadius,
					"no-side-borders": noSideBorder,
				})}
			>
				{/* Render the TableToolbar component if hasToolbar is true */}
				{hasToolbar && <TableToolbar />}
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
					{children}
				</table>
			</div>
		</TableContextProvider>
	)
}

export { Table }
