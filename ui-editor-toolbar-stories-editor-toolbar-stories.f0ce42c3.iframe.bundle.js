"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[9785],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kL});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hrefTo,oo:()=>navigate,uM:()=>linkTo});var _storybook_global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-events"),_storybook_csf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs"),{document,HTMLElement}=_storybook_global__WEBPACK_IMPORTED_MODULE_0__.global;var navigate=params=>_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel().emit(_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__.SELECT_STORY,params),hrefTo=(title,name)=>new Promise((resolve=>{let{location}=document,query=function parseQuery(queryString){let query={},pairs=("?"===queryString[0]?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"")}return query}(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,_storybook_csf__WEBPACK_IMPORTED_MODULE_3__.Lr)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,"");resolve(`${location.origin+sbPath}?${Object.entries({path}).map((item=>`${item[0]}=${item[1]}`)).join("&")}`)})),linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=(args=>value=>"function"==typeof value?value(...args):value)(args),title=resolver(idOrTitle),name=!!nameInput&&resolver(nameInput);title?.match(/--/)&&!name?navigate({storyId:title}):name&&title?navigate({kind:title,story:name}):title?navigate({kind:title}):name&&navigate({story:name})},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,document.removeEventListener("click",linksListener))};(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,document.addEventListener("click",linksListener)),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel().once(_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__.STORY_CHANGED,off),getStory(context))})},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uM:()=>_chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__.uM});var _chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>react_default});var _chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__.Z)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__.oo)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/ui/editor-toolbar/stories/editor-toolbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EditorToolbar:()=>editor_toolbar_stories_EditorToolbar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>editor_toolbar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const EditorToolbar=({title="Toolbar Title",actions,disableSetting=!1,disableBack=!1,children,allowBack=!0,alignCenter=!1,onBackClick=()=>{},onSettingClick=()=>{},_htmlProps,_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,utils_src.n0)("sui-editor-toolbar",{right:!alignCenter,center:alignCenter},suiInlineClassname);children=(0,hooks_src.Q8)(children);const settingButton=(0,jsx_runtime.jsx)(src.$,{type:"tertiary",icon:"Settings",colorScheme:"black",iconOnly:!0,onClick:onSettingClick,isDisabled:disableSetting,_htmlProps:{"aria-label":"settings"}});let actionsList=[];actions&&(actionsList=[...actions(settingButton)]);const actionButtons=actionsList?.map(((action,index)=>(0,jsx_runtime.jsx)("div",{className:"sui-editor-toolbar__actions-item",children:action},index)));return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"editor-toolbar",...(0,utils_src.X5)(_htmlProps),children:[(!!title||!!allowBack)&&(0,jsx_runtime.jsx)("div",{className:"sui-editor-toolbar__content--left",children:(0,jsx_runtime.jsxs)("div",{className:"sui-editor-toolbar__main",children:[allowBack&&(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.$,{type:"tertiary",icon:"ChevronLeft",colorScheme:"black",iconOnly:!0,onClick:onBackClick,isDisabled:disableBack,_htmlProps:{"aria-label":"back","data-testid":"editor-toolbar-back-btn"}})}),title&&(0,jsx_runtime.jsx)("h3",{className:"sui-heading--h4 sui-editor-toolbar__main-title",children:title})]})}),!!children&&(0,jsx_runtime.jsx)("div",{className:(0,utils_src.n0)("sui-editor-toolbar__content",{}),"data-testid":"editor-toolbar-content",children:!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-editor-toolbar__body",children})}),!!actionButtons&&(0,jsx_runtime.jsx)("div",{className:"sui-editor-toolbar__actions",children:!!actionButtons&&actionButtons})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const EditorToolbarField=({status="saved",statusText="",children,_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,utils_src.n0)("sui-editor-toolbar__field",{},suiInlineClassname);let StatusTag=(0,jsx_runtime.jsx)(components.WnN,{size:"sm",colorScheme:"success"}),StatusText="Saved";return"saving"===status?(StatusTag=(0,jsx_runtime.jsx)(components.y$y,{size:"sm",colorScheme:"neutral"}),StatusText="Saving"):"unsaved"===status&&(StatusTag=(0,jsx_runtime.jsx)(components.C42,{size:"sm",colorScheme:"warning"}),StatusText="Unsaved changes"),(0,utils_src.Im)(statusText),(0,jsx_runtime.jsxs)("div",{className:classNames,children:[children,(0,jsx_runtime.jsxs)("div",{className:"sui-editor-toolbar__field--status",children:[StatusTag,StatusText&&(0,jsx_runtime.jsx)("div",{className:"sui-editor-toolbar__field--status-text",children:StatusText})]})]})};var segmented_control_src=__webpack_require__("./packages/ui/segmented-control/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const overview_namespaceObject=__webpack_require__.p+"static/media/overview.e41672c9.svg",anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.ea7d2922.svg",types_namespaceObject=__webpack_require__.p+"static/media/types.060babdc.svg",saving_status_namespaceObject=__webpack_require__.p+"static/media/saving-status.6e6b41ba.svg",responsive_namespaceObject=__webpack_require__.p+"static/media/responsive.0f254274.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.9a351d06.svg",high_contrast_namespaceObject=__webpack_require__.p+"static/media/high-contrast.b84e6a09.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.wn,{style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:overview_namespaceObject,alt:"Editor Toolbar Overview",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Editor Toolbar Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"1. Icon button"}),(0,jsx_runtime.jsx)("p",{children:"A chevron icon button to get back to the previous page."}),(0,jsx_runtime.jsx)("h3",{children:"2. Title"}),(0,jsx_runtime.jsx)("p",{children:"A page title for editor page."}),(0,jsx_runtime.jsx)("h3",{children:"3. Input"}),(0,jsx_runtime.jsx)("p",{children:"Input provides flexibility to change the name."}),(0,jsx_runtime.jsx)("h3",{children:"4. Status"}),(0,jsx_runtime.jsx)("p",{children:"The editor status shows the current status of the editor."}),(0,jsx_runtime.jsx)("h3",{children:"5. Actions"}),(0,jsx_runtime.jsx)("p",{children:"The actions includes necessary buttons that is required for an editor."}),(0,jsx_runtime.jsx)("h3",{children:"6. Settings icon"}),(0,jsx_runtime.jsx)("p",{children:"An icon button with cog icon to show necessary settings for the editor."})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Types",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:types_namespaceObject,alt:"Editor Toolbar Types",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Saving Status Process",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:saving_status_namespaceObject,alt:"Editor Toolbar Saving Status Process",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Responsive",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:responsive_namespaceObject,alt:"Editor Toolbar Responsive",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Spacing",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Editor Toolbar Spacing",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"High Contrast",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:high_contrast_namespaceObject,alt:"Editor Toolbar Hight Contrast",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-editor-toolbar"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"title",type:"string",defaultValue:"Toolbar Title",children:(0,jsx_runtime.jsx)("p",{children:"The heading text for the Toolbar"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"actions",type:"function",children:(0,jsx_runtime.jsx)("p",{children:" A function where the first parameter is the setting button element, it should return an array of React Nodes "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"allowBack",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:"Whether to display the back button or not "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onBackClick",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked upon clicking the back button"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onSettingClick",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked upon clicking the settings button"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"The content to be placed right after the title"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"alignCenter",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether to center the content or keep it aligned to the right"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"disableSetting",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether to disbaled the settings or not"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"disableBack",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether to disable the back button or not"})})]}),"\n",(0,jsx_runtime.jsx)(docs_src.oW,{})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const generalCode=dedent_default()`
import { EditorToolbar } from "@wpmudev/sui-editor-toolbar"
import { Button } from "@wpmudev/sui-button"
import {
	SegmentedControl,
	SegmentedControlButton,
} from "@wpmudev/sui-segmented-control"

    const actions = (settingBtn) => {
      return [
         <Button
           key={0}
           type="tertiary"
           icon="Save"
           colorScheme="black"
           isSmall={true}
           isResponsive={true}
         >
           Save Draft
         </Button>,
         <Button
           key={1}
           type="secondary"
           icon="Show"
           colorScheme="black"
           isSmall={true}
           isFullWidth={true}
           isResponsive={true}
         >
           Preview
        </Button>,
    	<Button
            key={2}
            type="primary"
            icon="Globe"
            colorScheme="blue"
            isSmall={true}
            isFullWidth={true}
         >
            Publish
         </Button>,
          settingBtn,
        ]
    }

    export const Example = () => {
      return (
        <EditorToolbar title="Toolbar Title" actions={actions}>
          <SegmentedControl name="type">
            <SegmentedControlButton
               icon="Desktop"
               isResponsive={true}
               value="visual"
             >
                Visual
             </SegmentedControlButton>
            <SegmentedControlButton icon="Desktop" isResponsive={true} value="code">
                Code
            </SegmentedControlButton>
          </SegmentedControl>
        </EditorToolbar>
      )
    }

`,centeredContentCode=dedent_default()`
<EditorToolbar alignCenter={true} title="Toolbar Title" actions={actions}/>
`,disallowBackCode=dedent_default()`
<EditorToolbar allowBack={false} title="Toolbar Title" actions={actions}/>
`,actions=settingBtn=>[(0,jsx_runtime.jsx)(src.$,{type:"tertiary",icon:"Save",colorScheme:"black",isSmall:!0,isResponsive:!0,children:"Save Draft"},0),(0,jsx_runtime.jsx)(src.$,{type:"secondary",icon:"Show",colorScheme:"black",isSmall:!0,isFullWidth:!0,isResponsive:!0,children:"Preview"},1),(0,jsx_runtime.jsx)(src.$,{type:"primary",icon:"Globe",colorScheme:"blue",isSmall:!0,isFullWidth:!0,children:"Publish"},2),settingBtn];function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!1,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is a general example of the Editor Toolbar"}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(EditorToolbar,{title:"Toolbar Title",actions,children:(0,jsx_runtime.jsxs)(segmented_control_src.I,{name:"type",children:[(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"visual",children:(0,jsx_runtime.jsx)(_components.p,{children:"Visual"})}),(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"code",children:(0,jsx_runtime.jsx)(_components.p,{children:"Code"})})]})})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Centered Content",contained:!1,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"alignCenter={true}"})," to center the content"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(EditorToolbar,{alignCenter:!0,title:"Toolbar Title",actions,children:(0,jsx_runtime.jsxs)(segmented_control_src.I,{name:"type",children:[(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"visual",children:(0,jsx_runtime.jsx)(_components.p,{children:"Visual"})}),(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"code",children:(0,jsx_runtime.jsx)(_components.p,{children:"Code"})})]})})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:centeredContentCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Centered Content",contained:!1,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"allowBack={false}"})," to remove the back button"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(EditorToolbar,{allowBack:!1,title:"Toolbar Title",actions,children:(0,jsx_runtime.jsxs)(segmented_control_src.I,{name:"type",children:[(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"visual",children:(0,jsx_runtime.jsx)(_components.p,{children:"Visual"})}),(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"code",children:(0,jsx_runtime.jsx)(_components.p,{children:"Code"})})]})})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:disallowBackCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function editor_toolbar_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Editor Toolbar",subtitle:"Editor Toolbar is used at the top of the editing page replacing the main navigation.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const editor_toolbar=function editor_toolbar_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(editor_toolbar_createMdxContent,props)})):editor_toolbar_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var input_src=__webpack_require__("./packages/ui/input/src/index.ts");const editor_toolbar_stories={title:"SUI/Components/Advanced/Editor Toolbar",component:EditorToolbar,parameters:{layout:"fullscreen",docs:{page:editor_toolbar}}},editor_toolbar_stories_EditorToolbar=({example,status,...props})=>{const[editorType,setEditorType]=(0,react.useState)("visual"),actions=settingBtn=>[(0,jsx_runtime.jsx)(src.$,{type:"secondary",icon:"Show",colorScheme:"black",isFullWidth:!0,isResponsive:!0,children:"Preview"},0),(0,jsx_runtime.jsx)(src.$,{type:"primary",icon:"Globe",colorScheme:"blue",isFullWidth:!0,children:"Publish"},1),settingBtn];return(0,jsx_runtime.jsx)("div",{className:"sui-layout",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:"example-1"===example?(0,jsx_runtime.jsx)(EditorToolbar,{...props,alignCenter:!0,actions,children:(0,jsx_runtime.jsxs)(segmented_control_src.I,{name:"type",defaultValue:editorType,onChange:t=>setEditorType(t),children:[(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"visual",children:"Visual"}),(0,jsx_runtime.jsx)(segmented_control_src.E,{icon:"Desktop",isResponsive:!0,value:"code",children:"Code"})]})}):(0,jsx_runtime.jsx)(EditorToolbar,{...props,actions,children:(0,jsx_runtime.jsx)(segmented_control_src.I,{name:"type",defaultValue:editorType,onChange:t=>setEditorType(t),children:(0,jsx_runtime.jsx)(EditorToolbarField,{status,children:(0,jsx_runtime.jsx)(input_src.p,{id:"form-name",type:"text",defaultValue:"Form name"})})})})})})};editor_toolbar_stories_EditorToolbar.args={example:"example-1",title:"Title",allowBack:!0,status:"unsaved"},editor_toolbar_stories_EditorToolbar.argTypes={example:{name:"Example",options:["example-1","example-2"],control:{type:"select",labels:{"example-1":"Example: Tabs","example-2":"Example: Fields"}}},title:{name:"Title",control:{type:"text"}},allowBack:{name:"Back Button",control:{type:"boolean"}},status:{name:"Status",options:["unsaved","saving","saved"],control:{type:"select",labels:{unsaved:"Unsaved",saving:"Saving",saved:"Saved"}},if:{arg:"example",eq:"example-2"}}},editor_toolbar_stories_EditorToolbar.parameters={...editor_toolbar_stories_EditorToolbar.parameters,docs:{...editor_toolbar_stories_EditorToolbar.parameters?.docs,source:{originalSource:'({\n  example,\n  status,\n  ...props\n}: EditorToolbarProps) => {\n  const [editorType, setEditorType] = useState<string | number>("visual");\n  const actions = (settingBtn: React.ReactNode) => {\n    return [<Button key={0} type="secondary" icon="Show" colorScheme="black" isFullWidth={true} isResponsive={true}>\n                Preview\n            </Button>, <Button key={1} type="primary" icon="Globe" colorScheme="blue" isFullWidth={true}>\n                Publish\n            </Button>, settingBtn];\n  };\n  return <div className="sui-layout">\n            <div className="sui-layout__content">\n                {"example-1" === example ? <SuiEditorToolbar {...props} alignCenter={true} actions={actions}>\n                        <SegmentedControl name="type" defaultValue={editorType} onChange={t => setEditorType(t)}>\n                            <SegmentedControlButton icon="Desktop" isResponsive={true} value="visual">\n                                Visual\n                            </SegmentedControlButton>\n                            <SegmentedControlButton icon="Desktop" isResponsive={true} value="code">\n                                Code\n                            </SegmentedControlButton>\n                        </SegmentedControl>\n                    </SuiEditorToolbar> : <SuiEditorToolbar {...props} actions={actions}>\n                        <SegmentedControl name="type" defaultValue={editorType} onChange={t => setEditorType(t)}>\n                            <EditorToolbarField status={status}>\n                                <Input id="form-name" type="text" defaultValue="Form name" />\n                            </EditorToolbarField>\n                        </SegmentedControl>\n                    </SuiEditorToolbar>}\n            </div>\n        </div>;\n}',...editor_toolbar_stories_EditorToolbar.parameters?.docs?.source}}};const __namedExportsOrder=["EditorToolbar"]},"./packages/ui/segmented-control/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>SegmentedControl,E:()=>SegmentedControlButton});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const SegmentedControlContext=(0,react.createContext)(null);var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SegmentedControl=({name="segmented-control",defaultValue="",onChange=()=>{},children,isFullWidth=!1,ariaAttrs={},_htmlProps,_style={}})=>{const[value,setValue]=(0,react.useState)(defaultValue);children=(0,hooks_src.Q8)(children);const{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-segmented-control",{"full-width":isFullWidth},suiInlineClassname);return(0,jsx_runtime.jsx)(SegmentedControlContext.Provider,{value:{name,onClick:val=>{setValue(val),onChange&&onChange(val)},value},children:(0,jsx_runtime.jsx)("div",{role:"radiogroup",className:classNames,"data-testid":"segmented-control",...ariaAttrs,...(0,src.X5)(_htmlProps),children})})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const SegmentedControlButton=({value,icon,children,ariaLabel,isDisabled,isResponsive=!1,_htmlProps,_style={}})=>{const uniqueId=(0,react.useId)(),buttonId=`sui-radio-${uniqueId}`;value||(value=`example-value-${uniqueId}`),children||icon||(children="example option");const{onClick,name,value:ctxValue}=(value=>{const ctx=(0,react.useContext)(SegmentedControlContext),onClick=(0,react.useCallback)((()=>{ctx?.onClick(value)}),[ctx,value]);return{...ctx,onClick}})(value),[isHovered,isFocused,methods]=(0,hooks_src.Mj)({}),{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-segmented-control__button",{},suiInlineClassname),isActive=value===ctxValue;let IconTag=null;return icon&&(IconTag=components.Ay$[icon]),(0,jsx_runtime.jsxs)("span",{className:classNames,...(0,src.X5)(_htmlProps),children:[(0,jsx_runtime.jsx)("input",{type:"radio",id:buttonId,className:"sui-segmented-control__input",name,checked:isActive,value,disabled:isDisabled,onChange:onClick,"aria-label":ariaLabel||"radio input","aria-checked":isActive,"aria-hidden":!0}),(0,jsx_runtime.jsxs)("label",{className:(0,src.n0)("sui-segmented-control__label",{focus:isFocused,active:isActive,hover:isHovered,disabled:isDisabled}),tabIndex:isDisabled?-1:0,htmlFor:buttonId,"data-testid":"segmented-control-label",onKeyDown:e=>(0,src.f$)(e,onClick),...methods,children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm"}),!!children&&(0,jsx_runtime.jsx)("span",{...isResponsive&&{className:"sui-md-hide"},children}),!(0,src.Im)(ariaLabel??"")&&(0,jsx_runtime.jsx)("span",{className:"screen-reader-text",children:ariaLabel})]})]})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-editor-toolbar-stories-editor-toolbar-stories.f0ce42c3.iframe.bundle.js.map