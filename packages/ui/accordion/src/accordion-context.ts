import { createContext, useContext, useCallback, useEffect } from "react"
import { AccordionContextProps } from "./accordion.types"

const AccordionContext = createContext<AccordionContextProps>({
	allowMultipleExpand: false,
	expandState: {},
	setExpandState: () => null,
})

const AccordionProvider = AccordionContext.Provider

const useAccordion = ({
	uniqueId,
	isExpanded: propIsExpanded,
}: {
	uniqueId: string
	isExpanded?: boolean
}) => {
	const { allowMultipleExpand, expandState, setExpandState } =
		useContext(AccordionContext)

	useEffect(() => {
		if (isExpanded) {
			setExpandState({ ...expandState, [uniqueId]: propIsExpanded })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// toggle the expand state
	const toggle = useCallback(() => {
		if (!allowMultipleExpand) {
			return setExpandState({ [uniqueId]: !expandState[uniqueId] })
		}
		setExpandState({ ...expandState, [uniqueId]: !expandState[uniqueId] })
	}, [allowMultipleExpand, setExpandState, expandState, uniqueId])

	// Expand state of item with "uniqueId"
	const isExpanded = expandState[uniqueId]

	return {
		toggle,
		isExpanded,
	}
}

export { AccordionContext, AccordionProvider, useAccordion }
