import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

// Import component functions
import { defineTag } from '../utils/functions';

// Build base component
const IconButton = ({
	href,
	target,
	htmlFor,
	appearance,
	color,
	isSmall = false,
	isLoading = false,
	isDisabled = false,
	className,
	children,
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	onFocus = () => {},
	onBlur = () => {},
	...props
}) => {
	const is = {};
	const set = {};

	// Define states
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	// Props validation
	is.link = !isUndefined(href) ? true : false;
	is.label = !isUndefined(htmlFor) ? true : false;

	is.themeEnabled = !isUndefined(appearance) && !isEmpty(appearance);
	is.colorEnabled = !isUndefined(color) && !isEmpty(color);

	// Define element main tag
	set.tag = defineTag(is.link ? 'link' : is.label ? 'label' : null);

	// Define element prefix
	set.prefix = 'sui-icon-button';

	// Define class name
	set.class = set.prefix;

	// Define appearance
	if (is.themeEnabled && is.colorEnabled) {
		set.class += ' ' + set.prefix + '--' + appearance + '-' + color;
	}

	// Define button size
	if (isSmall) {
		set.class += ' ' + set.prefix + '--sm';
	}

	// Define hover class name
	if (is.hover) {
		set.class += ' ' + set.prefix + '--hover';
	}

	// Define focus class name
	if (is.focus) {
		set.class += ' ' + set.prefix + '--focus';
	}

	// Define disabled class name
	if (isDisabled) {
		set.class += ' ' + set.prefix + '--disabled';
	}

	// Define custom class name(s)
	if (!isUndefined(className) && !isEmpty(className)) {
		set.class += ' ' + className;
	}

	// Define inner markup
	set.markup = (
		<Fragment>
			{children}
		</Fragment>
	);

	// Create element
	return createElement(
		set.tag,
		{
			...(is.link && { href: href }),
			...(is.link && { target: target || '_blank' }),
			...(is.label && { htmlFor: htmlFor }),
			className: set.class,
			onMouseEnter: (e) => {
				set.hover(true);
				if (isFunction(onMouseEnter)) {
					onMouseEnter(e);
				}
			},
			onMouseLeave: (e) => {
				set.hover(false);
				if (isFunction(onMouseLeave)) {
					onMouseLeave(e);
				}
			},
			onFocus: (e) => {
				set.focus(true);
				if (isFunction(onFocus)) {
					onFocus(e);
				}
			},
			onBlur: (e) => {
				set.focus(false);
				if (isFunction(onBlur)) {
					onBlur(e);
				}
			},
			...(isDisabled && { disabled: isDisabled }),
			...props,
		},
		set.markup
	);
};

// Publish required component(s)
export { IconButton };
