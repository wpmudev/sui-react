import React, { HTMLProps, useCallback } from "react"
import { generateCN, isEmpty } from "@wpmudev/react-utils"

/**
 * Represents the properties for a dropdown option.
 */
type DropdownOptionProps = {
	/**
	 * The icon for the dropdown option.
	 */
	icon?: string
	/**
	 * The URL for the dropdown option.
	 */
	href?: string
	/**
	 * The callback function to be called when the dropdown option is clicked.
	 */
	onClick?: () => void
	/**
	 * The content of the dropdown option.
	 */
	children?: React.ReactNode
} & Omit<
	HTMLProps<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>,
	"onClick" | "onSelect"
>

/**
 * Represents the properties for a dropdown option item.
 */
interface DropdownOptionItemProps extends DropdownOptionProps {
	/**
	 * The unique identifier of the dropdown option item.
	 */
	id: string
	/**
	 * Indicates whether the dropdown option item is active or not.
	 */
	isActive: boolean
	/**
	 * The index of the dropdown option item.
	 */
	index: number
	/**
	 * The callback function to be called when the dropdown option item is selected.
	 *
	 * @param option - The selected dropdown option.
	 * @param index  - The index of the selected dropdown option.
	 */
	onSelect: (option: DropdownOptionProps, index: number) => void
}

/**
 * Represents a dropdown option item.
 *
 * @param {DropdownOptionItemProps} props - The properties for the dropdown option item.
 * @return {React.ReactNode} The rendered dropdown option item.
 */
const DropdownOption: React.FC<DropdownOptionItemProps> = (props) => {
	const {
		id,
		isActive,
		index,
		onSelect = () => {},
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

export { DropdownOption, DropdownOptionItemProps, DropdownOptionProps }
