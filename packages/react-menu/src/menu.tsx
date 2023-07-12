import React, { Children } from "react"

import { MenuItem } from "./menu-item"

interface MenuProps {
	children?: React.ReactNode
}

// Build menu component
const Menu: React.FC<MenuProps> = ({ children }) => {
	// get last item
	const lastItem = children.length - 1

	return (
		<ul className="sui-menu">
			{Children.map(children, (item, index) => (
				<li className="sui-menu__list">
					<MenuItem key={index} {...item.props}>
						{item.props.label}
					</MenuItem>
					{index !== lastItem && (
						<span className="sui-menu__break" aria-hidden="true" tabIndex="-1">
							|
						</span>
					)}
				</li>
			))}
		</ul>
	)
}

export { Menu, MenuProps }
