import React, { HTMLProps } from "react"
import classnames from "classnames"

/**
 * Interface representing the properties of a menu item.
 */
interface MenuItemProps extends HTMLProps<HTMLSpanElement | HTMLAnchorElement> {
	/**
	 * Href attribute for the menu item (if applicable).
	 */
	href?: string

	/**
	 * Additional CSS class name for the menu item.
	 */
	className?: string

	/**
	 * Children nodes of the menu item.
	 */
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
