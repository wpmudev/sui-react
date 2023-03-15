import React from 'react';

// Import required component(s).
import { Button as StandardButton } from './variants/button-standard';
import { LoadingButton } from './variants/button-loading';
import { ToggleButton } from './variants/button-toggle';

// Build "Default Button" component.
const Button = ({ variant, children, ...props }) => {
	const set = {}

	switch ( variant ) {
		case 'loading':
			set.markup = (
				<LoadingButton { ...props }>
					{ children }
				</LoadingButton>
			);
			break;

		case 'toggle':
			set.markup = (
				<ToggleButton { ...props }>
					{ children }
				</ToggleButton>
			);
			break;

		default:
			set.markup = (
				<StandardButton { ...props }>
					{ children }
				</StandardButton>
			);
			break;
	}

	return set.markup;
}

// Build "Default Button" component.
const IconButton = ({ variant, icon, label, ...props }) => {
	const set = {}

	switch ( variant ) {
		case 'toggle':
			set.markup = (
				<ToggleButton { ...props }>
					{ children }
				</ToggleButton>
			);
			break;

		default:
			set.markup = (
				<DefaultButton icon={ icon } label={ label } { ...props } />
			);
			break;
	}

	return set.markup;
}

export { Button, IconButton }
