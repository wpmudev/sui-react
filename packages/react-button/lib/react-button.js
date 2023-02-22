import React from 'react';

// Import required component(s).
import { Button as DefaultButton } from './variants/button-default';
import { Button as ToggleButton } from './variants/button-toggle';

// Build "Default Button" component.
const Button = ({ variant, children, ...props }) => {
	const set = {}

	switch ( variant ) {
		case 'toggle':
			set.markup = (
				<ToggleButton { ...props }>
					{ children }
				</ToggleButton>
			);
			break;

		case 'menu':
			set.markup = (
				<button>menu button</button>
			);
			break;

		default:
			set.markup = (
				<DefaultButton { ...props }>
					{ children }
				</DefaultButton>
			);
			break;
	}

	return set.markup;
}

export { Button }
