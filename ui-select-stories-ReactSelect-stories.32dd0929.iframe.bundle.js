"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[3702],{"./packages/ui/select/stories/ReactSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Select:()=>Select,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactSelect_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/form-field/src/index.ts")),select_src=__webpack_require__("./packages/ui/select/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const single_anatomy_namespaceObject=__webpack_require__.p+"static/media/single-anatomy.f045f9c2.svg",single_states_namespaceObject=__webpack_require__.p+"static/media/single-states.6ee1db7c.svg",smart_anatomy_namespaceObject=__webpack_require__.p+"static/media/smart-anatomy.620e4731.svg",smart_states_namespaceObject=__webpack_require__.p+"static/media/smart-states.63d2c2a2.svg",expanded_anatomy_namespaceObject=__webpack_require__.p+"static/media/expanded-anatomy.2a744648.svg",expanded_states_namespaceObject=__webpack_require__.p+"static/media/expanded-states.c3d3eeec.svg",multiselect_anatomy_namespaceObject=__webpack_require__.p+"static/media/multiselect-anatomy.2469773e.svg",multiselect_states_namespaceObject=__webpack_require__.p+"static/media/multiselect-states.c9ca0928.svg",sizes_namespaceObject=__webpack_require__.p+"static/media/sizes.bf151691.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Single Select",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"Anatomy"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)(docs_src.JX,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:single_anatomy_namespaceObject,alt:"Sinlge Select Anatomy",style:{paddingTop:20}})}),(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Value"}),(0,jsx_runtime.jsx)("p",{children:"Pre-defined value"}),(0,jsx_runtime.jsx)("h3",{children:"2. Icon"}),(0,jsx_runtime.jsx)("p",{children:"Icon show the status if Drop-down list is open or close, if user open the list it will expand the list with chevron-down icon will be replaced with chevron-up"})]})]}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"States"}),(0,jsx_runtime.jsx)("img",{src:single_states_namespaceObject,alt:"Sinlge Select States",style:{paddingTop:20}}),(0,jsx_runtime.jsxs)(docs_src.X2,{style:{paddingTop:20},children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Default"}),(0,jsx_runtime.jsx)("p",{children:"Default state where the user can use the Select Element."}),(0,jsx_runtime.jsx)("h3",{children:"3. Focus"}),(0,jsx_runtime.jsx)("p",{children:"There will be a focus state after the user change value of the Select elements."}),(0,jsx_runtime.jsx)("h3",{children:"5. Error"}),(0,jsx_runtime.jsx)("p",{children:"When the user doesn’t choose the correct value for this element, the user will get Visual feedback of the error."})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"2. Hover"}),(0,jsx_runtime.jsx)("p",{children:"Element switches to this state when users hover over the Select button."}),(0,jsx_runtime.jsx)("h3",{children:"4. Disabled"}),(0,jsx_runtime.jsx)("p",{children:"When the Toggle is disabled, users are not allowed to use the Select button,"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Smart Search",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"Anatomy"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Value"}),(0,jsx_runtime.jsx)("p",{children:"Pre-defined value"}),(0,jsx_runtime.jsx)("h3",{children:"2. Icon"}),(0,jsx_runtime.jsx)("p",{children:"Icon show the status if Drop-down list is open or close, if user open the list it will expand the list with chevron-down icon will be replaced with chevron-up"})]}),(0,jsx_runtime.jsx)(docs_src.JX,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:smart_anatomy_namespaceObject,alt:"Smart Search Anatomy",style:{paddingTop:20}})})]}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"States"}),(0,jsx_runtime.jsx)("img",{src:smart_states_namespaceObject,alt:"Smart Search States",style:{paddingTop:20}}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"1. Default"}),(0,jsx_runtime.jsx)("p",{children:"The default display state"}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"3. Disabled"}),(0,jsx_runtime.jsx)("p",{children:"Represents the state when the select is non-interactive"}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"5. Remove Selection"}),(0,jsx_runtime.jsx)("p",{children:"Represents the state where an item has been selected"}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"7. Focus"}),(0,jsx_runtime.jsx)("p",{children:"Represents the state Where the select is focused"})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{size:"3",children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"2. Hover"}),(0,jsx_runtime.jsx)("p",{children:"When the user hovers over the select, it will have a blue border"}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"4. Selected"}),(0,jsx_runtime.jsx)("p",{children:"Represents the state where an item has been selected"}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:20},children:"6. Search"}),(0,jsx_runtime.jsx)("p",{children:"Represents the state where the user is still typing"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Expand States",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"Anatmoy"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("img",{src:expanded_anatomy_namespaceObject,alt:"Select Expanded Anatomy"})}),(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("h3",{children:"1. Text Input field"}),(0,jsx_runtime.jsx)("p",{children:"The field where users click in to receive the suggestions they can choose from. Once selected, the user's choices are then shown in the field."}),(0,jsx_runtime.jsx)("h3",{children:"2. Options"}),(0,jsx_runtime.jsx)("p",{children:"Contains the list of all selectable items. These can be grouped into sub-categories under headings"})]})]}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"States"}),(0,jsx_runtime.jsx)("img",{src:expanded_states_namespaceObject,alt:"Select Expanded States"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Expand"}),(0,jsx_runtime.jsx)("p",{children:"Represent the default state when the select is expanded"}),(0,jsx_runtime.jsx)("h3",{children:"3. Expanded + Search"}),(0,jsx_runtime.jsx)("p",{children:"The expanded state for the search variation"})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"2. Expanded + Icons"}),(0,jsx_runtime.jsx)("p",{children:"Expanded State for items with icons"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Multiselect",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"Anatomy"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsx)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:(0,jsx_runtime.jsx)("img",{src:multiselect_anatomy_namespaceObject,alt:"Multiselect Anatomy"})}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Text Input field"}),(0,jsx_runtime.jsx)("p",{children:"The field where users click in to receive the suggestions they can choose from. Once selected, the user's choices are then shown in the field."}),(0,jsx_runtime.jsx)("h3",{children:"2. Options"}),(0,jsx_runtime.jsx)("p",{children:"Contains the list of all selectable items. These can be grouped into sub-categories under headings"}),(0,jsx_runtime.jsx)("h3",{children:"3. Tag"}),(0,jsx_runtime.jsx)("p",{children:'Tags show what options have been selected, and can be removed by selecting the adjacent "x"'}),(0,jsx_runtime.jsx)("h3",{children:"4. Clear all"}),(0,jsx_runtime.jsx)("p",{children:"This clears everything in the Selected option field. It only appears when a user has selected at least one option."})]})]}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"States"}),(0,jsx_runtime.jsx)("img",{src:multiselect_states_namespaceObject,alt:"Multiselect States"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("h3",{children:"1. Default"}),(0,jsx_runtime.jsx)("p",{children:"It’s the default state of Multiselect, where users can add the value when interacting with the component."}),(0,jsx_runtime.jsx)("h3",{children:"3. Filled + hover"}),(0,jsx_runtime.jsx)("p",{children:"In this Hover state, when the user hovers the mouse pointer over the multi-select field, there will be a 1px Stroke around the Input field."}),(0,jsx_runtime.jsx)("h3",{children:"5. Filled + Active"}),(0,jsx_runtime.jsx)("p",{children:"When the user is in an Active state, List Expand with the available option and search box. A scroll bar will only appear if the choices are more than Four."})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"2. Filled"}),(0,jsx_runtime.jsx)("p",{children:"In this Filled state, the user can see the already filled option."}),(0,jsx_runtime.jsx)("h3",{children:"4. Filled + Focus"}),(0,jsx_runtime.jsx)("p",{children:"In this Focus state, when the user hovers the mouse pointer over the multi-select field, there will be a 2px Stroke around the Input field."})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Sizes",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:"In the Select Elements, there are two Different Size, Large and Small."}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:"Large elements will be use for Large Screen like Desktop."}),(0,jsx_runtime.jsx)("span",{label:"Small Elements will be use for Small screen size like tablet, mobile."})]}),(0,jsx_runtime.jsx)("img",{src:sizes_namespaceObject,alt:"Select Sizes"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Usecases",style:{paddingTop:20},children:(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:"1. Use concise and descriptive labels so that users clearly know the purpose of the selection. For example, use a 'Save to...' label for a list containing options such as 'Cloud, Local drive, CD'."}),(0,jsx_runtime.jsx)("span",{label:"2. Keep options to a single line of text. Use commonly known terms for your"}),(0,jsx_runtime.jsx)("span",{label:"3. options, make sure they're clear and direct."})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Best Practices",style:{paddingTop:20},children:(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:"1. Order your list of options in a way that will make the most sense to the user."}),(0,jsx_runtime.jsx)("span",{label:"2. Remove options that rarely get used."}),(0,jsx_runtime.jsx)("span",{label:"3. Don't overwhelm the user with too many options."})]})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Hl,{packageName:"@wpmudev/sui-select"}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"id*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A unique identifier for the select"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"options*",tag:"Array",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"An array of options to be included in the select, each element is an object with a key as a string and value of any type "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"selected",tag:"Array | string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Currently selected option"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Additional css className(s) for further customization"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"label",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The label represents the placeholder for the select element"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isDisabled",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"})," the select will be non-interactive"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSmall",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"})," the select will have a smaller size"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isError",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the select is an error state or not, when the select is in an error state it will have a red border"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isMultiselect",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["Set this to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"})," if you want to use the multiselect variation"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSearchable",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsxs)("p",{children:["Set this to ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"true"})," if you want to use the smart search variation variation"]})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onChange*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked upon the change of the option, the first parameter would be the new selected item(s)"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onMouseEnter*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the the mouse enters the select element"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"onMouseLeave*",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the the mouse leaves the select element"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const disabledCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const options = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
	  },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
    },
  ]

export const Example = () => {
    return <Select isDisabled={true} id="disabled" options={options} />
}`,smallCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const options = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
	  },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
    },
  ]

export const Example = () => {
    return <Select isSmall={true} id="small" options={options} />
}`,errorCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const options = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
	  },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
    },
  ]

export const Example = () => {
    return <Select isError={true} id="error" options={options} />
}`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isDisabled={true}"})," to make the select non-interactive"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.Ph,{isDisabled:!0,id:"disabled",options})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:disabledCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Small",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isSmall={true}"})," for smaller version of\nthe select"]})}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.Ph,{isSmall:!0,id:"small",options})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:smallCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isError={true}"})," to display the select\nin error state"]})}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.Ph,{isError:!0,id:"error",options})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:errorCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},smartSearchCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const options = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
	  },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
    },
  ]

export const Example = () => {
    return <Select isSearchable={true} id="smart-search" options={options} />
}`,multiSelectCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const options = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
	  },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
    },
  ]

export const Example = () => {
    return <Select isMultiSelect={true} id="multiselect" options={options} />
}`;function Types_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Smart Search",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isSearchable={true}"})," to change the select to the samrt search variation"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.Ph,{isSearchable:!0,id:"smart-search",options})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:smartSearchCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Multiselect",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"isMultiSelect={true}"})," to allow for multiselection of the options"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.Ph,{isMultiSelect:!0,id:"multiselect",options})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:multiSelectCode})]})]})}const Types=function Types_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Types_createMdxContent,props)})):Types_createMdxContent()},defaultCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const options = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
	  },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
    },
  ]

  export const Example = () => {
    return <Select id="select-id" options={options} />
  }
`,options=[{icon:"settings",id:"option-1",label:"Option 1 is the option.",isSelected:!1},{icon:"settings",id:"option-2",label:"Option 2",isSelected:!1},{icon:"settings",id:"option-3",label:"Option 3",isSelected:!1}];function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.$0,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of the select component"}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.Ph,{id:"select-id",options})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:defaultCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"States & Types",style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.T5,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Types",value:"types",children:(0,jsx_runtime.jsx)(Types,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactSelect_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Select",subtitle:"The Select element is used for a drop-down options. This element is most often used in a form, to collect user input. Select inputs let users select a predefined value from a list of options",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactSelect=function ReactSelect_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactSelect_createMdxContent,props)})):ReactSelect_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const Select=({example,errorMessage,isSmall,isDisabled,...props})=>{const boxStyle={margin:0,padding:"30px",border:"white"===props.color?"1px solid #E6E6E6":0,borderRadius:"4px",background:"white"===props.color?"#333":"#fff"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:boxStyle,children:["select"===example&&(0,jsx_runtime.jsx)(src.W,{id:"select",label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.Ph,{...props})}),"search"===example&&(0,jsx_runtime.jsx)(src.W,{id:"select",label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.ul,{...props})}),"multi-select"===example&&(0,jsx_runtime.jsx)(src.W,{id:"select",label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.NU,{...props})})]})})})};Select.args={example:"select",id:"id-1",label:"Select",options:[{icon:"Settings",id:"option-1",label:"Option 1 is the option.",isSelected:!1},{icon:"Settings",id:"option-2",label:"Option 2",isSelected:!1},{icon:"Settings",id:"option-3",label:"Option 3",isSelected:!1},{icon:"Settings",id:"option-4",label:"Option 4",isSelected:!1},{icon:"Settings",id:"option-5",label:"Option 5",isSelected:!1},{icon:"Settings",id:"option-6",label:"Option 6",isSelected:!1},{icon:"Settings",id:"option-7",label:"Option 7",isSelected:!1},{icon:"Settings",id:"option-8",label:"India",isSelected:!1}],isError:!1,errorMessage:"Error message",isDisabled:!1,isSmall:!1},Select.argTypes={example:{name:"Example",options:["select","multi-select","search"],control:{type:"select",labels:{select:"Example: Select","multi-select":"Example: Multiselect",search:"Example: Search"}}},id:{name:"For (select ID)",control:{type:"text"}},label:{name:"Label",control:{type:"text"}},options:{name:"Options"},isError:{name:"Error"},errorMessage:{name:"Error message",control:"text",if:{arg:"isError",eq:!0}},isDisabled:{name:"Disabled"},isSmall:{name:"Small"}};const ReactSelect_stories={title:"SUI/Components/Forms/Select",component:Select,parameters:{layout:"fullscreen",docs:{page:ReactSelect}}},__namedExportsOrder=["Select"]}}]);
//# sourceMappingURL=ui-select-stories-ReactSelect-stories.32dd0929.iframe.bundle.js.map