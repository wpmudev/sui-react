/**
 * External Dependencies
 */
import React from "react"

/**
 * Internal Dependencies
 */
import { Section } from "../index"

interface PropSectionProps {
	title: string
	type: string
	defaultValue: string
	isRequired: boolean
	children: React.ReactNode
}

const PropSection: React.FunctionComponent<PropSectionProps> = ({
	title,
	type,
	defaultValue,
	isRequired = false,
	children,
}) => {
	return (
		<Section
			title={{
				content: title + (isRequired ? "*" : ""),
				tag: [
					{ content: type, color: "yellow", helperText: "type" },
					{
						content: defaultValue,
						color: "green",
						helperText: "default value",
					},
				],
				// @ts-ignore
				small: true,
			}}
			contained={true}
			style={{ paddingTop: 0, paddingLeft: 20, paddingRight: 0 }}
		>
			{children}
		</Section>
	)
}

export { PropSection }
