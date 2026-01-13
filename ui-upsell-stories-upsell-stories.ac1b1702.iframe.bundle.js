"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[4425],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,kL:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kL});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>hrefTo,oo:()=>navigate,uM:()=>linkTo});var _storybook_global__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/global"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("@storybook/preview-api"),_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/core-events"),_storybook_csf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs"),{document,HTMLElement}=_storybook_global__WEBPACK_IMPORTED_MODULE_0__.global;var navigate=params=>_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel().emit(_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__.SELECT_STORY,params),hrefTo=(title,name)=>new Promise(resolve=>{let{location}=document,query=function parseQuery(queryString){let query={},pairs=("?"===queryString[0]?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"")}return query}(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,_storybook_csf__WEBPACK_IMPORTED_MODULE_3__.Lr)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,"");resolve(`${location.origin+sbPath}?${Object.entries({path}).map(item=>`${item[0]}=${item[1]}`).join("&")}`)}),linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=(args=>value=>"function"==typeof value?value(...args):value)(args),title=resolver(idOrTitle),name=!!nameInput&&resolver(nameInput);title?.match(/--/)&&!name?navigate({storyId:title}):name&&title?navigate({kind:title,story:name}):title?navigate({kind:title}):name&&navigate({story:name})},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,document.removeEventListener("click",linksListener))};(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,document.addEventListener("click",linksListener)),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.addons.getChannel().once(_storybook_core_events__WEBPACK_IMPORTED_MODULE_2__.STORY_CHANGED,off),getStory(context))})},"./node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uM:()=>_chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__.uM});var _chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>react_default});var _chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-links/dist/chunk-6GSMXRCY.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),LinkTo=class extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await(0,_chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__.Z)(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&(0,_chunk_6GSMXRCY_mjs__WEBPACK_IMPORTED_MODULE_0__.oo)({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react__WEBPACK_IMPORTED_MODULE_1__.createElement("a",{href,onClick:e=>((e,cb=_e=>{})=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_default=LinkTo},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach(function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}}),null!==mindent&&(result=lines.map(function(l){return" "===l[0]?l.slice(mindent):l}).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({id,hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{id,className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{id,className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({id,name,size="sm",className=""})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay$[IconName],classes=(0,utils_src.n0)("sui-button__icon",{},className);return(0,jsx_runtime.jsx)("span",{id,className:classes,"aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{id:`${id}_icon`,size})})};var spinner_src=__webpack_require__("./packages/ui/spinner/src/index.ts");const Loader=({id,children,colorScheme,isDisabled})=>{let spinnerColorScheme="white";return"white"===colorScheme&&(spinnerColorScheme="dark"),isDisabled&&(spinnerColorScheme="gray"),(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{id,className:"sui-button__icon sui-button__icon--loader","aria-hidden":"true",children:(0,jsx_runtime.jsx)(spinner_src.y,{id:`${id}_spinner`,loaderSize:"sm",colorScheme:spinnerColorScheme})}),children?(0,jsx_runtime.jsx)("span",{id:`${id}_label`,className:"sui-button__label sui-button__label--hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{id:`${id}_loading`,className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]})},Button=(0,react.forwardRef)(({id,href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,onMouseEnter,onMouseLeave,onFocus,onBlur,onMouseUp,onMouseDownCapture,onMouseUpCapture,onBlurCapture,onClick,_htmlProps={},_style},ref)=>{const generatedId=(0,react.useId)(),buttonId=id||`sui_button_${generatedId}`;children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{id:`${buttonId}_loader`,colorScheme,isDisabled,children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter,onMouseLeave,onFocus,onBlur,onMouseUp,onMouseDownCapture,onMouseUpCapture,onBlurCapture}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=!(0,utils_src.Im)(endIcon??""),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={id:buttonId,ref,href:isLink&&href?href:void 0,...isLink&&target&&{target},htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",onClick,...(0,utils_src.X5)(_htmlProps),...interactionMethods??{}};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&(0,jsx_runtime.jsx)(Icon,{id:`${buttonId}_start-icon`,name:startIcon??"",size:iconSize,...isLoading?{className:"sui-button__icon--hidden"}:{}}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{id:`${buttonId}_label`,...iconOnly&&{hidden:!0},children}),isEndIcon&&(0,jsx_runtime.jsx)(Icon,{id:`${buttonId}_end-icon`,name:endIcon??"",size:iconSize,...isLoading?{className:"sui-button__icon--hidden"}:{}})]})});Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>Col,y:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Row=({id,align={md:"inline"},className,children,_htmlProps={},_style})=>{const generatedId=(0,react.useId)(),rowId=id||`sui_row_${generatedId}`,{suiInlineClassname}=(0,hooks_src.IS)(_style,className),expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames=(0,src.n0)("sui-row",{},suiInlineClassname);children=(0,hooks_src.Q8)(children,"{Row children}");for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.Im)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{id:rowId,className:classNames,"data-testid":"grid",...(0,src.X5)(_htmlProps),children})},Col=({id,size,children,className,_htmlProps={},_style})=>{const generatedId=(0,react.useId)(),colId=id||`sui_col_${generatedId}`,{suiInlineClassname}=(0,hooks_src.IS)(_style,className),sizeClasses="object"==typeof size?Object.entries(size).reduce((acc,[breakpoint,value])=>(value&&("default"===breakpoint?acc[value]=!0:acc[`${breakpoint}-${value}`]=!0),acc),{}):{[size]:!!size},classNames=(0,src.n0)("sui-col",{...sizeClasses},suiInlineClassname);return children=(0,hooks_src.Q8)(children,"{Column children content}"),(0,jsx_runtime.jsx)("div",{id:colId,className:classNames,...(0,src.X5)(_htmlProps),children})}},"./packages/ui/spinner/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>Spinner,p:()=>useSpinner});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const SpinnerLoader=({isSpinning,_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),attrs={cx:"50%",cy:"50%",r:44};return(0,jsx_runtime.jsx)("div",{className:(0,src.n0)("sui-spinner__loader",{},suiInlineClassname),children:(0,jsx_runtime.jsxs)("svg",{className:"sui-spinner__icon",viewBox:"0 0 100 100",children:[(0,jsx_runtime.jsx)("title",{children:"loading"}),(0,jsx_runtime.jsx)("circle",{className:"sui-spinner__icon--background",...attrs}),isSpinning&&(0,jsx_runtime.jsx)("circle",{className:"sui-spinner__icon--stroke",...attrs})]})})},Spinner=({id,loaderSize="lg",colorScheme="primary",isContained=!1,isAbsolute=!1,isSpinning=!0,_htmlProps={},_style={}})=>{const generatedId=(0,react.useId)(),spinnerId=id||`sui_spinner_${generatedId}`,{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-spinner",{absolute:isAbsolute,[loaderSize]:!(0,src.Im)(loaderSize??""),[colorScheme]:!(0,src.Im)(colorScheme)&&"primary"!==colorScheme,contained:isContained,inactive:!isSpinning},suiInlineClassname);return(0,jsx_runtime.jsx)("div",{id:spinnerId,className:classNames,"data-testid":"spinner",...(0,src.X5)(_htmlProps),children:(0,jsx_runtime.jsx)(SpinnerLoader,{colorScheme,loaderSize:loaderSize??"lg",isSpinning})})};var client=__webpack_require__("./node_modules/react-dom/client.js");const useSpinner=(targetRef,{colorScheme,loaderSize})=>{const[isVisible,setIsVisible]=(0,react.useState)(!1),spinnerId=`sui_spinner_${(0,react.useId)()}`;(0,react.useEffect)(()=>{const currentTargetRef=targetRef?.current;if(!currentTargetRef)return;if(!isVisible){const spinnerDiv=document.getElementById(spinnerId);return void(spinnerDiv?.parentNode&&(currentTargetRef.removeChild(spinnerDiv),currentTargetRef.classList.remove("sui-spinner__wrapper")))}const fakeDiv=document.createElement("div");return isVisible&&(fakeDiv.id=spinnerId,fakeDiv.classList.add("sui-spinner__fake"),currentTargetRef.classList.add("sui-spinner__wrapper"),(0,client.createRoot)(fakeDiv).render((0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:`sui-spinner__overlay sui-spinner__overlay--${colorScheme}`}),(0,jsx_runtime.jsx)(Spinner,{colorScheme,loaderSize,isAbsolute:!0})]})),targetRef.current.appendChild(fakeDiv)),()=>{if(fakeDiv){const spinnerDiv=document.getElementById(spinnerId);spinnerDiv?.parentNode&&(currentTargetRef?.removeChild(spinnerDiv),currentTargetRef?.classList.remove("sui-spinner__wrapper"))}}},[colorScheme,loaderSize,targetRef,isVisible,spinnerId]);return{show:()=>setIsVisible(!0),hide:()=>setIsVisible(!1),isVisible}}},"./packages/ui/upsell/stories/upsell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Upsell:()=>upsell_stories_Upsell,__namedExportsOrder:()=>__namedExportsOrder,default:()=>upsell_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const variationsList={hummingbird:{icon:"PluginHummingbird",title:"Hummingbird Pro",description:"Get our full WordPress performance optimization suite with Hummingbird Pro and additional benefits of WPMU DEV membership."},smush:{icon:"PluginSmush",title:"Smush Pro",description:"Max speed, no limits, everything you need to achieve peak image performance."},snapshot:{icon:"PluginSnapshot",title:"Snasphot Pro",description:"Get Snapshot Pro and get all the tools you need for Easily backup and migrate site."},smartcrawl:{icon:"PluginSmartcrawl",title:"SmartCrawl Pro",description:"Get our full WordPress Search Engine Optimization suite with SmartCrawl Pro and resolve more about the Engine Optimization."},shipper:{icon:"PluginShipper",title:"Shipper Pro",description:"Get Shipper Pro and get all the tools you need for Migrate Site."},ivt:{icon:"PluginIvt",title:"IVT Pro",description:"Get IVT Pro and get all the tools you need for Video upload on Site."},hustle:{icon:"PluginHustle",title:"Hustle Pro",description:"Get Hustle Pro and get all the tools you need for Conversion insights."},forminator:{icon:"PluginForminator",title:"Forminator Pro",description:"Get Forminator Pro and get all the tools you need to Create different style of Forms, Quizes and Email templates"},defender:{icon:"PluginDefender",title:"Defender Pro",description:"Get Defender Pro and get all the tools you need to FIx all the security issue in your site, it help to fix Malware code too."},branda:{icon:"PluginBranda",title:"Branda Pro",description:"Get Branda Pro and get all the tools you need to Secure your site."},beehive:{icon:"PluginBeehive",title:"Beehive Pro",description:"Get Beehive Pro and get all the tools you need for analytic insights."},dashboard:{icon:"PluginDashboard",title:"WPMU DEV Membership",description:"Get the full performance optimization suite and additional benefits of WPMU DEV membership"}};var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Upsell=({id,title,description="",size,variation="hummingbird",features=[],actions=null,featuresIcon="Check",featuresTitle="",_htmlProps={},_style={}})=>{const generatedId=(0,react.useId)(),upsellId=id||`sui_upsell_${generatedId}`,{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-upsell",{[variation]:!(0,src.Im)(variation??""),[size]:!(0,src.Im)(size??"")},suiInlineClassname),currentVar=variationsList[variation],Icon=components.Ay$?.[currentVar?.icon],FeatureIcon=components.Ay$?.[featuresIcon];return(0,jsx_runtime.jsxs)("div",{id:upsellId,className:classNames,"data-testid":"upsell",...(0,src.X5)(_htmlProps),children:[(0,jsx_runtime.jsxs)("div",{className:"sui-upsell__header",children:[Icon&&(0,jsx_runtime.jsx)("div",{className:"sui-upsell__header-icon","data-testid":"upsell-icon",children:(0,jsx_runtime.jsx)("div",{className:(0,src.n0)("sui-upsell__icon",{[variation]:!(0,src.Im)(variation??"")}),children:(0,jsx_runtime.jsx)(Icon,{fill:"white"})})}),(0,jsx_runtime.jsx)("h3",{className:"sui-upsell__header-title sui-heading--h5","data-testid":"upsell-title",children:title??currentVar?.title})]}),(0,jsx_runtime.jsxs)("div",{className:"sui-upsell__body",children:[(0,src.Im)(description??"")?currentVar?.description:description,!!featuresTitle&&(0,jsx_runtime.jsx)("h4",{className:"sui-upsell__features-title",children:featuresTitle}),features?.length>0&&(0,jsx_runtime.jsx)("ul",{className:(0,src.n0)("sui-upsell__features",{"has-title":!!featuresTitle}),"data-testid":"features",children:features?.map((feature,index)=>(0,jsx_runtime.jsxs)("li",{className:"sui-upsell__features-item",children:[(0,jsx_runtime.jsx)(FeatureIcon,{size:"sm"}),(0,jsx_runtime.jsx)("span",{children:feature})]},index))})]}),actions&&(0,jsx_runtime.jsx)("div",{className:"sui-upsell__footer","data-testid":"actions",children:actions})]})};Upsell.displayName="Upsell";var button_src=__webpack_require__("./packages/ui/button/src/index.ts"),grid_src=__webpack_require__("./packages/ui/grid/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.d91b1595.svg",location_namespaceObject=__webpack_require__.p+"static/media/location.6ba82220.svg",spacing_desktop_namespaceObject=__webpack_require__.p+"static/media/spacing-desktop.a632982c.svg",padding_desktop_namespaceObject=__webpack_require__.p+"static/media/padding-desktop.a98048e4.svg",spacing_tablet_namespaceObject=__webpack_require__.p+"static/media/spacing-tablet.a1cffc46.svg",spacing_mobile_namespaceObject=__webpack_require__.p+"static/media/spacing-mobile.a1cffc46.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Upsell Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Product icon + Product name"}),(0,jsx_runtime.jsx)("p",{children:"Based upon the plugin the Product icon(40px) will be replaced with the relevant one and the Title with the plugin name along with “Pro” added at suffix Ex: [plugin’s name] Pro, Smush Pro"}),(0,jsx_runtime.jsx)("h3",{children:"2. Description"}),(0,jsx_runtime.jsx)("p",{children:"The description body is to show the Purpose of upsell. Line should not be more than 170 Character (3 lines)"}),(0,jsx_runtime.jsx)("h3",{children:"3. Highlighted key-features (Max 5)"}),(0,jsx_runtime.jsx)("p",{children:"Depending upon the plugin features these key features can be used to convey the features to free tier user."}),(0,jsx_runtime.jsx)("h3",{children:"4. Upgrade now"}),(0,jsx_runtime.jsx)("p",{children:"This button will lead user to purchase the Pro tier"}),(0,jsx_runtime.jsx)("h3",{children:"5. Learn more "}),(0,jsx_runtime.jsx)("p",{children:"This button will lead user to learn more about what Product has to offer on Pro tier."})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Where and how to display?",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Upsell banners will be shown on the free user’s dashboard, next to the\nsummary box. It covers the 1/3 grid (4 col) space on desktop, and moves\nbelow the summary box covering 100% width in mobile & tablet (whole grid\nunder the summary box)."})}),(0,jsx_runtime.jsx)("img",{src:location_namespaceObject,alt:"Upsell location"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Spacing: Desktop Screen",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"For the Desktop screen the Upsell box will take only 4 column from right."})}),(0,jsx_runtime.jsx)("img",{src:spacing_desktop_namespaceObject,alt:"Upsell Spacing Desktop"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"NOTE: The minimum bottom-padding for the desktop is 32px however it tries to\nflex with the height of the summary box."})}),(0,jsx_runtime.jsx)("img",{src:padding_desktop_namespaceObject,alt:"Upsell Padding Desktop"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Spacing: Tablet Screen",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"for the Tablet screen the Upsell box will take only 12 column under the\nsummary box."})}),(0,jsx_runtime.jsx)("img",{src:spacing_tablet_namespaceObject,alt:"Upsell Spacing Tablet"})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Spacing: Mobile Screen",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"for the Mobile screen the Upsell box will take only 12 column under the\nsummary box."})}),(0,jsx_runtime.jsx)("img",{src:spacing_mobile_namespaceObject,alt:"Upsell Spacing Mobile"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-upsell"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"title",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"The main heading text for the Upsell"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"description",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Descriptive text that accompagnes the title"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"actions",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Optional actions button to be displayed at the bottom"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"features",type:"Array",children:(0,jsx_runtime.jsx)("p",{children:"A list of features to be displayed, the array of items could be strings or React Nodes"})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"size",type:"string",children:[(0,jsx_runtime.jsx)("p",{children:"The upsell size"}),(0,jsx_runtime.jsx)("p",{children:"Allowed options"}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"sm"})," for small size"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"lg"})," for a larger size"]})})]})]}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"variation",type:"string",defaultValue:"hummingbird",children:[(0,jsx_runtime.jsx)("p",{children:" The Upsell variation, which include our list of plugins:"}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"hummingbird"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"smush"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"snapshot"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"smartcrawl"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"ivt"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"hustle"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"forminator"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"defender"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"branda"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"beehive"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"dashboard"})})]})]})]}),"\n",(0,jsx_runtime.jsx)(docs_src.oW,{})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const Code=dedent_default()`
    <Upsell
      variation="hummingbird"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Hummingbird_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"hummingbird",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Code})]})}const Hummingbird=function Hummingbird_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Hummingbird_createMdxContent,props)})):Hummingbird_createMdxContent(props)},Smush_Code=dedent_default()`
    <Upsell
      variation="smush"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Smush_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"smush",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Smush_Code})]})}const Smush=function Smush_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Smush_createMdxContent,props)})):Smush_createMdxContent(props)},Snapshot_Code=dedent_default()`
    <Upsell
      variation="snapshot"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Snapshot_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"snapshot",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Snapshot_Code})]})}const Snapshot=function Snapshot_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Snapshot_createMdxContent,props)})):Snapshot_createMdxContent(props)},Smartcrawl_Code=dedent_default()`
    <Upsell
      variation="smartcrawl"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Smartcrawl_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"smartcrawl",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Smartcrawl_Code})]})}const Smartcrawl=function Smartcrawl_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Smartcrawl_createMdxContent,props)})):Smartcrawl_createMdxContent(props)},Shipper_Code=dedent_default()`
    <Upsell
      variation="shipper"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Shipper_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"shipper",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Shipper_Code})]})}const Shipper=function Shipper_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Shipper_createMdxContent,props)})):Shipper_createMdxContent(props)},Ivt_Code=dedent_default()`
    <Upsell
      variation="ivt"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Ivt_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"ivt",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Ivt_Code})]})}const Ivt=function Ivt_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Ivt_createMdxContent,props)})):Ivt_createMdxContent(props)},Hustle_Code=dedent_default()`
    <Upsell
      variation="hustle"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Hustle_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"hustle",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Hustle_Code})]})}const Hustle=function Hustle_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Hustle_createMdxContent,props)})):Hustle_createMdxContent(props)},Forminator_Code=dedent_default()`
    <Upsell
      variation="forminator"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Forminator_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"forminator",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Forminator_Code})]})}const Forminator=function Forminator_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Forminator_createMdxContent,props)})):Forminator_createMdxContent(props)},Defender_Code=dedent_default()`
    <Upsell
      variation="defender"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Defender_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"defender",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Defender_Code})]})}const Defender=function Defender_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Defender_createMdxContent,props)})):Defender_createMdxContent(props)},Branda_Code=dedent_default()`
    <Upsell
      variation="branda"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Branda_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"branda",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Branda_Code})]})}const Branda=function Branda_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Branda_createMdxContent,props)})):Branda_createMdxContent(props)},Beehive_Code=dedent_default()`
    <Upsell
      variation="beehive"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Beehive_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"beehive",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Beehive_Code})]})}const Beehive=function Beehive_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Beehive_createMdxContent,props)})):Beehive_createMdxContent(props)},Dashboard_Code=dedent_default()`
    <Upsell
      variation="dashboard"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function Dashboard_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{variation:"dashboard",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Dashboard_Code})]})}const Dashboard=function Dashboard_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Dashboard_createMdxContent,props)})):Dashboard_createMdxContent(props)},generalCode=dedent_default()`
    <Upsell
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`,largeCode=dedent_default()`
    <Upsell
      size="lg"
      features={[
        "Performance Test Reporting",
        "Uptime monitoring",
        "Enhanced file minification with CDN",
        "Database Cleanup notifications",
      ]}
      actions={[
        <div key={0}>
          <Button type="primary" colorScheme="black" isSmall={true}>
            Upgrade now
          </Button>
        </div>,
        <div key={1}>
          <Button
            href="#"
            target="_blank"
            type="tertiary"
            colorScheme="black"
            isSmall={true}
          >
            Learn more
          </Button>
        </div>,
      ]}
    />
`;function TabExamples_createMdxContent(props){const _components=Object.assign({div:"div",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the general form of the Upsell component"}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Large Size",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsxs)("p",{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"size={lg}"})," for a larger Upsell"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(Upsell,{size:"lg",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:largeCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Variations",style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"variation"})," prop to change the Upsell plugin\nvariation."]}),(0,jsx_runtime.jsxs)(docs_src.ij,{children:[(0,jsx_runtime.jsx)("div",{label:"hummingbird",value:"hummingbird",children:(0,jsx_runtime.jsx)(Hummingbird,{})}),(0,jsx_runtime.jsx)("div",{label:"smush",value:"smush",children:(0,jsx_runtime.jsx)(Smush,{})}),(0,jsx_runtime.jsx)("div",{label:"snapshot",value:"snapshot",children:(0,jsx_runtime.jsx)(Snapshot,{})}),(0,jsx_runtime.jsx)("div",{label:"smartcrawl",value:"smartcrawl",children:(0,jsx_runtime.jsx)(Smartcrawl,{})}),(0,jsx_runtime.jsx)("div",{label:"shipper",value:"shipper",children:(0,jsx_runtime.jsx)(Shipper,{})}),(0,jsx_runtime.jsx)("div",{label:"shipper",value:"shipper",children:(0,jsx_runtime.jsx)(Shipper,{})}),(0,jsx_runtime.jsx)("div",{label:"ivt",value:"ivt",children:(0,jsx_runtime.jsx)(Ivt,{})}),(0,jsx_runtime.jsx)("div",{label:"hustle",value:"hustle",children:(0,jsx_runtime.jsx)(Hustle,{})}),(0,jsx_runtime.jsx)("div",{label:"forminator",value:"forminator",children:(0,jsx_runtime.jsx)(Forminator,{})}),(0,jsx_runtime.jsx)("div",{label:"defender",value:"defender",children:(0,jsx_runtime.jsx)(Defender,{})}),(0,jsx_runtime.jsx)("div",{label:"branda",value:"branda",children:(0,jsx_runtime.jsx)(Branda,{})}),(0,jsx_runtime.jsx)("div",{label:"beehive",value:"beehive",children:(0,jsx_runtime.jsx)(Beehive,{})}),(0,jsx_runtime.jsx)("div",{label:"dashboard",value:"dashboard",children:(0,jsx_runtime.jsx)(Dashboard,{})})]})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function upsell_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Upsell",subtitle:"Upsell box provides a list of Features which are part of the Pro tier. It highlights key features of Plugin pro features. The goal of this Upsell is to Highlight the Pro features for the free tier user.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const upsell_stories={title:"SUI/Components/Collections/Upsell",component:Upsell,parameters:{layout:"fullscreen",docs:{page:function upsell_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(upsell_createMdxContent,props)})):upsell_createMdxContent()}}}},upsell_stories_Upsell=({size,...props})=>{const actions=[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.$,{type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)];return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(grid_src.y,{align:{md:"inline"},children:(0,jsx_runtime.jsx)(grid_src.f,{size:"lg"===size?12:4,children:(0,jsx_runtime.jsx)(Upsell,{...props,size,actions,features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"]})})})})})})};upsell_stories_Upsell.args={description:(0,jsx_runtime.jsx)("p",{children:"Get our full WordPress performance optimization suite with Hummingbird Pro and the additional benefits of WPMU DEV membership. Get yours today now Lorem ipsum Lorem Ipsum."}),variation:"hummingbird",size:"sm"},upsell_stories_Upsell.argTypes={title:{name:"Title",control:{type:"text"}},description:{name:"Description"},variation:{name:"Variation",options:["hummingbird","smush","snapshot","smartcrawl","shipper","ivt","hustle","forminator","defender","branda","beehive","dashboard"],control:{type:"select",labels:{hummingbird:"Hummingbird",smush:"Smush",snapshot:"Snapshot",smartcrawl:"Smartcrawl",shipper:"Shipper",ivt:"Ivt",hustle:"Hustle",forminator:"Forminator",defender:"Defender",branda:"Branda",beehive:"Beehive"}}},size:{name:"Size",options:["sm","lg"],control:{type:"select",labels:{sm:"Small",lg:"Large"}}},featuresTitle:{name:"Features Title",control:{type:"text"}},featuresIcon:{name:"Features Icon",options:components.iTx,control:{type:"select"}}},upsell_stories_Upsell.parameters={...upsell_stories_Upsell.parameters,docs:{...upsell_stories_Upsell.parameters?.docs,source:{originalSource:'({\n  size,\n  ...props\n}: {\n  size: "sm" | "lg";\n}) => {\n  const actions = [<div key={0}>\n            <Button type="primary" colorScheme="black" isSmall={true}>\n                Upgrade now\n            </Button>\n        </div>, <div key={1}>\n            <Button type="tertiary" colorScheme="black" isSmall={true}>\n                Learn more\n            </Button>\n        </div>];\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div>\n                    <Row align={{\n          md: "inline"\n        }}>\n                        <Col size={"lg" === size ? 12 : 4}>\n                            <SuiUpsell {...props} size={size} actions={actions} features={["Performance Test Reporting", "Uptime monitoring", "Enhanced file minification with CDN", "Database Cleanup notifications"]} />\n                        </Col>\n                    </Row>\n                </div>\n            </div>\n        </div>;\n}',...upsell_stories_Upsell.parameters?.docs?.source}}};const __namedExportsOrder=["Upsell"]}}]);
//# sourceMappingURL=ui-upsell-stories-upsell-stories.ac1b1702.iframe.bundle.js.map