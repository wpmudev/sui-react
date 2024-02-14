"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[3120],{"./packages/ui/search/stories/search.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Search:()=>search_stories_Search,__namedExportsOrder:()=>__namedExportsOrder,default:()=>search_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/input/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SearchOptionItem=({children,option,onClick})=>{const[isHovered,isFocused,methods]=(0,hooks_src._Y)({}),className=(0,utils_src.QX)("sui-search__options-item",{hover:isHovered&&!isFocused,focus:isFocused}),handleOnClick=(0,react.useCallback)((()=>{onClick(option)}),[onClick,option]);return(0,jsx_runtime.jsx)("button",{role:"menuitem",className,onClick:handleOnClick,onKeyDown:e=>(0,utils_src.eX)(e,handleOnClick),...methods,children})},SearchOptions=({options,value,setValue,setIsPopoverVisible})=>{const className=(0,utils_src.QX)("sui-search__options",{}),onOptionClick=(0,react.useCallback)((option=>{setIsPopoverVisible(!1),setValue(option)}),[setIsPopoverVisible,setValue]);return options?.length<=0?(0,jsx_runtime.jsx)("div",{className:"sui-search__hint",children:(0,jsx_runtime.jsx)("span",{children:"No result was found"})}):(0,jsx_runtime.jsx)("div",{role:"menu",className,children:options?.map(((option,index)=>(0,jsx_runtime.jsxs)(SearchOptionItem,{option,onClick:onOptionClick,children:[!(0,utils_src.t7)(value)&&(0,jsx_runtime.jsx)("span",{children:value}),option?.replace(value,"")]},index)))})},Search=({id,className,variation="basic",placeholder,defaultValue,options=[],onChange=()=>{},allowClear=!0,searchMinChars=2,searchHint="Please enter #number# or more characters",isDisabled=!1,customWidth})=>{const[value,setValue]=(0,react.useState)(defaultValue??""),[isPopoverVisible,setIsPopoverVisible]=(0,react.useState)(!1);let inputId=(0,react.useId)();inputId=id??`sui-search-${inputId}`;const searchRef=(0,react.useRef)(null),inputRef=(0,react.useRef)(null),[isHovered,isFocused,methods]=(0,hooks_src._Y)({}),isFiltered=value?.length>=searchMinChars,classNames=(0,utils_src.QX)("sui-search",{focus:isFocused||isPopoverVisible,hover:isHovered&&!isFocused,disabled:isDisabled},className),onInputChange=(0,react.useCallback)((e=>{setValue(e?e?.target?.value:"")}),[]),onInputFocus=(0,react.useCallback)((()=>{setIsPopoverVisible(!0)}),[]);(0,hooks_src.gx)(searchRef,(()=>{setIsPopoverVisible(!1)})),(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]),(0,react.useEffect)((()=>{onChange&&onChange(value??"")}),[onChange,value]);const filteredOptions=isFiltered?options.filter((option=>option.startsWith(value))):options,onInputKeyDown=(0,react.useCallback)((e=>{"ArrowRight"===e.code&&setValue(filteredOptions?.[0])}),[filteredOptions]),inputProps={};return"smart"===variation&&(inputProps.hint=(isFiltered&&filteredOptions?.[0])??"",inputProps.onFocus=onInputFocus,inputProps.onKeyDown=onInputKeyDown),(0,jsx_runtime.jsxs)("div",{ref:searchRef,className:classNames,"data-testid":"search",...customWidth&&{style:{maxWidth:`${customWidth}px`}},...methods,children:[(0,jsx_runtime.jsx)(src.E,{ref:inputRef,tabIndex:isDisabled?-1:0,className:"sui-search__input-field",id:inputId,icon:"Search",iconPosition:"start",onChange:onInputChange,defaultValue:value,allowClear,disableInteractions:!0,isDisabled:isDisabled??!1,placeholder:placeholder??"",...inputProps}),isPopoverVisible&&"smart"===variation&&(0,jsx_runtime.jsx)("div",{className:"sui-search__popover",children:isFiltered?(0,jsx_runtime.jsx)(SearchOptions,{options:filteredOptions,value,setValue,setIsPopoverVisible}):(0,jsx_runtime.jsx)("div",{className:"sui-search__hint",children:(0,jsx_runtime.jsx)("span",{children:searchHint.replace("#number#",searchMinChars)})})})]})},options=["United States","Canada","United Kingdom","Australia","Germany","France","Japan","Brazil","India","China","South Korea","Mexico","Russia","Italy","Argentina","South Africa","Egypt","Turkey","New Zealand"];var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.bab1e2cb.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.f9e38c62.svg",types_namespaceObject=__webpack_require__.p+"static/media/types.f9e38c62.svg",example_namespaceObject=__webpack_require__.p+"static/media/example.7196e93e.svg",smart_search_namespaceObject=__webpack_require__.p+"static/media/smart-search.ff491d7d.svg",smart_search_example_namespaceObject=__webpack_require__.p+"static/media/smart-search-example.784d816e.svg",spacings_namespaceObject=__webpack_require__.p+"static/media/spacings.de583bf1.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.iG,{title:"Anatomy",style:{paddingTop:20},children:(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Search icon"}),(0,jsx_runtime.jsx)("p",{children:"A generic search icon to indicate the search."}),(0,jsx_runtime.jsx)("h3",{children:"2. Placeholder"}),(0,jsx_runtime.jsx)("p",{children:"A placeholder to hint what can be searched."})]}),(0,jsx_runtime.jsx)(docs_src.qq,{size:"4",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Search Field Anatomy",style:{marginBottom:20}})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"States",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Search Field States",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Types",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"1. Basic Search"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Basic search shows the search result on the data/keyword filled in the\nsearch input when a user conduct a search."})}),(0,jsx_runtime.jsx)("img",{src:types_namespaceObject,alt:"Search Field Types",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h4",{children:"Example"}),(0,jsx_runtime.jsx)("img",{src:example_namespaceObject,alt:"Search Field Example",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"2. Smart Search"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Smart search is a quick way to search. The search result will be shown immediately below the search field after entering 2 character. It is best for searching small data sets."})}),(0,jsx_runtime.jsx)("img",{src:smart_search_namespaceObject,alt:"Search Field Smart Search",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h4",{children:"Example"}),(0,jsx_runtime.jsx)("img",{src:smart_search_example_namespaceObject,alt:"Search Field Smart Search Example",style:{marginBottom:20}})]}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Spacings",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:spacings_namespaceObject,alt:"Search Field Spacings",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Qr,{packageName:"@wpmudev/sui-search"}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src._6,{title:"id",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Sets the search input id attribute"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"options",type:"array",children:(0,jsx_runtime.jsx)("p",{children:"The available options for search in the smart variation"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"placeholder",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"placeholder text for the search input"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"customWidth",type:"number",children:(0,jsx_runtime.jsxs)("p",{children:["Custom width in ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"pixels"})]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"defaultValue",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Adds a custom default value to the search input"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onChange",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"Callback function to be invoked upon text change"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"allowClear",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:"Whether to display clear button or not"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"true"})," the search input will be disable"]})}),(0,jsx_runtime.jsxs)(docs_src._6,{title:"variation",type:"string",defaultValue:"basic",children:[(0,jsx_runtime.jsx)("p",{children:"Sets the variation of the search input"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options"}),(0,jsx_runtime.jsxs)(docs_src._u,{children:[(0,jsx_runtime.jsx)("span",{label:"basic"}),(0,jsx_runtime.jsx)("span",{label:"smart"})]})]}),(0,jsx_runtime.jsx)(docs_src._6,{title:"searchMinChars",type:"number",defaultValue:"2",children:(0,jsx_runtime.jsx)("p",{children:"The mimimum number of characters required to run the search (only applicable for smart variation)"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"searchHint",type:"string",defaultValue:"Please enter {searchMinChars} or more characters",children:(0,jsx_runtime.jsx)("p",{children:"Provides a descriptive hint for search. (only applicable for smart variation) "})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Adds a custom css className(s) for further customization"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const basciCode=dedent_default()`
<Search defaultValue="Search Text" />
`,smartSearchCode=dedent_default()`
  <Search
      options={[ "United States", "Algeria", "Australia"]}
      variation="smart"
      searchHint="Please enter 2 or more characters"
      defaultValue="Un"
  />
`,disabledCode=dedent_default()`
  <Search isDisabled={true}/>
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is a basic search example on its default form"}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(Search,{defaultValue:"Search Text"})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:basciCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Smart Search",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Smart Search displays search options while the user is typing"}),(0,jsx_runtime.jsxs)(docs_src._u,{children:[(0,jsx_runtime.jsx)("span",{label:'Use the prop "options" to specify the options for search'}),(0,jsx_runtime.jsx)("span",{label:'Use the prop "searchMinChars" to set the minimum\n\t\t     number of charcters needed to implement searching'}),(0,jsx_runtime.jsx)("span",{label:'Use the prop "searchHint" to provide a description text for the user'})]}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(Search,{options,variation:"smart",searchHint:"Please enter 2 or more characters",defaultValue:"Un"})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:smartSearchCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Disabled",contained:!0,ontained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"isDisabled={true}"})," to disable the input"]}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(Search,{isDisabled:!0})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:disabledCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Hide Clear",contained:!0,ontained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"allowClear={false}"})," to hide the clear button"]}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsx)(Search,{allowClear:!1,defaultValue:"Clear Not Allowed"})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:disabledCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function search_createMdxContent(props){return docs_src.K2||_missingMdxReference("Page",!1),docs_src.K2.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.C,{children:(0,jsx_runtime.jsxs)(docs_src.K2.Tabs,{title:"Search",subtitle:"Search is an input field that allow users to find and access content or information within the plugin.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const search_stories={title:"SUI/Components/Core/Search",component:Search,parameters:{layout:"fullscreen",docs:{page:function search_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(search_createMdxContent,props)})):search_createMdxContent()}}}},search_stories_Search=({...props})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:{padding:"20px",backgroundColor:"white"},children:(0,jsx_runtime.jsx)(Search,{...props,options})})})});search_stories_Search.args={variation:"basic",placeholder:"Search",allowClear:!0,searchMinChars:2,defaultValue:"",isDisabled:!1},search_stories_Search.argTypes={variation:{name:"Variation",options:["basic","smart"],control:{type:"select",labels:{basic:"Basic Search",smart:"Smart Search"}}},placeholder:{name:"Placeholder",control:{type:"text"}},defaultValue:{name:"Default Value",control:{type:"text"}},allowClear:{name:"Allow Clear",control:{type:"boolean"}},searchMinChars:{name:"Minimum characters",control:{type:"number"}},isDisabled:{name:"Disabled",control:{type:"boolean"}},customWidth:{name:"customWidth",control:{type:"number"}}};const __namedExportsOrder=["Search"]},"./packages/ui/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const typeValues=["button","checkbox","color","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="md",position="start",onClick})=>{if((0,src.t7)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=components.cp[name],iconClass=(name??"").replace(/[A-Z]/g,((match,index)=>(0===index?"":"-")+match.toLowerCase()));return(0,jsx_runtime.jsx)("span",{className:`suicons sui-input__icon sui-input__icon--${iconClass}`,"aria-hidden":"true","data-testid":`input-icon-${position}`,onClick,children:IconName&&(0,jsx_runtime.jsx)(IconName,{size})})};var tooltip_src=__webpack_require__("./packages/ui/tooltip/src/index.ts");const Input=(0,react.forwardRef)((({type="text",defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall,isReadOnly=!1,isError=!1,isDisabled=!1,onClickIcon,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,onClear,icon,iconPosition,iconHint="",iconTooltipWidth,allowClear=!1,disableInteractions=!1,isRequired=!1,pattern,onKeyUp,validateOnMount=!1,customWidth,onValidate,...props},ref)=>{const uniqueId=(0,react.useId)();id||(id=uniqueId);const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src._Y)({}),[hasError,setHasError]=(0,react.useState)(!1);if(!(!(0,src.Y3)(id)&&!(0,src.t7)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClearCallback=(0,react.useCallback)((()=>{setValue(""),onClear&&onClear("")}),[onClear]),hasValue=!(0,src.Y3)(value)&&!(0,src.t7)(value??""),hasPlaceholder=!(0,src.Y3)(placeholder)&&!(0,src.t7)(placeholder),hasClassInput=!(0,src.Y3)(inputClass)&&!(0,src.t7)(inputClass);let inputType="text";typeValues.includes(type)&&(inputType=type);const classNames=(0,src.QX)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly&&!isError,filled:hasValue,"has-icon":!(0,src.t7)(icon),"icon-start":!(0,src.t7)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.t7)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},className??""),inputClassNames=(0,src.QX)("sui-input__input",{"allow-clear":allowClear&&!(0,src.t7)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const hasHintText=!(0,src.t7)(hint??"");(0,react.useEffect)((()=>{onValidate&&onValidate(id,hasError)}),[hasError]);const validation=()=>{let tempHasError=!1;const val=value?.toString()?.trim()??"";"string"==typeof value&&""!==val&&pattern?tempHasError=!new RegExp("^(?:"+pattern+")$","gm").test(val):isRequired&&(0,src.t7)(val)&&(tempHasError=!0),setHasError(tempHasError)};(0,react.useEffect)((()=>{validateOnMount&&validation()}),[]);const attrs={id,ref,type:(0,src.es)(!isMultiLine,inputType),placeholder:(0,src.es)(hasPlaceholder,placeholder),"aria-label":placeholder||"input",readOnly:(0,src.es)(isReadOnly,!0),disabled:(0,src.es)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,required:isRequired,pattern,onKeyUp:e=>{validation(),onKeyUp&&onKeyUp(e)},...props},renderIcon=()=>!icon||isMultiLine?null:(0,src.t7)(iconHint)?(0,jsx_runtime.jsx)(Icon,{name:icon,size:isSmall?"sm":"md",position:iconPosition??"start",onClick:e=>{onClickIcon&&onClickIcon(e)}}):(0,jsx_runtime.jsx)(tooltip_src.o,{type:"icon",icon,customWidth:iconTooltipWidth,iconSize:isSmall?"sm":"md",position:"top",onClick:()=>{onClickIcon&&onClickIcon()},children:iconHint});return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",...customWidth&&{style:{maxWidth:`${customWidth}px`}},children:["start"===iconPosition&&renderIcon(),(0,jsx_runtime.jsxs)("div",{className:(0,src.QX)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.t7)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),"end"===iconPosition&&renderIcon(),allowClear&&!(0,src.t7)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.q,{className:"sui-input__input-clear",icon:"CloseAlt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"sm":"md",onClick:onClearCallback,isSmall:isSmall??!1,onKeyDown:e=>(0,src.eX)(e,onClear),children:"Clear"})]})}));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1},isMultiLine:{defaultValue:{value:"false",computed:!1},required:!1},isReadOnly:{defaultValue:{value:"false",computed:!1},required:!1},isError:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},onMouseEnter:{defaultValue:{value:"() => { }",computed:!1},required:!1},onMouseLeave:{defaultValue:{value:"() => { }",computed:!1},required:!1},iconHint:{defaultValue:{value:'""',computed:!1},required:!1},allowClear:{defaultValue:{value:"false",computed:!1},required:!1},disableInteractions:{defaultValue:{value:"false",computed:!1},required:!1},isRequired:{defaultValue:{value:"false",computed:!1},required:!1},validateOnMount:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-search-stories-search-stories.b403bec9.iframe.bundle.js.map