import React from 'react';
import { isArray } from '@wpmudev/react-utils';
import { Icon } from './select-icon';
import { InputWithAutoComplete } from './select-input';

// Build "Select Selected" component.
const Selected = ({
	expanded,
	dropdownToggle,
	selected = '',
	selectLabel = '',
	clearSelection,
	isMultiselect = false,
	removeSelection = () => {},
	arrow,
	...props
}) => {
	// Prepare the selected content
	const selectedContent = isArray(selected) ? (
		selected.map(({ label, id }) => (
			<span className="sui-select--selected-options" key={id}>
				{label}
				<Icon name="close" onClick={() => removeSelection(id)} />
			</span>
		))
	) : (
		<span className="sui-select--selected">{selected}</span>
	);

	return (
		<div
			className="sui-select__selection"
			onClick={dropdownToggle}
			onKeyDown={(e) => {
				if (e.key === 'Enter') {
					dropdownToggle();
				}
			}}
			tabIndex="0"
			aria-haspopup="listbox"
			aria-expanded={expanded}
			{...props}
		>
			{selectedContent}
			{isMultiselect && selectLabel !== selected && (
				<Icon name="close-alt" onClick={clearSelection} />
			)}
			<Icon name={arrow} />
		</div>
	);
};

const SelectedSearch = ({ arrow, isSmartSearch, clearSelection, ...props }) => {
	const { selected, selectLabel } = props;

	return (
		<div className="sui-select__selection">
			<InputWithAutoComplete placeholder="Search" {...props} />
			{isSmartSearch && <Icon name="search" />}
			{!isSmartSearch && <Icon name={arrow} />}
			{isSmartSearch && selectLabel !== selected && (
				<Icon name="close-alt" onClick={clearSelection} />
			)}
		</div>
	);
};

export { Selected, SelectedSearch };
