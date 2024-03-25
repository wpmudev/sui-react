"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[7965],{"./packages/ui/sidebar/stories/sidebar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Sidebar:()=>sidebar_stories_Sidebar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sidebar_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/tag/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Sidebar=({className,children,_htmlProps={},_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,utils_src.n0)("sui-sidebar",{},suiInlineClassname);return children=(0,hooks_src.Q8)(children,"{sidebar children content}"),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"sidebar",...(0,utils_src.X5)(_htmlProps),children})};var button_src=__webpack_require__("./packages/ui/button/src/index.ts");const SidebarDropdown=(0,react.forwardRef)((({className,selectedItemName="",children,_htmlProps,_style={},buttonProps={}},ref)=>{const dropdownRef=(0,react.useRef)(null),id=`sui-dropdown-${(0,react.useId)()}`,[isOpen,setIsOpen]=(0,react.useState)(!1);(0,hooks_src.xk)(dropdownRef,(()=>{setIsOpen(!1)})),(0,react.useImperativeHandle)(ref,(()=>({open:()=>setIsOpen(!0),close:()=>setIsOpen(!1),toggle:()=>setIsOpen(!isOpen)})));const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,utils_src.n0)("sui-sidebar__dropdown",{},suiInlineClassname),childrenWithProps=react.Children.map(children,(child=>{if(react.isValidElement(child)){const existingOnClick=child?.props?.onClick,newOnClick=e=>{existingOnClick&&existingOnClick(e),setIsOpen(!1)};return react.cloneElement(child,{onClick:newOnClick})}return child}));return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:classNames,...(0,utils_src.X5)(_htmlProps),children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.$,{id:`${id}__label`,className:"sui-sidebar__dropdown--button",onClick:()=>setIsOpen(!isOpen),endIcon:"Hamburger",isFullWidth:!0,...buttonProps,children:selectedItemName})}),isOpen&&(0,jsx_runtime.jsx)("div",{id,tabIndex:-1,role:"listbox",className:"sui-sidebar__dropdown--list","aria-labelledby":`${id}__label`,children:childrenWithProps})]})}));SidebarDropdown.displayName="Sidebar Dropdown",SidebarDropdown.__docgenInfo={description:"",methods:[],displayName:"Sidebar Dropdown",props:{selectedItemName:{defaultValue:{value:'""',computed:!1},required:!1},_style:{defaultValue:{value:"{}",computed:!1},required:!1},buttonProps:{defaultValue:{value:"{}",computed:!1},required:!1}}};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const SidebarItem=({url="#",icon,title="Sidebar Item",className,action,isActive=!1,isDisabled=!1,onClick=()=>{},_htmlProps={},_style={}})=>{const[isHovered,isFocused,methods]=(0,hooks_src.Mj)({}),{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,utils_src.n0)("sui-sidebar__item",{hover:isHovered&&!isFocused&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,active:isActive},suiInlineClassname);let IconTag=null;icon&&(IconTag=components.Ay[icon]);const onClickCallback=(0,react.useCallback)((e=>{e?.preventDefault(),onClick&&onClick(e)}),[onClick]);return(0,jsx_runtime.jsxs)("a",{className:classNames,href:url,tabIndex:isDisabled?-1:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.f$)(e,onClickCallback),"data-testid":"sidebar-item",...methods,...(0,utils_src.X5)(_htmlProps),children:[(0,jsx_runtime.jsxs)("div",{className:"sui-sidebar__item-info",children:[IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm",colorScheme:isHovered&&!isFocused||isActive?"informative":""}),(0,jsx_runtime.jsx)("span",{children:title})]}),!!action&&(0,jsx_runtime.jsx)("div",{className:"sui-sidebar__item-action",children:action})]})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.93b52539.svg",sidebar_variations_namespaceObject=__webpack_require__.p+"static/media/sidebar-variations.347700fd.svg",sidebar_spacing_namespaceObject=__webpack_require__.p+"static/media/sidebar-spacing.6040381f.svg",navigation_item_namespaceObject=__webpack_require__.p+"static/media/navigation-item.edc49b8f.svg",responsive_namespaceObject=__webpack_require__.p+"static/media/responsive.45ba133c.png";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Sidebar Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"1. Sidebar"}),(0,jsx_runtime.jsx)("h3",{children:"2. Navigation item"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"1. Sidebar",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Based on the design needs and requirements, the sidebar can have a variation\non the appearance or behaviour."})}),(0,jsx_runtime.jsx)("img",{src:sidebar_variations_namespaceObject,alt:"Sidebar Variations",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"Sidebar Spacing"}),(0,jsx_runtime.jsx)("img",{src:sidebar_spacing_namespaceObject,alt:"Sidebar Spacing",style:{marginBottom:20}})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"2. Navigation item",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Navigation item helps users to quickly find and access different sections or\npages, enhancing usability and efficiency."})}),(0,jsx_runtime.jsx)("img",{src:navigation_item_namespaceObject,alt:"Navigation Item",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"Responsive"}),(0,jsx_runtime.jsx)("img",{src:responsive_namespaceObject,alt:"Navigation Item",style:{marginBottom:20}})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-sidebar"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"The content of the Sidebar component "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Custom css className(s) "})})]}),"\n","\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Sub Components",contained:!0,style:{paddingTop:30,paddingBottom:0},children:[(0,jsx_runtime.jsx)("p",{children:"The Sidebar component offers a collection of nested subcomponents to be utilized within it. These subcomponents include:"}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"SidebarItem",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"SidebarItem"})," component represents a single item in the Sidebar, you can add as many items as needed"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"url",type:"string",defaultValue:"#",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The url associated with the SidebarItem"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"icon",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"An optional icon to be displayed within the SidebarItem"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"title",type:"string",defaultValue:"Sidebar Item",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The title or the text of the item"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isActive",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Whether the sidebar item is active or not"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"action",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"An optional action component to be displayed alongside the title in the SidebarItem."})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," the item will be disabled."]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onClick",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be invoked when the item is clicked"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Custom css className(s)"})})})]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"SidebarDropdown",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["This's the Sidebar dropdown menu that appear on mobile, This component could have multiple instances of the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"SidebarItem"})," component to be displayed on mobile only"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)("p",{children:" The content of the Dropdown "})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Custom css className(s)"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"selectedItemName",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The currently selected item title ( use the same title prop passed to SidebarItem)"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"buttonProps",type:"object",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["An object representing ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/sui-components-core-button--docs",target:"_blank",children:"the button props"}),",\nto be passed to the dropdown button."]})})})]})]}),"\n",(0,jsx_runtime.jsx)(docs_src.oW,{})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var box_src=__webpack_require__("./packages/ui/box/src/index.ts"),grid_src=__webpack_require__("./packages/ui/grid/src/index.ts"),dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js");const GeneralSidebarCode=__webpack_require__.n(dedent)()`

import React, { useState } from "react"
import { Sidebar, SidebarItem } from "@wpmudev/sui-sidebar"
import { BoxGroup } from "@wpmudev/sui-box"
import { Col, Row } from "@wpmudev/sui-grid"
import { Tag } from "@wpmudev/sui-tag"

const tag = (
    <Tag colorScheme="black" design="outlined" isSmall={true}>
       PRO
    </Tag>
)

const items = [
    { title: "General", url: "#", icon: "Settings" },
    { title: "Integrations", url: "#", icon: "Link" },
    { title: "Configs", icon: "Bell", url: "#", action: tag },
    {
        title: "Data",
        url: "#",
        icon: "Bell",
        isDisabled: true,
        action: tag,
	},
]

export const BasicSidebar = () => {
    const [selectedItem, setSelectedItem] = useState("Integrations")

    return (
        <BoxGroup>
            <Row align={{ md: "inline" }}>
                <Col size="3">
                    <Sidebar>
                       {items.map(({ title, url, icon, isDisabled, action }) => (
                           <SidebarItem
                               key={title}
                               title={title}
                               action={action}
                               url={url}
                               icon={icon}
                               isDisabled={isDisabled}
                               onClick={() => setSelectedItem(title)}
                           />
                        ))}
                    </Sidebar>
                    <SidebarDropdown selectedItemName={selectedItem}>
                        {items.map(({ title, url, icon, isDisabled, action }) => (
                            <SidebarItem
                                key={title}
                                title={title}
                                action={action}
                                url={url}
                                icon={icon}
                                isDisabled={isDisabled}
                                onClick={() => setSelectedItem(title)}
                            />
                        ))}
                    </SidebarDropdown>
                </Col>
                <Col
                    size="9"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                     {selectedItem}
                </Col>
            </Row>
       </BoxGroup>
    )
}
`,tag=(0,jsx_runtime.jsx)(src.v,{colorScheme:"black",design:"outlined",isSmall:!0,children:"PRO"}),items=[{title:"General",url:"#",icon:"Settings"},{title:"Integrations",url:"#",icon:"Link"},{title:"Configs",icon:"Bell",url:"#",action:tag},{title:"Data",url:"#",icon:"Bell",isDisabled:!0,action:tag}],BasicSidebar=()=>{const[selectedItem,setSelectedItem]=(0,react.useState)("Integrations");return(0,jsx_runtime.jsx)(box_src.V,{children:(0,jsx_runtime.jsxs)(grid_src.y,{align:{md:"inline"},children:[(0,jsx_runtime.jsxs)(grid_src.f,{size:"3",children:[(0,jsx_runtime.jsx)(Sidebar,{children:items.map((({title,url,icon,isDisabled,action})=>(0,jsx_runtime.jsx)(SidebarItem,{title,action,url,icon,isDisabled,onClick:()=>setSelectedItem(title)},title)))}),(0,jsx_runtime.jsx)(SidebarDropdown,{selectedItemName:selectedItem,children:items.map((({title,url,icon,isDisabled,action})=>(0,jsx_runtime.jsx)(SidebarItem,{title,action,url,icon,isDisabled,onClick:()=>setSelectedItem(title)},title)))})]}),(0,jsx_runtime.jsx)(grid_src.f,{size:"9",children:selectedItem})]})})};function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This is a general Sidebar component with all possible variations for the\nitems, you can customize the items to fit your needs."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The Sidebar also displays a dropdown on mobile, it has the same menu items\nthat are displayed in desktop."})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(BasicSidebar,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:GeneralSidebarCode})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function Sidebar_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Sidebar",subtitle:"A sidebar is a group of navigation, typically a vertical column positioned on one side of the main content area.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const sidebar_stories={title:"SUI/Components/Advanced/Sidebar",component:Sidebar,parameters:{layout:"fullscreen",docs:{page:function Sidebar_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Sidebar_createMdxContent,props)})):Sidebar_createMdxContent()}}}},sidebar_stories_tag=(0,jsx_runtime.jsx)(src.v,{colorScheme:"black",design:"outlined",isSmall:!0,children:"PRO"}),sidebar_stories_items=[{title:"General",url:"#",icon:"Settings",hasAction:!1},{title:"Integrations",url:"#",icon:"Link",hasAction:!0},{title:"Configs",icon:"Config",url:"#",hasAction:!0},{title:"Data",url:"#",icon:"Refresh",isDisabled:!0,hasAction:!0}],sidebar_stories_Sidebar=({})=>{const[currentTab,setCurrentTab]=(0,react.useState)("Option 2"),renderSidebarItem=(title,url,icon,hasAction=!1,isDisabled=!1)=>{return(0,jsx_runtime.jsx)(SidebarItem,{title,url,isActive:currentTab===title,onClick:(option=title,()=>{setCurrentTab(option)}),icon,action:hasAction?sidebar_stories_tag:null,isDisabled});var option};return(0,jsx_runtime.jsx)("div",{className:"sui-layout",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(box_src.V,{children:(0,jsx_runtime.jsxs)(grid_src.y,{align:{md:"inline"},children:[(0,jsx_runtime.jsxs)(grid_src.f,{size:"3",children:[(0,jsx_runtime.jsx)(Sidebar,{children:sidebar_stories_items.map((({title,url,icon,isDisabled,hasAction})=>renderSidebarItem(title,url,icon,hasAction,isDisabled)))}),(0,jsx_runtime.jsx)(SidebarDropdown,{selectedItemName:currentTab,children:sidebar_stories_items.map((({title,url,isDisabled})=>renderSidebarItem(title,url,void 0,!1,isDisabled)))})]}),(0,jsx_runtime.jsx)(grid_src.f,{size:"9",children:(0,jsx_runtime.jsx)("div",{style:{background:"white",height:"100%",minHeight:"200px",padding:"25px"},children:(0,jsx_runtime.jsx)("div",{className:"main",children:currentTab})})})]})})})})};sidebar_stories_Sidebar.args={},sidebar_stories_Sidebar.argTypes={};const __namedExportsOrder=["Sidebar"]},"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box,V:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,hasPadding=!0,_htmlProps={},_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Gv)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.n0)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter,"no-padding":!hasPadding},suiInlineClassname);return(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"box-group",...(0,src.X5)(_htmlProps),children:slots})},Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall=!1,className="",style={},_htmlProps={},_style})=>{const hasTitle=!(0,src.b0)(title)&&!(0,src.Im)(title),hasIcon=!(0,src.b0)(icon)&&!(0,src.Im)(icon),hasLeft=!(0,src.b0)(headerRight)&&!!headerLeft,hasRight=!(0,src.b0)(headerRight)&&!!headerRight,IconTag=components.Ay[icon],{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-box",{"size-sm":isSmall},suiInlineClassname);return children=(0,hooks_src.Q8)(children),(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...(0,src.X5)(_htmlProps),children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&IconTag&&(0,jsx_runtime.jsx)("span",{className:(0,src.n0)("suicons",{},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true",children:(0,jsx_runtime.jsx)(IconTag,{size:"md"})}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.$l,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,onMouseEnter,onMouseLeave,onFocus,onBlur,onMouseUp,onMouseDownCapture,onMouseUpCapture,onBlurCapture,onClick,_htmlProps={},_style},ref)=>{children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter,onMouseLeave,onFocus,onBlur,onMouseUp,onMouseDownCapture,onMouseUpCapture,onBlurCapture}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=!(0,utils_src.Im)(endIcon??""),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",onClick,...(0,utils_src.X5)(_htmlProps),...interactionMethods??{}};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Col,y:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Row=({align={md:"inline"},className,children,_htmlProps={},_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames=(0,src.n0)("sui-row",{},suiInlineClassname);children=(0,hooks_src.Q8)(children,"{Row children}");for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.Im)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"grid",...(0,src.X5)(_htmlProps),children})},Col=({size,children,className,_htmlProps={},_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-col",{[size]:!!size},suiInlineClassname);return children=(0,hooks_src.Q8)(children,"{Column children content}"),(0,jsx_runtime.jsx)("div",{className:classNames,...(0,src.X5)(_htmlProps),children})}},"./packages/ui/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Tag=({design,colorScheme,contentWrap="default",className,isSmall=!1,isUppercase=!1,isDisabled=!1,isDismissable=!1,children,onDismiss=()=>{},_htmlProps={},_style={}})=>{const hasDesign="outlined"===design,hasColor=!(0,src.b0)(colorScheme)&&!(0,src.Im)(colorScheme),hasStyle=["multiline","truncated"].includes(contentWrap),{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-tag",{[`${design}-${colorScheme}`]:hasDesign&&hasColor,[design]:hasDesign&&!hasColor,[colorScheme]:!hasDesign&&hasColor,[contentWrap]:hasStyle,sm:isSmall,uppercase:isUppercase,disabled:isDisabled},suiInlineClassname);return children=(0,hooks_src.Q8)(children,"{tag content}"),(0,jsx_runtime.jsx)("span",{className:classNames,...(0,src.X5)(_htmlProps),"data-testid":"tag",children:(0,jsx_runtime.jsxs)("div",{className:"sui-tag__wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children}),isDismissable&&(0,jsx_runtime.jsxs)("button",{className:"sui-tag__cta",onClick:onDismiss,children:[(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.bm,{size:"xs"})}),(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Dismiss"})]})]})})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-sidebar-stories-sidebar-stories.dfba2cec.iframe.bundle.js.map