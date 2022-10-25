import React, { Children, useState, useEffect } from "react";
import { Select } from "@wpmudev/docs-select";

// Build "switcher" component.
const Switcher = ({ children }) => {
	const [ selected, setSelected ] = useState( 0 );

	const options = Children.map( children, ( option, index ) => {
		return (
			<div
				key={ index }
				value={ option.props.value }
				label={ option.props.label } />
		);
	});

	const contents = Children.map( children, ( content, index ) => {
		useEffect( () => {
			if ( 0 === index ) {
				setSelected( content.props.value );
			}
		}, [] );

		// Hide content based on selected option.
		const hideContent = selected !== content.props.value && { hidden: 'hidden' };

		return (
			<div
				key={ index }
				className="csb-colors-switcher__content"
				{ ... hideContent }>
				{ content.props.children }
			</div>
		);
	});

	return (
		<div className="csb-colos-switcher">
			<Select onChange={ e => setSelected( e.target.value ) }>
				{ options }
			</Select>

			{ contents }
		</div>
	);
};

// Publish required component(s).
export { Switcher }
