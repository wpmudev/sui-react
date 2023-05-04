const defineTag = (tag) => {
	// Define tag name
	let tagName = 'button';

	if (tag === 'link') {
		tagName = 'a';
	} else if (tag === 'label') {
		tagName = 'label';
	}

	return tagName;
};

export { defineTag };
