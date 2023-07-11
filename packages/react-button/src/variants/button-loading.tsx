import React from "react"
import { generateCN } from "@wpmudev/react-utils"

// Import required component(s).
import { Button as Base } from "./button"
import { Loader } from "../elements/button-loader"
import { LoadingButtonPropsTypes } from "../types"

// Build "Loading Button" component.
const LoadingButton = ({
	isLoading = false,
	className,
	children,
	...props
}: LoadingButtonPropsTypes) => {
	// Generate class names
	const classNames = generateCN(
		"sui-button",
		{
			loading: isLoading,
		},
		className ?? "",
	)

	return (
		<Base
			className={classNames}
			aria-live="polite"
			aria-busy={isLoading}
			{...props}
			isUnwrapped={isLoading}
		>
			{isLoading && <Loader />}
			{!isLoading && children}
		</Base>
	)
}

// Publish required component(s).
export { LoadingButton }
