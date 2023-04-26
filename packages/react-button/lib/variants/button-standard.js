import React from 'react';

// Import required component(s).
import { Button as Base } from './button-base';

// Build "Standard Button" component.
const Button = ({ children, ...props }) => {
	return <Base {...props}>{children}</Base>;
};

// Publish required component(s).
export { Button };
