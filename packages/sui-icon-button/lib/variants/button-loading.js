import React, { Fragment } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Import required component(s).
import { IconButton as Base } from './button-base';
import { Label } from '../elements/button-label';
import { Icon } from '../elements/button-icon';
import { Loader } from '../elements/button-loader';

// Build "Loading Button" component.
const LoadingIconButton = ({
	icon,
	label,
	isLoading = false,
	className,
	children,
	...props
}) => {
	const has = {};
	const set = {};

	// Props validation
	has.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;

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

	// Define loading class
	set.class = isLoading ? 'sui-button--loading' : '';

	// Define custom class name(s)
	if (!isUndefined(className) && !isEmpty(className)) {
		set.class += isLoading ? ` ${className}`: className;
	}

	return (
		<Base
			className={set.class}
			aria-live="polite"
			aria-busy={isLoading}
			{...props}
		>
			{isLoading && <Loader />}
			{!isLoading && (
				<Fragment>
					<Icon name={icon} />
					<Label>{label}</Label>
				</Fragment>
			)}
			{children}
		</Base>
	);
};

// Publish required component(s).
export { LoadingIconButton };
