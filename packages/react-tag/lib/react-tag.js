import React, { createElement } from 'react';
import { isEmpty, isUndefined } from '@wpmudev/react-utils';

const Tag = ({
	design,
	color,
	style,
	className,
	isSmall = false,
	isUppercase = false,
	children,
	...props
}) => {
	// Props prefix
	const has = {};
	const set = {};

	// Prop(s) validation
	has.design = 'outlined' === design ? true : false;
	has.color = !isUndefined(color) && !isEmpty(color) ? true : false;
	has.style = 'multiline' === style || 'truncated' === style ? true : false;
	has.class = !isUndefined(className) && !isEmpty(className) ? true : false;

	// Define main class name
	set.class = 'sui-tag';

	// Define tag design
	// Limited to: solid (default) and outlined
	if (has.design) {
		if (has.color) {
			set.class += ` sui-tag--${design}-${color}`;
		} else {
			set.class += ` sui-tag--${design}`;
		}
	} else {
		if (has.color) {
			set.class += ` sui-tag--${color}`;
		}
	}

	// Define tag style
	// Limited to: none (default), multiline, and truncated
	if (has.style) {
		set.class += ` sui-tag--${style}`;
	}

	// Define tag size
	if (isSmall) {
		set.class += ' sui-tag--sm';
	}

	// Define tag text
	if (isUppercase) {
		set.class += ' sui-tag--uppercase';
	}

	// Define custom class name(s)
	if (has.class) {
		set.class += ` ${className}`;
	}

	// Define inner markup
	set.markup = <span className="sui-tag__label">{children}</span>;

	// Create element
	return createElement(
		'span',
		{
			className: set.class,
			...props,
		},
		set.markup
	);
};

// Publish required component.
export { Tag };
