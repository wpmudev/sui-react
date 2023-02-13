import React, { Fragment, useState, useEffect, useCallback } from 'react';
import { isBoolean, isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';
import { Button as SuiButton } from '@wpmudev/react-button';

// Build "Tooltip" component.
const Tooltip = ({ href, target, label, tooltipText, position, icon, customWidth, customMobileWidth, onClick, children, theme, color, ...props  }) => {
	// Tooltip open close state.
	const [isOpen, setIsOpen] = useState(false);
	
	// Set tooltip props prefix.
	const tooltip = {};
	
	// Renders tooltip class name.
	tooltip.class = 'sui-tooltip';
	
	// Add show hide class based on tooltip open
	isOpen && ( tooltip.class += ' sui-tooltip--show');

	// tooltip custom width
	tooltip.tooltipWidth = {};

	// Custom tooltip width
	if ( !isEmpty(customWidth) && !isUndefined(customWidth) ) {
		tooltip.tooltipWidth['--tooltip-width'] = `${customWidth}px`;
	}

	// Custom tooltip width mobile
	if ( !isEmpty(customMobileWidth) && !isUndefined(customMobileWidth) ) {
		tooltip.class = ' sui-tooltip--mobile';
		tooltip.tooltipWidth['--tooltip-width-mobile'] = `${customMobileWidth}px`;
	}

	// switch position
	switch (position) {
		case 'top':
		case 'top-left':
		case 'top-right':
		case 'bottom':
		case 'bottom-left':
		case 'bottom-right':
		case 'left':
		case 'left-top':
		case 'left-bottom':
		case 'right':
		case 'right-top':
		case 'right-bottom':
			tooltip.class += ' sui-tooltip--' + position;
			break;
		default:
			break;
	}

	// when escape key is pressed close the tooltip
	const escFunction = useCallback(
		(event) => {
			if (event.keyCode === 27 && isOpen) {
				setIsOpen(false);
			}
		},
		[isOpen]
	);

	useEffect(() => {
		document.addEventListener('keydown', escFunction);

		return () => {
			document.removeEventListener('keydown', escFunction);
		};
	}, [escFunction]);

	return (
		<Fragment>
			<div className={ tooltip.class }>
				{(!isUndefined(theme) && !isEmpty(theme)) ? (
					<SuiButton
						href={ href }
						target={ target }
						theme={ theme }
						color={ color }
						icon={icon}
						onClick={ onClick }
						onFocus={() => setIsOpen(true)}
						onBlur={() => setIsOpen(false)}
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}
					>
						{ label }
					</SuiButton>
				)
				: (
					<span
						onFocus={() => setIsOpen(true)}
						onBlur={() => setIsOpen(false)}
						onMouseEnter={() => setIsOpen(true)}
						onMouseLeave={() => setIsOpen(false)}
					>
						{ label }
					</span>
				)}
				{ (!isUndefined(children) && !isEmpty(children)) && (
					<span
						className="sui-tooltip__content" 
						role="tooltip"
						aria-hidden={ !isOpen }
						aria-live="polite"
						tab-index={ isOpen ? '0' : '-1' }
						style={ tooltip.tooltipWidth }
					>
						{children}
					</span>
				)}
			</div>
		</Fragment>
	);
};

// Publish required component.
export { Tooltip }
