/**
 *
 * External Dependencies
 *
 */
import React from "react"
// eslint-disable-next-line import/no-extraneous-dependencies
import classnames from "classnames"

/**
 *
 * Internal Dependencies
 *
 */
import Tag from "../tag/tag"
import "./header.scss"
import { isEmpty } from "../../utils"

interface HeaderProps {
	title: string
	border: boolean
	status?: "planned" | "draft" | "ready" | "dead"
}

const Header: React.FunctionComponent<
	HeaderProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ title, border, status, ...props }) => {
	let statusName: string
	let statusDesc: string
	let statusColor: "" | "yellow" | "blue" | "red" | "green"

	switch (status) {
		case "planned":
			statusName = "Planned"
			statusDesc = "Planned, not ready for use"
			statusColor = ""
			break

		case "draft":
			statusName = "Draft"
			statusDesc = "Draft, still in development mode"
			statusColor = "yellow"
			break

		case "ready":
			statusName = "Ready"
			statusDesc = "Ready, can be used in production"
			statusColor = "blue"
			break

		case "dead":
			statusName = "Deprecated"
			statusDesc = "Deprecated, soon to be removed"
			statusColor = "red"
			break

		default:
			statusName = ""
			statusColor = ""
			statusDesc = ""
			break
	}

	const headerClass = classnames({
		"csb-header": true,
		"csb-header--border": border,
		"csb-header--status": status && !isEmpty(statusName),
	})

	return (
		<div className={headerClass} {...props}>
			<h1 className="csb-header__title">
				{title}

				{status && !isEmpty(statusName) && (
					<Tag
						id={`page-status--${status}`}
						color={statusColor}
						light={true}
						uppercase={true}
						tooltip={statusDesc}
					>
						{statusName}
					</Tag>
				)}
			</h1>
		</div>
	)
}

export default Header
