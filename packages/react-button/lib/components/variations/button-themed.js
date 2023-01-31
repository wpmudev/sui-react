import React from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component(s).
import { ButtonBase } from "./button-base";

// Build "Themed Button" component.
const ButtonThemed = ({ prefix, theme, color, children, ...props }) => {
	const has = {};
	const set = {};

	has.prefix = !isUndefined(prefix) && !isEmpty(prefix) ? true : false;
	has.theme = !isUndefined(theme) && !isEmpty(theme) ? true : false;
	has.color = !isUndefined(color) && !isEmpty(color) ? true : false;

	// Sets the component prefix.
	set.prefix = has.prefix ? prefix : 'sui-button';

	// Sets the appearance of the button.
	set.class = ' ';

	if ( has.theme ) {
		set.class += ' ' + set.prefix + '--' + theme;
	}

	if ( has.color ) {
		set.class += ' ' + set.prefix + '--' + color;
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
export { ButtonThemed }
