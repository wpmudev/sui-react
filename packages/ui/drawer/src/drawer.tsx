import React, {
	forwardRef,
	useCallback,
	useEffect,
	useImperativeHandle,
	useState,
	useRef,
} from "react"

import { _renderHTMLPropsSafely, generateCN } from "@wpmudev/sui-utils"

// Import required element(s)
import { useOuterClick, usePrevious, useStyles } from "@wpmudev/sui-hooks"
import { DrawerActions, DrawerTypes } from "./drawer.types"
import { DrawerProvider } from "./drawer-context"

// Build sidebar component
const Drawer = forwardRef<DrawerActions | null, DrawerTypes>(
	(
		{
			className = "",
			children,
			isOpen: propIsOpen = false,
			size = "default",
			placement = "right",
			hasContainer = false,
			hasOverlay = true,
			disableShadow = false,
			outerClickClose = true,
			isFullWidth = false,
			_htmlProps,
			_style,
		},
		ref,
	) => {
		const [isVisible, setIsVisible] = useState<boolean>(false)
		const [isOpen, setIsOpen] = useState<boolean>(propIsOpen ?? false)
		const drawerRef = useRef<HTMLDivElement | null>(null)

		// Hide dropdown when click outside of it
		useOuterClick(drawerRef, () => {
			if (isOpen && outerClickClose) {
				_toggleIsOpen(false)
			}
		})

		const { suiInlineClassname } = useStyles(
			_style,
			`${!hasContainer && "sui-wp-overlay"} ${className}`,
		)

		// generate classnames
		const classNames = generateCN(
			"sui-drawer",
			{
				open: isOpen,
				"has-container": !!hasContainer,
				"no-shadow": !!disableShadow,
				overlay: !hasContainer && hasOverlay,
				hidden: !isVisible,
				[size]: !!size,
				[placement]: !!placement,
				full: isFullWidth,
			},
			suiInlineClassname,
		)

		/**
		 * First make the container visible then slide drawer
		 *
		 * @param {boolean} value
		 */
		const _toggleIsOpen = (value: boolean) => {
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
		}, [isOpen, prevIsOpen, propIsOpen, toggle])

		// Default children content
		// children = useDefaultChildren(children, "{drawer children content}")

		return (
			<DrawerProvider value={{ isOpen, setIsOpen, toggle }}>
				<div
					className={classNames}
					data-testid="drawer"
					{..._renderHTMLPropsSafely(_htmlProps)}
				>
					<div className="sui-drawer__inner" ref={drawerRef}>
						{children}
					</div>
				</div>
			</DrawerProvider>
		)
	},
)

Drawer.displayName = "Drawer"

// Publish component(s)
export { Drawer }
