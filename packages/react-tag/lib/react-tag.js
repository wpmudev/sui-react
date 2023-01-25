import React, { Fragment } from 'react';
import { isBoolean, isEmpty, isUndefined } from '@wpmudev/react-utils';

const Tag = ({ size, htmlTag, color, uppercase, style, disabled, href, target, children, ...props }) => {
	// Set button props prefix.
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

	switch(htmlTag) {
		case 'button':
		case 'a':
			tag.html = htmlTag;
			break;
		default:
			tag.html = 'span';
			break;
	}

	switch(style) {
		case 'truncated':
			tag.class += ' sui-tag--' + style;
			tag.markup = (
				<span>{ children }</span>
			);
			break;
		case 'multiline':
			tag.class += ' sui-tag--' + style;
			break;
		default:
			break;
	}

	if ( !isEmpty(size) && !isUndefined(size) ) {
		tag.class += ' sui-tag--' + size;
	}

	if ( isBoolean(disabled) && disabled ) {
		tag.class += ' sui-tag--disabled';
	}

	if ( isBoolean(uppercase) && uppercase ) {
		tag.class += ' sui-tag--uppercase';
	}

	return (
		<Fragment>
			{ 'button' === tag.html && (
				<button className={ tag.class } { ...props }>
					{ tag.markup }
				</button>
			)}
			{ 'a' === tag.html && (
				<a 
					href={ tag.link } 
					target={ tag.target } 
					className={ tag.class } 
					{ ...props }>
					{ tag.markup }
				</a>
			)}
			{ 'span' === tag.html && (
				<span className={ tag.class } { ...props }>
					{ tag.markup }
				</span>
			)}
		</Fragment>
	);
}

// Publish required component.
export { Tag }