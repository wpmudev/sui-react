(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[7721],{"./packages/ui/field-list/stories/ReactFieldList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FieldList:()=>ReactFieldList_stories_FieldList,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactFieldList_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const FieldList=({label,helper,children,onToggle=()=>null})=>{const onChangeItem=(0,react.useCallback)(((id,checked)=>{onToggle(id,checked)}),[onToggle]);return(0,jsx_runtime.jsxs)("div",{className:"sui-field-list","data-testid":"field-list",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-field-list__row",children:[label&&(0,jsx_runtime.jsx)("h3",{className:"sui-heading sui-heading--h4 sui-field-list__title",children:label}),helper&&(0,jsx_runtime.jsx)("p",{className:"sui-field-list__helper",children:helper})]}),(0,jsx_runtime.jsx)("div",{className:"sui-field-list__items",children:react.Children.map(children,(child=>(0,react.cloneElement)(child,{onToggle:onChangeItem})))})]})};var src=__webpack_require__("./packages/utils/src/index.ts"),toggle_src=__webpack_require__("./packages/ui/toggle/src/index.ts");const FieldListItem=({id,isChecked=!1,children,onToggle,...props})=>{let tempId=(0,react.useId)();tempId=`sui-field-list-${tempId}-${id}`;const onChange=(0,react.useCallback)((e=>{onToggle&&onToggle(id,e?.target?.checked)}),[id,onToggle]);return(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-field-list__item",{disabled:props?.isDisabled}),"data-testid":"field-list-item",children:[(0,jsx_runtime.jsx)("div",{className:"sui-field-list__item-label",children}),(0,jsx_runtime.jsx)("div",{className:"sui-field-list__item-checkbox",children:(0,jsx_runtime.jsx)(toggle_src.Z,{id:tempId,label:children,isLabelHidden:!0,defaultValue:isChecked??!1,onClick:onChange,...props})})]})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.766bd865.svg",spacings_namespaceObject=__webpack_require__.p+"static/media/spacings.fde52a5a.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Field List Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Header"}),(0,jsx_runtime.jsx)("p",{children:"The header includes the title and supportive description."}),(0,jsx_runtime.jsx)("h3",{children:"2. Feature List"}),(0,jsx_runtime.jsx)("p",{children:"List of features that include toggle switch on each list item."})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Spacings",border:!0,children:(0,jsx_runtime.jsx)("img",{src:spacings_namespaceObject,alt:"Field List Spacings"})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"FieldList"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"label",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Represents the title of the Field List"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"helper",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Represents the helper text"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content of the Field List"})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"onToggle*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when one of the fields state changes, it has two parameters:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"id"})," id of the switched toggle"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"checked"})," a boolean value indicating the new state of the changed toggle"]})})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Sub Components",contained:!0,style:{paddingTop:30,paddingBottom:0},children:[(0,jsx_runtime.jsxs)("p",{children:["The ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:" FieldList "})," offers a collection of nested subcomponents to be utilized within it. These subcomponents include:"]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:"FieldListItem",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component represents an individual item in the Field List and it has the following properties:"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"id",tag:"string",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A unique identifier for the item"})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the item, usually a string"})})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"onToggle*",tag:"function",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when one of the fields state changes, it has two parameters:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"id"})," id of the switched toggle"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"checked"})," A boolean value indicating the new state of the changed toggle"]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isChecked*",tag:"boolean",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The state of the toggle"})})]})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js");const sampleCode=__webpack_require__.n(dedent)()`
        <FieldList
            label="The Filed List Title"
            helper="Help text goes here"
            onToggle={(id, checked) => {
                // Do something with the "id" and "cehcked"
                console.log(id, checked)
            }}
        >
            <FieldListItem id="field-1" isChecked={false}>
                Field 1
            </FieldListItem>

           <FieldListItem id="field-2">Field 2</FieldListItem>
              <FieldListItem id="field-3" isChecked={true}>
                Field 3
              </FieldListItem>
           <FieldListItem id="field-4">Field 4</FieldListItem>
        </FieldList>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This is a general example of the Field List which you can tweak to fit your\nneeds"})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsxs)(FieldList,{label:"The Filed List Title",helper:"Help text goes here",onToggle:(id,checked)=>{console.log(id,checked)},children:[(0,jsx_runtime.jsx)(FieldListItem,{id:"field-1",isChecked:!1,children:(0,jsx_runtime.jsx)(_components.p,{children:"Field 1"})}),(0,jsx_runtime.jsx)(FieldListItem,{id:"field-2",children:"Field 2"}),(0,jsx_runtime.jsx)(FieldListItem,{id:"field-3",isChecked:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"Field 3"})}),(0,jsx_runtime.jsx)(FieldListItem,{id:"field-4",children:"Field 4"})]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function ReactFieldList_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Field List",subtitle:"This component is to display the list of features to enable or disable.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactFieldList_stories={title:"SUI/Components/Advanced/Field List",component:FieldList,parameters:{layout:"fullscreen",docs:{page:function ReactFieldList_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactFieldList_createMdxContent,props)})):ReactFieldList_createMdxContent()}}}},ReactFieldList_stories_FieldList=({...args})=>{const[list,setList]=(0,react.useState)({});return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)(FieldList,{...args,onToggle:(id,checked)=>{setList({...list,[id]:checked})},children:[(0,jsx_runtime.jsx)(FieldListItem,{id:"field-1",isChecked:!1,children:"Field 1"}),(0,jsx_runtime.jsx)(FieldListItem,{id:"field-2",children:"Field 2"}),(0,jsx_runtime.jsx)(FieldListItem,{id:"field-3",isChecked:!0,children:"Field 3"}),(0,jsx_runtime.jsx)(FieldListItem,{id:"field-4",children:"Field 4"})]})})})};ReactFieldList_stories_FieldList.args={label:"This is the title",helper:"This is example the description for field list."},ReactFieldList_stories_FieldList.argTypes={label:{name:"Label"},helper:{name:"Helper Text"}};const __namedExportsOrder=["FieldList"]},"./packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p4:()=>useDetectRTL,Y9:()=>useDragAndDrop,X2:()=>useInteraction,rw:()=>useOuterClick,vI:()=>usePortal,GT:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const useInteraction=methods=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),{onMouseEnter,onMouseLeave,onMouseDownCapture,onMouseUpCapture,onFocus,onBlur,onBlurCapture}=methods,toggleHover=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsHovered(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),toggleFocus=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsFocused(state),(0,src.mf)(callback)&&callback&&callback(event)}),[]),onMouseEnterCallback=(0,react.useCallback)((e=>toggleHover(!0,e,(event=>{onMouseEnter&&onMouseEnter(event)}))),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(()=>{onMouseLeave&&onMouseLeave(event)}))),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onMouseDownCapture&&onMouseDownCapture(event)}))),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onMouseUpCapture&&onMouseUpCapture(event)}))),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(event=>{onBlurCapture&&onBlurCapture(event)}))),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onBlur&&onBlur(event)}))),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onFocus&&onFocus(event)}))),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=(ref,callback=(()=>{}))=>{const onPageClick=(0,react.useCallback)((event=>{ref?.current&&!ref?.current.contains(event.target)&&callback()}),[callback,ref]);(0,react.useEffect)((()=>(document.addEventListener("click",onPageClick),()=>{document.removeEventListener("click",onPageClick)})))};var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const usePortal=wrapperId=>{const[wrapperElement,setWrapperElement]=(0,react.useState)(null);wrapperId=wrapperId??".sui-wrap",(0,react.useLayoutEffect)((()=>{let el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=(wrapperId=>{const wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement})(wrapperId)),setWrapperElement(el),()=>{systemCreated&&el?.parentNode&&el.parentNode.removeChild(el)}}),[wrapperId]);return[children=>null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)]},useValidateProps=({propsToCheck,component})=>{const componentName=component?.displayName||component?.name;Object.keys(propsToCheck)?.forEach(((propKey,index)=>{if(!!(0,src.xb)(propsToCheck?.[propKey]??""))throw new Error(`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`)}))},useDragAndDrop=({containerRef,methods})=>{const[node,setNode]=(0,react.useState)(),[isDragging,setIsDragging]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setNode(containerRef)}),[containerRef]),(0,react.useEffect)((()=>{const onDragOver=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!0),methods?.onDragOver&&methods?.onDragOver(e)},onDrop=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1),methods?.onDrop&&methods?.onDrop(e)},current=node?.current;return current?.addEventListener("dragover",onDragOver,!1),current?.addEventListener("drop",onDrop,!1),()=>{current?.removeEventListener("dragover",onDragOver,!1),current?.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=()=>{const[isRTL,setIsRTL]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const updateRTL=()=>{const isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();const mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),()=>{mutationObserver.disconnect()}}),[]),isRTL}},"./packages/ui/toggle/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Toggle});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Toggle=({label,description,defaultValue,isLabelHidden=!1,isDisabled=!1,onClick,...props})=>{const id=`sui-toggle-${(0,react.useId)()}`,[state,setState]=(0,react.useState)(defaultValue),[isHovered,isFocused,methods]=(0,src.X2)({onMouseEnter:props?.onMouseEnter,onMouseLeave:props?.onMouseLeave,onMouseDownCapture:props?.onMouseDownCapture,onBlur:props?.onBlur,onBlurCapture:props?.onBlurCapture});(0,react.useEffect)((()=>{(0,utils_src.jn)(defaultValue)||setState(defaultValue??!1)}),[defaultValue]);const handleOnChange=(0,react.useCallback)((e=>{setState(!state),onClick&&onClick(e)}),[onClick,state]),containerProps={className:(0,utils_src.uY)("sui-toggle",{"hidden-label":isLabelHidden,checked:state,disabled:isDisabled,hover:!state&&isHovered,focus:!state&&isFocused,"checked-hover":state&&isHovered,"checked-focus":state&&isFocused}),...methods},inputProps={type:"checkbox",className:"sui-screen-reader-only",defaultChecked:state,disabled:isDisabled,...props};return(0,jsx_runtime.jsxs)("label",{...containerProps,htmlFor:id,"data-testid":"toggle",children:[(0,jsx_runtime.jsx)("input",{...inputProps,id,onChange:handleOnChange,"aria-hidden":!0}),(0,jsx_runtime.jsx)("span",{tabIndex:-1,className:"sui-toggle__switch","aria-hidden":!0}),isLabelHidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label}),!isLabelHidden&&(0,jsx_runtime.jsx)("span",{className:"sui-toggle__label","data-testid":"toggle-label",children:label}),description&&(0,jsx_runtime.jsx)("p",{className:"sui-toggle__description","data-testid":"toggle-description",children:description})]})}},"./packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js"),__webpack_require__("./node_modules/jest-axe/index.js"),__webpack_require__("./node_modules/process/browser.js");const generateCN=(base,variants={},extraClassNames="")=>{const classes=Object.keys(variants).map((attr=>({[`${base}--${attr}`]:!!variants?.[attr]})));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=(condition,content=null,fallback=void 0)=>(isNull(content)&&(content=condition),condition?content:fallback),isNull=value=>null===value,isUndefined=value=>void 0===value,isObject=value=>"object"==typeof value&&!Array.isArray(value),isArray=value=>Array.isArray(value),isBoolean=value=>"boolean"==typeof value,isFunction=value=>"function"==typeof value,isString=value=>"string"==typeof value,isEmpty=value=>""===value,capitalizeText=string=>string?.charAt(0)?.toUpperCase()+string?.slice(1),handleOnKeyDown=(event,callback)=>{"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=(e,stopPropagation,preventDefault)=>{stopPropagation&&e?.stopPropagation(),preventDefault&&e?.preventDefault()},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=(arr,size)=>{const chunkedArray=[];for(let i=0;i<arr.length;i+=size){const chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}},"?4f7e":()=>{}}]);
//# sourceMappingURL=ui-field-list-stories-ReactFieldList-stories.a33ef846.iframe.bundle.js.map