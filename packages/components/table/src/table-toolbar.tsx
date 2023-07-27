import React, { useId, useState } from "react"
import { TableSectionProps } from "./table.types"

import { Button } from "@wpmudev/sui-button"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import { generateCN } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"

/**
 * TableToolbar component represents the toolbar section of a table.
 *
 * @param {TableSectionProps} props            - The properties for the TableToolbar component.
 * @param {React.ReactNode}   props.children   - The content of the table toolbar.
 * @param {boolean}           props.hasActions - Determines if the toolbar has additional actions.
 * @param {any}               props...         - Additional props for the TableToolbar component.
 * @return {JSX.Element} The JSX representation of the TableToolbar component.
 */
const TableToolbar: React.FC<TableSectionProps> = ({
	children,
	hasActions = false,
	...props
}) => {
	// State for expansion of the toolbar content
	const [isExpanded, setIsExpanded] = useState(false)

	// Generate unique IDs for accessibility
	const uniqueId = useId()
	const filterBtnId = `sui-table-toolbar-filter-${uniqueId}`
	const bodyId = `sui-table-toolbar-body-${uniqueId}`

	// filter options
	// const options = [
	// 	{
	// 		id: "option-1",
	// 		label: "Option 1 is the option.",
	// 		isSelected: false,
	// 	},
	// 	{
	// 		id: "option-2",
	// 		label: "Option 2",
	// 		isSelected: false,
	// 	},
	// ]

	return (
		<div className="sui-table__toolbar">
			<div className="sui-table__toolbar-header">
				<div className="sui-table__toolbar-header-bulk">
					[BULK ACTIONS GOES HERE...]
					{/*<Select id="select-id-1" label="Select" options={options} />*/}
				</div>
				<div className="sui-table__toolbar-header-actions">
					<div>
						<Input
							id="input-id-4"
							label="Label"
							placeholder="Search"
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
			<div
				id={bodyId}
				aria-labelledby={filterBtnId}
				className={generateCN("sui-table__toolbar-body", {
					expanded: isExpanded,
				})}
			>
				<Box>
					<BoxGroup isInline={false}>Nothing to see here yet.... :/</BoxGroup>
				</Box>
			</div>
		</div>
	)
}

export { TableToolbar }
