import React, { Fragment } from "react"
import { isUndefined, isBoolean } from "@wpmudev/sui-utils"

interface ButtonLabelProps {
	/**
	 * Optional ID for the label element
	 *
	 * @type {string | undefined}
	 */
	id?: string
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
const Label: React.FC<ButtonLabelProps> = ({
	id,
	hidden = false,
	children,
}) => {
	// throw exception
	if (isUndefined(hidden) && !isBoolean(hidden)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n`,
		)
	}

	return (
		<Fragment>
			{hidden && (
				<span id={id} className="sui-screen-reader-only" tabIndex={-1}>
					{children}
				</span>
			)}
			{!hidden && (
				<span id={id} className="sui-button__label" data-testid="button-label">
					{children}
				</span>
			)}
		</Fragment>
	)
}

// Publish required component(s).
export { Label }
