/**
 *
 * External dependencies
 *
 */
import React, { Children, useState } from "react"

/**
 *
 * Internal dependencies
 *
 */
import Section from "../section/section"
import "./tabs.scss"

interface TabsProps {
	label?: React.ReactNode
	children: JSX.Element[]
}

const Tabs: React.FunctionComponent<
	TabsProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ label, children, ...props }) => {
	const [selected, setSelected] = useState(0)

	const menuItems = Children.map(children, (item, index) => {
		const isSelected = selected === index

		return (
			<button
				key={`tab-button--${index}`}
				id={`tabmenu__${item?.props.id}`}
				className="csb-tabs__button"
				type="button"
				role="tab"
				aria-selected={isSelected}
				aria-controls={`tabpanel__${item?.props.id}`}
				{...(!isSelected && { tabIndex: -1 })}
				onClick={() => setSelected(index)}
			>
				<span className="csb-tabs__button-label">
					<span className="csb-tabs__button-text">{item?.props.label}</span>
				</span>
			</button>
		)
	})

	const panelItems = Children.map(children, (item, index) => {
		const isSelected = selected === index

		return (
			<div
				key={`tab-content--${index}`}
				id={`tabpanel__${item?.props.id}`}
				className="csb-tabs__panel"
				role="tabpanel"
				aria-labelledby={`tabmenu__${item?.props.id}`}
				{...(!isSelected && { hidden: true })}
			>
				{item?.props.children}
			</div>
		)
	})

	return (
		<div role="tablist" className="csb-tabs" {...props}>
			<Section border={true} style={{ paddingTop: 0, paddingBottom: 0 }}>
				<div className="csb-tabs__menu">{menuItems}</div>
			</Section>

			{!!label && (
				<Section contained={true}>
					<p className="csb-page__title">{label}</p>
				</Section>
			)}

			{panelItems}
		</div>
	)
}

export default Tabs
