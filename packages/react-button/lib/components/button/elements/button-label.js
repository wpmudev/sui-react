import React, { Fragment } from "react";
import { isBoolean } from "@wpmudev/react-utils";

// Build "Label" component.
const Label = ({ hidden, children }) => {
	const canHide = isBoolean(hidden) ? true : false;
	const isHidden = canHide ? hidden : false;

	return (
		<Fragment>
			{ isHidden && (
				<span className="sui-screen-reader-text">{ children }</span>
			)}

			{ !isHidden && (
				<span className="sui-button__label">{ children }</span>
			)}
		</Fragment>
	);
}

// Publish required component(s).
export { Label }
