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
		onClick,
	}
}

export { ListContext, ListProvider, useListType }
