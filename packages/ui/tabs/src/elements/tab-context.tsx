import React, { createContext, FC, useCallback, useId, useState } from "react"
import { TabContextProps, TabProviderProps } from "../tabs.types"

// Create a TabContext using createContext with an initial value of null
const TabContext = createContext<TabContextProps | null>(null)

// Define the TabProvider component as a functional component (FC) with TabProviderProps as its props
const TabProvider: FC<TabProviderProps> = ({ children, onSwitchTab }) => {
	// State to manage the current active tab index, defaulting to 0
	const [currentIndex, setCurrentIndex] = useState(0)

	// Generate a unique ID for the tab context
	const uniqueId = useId()
	const id = `sui-tab-${uniqueId}`

	// Callback function to switch to a specific tab by index
	const switchTab = useCallback((index: number) => {
		setCurrentIndex(index)
		// When prop exists
		if ("function" === typeof onSwitchTab) {
			onSwitchTab(index)
		}
	}, [])

	// Provide the TabContext value to its children using the provided state and functions
	return (
		<TabContext.Provider value={{ id, currentIndex, switchTab }}>
			{children}
		</TabContext.Provider>
	)
}

// Export the TabContext and TabProvider components
export { TabContext, TabProvider }
