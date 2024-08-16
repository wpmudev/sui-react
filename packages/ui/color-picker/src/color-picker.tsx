// @ts-nocheck
import React, { useCallback, useEffect, useState, useRef, useId } from "react"

import { ColorPickerProps } from "./color-picker.types"
import { Button } from "@wpmudev/sui-button"
import { Input } from "@wpmudev/sui-input"

// @todo: Getting 404 error when using this library externally
// const PreviewImage = require("./static/opaque.png")

import Picker from "./elements/picker"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"
import { useOuterClick, useStyles } from "@wpmudev/sui-hooks"

/**
 * ColorPicker Component
 *
 * A code editor component that allows displaying and editing code.
 * Uses ReactPrismEditor as the code editor.
 *
 * @return {JSX.Element} - JSX Element representing the CodeEditor component
 */

const ColorPicker: React.FC<ColorPickerProps> = ({
	id,
	type = "hex",
	color = "",
	defaultColor,
	onApply,
	placeholder = "Select color",
	isError = false,
	isSmall,
	isDisabled = false,
	isFluid = false,
	onReset = () => null,
	onColorChange = () => null,
	ariaAttrs = {},
	disableAlpha = true,
	_htmlProps,
	_style = {},
}: ColorPickerProps): JSX.Element => {
	// State to manage the visibility of the color picker
	const [showPicker, setShowPicker] = useState(false)
	const [tempColor, setTempColor] = useState("")
	const [showResetBtn, setShowResetBtn] = useState(false)

	const uniqueId = useId()

	id = id || uniqueId

	// Update tempColor when color prop value changes
	useEffect(() => {
		setTempColor(color)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [color])

	useEffect(() => {
		// Hide reset button if default and current color matched
		if (defaultColor && color === defaultColor) {
			setShowResetBtn(false)
		}
	}, [defaultColor, color])

	// Handle reset
	const handleReset = useCallback(
		(e) => {
			e.stopPropagation()
			setShowResetBtn(false)
			setShowPicker(false)
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

			setShowResetBtn(true)

			setTempColor(colorCode)

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
			if (onApply) {
				onApply(tempColor)
			}

			setShowResetBtn(true)
			setShowPicker(false)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tempColor, showPicker])

	// The component ref
	const colorPickerRef = useRef()

	// Clicking outside should apply color change
	useOuterClick(colorPickerRef, handleColorApply)

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
		if (showResetBtn) {
			return "Reset"
		}
		return "Select"
	}

	const { suiInlineClassname } = useStyles(_style)

	return (
		<div
			className={generateCN(
				"sui-color-picker",
				{
					error: isError,
					disabled: isDisabled,
					fluid: isFluid,
				},
				suiInlineClassname,
			)}
			data-testid="color-picker"
			ref={colorPickerRef}
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			<div className="sui-color-picker__color">
				<Input
					className="sui-color-picker__color--code"
					defaultValue={tempColor}
					onChange={inputColorChange}
					placeholder={placeholder ?? ""}
					onClick={() => setShowPicker(true)}
					isError={isError ?? false}
					isDisabled={isDisabled ?? false}
					id={id}
					{...(isSmall && { isSmall })}
					{...(ariaAttrs && { ariaAttrs })}
					_htmlProps={{
						"data-testid": "colorpicker-input",
					}}
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
						style={{ backgroundColor: tempColor }}
					/>
				</div>
				<Button
					className={`sui-color-picker__${showResetBtn ? "icon" : "button"}`}
					{...(showResetBtn && {
						icon: "CloseAlt",
						iconOnly: true,
						iconSize: "md",
						onClick: handleReset,
					})}
					{...(!showResetBtn && {
						colorScheme: "blue",
						type: "tertiary",
						onClick: () => setShowPicker(!showPicker),
					})}
					isSmall={true}
					isDisabled={isDisabled}
					_htmlProps={{
						"data-testid": showResetBtn ? "reset-button" : "select-button",
					}}
				>
					{renderBtnText()}
				</Button>
			</div>
			{showPicker && (
				<Picker
					color={tempColor}
					onColorChange={handleColorChange}
					onApplyButton={handleColorApply}
					disableAlpha={disableAlpha}
					type={type}
				/>
			)}
		</div>
	)
}

export { ColorPicker }
