import React, { useState } from "react"

// Import required component
import { FieldList as SuiFieldList } from "../src"

// Import documentation main page
import docs from "./FieldList.mdx"
import { FieldListItem } from "../src/field-list-item"

// Configure default options
export default {
	title: "SUI/Components/Advanced/Field List",
	component: SuiFieldList,
	parameters: {
		layout: "fullscreen",
		docs: {
			page: docs,
		},
	},
}

// Build "Field List" story
const FieldList = ({ ...args }: { label: string; helper: string }) => {
	const [list, setList] = useState({})

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<SuiFieldList
					{...args}
					onToggle={(id, checked) => {
						setList({
							...list,
							[id]: checked,
						})
					}}
				>
					<FieldListItem id="field-1" isChecked={false}>
						Field 1
					</FieldListItem>
					<FieldListItem id="field-2">Field 2</FieldListItem>
					<FieldListItem id="field-3" isChecked={true}>
						Field 3
					</FieldListItem>
					<FieldListItem id="field-4">Field 4</FieldListItem>
				</SuiFieldList>
			</div>
		</div>
	)
}

// Set story arguments.
FieldList.args = {
	label: "This is the title",
	helper: "This is example the description for field list.",
}

// Set controls for story arguments.
FieldList.argTypes = {
	label: {
		name: "Label",
	},
	helper: {
		name: "Helper Text",
	},
}

// Publish required stories.
export { FieldList }
