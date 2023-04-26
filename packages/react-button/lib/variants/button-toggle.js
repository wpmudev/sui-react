import React, { Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

// Import required component(s).
import { Button as Base } from './button-base';

// Build "Loading Button" component.
const ToggleButton = ({
	href,
	htmlFor,
	appearance,
	color,
	isSmall = false,
	isDisabled = false,
	isSelected = false,
	className,
	iconLead,
	iconTrail,
	children,
	onClick,
	...props
}) => {
	const is = {};
	const set = {};

	// Parameter(s) validation.
	is.link = !isUndefined(href) ? true : false;
	is.label = !isUndefined(htmlFor) && !isEmpty(htmlFor) ? true : false;

	if (is.link) {
		throw new Error(
			`Invalid parameter. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "href" is not supported by this component since toggle elements cannot be a link. Use default or label button instead.`
		);
	}

	// Define button states.
	[is.checked, set.checked] = useState(isSelected);

	// Define button actions.
	const handleChange = () => {
		set.checked(!is.checked);
	};

	// Define button class.
	set.class = is.checked ? 'sui-button--selected' : '';

	if (!isUndefined(className) && !isEmpty(className)) {
		set.class += is.checked ? ' ' + className : className;
	}

	return (
		<Base
			{...(is.label && { htmlFor: htmlFor })}
			appearance={appearance}
			color={color}
			isSmall={isSmall}
			isDisabled={isDisabled}
			iconLead={iconLead}
			iconTrail={iconTrail}
			className={set.class}
			{...(isFunction(onClick) && { onClick: onClick })}
			{...(!is.label && { 'aria-pressed': isSelected })}
			{...(!is.label && { ...props })}
		>
			{is.label && (
				<Fragment>
					<input
						id={htmlFor}
						className="sui-screen-reader-only"
						type="checkbox"
						tabIndex={is.checked ? '0' : '-1'}
						checked={is.checked}
						onChange={handleChange}
						{...(isDisabled && { disabled: isDisabled })}
						{...props}
					/>
					{children}
				</Fragment>
			)}
			{!is.label && children}
		</Base>
	);
};

// Publish required component(s).
export { ToggleButton };
