import React, { Fragment, Children, useState, createElement } from "react";
import { isUndefined, isEmpty, isBoolean } from "@wpmudev/react-utils";

// Import required component(s).
import { Label } from '../elements/button-label';
import { Icon } from '../elements/button-icon';
import { Loader } from '../elements/button-loader';

// Build "Base Button" component.
const ButtonBase = ({
	href,
	target,
	htmlFor,
	loading,
	selected,
	disabled,
	prefix,
	size,
	className,
	children,
	...props
}) => {
	const [isHover, setIsHover] = useState(false);
	const [isFocus, setIsFocus] = useState(false);

	const has = {};
	const ifs = {};
	const set = {};

	has.link = !isUndefined(href) ? true : false;
	has.target = !isUndefined(target) && !isEmpty(target) ? true : false;
	has.label = !isUndefined(htmlFor) && !isEmpty(htmlFor) ? true : false;
	has.loader = isBoolean(loading) ? true : false;
	has.select = isBoolean(selected) ? true : false;
	has.disabled = isBoolean(disabled) ? true : false;
	has.prefix = !isUndefined(prefix) && !isEmpty(prefix) ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;

	ifs.selected = has.select ? selected || false : false;
	ifs.loading = has.loader ? loading || false : false;
	ifs.disabled = has.disabled ? disabled || false : false;

	// Define prefix.
	set.prefix = has.prefix ? prefix : 'sui-button';

	// Define button class.
	set.class = set.prefix;

	switch ( size ) {
		case 'sm':
		case 'small':
			set.class += ' ' + set.prefix + '--sm';
			break;

		case 'lg':
		case 'large':
			set.class += ' ' + set.prefix + '--lg';
			break;

		default:
			// do nothing;
			break;
	}

	if ( has.class ) {
		set.class += ' ' + className;
	}

	if ( isHover ) {
		set.class += ' sui-button--hover';
	}

	if ( isFocus ) {
		set.class += ' sui-button--focus';
	}

	if ( ifs.selected ) {
		set.class += ' sui-button--selected';
	}

	if ( ifs.loading ) {
		set.class += ' sui-button--loading';
	}

	if ( ifs.disabled ) {
		set.class += ' sui-button--disabled';
	}

	// Define button elements.
	set.elements = Children.map( children, ( child, index ) => {
		return (
			<Fragment key={index}>
				{ 'icon' === child.props.slot && (
					<Icon name={ child.props.name } size={ child.size } />
				)}
				{ 'label' === child.props.slot && (
					<Label hidden={ child.props.hidden }>
						{ child.props.children }
					</Label>
				)}
			</Fragment>
		);
	});

	// Define button content.
	set.markup = (
		<Fragment>
			{ has.loader && (
				<Fragment>
					{ loading && <Loader /> }
					{ !loading && set.elements }
				</Fragment>
			)}
			{ !has.loader && set.elements }
		</Fragment>
	);

	// Define button tag based on available props.
	set.tag = 'button';

	if ( has.link ) {
		set.tag = 'a';
	} else if ( has.label ) {
		set.tag = 'label';
	}

	return createElement(
		set.tag,
		{
			... ( has.link && { href: href }),
			... (( has.link && has.target ) && { target: target || '_blank' }),
			... ( has.label && { htmlFor: htmlFor }),
			className: set.class,
			... ( has.loader && { 'aria-live': 'polite' }),
			... ( has.loader && { 'aria-busy': loading }),
			... ( ifs.disabled && { 'disabled': '' } ),
			onMouseEnter: () => setIsHover(true),
			onMouseLeave: () => setIsHover(false),
			onFocus: () => setIsFocus(true),
			onBlur: () => setIsFocus(false),
			...props
		},
		set.markup
	);
}

// Publish required component(s).
export { ButtonBase }
