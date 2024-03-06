import React from "react"
import { _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

export const Indeterminate = ({ ...props }) => (
	<span {..._renderHTMLPropsSafely(props)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="10"
			height="2"
			viewBox="-1 0 12 3"
			fill="none"
			className="sui-checkbox__icon"
		>
			<path
				d="M9.7 0H0.3C0.134315 0 0 0.134315 0 0.3V1.7C0 1.86569 0.134315 2 0.3 2H9.7C9.86569 2 10 1.86569 10 1.7V0.3C10 0.134315 9.86569 0 9.7 0Z"
				fill="white"
			/>
		</svg>
	</span>
)
