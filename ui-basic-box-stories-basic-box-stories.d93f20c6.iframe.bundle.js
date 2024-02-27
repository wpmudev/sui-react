"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[3461],{"./packages/ui/basic-box/stories/basic-box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicBox:()=>basic_box_stories_BasicBox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>basic_box_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const BasicBox=({title="Box Title",description,headerActions,footerActions,className,isPro=!1,children,_style})=>{const[isHovered,isFocused,methods]=(0,hooks_src.Mj)({});children=(0,hooks_src.Q8)(children);const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-basic-box",{focus:isFocused,hover:isHovered&&!isFocused,pro:isPro},suiInlineClassname);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"basic-box",children:[(0,jsx_runtime.jsx)("div",{className:"sui-basic-box__header",children:(0,jsx_runtime.jsxs)("div",{className:"sui-basic-box__header-info",children:[!!title&&(0,jsx_runtime.jsx)("h3",{className:"sui-basic-box__header-title sui-heading--h3","data-testid":"basic-box-title",children:title}),(0,jsx_runtime.jsx)("div",{className:"sui-basic-box__actions",children:headerActions&&headerActions}),!!description&&(0,jsx_runtime.jsx)("div",{className:"sui-basic-box__header-desc","data-testid":"basic-box-description",children:description})]})}),(0,jsx_runtime.jsx)("div",{className:"sui-basic-box__body","data-testid":"basic-box-body",children}),!!footerActions&&(0,jsx_runtime.jsxs)("div",{className:"sui-basic-box__footer",children:[!!footerActions?.[0]&&(0,jsx_runtime.jsx)("div",{className:"sui-basic-box__footer-left",children:footerActions?.[0]}),!!footerActions?.[1]&&(0,jsx_runtime.jsx)("div",{className:"sui-basic-box__footer-right",children:footerActions?.[1]})]})]})};var button_src=__webpack_require__("./packages/ui/button/src/index.ts"),setting_block_src=__webpack_require__("./packages/ui/setting-block/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.0d3dc3cf.svg",spacings_namespaceObject=__webpack_require__.p+"static/media/spacings.4db68b5d.svg",examples_namespaceObject=__webpack_require__.p+"static/media/examples.e2a2b95c.svg",configs_namespaceObject=__webpack_require__.p+"static/media/configs.dc3fb271.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Basic Box Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"1. Box header"}),(0,jsx_runtime.jsx)("p",{children:"Box header can have a simple title and description."}),(0,jsx_runtime.jsx)("h3",{children:"2. Box body"}),(0,jsx_runtime.jsx)("p",{children:"Box body is a flexible area where the main content can be inserted. It may include list, table or any type of content."}),(0,jsx_runtime.jsx)("h3",{children:"3. Box footer"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Box footer is a footer area which is generally used to display the buttons. However, it can be modified as the design requirement."})})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Spacings",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:spacings_namespaceObject,alt:"Basic Box Spacings",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Examples",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:examples_namespaceObject,alt:"Basic Box Examples",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("img",{src:configs_namespaceObject,alt:"Basic Box Configs",style:{marginBottom:20}})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-basic-box"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"title",type:"React Node",defaultValue:"Box Title",children:(0,jsx_runtime.jsx)("p",{children:"Represents the heading text of the Box"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"description",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Additional explanation text that accompanies the title"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"headerActions",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Optional header actions to be displayed in the Header of the Box"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"footerActions",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Optional footer actions to be displayed in the footer"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isPro",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Sets the type of the Box, the pro version have a disabled box"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Represents the body content of the Box"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Custom css className(s) for further customization"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const generalExampleCode=dedent_default()`
      <BasicBox
          title="Heading Text"
          description="Description text goes here"
          headerActions={
            <>
                <Button
                  type="secondary"
                  color="black"
                  isSmall={true}
                  icon="Upload"
                >
                  Upload
                </Button>
              <Button type="primary" color="blue" isSmall={true}>
                 Create new
              </Button>
            </>
          }
          footerActions={[
            "Example of footer content on left",
            <Button key={0} type="primary" color="blue" isSmall={true}>
               Save changes
            </Button>,
          ]}
        >
            <SettingBlock
                title="Import"
                description="Import your blocklist and allowlist from another website."
            >
                <p>
                  Upload the blocklist and allowlist CSV file exported from another
                  website. Imported user agents will be added to the existing blocklist
                  and allowlist.
                </p>
                <div>
                  <Button
                       type="secondary"
                       icon="Upload"
                       color="black"
                       isSmall={true}
                    >
                      Upload file
                  </Button>
                </div>
            </SettingBlock>
            <SettingBlock
                title="Export"
                description="Export your blocklist and allowlist for use on another website."
            >
                <Button
                    type="secondary"
                    icon="Upload"
                    color="black"
                    isSmall={true}
                  >
                    Export
                </Button>
            </SettingBlock>
      </BasicBox>
`,proExampleCode=dedent_default()`
      <BasicBox
          isPro={true}
          title="Heading Text"
          description="Description text goes here"
          headerActions={
            <>
                <Button
                  type="secondary"
                  color="black"
                  isSmall={true}
                  icon="Upload"
                >
                  Upload
                </Button>
              <Button type="primary" color="blue" isSmall={true}>
                 Create new
              </Button>
            </>
          }
          footerActions={[
            "Example of footer content on left",
            <Button key={0} type="primary" color="blue" isSmall={true}>
               Save changes
            </Button>,
          ]}
        >
            <SettingBlock
                title="Import"
                description="Import your blocklist and allowlist from another website."
            >
                <p>
                  Upload the blocklist and allowlist CSV file exported from another
                  website. Imported user agents will be added to the existing blocklist
                  and allowlist.
                </p>
                <div>
                  <Button
                       type="secondary"
                       icon="Upload"
                       color="black"
                       isSmall={true}
                    >
                      Upload file
                  </Button>
                </div>
            </SettingBlock>
            <SettingBlock
                title="Export"
                description="Export your blocklist and allowlist for use on another website."
            >
                <Button
                    type="secondary"
                    icon="Upload"
                    color="black"
                    isSmall={true}
                  >
                    Export
                </Button>
            </SettingBlock>
      </BasicBox>
`,SuiBasicBox=({isPro=!1})=>{const _components=Object.assign({p:"p",div:"div"},(0,lib.RP)());return(0,jsx_runtime.jsxs)(BasicBox,{isPro,title:"Heading Text",description:"Description text goes here",headerActions:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(button_src.$,{type:"secondary",color:"black",isSmall:!0,icon:"Upload",children:"Upload"}),(0,jsx_runtime.jsx)(button_src.$,{type:"primary",color:"blue",isSmall:!0,children:"Create new"})]}),footerActions:["Example of footer content on left",(0,jsx_runtime.jsx)(button_src.$,{type:"primary",color:"blue",isSmall:!0,children:"Save changes"},0)],children:[(0,jsx_runtime.jsxs)(setting_block_src.m,{title:"Import",description:"Import your blocklist and allowlist from another website.",children:[(0,jsx_runtime.jsx)(_components.p,{children:"Upload the blocklist and allowlist CSV file exported from another website. Imported user agents will be added to the existing blocklist and allowlist."}),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"secondary",icon:"Upload",color:"black",isSmall:!0,children:"Upload file"})})]}),(0,jsx_runtime.jsx)(setting_block_src.m,{title:"Export",description:"Export your blocklist and allowlist for use on another website.",children:(0,jsx_runtime.jsx)(button_src.$,{type:"secondary",icon:"Upload",color:"black",isSmall:!0,children:"Export"})})]})};function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is a general example of the Basic Box component"}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(SuiBasicBox,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalExampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Pro variation",children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isPro={true}"})," to change the variation"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(SuiBasicBox,{isPro:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:proExampleCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function basic_box_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Basic Box",subtitle:"Basic box is a component that is used to display page settings or page content.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const basic_box_stories={title:"SUI/Components/Advanced/Basic Box",component:BasicBox,parameters:{layout:"fullscreen",docs:{page:function basic_box_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(basic_box_createMdxContent,props)})):basic_box_createMdxContent()}}}},basic_box_stories_BasicBox=({...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"white",borderRadius:"4px"},children:(0,jsx_runtime.jsxs)(BasicBox,{...props,children:[(0,jsx_runtime.jsxs)(setting_block_src.m,{title:"Import",description:"Import your blocklist and allowlist from another website.",children:[(0,jsx_runtime.jsx)("p",{children:"Upload the blocklist and allowlist CSV file exported from another website. Imported user agents will be added to the existing blocklist and allowlist."}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.$,{type:"secondary",icon:"Upload",colorScheme:"black",isSmall:!0,children:"Upload file"})})]}),(0,jsx_runtime.jsx)(setting_block_src.m,{title:"Export",description:"Export your blocklist and allowlist for use on another website.",children:(0,jsx_runtime.jsx)(button_src.$,{type:"secondary",icon:"Upload",colorScheme:"black",isSmall:!0,children:"Export"})})]})})})});basic_box_stories_BasicBox.args={title:"Example with setting block",description:"This is example of the basic box with setting blocks.",isPro:!1,headerActions:(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(button_src.$,{type:"secondary",colorScheme:"black",isSmall:!0,icon:"Upload",children:"Upload"}),(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"blue",isSmall:!0,children:"Create new"})]}),footerActions:[(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"blue",isSmall:!0,children:"Save changes"},0),(0,jsx_runtime.jsx)(button_src.$,{startIcon:"PowerOff",type:"tertiary",colorScheme:"red",isSmall:!0,children:"Deactivate"},1)]},basic_box_stories_BasicBox.argTypes={title:{name:"Title",control:{type:"text"}},description:{name:"Description",control:{type:"text"}},isPro:{name:"Pro",control:{type:"boolean"}},headerActions:{name:"Header actions"},footerActions:{name:"Footer actions"}};const __namedExportsOrder=["BasicBox"]},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.$l,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,_htmlProps={},_style,...restProps},ref)=>{children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=((0,utils_src.Im)(startIcon??""),!(0,utils_src.Im)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...(0,utils_src.EX)(_htmlProps),...interactionMethods??{},...(0,utils_src.EX)(restProps)};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/setting-block/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>SettingBlock});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/tag/src/index.ts")),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SettingBlock=({title="title",description,className,isPro=!1,isFluid=!1,children,actions,_style={}})=>{const[isHovered,isFocused,methods]=(0,hooks_src.Mj)({}),{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,utils_src.n0)("sui-setting-block",{focus:isFocused,hover:isHovered&&!isFocused,pro:isPro,fluid:isFluid},suiInlineClassname);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"setting-block",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-setting-block__header",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-setting-block__info",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-setting-block__info-title sui-heading--h5",children:[title,isPro&&(0,jsx_runtime.jsx)(src.v,{design:"outlined",colorScheme:"black",isSmall:!0,children:"Pro"})]}),(0,jsx_runtime.jsx)("div",{className:"sui-setting-block__info-desc",children:description})]}),actions&&(0,jsx_runtime.jsx)("div",{className:"sui-setting-block__actions",children:actions})]}),children&&(0,jsx_runtime.jsx)("div",{className:"sui-setting-block__body",children})]})}},"./packages/ui/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Tag=({design,colorScheme,contentWrap="default",className,isSmall=!1,isUppercase=!1,isDisabled=!1,isDismissable=!1,children,onDismiss=()=>{},_htmlProps={},_style={}})=>{const hasDesign="outlined"===design,hasColor=!(0,src.b0)(colorScheme)&&!(0,src.Im)(colorScheme),hasStyle=["multiline","truncated"].includes(contentWrap),{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-tag",{[`${design}-${colorScheme}`]:hasDesign&&hasColor,[design]:hasDesign&&!hasColor,[colorScheme]:!hasDesign&&hasColor,[contentWrap]:hasStyle,sm:isSmall,uppercase:isUppercase,disabled:isDisabled},suiInlineClassname);return children=(0,hooks_src.Q8)(children,"{tag content}"),(0,jsx_runtime.jsx)("span",{className:classNames,...(0,src.EX)(_htmlProps),"data-testid":"tag",children:(0,jsx_runtime.jsxs)("div",{className:"sui-tag__wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children}),isDismissable&&(0,jsx_runtime.jsxs)("button",{className:"sui-tag__cta",onClick:onDismiss,children:[(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.bm,{size:"xs"})}),(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Dismiss"})]})]})})}}}]);
//# sourceMappingURL=ui-basic-box-stories-basic-box-stories.d93f20c6.iframe.bundle.js.map