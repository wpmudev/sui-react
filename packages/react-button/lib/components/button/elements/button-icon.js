import React from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Build "Icon" component.
const Icon = ({ name, size }) => {
	const set = {};
	const hasName = (!isUndefined(name) && !isEmpty(name)) ? true : false;

	set.class = 'suicons';

	// Define icon name.
	if ( hasName ) {
		set.class += ' suicons--' + name;
	}

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

	// Set button icon class name.
	set.class += ' sui-button__icon';

	return <span className={set.class} aria-hidden="true" />;
}

// Publish required component(s).
export { Icon }
