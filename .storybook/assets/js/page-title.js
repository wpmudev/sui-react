import { addons } from '@storybook/manager-api';
import { STORY_RENDERED } from '@storybook/core-events';

addons.register( 'addonPageTitle', api => {
	const customTitle = 'Shared UI';
	let interval = null;

	const setTitle = () => {
		clearTimeout( interval );

		let storyData = null;

		try {
			storyData = api.getCurrentStoryData(); // Some time get error.
		} catch(e) {}

		let title, name;

		if ( ! storyData ) {
			title = customTitle;
		} else {
			/**
			 * @use storyData.kind to get story path.
			 * Eg. Group/SubGroup/MyStory
			 *
			 * @use storyData.name to get story name.
			 * @warning It only returns "Page" text for node type: "document".
			 * Eg. MyStory
			 */
			name = storyData.kind;
			name = name.replace( /SUI\/(.*)?/gs, '$1' );
			name = name.replace( /(.*)?\/Overview/gs, '$1' );
			name = name.replace( /\//gs, ' | ' );

			title = `${customTitle} | ${name}`;
		}

		document.title = title;

		interval = setTimeout( setTitle, 100 );
	};

	setTitle();

	api.on( STORY_RENDERED, story => {
		setTitle();
	});
});
