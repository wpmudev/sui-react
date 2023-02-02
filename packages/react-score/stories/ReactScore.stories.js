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
	scoreValue,
	type,
	size,
	color
}) => {

	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: color !== 'white' ? '#fff' : '#333',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<div style={boxStyles}>
					<SuiScore scoreValue={ scoreValue } type={ type } size={ size } />
				</div>
			</div>
		</div>
	);
};

// Set story arguments.
Score.args = {
	scoreValue: 55,
	type: 'warning',
	size: 'default',
};

// Set controls for story arguments.
Score.argTypes = {
	scoreValue: {
		description: 'The score value to display.',
		control: {
			type: 'range',
			min: 0,
			max: 100,
			step: 1,
		},
	},
	type: {
		description: 'The scroes color variation according to type.',
		control: {
			type: 'select',
			options: ['error', 'warning', 'success'],
		},
	},
	size: {
		description: 'The scores component size.',
		control: {
			type: 'select',
			options: ['default', 'large'],
		},
	},
};

// Publish required stories.
export { Score };
