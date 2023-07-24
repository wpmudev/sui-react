import React, { Fragment, useState, useEffect, useCallback } from "react"

import {
	isUndefined,
	isEmpty,
	isNumber,
	isFunction,
	generateCN,
} from "@wpmudev/sui-utils"

import { Button } from "@wpmudev/sui-button"
import { AlertProps } from "./alertbanner.types"

const AlertBanner: React.FC<AlertProps> = ({
	id,
	title,
	action,
	children,
	state,
	timeIn,
	timeOut,
	isVisible = false,
	onClick,
}) => {
	const actions = Object.assign(
		{
			label: "",
			href: "",
			target: "_blank",
			onClick: "",
		},
		action,
	)

	// const hasId = !isUndefined(id) && !isEmpty(id)
	const hasTitle = !isUndefined(title) && !isEmpty(title)
	const hasContent = !isUndefined(children) && !isEmpty(children)
	const timeInValue = isNumber(timeIn) && timeIn >= 0
	const timeOutValue = isNumber(timeOut) && timeOut >= 0
	const hasAction = !isEmpty(actions.label)

	if (!hasTitle && !hasContent) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Alert Banner\n\nThe "Title" and "Children" components require some value to be passed to it.\n\n`,
		)
	}

	// Display states
	const [display, setDisplay] = useState<boolean>(isVisible)

	// Run functions on load
	useEffect(() => {
		if (timeInValue) {
			setTimeout(() => setDisplay(true), timeIn)
		}

		if (timeOutValue) {
			setTimeout(() => setDisplay(false), timeOut)
		}
	}, [])

	const iconClassName = generateCN("suicons", {
		"check-alt": ["success"].includes(state),
		warning: ["warning"].includes(state),
		error: ["error"].includes(state),
		info: !["success", "warning", "error"].includes(state),
		empty: !display,
	})

	const attrs = {
		role: timeInValue ? "alert" : "alertdialog",
		className: generateCN("sui-alertbanner", {
			[state ?? "info"]: ["success", "error", "warning", "info"].includes(
				state,
			),
			empty: !display,
		}),
		...(!timeInValue && { "aria-modal": true }),
		...(!timeInValue && { "aria-labelledby": "" }),
		...(!timeInValue && { "aria-describedby": "" }),
	}

	const handleOnClose = useCallback(
		(e) => {
			setDisplay(false)

			if (onClick) {
				onClick(e)
			}
		},
		[onClick],
	)

	return (
		<div {...attrs}>
			{display && (
				<Fragment>
					<span className={iconClassName} aria-hidden="true" />
					{hasContent && (
						<span className="sui-alertbanner__content">{children}</span>
					)}
					<div className="sui-alertbanner__actions">
						{hasAction && (
							<Button
								{...(!isEmpty(actions.href) && { href: actions.href })}
								{...(!isEmpty(actions.href) && {
									target: actions.target,
								})}
								appearance="secondary"
								color="blue"
								isSmall={true}
								className="sui-alertbanner__action"
								{...(isFunction(actions.onClick) && {
									onClick: actions.onClick,
								})}
							>
								{actions.label}
							</Button>
						)}
						<Button
							icon="close"
							appearance="tertiary"
							color="black"
							className="sui-alertbanner__button"
							isSmall={true}
							onClick={handleOnClose}
						/>
					</div>
				</Fragment>
			)}
		</div>
	)
}

export { AlertBanner }
