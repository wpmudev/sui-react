import React from "react"

import { Table, TableBody, TableCell, TableRow } from "@wpmudev/sui-table"
import { Box } from "@wpmudev/sui-box"
import { isEmpty } from "@wpmudev/sui-utils"

import { ConfigTableDetailsTypes } from "./config-table.types"

// Render config options inside table content
const ConfigTableDetails: React.FC<ConfigTableDetailsTypes> = ({ config }) => {
	let options = []

	// Build options to render in the table
	Object.values(config?.config?.strings).forEach((string) => {
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
					{config?.name}
				</h3>
				<p className="sui-config-table__details-header-desc">
					{config?.description}
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

// Publish component(s)
export { ConfigTableDetails }
