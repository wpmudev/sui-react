import React, { Fragment } from 'react';
import { isUndefined, isString } from '@wpmudev/react-utils';

import { IconButton } from '../../../react-icon-button/lib/react-icon-button';

// Build "Button" component.
const RecipientButton = ({ children, ...props }) => {
	const is = {};

	// Required parameter(s) validation.
	is.defined = !isUndefined(children) ? true : false;
	is.string = isString(children) ? true : false;

	if (is.defined && !is.string) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Recipient\n\nThe parameter "children" used in the button element is not a string type.\n\n`
		);
	}

	return (
		<Fragment>
            <IconButton
                label={children}
                appearance="tertiary"
                isSmall={true}
                {...props}
            />
		</Fragment>
	);
};

// Publish required component(s).
export { RecipientButton };
