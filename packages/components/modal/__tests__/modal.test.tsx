import React, { Fragment, useRef } from "react"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "@wpmudev/sui-button"

import {
	Modal,
	ModalActionsProps,
	ModalBody,
	ModalFooter,
	ModalHeader,
	ModalProps,
} from "../src"

describe("@wpmudev/sui-modal", () => {
	// Common props shared among modal components
	const commonProps = {
		id: "uniqueId",
		icon: {
			name: "info-alt",
			color: "blue",
		},
		size: "sm" as ModalProps["size"],
		variant: "simple" as ModalProps["variant"],
	}

	// Data placeholders
	const data = {
		openModalBtn: "__OPEN_MODAL_BTN__",
		modalHeader: {
			title: "__MODAL_HEADER_TITLE__",
			body: "__MODAL_HEADER_BODY__",
		},
		modalBody: {
			body: "__MODAL_BODY__",
		},
		modalFooter: {
			closeBtn: "__CLOSE_BUTTON__",
			applyBtn: "__APPLY_BUTTON__",
		},
	}

	const Component = () => {
		// Create a ref to access modal actions
		const ref = useRef<ModalActionsProps | null>(null)

		return (
			<Fragment>
				{/* Modal component */}
				<Modal {...commonProps} ref={ref}>
					<ModalHeader title={data.modalHeader.title}>
						{data.modalHeader.body}
					</ModalHeader>
					<ModalBody>{data.modalBody.body}</ModalBody>
					<ModalFooter>
						{/* Close button */}
						<Button
							appearance="secondary"
							color="blue"
							isSmall={true}
							onClick={() => {
								ref?.current?.closeModal()
							}}
						>
							{data.modalFooter.closeBtn}
						</Button>
						{/* Apply button */}
						<Button
							appearance="primary"
							color="blue"
							isSmall={true}
							onClick={jest.fn()}
						>
							{data.modalFooter.applyBtn}
						</Button>
					</ModalFooter>
				</Modal>

				{/* Button to open the modal */}
				<Button
					appearance="primary"
					color="blue"
					onClick={() => {
						ref?.current?.openModal()
					}}
				>
					{data.openModalBtn}
				</Button>
			</Fragment>
		)
	}

	it("modal render and other features work", () => {
		render(<Component />)

		// By default, the modal shouldn't be visible
		expect(screen.queryByTestId("modal")).not.toBeInTheDocument()

		// Open the modal
		fireEvent.click(screen.getByText(data.openModalBtn))
		const modal = screen.getByTestId("modal")

		// Verify classes and visibility
		expect(modal).toBeVisible()
		expect(modal).toHaveClass("sui-modal--sm")
		expect(modal).toHaveClass("sui-modal--simple")
	})
})
