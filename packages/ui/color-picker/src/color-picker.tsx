// @ts-nocheck
import React, { useCallback, useEffect, useState, useRef } from "react"

import { ColorPickerProps } from "./color-picker.types"
import { Button } from "@wpmudev/sui-button"
import { Input } from "@wpmudev/sui-input"

import PreviewImage from "./static/opaque.png"

import Picker from "./elements/picker"
import { generateCN } from "@wpmudev/sui-utils"
import { useOuterClick } from "@wpmudev/sui-hooks"

/**
 * ColorPicker Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @param {ColorPickerProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the CodeEditor component
 */

const ColorPicker: React.FC<ColorPickerProps> = ({
	id = "color-picker",
	color = "",
	onChange,
	onCancel,
	placeholder = "Select color",
	isError = false,
	isDisabled = false,
	onReset = () => null,
	onColorChange = () => null,
	...props
}) => {
	// State to manage the visibility of the color picker
	const [showPicker, setShowPicker] = useState(false)
	const [tempColor, setTempColor] = useState("")
	const [showClearBtn, setShowClearBtn] = useState(false)
	const [showResetBtn, setShowResetBtn] = useState(false)

	// Update tempColor when color prop value changes
	useEffect(() => {
		setTempColor(color)

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color])

	// Handle reset
	const handleReset = useCallback(
		(e) => {
			e.stopPropagation()
			setShowResetBtn(false)
			onReset()
		},
		[onReset],
	)

	// Function to handle color change and call the parent component's onChange function
	const handleColorChange = useCallback(
		(colorCode: string) => {
			if (colorCode === tempColor) {
				return
			}

			setTempColor(colorCode)
			setShowClearBtn(true)

			if (onColorChange) {
				onColorChange(colorCode)
			}
		},
		[onColorChange, tempColor],
	)

	// Function to handle color apply and call the parent component's onApply function
	const handleColorApply = useCallback(() => {
		// Apply only if color picker is open
		if (showPicker) {
			if (onChange) {
				onChange(tempColor)
			}

			setShowClearBtn(false)
			setShowResetBtn(true)
			setShowPicker(false)
		}
	}, [onChange, tempColor, showPicker])

	// The component ref
	const colorPickerRef = useRef()

	// Clicking outside should apply color change
	useOuterClick(colorPickerRef, handleColorApply)

	// Handle color picker close
	const closeColorPicker = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			e.stopPropagation()
			setShowPicker(false)
			setShowClearBtn(false)
			setTempColor(color)

			if (onCancel) {
				onCancel()
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[onCancel, color],
	)

	// Handle input color change
	const inputColorChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			e.stopPropagation()
			const inputValue = e?.target?.value
			setTempColor(inputValue)
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[tempColor],
	)

	// Render Button Text According to current state
	const renderBtnText = () => {
		if (showClearBtn) {
			return "Clear"
		}

		if (showResetBtn) {
			return "Reset"
		}
		return "Select"
	}

	return (
		<div
			className={generateCN("sui-color-picker", {
				error: isError,
				disabled: isDisabled,
			})}
			data-testid="color-picker"
			ref={colorPickerRef}
		>
			<div className="sui-color-picker__color">
				<Input
					className="sui-color-picker__color--code"
					value={tempColor}
					onChange={inputColorChange}
					placeholder={placeholder ?? ""}
					onClick={() => setShowPicker(true)}
					isError={isError ?? false}
					isDisabled={isDisabled ?? false}
					id={id}
					{...props}
				/>

				<div
					role="button"
					tabIndex={0}
					aria-label="color-preview"
					className="sui-color-picker__input-preview"
					onMouseDown={() => setShowPicker(!showPicker)}
				>
					<span
						className="sui-color-picker__input-preview-icon"
						aria-hidden={true}
						style={
							tempColor
								? { backgroundColor: tempColor }
								: { backgroundImage: `url(${PreviewImage})` }
						}
					/>
				</div>
				<Button
					className={`sui-color-picker__${
						showClearBtn || showResetBtn ? "icon" : "button"
					}`}
					{...(showClearBtn && {
						icon: showClearBtn ? "CloseAlt" : "RotateLeft",
						iconOnly: true,
						iconSize: "md",
						onClick: closeColorPicker,
					})}
					{...(showResetBtn && {
						icon: "RotateLeft",
						iconOnly: true,
						iconSize: "sm",
						onClick: handleReset,
					})}
					{...(!showClearBtn &&
						!showResetBtn && {
							color: "blue",
							appearance: "tertiary",
							onClick: () => setShowPicker(!showPicker),
						})}
					isSmall={true}
					isDisabled={isDisabled}
				>
					{renderBtnText()}
				</Button>
			</div>
			{showPicker && (
				<Picker
					color={tempColor}
					onColorChange={handleColorChange}
					onApplyButton={handleColorApply}
					{...props}
				/>
			)}
		</div>
	)
}

export { ColorPicker }
