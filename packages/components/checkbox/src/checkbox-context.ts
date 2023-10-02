import { createContext, useCallback, useContext } from "react"
import { CheckboxContextProps, CheckboxValueType } from "./checkbox.types"

const CheckboxContext = createContext<CheckboxContextProps>({
	name: "",
	onChange(value: CheckboxValueType): void {},
	setCurrent(value: CheckboxValueType): void {},
})

const useCheckbox = () => {
	const ctx = useContext(CheckboxContext)

	if (!ctx) {
		throw new Error("useCheckbox must be used within a CheckboxContextProvider")
	}

	const onChange = useCallback(
		(value: CheckboxValueType) => {
			if (ctx.onChange) {
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

const Provider = CheckboxContext.Provider

export { useCheckbox, CheckboxContext, Provider }
