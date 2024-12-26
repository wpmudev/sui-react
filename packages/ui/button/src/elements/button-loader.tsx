import React, { Fragment } from "react"
import { SpinnerAlt } from "@wpmudev/sui-icons"
import { Spinner } from "@wpmudev/sui-spinner"
import { ButtonProps } from "../button.types"

interface ButtonLoaderProps {
	/**
	 * Label Content
	 *
	 * @type {React.ReactNode | undefined}
	 */
	children?: React.ReactNode

	/**
	 * Color Scheme of the button
	 *
	 * @type {React.ReactNode | undefined}
	 */
	colorScheme?: ButtonProps["colorScheme"]
}

// Build "Loader" component.
const Loader: React.FC<ButtonLoaderProps> = ({ children, colorScheme }) => {
	const spinnerColorScheme = colorScheme === "white" ? "dark" : "white"

	return (
		<Fragment>
			<span
				className="sui-button__icon sui-button__icon--loader"
				aria-hidden="true"
			>
				<Spinner loaderSize="sm" colorScheme={spinnerColorScheme} />
			</span>
			{children ? (
				<span
					className="sui-button__label sui-button__label--hidden"
					tabIndex={-1}
				>
					{children}
				</span>
			) : (
				<span className="sui-screen-reader-only" tabIndex={-1}>
					Loading
				</span>
			)}
		</Fragment>
	)
}

// Publish required component(s).
export { Loader }
