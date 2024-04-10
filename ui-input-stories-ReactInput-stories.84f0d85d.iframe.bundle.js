"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[7988],{"./packages/ui/input/stories/ReactInput.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Input:()=>Input,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactInput_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/form-field/src/index.ts")),input_src=__webpack_require__("./packages/ui/input/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),__webpack_require__("./packages/docs/src/index.ts")),blocks_dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.6895a01d.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.fe159eab.svg",size_namespaceObject=__webpack_require__.p+"static/media/size.913cfb94.svg",icons_namespaceObject=__webpack_require__.p+"static/media/icons.b6569669.svg";function _createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.wn,{contained:!0,style:{paddingTop:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Input element are used to collect user data on web pages. When a user\nsubmits a form, the data they entered into the input elements is sent to the\nserver for processing."})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Input anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Label:"}),(0,jsx_runtime.jsx)("p",{children:"A label for the context of Rich text editor."}),(0,jsx_runtime.jsx)("h3",{children:"2. Input:"}),(0,jsx_runtime.jsx)("p",{children:" Input is used to create interactive forms to collect users data."}),(0,jsx_runtime.jsx)("h3",{children:"3. Placeholder:"}),(0,jsx_runtime.jsx)("p",{children:" There will be a placeholder when the input ha no value set."}),(0,jsx_runtime.jsx)("h3",{children:"4. Help Text:"}),(0,jsx_runtime.jsx)("p",{children:" There will be a placeholder when the input ha no value set."}),(0,jsx_runtime.jsx)(docs_src.B8,{children:(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Help Text:"})," Help text is an overall description about the input field."]})})})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Input States"})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Size",children:(0,jsx_runtime.jsx)("img",{src:size_namespaceObject,alt:"Input Size"})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Icons",children:(0,jsx_runtime.jsx)("img",{src:icons_namespaceObject,alt:"Input Icons"})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p",a:"a"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-input"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",children:[(0,jsx_runtime.jsx)("p",{children:"Input component have the following props."}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"id",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Add a unique id to the input."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"placeholder",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The input placeholder text"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"customWidth",type:"number",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Custom width for the input in ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"pixels"})]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"type",type:"string",defaultValue:"text",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Reflects the type of the input field whether it's text, number etc. it accepts ",(0,jsx_runtime.jsx)(_components.a,{href:"https://www.w3schools.com/html/html_form_input_types.asp",target:"_blank",rel:"nofollow noopener noreferrer",children:"any valid html type"}),"."]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"defaultValue",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The initial value of the input."})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"hint",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A text to appear initially in the input to give the user a hint ( a part of the text that he should type )"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"iconHint",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A hint that specifies the icon purpose, it appears in a tooltip"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"iconTooltipWidth",type:"number",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A custom width for the icon Tooltip hint"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isMultiline",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["If set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"true"}),", it will use ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"textarea"})," tag instead of the ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"input"})]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isReadOnly",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["If set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"true"})," the input text won't be editable"]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isRequired",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Whether the input is required or not"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onChange",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the input text changes, the first parameter is the change event object"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onClick",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be invoked when the input is clicked"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onClickIcon",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be invoked when the input icon is clicked"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"allowClear",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether to display the clear button or not"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onClear",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the clear button is clicked"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"icon",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"An icon to be displayed in the input"})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"iconPosition",type:"string",defaultValue:"start",children:[(0,jsx_runtime.jsx)("p",{children:"The position where to display the icon"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options"}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:"start"}),(0,jsx_runtime.jsx)("span",{label:"end"})]})]}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isError",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Reflects the error status in the field."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isSmall",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Set if the input is small."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Set if the input is disabled."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"disableInteractions",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Disable default interaction methods which are used to track focus and hover states"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Add a class name to the input."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"inputClass",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Additional CSS classNames(s) for the actual input element"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseEnter",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the mouse enters the input"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseLeave",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the mouse leaves the input"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onFocus",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback to be invoked when the input is focused"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onKeyDown",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback to be invoked when the keydown event on the input gets triggered"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onKeyUp",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be invoked when the keyboard key is released"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseDownCapture",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the mouse button is pressed down"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseUp",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the mouse leaves the input"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseUpCapture",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the mouse button is released"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onBlur",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the input looses focus"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onBlurCapture",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked at an early stage of the blur event"})}),(0,jsx_runtime.jsx)(docs_src.il,{})]}),"\n",(0,jsx_runtime.jsx)(docs_src.oW,{})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const DisabledInputCode=dedent_default()`
import React from 'react';\n
import { Input } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input id="input-id-1" label="Label" placeholder="Placeholder" isDisabled={true} />;
}\n
export default Example;
`,ValueEnteredInputCode=dedent_default()`
import React from 'react';\n
import { Input } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input id="input-id-1" value="Default" label="Label" placeholder="Placeholder" />;
}\n
export default Example;
`,ReadOnlyInputCode=dedent_default()`
import React from 'react';\n
import { Input } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input id="input-id-1" label="Label" placeholder="Placeholder" isReadOnly={true} />;
}\n
export default Example;
`,ErrorInputCode=dedent_default()`
import React from 'react';\n
import { Input } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input id="input-id-1" label="Label" isError={true} placeholder="Placeholder" />;
}\n
export default Example;
`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isDisabled"})," prop to disable a input\nthat is not usable."]})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{id:"input-id-1",label:"Label",placeholder:"Placeholder",isDisabled:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:DisabledInputCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Value Entered",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"value"})," prop to input to set it's value."]})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{id:"input-id-2",value:"Default",label:"Label",placeholder:"Placeholder",icon:"close"})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:ValueEnteredInputCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Read Only",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Add the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"readOnly"})," prop to set input readonly."]})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{id:"input-id-3",label:"Label",placeholder:"Placeholder",isReadOnly:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:ReadOnlyInputCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isError"})," prop."]})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{id:"input-id-4",label:"Label",isError:!0,placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:ErrorInputCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},SmallInputCode=dedent_default()`
import React from 'react';\n
import { Button } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input id="input-id-4" label="Label" placeholder="Placeholder" isSmall={true} />;
}\n
export default Example;
`;function Size_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Small",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isSmall"})," prop to reduce the input\nheight, fitting with the design context."]})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{id:"input-id-4",label:"Label",placeholder:"Placeholder",isSmall:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:SmallInputCode})]})}const Size=function Size_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Size_createMdxContent,props)})):Size_createMdxContent(props)},LeadInputCode=dedent_default()`
import React from 'react';\n
import { Button } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input label="Icon before" iconLead="user" id="input-id-2" placeholder="Placeholder" />;
}\n
export default Example;
`,TrailInputCode=dedent_default()`
import React from 'react';\n
import { Input } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input label="Icon after" iconTrail="user" id="input-id-3" placeholder="Placeholder" />;
}\n
export default Example;
`;function Icon_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Leading",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:"Display an icon before the text."}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{label:"Icon before",iconLead:"user",id:"input-id-2",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:LeadInputCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Trailing",contained:!0,style:{paddingRight:0,paddingBottom:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:"Display an icon after the text."}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{label:"Icon after",iconTrail:"user",id:"input-id-3",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:TrailInputCode})]})]})}const Icon=function Icon_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Icon_createMdxContent,props)})):Icon_createMdxContent()};var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const ValidationInputCode=dedent_default()`
import { FormField } from "@wpmudev/sui-form-field"
import { useValidation } from "@wpmudev/sui-hooks"
import { Input } from "@wpmudev/sui-input"

const ValidationInput = () => {
	const [status, validationError] = useValidation({
		required: true,
		message: "This input is required",
	})

	return (
		<FormField
			id="input-1"
			label="Required Input"
			helper="Helper Text"
			error={status.error}
		>
			<Input isError={status.isError} {...validationError} />
		</FormField>
	)
}
`,ValidationInput=()=>{const[status,validationError]=(0,hooks_src.$i)({required:!0,message:"This input is required"});return(0,jsx_runtime.jsx)(src.z,{id:"input-1",label:"Required Input",helper:"Helper Text",error:status.error,children:(0,jsx_runtime.jsx)(input_src.p,{isError:status.isError,...validationError})})};function Validation_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Required Input",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["This is an example of using ",(0,jsx_runtime.jsx)("a",{href:"",children:"useValidation"})," hook to validate the input using the required rule, try to type something then delete it to see the error message"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(ValidationInput,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:ValidationInputCode})]})}const Validation=function Validation_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Validation_createMdxContent,props)})):Validation_createMdxContent()},sampleCode=dedent_default()`
import React from 'react';\n
import { Input } from '@wpmudev/sui-react';\n
const Example() => {
	return <Input id="input-id-1" label="Label" placeholder="Placeholder" />;
}\n
export default Example;
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:0},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of a field, used for most cases."}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(input_src.p,{id:"input-id-1",label:"Label",placeholder:"Placeholder"})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.ij,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Size",value:"size",children:(0,jsx_runtime.jsx)(Size,{})}),(0,jsx_runtime.jsx)("div",{label:"Input with Icon",value:"icon",children:(0,jsx_runtime.jsx)(Icon,{})}),(0,jsx_runtime.jsx)("div",{label:"Validation",value:"validation",children:(0,jsx_runtime.jsx)(Validation,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactInput_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(blocks_dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Input",subtitle:"Input fields are an essential user interface design element,\nproviding users with the means to enter non-standardized responses.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactInput=function ReactInput_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactInput_createMdxContent,props)})):ReactInput_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const ReactInput_stories={title:"SUI/Components/Forms/Input",component:input_src.p,parameters:{layout:"fullscreen",docs:{page:ReactInput}}},Input=args=>{const{isSmall,isDisabled}=args;return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#fff"},children:(0,jsx_runtime.jsx)(src.z,{id:"input-1",label:"Label",helper:"Helper Text",isSmall,isDisabled,children:(0,jsx_runtime.jsx)(input_src.p,{...args})})})})})};Input.args={type:"text",id:"myCustomId",defaultValue:"Hello World",icon:"",iconPosition:"start",iconHint:"",iconTooltipWidth:"",isSmall:!1,isReadOnly:!1,isDisabled:!1,allowClear:!1},Input.argTypes={type:{name:"Type",options:["text","email","password","number","search","tel","url"],control:{type:"select"}},customWidth:{name:"Custom Width",control:"number"},id:{name:"ID",control:"text"},defaultValue:{name:"Value"},isSmall:{name:"Small",control:"boolean"},icon:{name:"Icon",options:components.iT,control:{type:"select"}},iconPosition:{name:"Icon Position",options:["start","end"],control:{type:"select"},if:{arg:"icon",neq:""}},iconHint:{name:"Icon Hint",control:"text",if:{arg:"iconPosition",eq:"end"}},iconTooltipWidth:{name:"Icon Tooltip Width",control:"number",if:{arg:"iconPosition",eq:"end"}},isReadOnly:{name:"Read Only",control:"boolean"},isDisabled:{name:"Disabled",control:"boolean",if:{arg:"example",eq:"standard"}},allowClear:{name:"Allow Clear",control:"boolean"}};const __namedExportsOrder=["Input"]},"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Label=({id,hidden=!1,children,...styleProps})=>{const{suiInlineClassname}=(0,hooks_src.IS)(styleProps);if(!("string"==typeof children?!(0,src.Im)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:(0,src.n0)(classNames,{},suiInlineClassname),children})},Helper=({id,children,...props})=>{const{suiInlineClassname}=(0,hooks_src.IS)(props),classNames=classnames_default()({"sui-form-field__helper":!0},suiInlineClassname);return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children}),FormField=({id="",label,helper,error,className,isSmall,isDisabled=!1,isLabelHidden=!1,children,customWidth,_htmlProps={},_style})=>{let fieldId=(0,react.useId)();(0,src.Im)(id)||(fieldId=id),children=(0,hooks_src.Q8)(children,"{add form element as children}");const isErrored="string"==typeof error?!(0,src.Im)(error??""):!!error,{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-form-field",{sm:isSmall,disabled:isDisabled},suiInlineClassname),ariaAttrs={id:fieldId,...isSmall&&{isSmall},...isDisabled&&{isDisabled},...!(0,src.Im)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...(0,src.X5)(_htmlProps),...customWidth&&{style:{maxWidth:`${customWidth}px`}},"data-testid":"form-field",children:[!(0,src.Im)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs,...child.props}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-input-stories-ReactInput-stories.84f0d85d.iframe.bundle.js.map