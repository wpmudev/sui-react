"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[2527],{"./packages/ui/accordion/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UQ:()=>Accordion,Qd:()=>AccordionItem,N1:()=>AccordionItemBody,uA:()=>AccordionItemFooter});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const AccordionContext=(0,react.createContext)({allowMultipleExpand:!1,expandState:{},setExpandState:()=>null}),AccordionProvider=AccordionContext.Provider,Accordion=({className,state,noBorderRadius=!1,noSideBorders=!1,allowMultipleExpand=!1,...props})=>{const[expandState,setExpandState]=(0,react.useState)({}),classNames=(0,src.uY)("sui-accordion",{[state]:!(0,src.xb)(state??""),"no-border-radius":noBorderRadius,"no-side-borders":noSideBorders},className);return(0,jsx_runtime.jsx)(AccordionProvider,{value:{allowMultipleExpand,expandState,setExpandState},children:(0,jsx_runtime.jsx)("div",{className:classNames,...props})})};var react_dom=__webpack_require__("./node_modules/react-dom/index.js"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),checkbox_src=__webpack_require__("./packages/ui/checkbox/src/index.ts");const AccordionItem=({title,description,children,isDisabled,icon,hasCheckbox,onCheck})=>{const[isChecked,setIsChecked]=(0,react.useState)(!1),[isPressed,setIsPressed]=(0,react.useState)(!1),uniqueId=(0,react.useId)(),{toggle,isExpanded}=(({uniqueId})=>{const{allowMultipleExpand,expandState,setExpandState}=(0,react.useContext)(AccordionContext);return{toggle:(0,react.useCallback)((()=>{if(!allowMultipleExpand)return setExpandState({[uniqueId]:!expandState[uniqueId]});setExpandState({...expandState,[uniqueId]:!expandState[uniqueId]})}),[allowMultipleExpand,setExpandState,expandState,uniqueId]),isExpanded:expandState[uniqueId]}})({uniqueId}),accordionId=`sui-accordion-${uniqueId}`,accordionPanelId=`sui-accordion-panel-${uniqueId}`,[isHovered,isFocused,interactionMethods]=(0,hooks_src.X2)({onMouseDownCapture:()=>{setIsPressed(!0)},onMouseUpCapture:()=>{setIsPressed(!1)}}),onCheckBoxChange=(0,react.useCallback)((e=>{e.stopPropagation(),setIsChecked(e.target.checked),onCheck&&onCheck(isExpanded)}),[isExpanded,onCheck]),Icon=isExpanded?components.Kh:components._M,checkboxPortalRef=(0,react.useRef)(null),[checkboxDomContainer,setCheckBoxDomContainer]=(0,react.useState)(null);return(0,react.useEffect)((()=>{checkboxPortalRef.current&&setCheckBoxDomContainer(checkboxPortalRef.current)}),[checkboxPortalRef]),(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-accordion__item",{expanded:isExpanded,hover:isHovered,disabled:isDisabled}),"data-testid":"accordion-item",children:[hasCheckbox&&checkboxDomContainer&&(0,react_dom.createPortal)((0,jsx_runtime.jsx)(checkbox_src.XZ,{name:accordionId,id:`${accordionId}-checkbox`,onChange:onCheckBoxChange,isChecked,isDisabled}),checkboxDomContainer),(0,jsx_runtime.jsxs)("div",{tabIndex:isDisabled?-1:0,role:"button",id:accordionId,"aria-expanded":isExpanded,"aria-controls":accordionPanelId,className:(0,src.uY)("sui-accordion__header",{focus:isFocused||isPressed}),onClick:toggle,"data-testid":"accordion-item-button",onKeyDown:e=>{e.stopPropagation(),(0,src.Jw)(e,toggle)},...interactionMethods??{},children:[(0,jsx_runtime.jsxs)("div",{className:"sui-accordion__header-info",children:[(!!hasCheckbox||!!icon)&&(0,jsx_runtime.jsxs)("div",{className:"sui-accordion__header-actions",children:[hasCheckbox&&(0,jsx_runtime.jsx)("div",{ref:checkboxPortalRef}),!!icon&&icon]}),(0,jsx_runtime.jsxs)("div",{className:"sui-accordion__header-title",children:[(0,jsx_runtime.jsx)("h2",{children:title}),!(0,src.xb)(description??"")&&(0,jsx_runtime.jsx)("p",{children:description})]})]}),(0,jsx_runtime.jsx)("div",{className:"sui-accordion__header-icon",children:(0,jsx_runtime.jsx)(Icon,{height:16,width:16})})]}),(0,jsx_runtime.jsx)("div",{role:"region",id:accordionPanelId,"aria-labelledby":accordionId,className:(0,src.uY)("sui-accordion__panel",{open:isExpanded}),"data-testid":"accordion-item-panel",children:(0,jsx_runtime.jsx)("div",{className:"sui-accordion__panel--content",children})})]})};var box_src=__webpack_require__("./packages/ui/box/src/index.ts");const AccordionItemBody=({children})=>(0,jsx_runtime.jsx)("div",{className:"sui-accordion__item--body","data-testid":"accordion-body",children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,children})})}),AccordionItemFooter=({children})=>(0,jsx_runtime.jsx)("div",{className:"sui-accordion__item--footer",children:(0,jsx_runtime.jsx)(box_src.x,{children:(0,jsx_runtime.jsx)(box_src.f,{isInline:!1,children})})})},"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,style})=>{const slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Kn)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter});return(0,jsx_runtime.jsx)("div",{className:classNames,style,"data-testid":"box-group",children:slots})},Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall,className="",style={},...props})=>{const hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!!headerLeft,hasRight=!(0,src.o8)(headerRight)&&!!headerRight,classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...props,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:(0,src.uY)("suicons",{[icon??""]:!0,lg:!0},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/checkbox/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ox:()=>CheckBoxGroups,XZ:()=>Checkbox,cO:()=>CheckboxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const CheckboxContext=(0,react.createContext)({items:[],setItems:items=>{},onChange:(id,isChecked,groupId)=>{}}),CheckboxProvider=({children,onChange})=>{const[items,setItems]=(0,react.useState)([]),handleOnChange=(0,react.useCallback)(((id,isChecked,groupId)=>{"string"==typeof id&&setItems((prevItems=>{const obj={id,groupId,isChecked},existingItemIndex=prevItems.findIndex((item=>item.id===id&&item.groupId===groupId));return existingItemIndex>-1?prevItems[existingItemIndex]=obj:prevItems.push(obj),onChange&&onChange(prevItems),[...prevItems]}))}),[onChange]);return(0,jsx_runtime.jsxs)(CheckboxContext.Provider,{value:{onChange:handleOnChange,items,setItems},children:[children," "]})},useCheckbox=()=>{const ctx=(0,react.useContext)(CheckboxContext);if(!ctx)throw new Error("useCheckbox must be used within a CheckboxContextProvider");return{...ctx,onChange:(id,isChecked,groupId)=>{ctx?.onChange?.(id,isChecked,groupId)},addToList:(id,isChecked,groupId)=>{ctx?.onChange?.(id,isChecked,groupId)}}};var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Indeterminate=({...props})=>(0,jsx_runtime.jsx)("span",{...props,children:(0,jsx_runtime.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10",height:"2",viewBox:"-1 0 12 3",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M9.7 0H0.3C0.134315 0 0 0.134315 0 0.3V1.7C0 1.86569 0.134315 2 0.3 2H9.7C9.86569 2 10 1.86569 10 1.7V0.3C10 0.134315 9.86569 0 9.7 0Z",fill:"white"})})}),Tick=({...props})=>(0,jsx_runtime.jsx)("span",{...props,children:(0,jsx_runtime.jsx)("svg",{viewBox:"0 0 12 10",fill:"none",className:"sui-checkbox__icon",children:(0,jsx_runtime.jsx)("path",{d:"M4.23784 9.08831L0.337838 5.16588C0.103533 4.93023 0.103533 4.54815 0.337838 4.31247L1.18635 3.45906C1.42065 3.22338 1.80057 3.22338 2.03488 3.45906L4.66211 6.10137L9.96507 0.91168C10.1994 0.676028 10.5793 0.676028 10.8136 0.91168L11.6621 1.76509C11.8964 2.00074 11.8964 2.38283 11.6621 2.6185L5.08637 9.08833C4.85205 9.32398 4.47215 9.32398 4.23784 9.08831Z"})})}),Checkbox=({id,groupId="",name,value="",label,isLabelHidden=!1,isChecked=!1,isDisabled=!1,isSmall=!1,isIndeterminate=!1,onChange:propOnchange=(e=>{})})=>{const ctx=useCheckbox(),[isHovered,isFocused,methods]=(0,hooks_src.X2)({});let uuid=`sui-checkbox-${(0,react.useId)()}`;id&&(uuid=id),(0,react.useEffect)((()=>{ctx?.addToList(id,isChecked,groupId)}),[id,groupId,isChecked]);const inputProps={id:uuid,type:"checkbox",name,value,className:"sui-screen-reader-only",checked:isChecked,disabled:isDisabled,onChange:e=>{ctx?.onChange&&ctx.onChange(uuid,e.target.checked,groupId),propOnchange&&propOnchange(e)},"aria-labelledby":`${uuid}-label`},containerProps={className:(0,src.uY)("sui-checkbox",{"hidden-label":isLabelHidden,indeterminate:isIndeterminate,hover:isHovered,focus:isFocused,disabled:isDisabled,checked:isChecked,sm:isSmall}),...methods},boxProps={className:"sui-checkbox__box","aria-hidden":!0};return(0,jsx_runtime.jsxs)("label",{...containerProps,htmlFor:uuid,"data-testid":"checkbox",children:[(0,jsx_runtime.jsx)("input",{...inputProps,"aria-label":label||"checkbox","data-testid":"checkbox-input"}),isIndeterminate?(0,jsx_runtime.jsx)(Indeterminate,{...boxProps}):(0,jsx_runtime.jsx)(Tick,{...boxProps,tabIndex:-1}),isLabelHidden?(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}):label]})},_CheckboxGroupInner=props=>{const{hasSubItems,title,children,commonCheckboxProps,isInline}=props,[isFirstRender,setIsFirstRender]=(0,react.useState)(!0),{items,setItems,addToList}=useCheckbox(),uuid=(0,react.useId)(),id=`sui-checkbox-group-${uuid}`,className=(0,src.uY)("sui-checkbox__group",{nested:hasSubItems,inline:isInline}),group=items.filter((item=>item.groupId===id)),checkedItemsCount=group?.filter((i=>i.isChecked)).length,allChecked=checkedItemsCount===group.length,hasCheckedItems=checkedItemsCount>0,onCheckboxChange=(0,react.useCallback)((()=>{const toUpdate=[];items.forEach((item=>{item.groupId===id?toUpdate.push({...item,isChecked:!allChecked||!allChecked&&checkedItemsCount>0}):toUpdate.push(item)})),setItems([...toUpdate])}),[items,allChecked,checkedItemsCount,id,setItems]);return(0,react.useEffect)((()=>{setIsFirstRender(!1)}),[]),(0,jsx_runtime.jsxs)("div",{className,children:[hasSubItems&&(0,jsx_runtime.jsx)(Checkbox,{...commonCheckboxProps,id,label:title??"",isChecked:allChecked&&hasCheckedItems,onChange:onCheckboxChange,isIndeterminate:!!hasCheckedItems&&(hasCheckedItems&&!allChecked)}),(0,jsx_runtime.jsx)("div",{className:"sui-checkbox__group-body",children:react.Children.map(children,((child,index)=>{const chekboxInitialId=child?.props?.id,initialIsChecked=child?.props?.isChecked,checkboxId=chekboxInitialId||`sui-checkbox-item-${uuid}-${index}`,currItem=items.find((i=>i.id===checkboxId&&i.groupId===id));return(0,react.cloneElement)(child,{...commonCheckboxProps,id:checkboxId,...child?.props,groupId:id,isChecked:isFirstRender?initialIsChecked:!!currItem?.isChecked})}))})]})},CheckboxGroup=({children,title="",hasSubItems=!1,isInline=!1,commonCheckboxProps={},onChange=()=>{},_isMultiGroup=!1})=>((content=null)=>_isMultiGroup?content:(0,jsx_runtime.jsx)(CheckboxProvider,{onChange,children:content}))((0,jsx_runtime.jsx)(_CheckboxGroupInner,{title,commonCheckboxProps:commonCheckboxProps??{},hasSubItems:hasSubItems??!1,isInline:isInline??!1,children})),CheckBoxGroups=({children,commonCheckboxProps={},onChange=()=>{}})=>{const className=(0,src.uY)("sui-checkbox-wrapper",{});return(0,jsx_runtime.jsx)(CheckboxProvider,{onChange,children:(0,jsx_runtime.jsx)("div",{className,children:react.Children.map(children,(child=>(0,react.cloneElement)(child,{commonCheckboxProps:{...commonCheckboxProps,...child?.props?.commonCheckboxProps},_isMultiGroup:!0})))})})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);