import React, { createElement, Fragment, useState } from "react";
import { isUndefined, isEmpty, isFunction } from "@wpmudev/react-utils";

// Import required component(s).
import { Label } from "../elements/button-label";
import { Icon } from "../elements/button-icon";

// Build "Base Button" component.
const Button = ({
	href,
	target,
	htmlFor,
	appearance,
	color,
	isSmall = false,
	isDisabled = false,
	isUnwrapped = false,
	className,
	iconLead,
	iconTrail,
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
	is.label = !isUndefined(htmlFor) ? true : false;
	is.lead = !isUndefined(iconLead) && !isEmpty(iconLead) ? true : false;
	is.trail = !isUndefined(iconTrail) && !isEmpty(iconTrail) ? true : false;

	// Define button tag.
	set.tag = 'button';

	if ( is.link ) {
		set.tag = 'a';
	} else if ( is.label ) {
		set.tag = 'label';
	}

	// Define button class.
	set.class = 'sui-button';

	switch ( appearance ) {
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
			// do nothing.
			break;
	}

	switch ( color ) {
		case 'blue':
		case 'black':
		case 'red':
		case 'navy':
		case 'white':
			set.class += ' sui-button--' + color;
			if ( 'secondary' === appearance || 'tertiary' === appearance ) {
				set.class += '-alt';
			}
			break;

		default:
			// do nothing.
			break;
	}

	if ( isSmall ) {
		set.class += ' sui-button--sm';
	}

	if ( is.hover ) {
		set.class += ' sui-button--hover';
	}

	if ( is.focus ) {
		set.class += ' sui-button--focus';
	}

	if ( isDisabled ) {
		set.class += ' sui-button--disabled';
	}

	if ( !isUndefined(className) && !isEmpty(className) ) {
		set.class += ' ' + className;
	}

	// Define button markup.
	set.markup = (
		<Fragment>
			{ is.lead && <Icon name={ iconLead } /> }
			{ isUnwrapped && children }
			{ !isUnwrapped && <Label>{ children }</Label> }
			{ is.trail && <Icon name={ iconTrail } /> }
		</Fragment>
	);

	// Create button element.
	return createElement(
		set.tag,
		{
			... ( is.link && { href: href }),
			... ( is.link && { target: target || '_blank' }),
			... ( is.label && { htmlFor: htmlFor }),
			className: set.class,
			onMouseEnter: ( e ) => {
				set.hover(true);
				if ( isFunction( onMouseEnter ) ) {
					onMouseEnter( e );
				}
			},
			onMouseLeave: ( e ) => {
				set.hover(false);
				if ( isFunction( onMouseLeave ) ) {
					onMouseLeave( e );
				}
			},
			onFocus: ( e ) => {
				set.focus(true);
				if ( isFunction( onFocus ) ) {
					onFocus( e );
				}
			},
			onBlur: ( e ) => {
				set.focus(false);
				if ( isFunction( onBlur ) ) {
					onBlur( e );
				}
			},
			... ( isDisabled && { disabled: isDisabled }),
			...props
		},
		set.markup
	);
}

// Publish required component(s).
export { Button }
