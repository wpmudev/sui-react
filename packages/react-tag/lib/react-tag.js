import { createElement } from 'react';
import { isEmpty, isUndefined } from '@wpmudev/react-utils';

const Tag = ({
	isSmall = false,
	type,
	color,
	isUppercase = false,
	className = '',
	design = '',
	isDisabled = false,
	href,
	target,
	children,
	...props
}) => {
	// Set tag props prefix.
	const is = {};
	const set = {};

	// validation for tag props
	is.link = !isUndefined(href) ? true : false;
	is.color = !isUndefined(color) && !isEmpty(color) ? true : false;
	is.children = !isUndefined(children) && !isEmpty(children) ? true : false;
	is.type = !isUndefined(type) && !isEmpty(type) ? true : false;
	is.design = !isEmpty(design) ? true : false;

	// set default value
	set.children = '';
	set.class = 'sui-tag';
	set.tag = 'span';

	// set color class for tags
	if (is.color) {
		set.class += ` sui-tag--${color}`;
	}

	// set children html
	if (is.children) {
		set.children = children;
	}

	// set type of tag
	if (is.type) {
		set.tag = type;
		set.class += ` sui-tag__${type}`;
	}

	// design class in tag
	if (is.design) {
		set.class += ` sui-tag--${design}`;
	}

	if (isSmall) {
		set.class += ' sui-tag--sm';
	}

	if (!isEmpty(className)) {
		set.class += ` ${className}`;
	}

	if (isDisabled) {
		set.class += ' sui-tag--disabled';
	}

	if (isUppercase) {
		set.class += ' sui-tag--uppercase';
	}

	return createElement(
		set.tag,
		{
			...(is.link && { href: href }),
			...(is.link && { target: target || '_blank' }),
			className: set.class,
			...props,
		},
		is.design && 'truncated' === design
			? createElement('span', {}, set.children)
			: set.children
	);
};

// Publish required component.
export { Tag };
