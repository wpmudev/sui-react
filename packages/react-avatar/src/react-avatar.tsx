import React, { HTMLProps } from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/react-utils"

// Import required component(s)
import { Icon } from "./elements/icon-avatar"
import { Image } from "./elements/image-avatar"
import { Status } from "./elements/status"

interface AvatarPropTypes extends HTMLProps<HTMLSpanElement> {
	image: string
	status: string
	isSmall: boolean
	className: string
}

// Build "avatar" component
const Avatar = ({
	image,
	status,
	isSmall = false,
	className,
	...props
}: AvatarPropTypes) => {
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
export { Avatar, AvatarPropTypes }
