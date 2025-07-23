import React, { createContext, useCallback, useContext } from "react"
import { SegmentedControlContextProps } from "./segmented-control.types"

// Create the SegmentedControlContext to provide context values for the SegmentedControl component.
const SegmentedControlContext =
	createContext<SegmentedControlContextProps | null>(null)

// Custom hook to access and utilize the SegmentedControlContext.
const useSegmentedControl = (value: string | number) => {
	// Get the SegmentedControlContext from the nearest Context Provider.
	const ctx = useContext(SegmentedControlContext)

	// Define the onClick event handler using the value received from the component's prop.
	const onClick = useCallback(() => {
		// Call the onClick method from the context (if it exists) with the provided value.
		ctx?.onClick(value)
	}, [ctx, value])

	// Return the context values and the custom onClick event handler.
	return { ...ctx, onClick }
}

export { SegmentedControlContext, useSegmentedControl }
