import React, {useEffect, useState} from 'react';

import { Tick } from './elements/tick.js';

export const Checkbox = ({label, defaultValue = false, isLabelHidden = false, isSmall = false, isDisabled = false, ...props}) => {
	const is = {};
	const set = {};

	[is.checked, set.checked] = useState(defaultValue);
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	useEffect(() => {
		set.checked(defaultValue);
	}, [defaultValue]);

	// Define container props
	set.containerProps = {
		className: 'sui-checkbox',
		onMouseEnter: () => {
			set.hover(true);
		},
		onMouseDownCapture: () => set.focus(true),
		onMouseUpCapture: () => set.focus(true),
		onMouseLeave: () => {
			set.hover(false);
		},
		onBlurCapture: () => set.focus(false),
	};

	// Define input props
	set.inputProps = {
		type: 'checkbox',
		className: 'sui-screen-reader-only',
		checked: is.checked,
		disabled: isDisabled,
		onChange: () => set.checked(!is.checked),
		...props
	};

	// Define box props
	set.boxProps = {
		tabIndex: '-1',
		className: 'sui-checkbox__box',
		'aria-hidden': true,
	};

	// Define label props
	set.labelProps = {
		className: 'sui-checkbox__label',
	};

	// Define additional class name(s) based on state(s)
	if (isLabelHidden) {
		set.containerProps.className += ' sui-checkbox--hidden-label';
	}

	if (is.checked) {
		set.containerProps.className += ' sui-checkbox--checked';
	}

	if (isSmall) {
		set.containerProps.className += ' sui-checkbox--sm';
	}

	if (is.hover) {
		set.containerProps.className += ' sui-checkbox--hover';
	}

	if (is.focus) {
		set.containerProps.className += ' sui-checkbox--focus';
	}

	if (isDisabled) {
		set.containerProps.className += ' sui-checkbox--disabled';
	}

	return (
		<label {...set.containerProps}>
			<input {...set.inputProps} />
			<Tick {...set.boxProps} />
			{isLabelHidden ? <span className="sui-screen-reader-only">{label}</span> : label}
		</label>
	);
}
