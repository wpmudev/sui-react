import React from 'react';

export const Layout = ({ fullwidth = true, children }) => {
	const isFullWidth = fullwidth && fullwidth !== '' && fullwidth === true;

	return (
		<div className="sui-layout sui-layout--spacing sui-layout-md--spacing sui-layout-lg--spacing">
			{!isFullWidth && (
				<div className="sui-layout__content">{children}</div>
			)}
			{isFullWidth && <>{children}</>}
		</div>
	);
};
