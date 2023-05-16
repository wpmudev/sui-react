import React, { useState, useEffect } from 'react';
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
		<Hint options={dropdownOptions} allowTabFill>
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
	);
};

const Input = ({ onChange, ...props }) => {
	const handleInputChange = (event) => {
		onChange(event);
	};

	return (
		<input
			type="text"
			className="sui-select__input"
			onChange={handleInputChange}
			{...props}
		/>
	);
};

export { Input, InputWithAutoComplete };
