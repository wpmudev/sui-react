import React from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Build "Icon" component.
const Icon = ({ name, size }) => {
	const has = {};
	const set = {};

	// Required parameter(s) validation.
	has.name = !isUndefined(name) && !isEmpty(name) ? true : false;

	if (!has.name) {
		throw new Error(
			`Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n`
		);
	}

	// Define icon name.
	set.class = 'suicons suicons--' + name;

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

	// Define button class.
	set.class += ' sui-button__icon';

	return <span className={set.class} aria-hidden="true" />;
};

// Publish required component(s).
export { Icon };
