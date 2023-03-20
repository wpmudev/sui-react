import React, { Fragment } from 'react';
import { isBoolean, isEmpty, isUndefined } from '@wpmudev/react-utils';

const Tag = ({
	isSmall = false,
	type,
	color,
	isUppercase = false,
	className,
	design,
	isDisabled = false,
	href,
	target,
	children,
	...props
}) => {
	// Set tag props prefix.
	const tag = {};

	tag.link = href;

	tag.markup = children;

	tag.class = 'sui-tag';

	// Determine where to open the link when `href` is available.
	switch (target) {
		case '_self':
		case '_blank':
		case '_parent':
		case '_top':
			tag.target = target;
			break;

		default:
			tag.target = '_blank';
			break;
	}

	// switch color
	switch (color) {
		case 'red':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'purple':
		case 'white':
		case 'black':
		case 'dark-blue':
			tag.class += ' sui-tag--' + color;
			break;
		default:
			break;
	}

	switch (type) {
		case 'button':
		case 'link':
			tag.html = type;
			tag.class += ` sui-tag__${type}`;
			break;
		default:
			tag.html = 'span';
			break;
	}

	switch (design) {
		case 'truncated':
			tag.class += ' sui-tag--' + design;
			tag.markup = <span>{children}</span>;
			break;
		case 'multiline':
			tag.class += ' sui-tag--' + design;
			break;
		default:
			break;
	}

	if (isBoolean(isSmall) && isSmall) {
		tag.class += ' sui-tag--sm';
	}

	if (!isEmpty(className) && !isUndefined(className)) {
		tag.class += ' ' + className;
	}

	if (isBoolean(isDisabled) && isDisabled) {
		tag.class += ' sui-tag--disabled';
	}

	if (isBoolean(isUppercase) && isUppercase) {
		tag.class += ' sui-tag--uppercase';
	}

	return (
		<Fragment>
			{'button' === tag.html && (
				<button className={tag.class} {...props}>
					{tag.markup}
				</button>
			)}
			{'link' === tag.html && (
				<a
					href={tag.link}
					target={tag.target}
					className={tag.class}
					{...props}
				>
					{tag.markup}
				</a>
			)}
			{'span' === tag.html && (
				<span className={tag.class} {...props}>
					{tag.markup}
				</span>
			)}
		</Fragment>
	);
};

// Publish required component.
export { Tag };
