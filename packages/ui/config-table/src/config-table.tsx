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

// Render options to be displayed in a table.
const ConfigTable: React.FC<ConfigTableTypes> = ({
	className = "",
	configs,
	onActionClick,
	hasCreatedDate = false,
	hasLastApplied = false,
}) => {
	/**
	 * Render config options inside table content
	 *
	 * @param {Record<string, any>} config
	 * @return {JSX.Element} Expand content
	 */

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

	// classnames
	const classNames = generateCN("sui-config-table", {}, className)

	return (
		<Table className={classNames} hasToolbar={false}>
			<TableHead>
				<TableRow actions={() => null}>
					<TableCell isHeading={true} isPrimary={true}>
						Config
					</TableCell>
					{hasCreatedDate && (
						<TableCell isHeading={true}>Date Created</TableCell>
					)}
					{hasLastApplied && (
						<TableCell isHeading={true}>Last Applied</TableCell>
					)}
				</TableRow>
			</TableHead>
			<TableBody>
				{configs?.map((config, index) => (
					<TableRow
						key={index}
						id={config.id}
						isExpandable={true}
						expandableContent={<ConfigTableDetails config={config} />}
						actions={({ content }) => (
							<Fragment>
								<Button
									isSmall={true}
									color="blue"
									appearance="tertiary"
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
									color="black"
									aria-label="settings"
									appearance="tertiary"
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
										position="right-bottom"
										customWidth={160}
										customMobileWidth={160}
									>
										{config.description}
									</Tooltip>
								)}
							</div>
						</TableCell>
						{hasCreatedDate && <TableCell>May 21, 2022 @ 6:00 pm</TableCell>}
						{hasLastApplied && <TableCell>May 21, 2022 @ 6:00 pm</TableCell>}
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

// Publish component(s)
export { ConfigTable }
