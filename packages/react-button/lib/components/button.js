import React from "react";

// Import required component(s).
import { ButtonBase } from "./button/variations/button-base";
import { ButtonThemed } from "./button/variations/button-themed";

// Build "Button" component.
const Button = ({ type, children, ...props }) => {
	let markup;

	switch ( type ) {
		case 'icon':
			markup = (
				<ButtonThemed
					prefix="sui-button-icon"
					{ ...props }>
					{ children }
				</ButtonThemed>
			);
			break;

		case 'toggle':
		case 'segmented':
			markup = (
				<ButtonThemed
					prefix="sui-button-toggle"
					{ ...props }>
					{ children }
				</ButtonThemed>
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
