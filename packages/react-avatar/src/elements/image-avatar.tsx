import React, { Fragment } from "react"
import { isEmpty, isUndefined } from "@wpmudev/react-utils"

interface ImageAvatarPropsTypes {
	source: string
	text: string
}

// Build "image avatar" element
const Image = ({ source, text }: ImageAvatarPropsTypes) => {
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
				className="sui-avatar__image"
				style={{ backgroundImage: `url(${source})` }}
				tabIndex="-1"
			/>
			<span className="sui-screen-reader-only">
				{hasAlt ? text : "Logged in user avatar"}
			</span>
		</Fragment>
	)
}

export { Image }
