/**
 *
 * External Dependencies
 *
 */
import React, { Children } from "react"

/**
 *
 * Internal Dependencies
 *
 */
import "./list.scss"
import { isEmpty, isUndefined } from "../../utils"

interface ListProps {
	id?: string
	title?: string
	children: JSX.Element[]
}

const List: React.FunctionComponent<
	ListProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLUListElement>,
			HTMLUListElement
		>
> = ({ id = "", title = "", children, ...props }) => {
	const items = Children.map(children, (item, index) => {
		const subitems = Children.map(item?.props.children, (subitem, subindex) => {
			return <li key={index + "-" + subindex}>{subitem.props.label}</li>
		})

		return (
			<li key={index}>
				{item?.props.label}
				{!isUndefined(item?.props.children) && (
					<ul className="csb-sublist">{subitems}</ul>
				)}
			</li>
		)
	})

	return (
		<>
			{!isEmpty(title) && (
				<h3 id={id} className="csb-list__title">
					{title}
				</h3>
			)}

			<ul
				className="csb-list"
				{...(!isEmpty(title) && { "aria-labelledby": id })}
				{...props}
			>
				{items}
			</ul>
		</>
	)
}

export default List
