import React, { Fragment } from "react"

import { isEmpty, isUndefined } from "@wpmudev/sui-utils"
import { ImageAvatarProps } from "./image-avatar.types"

// Build "image avatar" element
const Image: React.FC<ImageAvatarProps> = ({ id, source, text }) => {
	// Props validation
	const hasSrc = !isUndefined(source) && !isEmpty(source)
	const hasAlt = !isUndefined(text) && !isEmpty(text)

	if (!hasSrc) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Avatar\n\nThe parameter "source" in the "Image" component is required.\n\n`,
		)
	}

	// Return element
	return (
		<Fragment>
			<span
				id={id}
				className="sui-avatar__image"
				style={{ backgroundImage: `url(${source})` }}
				tabIndex={-1}
				data-testid="avatar-image"
			/>
			<span
				id={id ? `${id}_alt` : undefined}
				className="sui-screen-reader-only"
				data-testid="avatar-image-alt"
			>
				{hasAlt ? text : "Logged in user avatar"}
			</span>
		</Fragment>
	)
}

export { Image }
