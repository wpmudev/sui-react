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

/**
 * TableToolbar component represents the toolbar section of a table.
 *
 * @param {TableSectionProps} props    - The properties for the TableToolbar component.
 * @param {any}               props... - Additional props for the TableToolbar component.
 * @return {JSX.Element} The JSX representation of the TableToolbar component.
 */
const TableToolbar: React.FC<TableSectionProps> = ({
	_htmlProps,
	_style = {},
}: TableSectionProps): JSX.Element => {
	// State for expansion of the toolbar content
	const [isExpanded, setIsExpanded] = useState<boolean>(false)
	const [bulkAction, setBulkAction] = useState<string>("")

	// Generate unique IDs for accessibility
	const uniqueId = useId()
	const filterBtnId = `sui-table-toolbar-filter-${uniqueId}`
	const bodyId = `sui-table-toolbar-body-${uniqueId}`
	const bulkDropdown = `sui-table-toolbar-bulk-${uniqueId}`

	const { suiInlineClassname } = useStyles(_style)
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
		<div
			className={generateCN("sui-table__toolbar", {}, suiInlineClassname)}
			{..._htmlProps}
		>
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
								type="primary"
								colorScheme="black"
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
						placeholder="Search"
						onChange={onSearch}
						icon="Search"
						iconPosition="start"
						isSmall={true}
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
									isSmall={true}
									isFixedHeight={false}
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
									isSmall={true}
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
