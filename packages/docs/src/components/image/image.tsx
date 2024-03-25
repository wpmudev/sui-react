import React from "react"
import { generateCN } from "@wpmudev/sui-utils"
import "./image.scss"

interface ImageProps {
	src: string
	alt: string
	xScrollable?: boolean
}

const Image: React.FC<ImageProps> = ({ src, alt, xScrollable = false }) => {
	const containerClasses = generateCN("csb-image", {
		"x-scrollable": xScrollable,
	})

	return (
		<div className={containerClasses}>
			<img src={src} alt={alt} />
		</div>
	)
}

export default Image
