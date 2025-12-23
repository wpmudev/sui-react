import React, { useId, Children } from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { NavigationProps } from "./navigation.types"
import { NavigationBrand } from "./navigation-brand"
import { NavigationUser } from "./navigation-user"
import { useStyles } from "@wpmudev/sui-hooks"

// Navigation component
const Navigation: React.FC<NavigationProps> = ({
	id,
	children,
	brand = { title: "title", description: "" },
	user,
	actions = [],
	_htmlProps,
	_style,
}) => {
	const generatedId = useId()
	const navigationId = id || `sui_navigation_${generatedId}`
	const { suiInlineClassname } = useStyles(_style)
	// Generate CSS class names for the navigation component
	const classNames = generateCN("sui-navigation", {}, suiInlineClassname)

	return (
		// Render the navigation component

		<nav
			id={navigationId}
			className={classNames}
			data-testid="navigation"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{/* Render the navigation brand component */}
			<NavigationBrand {...brand} id={brand?.id || `${navigationId}_brand`} />
			<ul id={`${navigationId}_nav`} className="sui-navigation__nav">
				{/* Map over children components and render each one as a list item */}
				{Children.map(children, (child, index) => (
					<li
						id={`${navigationId}_nav_item_${index}`}
						className="sui-navigation__nav-item"
						key={index}
					>
						{child}
					</li>
				))}
			</ul>
			{(actions.length > 0 || user) && (
				<div id={`${navigationId}_actions`} className="sui-navigation__actions">
					{/* Show actions  */}
					{actions.length > 0 &&
						actions.map((action, index) => (
							<div id={`${navigationId}_action_${index}`} key={index}>
								{action}
							</div>
						))}
					{/* Render the navigation user component */}
					{user && (
						<NavigationUser {...user} id={user?.id || `${navigationId}_user`} />
					)}
				</div>
			)}
		</nav>
	)
}

// Export the Navigation component
export { Navigation }
