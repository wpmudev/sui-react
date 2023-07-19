import React from 'react';

// Import documentation main page.
import docs from './content/Grid/Main.mdx';

// Import required depdendencies.
import { Grid as SuiGrid } from './components/Grid/Grid';
import { Grid as DynamicGrid } from './components/Grid/DynamicGrid';
import { Block } from './components/Grid/Block';

// Configure default options.
export default {
	title: 'SUI/CSS Framework/Grid',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
		actions: {
			disable: true,
		},
	},
};

// List alignment options.
const Options = ['stacked', 'inline'];
const Labels = {
	stacked: 'Stacked',
	inline: 'Inline',
};

// Build "Grid" story.
const Grid = ({
	size,
	alignDefault,
	alignSmall,
	alignMedium,
	alignLarge,
	alignExtraLarge,
}) => {
	const align = {
		xs: alignDefault,
		sm: alignSmall,
		md: alignMedium,
		lg: alignLarge,
		xl: alignExtraLarge,
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<DynamicGrid alignment={align} size={size} />
				<SuiGrid alignment={align}>
					<div>
						<Block
							container={true}
							color="blue"
							title=".sui-col (auto sizing)"
						>
							<DynamicGrid alignment={align} size={size} />
						</Block>
					</div>
					<div>
						<Block
							container={true}
							color="blue"
							title=".sui-col (auto sizing)"
						>
							<Block color="blue" />
						</Block>
					</div>
				</SuiGrid>
				<div
					style={{ padding: 30, borderRadius: 4, background: '#fff' }}
				>
					<DynamicGrid alignment={align} size={size} />
				</div>
			</div>
		</div>
	);
};
Grid.args = {
	size: 8,
	alignDefault: 'stacked',
	alignSmall: 'stacked',
	alignMedium: 'inline',
	alignLarge: 'inline',
	alignExtraLarge: 'inline',
};
Grid.argTypes = {
	size: {
		name: 'Column Size',
		control: {
			type: 'range',
			min: 1,
			max: 12,
		},
	},
	alignDefault: {
		name: 'Alignment (Default)',
		options: Options,
		control: {
			type: 'inline-radio',
			labels: Labels
		},
	},
	alignSmall: {
		name: 'Alignment (≥ 600px)',
		options: Options,
		control: {
			type: 'inline-radio',
			labels: Labels
		},
	},
	alignMedium: {
		name: 'Alignment (≥ 1024px)',
		options: Options,
		control: {
			type: 'inline-radio',
			labels: Labels
		},
	},
	alignLarge: {
		name: 'Alignment (≥ 1200px)',
		options: Options,
		control: {
			type: 'inline-radio',
			labels: Labels
		},
	},
	alignExtraLarge: {
		name: 'Alignment (≥ 1600px)',
		options: Options,
		control: {
			type: 'inline-radio',
			labels: Labels
		},
	},
};

// Publish required stories.
export { Grid };
