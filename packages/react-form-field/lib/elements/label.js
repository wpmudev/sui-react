import React from 'react';
import { isEmpty, isUndefined } from '@wpmudev/react-utils';

// Build field label element
export const Label = ({ id, hidden = false, children }) => {
	const has = {};
	const set = {};

	// Props validation
	has.content = !isUndefined(children) && !isEmpty(children) ? true : false;

	if (!has.content) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n`
		);
	}

	// Define main class name(s)
	if (hidden) {
		set.class = 'sui-screen-reader-only';
	} else {
		set.class = 'sui-form-field__label';
	}

	return (
		<label htmlFor={id} id={`${id}__label`} className={set.class}>
			{children}
		</label>
	);
}
