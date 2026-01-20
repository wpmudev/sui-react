import React, {
	ChangeEvent,
	Fragment,
	useCallback,
	useContext,
	useId,
	useState,
} from "react"
import { TableSectionProps } from "./table.types"

import { Button } from "@wpmudev/sui-button"
import { Input } from "@wpmudev/sui-input"
import { Select } from "@wpmudev/sui-select"
import { Dropdown } from "@wpmudev/sui-dropdown"

import { TableToolbarContent } from "./table-toolbar-content"
import { TableContext } from "./table-context"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { useStyles } from "@wpmudev/sui-hooks"
import { Toggle } from "@wpmudev/sui-toggle"

/**
 * TableToolbar component represents the toolbar section of a table.
 *
 * @param {TableSectionProps} props    - The properties for the TableToolbar component.
 * @param {any}               props... - Additional props for the TableToolbar component.
 * @return {JSX.Element} The JSX representation of the TableToolbar component.
 */
const TableToolbar: React.FC<TableSectionProps> = ({
	id,
	_htmlProps,
	_style = {},
}: TableSectionProps): JSX.Element => {
	// State for expansion of the toolbar content
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const [bulkAction, setBulkAction] = useState<Record<string, any> | null>(null)

	// Generate unique IDs for accessibility
	const uniqueId = useId()
	const toolbarId = id || `sui-table-toolbar-${uniqueId}`
	const filterBtnId = `${toolbarId}-filter-btn`
	const bodyId = `${toolbarId}-body`
	const bulkDropdown = `${toolbarId}-bulk-dropdown`

	const { suiInlineClassname } = useStyles(_style)
	const ctx = useContext(TableContext)
	// const dropdownRef = useRef<DropdownRefProps | null>(null)

	const hasSelectedRows = ctx?.selected && ctx?.selected?.length > 0

	const onSearch = useCallback(
		(e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			if (typeof e !== "string") {
				ctx?.triggerAction("search-items", e?.target?.value)
			}

			// Deselect all rows on search
			ctx?.setSelected([])
		},
		[ctx],
	)

	const onApplyBulkAction = useCallback(() => {
		ctx?.triggerAction("bulk-action", {
			...bulkAction,
			selectedRows: ctx?.selected,
		})
	}, [bulkAction, ctx])

	const content = (
		<TableToolbarContent
			id={bodyId}
			filterBtnId={filterBtnId}
			isExpanded={isExpanded}
		/>
	)

	return (
		<div
			id={toolbarId}
			className={generateCN("sui-table__toolbar", {}, suiInlineClassname)}
			{..._htmlProps}
		>
			<div id={`${toolbarId}_header`} className="sui-table__toolbar-header">
				<div
					id={`${toolbarId}_bulk`}
					className="sui-table__toolbar-header-bulk"
				>
					{!!ctx?.bulkActions && (
						<Fragment>
							<Select
								id={bulkDropdown}
								className="sui-table__toolbar-actions"
								options={ctx?.bulkActions}
								isDisabled={!hasSelectedRows}
								onChange={(action) =>
									setBulkAction(action as Record<string, any>)
								}
							/>
							<Button
								type="primary"
								colorScheme="black"
								isDisabled={!bulkAction || !hasSelectedRows}
								onClick={onApplyBulkAction}
							>
								Apply
							</Button>
						</Fragment>
					)}
				</div>

				<div
					id={`${toolbarId}_actions`}
					className="sui-table__toolbar-header-actions"
				>
					{ctx?.showToggleBtn && (
						<div
							id={`${toolbarId}_toggle`}
							className="sui-table__toolbar-toggle"
						>
							<Toggle
								id={`${toolbarId}_toggle_input`}
								{...ctx?.toggleBtnProps}
								onClick={(e) => {
									// Deselected all selected rows
									ctx?.setSelected([])

									// Call onClick function if exists
									ctx?.toggleBtnProps?.onClick?.(e)
								}}
							/>
						</div>
					)}
					<Input
						id={`${toolbarId}_search`}
						className="sui-table__toolbar-search"
						placeholder="Search"
						onChange={onSearch}
						icon="Search"
						iconPosition="start"
					/>
					{ctx?.showFiltersBtn && (
						<>
							{ctx?.filtersPopover ? (
								<Dropdown
									label="Filter"
									className="sui-table__toolbar-filter"
									buttonIcon="Filter"
									placement="left"
									colorScheme="black"
									isFixedHeight={false}
									menuCustomWidth={300}
								>
									{content}
								</Dropdown>
							) : (
								<Button
									id={filterBtnId}
									className="sui-table__toolbar-filter"
									icon="Filter"
									colorScheme="black"
									type="secondary"
									onClick={() => setIsExpanded(!isExpanded)}
									_htmlProps={{
										"aria-controls": bodyId,
										"aria-expanded": isExpanded,
									}}
								>
									Filter
								</Button>
							)}
						</>
					)}
				</div>
			</div>
			{!ctx?.filtersPopover && content}
		</div>
	)
}

export { TableToolbar }
