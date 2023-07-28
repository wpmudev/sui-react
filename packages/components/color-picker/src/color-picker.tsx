import React, { useCallback, useEffect, useState } from "react"
import { ChromePicker } from "react-color"

import { ColorPickerProps, ColorPickerColorProps } from "./color-picker.types"
import { CloseAlt } from "@wpmudev/sui-icons"
import { Button } from "../../button/src"
import { Input } from "@wpmudev/sui-input"

import PreviewImage from "./static/opaque.png"

/**
 * ColorPicker Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @param {CodeEditorProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the CodeEditor component
 */
const ColorPicker: React.FC<ColorPickerProps> = ({ color = "", onChange }) => {
	// State to manage the visibility of the color picker
	const [showPicker, setShowPicker] = useState(false)
	const [tempColor, setTempColor] = useState(color)

	// Update tempColor when color prop value changes
	useEffect(() => {
		if (tempColor !== color) {
			setTempColor(color)
		}
	}, [color])

	// Function to handle color change and call the parent component's onChange function
	const handleColorChange = useCallback(({ hex }: ColorPickerColorProps) => {
		setTempColor(hex)
	}, [])

	// Function to handle color apply and call the parent component's onApply function
	const handleColorApply = useCallback(() => {
		if (onChange) {
			onChange(tempColor)
		}
		setShowPicker(false)
	}, [onChange, tempColor])

	// Handle color picker close
	const closeColorPicker = useCallback(
		(e) => {
			e.stopPropagation()
			// Reset color to prop value
			setTempColor("")
		},
		[color],
	)

	// Handle input color change
	const inputColorChange = useCallback(
		(e) => {
			const inputValue = e.target.value
			setTempColor(inputValue)
		},
		[tempColor],
	)

	return (
		<div className="sui-color-picker">
			{/* Color display box */}
			<div className="sui-color-picker__color">
				<Input
					id="color-picker"
					value={tempColor}
					onChange={inputColorChange}
					placeholder="Select color"
				/>

				<div
					role="button"
					tabIndex={0}
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
				{tempColor ? (
					<Button
						className="sui-color-picker__clear"
						icon="close-alt"
						iconOnly={true}
						iconSize="lg"
						onClick={closeColorPicker}
						isSmall={true}
					/>
				) : (
					<Button
						className="sui-color-picker__button"
						appearance="tertiary"
						color="blue"
						isSmall={true}
						onClick={() => setShowPicker(!showPicker)}
					>
						Select
					</Button>
				)}
			</div>
			{/* Conditionally render the color picker */}
			{showPicker && (
				<div
					className="sui-color-picker__popover"
					style={{ position: "absolute", zIndex: "2" }}
				>
					{/* The ChromePicker component from react-color */}
					<ChromePicker
						className="sui-color-picker__palette"
						color={tempColor}
						onChange={handleColorChange}
						styles={{ default: { body: { padding: "12px 0" } } }}
					/>
					<div>
						<Button
							appearance="secondary"
							color="black"
							isSmall={true}
							isFullWidth={true}
							onClick={handleColorApply}
						>
							Apply
						</Button>
					</div>
				</div>
			)}
		</div>
	)
}

export { ColorPicker }
