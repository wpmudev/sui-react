"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[5129],{"./packages/ui/code-snippet/stories/ReactCodeSnippet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CodeSnippet:()=>ReactCodeSnippet_stories_CodeSnippet,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactCodeSnippet_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),prism=__webpack_require__("./node_modules/prismjs/prism.js"),prism_default=__webpack_require__.n(prism),src=__webpack_require__("./packages/ui/tooltip/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const CodeSnippet=({language="markup",copy=!0,className="",children})=>{const classNames=(0,utils_src.uY)("sui-code-snippet",{},className??""),[isCopied,setIsCopied]=(0,react.useState)(!1);(0,react.useEffect)((()=>{prism_default()?.highlightAll()}),[]);const copyCodes=(0,react.useCallback)((text=>{navigator?.clipboard?.writeText(text),setIsCopied(!0)}),[]);return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"code-snippet",children:[copy&&(0,jsx_runtime.jsx)(src.u,{"data-testid":"code-snippet-copy-btn",label:"Copy",appearance:"secondary",color:"black",position:"top","aria-label":isCopied?"Copied":"",onMouseLeave:()=>setIsCopied(!1),customWidth:65,onClick:()=>copyCodes(children),children:isCopied&&"Copied"}),(0,jsx_runtime.jsx)("pre",{children:(0,jsx_runtime.jsx)("code",{className:`language-${language}`,children})})]})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const overview_namespaceObject=__webpack_require__.p+"static/media/overview.8321eaec.svg",anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.ed471ffc.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.a3fa36f7.svg",variations_namespaceObject=__webpack_require__.p+"static/media/variations.811f7aac.svg",copied_namespaceObject=__webpack_require__.p+"static/media/copied.fd15d193.svg",scrollbar_namespaceObject=__webpack_require__.p+"static/media/scrollbar.e59aeff4.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{children:(0,jsx_runtime.jsx)("img",{src:overview_namespaceObject,alt:"Code Snippet Overview",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Snippet text"}),(0,jsx_runtime.jsx)("p",{children:"Line or a block of codes."}),(0,jsx_runtime.jsx)("h3",{children:"2. Copy button"}),(0,jsx_runtime.jsx)("p",{children:"An optional copy button for copying the code."})]}),(0,jsx_runtime.jsx)(docs_src.JX,{size:"4",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Code Snippet Anatomy"})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Code Snippet Spacing"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Variations",children:(0,jsx_runtime.jsx)("img",{src:variations_namespaceObject,alt:"Code Snippet Variations"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"States",children:[(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Copy Notification"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When the code snippet is copied, the user gets notified with a tooltip"})})]}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("img",{src:copied_namespaceObject,alt:"Code Snippet Copy Notification"})})]}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Horizontal Scroll Bar"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When the width doesn't fit the code, the Code snippet will have a\nHorizontal Bar"})})]}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("img",{src:scrollbar_namespaceObject,alt:"Code Snippet Scroll Bar"})})]})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Code Snippet"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"language*",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The language for the code snippet for correct code highlighting"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"markup"}),": HTML code."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"javascript"}),": Javascript code."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"css"}),": CSS code."]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"copy*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["If set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"}),", it will show a copy button to\ncopy the code. By default it is set to\n",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"}),"."]})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Add a class name to the code snippet."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content of the code Snippet"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const cssSnippet="\nh1 {\n    color: blue;\n    font-size: 24px;\n}\n\n",htmlSnippet="\n    <!DOCTYPE html>\n    <html>\n    <head>\n        <title>My Simple Webpage</title>\n    </head>\n    <body>\n        <h1>Welcome to My Webpage</h1>\n        <p>This is a simple example of an HTML webpage.</p>\n    </body>\n    </html>\n",sampleCode=dedent_default()`
<CodeSnippet type="markup">${htmlSnippet}</CodeSnippet>
`;dedent_default()`
<CodeSnippet type="markup">${cssSnippet}</CodeSnippet>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"The default form of the code snippet."}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(CodeSnippet,{children:htmlSnippet})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Languages",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Use the language prop to change the programming language for a correct\nhighlighting"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["You can choose between ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"markup"}),","," ","\n",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"javascript"})," and ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"css"})]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(CodeSnippet,{language:"css",children:cssSnippet})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Hide Copy",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"copy={false}"})," to remove the copy button"]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(CodeSnippet,{copy:!1,children:htmlSnippet})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function ReactCodeSnippet_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Code Snippet",subtitle:"Code Snippet is a block that allows for the display of codes.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactCodeSnippet_stories={title:"SUI/Components/Advanced/Code Snippet",component:CodeSnippet,parameters:{layout:"fullscreen",docs:{page:function ReactCodeSnippet_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactCodeSnippet_createMdxContent,props)})):ReactCodeSnippet_createMdxContent()}}}},ReactCodeSnippet_stories_CodeSnippet=({language,copy,color})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsx)(CodeSnippet,{language,copy,children:"\x3c!-- Code Starts --\x3e\n<div class=”className”>\n    <a href=”#”> Link </a>\n</div>"})})})})};ReactCodeSnippet_stories_CodeSnippet.args={language:"markup",copy:!0},ReactCodeSnippet_stories_CodeSnippet.argTypes={language:{name:"Code Language",options:["markup","javascript","css"],control:{type:"select",labels:{markup:"Language: HTML",javascript:"Language: Javascript",css:"Language: CSS"}}},copy:{name:"Copy Button",control:{type:"boolean"}}};const __namedExportsOrder=["CodeSnippet"]},"./packages/ui/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name="Info",size="sm"})=>{if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.ZP[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Tooltip=({label,type="button",className,position="top",customWidth,customMobileWidth,children,onClick=()=>{},onMouseEnter=()=>{},onMouseLeave=()=>{},onFocus=()=>{},onBlur=()=>{},href,icon,...props})=>{const[isHovered,isFocused,methods,toggleHover]=(0,hooks_src.X2)({onMouseEnter,onMouseLeave,onFocus,onBlur}),attrs={},classNames=(0,utils_src.uY)("sui-tooltip",{show:isHovered,focus:isFocused,"custom-width":!!customWidth,[position]:!0},className??"");(customWidth||customMobileWidth)&&(attrs.style={...customWidth&&{"--tooltip-width":`${customWidth}px`},...customMobileWidth&&{"--tooltip-width-mobile":`${customMobileWidth}px`}});const escFunction=(0,react.useCallback)((event=>{"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((()=>(document.addEventListener("keydown",escFunction),()=>{document.removeEventListener("keydown",escFunction)})),[escFunction]);const onClickCallback=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"tooltip",children:[(()=>{switch(type){case"button":case"link":return(0,jsx_runtime.jsx)(src.zx,{...props,...icon&&{icon},href,onClick:onClickCallback,children:label});case"text":return(0,jsx_runtime.jsx)("span",{...props,role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.Jw)(e),children:label});case"icon":return(0,jsx_runtime.jsx)(Icon,{name:icon})}})(),!!children&&(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__content",role:"tooltip","aria-live":"polite","aria-hidden":!isHovered,tabIndex:isHovered?0:-1,...attrs,children})]})}}}]);
//# sourceMappingURL=ui-code-snippet-stories-ReactCodeSnippet-stories.5fe71699.iframe.bundle.js.map