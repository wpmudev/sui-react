/*! For license information please see react-stories-Overview-stories-mdx.e820858c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[6355],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hw:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hw,Xz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Xz,h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kZ:()=>_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.kZ});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs");__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>react_default});var _chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-DXNAW7Q2.mjs"),react__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-JT3VIYBO.mjs"),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_2__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.ew)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_DXNAW7Q2_mjs__WEBPACK_IMPORTED_MODULE_0__.c4)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_2__.createElement("a",{href,onClick:e=>((e,cb=(_e=>{}))=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./packages/react/stories/Overview.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>Overview_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),src=__webpack_require__("./packages/docs/src/index.ts"),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("style",{children:"\n.csb-browsers-list {\n\tdisplay: flex;\n\tflex-flow: row wrap;\n\talign-items: center;\n}\n.csb-browsers-list img {\n\tmargin: 0;\n\tmargin-right: 20px;\n}\n.csb-browsers-list img:last-child {\n\tmargin-right: 0;\n}\n"}),"\n",(0,jsx_runtime.jsxs)(src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-react"}),", a package within our library, offers all the UI components required for your plugin. This package allows developers to load all these components from the library at once, ensuring convenience. Notably, please be aware that it doesn't includes following packages: ",(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-utils"}),", ",(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-css"}),", ",(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-hooks"}),", and ",(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/react-icons"}),"."]})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Before moving further, please ensure you have ",(0,jsx_runtime.jsx)("a",{href:"https://nodejs.org/",target:"_blank",children:"\nNode.js\n"})," installed on your device. You can get the latest version via their\nwebsite."]})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["If you're planning on using Shared UI React Package in a project that\ndoesn't yet use ",(0,jsx_runtime.jsx)("a",{href:"https://www.npmjs.com",target:"_blank",children:"\nNode Package Manager\n"}),", you'll have to create a ",(0,jsx_runtime.jsx)("a",{href:"https://docs.npmjs.com/files/package.json",target:"_blank",children:"\npackage.json\n"})," file first. To accomplish this, run ",(0,jsx_runtime.jsx)(src.EK,{children:" npm init "})," and follow\nthe steps provided. Once completed, you can install the CSS Framework by\nfollowing the instructions beneath."]})})]}),"\n",(0,jsx_runtime.jsxs)(src.$0,{title:{content:"Install using NPM",small:!0},contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["In your project root directory (where the ",(0,jsx_runtime.jsx)(src.EK,{children:" package.json "})," file\nlives), run the following command:"]})}),(0,jsx_runtime.jsx)(src.pP,{children:"npm install --save @wpmudev/sui-react"})]}),"\n",(0,jsx_runtime.jsxs)(src.$0,{title:{content:"Install using Yarn",small:!0},contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["In your project root directory (where the ",(0,jsx_runtime.jsx)(src.EK,{children:" package.json "})," file\nlives), run the following command:"]})}),(0,jsx_runtime.jsx)(src.pP,{children:"yarn add @wpmudev/sui-react"})]})]})}const Installation=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function Usage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Once you've installed the React Package package into your plugin, you\ncan import any SUI 3 React components."})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["For an example, if you want to import Button component in your plugin/app, you can import as follow:\n",(0,jsx_runtime.jsx)(src.EK,{children:'import { Button } from "@wpmudev/sui-react"'})]})}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)("h4",{children:"Here is a list of component packages, it contains:"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Core components:"}),(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-avatar"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-box"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-grid"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-link"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-icon"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-score"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-segmented-control"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-selector"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-spinner"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-tag"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-tooltip"})})]})]}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Form components:"}),(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-checkbox"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-radio"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-button"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-form-field"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-input"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-textarea"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-toggle"})})]})]}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Advanced components"}),(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-accordion"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-alert-banner"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-code-editor"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-code-snippet"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-color-picker"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-date-picker"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-dropdown"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-empty-state"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-password-field"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-modal"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-notification"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-progress-bar"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-select"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-sidebar"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-summary-box"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-tabs"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-tree-view"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-uploader"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-field-list"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-recipient"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-rich-text-editor"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-advanced-banner"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-builder"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-editor-toolbar"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-pagination"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-search"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-basic-box"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-setting-block"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-popover"})})]})]}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Module Components:"}),(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-table"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-dashboard-widget"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-navigation"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-integration"})})]})]}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsx)("li",{children:"Collection Components:"}),(0,jsx_runtime.jsxs)("ol",{children:[(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-footer"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-config-table"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-setup-banner"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-upsell"})}),(0,jsx_runtime.jsx)("li",{children:(0,jsx_runtime.jsx)(src.EK,{children:"@wpmudev/sui-upsell-notice"})})]})]})]})]})}const Usage=function Usage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Usage_createMdxContent,props)})):Usage_createMdxContent(props)};function Overview_stories_createMdxContent(props){return src.T3||_missingMdxReference("Page",!1),src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"SUI/React Framework/Overview"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(src.T3.Tabs,{title:"React Framework",subtitle:(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:"This library provides a set of components, allowing you to enhance your plugin's functionality effortlessly"}),children:[(0,jsx_runtime.jsx)("div",{id:"installation",label:"Installation",children:(0,jsx_runtime.jsx)(Installation,{})}),(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(Usage,{})})]})})]})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"SUI/React Framework/Overview",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function Overview_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Overview_stories_createMdxContent,{...props})}):Overview_stories_createMdxContent()}};const Overview_stories=componentMeta},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);