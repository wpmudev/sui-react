"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[6483],{"./packages/ui/box/stories/box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Box:()=>Box,__namedExportsOrder:()=>__namedExportsOrder,default:()=>box_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/box/src/index.ts")),grid_src=__webpack_require__("./packages/ui/grid/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const basicCode=dedent_default()`
    <Box title="Box label" icon="hub" headerLeft="Left content" headerRight="Right content">
        <BoxGroup>
            <Row align={{ md: "inline" }}>
                <Col size="6">
                    <div
                        style={{
                                padding: 20,
                                borderRadius: 4,
                                background: "#F8F8F8",
                            }}
                        >Left block</div>
                    </Col>
                    <Col size="6">
                        <div style={{
                            padding: 20,
                            borderRadius: 4,
                            background: "#F8F8F8",
                        }}
                        >Right block</div>
                    </Col>
                </Row>
            </BoxGroup>
    </Box>
`;dedent_default()`
    <FormField
            error={{ state: true, text: "Name must have at least 3 characters" }}
            label="Name"
    >
        <Input value="ab" id="input-example" placeholder="Placeholder" />
    </FormField>
`,dedent_default()`
    <FormField label="Settings" helper="Please Select one option">
        <Select
            id="select-example"
            options={[
                    {
                        icon: "settings",
                        id: "option-1",
                        label: "Option 1",
                        isSelected: false,
                    },
                    {
                        icon: "settings",
                        id: "option-2",
                        label: "Option 2",
                        isSelected: false,
                    },
                    {
                        icon: "settings",
                        id: "option-3",
                        label: "Option 3",
                        isSelected: false,
                    },
                ]}
        />
    </FormField>
`;function _createMdxContent(props){const _components=Object.assign({span:"span"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.$0,{title:"A Form Field with a basic Input",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.x,{title:"Box label",icon:"hub",headerLeft:[(0,jsx_runtime.jsx)(_components.span,{className:"sui-tag sui-tag--outlined-navy sui-tag--sm sui-tag--uppercase",children:(0,jsx_runtime.jsx)(_components.span,{className:"sui-tag__label",children:"Pro"})},"1")],headerRight:[(0,jsx_runtime.jsx)(button_src.z,{appearance:"primary",color:"blue",isSmall:!0,children:"Run Action"},"1")],children:(0,jsx_runtime.jsx)(src.f,{children:(0,jsx_runtime.jsxs)(grid_src.X,{align:{md:"inline"},children:[(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#F8F8F8"},children:"Left block"})}),(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#F8F8F8"},children:"Right block"})})]})})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:basicCode})]})}const TabExamples=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Hl,{packageName:"@wpmudev/sui-box"}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Box Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.Yb,{title:"title",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"The title of the box."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"icon",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Hide icon on the mobile view."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"hideMobileIcon",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Hide icon on the mobile view."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"headerLeft",type:"React Node | string",children:(0,jsx_runtime.jsx)("p",{children:"The content for the left header section of the box."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"headerRight",type:"React Node | string",children:(0,jsx_runtime.jsx)("p",{children:"The content for the right header section of the box."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"style",type:"object",children:(0,jsx_runtime.jsx)("p",{children:"Box inline styles"})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"isSmall",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Make box small."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Custom css class Name(s) "})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"The content of the field, it could be any form element "})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"BoxGroup Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.Yb,{title:"isInline",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:"Whether the boxes should be displayed inline or not."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"isHeader",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether the boxes should be displayed as box header."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"isFooter",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether the boxes should be displayed as footer."})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"style",type:"object",children:(0,jsx_runtime.jsx)("p",{children:"Box inline styles "})}),(0,jsx_runtime.jsx)(docs_src.Yb,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"The content of the field, it could be any form element "})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};function box_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Box",subtitle:"",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const box=function box_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(box_createMdxContent,props)})):box_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const box_stories={title:"SUI/Components/Core/Box",component:src.x,parameters:{layout:"fullscreen",docs:{page:box}}},Box=({...props})=>{const styles={padding:20,borderRadius:4,background:"#F8F8F8"},{hasPadding}=props;return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(src.x,{...props,children:(0,jsx_runtime.jsx)(src.f,{hasPadding,children:(0,jsx_runtime.jsxs)(grid_src.X,{align:{md:"inline"},children:[(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:styles,children:"Left block"})}),(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:styles,children:"Right block"})})]})})})})})};Box.args={title:"Box Label",icon:"Hub",headerLeft:[(0,jsx_runtime.jsx)("span",{className:"sui-tag sui-tag--outlined-navy sui-tag--sm sui-tag--uppercase",children:(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children:"Pro"})},"1")],headerRight:[(0,jsx_runtime.jsx)(button_src.z,{appearance:"primary",color:"blue",isSmall:!0,children:"Run Action"},"1")],hasPadding:!0},Box.parameters={...Box.parameters,docs:{...Box.parameters?.docs,source:{originalSource:'({\n  ...props\n}: BoxGroupProps) => {\n  const styles = {\n    padding: 20,\n    borderRadius: 4,\n    background: "#F8F8F8"\n  };\n  const {\n    hasPadding\n  } = props;\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <SuiBox {...props}>\n                    <BoxGroup hasPadding={hasPadding}>\n                        <Row align={{\n            md: "inline"\n          }}>\n                            <Col size="6">\n                                <div style={styles}>Left block</div>\n                            </Col>\n                            <Col size="6">\n                                <div style={styles}>Right block</div>\n                            </Col>\n                        </Row>\n                    </BoxGroup>\n                </SuiBox>\n            </div>\n        </div>;\n}',...Box.parameters?.docs?.source}}};const __namedExportsOrder=["Box"]},"./packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Um:()=>useDefaultChildren,fV:()=>useDetectBrowser,p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,D9:()=>usePrevious,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const useInteraction=methods=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),{onMouseEnter,onMouseLeave,onMouseDownCapture,onMouseUp,onMouseUpCapture,onFocus,onBlur,onBlurCapture}=methods,toggleHover=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsHovered(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),toggleFocus=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsFocused(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),onMouseUpCallback=(0,react.useCallback)((e=>{const target=e?.currentTarget;target&&(target?.focus(),toggleFocus(!0,e,(event=>{onMouseUp&&onMouseUp(event)})))}),[onMouseUp,toggleFocus]),onMouseEnterCallback=(0,react.useCallback)((e=>toggleHover(!0,e,(event=>{onMouseEnter&&onMouseEnter(event)}))),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(()=>{onMouseLeave&&onMouseLeave(event)}))),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onMouseDownCapture&&onMouseDownCapture(event)}))),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onMouseUpCapture&&onMouseUpCapture(event)}))),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(event=>{onBlurCapture&&onBlurCapture(event)}))),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onBlur&&onBlur(event)}))),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseUp:onMouseUpCallback,onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onFocus&&onFocus(event)}))),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=(ref,callback=(()=>{}))=>{const onPageClick=(0,react.useCallback)((event=>{ref?.current&&!ref?.current.contains(event.target)&&callback()}),[callback,ref]);(0,react.useEffect)((()=>(document.addEventListener("click",onPageClick),()=>{document.removeEventListener("click",onPageClick)})))};var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const usePortal=wrapperId=>{const[wrapperElement,setWrapperElement]=(0,react.useState)(null);wrapperId=wrapperId??".sui-wrap",(0,react.useLayoutEffect)((()=>{let el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=(wrapperId=>{const wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement})(wrapperId)),setWrapperElement(el),()=>{systemCreated&&el?.parentNode&&el.parentNode.removeChild(el)}}),[wrapperId]);return[children=>null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)]},useValidateProps=({propsToCheck,component})=>{const componentName=component?.displayName||component?.name;Object.keys(propsToCheck)?.forEach(((propKey,index)=>{if(!!(0,src.xb)(propsToCheck?.[propKey]??""))throw new Error(`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`)}))},useDragAndDrop=({containerRef,methods})=>{const[node,setNode]=(0,react.useState)(),[isDragging,setIsDragging]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setNode(containerRef)}),[containerRef]),(0,react.useEffect)((()=>{const onDragOver=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!0),methods?.onDragOver&&methods?.onDragOver(e)},onDrop=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1),methods?.onDrop&&methods?.onDrop(e)},current=node?.current;return current?.addEventListener("dragover",onDragOver,!1),current?.addEventListener("drop",onDrop,!1),()=>{current?.removeEventListener("dragover",onDragOver,!1),current?.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=()=>{const[isRTL,setIsRTL]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const updateRTL=()=>{const isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();const mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),()=>{mutationObserver.disconnect()}}),[]),isRTL},usePrevious=value=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current},useDefaultChildren=(children,content)=>children||content||"{children content}",useDetectBrowser=()=>{const userAgent=navigator?.userAgent??"";let name="unknown",ver="";switch(!0){case userAgent.indexOf("Firefox")>-1:name="firefox",ver=userAgent?.match(/Firefox\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("Chrome")>-1:name="chrome",ver=userAgent?.match(/Chrome\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("Safari")>-1:name="safari",ver=userAgent?.match(/Version\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("MSIE")>-1||userAgent.indexOf("Trident/")>-1:name="ie",ver=userAgent?.match(/(?:MSIE |rv:)([0-9.]+)/)?.[1];break;case userAgent.indexOf("Edge")>-1:name="ms-edge",ver=userAgent?.match(/Edge\/([0-9.]+)/)?.[1]}return{name,ver}}},"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,hasPadding=!0,style})=>{const slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Kn)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter,"no-padding":!hasPadding});return(0,jsx_runtime.jsx)("div",{className:classNames,style,"data-testid":"box-group",children:slots})};var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall=!1,className="",style={},...props})=>{const hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!!headerLeft,hasRight=!(0,src.o8)(headerRight)&&!!headerRight,IconTag=components.ZP[icon],classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return children=(0,hooks_src.Um)(children),(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...props,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&IconTag&&(0,jsx_runtime.jsx)("span",{className:(0,src.uY)("suicons",{},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true",children:(0,jsx_runtime.jsx)(IconTag,{size:"md"})}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.o8)(hidden)&&!(0,utils_src.jn)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.ZP[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.__,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,appearance,color,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly=!1,iconSize="sm",isResponsive=!1,isLoading=!1,...restProps},ref)=>{children=(0,src.Um)(children,"button label"),isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.X2)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.o8)(href),label=!(0,utils_src.o8)(htmlFor),isEndIcon=((0,utils_src.xb)(startIcon??""),!(0,utils_src.xb)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${appearance}-${color}`]:!!appearance&&!!color,inline:iconOnly&&!appearance,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.CI)(label),className:(0,utils_src.uY)("sui-button",attrClasses,className??""),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...interactionMethods??{},...restProps};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button"},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Col,X:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Row=({align={md:"inline"},className,children,...props})=>{const expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames="sui-row";children=(0,hooks_src.Um)(children,"{Row children}");for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.xb)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"grid",...props,children})},Col=({size,children,className,...props})=>{const classNames=(0,src.uY)("sui-col",{[size]:!!size},className);return children=(0,hooks_src.Um)(children,"{Column children content}"),"colSize"in props&&delete props?.colSize,"size"in props&&delete props?.size,(0,jsx_runtime.jsx)("div",{className:classNames,...props,children})}}}]);
//# sourceMappingURL=ui-box-stories-box-stories.029efafe.iframe.bundle.js.map