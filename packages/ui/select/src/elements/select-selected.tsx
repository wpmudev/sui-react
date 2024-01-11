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
import { IconsNamesType } from "@wpmudev/sui-icons"

interface SelectSelectedProps
	extends Omit<HTMLProps<HTMLDivElement>, "selected"> {
	id: string
	controlRef: HTMLDivElement | HTMLInputElement | null
	expanded?: boolean
	arrow?: IconsNamesType
	selected?: Record<string, any> | string
	selectLabel?: string
	isSmall?: boolean
	isMultiSelect?: boolean
	removeSelection?: (optionId: number | string) => void
	dropdownToggle: () => void
	clearSelection: () => void
	interactionMethods: object
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
	interactionMethods,
	removeSelection = () => {},
	dropdownToggle = () => {},
	clearSelection = () => {},
	...props
}) => {
	// Prepare the selected content
	const selectedContent = isArray(selected) ? (
		(selected as Record<string, any>[]).map(
			(selectedItem: Record<string, any>) => (
				<span className="sui-select__selected-options" key={selectedItem?.id}>
					<span
						tabIndex={0}
						role="button"
						onClick={(event) => event.stopPropagation()}
						onKeyDown={(event) => event.stopPropagation()}
					>
						{selectedItem?.label as ReactNode}
					</span>
					<Icon
						name="Close"
						size="xs"
						{...(!!removeSelection && {
							onClick: (event) => {
								event.stopPropagation()
								removeSelection(selectedItem?.id)
							},
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
		<>
			<input
				id={id}
				aria-label="select-input-field"
				className="sui-select__hidden-input"
				tabIndex={-1}
				{...interactionMethods}
			/>
			<div id={`${id}-control`} className="sui-select__control" {...props}>
				<div
					className="sui-accessible-cta"
					ref={controlRef as LegacyRef<HTMLDivElement>}
					role="button"
					onClick={dropdownToggle}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							dropdownToggle()
						}
					}}
					tabIndex={0}
					aria-label={selectLabel}
					aria-haspopup="listbox"
					aria-expanded={expanded}
				></div>
				{selectedContent}
				{isMultiSelect &&
					!isUndefined(selected) &&
					selectLabel !== selected && (
						<Icon
							name="CloseAlt"
							size={isSmall ? "sm" : "md"}
							onClick={onClearSelection}
						/>
					)}
				{arrow && (
					<span className="sui-select__arrow">
						<Icon name={arrow} size="sm" />
					</span>
				)}
			</div>
		</>
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
	interactionMethods: object
}

const SelectedSearch: React.FC<SelectSelectedSearchProps> = ({
	isSmall = false,
	interactionMethods,
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
				interactionMethods={interactionMethods}
				{...props}
			/>
			{(close || selected?.label) && (
				<Icon
					name="CloseAlt"
					size={isSmall ? "sm" : "md"}
					onClick={onClearSelection}
				/>
			)}
		</div>
	)
}

export { Selected, SelectedSearch }
