import React, {useState} from 'react';

export const Radio = ({id, label, defaultValue, isChecked = false, isSmall = false, isDisabled = false}) => {
	const is = {};
	const set = {};

	[is.checked, set.checked] = useState(isChecked);
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	// Define container props
	set.containerProps = {
		className: 'sui-radio',
		onMouseEnter: () => set.hover(true),
		onMouseDownCapture: () => set.focus(true),
		onMouseUpCapture: () => set.focus(true),
		onMouseLeave: () => set.hover(false),
		onBlurCapture: () => set.focus(false),
	};

	// Define input props
	set.inputProps = {
		type: 'radio',
		name: `${id}-name`,
		value: defaultValue,
		className: 'sui-screen-reader-only',
		checked: is.checked,
		disabled: isDisabled,
		onChange: () => set.checked(!is.checked),
	};

	// Define box props
	set.boxProps = {
		tabIndex: '-1',
		className: 'sui-radio__box',
		'aria-hidden': true,
	};

	// Define label props
	set.labelProps = {
		className: 'sui-radio__label',
	};

	// Define additional class name(s) based on state(s)
	if (is.checked) {
		set.containerProps.className += ' sui-radio--checked';
	}

	if (isSmall) {
		set.containerProps.className += ' sui-radio--sm';
	}

	if (is.hover) {
		set.containerProps.className += ' sui-radio--hover';
	}

	if (is.focus) {
		set.containerProps.className += ' sui-radio--focus';
	}

	if (isDisabled) {
		set.containerProps.className += ' sui-radio--disabled';
	}

	return (
		<label {...set.containerProps}>
			<input {...set.inputProps} />
			<span {...set.boxProps}>
				{is.checked && <span className="sui-radio__icon" />}
			</span>
			{label}
		</label>
	);
}
