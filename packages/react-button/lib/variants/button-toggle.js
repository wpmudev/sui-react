import React, { createElement, useState, Fragment, Children } from "react";
import { isUndefined, isEmpty, isBoolean, isObject } from "@wpmudev/react-utils";

// Import required component(s).
import { Label } from "../elements/button-label";
import { Icon } from "../elements/button-icon";

// Build "Default Button" component.
const Button = ({
	href,
	htmlFor,
	theme,
	segment,
	size,
	className,
	active,
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

	not.disabled = !isUndefined(disabled) && !isBoolean(disabled) ? true : false;

	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;
	has.disabled = isBoolean(disabled) ? true : false;

	if ( isUndefined(active) ) {
		throw new Error(
			`Required parameter missing. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "active" is required for toggle buttons.\n\n`
		);

	} else {
		if ( !isBoolean(active) ) {
			throw new Error(
				`Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "active" is not a boolean type.\n\n`
			);
		}
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

	switch ( theme ) {
		case 'primary':
		case 'secondary':
		case 'tertiary':
			set.class += ' sui-button--' + theme;
			break;

		default:
			// Do nothing.
			break;
	}

	switch ( segment ) {
		case 'left':
		case 'right':
			set.class += ' sui-button--' + segment;
			break;

		default:
			// Do nothing.
			break;
	}

	switch ( size ) {
		case 'sm':
			set.class += ' sui-button--' + size;
			break;

		default:
			// Do nothing.
			break;
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

	if ( active ) {
		set.class += ' sui-button--active';
	}

	if ( has.disabled && disabled ) {
		set.class += ' sui-button--disabled';
	}

	// Define button markup.
	set.markup = (
		<Fragment>
			{ Children.map( children, ( child, index ) => {
				return (
					<Fragment key={ index }>
						{ isObject( child )
							? isUndefined(child.props.slot)
								? child
								: (
									<Fragment>
										{ 'icon' === child.props.slot && <Icon name={ child.props.name } /> }
										{ 'label' === child.props.slot && <Label>{ child.props.children }</Label> }
									</Fragment>
								)
							: <Label>{ child }</Label>
						}
					</Fragment>
				);
			}) }
		</Fragment>
	);

	return createElement(
		set.tag,
		{
			... ( is.link && { href: href }),
			... ( is.label && { htmlFor: htmlFor }),
			className: set.class,
			'aria-pressed': active,
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
