import React, { Children } from "react"

import { generateCN } from "@wpmudev/sui-utils"

import { NavigationProps } from "./navigation.types"
import { NavigationBrand } from "./navigation-brand"
import { NavigationUser } from "./navigation-user"
import { useDefaultChildren } from "@wpmudev/sui-hooks"

// Navigation component
const Navigation: React.FC<NavigationProps> = ({
	children,
	brand = { title: "title", description: "" },
	user,
}) => {
	// Generate CSS class names for the navigation component
	const classNames = generateCN("sui-navigation", {})

	return (
		// Render the navigation component
		<nav className={classNames} data-testid="navigation">
			{/* Render the navigation brand component */}
			<NavigationBrand {...brand} />
			<ul className="sui-navigation__nav">
				{/* Map over children components and render each one as a list item */}
				{Children.map(children, (child, index) => (
					<li className="sui-navigation__nav-item" key={index}>
						{child}
					</li>
				))}
			</ul>
			{/* Render the navigation user component */}
			<NavigationUser {...user} />
		</nav>
	)
}

// Export the Navigation component
export { Navigation }
