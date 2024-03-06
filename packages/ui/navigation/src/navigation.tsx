import React, { Children } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

import { NavigationProps } from "./navigation.types"
import { NavigationBrand } from "./navigation-brand"
import { NavigationUser } from "./navigation-user"
import { useStyles } from "@wpmudev/sui-hooks"

// Navigation component
const Navigation: React.FC<NavigationProps> = ({
	children,
	brand = { title: "title", description: "" },
	user,
	_htmlProps,
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style)
	// Generate CSS class names for the navigation component
	const classNames = generateCN("sui-navigation", {}, suiInlineClassname)

	return (
		// Render the navigation component
		<nav
			className={classNames}
			data-testid="navigation"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
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
