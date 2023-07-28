import React, {
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

import { TableToolbarContent } from "./table-toolbar-content"
import { TableContext } from "./table-context"
import { isEmpty } from "@wpmudev/storybook/lib/utils"

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

	const onSearch = useCallback(
		(e) => {
			ctx?.triggerAction("search-item", e.target.value)
		},
		[ctx],
	)

	const onApplyBulkAction = useCallback(() => {
		ctx?.triggerAction("bulk-action", bulkAction)
	}, [bulkAction, ctx])

	return (
		<div className="sui-table__toolbar">
			<div className="sui-table__toolbar-header">
				<div className="sui-table__toolbar-header-bulk">
					{!!ctx?.bulkActions && (
						<Fragment>
							<Select
								id={bulkDropdown}
								isSmall={true}
								options={ctx?.bulkActions}
								onChange={(e) => setBulkAction(e?.target?.value)}
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
					<div>
						<Input
							id="input-id-4"
							label="Label"
							placeholder="Search"
							onChange={onSearch}
							isSmall={true}
						/>
					</div>
					<Button
						id={filterBtnId}
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
				</div>
			</div>
			<TableToolbarContent
				id={bodyId}
				filterBtnId={filterBtnId}
				isExpanded={isExpanded}
			/>
		</div>
	)
}

export { TableToolbar }
