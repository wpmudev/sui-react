/**
 *
 * External Components
 *
 */
import React, { Children, useState, useEffect } from "react"

/**
 *
 * Internal Components
 *
 */
import Select from "../select/select"

interface SwitcherProps {
	children: JSX.Element[]
}

const Switcher: React.FunctionComponent<SwitcherProps> = ({ children }) => {
	const [selected, setSelected] = useState<string | null>()
	const [options, setOptions] = useState<React.ReactElement[] | null>()
	const [content, setContent] = useState<React.ReactElement | null>()

	useEffect(() => {
		const optionsElements: React.ReactElement[] = []

		Children.map(children, (element, index) => {
			// Initial Selected Value
			if (0 === index && !selected) {
				setSelected(element.props.value)
			}

			// Set displayed options
			optionsElements.push(
				<option
					key={index}
					value={element.props.value}
					label={element.props.label}
				/>,
			)
			setOptions(optionsElements)

			// Set displayed content
			if (selected === element.props.value) {
				setContent(
					<div key={index} className="csb-colors-switcher__content">
						{element.props.children}
					</div>,
				)
			}
		})
	}, [children, selected])

	return (
		<div className="csb-colos-switcher">
			{options && (
				<Select onChange={(e) => setSelected(e.target.value)}>{options}</Select>
			)}
			{content && content}
		</div>
	)
}

export default Switcher
