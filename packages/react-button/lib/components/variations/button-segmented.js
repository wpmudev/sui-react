import React from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component(s).
import { ButtonBase } from "./button-base";

// Build "Themed Button" component.
const ButtonSegmented = ({ prefix, position, children, ...props }) => {
	const has = {};
	const set = {};

	// Sets the component prefix.
	has.prefix = !isUndefined(prefix) && !isEmpty(prefix) ? true : false;
	set.prefix = has.prefix ? prefix : 'sui-button';

	// Sets the appearance of the button.
	switch (position) {
		case 'left':
		case 'middle':
		case 'right':
			set.class = 'sui-toggle-button--' + position;
			break;

		default:
			// do nothing.
			break;
	}

	return (
		<ButtonBase
			prefix={ set.prefix }
			className={ set.class }
			{ ...props }>
			{ children }
		</ButtonBase>
	);
}

// Publish required component(s).
export { ButtonSegmented }
