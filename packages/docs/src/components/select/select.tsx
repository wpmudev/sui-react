/**
 *
 * External Dependencies
 *
 */
import React, { Children } from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 *
 * Internal Dependencies
 *
 */
import "./select.scss"

interface SelectType {
	small?: boolean
	children: JSX.Element[]
}

const Select: React.FunctionComponent<
	SelectType &
		React.DetailedHTMLProps<
			React.SelectHTMLAttributes<HTMLSelectElement>,
			HTMLSelectElement
		>
> = ({ small = false, children, ...props }) => {
	const options = Children.map(children, (item, index) => {
		return (
			<option key={index} value={item?.props.value}>
				{item?.props.label}
			</option>
		)
	})

	const selectClasses = classnames({
		"csb-select": true,
		"csb-select--sm": small,
	})

	return (
		<select className={selectClasses} {...props}>
			{options}
		</select>
	)
}

export default Select
