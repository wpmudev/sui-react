import { Button, ButtonProps } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"
import React, { ReactNode } from "react"

interface HamburgerWPMUDEVProps {
	children: ReactNode
}

const HamburgerWPMUDEV: React.FC<HamburgerWPMUDEVProps> = ({ children }) => {
	return (
		<ul className="sui-wpmudev__hamburger-menu">
			{React.Children.map(children, (child, index) => (
				<li key={index}>{child}</li>
			))}
		</ul>
	)
}

const HamburgerButtonWPMUDEV: React.FC<ButtonProps> = ({
	children,
	className,
	...props
}) => {
	const customClasses = generateCN(
		"sui-wpmudev__navigation--hide-desktop",
		{},
		className,
	)

	return (
		<Button {...props} className={customClasses}>
			{children}
		</Button>
	)
}

export { HamburgerWPMUDEV, HamburgerButtonWPMUDEV }
