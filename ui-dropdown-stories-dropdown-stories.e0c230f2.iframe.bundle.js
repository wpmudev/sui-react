"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[8771],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/ui/dropdown/stories/dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdown:()=>Dropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dropdown_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/dropdown/src/index.ts")),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p",a:"a"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Dropdown"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"Label*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The dropdown label"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSmall*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["If set to ",(0,jsx_runtime.jsx)(docs_src.EK,{isSmall:!0,children:" true "})," the dropdown menu will have a smaller width"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isLabelHidden*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["If set to ",(0,jsx_runtime.jsx)(docs_src.EK,{isSmall:!0,children:" true "})," the label won't be displayed"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isFixedHeight*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the dorpdown has a fixed height with a scroll bar for overflow or it adapts its height to the content.  "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"current*",tag:"number",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The current selected value "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content that goes inside the Dropdown "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"direction*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["Dropdown popover location: ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"left"})," or ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:" right"})," "]})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"buttonIcon*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The Drop down button icon name."}),(0,jsx_runtime.jsxs)("p",{children:[" You can check available icons on ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/wpmudev/sui-icons",target:"_blank",children:" sui-icon"})," package"]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"onMenuClick*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when an item is clicked, it has the following parameters in order: "}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"id"}),"The clicked element id"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"event"}),"The click event object"]})})]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"menu*",tag:"array",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsxs)("p",{children:["The menu items to be rendered, each item is an object that could be either a ",(0,jsx_runtime.jsx)("strong",{children:"Menu Group"})," or a ",(0,jsx_runtime.jsx)("strong",{children:"Menu Item"}),". "]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"Menu Item",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The menu Item object has the following properties "}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"id"})," a unique id for the item"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"label"}),"  represents the item title"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"props"})," An object representing the props of the ",(0,jsx_runtime.jsx)(_components.a,{href:"/docs/sui-components-core-menu--docs",target:"_blank",children:"Menu component"})," with the exception of ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:" children "})]})})]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"Menu Group",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The menu group object has the following properties "}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"id"})," a unique id for the group"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"label"})," represents the group title"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"menus"})," An array of menu items"]})})]})]})]})]})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const sampleCode=dedent_default()`
        <Dropdown
            label="Menu Button"
            menu={[
                {
                    id: "menu-0",
                    label: "Uptime Monitoring",
                      props: {
                        icon: "CheckAlt",
                    },
                },
                {
                    id: "menu-1",
                    label: "Site management tools",
                    props: {},
                },
                {
                    id: "menu-3",
                    label: "Notifications",
                    props: {
                        icon: "Bell"
                    },
                },
                {
                    id: "menu-2",
                    label: "Website Performance Optimization",
                    props: {},
                },
            ]}
        />
`,pluginVariationsMenuExample=dedent_default()`
        <Dropdown
            label="Menu Button"
            menu={[
                    {
                        id: "menu-beehive",
                        label: "Beehive",
                        props: {
                            icon: "PluginBeehive",
                            variation: "beehive",
                        },
                    },
                    {
                        id: "menu-branda",
                        label: "Branda",
                        props: {
                            icon: "PluginBranda",
                            variation: "branda",
                        },
                    },
                    {
                        id: "menu-defender",
                        label: "Defender",
                        props: {
                            icon: "PluginDefender",
                            variation: "defender",
                        },
                    },
                    {
                        id: "menu-forminator",
                        label: "Forminator",
                        props: {
                            icon: "PluginForminator",
                            variation: "forminator",
                        },
                    },
                    {
                        id: "menu-hummingbird",
                        label: "Hummingbird",
                        props: {
                            icon: "PluginHummingbird",
                            variation: "hummingbird",
                        },
                    },
                    {
                        id: "menu-hustle",
                        label: "Hustle",
                        props: {
                            icon: "PluginHustle",
                            variation: "hustle",
                        },
                    },
                    {
                        id: "menu-shipper",
                        label: "Shipper",
                        props: {
                            icon: "PluginShipper",
                            variation: "shipper",
                        },
                    },
                    {
                        id: "menu-smush",
                        label: "Smush",
                        props: {
                            icon: "PluginSmush",
                            variation: "smush",
                        },
                    },
                    {
                        id: "menu-smartcrawl",
                        label: "SmartCrawl",
                        props: {
                            icon: "PluginSmartCrawl",
                            variation: "smartcrawl",
                        },
                    },
                    {
                        id: "menu-ivt",
                        label: "IVT",
                        props: {
                            icon: "PluginIVT",
                            variation: "ivt",
                        },
                    },
                ]}
        />
`,groupedCode=dedent_default()`
        <Dropdown
            label="Menu Button"
            menu={
                [
                    {
                        id: "group-1",
                        label: "Extra Optimization",
                        menus: [
                                    {
                                        id: "menu-2",
                                        label: "Uptime Monitoring",
                                        props: {
                                            icon: "CheckAlt",
                                        },
                                    },
                                    {
                                        id: "menu-2",
                                        label: "Site management tools",
                                        props: {},
                                    },
                        ],
                    },
                    {
                        id: "group-2",
                        label: "Performance",
                        menus: [
                                    {
                                        id: "menu-2",
                                        label: "Uptime Monitoring",
                                        props: {},
                                    },
                                    {
                                        id: "menu-2",
                                        label: "Site management tools",
                                        props: {},
                                    },
                        ],
                    },
                ]
            }
        />
`,iconOnlyCode=dedent_default()`
        <Dropdown
            label="Menu Button"
            isLabelHidden={true}
            menu={[
                {
                    id: "menu-0",
                    label: "Uptime Monitoring",
                      props: {
                        icon: "CheckAlt",
                    },
                },
                {
                    id: "menu-1",
                    label: "Site management tools",
                    props: {},
                }
            ]}
        />
`,customContentCode=dedent_default()`
        <Dropdown
            label="Open"
        >
            <div
                style={{
                    padding: "8px 24px",
                }}
            >
                <h3>CUSTOM CONTENT</h3>
                <p>Epsom, a charming town nestled in the picturesque countryside, is renowned for its historic architecture, serene landscapes, and therapeutic mineral springs.</p>
            </div>
        </Dropdown>
`,smallCode=dedent_default()`
        <Dropdown
            isSmall={true}
            label="Open"
        >
            <div
                style={{
                    padding: "8px 24px",
                }}
            >
                <h3>CUSTOM CONTENT</h3>
                <p>Epsom, a charming town nestled in the picturesque countryside, is renowned for its historic architecture, serene landscapes, and therapeutic mineral springs.</p>
            </div>
        </Dropdown>
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"A basic example of Dropdown with a menu"}),(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.L,{label:"Menu Button",menu:[{id:"menu-0",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-1",label:"Site management tools",props:{}},{id:"menu-3",label:"Notifications",props:{icon:"Bell"}},{id:"menu-2",label:"Website Performance Optimization",props:{}}]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Menu items with plugin variations"}),(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.L,{label:"Menu Button",menu:[{id:"menu-beehive",label:"Beehive",props:{icon:"PluginBeehive",variation:"beehive"}},{id:"menu-branda",label:"Branda",props:{icon:"PluginBranda",variation:"branda"}},{id:"menu-defender",label:"Defender",props:{icon:"PluginDefender",variation:"defender"}},{id:"menu-forminator",label:"Forminator",props:{icon:"PluginForminator",variation:"forminator"}},{id:"menu-hummingbird",label:"Hummingbird",props:{icon:"PluginHummingbird",variation:"hummingbird"}},{id:"menu-hustle",label:"Hustle",props:{icon:"PluginHustle",variation:"hustle"}},{id:"menu-shipper",label:"Shipper",props:{icon:"PluginShipper",variation:"shipper"}},{id:"menu-smush",label:"Smush",props:{icon:"PluginSmush",variation:"smush"}},{id:"menu-smartcrawl",label:"SmartCrawl",props:{icon:"PluginSmartCrawl",variation:"smartcrawl"}},{id:"menu-ivt",label:"IVT",props:{icon:"PluginIVT",variation:"ivt"}}]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:pluginVariationsMenuExample})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Grouped menu items",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.L,{label:"Menu Button",menu:[{id:"group-1",label:"Extra Optimization",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-2",label:"Site management tools",props:{}}]},{id:"group-2",label:"Performance",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{}},{id:"menu-2",label:"Site management tools",props:{}}]}]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:groupedCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Icon Button",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.L,{label:"Menu Button",isLabelHidden:!0,menu:[{id:"menu-0",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-1",label:"Site management tools",props:{}}]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:iconOnlyCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Custom Content",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.L,{label:"Open",children:(0,jsx_runtime.jsxs)("div",{style:{padding:"8px 24px"},children:[(0,jsx_runtime.jsx)("h3",{children:"CUSTOM CONTENT"}),(0,jsx_runtime.jsx)("p",{children:"Epsom, a charming town nestled in the picturesque countryside, is renowned for its historic architecture, serene landscapes, and therapeutic mineral springs."})]})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:customContentCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Smaller Width",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.L,{label:"Open",isSmall:!0,children:(0,jsx_runtime.jsxs)("div",{style:{padding:"8px 24px"},children:[(0,jsx_runtime.jsx)("h3",{children:"CUSTOM CONTENT"}),(0,jsx_runtime.jsx)("p",{children:"Epsom, a charming town nestled in the picturesque countryside, is renowned for its historic architecture, serene landscapes, and therapeutic mineral springs."})]})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:smallCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()},anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.28a25dcb.svg",select_large_namespaceObject=__webpack_require__.p+"static/media/select-large.3902449f.svg",select_small_namespaceObject=__webpack_require__.p+"static/media/select-small.3b8ce481.svg",icon_menu_default_namespaceObject=__webpack_require__.p+"static/media/icon-menu-default.d1bc369f.svg",icon_menu_with_icons_namespaceObject=__webpack_require__.p+"static/media/icon-menu-with-icons.ee63207f.svg",menu_plugin_namespaceObject=__webpack_require__.p+"static/media/menu-plugin.4c92b763.svg",menu_template_namespaceObject=__webpack_require__.p+"static/media/menu-template.8b3cc6d2.svg",mobile_menu_plugin_namespaceObject=__webpack_require__.p+"static/media/mobile-menu-plugin.8027496e.svg",mobile_menu_template_namespaceObject=__webpack_require__.p+"static/media/mobile-menu-template.cc077d2f.svg";function TabUsage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,title:"Anatomy",children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Dropdown Anatomy"}),(0,jsx_runtime.jsx)("p",{style:{paddingTop:"20px"},children:(0,jsx_runtime.jsx)(_components.p,{children:"The dropdown should be activated by a trigger. It'll most likely be used to\nchoose alternatives in a form select type. It will, however, be utilized in\nbuttons to show as a menu list or choose alternatives."})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,title:"Variation",children:[(0,jsx_runtime.jsx)("h3",{children:"1. Select Dropdown"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A dropdown is used most commonly for select type in a form. Since the Select\ntype has large and small variations, the dropdown has the same size\nvariations for design consistency."})}),(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:select_large_namespaceObject,alt:"Dropdown Select Large"}),(0,jsx_runtime.jsx)("figcaption",{children:"Dropdown Size - Large"})]}),(0,jsx_runtime.jsxs)("figure",{style:{margin:0,paddingTop:"30px"},children:[(0,jsx_runtime.jsx)("img",{src:select_small_namespaceObject,alt:"Dropdown Select Small"}),(0,jsx_runtime.jsx)("figcaption",{children:"Dropdown Size - Small"})]}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:"20px"},children:"2. Icon Menu Drop Down"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:icon_menu_default_namespaceObject,alt:"Dropdown Icon Menu Default"}),(0,jsx_runtime.jsx)("figcaption",{children:"Icon menu dropdown - default"})]})}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:icon_menu_with_icons_namespaceObject,alt:"Dropdown Icon Menu With Icons"}),(0,jsx_runtime.jsx)("figcaption",{children:"Icon menu dropdown - with icons"})]})})]}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:"20px"},children:"3. Menu Dropdown"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:menu_plugin_namespaceObject,alt:"Dropdown Menu Plugin"}),(0,jsx_runtime.jsx)("figcaption",{children:"Menu dropdown - Plugin"})]})}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:menu_template_namespaceObject,alt:"Dropdown Menu Template"}),(0,jsx_runtime.jsx)("figcaption",{children:"Menu dropdown - Template"})]})})]}),(0,jsx_runtime.jsxs)(docs_src.X2,{style:{paddingTop:"20px"},children:[(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:mobile_menu_plugin_namespaceObject,alt:"Mobile Dropdown Menu Plugin"}),(0,jsx_runtime.jsx)("figcaption",{children:"Mobile Menu dropdown - Plugin"})]})}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsxs)("figure",{style:{margin:0},children:[(0,jsx_runtime.jsx)("img",{src:mobile_menu_template_namespaceObject,alt:"Mobile Dropdown Menu Template"}),(0,jsx_runtime.jsx)("figcaption",{children:"Mobile Menu dropdown - Template"})]})})]})]})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent(props)};function ReactDropdown_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Dropdown",subtitle:"A dropdown component is used to show a list of options for users to choose from.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactDropdown=function ReactDropdown_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactDropdown_createMdxContent,props)})):ReactDropdown_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const dropdown_stories={title:"SUI/Components/Advanced/Dropdown",component:src.L,parameters:{layout:"fullscreen",docs:{page:ReactDropdown}}},Dropdown=({color,...props})=>{const boxStyle={margin:0,padding:"30px",border:"white"===color?"1px solid #E6E6E6":0,borderRadius:"4px",background:"white"===color?"#333":"#fff"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:boxStyle,children:[(0,jsx_runtime.jsx)(src.L,{...props,menu:[{id:"plugin-variants",label:"Plugin Variations",menus:[{id:"menu-beehive",label:"Beehive",props:{icon:"PluginBeehive",variation:"beehive"}},{id:"menu-branda",label:"Branda",props:{icon:"PluginBranda",variation:"branda"}},{id:"menu-defender",label:"Defender",props:{icon:"PluginDefender",variation:"defender"}},{id:"menu-forminator",label:"Forminator",props:{icon:"PluginForminator",variation:"forminator"}},{id:"menu-hummingbird",label:"Hummingbird",props:{icon:"PluginHummingbird",variation:"hummingbird"}},{id:"menu-hustle",label:"Hustle",props:{icon:"PluginHustle",variation:"hustle"}},{id:"menu-shipper",label:"Shipper",props:{icon:"PluginShipper",variation:"shipper"}},{id:"menu-smush",label:"Smush",props:{icon:"PluginSmush",variation:"smush"}},{id:"menu-smartcrawl",label:"SmartCrawl",props:{icon:"PluginSmartCrawl",variation:"smartcrawl"}},{id:"menu-ivt",label:"IVT",props:{icon:"PluginIVT",variation:"ivt"}}]},{id:"group-2",label:"Web Services",menus:[{id:"domain",label:"DomainName Delight",props:{}},{id:"cms",label:"CMS Creation Platter",props:{}},{id:"hosting-hotspot",label:"Hosting Hotspot",props:{}},{id:"seo-smoothie",label:"SEO Smoothie",props:{}},{id:"code-compiler-combo",label:"Code Compiler Combo",props:{}}]}],children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 24px"},children:(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",icon:"package",color:"blue",isSmall:!0,isFullWidth:!0,children:"Unlock bonus features"})})}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(src.L,{...props,children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 24px"},children:"CUSTOM CONTENT ONLY"})})]})})})};Dropdown.args={label:"Menu Button",isSmall:!1,iconOnly:!1,onMenuClick:()=>{}},Dropdown.argTypes={isSmall:{name:"Small"},iconOnly:{name:"Icon Button"},onMenuClick:{name:"onMenuClick",type:Function}},Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:'({\n  color,\n  ...props\n}: {\n  color: string;\n}) => {\n  const boxStyle = {\n    margin: 0,\n    padding: "30px",\n    border: "white" === color ? "1px solid #E6E6E6" : 0,\n    borderRadius: "4px",\n    background: "white" === color ? "#333" : "#fff"\n  };\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={boxStyle}>\n                    <SuiDropdown {...props} menu={[{\n          id: "plugin-variants",\n          label: "Plugin Variations",\n          menus: [{\n            id: "menu-beehive",\n            label: "Beehive",\n            props: {\n              icon: "PluginBeehive",\n              variation: "beehive"\n            }\n          }, {\n            id: "menu-branda",\n            label: "Branda",\n            props: {\n              icon: "PluginBranda",\n              variation: "branda"\n            }\n          }, {\n            id: "menu-defender",\n            label: "Defender",\n            props: {\n              icon: "PluginDefender",\n              variation: "defender"\n            }\n          }, {\n            id: "menu-forminator",\n            label: "Forminator",\n            props: {\n              icon: "PluginForminator",\n              variation: "forminator"\n            }\n          }, {\n            id: "menu-hummingbird",\n            label: "Hummingbird",\n            props: {\n              icon: "PluginHummingbird",\n              variation: "hummingbird"\n            }\n          }, {\n            id: "menu-hustle",\n            label: "Hustle",\n            props: {\n              icon: "PluginHustle",\n              variation: "hustle"\n            }\n          }, {\n            id: "menu-shipper",\n            label: "Shipper",\n            props: {\n              icon: "PluginShipper",\n              variation: "shipper"\n            }\n          }, {\n            id: "menu-smush",\n            label: "Smush",\n            props: {\n              icon: "PluginSmush",\n              variation: "smush"\n            }\n          }, {\n            id: "menu-smartcrawl",\n            label: "SmartCrawl",\n            props: {\n              icon: "PluginSmartCrawl",\n              variation: "smartcrawl"\n            }\n          }, {\n            id: "menu-ivt",\n            label: "IVT",\n            props: {\n              icon: "PluginIVT",\n              variation: "ivt"\n            }\n          }]\n        }, {\n          id: "group-2",\n          label: "Web Services",\n          menus: [{\n            id: "domain",\n            label: "DomainName Delight",\n            props: {}\n          }, {\n            id: "cms",\n            label: "CMS Creation Platter",\n            props: {}\n          }, {\n            id: "hosting-hotspot",\n            label: "Hosting Hotspot",\n            props: {}\n          }, {\n            id: "seo-smoothie",\n            label: "SEO Smoothie",\n            props: {}\n          }, {\n            id: "code-compiler-combo",\n            label: "Code Compiler Combo",\n            props: {}\n          }]\n        }]}>\n                        <div style={{\n            display: "flex",\n            justifyContent: "center",\n            padding: "8px 24px"\n          }}>\n                            <Button appearance="primary" icon="package" color="blue" isSmall={true} isFullWidth={true}>\n                                Unlock bonus features\n                            </Button>\n                        </div>\n                    </SuiDropdown>\n                    <br />\n                    <SuiDropdown {...props}>\n                        <div style={{\n            display: "flex",\n            justifyContent: "center",\n            padding: "8px 24px"\n          }}>\n                            CUSTOM CONTENT ONLY\n                        </div>\n                    </SuiDropdown>\n                </div>\n            </div>\n        </div>;\n}',...Dropdown.parameters?.docs?.source}}};const __namedExportsOrder=["Dropdown"]},"./packages/ui/dropdown/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const DropdownMenu=({className="",children})=>{const classNames=(0,src.uY)("sui-dropdown__menu",{},className);return(0,jsx_runtime.jsx)("nav",{className:classNames,children})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const DropdownMenuItem=({icon,href,className="",children,isDisabled,onClick,variation="",...props})=>{const[isHovered,isFocused,methods]=(0,hooks_src.X2)({}),menuTitleId=`${`sui-dropdown-menu-item-${(0,react.useId)()}`}-title`;let TagName="li";href&&(TagName="a");const classNames=(0,src.uY)("sui-dropdown__menu-item",{hover:isHovered,focus:isFocused,disabled:isDisabled,[variation]:!(0,src.xb)(variation)},className);let IconTag=null;icon&&(IconTag=components.ZP[icon]);const attrs={className:classNames,href:href||void 0,tabIndex:isDisabled?-1:0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm",className:"sui-dropdown__menu-item-icon"}),(0,jsx_runtime.jsx)("span",{id:menuTitleId,children})]}),...props},btnAttr={};return onClick&&(btnAttr.role="button",btnAttr.onClick=onClick,btnAttr.onKeyDown=e=>(0,src.Jw)(e,onClick)),(0,jsx_runtime.jsx)(TagName,{...attrs,...methods,"aria-labelledby":menuTitleId,...btnAttr})},DropdownMenuGroup=({title="",className="",children,...props})=>{const attrs={className:(0,src.uY)("sui-dropdown__menu-group",{},className),...props};return(0,jsx_runtime.jsxs)("li",{...attrs,children:[(0,jsx_runtime.jsx)("span",{className:"sui-dropdown__menu-group-title",children:title}),(0,jsx_runtime.jsx)("ul",{className:"sui-dropdown__menu-group-items",children})]})},Dropdown=(0,react.forwardRef)((({label,className,isSmall,iconOnly,isFixedHeight=!0,current,children,menu,direction,buttonIcon,onMenuClick,trigger=null,renderContentOnTop,...props},ref)=>{const dropdownRef=(0,react.useRef)(null),id=`sui-dropdown-${(0,react.useId)()}`,[isOpen,setIsOpen]=(0,react.useState)(!1);(0,hooks_src.rw)(dropdownRef,(()=>{setIsOpen(!1)})),(0,react.useImperativeHandle)(ref,(()=>({open:()=>setIsOpen(!0),close:()=>setIsOpen(!1),toggle:()=>setIsOpen(!isOpen)})));const wrapperClasses=(0,src.uY)("sui-dropdown",{sm:isSmall,open:isOpen},className),renderMenus=menus=>(menus||[])?.map(((menuItem,index)=>menuItem.menus?(0,jsx_runtime.jsx)(DropdownMenuGroup,{title:menuItem.label,children:renderMenus(menuItem.menus)},index):(onMenuClick&&(menuItem.props.onClick=e=>onMenuClick(menuItem.id,e)),(0,jsx_runtime.jsx)(DropdownMenuItem,{...menuItem.props,children:menuItem.label},index))));return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:wrapperClasses,"data-testid":"dropdown",children:[trigger||(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.zx,{startIcon:buttonIcon??"menu",iconOnly:iconOnly??!1,color:"black",appearance:"secondary",isSmall:isSmall??!1,"aria-activedescendant":isOpen?`${id}-${current}`:"",onClick:()=>setIsOpen(!isOpen),...!iconOnly&&{endIcon:"chevron-down"},...props,children:label})}),(0,jsx_runtime.jsxs)("div",{id,tabIndex:-1,role:"listbox",className:(0,src.uY)("sui-dropdown__popover",{[`direction-${direction}`]:!(0,src.xb)(direction??""),"fixed-height":isFixedHeight}),...label&&{"aria-labelledby":`${id}__label`},children:[renderContentOnTop&&!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children}),!!menu&&(0,jsx_runtime.jsx)(DropdownMenu,{className:"sui-dropdown__menu-nav",children:renderMenus(menu)}),!!children&&!renderContentOnTop&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children})]})]})}));Dropdown.displayName="Dropdown"},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-dropdown-stories-dropdown-stories.e0c230f2.iframe.bundle.js.map