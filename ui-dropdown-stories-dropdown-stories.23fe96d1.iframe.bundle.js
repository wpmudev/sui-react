"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[6777],{"./packages/ui/dropdown/stories/dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dropdown:()=>Dropdown,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dropdown_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/dropdown/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__("./packages/ui/tooltip/stories/tabs/Examples/Types.mdx");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-dropdown"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"label",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"The dropdown label"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isSmall",type:"boolean",defaultValue:!1,children:(0,jsx_runtime.jsxs)("p",{children:["If set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:" true "})," the dropdown menu will have a smaller width"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isFixedHeight",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:"Whether the dorpdown has a fixed height with a scroll bar for overflow or it adapts its height to the content.  "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Additional content to appear in the dropdown"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"placement",type:"string",defaultValue:"right",children:(0,jsx_runtime.jsxs)("p",{children:["Dropdown popover location: ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"left"})," or ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:" right"})," "]})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"buttonIcon",type:"string",children:[(0,jsx_runtime.jsx)("p",{children:" The Drop down button icon name. "}),(0,jsx_runtime.jsxs)("p",{children:[" You can check available icons on ",(0,jsx_runtime.jsx)("a",{href:"https://github.com/wpmudev/sui-icons",target:"_blank",children:" sui-icon"})," package"]})]}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"trigger",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Custom trigger for the Dropdown"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"renderContentOnTop",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Render custom content on top of the menu items"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"iconOnly",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Indicates whether the label should be hidden or not."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"colorScheme",type:"string",children:(0,jsx_runtime.jsxs)("p",{children:["Indicates the color of the button, check ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"Button"})," component for allowed values "]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Custom classNames(s) for further styling"})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"onMenuClick",type:"function",children:[(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when an item is clicked, it has the following parameters in order: "}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"id"}),"The clicked element id"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"event"}),"The click event object"]})})]})]}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"type",type:"string",children:[(0,jsx_runtime.jsx)("p",{children:"Represents the type of the Dropdown"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed values"}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:"default"}),(0,jsx_runtime.jsx)("span",{label:"select"}),(0,jsx_runtime.jsx)("span",{label:"select-checkbox"}),(0,jsx_runtime.jsx)("span",{label:"select-variable"})]})]})]}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isResponsive",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"whther to hide the label of the button or not"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isFluid",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"true"})," the Dropdown will have a full width"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"closeOnOuterClick",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsxs)("p",{children:["Set this to ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"true"})," if you want the Dropdown to be closed onClick"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onToggle",type:"function",children:(0,jsx_runtime.jsx)("p",{children:" Detects when the Dropdown is toggled, the first parameter represents the state "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"allowSearch",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:" Whether to display the search field or not "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onSearch",type:"function",children:(0,jsx_runtime.jsx)("p",{children:" Callback function to be invoked on search "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isAsync",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:" Whether to display the search field or not "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"asyncOptions",type:"object",defaultValue:"{}",children:(0,jsx_runtime.jsxs)("p",{children:[" This prop represnt the settings of the async Dropdown, it has two properties: ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"perPage"}),", and ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"totlaItems"}),", both are numbers "]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"getOptions",type:"function",children:(0,jsx_runtime.jsx)("p",{children:" The function used to fetch the options "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"menuCustomWidth",type:"number",children:(0,jsx_runtime.jsx)("p",{children:" Width for the menu in pixels "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"searchPlaceholder",type:"string",children:(0,jsx_runtime.jsx)("p",{children:" Placeholder text for the search field "})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"menu",type:"array",children:[(0,jsx_runtime.jsxs)("p",{children:["The menu items to be rendered, each item is an object that could be either a ",(0,jsx_runtime.jsx)("strong",{children:"Menu Group"})," or a ",(0,jsx_runtime.jsx)("strong",{children:"Menu Item"}),". "]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:{content:"Menu Item*",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The menu Item object has the following properties "}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"id"})," a unique id for the item"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"label"}),"  represents the item title"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"props"})," An object that accepts the following properties"]})})]}),(0,jsx_runtime.jsx)(docs_src.wn,{style:{paddingTop:0,paddingLeft:40,paddingRight:0},children:(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"icon"})," The icon for the menu item"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"href"})," the link of the menu"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"className"})," Additional className(s) for further styling"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"children"})," The menu item content"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isDisabled"})," Set this to true for a disabled menu"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"onClick"})," A callback function to be invoked upong clicking the menu item"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"variation"})," represents the variation based on the plugin name, the values accepted are similar to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"type"})," prop in the [Setup Banner](https://wpmudev.github.io/sui-react/?path=/docs/sui-components-collections-setup-banner--docs) component"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"_style"}),"Inline styles for the menu item"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"_htmlProps"}),"object with any valid html attributes to pass"]})})]})})]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:{content:"Menu Group*",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The menu group object has the following properties "}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"id"})," a unique id for the group"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"label"})," represents the group title"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"menus"})," An array of menu items"]})})]})]})]})]}),"\n",(0,jsx_runtime.jsx)(docs_src.oW,{})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const AsyncDropdownCode=dedent_default()`
import { SelectBaseProps, Select } from "@wpmudev/sui-select"
import { FormField } from "@wpmudev/sui-form-field"

const AsyncSelect: React.FC<CustomSelectComponentProps> = ({}) => {
    
    const perPage = 10;

    return (
        <Dropdown
            type="select"
            isAsync={true}
            allowSearch={true}
            searchPlaceholder="Search..."
            asyncOptions={{
        	    perPage,
            }}
        	getOptions={async (
                search: string,
                { page }: any,
                prevLoadedItems = [],
        	) => {
                const skip = page * perPage - 10
                const items: any = []
                const baseAPI = "https://dummyjson.com/products/search"
                let total = 0

                await fetch(
                	baseAPI + "?limit=" + perPage + "&skip=" + skip + "&total=50&q=" + search,
                )
                .then((res) => res.json())
                .then((result) => {
                	total = result.total

                	result.products.forEach((item: any) => {
                        items.push({
                        	id: item?.id,
                        	label: item?.title,
                        	isSelected: false,
                        })
                	})
                })

                return {
                	items,
                	hasMore: [...items, ...prevLoadedItems].length < 100,
                }
        	}}
        />
    )
} 
`,AsyncDropdown=({})=>(0,jsx_runtime.jsx)(src.m,{type:"select",isAsync:!0,label:"Async Options",allowSearch:!0,searchPlaceholder:"Search...",asyncOptions:{perPage:10},getOptions:async(search,{page},prevLoadedItems=[])=>{const skip=10*page-10,items=[];let total=0;return await fetch(`https://dummyjson.com/products/search?limit=10&skip=${skip}&total=50&q=${search}`).then((res=>res.json())).then((result=>{total=result.total,result.products.forEach((item=>{items.push({id:item?.id,label:item?.title,isSelected:!1})}))})),{items,hasMore:[...items,...prevLoadedItems].length<100}}});__webpack_require__("./packages/ui/button/src/index.ts");const sampleCode=dedent_default()`
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
                            icon: "PluginSmartcrawl",
                            variation: "smartcrawl",
                        },
                    },
                    {
                        id: "menu-ivt",
                        label: "IVT",
                        props: {
                            icon: "PluginIvt",
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
            iconOnly={true}
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
`;dedent_default()`
       <Dropdown
            type="select-variable"
			menu={[
                {
                    id: "view-form",
                    label: "View form",
                    props: {
                        variable: "{tag}",
                        description: "Short description",
                    },
                },
                {
                    id: "edit-form",
                    label: "Edit form",
                    props: {
                        variable: "{tag}",
                        description: "Short description",
                    },
                },
                {
                    id: "duplicate-form",
                    label: "Duplicate form",
                    props: {
                        variable: "{tag}",
                        description: "Short description",
                    },
                },
                {
                    id: "delete-form",
                    label: "Delete form",
                    props: {
                        variable: "{tag}",
                        description: "Short description",
                    },
                },
            ]}
        />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"A basic example of Dropdown with a menu"}),(0,jsx_runtime.jsx)("div",{class:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{label:"Menu Button",menu:[{id:"menu-0",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-1",label:"Site management tools",props:{}},{id:"menu-3",label:"Notifications",props:{icon:"Bell"}},{id:"menu-2",label:"Website Performance Optimization",props:{}}]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Menu items with plugin variations"}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{label:"Menu Button",menu:[{id:"menu-beehive",label:"Beehive",props:{icon:"PluginBeehive",variation:"beehive"}},{id:"menu-branda",label:"Branda",props:{icon:"PluginBranda",variation:"branda"}},{id:"menu-defender",label:"Defender",props:{icon:"PluginDefender",variation:"defender"}},{id:"menu-forminator",label:"Forminator",props:{icon:"PluginForminator",variation:"forminator"}},{id:"menu-hummingbird",label:"Hummingbird",props:{icon:"PluginHummingbird",variation:"hummingbird"}},{id:"menu-hustle",label:"Hustle",props:{icon:"PluginHustle",variation:"hustle"}},{id:"menu-shipper",label:"Shipper",props:{icon:"PluginShipper",variation:"shipper"}},{id:"menu-smush",label:"Smush",props:{icon:"PluginSmush",variation:"smush"}},{id:"menu-smartcrawl",label:"SmartCrawl",props:{icon:"PluginSmartcrawl",variation:"smartcrawl"}},{id:"menu-ivt",label:"IVT",props:{icon:"PluginIvt",variation:"ivt"}}]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:pluginVariationsMenuExample})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Grouped menu items",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{label:"Menu Button",menu:[{id:"group-1",label:"Extra Optimization",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-2",label:"Site management tools",props:{}}]},{id:"group-2",label:"Performance",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{}},{id:"menu-2",label:"Site management tools",props:{}}]}]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:groupedCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Select Variables",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{type:"select-variable",menu:[{id:"view-form",label:"View form",props:{variable:"{tag}",description:"Short description"}},{id:"edit-form",label:"Edit form",props:{variable:"{tag}",description:"Short description"}},{id:"duplicate-form",label:"Duplicate form",props:{variable:"{tag}",description:"Short description"}},{id:"delete-form",label:"Delete form",props:{variable:"{tag}",description:"Short description"}}]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:AsyncDropdownCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Async Options",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(AsyncDropdown,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:AsyncDropdownCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Icon Button",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{label:"Menu Button",iconOnly:!0,isLabelHidden:!0,menu:[{id:"menu-0",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-1",label:"Site management tools",props:{}}]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:iconOnlyCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Custom Content",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{label:"Open",children:(0,jsx_runtime.jsxs)("div",{style:{padding:"8px 24px"},children:[(0,jsx_runtime.jsx)("h3",{children:"CUSTOM CONTENT"}),(0,jsx_runtime.jsx)("p",{children:"Epsom, a charming town nestled in the picturesque countryside"})]})})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:customContentCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Smaller Size",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(src.m,{label:"Open",isSmall:!0,children:(0,jsx_runtime.jsxs)("div",{style:{padding:"8px 24px"},children:[(0,jsx_runtime.jsx)("h3",{children:"CUSTOM CONTENT"}),(0,jsx_runtime.jsx)("p",{children:"Epsom, a charming town nestled in the picturesque countryside"})]})})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:smallCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()},anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.1e929574.svg",drop_down_types_namespaceObject=__webpack_require__.p+"static/media/drop-down-types.fce3b0ee.svg",item_state_select_namespaceObject=__webpack_require__.p+"static/media/item-state-select.ced7e760.svg",item_state_dropdown_namespaceObject=__webpack_require__.p+"static/media/item-state-dropdown.310a9ace.svg",unlock_pro_namespaceObject=__webpack_require__.p+"static/media/unlock-pro.3ccea7d2.svg",icon_support_namespaceObject=__webpack_require__.p+"static/media/icon-support.08a2efa7.svg",max_height_namespaceObject=__webpack_require__.p+"static/media/max-height.9f3c224d.svg",loading_namespaceObject=__webpack_require__.p+"static/media/loading.cf8834d7.svg",grouped_option_namespaceObject=__webpack_require__.p+"static/media/grouped-option.6f31079a.svg",more_examples_namespaceObject=__webpack_require__.p+"static/media/more-examples.0d2e57ad.svg",pro_variations_default_namespaceObject=__webpack_require__.p+"static/media/pro-variations-default.dc9ff55c.svg",pro_variations_hover_namespaceObject=__webpack_require__.p+"static/media/pro-variations-hover.a9816d8b.svg";function TabUsage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.wn,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.fI,{children:[(0,jsx_runtime.jsxs)(docs_src.fv,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Dropdown wrapper"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A wrapper where dropdown options are displayed."})}),(0,jsx_runtime.jsx)("h3",{children:"2. Dropdown option"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Dropdown options that are available for selections, actions or navigations."})})]}),(0,jsx_runtime.jsx)(docs_src.fv,{children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Dropdown Anatomy"})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Dropdown Types",children:(0,jsx_runtime.jsx)("img",{src:drop_down_types_namespaceObject,alt:"Dropdown Types"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Dropdown Item States",children:[(0,jsx_runtime.jsx)("img",{src:item_state_select_namespaceObject,alt:"Dropdown Item State Select"}),(0,jsx_runtime.jsx)("img",{src:item_state_dropdown_namespaceObject,alt:"Dropdown Item State Dropdown",style:{marginTop:20}})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Unlock Pro Dropdown item",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["The Unlock Pro dropdown item was designed for subtle upsells for free users.\nIt appears in the navigation's dropdown menu only. Based on the brand's primary or secondary colour, each dropdown menu comes with the unique color style.\nCheck out all the plugin drop down design examples in ",(0,jsx_runtime.jsx)("a",{href:"#unlock-pro-variations",target:"_blank",children:"this section."})]})}),(0,jsx_runtime.jsx)("img",{src:unlock_pro_namespaceObject,alt:"Dropdown Unlock Pro"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Icon Support",children:(0,jsx_runtime.jsx)("img",{src:icon_support_namespaceObject,alt:"Dropdown Icon Support"})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Dropdown max-height",children:(0,jsx_runtime.jsx)("img",{src:max_height_namespaceObject,alt:"Dropdown Max Height"})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Loading",children:(0,jsx_runtime.jsx)("img",{src:loading_namespaceObject,alt:"Dropdown Loading"})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Grouped option",children:(0,jsx_runtime.jsx)("img",{src:grouped_option_namespaceObject,alt:"Dropdown Grouped option"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"More examples",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Dropdown items are highly customizable to accommodate a variety of content types and user interactions. You can easily modify dropdown items to include:"})}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"Input Selects"}),": Allow users to input or select options directly within the dropdown menu."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"Dropdown Menus"}),": Incorporate nested menus or sub-menus to organize and present hierarchical content."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"Avatars"}),": Display user avatars or profile pictures alongside item labels for personalized interactions."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"Other Select Options"}),": Integrate any other selectable elements or custom components tailored to your specific application needs."]})})]}),(0,jsx_runtime.jsx)("img",{src:more_examples_namespaceObject,alt:"Dropdown Grouped option"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Unlock Pro Variations",id:"unlock-pro-variations",children:[(0,jsx_runtime.jsx)("h3",{children:"Free account / Default"}),(0,jsx_runtime.jsx)(docs_src._V,{src:pro_variations_default_namespaceObject,alt:"Dropdown Unlock Pro Variations Default",xScrollable:!0}),(0,jsx_runtime.jsx)("h3",{children:"Free account / Hover"}),(0,jsx_runtime.jsx)(docs_src._V,{src:pro_variations_hover_namespaceObject,alt:"Dropdown Unlock Pro Variations Hover",xScrollable:!0})]})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent(props)};function ReactDropdown_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Dropdown",subtitle:"Dropdown provide a list of menus or options for users. \n\t\t\t\t   They can represent values in forms or be used for actions like filtering or sorting content.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactDropdown=function ReactDropdown_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactDropdown_createMdxContent,props)})):ReactDropdown_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const dropdown_stories={title:"SUI/Components/Advanced/Dropdown",component:src.m,parameters:{layout:"fullscreen",docs:{page:ReactDropdown}}},menuOptions=[{id:"menu-beehive",label:"Beehive",props:{href:"#",icon:"PluginBeehive",variation:"beehive"}},{id:"menu-branda",label:"Branda",props:{icon:"PluginBranda",variation:"branda"}},{id:"menu-defender",label:"Defender",props:{icon:"PluginDefender",variation:"defender"}},{id:"menu-forminator",label:"Forminator",props:{icon:"PluginForminator",variation:"forminator"}},{id:"menu-hummingbird",label:"Hummingbird",props:{icon:"PluginHummingbird",variation:"hummingbird"}},{id:"menu-hustle",label:"Hustle",props:{icon:"PluginHustle",variation:"hustle"}},{id:"menu-shipper",label:"Shipper",props:{icon:"PluginShipper",variation:"shipper"}},{id:"menu-smush",label:"Smush",props:{icon:"PluginSmush",variation:"smush"}},{id:"menu-smartcrawl",label:"SmartCrawl",props:{icon:"PluginSmartcrawl",variation:"smartcrawl"}},{id:"menu-ivt",label:"IVT",props:{icon:"PluginIvt",variation:"ivt"}}],Dropdown=({example,color,...props})=>{const boxStyle={display:"flex",gap:"8px",margin:0,padding:"30px",border:"white"===color?"1px solid #E6E6E6":0,borderRadius:"4px",background:"white"===color?"#333":"#fff"},[checkedItems,setCheckedItems]=(0,react.useState)([]),[optionsAPILimit,setOptionsAPILimit]=(0,react.useState)(0);return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:boxStyle,children:["select-checkbox"===example&&(0,jsx_runtime.jsx)(src.m,{...props,isAsync:!1,onMenuClick:(menuId,e)=>{const checkedList=[...checkedItems];checkedList.indexOf(menuId)>-1?checkedList.splice(checkedItems.indexOf(menuId),1):checkedList.push(menuId),setCheckedItems(checkedList)},type:"select-checkbox",menu:[{id:"view-form",label:"View form",props:{_checkboxProps:{isChecked:checkedItems.indexOf("view-form")>-1}}},{id:"edit-form",label:"Edit form",props:{_checkboxProps:{isChecked:checkedItems.indexOf("edit-form")>-1}}},{id:"duplicate-form",label:"Duplicate form",props:{_checkboxProps:{isChecked:checkedItems.indexOf("duplicate-form")>-1}}},{id:"delete-form",label:"Delete form",props:{variation:"danger",icon:"Trash",isDisabled:!0}}]}),"async"===example&&(0,jsx_runtime.jsx)(src.m,{...props,type:"select",isAsync:!0,asyncOptions:{perPage:20,totalItems:optionsAPILimit},getOptions:async(search,{page},prevLoadedItems=[])=>{const skip=20*page-10,items=[];let total=0;return await fetch(`https://dummyjson.com/products/search?limit=20&skip=${skip}&total=50&q=${search}`).then((res=>res.json())).then((result=>{total=result.total,result.products.forEach((item=>{items.push({id:item?.id,label:item?.title,isSelected:!1})}))})),{items,hasMore:[...items,...prevLoadedItems].length<100}}}),"select-variable"===example&&(0,jsx_runtime.jsx)(src.m,{...props,type:"select-variable",menu:[{id:"view-form",label:"View form",props:{variable:"{tag}",description:"Short description"}},{id:"edit-form",label:"Edit form",props:{variable:"{tag}",description:"Short description"}},{id:"duplicate-form",label:"Duplicate form",props:{variable:"{tag}",description:"Short description"}},{id:"delete-form",label:"Delete form",props:{variable:"{tag}",description:"Short description"}}],onSearch:string=>{}}),"custom"===example&&(0,jsx_runtime.jsx)(src.m,{menuCustomWidth:280,...props,children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",padding:"8px 16px"},children:[(0,jsx_runtime.jsx)("h3",{children:"CUSTOM CONTENT"}),(0,jsx_runtime.jsx)("p",{children:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa aliquid beatae atque veritatis itaque placeat illum nemo eaque explicabo obcaecati qui, voluptas, possimus unde, quis magni quaerat? Unde, facilis voluptatem!"})]})}),"pro"===example&&(0,jsx_runtime.jsx)(src.m,{menu:menuOptions,...props})]})})})};Dropdown.args={example:"pro",label:"Menu Button",isSmall:!1,isFixedHeight:!0,iconOnly:!1,renderContentOnTop:!1,placement:"right",buttonIcon:"Menu",allowSearch:!0,closeOnOuterClick:!0,isAsync:!1,onMenuClick:()=>{}},Dropdown.argTypes={example:{name:"Type",options:["select-checkbox","async","select-variable","pro","custom"],control:{type:"select",labels:{pro:"Example: Pro Menu",icon:"Example: Icon Only",custom:"Example: Custom Content"}}},label:{name:"Label",control:"text"},isSmall:{name:"Small",control:"boolean"},isFixedHeight:{name:"Fixed Height",control:"boolean"},renderContentOnTop:{name:"Render content on top",control:"boolean"},iconOnly:{name:"Icon Button",control:"boolean"},buttonIcon:{name:"Icon",options:components.iT,control:"select"},placement:{name:"Placement",options:["left","right"],control:{type:"select",labels:{left:"Left",right:"Right"}}},isFluid:{name:"Full width",control:"boolean"},allowSearch:{name:"Search",control:"boolean"},onMenuClick:{name:"onClick",type:Function},closeOnOuterClick:{name:"Close (Outer click)",control:"boolean"},isAsync:{table:{disable:!0}},isResponsive:{table:{disable:!0}},_htmlProps:{table:{disable:!0}},_style:{table:{disable:!0}},type:{table:{disable:!0}},colorScheme:{table:{disable:!0}},asyncOptions:{table:{disable:!0}}},Dropdown.parameters={...Dropdown.parameters,docs:{...Dropdown.parameters?.docs,source:{originalSource:'({\n  example,\n  color,\n  ...props\n}: {\n  example: string;\n  color: string;\n}) => {\n  const boxStyle = {\n    display: "flex",\n    gap: "8px",\n    margin: 0,\n    padding: "30px",\n    border: "white" === color ? "1px solid #E6E6E6" : 0,\n    borderRadius: "4px",\n    background: "white" === color ? "#333" : "#fff"\n  };\n  const [checkedItems, setCheckedItems] = useState<Array<string | number>>([]);\n  const [optionsAPILimit, setOptionsAPILimit] = useState(0);\n  const perPage = 20;\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={boxStyle}>\n                    {"select-checkbox" === example && <SuiDropdown {...props} isAsync={false} onMenuClick={(menuId, e) => {\n          const checkedList = [...checkedItems];\n          if (checkedList.indexOf((menuId as string)) > -1) {\n            checkedList.splice(checkedItems.indexOf((menuId as string)), 1);\n          } else {\n            checkedList.push((menuId as string));\n          }\n          setCheckedItems((checkedList as []));\n        }} type="select-checkbox" menu={[{\n          id: "view-form",\n          label: "View form",\n          props: {\n            _checkboxProps: {\n              isChecked: checkedItems.indexOf("view-form") > -1\n            }\n          }\n        }, {\n          id: "edit-form",\n          label: "Edit form",\n          props: {\n            _checkboxProps: {\n              isChecked: checkedItems.indexOf("edit-form") > -1\n            }\n          }\n        }, {\n          id: "duplicate-form",\n          label: "Duplicate form",\n          props: {\n            _checkboxProps: {\n              isChecked: checkedItems.indexOf("duplicate-form") > -1\n            }\n          }\n        }, {\n          id: "delete-form",\n          label: "Delete form",\n          props: {\n            variation: "danger",\n            icon: "Trash",\n            isDisabled: true\n          }\n        }]} />}\n                    {"async" === example && <SuiDropdown {...props} type="select" isAsync={true} asyncOptions={{\n          perPage,\n          totalItems: optionsAPILimit\n        }} getOptions={async (search: string, {\n          page\n        }: any, prevLoadedItems = []) => {\n          // calculate how many items to skip\n          const skip = page * perPage - 10;\n          // store all menu items here\n          const items: any = [];\n          const baseAPI = `https://dummyjson.com/products/search`;\n          let total = 0;\n\n          // fetch data from API\n          await fetch(`${baseAPI}?limit=${perPage}&skip=${skip}&total=50&q=${search}`).then(res => res.json()).then(result => {\n            total = result.total;\n            result.products.forEach((item: any) => {\n              items.push({\n                id: item?.id,\n                label: item?.title,\n                isSelected: false\n              });\n            });\n          });\n          return {\n            items,\n            hasMore: [...items, ...prevLoadedItems].length < 100\n          };\n        }} />}\n                    {"select-variable" === example && <SuiDropdown {...props} type="select-variable" menu={[{\n          id: "view-form",\n          label: "View form",\n          props: {\n            variable: "{tag}",\n            description: "Short description"\n          }\n        }, {\n          id: "edit-form",\n          label: "Edit form",\n          props: {\n            variable: "{tag}",\n            description: "Short description"\n          }\n        }, {\n          id: "duplicate-form",\n          label: "Duplicate form",\n          props: {\n            variable: "{tag}",\n            description: "Short description"\n          }\n        }, {\n          id: "delete-form",\n          label: "Delete form",\n          props: {\n            variable: "{tag}",\n            description: "Short description"\n          }\n        }]} onSearch={string => {\n          // console.log("search", string)\n        }} />}\n                    {"custom" === example && <SuiDropdown menuCustomWidth={280} {...props}>\n                            <div style={{\n            display: "flex",\n            justifyContent: "center",\n            flexDirection: "column",\n            padding: "8px 16px"\n          }}>\n                                <h3>CUSTOM CONTENT</h3>\n                                <p>\n                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa\n                                    aliquid beatae atque veritatis itaque placeat illum nemo eaque\n                                    explicabo obcaecati qui, voluptas, possimus unde, quis magni\n                                    quaerat? Unde, facilis voluptatem!\n                                </p>\n                            </div>\n                        </SuiDropdown>}\n                    {"pro" === example && <SuiDropdown menu={menuOptions} {...props} />}\n                </div>\n            </div>\n        </div>;\n}',...Dropdown.parameters?.docs?.source}}};const __namedExportsOrder=["Dropdown"]},"./packages/ui/tooltip/stories/tabs/Examples/Types.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_govind_Development_SUI_Development_sui_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/docs/src/index.ts"),_src__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/tooltip/src/index.ts"),dedent__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(dedent__WEBPACK_IMPORTED_MODULE_4__);const textCode=dedent__WEBPACK_IMPORTED_MODULE_4___default()`
  <Tooltip label="Text" type="text" >Tooltip Text</Tooltip>
`,buttonCode=dedent__WEBPACK_IMPORTED_MODULE_4___default()`
  <Tooltip
      label="Button"
      type="button"
      buttonProps={{ type: "primary", colorScheme: "black" }}
  >
        Tooltip Text
  </Tooltip>
`,iconCode=dedent__WEBPACK_IMPORTED_MODULE_4___default()`
  <Tooltip type="icon" name="logo">Tooltip Text</Tooltip>
`;function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.wn,{title:"Text",contained:!0,style:{padding:"30px 0px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.lN,{wrapper:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.m,{label:"Text",type:"text",children:"Tooltip Text"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YK,{language:"js",children:textCode})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.wn,{title:"Button",contained:!0,style:{padding:"30px 0px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.lN,{wrapper:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.m,{label:"Button",type:"button",buttonProps:{type:"primary",colorScheme:"black"},children:"Tooltip Text"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YK,{language:"js",children:buttonCode})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.wn,{title:"Icon",contained:!0,style:{padding:"30px 0px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.lN,{wrapper:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{padding:40},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src__WEBPACK_IMPORTED_MODULE_3__.m,{type:"icon",name:"logo",children:"Tooltip Text"})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YK,{language:"js",children:iconCode})]})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_govind_Development_SUI_Development_sui_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-dropdown-stories-dropdown-stories.23fe96d1.iframe.bundle.js.map