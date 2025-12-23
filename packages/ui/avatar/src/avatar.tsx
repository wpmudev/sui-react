import React, { useId } from "react"
import {
	_renderHTMLPropsSafely,
	generateCN,
	isEmpty,
	isUndefined,
} from "@wpmudev/sui-utils"

// Import required component(s)
import { Icon } from "./elements/icon-avatar"
import { Image } from "./elements/image-avatar"
import { Status } from "./elements/status"

import { AvatarProps } from "./avatar.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Build "avatar" component
const Avatar: React.FC<AvatarProps> = ({
	id,
	image,
	status = "none",
	isSmall = false,
	className,
	icon = "UserAlt",
	_htmlProps = {},
	_style = {},
	onClick,
}) => {
	const generatedId = useId()
	const avatarId = id || `sui_avatar_${generatedId}`

	// Define image object
	const imageObj = Object.assign(
		{
			src: "",
			alt: "",
		},
		image,
	)

	const { suiInlineClassname } = useStyles(_style, className)

	// Props validation
	const hasStatus = !isUndefined(status) && !isEmpty(status)
	const hasImage = !isUndefined(image) && !isEmpty(imageObj.src)

	// Define class name
	const classNames = generateCN(
		"sui-avatar",
		{
			sm: isSmall,
			clickable: !!onClick,
		},
		suiInlineClassname,
	)

	const attributes = {
		id: avatarId,
		className: classNames,
		..._renderHTMLPropsSafely(_htmlProps),
		"data-testid": "avatar",
		onClick,
	}

	return (
		<span {...attributes}>
			{hasImage && (
				<Image
					id={`${avatarId}_image`}
					source={imageObj.src}
					text={imageObj.alt}
				/>
			)}
			{!hasImage && <Icon id={`${avatarId}_icon`} iconName={icon} />}
			{hasStatus && status !== "none" && (
				<Status id={`${avatarId}_status`} status={status} />
			)}
		</span>
	)
}

// Publish required component.
export { Avatar }
