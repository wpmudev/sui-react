import React from 'react';

// Import required component(s).
import { Select as Base } from './select-base';

// Build "Standard Select" component.
const SmartSearchSelect = ({ ...props }) => {
	return <Base isSearchable={true} isSmartSearch={true} {...props} />;
};

// Publish required component(s).
export { SmartSearchSelect };