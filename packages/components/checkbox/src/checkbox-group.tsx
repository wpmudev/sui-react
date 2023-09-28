import React, {
	Children,
	ReactNode,
	useCallback,
	useEffect,
	useState,
} from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { Provider } from "./checkbox-context"
import { CheckboxGroupProps, CheckboxValueType } from "./checkbox.types"

const CheckboxGroup = ({
	isInline = true,
	children,
	name = "",
	defaultValue = [],
	isSmall = false,
	isDisabled = false,
	onChange = () => {},
}: CheckboxGroupProps) => {
	const [current, setCurrent] = useState<CheckboxValueType[]>(defaultValue)

	const className = generateCN("sui-checkbox-group", {
		inline: isInline,
		sm: isSmall,
	})

	return (
		<Provider
			value={{
				name,
				current,
				setCurrent,
				defaultValue,
				isDisabled,
				onChange,
			}}
		>
			<ul className={className}>
				{Children.map(children, (child: ReactNode) => (
					<li className="sui-checkbox-group__item">{child}</li>
				))}
			</ul>
		</Provider>
	)
}

export { CheckboxGroup }
