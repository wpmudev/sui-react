import React, { createElement, useState, Fragment, Children } from "react";
import { isUndefined, isEmpty, isBoolean, isObject } from "@wpmudev/react-utils";

// Import required component(s).
import { Label } from "../elements/button-label";
import { Icon } from "../elements/button-icon";
import { Loader } from "../elements/button-loader";

// Build "Default Button" component.
const Button = ({
	href,
	htmlFor,
	theme,
	color,
	size,
	className,
	label,
	icon,
	leadIcon,
	trailIcon,
	loading,
	disabled,
	children,
	...props
}) => {
	const is = {};
	const not = {};
	const has = {};
	const set = {};

	// Define button states.
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	// Parameter(s) validation.
	is.link = !isUndefined(href) ? true : false;
	is.label = !isUndefined(htmlFor) ? true : false;

	not.loading = !isUndefined(loading) && !isBoolean(loading) ? true : false;
	not.disabled = !isUndefined(disabled) && !isBoolean(disabled) ? true : false;

	has.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	has.lead = !isUndefined(leadIcon) && !isEmpty(leadIcon) ? true : false;
	has.trail = !isUndefined(trailIcon) && !isEmpty(trailIcon) ? true : false;
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;
	has.loading = !isUndefined(loading) && isBoolean(loading) ? true : false;
	has.disabled = isBoolean(disabled) ? true : false;

	if ( not.loading ) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "loading" is not a boolean type.\n\n`
		);
	}

	if ( not.disabled ) {
		throw new Error(
			`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "disabled" is not a boolean type.\n\n`
		);
	}

	// Define button tag.
	set.tag = 'button';

	if ( is.link ) {
		set.tag = 'a';
	} else if ( is.label ) {
		set.tag = 'label';
	}

	// Define button class.
	set.class = 'sui-button';

	if ( has.icon ) {
		set.class += ' sui-button-icon';
	}

	switch ( theme ) {
		case 'primary':
			set.class += ' sui-button--solid';
			break;

		case 'secondary':
			set.class += ' sui-button--outlined';
			break;

		case 'tertiary':
			set.class += ' sui-button--text';
			break;

		default:
			// Do nothing.
			break;
	}

	switch ( color ) {
		case 'blue':
		case 'black':
		case 'red':
		case 'navy':
		case 'white':
			set.class += ' sui-button--' + color;
			if ( 'secondary' === theme || 'tertiary' === theme ) {
				set.class += '-alt';
			}
			break;

		default:
			// Do nothing.
			break;
	}

	if ( 'sm' === size ) {
		set.class += ' sui-button--' + size;
	}

	if ( has.class ) {
		set.class += ' ' + className;
	}

	if ( is.hover ) {
		set.class += ' sui-button--hover';
	}

	if ( is.focus ) {
		set.class += ' sui-button--focus';
	}

	if ( has.loading && loading ) {
		set.class += ' sui-button--loading';
	}

	if ( has.disabled && disabled ) {
		set.class += ' sui-button--disabled';
	}

	// Define button elements.
	set.elements = (
		<Fragment>
			{ has.icon && (
				<Fragment>
					<Icon name={ icon } />
					{ has.label && (
						<span className="sui-screen-reader-only" tabIndex="-1">
							{ label }
						</span>
					)}
				</Fragment>
			)}
			{ !has.icon && (
				<Fragment>
					{ has.lead && (
						<Icon name={ leadIcon } />
					)}
					<Label>{ children }</Label>
					{ has.trail && (
						<Icon name={ trailIcon } />
					)}
				</Fragment>
			)}
		</Fragment>
	);

	// Define button markup.
	set.markup = has.loading && loading
		? <Loader />
		: set.elements;

	return createElement(
		set.tag,
		{
			... ( is.link && { href: href }),
			... ( is.label && { htmlFor: htmlFor }),
			className: set.class,
			... ( has.loading && { 'aria-live': 'polite' }),
			... ( has.loading && { 'aria-busy': loading }),
			onMouseEnter: () => set.hover(true),
			onMouseLeave: () => set.hover(false),
			onFocus: () => set.focus(true),
			onBlur: () => set.focus(false),
			... ( has.disabled && { disabled: disabled }),
			...props
		},
		set.markup
	);
}

// Publish required component(s).
export { Button }
