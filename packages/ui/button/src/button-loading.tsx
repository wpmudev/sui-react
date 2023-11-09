import React from "react"
import { generateCN } from "@wpmudev/sui-utils"

// Import required component(s).
import { Button as Base } from "./button"
import { Loader } from "./elements/button-loader"
import { LoadingButtonProps } from "./button-loading.types"

// Build "Loading Button" component.
const LoadingButton: React.FC<LoadingButtonProps> = ({
	isLoading = false,
	className,
	children,
	...props
}) => {
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
			{isLoading && <Loader>{children}</Loader>}
			{!isLoading && children}
		</Base>
	)
}

// Publish required component(s).
export { LoadingButton }
