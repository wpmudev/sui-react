import React, { Fragment, Children, createElement, useState } from "react";
import { isUndefined, isEmpty, isBoolean } from "@wpmudev/react-utils";

// Import required component(s).
import { Label } from "./button/elements/button-label";
import { Icon } from "./button/elements/button-icon";
import { Loader } from "./button/elements/button-loader";

// Build "Button" component.
const Button = ({
	href,
	target,
	htmlFor,
	type,
	theme,
	color,
	size,
	className,
	selected,
	loading,
	disabled,
	children,
	...props
}) => {
	const [isHover, setIsHover] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	// Check if button is a link.
	const isLink = !isUndefined(href) ? true : false;

	// Check if button is a label.
	const isLabel = !isUndefined(htmlFor) && !isEmpty(htmlFor) ? true : false;

	// When provided sets the button in disabled mode.
	const isDisabled = isBoolean(disabled) && disabled ? true : false;

	// When provided sets the button in loading mode.
	const isLoading = isBoolean(loading) && loading ? true : false;

	// When provided keeps the button selected.
	const isSelected = isBoolean(selected) && selected ? true : false;

	// When provided adds additional class names.
	const hasClass = !isUndefined(className) && !isEmpty(className) ? true : false;

	// Set button props prefix.
	const btn = {};

	// Renders button as a link.
	btn.link = href;

	// Determine where to open the link when `href` is available.
	btn.target = target || '_blank';

	// Renders button as a label.
	btn.label = htmlFor;

	// Determines the class prefix.
	btn.prefix = 'sui-button';

	switch (type) {
		case 'icon':
			btn.prefix = 'sui-icon-button';
			break;

		case 'segmented':
			btn.prefix = 'sui-toggle-button';
			break;

		default:
			// do nothing.
			break;
	}

	// Renders button class name.
	btn.class = btn.prefix;

	if ( 'segmented' !== type ) {
		// Renders the theme of the button.
		switch (theme) {
			case 'primary':
			case 'secondary':
			case 'tertiary':
				btn.class += ' ' + btn.prefix + '--' + theme;
				break;

			default:
				// do nothing.
				break;
		}

		// Renders the color of the button.
		if ( !isUndefined(color) && !isEmpty(color) ) {
			btn.class += ' ' + btn.prefix + '--' + color;
		}
	}

	switch (size) {
		case 'sm':
			btn.class += ' ' + btn.prefix + '--' + size;
			break;

		default:
			// do nothing.
			break;
	}

	if ( isHover ) {
		btn.class += ' sui-button--hover';
	}

	if ( isFocus ) {
		btn.class += ' sui-button--focus';
	}

	if ( isSelected ) {
		btn.class += ' sui-button--selected';
	}

	if ( isLoading ) {
		btn.class += ' sui-button--loading';
	}

	if ( isDisabled ) {
		btn.class += ' sui-button--disabled';
	}

	if (hasClass) {
		btn.class = ' ' + className;
	}

	// Renders button elements.
	btn.elements = Children.map( children, (child, index) => {
		return (
			<Fragment key={index}>
				{ 'icon' === child.props.slot && (
					<Icon
						name={child.props.name}
						size={child.props.size} />
				)}
				{ 'label' === child.props.slot && (
					<Label hidden={child.props.hidden}>
						{ child.props.children }
					</Label>
				)}
			</Fragment>
		);
	});

	// Renders button content.
	btn.markup = (
		<Fragment>
			{ isBoolean(loading) && (
				<Fragment>
					{ loading && <Loader /> }
					{ !loading && btn.elements }
				</Fragment>
			)}
			{ !isBoolean(loading) && btn.elements }
		</Fragment>
	);

	// Renders button tag.
	btn.tag = isLabel
		? 'label'
		: isLink ? 'a' : 'button';

	// Renders button main layout.
	const element = createElement(
		btn.tag,
		{
			... ( ( isLink ) && { href: btn.link } ),
			... ( ( isLink ) && { target: btn.target } ),
			... ( ( isLabel ) && { htmlFor: btn.label } ),
			className: btn.class,
			... ( !isUndefined(loading) && { 'aria-live': 'polite' } ),
			... ( !isUndefined(loading) && { 'aria-busy': isLoading ? true : false } ),
			... ( ( isDisabled ) && { disabled: '' } ),
			onMouseEnter: () => setIsHover(true),
			onMouseLeave: () => setIsHover(false),
			onFocus: () => setIsFocus(true),
			onBlur: () => setIsFocus(false),
			...props
		},
		btn.markup
	);

	return element;
}

// Publish required component(s).
export { Button }
