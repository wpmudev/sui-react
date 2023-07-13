import React from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/react-utils"

// Import required component(s)
import { Icon } from "./elements/icon-avatar"
import { Image } from "./elements/image-avatar"
import { Status } from "./elements/status"

import { AvatarProps } from "./avatar.types"

// Build "avatar" component
const Avatar: React.FC<AvatarProps> = ({
	image,
	status,
	isSmall = false,
	className,
	...props
}) => {
	// Define image object
	const imageObj = Object.assign(
		{
			src: "",
			alt: "",
		},
		image,
	)

	// Props validation
	const hasStatus = !isUndefined(status) && !isEmpty(status)
	const hasImage = !isUndefined(image) && !isEmpty(imageObj.src)

	// Define class name
	const classNames = generateCN("sui-avatar", {
		sm: isSmall,
	})

	return (
		<span className={classNames} {...props}>
			{hasImage && <Image source={imageObj.src} text={imageObj.alt} />}
			{!hasImage && <Icon />}
			{hasStatus && <Status status={status} />}
		</span>
	)
}

// Publish required component.
export { Avatar }
