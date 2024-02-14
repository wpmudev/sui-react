"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[6488],{"./packages/ui/tooltip/stories/ReactTooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactTooltip_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/tooltip/src/index.ts")),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.94b932b0.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.60d7a1e5.svg",position_namespaceObject=__webpack_require__.p+"static/media/position.3d09a8e7.svg",caret_position_horizontal_namespaceObject=__webpack_require__.p+"static/media/caret-position-horizontal.ee8b9e6c.svg",caret_position_vertical_namespaceObject=__webpack_require__.p+"static/media/caret-position-vertical.eaf85d51.svg",overflow_namespaceObject=__webpack_require__.p+"static/media/overflow.6b5f2481.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.iG,{title:"Anatomy",contained:!0,border:!0,children:(0,jsx_runtime.jsxs)(docs_src.WA,{gutter:"sm",children:[(0,jsx_runtime.jsx)(docs_src.qq,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Tooltip anatomy",style:{marginBottom:20}})}),(0,jsx_runtime.jsx)(docs_src.qq,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Tooltip anatomy spacing",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Position",contained:!0,border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"A tooltip can be placed at the top, bottom, left, or right of the element."}),(0,jsx_runtime.jsx)("img",{src:position_namespaceObject,alt:"Tooltip Position"}),(0,jsx_runtime.jsx)("p",{style:{marginTop:20},children:"The tooltip's top and bottom carets can be positioned to the left, center, or right."}),(0,jsx_runtime.jsx)("img",{src:caret_position_horizontal_namespaceObject,alt:"Tooltip Caret Horizonal Position"}),(0,jsx_runtime.jsx)("p",{style:{marginTop:20},children:"Similarly, the caret can be put at the top, center, or bottom of a tooltip that is positioned to the left or right."}),(0,jsx_runtime.jsx)("img",{src:caret_position_vertical_namespaceObject,alt:"Tooltip Caret Vertical Position"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Overflow",contained:!0,border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"If the tooltip content exceeds the maximum width, it will be wrapped."}),(0,jsx_runtime.jsx)("img",{src:overflow_namespaceObject,alt:"Tooltip Overflow"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Qr,{packageName:"@wpmudev/sui-tooltip"}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The tooltip component is composed of the trigger element and the tooltip itselft, when the trigger element is hovered the tooltip will appear."})}),(0,jsx_runtime.jsxs)("p",{children:[" the trigger element type is determined using the type prop, the default is ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"button"})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(docs_src._6,{title:"type",type:"string",defaultValue:"button",children:[(0,jsx_runtime.jsx)("p",{children:"The type for the trigger element"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options"}),(0,jsx_runtime.jsxs)(docs_src._u,{children:[(0,jsx_runtime.jsx)("span",{label:"button"}),(0,jsx_runtime.jsx)("span",{label:"text"}),(0,jsx_runtime.jsx)("span",{label:"icon"})]})]}),(0,jsx_runtime.jsxs)(docs_src._6,{title:"position",type:"string",defaultValue:"top",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A tooltip can be placed at the top, bottom, left, or right of the\nbutton."})}),(0,jsx_runtime.jsx)("p",{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src._u,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"top"}),": Tooltip will be aligned to the top center of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"top-left"}),": Tooltip will be aligned to the top left of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"top-right"}),": Tooltip will be aligned to the top right of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"bottom"}),": Tooltip will be aligned to the bottom center of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"bottom-left"}),": Tooltip will be aligned to the bottom left of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"bottom-right"}),": Tooltip will be aligned to the bottom right of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"left"}),": Tooltip will be aligned to the left center of the buttom."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"left-top"}),": Tooltip will be aligned to the left top of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"left-bottom"}),": Tooltip will be aligned to the left bottom of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"right"}),": Tooltip will be aligned to the right center of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"right-top"}),": Tooltip will be aligned to the right top of the button."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"right-bottom"}),": Tooltip will be aligned to the right bottom of the button."]})})]})]}),(0,jsx_runtime.jsx)(docs_src._6,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Custom css classNames(s) to be added to the tooltip"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"customWidth",type:"number",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Add a fixed width to the tooltip"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"customMobileWidth",type:"number",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Add a fixed width for the tooltip in the mobile"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the tooltip"})})}),(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Trigger element props",style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)(docs_src._6,{title:"icon",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Icon name for the trigger"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"iconSize",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This function is called when the button loses keyboard focus. ( only applicable for the icon type )"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"href",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The link that the trigger points to ( only applicable for the button type)"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"label",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"The text for the element to be hovered on to display the tooltip ( not applicable for the icon type )"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onClick",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be invoked upon clicking on the trigger element"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onMouseEnter",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be triggered when the mouse pointer moves over the button"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onMouseLeave",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be triggered when the mouse pointer exits the button"})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onFocus",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This function is called when the button receives keyboard focus, typically used to enhance accessibility."})})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onBlur",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This function is called when the button loses keyboard focus."})})}),(0,jsx_runtime.jsxs)("p",{children:["In addition to these props, and when you use the type ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"button"}),", you can customize the button further by using any prop that the ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/sui-components-core-button--docs",target:"_blank",children:"Button Component"})," accepts."]})]})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const textCode=dedent_default()`
  <Tooltip label="Text" type="text" >Tooltip Text</Tooltip>
`,buttonCode=dedent_default()`
  <Tooltip
      label="Button"
      type="button"
      appearance="primary"
      color="black"
  >
        Tooltip Text
  </Tooltip>
`,iconCode=dedent_default()`
  <Tooltip type="icon" name="logo">Tooltip Text</Tooltip>
`;function Types_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Text",contained:!0,style:{padding:"30px 0px"},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:40},children:(0,jsx_runtime.jsx)(src.o,{label:"Text",type:"text",children:"Tooltip Text"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:textCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Button",contained:!0,style:{padding:"30px 0px"},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:40},children:(0,jsx_runtime.jsx)(src.o,{label:"Button",type:"button",appearance:"primary",color:"black",children:"Tooltip Text"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:buttonCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Icon",contained:!0,style:{padding:"30px 0px"},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:40},children:(0,jsx_runtime.jsx)(src.o,{type:"icon",name:"logo",children:"Tooltip Text"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:iconCode})]})]})}const Types=function Types_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Types_createMdxContent,props)})):Types_createMdxContent()},topCode=dedent_default()`
  // Top Left
  <Tooltip label="Top Left" position="top-left">Tooltip Text</Tooltip>

  // Top Center
  <Tooltip label="Top Center" position="top">Tooltip Text</Tooltip>

  // Top Right
  <Tooltip label="Top Right" position="top-right">Tooltip Text</Tooltip>
`,bottomCode=dedent_default()`
  // Bottom Left
  <Tooltip label="Bottom Left" position="bottom-left">Tooltip Text</Tooltip>

  // Bottom Center
  <Tooltip label="Bottom Center" position="bottom">Tooltip Text</Tooltip>

  // Bottom Right
  <Tooltip label="Bottom Right" position="bottom-right">Tooltip Text</Tooltip>
`,rightCode=dedent_default()`
  // Right Top
  <Tooltip label="Right top" position="right-top">Tooltip Text</Tooltip>

  // Right Center
  <Tooltip label="Right Center" position="right">Tooltip Text</Tooltip>

  // Right Bottom
  <Tooltip label="Right Bottom" position="right-bottom">Tooltip Text</Tooltip>
`,leftCode=dedent_default()`
  // Left Top
  <Tooltip label="Left top" position="left-top">Tooltip Text</Tooltip>

  // Left Center
  <Tooltip label="Left Center" position="left">Tooltip Text</Tooltip>

  // Left Bottom
  <Tooltip label="Left Bottom" position="left-bottom">Tooltip Text</Tooltip>
`;function Position_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Top",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)("div",{style:{padding:40,display:"flex",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(src.o,{label:"Top Left",position:"top-left",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Top Center",position:"top",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Top Right",position:"top-right",children:"Tooltip Text"})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:topCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Bottom",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)("div",{style:{padding:40,display:"flex",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(src.o,{label:"Bottom Left",position:"bottom-left",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Bottom Center",position:"bottom",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Bottom Right",position:"bottom-right",children:"Tooltip Text"})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:bottomCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Left",style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(src.o,{label:"Left Top",position:"left-top",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Left Center",position:"left",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Left Bottom",position:"left-bottom",children:"Tooltip Text"})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:leftCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Right",style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,jsx_runtime.jsx)(src.o,{label:"Right Top",position:"right-top",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Right Center",position:"right",children:"Tooltip Text"}),(0,jsx_runtime.jsx)(src.o,{label:"Right Bottom",position:"right-bottom",children:"Tooltip Text"})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:rightCode})]})]})}const Position=function Position_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Position_createMdxContent,props)})):Position_createMdxContent()},sampleCode=dedent_default()`
    <Tooltip label="Button Label">Tooltip Text</Tooltip>
`,customWidth=dedent_default()`
    <Tooltip customWidth={50} label="Button Text">Custom Width</Tooltip>
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"The default form of the tooltip component"}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:40},children:(0,jsx_runtime.jsx)(src.o,{label:"Button Text",children:"Tooltip Text"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Custom Width",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:" customWidth "})," prop to set a custom width for the tooltip"]}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:60},children:(0,jsx_runtime.jsx)(src.o,{customWidth:50,label:"Button Text",children:"Custom Width"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:customWidth})]}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.mg,{children:[(0,jsx_runtime.jsx)("div",{label:"Types",value:"types",children:(0,jsx_runtime.jsx)(Types,{})}),(0,jsx_runtime.jsx)("div",{label:"Position",value:"position",children:(0,jsx_runtime.jsx)(Position,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactTooltip_createMdxContent(props){return docs_src.K2||_missingMdxReference("Page",!1),docs_src.K2.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.C,{children:(0,jsx_runtime.jsxs)(docs_src.K2.Tabs,{title:"Tooltip",subtitle:"A tooltip is displayed to provide additional information about specific element when the user hovers or focuses on them.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactTooltip=function ReactTooltip_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactTooltip_createMdxContent,props)})):ReactTooltip_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactTooltip_stories={title:"SUI/Components/Core/Tooltip",component:src.o,parameters:{layout:"fullscreen",docs:{page:ReactTooltip}}},Tooltip=({type,label,tootlipText,position,customWidth,customMobileWidth,color})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsx)(src.o,{type,label,appearance:"primary",color:"black",position,customWidth,customMobileWidth,children:tootlipText})})})})};Tooltip.args={type:"button",tootlipText:"Tooltip text",label:"Button",position:"top",customWidth:"",customMobileWidth:""},Tooltip.argTypes={type:{name:"Type",options:["button","text","icon"],control:{type:"select",labels:{link:"Example: Link",button:"Example: Button",text:"Example: Text",icon:"Example: Icon"}}},tootlipText:{name:"Tooltip Text"},label:{name:"Label",control:{type:"text"}},position:{name:"Position",options:["top","top-left","top-right","bottom","bottom-left","bottom-right","left","left-top","left-bottom","right","right-top","right-bottom"],control:{type:"select",labels:{top:"Top","top-left":"Top Left","top-right":"Top Right",bottom:"Bottom","bottom-left":"Bottom Left","bottom-right":"Bottom Right",left:"Left","left-top":"Left Top","left-bottom":"Left Bottom",right:"Right","right-top":"Right Top","right-bottom":"Right Bottom"}}},customWidth:{name:"Custom Width",control:{type:"number"}},customMobileWidth:{name:"Custom Width (Mobile)",control:{type:"number"}}};const __namedExportsOrder=["Tooltip"]},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-tooltip-stories-ReactTooltip-stories.a081b20d.iframe.bundle.js.map