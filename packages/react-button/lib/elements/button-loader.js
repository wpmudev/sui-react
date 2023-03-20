import React, { Fragment } from "react";
import { isUndefined, isNumber, isEmpty } from "@wpmudev/react-utils";

// Build "Loader" component.
const Loader = ({ size, spacing, children }) => {
	const set = {};

	// Define icon name.
	set.class = 'suicons suicons--spinner';

	// Define icon size.
	switch (size) {
		case 'sm':
		case 'md':
		case 'lg':
			set.class += ' suicons--' + size;
			break;

		default:
			set.class += ' suicons--md';
			break;
	}

	// Define loading animation.
	set.class += ' sui-animate--spin';

	// Define button class.
	set.class += ' sui-button__icon';

	// Define custom spacing.
	set.style = {};
	set.style.marginLeft = isNumber(spacing) ? spacing : 10 + 'px';
	set.style.marginRight = isNumber(spacing) ? spacing : 10 + 'px';

	return (
		<Fragment>
			<span className={ set.class } style={ set.style } aria-hidden="true" />
			<span className="sui-screen-reader-only" tabIndex="-1">
				{ !isUndefined(children) && !isEmpty(children)
					? children
					: 'Loading'
				}
			</span>
		</Fragment>
	);
}

// Publish required component(s).
export { Loader }
