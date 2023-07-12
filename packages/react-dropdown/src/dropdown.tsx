import React, {
	Children,
	useRef,
	useState,
	useCallback,
	useId,
	useEffect,
} from "react"
import { generateCN } from "@wpmudev/react-utils"

import { Button } from "@wpmudev/react-button"
import { DropdownOption, DropdownOptionProps } from "./dropdown-option"

/**
 * Represents the properties for a dropdown component.
 */
interface DropdownProps {
	/**
	 * The unique identifier of the dropdown.
	 */
	id: string
	/**
	 * The label for the dropdown.
	 */
	label?: string
	/**
	 * Indicates whether the dropdown has a call-to-action button.
	 */
	hasCta?: boolean
	/**
	 * Indicates whether the dropdown should be displayed as small or not.
	 */
	isSmall?: boolean
	/**
	 * Indicates whether the label should be hidden or not.
	 */
	isLabelHidden?: boolean
	/**
	 * The current selected value of the dropdown.
	 */
	current: number
	/**
	 * The content of the dropdown.
	 */
	children?: React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({
	id,
	label,
	hasCta,
	isSmall,
	isLabelHidden,
	current,
	children,
}) => {
	const ref = useRef<HTMLDivElement>(null)
	let uuid = `sui-dropdown-${useId()}`

	// use id from prop list if exists
	if (id) {
		uuid = id
	}

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [active, setActive] = useState<number>(current ?? 0)

	// Close dropdown when click outside of it
	const handleOutsideClick = useCallback((e) => {
		if (ref && !ref?.current?.contains(e.target)) {
			setIsOpen(false)
		}
	}, [])

	// Toggle dropdown based on the clicks
	useEffect(() => {
		document.addEventListener("mousedown", handleOutsideClick)

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick)
		}
	}, [handleOutsideClick])

	const wrapperClasses = generateCN("sui-dropdown", {
		sm: isSmall,
		open: isOpen,
	})

	const onOptionSelect = useCallback(
		(option: DropdownOptionTypes, index: number) => {
			setIsOpen(false)
			setActive(index)
		},
		[],
	)

	return (
		<div
			ref={ref}
			className={wrapperClasses}
			onClick={(e) => e.stopPropagation()}
		>
			<Button
				icon="menu"
				iconPosition="start"
				color="black"
				iconTrail="chevron-down"
				appearance="secondary"
				isSmall={!!isSmall}
				aria-activedescendant={isOpen ? `${uuid}-${current}` : ""}
				onClick={() => setIsOpen(!isOpen)}
			>
				{!isLabelHidden ? label : undefined}
			</Button>
			<div
				tabIndex="-1"
				role="listbox"
				id={uuid}
				className="sui-dropdown__menu"
				{...(label && { "aria-labelledby": `${uuid}__label` })}
				onClick={() => setIsOpen(false)}
			>
				{Children.map(children, (option: DropdownOptionProps, index) => (
					<DropdownOption
						key={index}
						id={uuid}
						index={index}
						isActive={index === active}
						onSelect={onOptionSelect}
						{...(option.props ?? {})}
					/>
				))}
				{hasCta && (
					<div className="sui-dropdown__cta">
						<Button
							appearance="primary"
							color="blue"
							iconLead="hub"
							isSmall={true}
						>
							Unlock bonus features
						</Button>
					</div>
				)}
			</div>
		</div>
	)
}

export { Dropdown, DropdownProps }
