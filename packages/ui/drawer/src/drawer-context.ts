import { createContext, useContext } from "react"

interface DrawerContextTypes {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	toggle: (isOpen: boolean) => void
}

const DrawerContext = createContext<DrawerContextTypes>({
	isOpen: true,
	setIsOpen: () => {},
	toggle: () => {},
})

const DrawerProvider = DrawerContext.Provider

const useDrawerContext = () => {
	const ctx = useContext(DrawerContext)
	return { ...ctx }
}

export { useDrawerContext, DrawerProvider }
