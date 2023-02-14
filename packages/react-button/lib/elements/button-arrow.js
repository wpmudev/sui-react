import React from "react";
import { isUndefined, isBoolean } from "@wpmudev/react-utils";

// Build "Arrow" component.
const Arrow = ({ open, size }) => {
	const is = {};
	const set = {};

	// Required parameter(s) validation.
	is.defined = !isUndefined(open) ? true : false;
	is.boolean = isBoolean(open) ? true : false;

	if ( is.defined && !is.boolean ) {
		throw new Error(
			'The open parameter on the button arrow is not a boolean.'
		);
	}

	// Define icon name.
	set.class = 'suicons suicons--chevron-down';

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

	// Define rotate animation.
	if ( open ) {
		set.class += ' sui-animate--rotate';
	}

	// Define button class.
	set.class += ' sui-button__icon';

	return <span className={ set.class } aria-hidden="true" />;
}

// Publish required component(s).
export { Arrow }
