import React from "react"

// Import required component
import {
	Table as SUITable,
	TableBody,
	TableCell,
	TableHead,
	TableRow,
} from "../src"

// Import documentation main page
import docs from "./ReactTable.mdx"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Table",
	// component: SuiTable,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Field List" story
const Table = ({ example, ...args }) => {
	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SUITable>
					<TableHead>
						<TableRow>
							<TableCell isHeading={true}>Name</TableCell>
							<TableCell isHeading={true}>Age</TableCell>
							<TableCell isHeading={true}>Location</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>John doe</TableCell>
							<TableCell>25</TableCell>
							<TableCell>Earth</TableCell>
						</TableRow>
					</TableBody>
				</SUITable>
			</div>
		</div>
	)
}

// Set story arguments.
Table.args = {}

// Set controls for story arguments.
Table.argTypes = {}

// Publish required stories.
export { Table }
