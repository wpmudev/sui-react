import React, { useState } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

import { Toggle } from "../../react-toggle/lib/react-toggle";
import { Tooltip } from "../../react-tooltip/lib/react-tooltip";
import { IconButton } from "../../react-icon-button/lib/react-icon-button";

export const Integration = ({ title, description, additionalInfo = '', image, isDisabled = false , isActive = false, isSettings = false, isPro = false }) => {
	const has = {};
	const set = {};

	// Define image object
	set.icon = Object.assign(
		{
			src: '',
			alt: '',
		},
		image
	);
	
	// Props validation
	has.title = !isUndefined(title) && !isEmpty(title) ? true : false;
	has.description = !isUndefined(description) && !isEmpty(description) ? true : false;

	// Define component states
	[has.state, set.state] = useState();
	[has.hover, set.hover] = useState(false);
	[has.focus, set.focus] = useState(false);
	[has.active, set.active] = useState(isActive);

	// Define container props
	set.containerProps = {
		className: 'sui-integation',
	};

	if (has.active) {
		set.containerProps.className += ' sui-integation--active';
	} 
	
	if (isDisabled || isPro) {
		set.containerProps.className += ' sui-integation--disabled';
	}

	return (
		<div {...set.containerProps}>
			<div className="sui-integration__">
				<img src={set.icon.src} alt={set.icon.alt} />
				<div>
					{isSettings && has.active && (
						<IconButton icon="settings" label="settings" appearance="tertiary" color="black" isSmall={true}  />
					)}
					<Toggle defaultValue={has.active} onClick={() => set.active(!has.active)} isLabelHidden={true}/>
				</div>
			</div>
			<div className="sui-integration__content">
				<h3 className="sui-integration__title">{title}</h3>
				<Tooltip type="icon" label="Text" customWidth={160}>Additional information why this feature is inactive.</Tooltip>
				<p className="sui-integration__description">{description}</p>
			</div>
		</div>
	);
}
