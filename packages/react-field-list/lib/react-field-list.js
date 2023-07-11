import React, { Children } from 'react';
import { isUndefined, isEmpty } from '@wpmudev/react-utils';

// Import required components
import { Toggle } from '@wpmudev/react-toggle';

// Build "field list" component
const FieldList = ({ label, helper, children }) => {
	const has = {};

	// Props validation
	has.label = !isUndefined(label) && !isEmpty(label) ? true : false;
	has.helper = !isUndefined(helper) && !isEmpty(helper) ? true : false;

	return (
		<div className="sui-field-list">
			{(has.label || has.helper) && (
				<div className="sui-field-list__row">
					{has.label && (
						<h3 className="sui-heading sui-heading--h4 sui-field-list__title">
							{label}
						</h3>
					)}
					{has.helper && (
						<p className="sui-field-list__helper">{helper}</p>
					)}
				</div>
			)}

			{Children.map(children, (child, index) => {
				return (
					<div
						id={`${child.props.id}--${index}`}
						key={index}
						className="sui-field-list__row sui-field-list__row-inline"
						{...child.props}
					>
						{child.props.label}

						<Toggle
							id={child.props.id}
							label={child.props.label}
							isLabelHidden={true}
						/>
					</div>
				);
			})}
		</div>
	);
};

// Publish component(s)
export { FieldList };
