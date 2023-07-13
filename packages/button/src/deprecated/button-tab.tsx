// import React, { createElement, useState, Fragment, Children } from 'react';
// import {
// 	isUndefined,
// 	isEmpty,
// 	isBoolean,
// 	isObject,
// } from '@wpmudev/react-utils';
//
// // Import required component(s).
// import { Label } from '../../elements/button-label';
// import { Icon } from '../../elements/button-icon';
//
// // Build "Default Button" component.
// const Button = ({
// 	htmlFor,
// 	theme,
// 	size,
// 	className,
// 	active,
// 	disabled,
// 	children,
// 	...props
// }) => {
// 	const is = {};
// 	const not = {};
// 	const has = {};
// 	const set = {};
//
// 	// Define button states.
// 	[is.hover, set.hover] = useState(false);
// 	[is.focus, set.focus] = useState(false);
// 	[is.checked, set.checked] = useState(active);
//
// 	// Parameter(s) validation.
// 	is.label = !isUndefined(htmlFor) ? true : false;
//
// 	not.disabled =
// 		!isUndefined(disabled) && !isBoolean(disabled) ? true : false;
//
// 	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;
// 	has.disabled = isBoolean(disabled) ? true : false;
//
// 	if (isUndefined(active)) {
// 		throw new Error(
// 			`Required parameter missing. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "active" is required for toggle buttons.\n\n`
// 		);
// 	} else {
// 		if (!isBoolean(active)) {
// 			throw new Error(
// 				`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "active" is not a boolean type.\n\n`
// 			);
// 		}
// 	}
//
// 	if (not.disabled) {
// 		throw new Error(
// 			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "disabled" is not a boolean type.\n\n`
// 		);
// 	}
//
// 	// Define button actions.
// 	const handleChange = () => {
// 		set.checked(!is.checked);
// 	};
//
// 	// Define button tag.
// 	set.tag = 'button';
//
// 	if (is.label) {
// 		set.tag = 'label';
// 	}
//
// 	// Define button class.
// 	set.class = 'sui-button';
//
// 	switch (theme) {
// 		case 'primary':
// 		case 'secondary':
// 			set.class += ' sui-button--' + theme;
// 			break;
//
// 		default:
// 			// Do nothing.
// 			break;
// 	}
//
// 	switch (size) {
// 		case 'sm':
// 			set.class += ' sui-button--' + size;
// 			break;
//
// 		default:
// 			// Do nothing.
// 			break;
// 	}
//
// 	if (has.class) {
// 		set.class += ' ' + className;
// 	}
//
// 	if (is.hover) {
// 		set.class += ' sui-button--hover';
// 	}
//
// 	if (is.focus) {
// 		set.class += ' sui-button--focus';
// 	}
//
// 	if (has.disabled && disabled) {

// 		set.class += ' sui-button--disabled';
// 	}
//
// 	// Define button elements.
// 	set.elements = (
// 		<Fragment>
// 			{Children.map(children, (child, index) => {
// 				return (
// 					<Fragment key={index}>
// 						{isObject(child) ? (
// 							isUndefined(child.props.slot) ? (
// 								child
// 							) : (
// 								<Fragment>
// 									{'icon' === child.props.slot && (
// 										<Icon name={child.props.name} />
// 									)}
// 									{'label' === child.props.slot && (
// 										<Label>{child.props.children}</Label>
// 									)}
// 								</Fragment>
// 							)
// 						) : (
// 							<Label>{child}</Label>
// 						)}
// 					</Fragment>
// 				);
// 			})}
// 		</Fragment>
// 	);
//
// 	// Define button markup.
// 	set.markup = (
// 		<Fragment>
// 			{is.label && (
// 				<input
// 					id={htmlFor}
// 					className="sui-screen-reader-only"
// 					type="radio"
// 					checked={is.checked}
// 					{...(is.checked && { 'aria-selected': true })}
// 					onChange={handleChange}
// 					{...props}
// 				/>
// 			)}
// 			{set.elements}
// 		</Fragment>
// 	);
//
// 	return createElement(
// 		set.tag,
// 		{
// 			className: set.class,
// 			type: 'button',
// 			role: 'tab',
// 			'aria-selected': checked,
// 			...(!checked && { tabIndex: '-1' }),
// 			onMouseEnter: () => set.hover(true),
// 			onMouseLeave: () => set.hover(false),
// 			onFocus: () => set.focus(true),
// 			onBlur: () => set.focus(false),
// 			...(has.disabled && { disabled: disabled }),
// 			...(!is.label && { ...props }),
// 		},
// 		set.markup
// 	);
// };
//
// // Publish required component(s).
// export { Button };
