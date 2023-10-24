import React from "react"

import { SpinnerLoaderProps } from "./spinner.types"

const SpinnerLoader = ({ color }: SpinnerLoaderProps) => {
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
		<div className="sui-spinner__loader">
			<svg className="sui-spinner__icon" viewBox="0 0 100 100">
				<title>loading</title>
				<circle className="sui-spinner__icon--background" {...attrs} />
				<circle className="sui-spinner__icon--stroke" {...attrs} />
			</svg>
		</div>
	)
}

export { SpinnerLoader }
