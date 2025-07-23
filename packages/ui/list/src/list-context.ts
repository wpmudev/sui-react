import { createContext, useContext } from "react"
import { ListContextProps } from "./list.types"

const ListContext = createContext<ListContextProps>({
	type: "ul",
})

const ListProvider = ListContext.Provider

const useListType = () => {
	const { type, onClick } = useContext(ListContext)

	return {
		type,
		onClick: () => {
			if (onClick) {
				onClick()
			} else {
				throw new Error(
					"ListItem must be used within a List component. It requires a valid 'type' context (either 'ul' or 'ol').",
				)
			}
		},
	}
}

export { ListContext, ListProvider, useListType }
