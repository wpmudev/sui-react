import React, { Fragment } from 'react';
import { isEmpty, isUndefined } from '@wpmudev/react-utils';

// Build "image avatar" element
const Image = ({ source, text }) => {
	const has = {};
	const set = {};

	// Props validation
	has.src = !isUndefined(source) && !isEmpty(source) ? true : false;
	has.alt = !isUndefined(text) && !isEmpty(text) ? true : false;

	if (!has.src) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Avatar\n\nThe parameter "source" in the "Image" component is required.\n\n`
		);
	}

	// Define main class
	set.class = 'sui-avatar__image';

	// Return element
	return (
		<Fragment>
			<span className={set.class} style={{ backgroundImage: `url(${source})` }} tabIndex="-1" />
			<span className="sui-screen-reader-only">
				{has.alt ? text : 'Logged in user avatar'}
			</span>
		</Fragment>
	);
}

export { Image }
