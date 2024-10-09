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
import { DropdownProps, DropdownRefProps } from "./dropdown.types"
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
			arrow = true,
			dropdownArrow = false,
			buttonIcon,
			onMenuClick,
			trigger,
			renderContentOnTop = false,
			isResponsive = false,
			isFluid = false,
			size = "md",
			isDisabled = false,
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
			searchPlaceholder,
			_buttonProps = {},
			_htmlProps = {},
			_style = {},
		},
		ref,
	) => {
		// State to manage the dropdown's open/closed status.
		const [isOpen, setIsOpen] = useState<boolean>(false)
		// Set search query
		const [query, setQuery] = useState("")
		const [isFetchedAll, setIsFetchedAll] = useState(false)
		// Set loader when loading options from API
		const [isLoading, setIsLoading] = useState(false)
		// set alternate loading style
		const [altLoader, setAltLoader] = useState(false)
		// Dropdown options list
		const [options, setOptions] = useState<DropdownProps["menu"]>(menu)
		// Holds current page number (when loading options from API)
		const [page, setPage] = useState(1)
		// Create a ref to access the dropdown's outer container element.
		const dropdownRef = useRef<HTMLDivElement | null>(null)
		const popoverRef = useRef<HTMLDivElement | null>(null)
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
			if (!isLoading && !isFetchedAll) {
				loadFromAPI()
				setAltLoader(true)
			}
		})

		useImperativeHandle(ref, () => ({
			open: () => handleOnOpen(true),
			close: () => handleOnOpen(false),
			toggle: () => handleOnOpen(!isOpen),
		}))

		const { suiInlineClassname } = useStyles(_style, className)

		const searchQuery = useDebounce(query, 500)

		// Generate classes for the dropdown's wrapper based on the component's props.
		const wrapperClasses = generateCN(
			"sui-dropdown",
			{
				sm: isSmall,
				open: isOpen,
			},
			suiInlineClassname,
		)

		// show dropdown on top/bottom based on the space available
		useEffect(() => {
			if (!isOpen || !popoverRef.current || !dropdownRef.current) return

			const popoverElement = popoverRef.current
			const triggerElement = dropdownRef.current

			const triggerRect = triggerElement.getBoundingClientRect()

			// Calculate the space available above and below the trigger button
			const spaceAbove = triggerRect.top
			const spaceBelow = window.innerHeight - triggerRect.bottom

			// Get the height of the popover
			const popoverHeight = popoverElement.offsetHeight

			// Determine if the popover height fits in the space below
			const showBelow = spaceBelow > popoverHeight

			// Determine if the space above is limited
			const spaceAboveLimited = spaceAbove < popoverHeight

			// Set the appropriate CSS class for placement
			popoverElement.classList.toggle(
				"sui-dropdown__popover--placement-top",
				!showBelow && !spaceAboveLimited,
			)
		}, [isOpen])

		// Update internal options state when menu prop changes
		useEffect(() => {
			if (!isAsync) {
				setOptions(menu)
			}
		}, [isAsync, menu])

		/**
		 * Load options from next page
		 */
		const loadFromAPI = useCallback(async () => {
			// Do not continue
			if (!isAsync || isFetchedAll || isLoading) {
				return
			}

			// return if getOptions prop is missing
			if (!getOptions) {
				throw new Error("'getOptions' method is missing")
				return
			}

			const { perPage = 5 } = asyncOptions ?? {}

			// Enable loader
			setIsLoading(true)

			const opt = { page }

			// Get options from API (to be hanlded in parent component)
			const data = await getOptions(searchQuery, opt, options)
			const { items, hasMore, additional } = data

			// Update options list
			setOptions(1 === page ? items : [...(options ?? []), ...items])
			setIsLoading(false)
			setAltLoader(false)

			// Increase page
			if (hasMore) {
				setPage(page + 1)
			} else {
				setIsFetchedAll(true)
			}
		}, [
			isAsync,
			isFetchedAll,
			isLoading,
			getOptions,
			asyncOptions,
			page,
			searchQuery,
			options,
		])

		// prev search query
		const prevQuery = usePrevious(searchQuery)

		useEffect(() => {
			// Do nothing if same query detected
			if ((prevQuery ?? "") !== searchQuery) {
				// when isAsync is enabled then load from API
				if (isAsync && !isLoading) {
					setOptions([])
					loadFromAPI()
				}

				if (!!onSearch) {
					onSearch(searchQuery)
				}
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [searchQuery, onSearch])

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

				// load options if not loaded before
				if (!!isAsync && isDropdownOpen && (options ?? [])?.length <= 0) {
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
						onMenuClick(menuItem, e)
						// Update isSelected property of all menu items
						const updatedOptions = options?.map((item) => ({
							...item,
							isSelected: item.id === menuItem.id, // Set the clicked item's isSelected to true, and others to false
						}))
						setOptions(updatedOptions)

						menuItem.isSelected = true
						if ("select-checkbox" !== type) {
							setIsOpen(false)
						}
					}
				}

				// Otherwise, render the MenuItem component.
				return (
					<DropdownMenuItem
						key={index}
						isSelected={menuItem.isSelected}
						{...menuItem.props}
						_type={type}
					>
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
				// Reset fetched all flag and page to 1
				if (isAsync) {
					setTimeout(() => {
						setPage(1)
						setIsFetchedAll(false)
					}, 100)
				}
			},
			[isAsync],
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
							isDisabled={isDisabled}
							{...(!iconOnly && arrow && { endIcon: "ChevronDown" })}
							colorScheme={colorScheme as ButtonProps["colorScheme"]}
							{..._buttonProps}
						>
							{label}
						</Button>
					</div>
				)}
				<div
					id={id}
					tabIndex={-1}
					ref={popoverRef}
					className={generateCN("sui-dropdown__popover", {
						[`placement-${placement}`]: !isEmpty(placement ?? ""),
						"fixed-height": isFixedHeight,
						fluid: isFluid,
						[size]: !isFluid,
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
					{dropdownArrow && (
						<div className="sui-dropdown__popover--arrow"></div>
					)}
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
										placeholder={searchPlaceholder ?? "Search"}
										onChange={onSearchCallback}
									/>
								</div>
							)}

							<ul className="sui-dropdown__menu-items" onScroll={handleScroll}>
								{renderMenus(options)}
								{isLoading && (
									<li
										className={generateCN("", {
											"sui-dropdown__menu-item--loading": true,
											"sui-dropdown__menu-item--loading-alt": altLoader,
										})}
										tabIndex={-1}
									>
										<Spinner
											colorScheme={altLoader ? "dark" : "primary"}
											loaderSize="sm"
										/>
										<span>{altLoader ? "Loading..." : "Loading"}</span>
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
