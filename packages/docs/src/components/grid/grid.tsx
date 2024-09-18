/**
 *
 * External Dependencies
 *
 */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 *
 * Internal Dependencies
 *
 */
import "./grid.scss"

/*************************************
 *
 * Row Component
 *
 *************************************/
interface RowProps {
	gutter?: "sm" | "lg"
	children: React.ReactNode
}

const Row: React.FunctionComponent<
	RowProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ gutter, children, ...props }) => {
	const rowClasses = classnames({
		"csb-row": true,
		[`csb-row--${gutter}`]: !!gutter,
	})

	return (
		<div className={rowClasses} {...props}>
			{children}
		</div>
	)
}

/****************************************
 *
 * Column Component
 *
 ****************************************/
interface ColProps {
	size?: "1" | "2" | "3" | "4" | "5" | "6"
	children: React.ReactNode
}
const Col: React.FunctionComponent<
	ColProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ size, children, ...props }) => {
	const colClasses = classnames({
		"csb-col": true,
		[`csb-col--${size}`]: size,
	})

	return (
		<div className={colClasses} {...props}>
			{children}
		</div>
	)
}

export { Row, Col }
