import React, { createElement, Fragment, useState, useEffect } from 'react';
import { Hint } from 'react-autocomplete-hint';

const InputWithAutoComplete = ({
	expanded,
	selected = '',
	dropdownOptions,
	dropdownToggle,
	onChange,
	...props
}) => {
	const [inputValue, setInputValue] = useState(selected);

	useEffect(() => {
		setInputValue(selected);
	}, [selected]);

	const handleInputChange = (event) => {
		onChange(event);
	};

	return (
		<Fragment>
			<Hint options={dropdownOptions} allowTabFill={true}>
				<input
					type="text"
					value={inputValue}
					className="sui-select__input"
					onClick={dropdownToggle}
					onChange={handleInputChange}
					aria-haspopup="listbox"
					aria-expanded={expanded}
					{...props}
				/>
			</Hint>
		</Fragment>
	);
};

const Input = ({ dropdownOptions, onChange, ...props }) => {
	const handleInputChange = (event) => {
		onChange(event);
	};

	return (
		<Fragment>
			<input
				type="text"
				className="sui-select__input"
				onChange={handleInputChange}
				{...props}
			/>
		</Fragment>
	);
};

export { Input, InputWithAutoComplete };
