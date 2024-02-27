// Define a custom type `ConfigId` which can be either a string or a number.
import { SuiStyleType } from "@wpmudev/sui-utils"

type ConfigId = string | number

// Define a custom type `ConfigActionTypes` which can only have two specific string values.
type ConfigActionTypes = "apply" | "configure"

// Config object type
type ConfigObj = Record<string, any>

// Define the properties and methods configuration table component.
interface ConfigTableTypes extends SuiStyleType {
	// Optional property to specify a custom CSS class for the component.
	className?: string

	// Config objects that can contain various properties.
	configs?: ConfigObj[]

	// Function triggered when an action is clicked with a given ID and action type.
	onActionClick?(id: ConfigId, type: ConfigActionTypes): void

	// Created date
	hasCreatedDate?: boolean

	// Last applied date
	hasLastApplied?: boolean

	// Pro items disabled
	proItems?: Array<string>
}

// Define the properties and methods config table details component
interface ConfigTableDetailsTypes {
	// Config object that can contain various properties.
	config?: ConfigObj

	// Pro items disabled
	proItems?: Array<string>
}

export type {
	ConfigTableTypes,
	ConfigTableDetailsTypes,
	ConfigId,
	ConfigActionTypes,
}
