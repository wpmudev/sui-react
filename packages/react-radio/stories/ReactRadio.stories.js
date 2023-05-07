import React from 'react';

// Import required modules
import { Radio as SuiRadio } from '../lib/react-radio';

// Import documentation
import docs from './ReactRadio.mdx';

// Default settings
export default {
	title: 'SUI/Components/Form Elements/Radio',
	component: SuiRadio,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const Radio = ({...args}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiRadio {...args} />
				</div>
			</div>
		</div>
	);
}

// Story props defaults
Radio.args = {
	label: 'Radio label',
	isSmall: false,
	isDisabled: false,
};

// Story props settings
Radio.argTypes = {
	isChecked: {
		table: {
			disable: true
		}
	}
};
