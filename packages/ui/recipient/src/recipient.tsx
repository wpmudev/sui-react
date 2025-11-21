import React, { Fragment } from "react"
import { isEmpty, generateCN, _renderHTMLPropsSafely } from "@wpmudev/sui-utils"

import { Avatar } from "@wpmudev/sui-avatar"

import { RecipientName } from "./recipient-name"
import { RecipientEmail } from "./recipient-email"
import { RecipientButton } from "./recipient-button"

import { RecipientProps } from "./recipient.type"
import { useStyles } from "@wpmudev/sui-hooks"

// Build "recipient" component
const Recipient: React.FC<RecipientProps> = ({
	userName,
	userEmail,
	userImage,
	hideAvatar = false,
	placeholder = "No Avatar",
	className,
	status = "none",
	isInvited = false,
	appearance = "primary",
	actions,
	_htmlProps,
	_style,
}) => {
	const { suiInlineClassname } = useStyles(_style, className)

	// Define recipient class.
	const classes = generateCN(
		"sui-recipient",
		{
			// Define recipient appearance.
			[appearance as string]: !isEmpty(appearance ?? ""),
		},
		suiInlineClassname,
	)

	return (
		<div
			className={classes}
			data-testid="recipients"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-recipient__info">
				{hideAvatar && (
					<p className="sui-recipient__info--placeholder">{placeholder}</p>
				)}
				{!hideAvatar && (
					<Fragment>
						<Avatar
							className="sui-recipient__avatar"
							{...(!isEmpty(status) && { status })}
							{...(userImage?.src && { image: userImage })}
						/>
						{(!isEmpty(userName) || !isEmpty(userEmail)) && (
							<div className="sui-recipient__details">
								{!isEmpty(userName) && (
									<RecipientName>{userName}</RecipientName>
								)}
								{!isEmpty(userEmail) && (
									<RecipientEmail>{userEmail}</RecipientEmail>
								)}
							</div>
						)}
					</Fragment>
				)}
			</div>
			<div className="sui-recipient__actions">
				{!isInvited && !actions && (
					<RecipientButton
						className="sui-recipient__button"
						buttonProps={{
							icon: "Add",
						}}
					>
						Add recipient
					</RecipientButton>
				)}
				{isInvited && !actions && (
					<Fragment>
						<RecipientButton
							className="sui-recipient__button"
							buttonProps={{
								icon: "Submit",
							}}
						>
							Send recipient
						</RecipientButton>
						<RecipientButton
							className="sui-recipient__button"
							customWidth={120}
							buttonProps={{
								colorScheme: "red",
								icon: "Trash",
							}}
						>
							Remove recipient
						</RecipientButton>
					</Fragment>
				)}
				{actions}
			</div>
		</div>
	)
}

// Publish required component.
export { Recipient }
