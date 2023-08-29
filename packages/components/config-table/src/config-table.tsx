import React, { Fragment, useCallback } from "react"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@wpmudev/sui-table"
import { Button } from "@wpmudev/sui-button"
import { Box } from "@wpmudev/sui-box"
import { isEmpty } from "@wpmudev/sui-utils"
import { Tooltip } from "@wpmudev/sui-tooltip"

import {
	ConfigActionTypes,
	ConfigId,
	ConfigTableTypes,
} from "./config-table.types"
import { ConfigTableDetails } from "./config-table-details"

// Render options to be displayed in a table.
const ConfigTable: React.FC<ConfigTableTypes> = ({
	className = "",
	configs,
	onActionClick,
}) => {
	/**
	 * Render config options inside table content
	 *
	 * @param {Record<string, any>} config
	 * @return {JSX.Element} Expand content
	 */
	const renderExpandContent = (config) => {
		let options = []

		// Build options to render in the table
		Object.values(config.config.strings).forEach((string) => {
			options = [
				...options,
				// Split string by new line and exclude blank
				...string[0].split("\n").filter((opt) => !isEmpty(opt)),
			]
		})

		return (
			<Box className="sui-config-table__details">
				<div className="sui-config-table__details-header">
					<h3 className="sui-config-table__details-header-title">
						{config.name}
					</h3>
					<p className="sui-config-table__details-header-desc">
						{config.description}
					</p>
				</div>
				<div className="sui-config-table__details-body">
					<Table hasToolbar={false} isStripped={true}>
						<TableBody>
							{options.map((option: Record<string, any>, index: number) => {
								const chunks = option.split("-")

								return (
									<TableRow key={index} id={option.id}>
										<TableCell>{chunks[0]}</TableCell>
										<TableCell>{chunks[1]}</TableCell>
									</TableRow>
								)
							})}
						</TableBody>
					</Table>
				</div>
			</Box>
		)
	}

	/**
	 * Handle an action click.
	 *
	 * @param {ConfigId}          configId - The configuration ID.
	 * @param {ConfigActionTypes} type     - The action type.
	 */
	const actionClick = useCallback(
		(configId, type) => {
			if (onActionClick) {
				onActionClick(configId, type)
			}
		},
		[onActionClick],
	)

	return (
		<Table className={className} hasToolbar={false}>
			<TableHead>
				<TableRow actions={() => null}>
					<TableCell isHeading={true}>Config</TableCell>
					<TableCell isHeading={true}>Date Created</TableCell>
					<TableCell isHeading={true}>Last Applied</TableCell>
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
										actionClick(config.id, "configure")
									}}
								>
									Apply
								</Button>
								<Button
									icon="settings"
									isSmall={true}
									iconOnly={true}
									color="black"
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
									<Tooltip type="icon" name="info" customWidth={160}>
										{config.description}
									</Tooltip>
								)}
							</div>
						</TableCell>
						{/* Make these dynamic */}
						<TableCell>May 21, 2022 @ 6:00 pm</TableCell>
						<TableCell>May 21, 2022 @ 6:00 pm</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

// Publish component(s)
export { ConfigTable }
