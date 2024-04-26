"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[903],{"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Label=({id,hidden=!1,children,...styleProps})=>{const{suiInlineClassname}=(0,hooks_src.IS)(styleProps);if(!("string"==typeof children?!(0,src.Im)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:(0,src.n0)(classNames,{},suiInlineClassname),children})},Helper=({id,children,...props})=>{const{suiInlineClassname}=(0,hooks_src.IS)(props),classNames=classnames_default()({"sui-form-field__helper":!0},suiInlineClassname);return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children}),FormField=({id="",label,helper,error,className,isSmall,isDisabled=!1,isLabelHidden=!1,children,customWidth,_htmlProps={},_style})=>{let fieldId=(0,react.useId)();(0,src.Im)(id)||(fieldId=id),children=(0,hooks_src.Q8)(children,"{add form element as children}");const isErrored="string"==typeof error?!(0,src.Im)(error??""):!!error,{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-form-field",{sm:isSmall,disabled:isDisabled},suiInlineClassname),ariaAttrs={...!(0,src.Im)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`}},fieldAttrs={id:fieldId,...isSmall&&{isSmall},...isDisabled&&{isDisabled},...isErrored&&{isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...(0,src.X5)(_htmlProps),...customWidth&&{style:{maxWidth:`${customWidth}px`}},"data-testid":"form-field",children:[!(0,src.Im)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...fieldAttrs,ariaAttrs,...child.props}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/ui/select/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l6:()=>select_standard_Select});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),dropdown_src=__webpack_require__("./packages/ui/dropdown/src/index.ts");const Dropdown=({options,onEvent=()=>{},selectAll=()=>{},isSmall=!1,isMultiSelect=!1,isDisabled=!1,selected="",isSearchable=!1,isCustomVar=!1,dropdownRef=null,onToggle=isOpen=>{},onSearch=value=>{},onChange,_htmlProps,_dropdownProps,...props})=>{(0,react.useId)();const{suiInlineClassname}=(0,hooks_src.IS)(props),onSelect=(0,react.useCallback)(((e,option)=>{(!e.key||e.key&&"Enter"===e.key)&&onEvent&&(onEvent(option),onChange&&onChange(option))}),[onChange,onEvent]),getOptProps=option=>({ref:void 0,onKeyDown:e=>onSelect(e,option)}),wrapper=content=>(0,jsx_runtime.jsx)(dropdown_src.m,{ref:dropdownRef,closeOnOuterClick:!1,onToggle,isFluid:!0,isFixedHeight:!0,className:(0,src.n0)("sui-select__dropdown",{},suiInlineClassname),menu:content,onMenuClick:(option,e)=>{onSelect(e,option)},isSmall,...isMultiSelect&&{type:"select-checkbox"},...(isMultiSelect||isCustomVar)&&{onSearch,allowSearch:!0},...!isCustomVar&&{trigger:(0,jsx_runtime.jsx)(react.Fragment,{})},...isCustomVar&&{iconOnly:!0,buttonIcon:"Add",placement:"left",type:"select-variable"},_htmlProps:{...getOptProps},isDisabled,..._dropdownProps});return(0,jsx_runtime.jsx)(react.Fragment,{children:isMultiSelect?(()=>{const allSelected=options?.every((option=>option?.isSelected)),isIndeterminate=options?.find((option=>option?.isSelected)),newOptions=options?[{id:"select-all",label:"Select all",props:{_checkboxProps:{isChecked:allSelected,isIndeterminate:!allSelected&&!!isIndeterminate,onChange:selectAll,isSmall}}},...options.map((option=>({...option,props:{...option.props,_checkboxProps:{...option?.props?._checkboxProps,isChecked:option?.isSelected,isSmall}}})))]:[];return wrapper(newOptions)})():wrapper(options?.map((option=>option={...option,...isSearchable&&{label:(0,jsx_runtime.jsxs)("span",{className:"sui-select__dropdown--content",children:[option?.boldLabel&&(0,jsx_runtime.jsx)("strong",{children:option?.boldLabel}),option?.[isSearchable&&option?.boldLabel?"newLabel":"label"]]})},props:{...option.props,className:(0,src.n0)("",{"sui-select__dropdown--option":!0,"sui-select__dropdown--selected":option?.isSelected&&!isCustomVar})}}))||[])})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="md",_htmlProps={},...props})=>{const{suiInlineClassname}=(0,hooks_src.IS)(props);if((0,src.Im)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=components.Ay$[name],iconClass=(name??"").replace(/[A-Z]/g,((match,index)=>(0===index?"":"-")+match.toLowerCase()));return(0,jsx_runtime.jsx)("span",{className:(0,src.n0)(`suicons sui-select__icon sui-select__icon--${iconClass}`,{},suiInlineClassname),..._htmlProps,children:(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:IconName&&(0,jsx_runtime.jsx)(IconName,{size})})})};var input_src=__webpack_require__("./packages/ui/input/src/index.ts");const InputWithAutoComplete=({id,controlRef,expanded=!1,selected={label:""},placeholder,dropdownItems=[],onValueChange=()=>{},onChange=()=>{},onEvent=()=>{},onClick=()=>{},interactionMethods})=>{const generatedId=(0,react.useId)(),inputId=id||`sui-search-${generatedId}`,[value,setValue]=(0,react.useState)(selected?.label||""),isFiltered=value.length>=1,filteredOptions=react.useMemo((()=>isFiltered?dropdownItems?.filter((({searchLabel})=>searchLabel?.startsWith(value))):dropdownItems),[dropdownItems,isFiltered,value]);return(0,react.useEffect)((()=>{setValue(selected?.label||"")}),[selected]),(0,jsx_runtime.jsx)(input_src.p,{className:"sui-select__input",id:inputId,icon:expanded?"ChevronUp":"ChevronDown",iconPosition:"end",iconSize:"sm",onChange:e=>{if("string"!=typeof e){const val=e.target.value;setValue(val),onValueChange(val),onChange&&onChange(e)}},defaultValue:value,allowClear:!1,hint:isFiltered&&filteredOptions[0]?.label||"",disableInteractions:!0,placeholder,_htmlProps:{autoComplete:"off",ref:controlRef,onKeyDown:e=>{"ArrowRight"===e.code&&(setValue(filteredOptions[0]?.label||""),onEvent&&onEvent(filteredOptions[0]?.id))},onClick,...interactionMethods}})},Selected=({id,controlRef,expanded=!1,arrow,selected,selectLabel="",isMultiSelect=!1,isSmall=!1,isCustomVar=!1,interactionMethods,disabled=!1,removeSelection=()=>{},dropdownToggle=()=>{},clearSelection=()=>{},onCustomVarChange=()=>{},ariaAttrs={},...props})=>{let selectedContent;selectedContent=(0,src.cy)(selected)&&(selected??[])?.length>0||isCustomVar?(0,jsx_runtime.jsxs)("ul",{className:"sui-select__selected-wrapper",children:[(selected??[])?.length>0&&selected.map(((selectedItem,index)=>{let renderedContent;return isCustomVar&&(renderedContent=selectedItem&&"object"==typeof selectedItem?selectedItem.props.variable.replace(/[{}]/g,""):selectedItem),(0,jsx_runtime.jsxs)("li",{className:"sui-select__selected-options",children:[(0,jsx_runtime.jsxs)("span",{tabIndex:-1,role:"button",onClick:event=>event.stopPropagation(),onKeyDown:event=>event.stopPropagation(),children:[isCustomVar&&renderedContent,!isCustomVar&&selectedItem?.label]}),!isCustomVar&&(0,jsx_runtime.jsx)(Icon,{name:"Close",size:"xs",...!!removeSelection&&{_htmlProps:{role:"button",tabIndex:0,"aria-label":"Remove Item",onClick:event=>{event.stopPropagation(),removeSelection(selectedItem?.id)},onKeyDown:event=>{"Enter"!==event.key&&" "!==event.key||removeSelection(selectedItem?.id)}}}})]},isCustomVar?index:selectedItem?.id)})),isCustomVar&&(0,jsx_runtime.jsx)("li",{className:"sui-select__custom-var-input",children:(0,jsx_runtime.jsx)("input",{id,type:"text","aria-label":"Select",placeholder:selectLabel,onKeyDown:onCustomVarChange,disabled,...interactionMethods})})]}):(0,jsx_runtime.jsx)("span",{className:"sui-select__selected",children:selected&&"object"==typeof selected&&"label"in selected?selected.label:selectLabel});const onClearSelection=(0,react.useCallback)((()=>{clearSelection()}),[clearSelection]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!isCustomVar&&(0,jsx_runtime.jsx)("input",{id,"aria-label":"Select",className:"sui-select__hidden-input",tabIndex:-1,...interactionMethods}),(0,jsx_runtime.jsxs)("div",{id:`${id}-control`,className:"sui-select__control",...(0,src.X5)(props),children:[(0,jsx_runtime.jsx)("div",{className:"sui-accessible-cta",ref:controlRef,...!isCustomVar&&{role:"button",onClick:dropdownToggle,onKeyDown:e=>{"Enter"!==e.key&&"Space"!==e.key||dropdownToggle()},tabIndex:0,"aria-label":selectLabel,"aria-haspopup":"listbox","aria-expanded":expanded,...ariaAttrs,...interactionMethods}}),selectedContent,isMultiSelect&&!(0,src.b0)(selected)&&selectLabel!==selected&&(selected??[]).length>0&&!isCustomVar&&(0,jsx_runtime.jsx)(Icon,{name:"CloseAlt",size:isSmall?"sm":"md",_htmlProps:{role:"button",tabIndex:0,"aria-label":"Remove All",onClick:onClearSelection,onKeyDown:event=>{"Enter"!==event.key&&" "!==event.key||onClearSelection()}}}),arrow&&!isCustomVar&&(0,jsx_runtime.jsx)("span",{className:"sui-select__arrow",children:(0,jsx_runtime.jsx)(Icon,{name:arrow,size:"sm"})})]})]})},SelectedSearch=({isSmall=!1,interactionMethods,selectLabel="",clearSelection,selected,...props})=>{const[close,setClose]=(0,react.useState)(!1);(0,react.useCallback)((event=>{clearSelection(),setClose(!1)}),[clearSelection]);return(0,jsx_runtime.jsx)("div",{className:"sui-select__control",children:(0,jsx_runtime.jsx)(InputWithAutoComplete,{placeholder:selectLabel,isSmall:isSmall??!1,onValueChange:val=>{setClose(!!val)},selected,interactionMethods,...props})})},Select=({id,options,className,selected,label="Select option",isCustomVar=!1,isDisabled=!1,isSmall=!1,isError=!1,isMultiSelect=!1,isSearchable=!1,onMouseEnter=()=>null,onMouseLeave=()=>null,customWidth,onChange,resetValidation,validateOnMount,validate,ariaAttrs={},_style={},_htmlProps={},_dropdownProps={}})=>{const uniqueId=(0,react.useId)();id||(id=`select-${uniqueId}`);const ref=(0,react.useRef)(null),controlRef=(0,react.useRef)(null),dropdownRef=(0,react.useRef)(null),[isDropdownOpen,setIsDropdownOpen]=(0,react.useState)(!1),[items,setItems]=(0,react.useState)(options??[]),[filteredItems,setFilteredItems]=(0,react.useState)(options??[]),[selectedItem,setSelectedItems]=(0,react.useState)(selected),[customVar,setCustomVar]=(0,react.useState)([]);(0,react.useEffect)((()=>{setItems(options??[]),setFilteredItems(options??[])}),[options]),(0,hooks_src.xk)(ref,(()=>{dropdownRef.current?.close()}));const prevIsDropdownOpen=(0,hooks_src.ZC)(isDropdownOpen);(0,react.useEffect)((()=>{controlRef?.current&&void 0!==prevIsDropdownOpen&&prevIsDropdownOpen!==isDropdownOpen&&!isDropdownOpen&&controlRef?.current?.focus()}),[isDropdownOpen,prevIsDropdownOpen]);const[isHovered,isFocused,interactionMethods]=(0,hooks_src.Mj)({onMouseLeave,onMouseEnter});(0,react.useEffect)((()=>{const updatedItems=items.map((option=>{const filterItem=filteredItems.find((opt=>opt.id===option.id));return filterItem?{...filterItem}:option})),filteredItemList=updatedItems.filter((option=>option?.isSelected)),currentItems=filteredItemList.length>0?filteredItemList:label;if(isMultiSelect)updateItem(filteredItemList);else if(currentItems?.length){const item=currentItems?.[0];item&&item.id&&updateItem(item)}setItems(updatedItems)}),[filteredItems]),(0,react.useEffect)((()=>{isCustomVar&&setSelectedItems(customVar)}),[customVar,isCustomVar]);const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-select",{sm:isSmall,open:isDropdownOpen,disabled:isDisabled,hover:isHovered,focus:isFocused,error:isError,multiselect:isMultiSelect,searchable:isSearchable,"custom-var":isCustomVar},suiInlineClassname),handleSearchDropdown=event=>{const searchValue=event.target.value.toLowerCase();dropdownRef.current?.open(),((searchValue,options,setFilterItems)=>{if((0,src.Im)(searchValue))return void setFilterItems(options);const filteredItems=options?.filter((option=>option?.searchLabel?.toLowerCase().startsWith(searchValue))),formattedItems=filteredItems?.map((option=>{const searchLabel=option?.searchLabel;if(!searchLabel)return{...option,isSelected:!1};const index=searchLabel.toLowerCase().indexOf(searchValue);if(-1===index)return{...option,isSelected:!1};const newLabel=searchLabel.substring(0,index)+searchLabel.substring(index+searchValue.length),boldLabel=searchLabel.substring(0,searchValue.length);return{...option,isSelected:!1,newLabel,boldLabel}}));setFilterItems(formattedItems)})(searchValue,items,setFilteredItems)},handleMultiSelectSearch=value=>{const searchValue=value;dropdownRef.current?.open(),((searchValue,options,setFilterItems)=>{if((0,src.Im)(searchValue))return void setFilterItems(options);setFilterItems(options.filter((option=>"string"==typeof option?.label&&option?.label?.toLowerCase().startsWith(searchValue.toLowerCase()))))})(searchValue,items,setFilteredItems)},selectProps={className:classNames,ref,...customWidth&&{style:{maxWidth:`${customWidth}px`}}},updateItem=option=>{setSelectedItems(option),validate&&!isMultiSelect&&validate(option),onChange&&onChange(option)};(0,react.useEffect)((()=>{validate&&validateOnMount&&!isMultiSelect&&validate(selectedItem)}),[]);const updateSelected=optionObj=>{if(isCustomVar)return void setCustomVar([...customVar,optionObj]);if(!options)return setSelectedItems(optionObj),void dropdownRef.current?.close();const optionIndex=filteredItems.findIndex((option=>option.id===optionObj.id)),updatedItems=[...filteredItems],isSelected=updatedItems[optionIndex]?.isSelected;isMultiSelect||isCustomVar?(updatedItems[optionIndex]={...updatedItems[optionIndex],isSelected:!isSelected},setFilteredItems(updatedItems)):(updatedItems.forEach((option=>option.isSelected=!1)),updatedItems[optionIndex]={...updatedItems[optionIndex],isSelected:!0},setFilteredItems(updatedItems),dropdownRef.current?.close())},headerProps={id,controlRef,expanded:isDropdownOpen,selected:selectedItem,selectLabel:label,isSmall,disabled:isDisabled,clearSelection:()=>{((setSelectedItem,options,setFilterItems)=>{const updatedOptions=options.map((option=>({...option,isSelected:!1,props:{...option.props}})));setSelectedItem([]),setFilterItems(updatedOptions)})(updateItem,items,setFilteredItems)},ariaAttrs,...!isSearchable&&{dropdownToggle:()=>{dropdownRef.current?.toggle()},arrow:isDropdownOpen?"ChevronUp":"ChevronDown"},...isSearchable&&{dropdownItems:filteredItems,onChange:e=>{handleSearchDropdown(e),updateItem({...selectedItem,label:e.target.value})},onEvent:optionId=>updateSelected(optionId),onClick:()=>{dropdownRef.current?.toggle()}},...isMultiSelect&&{isMultiSelect,removeSelection:optionId=>{((id,options,setFilterItems)=>{setFilterItems(options.map((option=>option.id===id?{...option,isSelected:!1,props:{...option.props}}:option)))})(optionId,filteredItems,setFilteredItems)}},...isCustomVar&&{isCustomVar,onCustomVarChange:event=>{const target=event.target,value=target.value;"Enter"!==event.key||(0,src.Im)(value)?"Backspace"===event.key&&(0,src.Im)(value)&&setCustomVar((prevState=>prevState.slice(0,-1))):(setCustomVar([...customVar,value]),target.value="")}}},dropdownProps={options:filteredItems,selected:selectedItem,isSmall,onChange,isDisabled,...isSearchable&&{isSearchable,options:filteredItems.map((option=>({...option,searchLabel:option.label})))},...isMultiSelect&&{isMultiSelect,options:filteredItems.map((option=>({...option,props:{_checkboxProps:{isSmall}}}))),selectAll:()=>{((options,setFilterItems)=>{const allSelected=options.every((option=>!0===option?.isSelected));setFilterItems(options.map((option=>({...option,isSelected:!allSelected,props:{...option.props,isSelected:!allSelected}}))))})(filteredItems,setFilteredItems)}},...(isMultiSelect||isCustomVar)&&{onSearch:value=>{handleMultiSelectSearch(value)}},dropdownRef,onToggle:isOpen=>{setIsDropdownOpen(isOpen)},onEvent:optionId=>{updateSelected(optionId)},isCustomVar,_dropdownProps};return(0,jsx_runtime.jsxs)("div",{...selectProps,"data-check":"check","data-testid":"select",...(0,src.X5)(_htmlProps),children:[!isSearchable&&(0,jsx_runtime.jsx)(Selected,{...headerProps,interactionMethods}),isSearchable&&(0,jsx_runtime.jsx)(SelectedSearch,{...headerProps,interactionMethods}),(0,jsx_runtime.jsx)(Dropdown,{...dropdownProps})]})},select_standard_Select=({...props})=>(0,jsx_runtime.jsx)(Select,{...props})}}]);