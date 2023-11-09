import React from "react"

import { Table, TableBody, TableCell, TableRow } from "@wpmudev/sui-table"
import { isEmpty } from "@wpmudev/sui-utils"

import { ConfigTableDetailsTypes } from "./config-table.types"

// Render config options inside table content
const ConfigTableDetails: React.FC<ConfigTableDetailsTypes> = ({ config }) => {
	let options: Array<any> = []

	// Build options to render in the table
	Object.values(config?.config?.strings).forEach((string) => {
		options = [
			...options,
			// Split string by new line and exclude blank
			// @ts-ignore
			...string[0].split("\n").filter((opt: string) => !isEmpty(opt)),
		]
	})

	return (
		<div className="sui-config-table__details">
			<div className="sui-config-table__details-header">
				<h3 className="sui-heading--h5 sui-config-table__details--title">
					{config?.name}
				</h3>
				<p className="sui-config-table__details--content">
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
		</div>
	)
}

// Publish component(s)
export { ConfigTableDetails }
