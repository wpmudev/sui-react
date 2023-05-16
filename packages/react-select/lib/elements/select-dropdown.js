import React, { Fragment } from 'react';
import { Checkbox } from '@wpmudev/react-checkbox';
import { Icon } from './select-icon';
import { Input } from './select-input';

const Dropdown = ({
	options,
	onEvent,
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
					<div className="sui-select__list-empty">
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
								<Icon name={icon} />
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
		return (
			<Fragment>
				<div className="sui-select__list--search">
					<Icon name="search" />
					<Input placeholder="Search" {...props} />
				</div>
				<ul
					className="sui-select__list"
					role="listbox"
					aria-label="dropdown-options"
				>
					<li
						className="sui-select__list--option"
						onClick={selectAll}
						role="option"
					>
						<Checkbox label="Select all" />
					</li>
					{options.map(({ id, label, isSelected }) => (
						<li
							key={id}
							id={id}
							role="option"
							className="sui-select__list--option"
							onClick={() => onEvent(id, isSelected)}
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
