import { TreeViewCheckType } from "./tree-view.types"

/**
 * Find index of checkbox item using id and group ID
 *
 * @param { TreeViewCheckType["id"]}    id    checkbox ID
 * @param { TreeViewCheckType["group"]} group checkbox group ID
 * @param { TreeViewCheckType[]}        items list of checkbox items
 *
 * @return number checkbox index
 */
const getCheckIndex = (
	id: TreeViewCheckType["id"],
	group: TreeViewCheckType["group"],
	items: TreeViewCheckType[],
) => items.findIndex((i) => i.id === id && i.group === group)

/**
 * Get items from a specific group.
 *
 * @param {string}            groupId    - Group ID
 * @param {Array}             checks     - Array of check items
 * @param {TreeViewCheckType} toOverride - Params to override in check item
 * @return {Array} - Items from the specified group
 */
const getGroupItems = (
	groupId?: string,
	checks?: TreeViewCheckType[],
	toOverride: object = {},
) => {
	// Filter items by group ID
	const filteredItems = (checks ?? [])?.filter((item) => item.group === groupId)

	// Process filtered items
	return (filteredItems ?? [])?.flatMap((item) => {
		// Check if item is a group
		if (item.type === "group") {
			return getGroupItems(item.id, checks, toOverride) // Recursively call for nested groups
		}
		return { ...item, ...toOverride } // Add item with overridden params
	})
}

/**
 * Merge items with group items.
 *
 * @param {object[]} checkList - Checkbox items
 * @param {object[]} mergeWith - Items to merge with
 *
 * @return {object[]} - Merged checkbox items
 */
const mergeItems = (checkList, mergeWith = []) => {
	// Merge items from the given list
	mergeWith.forEach((item) => {
		const index = getCheckIndex(item?.id, item.group, checkList)
		if (index > -1) {
			checkList[index] = item // Replace item in the checkList if found
		}
	})

	return checkList
}

/**
 * Get group checkbox state.
 *
 * @param {string}              group - Checkbox group ID
 * @param {TreeViewCheckType[]} items - Array of checkbox items
 * @return {string} - State of the checkbox group
 */
const getGroupState = (group = "", items: TreeViewCheckType[] = []) => {
	// Get list of checkbox items from the specified group
	const groupList = getGroupItems(group, items)
	const checkedItems = groupList.filter((item) => !!item?.isChecked)

	if (checkedItems.length === 0) {
		return "none" // Return 'none' state if no items are checked
	}

	return groupList.length !== checkedItems.length ? "indeterminate" : "all" // Return appropriate state
}

/**
 * Get checkbox item state.
 *
 * @param {string}              id    - Checkbox ID
 * @param {string}              group - Group ID
 * @param {TreeViewCheckType[]} items - Array of checkbox items
 *
 * @return {boolean} - State of the checkbox item
 */
const getCheckboxState = (id = "", group = "", items = []) => {
	// Find the checkbox item with the given ID and group ID
	const index = getCheckIndex(id, group, items)
	return items?.[index]?.isChecked ?? false // Return checkbox state or false if not found
}

export {
	getGroupItems as groupSet,
	getCheckIndex,
	mergeItems,
	getGroupState,
	getCheckboxState,
}
