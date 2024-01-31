import React, {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
} from "react"

import { generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { useDefaultChildren, usePrevious } from "@wpmudev/sui-hooks"
import { DrawerActions, DrawerTypes } from "./drawer.types"
import { DrawerProvider } from "./drawer-context"

// Build sidebar component
const Drawer = forwardRef<DrawerActions | null, DrawerTypes>(
	(
		{
			className = "",
			children,
			isOpen: propIsOpen = false,
			size,
			position = "right",
			hasContainer = false,
			disableShadow = false,
		},
		ref,
	) => {
		const [isVisible, setIsVisible] = useState<boolean>(false)
		const [isOpen, setIsOpen] = useState<boolean>(propIsOpen ?? false)

		// generate classnames
		const classNames = generateCN(
			"sui-drawer",
			{
				open: isOpen,
				"has-container": !!hasContainer,
				"no-shadow": !!disableShadow,
				overlay: !hasContainer,
				hidden: !isVisible,
				[size]: !!size,
				[position]: !!position,
			},
			`${!hasContainer && "sui-wp-overlay"} ${className}`,
		)

		/**
		 * First make the container visible then slide drawer
		 *
		 * @param {boolean} value
		 */
		const _toggleIsOpen = (value) => {
			const fMethod = value ? setIsVisible : setIsOpen
			const sMethod = value ? setIsOpen : setIsVisible

			fMethod(value)
			setTimeout(() => sMethod(value), 300)
		}

		const toggle = useCallback(() => {
			_toggleIsOpen(!isOpen)
		}, [isOpen])

		useImperativeHandle(ref, () => ({
			toggle,
			open: () => _toggleIsOpen(true),
			hide: () => _toggleIsOpen(false),
		}))

		const prevIsOpen = usePrevious(propIsOpen)

		useEffect(() => {
			if (prevIsOpen !== propIsOpen && isOpen !== propIsOpen) {
				toggle()
			}
		}, [propIsOpen])

		// Default children content
		// children = useDefaultChildren(children, "{drawer children content}")

		return (
			<DrawerProvider value={{ isOpen, setIsOpen, toggle }}>
				<div className={classNames} data-testid="drawer">
					<div className="sui-drawer__inner">{children}</div>
				</div>
			</DrawerProvider>
		)
	},
)

Drawer.displayName = "Drawer"

// Publish component(s)
export { Drawer }
