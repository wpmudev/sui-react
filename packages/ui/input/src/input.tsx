import React, {
	ForwardRefExoticComponent,
	PropsWithoutRef,
	forwardRef,
	useCallback,
	useState,
	useEffect,
	Fragment,
	useId,
} from "react"

import {
	isUndefined,
	isEmpty,
	generateCN,
	condContent,
	handleOnKeyDown,
	isFunction,
	_renderHTMLPropsSafely,
} from "@wpmudev/sui-utils"
import { useInteraction, useStyles } from "@wpmudev/sui-hooks"
import { Button } from "@wpmudev/sui-button"
import { typeValues } from "./type-values"
import { Icon } from "./elements/input-icon"
import { InputProps } from "./input.types"
import { Tooltip } from "@wpmudev/sui-tooltip"

// Build input component
const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
	(
		{
			type = "text",
			defaultValue = "",
			placeholder,
			hint,
			id,
			className,
			inputClass,
			isMultiLine = false,
			isSmall,
			isReadOnly = false,
			isError = false,
			isDisabled = false,
			onClickIcon,
			onClick,
			onFocus,
			onKeyDown,
			onMouseEnter,
			onMouseLeave,
			onMouseDownCapture,
			onMouseUp,
			onMouseUpCapture,
			onBlur,
			onBlurCapture,
			onChange,
			onClear,
			icon,
			iconPosition,
			iconHint = "",
			iconSize,
			iconTooltipWidth,
			allowClear = false,
			disableInteractions = false,
			isRequired = false, //
			pattern,
			onKeyUp,
			customWidth,
			validate,
			validateOnMount,
			resetValidation,
			ariaAttrs = {},
			_htmlProps = {},
			_style = {},
		},
		ref,
	) => {
		// Generate an id for the input if it's not provided
		const uniqueId = useId()

		if (!id) {
			id = uniqueId
		}

		// Define states
		const [value, setValue] = useState<InputProps["defaultValue"]>(defaultValue)
		const [isHovered, isFocused, interactionMethods] = useInteraction({
			onMouseEnter,
			onMouseLeave,
			onMouseDownCapture,
			onMouseUp,
			onMouseUpCapture,
			onBlur,
			onBlurCapture,
		})
		const [hasError, setHasError] = useState(false)

		// Properties validation
		const hasID = !isUndefined(id) && !isEmpty(id)

		if (!hasID) {
			throw new Error(
				`Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n`,
			)
		}

		useEffect(() => {
			setValue(defaultValue)
		}, [defaultValue])

		// handle on change
		const handleChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				// update value if input isn't read-only
				if (!isReadOnly) {
					setValue((e?.target?.value ?? "") as InputProps["defaultValue"])
				}

				if (!!onChange) {
					onChange(e)
				}
			},
			[isReadOnly, onChange],
		)

		// Clear input value
		const onClearCallback = useCallback(() => {
			setValue("" as InputProps["defaultValue"])
			if (!!onClear) {
				onClear("")
			}
		}, [onClear])

		// flags
		const hasValue = !isUndefined(value) && !isEmpty((value ?? "") as string)
		const hasPlaceholder = !isUndefined(placeholder) && !isEmpty(placeholder)
		const hasClassInput = !isUndefined(inputClass) && !isEmpty(inputClass)

		// Define input type
		let inputType: string | undefined = "text"

		// expected types
		if (typeValues.includes(type as string)) {
			inputType = type
		}

		const { suiInlineClassname } = useStyles(_style, className ?? "")

		// Generate class names based on the prop values
		const classNames = generateCN(
			"sui-input",
			{
				sm: isSmall,
				readonly: isReadOnly,
				hover: isHovered && !isReadOnly,
				focus: isFocused && !isReadOnly && !isError,
				filled: hasValue,
				"has-icon": !isEmpty(icon),
				"icon-start": !isEmpty(iconPosition) && "start" === iconPosition,
				"icon-end": !isEmpty(iconPosition) && "end" === iconPosition,
				error: isError,
				disabled: isDisabled,
				// Define multiline class name
				[`multiline${isSmall ? "-sm" : ""}`]: isMultiLine,
			},
			suiInlineClassname,
		)

		// Generate input class names
		const inputClassNames = generateCN(
			"sui-input__input",
			{
				"allow-clear": allowClear && !isEmpty(value as string) && !isMultiLine,
			},
			hasClassInput ? inputClass : "",
		)

		// Define main tag
		let TagName = "input"

		// render as textarea if multiline requested
		if (isMultiLine) {
			TagName = "textarea"
		}

		const hasHintText = !isEmpty(hint ?? "")

		/**
		 * validate when key up
		 *
		 * @param {any} e
		 */
		const onInputKeyUp = (e: any) => {
			if (validate && isFunction(validate)) {
				// Validate the input
				validate(value)
			}
			// Pass data to prop method
			if (onKeyUp) {
				onKeyUp(e)
			}
		}

		// validate on mount if applicable
		useEffect(() => {
			// validate on mount if applicableuseEffect(() => {
			if (validateOnMount && validate && isFunction(validate)) {
				validate(value)
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [])

		// Input field props
		const attrs = {
			id,
			ref,
			type: condContent(!isMultiLine, inputType),
			placeholder: condContent(hasPlaceholder, placeholder),
			readOnly: condContent(isReadOnly, true),
			disabled: condContent(isDisabled, true),
			value: value ?? "",
			className: inputClassNames,
			onChange: handleChange,
			// Interaction methods
			...(!!disableInteractions ? {} : interactionMethods),
			// Any additional props
			required: isRequired,
			pattern,
			onKeyUp: onInputKeyUp,
			onClick,
			onFocus,
			onKeyDown,
			...ariaAttrs,
		}

		/**
		 * Render icon
		 */
		const renderIcon = () => {
			if (!(icon && !isMultiLine)) {
				return null
			}

			if (!isEmpty(iconHint)) {
				return (
					<Tooltip
						type="icon"
						icon={icon}
						customWidth={iconTooltipWidth as number}
						iconSize={isSmall ? "sm" : "md"}
						placement="top"
						onClick={() => {
							if (onClickIcon) {
								onClickIcon()
							}
						}}
					>
						{iconHint}
					</Tooltip>
				)
			}

			return (
				<Icon
					name={icon}
					size={isSmall ? "sm" : "md"}
					placement={iconPosition ?? "start"}
					onClick={(e: React.MouseEvent) => {
						if (onClickIcon) {
							onClickIcon(e)
						}
					}}
					{...(iconSize && { size: iconSize })}
				/>
			)
		}

		// Render component
		return (
			<div
				className={classNames}
				data-testid="input"
				{...(customWidth && { style: { maxWidth: `${customWidth}px` } })}
			>
				{"start" === iconPosition && renderIcon()}
				<div
					className={generateCN("sui-input__input-field", {
						"has-hint": hasHintText,
					})}
				>
					<TagName {...attrs} {..._renderHTMLPropsSafely(_htmlProps)} />
					{hasHintText && (
						<Fragment>
							{!isEmpty(value as string) && (
								<div className="sui-input__input-field-text">{value}</div>
							)}
							{hasHintText && (
								<div className="sui-input__input-field-hint">{hint}</div>
							)}
						</Fragment>
					)}
				</div>
				{"end" === iconPosition && renderIcon()}
				{allowClear && !isEmpty(value as string) && !isMultiLine && (
					<Button
						className="sui-input__input-clear"
						icon="CloseAlt"
						colorScheme="black"
						type="tertiary"
						iconOnly={true}
						iconSize={isSmall ? "sm" : "md"}
						onClick={onClearCallback}
						isSmall={isSmall ?? false}
						_htmlProps={{
							onKeyDown: (
								e: React.KeyboardEvent<HTMLDivElement | HTMLSpanElement>,
							) => handleOnKeyDown(e, onClear),
						}}
					>
						Clear
					</Button>
				)}
			</div>
		)
	},
)

Input.displayName = "Input"

export { Input }
