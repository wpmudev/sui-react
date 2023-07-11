import React, { forwardRef } from 'react';
import { InteractionTypes, useInteraction } from '@wpmudev/react-hooks';

import {
	isUndefined,
	isEmpty,
	condContent,
	generateCN,
} from '@wpmudev/react-utils';

// Import required component(s).
import { Label } from '../elements/button-label';
import { Icon } from '../elements/button-icon';
import { ButtonPropsType } from '../types';

// Build "Base Button" component.
const Button = forwardRef<
	HTMLButtonElement | HTMLLinkElement | HTMLLabelElement,
	ButtonPropsType & InteractionTypes
>((props, ref) => {
	const {
		href,
		target,
		htmlFor,
		appearance,
		color,
		isSmall = false,
		isDisabled = false,
		isUnwrapped = false,
		className,
		iconLead,
		iconTrail,
		children,
	} = props;

	// base className
	const baseClassName: string = 'sui-button';

	// Manage interaction methods
	const [isHovered, isFocused, interactionMethods] = useInteraction({
		onMouseEnter: props?.onMouseEnter,
		onMouseLeave: props?.onMouseLeave,
		onFocus: props?.onFocus,
		onBlur: props?.onBlur,
	});

	const isLink = !isUndefined(href);
	const label = !isUndefined(htmlFor);

	// Classname based on the attributes
	const attrClasses = {
		sm: isSmall,
		hover: isHovered,
		focus: isFocused,
		disabled: isDisabled,
		[`${appearance}-${color}`]: !!appearance && !!color,
	};

	const attrs = {
		ref: ref,
		href: condContent(isLink, href),
		target: condContent(target, target || '_blank'),
		htmlFor: condContent(label),
		// classname
		className: generateCN(baseClassName, attrClasses, className ?? ''),
		disabled: isDisabled,
		// interaction methods
		...(interactionMethods ?? {}),
		...props,
	};

	// Root tag
	let TagName: string = isLink ? 'a' : 'button';

	// Render as label
	if (htmlFor) {
		TagName = 'label';
	}

	return (
		<TagName {...attrs}>
			{!isEmpty(iconLead ?? '') && <Icon name={iconLead} />}
			{isUnwrapped && children}
			{!isUnwrapped && <Label>{children}</Label>}
			{!isEmpty(iconTrail ?? '') && <Icon name={iconTrail} />}
		</TagName>
	);
});

// Publish required component(s).
export { Button };
