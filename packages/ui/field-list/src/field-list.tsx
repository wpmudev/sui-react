import React, {
	Children,
	cloneElement,
	ReactElement,
	useCallback,
	useId,
} from "react"

// Import required components
import { FieldListItemProps, FieldListProps } from "./field-list.types"
import { useDefaultChildren, useStyles } from "@wpmudev/sui-hooks"
import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

// Build "field list" component
const FieldList: React.FC<FieldListProps> = ({
	id: uniqueId,
	label,
	helper,
	children,
	spacing = "",
	onToggle = () => null,
	noBorderRadius = false,
	_htmlProps,
	_style,
}) => {
	const generatedId = useId()
	const fieldListId = uniqueId || `sui_field_list_${generatedId}`
	const { suiInlineClassname } = useStyles(_style)

	// Callback function to handle item toggling
	const onChangeItem = useCallback(
		(id: string, checked: boolean) => {
			onToggle(id, checked)
		},
		[onToggle],
	)

	// Default children content
	children = useDefaultChildren(
		children,
		<>{`{field List children content}`}</>,
	)

	let styles = {}

	// custom spacing
	if (spacing) {
		styles = {
			padding: spacing,
		}
	}

	return (
		// Render the FieldList component
		<div
			id={fieldListId}
			className={generateCN(
				"sui-field-list",
				{ "no-border-radius": noBorderRadius },
				suiInlineClassname,
			)}
			data-testid="field-list"
			{..._renderHTMLPropsSafely(_htmlProps)}
		>
			{/* Render the label and helper elements if they are provided */}
			{(label || helper) && (
				<div
					id={`${fieldListId}_header`}
					className="sui-field-list__row"
					style={styles}
				>
					{/* Render the label element if provided */}
					{label && (
						<h3 className="sui-heading sui-heading--h4 sui-field-list__title">
							{label}
						</h3>
					)}
					{/* Render the helper element if provided */}
					{helper && <p className="sui-field-list__helper">{helper}</p>}
				</div>
			)}
			{/* Render the list of FieldListItem components */}
			<div id={`${fieldListId}_items`} className="sui-field-list__items">
				{/* Map over and clone each child component with the onChangeItem callback */}
				{Children.map(
					children as ReactElement,
					(child: ReactElement<FieldListItemProps>) =>
						cloneElement(child, {
							onToggle: onChangeItem,
							style: styles,
						} as object),
				)}
			</div>
		</div>
	)
}

// Publish component(s)
export { FieldList }
