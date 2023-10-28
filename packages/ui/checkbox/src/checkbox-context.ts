import { createContext, useCallback, useContext } from "react"
import { CheckboxContextProps } from "./checkbox.types"

const CheckboxContext = createContext<CheckboxContextProps>({
	name: "",
	onChange(): void {},
})

const useCheckbox = () => {
	const ctx = useContext(CheckboxContext)

	if (!ctx) {
		throw new Error("useCheckbox must be used within a CheckboxContextProvider")
	}

	const onChange = useCallback(
		(key: string, isChecked: boolean) => {
			if (ctx.onChange) {
				ctx.onChange(key, isChecked)
			}
		},
		[ctx],
	)

	return {
		...ctx,
		onChange,
	}
}

const Provider = CheckboxContext.Provider

export { useCheckbox, CheckboxContext, Provider }
