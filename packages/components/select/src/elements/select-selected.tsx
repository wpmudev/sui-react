import React, {
	ChangeEvent,
	HTMLProps,
	MouseEvent,
	ReactNode,
	useCallback,
} from "react"
import { isArray } from "@wpmudev/sui-utils"
import { Icon } from "./select-icon"
import { InputWithAutoComplete } from "./select-input"

interface SelectSelectedProps
	extends Omit<HTMLProps<HTMLDivElement>, "selected"> {
	id: string
	expanded?: boolean
	arrow?: string
	selected?: Record<string, any>
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
		selected?.map((selectedItem: Record<string, any>) => (
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
		))
	) : (
		<span className="sui-select__selected">
			{selected?.label ? selected.label : selectLabel}
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
			{isMultiSelect && selectLabel !== selected?.label && (
				<Icon
					name="close-alt"
					size={isSmall ? "md" : "lg"}
					onClick={onClearSelection}
				/>
			)}
			<Icon name={arrow ?? ""} size="md" />
		</div>
	)
}

interface SelectSelectedSearchProps
	extends Omit<HTMLProps<HTMLInputElement>, "selected" | "ref" | "onChange"> {
	arrow?: string
	isSmall?: boolean
	selectLabel?: string
	clearSelection: () => void
	// ref?: LegacyRef<HTMLDivElement>
	onChange?(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void
}

const SelectedSearch: React.FC<SelectSelectedSearchProps> = ({
	arrow,
	isSmall = false,
	selectLabel = "",
	clearSelection,
	...props
}) => {
	return (
		<div className="sui-select__control">
			<InputWithAutoComplete
				placeholder="Search"
				isSmall={isSmall ?? false}
				{...props}
			/>
			<Icon name={arrow ?? ""} size="md" />
		</div>
	)
}

export { Selected, SelectedSearch }
