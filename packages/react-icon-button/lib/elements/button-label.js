import React from 'react';
import { isUndefined, isString } from '@wpmudev/react-utils';

// Build "Label" component
const Label = ({ children }) => {
	const is = {};

	if (!isString(children)) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "children" used in the label element can only be a string.\n\n`
		);
	}

	return (
		<span className="sui-screen-reader-only" tabIndex="-1">
			{children}
		</span>
	);
};

// Publish required component(s).
export { Label };
