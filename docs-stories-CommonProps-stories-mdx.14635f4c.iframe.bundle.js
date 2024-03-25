"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[4660],{"./packages/docs/stories/CommonProps.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StyleCode:()=>StyleCode,__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>__WEBPACK_DEFAULT_EXPORT__,htmlCode:()=>htmlCode,shorthands:()=>shorthands});__webpack_require__("./node_modules/react/index.js");var _Users_govind_Development_SUI_Development_sui_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/docs/src/index.ts"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),dedent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(dedent__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyleCode=dedent__WEBPACK_IMPORTED_MODULE_3___default()`
	<Box 
    _style={
        {
            backgroundColor: { 
                default: "purple",
                sm: "red",
                md: "blue",
                lg: "green",
                xl: "yellow"
            }
            mt: "10px";
        }
    }>
        Box Content
    </Box>

    /* 
    - Sets margin top to 10px for all screens

    - Sets a different background color for each screen as follows:
        “purple”: to the default selector
        “red”: max-width: 600px
        “blue”: min-width: 601px and max-width: 1024px
        “green”: min-width: 1025px and max-width: 1200px
        “yellow”: min-width: 1201px and max-width: 1600px
        
    */
`,htmlCode=dedent__WEBPACK_IMPORTED_MODULE_3___default()`
    <Button 
    icon="Close"
    _htmlProps=
            {
                {
                    "aria-label": "Close", 
                    "data-id": "close-1"
                }
            }
    /> 
`,shorthands=dedent__WEBPACK_IMPORTED_MODULE_3___default()`
// paddings
p: "padding",
px: "padding left / right",
py: "padding top / bottom",
pt: "paddingTop",
pr: "paddingRight",
pb: "paddingBottom",
pl: "paddingLeft",

// margins
m: "margin",
mx: "margin left / right",
my: "margin top / bottom",
mt: "marginTop",
mr: "marginRight",
mb: "marginBottom",
ml: "marginLeft",
`;function _createMdxContent(props){const _components=Object.assign({p:"p",ol:"ol",li:"li"},(0,_Users_govind_Development_SUI_Development_sui_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return _wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YW||_missingMdxReference("Page",!1),_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YW.Simple||_missingMdxReference("Page.Simple",!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"SUI/Common Props"}),"\n","\n","\n","\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_6__.di,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YW.Simple,{title:"Common Props",subtitle:"The subsequent document outlines the shared common properties across all components within SUI library.",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.wn,{contained:!0,style:{paddingTop:0,paddingBottom:30},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.QB,{color:"yellow",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p,{children:"Consider using these props only when it's necessary,\nalways prioritize using the component's own props for customization unless they don't offer what you need."})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.wn,{contained:!0,border:!0,style:{paddingTop:0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.hz,{title:"_style",type:"object",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["The ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.Cy,{isSmall:!0,children:"_style"})," prop enables inline styling for the component,\nit accepts an object form similar to standard ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href:"https://legacy.reactjs.org/docs/dom-elements.html#style",target:"_blank",children:"React inline styles"}),",\nwith three key  differences:"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.ol,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"It doesn't append style attribute to the DOM, instead, it automatically generates a unique className for the styles."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"The possibility of adding values for different breakpoints."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.li,{children:"It provides shorthands for margin and padding properties for easier use."}),"\n"]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YK,{hideToggle:!0,children:StyleCode}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4",{children:"Shorthands"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YK,{hideToggle:!0,children:shorthands})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.wn,{contained:!0,border:!0,style:{paddingTop:30},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.hz,{title:"_htmlProps",type:"object",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.Cy,{isSmall:!0,children:"_htmlProps"})," to pass any valid HTML attributes to the component,\nstructured as an object, Note that attributes should retain their original casing, unlike the camelcased\nconvention used in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.Cy,{isSmall:!0,children:"_style"})," prop."]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wpmudev_sui_docs__WEBPACK_IMPORTED_MODULE_2__.YK,{hideToggle:!0,children:htmlCode})]})})]})})]})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"SUI/Common Props",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_govind_Development_SUI_Development_sui_react_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["StyleCode","htmlCode","shorthands","__page"]},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=docs-stories-CommonProps-stories-mdx.14635f4c.iframe.bundle.js.map