// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react"

import { ColorPickerProps } from "./color-picker.types"
import { Button } from "@wpmudev/sui-button"
import { Input } from "@wpmudev/sui-input"

import PreviewImage from "./static/opaque.png"

import Picker from "./elements/picker"
import { generateCN } from "@wpmudev/sui-utils"

/**
 * ColorPicker Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @param {CodeEditorProps} props - Component props
 * @return {JSX.Element} - JSX Element representing the CodeEditor component
 */

const ColorPicker: React.FC<ColorPickerProps> = ({
	color = "",
	onChange,
	placeholder = "Select color",
	isError = false,
	isDisabled = false,
	...props
}) => {
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
	const handleColorChange = useCallback(
		(colorCode: string) => setTempColor(colorCode),
		[],
	)

	// Function to handle color apply and call the parent component's onApply function
	const handleColorApply = useCallback(() => {
		if (onChange) {
			onChange(tempColor)
		}
		setShowPicker(false)
	}, [onChange, tempColor])

	// Handle color picker close
	const closeColorPicker = useCallback(
		(e: React.MouseEvent<HTMLElement>) => {
			e.stopPropagation()
			setTempColor("")
		},
		[color],
	)

	// Handle input color change
	const inputColorChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const inputValue = e?.target?.value
			setTempColor(inputValue)
		},
		[tempColor],
	)

	return (
		<div
			className={generateCN("sui-color-picker", {
				error: isError,
				disabled: isDisabled,
			})}
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
					{...props}
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
				<Button
					className={`sui-color-picker__${tempColor ? "clear" : "button"}`}
					{...(tempColor && {
						icon: "close-alt",
						iconOnly: true,
						iconSize: "lg",
						onClick: closeColorPicker,
					})}
					{...(!tempColor && {
						color: "blue",
						appearance: "tertiary",
						onClick: () => setShowPicker(!showPicker),
					})}
					isSmall={true}
					isDisabled={isDisabled}
				>
					{tempColor ? "Clear" : "Select"}
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
