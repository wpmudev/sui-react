import React, {
	Fragment,
	useState,
	useEffect,
	useCallback,
	createElement,
} from 'react';
import { Button as SuiButton } from '@wpmudev/react-button';
import { isEmpty, isUndefined, isFunction } from '@wpmudev/react-utils';

// Build "Tooltip" component.
const Tooltip = ({
	label,
	type = 'button',
	className,
	position = 'top',
	customWidth,
	customMobileWidth,
	children,
	onClick = () => {},
	onMouseEnter = () => {},
	onMouseLeave = () => {},
	onFocus = () => {},
	onBlur = () => {},
	...props
}) => {
	const is = {};
	const set = {};

	// Define tooltip state.
	[is.open, is.setOpen] = useState(false);

	// Parameter(s) validation.
	is.customWidth = !isUndefined(customWidth) && !isEmpty(customWidth);
	is.customMobileWidth =
		!isEmpty(customMobileWidth) && !isUndefined(customMobileWidth);
	is.children = !isUndefined(children) && !isEmpty(children);
	is.className = !isUndefined(className) && !isEmpty(className);

	// Renders tooltip class name.
	set.class = 'sui-tooltip';

	// Add show hide class based on tooltip open
	is.open && (set.class += ' sui-tooltip--show');

	// tooltip custom width
	set.tooltipWidth = {};

	// tooltip type button or text
	set.tag = 'button' === type ? SuiButton : 'span';

	// Custom tooltip width
	if (is.customWidth) {
		set.class += ' sui-tooltip--custom-width';
		set.tooltipWidth['--tooltip-width'] = `${customWidth}px`;
		set.tooltipWidth['--tooltip-width-mobile'] = `${customWidth}px`;
	}

	// Custom tooltip width mobile
	if (is.customMobileWidth) {
		set.class += ' sui-tooltip--custom-width';
		set.tooltipWidth['--tooltip-width-mobile'] = `${customMobileWidth}px`;
	}

	// Add classes in tooltip component.
	if (is.className) {
		set.class += ' ' + className;
	}

	// set position
	set.class += ' sui-tooltip--' + position;

	// when escape key is pressed close the tooltip
	const escFunction = useCallback(
		(event) => {
			if (event.keyCode === 27 && is.open) {
				is.setOpen(false);
			}
		},
		[is.open]
	);

	useEffect(() => {
		document.addEventListener('keydown', escFunction);

		return () => {
			document.removeEventListener('keydown', escFunction);
		};
	}, [escFunction]);

	// Define tooltip markup.
	set.markup = (
		<Fragment>
			{createElement(
				set.tag,
				{
					onClick: (e) => {
						if (isFunction(onClick)) {
							onClick(e);
						}
					},
					onFocus: (e) => {
						is.setOpen(true);
						if (isFunction(onFocus)) {
							onFocus(e);
						}
					},
					onBlur: (e) => {
						is.setOpen(false);
						if (isFunction(onBlur)) {
							onBlur(e);
						}
					},
					onMouseEnter: (e) => {
						is.setOpen(true);
						if (isFunction(onMouseEnter)) {
							onMouseEnter(e);
						}
					},
					onMouseLeave: (e) => {
						is.setOpen(false);
						if (isFunction(onMouseLeave)) {
							onMouseLeave(e);
						}
					},
					...props,
				},
				label
			)}
			{!isUndefined(is.children) &&
				!isEmpty(is.children) &&
				createElement(
					'span',
					{
						className: 'sui-tooltip__content',
						role: 'tooltip',
						'aria-hidden': !is.open,
						'aria-live': 'polite',
						'tab-index': is.open ? '0' : '-1',
						style: set.tooltipWidth,
					},
					children
				)}
		</Fragment>
	);

	return createElement(
		'div',
		{
			className: set.class,
		},
		set.markup
	);
};

// Publish required component.
export { Tooltip };
