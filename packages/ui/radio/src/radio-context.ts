import { createContext, useCallback, useContext } from "react"
import { RadioContextProps, RadioValueType } from "./radio.types"

const RadioContext = createContext<RadioContextProps>({
	name: "",
	onChange(value: RadioValueType): void {},
	setCurrent(value: RadioValueType): void {},
})

const useRadio = () => {
	const ctx = useContext(RadioContext)

	if (!ctx) {
		throw new Error("useRadio must be used within a RadioContextProvider")
	}

	const onChange = useCallback(
		(value: RadioValueType) => {
			ctx.setCurrent(value)

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

const Provider = RadioContext.Provider

export { useRadio, RadioContext, Provider }
