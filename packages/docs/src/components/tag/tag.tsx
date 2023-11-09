/**
 *
 * External Dependencies
 *
 */
import React, { useState } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 *
 * Internal Dependencies
 *
 */
import Tooltip from "../tooltip/tooltip"
import "./tag.scss"

interface TagProps {
	id?: string
	color: "" | "yellow" | "blue" | "red" | "green"
	light?: boolean
	uppercase?: boolean
	tooltip?: string
	children: React.ReactNode
}

const Tag: React.FunctionComponent<
	TagProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLSpanElement>,
			HTMLSpanElement
		>
> = ({
	id = "",
	color,
	light = false,
	uppercase = false,
	tooltip,
	children,
	...props
}) => {
	const [isHovering, setIsHovering] = useState(false)

	const handleMouseOver = () => {
		setIsHovering(true)
	}

	const handleMouseOut = () => {
		setIsHovering(false)
	}

	// Set component class.
	const tagClass = classnames({
		"csb-tag": true,
		[`csb-tag--${color}`]: !!color,
		"csb-tag--light": true,
		"csb-tag--uppercase": uppercase,
	})

	// Tag with tooltip
	if (!!tooltip) {
		return (
			<Tooltip id={id} description={tooltip} active={isHovering}>
				<span
					className={tagClass}
					aria-describedby={id}
					onMouseOver={handleMouseOver}
					onFocus={handleMouseOver}
					onMouseOut={handleMouseOut}
					onBlur={handleMouseOut}
					{...props}
				>
					{children}
				</span>
			</Tooltip>
		)
	}

	// Tag without tooltip
	return (
		<span className={tagClass} {...props}>
			{children}
		</span>
	)
}

// Publish required component(s).
export default Tag
