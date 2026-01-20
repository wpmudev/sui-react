import React, { ReactNode, useId } from "react"

interface NavActionsWPMUDEVProps {
	id?: string
	children: ReactNode
}

const NavActionsWPMUDEV: React.FC<NavActionsWPMUDEVProps> = ({
	id,
	children,
}) => {
	const generatedId = useId()
	const navActionsId = id || `sui_wpmudev_nav_actions_${generatedId}`

	return (
		<div
			id={navActionsId}
			className="sui-wpmudev__navigation--actions sui-wpmudev__navigation--hide-mobile"
		>
			{children}
		</div>
	)
}

export { NavActionsWPMUDEV }
