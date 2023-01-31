import React from "react";

// Import required component(s).
import { ButtonBase } from "./components/variations/button-base";
import { ButtonThemed } from "./components/variations/button-themed";
import { ButtonSegmented } from "./components/variations/button-segmented";

// Build "Button" component.
const Button = ({ type, children, ...props }) => {
	let markup;

	switch ( type ) {
		case 'custom':
			markup = (
				<ButtonBase
					prefix="custom-button"
					{ ...props }>
					{ children }
				</ButtonBase>
			);
			break;

		case 'icon':
			markup = (
				<ButtonThemed
					prefix="sui-icon-button"
					{ ...props }>
					{ children }
				</ButtonThemed>
			);
			break;

		case 'toggle':
		case 'segmented':
			markup = (
				<ButtonSegmented
					prefix="sui-toggle-button"
					{ ...props }>
					{ children }
				</ButtonSegmented>
			);
			break;

		default:
			markup = (
				<ButtonThemed { ...props }>
					{ children }
				</ButtonThemed>
			);
			break;
	}

	return markup;
}

// Publish required component(s).
export { Button }
