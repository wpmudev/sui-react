import React from 'react';

// Import required modules
import { Checkbox as SuiCheckbox } from '../lib/react-checkbox';

// Import documentation
import docs from './ReactCheckbox.mdx';

// Default settings
export default {
	title: 'SUI/Components/Form Elements/Checkbox',
	component: SuiCheckbox,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const Checkbox = ({...args}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiCheckbox {...args} />
				</div>
			</div>
		</div>
	);
}

// Story props defaults
Checkbox.args = {
	id: 'uniqueId',
	label: 'Checkbox label',
	isSmall: false,
	isDisabled: false,
};

// Story props settings
Checkbox.argTypes = {};
