import React, {useState} from 'react';

export const Checkbox = ({id, label, defaultValue = false, isSmall = false, isDisabled = false}) => {
	const is = {};
	const set = {};

	[is.checked, set.checked] = useState(defaultValue);
	[is.hover, set.hover] = useState(false);
	[is.focus, set.focus] = useState(false);

	// Define container props
	set.containerProps = {
		htmlFor: id,
		id: `${id}__label`,
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
		id: id,
		className: 'sui-screen-reader-only',
		checked: is.checked,
		disabled: isDisabled,
		onChange: () => set.checked(!is.checked),
	};

	// Define box props
	set.boxProps = {
		tabIndex: -1,
		className: 'sui-checkbox__box',
		'aria-hidden': true,
	};

	// Define label props
	set.labelProps = {
		tabIndex: -1,
		className: 'sui-checkbox__label',
	};

	// Define additional class name(s) based on state(s)
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
			<span {...set.boxProps}>
				{is.checked && <span className="suicons suicons--check sui-checkbox__icon" />}
			</span>
			<span {...set.labelProps}>{label}</span>
		</label>
	);
}
