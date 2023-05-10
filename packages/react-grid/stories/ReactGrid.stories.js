import React from "react";

// Import modules
import { Row, Col } from '../lib/react-grid';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation
import docs from './ReactGrid.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Core Elements/Grid',
	component: Row,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const Grid = ({inline}) => {
	const boxStyles = {
		padding: 20,
		borderRadius: 4,
		background: '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				<Row align={{md: inline ? 'inline' : ''}}>
					<Col size="4">
						<Box>
							<BoxGroup>
								<p>Column 1</p>
							</BoxGroup>
						</Box>
					</Col>
					<Col size="4">
						<Box>
							<BoxGroup>
								<p>Column 2</p>
							</BoxGroup>
						</Box>
					</Col>
					<Col size="4">
						<Box>
							<BoxGroup>
								<p>Column 3</p>
							</BoxGroup>
						</Box>
					</Col>
				</Row>
			</div>
		</div>
	);
}

// Set story arguments
Grid.args = {
	inline: true
}

// Set controls for story arguments
Grid.argTypes = {
	inline: {
		name: 'Inline'
	}
}
