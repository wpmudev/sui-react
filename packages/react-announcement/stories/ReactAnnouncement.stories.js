import React, { Fragment } from 'react';

// Import required component(s)
import { Announcement as SuiAnnouncement } from '../lib/react-announcement';
import { Box, BoxGroup } from '@wpmudev/react-box';

// Import documentation main page
import docs from './ReactAnnouncement.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Announcement',
	component: SuiAnnouncement,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const Announcement = ({ ...props }) => {
	return (
		<Fragment>
			<div className="sui-layout">
				<SuiAnnouncement isVisible={true} {...props}>
					<strong>Big Day!</strong> Display this banner for general announcement and upsells for all plugins.
				</SuiAnnouncement>
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

Announcement.args = {
	isDark: false,
	isVisible: true,
};

Announcement.argTypes = {};
