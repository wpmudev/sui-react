import React, { Fragment } from 'react';
import { isNull, isEmpty, isObject, isUndefined } from '@wpmudev/react-utils';

const Score = ({ scoreBar, scoreValue, scoreContent, percentage, state, size }) => {

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

	const hasValue = !isUndefined(scoreValue) && !isEmpty(scoreValue);

	return (
		<Fragment>
			<div className={ score.class }>
				<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
					<circle strokeWidth="12" cx="50" cy="50" r="42"></circle>
					<circle
						strokeWidth="12"
						cx="50"
						cy="50"
						r="42"
						strokeDasharray="0,3943.4067435231395"
						style={{ animation: `3s ease 0s 1 normal forwards running sui${scoreBar}` }}
					></circle>
				</svg>
				<span className="sui-score--content">
					{ ( hasValue ) ? scoreValue : scoreBar } 
					{ ( !isUndefined(percentage) && percentage ) && (
						<span className="sui-score--percentage">%</span>
					)}
					{ ( !isUndefined(scoreContent) && !isEmpty(scoreContent) ) && ' ' + scoreContent }
				</span>
				<span className="sui-screen-reader-text" tabIndex="0">{`Score ${ ( hasValue ) ? scoreValue : scoreBar } out of 100`}</span>
			</div>
		</Fragment>
	);
};

// Publish required component.
export { Score }