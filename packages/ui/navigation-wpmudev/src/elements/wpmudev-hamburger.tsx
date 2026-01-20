import { Button, ButtonProps } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"
import React, { ReactNode, useId } from "react"

interface HamburgerWPMUDEVProps {
	id?: string
	children: ReactNode
}

const HamburgerWPMUDEV: React.FC<HamburgerWPMUDEVProps> = ({
	id,
	children,
}) => {
	const generatedId = useId()
	const hamburgerMenuId = id || `sui_wpmudev_hamburger_${generatedId}`

	return (
		<ul id={hamburgerMenuId} className="sui-wpmudev__hamburger-menu">
			{React.Children.map(children, (child, index) => (
				<li key={index}>{child}</li>
			))}
		</ul>
	)
}

const HamburgerButtonWPMUDEV: React.FC<ButtonProps> = ({
	id,
	children,
	className,
	...props
}) => {
	const generatedId = useId()
	const buttonId = id || `sui_wpmudev_hamburger_button_${generatedId}`
	const customClasses = generateCN(
		"sui-wpmudev__navigation--hide-desktop",
		{},
		className,
	)

	return (
		<Button id={buttonId} {...props} className={customClasses}>
			{children}
		</Button>
	)
}

export { HamburgerWPMUDEV, HamburgerButtonWPMUDEV }
