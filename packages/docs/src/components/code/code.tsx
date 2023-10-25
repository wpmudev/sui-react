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
import "./code.scss"

interface CodeProps {
	small?: boolean
	theme?: "dark" | "ghost" | "light"
	fullWidth?: boolean
	children: React.ReactNode
	className?: string
}

const Code: React.FunctionComponent<
	CodeProps &
		React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = ({
	small,
	theme = "light",
	fullWidth,
	children,
	className = "",
	...props
}) => {
	const codeClass = classnames({
		"csb-code": true,
		"csb-code--sm": small,
		[`csb-code--theme-${theme}`]: theme,
		"csb-code--block": fullWidth,
		[className]: !!className,
	})

	return (
		<code className={codeClass} {...props}>
			{children}
		</code>
	)
}

export default Code
