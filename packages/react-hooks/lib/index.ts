import classnames from 'classnames';
import React, { MouseEventHandler, useCallback, useState } from 'react';
import { isFunction } from '@wpmudev/react-utils';

export interface GlobalStylesProps {
	/**
	 * Base classname
	 * @type string
	 */
	base: string;
	/**
	 * SUI Theme appearance
	 * @type boolean | string
	 */
	appearance: boolean | string;
	/**
	 * SUI Theme color
	 * @type boolean | string
	 */
	color: boolean | string;
}

const useGlobalStyles = ({
	base = '',
	appearance,
	color,
}: GlobalStylesProps) => {
	// classnames
	const classNames = classnames(base, {
		[`${base}-${appearance}-${color}`]: !!appearance && !!color,
	});

	return { classNames };
};

export interface InteractionTypes {
	onMouseEnter?: (e: MouseEvent) => void;
	onMouseLeave?: (e: MouseEvent) => void;
	onFocus?: (e: FocusEvent) => void;
	onBlur?: (e: FocusEvent) => void;
}

/**
 * Use state detection
 *
 * @param {any} onMouseEnter
 * @param {any} onMouseLeave
 * @param {any} onFocus
 * @param {any} onBlur
 *
 * @return {{isHovered: boolean, methods: {onMouseEnter: (e: Event) => void, onMouseLeave: (e: Event) => void}, isFocused: boolean}}
 */
const useInteraction = ({
	onMouseEnter,
	onMouseLeave,
	onFocus,
	onBlur,
}: InteractionTypes) => {
	const [isHovered, setIsHovered] = useState<boolean>(false);
	const [isFocused, setIsFocused] = useState<boolean>(false);

	/**
	 * When mouse enters
	 * @type {(e: Event) => void}
	 */
	const onMouseEnterCallback = useCallback(
		(e: MouseEvent) => {
			setIsHovered(true);

			// execute if method exists
			if (onMouseEnter) {
				onMouseEnter(e);
			}
		},
		[isHovered]
	);

	/**
	 * When mouse leaves
	 * @type {(e: Event) => void}
	 */
	const onMouseLeaveCallback = useCallback(
		(e: MouseEvent) => {
			setIsHovered(false);
			// execute if method exists
			if (onMouseLeave) {
				onMouseLeave(e);
			}
		},
		[isHovered]
	);

	/**
	 * When mouse leaves
	 * @type {(e: Event) => void}
	 */
	const onFocusCallback = useCallback(
		(e: FocusEvent) => {
			setIsFocused(true);
			// execute if method exists
			if (onFocus) {
				onFocus(e);
			}
		},
		[isFocused]
	);

	/**
	 * When mouse leaves
	 * @type {(e: Event) => void}
	 */
	const onBlurCallback = useCallback(
		(e: FocusEvent) => {
			setIsFocused(false);
			// execute if method exists
			if (onBlur) {
				onBlur(e);
			}
		},
		[isHovered]
	);

	return [
		isHovered,
		isFocused,
		{
			onMouseEnter: onMouseEnterCallback,
			onMouseLeave: onMouseLeaveCallback,
			onFocus: onFocusCallback,
			onBlur: onBlurCallback,
		},
	] as const;
};

export { useGlobalStyles, useInteraction };
