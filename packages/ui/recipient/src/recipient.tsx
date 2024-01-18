import React, { Fragment } from "react"
import { isEmpty, generateCN } from "@wpmudev/sui-utils"

import { Avatar } from "@wpmudev/sui-avatar"

import { RecipientName } from "./recipient-name"
import { RecipientEmail } from "./recipient-email"
import { RecipientButton } from "./recipient-button"

import { RecipientProps } from "./recipient.type"

// Build "recipient" component
const Recipient: React.FC<RecipientProps> = ({
	userName = "",
	userEmail = "",
	userImage,
	status = "none",
	isInvited = false,
	appearance,
	...props
}) => {
	// Define recipient class.
	const className = generateCN("sui-recipient", {
		// Define recipient appearance.
		[appearance as string]: !isEmpty(appearance ?? ""),
	})

	return (
		<div className={className} {...props}>
			<div className="sui-recipient__info">
				<Avatar
					className="sui-recipient__avatar"
					{...(!isEmpty(status) && { status })}
					{...(userImage?.src && { image: userImage })}
				/>
				{(!isEmpty(userName) || !isEmpty(userEmail)) && (
					<div className="sui-recipient__details">
						{!isEmpty(userName) && <RecipientName>{userName}</RecipientName>}
						{!isEmpty(userEmail) && (
							<RecipientEmail>{userEmail}</RecipientEmail>
						)}
					</div>
				)}
			</div>
			<div className="sui-recipient__actions">
				{!isInvited && (
					<RecipientButton
						className="sui-recipient__button"
						icon="Add"
						color="black"
					>
						Add recipient
					</RecipientButton>
				)}
				{isInvited && (
					<Fragment>
						<RecipientButton
							className="sui-recipient__button"
							icon="Submit"
							color="black"
						>
							Send recipient
						</RecipientButton>
						<RecipientButton
							className="sui-recipient__button"
							icon="Trash"
							color="red"
						>
							Delete recipient
						</RecipientButton>
					</Fragment>
				)}
			</div>
		</div>
	)
}

// Publish required component.
export { Recipient }
