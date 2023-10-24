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
import { isEmpty } from "@wpmudev/sui-utils"

/**
 * TableToolbar component represents the toolbar section of a table.
 *
 * @param {TableSectionProps} props    - The properties for the TableToolbar component.
 * @param {any}               props... - Additional props for the TableToolbar component.
 * @return {JSX.Element} The JSX representation of the TableToolbar component.
 */
const TableToolbar: React.FC<TableSectionProps> = ({}) => {
	// State for expansion of the toolbar content
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const [bulkAction, setBulkAction] = useState<string>("")

	// Generate unique IDs for accessibility
	const uniqueId = useId()
	const filterBtnId = `sui-table-toolbar-filter-${uniqueId}`
	const bodyId = `sui-table-toolbar-body-${uniqueId}`
	const bulkDropdown = `sui-table-toolbar-bulk-${uniqueId}`

	const ctx = useContext(TableContext)
	// const dropdownRef = useRef<DropdownRefProps | null>(null)

	const onSearch = useCallback(
		(e: string | ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			if (typeof e !== "string") {
				ctx?.triggerAction("search-items", e?.target?.value)
			}
		},
		[ctx],
	)

	const onApplyBulkAction = useCallback(() => {
		ctx?.triggerAction("bulk-action", bulkAction)
	}, [bulkAction, ctx])

	const content = (
		<TableToolbarContent
			id={bodyId}
			filterBtnId={filterBtnId}
			isExpanded={isExpanded}
		/>
	)

	return (
		<div className="sui-table__toolbar">
			<div className="sui-table__toolbar-header">
				<div className="sui-table__toolbar-header-bulk">
					{!!ctx?.bulkActions && (
						<Fragment>
							<Select
								id={bulkDropdown}
								className="sui-table__toolbar-actions"
								isSmall={true}
								options={ctx?.bulkActions}
								onChange={setBulkAction}
							/>
							<Button
								appearance="primary"
								color="black"
								isSmall={true}
								isDisabled={isEmpty(bulkAction ?? "")}
								onClick={onApplyBulkAction}
							>
								Apply
							</Button>
						</Fragment>
					)}
				</div>
				<div className="sui-table__toolbar-header-actions">
					<Input
						id="input-id-4"
						className="sui-table__toolbar-search"
						label="Label"
						placeholder="Search"
						onChange={onSearch}
						isSmall={true}
					/>
					{ctx?.filtersPopover ? (
						<Dropdown
							label="Filter"
							className="sui-table__toolbar-filter"
							buttonIcon="filter"
							direction="left"
							isSmall={true}
							isFixedHeight={false}
						>
							{content}
						</Dropdown>
					) : (
						<Button
							id={filterBtnId}
							className="sui-table__toolbar-filter"
							icon="filter"
							color="black"
							appearance="secondary"
							isSmall={true}
							onClick={() => setIsExpanded(!isExpanded)}
							aria-controls={bodyId}
							aria-expanded={isExpanded}
						>
							Filter
						</Button>
					)}
				</div>
			</div>
			{!ctx?.filtersPopover && content}
		</div>
	)
}

export { TableToolbar }