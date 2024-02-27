import React, { Fragment, useCallback } from "react"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@wpmudev/sui-table"
import { Button } from "@wpmudev/sui-button"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Tooltip } from "@wpmudev/sui-tooltip"

import {
	ConfigTableTypes,
	ConfigId,
	ConfigActionTypes,
} from "./config-table.types"
import { ConfigTableDetails } from "./config-table-details"
import { useStyles } from "@wpmudev/sui-hooks"

// Render options to be displayed in a table.
const ConfigTable: React.FC<ConfigTableTypes> = ({
	className = "",
	configs,
	onActionClick,
	hasCreatedDate = false,
	hasLastApplied = false,
	proItems = [],
	_style = {},
	...styleProps
}) => {
	/**
	 * Handle an action click.
	 *
	 * @param {ConfigId}          configId - The configuration ID.
	 * @param {ConfigActionTypes} type     - The action type.
	 */
	const actionClick = useCallback(
		(configId: ConfigId, type: ConfigActionTypes) => {
			if (onActionClick) {
				onActionClick(configId, type)
			}
		},
		[onActionClick],
	)

	const { suiInlineClassname } = useStyles(_style, className)

	// classnames
	const classNames = generateCN("sui-config-table", {}, suiInlineClassname)

	return (
		<Table className={classNames} hasToolbar={false}>
			<TableHead>
				<TableRow actions={() => null}>
					<TableCell isHeading={true} isPrimary={true}>
						Config
					</TableCell>
					{hasCreatedDate ? (
						<TableCell isHeading={true}>Date Created</TableCell>
					) : (
						<></>
					)}
					{hasLastApplied ? (
						<TableCell isHeading={true}>Last Applied</TableCell>
					) : (
						<></>
					)}
				</TableRow>
			</TableHead>
			<TableBody>
				{configs?.map((config, index) => (
					<TableRow
						key={index}
						id={config.id}
						isExpandable={true}
						expandableContent={
							<ConfigTableDetails config={config} proItems={proItems} />
						}
						actions={({ content }) => (
							<Fragment>
								<Button
									isSmall={true}
									colorScheme="blue"
									type="tertiary"
									onClick={(e) => {
										e.preventDefault()
										actionClick(config.id, "apply")
									}}
								>
									Apply
								</Button>
								<Button
									icon="Settings"
									isSmall={true}
									iconOnly={true}
									colorScheme="black"
									aria-label="settings"
									type="tertiary"
									onClick={(e) => {
										e.preventDefault()
										actionClick(config.id, "configure")
									}}
								/>
								{content}
							</Fragment>
						)}
					>
						<TableCell>
							<div className="sui-config-table__title">
								<strong>{config.name}</strong>
								{!isEmpty(config.description ?? "") && (
									<Tooltip
										type="icon"
										icon="InfoAlt"
										placement="right-bottom"
										customWidth={160}
										customMobileWidth={160}
									>
										{config.description}
									</Tooltip>
								)}
							</div>
						</TableCell>
						{hasCreatedDate && config.created_date ? (
							<TableCell>{config.created_date}</TableCell>
						) : (
							<></>
						)}
						{hasLastApplied && config.last_used_date ? (
							<TableCell>{config.last_used_date}</TableCell>
						) : (
							<></>
						)}
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

// Publish component(s)
export { ConfigTable }
