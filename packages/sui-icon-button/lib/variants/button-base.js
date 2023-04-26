import React, { createElement, Fragment, useState } from 'react';
import { isUndefined, isEmpty, isFunction } from '@wpmudev/react-utils';

// Import component functions
import { defineTag } from '../utils/functions';

// Import required component(s)
import { Label } from '../elements/button-label';
import { Icon } from '../elements/button-icon';
import { Loader } from '../elements/button-loader';

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
	icon,
	label,
	children,
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	onFocus = () => {},
	onBlur = () => {},
	...props
}) => {
	const is = {};
	const set = {};

	// Define button states.
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	// Parameter(s) validation.
	is.link = !isUndefined(href) ? true : false;
	is.labelTag = !isUndefined(htmlFor) ? true : false;
	is.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	is.label = !isUndefined(label) && !isEmpty(label) ? true : false;

	is.themeEnabled = !isUndefined(appearance) && !isEmpty(appearance);
	is.colorEnabled = !isUndefined(color) && !isEmpty(color);

	// Define button tag.
	set.tag = defineTag(is.link ? 'link' : is.labelTag ? 'label' : null);

	// Define component prefix.
	set.prefix = 'sui-icon-button';

	// Define button class.
	set.class = set.prefix;

	// Define button appearance.
	if (is.themeEnabled && is.colorEnabled) {
		set.class += ' ' + set.prefix + '--' + appearance + '-' + color;
	}

	if (isSmall) {
		set.class += ' ' + set.prefix + '--sm';
	}

	if (is.hover) {
		set.class += ' ' + set.prefix + '--hover';
	}

	if (is.focus) {
		set.class += ' ' + set.prefix + '--focus';
	}

	if (isDisabled) {
		set.class += ' ' + set.prefix + '--disabled';
	}

	if (!isUndefined(className) && !isEmpty(className)) {
		set.class += ' ' + className;
	}

	// Define button markup.
	set.markup = (
		<Fragment>
			{isLoading && <Loader />}
			{!isLoading && (
				<Fragment>
					<Icon name={icon} />
					<Label>{label}</Label>
				</Fragment>
			)}
			{children}
		</Fragment>
	);

	// Create button element.
	return createElement(
		set.tag,
		{
			...(is.link && { href: href }),
			...(is.link && { target: target || '_blank' }),
			...(is.labelTag && { htmlFor: htmlFor }),
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

// Publish required component(s).
export { IconButton };
