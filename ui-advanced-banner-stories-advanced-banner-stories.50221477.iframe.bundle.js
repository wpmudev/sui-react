"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[3095],{"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,style})=>{const slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Kn)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter});return(0,jsx_runtime.jsx)("div",{className:classNames,style,"data-testid":"box-group",children:slots})},Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall,className="",style={},...props})=>{const hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!!headerLeft,hasRight=!(0,src.o8)(headerRight)&&!!headerRight,classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...props,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:(0,src.uY)("suicons",{[icon??""]:!0,lg:!0},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/advanced-banner/stories/advanced-banner.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdvancedBanner:()=>advanced_banner_stories_AdvancedBanner,__namedExportsOrder:()=>__namedExportsOrder,default:()=>advanced_banner_stories});var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=__webpack_require__("./packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const AdvancedBanner=({variation="",imageUrl="",title="Banner Title Goes Here",description="Banner Description Goes Here",children=null,helper=null,discountPercentage="",allowClose=!0,onClose=()=>{},ctaTitle="",onCTAClick=()=>{},className})=>{const classNames=(0,src.uY)("sui-advanced-banner",{[variation]:!(0,src.xb)(variation)},className);let closeBtnColor="black";return["black-friday","hub"].includes(variation)&&(closeBtnColor="white"),(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"advanced-banner",children:["black-friday"===variation&&!!discountPercentage&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__graphic",children:(0,jsx_runtime.jsxs)("div",{className:"sui-heading--h3 sui-advanced-banner__graphic-text",children:[(0,jsx_runtime.jsxs)("span",{children:[discountPercentage,"%"]}),(0,jsx_runtime.jsx)("span",{children:"OFF"})]})}),"black-friday"!==variation&&!(0,src.xb)(imageUrl)&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__graphic",children:(0,jsx_runtime.jsx)("img",{src:imageUrl,alt:"Banner logo"})}),(0,jsx_runtime.jsxs)("div",{className:"sui-advanced-banner__info",children:[!!title&&(0,jsx_runtime.jsx)("div",{className:"sui-heading--h3 sui-advanced-banner__info-title","data-testid":"advanced-banner-title",children:title}),!!description&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__info-desc","data-testid":"advanced-banner-desc",children:description}),!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__info-actions",children}),!!helper&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__info-helper",children:helper})]}),"black-friday"===variation&&!!ctaTitle&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__cta",children:(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-advanced-banner__cta-btn sui-advanced-banner__cta-btn--bf",onClick:onCTAClick,children:ctaTitle})}),allowClose&&(0,jsx_runtime.jsx)("div",{className:"sui-advanced-banner__close","data-testid":"advanced-banner-close",children:(0,jsx_runtime.jsx)(button_src.zx,{icon:"Close",appearance:"tertiary",isSmall:!0,iconOnly:!0,color:closeBtnColor,onClick:onClose,"aria-label":"close"})})]})};var input_src=__webpack_require__("./packages/ui/input/src/index.ts"),lib=(__webpack_require__("./packages/ui/box/src/index.ts"),__webpack_require__("./node_modules/@mdx-js/react/lib/index.js")),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.761bf671.svg",variations_namespaceObject=__webpack_require__.p+"static/media/variations.8cbbe5d6.svg",high_contrast_mode_namespaceObject=__webpack_require__.p+"static/media/high-contrast-mode.162d150c.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.9b8a8638.svg",display_location_namespaceObject=__webpack_require__.p+"static/media/display-location.86282b9a.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Advanced Banner Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Banner thumbnail"}),(0,jsx_runtime.jsx)("p",{children:"Banner thumbnail is designed based on the plugin and banner requirement. The recommended size 100px 1:1 ratio."}),(0,jsx_runtime.jsx)("h3",{children:"2. Banner Content"}),(0,jsx_runtime.jsx)("p",{children:"Banner content includes the main content of the banner."}),(0,jsx_runtime.jsx)("h3",{children:"3. Dismiss icon"}),(0,jsx_runtime.jsx)("p",{children:"Close icon to dismiss the banner."})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Variations",children:(0,jsx_runtime.jsx)("img",{src:variations_namespaceObject,alt:"Advanced Banner Variations",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"High Contrast Mode",children:(0,jsx_runtime.jsx)("img",{src:high_contrast_mode_namespaceObject,alt:"Advanced Banner High Contrast Mode",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Advanced Banner Spacing",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Where and how to display",children:(0,jsx_runtime.jsx)("img",{src:display_location_namespaceObject,alt:"Advanced Banner Display Location",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Advanced Banner"})," package as an\nindividual component or follow the Overview page instructions to get the\ncomplete SUI Components package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"variation",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Customizes the display style of the Advanced Banner."}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"plugin"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"hub"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"newsletter"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"black-friday"})})]})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"imageUrl*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Specifies the image to be displayed within the Advanced Banner."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"title*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Sets the headline or main text content of the Advanced Banner."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"description*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:'Enables you to include a detailed explanatory text or caption for the\ncontent within the Advanced Banner."'})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Represents the content of the Advanced Banner"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"helper*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Provides contextual text to enhance user understanding"})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"allowClose*",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Grants control over whether users can close or dismiss the component."}),(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"}),", a close button appears on the top right of the component"]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onClose*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the component is closed"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Additional css className(s)"})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Black Fiday Variation",children:[(0,jsx_runtime.jsxs)(_components.p,{children:["The following props are only relevant for the variation\n",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"black-friday"})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"discountPercentage*",tag:"number",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Represents the percentage value of a the discount applied"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"ctaTitle*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Represent the text of the action button"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onCTAClick*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A Callback function to be invoked when the action button is clicked"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const pluginCode=dedent_default()`
    <AdvancedBanner variation="plugin" />
`,hubCode=dedent_default()`
    <AdvancedBanner variation="hub" />
`,newsletterCode=dedent_default()`
    <div id="newsletter" style={{ display: "flex" }}>
        <Input name="input" id="name" placeholder="Enter your email " />
        <Button appearance="primary" color="blue">
            Subscribe Now
        </Button>
    </div>
`,blackFridayCode=dedent_default()`
    <AdvancedBanner ctaTitle="Buy Now!" discountPercentage={20} variation="black-friday" />
`;function Variations_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"General Plugins",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(AdvancedBanner,{variation:"plugin"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:pluginCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Hub",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(AdvancedBanner,{variation:"hub"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:hubCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Newsletter",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(AdvancedBanner,{variation:"newsletter",children:(0,jsx_runtime.jsxs)("div",{id:"newsletter",style:{display:"flex"},children:[(0,jsx_runtime.jsx)(input_src.I,{name:"input",id:"name",placeholder:"Enter your email "}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",children:(0,jsx_runtime.jsx)(_components.p,{children:"Subscribe Now"})})]})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:newsletterCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Black Friday",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(AdvancedBanner,{ctaTitle:"Buy Now!",discountPercentage:20,variation:"black-friday"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:blackFridayCode})]})]})}const Variations=function Variations_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Variations_createMdxContent,props)})):Variations_createMdxContent(props)},persistantCode=dedent_default()`
    <AdvancedBanner allowClose={false} />
`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Persistant",contained:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"allowClose={false}"})," to hide the close\nbutton"]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(AdvancedBanner,{allowClose:!1})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:persistantCode})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},defaultCode=dedent_default()`
  <AdvancedBanner helper="Helper Text Goes Here" />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of the Advanced Banner"}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(AdvancedBanner,{helper:"Helper Text Goes Here"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:defaultCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Variations & States",style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"Variations",value:"variations",children:(0,jsx_runtime.jsx)(Variations,{})}),(0,jsx_runtime.jsx)("div",{label:"States",value:"States",children:(0,jsx_runtime.jsx)(States,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function advanced_banner_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Advanced Banner",subtitle:"Extended banners will be utilised for special deals and offers.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const advanced_banner=function advanced_banner_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(advanced_banner_createMdxContent,props)})):advanced_banner_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const tag_namespaceObject=__webpack_require__.p+"static/media/tag.d345016a.svg",advanced_banner_stories={title:"SUI/Components/Collections/Advanced Banner",component:AdvancedBanner,parameters:{layout:"fullscreen",docs:{page:advanced_banner}}},advanced_banner_stories_AdvancedBanner=({...props})=>{let children=null;switch(props?.example){case"plugin":children=(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",children:"Primary"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"blue",children:"Secondary"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"blue",children:"Tertiary"})]});break;case"hub":children=(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"white",children:"Primary"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"white",children:"Secondary"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"white",children:"Tertiary"})]});break;case"newsletter":children=(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(input_src.I,{id:"newsletter-email",placeholder:"Enter your email to win today"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",children:"Subscribe now"})]})}return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(AdvancedBanner,{...props,children})})})})};advanced_banner_stories_AdvancedBanner.displayName="AdvancedBanner",advanced_banner_stories_AdvancedBanner.args={variation:"plugin",title:"This is the example heading for the banner.",description:"This is the example description for the banner. ",helper:"*Only admin users can see this message",discountPercentage:50,ctaTitle:"",allowClose:!0,imageUrl:tag_namespaceObject},advanced_banner_stories_AdvancedBanner.argTypes={variation:{name:"Examples",options:["plugin","hub","newsletter","black-friday"],control:{type:"select",labels:{plugin:"Example: General Plugins",hub:"Example: Hub",newsletter:"Example: News Letter","black-friday":"Example: Black Friday"}}},imageUrl:{name:"Image Url",control:{type:"text"},if:{arg:"variation",neq:"black-friday"}},title:{name:"Title",control:{type:"text"}},description:{name:"Description",control:{type:"text"}},helper:{name:"Helper",control:{type:"text"}},allowClose:{name:"Allow Close",control:{type:"boolean"}},discountPercentage:{name:"Discount Percentage",control:{type:"text"},if:{arg:"variation",eq:"black-friday"}},ctaTitle:{name:"CTA Title",control:{type:"text"},if:{arg:"variation",eq:"black-friday"}}},advanced_banner_stories_AdvancedBanner.__docgenInfo={description:"",methods:[],displayName:"AdvancedBanner"};const __namedExportsOrder=["AdvancedBanner"]},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-advanced-banner-stories-advanced-banner-stories.50221477.iframe.bundle.js.map