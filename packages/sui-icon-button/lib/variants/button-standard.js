import React from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Import required component(s)
import { IconButton as Base } from './button-base';
import { Label } from '../elements/button-label';
import { Icon } from '../elements/button-icon';

// Build "Standard Button" component.
const IconButton = ({ icon, label, children, ...props }) => {
	const has = {};

	// Props validation
	has.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;

	if ( !has.icon ) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Icon Button\n\nSince this is an icon button, the parameter "icon" must not be empty.\n\n`
		);
	}

	if ( !has.label ) {
		throw new Error(
			`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Icon Button\n\nSince this is an icon button, the parameter "label" must not be empty because is required for screen readers.\n\n`
		);
	}

	return (
		<Base {...props}>
			<Icon name={icon} />
			<Label>{label}</Label>
			{children}
		</Base>
	);
};

// Publish required component(s).
export { IconButton };
