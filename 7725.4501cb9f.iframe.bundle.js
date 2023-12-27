"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[7725],{"./packages/ui/checkbox/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ox:()=>CheckBoxGroups,XZ:()=>Checkbox,cO:()=>CheckboxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const CheckboxContext=(0,react.createContext)({items:[],setItems:items=>{},onChange:(id,isChecked,groupId)=>{}}),CheckboxProvider=({children,onChange})=>{const[items,setItems]=(0,react.useState)([]),handleOnChange=(0,react.useCallback)(((id,isChecked,groupId)=>{"string"==typeof id&&setItems((prevItems=>{const obj={id,groupId,isChecked},existingItemIndex=prevItems.findIndex((item=>item.id===id&&item.groupId===groupId));return existingItemIndex>-1?prevItems[existingItemIndex]=obj:prevItems.push(obj),onChange&&onChange(prevItems),[...prevItems]}))}),[onChange]);return(0,jsx_runtime.jsxs)(CheckboxContext.Provider,{value:{onChange:handleOnChange,items,setItems},children:[children," "]})},useCheckbox=()=>{const ctx=(0,react.useContext)(CheckboxContext);if(!ctx)throw new Error("useCheckbox must be used within a CheckboxContextProvider");return{...ctx,onChange:(id,isChecked,groupId)=>{ctx?.onChange?.(id,isChecked,groupId)},addToList:(id,isChecked,groupId)=>{ctx?.onChange?.(id,isChecked,groupId)}}};var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Indeterminate=({...props})=>(0,jsx_runtime.jsx)("span",{...props,children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"2",viewBox:"-1 0 12 3",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M9.7 0H0.3C0.134315 0 0 0.134315 0 0.3V1.7C0 1.86569 0.134315 2 0.3 2H9.7C9.86569 2 10 1.86569 10 1.7V0.3C10 0.134315 9.86569 0 9.7 0Z",fill:"white"})})}),Tick=({...props})=>(0,jsx_runtime.jsx)("span",{...props,children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 10",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M4.23784 9.08831L0.337838 5.16588C0.103533 4.93023 0.103533 4.54815 0.337838 4.31247L1.18635 3.45906C1.42065 3.22338 1.80057 3.22338 2.03488 3.45906L4.66211 6.10137L9.96507 0.91168C10.1994 0.676028 10.5793 0.676028 10.8136 0.91168L11.6621 1.76509C11.8964 2.00074 11.8964 2.38283 11.6621 2.6185L5.08637 9.08833C4.85205 9.32398 4.47215 9.32398 4.23784 9.08831Z"})})}),Checkbox=({id,groupId="",name,value="",label,isLabelHidden=!1,isChecked=!1,isDisabled=!1,isSmall=!1,isIndeterminate=!1,onChange:propOnchange=(e=>{})})=>{const ctx=useCheckbox(),[isHovered,isFocused,methods]=(0,hooks_src.X2)({});let uuid=`sui-checkbox-${(0,react.useId)()}`;id&&(uuid=id),(0,react.useEffect)((()=>{ctx?.addToList(id,isChecked,groupId)}),[id,groupId,isChecked]);const inputProps={id:uuid,type:"checkbox",name,value,className:"sui-screen-reader-only",checked:isChecked,disabled:isDisabled,onChange:e=>{ctx?.onChange&&ctx.onChange(uuid,e.target.checked,groupId),propOnchange&&propOnchange(e)},"aria-labelledby":`${uuid}-label`},containerProps={className:(0,src.uY)("sui-checkbox",{"hidden-label":isLabelHidden,indeterminate:isIndeterminate,hover:isHovered,focus:isFocused,disabled:isDisabled,checked:isChecked,sm:isSmall}),...methods},boxProps={className:"sui-checkbox__box","aria-hidden":!0};return(0,jsx_runtime.jsxs)("label",{...containerProps,htmlFor:uuid,tabIndex:-1,"data-testid":"checkbox",children:[(0,jsx_runtime.jsx)("input",{...inputProps,"aria-label":label||"checkbox","data-testid":"checkbox-input"}),isIndeterminate?(0,jsx_runtime.jsx)(Indeterminate,{...boxProps}):(0,jsx_runtime.jsx)(Tick,{...boxProps,tabIndex:-1}),isLabelHidden?(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}):(0,jsx_runtime.jsx)("span",{className:"sui-checkbox__label",children:label})]})},_CheckboxGroupInner=props=>{const{hasSubItems,title,children,commonCheckboxProps,isInline}=props,[isFirstRender,setIsFirstRender]=(0,react.useState)(!0),{items,setItems,addToList}=useCheckbox(),uuid=(0,react.useId)(),id=`sui-checkbox-group-${uuid}`,className=(0,src.uY)("sui-checkbox__group",{nested:hasSubItems,inline:isInline}),group=items.filter((item=>item.groupId===id)),checkedItemsCount=group?.filter((i=>i.isChecked)).length,allChecked=checkedItemsCount===group.length,hasCheckedItems=checkedItemsCount>0,onCheckboxChange=(0,react.useCallback)((()=>{const toUpdate=[];items.forEach((item=>{item.groupId===id?toUpdate.push({...item,isChecked:!allChecked||!allChecked&&checkedItemsCount>0}):toUpdate.push(item)})),setItems([...toUpdate])}),[items,allChecked,checkedItemsCount,id,setItems]);return(0,react.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,jsx_runtime.jsxs)("div",{className,children:[hasSubItems&&(0,jsx_runtime.jsx)(Checkbox,{...commonCheckboxProps,id,label:title??"",isChecked:allChecked&&hasCheckedItems,onChange:onCheckboxChange,isIndeterminate:!!hasCheckedItems&&(hasCheckedItems&&!allChecked)}),(0,jsx_runtime.jsx)("div",{className:"sui-checkbox__group-body",children:react.Children.map(children,((child,index)=>{const chekboxInitialId=child?.props?.id,initialIsChecked=child?.props?.isChecked,checkboxId=chekboxInitialId||`sui-checkbox-item-${uuid}-${index}`,currItem=items.find((i=>i.id===checkboxId&&i.groupId===id));return(0,react.cloneElement)(child,{...commonCheckboxProps,id:checkboxId,...child?.props,groupId:id,isChecked:isFirstRender?initialIsChecked:!!currItem?.isChecked})}))})]})},CheckboxGroup=({children,title="",hasSubItems=!1,isInline=!1,commonCheckboxProps={},onChange=()=>{},_isMultiGroup=!1})=>((content=null)=>_isMultiGroup?content:(0,jsx_runtime.jsx)(CheckboxProvider,{onChange,children:content}))((0,jsx_runtime.jsx)(_CheckboxGroupInner,{title,commonCheckboxProps:commonCheckboxProps??{},hasSubItems:hasSubItems??!1,isInline:isInline??!1,children})),CheckBoxGroups=({children,commonCheckboxProps={},onChange=()=>{}})=>{const className=(0,src.uY)("sui-checkbox-wrapper",{});return(0,jsx_runtime.jsx)(CheckboxProvider,{onChange,children:(0,jsx_runtime.jsx)("div",{className,children:react.Children.map(children,(child=>(0,react.cloneElement)(child,{commonCheckboxProps:{...commonCheckboxProps,...child?.props?.commonCheckboxProps},_isMultiGroup:!0})))})})}},"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Label=({id,hidden=!1,children})=>{if(!("string"==typeof children?!(0,src.xb)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:classNames,children})},Helper=({id,children})=>{const classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children}),FormField=({id="",label,helper,error,className,isSmall=!1,isDisabled=!1,isLabelHidden=!1,children,...props})=>{let fieldId=(0,react.useId)();(0,src.xb)(id)||(fieldId=id);const isErrored="string"==typeof error?!(0,src.xb)(error??""):!!error,classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className),ariaAttrs={id:fieldId,...!(0,src.xb)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...props,"data-testid":"form-field",children:[!(0,src.xb)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/ui/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const Icon=({name="",size="lg",position="start"})=>{if((0,src.xb)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const classNames=(0,src.uY)("suicons",{[name]:!0,[size||"md"]:["sm","md","lg"].includes(size||"md"),icon:!0},"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true","data-testid":`input-icon-${position}`})},Input=(0,react.forwardRef)((({type,defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall=!1,isReadOnly=!1,isError=!1,isDisabled=!1,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,icon,iconPosition,allowClear=!1,disableInteractions=!1,...props},ref)=>{const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src.X2)({});if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((()=>{setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(value??""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass);let inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);const classNames=(0,src.uY)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},className??""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const attrs={id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),"aria-label":placeholder||"input",readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,...props},hasHintText=!(0,src.xb)(hint??"");return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.xb)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-input__input-clear",icon:"CloseAlt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"sm":"md",onClick:onClear,isSmall,onKeyDown:e=>(0,src.Jw)(e,onClear),children:"Clear"})]})}));Input.displayName="Input"},"./packages/ui/select/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NU:()=>MultiSelect,ul:()=>SearchSelect,Ph:()=>select_standard_Select});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),checkbox_src=__webpack_require__("./packages/ui/checkbox/src/index.ts");const Icon=({name,size="lg",onClick=()=>{}})=>{if(!name)throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const className=(0,src.uY)("suicons",{[name]:!0,[size]:!0});return(0,jsx_runtime.jsx)("span",{className:`sui-select__icon sui-select__icon--${name}`,onClick,"aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className})})},Search=({id,onChange,...props})=>{const handleInputChange=(0,react.useCallback)((event=>{onChange&&onChange(event)}),[onChange]);return(0,jsx_runtime.jsx)("input",{id,type:"text",className:"sui-select__search--input",onChange:handleInputChange,autoComplete:"off",...props})},Dropdown=({options,onEvent=()=>{},selectAll=()=>{},isSmall=!1,isMultiSelect=!1,selected="",...props})=>{const name="select-"+(0,react.useId)(),onSelect=(0,react.useCallback)(((e,id)=>{(!e.key||e.key&&"Enter"===e.key)&&onEvent&&onEvent(id)}),[onEvent]),getOptProps=id=>({...props,ref:void 0,onClick:e=>onSelect(e,id),onKeyDown:e=>onSelect(e,id)});return(0,jsx_runtime.jsx)(react.Fragment,{children:isMultiSelect?(()=>{const allSelected=options.every((option=>option.isSelected)),isIndeterminate=options.find((option=>option.isSelected));return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("div",{className:"sui-select__search",children:[(0,jsx_runtime.jsx)(Icon,{name:"search",size:"md"}),(0,jsx_runtime.jsx)(Search,{placeholder:"Search",...props})]}),(0,jsx_runtime.jsxs)("ul",{className:"sui-select__dropdown",role:"listbox","aria-label":"dropdown-options",children:[(0,jsx_runtime.jsx)("li",{className:"sui-select__dropdown--option",role:"option",children:(0,jsx_runtime.jsx)(checkbox_src.XZ,{name,label:"Select all",isChecked:allSelected,isIndeterminate:!allSelected&&!!isIndeterminate,onChange:selectAll})}),options.map((({id,label,isSelected})=>(0,jsx_runtime.jsx)("li",{id,role:"option",className:"sui-select__dropdown--option",onClick:e=>onSelect(e,id),onKeyDown:e=>onSelect(e,id),children:(0,jsx_runtime.jsx)(checkbox_src.XZ,{id,name,label,isChecked:isSelected})},id)))]})]})})():(0,jsx_runtime.jsx)("ul",{className:"sui-select__dropdown",role:"listbox","aria-label":"dropdown-options",children:options.map((({icon,id,label,isSelected,newLabel=label,boldLabel=""})=>(0,jsx_runtime.jsx)("li",{id,role:"option",tabIndex:0,className:"sui-select__dropdown--option "+(isSelected?"sui-select__dropdown--selected":""),...getOptProps(id),children:(0,jsx_runtime.jsxs)(react.Fragment,{children:[icon&&(0,jsx_runtime.jsx)(Icon,{name:icon,size:isSmall?"sm":"md"}),(0,jsx_runtime.jsxs)("span",{children:[boldLabel&&(0,jsx_runtime.jsx)("strong",{children:boldLabel}),newLabel]})]})},id)))})})};var input_src=__webpack_require__("./packages/ui/input/src/index.ts");const InputWithAutoComplete=({id,controlRef,expanded=!1,selected={label:""},dropdownItems=[],dropdownToggle,onValueChange=()=>{},onChange=()=>{},onEvent=()=>{},interactionMethods,...props})=>{const generatedId=(0,react.useId)(),inputId=id||`sui-search-${generatedId}`,[value,setValue]=(0,react.useState)(selected?.label||""),isFiltered=value.length>=1,filteredOptions=react.useMemo((()=>isFiltered?dropdownItems?.filter((({label})=>label.startsWith(value))):dropdownItems),[dropdownItems,isFiltered,value]);return(0,react.useEffect)((()=>{setValue(selected?.label||"")}),[selected]),(0,jsx_runtime.jsx)(input_src.I,{ref:controlRef,className:"sui-select__input",id:inputId,icon:"search",iconPosition:"start",onClick:dropdownToggle,onChange:e=>{if("string"!=typeof e){const val=e.target.value;setValue(val),onValueChange(val),onChange&&onChange(e)}},defaultValue:value,allowClear:!1,hint:isFiltered&&filteredOptions[0]?.label||"",disableInteractions:!0,onKeyDown:e=>{"ArrowRight"===e.code&&(setValue(filteredOptions[0]?.label||""),onEvent&&onEvent(filteredOptions[0]?.id))},...props,...interactionMethods})},Selected=({id,controlRef,expanded=!1,arrow,selected,selectLabel="",isMultiSelect=!1,isSmall=!1,interactionMethods,removeSelection=()=>{},dropdownToggle=()=>{},clearSelection=()=>{},...props})=>{const selectedContent=(0,src.kJ)(selected)?selected.map((selectedItem=>(0,jsx_runtime.jsxs)("span",{tabIndex:0,role:"button",className:"sui-select__selected-options",onClick:event=>event.stopPropagation(),onKeyDown:event=>event.stopPropagation(),children:[selectedItem?.label,(0,jsx_runtime.jsx)(Icon,{name:"close",size:"sm",...!!removeSelection&&{onClick:()=>removeSelection(selectedItem?.id)}})]},selectedItem?.id))):(0,jsx_runtime.jsx)("span",{className:"sui-select__selected",children:selected&&"object"==typeof selected&&"label"in selected?selected.label:selectLabel}),onClearSelection=(0,react.useCallback)((event=>{clearSelection()}),[clearSelection]);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{id,"aria-label":"select-input-field",className:"sui-select__hidden-input",...interactionMethods}),(0,jsx_runtime.jsxs)("div",{id:`${id}-control`,ref:controlRef,role:"button",className:"sui-select__control",onClick:dropdownToggle,onKeyDown:e=>{"Enter"===e.key&&dropdownToggle()},tabIndex:0,"aria-haspopup":"listbox","aria-expanded":expanded,...props,children:[selectedContent,isMultiSelect&&!(0,src.o8)(selected)&&selectLabel!==selected&&(0,jsx_runtime.jsx)(Icon,{name:"close-alt",size:isSmall?"md":"lg",onClick:onClearSelection}),arrow&&(0,jsx_runtime.jsx)(Icon,{name:arrow,size:"md"})]})]})},SelectedSearch=({isSmall=!1,interactionMethods,selectLabel="",clearSelection,selected,...props})=>{const[close,setClose]=(0,react.useState)(!1),onClearSelection=(0,react.useCallback)((event=>{clearSelection(),setClose(!1)}),[clearSelection]);return(0,jsx_runtime.jsxs)("div",{className:"sui-select__control",children:[(0,jsx_runtime.jsx)(InputWithAutoComplete,{placeholder:"Search",isSmall:isSmall??!1,onValueChange:val=>{setClose(!!val)},selected,interactionMethods,...props}),(close||selected?.label)&&(0,jsx_runtime.jsx)(Icon,{name:"close-alt",size:isSmall?"md":"lg",onClick:onClearSelection})]})},Select=({id,options,className,selected,label="Select",isDisabled=!1,isSmall=!1,isError=!1,isMultiSelect=!1,isSearchable=!1,onChange,...props})=>{if(!id)throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');if(!options)throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Select\n\nThe parameter "options" in the "Select" component is required and should be array.\n\n');const ref=(0,react.useRef)(null),controlRef=(0,react.useRef)(null),[isDropdownOpen,setIsDropdownOpen]=(0,react.useState)(!1),[items,setItems]=(0,react.useState)(options),[filteredItems,setFilteredItems]=(0,react.useState)(options),[selectedItem,setSelectedItems]=(0,react.useState)(selected);(0,hooks_src.rw)(ref,(()=>{setIsDropdownOpen(!1)})),(0,react.useEffect)((()=>{setSelectedItems(selected)}),[selected]);const prevIsDropdownOpen=(0,hooks_src.D9)(isDropdownOpen);(0,react.useEffect)((()=>{controlRef?.current&&void 0!==prevIsDropdownOpen&&prevIsDropdownOpen!==isDropdownOpen&&!isDropdownOpen&&controlRef?.current?.focus()}),[isDropdownOpen,prevIsDropdownOpen]);const[isHovered,isFocused,interactionMethods]=(0,hooks_src.X2)({onMouseLeave:props.onMouseLeave,onMouseEnter:props.onMouseEnter});(0,react.useEffect)((()=>{const updatedItems=items.map((option=>{const filterItem=filteredItems.find((filterOpt=>filterOpt.id===option.id));return filterItem?{...filterItem}:option})),filteredItemList=updatedItems.filter((option=>option?.isSelected)),currentItems=filteredItemList.length>0?filteredItemList:label;if(isMultiSelect)updateItem(currentItems??"");else if(currentItems?.length){const item=currentItems?.[0];item&&item.id&&updateItem(item)}setItems(updatedItems)}),[filteredItems]);const classNames=(0,src.uY)("sui-select",{sm:isSmall,open:isDropdownOpen,disabled:isDisabled,hover:isHovered,focus:isFocused,error:isError,multiselect:isMultiSelect,searchable:isSearchable},className),handleSearchDropdown=event=>{const searchValue=event.target.value.toLowerCase();setIsDropdownOpen(!0),((searchValue,options,setFilterItems)=>{if((0,src.xb)(searchValue))return void setFilterItems(options);setFilterItems(options.filter((option=>option.label.toLowerCase().startsWith(searchValue))).map((option=>{const index=option.label.toLowerCase().indexOf(searchValue);return-1===index?{...option,isSelected:!1}:{...option,isSelected:!1,newLabel:option.label.substring(0,index)+option.label.substring(index+searchValue.length),boldLabel:option.label.substring(0,searchValue.length)}})))})(searchValue,items,setFilteredItems)},handleMultiSelectSearch=event=>{const searchValue=event.target.value.toLowerCase();setIsDropdownOpen(!0),((searchValue,options,setFilterItems)=>{if((0,src.xb)(searchValue))return void setFilterItems(options);setFilterItems(options.filter((option=>option.label.toLowerCase().startsWith(searchValue))))})(searchValue,items,setFilteredItems)},selectProps={className:classNames,ref},updateItem=option=>{setSelectedItems(option),onChange&&onChange(option)},updateSelected=optionId=>{const optionIndex=filteredItems.findIndex((option=>option.id===optionId)),updatedItems=[...filteredItems],isSelected=updatedItems[optionIndex].isSelected;isMultiSelect?(updatedItems[optionIndex].isSelected=!isSelected,setFilteredItems(updatedItems)):(updatedItems.forEach((option=>option.isSelected=!1)),updatedItems[optionIndex].isSelected=!0,setFilteredItems(updatedItems),setIsDropdownOpen(!1))},headerProps={id,controlRef,expanded:isDropdownOpen,selected:selectedItem,selectLabel:label,isSmall,dropdownToggle:()=>setIsDropdownOpen(!isDropdownOpen),clearSelection:()=>{((setSelectedItem,options,setFilterItems)=>{const updatedOptions=options.map((option=>({...option,isSelected:!1})));setSelectedItem([]),setFilterItems(updatedOptions)})(updateItem,items,setFilteredItems)},...!isSearchable&&{arrow:isDropdownOpen?"chevron-up":"chevron-down"},...isSearchable&&{disabled:isDisabled,dropdownItems:filteredItems,onChange:e=>{handleSearchDropdown(e),updateItem({...selectedItem,label:e.target.value})},onEvent:optionId=>updateSelected(optionId)},...isMultiSelect&&{isMultiSelect,removeSelection:optionId=>{((id,options,setFilterItems)=>{setFilterItems(options.map((option=>option.id===id?{...option,isSelected:!1}:option)))})(optionId,filteredItems,setFilteredItems)}},...props},dropdownProps={options:filteredItems,selected:selectedItem,isSmall,...isMultiSelect&&{isMultiSelect,selectAll:()=>{((options,setFilterItems)=>{const allSelected=options.every((option=>!0===option.isSelected));setFilterItems(options.map((option=>({...option,isSelected:!allSelected}))))})(filteredItems,setFilteredItems)},onChange:e=>{handleMultiSelectSearch(e)}},...props};return(0,jsx_runtime.jsxs)("div",{...selectProps,"data-check":"check","data-testid":"select",children:[!isSearchable&&(0,jsx_runtime.jsx)(Selected,{...headerProps,interactionMethods}),isSearchable&&(0,jsx_runtime.jsx)(SelectedSearch,{...headerProps,interactionMethods}),isDropdownOpen&&(0,jsx_runtime.jsx)(Dropdown,{...dropdownProps,onEvent:optionId=>{updateSelected(optionId)}})]})},select_standard_Select=({...props})=>(0,jsx_runtime.jsx)(Select,{...props}),SearchSelect=({...props})=>(0,jsx_runtime.jsx)(Select,{...props,isSearchable:!0}),MultiSelect=({...props})=>(0,jsx_runtime.jsx)(Select,{...props,isMultiSelect:!0})}}]);