import React, { Fragment, createElement } from 'react';
import { isEmpty, isUndefined, isBoolean } from '@wpmudev/react-utils';

const Score = ({
	bar,
	value,
	content,
	state,
	isSmall = false,
	isPercentage = true,
	className,
	...props
}) => {
	const is = {};
	const set = {};

	// validation of values.
	is.value = !isUndefined(value) && !isEmpty(value) ? true : false;
	is.bar = !isUndefined(bar) && !isEmpty(bar) ? true : false;
	is.content = !isUndefined(content) && !isEmpty(content) ? true : false;
	is.className =
		!isUndefined(className) && !isEmpty(className) ? true : false;
	is.state = !isUndefined(state) && !isEmpty(state) ? true : false;

	set.classes = 'sui-score sui-score--loaded';
	set.value = is.bar ? bar : 0;
	set.state = is.state ? state : '';

	// add class based on state type
	if (!is.state) {
		if (61 <= set.value) {
			set.classes += ' sui-score--success';
		} else if (35 <= set.value && 60 >= set.value) {
			set.classes += ' sui-score--warning';
		} else {
			set.classes += ' sui-score--error';
		}
	} else {
		set.classes += ` sui-score--${set.state}`;
	}

	if (is.value) {
		set.value = value;
	}

	// size of score element
	if (!isSmall) {
		set.classes += ' sui-score--lg';
	}

	// if we have custom classes
	if (is.className) {
		set.classes += ` ${className}`;
	}

	const svgHTML = createElement(
		'svg',
		{
			viewBox: '0 0 100 100',
			xmlns: 'http://www.w3.org/2000/svg',
		},
		createElement('circle', {
			strokeWidth: '12',
			cx: '50',
			cy: '50',
			r: '42',
		}),
		createElement('circle', {
			strokeWidth: '12',
			cx: '50',
			cy: '50',
			r: '42',
			strokeDasharray: '0,3943.4067435231395',
			style: {
				animation: `3s ease 0s 1 normal forwards running sui${
					is.bar ? bar : set.value
				}`,
			},
		})
	);

	const contentHTML = createElement(
		'span',
		{
			className: 'sui-score--content',
		},
		set.value,
		isPercentage &&
			createElement(
				'span',
				{
					className: 'sui-score--percentage',
				},
				'%'
			),
		is.content && isSmall && ` ${content}`
	);

	const screenreaderHTML = createElement(
		'span',
		{
			className: 'sui-screen-reader-text',
			tabIndex: '0',
		},
		`Score ${set.value} out of 100`
	);

	return createElement(
		'div',
		{
			className: set.classes,
			...props,
		},
		svgHTML,
		contentHTML,
		screenreaderHTML
	);
};

// Publish required component.
export { Score };
