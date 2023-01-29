import React from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Build "Loader" component.
const Loader = ({ label }) => {
	const set = {};

	// Define spinner icon.
	set.class = 'suicons suicons--spinner-alt suicons--md';

	// Define loading animation.
	set.class += ' sui-animate--spin';

	// Define button element class name.
	set.class += ' sui-button__icon';

	return (
		<Fragment>
			<span className={ set.class } aria-hidden="true" />
			<span className="sui-screen-reader-text">
				{ (!isUndefined(label) && !isEmpty(label))
					? label
					: 'Loading'
				}
			</span>
		</Fragment>
	);
}

// Publish required component(s).
export { Loader }
