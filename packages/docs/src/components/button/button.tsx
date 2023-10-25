/**
 * External Dependencies
 */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 * Internal Dependencies
 */
import { isEmpty } from "../../utils"
import "./button.scss"

interface ButtonProps {
	label: string
	icon?: string
	style: "primary" | "secondary"
	color?: "white" | "black"
	small?: boolean
	className?: string
}

// All valid attributes in "a" tag
type aTagAttributes = React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
>

// All valid attributes in "button" tag
type buttonTagAttributes = React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>

// Signature for "button" tag
function Button({
	type,
	style,
	color,
	small,
	icon,
	className,
	...props
}: ButtonProps & { type: "button" } & buttonTagAttributes): React.ReactElement

// Signature for "a" tag
function Button({
	type,
	style,
	color,
	small,
	icon,
	className,
	...props
}: ButtonProps & { type: "link" } & aTagAttributes): React.ReactElement

// Implementation
function Button({
	type,
	style,
	color,
	small,
	icon = "",
	label,
	className = "",
	...props
}: { type: "button" | "link" } & ButtonProps) {
	const btnClass = classnames({
		"csb-button": true,
		[`csb-button--${style}`]: ["primary", "secondary"].includes(style),
		[`csb-button--${color}`]: color,
		"csb-button--sm": small,
		[className]: !!className,
	})

	const ButtonTag = "button" === type ? "button" : "a"

	return (
		<ButtonTag className={btnClass} {...props}>
			{!isEmpty(icon) && (
				<span className="csb-button__icon">
					<span className={`csb-icon csb-icon--${icon}`} />
				</span>
			)}
			<span className="csb-button__label">{label}</span>
		</ButtonTag>
	)
}

export default Button
