import React from "react";
import { isUndefined, isEmpty } from "@wpmudev/react-utils";

// Import required component(s).
import { Button as Base } from './button-base';
import { Loader } from "../elements/button-loader";

// Build "Loading Button" component.
const LoadingButton = ({
	isLoading = false,
	className,
	children,
	...props
}) => {
	const set = {};

	// Define button class.
	set.class = isLoading ? 'sui-button--loading' : '';

	if ( !isUndefined(className) && !isEmpty(className) ) {
		set.class += isLoading ? ' ' + className : className;
	}

	return (
		<Base
			className={ set.class }
			aria-live="polite"
			aria-busy={ isLoading }
			{ ...props }
			isUnwrapped={ isLoading }>
			{ isLoading && <Loader /> }
			{ !isLoading && children }
		</Base>
	);
}

// Publish required component(s).
export { LoadingButton }
