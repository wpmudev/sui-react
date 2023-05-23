const Search = ({ htmlFor, onChange, ...props }) => {
	const handleInputChange = (event) => {
		onChange(event);
	};

	return (
		<input
			id={htmlFor}
			type="text"
			className="sui-select__input"
			onChange={handleInputChange}
			autoComplete="off"
			{...props}
		/>
	);
};

export { Search };