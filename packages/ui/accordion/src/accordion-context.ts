import { createContext, useContext, useCallback, useEffect } from "react"
import { AccordionContextProps } from "./accordion.types"
import { isUndefined } from "@wpmudev/sui-utils"

const AccordionContext = createContext<AccordionContextProps>({
	allowMultipleExpand: false,
	expandState: {},
	setExpandState: () => null,
	spacing: "",
	isFlushed: false,
})

const AccordionProvider = AccordionContext.Provider

const useAccordion = ({
	uniqueId,
	isExpanded,
}: {
	uniqueId: string
	isExpanded: boolean
}) => {
	const { allowMultipleExpand, expandState, setExpandState } =
		useContext(AccordionContext)

	// Set initial expand state only once when component mounts
	useEffect(() => {
		if (!isUndefined(isExpanded) && isUndefined(expandState[uniqueId])) {
			setExpandState((prevState: Record<string, boolean>) => ({
				...prevState,
				[uniqueId]: isExpanded,
			}))
		}
	}, [uniqueId, setExpandState, isExpanded, expandState])

	// toggle the expand state
	const toggle = useCallback(() => {
		setExpandState((prevState: Record<string, boolean>) => {
			if (!allowMultipleExpand) {
				// When not allowing multiple expand, close all others and toggle current
				const newState: Record<string, boolean> = {}
				Object.keys(prevState).forEach((key) => {
					newState[key] = key === uniqueId ? !prevState[uniqueId] : false
				})
				return newState
			}
			// When allowing multiple expand, just toggle current item
			return {
				...prevState,
				[uniqueId]: !prevState[uniqueId],
			}
		})
	}, [allowMultipleExpand, uniqueId, setExpandState])

	// Expand state of item with "uniqueId"
	const isCurrentlyExpanded = expandState[uniqueId] ?? false

	return {
		toggle,
		isCurrentlyExpanded,
	}
}

export { AccordionContext, AccordionProvider, useAccordion }
