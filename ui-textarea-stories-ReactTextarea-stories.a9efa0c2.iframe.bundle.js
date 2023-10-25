(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[1056],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/ui/textarea/stories/ReactTextarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Textarea:()=>Textarea,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactTextarea_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/textarea/src/index.ts")),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts"));const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.45f577cd.png";function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{contained:!0,border:!0,style:{paddingTop:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A textarea allows users to enter a larger amount of text than a regular text input field. It is often used for inputting longer messages, comments, or reviews on web pages."})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy",contained:!0,border:!0,children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Textarea anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Textarea:"})," A textarea is a multi-line text input field."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Placeholder:"})," There will be a placeholder when the input ha no value set."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Help Text:"})," Help text is an overall description about the input field."]})})]})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Textarea"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete\nSUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"Textarea component have the following props."}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"id",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a unique id to the textarea."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a class name to the textarea."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"value",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Reflects the value of the input field."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"description",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Reflects the description of the input field."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"descriptionId",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"It helps screen reader to announce the description message of the\nfield."})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"errorMessage",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Reflects the error message of the input field."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"errorId",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"It helps screen reader to announce the error message of the field."})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSmall",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Set if the input is small."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isDisabled",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Set if the input is disabled."})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const DisabledTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" isDisabled={true} />;
}\n
export default Example;
`,ValueEnteredTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" value="Default" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" />;
}\n
export default Example;
`,ReadOnlyTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" readonly="true" />;
}\n
export default Example;
`,ErrorTextareaCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-1" errorId="error-id" errorMessage="There is an error." description="This is a description." descriptionId="desc-id" placeholder="Placeholder" />;
}\n
export default Example;
`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isDisabled"})," prop to disable a Textarea\nthat is not usable."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.g,{id:"textarea-id-1",description:"This is a description.",descriptionId:"desc-id-1",placeholder:"Placeholder",isDisabled:!0})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:DisabledTextareaCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Value Entered",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"value"})," prop to Textarea to set it's value."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.g,{id:"textarea-id-2",value:"Default",description:"This is a description.",descriptionId:"desc-id-2",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:ValueEnteredTextareaCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Read Only",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Add the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"readOnly"})," prop to set Textarea readonly."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.g,{id:"textarea-id-3",description:"This is a description.",descriptionId:"desc-id-3",placeholder:"Placeholder",readOnly:!0})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:ReadOnlyTextareaCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"errorMessage"})," prop to show the error in\nthe field."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.g,{id:"textarea-id-4",errorId:"error-id-1",errorMessage:"There is an error.",description:"This is a description.",descriptionId:"desc-id-4",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:ErrorTextareaCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},SmallTextareaCode=dedent_default()`
import React from 'react';\n
import { Button } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="textarea-id-4" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" isSmall={true} />;
}\n
export default Example;
`;function Size_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isSmall"})," prop to reduce the textarea\nheight, fitting with the design context."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.g,{id:"textarea-id-4",placeholder:"Placeholder",description:"This is a description.",descriptionId:"desc-id",isSmall:!0})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:SmallTextareaCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent(props)},sampleCode=dedent_default()`
import React from 'react';\n
import { Textarea } from '@wpmudev/sui-react';\n
const Example() => {
	return <Textarea id="input-id-1" description="This is a description." descriptionId="desc-id" placeholder="Placeholder" />;
}\n
export default Example;
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of a field, used for most cases."}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.g,{id:"input-id-1",description:"This is a description.",descriptionId:"desc-id",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactTextarea_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Textarea",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"A textarea element is used to create a multi-line text input field on a web page."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})}const ReactTextarea=function ReactTextarea_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactTextarea_createMdxContent,props)})):ReactTextarea_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const Textarea=({...args})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(src.g,{rows:4,...args})})})});Textarea.args={id:"textarea",placeholder:"Placeholder",isError:!1,isSmall:!1,isDisabled:!1},Textarea.argTypes={id:{name:"ID",type:"string"},placeholder:{name:"Placeholder",type:"string"},isError:{name:"Error",type:"boolean"},isSmall:{name:"Small",type:"boolean"},isDisabled:{name:"Disabled",type:"boolean"}};const ReactTextarea_stories={title:"SUI/Components/Forms/Textarea",component:Textarea,parameters:{layout:"fullscreen",docs:{page:ReactTextarea}}},__namedExportsOrder=["Textarea"]},"./packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const useInteraction=methods=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),{onMouseEnter,onMouseLeave,onMouseDownCapture,onMouseUpCapture,onFocus,onBlur,onBlurCapture}=methods,toggleHover=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsHovered(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),toggleFocus=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsFocused(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((e=>toggleHover(!0,e,(event=>{onMouseEnter&&onMouseEnter(event)}))),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(()=>{onMouseLeave&&onMouseLeave(event)}))),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onMouseDownCapture&&onMouseDownCapture(event)}))),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onMouseUpCapture&&onMouseUpCapture(event)}))),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(event=>{onBlurCapture&&onBlurCapture(event)}))),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onBlur&&onBlur(event)}))),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onFocus&&onFocus(event)}))),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=(ref,callback=(()=>{}))=>{const onPageClick=(0,react.useCallback)((event=>{ref?.current&&!ref?.current.contains(event.target)&&callback()}),[callback,ref]);(0,react.useEffect)((()=>(document.addEventListener("click",onPageClick),()=>{document.removeEventListener("click",onPageClick)})))};var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const usePortal=wrapperId=>{const[wrapperElement,setWrapperElement]=(0,react.useState)(null);wrapperId=wrapperId??".sui-wrap",(0,react.useLayoutEffect)((()=>{let el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=(wrapperId=>{const wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement})(wrapperId)),setWrapperElement(el),()=>{systemCreated&&el?.parentNode&&el.parentNode.removeChild(el)}}),[wrapperId]);return[children=>null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)]},useValidateProps=({propsToCheck,component})=>{const componentName=component?.displayName||component?.name;Object.keys(propsToCheck)?.forEach(((propKey,index)=>{if(!!(0,src.xb)(propsToCheck?.[propKey]??""))throw new Error(`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`)}))},useDragAndDrop=({containerRef,methods})=>{const[node,setNode]=(0,react.useState)(),[isDragging,setIsDragging]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setNode(containerRef)}),[containerRef]),(0,react.useEffect)((()=>{const onDragOver=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!0),methods?.onDragOver&&methods?.onDragOver(e)},onDrop=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1),methods?.onDrop&&methods?.onDrop(e)},current=node?.current;return current?.addEventListener("dragover",onDragOver,!1),current?.addEventListener("drop",onDrop,!1),()=>{current?.removeEventListener("dragover",onDragOver,!1),current?.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=()=>{const[isRTL,setIsRTL]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const updateRTL=()=>{const isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();const mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),()=>{mutationObserver.disconnect()}}),[]),isRTL}},"./packages/ui/textarea/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Textarea=({id,className="",value="",isError=!1,isSmall=!1,isDisabled=!1,onChange=()=>{},...props})=>{const[currentValue,setCurrentValue]=(0,react.useState)(value),[isHovered,isFocused,methods]=(0,hooks_src.X2)({}),classNames=(0,src.uY)("sui-textarea",{error:isError,disabled:isDisabled,filled:!!currentValue,sm:isSmall,hover:isHovered,focus:isFocused},className),handleOnChange=(0,react.useCallback)((e=>{setCurrentValue(e.target.value),(0,src.mf)(onChange)&&onChange&&onChange(e)}),[onChange]);return(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"textarea",children:(0,jsx_runtime.jsx)("textarea",{id:id??"",className:"sui-textarea__field",value:currentValue,disabled:isDisabled,onChange:handleOnChange,"data-testid":"textarea-input",...props,...methods})})}},"./packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js"),__webpack_require__("./node_modules/jest-axe/index.js"),__webpack_require__("./node_modules/process/browser.js");const generateCN=(base,variants={},extraClassNames="")=>{const classes=Object.keys(variants).map((attr=>({[`${base}--${attr}`]:!!variants?.[attr]})));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=(condition,content=null,fallback=void 0)=>(isNull(content)&&(content=condition),condition?content:fallback),isNull=value=>null===value,isUndefined=value=>void 0===value,isObject=value=>"object"==typeof value&&!Array.isArray(value),isArray=value=>Array.isArray(value),isBoolean=value=>"boolean"==typeof value,isFunction=value=>"function"==typeof value,isString=value=>"string"==typeof value,isEmpty=value=>""===value,capitalizeText=string=>string?.charAt(0)?.toUpperCase()+string?.slice(1),handleOnKeyDown=(event,callback)=>{"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=(e,stopPropagation,preventDefault)=>{stopPropagation&&e?.stopPropagation(),preventDefault&&e?.preventDefault()},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=(arr,size)=>{const chunkedArray=[];for(let i=0;i<arr.length;i+=size){const chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}},"?4f7e":()=>{}}]);
//# sourceMappingURL=ui-textarea-stories-ReactTextarea-stories.a9efa0c2.iframe.bundle.js.map