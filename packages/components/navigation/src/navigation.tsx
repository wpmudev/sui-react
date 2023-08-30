import React, { useState, useCallback, Children, useRef } from "react"

import { generateCN, isEmpty, PluginsIcons } from "@wpmudev/sui-utils"
import { Button } from "@wpmudev/sui-button"
import * as Icons from "@wpmudev/sui-icons"
import { Dropdown, DropdownRefProps } from "@wpmudev/sui-dropdown"
import { Avatar } from "@wpmudev/sui-avatar"

import { NavigationProps } from "./navigation.types"
import { NavigationBrand } from "./navigation-brand"
import { NavigationUser } from "./navigation-user"

const Navigation: React.FC<NavigationProps> = ({ children, brand, user }) => {
	// Generate classnames for the alert banner
	const classNames = generateCN("sui-navigation", {})

	return (
		<nav className={classNames}>
			<NavigationBrand {...brand} />
			<ul className="sui-navigation__nav">
				{Children.map(children, (child, index) => (
					<li className="sui-navigation__nav-item" key={index}>
						{child}
					</li>
				))}
			</ul>
			<div className="sui-navigation__user">
				<NavigationUser {...user} />
			</div>
		</nav>
	)
}

Navigation.displayName = "Navigation"

export { Navigation }
