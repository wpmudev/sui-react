import React, { createContext, useCallback, useContext, useState } from "react"
import {
	CheckboxContextProps,
	CheckboxItemTypes,
	CheckBoxItemsList,
	CheckboxProviderTypes,
} from "./checkbox.types"

const CheckboxContext = createContext<CheckboxContextProps>({
	items: [],
	setItems: (items: CheckboxContextProps["items"]) => {},
	onChange: (
		id: CheckBoxItemsList | CheckboxItemTypes["id"],
		isChecked?: CheckboxItemTypes["isChecked"],
		groupId?: CheckboxItemTypes["groupId"],
	) => {},
})

// CheckboxProvider component manages the state and provides a context for checkboxes
const CheckboxProvider = ({ children, onChange }: CheckboxProviderTypes) => {
	// State to hold checkbox items
	const [items, setItems] = useState<CheckBoxItemsList>([])

	// Handle checkbox onChange event
	const handleOnChange = useCallback(
		(
			id: CheckBoxItemsList | CheckboxItemTypes["id"],
			isChecked?: CheckboxItemTypes["isChecked"],
			groupId?: CheckboxItemTypes["groupId"],
		) => {
			if (typeof id === "string") {
				// Update checkbox items based on the received parameters
				setItems((prevItems) => {
					const obj: CheckboxItemTypes = {
						id,
						groupId,
						isChecked,
					}

					// Find the index of the existing item in the items array
					const existingItemIndex = prevItems.findIndex(
						(item) => item.id === id && item.groupId === groupId,
					)

					// Update existing item or push a new item to the items array
					if (existingItemIndex > -1) {
						prevItems[existingItemIndex] = obj // Update existing item
					} else {
						prevItems.push(obj) // Push a new item
					}

					// Trigger the onChange callback if available, passing updated items
					if (!!onChange) {
						onChange(prevItems)
					}

					// Return a new array to update the state and trigger re-render
					return [...prevItems]
				})
			}
		},
		[onChange],
	)

	// Provide CheckboxContext with the handleOnChange function and checkbox items
	return (
		<CheckboxContext.Provider
			value={{ onChange: handleOnChange, items, setItems }}
		>
			{children} {/* Render children components */}
		</CheckboxContext.Provider>
	)
}

// This custom hook manages the functionality related to Checkbox
const useCheckbox = () => {
	// Access the Checkbox context
	const ctx = useContext(CheckboxContext)

	// Ensure that the CheckboxContext is available; throw an error if not
	if (!ctx) {
		throw new Error("useCheckbox must be used within a CheckboxContextProvider")
	}

	// Define a callback function triggered by the Checkboxes onChange event
	const onChangeCallback = (
		id: CheckboxItemTypes["id"],
		isChecked?: CheckboxItemTypes["isChecked"],
		groupId?: CheckboxItemTypes["groupId"],
	) => {
		// Trigger the onChange method from CheckboxContext, if it exists
		ctx?.onChange?.(id, isChecked, groupId)
	}

	// Function to add Checkbox details to the context's list
	const addToList = (
		id: string,
		isChecked?: boolean,
		groupId?: boolean | string,
	) => {
		// Trigger the onChange method from CheckboxContext, if it exists
		ctx?.onChange?.(id, isChecked, groupId)
	}

	return {
		...ctx, // Include other properties from CheckboxContext
		onChange: onChangeCallback,
		addToList,
	}
}

export { useCheckbox, CheckboxContext, CheckboxProvider }
