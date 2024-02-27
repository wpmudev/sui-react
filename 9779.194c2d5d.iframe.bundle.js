"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[9779],{"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.$l,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,_htmlProps={},_style,...restProps},ref)=>{children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=((0,utils_src.Im)(startIcon??""),!(0,utils_src.Im)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...(0,utils_src.EX)(_htmlProps),...interactionMethods??{},...(0,utils_src.EX)(restProps)};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const typeValues=["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="md",placement="start",onClick,...props})=>{const{suiInlineClassname}=(0,hooks_src.IS)(props);if((0,src.Im)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=components.Ay[name],iconClass=(name??"").replace(/[A-Z]/g,((match,index)=>(0===index?"":"-")+match.toLowerCase())),className=(0,src.n0)(`suicons sui-input__icon sui-input__icon--${iconClass}`,{},suiInlineClassname);return(0,jsx_runtime.jsx)("span",{className,"aria-hidden":"true","data-testid":`input-icon-${placement}`,onClick,children:IconName&&(0,jsx_runtime.jsx)(IconName,{size})})};var tooltip_src=__webpack_require__("./packages/ui/tooltip/src/index.ts");const Input=(0,react.forwardRef)((({type="text",defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall,isReadOnly=!1,isError=!1,isDisabled=!1,onClickIcon,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,onClear,icon,iconPosition,iconHint="",iconTooltipWidth,allowClear=!1,disableInteractions=!1,isRequired=!1,pattern,onKeyUp,validateOnMount=!1,customWidth,onValidate,_htmlProps={},_style={}},ref)=>{const uniqueId=(0,react.useId)();id||(id=uniqueId);const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src.Mj)({}),[hasError,setHasError]=(0,react.useState)(!1);if(!(!(0,src.b0)(id)&&!(0,src.Im)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClearCallback=(0,react.useCallback)((()=>{setValue(""),onClear&&onClear("")}),[onClear]),hasValue=!(0,src.b0)(value)&&!(0,src.Im)(value??""),hasPlaceholder=!(0,src.b0)(placeholder)&&!(0,src.Im)(placeholder),hasClassInput=!(0,src.b0)(inputClass)&&!(0,src.Im)(inputClass);let inputType="text";typeValues.includes(type)&&(inputType=type);const{suiInlineClassname}=(0,hooks_src.IS)(_style,className??""),classNames=(0,src.n0)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly&&!isError,filled:hasValue,"has-icon":!(0,src.Im)(icon),"icon-start":!(0,src.Im)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.Im)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},suiInlineClassname),inputClassNames=(0,src.n0)("sui-input__input",{"allow-clear":allowClear&&!(0,src.Im)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const hasHintText=!(0,src.Im)(hint??"");(0,react.useEffect)((()=>{onValidate&&onValidate(id,hasError)}),[hasError]);const validation=()=>{let tempHasError=!1;const val=value?.toString()?.trim()??"";"string"==typeof value&&""!==val&&pattern?tempHasError=!new RegExp("^(?:"+pattern+")$","gm").test(val):isRequired&&(0,src.Im)(val)&&(tempHasError=!0),setHasError(tempHasError)};(0,react.useEffect)((()=>{validateOnMount&&validation()}),[]);const attrs={id,ref,type:(0,src.Me)(!isMultiLine,inputType),placeholder:(0,src.Me)(hasPlaceholder,placeholder),"aria-label":placeholder||"input",readOnly:(0,src.Me)(isReadOnly,!0),disabled:(0,src.Me)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,required:isRequired,pattern,onKeyUp:e=>{validation(),onKeyUp&&onKeyUp(e)}},renderIcon=()=>!icon||isMultiLine?null:(0,src.Im)(iconHint)?(0,jsx_runtime.jsx)(Icon,{name:icon,size:isSmall?"sm":"md",placement:iconPosition??"start",onClick:e=>{onClickIcon&&onClickIcon(e)}}):(0,jsx_runtime.jsx)(tooltip_src.m,{type:"icon",icon,customWidth:iconTooltipWidth,iconSize:isSmall?"sm":"md",placement:"top",onClick:()=>{onClickIcon&&onClickIcon()},children:iconHint});return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",...customWidth&&{style:{maxWidth:`${customWidth}px`}},children:["start"===iconPosition&&renderIcon(),(0,jsx_runtime.jsxs)("div",{className:(0,src.n0)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs,...(0,src.EX)(_htmlProps)}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.Im)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),"end"===iconPosition&&renderIcon(),allowClear&&!(0,src.Im)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.$,{className:"sui-input__input-clear",icon:"CloseAlt",colorScheme:"black",type:"tertiary",iconOnly:!0,iconSize:isSmall?"sm":"md",onClick:onClearCallback,isSmall:isSmall??!1,_htmlProps:{onKeyDown:e=>(0,src.f$)(e,onClear)},children:"Clear"})]})}));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1},isMultiLine:{defaultValue:{value:"false",computed:!1},required:!1},isReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},onMouseEnter:{defaultValue:{value:"() => { }",computed:!1},required:!1},onMouseLeave:{defaultValue:{value:"() => { }",computed:!1},required:!1},iconHint:{defaultValue:{value:'""',computed:!1},required:!1},allowClear:{defaultValue:{value:"false",computed:!1},required:!1},disableInteractions:{defaultValue:{value:"false",computed:!1},required:!1},isRequired:{defaultValue:{value:"false",computed:!1},required:!1},validateOnMount:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1},_style:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name="Info",size="sm",onClick=()=>null})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",onClick,children:(0,jsx_runtime.jsx)(IconTag,{size})})},Tooltip=({label,type="button",className,placement="top",customWidth,customMobileWidth,children,onClick,onMouseEnter=()=>{},onMouseLeave=()=>{},onFocus=()=>{},onBlur=()=>{},href,icon,iconSize="sm",buttonProps,_htmlProps={},_style={},...props})=>{const isRTL=(0,hooks_src.L2)(),uniqueId=(0,react.useId)(),[isVisible,setIsVisible]=(0,react.useState)(!1),[pos,setPos]=(0,react.useState)({top:0,left:0}),tooltipRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),[render]=(0,hooks_src.WP)("body"),[isHovered,isFocused,methods,toggleHover]=(0,hooks_src.Mj)({onMouseEnter:e=>{if(tooltipRef.current){const parentRect=tooltipRef?.current?.getBoundingClientRect(),trigger=triggerRef?.current?.getBoundingClientRect(),popupEl=document.getElementById(`sui-tooltip-${uniqueId}`),tooltipHeight=popupEl?.clientHeight||0,tooltipWidth=popupEl?.clientWidth||0,alignName=isRTL?"right":"left";let align=parentRect.left;if(!popupEl)return;isRTL&&(align=window.innerWidth-parentRect.right);popupEl&&window.getComputedStyle(popupEl);let attrs={top:`${parentRect.top+window.scrollY}px`};switch(placement){case"top":case"top-left":case"top-right":attrs={...attrs,top:parentRect.top-tooltipHeight-10+window.scrollY},"top-right"===placement?attrs={...attrs,[alignName]:align-tooltipWidth+(trigger?.width??0)}:"top"===placement?attrs={...attrs,left:parentRect.left+(trigger?.width??0)/2+window.scrollX}:"top-left"===placement&&(attrs={...attrs,[alignName]:align});break;case"bottom":case"bottom-left":case"bottom-right":attrs={...attrs,top:parentRect.top+(trigger?.height??0)+10+window.scrollY},"bottom-right"===placement?attrs={...attrs,[alignName]:align-tooltipWidth+(trigger?.width??0)}:"bottom"===placement?attrs={...attrs,left:parentRect.left+(trigger?.width??0)/2+window.scrollY}:"bottom-left"===placement&&(attrs={...attrs,[alignName]:align});break;case"right":case"right-top":case"right-bottom":attrs={...attrs,[alignName]:align+(trigger?.width??0)+10},attrs="right-top"===placement?{...attrs,top:parentRect.top+window.scrollY}:"right-bottom"===placement?{...attrs,top:parentRect.top+(trigger?.height??0)-tooltipHeight+window.scrollY}:{...attrs,top:parentRect.top+(trigger?.height??0)/2};break;case"left":case"left-top":case"left-bottom":attrs={...attrs,[alignName]:align-tooltipWidth-10},attrs="left-top"===placement?{...attrs,top:parentRect.top}:"left-bottom"===placement?{...attrs,top:parentRect.top+(trigger?.height??0)-tooltipHeight}:{...attrs,top:parentRect.top+(trigger?.height??0)/2}}setPos(attrs)}setIsVisible(!0)},onMouseLeave:()=>{setIsVisible(!1)},onFocus,onBlur});children=(0,hooks_src.Q8)(children,"{default tooltip content}");const attrs={},{suiInlineClassname}=(0,hooks_src.IS)(_style,className??""),classNames=(0,utils_src.n0)("sui-tooltip",{focus:isFocused},suiInlineClassname);(customWidth||customMobileWidth)&&(attrs.style={...pos,...customWidth&&{"--tooltip-width":`${customWidth}px`},...customMobileWidth&&{"--tooltip-width-mobile":`${customMobileWidth}px`}});const escFunction=(0,react.useCallback)((event=>{"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((()=>(document.addEventListener("keydown",escFunction),()=>{document.removeEventListener("keydown",escFunction)})),[escFunction]);const onClickCallback=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",{...methods,className:classNames,"data-testid":"tooltip",ref:tooltipRef,...(0,utils_src.EX)(_htmlProps),children:[(0,jsx_runtime.jsx)("div",{className:"sui-tooltip__trigger",ref:triggerRef,children:(()=>{switch(type){case"button":return(0,jsx_runtime.jsx)(src.$,{...buttonProps,...icon&&{icon},href,onClick:onClickCallback,children:label});case"text":return(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.f$)(e),children:label});case"icon":return onClick?(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__trigger--icon",role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.f$)(e,onClickCallback),children:(0,jsx_runtime.jsx)(Icon,{name:icon,size:iconSize})}):(0,jsx_runtime.jsx)(Icon,{name:icon,size:iconSize});default:return(0,jsx_runtime.jsx)("span",{...(0,utils_src.EX)(props),children:label})}})()}),!!children&&render((0,jsx_runtime.jsx)("div",{id:`sui-tooltip-${uniqueId}`,className:(0,utils_src.n0)("sui-tooltip__popup",{show:isVisible,focus:isFocused,"custom-width":!!customWidth,[placement]:!0,icon:!!icon}),role:"tooltip","aria-live":"polite","aria-hidden":!isVisible,tabIndex:isVisible?0:-1,"data-testid":"tooltip-popup",style:pos,...attrs,children}))]})}}}]);