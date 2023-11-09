(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[5921],{"./packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const useInteraction=methods=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),{onMouseEnter,onMouseLeave,onMouseDownCapture,onMouseUpCapture,onFocus,onBlur,onBlurCapture}=methods,toggleHover=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsHovered(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),toggleFocus=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsFocused(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((e=>toggleHover(!0,e,(event=>{onMouseEnter&&onMouseEnter(event)}))),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(()=>{onMouseLeave&&onMouseLeave(event)}))),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onMouseDownCapture&&onMouseDownCapture(event)}))),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onMouseUpCapture&&onMouseUpCapture(event)}))),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(event=>{onBlurCapture&&onBlurCapture(event)}))),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onBlur&&onBlur(event)}))),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onFocus&&onFocus(event)}))),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=(ref,callback=(()=>{}))=>{const onPageClick=(0,react.useCallback)((event=>{ref?.current&&!ref?.current.contains(event.target)&&callback()}),[callback,ref]);(0,react.useEffect)((()=>(document.addEventListener("click",onPageClick),()=>{document.removeEventListener("click",onPageClick)})))};var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const usePortal=wrapperId=>{const[wrapperElement,setWrapperElement]=(0,react.useState)(null);wrapperId=wrapperId??".sui-wrap",(0,react.useLayoutEffect)((()=>{let el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=(wrapperId=>{const wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement})(wrapperId)),setWrapperElement(el),()=>{systemCreated&&el?.parentNode&&el.parentNode.removeChild(el)}}),[wrapperId]);return[children=>null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)]},useValidateProps=({propsToCheck,component})=>{const componentName=component?.displayName||component?.name;Object.keys(propsToCheck)?.forEach(((propKey,index)=>{if(!!(0,src.xb)(propsToCheck?.[propKey]??""))throw new Error(`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`)}))},useDragAndDrop=({containerRef,methods})=>{const[node,setNode]=(0,react.useState)(),[isDragging,setIsDragging]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setNode(containerRef)}),[containerRef]),(0,react.useEffect)((()=>{const onDragOver=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!0),methods?.onDragOver&&methods?.onDragOver(e)},onDrop=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1),methods?.onDrop&&methods?.onDrop(e)},current=node?.current;return current?.addEventListener("dragover",onDragOver,!1),current?.addEventListener("drop",onDrop,!1),()=>{current?.removeEventListener("dragover",onDragOver,!1),current?.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=()=>{const[isRTL,setIsRTL]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const updateRTL=()=>{const isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();const mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),()=>{mutationObserver.disconnect()}}),[]),isRTL}},"./packages/ui/setting-block/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>SettingBlock});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/tag/src/index.ts")),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SettingBlock=({title,description,className,isPro=!1,children})=>{const[isHovered,isFocused,methods]=(0,hooks_src.X2)({}),classNames=(0,utils_src.uY)("sui-setting-block",{focus:isFocused,hover:isHovered&&!isFocused,pro:isPro},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"setting-block",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-setting-block__info",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-setting-block__info-title sui-heading--h5",children:[title,isPro&&(0,jsx_runtime.jsx)(src.V,{design:"outlined",color:"black",isSmall:!0,children:"Pro"})]}),(0,jsx_runtime.jsx)("div",{className:"sui-setting-block__info-desc",children:description})]}),(0,jsx_runtime.jsx)("div",{className:"sui-setting-block__body",children})]})}},"./packages/ui/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts"));const Tag=({design,color,style,className,isSmall=!1,isUppercase=!1,isDisabled=!1,children,...props})=>{const hasDesign="outlined"===design,hasColor=!(0,src.o8)(color)&&!(0,src.xb)(color),hasStyle=["multiline","truncated"].includes(style??""),classNames=(0,src.uY)("sui-tag",{[`${design}-${color}`]:hasDesign&&hasColor,[design]:hasDesign&&!hasColor,[color]:!hasDesign&&hasColor,[style]:hasStyle,sm:isSmall,uppercase:isUppercase,disabled:isDisabled},className);return(0,jsx_runtime.jsx)("span",{className:classNames,...props,"data-testid":"tag",children:(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children})})}},"./packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js"),__webpack_require__("./node_modules/jest-axe/index.js"),__webpack_require__("./node_modules/process/browser.js");const generateCN=(base,variants={},extraClassNames="")=>{const classes=Object.keys(variants).map((attr=>({[`${base}--${attr}`]:!!variants?.[attr]})));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=(condition,content=null,fallback=void 0)=>(isNull(content)&&(content=condition),condition?content:fallback),isNull=value=>null===value,isUndefined=value=>void 0===value,isObject=value=>"object"==typeof value&&!Array.isArray(value),isArray=value=>Array.isArray(value),isBoolean=value=>"boolean"==typeof value,isFunction=value=>"function"==typeof value,isString=value=>"string"==typeof value,isEmpty=value=>""===value,capitalizeText=string=>string?.charAt(0)?.toUpperCase()+string?.slice(1),handleOnKeyDown=(event,callback)=>{"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=(e,stopPropagation,preventDefault)=>{stopPropagation&&e?.stopPropagation(),preventDefault&&e?.preventDefault()},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=(arr,size)=>{const chunkedArray=[];for(let i=0;i<arr.length;i+=size){const chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./packages/ui/setting-block/stories/setting-block.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SettingBlock:()=>SettingBlock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>setting_block_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./packages/ui/setting-block/src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.5f666d4f.svg",spacings_namespaceObject=__webpack_require__.p+"static/media/spacings.43f2f856.svg",types_namespaceObject=__webpack_require__.p+"static/media/types.a7c42617.svg",examples_namespaceObject=__webpack_require__.p+"static/media/examples.924fed01.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Setting Block Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"1. Block title"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The left column is for setting block the title and description. It gives a\nglance of the setting block to users."})}),(0,jsx_runtime.jsx)("h3",{children:"2. Block Option"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Box body is a flexible area where the main content can be inserted. It may include list, table or any type of content that is available for settings."})})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Spacings",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:spacings_namespaceObject,alt:"Setting Block Anatomy",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Types",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:types_namespaceObject,alt:"Setting Block Types",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Examples",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:examples_namespaceObject,alt:"Setting Block Examples",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"SettingBlock"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"title",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The Heading text of the Setting"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"description*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"An explanatory text that accompanies the title"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isPro*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["Changes the variation to pro, when set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"})," a pro tag will appear and the background slightly change"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The main content that appear in the right side of the block"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Custom css className(s) for further styling"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const generalExample=dedent_default()`
    <SettingBlock
      title="Title"
      description="Block IP addresses that send POST requests with empty Referer and User-Agent headers."
    >
       The Setting Block Content
    </SettingBlock>
`,proExample=dedent_default()`
    <SettingBlock
      isPro={true}
      title="Title"
      description="Block IP addresses that send POST requests with empty Referer and User-Agent headers."
    >
       The Setting Block Content
    </SettingBlock>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is a general example of the Setting Block component"}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{background:"#f1f1f1",padding:25},children:(0,jsx_runtime.jsx)("div",{style:{background:"white"},children:(0,jsx_runtime.jsx)(src.R,{title:"Title",description:"Block IP addresses that send POST requests with empty Referer and User-Agent headers.",children:(0,jsx_runtime.jsx)(_components.p,{children:"The Setting Block Content"})})})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:generalExample})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Pro variation",style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isPro={true}"})," to change the variation to the Pro variation"]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{background:"#f1f1f1",padding:25},children:(0,jsx_runtime.jsx)("div",{style:{background:"white"},children:(0,jsx_runtime.jsx)(src.R,{isPro:!0,title:"Title",description:"Block IP addresses that send POST requests with empty Referer and User-Agent headers.",children:(0,jsx_runtime.jsx)(_components.p,{children:"The Setting Block Content"})})})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:proExample})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function setting_block_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Setting Block",subtitle:"Setting block is used to display the plugin settings.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const setting_block=function setting_block_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(setting_block_createMdxContent,props)})):setting_block_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const setting_block_stories={title:"SUI/Components/Advanced/Setting Block",component:src.R,parameters:{layout:"fullscreen",docs:{page:setting_block}}},SettingBlock=({...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"white"},children:(0,jsx_runtime.jsx)(src.R,{...props,children:"Any Content"})})})});SettingBlock.displayName="SettingBlock",SettingBlock.args={title:"Title",description:"Block IP addresses that send POST requests with empty Referer and User-Agent headers.",isPro:!1},SettingBlock.argTypes={title:{name:"title",control:{type:"text"}},description:{name:"description",control:{type:"text"}},isPro:{name:"isPro",control:{type:"boolean"}}},SettingBlock.__docgenInfo={description:"",methods:[],displayName:"SettingBlock"};const __namedExportsOrder=["SettingBlock"]},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}},"?4f7e":()=>{}}]);
//# sourceMappingURL=ui-setting-block-stories-setting-block-stories.3da56e64.iframe.bundle.js.map