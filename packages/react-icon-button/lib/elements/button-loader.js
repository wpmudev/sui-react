import React, { Fragment } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Build "Loader" component.
const Loader = ({ children }) => {
	const set = {};

	// Define loader icon.
	set.class = 'suicons suicons--md suicons--spinner';

	// Set icon animation.
	set.class += ' sui-animate--spin';

	return (
		<Fragment>
			<span className="sui-icon-button__icon" aria-hidden="true">
				<span className={set.class} />
			</span>
			<span className="sui-screen-reader-only" tabIndex="-1">
				{!isUndefined(children) && !isEmpty(children)
					? children
					: 'Loading'}
			</span>
		</Fragment>
	);
};

// Publish required component(s).
export { Loader };
