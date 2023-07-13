import React, { Fragment, useState, useEffect, useCallback } from "react"
import {
	isUndefined,
	isEmpty,
	isNumber,
	isFunction,
	generateCN,
} from "@wpmudev/react-utils"

import { Button } from "@wpmudev/react-button"
import { NotificationProps } from "./notification.types"
// import { IconButton } from "@wpmudev/react-icon-button"

const Notification: React.FC<NotificationProps> = ({
	id,
	title,
	action,
	children,
	state,
	timeIn,
	timeOut,
	isSmall = true,
	isInline = false,
	isVisible = false,
	isCloseButton = false,
	onClick,
}) => {
	// default state
	state = state ?? "info"

	const defaultActions = {
		label: "",
		href: "",
		target: "_blank",
		onClick: () => {},
	}

	const actions = {
		...defaultActions,
		...action,
	}

	// const hasId = !isUndefined(id) && !isEmpty(id)
	const hasTitle = !isUndefined(title) && !isEmpty(title)
	const hasContent = !isUndefined(children) && !isEmpty(children)
	const hasTimeIn = isNumber(timeIn) && timeIn > 0
	const hasTimeout = isNumber(timeOut) && timeOut > 0
	const hasAction = !isEmpty(actions.label)

	if (!hasTitle && !hasContent) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Notification\n\nThe "Title" and "Children" components require some value to be passed to it.\n\n`,
		)
	}

	// Display states
	const [display, setDisplay] = useState<boolean>(isVisible)

	// Run functions on load
	useEffect(() => {
		if (hasTimeIn) {
			setTimeout(() => setDisplay(true), timeIn)
		}

		if (hasTimeout) {
			setTimeout(() => setDisplay(false), timeOut)
		}
	}, [hasTimeIn, hasTimeout, timeIn, timeOut])

	// generate classnames
	const classNames = generateCN("sui-notification", {
		inline: isInline,
		toast: !isInline,
		empty: !isVisible,
		lg: !isSmall,
		[state]: ["success", "warning", "error", "info"].includes(state),
	})

	// generate icon classnames
	const iconClassNames = generateCN(
		"suicons",
		{
			"check-alt": ["success"].includes(state),
			warning: ["warning", "error"].includes(state),
			alt: !["warning", "error", "success"].includes(state),
		},
		"sui-notification__icon",
	)

	const wrapperAttrs = {
		role: hasTimeIn ? "alert" : "alertdialog",
		className: classNames,
		...(!hasTimeIn && { "aria-modal": true }),
		...(!hasTimeIn && { "aria-labelledby": "" }),
		...(!hasTimeIn && { "aria-describedby": "" }),
	}

	// on close
	const onClose = useCallback(
		(e) => {
			setDisplay(false)

			if (onClick) {
				onClick(e)
			}
		},
		[onClick],
	)

	return (
		<div {...wrapperAttrs}>
			{display && (
				<Fragment>
					<span className={iconClassNames} aria-hidden="true" />
					<div className="sui-notification__content">
						{hasTitle && (
							<span className="sui-notification__title">{title}</span>
						)}
						{hasContent && (
							<span className="sui-notification__message">{children}</span>
						)}
						{hasAction && (
							<Button
								{...(!isEmpty(actions.href) && { href: actions.href })}
								{...(!isEmpty(actions.href) && {
									target: actions.target,
								})}
								appearance="secondary"
								color="blue"
								isSmall={true}
								className="sui-notification__action"
								{...(isFunction(actions.onClick) && {
									onClick: actions.onClick,
								})}
							>
								{actions.label}
							</Button>
						)}
					</div>
					{/*{isCloseButton && (
						<IconButton
							icon="close"
							label="Close"
							appearance="tertiary"
							color="black"
							className="sui-notification__button"
							isSmall={true}
							onClick={onClose}
						/>
					)}*/}
				</Fragment>
			)}
		</div>
	)
}

export { Notification }
