import React, { createElement, useState, Fragment, Children } from "react";
import { isUndefined, isEmpty, isBoolean, isObject } from "@wpmudev/react-utils";

// Import required component(s).
import { Label } from "../elements/button-label";
import { Icon } from "../elements/button-icon";

// Build "Default Button" component.
const Button = ({
	htmlFor,
	theme,
	segment,
	size,
	className,
	active,
	disabled,
	onClick,
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
	[is.checked, set.checked] = useState(active);

	// Parameter(s) validation.
	is.label = !isUndefined(htmlFor) ? true : false;

	not.disabled = !isUndefined(disabled) && !isBoolean(disabled) ? true : false;

	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;
	has.cbFunc = !isUndefined(onClick) ? true : false;
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

	// Define button actions.
	const handleChange = () => {
		set.checked(!is.checked);
	}

	// Define button tag.
	set.tag = 'button';

	if ( is.label ) {
		set.tag = 'label';
	}

	// Define button class.
	set.class = 'sui-button sui-button-toggle';

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

	if ( is.checked ) {
		set.class += ' sui-button--active';
	}

	if ( has.disabled && disabled ) {
		set.class += ' sui-button--disabled';
	}

	// Define button elements.
	set.elements = (
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

	// Define buton markup.
	set.markup = (
		<Fragment>
			{ is.label && (
				<input
					id={ htmlFor }
					className="sui-screen-reader-only"
					type="checkbox"
					tabIndex={ is.checked ? '0' : '-1' }
					checked={ is.checked }
					onChange={ handleChange }
					{ ...props } />
			)}
			{ set.elements }
		</Fragment>
	);

	return createElement(
		set.tag,
		{
			... ( is.label && { htmlFor: htmlFor }),
			className: set.class,
			... ( !is.label && { 'aria-pressed': is.checked }),
			onMouseEnter: () => set.hover(true),
			onMouseLeave: () => set.hover(false),
			onFocus: () => set.focus(true),
			onBlur: () => set.focus(false),
			... ( is.label && { onClick: e => {
				if ( has.cbFunc ) {
					onClick( e );
				}

				e.preventDefault();
			} }),
			... ( !is.label && { onClick: e => {
				set.checked( !is.checked );

				if ( has.cbFunc ) {
					onClick( e );
				}
			} }),
			... ( has.disabled && { disabled: disabled }),
			... ( !is.label && { ...props } )
		},
		set.markup
	);
}

// Publish required component(s).
export { Button }
