import { useEffect, useState } from "react"

const useDebounce = <T>(value: T, delay: number, onChange = () => {}): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value)
			onChange()
		}, delay)

		// cleanup function to clear the timeout when the value changes before the delay
		return () => {
			clearTimeout(handler)
		}
	}, [value, delay, onChange])

	return debouncedValue
}

export { useDebounce }
