import React, { HTMLProps } from "react"
import classnames from "classnames"

interface MenuItemProps extends HTMLProps<HTMLSpanElement | HTMLAnchorElement> {
	href?: string
	className?: string
	children?: React.ReactNode
}

// Build menu item
const MenuItem: React.FC<MenuItemProps> = ({
	href,
	className = "",
	children,
	...props
}) => {
	// Define element tag name
	let TagName = "span"

	if (!!href) {
		TagName = "a"
	}

	// Generate classnames
	const classNames = classnames(
		"sui-menu__item",
		{
			"sui-menu-link": !!href,
		},
		className,
	)

	const attrs = {
		className: classNames,
		href: !!href ? href : undefined,
		...props,
	}

	return (
		<TagName className={classNames} {...attrs}>
			{children}
		</TagName>
	)
}

export { MenuItem, MenuItemProps }
