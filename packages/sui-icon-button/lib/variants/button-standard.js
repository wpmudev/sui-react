import React from 'react';

// Import required component(s).
import { IconButton as Base } from './button-base';

// Build "Standard Button" component.
const IconButton = ({ children, ...props }) => {
	return <Base {...props}>{children}</Base>;
};

// Publish required component(s).
export { IconButton };
