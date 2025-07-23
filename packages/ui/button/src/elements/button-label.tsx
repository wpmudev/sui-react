import React, { Fragment } from "react"
import { isUndefined, isBoolean } from "@wpmudev/sui-utils"

interface ButtonLabelProps {
	/**
	 * Icon name
	 *
	 * @type {string | undefined}
	 */
	name?: string
	/**
	 * Make label hidden
	 *
	 * @type {boolean}
	 */
	hidden?: boolean
	/**
	 * Label Content
	 *
	 * @type {React.ReactNode | undefined}
	 */
	children?: React.ReactNode
}

// Build "Label" component.
const Label: React.FC<ButtonLabelProps> = ({ hidden = false, children }) => {
	// throw exception
	if (isUndefined(hidden) && !isBoolean(hidden)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n`,
		)
	}

	return (
		<Fragment>
			{hidden && (
				<span className="sui-screen-reader-only" tabIndex={-1}>
					{children}
				</span>
			)}
			{!hidden && (
				<span className="sui-button__label" data-testid="button-label">
					{children}
				</span>
			)}
		</Fragment>
	)
}

// Publish required component(s).
export { Label }
