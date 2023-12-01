"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[2589],{"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,style})=>{const slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Kn)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter});return(0,jsx_runtime.jsx)("div",{className:classNames,style,"data-testid":"box-group",children:slots})},Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall,className="",style={},...props})=>{const hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!!headerLeft,hasRight=!(0,src.o8)(headerRight)&&!!headerRight,classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...props,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:(0,src.uY)("suicons",{[icon??""]:!0,lg:!0},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/dropdown/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const DropdownMenu=({className="",children})=>{const classNames=(0,src.uY)("sui-dropdown__menu",{},className);return(0,jsx_runtime.jsx)("ul",{className:classNames,children})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const DropdownMenuItem=({icon,href,className="",children,isDisabled,onClick,variation="",...props})=>{const[isHovered,isFocused,methods]=(0,hooks_src.X2)({}),menuTitleId=`${`sui-dropdown-menu-item-${(0,react.useId)()}`}-title`;let TagName="li";href&&(TagName="a");const classNames=(0,src.uY)("sui-dropdown__menu-item",{hover:isHovered,focus:isFocused,disabled:isDisabled,[variation]:!(0,src.xb)(variation)},className);let IconTag=null;icon&&(IconTag=components.ZP[icon]);const attrs={className:classNames,href:href||void 0,tabIndex:isDisabled?-1:0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm",className:"sui-dropdown__menu-item-icon"}),(0,jsx_runtime.jsx)("span",{id:menuTitleId,children})]}),...props},btnAttr={};return onClick&&(btnAttr.onClick=onClick,btnAttr.onKeyDown=e=>(0,src.Jw)(e,onClick)),(0,jsx_runtime.jsx)(TagName,{...attrs,...methods,"aria-labelledby":menuTitleId,...btnAttr})},DropdownMenuGroup=({title="",className="",children,...props})=>{const attrs={className:(0,src.uY)("sui-dropdown__menu-group",{},className),...props};return(0,jsx_runtime.jsxs)("li",{...attrs,children:[(0,jsx_runtime.jsx)("span",{className:"sui-dropdown__menu-group-title",children:title}),(0,jsx_runtime.jsx)("ul",{className:"sui-dropdown__menu-group-items",children})]})},Dropdown=(0,react.forwardRef)((({label,className,isSmall,iconOnly,isFixedHeight=!0,current,children,menu,direction,buttonIcon,onMenuClick,trigger=null,renderContentOnTop,...props},ref)=>{const dropdownRef=(0,react.useRef)(null),id=`sui-dropdown-${(0,react.useId)()}`,[isOpen,setIsOpen]=(0,react.useState)(!1);(0,hooks_src.rw)(dropdownRef,(()=>{setIsOpen(!1)})),(0,react.useImperativeHandle)(ref,(()=>({open:()=>setIsOpen(!0),close:()=>setIsOpen(!1),toggle:()=>setIsOpen(!isOpen)})));const wrapperClasses=(0,src.uY)("sui-dropdown",{sm:isSmall,open:isOpen},className),renderMenus=menus=>(menus||[])?.map(((menuItem,index)=>menuItem.menus?(0,jsx_runtime.jsx)(DropdownMenuGroup,{title:menuItem.label,children:renderMenus(menuItem.menus)},index):(onMenuClick&&(menuItem.props.onClick=e=>onMenuClick(menuItem.id,e)),(0,jsx_runtime.jsx)(DropdownMenuItem,{...menuItem.props,children:menuItem.label},index))));return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:wrapperClasses,"data-testid":"dropdown",children:[trigger||(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{startIcon:buttonIcon??"Menu",iconOnly:iconOnly??!1,color:"black",appearance:"secondary",isSmall:isSmall??!1,onClick:()=>setIsOpen(!isOpen),...!iconOnly&&{endIcon:"ChevronDown"},...props,children:label})}),(0,jsx_runtime.jsxs)("div",{id,tabIndex:-1,className:(0,src.uY)("sui-dropdown__popover",{[`direction-${direction}`]:!(0,src.xb)(direction??""),"fixed-height":isFixedHeight}),...label&&{"aria-labelledby":`${id}__label`,"aria-label":`${id}__label`},children:[renderContentOnTop&&!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children}),!!menu&&(0,jsx_runtime.jsx)(DropdownMenu,{className:"sui-dropdown__menu-nav",children:renderMenus(menu)}),!!children&&!renderContentOnTop&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children})]})]})}));Dropdown.displayName="Dropdown"},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Col,X:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts"));const Row=({align,className,children,...props})=>{const expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames="sui-row";for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.xb)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"grid",...props,children})},Col=({size,children,className,...props})=>{const classNames=(0,src.uY)("sui-col",{[size]:!!size},className);return"colSize"in props&&delete props.colSize,"size"in props&&delete props.size,(0,jsx_runtime.jsx)("div",{className:classNames,...props,children})}},"./packages/ui/table/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iA:()=>Table,RM:()=>TableBody,pj:()=>TableCell,yt:()=>TableFooter,ss:()=>TableHead,SC:()=>TableRow});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const TableContext=(0,react.createContext)(null),TableContextProvider=({children,props})=>{const[filterValues,setFilterValues]=(0,react.useState)([]),[selected,setSelected]=(0,react.useState)([]),[rows,setRows]=(0,react.useState)([]),[columns,setColumns]=(0,react.useState)([]),[forceCollapse,setForceCollapse]=(0,react.useState)(!1),[hasStickyCols,setHasStickyCols]=(0,react.useState)(!1),[sortBy,setSortBy]=(0,react.useState)({column:"",order:"asc"}),{wrapperRef}=props,detectSticky=(0,react.useCallback)((()=>{const{scrollWidth,clientWidth}=wrapperRef?.current??{};scrollWidth&&clientWidth&&setHasStickyCols(scrollWidth>clientWidth)}),[wrapperRef]);(0,react.useEffect)((()=>{new ResizeObserver(detectSticky).observe(wrapperRef?.current)}),[detectSticky,wrapperRef]);const onSelect=(0,react.useCallback)(((id,isChecked=!1)=>{let tempSelected=[...selected];switch(!0){case"select-all"===id:tempSelected=isChecked?rows:[];break;case isChecked:tempSelected.push(id);break;case!isChecked:tempSelected.splice(tempSelected.indexOf(id),1)}setSelected(tempSelected)}),[rows,selected]),setFilter=(0,react.useCallback)(((id,val)=>{setFilterValues({...filterValues,[id]:val})}),[filterValues]),triggerAction=(0,react.useCallback)(((action,data)=>{props?.onAction&&props?.onAction?.(action,data)}),[props]),applyFilters=(0,react.useCallback)((()=>{triggerAction("apply-filters",filterValues)}),[filterValues,triggerAction]),clearFilters=(0,react.useCallback)((()=>{setFilterValues([]),triggerAction("clear-filters",[])}),[triggerAction]);return(0,jsx_runtime.jsx)(TableContext.Provider,{value:{...props,triggerAction,rows,setRows,columns,setColumns,selected,onSelect,forceCollapse,setForceCollapse,filterValues,setFilter,sortBy,setSortBy,applyFilters,clearFilters,hasStickyCols,setHasStickyCols},children})};var button_src=__webpack_require__("./packages/ui/button/src/index.ts"),input_src=__webpack_require__("./packages/ui/input/src/index.ts"),select_src=__webpack_require__("./packages/ui/select/src/index.ts"),dropdown_src=__webpack_require__("./packages/ui/dropdown/src/index.ts"),box_src=__webpack_require__("./packages/ui/box/src/index.ts"),grid_src=__webpack_require__("./packages/ui/grid/src/index.ts"),form_field_src=__webpack_require__("./packages/ui/form-field/src/index.ts");const TableToolbarContent=({id,filterBtnId,isExpanded})=>{const ctx=(0,react.useContext)(TableContext),filters=ctx?.filters;if(!filters)return null;const renderField=(filter,index)=>(0,jsx_runtime.jsx)(form_field_src.W,{id:filter?.id??"",label:filter?.title??"",isSmall:!0,children:{select:(0,jsx_runtime.jsx)(select_src.Ph,{onChange:optionID=>ctx?.setFilter(filter?.id??"",optionID),id:filter?.id,...filter?.props,selected:ctx?.filterValues?.[filter?.id]}),text:(0,jsx_runtime.jsx)(input_src.I,{id:filter?.id??"",...filter?.props,defaultValue:ctx?.filterValues?.[filter?.id],onChange:e=>{"string"!=typeof e&&ctx?.setFilter(filter?.id??"",e.target?.value)}})}[filter.type]},index),filterActions=(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-cta",children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"black",isSmall:!0,isDisabled:ctx?.filterValues?.length<=0,onClick:()=>ctx?.clearFilters(),children:"Clear filters"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"black",isSmall:!0,isDisabled:ctx?.filterValues?.length<=0,onClick:()=>ctx?.triggerAction("apply-filters",ctx?.filterValues),children:"Apply filters"})]});return(0,jsx_runtime.jsx)("div",{id,"aria-labelledby":filterBtnId,className:(0,src.uY)("sui-table__toolbar-body",{expanded:isExpanded||!!ctx?.filtersPopover,inline:!ctx?.filtersPopover}),children:ctx?.filtersPopover?(0,jsx_runtime.jsxs)(react.Fragment,{children:[filters?.map(((filter,index)=>renderField(filter,index))),filterActions]}):(0,jsx_runtime.jsxs)(box_src.x,{children:[(0,jsx_runtime.jsx)(box_src.f,{children:(0,jsx_runtime.jsx)(grid_src.X,{align:{sm:"inline"},children:(filters??[])?.map(((filter,index)=>(0,jsx_runtime.jsx)(grid_src.J,{size:3,children:renderField(filter,index)},index)))})}),(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,isFooter:!0,children:filterActions})]})})},TableToolbar=({})=>{const[isExpanded,setIsExpanded]=(0,react.useState)(!1),[bulkAction,setBulkAction]=(0,react.useState)(""),uniqueId=(0,react.useId)(),filterBtnId=`sui-table-toolbar-filter-${uniqueId}`,bodyId=`sui-table-toolbar-body-${uniqueId}`,bulkDropdown=`sui-table-toolbar-bulk-${uniqueId}`,ctx=(0,react.useContext)(TableContext),onSearch=(0,react.useCallback)((e=>{"string"!=typeof e&&ctx?.triggerAction("search-items",e?.target?.value)}),[ctx]),onApplyBulkAction=(0,react.useCallback)((()=>{ctx?.triggerAction("bulk-action",bulkAction)}),[bulkAction,ctx]),content=(0,jsx_runtime.jsx)(TableToolbarContent,{id:bodyId,filterBtnId,isExpanded});return(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-header",children:[(0,jsx_runtime.jsx)("div",{className:"sui-table__toolbar-header-bulk",children:!!ctx?.bulkActions&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(select_src.Ph,{id:bulkDropdown,className:"sui-table__toolbar-actions",isSmall:!0,options:ctx?.bulkActions,onChange:setBulkAction}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"black",isSmall:!0,isDisabled:(0,src.xb)(bulkAction??""),onClick:onApplyBulkAction,children:"Apply"})]})}),(0,jsx_runtime.jsxs)("div",{className:"sui-table__toolbar-header-actions",children:[(0,jsx_runtime.jsx)(input_src.I,{id:"input-id-4",className:"sui-table__toolbar-search",label:"Label",placeholder:"Search",onChange:onSearch,isSmall:!0}),ctx?.filtersPopover?(0,jsx_runtime.jsx)(dropdown_src.L,{label:"Filter",className:"sui-table__toolbar-filter",buttonIcon:"Filter",direction:"left",isSmall:!0,isFixedHeight:!1,children:content}):(0,jsx_runtime.jsx)(button_src.zx,{id:filterBtnId,className:"sui-table__toolbar-filter",icon:"Filter",color:"black",appearance:"secondary",isSmall:!0,onClick:()=>setIsExpanded(!isExpanded),"aria-controls":bodyId,"aria-expanded":isExpanded,children:"Filter"})]})]}),!ctx?.filtersPopover&&content]})},Table=({children,hasToolbar=!0,ariaLabel="",allowCheck,isDraggable,filtersPopover,filters,onAction,bulkActions,noBorderRadius,noSideBorder,isStripped=!1,stickyCols=!1,className="",...props})=>{const ref=(0,react.useRef)(null),wrapperRef=(0,react.useRef)(null),classNames=(0,src.uY)("sui-table",{"no-border-radius":noBorderRadius,"no-side-borders":noSideBorder,stripe:isStripped,sticky:stickyCols,draggable:isDraggable},className),childrenArray=react.Children.toArray(children),TFooter=childrenArray.find((({type:childType})=>"TableFooter"===childType.name));return(0,jsx_runtime.jsx)(TableContextProvider,{props:{allowCheck,isDraggable,filters,onAction,bulkActions,filtersPopover,stickyCols,ref,wrapperRef},children:(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"table",children:[hasToolbar&&(0,jsx_runtime.jsx)(TableToolbar,{}),(0,jsx_runtime.jsx)("div",{className:"sui-table__wrapper",ref:wrapperRef,children:(0,jsx_runtime.jsx)("table",{...props,className:"sui-table__table",ref,role:"treegrid",tabIndex:-1,cellSpacing:"0",cellPadding:"0",...!(0,src.xb)(ariaLabel??"")&&{"aria-label":ariaLabel},children:childrenArray?.filter((({type:cType})=>"TableFooter"!==cType.name))})}),!!TFooter&&TFooter]})})};var dist=__webpack_require__("./node_modules/react-sortablejs/dist/index.js");const TableBody=props=>{const{children}=props,[el,setEl]=(0,react.useState)(react.Children.toArray(children)),[rows,setRows]=(0,react.useState)([]),[action,setAction]=(0,react.useState)(""),ctx=(0,react.useContext)(TableContext);(0,react.useEffect)((()=>{setRows(react.Children.toArray(children).map((row=>row?.props?.id)))}),[]),(0,react.useEffect)((()=>{"sort-rows"===action?(setRows(react.Children.toArray(children).map((row=>row?.props?.id))),setAction("")):setEl(react.Children.toArray(children))}),[children]),(0,react.useEffect)((()=>{ctx?.setRows(react.Children.toArray(children).map((row=>row?.props?.id)))}),[children,rows]);const onSortEnd=(0,react.useCallback)((()=>{ctx?.setForceCollapse(!1),ctx?.triggerAction("sort-rows",rows),setAction("sort-rows"),ctx?.setSortBy({column:"",order:"asc"})}),[ctx,rows]);return ctx?.isDraggable?(0,jsx_runtime.jsx)(dist.ReactSortable,{tag:TableBodyTag,list:el.map((x=>({...x,id:x.props.id,chosen:!0}))),setList:list=>setEl(list?.filter((newEl=>!!newEl))),animation:150,handle:".sui-table__cell--drag",onStart:()=>ctx?.setForceCollapse(!0),onEnd:onSortEnd,children:el?.map((item=>(0,jsx_runtime.jsx)(react.Fragment,{children:item},item?.props?.id)))}):(0,jsx_runtime.jsx)(TableBodyTag,{...props,ref:props?.ref,children})},TableBodyTag=(0,react.forwardRef)(((props,ref)=>(0,jsx_runtime.jsx)("tbody",{ref,...props,className:"sui-table__body"})));TableBodyTag.displayName="TableBodyTag";var checkbox_src=__webpack_require__("./packages/ui/checkbox/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const TableCell=({id,children,isHeading,className="",hasDragIcon=!1,isAction=!1,isSortable=!1,isSticky=!1,isTrim=!1,isPrimary=!1,style={},...props})=>{const TagName=isHeading?"th":"td",[hovered,focused,methods]=(0,hooks_src.X2)({}),ctx=(0,react.useContext)(TableContext),{sortBy,setSortBy,triggerAction,hasStickyCols}=ctx??{},ref=(0,react.useRef)(null),sortBtnClassNames=(0,src.uY)("sui-table__cell-btn",{hovered,focused}),order=id===sortBy?.column?sortBy?.order:"",onSortClick=(0,react.useCallback)((()=>{const sortData={column:id,order:"desc"===order?"asc":"desc"};setSortBy(sortData),triggerAction("sort-columns",sortData)}),[id,order,setSortBy,triggerAction]);let SortIcon=components.ZP.CaretUpDown;(0,src.xb)(order)||sortBy?.column!==id||(SortIcon="desc"===order?components.ZP.CaretDown:components.ZP.CaretUp);let sortBtnProps={};return isSortable&&(sortBtnProps.role="button",sortBtnProps.tabIndex=0,sortBtnProps.className=sortBtnClassNames,sortBtnProps.onClick=onSortClick,sortBtnProps.onKeyDown=e=>(0,src.Jw)(e,onSortClick),sortBtnProps={...sortBtnProps,...methods}),(0,jsx_runtime.jsxs)(TagName,{ref,className:(0,src.uY)("sui-table__cell",{sortable:isSortable,sticky:isSticky,trim:isTrim,primary:isPrimary,"is-sticky-active":hasStickyCols&&isSticky},className),...isHeading&&{scope:"col"},role:isHeading?"rowheader":"cell",style,...props,children:[hasDragIcon&&(0,jsx_runtime.jsx)(components.ZP.Grip,{className:"sui-table__cell--drag",size:"sm"}),isAction?(0,jsx_runtime.jsxs)(react.Fragment,{children:[children,isSortable&&(0,jsx_runtime.jsx)(SortIcon,{size:"xs"})]}):(0,jsx_runtime.jsxs)("div",{...sortBtnProps,children:[(0,jsx_runtime.jsx)("span",{children}),isSortable&&(0,jsx_runtime.jsx)(SortIcon,{size:"xs"})]})]})},TableFields=({children})=>{const ctx=(0,react.useContext)(TableContext),{columns}=ctx,primaryCol=columns.find((col=>col.isPrimary)),primaryColIndex=columns.findIndex((col=>col.isPrimary));return(0,jsx_runtime.jsxs)("div",{className:"sui-table__fields",children:[!!primaryCol&&!!primaryColIndex&&(0,jsx_runtime.jsx)("div",{className:"sui-table__fields-primary",children:children[primaryColIndex]?.props?.children?.props?.children}),(0,jsx_runtime.jsx)("div",{className:"sui-table__fields-items",children:columns.map(((column,index)=>primaryColIndex===index?null:(0,jsx_runtime.jsxs)("li",{className:"sui-table__fields-item",children:[(0,jsx_runtime.jsx)("div",{className:"sui-table__fields-item-title",children:column?.title}),(0,jsx_runtime.jsx)("div",{className:"sui-table__fields-item-value",children:children[index]?.props?.children?.props?.children})]},index)))})]})},TableRow=({id,children,actions=!1,isUnderHeader=!1,isExpandable=!1,expandableContent=null,status,isUnderFooter=!1,...props})=>{const[isExpanded,setIsExpanded]=(0,react.useState)(!1),ctx=(0,react.useContext)(TableContext),[isHovered,isFocused,methods]=(0,hooks_src.X2)({}),rowId=`sui-table-row-${(0,react.useId)()}${id?`-${id}`:""}`,rowContentId=`${rowId}-content`,onCheckToggle=(0,react.useCallback)((e=>{const isChecked=e?.target?.checked??!1,checkBoxId=(isUnderHeader?"select-all":id)??"";ctx?.onSelect(checkBoxId,isChecked)}),[ctx,id,isUnderHeader]);(0,react.useEffect)((()=>{ctx?.forceCollapse&&setIsExpanded(!1)}),[ctx?.forceCollapse]);let isChecked=(ctx?.selected??[])?.indexOf(parseInt(`${id}`))>-1,isIndeterminate=!1;if(isUnderHeader){const isAllSelected=ctx?.rows?.length===ctx?.selected.length;isIndeterminate=(ctx?.selected??[])?.length>0&&!isAllSelected,isChecked=isAllSelected&&(ctx?.selected??[]).length>0}const classNames=(0,src.uY)("sui-table__row",{focus:!isUnderFooter&&!isUnderHeader&&isFocused,hover:!isUnderFooter&&!isUnderHeader&&isHovered,expandable:isExpandable,expanded:isExpanded,[status]:!(0,src.xb)(status??"")}),toggleBtn=isExpandable&&(0,jsx_runtime.jsx)(button_src.zx,{icon:isExpanded?"ChevronUp":"ChevronDown",color:"black",appearance:"tertiary",isSmall:!0,iconOnly:!0,onClick:()=>setIsExpanded(!isExpanded),children:(isExpanded?"Collapse":"Expand")+" Row"});let numberOfCols=react.Children.count(children);ctx?.allowCheck&&(numberOfCols+=1),actions&&(numberOfCols+=1);const primaryColIndex=ctx?.columns?.findIndex((col=>col.isPrimary));children=react.Children.toArray(children).map(((child,index)=>{const p={hasDragIcon:!1,colSpan:void 0};return 0===index&&(p.isSticky=!!ctx?.stickyCols,!ctx?.isDraggable||ctx?.allowCheck||isUnderFooter||isUnderHeader||(p.hasDragIcon=!0),ctx?.allowCheck||(p.style={left:0,paddingRight:"16px",...ctx?.isDraggable?{}:{paddingLeft:"32px"}})),isUnderFooter&&(p.isSticky=!1,p.hasDragIcon=!1,p.colSpan="100%"),primaryColIndex===index&&(p.isPrimary=!0),(0,jsx_runtime.jsx)(react.Fragment,{children:(0,react.cloneElement)(child,p)},index)}));const a11yProps={};return isExpandable&&(a11yProps.id=rowId,a11yProps["aria-expanded"]=isExpanded,a11yProps["aria-controls"]=rowContentId),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("tr",{role:"row",className:classNames,...methods,...props,...a11yProps,children:[ctx?.allowCheck&&!isUnderFooter&&(0,jsx_runtime.jsx)(TableCell,{className:"sui-table__cell--selection",isSticky:!!ctx?.stickyCols,hasDragIcon:ctx?.isDraggable&&!isUnderHeader,children:(0,jsx_runtime.jsx)(checkbox_src.X,{onChange:onCheckToggle,isChecked,isIndeterminate})}),children,(!!actions||toggleBtn)&&!isUnderFooter&&(0,jsx_runtime.jsxs)(TableCell,{className:"sui-table__cell--actions",isSticky:!!ctx?.stickyCols,isAction:!0,children:["function"==typeof actions&&actions({id,content:toggleBtn}),!actions&&toggleBtn]})]}),isExpandable&&!!expandableContent&&isExpanded&&(0,jsx_runtime.jsx)("tr",{role:"row",className:(0,src.uY)("sui-table__row",{content:!0,"content-expanded":isExpanded,[status]:!(0,src.xb)(status??"")}),id:rowContentId,"aria-labelledby":rowId,tabIndex:isExpanded?0:-1,children:(0,jsx_runtime.jsx)("td",{colSpan:numberOfCols,children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsxs)(box_src.f,{isInline:!1,children:[(0,jsx_runtime.jsx)(TableFields,{children}),expandableContent]})})})})]})},TableHead=({children,hasActions=!1,...props})=>{const tableCols=react.Children.toArray(children),ctx=(0,react.useContext)(TableContext),{setColumns}=ctx;return(0,react.useEffect)((()=>{if("props"in children){const{children:cols}=children?.props??{};setColumns(react.Children.map(cols,(column=>({title:column.props.children,isPrimary:column.props.isPrimary}))))}}),[children,setColumns]),(0,jsx_runtime.jsx)("thead",{className:"sui-table__head",...props,children:tableCols.map((child=>(0,react.cloneElement)(child,{...child?.props,isUnderHeader:!0})))})},TableFooter=({children,...props})=>(0,jsx_runtime.jsx)("table",{className:"sui-table__table sui-table__table--footer",children:(0,jsx_runtime.jsx)("tfoot",{className:"sui-table__footer",...props,children:react.Children.toArray(children).map((child=>(0,react.cloneElement)(child,{...child.props,isUnderFooter:!0})))})});TableFooter.displayName="TableFooter"},"./packages/ui/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name="Tooltip",size="sm"})=>{if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.ZP[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Tooltip=({label,type="button",className,position="top",customWidth,customMobileWidth,children,onClick=()=>{},onMouseEnter=()=>{},onMouseLeave=()=>{},onFocus=()=>{},onBlur=()=>{},href,icon,...props})=>{const[isHovered,isFocused,methods,toggleHover]=(0,hooks_src.X2)({onMouseEnter,onMouseLeave,onFocus,onBlur}),attrs={},classNames=(0,utils_src.uY)("sui-tooltip",{show:isHovered,focus:isFocused,"custom-width":!!customWidth,[position]:!0},className??"");(customWidth||customMobileWidth)&&(attrs.style={...customWidth&&{"--tooltip-width":`${customWidth}px`},...customMobileWidth&&{"--tooltip-width-mobile":`${customMobileWidth}px`}});const escFunction=(0,react.useCallback)((event=>{"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((()=>(document.addEventListener("keydown",escFunction),()=>{document.removeEventListener("keydown",escFunction)})),[escFunction]);const onClickCallback=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"tooltip",children:[(()=>{switch(type){case"button":case"link":return(0,jsx_runtime.jsx)(src.zx,{...props,...icon&&{icon},href,onClick:onClickCallback,children:label});case"text":return(0,jsx_runtime.jsx)("span",{...props,role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.Jw)(e),children:label});case"icon":return(0,jsx_runtime.jsx)(Icon,{name:icon})}})(),!!children&&(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__content",role:"tooltip","aria-live":"polite","aria-hidden":!isHovered,tabIndex:isHovered?0:-1,...attrs,children})]})}}}]);