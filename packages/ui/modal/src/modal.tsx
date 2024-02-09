import React, {
	createContext,
	forwardRef,
	useCallback,
	useImperativeHandle,
	useState,
	useId,
} from "react"

// Import required module(s)
import { generateCN, isEmpty } from "@wpmudev/sui-utils"
import {
	useDefaultChildren,
	usePortal,
	useStyles,
	useValidateProps,
} from "@wpmudev/sui-hooks"
import { ModalActionsProps, ModalContextProps, ModalProps } from "./modal.types"

// Create a context for the modal
export const ModalContext = createContext<ModalContextProps | null>(null)

// Build modal
const Modal = forwardRef<ModalActionsProps, ModalProps>(
	({ id, size = "sm", children, variant = "simple", ...props }, ref) => {
		// generate id if not provided
		const uniqueId = useId()

		if (!id) {
			id = uniqueId
		}

		// Default children content
		children = useDefaultChildren(children)

		// State to track whether the modal is open or not
		const [isOpen, setIsOpen] = useState<boolean>(false)

		// validate props
		useValidateProps({ component: Modal, propsToCheck: { id } })

		// Function to open the modal
		const openModal = useCallback(() => {
			setIsOpen(true)
		}, [])

		// Function to close the modal
		const closeModal = useCallback(() => {
			setIsOpen(false)
		}, [])

		// Expose 'openModal' and 'closeModal' functions to parent components using 'forwardRef'
		useImperativeHandle(ref, () => ({
			openModal,
			closeModal,
		}))

		// Get the 'render' function from the 'usePortal' hook
		const [render] = usePortal()
		const { suiInlineClassname } = useStyles(props, "sui-wp-overlay")

		// Return nothing if the modal is not open
		if (!isOpen) {
			return null
		}

		// Generate class names for the modal based on its state
		const classNames = generateCN(
			"sui-modal",
			{
				"is-open": isOpen,
				[variant]: !isEmpty(variant ?? ""),
				[size]: !isEmpty(size ?? ""),
			},
			suiInlineClassname,
		)

		return render(
			// Render the modal content using the 'ModalContext.Provider' to make the 'openModal' and 'closeModal' functions available to children components
			<ModalContext.Provider
				value={{
					openModal,
					closeModal,
					variant: variant ?? "simple",
					size: size ?? "sm",
				}}
			>
				<section className={classNames} data-testid="modal" tabIndex={-1}>
					<div
						className={generateCN("sui-modal__container", {})}
						role="dialog"
						aria-modal="true"
						tabIndex={-1}
					>
						{children}
					</div>
				</section>
				<div className="sui-modal__overlay" role="presentation" />
			</ModalContext.Provider>,
		)
	},
)

Modal.displayName = "Modal"

// Publish component(s)
export { Modal }
