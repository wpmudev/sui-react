import React from 'react';
import styled from 'styled-components';

const IconWrap = styled.span`
	width: 22px;
	position: relative;
	margin-left: -7px;
	vertical-align: middle;
	line-height: 1;
	&:before {
		color: inherit !important;
	}
`;

const ButtonWrap = styled.button`
	cursor: pointer !important;
`;

const LinkWrap = styled.a`
	cursor: pointer !important;
`;

const Tag = ({
	size,
	label,
	childrenContent,
	ghost,
	color,
	truncated,
	multiline,
	uppercase,
	onClick,
	icon,
	href,
	...props
}) => {
	let classes = [
			'sui-tag',
			truncated ? 'sui-tag-truncated' : '',
			uppercase ? 'sui-tag-uppercase' : '',
		],
		htmlTag = '';

	// switch size
	switch (size) {
		case 'sm':
		case 'pro':
		case 'beta':
			classes.push(`sui-tag-${size}`);
			break;
		default:
			break;
	}

	// switch color
	switch (color) {
		case 'red':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'purple':
		case 'disabled':
			ghost ? classes.push(`sui-tag-ghost sui-tag-${color}`) : classes.push(`sui-tag-${color}`);
			break;
		default:
			ghost && classes.push('sui-tag-ghost sui-tag-red');
			break;
	}

	// if props href is set, then set htmlTag to 'a' or if else onclick set then set html tag to 'button'
	if (href) {
		htmlTag = LinkWrap;
	} else if (onClick) {
		htmlTag = ButtonWrap;
	} else {
		htmlTag = 'span';
	}

	return React.createElement(
		htmlTag,
		{
			className: classes.join(' '),
			style: truncated || multiline ? { maxWidth: '100px' } : {},
			onClick: onClick ? onClick : null,
			href: href ? href : null,
			...props,
		},
		icon ? <IconWrap className={'sui-icon-' + icon} aria-hidden="true"></IconWrap> : null,
		truncated || childrenContent ? <span>{label}</span> : label,
	);
}

// Publish required component.
export { Tag }