import React, {
	useState,
	useCallback,
	useEffect,
	useRef,
	ReactNode,
	ChangeEvent,
} from "react"
import { ColorPickerPickerProps, ColorPickerProps } from "../color-picker.types"
import { CustomPicker, ColorResult } from "react-color"
import {
	Saturation,
	Hue,
	Alpha,
} from "react-color/lib/components/common/index.js"
import tinycolor from "tinycolor2"
import { Button } from "@wpmudev/sui-button"
import { generateCN } from "@wpmudev/sui-utils"

// convert color format to supported object.
const colorToColorObject = (
	color: ColorResult | tinycolor.ColorInput,
): ColorResult => {
	const colorObject = tinycolor((color as tinycolor.ColorInput) ?? "#000000")
	return {
		hex: colorObject.toHexString(),
		rgb: colorObject.toRgb(),
		hsl: colorObject.toHsl(),
		hsv: colorObject.toHsv(),
	} as ColorResult
}

const customPointer = (): ReactNode | undefined => {
	return <div className="sui-color-picker__pointer"></div>
}

const Picker: React.FC<ColorPickerPickerProps> = ({
	color = "",
	type = "hex",
	onColorChange = () => null,
	onApplyButton,
	disableAlpha,
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
	const [alpha, setAlpha] = useState<number | undefined>(selectedColor?.rgb?.a)

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
			"hex" === selectedFormat || disableAlpha
				? selectedColor.hex
				: `rgba(${selectedColor.rgb.r}, ${selectedColor.rgb.g}, ${selectedColor.rgb.b} , ${selectedColor.rgb.a})`
		onColorChange(colorCode)
	}, [onColorChange, selectedColor, selectedFormat, disableAlpha])

	// useCallback to memoize the event handlers
	const handleColorChange = useCallback((newColor: ColorResult) => {
		const colorObject = colorToColorObject(newColor as ColorResult)
		setSelectedColor(colorObject)
	}, [])

	const handleFormatChange = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			setSelectedFormat(event.target.value)
		},
		[],
	)

	const handleHueChange = (_color: Record<string, any>) => {
		// Fix for the hue slider not updating the color when color is #ffffff or #000000
		if (
			(_color.s === 0 && _color.l === 1) ||
			(_color.s === 0 && _color.l === 0)
		) {
			_color.s = 0.99
			_color.l = 0.99
		}

		// @ts-ignore
		handleColorChange(_color)
	}

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
			const rgb = { ...selectedColor.rgb, [name]: inputVal }
			setSelectedColor((prevColor: ColorResult) => ({
				...prevColor,
				rgb,
				hex: tinycolor(rgb).toHexString(),
			}))
		},
		[selectedColor],
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
	const handleInputKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			// check if inputRef is available
			if (!inputRef.current) {
				return // return if ref is missing
			}

			const { key, shiftKey } = event
			const { current } = inputRef

			// when key isn't arrow up or down
			if (!["ArrowUp", "ArrowDown"].includes(key)) {
				const valueLength = current.value.length
				// move cursor to the end
				current?.setSelectionRange(valueLength - 1, valueLength - 1)
				return
			}

			// prevent the default behavior (e.g., moving the cursor)
			event.preventDefault()

			// parse the current value as an integer, default to 0
			let val = parseInt(current.value, 10) || 0

			// adjust the value based on arrow key and Shift key
			const incrementValue = shiftKey ? 10 : 1
			val =
				key === "ArrowUp"
					? Math.min(val + incrementValue, 100)
					: Math.max(val - incrementValue, 0)

			// update the input value with the new percentage
			current.value = `${val}%`

			// trigger the change event
			handleAlphaChange({
				target: { value: `${val}%` },
			} as ChangeEvent<HTMLInputElement>)
		},
		[inputRef, handleAlphaChange],
	)

	return (
		<div className="sui-color-picker__popover">
			<div>
				<div className="sui-color-picker__saturation">
					<Saturation
						//@ts-ignore
						hsl={selectedColor.hsl}
						//@ts-ignore
						hsv={selectedColor.hsv}
						//@ts-ignore
						pointer={customPointer}
						onChange={handleColorChange}
					/>
				</div>
				<div className="sui-color-picker__hue">
					<Hue
						//@ts-ignore
						hsl={selectedColor.hsl}
						//@ts-ignore
						pointer={customPointer}
						onChange={handleHueChange}
					/>
				</div>
				{!disableAlpha && (
					<div className="sui-color-picker__alpha">
						<Alpha
							//@ts-ignore
							rgb={selectedColor.rgb}
							hsl={selectedColor.hsl}
							//@ts-ignore
							hsv={selectedColor.hsv}
							//@ts-ignore
							pointer={customPointer}
							onChange={handleColorChange}
						/>
					</div>
				)}
				<div className="sui-color-picker__fields">
					<div>
						<select
							aria-label="Color format"
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
								className={generateCN("sui-color-picker__fields", {
									hex: true,
									"has-alpha": !disableAlpha,
								})}
								aria-label="Hex code"
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
									aria-label="Red code"
									onChange={handleRGBInputChange}
								/>
								<input
									name="g"
									type="number"
									min="0"
									max="255"
									aria-label="Green code"
									value={green}
									onChange={handleRGBInputChange}
								/>
								<input
									name="b"
									type="number"
									min="0"
									max="255"
									value={blue}
									aria-label="Blue code"
									onChange={handleRGBInputChange}
								/>
							</React.Fragment>
						)}
						{!disableAlpha && (
							<input
								ref={inputRef}
								type="text"
								min="1"
								step="1"
								max="100"
								aria-label="Color opacity"
								pattern="[0-9]+"
								value={`${Math.round(
									(alpha !== undefined ? alpha : 100) * 100,
								)}%`}
								onChange={handleAlphaChange}
								onKeyDown={handleInputKeyDown}
							/>
						)}
					</div>
				</div>
				<div>
					<Button
						type="secondary"
						colorScheme="black"
						isSmall={true}
						isFullWidth={true}
						onClick={onApplyButton}
						_htmlProps={{
							"data-testid": "apply-button",
						}}
					>
						Apply
					</Button>
				</div>
			</div>
		</div>
	)
}

//@ts-ignore
export default CustomPicker(Picker)
