(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[3689],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/ui/tag/stories/ReactTag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tag:()=>Tag,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactTag_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/tag/src/index.ts")),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.da9fa4a6.svg",variations_namespaceObject=__webpack_require__.p+"static/media/variations.de9b7b9c.svg",type_namespaceObject=__webpack_require__.p+"static/media/type.fd2a19b2.svg",structured_namespaceObject=__webpack_require__.p+"static/media/structured.5909dc0e.svg",structured_blue_namespaceObject=__webpack_require__.p+"static/media/structured-blue.cd857ee4.svg",structured_black_namespaceObject=__webpack_require__.p+"static/media/structured-black.cf202a62.svg",white_namespaceObject=__webpack_require__.p+"static/media/white.51bfc433.svg",style_namespaceObject=__webpack_require__.p+"static/media/style.396b961f.svg",size_namespaceObject=__webpack_require__.p+"static/media/size.95e03f5e.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Anatomy",border:!0,children:(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Text"}),(0,jsx_runtime.jsx)("p",{children:"A text contextual to the content."}),(0,jsx_runtime.jsx)("h3",{children:"2. Container"}),(0,jsx_runtime.jsx)("p",{children:"Container to wrap the tag."}),(0,jsx_runtime.jsx)("h3",{children:"3. Dismiss icon - Optional"})]}),(0,jsx_runtime.jsx)(docs_src.JX,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Tag anatomy"})})]})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Variations",border:!0,children:[(0,jsx_runtime.jsx)("h3",{children:"Semantic Variations"}),(0,jsx_runtime.jsx)("p",{children:"Semantic color variation can be used to distinguish between various states of tags."}),(0,jsx_runtime.jsx)("img",{src:variations_namespaceObject,alt:"Tag Variations"}),(0,jsx_runtime.jsx)("h3",{children:"Dismissible"}),(0,jsx_runtime.jsx)("p",{children:"Dismissible tags are only available on the default size."}),(0,jsx_runtime.jsx)("img",{src:type_namespaceObject,alt:"Dismissible Tag"}),(0,jsx_runtime.jsx)("h3",{children:"Structured"}),(0,jsx_runtime.jsx)("p",{children:"Structured tags are for specific usecases."}),(0,jsx_runtime.jsx)("img",{src:structured_namespaceObject,alt:"Structured Tag"}),(0,jsx_runtime.jsx)("h3",{children:"Structured Blue"}),(0,jsx_runtime.jsx)("p",{children:"Structured blue tags are used to indicate beta, coming soon, new, free, and hosting. The typography for Free and Coming Soon will be in uppercase."}),(0,jsx_runtime.jsx)("img",{src:structured_blue_namespaceObject,alt:"Structured Blue Tag"}),(0,jsx_runtime.jsx)("h3",{children:"Structured Black"}),(0,jsx_runtime.jsx)("p",{children:"To indicate pro features, a structured black tag is used."}),(0,jsx_runtime.jsx)("img",{src:structured_black_namespaceObject,alt:"Structured Black Tag"}),(0,jsx_runtime.jsx)("h3",{children:"White"}),(0,jsx_runtime.jsx)("p",{children:"If there is a contrast issue with the dark background, the white color tag will be used."}),(0,jsx_runtime.jsx)("img",{src:white_namespaceObject,alt:"White Tag"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Style",border:!0,children:(0,jsx_runtime.jsx)("img",{src:style_namespaceObject,alt:"Tag Styles"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Size",children:(0,jsx_runtime.jsx)("img",{src:size_namespaceObject,alt:"Tag Sizes"})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Tag"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete\nSUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"color",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The color of the tag"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"blue"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"yellow"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"red"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"green"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"white"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"black"})})]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"design",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The design of the tag"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"solid"})," The tag will have a solid background"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"outlined"})," The tag will have a transparent background"]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSmall",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:" true "})," the tag will have a smaller size"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isUppercase",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:" true "}),", the tag text will be in uppercase"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A custom className "})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"style",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"When the available space is unsufficient, the tag could have one of two styles: "}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"multiline"})," for a multilined text. "]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"truncated"})," for a truncated text. "]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content of the tag"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const SmallTagCode=dedent_default()`
<Tag isSmall={true}>Tag</Tag>
`;function Size_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{isSmall:!0,children:"Default tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:SmallTagCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent()},BlueTagCode=dedent_default()`
<Tag color="blue">Blue tag</Tag>
`,YellowTagCode=dedent_default()`
<Tag color="yellow">Yellow tag</Tag>
`,RedTagCode=dedent_default()`
<Tag color="red">Red tag</Tag>
`,GreenTagCode=dedent_default()`
<Tag color="green">Green tag</Tag>
`,BlackTagCode=dedent_default()`
<Tag color="black">Black tag</Tag>
`,WhiteTagCode=dedent_default()`
<Tag color="white">White tag</Tag>
`;function Colors_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Blue",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{color:"blue",children:"Blue tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:BlueTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Yellow",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{color:"yellow",children:"Yellow tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:YellowTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Red",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{color:"red",children:"Red tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:RedTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Green",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{color:"green",children:"Green tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:GreenTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Black",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{color:"black",children:"Black tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:BlackTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"White",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{background:"#000",padding:20},children:(0,jsx_runtime.jsx)(src.V,{color:"white",children:"White tag"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:WhiteTagCode})]})]})}const Colors=function Colors_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Colors_createMdxContent,props)})):Colors_createMdxContent()},UppercaseTagCode=dedent_default()`
<Tag isUppercase={true}>Uppercase tag</Tag>
`,OutlinedTagCode=dedent_default()`
<Tag design="outlined">Outlined tag</Tag>
`;function Design_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Uppercase",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{isUppercase:!0,children:"Uppercase tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:UppercaseTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Outlined",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{design:"outlined",children:"Outlined tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:OutlinedTagCode})]})]})}const Design=function Design_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Design_createMdxContent,props)})):Design_createMdxContent()},MutilineTagCode=dedent_default()`
<Tag style="multiline">This is a label.</Tag>
`,TruncatedTagCode=dedent_default()`
<Tag style="truncated">This is a label.</Tag>
`;function Style_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Multiline",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When the tag width is insufficient, the text will break in multiple lines"})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{style:"multiline",children:"This is a multiline text."})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:MutilineTagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Truncated",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When the tag width is insufficient, the text get truncated"})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{style:"truncated",children:"This is a truncated text."})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:TruncatedTagCode})]})]})}const Style=function Style_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Style_createMdxContent,props)})):Style_createMdxContent(props)},sampleCode=dedent_default()`
<Tag>Tag default</Tag>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Below is the default form of a tag:"})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.V,{children:"Default tag"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"Colors",value:"colors",children:(0,jsx_runtime.jsx)(Colors,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})}),(0,jsx_runtime.jsx)("div",{label:"Design",value:"design",children:(0,jsx_runtime.jsx)(Design,{})}),(0,jsx_runtime.jsx)("div",{label:"Style",value:"style",children:(0,jsx_runtime.jsx)(Style,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function ReactTag_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Tags",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"Use tag for label and categorising items. Also known as chips,etc."}),status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactTag=function ReactTag_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactTag_createMdxContent,props)})):ReactTag_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactTag_stories={title:"SUI/Components/Core/Tag",component:src.V,parameters:{layout:"fullscreen",docs:{page:ReactTag}}},Tag=({children,...props})=>{const boxStyle={margin:0,padding:"30px",border:"1px solid #E6E6E6",borderRadius:"4px",background:"white"===props.color?"#333":"#fff"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyle,children:(0,jsx_runtime.jsx)(src.V,{...props,children})})})})};Tag.args={children:"Hello, I am a tag",design:"",color:"",style:"",isUppercase:!1,isSmall:!1,isDisabled:!1},Tag.argTypes={children:{name:"Content"},design:{name:"Design",options:["","outlined"],control:{type:"select",labels:{"":"Design: Solid",outlined:"Design: Outlined"}}},color:{name:"Color",options:["","blue","navy","yellow","red","green","black","white"],control:{type:"select",labels:{"":"Color: Default",blue:"Color: Blue (Information)",navy:"Color: Navy Blue",yellow:"Color: Yellow (Warning)",red:"Color: Red (Error)",green:"Color: Green (Success)",black:"Color: Black",white:"Color: White"}}},style:{name:"Style",options:["","multiline","truncated"],control:{type:"select",labels:{"":"Style: Default",multiline:"Style: Multiline",truncated:"Style: Truncated"}}},isUppercase:{name:"Uppercase",control:{type:"boolean"}},isSmall:{name:"Small",control:{type:"boolean"}},isDisabled:{name:"Disabled",control:{type:"boolean"}}};const __namedExportsOrder=["Tag"]},"./packages/ui/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts"));const Tag=({design,color,style,className,isSmall=!1,isUppercase=!1,isDisabled=!1,children,...props})=>{const hasDesign="outlined"===design,hasColor=!(0,src.o8)(color)&&!(0,src.xb)(color),hasStyle=["multiline","truncated"].includes(style??""),classNames=(0,src.uY)("sui-tag",{[`${design}-${color}`]:hasDesign&&hasColor,[design]:hasDesign&&!hasColor,[color]:!hasDesign&&hasColor,[style]:hasStyle,sm:isSmall,uppercase:isUppercase,disabled:isDisabled},className);return(0,jsx_runtime.jsx)("span",{className:classNames,...props,"data-testid":"tag",children:(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children})})}},"./packages/utils/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{CI:()=>condContent,F3:()=>chunkArray,HD:()=>isString,Jw:()=>handleOnKeyDown,Kn:()=>isObject,c7:()=>capitalizeText,h4:()=>PluginsIcons,jn:()=>isBoolean,kJ:()=>isArray,mf:()=>isFunction,o8:()=>isUndefined,uY:()=>generateCN,wW:()=>handleEventDefault,xb:()=>isEmpty});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);__webpack_require__("./node_modules/@testing-library/react/dist/@testing-library/react.esm.js"),__webpack_require__("./node_modules/jest-axe/index.js"),__webpack_require__("./node_modules/process/browser.js");const generateCN=(base,variants={},extraClassNames="")=>{const classes=Object.keys(variants).map((attr=>({[`${base}--${attr}`]:!!variants?.[attr]})));return classnames__WEBPACK_IMPORTED_MODULE_0___default()(base,classes,extraClassNames)},condContent=(condition,content=null,fallback=void 0)=>(isNull(content)&&(content=condition),condition?content:fallback),isNull=value=>null===value,isUndefined=value=>void 0===value,isObject=value=>"object"==typeof value&&!Array.isArray(value),isArray=value=>Array.isArray(value),isBoolean=value=>"boolean"==typeof value,isFunction=value=>"function"==typeof value,isString=value=>"string"==typeof value,isEmpty=value=>""===value,capitalizeText=string=>string?.charAt(0)?.toUpperCase()+string?.slice(1),handleOnKeyDown=(event,callback)=>{"Enter"!==event.key&&" "!==event.key||callback&&callback(event)},handleEventDefault=(e,stopPropagation,preventDefault)=>{stopPropagation&&e?.stopPropagation(),preventDefault&&e?.preventDefault()},PluginsIcons={smush:{bg:"#2dc4e0",color:"#FFF",icon:"PluginSmush"},defender:{bg:"#282a2c",color:"#FFF",icon:"PluginDefender"},snapshot:{bg:"#1a325e",color:"#FFF",icon:"PluginSnapshot"},hummingbird:{bg:"#ff8e3c",color:"#FFF",icon:"PluginHummingbird"},forminator:{bg:"#1f2852",color:"#FFF",icon:"PluginForminator"},beehive:{bg:"#013aa9",color:"#FFF",icon:"PluginBeehive"},hustle:{bg:"#1a1a1a",color:"#FFF",icon:"PluginHustle"},smartcrawl:{bg:"#de240a",color:"#FFF",icon:"PluginSmartCrawl"},shipper:{bg:"#7b5499",color:"#FFF",icon:"PluginShipper"},branda:{bg:"#ff8184",color:"#FFF",icon:"PluginBranda"}},chunkArray=(arr,size)=>{const chunkedArray=[];for(let i=0;i<arr.length;i+=size){const chunk=arr.slice(i,i+size);chunkedArray.push(chunk)}return chunkedArray}},"./node_modules/dedent/dist/dedent.js":module=>{"use strict";module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}},"?4f7e":()=>{}}]);
//# sourceMappingURL=ui-tag-stories-ReactTag-stories.ad37653c.iframe.bundle.js.map