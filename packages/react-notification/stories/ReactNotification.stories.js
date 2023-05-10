import React, { useState, useEffect, Fragment } from 'react';

// Import required component(s)
import { Notification as SuiNotification } from '../lib/react-notification';

// Import documentation main page
import docs from './ReactNotification.mdx';

// Configure default options
export default {
	title: 'SUI/Components/Compound Elements/Notification',
	component: SuiNotification,
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
	},
};

// Build story
export const Notification = ({ example, ...props }) => {
	const box = {
		margin: '0 0 20px',
		padding: '30px',
		border: '1px solid #E6E6E6',
		borderRadius: '4px',
		background: '#fff',
	};

	return (
		<div className="sui-layout sui-layout--horizontal sui-layout--vertical">
			<div className="sui-layout__content">
				{'toast' === example && (
					<SuiNotification { ...props } />
				)}

				<div style={box}>
					<p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui.</p>
					<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
					{'inline' === example && (
						<SuiNotification isInline={true} isVisible={true} { ...props } />
					)}
				</div>
			</div>
		</div>
	);
};

Notification.args = {
	example: 'toast',
	title: 'Toast title',
	children: 'This is a toast message.',
	action: {
		label: 'Action',
		href: '',
		target: '_blank',
		onClick: ''
	},
	state: '',
	isSmall: true,
	isVisible: true,
	isCloseButton: false
};

Notification.argTypes = {
	example: {
		name: 'Example',
		control: {
			type: 'select',
			options: {
				'Example: Toast': 'toast',
				'Example: Inline Notice': 'inline',
			}
		}
	},
	state: {
		name: 'State',
		control: {
			type: 'select',
			options: {
				'Informative': '',
				'Success': 'success',
				'Warning': 'warning',
				'Error': 'error',
			},
		},
	},
	isInline: {
		table: {
			disable: true
		}
	},
	isVisible: {
		table: {
			disable: true
		}
	},
	isCloseButton: {
		name: 'Show Button'
	}
};
