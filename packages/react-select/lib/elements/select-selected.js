import React from 'react';
import { isArray, isEmpty } from '@wpmudev/react-utils';
import { Icon } from './select-icon';
import { InputWithAutoComplete } from './select-input';

// Build "Select Selected" component.
const Selected = ({
	id,
	expanded = false,
	arrow,
	selected,
	selectLabel = '',
	isMultiselect = false,
	removeSelection = () => {},
	dropdownToggle = () => {},
	clearSelection = () => {},
	...props
}) => {
	// Prepare the selected content
	const selectedContent = isArray(selected) ? (
		selected.map(({ label, id }) => (
			<span className="sui-select--selected-options" key={id} onClick={(event) => event.stopPropagation()}>
				{label}
				<Icon name="close" onClick={() => removeSelection(id)} />
			</span>
		))
	) : (
		<span className="sui-select--selected">{selected}</span>
	);

	return (
		<div
			id={id}
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
				<Icon 
					name="close-alt"
					onClick={(event) => { 
						event.stopPropagation();
						clearSelection();
					}}
				/>
			)}
			<Icon name={arrow} />
		</div>
	);
};

const SelectedSearch = ({ arrow, isSmartSearch = false, selectLabel = '', clearSelection, ...props }) => {
	const { selected } = props;

	return (
		<div className="sui-select__selection">
			<InputWithAutoComplete placeholder="Search" {...props} />
			{isSmartSearch && <Icon name="search" />}
			{!isSmartSearch && <Icon name={arrow} />}
			{isSmartSearch && selected.length > 0 && (
				<Icon name="close-alt" onClick={clearSelection} />
			)}
		</div>
	);
};

export { Selected, SelectedSearch };
