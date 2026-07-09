import React, { Fragment } from "react"
import { SpinnerAlt } from "@wpmudev/sui-icons"
import { Spinner, SpinnerProps } from "@wpmudev/sui-spinner"
import { ButtonProps } from "../button.types"

interface ButtonLoaderProps {
	/**
	 * Optional ID for the loader element
	 *
	 * @type {string | undefined}
	 */
	id?: string
	/**
	 * Label Content
	 *
	 * @type {React.ReactNode | undefined}
	 */
	children?: React.ReactNode

	/**
	 * Color Scheme of the button
	 *
	 * @type {string}
	 */
	colorScheme?: ButtonProps["colorScheme"]

	/**
	 * true when the button is disabled
	 *
	 * @type {boolean}
	 */
	isDisabled?: boolean
}

// Build "Loader" component.
const Loader: React.FC<ButtonLoaderProps> = ({
	id,
	children,
	colorScheme,
	isDisabled,
}) => {
	let spinnerColorScheme: SpinnerProps["colorScheme"] = "white"

	if (colorScheme === "white") {
		spinnerColorScheme = "dark"
	}

	if (isDisabled) {
		spinnerColorScheme = "gray"
	}

	return (
		<Fragment>
			<span
				id={id}
				className="sui-button__icon sui-button__icon--loader"
				aria-hidden="true"
			>
				<Spinner
					id={`${id}-spinner`}
					loaderSize="sm"
					colorScheme={spinnerColorScheme}
				/>
			</span>
			{children ? (
				<span
					id={`${id}-label`}
					className="sui-button__label sui-button__label--hidden"
					tabIndex={-1}
				>
					{children}
				</span>
			) : (
				<span
					id={`${id}-loading`}
					className="sui-screen-reader-only"
					tabIndex={-1}
				>
					Loading
				</span>
			)}
		</Fragment>
	)
}

// Publish required component(s).
export { Loader }
