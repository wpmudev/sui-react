import React, { Fragment } from 'react';
// import { Checkbox } from '@wpmudev/react-checkbox';
import { Checkbox } from '../../../react-checkbox/lib/react-checkbox';
import { Icon } from './select-icon';
import { Search } from './multiselect-search';

const Dropdown = ({
	options,
	onEvent = () => {},
	selectAll = () => {},
	isSmartSearch = false,
	isMultiselect = false,
	selected = '',
	...props
}) => {
	// Render options for the dropdown
	const renderOptions = () => {
		if (isSmartSearch && selected.length < 2) {
			// Render message when smart search is enabled but character count is insufficient
			return (
				<div className="sui-select__list">
					<div className="sui-select__list--empty">
						Please enter 2 or more characters
					</div>
				</div>
			);
		}

		// Render regular options
		return (
			<ul
				className="sui-select__list"
				role="listbox"
				aria-label="dropdown-options"
			>
				{options.map(
					({
						icon,
						id,
						label,
						isSelected,
						newLabel = label,
						boldLabel = '',
					}) => (
						<li
							key={id}
							id={id}
							role="option"
							tabIndex="0"
							className={`sui-select__list--option ${
								isSelected ? 'sui-select__list--selected' : ''
							}`}
							onClick={() => onEvent(id)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									onEvent(id);
								}
							}}
							{...props}
						>
							<Fragment>
								{icon && <Icon name={icon} />}
								<span>
									{boldLabel && <strong>{boldLabel}</strong>}
									{newLabel}
								</span>
							</Fragment>
						</li>
					)
				)}
			</ul>
		);
	};

	// Render options for the multiselect dropdown
	const renderMultiselectOptions = () => {
		const allSelected = options.every(option => option.isSelected);
		return (
			<Fragment>
				<div className="sui-select__list--search">
					<Icon name="search" />
					<Search placeholder="Search" {...props} />
				</div>
				<ul
					className="sui-select__list"
					role="listbox"
					aria-label="dropdown-options"
				>
					<li
						className="sui-select__list--option"
						role="option"
					>
						<Checkbox label="Select all" defaultValue={allSelected} onClick={selectAll} />
					</li>
					{options.map(({ id, label, isSelected }) => (
						<li
							key={id}
							id={id}
							role="option"
							className="sui-select__list--option"
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									onEvent(id, isSelected);
								}
							}}
						>
							<Checkbox
								id={id}
								label={label}
								defaultValue={isSelected}
								onClick={() => onEvent(id, isSelected)}
							/>
						</li>
					))}
				</ul>
			</Fragment>
		);
	};

	// Render the appropriate dropdown options based on isMultiselect
	return (
		<Fragment>
			{isMultiselect ? renderMultiselectOptions() : renderOptions()}
		</Fragment>
	);
};

export { Dropdown };
