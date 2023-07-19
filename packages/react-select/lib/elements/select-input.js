import React, { useState, useEffect } from 'react';
import { Hint } from 'react-autocomplete-hint';

const InputWithAutoComplete = ({
	id,
	expanded = false,
	selected = '',
	dropdownItems,
	dropdownToggle = () => {},
	onChange = () => {},
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
		<Hint options={dropdownItems} allowTabFill>
			<input
				id={id}
				type="text"
				value={inputValue}
				className="sui-select__input"
				onClick={dropdownToggle}
				onChange={handleInputChange}
				aria-haspopup="listbox"
				aria-expanded={expanded}
				autoComplete="off"
				{...props}
			/>
		</Hint>
	);
};

export { InputWithAutoComplete };
