import React, { Fragment, memo } from 'react';
import { generateCN } from '@wpmudev/react-utils';

// Build "Loader" component.
const Loader = memo(({ children }) => {
	const className = generateCN('suicons', {
		md: true,
		spinner: true,
		// icon animation
		spin: true,
	});

	return (
		<Fragment>
			<span className="sui-button__icon" aria-hidden="true">
				<span className={className} />
			</span>
			<span className="sui-screen-reader-only" tabIndex="-1">
				{children ? children : 'Loading'}
			</span>
		</Fragment>
	);
});

// Publish required component(s).
export { Loader };
