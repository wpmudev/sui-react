import React from "react"

import { SpinnerAlt } from "@wpmudev/sui-icons"
import { isEmpty } from "@wpmudev/sui-utils"

import { SpinnerLoaderProps } from "./spinner.types"

const SpinnerLoader = ({ size, color }: SpinnerLoaderProps) => {
	// Define color options for the spinner
	const colors = {
		primary: "#286EF1",
		dark: "#FFFFFF",
	}

	// Set default attributes for the spinner
	const attrs: React<string, any> = {
		size: size ?? "md", // Use the provided size or default to "md"
		fill: undefined, // Initialize fill attribute as undefined
	}

	// Check if a color is provided and set fill attribute accordingly
	if (!isEmpty(color)) {
		// Use the provided color or default to primary color
		attrs.fill = colors[color] ?? "#286EF1"
	}

	// Render the SpinnerLoader component
	return (
		<div className="sui-spinner__loader">
			<SpinnerAlt className="sui-spinner__loader-icon" {...attrs} />
		</div>
	)
}

export { SpinnerLoader }
