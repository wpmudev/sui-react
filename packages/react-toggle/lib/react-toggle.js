import React, { Fragment, useState, useEffect } from 'react';
import { isUndefined, isBoolean, isEmpty, isFunction } from '@wpmudev/react-utils';

// Build "Toggle" component
const Toggle = ({
	label,
	defaultValue,
	isLabelHidden = false,
	isDisabled = false,
	onClick,
	onMouseEnter,
	onMouseLeave,
	onMouseDownCapture,
	onMouseUpCapture,
	onBlurCapture,
	onChange,
	...props
}) => {
	const has = {};
	const set = {};

	// Props validation
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;

	// Define component states
	[has.state, set.state] = useState(defaultValue);
	[has.hover, set.hover] = useState(false);
	[has.focus, set.focus] = useState(false);

	// Define initial state
	const initialState = () => {
		if ( !isBoolean(defaultValue) ) {
			set.state(defaultValue);
		}
	}

	useEffect( () => initialState, []);

	// Define container props
	set.containerProps = {
		className: 'sui-toggle',
		onMouseEnter: (e) => {
			set.hover(true);
			
			if (isFunction(onMouseEnter)) {
				onMouseEnter(e);
			}
		},
		onMouseDownCapture: (e) => { 
			set.focus(true);

			if (isFunction(onMouseDownCapture)) {
				onMouseDownCapture(e);
			}
		},
		onMouseUpCapture: (e) => {
			set.focus(true);

			if (isFunction(onMouseUpCapture)) {
				onMouseUpCapture(e);
			}
		},
		onMouseLeave: (e) => {
			set.hover(false);

			if (isFunction(onMouseLeave)) {
				onMouseLeave(e);
			}
		},
		onBlurCapture: (e) => {
			set.focus(false);

			if (isFunction(onBlurCapture)) {
				onBlurCapture(e);
			}
		},
	};

	// Define input props
	set.inputProps = {
		type: 'checkbox',
		className: 'sui-screen-reader-only',
		defaultChecked: has.state,
		disabled: isDisabled,
		onChange: (e) => {
			set.state(!has.state);

			if (isFunction(onClick)) {
				onClick(e);
			}
		},
		...props
	}

	// Define switch props
	set.switchProps = {
		tabIndex: '-1',
		className: 'sui-toggle__switch',
		'aria-hidden': true,
	}

	// Define label props
	set.labelProps = {
		className: 'sui-toggle__label',
	}

	// Define additional class name(s) based on state(s)
	if (isLabelHidden) {
		set.containerProps.className += ' sui-toggle--hidden-label';
	}

	if (has.state) {
		set.containerProps.className += ' sui-toggle--checked';

		if (has.hover) {
			set.containerProps.className += ' sui-toggle--checked-hover';
		}

		if (has.focus) {
			set.containerProps.className += ' sui-toggle--checked-focus';
		}
	} else {
		if (has.hover) {
			set.containerProps.className += ' sui-toggle--hover';
		}

		if (has.focus) {
			set.containerProps.className += ' sui-toggle--focus';
		}
	}

	if (isDisabled) {
		set.containerProps.className += ' sui-toggle--disabled';
	}

	return (
		<label {...set.containerProps}>
			<input {...set.inputProps} />
			<span {...set.switchProps} />
			{ isLabelHidden && <span className="sui-screen-reader-only">{label}</span> }
			{ !isLabelHidden && label }
		</label>
	);
}

// Publish component(s)
export { Toggle }
