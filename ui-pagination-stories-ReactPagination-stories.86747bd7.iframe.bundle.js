"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[4084],{"./packages/ui/pagination/stories/ReactPagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Pagination:()=>Pagination,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactPagination_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),pagination=__webpack_require__("./packages/ui/pagination/src/pagination.tsx"),src=__webpack_require__("./packages/ui/box/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.03fc2661.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.fe2e713a.svg",variations_namespaceObject=__webpack_require__.p+"static/media/variations.c93103be.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.13ba3937.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.wn,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.fI,{children:[(0,jsx_runtime.jsxs)(docs_src.fv,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Previous page"}),(0,jsx_runtime.jsx)("p",{children:"Navigate to the previous page."}),(0,jsx_runtime.jsx)("h3",{children:"2. Next page"}),(0,jsx_runtime.jsx)("p",{children:"Navigate to the next page."}),(0,jsx_runtime.jsx)("h3",{children:"3. Active page"}),(0,jsx_runtime.jsx)("p",{children:"Currently active page."}),(0,jsx_runtime.jsx)("h3",{children:"4. Page navigations"}),(0,jsx_runtime.jsx)("p",{children:"Navigate to the specific page by selecting the page number."}),(0,jsx_runtime.jsx)("h3",{children:"5. Truncations"}),(0,jsx_runtime.jsx)("p",{children:"When a threshold of pages is reached, the list is truncated using an ellipsis."})]}),(0,jsx_runtime.jsx)(docs_src.fv,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Pagination Anatomy",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Spacing Anatomy",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Pagination variations",children:(0,jsx_runtime.jsx)("img",{src:variations_namespaceObject,alt:"Pagination Variations",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Pagination States",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-pagination"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"limit",type:"number",defaultValue:"5",children:(0,jsx_runtime.jsx)("p",{children:"Number of items per page"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"numberOfItems",type:"number",defaultValue:"20",children:(0,jsx_runtime.jsx)("p",{children:"Number of total items"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"previousLabel",type:"string",defaultValue:"Previous label",children:(0,jsx_runtime.jsx)("p",{children:"The screen reader text for the previous button"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"nextLabel",type:"string",defaultValue:"Next label",children:(0,jsx_runtime.jsx)("p",{children:"The screen reader text for the next button"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"skip",type:"boolean",defaultValue:!1,children:(0,jsx_runtime.jsx)("p",{children:"Whether to allow for skip navigation or not"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onChange",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the page gets changed, the first parameter represents the new selected page "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"hideOnSinglePage",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["Set this to ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"true"})," if you want to hide the pagination when it has one page only"]})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var pagination_src=__webpack_require__("./packages/ui/pagination/src/index.ts"),dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const records=(n=>{const arrayOfObjects=[];for(let i=1;i<=n;i++){const object={id:i,title:"Item"+i};arrayOfObjects.push(object)}return arrayOfObjects})(60),BasicPagination=({skip=!1})=>{const[tableItems,setTableItems]=(0,react.useState)((0,utils_src.ln)(records,5)),[rows,setRows]=(0,react.useState)([]),[page,setPage]=(0,react.useState)(1);return(0,react.useEffect)((()=>{setTableItems((0,utils_src.ln)(records,5))}),[]),(0,react.useEffect)((()=>{setRows(tableItems?.[0])}),[tableItems]),(0,react.useEffect)((()=>{setRows(tableItems?.[page-1])}),[page,tableItems]),(0,jsx_runtime.jsx)(src.a,{children:(0,jsx_runtime.jsxs)(src.V,{isInline:!1,children:[(0,jsx_runtime.jsx)("ul",{children:rows?.map(((record,index)=>(0,jsx_runtime.jsx)("li",{children:record.title},index)))}),(0,jsx_runtime.jsx)(pagination_src.d,{skip,limit:5,numberOfItems:records.length,onChange:setPage})]})})},BasicExampleCode=dedent_default()`
import { Pagination } from "../../../src"
import { Box, BoxGroup } from "@wpmudev/sui-box"
import React, { useEffect, useState } from "react"
import { chunkArray } from "@wpmudev/sui-utils"
import dedent from "dedent"

export const generateRecords = (n) => {
    const arrayOfObjects = []
    for (let i = 1; i <= n; i++) {
        const object = { id: i, title: "Item" + i }
        arrayOfObjects.push(object)
    }

    return arrayOfObjects
}

const records = generateRecords(60)

const limit = 3

    export const BasicPagination = () => {
        const [tableItems, setTableItems] = useState(chunkArray(records, limit))
        const [rows, setRows] = useState([])
        const [page, setPage] = useState(1)

        useEffect(() => {
            setTableItems(chunkArray(records, limit))
        }, [limit])

        useEffect(() => {
            setRows(tableItems?.[0])
        }, [tableItems])

        useEffect(() => {
            setRows(tableItems?.[page - 1])
        }, [page, tableItems])

        return (
            <Box>
                <BoxGroup isInline={false}>
                    <ul>
                        {rows?.map((record, index) => (
                            <li key={index}>{record.title}</li>
                        ))}
                    </ul>
                    <Pagination
                        limit={limit}
                        numberOfItems={records.length}
                        onChange={setPage}
                    />
                </BoxGroup>
            </Box>
        )
    }
`,SkipButtonsExample=()=>(0,jsx_runtime.jsx)(BasicPagination,{skip:!0,limit:5}),SkipButtonsCode=dedent_default()`
    <Pagination skip={true} />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is a general example of using pagination"}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(BasicPagination,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:BasicExampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Skip Buttons",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"skip={true}"})," to allow for skip navigation"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(SkipButtonsExample,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:SkipButtonsCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactPagination_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Pagination",subtitle:"Pagination helps users navigate through pages or content separated by pages.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactPagination=function ReactPagination_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactPagination_createMdxContent,props)})):ReactPagination_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactPagination_stories={title:"SUI/Components/Advanced/Pagination",component:pagination.d,parameters:{layout:"fullscreen",docs:{page:ReactPagination}}},ReactPagination_stories_records=(n=>{const arrayOfObjects=[];for(let i=1;i<=n;i++){const object={id:i,title:"Item"+i};arrayOfObjects.push(object)}return arrayOfObjects})(60),Pagination=args=>{const[tableItems,setTableItems]=(0,react.useState)((0,utils_src.ln)(ReactPagination_stories_records,args?.limit)),[rows,setRows]=(0,react.useState)([]),[page,setPage]=(0,react.useState)(1);return(0,react.useEffect)((()=>{setTableItems((0,utils_src.ln)(ReactPagination_stories_records,args?.limit))}),[args.limit]),(0,react.useEffect)((()=>{setRows(tableItems?.[0])}),[tableItems]),(0,react.useEffect)((()=>{setRows(tableItems?.[page-1])}),[page,tableItems]),(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(src.a,{children:(0,jsx_runtime.jsxs)(src.V,{isInline:!1,children:[(0,jsx_runtime.jsx)("ul",{children:rows?.map(((record,index)=>(0,jsx_runtime.jsx)("li",{children:record.title},index)))}),(0,jsx_runtime.jsx)(pagination.d,{...args,numberOfItems:ReactPagination_stories_records.length,onChange:setPage})]})})})})};Pagination.args={limit:5,skip:!1,previousLabel:"Previous page",nextLabel:"Next page"},Pagination.argTypes={limit:{name:"Number of items(per page)",type:{required:!0},description:"Use this property to set a maximum number of items per page. If empty or zero, the pagination won't show.",table:{type:{summary:"number"}},control:{type:"number"}},skip:{name:"Skip Buttons",description:"Enable this property to show skip buttons on pagination. Those will help you move directly to first and last page.",table:{type:{summary:"boolean"}},control:{type:"boolean"}},previousLabel:{name:"Previous Button(Label)",description:'By default, the "previous" button will have as label **"Go to previous page"**. You can change that using this property.',table:{type:{summary:"string"}},control:{type:"text"}},nextLabel:{name:"Next Button(Label)",description:'By default, the "next" button will have as label **"Go to next page"**. You can change that using this property.',table:{type:{summary:"string"}},control:{type:"text"}}},Pagination.parameters={...Pagination.parameters,docs:{...Pagination.parameters?.docs,source:{originalSource:'(args: PaginationProps): React.ReactNode => {\n  const [tableItems, setTableItems] = useState(chunkArray(records, (args?.limit as number)));\n  const [rows, setRows] = useState<Record<string, any>>([]);\n  const [page, setPage] = useState<number>(1);\n  useEffect(() => {\n    setTableItems(chunkArray(records, (args?.limit as number)));\n  }, [args.limit]);\n  useEffect(() => {\n    setRows(tableItems?.[0]);\n  }, [tableItems]);\n  useEffect(() => {\n    setRows(tableItems?.[page - 1]);\n  }, [page, tableItems]);\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <Box>\n                    <BoxGroup isInline={false}>\n                        <ul>\n                            {rows?.map((record: Record<string, any>, index: number) => <li key={index}>{record.title}</li>)}\n                        </ul>\n                        <SuiPagination {...args} numberOfItems={records.length} onChange={setPage} />\n                    </BoxGroup>\n                </Box>\n            </div>\n        </div>;\n}',...Pagination.parameters?.docs?.source}}};const __namedExportsOrder=["Pagination"]},"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box,V:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,hasPadding=!0,_htmlProps={},_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Gv)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.n0)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter,"no-padding":!hasPadding},suiInlineClassname);return(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"box-group",...(0,src.EX)(_htmlProps),children:slots})},Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall=!1,className="",style={},_htmlProps={},_style})=>{const hasTitle=!(0,src.b0)(title)&&!(0,src.Im)(title),hasIcon=!(0,src.b0)(icon)&&!(0,src.Im)(icon),hasLeft=!(0,src.b0)(headerRight)&&!!headerLeft,hasRight=!(0,src.b0)(headerRight)&&!!headerRight,IconTag=components.Ay[icon],{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-box",{"size-sm":isSmall},suiInlineClassname);return children=(0,hooks_src.Q8)(children),(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...(0,src.EX)(_htmlProps),children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&IconTag&&(0,jsx_runtime.jsx)("span",{className:(0,src.n0)("suicons",{},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true",children:(0,jsx_runtime.jsx)(IconTag,{size:"md"})}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.$l,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,_htmlProps={},_style,...restProps},ref)=>{children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=((0,utils_src.Im)(startIcon??""),!(0,utils_src.Im)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...(0,utils_src.EX)(_htmlProps),...interactionMethods??{},...(0,utils_src.EX)(restProps)};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/pagination/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>_pagination__WEBPACK_IMPORTED_MODULE_0__.d});var _pagination__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/ui/pagination/src/pagination.tsx");__webpack_require__("./packages/ui/pagination/src/pagination-nav.tsx")},"./packages/ui/pagination/src/pagination-nav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PaginationNav});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/button/src/index.ts")),_wpmudev_sui_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/tooltip/src/index.ts"),_wpmudev_sui_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/hooks/src/index.ts"),_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/utils/src/index.ts");const PaginationNav=({pagesArray,elements,selectedPage,handlePreviousPage,handleSkipToFirstPage,handleSkipToLastPage,handlePreviousEllipsis,handlePageClick,handleNextEllipsis,handleNextPage,previousLabel="Go to previous page",nextLabel="Go to next page",startIndex,endIndex,pages,skip,_style={}})=>{const{suiInlineClassname}=(0,_wpmudev_sui_hooks__WEBPACK_IMPORTED_MODULE_4__.IS)(_style);return pagesArray.length<1?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_5__.n0)("sui-pagination",{},suiInlineClassname),"data-testid":"pagination",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"sui-pagination__nav",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{buttonProps:{type:"tertiary",colorScheme:"black",iconOnly:!0,isSmall:!0,isDisabled:selectedPage<=1,_htmlProps:{"data-testid":"pagination-prev-page"}},className:"sui-pagination__button",icon:"ChevronLeft",onClick:handlePreviousPage,"aria-label":previousLabel,children:previousLabel})}),startIndex>1&&skip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{className:"sui-pagination__button",colorScheme:"black",type:"tertiary",isSmall:!0,isDisabled:selectedPage<=1,onClick:handleSkipToFirstPage,children:"1"})}),startIndex>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",icon:"More",iconOnly:!0,isSmall:!0,className:"sui-pagination__button",onClick:handlePreviousEllipsis,children:"Skip pages"})}),pagesArray?.slice(startIndex,endIndex)?.map(((data,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",isSmall:!0,className:"sui-pagination__button"+(selectedPage===data?" sui-pagination__button--active":""),onClick:()=>handlePageClick(Math.floor(data)),"data-testid":"pagination-item",children:data})},index))),endIndex<pages-1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",icon:"More",iconOnly:!0,isSmall:!0,className:"sui-pagination__button",onClick:handleNextEllipsis,children:"Skip pages"})}),endIndex<pages&&skip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",isSmall:!0,className:"sui-pagination__button",isDisabled:selectedPage>=pages,onClick:handleSkipToLastPage,children:pagesArray.length})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{buttonProps:{type:"tertiary",colorScheme:"black",iconOnly:!0,isSmall:!0,isDisabled:selectedPage>=pages,_htmlProps:{"data-testid":"pagination-next-page"}},className:"sui-pagination__button",icon:"ChevronRight",onClick:handleNextPage,"aria-label":nextLabel,children:nextLabel})})]})})}},"./packages/ui/pagination/src/pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_pagination_nav__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/pagination/src/pagination-nav.tsx");const Pagination=({limit=5,skip,previousLabel="Previous label",nextLabel="Next label",numberOfItems=20,onChange,hideOnSinglePage=!1,...props})=>{if(0===numberOfItems)throw new Error("Shared UI - Components: Pagination, 'numberOfItems' prop should not be 0.");const pages=Math.ceil(numberOfItems/limit),newEndIndex=pages<=5?5:3,[pagesArray,setPagesArray]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),[selectedPage,setSelectedPage]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),[startIndex,setStartIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[endIndex,setEndIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.min(newEndIndex,pages)),[pageClickCounter,setPageClickCounter]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[elementsStartIndex,setElementsStartIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[elementsEndIndex,setElementsEndIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(limit),decrementIndexes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{selectedPage-1<=startIndex+1&&0!==startIndex&&(setStartIndex(startIndex-1),setEndIndex(endIndex-1))}),[selectedPage,startIndex,endIndex]),incrementIndexes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{selectedPage+1>=endIndex&&endIndex!==pages&&(setStartIndex(startIndex+1),setEndIndex(endIndex+1))}),[selectedPage,startIndex,endIndex,pages]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const pageNumbers=[];for(let i=1;i<=pages;++i)pageNumbers.push(i);setPagesArray(pageNumbers)}),[pages]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{onChange&&onChange(selectedPage)}),[onChange,selectedPage]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{selectedPage>=endIndex&&incrementIndexes(),selectedPage<=startIndex+1&&decrementIndexes()}),[pageClickCounter,incrementIndexes,decrementIndexes,endIndex,startIndex,selectedPage]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{1!==selectedPage&&(setElementsStartIndex(selectedPage*limit-limit),setElementsEndIndex(selectedPage*limit))}),[selectedPage,limit]);const properties={elementsStartIndex,elementsEndIndex,handlePageClick:page=>{setSelectedPage(page??1),setPageClickCounter(pageClickCounter+1)},handleNextEllipsis:()=>{const newStartIndex=Math.min(startIndex+newEndIndex,pages-newEndIndex);setStartIndex(newStartIndex),setEndIndex(startIndex>=newEndIndex?endIndex+newEndIndex:endIndex+(newStartIndex-startIndex)),setSelectedPage(startIndex>=newEndIndex?startIndex+(newEndIndex+1):newStartIndex+1)},handlePreviousEllipsis:()=>{const newStartIndex=Math.max(0,startIndex-newEndIndex);setStartIndex(newStartIndex),setEndIndex(startIndex>=newEndIndex?endIndex-newEndIndex:endIndex-startIndex),setSelectedPage(startIndex>=newEndIndex?startIndex-(newEndIndex-1):1)},handleNextPage:()=>{selectedPage<pages&&setSelectedPage(selectedPage+1),incrementIndexes()},handlePreviousPage:()=>{selectedPage>1&&setSelectedPage(selectedPage-1),decrementIndexes()},handleSkipToLastPage:()=>{setSelectedPage(pages),setStartIndex(Math.max(0,pages-newEndIndex)),setEndIndex(pages)},handleSkipToFirstPage:()=>{setSelectedPage(1),setStartIndex(0),setEndIndex(Math.min(newEndIndex,pages))},pagesArray,selectedPage,startIndex,endIndex,pages,previousLabel,nextLabel,skip,...props};return hideOnSinglePage&&1===pages?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_nav__WEBPACK_IMPORTED_MODULE_2__.S,{...properties})}},"./packages/ui/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name="Info",size="sm",onClick=()=>null})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",onClick,children:(0,jsx_runtime.jsx)(IconTag,{size})})},Tooltip=({label,type="button",className,placement="top",customWidth,customMobileWidth,children,onClick,onMouseEnter=()=>{},onMouseLeave=()=>{},onFocus=()=>{},onBlur=()=>{},href,icon,iconSize="sm",buttonProps,_htmlProps={},_style={},...props})=>{const isRTL=(0,hooks_src.L2)(),uniqueId=(0,react.useId)(),[isVisible,setIsVisible]=(0,react.useState)(!1),[pos,setPos]=(0,react.useState)({top:0,left:0}),tooltipRef=(0,react.useRef)(null),triggerRef=(0,react.useRef)(null),[render]=(0,hooks_src.WP)("body"),[isHovered,isFocused,methods,toggleHover]=(0,hooks_src.Mj)({onMouseEnter:e=>{if(tooltipRef.current){const parentRect=tooltipRef?.current?.getBoundingClientRect(),trigger=triggerRef?.current?.getBoundingClientRect(),popupEl=document.getElementById(`sui-tooltip-${uniqueId}`),tooltipHeight=popupEl?.clientHeight||0,tooltipWidth=popupEl?.clientWidth||0,alignName=isRTL?"right":"left";let align=parentRect.left;if(!popupEl)return;isRTL&&(align=window.innerWidth-parentRect.right);popupEl&&window.getComputedStyle(popupEl);let attrs={top:`${parentRect.top+window.scrollY}px`};switch(placement){case"top":case"top-left":case"top-right":attrs={...attrs,top:parentRect.top-tooltipHeight-10+window.scrollY},"top-right"===placement?attrs={...attrs,[alignName]:align-tooltipWidth+(trigger?.width??0)}:"top"===placement?attrs={...attrs,left:parentRect.left+(trigger?.width??0)/2+window.scrollX}:"top-left"===placement&&(attrs={...attrs,[alignName]:align});break;case"bottom":case"bottom-left":case"bottom-right":attrs={...attrs,top:parentRect.top+(trigger?.height??0)+10+window.scrollY},"bottom-right"===placement?attrs={...attrs,[alignName]:align-tooltipWidth+(trigger?.width??0)}:"bottom"===placement?attrs={...attrs,left:parentRect.left+(trigger?.width??0)/2+window.scrollY}:"bottom-left"===placement&&(attrs={...attrs,[alignName]:align});break;case"right":case"right-top":case"right-bottom":attrs={...attrs,[alignName]:align+(trigger?.width??0)+10},attrs="right-top"===placement?{...attrs,top:parentRect.top+window.scrollY}:"right-bottom"===placement?{...attrs,top:parentRect.top+(trigger?.height??0)-tooltipHeight+window.scrollY}:{...attrs,top:parentRect.top+(trigger?.height??0)/2};break;case"left":case"left-top":case"left-bottom":attrs={...attrs,[alignName]:align-tooltipWidth-10},attrs="left-top"===placement?{...attrs,top:parentRect.top}:"left-bottom"===placement?{...attrs,top:parentRect.top+(trigger?.height??0)-tooltipHeight}:{...attrs,top:parentRect.top+(trigger?.height??0)/2}}setPos(attrs)}setIsVisible(!0)},onMouseLeave:()=>{setIsVisible(!1)},onFocus,onBlur});children=(0,hooks_src.Q8)(children,"{default tooltip content}");const attrs={},{suiInlineClassname}=(0,hooks_src.IS)(_style,className??""),classNames=(0,utils_src.n0)("sui-tooltip",{focus:isFocused},suiInlineClassname);(customWidth||customMobileWidth)&&(attrs.style={...pos,...customWidth&&{"--tooltip-width":`${customWidth}px`},...customMobileWidth&&{"--tooltip-width-mobile":`${customMobileWidth}px`}});const escFunction=(0,react.useCallback)((event=>{"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((()=>(document.addEventListener("keydown",escFunction),()=>{document.removeEventListener("keydown",escFunction)})),[escFunction]);const onClickCallback=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",{...methods,className:classNames,"data-testid":"tooltip",ref:tooltipRef,...(0,utils_src.EX)(_htmlProps),children:[(0,jsx_runtime.jsx)("div",{className:"sui-tooltip__trigger",ref:triggerRef,children:(()=>{switch(type){case"button":return(0,jsx_runtime.jsx)(src.$,{...buttonProps,...icon&&{icon},href,onClick:onClickCallback,children:label});case"text":return(0,jsx_runtime.jsx)("span",{role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.f$)(e),children:label});case"icon":return onClick?(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__trigger--icon",role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.f$)(e,onClickCallback),children:(0,jsx_runtime.jsx)(Icon,{name:icon,size:iconSize})}):(0,jsx_runtime.jsx)(Icon,{name:icon,size:iconSize});default:return(0,jsx_runtime.jsx)("span",{...(0,utils_src.EX)(props),children:label})}})()}),!!children&&render((0,jsx_runtime.jsx)("div",{id:`sui-tooltip-${uniqueId}`,className:(0,utils_src.n0)("sui-tooltip__popup",{show:isVisible,focus:isFocused,"custom-width":!!customWidth,[placement]:!0,icon:!!icon}),role:"tooltip","aria-live":"polite","aria-hidden":!isVisible,tabIndex:isVisible?0:-1,"data-testid":"tooltip-popup",style:pos,...attrs,children}))]})}}}]);
//# sourceMappingURL=ui-pagination-stories-ReactPagination-stories.86747bd7.iframe.bundle.js.map