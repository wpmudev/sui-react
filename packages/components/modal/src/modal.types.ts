// Type definition for the props of the Modal component
import React from "react"

type ModalProps = {
	id?: string // ID for the modal element
	variant?: "simple" | "advanced" | "app-connect" // Variant type of the modal
	size?: "sm" | "md" | "lg" | "xl" // Size of the modal (small, medium, large, extra-large)
	children?: React.ReactNode // Content of the modal (React children)
}

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

export type { ModalProps, ModalActionsProps, ModalContextProps }
