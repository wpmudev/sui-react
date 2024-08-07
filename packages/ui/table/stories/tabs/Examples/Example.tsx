import React, { useEffect, useState, Fragment } from "react"

// Import required component
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableRow,
} from "../../../src"

import { Tag } from "@wpmudev/sui-tag"
import { Button } from "@wpmudev/sui-button"
import { Pagination } from "@wpmudev/sui-pagination"
import { chunkArray } from "@wpmudev/sui-utils"
import { records, groupedRecords } from "../../records"
import { Email } from "@wpmudev/sui-icons"

const itemsPerPage = 5

// break array into page chunks
const tableItems = chunkArray(records, itemsPerPage)

// Build "Field List" story
export const TableExample = ({ ...props }: Record<string, any>) => {
	const [tempRows, setTempRows] = useState<Record<string, any>[]>([])
	const [rows, setRows] = useState<Record<string, any>[] | Record<string, any>>(
		[],
	)
	const [page, setPage] = useState<number>(1)

	const { isGrouped } = props

	useEffect(() => {
		if (isGrouped) {
			const groupedItems = groupedRecords.reduce(
				(result: Record<string, any>, currentItem: Record<string, any>) => {
					;(result[currentItem.group] = result[currentItem.group] || []).push(
						currentItem,
					)
					return result
				},
				{},
			)

			setRows(groupedItems)
		}
	}, [isGrouped])

	useEffect(() => {
		if (!isGrouped) {
			setRows(tableItems?.[0])
			setTempRows(tableItems?.[0])
		}
	}, [isGrouped])

	useEffect(() => {
		if (!isGrouped) {
			setRows(tableItems?.[page - 1])
		}
	}, [page, isGrouped])

	const action = (_id: string, content: React.ReactNode) => {
		return (
			<div
				style={{
					alignItems: "center",
					display: "flex",
					justifyContent: "end",
				}}
			>
				<Button
					icon="Edit"
					colorScheme="black"
					type="tertiary"
					isSmall={true}
					iconOnly={true}
				/>
				<Button
					icon="Settings"
					colorScheme="black"
					type="tertiary"
					isSmall={true}
					iconOnly={true}
				/>
				{content}
			</div>
		)
	}

	const groupsIconsMapping: Record<string, any> = {
		report: "Reports",
		notification: "Email",
	}

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Table
					stickyCols={true}
					onAction={(actionType, data) => {
						let dRows: Record<string, any>[] = [
							...(rows as Record<string, any>[]),
						]

						switch (actionType) {
							case "bulk-action":
							case "apply-filters":
								// alert(
								// 	`ACTION: ${actionType} \n\nData: \n${JSON.stringify(data)}`,
								// )
								break
							case "sort-rows":
								break
							case "search-items":
								dRows = tempRows.filter((item: Record<string, any>) =>
									item.title.includes(data as string),
								)

								dRows = data ? dRows : tempRows
								break
							case "sort-columns":
								const { column, order } = data as Record<string, any>

								// sort
								dRows.sort((a, b) =>
									"desc" === order
										? b[column]?.localeCompare(a[column])
										: a[column]?.localeCompare(b[column]),
								)

								break
						}

						// set state
						setRows([...dRows])
					}}
					allowCheck={true}
					{...props}
				>
					<TableHead>
						<TableRow actions={() => null}>
							<TableCell
								isHeading={true}
								isSortable={false}
								isPrimary={true}
								id="id"
							>
								ID
							</TableCell>
							<TableCell isHeading={true} isSortable={true} id="title">
								Form name
							</TableCell>
							<TableCell isHeading={true} id="tag" isSortable={true}>
								Status
							</TableCell>
							<TableCell isHeading={true} id="submission" isSortable={true}>
								Last Submission
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{!isGrouped &&
							rows?.map((record: Record<string, any>, index: number) => (
								<TableRow
									key={index}
									id={record.id}
									isExpandable={record?.props?.isExpandable}
									expandableContent={record?.props?.expandableContent}
									status={record?.status}
									actions={({ id, content }) => action(id, content)}
								>
									<TableCell>
										<strong>#{record.id}</strong>
									</TableCell>
									<TableCell isTrim={true}>
										<strong>{record.title}</strong>
									</TableCell>
									<TableCell>
										<Tag
											colorScheme={
												"Published" === record.tag ? "blue" : "default"
											}
										>
											{record.tag}
										</Tag>
									</TableCell>
									<TableCell>{record.submission}</TableCell>
								</TableRow>
							))}

						{isGrouped &&
							Object.entries(rows).map(([group, items]) => (
								<Fragment key={group}>
									<TableRow isGroup={true}>
										<TableCell icon={groupsIconsMapping[group]}>
											<strong>{group}</strong>
										</TableCell>
									</TableRow>
									{items.map((record: Record<string, any>, index: number) => (
										<TableRow
											key={index}
											id={record.id}
											isExpandable={record?.props?.isExpandable}
											expandableContent={record?.props?.expandableContent}
											status={record?.status}
											actions={({ id, content }) => action(id, content)}
										>
											<TableCell>
												<strong>#{record.id}</strong>
											</TableCell>
											<TableCell isTrim={true}>
												<strong>{record.title}</strong>
											</TableCell>
											<TableCell>
												<Tag
													colorScheme={
														"Published" === record.tag ? "blue" : "default"
													}
												>
													{record.tag}
												</Tag>
											</TableCell>
											<TableCell>{record.submission}</TableCell>
										</TableRow>
									))}
								</Fragment>
							))}
					</TableBody>
					{!isGrouped && (
						<TableFooter>
							<TableRow id="0">
								<TableCell>
									<Pagination
										limit={itemsPerPage}
										numberOfItems={records.length}
										page={page}
										onChange={setPage}
									/>
								</TableCell>
							</TableRow>
						</TableFooter>
					)}
				</Table>
			</div>
		</div>
	)
}
