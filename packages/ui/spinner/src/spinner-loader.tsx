import React from "react"

import { SpinnerLoaderProps } from "./spinner.types"
import { useStyles } from "@wpmudev/sui-hooks"
import { generateCN } from "@wpmudev/sui-utils"

const SpinnerLoader = ({ color, ...props }: SpinnerLoaderProps) => {
	const { suiInlineClassname } = useStyles(props)

	// const colors = {
	// 	primary: "#286EF1",
	// 	dark: "#FFFFFF",
	// }

	// Set default attributes for the spinner
	const attrs: Record<string, any> = {
		cx: "50%",
		cy: "50%",
		r: 44,
	}

	// Render the SpinnerLoader component
	return (
		<div className={generateCN("sui-spinner__loader", {}, suiInlineClassname)}>
			<svg className="sui-spinner__icon" viewBox="0 0 100 100">
				<title>loading</title>
				<circle className="sui-spinner__icon--background" {...attrs} />
				<circle className="sui-spinner__icon--stroke" {...attrs} />
			</svg>
		</div>
	)
}

export { SpinnerLoader }
