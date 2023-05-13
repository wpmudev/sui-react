import React, { Fragment } from 'react';

// Import required component(s)
import { AlertBanner as SuiAlertBanner } from '../lib/react-alertbanner';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation main page
import docs from './ReactAlertBanner.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Alert Banner',
	component: SuiAlertBanner,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const AlertBanner = ({ ...props }) => {
	return (
		<Fragment>
			<div className="sui-layout">
				<SuiAlertBanner appearance="info" isVisible={true} {...props}>
					<strong>Important!</strong> This is example content for information. <a href="#">Add link</a> if necessary.
				</SuiAlertBanner>
			</div>
			<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
				<div className="sui-layout__content">
					<Box>
						<BoxGroup isInline={false}>
							<p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Vestibulum id ligula porta felis euismod semper.</p>
						</BoxGroup>
					</Box>
				</div>
			</div>
		</Fragment>
	);
};

AlertBanner.args = {
	state: ''
};

AlertBanner.argTypes = {
	state: {
		name: 'Status',
		control: {
			type: 'select',
			options: {
				'Default': '',
				'Success': 'success',
				'Warning': 'warning',
				'Error': 'error',
			},
		},
	}
};
