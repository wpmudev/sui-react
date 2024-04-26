"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[8580],{"./packages/ui/select/stories/ReactSelect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Select:()=>Select,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ReactSelect_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/form-field/src/index.ts")),select_src=__webpack_require__("./packages/ui/select/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.e7875b83.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.b206f8bd.svg",combo_box_namespaceObject=__webpack_require__.p+"static/media/combo-box.d67017dc.svg",multiple_select_namespaceObject=__webpack_require__.p+"static/media/multiple-select.783425b2.svg",clear_value_namespaceObject=__webpack_require__.p+"static/media/clear-value.2871e689.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.wn,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.fI,{children:[(0,jsx_runtime.jsxs)(docs_src.fv,{style:{display:"flex",justifyContent:"center",flexDirection:"column"},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Refer to ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/sui-components-forms-form-field--docs",target:"_blank",children:"Form field"})," anatomy for Label¹,\nHelp text² and Error³."]})}),(0,jsx_runtime.jsx)("h4",{children:"4. Select options"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A list of select options will be available to select on a dropdown when user selects on select input."})})]}),(0,jsx_runtime.jsx)(docs_src.fv,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Sinlge Select Anatomy",style:{paddingTop:20}})})]})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"States",tyle:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Select input has similar states to the ",(0,jsx_runtime.jsx)("a",{href:"/?path=/docs/sui-components-forms-input--docs",children:"input field states"}),"."]})}),(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Select States"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Combo Box",tyle:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Combo box allows users to select one or more options from predefined list of options.\nIt is generally used when there is large numbers of list to select from.\nIt filters the matching options corresponding to the entered value in the dropdown for selection."})}),(0,jsx_runtime.jsx)("img",{src:combo_box_namespaceObject,alt:"Select Combo Box"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Multiple Select",tyle:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Multi-select allows to select one or multiple options from the available options."})}),(0,jsx_runtime.jsx)("img",{src:multiple_select_namespaceObject,alt:"Select Multiple Select"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Clear Value",tyle:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Clear icon (x) let users to clear the selected values."})}),(0,jsx_runtime.jsx)("img",{src:clear_value_namespaceObject,alt:"Select Multiple Select"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-select"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"id",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"A unique identifier for the select"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"options",type:"Array",children:(0,jsx_runtime.jsx)("p",{children:"An array of options to be included in the select, each element is an object with a key as a string and value of any type "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"selected",type:"Array | string",children:(0,jsx_runtime.jsx)("p",{children:"Currently selected option"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"customWidth",type:"number",children:(0,jsx_runtime.jsxs)("p",{children:["Specifies a custom width for the select element in ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"pixels"})]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Additional css className(s) for further customization"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"label",type:"string",defaultValue:"select",children:(0,jsx_runtime.jsx)("p",{children:"The label represents the placeholder for the select element"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," the select will be non-interactive"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isSmall",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," the select will have a smaller size"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isError",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Whether the select is an error state or not, when the select is in an error state it will have a red border"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isMultiselect",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["Set this to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," if you want to use the multiselect variation"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isSearchable",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["Set this to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," if you want to use the smart search variation variation"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isCustomVar",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When this is set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"}),", the select will have a button on the right side to open the dropdown"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onChange",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked upon the change of the option, the first parameter would be the new selected item(s)"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseEnter",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the the mouse enters the select element"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onMouseLeave",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"A callback function to be invoked when the the mouse leaves the select element"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"_dropdownProps",type:"object",children:(0,jsx_runtime.jsxs)("p",{children:["Specifies the props passed to ",(0,jsx_runtime.jsx)("a",{href:"/?path=/story/sui-components-advanced-dropdown--dropdown",children:"the Dropdown component"})," which is used internally with Select component"]})})]}),"\n",(0,jsx_runtime.jsx)(docs_src.oW,{})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const disabledCode=dedent_default()`
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
}`;function States_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Disabled",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isDisabled={true}"})," to make the select non-interactive"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{isDisabled:!0,id:"disabled",options})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:disabledCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Small",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isSmall={true}"})," for smaller version of\nthe select"]})}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{isSmall:!0,id:"small",options})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:smallCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Error",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isError={true}"})," to display the select\nin error state"]})}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{isError:!0,id:"error",options})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:errorCode})]})]})}const States=function States_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(States_createMdxContent,props)})):States_createMdxContent(props)},AsyncSelectCode=dedent_default()`
import { SelectBaseProps, Select } from "@wpmudev/sui-select"
import { FormField } from "@wpmudev/sui-form-field"

const AsyncSelect: React.FC<CustomSelectComponentProps> = ({}) => {
    
    const perPage = 10;

    return (
            <Select
                _dropdownProps={{
                    type: "select",
                    isAsync: true,
                    allowSearch: true,
                    searchPlaceholder: "Search...",
                    asyncOptions: {
                        perPage,
                    },
                    getOptions: async (
                        search: string,
                        { page }: any,
                        prevLoadedItems = [],
                    ) => {
                        const skip = page * perPage - 10
                        const items: SelectBaseProps["options"] = []
                        const baseAPI = "https://dummyjson.com/products/search"
                        let total = 0

                        await fetch(
                            baseAPI + "?limit=" + perPage + "&skip=" + skip + "&total=50&q=" + search,
                        )
                            .then((res) => res.json())
                            .then((result) => {
                                total = result.total

                                result.products.forEach((item: any) => {
                                    items.push({
                                        id: item?.id,
                                        label: item?.title,
                                        isSelected: false,
                                    })
                                })
                            })

                        return {
                            items,
                            hasMore: [...items, ...prevLoadedItems].length < 100,
                        }
                    },
                }}
            />
    )
} 
`,AsyncSelect=({})=>(0,jsx_runtime.jsx)(select_src.l6,{_dropdownProps:{type:"select",isAsync:!0,allowSearch:!0,searchPlaceholder:"Search...",asyncOptions:{perPage:10},getOptions:async(search,{page},prevLoadedItems=[])=>{const skip=10*page-10,items=[];let total=0;return await fetch(`https://dummyjson.com/products/search?limit=10&skip=${skip}&total=50&q=${search}`).then((res=>res.json())).then((result=>{total=result.total,result.products.forEach((item=>{items.push({id:item?.id,label:item?.title,isSelected:!1})}))})),{items,hasMore:[...items,...prevLoadedItems].length<100}}}}),searchOptions=[{icon:"settings",id:"option-1",label:"Option 1 is the option.",isSelected:!1,searchLabel:"Option 1"},{icon:"settings",id:"option-2",label:"Option 2",isSelected:!1,searchLabel:"Option 1"},{icon:"settings",id:"option-3",label:"Option 3",isSelected:!1,searchLabel:"Option 1"}],variableOptions=[{id:"view-form",label:"View form",props:{variable:"{view_form}",description:"Short description"}},{id:"edit-form",label:"Edit form",props:{variable:"{edit_form}",description:"Short description"}},{id:"duplicate-form",label:"Duplicate form",props:{variable:"{duplicate_form}",description:"Short description"}},{id:"delete-form",label:"Delete form",props:{variable:"{delete_form}",description:"Short description"}}],variableCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const variableOptions = [
    {
      id: "view-form",
      label: "View form",
      props: {
        variable: "{view_form}",
        description: "Short description",
      },
    },
    {
      id: "edit-form",
      label: "Edit form",
      props: {
        variable: "{edit_form}",
        description: "Short description",
      },
    },
    {
      id: "duplicate-form",
      label: "Duplicate form",
      props: {
        variable: "{duplicate_form}",
        description: "Short description",
      },
    },
    {
      id: "delete-form",
      label: "Delete form",
      props: {
        variable: "{delete_form}",
        description: "Short description",
      },
    },
  ]

  export const Example = () => {
    return <Select isCustomVar={true} options={variableOptions} />
  }
`,smartSearchCode=dedent_default()`
  import { Select } from "@wpmudev/sui-select";

  export const searchOptions = [
    {
      icon: "settings",
      id: "option-1",
      label: "Option 1 is the option.",
      isSelected: false,
      searchLabel: "Option 1 is the option.",
    },
    {
      icon: "settings",
      id: "option-2",
      label: "Option 2",
      isSelected: false,
      searchLabel: "Option 2",
    },
    {
      icon: "settings",
      id: "option-3",
      label: "Option 3",
      isSelected: false,
      searchLabel: "Option 2",
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
    return <Select isMultiSelect={true} id="multiselect" options={options} label="Search..." />
}`;function Types_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Smart Search",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isSearchable={true}"})," to change the select to the samrt search variation"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{isSearchable:!0,id:"smart-search",options:searchOptions,label:"Search..."})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:smartSearchCode}),(0,jsx_runtime.jsxs)("p",{children:["Note that you need to add ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:!0,children:"searchLabel"})," to each option, this is the value that will be looked for"]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Multiselect",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isMultiSelect={true}"})," to allow for multiselection of the options"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{isMultiSelect:!0,id:"multiselect",options})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:multiSelectCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Variable",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isCustomVar={true}"})," to display a button icon on the right side to open the dropdown"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{isCustomVar:!0,id:"variable",options:variableOptions})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:variableCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Async options",contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Using ",(0,jsx_runtime.jsx)(docs_src.Cy,{isSmall:small,children:"_dropdownProps"})," we can make asynchronous options list as follow:"]}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(AsyncSelect,{})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:AsyncSelectCode})]})]})}const Types=function Types_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Types_createMdxContent,props)})):Types_createMdxContent()},defaultCode=dedent_default()`
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
`,options=[{icon:"settings",id:"option-1",label:"Option 1 is the option.",isSelected:!1},{icon:"settings",id:"option-2",label:"Option 2",isSelected:!1},{icon:"settings",id:"option-3",label:"Option 3",isSelected:!1}];function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the default form of the select component"}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(select_src.l6,{id:"select-id",options})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:defaultCode})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"States & Types",style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.ij,{children:[(0,jsx_runtime.jsx)("div",{label:"States",value:"states",children:(0,jsx_runtime.jsx)(States,{})}),(0,jsx_runtime.jsx)("div",{label:"Types",value:"types",children:(0,jsx_runtime.jsx)(Types,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactSelect_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Select",subtitle:"Select field allow users to select a predefined value from a list of options.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactSelect=function ReactSelect_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactSelect_createMdxContent,props)})):ReactSelect_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const ReactSelect_stories_options=[{id:"option-1",label:"Option 1",isSelected:!1},{id:"option-2",label:"Option 2",isSelected:!1},{id:"option-3",label:"Option 3",isSelected:!1},{id:"option-4",label:"Option 4",isSelected:!1},{id:"option-5",label:"Option 5",isSelected:!1},{id:"option-6",label:"Option 6",isSelected:!1},{id:"option-7",label:"Option 7",isSelected:!1},{id:"option-8",label:"India",isSelected:!1}],Select=({example,errorMessage,id,isSmall,isDisabled,isSearchable,...props})=>{const boxStyle={margin:0,padding:"30px",border:"white"===props.color?"1px solid #E6E6E6":0,borderRadius:"4px",background:"white"===props.color?"#333":"#fff"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:boxStyle,children:["select"===example&&(0,jsx_runtime.jsx)(src.z,{id,label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.l6,{...props,...isSearchable&&{isSearchable,label:"Search..."},options:ReactSelect_stories_options?.map((option=>({...option,...isSearchable&&{searchLabel:option.label},props:{icon:"Settings"}})))})}),"select-async"===example&&(0,jsx_runtime.jsx)(src.z,{id,label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.l6,{customWidth:props.customWidth,isError:props.isError,_dropdownProps:{type:"select",isAsync:!0,allowSearch:!0,searchPlaceholder:"Search...",asyncOptions:{perPage:10},getOptions:async(search,{page},prevLoadedItems=[])=>{const skip=10*page-10,items=[];let total=0;return await fetch(`https://dummyjson.com/products/search?limit=10&skip=${skip}&total=50&q=${search}`).then((res=>res.json())).then((result=>{total=result.total,result.products.forEach((item=>{items.push({id:item?.id,label:item?.title,isSelected:!1})}))})),{items,hasMore:[...items,...prevLoadedItems].length<100}}}})}),"multi-select"===example&&(0,jsx_runtime.jsx)(src.z,{id,label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.l6,{...props,isMultiSelect:!0})}),"select-variable"===example&&(0,jsx_runtime.jsx)(src.z,{id,label:"Label",helper:"Description",error:errorMessage,isSmall,isDisabled,children:(0,jsx_runtime.jsx)(select_src.l6,{...props,isCustomVar:!0,options:[{id:"view-form",label:"View form",props:{variable:"{view_form}",description:"Short description"}},{id:"edit-form",label:"Edit form",props:{variable:"{edit_form}",description:"Short description"}},{id:"duplicate-form",label:"Duplicate form",props:{variable:"{duplicate_form}",description:"Short description"}},{id:"delete-form",label:"Delete form",props:{variable:"{delete_form}",description:"Short description"}}]})})]})})})};Select.args={example:"select",id:"custom-id",label:"Select",isError:!1,errorMessage:"Error message",isDisabled:!1,isSmall:!1,isSearchable:!1,options:ReactSelect_stories_options},Select.argTypes={example:{name:"Example",options:["select","select-async","select-variable","multi-select"],control:{type:"select",labels:{select:"Example: Select","select-async":"Example: Select Async","select-variable":"Example: Select Variable","multi-select":"Example: Multiselect"}}},id:{name:"For (select ID)",control:{type:"text"}},customWidth:{name:"Custom Width",control:{type:"number"}},label:{name:"Label",control:{type:"text"}},options:{name:"Options"},isError:{name:"Error"},isSearchable:{name:"Searchable",control:"boolean",if:{arg:"example",eq:"select"}},errorMessage:{name:"Error message",control:"text",if:{arg:"isError",eq:!0}},isDisabled:{name:"Disabled"},isSmall:{name:"Small"}};const ReactSelect_stories={title:"SUI/Components/Forms/Select",component:Select,parameters:{layout:"fullscreen",docs:{page:ReactSelect}}},__namedExportsOrder=["Select"]},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-select-stories-ReactSelect-stories.f836f5ef.iframe.bundle.js.map