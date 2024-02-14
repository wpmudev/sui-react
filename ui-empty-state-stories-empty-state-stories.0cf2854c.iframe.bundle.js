"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[3580],{"./packages/ui/empty-state/stories/empty-state.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmptyState:()=>empty_state_stories_EmptyState,__namedExportsOrder:()=>__namedExportsOrder,default:()=>empty_state_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const EmptyState=({logo,className,children,...props})=>{const classNames=(0,src.QX)("sui-empty-state",{},className),isImg="string"==typeof logo;return children=(0,hooks_src.$z)(children),(0,jsx_runtime.jsx)("div",{className:classNames,...props,children:(0,jsx_runtime.jsxs)("div",{className:"sui-empty-state__wrapper",children:[!!logo&&(0,jsx_runtime.jsx)("div",{className:"sui-empty-state__logo",children:isImg?(0,jsx_runtime.jsx)("img",{src:logo,alt:"LOGO"}):logo}),children]})})};var button_src=__webpack_require__("./packages/ui/button/src/index.ts"),grid_src=__webpack_require__("./packages/ui/grid/src/index.ts");const images_empty_state_namespaceObject=__webpack_require__.p+"static/media/empty-state.4c3d4e2d.svg";var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.6bb4597e.svg",layout_spacing_namespaceObject=__webpack_require__.p+"static/media/layout-spacing.ceefc327.svg",layout_spacing_two_namespaceObject=__webpack_require__.p+"static/media/layout-spacing-two.3a912a23.svg",responsive_large_namespaceObject=__webpack_require__.p+"static/media/responsive-large.e7e917e5.svg",responsive_medium_namespaceObject=__webpack_require__.p+"static/media/responsive-medium.2decd82a.svg",responsive_small_namespaceObject=__webpack_require__.p+"static/media/responsive-small.88cbf8fd.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Anatomy",style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Tab anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Thumbnail image"}),(0,jsx_runtime.jsx)("p",{children:"The thumbnail should have a rounded circle shape and be 200px in both height and width."}),(0,jsx_runtime.jsx)("h3",{children:"2. Title and Description"}),(0,jsx_runtime.jsx)("p",{children:"The title should clearly convey the purpose of the empty state, while the description can provide more detailed information."}),(0,jsx_runtime.jsx)("h3",{children:"3. Actions"}),(0,jsx_runtime.jsx)("p",{children:"The title should clearly convey the purpose of the empty state, while the description can provide more detailed information."})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Layout and Spacing",children:[(0,jsx_runtime.jsx)("img",{src:layout_spacing_namespaceObject,alt:"Empty State Layout and Spacing",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("img",{src:layout_spacing_two_namespaceObject,alt:"Empty State Layout and Spacing",style:{marginBottom:20}})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Responsive Styles",children:[(0,jsx_runtime.jsx)("h3",{children:"1. Large"}),(0,jsx_runtime.jsx)("p",{children:"For large screen sizes, the content max width should be set to 760px."}),(0,jsx_runtime.jsx)("img",{src:responsive_large_namespaceObject,alt:"Responsive Large Size"}),(0,jsx_runtime.jsx)("h3",{children:"2. Medium"}),(0,jsx_runtime.jsx)("p",{children:"The content will take 100% width for medium size devices."}),(0,jsx_runtime.jsx)("img",{src:responsive_medium_namespaceObject,alt:"Responsive Medium Size"}),(0,jsx_runtime.jsx)("h3",{children:"2. Small"}),(0,jsx_runtime.jsx)("p",{children:"The actions will take full width in small devices."}),(0,jsx_runtime.jsx)("img",{src:responsive_small_namespaceObject,alt:"Responsive Small Size"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Qr,{packageName:"@wpmudev/sui-empty-state"}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src._6,{title:"logo",type:"string | React Element",children:(0,jsx_runtime.jsx)("p",{children:" The logo to be displayed, it could be a string ( url ) or a React element like an SVG "})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"children",type:"ReactNode",children:(0,jsx_runtime.jsx)("p",{children:" The content of the component, it could be any React element "})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"className",type:"ReactNode",children:(0,jsx_runtime.jsx)("p",{children:" Custom css className(s) for further styling "})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const sampleCode=dedent_default()`
    import SvgImage from "./example-image.svg"

    <EmptyState logo={SvgImage}>
        <Row>
            <h3 className="sui-heading--h3">This site has not yet been scanned.</h3>
            <p>Defender watches and protects your login area for attackers trying to randomly guess login details for your site and locks them out after a set number of failed attempts.</p>
        </Row>

        <Row align={{ md: "center" }}>
            <Button appearance="secondary" color="blue" isSmall={true}>
                <>Primary</>
            </Button>
           <Button appearance="primary" color="blue" isSmall={true}>
                <>Secondary</>
            </Button>
        </Row>
    </EmptyState>

`,differentContentCode=dedent_default()`
    import SvgImage from "./example-image.svg"

    <EmptyState logo={SvgImage}>
       <h3 className="sui-heading--h3">This page is not available yet</h3>
    </EmptyState>

`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"The default form of the EmptyState component"}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(EmptyState,{logo:images_empty_state_namespaceObject,children:[(0,jsx_runtime.jsxs)(grid_src.W,{children:[(0,jsx_runtime.jsx)("h3",{className:"sui-heading--h3",children:"This site has not yet been scanned."}),(0,jsx_runtime.jsx)("p",{children:"\tDefender watches and protects your login area for attackers trying to randomly guess login details for your site and locks them out after a set number of failed attempts.\t"})]}),(0,jsx_runtime.jsxs)(grid_src.W,{align:{md:"center"},children:[(0,jsx_runtime.jsx)(button_src.q,{appearance:"secondary",color:"blue",isSmall:!0,children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Primary"})}),(0,jsx_runtime.jsx)(button_src.q,{appearance:"primary",color:"blue",isSmall:!0,children:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Secondary"})})]})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,title:"Different content",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"children"})," prop to change the content to fit\nyour needs."]})}),(0,jsx_runtime.jsx)("p",{children:"In this exmpale the EmptyState only has a title"}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(EmptyState,{logo:images_empty_state_namespaceObject,children:(0,jsx_runtime.jsx)("h3",{className:"sui-heading--h3",children:"This page is not available yet"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:differentContentCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function EmptyState_createMdxContent(props){return docs_src.K2||_missingMdxReference("Page",!1),docs_src.K2.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.C,{children:(0,jsx_runtime.jsxs)(docs_src.K2.Tabs,{title:"Empty State",subtitle:"When there is no content to display on a page, use the Empty State component to provide context and guidance to users regarding what to do next.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const stories_EmptyState=function EmptyState_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(EmptyState_createMdxContent,props)})):EmptyState_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const empty_state_stories_EmptyState=({children,...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(EmptyState,{...props,children})})})});empty_state_stories_EmptyState.args={logo:images_empty_state_namespaceObject,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(grid_src.W,{children:[(0,jsx_runtime.jsx)("h3",{className:"sui-heading--h3",children:"This site has not yet been scanned."}),(0,jsx_runtime.jsxs)("p",{children:[" ","Defender watches and protects your login area for attackers trying to randomly guess login details for your site and locks them out after a set number of failed attempts."," "]})]}),(0,jsx_runtime.jsxs)(grid_src.W,{align:{md:"center"},children:[(0,jsx_runtime.jsx)(button_src.q,{appearance:"secondary",color:"blue",children:"Primary"}),(0,jsx_runtime.jsx)(button_src.q,{appearance:"primary",color:"blue",children:"Secondary"})]})]})},empty_state_stories_EmptyState.argTypes={children:{name:"Children",description:"The content of the box"},logo:{name:"Logo",description:"The logo inside the box.",control:{type:"text"}}};const empty_state_stories={title:"SUI/Components/Advanced/Empty State",component:empty_state_stories_EmptyState,parameters:{layout:"fullscreen",docs:{page:stories_EmptyState}}},__namedExportsOrder=["EmptyState"]},"./packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$z:()=>useDefaultChildren,e_:()=>useDetectBrowser,od:()=>useDetectRTL,ac:()=>useDragAndDrop,_Y:()=>useInteraction,gx:()=>useOuterClick,mS:()=>usePortal,i0:()=>usePrevious,Ap:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const useInteraction=methods=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),{onMouseEnter,onMouseLeave,onMouseDownCapture,onMouseUp,onMouseUpCapture,onFocus,onBlur,onBlurCapture}=methods,toggleHover=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsHovered(state),(0,src.mg)(callback)&&callback&&callback(event)}),[]),toggleFocus=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsFocused(state),(0,src.mg)(callback)&&callback&&callback(event)}),[]),onMouseUpCallback=(0,react.useCallback)((e=>{const target=e?.currentTarget;target&&(target?.focus(),toggleFocus(!0,e,(event=>{onMouseUp&&onMouseUp(event)})))}),[onMouseUp,toggleFocus]),onMouseEnterCallback=(0,react.useCallback)((e=>toggleHover(!0,e,(event=>{onMouseEnter&&onMouseEnter(event)}))),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(()=>{onMouseLeave&&onMouseLeave(event)}))),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onMouseDownCapture&&onMouseDownCapture(event)}))),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onMouseUpCapture&&onMouseUpCapture(event)}))),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(event=>{onBlurCapture&&onBlurCapture(event)}))),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onBlur&&onBlur(event)}))),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseUp:onMouseUpCallback,onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onFocus&&onFocus(event)}))),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=(ref,callback=(()=>{}))=>{const onPageClick=(0,react.useCallback)((event=>{ref?.current&&!ref?.current.contains(event.target)&&callback()}),[callback,ref]);(0,react.useEffect)((()=>(document.addEventListener("click",onPageClick),()=>{document.removeEventListener("click",onPageClick)})))};var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const usePortal=wrapperId=>{const[wrapperElement,setWrapperElement]=(0,react.useState)(null);wrapperId=wrapperId??".sui-wrap",(0,react.useLayoutEffect)((()=>{let el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=(wrapperId=>{const wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement})(wrapperId)),setWrapperElement(el),()=>{systemCreated&&el?.parentNode&&el.parentNode.removeChild(el)}}),[wrapperId]);return[children=>null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)]},useValidateProps=({propsToCheck,component})=>{const componentName=component?.displayName||component?.name;Object.keys(propsToCheck)?.forEach(((propKey,index)=>{if(!!(0,src.t7)(propsToCheck?.[propKey]??""))throw new Error(`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`)}))},useDragAndDrop=({containerRef,methods})=>{const[node,setNode]=(0,react.useState)(),[isDragging,setIsDragging]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setNode(containerRef)}),[containerRef]),(0,react.useEffect)((()=>{const onDragOver=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!0),methods?.onDragOver&&methods?.onDragOver(e)},onDrop=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1),methods?.onDrop&&methods?.onDrop(e)},current=node?.current;return current?.addEventListener("dragover",onDragOver,!1),current?.addEventListener("drop",onDrop,!1),()=>{current?.removeEventListener("dragover",onDragOver,!1),current?.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=()=>{const[isRTL,setIsRTL]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const updateRTL=()=>{const isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();const mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),()=>{mutationObserver.disconnect()}}),[]),isRTL},usePrevious=value=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current},useDefaultChildren=(children,content)=>children||content||"{children content}",useDetectBrowser=()=>{const userAgent=navigator?.userAgent??"";let name="unknown",ver="";switch(!0){case userAgent.indexOf("Firefox")>-1:name="firefox",ver=userAgent?.match(/Firefox\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("Chrome")>-1:name="chrome",ver=userAgent?.match(/Chrome\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("Safari")>-1:name="safari",ver=userAgent?.match(/Version\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("MSIE")>-1||userAgent.indexOf("Trident/")>-1:name="ie",ver=userAgent?.match(/(?:MSIE |rv:)([0-9.]+)/)?.[1];break;case userAgent.indexOf("Edge")>-1:name="ms-edge",ver=userAgent?.match(/Edge\/([0-9.]+)/)?.[1]}return{name,ver}}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.Y3)(hidden)&&!(0,utils_src.am)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.Y3)(name)&&!(0,utils_src.t7)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.cp[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.K,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,appearance,color,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly=!1,iconSize="sm",isResponsive=!1,isLoading=!1,...restProps},ref)=>{children=(0,src.$z)(children,"button label"),isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src._Y)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.Y3)(href),label=!(0,utils_src.Y3)(htmlFor),isEndIcon=((0,utils_src.t7)(startIcon??""),!(0,utils_src.t7)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${appearance}-${color}`]:!!appearance&&!!color,inline:iconOnly&&!appearance,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.es)(label),className:(0,utils_src.QX)("sui-button",attrClasses,className??""),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...interactionMethods??{},...restProps};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconOnly:{defaultValue:{value:"false",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Col,W:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Row=({align={md:"inline"},className,children,...props})=>{const expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames="sui-row";children=(0,hooks_src.$z)(children,"{Row children}");for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.t7)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"grid",...props,children})},Col=({size,children,className,...props})=>{const classNames=(0,src.QX)("sui-col",{[size]:!!size},className);return children=(0,hooks_src.$z)(children,"{Column children content}"),"colSize"in props&&delete props?.colSize,"size"in props&&delete props?.size,(0,jsx_runtime.jsx)("div",{className:classNames,...props,children})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-empty-state-stories-empty-state-stories.0cf2854c.iframe.bundle.js.map