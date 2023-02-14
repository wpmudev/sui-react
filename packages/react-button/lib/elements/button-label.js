import React, { Fragment } from "react";
import { isUndefined, isBoolean } from "@wpmudev/react-utils";

// Build "Label" component.
const Label = ({ hidden, children }) => {
	const is = {};

	// Required parameter(s) validation.
	is.defined = !isUndefined(hidden) ? true : false;
	is.boolean = isBoolean(hidden) ? true : false;

	if ( is.defined && !is.boolean ) {
		throw new Error(
			'The hidden parameter on the button label is not a boolean.'
		);
	}

	return (
		<Fragment>
			{ hidden && (
				<span className="sui-screen-reader-only" tabIndex="-1">{ children }</span>
			)}

			{ !hidden && (
				<span className="sui-button__label">{ children }</span>
			)}
		</Fragment>
	);
}

// Publish required component(s).
export { Label }
