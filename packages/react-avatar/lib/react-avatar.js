import React, { createElement } from 'react';
import { isEmpty, isUndefined, isObject } from '@wpmudev/react-utils';

// Build "Avatar" component.
const Avatar = ({
	status,
	icon,
	isSmall = false,
	image,
	className = '',
	...props
}) => {
	const is = {};
	const set = {};

	// valication of props
	is.status = !isUndefined(status) && !isEmpty(status) ? true : false;
	is.icon = !isUndefined(icon) && !isEmpty(icon) ? true : false;
	is.image = !isUndefined(image) && isObject(image) ? true : false;

	set.class = 'sui-avatar';
	set.status = {};
	set.image = {};
	set.status.icon = '';
	set.status.classes = 'sui-avatar__status';

	// add classes
	if (!isEmpty(className)) {
		set.class += ' ' + className;
	}

	// avatar size
	if (isSmall) {
		set.class += ' sui-avatar--sm';
	}

	// avatar image set
	if (is.image) {
		set.image.src =
			!isUndefined(image.src) && !isEmpty(image.src) ? image.src : '';
		set.image.alt =
			!isUndefined(image.alt) && !isEmpty(image.alt) ? image.alt : '';
	}

	// set avatar icon
	if (is.icon) {
		set.icon = icon;
	} else {
		set.icon = 'user-alt';
	}

	// set status icon and class
	switch (status) {
		case 'confirmed':
			set.status.icon = 'check-alt';
			set.status.classes += ' sui-avatar__status--check-alt';
			break;
		case 'awaiting':
			set.status.icon = 'timer';
			set.status.classes += ' sui-avatar__status--timer';
			break;
		case 'not-accepted':
			set.status.icon = 'warning';
			set.status.classes += ' sui-avatar__status--warning';
			break;
		case 'not-connected':
			set.status.icon = 'warning';
			set.status.classes += ' sui-avatar__status--danger';
			break;
		default:
			break;
	}

	set.iconHtml = createElement('span', {
		className: `sui-avatar--icon suicons suicons--${set.icon}`,
		'aria-hidden': 'true',
	});

	set.statusHtml = createElement(
		'span',
		{
			className: set.status.classes,
		},
		createElement('span', {
			className: `suicons suicons--${set.status.icon}`,
			'aria-hidden': 'true',
		})
	);

	set.imageHtml = createElement(
		'div',
		{
			className: 'sui-avatar__image',
		},
		createElement('img', {
			src: set.image.src,
			alt: set.image.alt,
			width: '20',
		})
	);

	return createElement(
		'div',
		{
			className: set.class,
			...props,
		},
		is.image && set.imageHtml,
		!is.image && set.iconHtml,
		is.status && set.statusHtml
	);
};

// Publish required component.
export { Avatar };
