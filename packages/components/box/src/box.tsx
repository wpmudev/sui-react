import React from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/sui-utils"

import { BoxGroup } from "./box-group"
import { BoxProps } from "./box.types"

// Create box component
const Box: React.FC<BoxProps> = ({
	title,
	icon,
	hideMobileIcon = false,
	headerLeft,
	headerRight,
	children,
	isSmall,
	className = "",
	style = {},
}) => {
	// Prop(s) validation
	const hasTitle = !isUndefined(title) && !isEmpty(title)
	const hasIcon = !isUndefined(icon) && !isEmpty(icon)
	const hasLeft = !isUndefined(headerRight) && !!headerLeft
	const hasRight = !isUndefined(headerRight) && !!headerRight

	const classNames = generateCN("sui-box", { "size-sm": isSmall }, className)

	return (
		<div className={classNames} style={style ?? {}}>
			{hasTitle && (
				<BoxGroup isInline={true}>
					<div slot="left">
						{hasIcon && (
							<span
								className={generateCN(
									"suicons",
									{
										[icon ?? ""]: true,
										lg: true,
									},
									hideMobileIcon
										? "sui-box-group__item sui-icon--hide-sm"
										: "sui-box-group__item",
								)}
								aria-hidden="true"
							/>
						)}
						{hasTitle && (
							<h2 className="sui-heading sui-heading--h3 sui-box-group__item">
								{title}
							</h2>
						)}
						{hasLeft && headerLeft}
					</div>
					<div {...(hasRight && { slot: "right" })}>
						{hasRight && headerRight}
					</div>
				</BoxGroup>
			)}
			{children}
		</div>
	)
}

// Publish component(s)
export { Box }
