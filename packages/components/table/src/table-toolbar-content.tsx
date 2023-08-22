import React, { Fragment, useContext } from "react"
import { TableToolbarContentProps } from "./table.types"

import { Box, BoxGroup } from "@wpmudev/sui-box"
import { generateCN } from "@wpmudev/sui-utils"
import { Input } from "@wpmudev/sui-input"
import { Row, Col } from "@wpmudev/sui-grid"
import { FormField } from "@wpmudev/sui-form-field"
import { Select } from "@wpmudev/sui-select"
import { Button } from "@wpmudev/sui-button"

import { TableContext } from "./table-context"

// Table toolbar content component displays filter options and actions.
const TableToolbarContent: React.FC<TableToolbarContentProps> = ({
	id,
	filterBtnId,
	isExpanded,
}) => {
	// Get table context
	const ctx = useContext(TableContext)
	// Get filters from context
	const filters = ctx?.filters

	// If there are no filters, return null to hide the toolbar content
	if (!filters) {
		return null
	}

	const renderField = (filter) => (
		<FormField id={filter?.id} label={filter?.title} isSmall={true}>
			{
				{
					select: (
						<Select
							onChange={(e) => {
								ctx?.setFilter(filter?.id, e.target.value)
							}}
							id={filter?.id}
							{...filter.props}
						/>
					),
					text: (
						<Input
							id={filter?.id}
							{...filter.props}
							onChange={(e) => {
								ctx?.setFilter(filter?.id, e.target.value)
							}}
						/>
					),
				}[filter.type]
			}
		</FormField>
	)

	const renderFiltersCta = () => (
		<div style={{ textAlign: "right" }}>
			<Button
				appearance="secondary"
				color="black"
				isSmall={true}
				isDisabled={ctx?.filterValues?.length <= 0}
			>
				Clear filters
			</Button>
			<Button
				appearance="primary"
				color="blue"
				isSmall={true}
				isDisabled={ctx?.filterValues?.length <= 0}
				onClick={() => ctx.triggerAction("apply-filters", ctx.filterValues)}
			>
				Apply filters
			</Button>
		</div>
	)

	return (
		<div
			id={id}
			aria-labelledby={filterBtnId}
			className={generateCN("sui-table__toolbar-body", {
				expanded: isExpanded || !!ctx?.filtersPopover,
				inline: !ctx?.filtersPopover,
			})}
		>
			{ctx?.filtersPopover ? (
				<>
					{filters?.map((filter) => renderField(filter))}
					{renderFiltersCta()}
				</>
			) : (
				<Box>
					<BoxGroup>
						<Row align={{ sm: "inline" }}>
							{(filters ?? [])?.map((filter, index) => (
								<Col size={3} key={index}>
									{renderField(filter)}
								</Col>
							))}
						</Row>
					</BoxGroup>
					<BoxGroup isInline={false} isFooter={true}>
						{renderFiltersCta()}
					</BoxGroup>
				</Box>
			)}
		</div>
	)
}

export { TableToolbarContent }
