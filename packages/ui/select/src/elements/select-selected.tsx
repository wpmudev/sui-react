import React, {
	ChangeEvent,
	HTMLProps,
	LegacyRef,
	MouseEvent,
	ReactNode,
	useCallback,
	useState,
} from "react"
import { isArray, isUndefined } from "@wpmudev/sui-utils"
import { Icon } from "./select-icon"
import { InputWithAutoComplete } from "./select-input"

interface SelectSelectedProps
	extends Omit<HTMLProps<HTMLDivElement>, "selected"> {
	id: string
	controlRef: HTMLDivElement | HTMLInputElement | null
	expanded?: boolean
	arrow?: string
	selected?: Record<string, any> | string
	selectLabel?: string
	isSmall?: boolean
	isMultiSelect?: boolean
	removeSelection?: (optionId: number | string) => void
	dropdownToggle: () => void
	clearSelection: () => void
}

// Build "Select Selected" component.
const Selected: React.FC<SelectSelectedProps> = ({
	id,
	controlRef,
	expanded = false,
	arrow,
	selected,
	selectLabel = "",
	isMultiSelect = false,
	isSmall = false,
	removeSelection = () => {},
	dropdownToggle = () => {},
	clearSelection = () => {},
	...props
}) => {
	// Prepare the selected content
	const selectedContent = isArray(selected) ? (
		(selected as Record<string, any>[]).map(
			(selectedItem: Record<string, any>) => (
				<span
					key={selectedItem?.id}
					tabIndex={0}
					role="button"
					className="sui-select__selected-options"
					onClick={(event) => event.stopPropagation()}
					onKeyDown={(event) => event.stopPropagation()}
				>
					{selectedItem?.label as ReactNode}
					<Icon
						name="close"
						size="sm"
						{...(!!removeSelection && {
							onClick: () => removeSelection(selectedItem?.id),
						})}
					/>
				</span>
			),
		)
	) : (
		<span className="sui-select__selected">
			{selected && typeof selected === "object" && "label" in selected
				? selected.label
				: selectLabel}
		</span>
	)

	const onClearSelection = useCallback(
		(event: MouseEvent<HTMLSpanElement>) => {
			clearSelection()
		},
		[clearSelection],
	)

	return (
		<div
			id={id}
			ref={controlRef as LegacyRef<HTMLDivElement>}
			role="button"
			className="sui-select__control"
			onClick={dropdownToggle}
			onKeyDown={(e) => {
				if (e.key === "Enter") {
					dropdownToggle()
				}
			}}
			tabIndex={0}
			aria-haspopup="listbox"
			aria-expanded={expanded}
			{...props}
		>
			{selectedContent}
			{isMultiSelect && !isUndefined(selected) && selectLabel !== selected && (
				<Icon
					name="close-alt"
					size={isSmall ? "md" : "lg"}
					onClick={onClearSelection}
				/>
			)}
			{arrow && <Icon name={arrow} size="md" />}
		</div>
	)
}

interface SelectSelectedSearchProps
	extends Omit<HTMLProps<HTMLInputElement>, "selected" | "ref" | "onChange"> {
	arrow?: string
	isSmall?: boolean
	controlRef: HTMLDivElement | HTMLInputElement | null
	selected?: {
		label: string
	}
	selectLabel?: string
	clearSelection: () => void
	// ref?: LegacyRef<HTMLDivElement>
	onChange?(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

const SelectedSearch: React.FC<SelectSelectedSearchProps> = ({
	isSmall = false,
	selectLabel = "",
	clearSelection,
	selected,
	...props
}) => {
	const [close, setClose] = useState(false)
	const onClearSelection = useCallback(
		(event: MouseEvent<HTMLSpanElement>) => {
			clearSelection()
			setClose(false)
		},
		[clearSelection],
	)
	const onValueChange = (val: string) => {
		if (val) {
			setClose(true)
		} else {
			setClose(false)
		}
	}
	return (
		<div className="sui-select__control">
			<InputWithAutoComplete
				placeholder="Search"
				isSmall={isSmall ?? false}
				onValueChange={onValueChange}
				selected={selected}
				{...props}
			/>
			{(close || selected?.label) && (
				<Icon
					name="close-alt"
					size={isSmall ? "md" : "lg"}
					onClick={onClearSelection}
				/>
			)}
		</div>
	)
}

export { Selected, SelectedSearch }
