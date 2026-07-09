// Type definition for the props of the Modal component
import React, { HTMLProps } from "react"
import { IconsNamesType } from "@wpmudev/sui-icons"
import { SuiHTMLAttributes, SuiStyleType } from "@wpmudev/sui-utils"

type ModalProps = {
	id?: string // ID for the modal element
	variant?: "simple" | "advanced" | "app-connect" // Variant type of the modal
	size?: "sm" | "md" | "lg" | "xl" // Size of the modal (small, medium, large, extra-large)
	children?: React.ReactNode // Content of the modal (React children)
	onCloseModal?: () => void // callback function to be called upon closing the modal
	ref: object // Used to access the open and close modals of the modal
} & SuiStyleType &
	SuiHTMLAttributes

// Type definition for the modal handling functions
type ModalActionsProps = {
	openModal: () => void // Function to open the modal
	closeModal: () => void // Function to close the modal
}

// Interface definition for the ModalContextValue
// It extends the HandleModal type and adds an optional boolean state
interface ModalContextProps
	extends ModalActionsProps,
		Pick<ModalProps, "variant" | "size"> {}

interface ModalHeaderProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	id?: string
	title?: string
	children?: React.ReactNode
	icon?: IconsNamesType
	iconSize?: "xms" | "xs" | "sm" | "md" | "lg" | "xl"
	iconColor?:
		| ""
		| "neutral"
		| "informative"
		| "success"
		| "warning"
		| "critical"
	hasCloseButton?: boolean
}

interface ModalBodyProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	id?: string
	children?: React.ReactNode
}

// Props expected by the ModalFooter component.
interface ModalFooterProps
	extends SuiStyleType,
		SuiHTMLAttributes<HTMLProps<HTMLDivElement>> {
	id?: string
	isSpaced?: boolean
	// ModalFooter content
	children?: React.ReactNode
}

export type {
	ModalProps,
	ModalActionsProps,
	ModalContextProps,
	ModalHeaderProps,
	ModalBodyProps,
	ModalFooterProps,
}
