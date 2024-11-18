import React, { ReactNode } from "react"

interface NavActionsWPMUDEVProps {
	children: ReactNode
}

const NavActionsWPMUDEV: React.FC<NavActionsWPMUDEVProps> = ({ children }) => {
	return (
		<div className="sui-wpmudev__navigation--actions sui-wpmudev__navigation--hide-mobile">
			{children}
		</div>
	)
}

export { NavActionsWPMUDEV }
