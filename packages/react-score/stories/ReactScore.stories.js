import React from "react";

// Import required component.
import { Score as SuiScore } from '../lib/react-score';

// Import documentation main page.
import docs from './ReactScore.mdx';

// Configure default options.
export default {
	title: 'SUI/Components/Score',
	component: SuiScore,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build "Score" story.
const Score = ({
	scoreBar,
	scoreValue,
	scoreContent,
	percentage,
	state,
	size,
	color
}) => {

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333'
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiScore scoreBar={ scoreBar } scoreValue={ scoreValue } scoreContent={ scoreContent } percentage={ percentage } state={ state } size={ size } />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Score.args = {
	scoreBar: 55,
	scoreValue: 55,
	percentage: false,
	state: 'warning',
	size: 'large',
};

// Set controls for story arguments.
Score.argTypes = {
	scoreBar: {
		name: 'Circle Bar',
		description: 'The score circle.',
		table: {
			category: 'Elements'
		},
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1
		}
	},
	scoreValue: {
		name: 'Score Value',
		description: 'The score value to display.',
		table: {
			category: 'Elements'
		},
		control: 'number'
	},
	scoreContent: {
		name: 'Content',
		description: 'The score content to display.',
		control: 'text',
		table: {
			category: 'Elements'
		},
		if: {
			arg: 'size',
			eq: 'small'
		}
	},
	percentage: {
		name: 'Show Percentage',
		description: 'The percentage to display.',
		table: {
			category: 'Elements'
		}
	},
	state: {
		name: 'Type',
		description: 'The scroes color variation according to type.',
		table: {
			category: 'Modifiers'
		},
		control: {
			type: 'select',
			options: {
				'Type: Error': 'error',
				'Type: Warning': 'warning',
				'Type: Success': 'success'
			},
		},
	},
	size: {
		name: 'Size',
		description: 'The scores component size.',
		table: {
			category: 'Modifiers'
		},
		control: {
			type: 'select',
			options: {
				'Size: Small': 'small',
				'Size: Large': 'large'
			}
		},
	}
};

// Publish required stories.
export { Score };
