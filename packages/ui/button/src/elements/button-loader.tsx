import React, { Fragment } from "react"
import { SpinnerAlt } from "@wpmudev/sui-icons"

interface ButtonLoaderProps {
	/**
	 * Label Content
	 *
	 * @type {React.ReactNode | undefined}
	 */
	children?: React.ReactNode
}

// Build "Loader" component.
const Loader: React.FC<ButtonLoaderProps> = ({ children }) => {
	return (
		<Fragment>
			<span className="sui-button__icon" aria-hidden="true">
				<SpinnerAlt className="suicons--spin" size="sm" />
			</span>
			{children ? (
				<span className="sui-button__label sui-hidden" tabIndex={-1}>
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
