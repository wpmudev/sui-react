/**
 * External Dependencies
 */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 * Internal Dependencies
 */
import Button from "../button/button"
import { isEmpty } from "../../utils"
import "./message.scss"

interface MessageProps {
	action?: {
		label?: string
		style?: "primary" | "secondary"
		color?: "white" | "black"
		link?: string
	}
	color: "blue" | "green" | "yellow" | "red"
	children: React.ReactNode
}

const Message: React.FunctionComponent<
	MessageProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ action, color, children, ...props }) => {
	const messageClasses = classnames({
		"csb-message": true,
		[`csb-message--${color}`]: !isEmpty(color),
	})

	const cta = Object.assign(
		{
			label: "",
			icon: "",
			style: "",
			color: "",
			type: "",
			link: "",
			page: "",
		},
		action,
	)

	return (
		<div className={messageClasses} {...props}>
			<div className="csb-message__content">{children}</div>
			{!isEmpty(cta.label) && (
				<div className="csb-message__action">
					{!isEmpty(cta.link) ? (
						<Button
							type="link"
							label={cta.label}
							small={true}
							href={cta.link}
							rel="nofollow"
							target="_blank"
							style={!isEmpty(cta.style) ? cta.style : "primary"}
							{...(!isEmpty(cta.color) && { color: cta.color })}
						/>
					) : (
						<Button
							label={cta.label}
							small={true}
							type="button"
							style={!isEmpty(cta.style) ? cta.style : "primary"}
							{...(!isEmpty(cta.color) && { color: cta.color })}
						/>
					)}
				</div>
			)}
		</div>
	)
}

export default Message
