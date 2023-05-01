import React, { Fragment } from 'react';
import { isUndefined, isString } from '@wpmudev/react-utils';

// Build "Label" component.
const RecipientName = ({ children }) => {
	const is = {};

	// Required parameter(s) validation.
	is.defined = !isUndefined(children) ? true : false;
	is.string = isString(children) ? true : false;

	if (is.defined && !is.string) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "name" used in the name element is not a string type.\n\n`
		);
	}

	return (
		<Fragment>
            {children && <span className="sui-recipient__name">{children}</span>}
		</Fragment>
	);
};

// Publish required component(s).
export { RecipientName };
