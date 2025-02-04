import React, {
	forwardRef,
	useId,
	useState,
	useEffect,
	useLayoutEffect,
	useCallback,
	useRef,
} from "react"

import { useStyles } from "@wpmudev/sui-hooks"
import Icons, { IconsNamesType } from "@wpmudev/sui-icons"
import { generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"
import { IconProps } from "@wpmudev/sui-icon"
import { Tooltip } from "@wpmudev/sui-tooltip"
import { Tag } from "@wpmudev/sui-tag"

// Popover component
const TemplateCardContent = ({
	id,
	title = "",
	description = "",
	tag,
	icon = "File",
	src,
	imgProps = {},
	actions = [],
}) => {
	const titleRef = useRef<HTMLDivElement | null>(null)
	const descriptionRef = useRef<HTMLDivElement | null>(null)
	const [isTitleOverflow, setIsTitleOverflow] = useState(false)
	const [isDescriptionOverflow, setIsDescriptionOverflow] = useState(false)

	const IconTag: React.ComponentType<IconProps> = Icons[icon as IconsNamesType]

	// Check if title overflows (more then 1 lines)
	useLayoutEffect(() => {
		if (titleRef.current) {
			const lineHeight = parseFloat(
				window.getComputedStyle(titleRef.current).lineHeight,
			)
			const maxHeight = lineHeight * 1 // Allow max 2 lines
			setIsTitleOverflow(titleRef.current.scrollHeight > maxHeight)
		}
	}, [title])

	// Check if description overflows (more than 2 lines)
	useLayoutEffect(() => {
		if (descriptionRef.current) {
			const lineHeight = parseFloat(
				window.getComputedStyle(descriptionRef.current).lineHeight,
			)
			const maxHeight = lineHeight * 2 // Allow max 2 lines
			setIsDescriptionOverflow(descriptionRef.current.scrollHeight > maxHeight)
		}
	}, [description])

	return (
		<>
			<div className="sui-template-card__hero">
				{tag && <Tag isSmall={true} isUppercase={true} {...tag} />}
				<div className="sui-template-card__hero-media">
					{IconTag && (
						<div className="sui-template-card__hero-icon">
							<IconTag size={"md"} />
						</div>
					)}
					{src && <img src={src} alt="Card hero" {...imgProps} />}
				</div>
				{actions && <div className="sui-template-card__actions">{actions}</div>}
			</div>
			{(title || description) && (
				<div className="sui-template-card__content">
					{title && isTitleOverflow ? (
						<Tooltip
							type="text"
							label={title}
							customWidth={216}
							className="sui-heading--h5 sui-template-card__heading"
						>
							{title}
						</Tooltip>
					) : (
						<h5
							ref={titleRef}
							className="sui-heading--h5 sui-template-card__heading"
						>
							{title}
						</h5>
					)}
					{description && isDescriptionOverflow ? (
						<Tooltip
							type="text"
							label={description}
							customWidth={216}
							className="sui-template-card__body"
						>
							{description}
						</Tooltip>
					) : (
						<p ref={descriptionRef} className="sui-template-card__body">
							{description}
						</p>
					)}
				</div>
			)}
		</>
	)
}

// Publish required component.
export { TemplateCardContent }
