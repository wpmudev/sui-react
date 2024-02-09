import React from "react"
import { generateCN, isEmpty, isUndefined } from "@wpmudev/sui-utils"

// Import required component(s)
import { Icon } from "./elements/icon-avatar"
import { Image } from "./elements/image-avatar"
import { Status } from "./elements/status"

import { AvatarProps } from "./avatar.types"
import { useStyles } from "@wpmudev/sui-hooks"

// Build "avatar" component
const Avatar: React.FC<AvatarProps> = ({
	image,
	status = "none",
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

	const { cssCN } = useStyles(props, className)

	// Props validation
	const hasStatus = !isUndefined(status) && !isEmpty(status)
	const hasImage = !isUndefined(image) && !isEmpty(imageObj.src)

	// Define class name
	const classNames = generateCN(
		"sui-avatar",
		{
			sm: isSmall,
			clickable: !!props?.onClick,
		},
		cssCN,
	)

	return (
		<span className={classNames} {...props} data-testid="avatar">
			{hasImage && <Image source={imageObj.src} text={imageObj.alt} />}
			{!hasImage && <Icon />}
			{hasStatus && status !== "none" && <Status status={status} />}
		</span>
	)
}

// Publish required component.
export { Avatar }
