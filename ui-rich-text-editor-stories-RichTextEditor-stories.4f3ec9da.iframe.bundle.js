"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[5200],{"./packages/ui/rich-text-editor/stories/RichTextEditor.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RichTextEditor:()=>RichTextEditor_stories_RichTextEditor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>RichTextEditor_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/form-field/src/index.ts"),segmented_control_src=__webpack_require__("./packages/ui/segmented-control/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),textarea_src=__webpack_require__("./packages/ui/textarea/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const RichTextEditor=({textareaId="",actions=null,tinyMCEOptions,className="",isDisabled=!1,defaultValue="",onChange=()=>null})=>{const[content,setContent]=(0,react.useState)(defaultValue??""),[editorType,setEditorType]=(0,react.useState)("visual"),[editor,setEditor]=(0,react.useState)(null),[ref,setRef]=(0,react.useState)(),id=(0,react.useId)(),isRTL=(0,hooks_src.od)();textareaId=(0,utils_src.t7)(textareaId)?"sui-rich-text-editor-input":textareaId;const loadTinyMCE=(0,react.useCallback)((tId=>{const options={selector:`#${tId}`,menubar:!1,plugins:"lists link",readonly:isDisabled?1:0,toolbar:"bold italic bullist numlist alignleft aligncenter alignright link",height:200,body_class:"sui-rich-text-editor__tinymce--content",...{...tinyMCEOptions,...isRTL&&{directionality:"rtl"},content_style:"@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap'); body { font-family: 'Roboto'; font-size: 15px; line-height: 24px; margin: -8px 16px 8px 16px }",setup:ed=>{setEditor(ed),ed.on("init",(()=>{ed.getContainer().className+=" sui-rich-text-editor__tinymce"})),ed.on("change",(()=>{setContent(ed.getContent())}))}}};tinymce?.init(options)}),[isDisabled,tinyMCEOptions,isRTL]);(0,react.useEffect)((()=>{"visual"===editorType&&editor&&editor?.setContent(content)}),[content,editor,editorType]),(0,react.useEffect)((()=>{onChange&&onChange(content)}),[content,onChange]);const textareaRef=(0,react.useCallback)((node=>{node&&(setRef(node),tinymce&&loadTinyMCE(node.id))}),[]);(0,react.useEffect)((()=>()=>{ref&&tinymce?.get(ref?.id)&&tinymce?.get(ref?.id)?.remove()}),[ref,textareaRef]);const textareaProps={className:(0,utils_src.QX)("sui-rich-text-editor__textarea-input",{[editorType]:!0})},onTextareaChange=(0,react.useCallback)((({target})=>{setContent(target?.value??content)}),[content]),classNames=(0,utils_src.QX)("sui-rich-text-editor",{disabled:isDisabled},className??"");return(0,jsx_runtime.jsx)(src.W,{id,label:"Label",helper:"Helper text for rich text editor.",children:(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"rich-text-editor",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-rich-text-editor__header",children:[(0,jsx_runtime.jsxs)(segmented_control_src.G,{name:"type",defaultValue:editorType,onChange:type=>setEditorType(type),children:[(0,jsx_runtime.jsx)(segmented_control_src.u,{value:"visual",isDisabled:isDisabled??!1,children:"Visual"}),(0,jsx_runtime.jsx)(segmented_control_src.u,{value:"code",isDisabled:isDisabled??!1,children:"Code"})]}),!!actions&&actions]}),(0,jsx_runtime.jsxs)("div",{className:"sui-rich-text-editor__content",children:[(0,jsx_runtime.jsx)("div",{className:(0,utils_src.QX)("sui-rich-text-editor__textarea",{hidden:"visual"!==editorType,disabled:isDisabled}),children:(0,jsx_runtime.jsx)("textarea",{ref:textareaRef,...textareaProps,value:content,onChange:()=>null,id:textareaId,"aria-label":"visual editor"})}),"code"===editorType&&(0,jsx_runtime.jsx)(textarea_src.A,{...textareaProps,rows:8,id:`${textareaId}-code`,value:content,onChange:onTextareaChange,"aria-label":"code editor"})]})]})})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.8b713b13.svg",types_namespaceObject=__webpack_require__.p+"static/media/types.7d6fc608.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.e8ab36e4.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.iG,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Label"}),(0,jsx_runtime.jsx)("p",{children:"A label for the context of Rich text editor."}),(0,jsx_runtime.jsx)("h3",{children:"2. Segmented controls"}),(0,jsx_runtime.jsx)("p",{children:"A segmented control to quickly switch between the visual and code options."}),(0,jsx_runtime.jsx)("h3",{children:"3. Extra button - Optional"}),(0,jsx_runtime.jsx)("p",{children:"Rich text editor also has extra button that can be used for additional control."}),(0,jsx_runtime.jsx)("h3",{children:"4. Toolbar"}),(0,jsx_runtime.jsx)("p",{children:"The toolbar contains a collection of formatting options and controls that allow users to apply various text styles and formatting"}),(0,jsx_runtime.jsx)("h3",{children:"5. Input text area"}),(0,jsx_runtime.jsx)("p",{children:"The text input area is where users can enter and edit their text content where they can see and manipulate their text as they apply formatting options."}),(0,jsx_runtime.jsx)("h3",{children:"6. Helper text - Optional"}),(0,jsx_runtime.jsx)("p",{children:"Rich text editor can have an additional help or description text if necessary."})]}),(0,jsx_runtime.jsx)(docs_src.qq,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"RichText Editor Anatomy",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Types",children:(0,jsx_runtime.jsx)("img",{src:types_namespaceObject,alt:"RichText Editor Types",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Spacing",style:{marginBottom:80},children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"RichText Editor Spacing",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);dedent_default()`
add_action('admin_enqueue_scripts', 'sui_load_mce_editor_scripts');
    
    function sui_load_mce_editor_scripts() {
        wp_enqueue_editor()
    }
`;function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Qr,{packageName:"@wpmudev/sui-rich-text-editor"}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"The RichText Editor has one prop:"}),(0,jsx_runtime.jsx)(docs_src._6,{title:"defaultValue",type:"boolean",children:(0,jsx_runtime.jsx)("p",{children:"The default content set in the editor"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"true"})," the editor will be disabled"]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"textareaId",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"The id of the textarea"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Custom css className(s)"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"actions",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Rich text editor also has extra button that can be used for additional control."})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"tinyMCEOptions",type:"object",children:(0,jsx_runtime.jsxs)("p",{children:["TinyMCE configurations, see here: ",(0,jsx_runtime.jsx)("a",{href:"https://www.tiny.cloud/docs-3x/reference/Configuration3x/",target:"_blank",children:"https://www.tiny.cloud/docs-3x/reference/Configuration3x/"})]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onChange",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"Catch textarea content"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var button_src=__webpack_require__("./packages/ui/button/src/index.ts");const sampleCode=dedent_default()`
<RichTextEditor />
`,actionButtonCode=dedent_default()`
    <RichTextEditor 
        actions={
            <Button appearance="secondary" icon="Add" color="black">Add Field</Button>
        } 
    />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"The RichText Editor has one variation which is the following"}),(0,jsx_runtime.jsx)(docs_src.Su,{contained:!0,wrapper:!0,children:(0,jsx_runtime.jsx)(RichTextEditor_stories_RichTextEditor,{})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"With an Action Button",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)("p",{children:["You can optionally add custom action button(s) using the ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"actions"})," prop"]}),(0,jsx_runtime.jsx)(docs_src.Su,{contained:!0,wrapper:!0,children:(0,jsx_runtime.jsx)(RichTextEditor_stories_RichTextEditor,{actions:(0,jsx_runtime.jsx)(button_src.q,{appearance:"secondary",icon:"Add",color:"black",children:"Add Field"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:actionButtonCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function RichTextEditor_createMdxContent(props){return docs_src.K2||_missingMdxReference("Page",!1),docs_src.K2.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.C,{children:(0,jsx_runtime.jsxs)(docs_src.K2.Tabs,{title:"RichText Editor",subtitle:"Rich Text Editor enable users to format and style text within an application or website.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const RichTextEditor_stories={title:"SUI/Components/Advanced/Rich Text Editor",component:RichTextEditor,parameters:{layout:"fullscreen",docs:{page:function RichTextEditor_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(RichTextEditor_createMdxContent,props)})):RichTextEditor_createMdxContent()}}}},RichTextEditor_stories_RichTextEditor=({color,...props})=>{const[isScriptLoaded,setIsScriptLoaded]=(0,react.useState)(!1),boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,react.useEffect)((()=>{const script=document.createElement("script");script.src="https://cdn.tiny.cloud/1/16svjtls827i92z95atzbvrutvut1n85ckqxu4k9sslf5b7d/tinymce/6/tinymce.min.js",script.async=!0,document.head.appendChild(script),setTimeout((()=>{setIsScriptLoaded(!0)}),500)}),[]),(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:isScriptLoaded?(0,jsx_runtime.jsx)(RichTextEditor,{...props}):"Loading..."})})})};RichTextEditor_stories_RichTextEditor.args={textareaId:"",isDisabled:!1,className:""},RichTextEditor_stories_RichTextEditor.argTypes={};const __namedExportsOrder=["RichTextEditor"]},"./packages/hooks/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$z:()=>useDefaultChildren,e_:()=>useDetectBrowser,od:()=>useDetectRTL,ac:()=>useDragAndDrop,_Y:()=>useInteraction,gx:()=>useOuterClick,mS:()=>usePortal,i0:()=>usePrevious,Ap:()=>useValidateProps});var react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const useInteraction=methods=>{const[isHovered,setIsHovered]=(0,react.useState)(!1),[isFocused,setIsFocused]=(0,react.useState)(!1),{onMouseEnter,onMouseLeave,onMouseDownCapture,onMouseUp,onMouseUpCapture,onFocus,onBlur,onBlurCapture}=methods,toggleHover=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsHovered(state),(0,src.mg)(callback)&&callback&&callback(event)}),[]),toggleFocus=(0,react.useCallback)(((state,event,callback=(e=>{}))=>{setIsFocused(state),(0,src.mg)(callback)&&callback&&callback(event)}),[]),onMouseUpCallback=(0,react.useCallback)((e=>{const target=e?.currentTarget;target&&(target?.focus(),toggleFocus(!0,e,(event=>{onMouseUp&&onMouseUp(event)})))}),[onMouseUp,toggleFocus]),onMouseEnterCallback=(0,react.useCallback)((e=>toggleHover(!0,e,(event=>{onMouseEnter&&onMouseEnter(event)}))),[onMouseEnter,toggleHover]),onMouseLeaveCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(()=>{onMouseLeave&&onMouseLeave(event)}))),[onMouseLeave,toggleHover]),onMouseDownCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onMouseDownCapture&&onMouseDownCapture(event)}))),[onMouseDownCapture,toggleFocus]),onMouseUpCaptureCallback=(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onMouseUpCapture&&onMouseUpCapture(event)}))),[onMouseUpCapture,toggleFocus]),onBlurCaptureCallback=(0,react.useCallback)((e=>toggleHover(!1,e,(event=>{onBlurCapture&&onBlurCapture(event)}))),[onBlurCapture,toggleHover]),onBlurCallback=(0,react.useCallback)((e=>toggleFocus(!1,e,(event=>{onBlur&&onBlur(event)}))),[onBlur,toggleFocus]);return[isHovered,isFocused,{onMouseUp:onMouseUpCallback,onMouseEnter:onMouseEnterCallback,onMouseLeave:onMouseLeaveCallback,onMouseDownCapture:onMouseDownCaptureCallback,onMouseUpCapture:onMouseUpCaptureCallback,onFocus:(0,react.useCallback)((e=>toggleFocus(!0,e,(event=>{onFocus&&onFocus(event)}))),[onFocus,toggleFocus]),onBlur:onBlurCallback,onBlurCapture:onBlurCaptureCallback},toggleHover,toggleFocus]},useOuterClick=(ref,callback=(()=>{}))=>{const onPageClick=(0,react.useCallback)((event=>{ref?.current&&!ref?.current.contains(event.target)&&callback()}),[callback,ref]);(0,react.useEffect)((()=>(document.addEventListener("click",onPageClick),()=>{document.removeEventListener("click",onPageClick)})))};var react_dom=__webpack_require__("./node_modules/react-dom/index.js");const usePortal=wrapperId=>{const[wrapperElement,setWrapperElement]=(0,react.useState)(null);wrapperId=wrapperId??".sui-wrap",(0,react.useLayoutEffect)((()=>{let el=document.querySelector(wrapperId),systemCreated=!1;return el||(systemCreated=!0,el=(wrapperId=>{const wrapperElement=document.createElement("div");return wrapperElement.setAttribute("id",wrapperId),document.body.appendChild(wrapperElement),wrapperElement})(wrapperId)),setWrapperElement(el),()=>{systemCreated&&el?.parentNode&&el.parentNode.removeChild(el)}}),[wrapperId]);return[children=>null===wrapperElement?null:(0,react_dom.createPortal)(children,wrapperElement)]},useValidateProps=({propsToCheck,component})=>{const componentName=component?.displayName||component?.name;Object.keys(propsToCheck)?.forEach(((propKey,index)=>{if(!!(0,src.t7)(propsToCheck?.[propKey]??""))throw new Error(`Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 SUI 3 React - Components: ${componentName}\n\nThe "${propKey}" argument requires some value to be passed to it.\n\n`)}))},useDragAndDrop=({containerRef,methods})=>{const[node,setNode]=(0,react.useState)(),[isDragging,setIsDragging]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{setNode(containerRef)}),[containerRef]),(0,react.useEffect)((()=>{const onDragOver=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!0),methods?.onDragOver&&methods?.onDragOver(e)},onDrop=e=>{e.preventDefault(),e.stopPropagation(),setIsDragging(!1),methods?.onDrop&&methods?.onDrop(e)},current=node?.current;return current?.addEventListener("dragover",onDragOver,!1),current?.addEventListener("drop",onDrop,!1),()=>{current?.removeEventListener("dragover",onDragOver,!1),current?.removeEventListener("drop",onDrop,!1)}}),[containerRef,node,methods]),[isDragging]},useDetectRTL=()=>{const[isRTL,setIsRTL]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{const updateRTL=()=>{const isDocumentRTL="rtl"===document.documentElement.getAttribute("dir");setIsRTL(isDocumentRTL)};updateRTL();const mutationObserver=new MutationObserver(updateRTL);return mutationObserver.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}),()=>{mutationObserver.disconnect()}}),[]),isRTL},usePrevious=value=>{const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current},useDefaultChildren=(children,content)=>children||content||"{children content}",useDetectBrowser=()=>{const userAgent=navigator?.userAgent??"";let name="unknown",ver="";switch(!0){case userAgent.indexOf("Firefox")>-1:name="firefox",ver=userAgent?.match(/Firefox\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("Chrome")>-1:name="chrome",ver=userAgent?.match(/Chrome\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("Safari")>-1:name="safari",ver=userAgent?.match(/Version\/([0-9.]+)/)?.[1];break;case userAgent.indexOf("MSIE")>-1||userAgent.indexOf("Trident/")>-1:name="ie",ver=userAgent?.match(/(?:MSIE |rv:)([0-9.]+)/)?.[1];break;case userAgent.indexOf("Edge")>-1:name="ms-edge",ver=userAgent?.match(/Edge\/([0-9.]+)/)?.[1]}return{name,ver}}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.Y3)(hidden)&&!(0,utils_src.am)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.Y3)(name)&&!(0,utils_src.t7)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.cp[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.K,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,appearance,color,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly=!1,iconSize="sm",isResponsive=!1,isLoading=!1,...restProps},ref)=>{children=(0,src.$z)(children,"button label"),isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src._Y)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.Y3)(href),label=!(0,utils_src.Y3)(htmlFor),isEndIcon=((0,utils_src.t7)(startIcon??""),!(0,utils_src.t7)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${appearance}-${color}`]:!!appearance&&!!color,inline:iconOnly&&!appearance,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.es)(label),className:(0,utils_src.QX)("sui-button",attrClasses,className??""),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...interactionMethods??{},...restProps};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconOnly:{defaultValue:{value:"false",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Label=({id,hidden=!1,children})=>{if(!("string"==typeof children?!(0,src.t7)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:classNames,children})},Helper=({id,children})=>{const classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children});var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const FormField=({id="",label="label",helper,error,className,isSmall,isDisabled=!1,isLabelHidden=!1,children,customWidth,...props})=>{let fieldId=(0,react.useId)();(0,src.t7)(id)||(fieldId=id),children=(0,hooks_src.$z)(children,"{add form element as children}");const isErrored="string"==typeof error?!(0,src.t7)(error??""):!!error,classNames=(0,src.QX)("sui-form-field",{sm:isSmall,disabled:isDisabled},className),ariaAttrs={id:fieldId,...isSmall&&{isSmall},...isDisabled&&{isDisabled},...!(0,src.t7)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...props,...customWidth&&{style:{maxWidth:`${customWidth}px`}},"data-testid":"form-field",children:[!(0,src.t7)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs,...child.props}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/ui/segmented-control/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>SegmentedControl,u:()=>SegmentedControlButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const SegmentedControlContext=(0,react.createContext)(null);var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SegmentedControl=({name="segmented-control",defaultValue="",onChange=()=>{},children,isFullWidth=!1})=>{const[value,setValue]=(0,react.useState)(defaultValue);children=(0,hooks_src.$z)(children);const classNames=(0,src.QX)("sui-segmented-control",{"full-width":isFullWidth});return(0,jsx_runtime.jsx)(SegmentedControlContext.Provider,{value:{name,onClick:val=>{setValue(val),onChange&&onChange(val)},value},children:(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"segmented-control",children})})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const SegmentedControlButton=({value,icon,children,ariaLabel,isDisabled,isResponsive=!1,...props})=>{const uniqueId=(0,react.useId)(),buttonId=`sui-radio-${uniqueId}`;value||(value=`example-value-${uniqueId}`),children||icon||(children="example option");const{onClick,name,value:ctxValue}=(value=>{const ctx=(0,react.useContext)(SegmentedControlContext),onClick=(0,react.useCallback)((()=>{ctx?.onClick(value)}),[ctx,value]);return{...ctx,onClick}})(value),[isHovered,isFocused,methods]=(0,hooks_src._Y)({}),classNames=(0,src.QX)("sui-segmented-control__button",{}),isActive=value===ctxValue;let IconTag=null;return icon&&(IconTag=components.cp[icon]),(0,jsx_runtime.jsxs)("span",{className:classNames,...props,children:[(0,jsx_runtime.jsx)("input",{type:"radio",id:buttonId,className:"sui-segmented-control__input",name,checked:isActive,value,disabled:isDisabled,onChange:onClick,"aria-label":ariaLabel||"radio input","aria-checked":isActive,"aria-hidden":!0}),(0,jsx_runtime.jsxs)("label",{className:(0,src.QX)("sui-segmented-control__label",{focus:isFocused,active:isActive,hover:isHovered,disabled:isDisabled}),tabIndex:isDisabled?-1:0,htmlFor:buttonId,"data-testid":"segmented-control-label",onKeyDown:e=>(0,src.eX)(e,onClick),...methods,children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm"}),!!children&&(0,jsx_runtime.jsx)("span",{...isResponsive&&{className:"sui-md-hide"},children}),!(0,src.t7)(ariaLabel??"")&&(0,jsx_runtime.jsx)("span",{className:"screen-reader-text",children:ariaLabel})]})]})}},"./packages/ui/textarea/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Textarea});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Textarea=({id,className="",value="",isError=!1,isSmall=!1,isDisabled=!1,onChange=()=>{},label,customWidth,...props})=>{const[currentValue,setCurrentValue]=(0,react.useState)(value),[isHovered,isFocused,methods]=(0,hooks_src._Y)({}),uniqueId=(0,react.useId)();id||(id=uniqueId);const classNames=(0,src.QX)("sui-textarea",{error:isError,disabled:isDisabled,filled:!!currentValue,sm:isSmall,hover:isHovered,focus:isFocused},className),handleOnChange=(0,react.useCallback)((e=>{setCurrentValue(e.target.value),(0,src.mg)(onChange)&&onChange&&onChange(e)}),[onChange]);return(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"textarea",...customWidth&&{style:{maxWidth:`${customWidth}px`}},children:(0,jsx_runtime.jsx)("textarea",{id,className:"sui-textarea__field",value:currentValue,disabled:isDisabled,onChange:handleOnChange,"aria-label":label||"textarea","data-testid":"textarea-input",...props,...methods})})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-rich-text-editor-stories-RichTextEditor-stories.4f3ec9da.iframe.bundle.js.map