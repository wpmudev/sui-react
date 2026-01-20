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
	showTitleInMobile = false,
	showDescriptionInMobile = false,
	user,
	actions = [],
	_htmlProps,
	_style,
}) => {
	const generatedId = useId()
	const navigationId = id || `sui-navigation-${generatedId}`
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
			<NavigationBrand
				{...brand}
				id={brand?.id || `${navigationId}-brand`}
				showTitleInMobile={showTitleInMobile}
				showDescriptionInMobile={showDescriptionInMobile}
			/>
			<ul id={`${navigationId}-nav`} className="sui-navigation__nav">
				{/* Map over children components and render each one as a list item */}
				{Children.map(children, (child, index) => (
					<li
						id={`${navigationId}-nav-item-${index}`}
						className="sui-navigation__nav-item"
						key={index}
					>
						{child}
					</li>
				))}
			</ul>
			{(actions.length > 0 || user) && (
				<div id={`${navigationId}-actions`} className="sui-navigation__actions">
					{/* Show actions  */}
					{actions.length > 0 &&
						actions.map((action, index) => (
							<div id={`${navigationId}-action-${index}`} key={index}>
								{action}
							</div>
						))}
					{/* Render the navigation user component */}
					{user && (
						<NavigationUser {...user} id={user?.id || `${navigationId}-user`} />
					)}
				</div>
			)}
		</nav>
	)
}

// Export the Navigation component
export { Navigation }
