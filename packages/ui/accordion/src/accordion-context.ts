import { createContext, useContext, useCallback, useEffect } from "react"
import { AccordionContextProps } from "./accordion.types"
import { isUndefined } from "@wpmudev/sui-utils"

const AccordionContext = createContext<AccordionContextProps>({
	allowMultipleExpand: false,
	expandState: {},
	setExpandState: () => null,
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

	// Set initail expand state
	useEffect(() => {
		if (!isUndefined(isExpanded)) {
			setExpandState({
				[uniqueId]: isExpanded,
			})
		}
	}, [isExpanded, uniqueId, setExpandState])

	// toggle the expand state
	const toggle = useCallback(() => {
		if (!allowMultipleExpand) {
			return setExpandState({
				[uniqueId]: !expandState[uniqueId],
			})
		}
		setExpandState({
			...expandState,
			[uniqueId]: !expandState[uniqueId],
		})
	}, [allowMultipleExpand, setExpandState, expandState, uniqueId])

	// Expand state of item with "uniqueId"
	const isCurrentlyExpanded = expandState[uniqueId]

	return {
		toggle,
		isCurrentlyExpanded,
	}
}

export { AccordionContext, AccordionProvider, useAccordion }
