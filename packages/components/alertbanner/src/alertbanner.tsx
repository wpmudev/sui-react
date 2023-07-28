import React, { Fragment, useState, useEffect, useCallback } from "react"

import { isEmpty, isFunction, generateCN } from "@wpmudev/sui-utils"

import { Button } from "@wpmudev/sui-button"
import { AlertProps } from "./alertbanner.types"

const AlertBanner: React.FC<AlertProps> = ({
	title,
	action,
	children,
	state = "info",
	timeIn,
	timeOut,
	isVisible = false,
	onClose,
}) => {
	const actions = Object.assign(
		{
			label: "",
			href: "",
			target: "_blank",
			onClick: () => null,
		},
		action,
	)

	const hasTitle = title && !isEmpty(title)
	const timeInValue = timeIn && timeIn >= 0
	const timeOutValue = timeOut && timeOut >= 0
	const hasAction = !isEmpty(actions.label)

	if (!hasTitle && !children) {
		throw new Error(
			`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Alert Banner\n\nThe "Title" and "Children" components require some value to be passed to it.\n\n`,
		)
	}

	// Display state
	const [display, setDisplay] = useState<boolean>(isVisible)

	// Run functions on load
	useEffect(() => {
		if (timeInValue) {
			setTimeout(() => setDisplay(true), timeIn)
		}

		if (timeOutValue) {
			setTimeout(() => setDisplay(false), timeOut)
		}
	}, [timeInValue, timeOutValue, setDisplay, timeIn, timeOut])

	const iconClassName = generateCN("suicons", {
		"check-alt": "success" === state,
		[state]: ["warning", "error", "info"].includes(state),
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
		(e: React.MouseEvent<HTMLButtonElement>) => {
			setDisplay(false)

			if (onClose) {
				onClose(e)
			}
		},
		[onClose],
	)

	return (
		<div {...attrs}>
			{display && (
				<Fragment>
					<span className={iconClassName} aria-hidden="true" />
					{children && (
						<span className="sui-alertbanner__content">{children}</span>
					)}
					<div className="sui-alertbanner__actions">
						{hasAction && (
							<Button
								{...(!isEmpty(actions.href) && { href: actions.href })}
								{...(!isEmpty(actions.target) && {
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
