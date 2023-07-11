import React, { Fragment } from "react"
import { generateCN } from "@wpmudev/react-utils"

interface ButtonLoaderProps {
	/**
	 * Label Content
	 *
	 * @type {React.ReactNode | undefined}
	 */
	children?: React.ReactNode
}

// Build "Loader" component.
const Loader = ({ children }: ButtonLoaderProps) => {
	const className = generateCN("suicons", {
		md: true,
		spinner: true,
		// icon animation
		spin: true,
	})

	return (
		<Fragment>
			<span className="sui-button__icon" aria-hidden="true">
				<span className={className} />
			</span>
			<span className="sui-screen-reader-only" tabIndex="-1">
				{children ? children : "Loading"}
			</span>
		</Fragment>
	)
}

// Publish required component(s).
export { Loader }
