"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[5703],{"./packages/ui/color-picker/stories/ReactColorPicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColorPicker:()=>ReactColorPicker_stories_ColorPicker,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactColorPicker_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/button/src/index.ts"),input_src=__webpack_require__("./packages/ui/input/src/index.ts");const opaque_namespaceObject=__webpack_require__.p+"static/media/opaque.5f4f2e29.png";var es=__webpack_require__("./node_modules/react-color/es/index.js"),common=__webpack_require__("./node_modules/react-color/lib/components/common/index.js"),tinycolor=__webpack_require__("./node_modules/tinycolor2/esm/tinycolor.js");const colorToColorObject=color=>{const colorObject=(0,tinycolor.Z)(color??"#000000");return{hex:colorObject.toHexString(),rgb:colorObject.toRgb(),hsl:colorObject.toHsl(),hsv:colorObject.toHsv()}},customPointer=()=>(0,jsx_runtime.jsx)("div",{className:"sui-color-picker__pointer"}),picker=(0,es.iS)((({color="",type="hex",onColorChange=()=>null,onApplyButton})=>{const[selectedColor,setSelectedColor]=(0,react.useState)(colorToColorObject(color)),[hex,setHex]=(0,react.useState)(selectedColor?.hex),[red,setRed]=(0,react.useState)(selectedColor?.rgb?.r),[green,setGreen]=(0,react.useState)(selectedColor?.rgb?.g),[blue,setBlue]=(0,react.useState)(selectedColor?.rgb?.b),[alpha,setAlpha]=(0,react.useState)(selectedColor?.rgb?.a),[selectedFormat,setSelectedFormat]=(0,react.useState)(type),inputRef=(0,react.useRef)(null);(0,react.useEffect)((()=>{setHex(selectedColor?.hex),setRed(selectedColor?.rgb?.r),setGreen(selectedColor?.rgb?.g),setBlue(selectedColor?.rgb?.b),setAlpha(selectedColor?.rgb?.a);const colorCode="hex"===selectedFormat?selectedColor.hex:`rgba(${selectedColor.rgb.r}, ${selectedColor.rgb.g}, ${selectedColor.rgb.b}, ${selectedColor.rgb.a})`;onColorChange(colorCode)}),[onColorChange,selectedColor,selectedFormat]);const handleColorChange=(0,react.useCallback)((newColor=>{const colorObject=colorToColorObject(newColor);setSelectedColor(colorObject)}),[]),handleFormatChange=(0,react.useCallback)((event=>{setSelectedFormat(event.target.value)}),[]),handleHexInputChange=(0,react.useCallback)((event=>{const{value}=event.target;setSelectedColor((prevColor=>({...prevColor,hex:value})))}),[]),handleRGBInputChange=(0,react.useCallback)((event=>{const{name,value}=event.target;let inputVal=parseInt(value,10);isNaN(inputVal)||inputVal<0?inputVal=0:inputVal>255&&(inputVal=255),setSelectedColor((prevColor=>({...prevColor,rgb:{...prevColor.rgb,[name]:inputVal}})))}),[]),handleAlphaChange=(0,react.useCallback)((event=>{let value=parseInt(event.target.value,10);isNaN(value)||value<0?value=0:value>100&&(value=100),value/=100,setSelectedColor((prevColor=>({...prevColor,rgb:{...prevColor.rgb,a:value}})))}),[]),handleInputKeyDown=(0,react.useCallback)((()=>{if(inputRef.current){const valueLength=inputRef.current.value.length;inputRef.current.setSelectionRange(valueLength-1,valueLength-1)}}),[]);return(0,jsx_runtime.jsx)("div",{className:"sui-color-picker__popover",children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("div",{className:"sui-color-picker__saturation",children:(0,jsx_runtime.jsx)(common.OQ,{hsl:selectedColor.hsl,hsv:selectedColor.hsv,pointer:customPointer,onChange:handleColorChange})}),(0,jsx_runtime.jsx)("div",{className:"sui-color-picker__hue",children:(0,jsx_runtime.jsx)(common.PS,{hsl:selectedColor.hsl,pointer:customPointer,onChange:handleColorChange})}),(0,jsx_runtime.jsx)("div",{className:"sui-color-picker__alpha",children:(0,jsx_runtime.jsx)(common.xV,{rgb:selectedColor.rgb,hsl:selectedColor.hsl,hsv:selectedColor.hsv,pointer:customPointer,onChange:handleColorChange})}),(0,jsx_runtime.jsxs)("div",{className:"sui-color-picker__fields",children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("select",{className:"sui-color-picker__fields--select",value:selectedFormat,onChange:handleFormatChange,children:[(0,jsx_runtime.jsx)("option",{value:"hex",children:"Hex"},"hex"),(0,jsx_runtime.jsx)("option",{value:"rgb",children:"RGB"},"rgb")]})}),(0,jsx_runtime.jsxs)("div",{className:"sui-color-picker__fields--input",children:["hex"===selectedFormat&&(0,jsx_runtime.jsx)("input",{type:"text",className:"sui-color-picker__fields--hex",value:hex,onChange:handleHexInputChange}),"rgb"===selectedFormat&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("input",{name:"r",type:"number",min:"0",max:"255",value:red,onChange:handleRGBInputChange}),(0,jsx_runtime.jsx)("input",{name:"g",type:"number",min:"0",max:"255",value:green,onChange:handleRGBInputChange}),(0,jsx_runtime.jsx)("input",{name:"b",type:"number",min:"0",max:"255",value:blue,onChange:handleRGBInputChange})]}),(0,jsx_runtime.jsx)("input",{ref:inputRef,type:"text",min:"1",step:"1",max:"100",pattern:"[0-9]+",value:`${Math.round(100*(void 0!==alpha?alpha:100))}%`,onChange:handleAlphaChange,onKeyDown:handleInputKeyDown})]})]}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src.zx,{appearance:"secondary",color:"black",isSmall:!0,isFullWidth:!0,onClick:onApplyButton,children:"Apply"})})]})})}));var utils_src=__webpack_require__("./packages/utils/src/index.ts");const ColorPicker=({id="color-picker",color="",onChange,placeholder="Select color",isError=!1,isDisabled=!1,...props})=>{const[showPicker,setShowPicker]=(0,react.useState)(!1),[tempColor,setTempColor]=(0,react.useState)(color);(0,react.useEffect)((()=>{tempColor!==color&&setTempColor(color)}),[color]);const handleColorChange=(0,react.useCallback)((colorCode=>setTempColor(colorCode)),[]),handleColorApply=(0,react.useCallback)((()=>{onChange&&onChange(tempColor),setShowPicker(!1)}),[onChange,tempColor]),closeColorPicker=(0,react.useCallback)((e=>{e.stopPropagation(),setTempColor("")}),[color]),inputColorChange=(0,react.useCallback)((e=>{const inputValue=e?.target?.value;setTempColor(inputValue)}),[tempColor]);return(0,jsx_runtime.jsxs)("div",{className:(0,utils_src.uY)("sui-color-picker",{error:isError,disabled:isDisabled}),"data-testid":"color-picker",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-color-picker__color",children:[(0,jsx_runtime.jsx)(input_src.I,{className:"sui-color-picker__color--code",value:tempColor,onChange:inputColorChange,placeholder:placeholder??"",onClick:()=>setShowPicker(!0),isError:isError??!1,isDisabled:isDisabled??!1,id,...props}),(0,jsx_runtime.jsx)("div",{role:"button",tabIndex:0,className:"sui-color-picker__input-preview",onMouseDown:()=>setShowPicker(!showPicker),children:(0,jsx_runtime.jsx)("span",{className:"sui-color-picker__input-preview-icon","aria-hidden":!0,style:tempColor?{backgroundColor:tempColor}:{backgroundImage:`url(${opaque_namespaceObject})`}})}),(0,jsx_runtime.jsx)(src.zx,{className:"sui-color-picker__"+(tempColor?"clear":"button"),...tempColor&&{icon:"close-alt",iconOnly:!0,iconSize:"lg",onClick:closeColorPicker},...!tempColor&&{color:"blue",appearance:"tertiary",onClick:()=>setShowPicker(!showPicker)},isSmall:!0,isDisabled,children:tempColor?"Clear":"Select"})]}),showPicker&&(0,jsx_runtime.jsx)(picker,{color:tempColor,onColorChange:handleColorChange,onApplyButton:handleColorApply,...props})]})};var form_field_src=__webpack_require__("./packages/ui/form-field/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.26d36b1b.svg",color_swatch_namespaceObject=__webpack_require__.p+"static/media/color-swatch.2c7e1a07.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.92196ab4.svg",clear_icon_namespaceObject=__webpack_require__.p+"static/media/clear-icon.85fdb08c.svg",color_options_namespaceObject=__webpack_require__.p+"static/media/color-options.de3b5add.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy",children:[(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Label"}),(0,jsx_runtime.jsx)("p",{children:"A label to describe the color field."}),(0,jsx_runtime.jsx)("h3",{children:"2. Input"}),(0,jsx_runtime.jsx)("p",{children:"The input field allows users to enter color values directly, alongside with color picker control to pick a color."}),(0,jsx_runtime.jsx)("h3",{children:"3. Color Swatch"}),(0,jsx_runtime.jsx)("p",{children:"Color swatch provides a visual preview of the selected color."})]}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Anatomy"})})]}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h2",{children:"Input"}),(0,jsx_runtime.jsx)("img",{src:color_swatch_namespaceObject,alt:"Input"}),(0,jsx_runtime.jsx)("h3",{children:"1. Color picker control"}),(0,jsx_runtime.jsx)("h3",{children:"2. Color value"}),(0,jsx_runtime.jsx)("h3",{children:"3. Reset icon"})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h2",{children:"Color swatch"}),(0,jsx_runtime.jsx)("img",{src:color_swatch_namespaceObject,alt:"Color Swatch"}),(0,jsx_runtime.jsx)("h3",{children:"1. Color are"}),(0,jsx_runtime.jsx)("h3",{children:"2. Hue slider"}),(0,jsx_runtime.jsx)("h3",{children:"3. Opacity slider"}),(0,jsx_runtime.jsx)("h3",{children:"4. Color value control"}),(0,jsx_runtime.jsx)("h3",{children:"5. Apply button"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"States",children:[(0,jsx_runtime.jsxs)("p",{children:["Generally, Color input states are similar to the ",(0,jsx_runtime.jsx)("a",{target:"_blank",href:"/?path=/docs/sui-components-forms-input--docs",children:"input field"}),"."]}),(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"States"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Clear selected color",children:[(0,jsx_runtime.jsx)("p",{children:"Clear icon “x” will have a simple darker colour on both hover and clicked states."}),(0,jsx_runtime.jsx)("img",{src:clear_icon_namespaceObject,alt:"Clear Icon Colors"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Color options",children:[(0,jsx_runtime.jsx)("p",{children:"Clear icon “x” will have a simple darker colour on both hover and clicked states."}),(0,jsx_runtime.jsx)("img",{src:color_options_namespaceObject,alt:"Clear Icon Colors"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{contained:!0,style:{paddingTop:0,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"ColorPicker"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)("p",{children:"Color Picker Have the following components:"}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"color",tag:"string",small:!0},style:{paddingTop:10,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The initial color value"})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onChange",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["A callback function that will be invoked when the color is changed and applied, The first parameter ",(0,jsx_runtime.jsx)(docs_src.EK,{isSmall:!0,children:" color "})," represnts the new color string"]})})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"type",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The type of the Color Picker, It accepts one of the following options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"hex"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"rgb"})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onColorChange",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["A callback function that will be invoked when the user picks a new color, The first parameter ",(0,jsx_runtime.jsx)(docs_src.EK,{isSmall:!0,children:" color "})," represnts the new color string"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onApplyButton",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["A callback function that will be invoked when the user clicks on the Apply button, The first parameter ",(0,jsx_runtime.jsx)(docs_src.EK,{isSmall:!0,children:" event "})," represnts the click event object"]})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const sampleCode=dedent_default()`
    <FormField id="color-picker" label="Select colour" isSmall={true}>
       <ColorPicker color="#d73d3d"/>
    </FormField>
`,RgbTypeCode=dedent_default()`
    <FormField id="color-picker" label="Select colour" isSmall={true}>
       <ColorPicker type="rgb" color="rgba(128, 38, 38, 1)"/>
    </FormField>
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Below is the default form of a Color Picker with ",(0,jsx_runtime.jsx)(docs_src.EK,{isSmall:!0,children:" hex"})," Type:"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(form_field_src.W,{id:"color-picker",label:"Select colour",isSmall:!0,children:(0,jsx_runtime.jsx)(ColorPicker,{color:"#d73d3d"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"RGB Type",contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:"30px"},children:(0,jsx_runtime.jsx)(form_field_src.W,{id:"color-picker",label:"Select colour",isSmall:!0,children:(0,jsx_runtime.jsx)(ColorPicker,{type:"rgb",color:"rgba(128, 38, 38, 1)"})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:RgbTypeCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactColorPicker_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Color Picker",subtitle:"A color picker enables users to select and apply colors in a consistent and efficient manner.",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactColorPicker_stories={title:"SUI/Components/Advanced/Color Picker",component:ColorPicker,parameters:{layout:"fullscreen",docs:{page:function ReactColorPicker_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactColorPicker_createMdxContent,props)})):ReactColorPicker_createMdxContent()}}}},ReactColorPicker_stories_ColorPicker=({color,id,isDisabled,isError,errorMessage,...props})=>{const[currentColor,setCurrentColor]=(0,react.useState)(color);(0,react.useEffect)((()=>{setCurrentColor(color)}),[color]);const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsx)(form_field_src.W,{id,label:"Select colour",isSmall:!1,isDisabled,error:errorMessage,children:(0,jsx_runtime.jsx)(ColorPicker,{id,color:currentColor,onChange:setCurrentColor,isDisabled,...props})})})})})};ReactColorPicker_stories_ColorPicker.args={id:"color-picker",color:"#ffffff",type:"hex",isError:!1,isDisabled:!1,errorMessage:""},ReactColorPicker_stories_ColorPicker.argTypes={id:{name:"ID",control:{type:"text"}},color:{name:"Color",control:{type:"text"}},isError:{name:"Error",control:"boolean"},errorMessage:{name:"Error Message",control:"text"},isDisabled:{name:"Disabled",control:"boolean"},type:{name:"Color Type",options:["hex","rgb"],control:{type:"select",labels:{hex:"Hex",rgb:"RGB"}}}};const __namedExportsOrder=["ColorPicker"]},"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Label=({id,hidden=!1,children})=>{if(!("string"==typeof children?!(0,src.xb)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:classNames,children})},Helper=({id,children})=>{const classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children}),FormField=({id="",label,helper,error,className,isSmall=!1,isDisabled=!1,isLabelHidden=!1,children,...props})=>{let fieldId=(0,react.useId)();(0,src.xb)(id)||(fieldId=id);const isErrored="string"==typeof error?!(0,src.xb)(error??""):!!error,classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className),ariaAttrs={id:fieldId,isSmall,isDisabled,...!(0,src.xb)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...props,"data-testid":"form-field",children:[!(0,src.xb)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/ui/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const Icon=({name="",size="lg",position="start"})=>{if((0,src.xb)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const classNames=(0,src.uY)("suicons",{[name]:!0,[size||"md"]:["sm","md","lg"].includes(size||"md"),icon:!0},"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true","data-testid":`input-icon-${position}`})},Input=(0,react.forwardRef)((({type,defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall=!1,isReadOnly=!1,isError=!1,isDisabled=!1,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,icon,iconPosition,allowClear=!1,disableInteractions=!1,...props},ref)=>{const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src.X2)({});if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((()=>{setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(value??""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass);let inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);const classNames=(0,src.uY)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},className??""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const attrs={id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,...props},hasHintText=!(0,src.xb)(hint??"");return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.xb)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-input__input-clear",icon:"close-alt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"md":"lg",onClick:onClear,isSmall,onKeyDown:e=>(0,src.Jw)(e,onClear),children:"Clear"})]})}));Input.displayName="Input"}}]);
//# sourceMappingURL=ui-color-picker-stories-ReactColorPicker-stories.8afc4cff.iframe.bundle.js.map