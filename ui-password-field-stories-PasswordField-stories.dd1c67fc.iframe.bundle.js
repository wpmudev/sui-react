"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[6992],{"./packages/ui/password-field/stories/PasswordField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PasswordField:()=>PasswordField_stories_PasswordField,__namedExportsOrder:()=>__namedExportsOrder,default:()=>PasswordField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/form-field/src/index.ts"),input_src=__webpack_require__("./packages/ui/input/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const PasswordField=({id,buttonType="icon",isSmall=!1,isError=!1,isDisabled=!1,placeholder,customWidth,...props})=>{const uniqueId=(0,react.useId)();id||(id=uniqueId);const[hasValue,setHasValue]=(0,react.useState)(!1),[isVisible,setVisible]=(0,react.useState)(!1),inputAttrs={id,type:isVisible?"text":"password",inputClass:"sui-password__input",isError,isDisabled,iconPosition:"end",placeholder,onKeyUp:()=>{const inputElement=document.getElementById(id),getValue=inputElement?.value;setHasValue(getValue?.length>0)},isSmall,...props},buttonProps={label:isVisible?"Hide":"Show",appearance:"secondary",color:"black",className:"sui-password__button",isDisabled:isDisabled||!hasValue,onClick:()=>setVisible(!isVisible),..."icon"===buttonType&&{icon:isVisible?"Hide":"Show",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"sm":"md"},isSmall};return(0,jsx_runtime.jsxs)("div",{className:"sui-password","data-testid":"password-field",...customWidth&&{style:{maxWidth:`${customWidth}px`}},children:[(0,jsx_runtime.jsx)(input_src.E,{...inputAttrs}),(0,jsx_runtime.jsx)(button_src.q,{...buttonProps,children:buttonProps.label})]})};PasswordField.displayName="PasswordField";var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.db5cf674.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.35e1fd12.svg",toggleIcon_namespaceObject=__webpack_require__.p+"static/media/toggleIcon.de639fb5.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Anatomy",children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Password Field Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsxs)("p",{children:[" Passwords have the same Anatomy as the ",(0,jsx_runtime.jsx)("a",{target:"_blank",href:"/?path=/docs/sui-components-forms-text-field--docs",children:"TextField"}),". It has an additional property that allows users to view and hide passwords. "]})]}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Password States"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Hide and view password toggle",children:[(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Password Hide & View Password Toggle",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("p",{children:" Password field can use either an icon or a button to hide or show the password. "})]}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Password Hide/show Icon Condition",children:(0,jsx_runtime.jsx)("img",{src:toggleIcon_namespaceObject,alt:"Password Hide & View Password Toggle",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Qr,{packageName:"@wpmudev/sui-password-field"}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src._6,{title:"id",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"A unique identifier for the password field"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"placholder",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"A placholder for the password field"})}),(0,jsx_runtime.jsxs)(docs_src._6,{title:"buttonType",type:"string",defaultValue:"text",children:[(0,jsx_runtime.jsx)("p",{children:" Specifies the button type for showing and hiding the password. "}),(0,jsx_runtime.jsx)("p",{children:" Allowed values: "}),(0,jsx_runtime.jsxs)(docs_src._u,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"icon"})," displays an icon button "]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"standard"})," displays a text button instead ( show & hide ) "]})})]})]}),(0,jsx_runtime.jsx)(docs_src._6,{title:"customWidth",type:"number",children:(0,jsx_runtime.jsxs)("p",{children:["Custom width in ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"pixels"})]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"isSmall",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:[" When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:" true "})," the field will be smaller "]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"isError",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"true"}),", the input will have a red border "]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:" Indicates whether the field is disabled or not "})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const DisabledPasswordFieldCode=dedent_default()`
<FormField
	id="passwordId"
	label="Label"
	helper="Help text"
	isDisabled={true}
>
	<PasswordField placeholder="Enter your password" />
</FormField>
`,ErrorPasswordFieldCode=dedent_default()`
<FormField
	id="passwordId"
	label="Label"
	helper="Help text"
	error="Error message"
>
	<PasswordField placeholder="Enter your password" />
</FormField>
`;function States_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.W,{id:"passwordId",label:"Label",helper:"Help text",isDisabled:!0,children:(0,jsx_runtime.jsx)(PasswordField,{placeholder:"Enter your password"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:DisabledPasswordFieldCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.W,{id:"passwordId",label:"Label",helper:"Help text",error:"Error message",children:(0,jsx_runtime.jsx)(PasswordField,{placeholder:"Enter your password"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:ErrorPasswordFieldCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent()},SmallPasswordFieldCode=dedent_default()`
<FormField
	id="passwordId"
	label="Label"
	helper="Help text"
	isSmall={true}
>
	<PasswordField placeholder="Enter your password" />
</FormField>
`;function Size_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.W,{id:"passwordId",label:"Label",helper:"Help text",isSmall:!0,children:(0,jsx_runtime.jsx)(PasswordField,{placeholder:"Enter your password"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:SmallPasswordFieldCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent()},StandardButtonCode=dedent_default()`
<FormField
	id="passwordId"
	label="Label"
	helper="Help text"
>
	<PasswordField placeholder="Enter your password" button={{ type: "standard" }} />
</FormField>
`,IconButtonCode=dedent_default()`
<FormField
	id="passwordId"
	label="Label"
	helper="Help text"
>
	<PasswordField placeholder="Enter your password" button={{type: "icon-button"}} />
</FormField>
`;function ButtonType_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Standard Button ( default ) ",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.W,{id:"passwordId",label:"Label",helper:"Help text",children:(0,jsx_runtime.jsx)(PasswordField,{placeholder:"Enter your password",button:{type:"standard"}})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:StandardButtonCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Icon Button",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.W,{id:"passwordId",label:"Label",helper:"Help text",children:(0,jsx_runtime.jsx)(PasswordField,{placeholder:"Enter your password",button:{type:"icon-button"}})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:IconButtonCode})]})]})}const ButtonType=function ButtonType_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ButtonType_createMdxContent,props)})):ButtonType_createMdxContent()},sampleCode=dedent_default()`
<FormField
	id="passwordId"
	label="Label"
	helper="Help text"
>
	<PasswordField placeholder="Enter your password" />
</FormField>
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of a Password Field, used for most cases."}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.W,{id:"passwordId",label:"Label",helper:"Help text",children:(0,jsx_runtime.jsx)(PasswordField,{placeholder:"Enter your password"})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.mg,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})}),(0,jsx_runtime.jsx)("div",{label:"Button Type",value:"button-type",children:(0,jsx_runtime.jsx)(ButtonType,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function PasswordField_createMdxContent(props){return docs_src.K2||_missingMdxReference("Page",!1),docs_src.K2.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.C,{children:(0,jsx_runtime.jsxs)(docs_src.K2.Tabs,{title:"Password Field",subtitle:"The Password Field component provides a secure input field for users to\nenter and conceal their passwords, ensuring confidentiality and\nprotecting sensitive information.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const PasswordField_stories={title:"SUI/Components/Forms/Password Field",component:PasswordField,parameters:{layout:"fullscreen",docs:{page:function PasswordField_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(PasswordField_createMdxContent,props)})):PasswordField_createMdxContent()}}}},PasswordField_stories_PasswordField=({id,buttonType,label,helper,error,isSmall,isDisabled,...args})=>{const fieldAttrs={id,label,helper,error,isSmall,isDisabled};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(src.W,{...fieldAttrs,children:(0,jsx_runtime.jsx)(PasswordField,{...args,isDisabled,isSmall,buttonType,id})})})})})};PasswordField_stories_PasswordField.args={id:"myPasswordField",placeholder:"Enter your password",label:"Password",helper:"Create a password of minimum 8 characters",error:"",buttonType:"icon-button",isDisabled:!1,isSmall:!1},PasswordField_stories_PasswordField.argTypes={id:{name:"ID"},placeholder:{name:"Placeholder"},label:{name:"Label"},helper:{name:"Helper"},error:{name:"Error"},buttonType:{name:"Button Style",options:["icon-button","text"],control:{type:"select",labels:{"icon-button":"Icon Button (Default)",standard:"text"}}},isDisabled:{name:"Disabled",control:"boolean"},isSmall:{name:"Small",control:"boolean"},customWidth:{name:"customWidth",control:"number"}},PasswordField_stories_PasswordField.parameters={...PasswordField_stories_PasswordField.parameters,docs:{...PasswordField_stories_PasswordField.parameters?.docs,source:{originalSource:'({\n  id,\n  buttonType,\n  label,\n  helper,\n  error,\n  isSmall,\n  isDisabled,\n  ...args\n}: {\n  id: string;\n  buttonType: "icon" | "text";\n  label: string;\n  helper: string;\n  error: string;\n  isSmall: boolean;\n  isDisabled: boolean;\n}) => {\n  const boxStyles = {\n    padding: 20,\n    borderRadius: 4,\n    background: "#fff"\n  };\n\n  // Field settings\n  const fieldAttrs = {\n    id,\n    label,\n    helper,\n    error,\n    isSmall,\n    isDisabled\n  };\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div style={boxStyles}>\n                    <FormField {...fieldAttrs}>\n                        <SuiPasswordField {...args} isDisabled={isDisabled} isSmall={isSmall} buttonType={buttonType} id={id} />\n                    </FormField>\n                </div>\n            </div>\n        </div>;\n}',...PasswordField_stories_PasswordField.parameters?.docs?.source}}};const __namedExportsOrder=["PasswordField"]},"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Label=({id,hidden=!1,children})=>{if(!("string"==typeof children?!(0,src.t7)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:classNames,children})},Helper=({id,children})=>{const classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children});var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const FormField=({id="",label="label",helper,error,className,isSmall,isDisabled=!1,isLabelHidden=!1,children,customWidth,...props})=>{let fieldId=(0,react.useId)();(0,src.t7)(id)||(fieldId=id),children=(0,hooks_src.$z)(children,"{add form element as children}");const isErrored="string"==typeof error?!(0,src.t7)(error??""):!!error,classNames=(0,src.QX)("sui-form-field",{sm:isSmall,disabled:isDisabled},className),ariaAttrs={id:fieldId,...isSmall&&{isSmall},...isDisabled&&{isDisabled},...!(0,src.t7)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...props,...customWidth&&{style:{maxWidth:`${customWidth}px`}},"data-testid":"form-field",children:[!(0,src.t7)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs,...child.props}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/ui/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const typeValues=["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="md",position="start",onClick})=>{if((0,src.t7)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=components.cp[name],iconClass=(name??"").replace(/[A-Z]/g,((match,index)=>(0===index?"":"-")+match.toLowerCase()));return(0,jsx_runtime.jsx)("span",{className:`suicons sui-input__icon sui-input__icon--${iconClass}`,"aria-hidden":"true","data-testid":`input-icon-${position}`,onClick,children:IconName&&(0,jsx_runtime.jsx)(IconName,{size})})};var tooltip_src=__webpack_require__("./packages/ui/tooltip/src/index.ts");const Input=(0,react.forwardRef)((({type="text",defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall,isReadOnly=!1,isError=!1,isDisabled=!1,onClickIcon,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,onClear,icon,iconPosition,iconHint="",iconTooltipWidth,allowClear=!1,disableInteractions=!1,isRequired=!1,pattern,onKeyUp,validateOnMount=!1,customWidth,onValidate,...props},ref)=>{const uniqueId=(0,react.useId)();id||(id=uniqueId);const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src._Y)({}),[hasError,setHasError]=(0,react.useState)(!1);if(!(!(0,src.Y3)(id)&&!(0,src.t7)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClearCallback=(0,react.useCallback)((()=>{setValue(""),onClear&&onClear("")}),[onClear]),hasValue=!(0,src.Y3)(value)&&!(0,src.t7)(value??""),hasPlaceholder=!(0,src.Y3)(placeholder)&&!(0,src.t7)(placeholder),hasClassInput=!(0,src.Y3)(inputClass)&&!(0,src.t7)(inputClass);let inputType="text";typeValues.includes(type)&&(inputType=type);const classNames=(0,src.QX)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly&&!isError,filled:hasValue,"has-icon":!(0,src.t7)(icon),"icon-start":!(0,src.t7)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.t7)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},className??""),inputClassNames=(0,src.QX)("sui-input__input",{"allow-clear":allowClear&&!(0,src.t7)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const hasHintText=!(0,src.t7)(hint??"");(0,react.useEffect)((()=>{onValidate&&onValidate(id,hasError)}),[hasError]);const validation=()=>{let tempHasError=!1;const val=value?.toString()?.trim()??"";"string"==typeof value&&""!==val&&pattern?tempHasError=!new RegExp("^(?:"+pattern+")$","gm").test(val):isRequired&&(0,src.t7)(val)&&(tempHasError=!0),setHasError(tempHasError)};(0,react.useEffect)((()=>{validateOnMount&&validation()}),[]);const attrs={id,ref,type:(0,src.es)(!isMultiLine,inputType),placeholder:(0,src.es)(hasPlaceholder,placeholder),"aria-label":placeholder||"input",readOnly:(0,src.es)(isReadOnly,!0),disabled:(0,src.es)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,required:isRequired,pattern,onKeyUp:e=>{validation(),onKeyUp&&onKeyUp(e)},...props},renderIcon=()=>!icon||isMultiLine?null:(0,src.t7)(iconHint)?(0,jsx_runtime.jsx)(Icon,{name:icon,size:isSmall?"sm":"md",position:iconPosition??"start",onClick:e=>{onClickIcon&&onClickIcon(e)}}):(0,jsx_runtime.jsx)(tooltip_src.o,{type:"icon",icon,customWidth:iconTooltipWidth,iconSize:isSmall?"sm":"md",position:"top",onClick:()=>{onClickIcon&&onClickIcon()},children:iconHint});return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",...customWidth&&{style:{maxWidth:`${customWidth}px`}},children:["start"===iconPosition&&renderIcon(),(0,jsx_runtime.jsxs)("div",{className:(0,src.QX)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.t7)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),"end"===iconPosition&&renderIcon(),allowClear&&!(0,src.t7)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.q,{className:"sui-input__input-clear",icon:"CloseAlt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"sm":"md",onClick:onClearCallback,isSmall:isSmall??!1,onKeyDown:e=>(0,src.eX)(e,onClear),children:"Clear"})]})}));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1},isMultiLine:{defaultValue:{value:"false",computed:!1},required:!1},isReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},onMouseEnter:{defaultValue:{value:"() => { }",computed:!1},required:!1},onMouseLeave:{defaultValue:{value:"() => { }",computed:!1},required:!1},iconHint:{defaultValue:{value:'""',computed:!1},required:!1},allowClear:{defaultValue:{value:"false",computed:!1},required:!1},disableInteractions:{defaultValue:{value:"false",computed:!1},required:!1},isRequired:{defaultValue:{value:"false",computed:!1},required:!1},validateOnMount:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-password-field-stories-PasswordField-stories.dd1c67fc.iframe.bundle.js.map