import React, {
	useRef,
	useState,
	useId,
	forwardRef,
	useImperativeHandle,
	ChangeEvent,
	useCallback,
	useEffect,
} from "react"

import { _renderHTMLPropsSafely, generateCN, isEmpty } from "@wpmudev/sui-utils"
import { Button, ButtonProps } from "@wpmudev/sui-button"
import {
	useOuterClick,
	useStyles,
	useBottomEnd,
	usePrevious,
	useDebounce,
} from "@wpmudev/sui-hooks"
import { DropdownMenu } from "./dropdown-menu"
import { DropdownMenuItem } from "./dropdown-menu-item"
import { DropdownMenuGroup } from "./dropdown-menu-group"
import {
	DropdownProps,
	DropdownRefProps,
	MenuGroupProps,
	MenuItemProps,
} from "./dropdown.types"
import { Input } from "@wpmudev/sui-input"
import { Spinner } from "@wpmudev/sui-spinner"

/**
 * Dropdown Component - A reusable dropdown UI component.
 *
 * @param {DropdownProps} props - The properties and event handlers for the Dropdown component.
 * @return {JSX.Element} JSX Element representing the Dropdown component.
 */
const Dropdown = forwardRef<DropdownRefProps | null, DropdownProps>(
	(
		{
			type = "",
			label,
			className,
			isSmall = false,
			iconOnly,
			isFixedHeight = true,
			children,
			menu,
			placement = "right",
			buttonIcon,
			onMenuClick,
			trigger,
			renderContentOnTop = false,
			isResponsive = false,
			isFluid = false,
			closeOnOuterClick = true,
			colorScheme = "black",
			onToggle = () => {},
			// search
			allowSearch = false,
			onSearch = (query: string) => {},
			// async
			isAsync = false,
			asyncOptions = {},
			getOptions,
			menuCustomWidth,
			_htmlProps = {},
			_style = {},
		},
		ref,
	) => {
		// State to manage the dropdown's open/closed status.
		const [isOpen, setIsOpen] = useState<boolean>(false)
		// Set search query
		const [query, setQuery] = useState("")
		const debounceSearchQuery = useDebounce(query, 500)
		// Set loader when loading options from API
		const [isLoading, setIsLoading] = useState(false)
		// Dropdown options list
		const [options, setOptions] = useState<DropdownProps["menu"]>(menu)
		// Holds current page number (when loading options from API)
		const [page, setPage] = useState(1)
		// Create a ref to access the dropdown's outer container element.
		const dropdownRef = useRef<HTMLDivElement | null>(null)
		const searchInputRef = useRef<HTMLInputElement | null>(null)
		// Generate a unique identifier for the dropdown component.
		const id = `sui-dropdown-${useId()}`

		// Handle the closing of the dropdown when clicking outside the component.
		useOuterClick(dropdownRef, () => {
			if (closeOnOuterClick) {
				handleOnOpen(false)
			}
		})

		const { handleScroll } = useBottomEnd(() => {
			if (!isLoading) {
				loadFromAPI()
			}
		})

		useImperativeHandle(ref, () => ({
			open: () => handleOnOpen(true),
			close: () => handleOnOpen(false),
			toggle: () => handleOnOpen(!isOpen),
		}))

		const { suiInlineClassname } = useStyles(_style, className)

		// Generate classes for the dropdown's wrapper based on the component's props.
		const wrapperClasses = generateCN(
			"sui-dropdown",
			{
				sm: isSmall,
				open: isOpen,
			},
			suiInlineClassname,
		)

		// Update internal options state when menu prop changes
		useEffect(() => {
			if (!isAsync) {
				setOptions(menu)
			}
		}, [isAsync, menu])

		/**
		 * Load options from next page
		 */
		const loadFromAPI = useCallback(
			async (pageNum: number = page) => {
				const { perPage = 5, totalItems } = asyncOptions ?? {}
				const totalFetched = perPage * pageNum
				const nextPage = pageNum + 1

				// return if getOptions prop is missing or fetched all items
				if (!getOptions || (!!totalItems && totalFetched >= totalItems)) {
					return
				}

				// Enable loader
				setIsLoading(true)
				// Get options from API (to be hanlded in parent component)
				const items = await getOptions(pageNum, perPage, debounceSearchQuery)

				// Update options list
				setOptions(1 === pageNum ? items : [...(options ?? []), ...items])
				setIsLoading(false)
				setPage(nextPage)
			},
			[asyncOptions, debounceSearchQuery, getOptions, options, page],
		)

		// prev search query
		const prevQuery = usePrevious(debounceSearchQuery)

		useEffect(() => {
			// Do nothing if same query detected
			if ((prevQuery ?? "") !== debounceSearchQuery) {
				// when isAsync is enabled then load from API
				if (isAsync && !isLoading) {
					setOptions([])
					setPage(1)
					loadFromAPI(1)
				}

				if (!!onSearch) {
					onSearch(debounceSearchQuery)
				}
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [debounceSearchQuery, onSearch])

		/**
		 * Handle open and close actions
		 */
		const handleOnOpen = useCallback(
			async (isDropdownOpen: boolean) => {
				setIsOpen(isDropdownOpen)

				// Focus search input when dropdown opens
				if (allowSearch) {
					setTimeout(() => searchInputRef.current?.focus(), 100)
				}

				// load options
				if (!!isAsync && isDropdownOpen) {
					loadFromAPI()
				}

				// Pass state to parent component
				onToggle(isDropdownOpen)
			},
			// eslint-disable-next-line react-hooks/exhaustive-deps
			[isAsync, onToggle],
		)

		// Function to recursively render menu items and groups.
		const renderMenus = (menus: DropdownProps["menu"]) => {
			return (menus || [])?.map((menuItem: Record<string, any>, index) => {
				// If it's a group item, render the MenuGroup component.
				if (!!menuItem?.menus) {
					return (
						<DropdownMenuGroup key={index} title={menuItem.label}>
							{renderMenus(menuItem?.menus)}
						</DropdownMenuGroup>
					)
				}

				// Bind onClick with onMenuClick prop
				if (onMenuClick) {
					menuItem.props = menuItem.props ?? {}
					menuItem.props.onClick = (e: ChangeEvent<unknown>) => {
						onMenuClick(menuItem.id, e)
					}
				}

				// Otherwise, render the MenuItem component.
				return (
					<DropdownMenuItem key={index} {...menuItem.props} _type={type}>
						{menuItem.label}
					</DropdownMenuItem>
				)
			})
		}

		/**
		 * Search input callback
		 */
		const onSearchCallback = useCallback(
			(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
				setQuery(event?.target?.value)
			},
			[],
		)

		return (
			<div
				ref={dropdownRef}
				className={wrapperClasses}
				data-testid="dropdown"
				{..._renderHTMLPropsSafely(_htmlProps)}
			>
				{!!trigger ? (
					trigger
				) : (
					<div>
						<Button
							startIcon={buttonIcon ?? "Menu"}
							iconOnly={iconOnly ?? false}
							type="secondary"
							isSmall={isSmall ?? false}
							onClick={() => handleOnOpen(!isOpen)}
							isResponsive={isResponsive}
							{...(!iconOnly && { endIcon: "ChevronDown" })}
							colorScheme={colorScheme as ButtonProps["colorScheme"]}
						>
							{label}
						</Button>
					</div>
				)}
				<div
					id={id}
					tabIndex={-1}
					className={generateCN("sui-dropdown__popover", {
						[`placement-${placement}`]: !isEmpty(placement ?? ""),
						"fixed-height": isFixedHeight,
						fluid: isFluid,
						[type]: !isEmpty(type ?? ""),
					})}
					{...(label && {
						"aria-labelledby": `${id}__label`,
						"aria-label": `${id}__label`,
					})}
					style={{
						width: `${menuCustomWidth}px`,
					}}
				>
					{renderContentOnTop && !!children && (
						<div className="sui-dropdown__menu-content">{children}</div>
					)}
					{/* Render the dropdown menu items */}
					{(!!menu || isAsync) && (
						<DropdownMenu>
							{allowSearch && (
								<div className="sui-dropdown__menu-nav-search">
									<Input
										ref={searchInputRef}
										icon="Search"
										iconPosition="start"
										isSmall={true}
										placeholder="Search"
										onChange={onSearchCallback}
									/>
								</div>
							)}

							<ul className="sui-dropdown__menu-items" onScroll={handleScroll}>
								{renderMenus(options)}
								{isLoading && (
									<li
										className="sui-dropdown__menu-item--loading"
										tabIndex={-1}
									>
										<Spinner loaderSize="sm" />
										<span>Loading</span>
									</li>
								)}
							</ul>
						</DropdownMenu>
					)}
					{/* Render additional children passed to the Dropdown component */}
					{!!children && !renderContentOnTop && (
						<div className="sui-dropdown__menu-content">{children}</div>
					)}
				</div>
			</div>
		)
	},
)

Dropdown.displayName = "Dropdown"

export { Dropdown }
