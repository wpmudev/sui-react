import React, { useState, Fragment, Children } from "react";

// Import required components.
import dedent from "dedent";
import { Tag, Code } from '@wpmudev/storybook';
import docs from './IconsPack.mdx';

// Import required styles.
import '../sui-icons.css';
import './styles/icons-pack.scss';

export default {
	title: 'SUI/Icons Pack',
	parameters: {
		layout: 'fullscreen',
		docs: {
			page: docs,
		},
		interactions: {
			disabled: true,
		},
	},
};

const Primary = ({ category, search }) => {
	const groups = Object.keys( ListIcons ).map( ( group, groupIndex ) => {
		const catName = ListIcons[ group ].name;
		const objIcons = ListIcons[ group ].icons;

		const icons = Children.map( Object.keys( objIcons ), ( icon, iconIndex ) => {
			console.log( objIcons[icon].tags );

			return (
				<Fragment>
					{( 'all' === category || group === category ) && (
						<li key={`${ groupIndex }--${ iconIndex }`}>
							<div className="csb-icons__content">
								<IconsCard
									category={ catName }
									name={ objIcons[icon].name }
									alt={ objIcons[icon].alt }
									checked={ objIcons[icon].checked }
									id={ icon } />
							</div>
						</li>
					)}
				</Fragment>
			);
		});

		return (
			<Fragment key={ groupIndex }>
				{ icons }
			</Fragment>
		);
	} );

	return (
		<div className="sui-layout sui-layout--spacing sui-layout--justify">
			<div className="sui-layout__content">
				<ul className="csb-icons">
					{ groups }
				</ul>
			</div>
		</div>
	);
}

const IconsCard = ({ category, name, alt, checked, id }) => {
	const hasTagAlternative = 'boolean' === typeof alt;
	const hasTagChecked = 'boolean' === typeof checked;

	const sample = dedent`
<span class="sui-icon sui-icon--${ id }" aria-hidden="true"></span>
	`;

	return (
		<div className="csb-icon">
			<div className="csb-icon__preview">
				{( hasTagAlternative || hasTagChecked ) && (
					<div className="csb-icon__preview-mode">
						{( hasTagAlternative && alt ) && <Tag color="yellow">Alternative</Tag> }
						{ hasTagChecked && (
							<Fragment>
								{ checked
									? <Tag color="green" light={ true }>Check</Tag>
									: <Tag light={ true }>Uncheck</Tag>
								}
							</Fragment>
						)}
					</div>
				)}
				<div className="csb-icon__preview-icon">
					<span
						className={`sui-icon sui-icon--${ id }`}
						style={{ fontSize: 64 }} />
				</div>
			</div>

			<div className="csb-icon__data">
				<h2 className="csb-icon__category">
					{ category } / <span className="csb-icon__name">{ name }</span>
				</h2>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">SVG Name</h3>
					<Code theme="ghost" fullWidth={ true }>{ id }</Code>
				</div>

				<div className="csb-icon__data-block">
					<h3 className="csb-icon__data-title">HTML Code</h3>
					<Code
						fullWidth={ true }
						className="csb-icon__code">
						{ sample }
					</Code>
				</div>
			</div>
		</div>
	);
}

const ListIcons = {
	'products': {
		name: 'Products',
		icons: {
			'plugin-beehive': {
				name: 'Beehive'
			},
			'plugin-blc': {
				name: 'BLC'
			},
			'plugin-branda': {
				name: 'Branda'
			},
			'plugin-dashboard': {
				name: 'Dashboard'
			},
			'plugin-defender': {
				name: 'Defender'
			},
			'plugin-forminator': {
				name: 'Forminator'
			},
			'plugin-hummingbird': {
				name: 'Hummingbird'
			},
			'plugin-hustle': {
				name: 'Hustle'
			},
			'plugin-ivt': {
				name: 'IVT'
			},
			'plugin-shipper': {
				name: 'Shipper'
			},
			'plugin-smartcrawl': {
				name: 'SmartCrawl'
			},
			'plugin-smush': {
				name: 'Smush'
			},
			'plugin-snapshot': {
				name: 'Snapshot'
			},
			'hub': {
				name: 'The Hub'
			},
			'logo': {
				name: 'WPMU DEV'
			},
		},
	},
	'summary-box': {
		name: 'Summary Box',
		icons: {
			'chart': {
				name: 'Chart',
			},
			'chart-alt': {
				name: 'Chart',
				alt: true,
			},
			'video': {
				name: 'Video',
			},
			'link': {
				name: 'Link',
			},
			'shield': {
				name: 'Shield',
				checked: false,
			},
			'shield-check': {
				name: 'Shield',
				checked: true,
			},
			'form': {
				name: 'Form',
			},
			'performance': {
				name: 'Performance',
			},
			'email': {
				name: 'Email',
			},
			'package': {
				name: 'Package',
				checked: false,
			},
			'package-check': {
				name: 'Package',
				checked: true,
			},
			'cloud': {
				name: 'Cloud',
			},
		},
	},
	'status': {
		name: 'Status',
		icons: {
			'check': {
				name: 'Check',
			},
			'check-alt': {
				name: 'Check',
				alt: true,
			},
			'info': {
				name: 'Info',
			},
			'info-alt': {
				name: 'Info',
				alt: true,
			},
			'question': {
				name: 'Question',
			},
			'warning': {
				name: 'Warning',
			},
		},
	},
	'action': {
		name: 'Action',
		icons: {
			'close': {
				name: 'Close',
			},
			'close-alt': {
				name: 'Close',
				alt: true,
			},
			'add': {
				name: 'Add',
			},
			'upload': {
				name: 'Upload',
			},
			'compress': {
				name: 'Compress',
			},
			'settings': {
				name: 'Settings',
			},
			'refresh': {
				name: 'Refresh',
			},
			'trash': {
				name: 'Trash',
			},
			'trash-alt': {
				name: 'Trash',
				alt: true,
			},
			'fullscreen': {
				name: 'Fullscreen',
			},
			'stop': {
				name: 'Stop',
			},
			'save': {
				name: 'Save',
			},
			'cloud-add': {
				name: 'Cloud (Add)',
			},
			'more': {
				name: 'More',
			},
			'download': {
				name: 'Download',
			},
			'filter': {
				name: 'Filter',
			},
			'power-off': {
				name: 'Power Off',
			},
			'show': {
				name: 'Show',
			},
			'hide': {
				name: 'Hide',
			},
			'lock': {
				name: 'Lock',
			},
			'lock-alt': {
				name: 'Lock',
				alt: true,
			},
			'submit': {
				name: 'Submit',
			},
		},
	},
	'state': {
		name: 'State',
		icons: {
			'spinner': {
				name: 'Spinner',
			},
			'spinner-alt': {
				name: 'Spinner',
				alt: true,
			},
			'grip': {
				name: 'Grip',
			},
		},
	},
	'navigation': {
		name: 'Navigation',
		icons: {
			'arrow-up': {
				name: 'Arrow Up',
			},
			'arrow-down': {
				name: 'Arrow Down',
			},
			'arrow-left': {
				name: 'Arrow Left',
			},
			'arrow-right': {
				name: 'Arrow Right',
			},
			'chevron-up': {
				name: 'Chevron Up',
			},
			'chevron-down': {
				name: 'Chevron Down',
			},
			'chevron-left': {
				name: 'Chevron Left',
			},
			'chevron-right': {
				name: 'Chevron Right',
			},
			'caret-up': {
				name: 'Caret Up',
			},
			'caret-down': {
				name: 'Caret Down',
			},
			'caret-left': {
				name: 'Caret Left',
			},
			'caret-right': {
				name: 'Caret Right',
			},
			'rotate-left': {
				name: 'Rotate Left',
			},
			'rotate-right': {
				name: 'Rotate Right',
			},
			'exit': {
				name: 'Exit',
			},
		},
	},
	'social': {
		name: 'Social Media',
		icons: {
			'facebook': {
				name: 'Facebook',
			},
			'instagram': {
				name: 'Instagram',
			},
			'twitter': {
				name: 'Twitter',
			},
		},
	},
	'global': {
		name: 'Global',
		icons: {
			'image': {
				name: 'Image',
			},
			'images': {
				name: 'Images',
			},
			'file': {
				name: 'File',
				checked: false,
			},
			'file-check': {
				name: 'File',
				checked: true,
			},
			'file-code': {
				name: 'File Code',
			},
			'file-zip': {
				name: 'File Zip',
			},
			'desktop': {
				name: 'Desktop',
			},
			'mobile': {
				name: 'Mobile',
			},
			'folder-close': {
				name: 'Folder (Close)',
			},
			'folder-open': {
				name: 'Folder (Open)',
			},
			'globe': {
				name: 'Globe',
			},
			'like': {
				name: 'Like',
			},
			'like-alt': {
				name: 'Like',
				alt: true,
			},
			'dislike': {
				name: 'Dislike',
			},
			'dislike-alt': {
				name: 'Dislike',
				alt: true,
			},
			'user': {
				name: 'User',
			},
			'user-alt': {
				name: 'User',
				alt: true,
			},
			'edit': {
				name: 'Edit',
			},
			'tutorials': {
				name: 'Tutorials',
			},
			'docs': {
				name: 'Docs',
			},
			'tools': {
				name: 'Tools',
			},
			'config': {
				name: 'Config',
			},
			'bell': {
				name: 'Bell',
			},
			'plugin': {
				name: 'Plugin',
			},
			'lifesaver': {
				name: 'Lifesaver',
			},
			'compress-alt': {
				name: 'Compress',
				alt: true,
			},
			'calendar': {
				name: 'Calendar',
			},
			'cart': {
				name: 'Cart',
			},
			'rss': {
				name: 'RSS',
			},
			'code': {
				name: 'Code',
			},
			'server': {
				name: 'Server',
			},
			'search': {
				name: 'Search',
			},
			'menu': {
				name: 'Menu',
			},
			'emoji': {
				name: 'Emoji',
			},
		},
	},
}

Primary.storyName = 'Icons Pack';
Primary.args = {
	category: 'all',
}
Primary.argTypes = {
	category: {
		name: 'Category',
		control: {
			type: 'select',
			options: {
				'All Categories': 'all',
				Products: 'products',
				'Summary Box': 'summary-box',
				Status: 'status',
				Action: 'action',
				State: 'state',
				Navigation: 'navigation',
				'Social Media': 'social',
				Global: 'global',
			},
		},
	},
}

export { Primary }
