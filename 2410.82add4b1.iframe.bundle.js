"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[2410],{"./packages/ui/checkbox/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Eh:()=>CheckBoxGroups,Sc:()=>Checkbox,$Q:()=>CheckboxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const CheckboxContext=(0,react.createContext)({items:[],setItems:items=>{},onChange:(id,isChecked,groupId)=>{}}),CheckboxProvider=({children,onChange})=>{const[items,setItems]=(0,react.useState)([]),handleOnChange=(0,react.useCallback)(((id,isChecked,groupId)=>{"string"==typeof id&&setItems((prevItems=>{const obj={id,groupId,isChecked},existingItemIndex=prevItems.findIndex((item=>item.id===id&&item.groupId===groupId));return existingItemIndex>-1?prevItems[existingItemIndex]=obj:prevItems.push(obj),onChange&&onChange(prevItems),[...prevItems]}))}),[onChange]);return(0,jsx_runtime.jsxs)(CheckboxContext.Provider,{value:{onChange:handleOnChange,items,setItems},children:[children," "]})},useCheckbox=()=>{const ctx=(0,react.useContext)(CheckboxContext);if(!ctx)throw new Error("useCheckbox must be used within a CheckboxContextProvider");return{...ctx,onChange:(id,isChecked,groupId)=>{ctx?.onChange?.(id,isChecked,groupId)},addToList:(id,isChecked,groupId)=>{ctx?.onChange?.(id,isChecked,groupId)}}},Indeterminate=({...props})=>(0,jsx_runtime.jsx)("span",{...(0,src.X5)(props),children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"2",viewBox:"-1 0 12 3",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M9.7 0H0.3C0.134315 0 0 0.134315 0 0.3V1.7C0 1.86569 0.134315 2 0.3 2H9.7C9.86569 2 10 1.86569 10 1.7V0.3C10 0.134315 9.86569 0 9.7 0Z",fill:"white"})})}),Tick=({...props})=>(0,jsx_runtime.jsx)("span",{...(0,src.X5)(props),children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 10",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M4.23784 9.08831L0.337838 5.16588C0.103533 4.93023 0.103533 4.54815 0.337838 4.31247L1.18635 3.45906C1.42065 3.22338 1.80057 3.22338 2.03488 3.45906L4.66211 6.10137L9.96507 0.91168C10.1994 0.676028 10.5793 0.676028 10.8136 0.91168L11.6621 1.76509C11.8964 2.00074 11.8964 2.38283 11.6621 2.6185L5.08637 9.08833C4.85205 9.32398 4.47215 9.32398 4.23784 9.08831Z"})})}),Checkbox=({id,groupId="",name,value="",label,isLabelHidden=!1,isChecked=!1,isDisabled=!1,isSmall=!1,isError=!1,isIndeterminate=!1,onChange:propOnchange=(e=>{}),validate,validateOnMount,resetValidation,_htmlProps={},_style})=>{const ctx=useCheckbox(),[isHovered,isFocused,methods]=(0,hooks_src.Mj)({}),{suiInlineClassname}=(0,hooks_src.IS)(_style);let uuid=`sui-checkbox-${(0,react.useId)()}`;id&&(uuid=id),(0,react.useEffect)((()=>{ctx?.addToList(id,isChecked,groupId)}),[id,groupId,isChecked]);const inputProps={id:uuid,type:"checkbox",name,value,className:"sui-accessible-cta sui-checkbox__input",checked:isChecked,disabled:isDisabled,onChange:e=>{ctx?.onChange&&(ctx.onChange(uuid,e.target.checked,groupId),validate?.(e.target.checked)),propOnchange&&propOnchange(e)},"aria-labelledby":`${uuid}-label`,..._htmlProps};(0,react.useEffect)((()=>{validateOnMount&&validate?.(isChecked)}),[]);const containerProps={className:(0,src.n0)("sui-checkbox",{"hidden-label":isLabelHidden,indeterminate:isIndeterminate,hover:isHovered,focus:isFocused,disabled:isDisabled,checked:isChecked,sm:isSmall,error:isError},suiInlineClassname),...methods},boxProps={className:"sui-checkbox__box","aria-hidden":!0};return(0,jsx_runtime.jsxs)("label",{...containerProps,htmlFor:uuid,tabIndex:-1,"data-testid":"checkbox",children:[(0,jsx_runtime.jsx)("input",{"aria-label":"string"==typeof label&&label||"checkbox",...(0,src.X5)(inputProps),"data-testid":"checkbox-input"}),isIndeterminate?(0,jsx_runtime.jsx)(Indeterminate,{...boxProps}):(0,jsx_runtime.jsx)(Tick,{...boxProps,tabIndex:-1}),isLabelHidden?(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}):(0,jsx_runtime.jsx)("span",{className:"sui-checkbox__label",children:label})]})},_CheckboxGroupInner=({hasSubItems,title,children,commonCheckboxProps,isInline,id,_style})=>{const[isFirstRender,setIsFirstRender]=(0,react.useState)(!0),{items,setItems,addToList}=useCheckbox(),uuid=(0,react.useId)(),{suiInlineClassname}=(0,hooks_src.IS)(_style),checkboxGroupId=id??`sui-checkbox-group-${uuid}`,className=(0,src.n0)("sui-checkbox__group",{nested:hasSubItems,inline:isInline},suiInlineClassname),group=items.filter((item=>item.groupId===checkboxGroupId)),checkedItemsCount=group?.filter((i=>i.isChecked)).length,allChecked=checkedItemsCount===group.length,hasCheckedItems=checkedItemsCount>0,onCheckboxChange=(0,react.useCallback)((()=>{const toUpdate=[];items.forEach((item=>{item.groupId===checkboxGroupId?toUpdate.push({...item,isChecked:!allChecked||!allChecked&&checkedItemsCount>0}):toUpdate.push(item)})),setItems([...toUpdate])}),[items,allChecked,checkedItemsCount,checkboxGroupId,setItems]);return(0,react.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,jsx_runtime.jsxs)("div",{className,children:[hasSubItems&&(0,jsx_runtime.jsx)(Checkbox,{...commonCheckboxProps,id:checkboxGroupId,label:title??"",isChecked:allChecked&&hasCheckedItems,onChange:onCheckboxChange,isIndeterminate:!!hasCheckedItems&&(hasCheckedItems&&!allChecked)}),(0,jsx_runtime.jsx)("div",{className:"sui-checkbox__group-body",children:react.Children.map(children,((child,index)=>{const chekboxInitialId=child?.props?.id,initialIsChecked=child?.props?.isChecked,checkboxId=chekboxInitialId||`sui-checkbox-item-${uuid}-${index}`,currItem=items.find((i=>i.id===checkboxId&&i.groupId===checkboxGroupId));return(0,react.cloneElement)(child,{...commonCheckboxProps,id:checkboxId,...child?.props,groupId:checkboxGroupId,isChecked:isFirstRender?initialIsChecked:!!currItem?.isChecked})}))})]})},CheckboxGroup=({id,children,title="group title",hasSubItems=!0,isInline=!1,commonCheckboxProps={},onChange=()=>{},_isMultiGroup=!1,...styleProps})=>((content=null)=>_isMultiGroup?content:(0,jsx_runtime.jsx)(CheckboxProvider,{onChange,children:content}))((0,jsx_runtime.jsx)(_CheckboxGroupInner,{id,title,commonCheckboxProps:commonCheckboxProps??{},hasSubItems:hasSubItems??!1,isInline:isInline??!1,...styleProps,children})),CheckBoxGroups=({children,commonCheckboxProps={},onChange=()=>{},_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),className=(0,src.n0)("sui-checkbox-wrapper",{},suiInlineClassname);return(0,jsx_runtime.jsx)(CheckboxProvider,{onChange,children:(0,jsx_runtime.jsx)("div",{className,children:react.Children.map(children,(child=>(0,react.cloneElement)(child,{commonCheckboxProps:{...commonCheckboxProps,...child?.props?.commonCheckboxProps},_isMultiGroup:!0})))})})}},"./packages/ui/dropdown/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const DropdownMenu=({className="",children,_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-dropdown__menu",{},suiInlineClassname);return(0,jsx_runtime.jsx)("div",{className:classNames,children})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),checkbox_src=__webpack_require__("./packages/ui/checkbox/src/index.ts");const DropdownMenuItem=({icon,href,className="",children,isDisabled,isSelected=!1,onClick,variation="",variable,description="",_type="",_htmlProps={},_style={},_checkboxProps={}})=>{const[isHovered,isFocused,methods]=(0,hooks_src.Mj)({}),menuTitleId=`${`sui-dropdown-menu-item-${(0,react.useId)()}`}-title`;let TagName="li";href&&(TagName="a");const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-dropdown__menu-item",{hover:isHovered,focus:isFocused,disabled:isDisabled,selected:isSelected,[variation]:!(0,src.Im)(variation)},suiInlineClassname);let IconTag=null;icon&&(IconTag=components.Ay[icon]);const attrs={className:classNames,href:href||void 0,tabIndex:isDisabled?-1:0,children:(()=>{let content=(0,jsx_runtime.jsx)("span",{id:menuTitleId,children});switch(_type){case"select":break;case"select-checkbox":content=(0,jsx_runtime.jsx)(checkbox_src.Sc,{label:content,isSmall:!0,isDisabled,..._checkboxProps});break;case"select-variable":IconTag=IconTag||components.Ay.Add,content=(0,jsx_runtime.jsxs)("div",{id:menuTitleId,className:"sui-dropdown__menu-item--wrapper",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(IconTag,{size:"sm",className:"sui-dropdown__menu-item-icon"})}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("span",{className:"sui-dropdown__menu-item--title",children}),variable&&(0,jsx_runtime.jsxs)("span",{className:"sui-dropdown__menu-item--var",children:[" ",variable]}),description&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-item--desc",children:description})]})]})}return"select-variable"!==_type&&IconTag&&(content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconTag,{size:"sm",className:"sui-dropdown__menu-item-icon"}),content]})),content})(),...(0,src.X5)(_htmlProps)},btnAttr={};return onClick&&(btnAttr.onClick=onClick,btnAttr.onKeyDown=e=>(0,src.f$)(e,onClick)),(0,jsx_runtime.jsx)(TagName,{...attrs,...methods,"aria-labelledby":menuTitleId,...btnAttr})},DropdownMenuGroup=({title="",className="",children,_htmlProps={},_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),attrs={className:(0,src.n0)("sui-dropdown__menu-group",{},suiInlineClassname),...(0,src.X5)(_htmlProps)};return(0,jsx_runtime.jsxs)("li",{...attrs,children:[(0,jsx_runtime.jsx)("span",{className:"sui-dropdown__menu-group-title",children:title}),(0,jsx_runtime.jsx)("ul",{className:"sui-dropdown__menu-group-items",children})]})};var input_src=__webpack_require__("./packages/ui/input/src/index.ts"),spinner_src=__webpack_require__("./packages/ui/spinner/src/index.ts");const Dropdown=(0,react.forwardRef)((({type="",label,className,isSmall=!1,iconOnly,isFixedHeight=!0,children,menu,placement="right",buttonIcon,onMenuClick,trigger,renderContentOnTop=!1,isResponsive=!1,isFluid=!1,isDisabled=!1,closeOnOuterClick=!0,colorScheme="black",onToggle=()=>{},allowSearch=!1,onSearch=query=>{},isAsync=!1,asyncOptions={},getOptions,menuCustomWidth,searchPlaceholder,_htmlProps={},_style={}},ref)=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),[query,setQuery]=(0,react.useState)(""),[isFetchedAll,setIsFetchedAll]=(0,react.useState)(!1),[isLoading,setIsLoading]=(0,react.useState)(!1),[altLoader,setAltLoader]=(0,react.useState)(!1),[options,setOptions]=(0,react.useState)(menu),[page,setPage]=(0,react.useState)(1),dropdownRef=(0,react.useRef)(null),popoverRef=(0,react.useRef)(null),searchInputRef=(0,react.useRef)(null),id=`sui-dropdown-${(0,react.useId)()}`;(0,hooks_src.xk)(dropdownRef,(()=>{closeOnOuterClick&&handleOnOpen(!1)}));const{handleScroll}=(0,hooks_src.st)((()=>{isLoading||isFetchedAll||(loadFromAPI(),setAltLoader(!0))}));(0,react.useImperativeHandle)(ref,(()=>({open:()=>handleOnOpen(!0),close:()=>handleOnOpen(!1),toggle:()=>handleOnOpen(!isOpen)})));const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),searchQuery=(0,hooks_src.d7)(query,500,(()=>{isAsync&&(setPage(1),setIsFetchedAll(!1))})),wrapperClasses=(0,src.n0)("sui-dropdown",{sm:isSmall,open:isOpen},suiInlineClassname);(0,react.useEffect)((()=>{if(!isOpen||!popoverRef.current||!dropdownRef.current)return;const popoverElement=popoverRef.current,triggerRect=dropdownRef.current.getBoundingClientRect(),spaceAbove=triggerRect.top,spaceBelow=window.innerHeight-triggerRect.bottom,popoverHeight=popoverElement.offsetHeight,showBelow=spaceBelow>popoverHeight,spaceAboveLimited=spaceAbove<popoverHeight;popoverElement.classList.toggle("sui-dropdown__popover--placement-top",!showBelow&&!spaceAboveLimited)}),[isOpen]),(0,react.useEffect)((()=>{isAsync||setOptions(menu)}),[isAsync,menu]);const loadFromAPI=(0,react.useCallback)((async()=>{if(!isAsync||isFetchedAll||isLoading)return;if(!getOptions)throw new Error("'getOptions' method is missing");const{perPage=5}=asyncOptions??{};setIsLoading(!0);const opt={page},data=await getOptions(searchQuery,opt,options),{items,hasMore,additional}=data;setOptions(1===page?items:[...options??[],...items]),setIsLoading(!1),setAltLoader(!1),hasMore?setPage(page+1):setIsFetchedAll(!0)}),[isAsync,isFetchedAll,isLoading,getOptions,asyncOptions,page,searchQuery,options]),prevQuery=(0,hooks_src.ZC)(searchQuery);(0,react.useEffect)((()=>{(prevQuery??"")!==searchQuery&&(isAsync&&!isLoading&&(setOptions([]),loadFromAPI()),onSearch&&onSearch(searchQuery))}),[searchQuery,onSearch]);const handleOnOpen=(0,react.useCallback)((async isDropdownOpen=>{setIsOpen(isDropdownOpen),allowSearch&&setTimeout((()=>searchInputRef.current?.focus()),100),isAsync&&isDropdownOpen&&loadFromAPI(),onToggle(isDropdownOpen)}),[isAsync,onToggle]),renderMenus=menus=>(menus||[])?.map(((menuItem,index)=>menuItem?.menus?(0,jsx_runtime.jsx)(DropdownMenuGroup,{title:menuItem.label,children:renderMenus(menuItem?.menus)},index):(onMenuClick&&(menuItem.props=menuItem.props??{},menuItem.props.onClick=e=>{onMenuClick(menuItem,e);const updatedOptions=options?.map((item=>({...item,isSelected:item.id===menuItem.id})));setOptions(updatedOptions),menuItem.isSelected=!0,"select-checkbox"!==type&&setIsOpen(!1)}),(0,jsx_runtime.jsx)(DropdownMenuItem,{isSelected:menuItem.isSelected,...menuItem.props,_type:type,children:menuItem.label},index)))),onSearchCallback=(0,react.useCallback)((event=>{setQuery(event?.target?.value)}),[]);return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:wrapperClasses,"data-testid":"dropdown",...(0,src.X5)(_htmlProps),children:[trigger||(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.$,{startIcon:buttonIcon??"Menu",iconOnly:iconOnly??!1,type:"secondary",isSmall:isSmall??!1,onClick:()=>handleOnOpen(!isOpen),isResponsive,isDisabled,...!iconOnly&&{endIcon:"ChevronDown"},colorScheme,children:label})}),(0,jsx_runtime.jsxs)("div",{id,tabIndex:-1,ref:popoverRef,className:(0,src.n0)("sui-dropdown__popover",{[`placement-${placement}`]:!(0,src.Im)(placement??""),"fixed-height":isFixedHeight,fluid:isFluid,[type]:!(0,src.Im)(type??"")}),...label&&{"aria-labelledby":`${id}__label`,"aria-label":`${id}__label`},style:{width:`${menuCustomWidth}px`},children:[renderContentOnTop&&!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children}),(!!menu||isAsync)&&(0,jsx_runtime.jsxs)(DropdownMenu,{children:[allowSearch&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-nav-search",children:(0,jsx_runtime.jsx)(input_src.p,{ref:searchInputRef,icon:"Search",iconPosition:"start",isSmall:!0,placeholder:searchPlaceholder??"Search",onChange:onSearchCallback})}),(0,jsx_runtime.jsxs)("ul",{className:"sui-dropdown__menu-items",onScroll:handleScroll,children:[renderMenus(options),isLoading&&(0,jsx_runtime.jsxs)("li",{className:(0,src.n0)("",{"sui-dropdown__menu-item--loading":!0,"sui-dropdown__menu-item--loading-alt":altLoader}),tabIndex:-1,children:[(0,jsx_runtime.jsx)(spinner_src.y,{colorScheme:altLoader?"dark":"primary",loaderSize:"sm"}),(0,jsx_runtime.jsx)("span",{children:altLoader?"Loading...":"Loading"})]})]})]}),!!children&&!renderContentOnTop&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children})]})]})}));Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"Dropdown Component - A reusable dropdown UI component.\n\n@param {DropdownProps} props - The properties and event handlers for the Dropdown component.\n@return {JSX.Element} JSX Element representing the Dropdown component.",methods:[],displayName:"Dropdown",props:{type:{defaultValue:{value:'""',computed:!1},required:!1},isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFixedHeight:{defaultValue:{value:"true",computed:!1},required:!1},placement:{defaultValue:{value:'"right"',computed:!1},required:!1},renderContentOnTop:{defaultValue:{value:"false",computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isFluid:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},closeOnOuterClick:{defaultValue:{value:"true",computed:!1},required:!1},colorScheme:{defaultValue:{value:'"black"',computed:!1},required:!1},onToggle:{defaultValue:{value:"() => { }",computed:!1},required:!1},allowSearch:{defaultValue:{value:"false",computed:!1},required:!1},onSearch:{defaultValue:{value:"(query) => { }",computed:!1},required:!1},isAsync:{defaultValue:{value:"false",computed:!1},required:!1},asyncOptions:{defaultValue:{value:"{}",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1},_style:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/spinner/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner,p:()=>useSpinner});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SpinnerLoader=({colorScheme,_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),attrs={cx:"50%",cy:"50%",r:44};return(0,jsx_runtime.jsx)("div",{className:(0,src.n0)("sui-spinner__loader",{},suiInlineClassname),children:(0,jsx_runtime.jsxs)("svg",{className:"sui-spinner__icon",viewBox:"0 0 100 100",children:[(0,jsx_runtime.jsx)("title",{children:"loading"}),(0,jsx_runtime.jsx)("circle",{className:"sui-spinner__icon--background",...attrs}),(0,jsx_runtime.jsx)("circle",{className:"sui-spinner__icon--stroke",...attrs})]})})},Spinner=({loaderSize="lg",colorScheme="primary",isContained=!1,isAbsolute=!1,_htmlProps={},_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-spinner",{absolute:isAbsolute,[loaderSize]:!(0,src.Im)(loaderSize??""),dark:!(0,src.Im)(colorScheme)&&"dark"===colorScheme,contained:isContained},suiInlineClassname);return(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"spinner",...(0,src.X5)(_htmlProps),children:(0,jsx_runtime.jsx)(SpinnerLoader,{colorScheme,loaderSize:loaderSize??"lg"})})};var client=__webpack_require__("./node_modules/react-dom/client.js");const useSpinner=(targetRef,{colorScheme,loaderSize})=>{const[isVisible,setIsVisible]=(0,react.useState)(!1),spinnerId=`sui-spinner-${(0,react.useId)()}`;(0,react.useEffect)((()=>{const currentTargetRef=targetRef?.current;if(!currentTargetRef)return;if(!isVisible){const spinnerDiv=document.getElementById(spinnerId);return void(spinnerDiv?.parentNode&&(currentTargetRef.removeChild(spinnerDiv),currentTargetRef.classList.remove("sui-spinner__wrapper")))}const fakeDiv=document.createElement("div");return isVisible&&(fakeDiv.id=spinnerId,fakeDiv.classList.add("sui-spinner__fake"),currentTargetRef.classList.add("sui-spinner__wrapper"),(0,client.createRoot)(fakeDiv).render((0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:`sui-spinner__overlay sui-spinner__overlay--${colorScheme}`}),(0,jsx_runtime.jsx)(Spinner,{colorScheme,loaderSize,isAbsolute:!0})]})),targetRef.current.appendChild(fakeDiv)),()=>{if(fakeDiv){const spinnerDiv=document.getElementById(spinnerId);spinnerDiv?.parentNode&&(currentTargetRef?.removeChild(spinnerDiv),currentTargetRef?.classList.remove("sui-spinner__wrapper"))}}}),[colorScheme,loaderSize,targetRef,isVisible,spinnerId]);return{show:()=>setIsVisible(!0),hide:()=>setIsVisible(!1),isVisible}}}}]);