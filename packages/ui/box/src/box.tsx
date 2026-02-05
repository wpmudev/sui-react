import React, { useId } from "react"
import {
	_renderHTMLPropsSafely,
	generateCN,
	isEmpty,
	isUndefined,
} from "@wpmudev/sui-utils"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { IconProps } from "@wpmudev/sui-icon"

import { BoxGroup } from "./box-group"
import { BoxProps } from "./box.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"

// Create box component
const Box: React.FC<BoxProps> = ({
	id,
	title,
	description,
	icon,
	hideMobileIcon = false,
	headerLeft,
	headerRight,
	children,
	isSmall = false,
	className = "",
	style = {},
	hasLargeRadius = false,
	_htmlProps = {},
	_style,
}) => {
	const generatedId = useId()
	const boxId = id || `sui-box-${generatedId}`

	// Prop(s) validation
	const hasTitle = !isUndefined(title) && !isEmpty(title)
	const hasIcon = !isUndefined(icon) && !isEmpty(icon)
	const hasLeft = !isUndefined(headerLeft) && !!headerLeft
	const hasRight = !isUndefined(headerRight) && !!headerRight
	const hasDesc = !isUndefined(description) && !!description

	// Determine the IconTag based on the provided icon value
	const IconTag: React.ComponentType<IconProps> = Icons[icon as IconsNamesType]
	const { suiInlineClassname } = useStyles(_style, className)
	const classNames = generateCN(
		"sui-box",
		{ "size-sm": isSmall, "large-radius": hasLargeRadius },
		suiInlineClassname,
	)

	// Default children content
	children = useDefaultChildren(children)

	return (
		<div
			id={boxId}
			className={classNames}
			style={style ?? {}}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{hasTitle && (
				<BoxGroup isInline={true} id={`${boxId}-header-group`}>
					<div slot="left" id={`${boxId}-header-left`}>
						<div className="sui-box__container" id={`${boxId}-container`}>
							{hasTitle && (
								<div className="sui-box__title" id={`${boxId}-title`}>
									{hasIcon && IconTag && (
										<span
											id={`${boxId}-icon`}
											className={generateCN(
												"suicons",
												{},
												hideMobileIcon
													? "sui-box-group__item sui-icon--hide-sm"
													: "sui-box-group__item",
											)}
											aria-hidden="true"
										>
											<IconTag size="md" />
										</span>
									)}
									<h2
										className="sui-heading sui-heading--h3 sui-box-group__item"
										id={`${boxId}-heading`}
									>
										{title}
									</h2>
									{hasLeft && headerLeft}
								</div>
							)}
							{description && <p id={`${boxId}-description`}>{description}</p>}
						</div>
					</div>
					<div
						{...(hasRight && { slot: "right" })}
						id={`${boxId}-header-right`}
					>
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
