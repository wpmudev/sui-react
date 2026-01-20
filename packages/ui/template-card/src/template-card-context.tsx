import { createContext, useCallback, useContext } from "react"
import { CardContextProps, CardValueType } from "./template-card.types"

const TemplateCardContext = createContext<CardContextProps>({
	name: "",
	onChange(value: CardValueType): void {},
	setCurrent(value: CardValueType): void {},
})

const useTemplateCard = () => {
	const ctx = useContext(TemplateCardContext)

	if (!ctx) {
		throw new Error(
			"useTemplateCard must be used within a TemplateContextProvider",
		)
	}

	const onChange = useCallback(
		(value: CardValueType) => {
			ctx.setCurrent(value)

			if (ctx.onChange) {
				// Call the callback function
				ctx.onChange(value)
			}
		},
		[ctx],
	)

	return {
		...ctx,
		onChange,
	}
}

const Provider = TemplateCardContext.Provider

export { useTemplateCard, TemplateCardContext, Provider }
