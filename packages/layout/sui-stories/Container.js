import React from 'react';

export const Layout = ({ fullwidth, justify, spacing, children }) => {
	const isFullWidth = fullwidth && fullwidth === true;
	const isJustify = justify && justify === true;
	const isSpacing = spacing && spacing === true;

	let classLayout = 'sui-layout';

	if (isJustify) {
		classLayout += ' sui-layout--justify';
	}

	if (isSpacing) {
		classLayout += ' sui-layout--spacing';
	}

	return (
		<div className={classLayout}>
			{/* <div className="sui-layout sui-layout--spacing sui-layout-md--spacing sui-layout-lg--spacing"> */}
			{!isFullWidth && (
				<div className="sui-layout__content">{children}</div>
			)}
			{isFullWidth && <>{children}</>}
		</div>
	);
};
