import React from 'react';

// Build "icon avatar" element
const Icon = () => {
	const set = {};

	// Define main class
	set.class = 'sui-avatar__icon';

	// Define user icon
	set.class += ' suicons suicons--user-alt';

	// Return element
	return <span className={set.class} aria-hidden="true" />;
}

export { Icon };
