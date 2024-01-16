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
import { isEmpty } from "../../utils"
import "./section.scss"

type TagType =
	| string
	| {
			content: string
			helperText?: string
			color: "" | "yellow" | "blue" | "red" | "green"
	  }[]

interface SectionProps {
	title?:
		| string
		| {
				content: string
				date?: string
				tag?: TagType
				small: boolean
		  }
	border?: boolean
	container?: boolean
	contained?: boolean
	children: React.ReactNode
}

const Section: React.FunctionComponent<
	SectionProps &
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
> = ({ title = "", border, container, contained, children, ...props }) => {
	const sectionClass = classnames({
		"csb-section": true,
		"csb-section--border": !!border,
	})

	const renderTags = (tag: TagType) => {
		if (!tag) {
			return null
		}

		if (typeof tag === "string") {
			if (!isEmpty(tag)) {
				return <Tag color="yellow">{tag}</Tag>
			}

			return null
		}

		if (Array.isArray(tag) && tag.length > 0) {
			return tag.map((el, index) =>
				el.content ? (
					<Tag
						key={index}
						color={el.color}
						{...(el.helperText && { tooltip: el.helperText })}
					>
						{el.content}
					</Tag>
				) : null,
			)
		}

		return null
	}

	const getTitle = () => {
		if ("object" === typeof title) {
			const objTitle = Object.assign(
				{
					content: "",
					date: "",
					tag: "",
					small: false,
				},
				title as Record<string, any>,
			)

			const titleClass = classnames({
				"csb-section__title": true,
				"csb-section__title--sm": objTitle.small,
				"csb-section__title-tag":
					!isEmpty(objTitle.date) || !isEmpty(objTitle.tag),
			})

			return (
				<h2 className={titleClass}>
					{objTitle.content}
					{!isEmpty(objTitle.date) && <Tag color="blue">{objTitle.date}</Tag>}
					{renderTags(objTitle.tag)}
				</h2>
			)
		}

		return <h2 className="csb-section__title">{title}</h2>
	}

	if (!!container) {
		return (
			<div className={sectionClass} {...props}>
				<div className="csb-section__inner">
					{contained && (
						<div className="csb-section__contained">
							{!!title && getTitle()}
							{children}
						</div>
					)}

					{!contained && (
						<>
							{!!title && getTitle()}
							{children}
						</>
					)}
				</div>
			</div>
		)
	}

	return (
		<div className={sectionClass} {...props}>
			{contained && (
				<div className="csb-section__contained">
					{!!title && getTitle()}
					{children}
				</div>
			)}

			{!contained && (
				<>
					{!!title && getTitle()}
					{children}
				</>
			)}
		</div>
	)
}

export default Section
