import React, { Fragment } from 'react';

const Score = ({ scoreValue, scoreContent, percentage, state, size }) => {

	const score = {};

	score.class = 'sui-score sui-score--loaded';

	// add class based on type
	switch (state) {
		case 'error':
		case 'warning':
		case 'success':
			score.class += ' sui-score--' + state;
			break;

		default:
			break;
	}

	// switch size of score element
	switch (size) {
		case 'large':
			score.class += ' sui-score--lg';
			break;

		default:
			break;
	}

	return (
		<Fragment>
			<div className={ score.class }>
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle strokeWidth="16" cx="50" cy="50" r="42"></circle>
					<circle
						strokeWidth="16"
						cx="50"
						cy="50"
						r="42"
						strokeDasharray="0,3943.4067435231395"
						style={{ animation: `3s ease 0s 1 normal forwards running sui${scoreValue}` }}
					></circle>
				</svg>
				<span className="sui-score--content">
					{scoreValue}
					{percentage && ( 
						<span className="sui-score--percentage">%</span>
					)}
					{' ' + scoreContent}
				</span>
				<span className="sui-screen-reader-text" tabIndex="0">{`Score ${scoreValue} out of 100`}</span>
			</div>
		</Fragment>
	);
};

// Publish required component.
export { Score }