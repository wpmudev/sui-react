import React, { Fragment } from "react"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "@wpmudev/sui-table"
import { Button } from "@wpmudev/sui-button"
import { Box, BoxGroup } from "@wpmudev/sui-box"

import { LinkProps } from "./config-table.types"

// Link component represents a clickable link element with optional features
// like inline display, external link indication, and more.
const ConfigTable: React.FC<LinkProps> = ({
	as = "a",
	className = "",
	isInline = false,
	isDisabled,
	isExternal,
	hasExternalIcon,
	children,
	configs,
	...props
}) => {
	const renderExpandContent = (config) => {
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
					<Table hasToolbar={false} onAction={(actionType, data) => null}>
						<TableBody>
							{[...configs, ...configs, ...configs, ...configs].map(
								(config, index) => (
									<TableRow key={index} id={config.id}>
										<TableCell>{config.name}</TableCell>
										<TableCell>N/A</TableCell>
									</TableRow>
								),
							)}
						</TableBody>
					</Table>
				</div>
			</Box>
		)
	}

	return (
		<Table
			hasToolbar={false}
			onAction={(actionType, data) => {
				console.log("ACTION FIRED:", actionType, data)
			}}
		>
			<TableHead>
				<TableRow actions={() => null}>
					<TableCell isHeading={true}>Config</TableCell>
					<TableCell isHeading={true}>Date Created</TableCell>
					<TableCell isHeading={true}>Last Applied</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{configs.map((config, index) => (
					<TableRow
						key={index}
						id={config.id}
						isExpandable={true}
						expandableContent={renderExpandContent(config)}
						actions={({ id, content }) => {
							return (
								<Fragment>
									<a href="#">Action</a>
									<Button
										icon="settings"
										isSmall={true}
										color="black"
										iconOnly={true}
										appearance="tertiary"
									/>
									{content}
								</Fragment>
							)
						}}
					>
						<TableCell>{config.name}</TableCell>
						<TableCell>N/A</TableCell>
						<TableCell>N/A</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	)
}

// Publish component(s)
export { ConfigTable }
