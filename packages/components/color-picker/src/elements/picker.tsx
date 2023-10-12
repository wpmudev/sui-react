// @ts-nocheck
import React, { useState, useCallback, useEffect, useRef } from "react"
import { ColorPickerProps } from "../color-picker.types"
import { CustomPicker, ColorResult } from "react-color"
import { Saturation, Hue, Alpha } from "react-color/lib/components/common"
import tinycolor from "tinycolor2"
import { Button } from "@wpmudev/sui-button"

// convert color format to supported object.
const colorToColorObject = (color: string): ColorResult => {
	const colorObject = tinycolor(color ?? "#000000")
	return {
		hex: colorObject.toHexString(),
		rgb: colorObject.toRgb(),
		hsl: colorObject.toHsl(),
		hsv: colorObject.toHsv(),
	} as ColorResult
}

const customPointer = () => {
	return <div className="sui-color-picker__pointer"></div>
}

const Picker: React.FC<ColorPickerProps> = ({
	color = "",
	type = "hex",
	onColorChange,
	onApplyButton,
}) => {
	// selected color value
	const [selectedColor, setSelectedColor] = useState<ColorResult>(
		colorToColorObject(color),
	)

	// default input color values
	const [hex, setHex] = useState<string>(selectedColor?.hex)
	const [red, setRed] = useState<number>(selectedColor?.rgb?.r)
	const [green, setGreen] = useState<number>(selectedColor?.rgb?.g)
	const [blue, setBlue] = useState<number>(selectedColor?.rgb?.b)
	const [alpha, setAlpha] = useState<number>(selectedColor?.rgb?.a)

	// format Hex | RGB for color dropdown
	const [selectedFormat, setSelectedFormat] = useState<string>(type)

	// Create a ref for the input element
	const inputRef = useRef<HTMLInputElement | null>(null)

	// when selected color updates update all corresponding values
	useEffect(() => {
		// update input values
		setHex(selectedColor?.hex)
		setRed(selectedColor?.rgb?.r)
		setGreen(selectedColor?.rgb?.g)
		setBlue(selectedColor?.rgb?.b)
		setAlpha(selectedColor?.rgb?.a)
		const colorCode =
			"hex" === selectedFormat
				? selectedColor.hex
				: `rgba(${selectedColor.rgb.r}, ${selectedColor.rgb.g}, ${selectedColor.rgb.b}, ${selectedColor.rgb.a})`
		onColorChange(colorCode)
	}, [onColorChange, selectedColor, selectedFormat])

	// useCallback to memoize the event handlers
	const handleColorChange = useCallback((newColor: ColorResult) => {
		const colorObject = colorToColorObject(newColor)
		setSelectedColor(colorObject)
	}, [])

	const handleFormatChange = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			setSelectedFormat(event.target.value)
		},
		[],
	)

	const handleHexInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target
			setSelectedColor((prevColor: ColorResult) => ({
				...prevColor,
				hex: value,
			}))
		},
		[],
	)

	const handleRGBInputChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { name, value } = event.target
			let inputVal = parseInt(value, 10)
			if (isNaN(inputVal) || inputVal < 0) {
				inputVal = 0
			} else if (inputVal > 255) {
				inputVal = 255
			}
			setSelectedColor((prevColor: ColorResult) => ({
				...prevColor,
				rgb: { ...prevColor.rgb, [name]: inputVal },
			}))
		},
		[],
	)

	const handleAlphaChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			let value = parseInt(event.target.value, 10)
			if (isNaN(value) || value < 0) {
				value = 0
			} else if (value > 100) {
				value = 100
			}
			value /= 100
			setSelectedColor((prevColor: ColorResult) => ({
				...prevColor,
				rgb: { ...prevColor.rgb, a: value },
			}))
		},
		[],
	)

	// Attach a click event handler to the input field
	const handleInputKeyDown = useCallback(() => {
		// Move the cursor one character before the end
		if (inputRef.current) {
			const valueLength = inputRef.current.value.length
			inputRef.current.setSelectionRange(valueLength - 1, valueLength - 1)
		}
	}, [])

	return (
		<div className="sui-color-picker__popover">
			<div>
				<div className="sui-color-picker__saturation">
					<Saturation
						hsl={selectedColor.hsl}
						hsv={selectedColor.hsv}
						pointer={customPointer}
						onChange={handleColorChange}
					/>
				</div>
				<div className="sui-color-picker__hue">
					<Hue
						hsl={selectedColor.hsl}
						pointer={customPointer}
						onChange={handleColorChange}
					/>
				</div>
				<div className="sui-color-picker__alpha">
					<Alpha
						rgb={selectedColor.rgb}
						hsl={selectedColor.hsl}
						hsv={selectedColor.hsv}
						pointer={customPointer}
						onChange={handleColorChange}
					/>
				</div>
				<div className="sui-color-picker__fields">
					<div>
						<select
							className="sui-color-picker__fields--select"
							value={selectedFormat}
							onChange={handleFormatChange}
						>
							<option key="hex" value="hex">
								Hex
							</option>
							<option key="rgb" value="rgb">
								RGB
							</option>
						</select>
					</div>
					<div className="sui-color-picker__fields--input">
						{selectedFormat === "hex" && (
							<input
								type="text"
								className="sui-color-picker__fields--hex"
								value={hex}
								onChange={handleHexInputChange}
							/>
						)}
						{selectedFormat === "rgb" && (
							<React.Fragment>
								<input
									name="r"
									type="number"
									min="0"
									max="255"
									value={red}
									onChange={handleRGBInputChange}
								/>
								<input
									name="g"
									type="number"
									min="0"
									max="255"
									value={green}
									onChange={handleRGBInputChange}
								/>
								<input
									name="b"
									type="number"
									min="0"
									max="255"
									value={blue}
									onChange={handleRGBInputChange}
								/>
							</React.Fragment>
						)}
						<input
							ref={inputRef}
							type="text"
							min="1"
							step="1"
							max="100"
							pattern="[0-9]+"
							value={`${Math.round(alpha * 100)}%`}
							onChange={handleAlphaChange}
							onKeyDown={handleInputKeyDown}
						/>
					</div>
				</div>
				<div>
					<Button
						appearance="secondary"
						color="black"
						isSmall={true}
						isFullWidth={true}
						onClick={onApplyButton}
					>
						Apply
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CustomPicker(Picker)
