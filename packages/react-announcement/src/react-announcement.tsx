import React, {
	Fragment,
	useState,
	useEffect,
	HTMLProps,
	useId,
	useCallback,
} from "react"

import {
	isUndefined,
	isEmpty,
	isNumber,
	generateCN,
} from "@wpmudev/react-utils"

import { IconButton } from "@wpmudev/react-icon-button"

interface AnnouncementPropTypes
	extends Pick<HTMLProps<HTMLDivElement>, "onClick"> {
	id: string
	children?: React.ReactNode
	timeIn: number
	timeOut: number
	isDark: boolean
	isVisible: boolean
}

const Announcement = ({
	id,
	children,
	timeIn,
	timeOut,
	isDark = false,
	isVisible = false,
	onClick,
}: AnnouncementPropTypes) => {
	// generate dynamic ID
	let uuid = useId()

	if (!!id) {
		uuid = id
	}

	// const hasId = !isUndefined(uuid) && !isEmpty(uuid)
	const hasContent = !isUndefined(children) && !isEmpty(children)
	const hasTimeIn = isNumber(timeIn) && timeIn >= 0
	const hasTimeout = isNumber(timeOut) && timeOut >= 0

	// if (!has.title && !has.content) {
	// 	throw new Error(
	// 		`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Announcement\n\nThe "Title" and "Children" components require some value to be passed to it.\n\n`,
	// 	)
	// }

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

	const classNames = generateCN("sui-announcement", {
		dark: isDark,
		empty: !display,
	})

	const props = {
		id: uuid,
		classNames,
		role: hasTimeIn ? "alert" : "alertdialog",
		...(!hasTimeIn && { "aria-modal": true }),
		...(!hasTimeIn && { "aria-labelledby": "" }),
		...(!hasTimeIn && { "aria-describedby": "" }),
	}

	/**
	 * On close callback
	 *
	 * @type {React.SyntheticEvent}
	 */
	const onClose = useCallback(
		(e: any) => {
			setDisplay(false)

			if (onClick) {
				onClick(e)
			}
		},
		[onClick],
	)

	return (
		<div {...props}>
			{display && (
				<Fragment>
					{hasContent && (
						<span className="sui-announcement__content">{children}</span>
					)}
					<IconButton
						icon="close"
						label="Close"
						appearance="tertiary"
						color="white"
						className="sui-announcement__button"
						isSmall={true}
						onClick={onClose}
					/>
				</Fragment>
			)}
		</div>
	)
}

export { Announcement, AnnouncementPropTypes }
