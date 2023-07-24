import React, { useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import { DropdownOptionProps } from "./dropdown-option.types"

/**
 * Represents a dropdown option item.
 *
 * @param {DropdownOptionItemProps} props - The properties for the dropdown option item.
 * @return {React.ReactNode} The rendered dropdown option item.
 */
const DropdownOption: React.FC<DropdownOptionProps> = (props) => {
	const {
		id,
		isActive,
		index,
		onSelect = (
			props: {
				icon?: string
				href?: string
				onClick?: () => void
				children?: React.ReactNode
			} & Omit<
				React.HTMLProps<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
				"onClick" | "onSelect"
			>,
			index: any,
		) => {},
		icon,
		href,
		onClick,
		children,
		...optionProps
	} = props

	const optId = `${id}-${index}`

	// const optIconExists = !isEmpty(icon ?? "")
	const hasHref = !isEmpty(href ?? "")
	const hasAction = !!onClick

	// Use anchor tag if option has URL
	let TagName = hasHref ? "a" : "div"

	// Use 'button' if option has action button
	if (hasAction) {
		TagName = "button"
	}

	const onSelectOption = useCallback(() => {
		// if (hasAction) {
		onSelect(props, index)
		// }
	}, [index, onSelect, props])

	return (
		<TagName
			role="option"
			id={optId}
			className="sui-dropdown__option"
			aria-selected={isActive}
			onClick={onSelectOption}
			{...optionProps}
		>
			{!isEmpty(icon ?? "") && (
				<span
					aria-hidden="true"
					className={generateCN("suicons", { sm: true })}
				/>
			)}
			{children}
		</TagName>
	)
}

export { DropdownOption }
