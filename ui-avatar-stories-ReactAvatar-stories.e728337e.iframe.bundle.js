(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[8367],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/ui/avatar/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>Avatar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const Icon=()=>(0,jsx_runtime.jsx)("span",{className:"sui-avatar__icon suicons suicons--user-alt","aria-hidden":"true","data-testid":"avatar-icon"}),Image=({source,text})=>{const hasSrc=!(0,src.o8)(source)&&!(0,src.xb)(source),hasAlt=!(0,src.o8)(text)&&!(0,src.xb)(text);if(!hasSrc)throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Avatar\n\nThe parameter "source" in the "Image" component is required.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-avatar__image",style:{backgroundImage:`url(${source})`},tabIndex:-1,"data-testid":"avatar-image"}),(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only","data-testid":"avatar-image-alt",children:hasAlt?text:"Logged in user avatar"})]})},Status=({status})=>{const set={wrapper:{},element:{}};switch(set.wrapper.class="sui-avatar__status",set.element.class="sui-avatar__status-icon suicons",status){case"confirmed":set.element.class+=" suicons--check-alt",set.element.class+=" sui-color-success--50";break;case"not-accepted":set.element.class+=" suicons--warning",set.element.class+=" sui-color-warning--50";break;case"not-connected":set.element.class+=" suicons--warning",set.element.class+=" sui-color-error--50";break;default:set.element.class+=" suicons--clock",set.element.class+=" sui-color-neutral--60"}return(0,jsx_runtime.jsx)("span",{className:set.wrapper.class,"data-testid":"avatar-status",children:(0,jsx_runtime.jsx)("span",{className:set.element.class,"aria-hidden":"true"})})},Avatar=({image,status,isSmall=!1,className,...props})=>{const imageObj=Object.assign({src:"",alt:""},image),hasStatus=!(0,src.o8)(status)&&!(0,src.xb)(status),hasImage=!(0,src.o8)(image)&&!(0,src.xb)(imageObj.src),classNames=(0,src.uY)("sui-avatar",{sm:isSmall,clickable:!!props?.onClick});return(0,jsx_runtime.jsxs)("span",{className:classNames,...props,"data-testid":"avatar",children:[hasImage&&(0,jsx_runtime.jsx)(Image,{source:imageObj.src,text:imageObj.alt}),!hasImage&&(0,jsx_runtime.jsx)(Icon,{}),hasStatus&&(0,jsx_runtime.jsx)(Status,{status:status??""})]})}},"./packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js"),__webpack_require__("./node_modules/jest-axe/index.js"),__webpack_require__("./node_modules/process/browser.js");const generateCN=(base,variants={},extraClassNames="")=>{const classes=Object.keys(variants).map((attr=>({[`${base}--${attr}`]:!!variants?.[attr]})));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=(condition,content=null,fallback=void 0)=>(isNull(content)&&(content=condition),condition?content:fallback),isNull=value=>null===value,isUndefined=value=>void 0===value,isObject=value=>"object"==typeof value&&!Array.isArray(value),isArray=value=>Array.isArray(value),isBoolean=value=>"boolean"==typeof value,isFunction=value=>"function"==typeof value,isString=value=>"string"==typeof value,isEmpty=value=>""===value,capitalizeText=string=>string?.charAt(0)?.toUpperCase()+string?.slice(1),handleOnKeyDown=(event,callback)=>{"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=(e,stopPropagation,preventDefault)=>{stopPropagation&&e?.stopPropagation(),preventDefault&&e?.preventDefault()},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=(arr,size)=>{const chunkedArray=[];for(let i=0;i<arr.length;i+=size){const chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./packages/ui/avatar/stories/ReactAvatar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Avatar:()=>Avatar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactAvatar_stories});__webpack_require__("./node_modules/react/index.js");var src=__webpack_require__("./packages/ui/avatar/src/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const icon_type_namespaceObject=__webpack_require__.p+"static/media/icon-type.c13405a4.svg",image_type_namespaceObject=__webpack_require__.p+"static/media/image-type.02fa9d44.svg",sizes_namespaceObject=__webpack_require__.p+"static/media/sizes.8856556e.svg",status_namespaceObject=__webpack_require__.p+"static/media/status.d86c95c2.svg",other_usage_namespaceObject=__webpack_require__.p+"static/media/other-usage.7acd7a08.svg";function _createMdxContent(props){const _components=Object.assign({ol:"ol",li:"li"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Types",children:[(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)("img",{src:icon_type_namespaceObject,alt:"Avatar Icon Type"}),(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column",padding:20},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"Icon Avatar"}),(0,jsx_runtime.jsx)("p",{children:"By default, the avatar for the user will be a user icon."})]})]}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)("img",{src:image_type_namespaceObject,alt:"Avatar Image Type"}),(0,jsx_runtime.jsxs)(docs_src.JX,{size:"3",style:{display:"flex",justifyContent:"center",flexDirection:"column",paddingLeft:20},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"Image Avatar"}),(0,jsx_runtime.jsx)("p",{children:"The user can choose their own avatar. Gravatar is also supported for avatar images."})]})]})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Size",children:(0,jsx_runtime.jsx)("img",{src:sizes_namespaceObject,alt:"Avatar Sizes"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Status",children:[(0,jsx_runtime.jsx)("p",{children:"In the navigation bar we will show the profile status (connected (with or without avatar), not connected)"}),(0,jsx_runtime.jsx)("img",{src:status_namespaceObject,alt:"Avatar Status"}),(0,jsx_runtime.jsx)("p",{children:"Other avatar usage examples. These avatar states will be used in notifications/reports to indicate if Recipient accepted the invitation or not."}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)("img",{src:other_usage_namespaceObject,alt:"Avatar Other Usage"}),(0,jsx_runtime.jsx)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column",padding:20},children:(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Recipient confirmed"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Awaiting for confirmation"}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Not accepted"}),"\n"]})})]})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Avatar"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete\nSUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"Avatar component have the following props."}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"status*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Reflects the status of the avatar."}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"confirmed"})})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"awaiting"})})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"not-connected"})})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"not-accepted"})})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSmall*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"})," the avatar will be smaller"]})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"image*",tag:"object",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Reflects the profile image of the avatar. the object accepts two properties"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{children:"src"})," The image link"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{children:"alt"})," The image alternative text"]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A custom className(s) for the avatar"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const ConfirmedAvatarCode=dedent_default()`
<Avatar status="confirmed" />
`,AwaitingAvatarCode=dedent_default()`
<Avatar status="awaiting" />
`,NotAcceptedAvatarCode=dedent_default()`
<Avatar status="not-connected" />
`,NotConnectedAvatarCode=dedent_default()`
<Avatar status="not-accepted" />
`;function Status_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Confirmed",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{status:"confirmed"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:ConfirmedAvatarCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Awaiting",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{status:"awaiting"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:AwaitingAvatarCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Not Accepted",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{status:"not-accepted"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:NotAcceptedAvatarCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Not Connected",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{status:"not-connected"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:NotConnectedAvatarCode})]})]})}const Status=function Status_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Status_createMdxContent,props)})):Status_createMdxContent()},SmallAvatarCode=dedent_default()`
<Avatar isSmall={true} status="confirmed" />
`;function Size_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isSmall"})," prop to reduce the avatar\nwidth and height."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{isSmall:!0,status:"confirmed"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:SmallAvatarCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent(props)},IconAvatarCode=dedent_default()`
<Avatar />
`,ImageAvatarCode=dedent_default()`
    <Avatar
        image={
                {
                    src: 'https://avatars.githubusercontent.com/u/40248406?v=4',
                    alt: 'image-alt'
                }
            }
    />
`;function Types_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Icon ( default )",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When the image is not set, the Avatar will display an icon of a user"})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:IconAvatarCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Image",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"image"})," prop to show image in avatar."]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{image:{src:"https://avatars.githubusercontent.com/u/40248406?v=4",alt:"image-alt"}})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:ImageAvatarCode})]})]})}const Types=function Types_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Types_createMdxContent,props)})):Types_createMdxContent(props)},sampleCode=dedent_default()`
<Avatar />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of an Avatar."}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.q,{})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"Types",value:"types",children:(0,jsx_runtime.jsx)(Types,{})}),(0,jsx_runtime.jsx)("div",{label:"Status",value:"status",children:(0,jsx_runtime.jsx)(Status,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactAvatar_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Avatar",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"An avatar is a thumbnail that represents a user or organization on the SUI platform."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactAvatar=function ReactAvatar_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactAvatar_createMdxContent,props)})):ReactAvatar_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const unreal_person_namespaceObject=__webpack_require__.p+"static/media/unreal-person.766301c1.jpg",ReactAvatar_stories={title:"SUI/Components/Core/Avatar",component:src.q,parameters:{layout:"fullscreen",docs:{page:ReactAvatar}}},Avatar=({...props})=>{const set={box:{padding:20,borderRadius:4,background:"#fff",fontSize:0,lineHeight:1}};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:set.box,children:(0,jsx_runtime.jsx)(src.q,{...props})})})})};Avatar.displayName="Avatar",Avatar.args={example:"icon",status:"",image:{alt:"Unreal Person avatar image",src:unreal_person_namespaceObject},isSmall:!1},Avatar.argTypes={example:{name:"Example",options:["icon","image"],control:{type:"select",labels:{icon:"Example: Icon Avatar",image:"Example: Image Avatar"}}},image:{name:"Image",control:"object",if:{arg:"example",eq:"image"}},status:{name:"Status",options:["none","confirmed","awaiting","not-accepted","not-connected"],control:{type:"select",labels:{none:"Status: None",confirmed:"Status: Confirmed",awaiting:"Status: Awaiting","not-accepted":"Status: Not Accepted","not-connected":"Status: Not Connected"}}},isSmall:{name:"Small",control:"boolean"}},Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar"};const __namedExportsOrder=["Avatar"]},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}},"?4f7e":()=>{}}]);
//# sourceMappingURL=ui-avatar-stories-ReactAvatar-stories.e728337e.iframe.bundle.js.map