"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[8963],{"./packages/ui/selector/stories/selector.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Selector:()=>selector_stories_Selector,__namedExportsOrder:()=>__namedExportsOrder,default:()=>selector_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),tooltip_src=__webpack_require__("./packages/ui/tooltip/src/index.ts"),tag_src=__webpack_require__("./packages/ui/tag/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const SelectorOption=({iconOrBrandUrl,title,description,imageUrl,isChecked,variation,tag,allowRemove,onRemove,isPro,tagColor})=>{const[isHovered,_isFocused,methods]=(0,src.X2)({}),classNames=(0,utils_src.uY)("sui-selector__option",{});let Icon=null;const isImage=(iconOrBrandUrl??"")?.indexOf(".")>-1;return isImage||(Icon=components.ZP[iconOrBrandUrl]),(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"selector-option",...methods,children:[isChecked&&(0,jsx_runtime.jsx)("div",{className:"sui-selector__option-tip",children:(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(components.ZP.CheckAlt,{size:"xs"})})}),allowRemove&&isHovered&&(0,jsx_runtime.jsx)("div",{className:"sui-selector__option-delete","data-testid":"selector-remove",children:(0,jsx_runtime.jsx)(tooltip_src.u,{type:"icon",icon:"trash",iconSize:"sm",appearance:"primary",color:"red",iconOnly:!0,isSmall:!0,className:"sui-selector__option-delete-btn",onClick:()=>onRemove,position:"top-right",customWidth:70,children:"Remove"})}),(!!iconOrBrandUrl||!!title)&&(0,jsx_runtime.jsxs)("div",{className:"sui-selector__option-header",children:[!!iconOrBrandUrl&&(0,jsx_runtime.jsxs)("div",{className:"sui-selector__option-header-icon","data-testid":"selector-icon",children:[isImage&&(0,jsx_runtime.jsx)("img",{src:iconOrBrandUrl,alt:"Selector icon"}),!isImage&&!!Icon&&(0,jsx_runtime.jsx)(Icon,{size:["icon-only"].includes(variation??"")?"md":"sm"})]}),!!title&&!["icon-only"].includes(variation??"")&&(0,jsx_runtime.jsxs)("div",{className:"sui-selector__option-header-title",children:[(0,jsx_runtime.jsx)("span",{children:title}),isPro&&(0,jsx_runtime.jsx)(tag_src.V,{design:"outlined",color:"black",isSmall:!0,isUppercase:!0,children:"Pro"}),!!tag&&!isPro&&(0,jsx_runtime.jsx)(tag_src.V,{style:"truncated",color:tagColor,children:tag})]})]}),(!!imageUrl||!!description)&&["compound","image"].includes(variation??"")&&(0,jsx_runtime.jsxs)("div",{className:"sui-selector__option-body",children:[!!imageUrl&&"image"===variation&&(0,jsx_runtime.jsx)("span",{className:"sui-selector__option-body-image",role:"img","aria-label":"Option image",style:{backgroundImage:`url('${imageUrl}')`}}),!!description&&(0,jsx_runtime.jsx)("div",{className:"sui-selector__option-body-description",children:description})]})]})},Selector=(0,react.forwardRef)((({label,name,value="",isChecked=!1,isDisabled=!1,isPro=!1,defaultValue="",alignment="center",variation="default",onChange=()=>{},onRemove=()=>{},allowRemove=!1,tag,iconOrBrandUrl,imageUrl,title,description,tagColor="default",...props},ref)=>{const id=(0,react.useId)(),[isHovered,isFocused,interactionMethods]=(0,src.X2)({}),handleOnChange=(0,react.useCallback)((e=>{onChange(e.target.checked,value,name)}),[name,onChange,value]);return(0,jsx_runtime.jsxs)("label",{htmlFor:id,tabIndex:isDisabled?-1:0,"data-testid":"selector",className:(0,utils_src.uY)("sui-selector",{disabled:isDisabled||isPro,hover:isHovered,focus:isFocused,checked:isChecked,[alignment]:!(0,utils_src.xb)(alignment??""),[variation]:!(0,utils_src.xb)(variation??"")}),...interactionMethods,children:[(0,jsx_runtime.jsx)("input",{ref,id,name,type:"radio",tabIndex:isDisabled?-1:0,checked:isChecked,"aria-checked":isChecked,className:"sui-screen-reader-only",disabled:isDisabled,onChange:handleOnChange,"data-testid":"selector-input"}),(0,jsx_runtime.jsx)(SelectorOption,{...props,tagColor,allowRemove,onRemove,tag,iconOrBrandUrl,imageUrl,isChecked,title,description,alignment:alignment??"left",variation:variation??"default",isPro}),label&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:label})]})}));Selector.displayName="Selector";var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.ed60536a.svg",variations_namespaceObject=__webpack_require__.p+"static/media/variations.e9b40afe.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.78738f13.svg",alignment_namespaceObject=__webpack_require__.p+"static/media/alignment.a3e2adb5.svg",remove_process_namespaceObject=__webpack_require__.p+"static/media/remove-process.0a6cef0f.svg",pro_selector_namespaceObject=__webpack_require__.p+"static/media/pro-selector.e86e5892.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.4090cfa3.svg",on_modal_namespaceObject=__webpack_require__.p+"static/media/on-modal.61c83779.svg",forminator_namespaceObject=__webpack_require__.p+"static/media/forminator.a7006fc9.svg",on_settings_namespaceObject=__webpack_require__.p+"static/media/on-settings.3c045172.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Header"}),(0,jsx_runtime.jsx)("p",{children:"The header includes title along with supportive icon and tag which are optional."}),(0,jsx_runtime.jsx)("h3",{children:"2. Body"}),(0,jsx_runtime.jsx)("p",{children:"A short description of the selector."})]}),(0,jsx_runtime.jsx)(docs_src.JX,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Selector Anatomy"})})]})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Variations",children:[(0,jsx_runtime.jsx)("p",{children:"Selector component has 4 different variation."}),(0,jsx_runtime.jsx)("img",{src:variations_namespaceObject,alt:"Selector Variations",style:{paddingBottom:30}}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Default"}),(0,jsx_runtime.jsx)("p",{children:"Default selector includes an icon, and a label with supportive tag."}),(0,jsx_runtime.jsx)("h3",{children:"2. Compound Selector"}),(0,jsx_runtime.jsx)("p",{children:"Compound selector includes a header and body."}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Header"})," The compound selector header includes an icon, label and supportive tag. Depending on the design requirement, the icon can replaced with the product icon."]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Body"})," Compound selector body comes with the general description."]})})]}),(0,jsx_runtime.jsx)("h3",{children:"3. Image Selector"}),(0,jsx_runtime.jsx)("p",{children:"Similar like compound selector, Image selector also has header and body."}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Header"})," Similar to Compound Selector. (Icon won’t be replaced with product icon.)"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Body"})," Image selector includes an image and description. Recommended image ration is 2:1."]})})]}),(0,jsx_runtime.jsx)("p",{children:"NOTE: Tags and descriptions are optional elements in the Selector component. however, it can be customised if necessary."}),(0,jsx_runtime.jsx)("h3",{children:"4. Icon only"}),(0,jsx_runtime.jsx)("p",{children:"Icon can be replaced with desired icon."})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Selector States"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Alignment",children:[(0,jsx_runtime.jsx)("p",{children:"Selector type Default and Compound have center-aligned variation."}),(0,jsx_runtime.jsx)("img",{src:alignment_namespaceObject,alt:"Selector Alignment"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Remove Process for Selector",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Icon and Image selector allow users to use custom icon and image. These two\nvariation has delete action to remove the uploaded items."})}),(0,jsx_runtime.jsx)("img",{src:remove_process_namespaceObject,alt:"Selector Remove Process"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Pro Selector",children:(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Pro selectors are used for those selector which are available in premium\nplan."})})}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("img",{src:pro_selector_namespaceObject,alt:"Pro Selector"})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Selector Spacing"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"On Modal",children:(0,jsx_runtime.jsx)("img",{src:on_modal_namespaceObject,alt:"OnModal"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Forminator - Insert fields",children:(0,jsx_runtime.jsx)("img",{src:forminator_namespaceObject,alt:"Selector Forminator"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"On Setting blocks",children:(0,jsx_runtime.jsx)("img",{src:on_settings_namespaceObject,alt:"Selector Forminator"})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Selector"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"title",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The main heading text for the Selector "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"description",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"An additional text that accompagnes the title "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"iconOrBrandUrl",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" Either an image url or an icon to be displayed, this wll appear beside the title "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"label",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A label text for the hidden radio input ( for screen readers ) "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"name",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A label text for screen readers"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"value",tag:"string | number",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Value of the radio input"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isChecked",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the radio input is checked or not"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isDisabled",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the radio input is disabled or not"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isPro",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"}),", the Selector appears in the pro variation"]})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"alignment",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Specifies the alignment of the content, it could be one of two values:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"left"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"center"})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"allowRemove",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether to allow removing options or not, when set to true a remove button will appear on the option on hover"})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"variation",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The component variation style"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"default"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"icon-only"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"compound"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"image"})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"tag",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" A text to appear on a custom tag "})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"tagColor",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:" The color variation for the tag "}),(0,jsx_runtime.jsx)("p",{children:" Allowed options "}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"default"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"blue"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"yellow"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"red"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"green"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"white"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"black"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"navy"})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"imageUrl",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" The url to the image to be displayed in the image variation "})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"onChange",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked upon radio input change, the function has the following parameter "}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isChecked"})," The new checked value of the input "]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"value"})," The radio option value "]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"name"})," The name of the radio input "]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onRemove",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:" A callback function to be invoked upon removing an option "})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const iconOnlyCode=dedent_default()`
  <Selector variation="icon-only" iconOrBrandUrl="Bell" />
`,imageCode=dedent_default()`
  <Selector
    variation="image"
    title="Option 1"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    iconOrBrandUrl="Bell"
    imageUrl="https://placehold.co/200x100.png"
  />
`,compoundCode=dedent_default()`
  <Selector
    variation="compound"
    title="Option 1"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    iconOrBrandUrl="Bell"
  />
`;function Variations_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Icon Only",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsx)(Selector,{variation:"icon-only",iconOrBrandUrl:"Bell"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:iconOnlyCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Image",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsx)(Selector,{variation:"image",title:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",iconOrBrandUrl:"Bell",imageUrl:"https://placehold.co/200x100.png"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:imageCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Compound",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsx)(Selector,{variation:"compound",title:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",iconOrBrandUrl:"Bell"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:compoundCode})]})]})}const Variations=function Variations_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Variations_createMdxContent,props)})):Variations_createMdxContent()},leftCode=dedent_default()`
   <Selector alignment="left" title="Option 1" iconOrBrandUrl="Bell" />
`,centerCode=dedent_default()`
   <Selector alignment="center" title="Option 1" iconOrBrandUrl="Bell" />
`;function Alignment_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Left",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsx)(Selector,{alignment:"left",title:"Option 1",iconOrBrandUrl:"Bell"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:leftCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Center",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsx)(Selector,{alignment:"center",title:"Option 1",iconOrBrandUrl:"Bell"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:centerCode})]})]})}const Alignment=function Alignment_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Alignment_createMdxContent,props)})):Alignment_createMdxContent()},disabledCode=dedent_default()`
  <Selector
    isDisabled={true}
    variation="compound"
    title="Option 1"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    iconOrBrandUrl="Bell"
  />
`,allowRemoveCode=dedent_default()`
  <Selector
    allowRemove={true}
    variation="compound"
    title="Option 1"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    iconOrBrandUrl="Bell"
  />
`,proVersion=dedent_default()`
  <Selector
    isPro={true}
    variation="compound"
    title="Option 1"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    iconOrBrandUrl="Bell"
  />
`,customTagCode=dedent_default()`
  <Selector
    tag="New"
    tagColor="green"
    variation="compound"
    title="Option 1"
    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
    iconOrBrandUrl="Bell"
  />
`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Selector,{isDisabled:!0,variation:"compound",title:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",iconOrBrandUrl:"Bell"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:disabledCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Allow Remove",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["When ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"allowRemove"})," is set to"," ","\n",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"}),", a button for deletion will appear on hover"]})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Selector,{allowRemove:!0,variation:"compound",title:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",iconOrBrandUrl:"Bell"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:allowRemoveCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Pro Version",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Selector,{isPro:!0,variation:"compound",title:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",iconOrBrandUrl:"Bell"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:proVersion})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Custom Tag",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"tag"})," to add a custom text displayed in a tag"]}),(0,jsx_runtime.jsxs)("p",{children:["You can also use the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"tagColor"})," to customize its color"]}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Selector,{tag:"New",tagColor:"green",variation:"compound",title:"Option 1",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",iconOrBrandUrl:"Bell"})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:customTagCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},basicCode=dedent_default()`
  <Selector alignment="center" title="Option 1" iconOrBrandUrl="Bell" />
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Below is the basic form of the Selector component, we will be displaying one\noption which represents a single instance of the selector, you can add\nmultiple options as per your needs"})}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)("div",{style:{padding:50},children:(0,jsx_runtime.jsx)(Selector,{alignment:"center",title:"Option 1",iconOrBrandUrl:"Bell"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:basicCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"States & Variations",style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"Variations",value:"variations",children:(0,jsx_runtime.jsx)(Variations,{})}),(0,jsx_runtime.jsx)("div",{label:"Alignment",value:"alignement",children:(0,jsx_runtime.jsx)(Alignment,{})}),(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function selector_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Selector",subtitle:"The selector is a block that provides organised options to users.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const selector=function selector_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(selector_createMdxContent,props)})):selector_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var grid_src=__webpack_require__("./packages/ui/grid/src/index.ts");const selector_stories={title:"SUI/Components/Core/Selector",component:Selector,parameters:{layout:"fullscreen",docs:{page:selector}}},options=[{name:"sui-selector-button",value:1},{name:"sui-selector-button",value:2},{name:"sui-selector-button",value:3},{name:"sui-selector-button",value:4}],selector_stories_Selector=({variation,...args})=>{const[val,setVal]=(0,react.useState)(),onChange=(_isChecked,value,_name)=>{setVal(value)},colSize="icon-only"===variation?1:3;return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4},children:(0,jsx_runtime.jsx)(grid_src.X,{align:{sm:"inline"},children:options.map(((option,index)=>(0,jsx_runtime.jsx)(grid_src.J,{size:colSize,children:(0,jsx_runtime.jsx)(Selector,{onChange,isChecked:val===option.value,variation,value:option.value,...args},index)},`col-${index}`)))})})})})};selector_stories_Selector.args={title:"Option Title",iconOrBrandUrl:"Info",variation:"default",alignment:"left",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",imageUrl:"https://placehold.co/200x100.png",allowRemove:!1,isDisabled:!1,isPro:!0,tag:"Tag",tagColor:"default"},selector_stories_Selector.argTypes={title:{name:"Title",control:{type:"text"}},isPro:{name:"Pro",control:{type:"boolean"}},iconOrBrandUrl:{name:"Icon/Image url",control:{type:"text"}},imageUrl:{name:"Image url",control:{type:"text"}},description:{name:"Description",control:{type:"text"}},allowRemove:{name:"Allow Remove",control:{type:"boolean"}},isDisabled:{name:"Disabled",control:{type:"boolean"}},variation:{name:"Variation",options:["default","icon-only","compound","image"],control:{type:"select",labels:{default:"Default","icon-only":"Icon Only",compound:"Compound",image:"Image"}}},alignment:{name:"Alignment",options:["left","center"],control:{type:"select",labels:{left:"Left",center:"Center"}}},tagColor:{name:"Tag Color",options:["default","blue","navy","yellow","red","green","black","white"],control:{type:"select",labels:{"":"Default",blue:"Blue (Information)",navy:"Navy Blue",yellow:"Yellow (Warning)",red:"Red (Error)",green:"Green (Success)",black:"Black",white:"White"}}}},selector_stories_Selector.parameters={...selector_stories_Selector.parameters,docs:{...selector_stories_Selector.parameters?.docs,source:{originalSource:'({\n  variation,\n  ...args\n}: Omit<SelectorProps, "value">) => {\n  const [val, setVal] = useState<number>();\n  const boxStyles = {\n    padding: 20,\n    borderRadius: 4\n    // background: "#fff",\n  };\n\n  const onChange = (_isChecked: boolean, value: number, _name: string) => {\n    setVal(value);\n  };\n  const colSize = "icon-only" === variation ? 1 : 3;\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={boxStyles}>\n                    <Row align={{\n          sm: "inline"\n        }}>\n                        {options.map((option, index) => <Col key={`col-${index}`} size={colSize}>\n                                <SuiSelector key={index} onChange={onChange} isChecked={val === option.value} variation={variation} value={option.value} {...args} />\n                            </Col>)}\n                    </Row>\n                </div>\n            </div>\n        </div>;\n}',...selector_stories_Selector.parameters?.docs?.source}}};const __namedExportsOrder=["Selector"]},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Col,X:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts"));const Row=({align,className,children,...props})=>{const expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames="sui-row";for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.xb)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"grid",...props,children})},Col=({size,children,className,...props})=>{const classNames=(0,src.uY)("sui-col",{[size]:!!size},className);return"colSize"in props&&delete props.colSize,"size"in props&&delete props.size,(0,jsx_runtime.jsx)("div",{className:classNames,...props,children})}},"./packages/ui/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts"));const Tag=({design,color,style,className,isSmall=!1,isUppercase=!1,isDisabled=!1,children,...props})=>{const hasDesign="outlined"===design,hasColor=!(0,src.o8)(color)&&!(0,src.xb)(color),hasStyle=["multiline","truncated"].includes(style??""),classNames=(0,src.uY)("sui-tag",{[`${design}-${color}`]:hasDesign&&hasColor,[design]:hasDesign&&!hasColor,[color]:!hasDesign&&hasColor,[style]:hasStyle,sm:isSmall,uppercase:isUppercase,disabled:isDisabled},className);return(0,jsx_runtime.jsx)("span",{className:classNames,...props,"data-testid":"tag",children:(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children})})}},"./packages/ui/tooltip/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Icon=({name="tooltip",size="md"})=>{if(!(!(0,utils_src.o8)(name)&&!(0,utils_src.xb)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const classNames=(0,utils_src.uY)("suicons",{[name]:!(0,utils_src.xb)(name),[size]:!0});return(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)("span",{className:classNames})})},Tooltip=({label,type="button",className,position="top",customWidth,customMobileWidth,children,onClick=()=>{},onMouseEnter=()=>{},onMouseLeave=()=>{},onFocus=()=>{},onBlur=()=>{},href,icon,...props})=>{const[isHovered,isFocused,methods,toggleHover]=(0,hooks_src.X2)({onMouseEnter,onMouseLeave,onFocus,onBlur}),attrs={},classNames=(0,utils_src.uY)("sui-tooltip",{show:isHovered,focus:isFocused,"custom-width":!!customWidth,[position]:!0},className??"");(customWidth||customMobileWidth)&&(attrs.style={...customWidth&&{"--tooltip-width":`${customWidth}px`},...customMobileWidth&&{"--tooltip-width-mobile":`${customMobileWidth}px`}});const escFunction=(0,react.useCallback)((event=>{"keyCode"in event&&"Escape"===event.code&&isHovered&&toggleHover(!1)}),[isHovered,toggleHover]);(0,react.useEffect)((()=>(document.addEventListener("keydown",escFunction),()=>{document.removeEventListener("keydown",escFunction)})),[escFunction]);const onClickCallback=(0,react.useCallback)((()=>{onClick&&onClick()}),[onClick]);return(0,jsx_runtime.jsxs)("div",{className:classNames,...methods,"data-testid":"tooltip",children:[(()=>{switch(type){case"button":case"link":return(0,jsx_runtime.jsx)(src.zx,{...props,...icon&&{icon},href,onClick:onClickCallback,children:label});case"text":return(0,jsx_runtime.jsx)("span",{...props,role:"button",tabIndex:0,onClick:onClickCallback,onKeyDown:e=>(0,utils_src.Jw)(e),children:label});case"icon":return(0,jsx_runtime.jsx)(Icon,{name:icon})}})(),!!children&&(0,jsx_runtime.jsx)("span",{className:"sui-tooltip__content",role:"tooltip","aria-live":"polite","aria-hidden":!isHovered,tabIndex:isHovered?0:-1,...attrs,children})]})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-selector-stories-selector-stories.b8152754.iframe.bundle.js.map