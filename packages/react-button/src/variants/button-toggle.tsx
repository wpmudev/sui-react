import React, { Fragment, useCallback, useState } from 'react';
import {
	isUndefined,
	isEmpty,
	isFunction,
	generateCN,
} from '@wpmudev/react-utils';

// Import required component(s).
import { Button as Base } from './button';
import { ToggleButtonPropsTypes } from '../types';

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
}: ToggleButtonPropsTypes) => {
	const isLink = !isUndefined(href);
	const isLabel = !isUndefined(htmlFor) && !isEmpty(htmlFor);

	if (isLink) {
		throw new Error(
			`Invalid parameter. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "href" is not supported by this component since toggle elements cannot be a link. Use default or label button instead.`
		);
	}

	// Define button states.
	const [isChecked, setIsChecked] = useState(isSelected);

	// Define button actions.
	const handleChange = useCallback(() => {
		setIsChecked(!isChecked);
	}, [isChecked]);

	// Create button classes
	const classNames = generateCN(
		'sui-button',
		{
			selected: isSelected,
		},
		className
	);

	return (
		<Base
			{...(isLabel && { htmlFor: htmlFor })}
			appearance={appearance}
			color={color}
			isSmall={!!isSmall}
			isDisabled={!!isDisabled}
			iconLead={iconLead ?? ''}
			iconTrail={iconTrail ?? ''}
			className={classNames}
			{...(isFunction(onClick) && { onClick: onClick })}
			{...(!isLabel && { 'aria-pressed': isSelected })}
			{...(!isLabel && { ...props })}
		>
			{isLabel && (
				<Fragment>
					<input
						id={htmlFor}
						className="sui-screen-reader-only"
						type="checkbox"
						tabIndex={isChecked ? 0 : -1}
						checked={isChecked}
						onChange={handleChange}
						{...(isDisabled && { disabled: isDisabled })}
						{...props}
					/>
					{children}
				</Fragment>
			)}
			{!isLabel && children}
		</Base>
	);
};

// Publish required component(s).
export { ToggleButton };
