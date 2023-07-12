import React, { HTMLProps } from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/react-utils"

// Import required component(s)
import { Icon } from "./elements/icon-avatar"
import { Image } from "./elements/image-avatar"
import { Status } from "./elements/status"

/**
 * Represents the properties for an avatar component.
 */
interface AvatarProps extends HTMLProps<HTMLSpanElement> {
	/**
	 * The image source for the avatar.
	 */
	image: string
	/**
	 * The status of the avatar.
	 */
	status: string
	/**
	 * Indicates whether the avatar should be displayed as small or not.
	 */
	isSmall: boolean
	/**
	 * The CSS class name for the avatar.
	 */
	className: string
}

// Build "avatar" component
const Avatar: React.FC<AvatarProps> = ({
	image,
	status,
	isSmall = false,
	className,
	...props
}: AvatarProps) => {
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
export { Avatar, AvatarProps }
