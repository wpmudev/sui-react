import React, { Fragment, createElement } from 'react';
import { isEmpty, isUndefined, isObject } from '@wpmudev/react-utils';

// Import required component(s)
import { Icon } from './elements/icon-avatar';
import { Image } from './elements/image-avatar';
import { Status } from './elements/status';

// Build "avatar" component
const Avatar = ({
	image,
	status,
	isSmall = false,
	className,
	...props
}) => {
	const has = {};
	const set = {};

	// Define image object
	set.img = Object.assign(
		{
			src: '',
			alt: '',
		},
		image
	);

	// Props validation
	has.status = !isUndefined(status) && !isEmpty(status) ? true : false;
	has.image = !isUndefined(image) && !isEmpty(set.img.src) ? true : false;

	// Define class name
	set.class = 'sui-avatar';

	// Define avatar size
	if (isSmall) {
		set.class += ' sui-avatar--sm';
	}

	// Create avatar inner markup
	set.markup = (
		<Fragment>
			{ has.image && <Image source={set.img.src} text={set.img.alt} /> }
			{ !has.image && <Icon /> }
			{ has.status && <Status status={status} /> }
		</Fragment>
	);

	return createElement(
		'span',
		{
			className: set.class,
			...props
		},
		set.markup
	);
};

// Publish required component.
export { Avatar };
