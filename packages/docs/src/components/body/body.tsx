/**
 * External Dependencies
 */
import React from "react"

/**
 * Internal Dependencies
 */
import "./body.scss"

interface BodyProps {
	children: React.ReactNode
}

const Body: React.FunctionComponent<
	BodyProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ children, ...props }) => {
	return (
		<div className="csb-body" {...props}>
			{children}
		</div>
	)
}

export default Body
