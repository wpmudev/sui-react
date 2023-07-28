import React, { Children, useRef, useState, useCallback, useId } from "react"

import { generateCN, handleOnKeyDown } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import { useOuterClick } from "@wpmudev/sui-hooks"

import { DropdownOption } from "./dropdown-option"
import { DropdownProps, DropdownOptionProps } from "./dropdown.types"

const Dropdown: React.FC<DropdownProps> = ({
	id,
	label,
	hasCta,
	isSmall,
	isLabelHidden,
	current,
	children,
}) => {
	const ref = useRef<HTMLDivElement | null>(null)
	let uuid = `sui-dropdown-${useId()}`

	// use id from prop list if exists
	if (id) {
		uuid = id
	}

	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [active, setActive] = useState<number>(current ?? 0)

	useOuterClick(ref, () => {
		setIsOpen(false)
	})

	const wrapperClasses = generateCN("sui-dropdown", {
		sm: isSmall,
		open: isOpen,
	})

	const onOptionSelect = useCallback(
		(option: DropdownOptionProps, index: number) => {
			setIsOpen(false)
			setActive(index)
		},
		[],
	)

	return (
		<div
			role="button"
			tabIndex={0}
			ref={ref}
			className={wrapperClasses}
			onClick={(e) => e.stopPropagation()}
			onKeyDown={() => {}}
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
				onKeyDown={(e) =>
					handleOnKeyDown(e, () => {
						setIsOpen(false)
					})
				}
			>
				{Children.map(children, (option: DropdownOptionProps, index) => (
					<DropdownOption
						key={index}
						id={uuid}
						index={index}
						isActive={index === active}
						onSelect={onOptionSelect}
						{...(option?.props ?? {})}
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

export { Dropdown }
