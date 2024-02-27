"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[4871],{"./packages/ui/navigation/stories/navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Navigation:()=>navigation_stories_Navigation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>navigation_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const NavigationBrand=({plugin,title="",description="",_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),PluginIcon=plugin?src.$c?.[plugin]:{icon:"Plugin"};let IconTag=null;return PluginIcon&&(IconTag=components.Ay?.[PluginIcon.icon]),(0,jsx_runtime.jsxs)("div",{className:(0,src.n0)("sui-navigation__brand",{},suiInlineClassname),children:[(0,jsx_runtime.jsx)("div",{className:"sui-navigation__icon",style:{backgroundColor:PluginIcon?.bg},children:!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{fill:PluginIcon?.color})}),(0,jsx_runtime.jsxs)("div",{className:"sui-navigation__info",children:[(0,jsx_runtime.jsx)("h3",{className:"sui-heading--h4",children:title}),(0,jsx_runtime.jsx)("span",{className:"sui-navigation__info--desc",children:description})]})]})};NavigationBrand.displayName="NavigationBrand";var dropdown_src=__webpack_require__("./packages/ui/dropdown/src/index.ts"),avatar_src=__webpack_require__("./packages/ui/avatar/src/index.ts");const NavigationUser=({user,menu,isMenuDisabled=!1,status})=>{const userBtnRef=(0,react.useRef)(null),userAvatarBtn=(0,jsx_runtime.jsx)(avatar_src.e,{status,image:{src:user?.image??"",alt:"User Avatar"},...!isMenuDisabled&&{onClick:()=>{userBtnRef?.current?.toggle()}}});return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(dropdown_src.m,{ref:userBtnRef,label:"Menu Button",placement:"left",trigger:userAvatarBtn,renderContentOnTop:!0,menu:menu??[],children:(0,src.Im)(user?.name??"")&&(0,src.Im)(user?.email??"")?null:(0,jsx_runtime.jsxs)("div",{className:"sui-navigation__user",children:[!(0,src.Im)(user?.name??"")&&(0,jsx_runtime.jsx)("div",{className:"sui-navigation__user--name",children:user?.name}),!(0,src.Im)(user?.email??"")&&(0,jsx_runtime.jsx)("div",{className:"sui-navigation__user--email",children:user?.email})]})})})};NavigationUser.displayName="NavigationUser";const Navigation=({children,brand={title:"title",description:""},user,_style})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-navigation",{},suiInlineClassname);return(0,jsx_runtime.jsxs)("nav",{className:classNames,"data-testid":"navigation",children:[(0,jsx_runtime.jsx)(NavigationBrand,{...brand}),(0,jsx_runtime.jsx)("ul",{className:"sui-navigation__nav",children:react.Children.map(children,((child,index)=>(0,jsx_runtime.jsx)("li",{className:"sui-navigation__nav-item",children:child},index)))}),(0,jsx_runtime.jsx)(NavigationUser,{...user})]})};var button_src=__webpack_require__("./packages/ui/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.1527de5d.svg",accounts_states_namespaceObject=__webpack_require__.p+"static/media/accounts-states.65439191.svg",behaviour_namespaceObject=__webpack_require__.p+"static/media/behaviour.4f7f0a51.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.4fe52dc2.svg",max_width_namespaceObject=__webpack_require__.p+"static/media/max-width.b7c912e1.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Navigation Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"1. Branding"}),(0,jsx_runtime.jsx)("p",{children:"Branding include the brand icon, brand name and tagline."}),(0,jsx_runtime.jsx)("h3",{children:"2. Navigation menu"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The navigation menu includes the links of helpful resources for the plugin."})}),(0,jsx_runtime.jsx)("h3",{children:"3. User Profile"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"It includes a user avatar or icon that provides access to account settings\nand personal information."})})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Accounts States",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:accounts_states_namespaceObject,alt:"Navigation Accounts States",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Behaviour",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:behaviour_namespaceObject,alt:"Navigation Behaviour",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Spacing",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Navigation Spacing",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Maximum width 1600px",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:max_width_namespaceObject,alt:"Navigation Maximum Width",style:{marginBottom:20}})})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-navigation"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(docs_src.hz,{title:"brand",type:"object",defaultValue:'{ title: "title", description: "" }',children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Brand information, this represents one of our plugins, the object accepts\nthe following keys"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"title*"})," The plugin title"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"description"})," A subheading that accompagnes the plugin title"," "]})})]})})]}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"user",type:"object",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The user information, it accepts two keys"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"user*"}),": An object with an image, name and email"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"status*"}),"Indicates the user status and dispalys an icon for it, could be one of these values:",(0,jsx_runtime.jsx)(_components.strong,{children:" none "}),(0,jsx_runtime.jsx)(_components.strong,{children:" confirmed "}),(0,jsx_runtime.jsx)(_components.strong,{children:" awaiting "}),(0,jsx_runtime.jsx)(_components.strong,{children:" not-accepted "}),(0,jsx_runtime.jsx)(_components.strong,{children:" not-connected "})]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"menu*"})," An array of menu items"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isMenuDisabled*"})," A boolean to indicate the state of the menu"]})})]})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Check the examples tab for more details"})})]}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the navigation, usually menu items and buttons"})})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js");const generalCode=__webpack_require__.n(dedent)()`
   <Navigation
      brand={{
        title: "Smush Pro",
        description: "Description",
      }}
      user={{

        disMenuDisabled: false,

        status: "confirmed",

        user: {
          image: "https://avatars.githubusercontent.com/u/14994452?v=4",
          name: "John doe",
          email: "john.doe@incsub.com",
        },

        menu: [
          {
            id: "the-hub",
            label: "The Hub",
            props: {
              icon: "PluginDefender",
            },
          },
          {
            id: "product-roadmap",
            label: "Product Roadmap",
            props: {
              icon: "PluginSmush",
            },
          },
          {
            id: "product-roadmap",
            label: "Unlock Pro features",
            props: {
              icon: "PluginSmush",
              variation: "smush",
            },
          },
        ],
      }}
    >
      <Button
        type="tertiary"
        icon="Bell"
        color="black"
        isSmall={true}
        isResponsive={true}
      >
        Help
      </Button>
      <Button
        icon="Bell"
        type="tertiary"
        color="black"
        isSmall={true}
        isResponsive={true}
      >
        Documentation
      </Button>
      <Button
        icon="PluginSmush"
        type="tertiary"
        color="black"
        isSmall={true}
        isResponsive={true}
      >
        Support Smush
      </Button>
      <Dropdown
        buttonIcon="Bell"
        label="Connect features"
        placement="left"
        isSmall={true}
        isResponsive={true}
        onMenuClick={(id, e) => {
           console.log("DEBUG: Menu Item Clicked", id, e)
        }}
        menu={[
          {
            id: "group-1",
            label: "Extra Optimization",
            menus: [
              {
                id: "menu-2",
                label: "Uptime Monitoring",
                props: {
                  icon: "CheckAlt",
                },
              },
              {
                id: "menu-2",
                label: "Site management tools",
                props: {},
              },
            ],
          },
          {
            id: "group-2",
            label: "Performance",
            menus: [
              {
                id: "menu-2",
                label: "Uptime Monitoring",
                props: {},
              },
              {
                id: "menu-2",
                label: "Site management tools",
                props: {},
              },
            ],
          },
       ]}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "8px 24px",
          }}
        >
          <Button
            type="primary"
            icon="Package"
            color="blue"
            isSmall={true}
            isFullWidth={true}
          >
            Unlock bonus features
          </Button>
        </div>
      </Dropdown>
    </Navigation>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is a general example of the Navigation component"}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{margin:"50px 0"},children:(0,jsx_runtime.jsxs)(Navigation,{brand:{title:"Smush Pro",description:"Description"},user:{user:{image:"https://avatars.githubusercontent.com/u/14994452?v=4",name:"John doe",email:"john.doe@incsub.com"},isMenuDisabled:!1,status:"confirmed",menu:[{id:"the-hub",label:"The Hub",props:{icon:"PluginDefender"}},{id:"product-roadmap",label:"Product Roadmap",props:{icon:"PluginSmush"}},{id:"product-roadmap",label:"Unlock Pro features",props:{icon:"PluginSmush",variation:"smush"}}]},children:[(0,jsx_runtime.jsx)(button_src.$,{type:"tertiary",icon:"Bell",color:"black",isSmall:!0,isResponsive:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"Help"})}),(0,jsx_runtime.jsx)(button_src.$,{icon:"Bell",type:"tertiary",color:"black",isSmall:!0,isResponsive:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"Documentation"})}),(0,jsx_runtime.jsx)(button_src.$,{icon:"PluginSmush",type:"tertiary",color:"black",isSmall:!0,isResponsive:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"Support Smush"})}),(0,jsx_runtime.jsx)(dropdown_src.m,{buttonIcon:"Bell",label:"Connect features",placement:"left",isSmall:!0,isResponsive:!0,onMenuClick:(id,e)=>{console.log("DEBUG: Menu Item Clicked",id,e)},menu:[{id:"group-1",label:"Extra Optimization",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-2",label:"Site management tools",props:{}}]},{id:"group-2",label:"Performance",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{}},{id:"menu-2",label:"Site management tools",props:{}}]}],children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 24px"},children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",icon:"Package",color:"blue",isSmall:!0,isFullWidth:!0,children:(0,jsx_runtime.jsx)(_components.p,{children:"Unlock bonus features"})})})})]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function navigation_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Navigation",subtitle:"The Navigation component provides a user-friendly and intuitive way to navigate through different sections",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const navigation_stories={title:"SUI/Components/Modules/Navigation",component:Navigation,parameters:{layout:"fullscreen",docs:{page:function navigation_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(navigation_createMdxContent,props)})):navigation_createMdxContent()}}}},navigation_stories_Navigation=props=>{const{status,isMenuDisabled,plugin,title,description}=props;return(0,jsx_runtime.jsx)("div",{className:"sui-layout",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Navigation,{brand:{plugin,title,description},user:{user:{image:"https://avatars.githubusercontent.com/u/14994452?v=4",name:"John doe",email:"john.doe@incsub.com"},status,isMenuDisabled,menu:[{id:"the-hub",label:"The Hub",props:{icon:"PluginDefender"}},{id:"product-roadmap",label:"Product Roadmap",props:{icon:"PluginSmush"}},{id:"product-roadmap",label:"Unlock Pro features",props:{icon:"PluginSmush",variation:"smush"}}]},children:[(0,jsx_runtime.jsx)(button_src.$,{type:"tertiary",icon:"Bell",colorScheme:"black",isResponsive:!0,children:"Help"}),(0,jsx_runtime.jsx)(button_src.$,{icon:"Bell",type:"tertiary",colorScheme:"black",isResponsive:!0,children:"Documentation"}),(0,jsx_runtime.jsx)(button_src.$,{icon:"PluginSmush",type:"tertiary",colorScheme:"black",isResponsive:!0,children:"Support Smush"}),(0,jsx_runtime.jsx)(dropdown_src.m,{buttonIcon:"Bell",label:"Connect features",placement:"left",menu:[{id:"group-1",label:"Extra Optimization",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{icon:"CheckAlt"}},{id:"menu-2",label:"Site management tools",props:{}}]},{id:"group-2",label:"Performance",menus:[{id:"menu-2",label:"Uptime Monitoring",props:{}},{id:"menu-2",label:"Site management tools",props:{}}]}],children:(0,jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"8px 24px"},children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",icon:"Package",colorScheme:"blue",isSmall:!0,isFullWidth:!0,children:"Unlock bonus features"})})})]})})})})};navigation_stories_Navigation.args={isMenuDisabled:!1,status:"confirmed",plugin:"smush",title:"Smush Pro",description:"Description"},navigation_stories_Navigation.argTypes={isMenuDisabled:{name:"Menu Disabled",control:{type:"boolean"}},status:{name:"User Status",options:["none","confirmed","awaiting","not-accepted","not-connected"],control:{type:"select",labels:{none:"None",confirmed:"Confirmed",awaiting:"Awaiting","not-accepted":"Not Accepted","not-connected":"Not Connected"}}},plugin:{name:"User Status",options:["smush","defender","snapshot","hummingbird","forminator","beehive","hustle","smartcrawl","shipper","branda","blc","thc"],control:{type:"select",labels:{smush:"smush",defendre:"defender",snapshot:"snapshot",hummigbird:"hummingbird",forminator:"forminator",beehive:"beehive",hustle:"hustle",smartcrawl:"smartcrawl",shipper:"shipper",branda:"branda",blc:"blc",thc:"thc"}}},title:{name:"Title",control:{type:"text"}},description:{name:"Description",control:{type:"text"}}},navigation_stories_Navigation.parameters={...navigation_stories_Navigation.parameters,docs:{...navigation_stories_Navigation.parameters?.docs,source:{originalSource:'(props: {\n  status: NavigationUserProps["status"];\n  isMenuDisabled: NavigationUserProps["isMenuDisabled"];\n  plugin: PluginsSlug;\n  title: string;\n  description: string;\n}) => {\n  const {\n    status,\n    isMenuDisabled,\n    plugin,\n    title,\n    description\n  } = props;\n  return <div className="sui-layout">\n            <div className="sui-layout__content">\n                <div>\n                    <SuiNavigation brand={{\n          plugin,\n          title,\n          description\n        }} user={{\n          user: {\n            image: "https://avatars.githubusercontent.com/u/14994452?v=4",\n            name: "John doe",\n            email: "john.doe@incsub.com"\n          },\n          status,\n          isMenuDisabled,\n          menu: [{\n            id: "the-hub",\n            label: "The Hub",\n            props: {\n              icon: "PluginDefender"\n            }\n          }, {\n            id: "product-roadmap",\n            label: "Product Roadmap",\n            props: {\n              icon: "PluginSmush"\n            }\n          }, {\n            id: "product-roadmap",\n            label: "Unlock Pro features",\n            props: {\n              icon: "PluginSmush",\n              variation: "smush"\n            }\n          }]\n        }}>\n                        <Button type="tertiary" icon="Bell" colorScheme="black" isResponsive={true}>\n                            Help\n                        </Button>\n                        <Button icon="Bell" type="tertiary" colorScheme="black" isResponsive={true}>\n                            Documentation\n                        </Button>\n                        <Button icon="PluginSmush" type="tertiary" colorScheme="black" isResponsive={true}>\n                            Support Smush\n                        </Button>\n                        <Dropdown buttonIcon="Bell" label="Connect features" placement="left" menu={[{\n            id: "group-1",\n            label: "Extra Optimization",\n            menus: [{\n              id: "menu-2",\n              label: "Uptime Monitoring",\n              props: {\n                icon: "CheckAlt"\n              }\n            }, {\n              id: "menu-2",\n              label: "Site management tools",\n              props: {}\n            }]\n          }, {\n            id: "group-2",\n            label: "Performance",\n            menus: [{\n              id: "menu-2",\n              label: "Uptime Monitoring",\n              props: {}\n            }, {\n              id: "menu-2",\n              label: "Site management tools",\n              props: {}\n            }]\n          }]}>\n                            <div style={{\n              display: "flex",\n              justifyContent: "center",\n              padding: "8px 24px"\n            }}>\n                                <Button type="primary" icon="Package" colorScheme="blue" isSmall={true} isFullWidth={true}>\n                                    Unlock bonus features\n                                </Button>\n                            </div>\n                        </Dropdown>\n                    </SuiNavigation>\n                </div>\n            </div>\n        </div>;\n}',...navigation_stories_Navigation.parameters?.docs?.source}}};const __namedExportsOrder=["Navigation"]},"./packages/ui/avatar/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>Avatar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=()=>(0,jsx_runtime.jsx)("span",{className:"sui-avatar__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.NI,{"data-testid":"avatar-icon"})}),Image=({source,text})=>{const hasSrc=!(0,src.b0)(source)&&!(0,src.Im)(source),hasAlt=!(0,src.b0)(text)&&!(0,src.Im)(text);if(!hasSrc)throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Avatar\n\nThe parameter "source" in the "Image" component is required.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-avatar__image",style:{backgroundImage:`url(${source})`},tabIndex:-1,"data-testid":"avatar-image"}),(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only","data-testid":"avatar-image-alt",children:hasAlt?text:"Logged in user avatar"})]})},Status=({status})=>{let IconName,classes="sui-avatar__status-icon";switch(status){case"confirmed":IconName=components.Wn,classes+=" sui-color-success--50";break;case"not-accepted":IconName=components.N5,classes+=" sui-color-warning--50";break;case"not-connected":IconName=components.N5,classes+=" sui-color-error--50";break;case"awaiting":IconName=components.zD,classes+=" sui-color-neutral--60"}return(0,jsx_runtime.jsx)("span",{className:"sui-avatar__status","data-testid":"avatar-status","aria-hidden":"true",children:IconName&&(0,jsx_runtime.jsx)(IconName,{className:classes,size:"sm"})})};var hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const Avatar=({image,status="none",isSmall=!1,className,_htmlProps={},_style={},onClick})=>{const imageObj=Object.assign({src:"",alt:""},image),{suiInlineClassname}=(0,hooks_src.IS)(_style,className),hasStatus=!(0,src.b0)(status)&&!(0,src.Im)(status),hasImage=!(0,src.b0)(image)&&!(0,src.Im)(imageObj.src),attributes={className:(0,src.n0)("sui-avatar",{sm:isSmall,clickable:!!onClick},suiInlineClassname),...(0,src.EX)(_htmlProps),"data-testid":"avatar",onClick};return(0,jsx_runtime.jsxs)("span",{...attributes,children:[hasImage&&(0,jsx_runtime.jsx)(Image,{source:imageObj.src,text:imageObj.alt}),!hasImage&&(0,jsx_runtime.jsx)(Icon,{}),hasStatus&&"none"!==status&&(0,jsx_runtime.jsx)(Status,{status})]})}},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.$l,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,_htmlProps={},_style,...restProps},ref)=>{children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=((0,utils_src.Im)(startIcon??""),!(0,utils_src.Im)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...(0,utils_src.EX)(_htmlProps),...interactionMethods??{},...(0,utils_src.EX)(restProps)};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/dropdown/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Dropdown});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const DropdownMenu=({className="",children,_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-dropdown__menu",{},suiInlineClassname);return(0,jsx_runtime.jsx)("ul",{className:classNames,children})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const DropdownMenuItem=({icon,href,className="",children,isDisabled,onClick,variation="",_style={},...props})=>{const[isHovered,isFocused,methods]=(0,hooks_src.Mj)({}),menuTitleId=`${`sui-dropdown-menu-item-${(0,react.useId)()}`}-title`;let TagName="li";href&&(TagName="a");const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-dropdown__menu-item",{hover:isHovered,focus:isFocused,disabled:isDisabled,[variation]:!(0,src.Im)(variation)},suiInlineClassname);let IconTag=null;icon&&(IconTag=components.Ay[icon]);const attrs={className:classNames,href:href||void 0,tabIndex:isDisabled?-1:0,children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!!IconTag&&(0,jsx_runtime.jsx)(IconTag,{size:"sm",className:"sui-dropdown__menu-item-icon"}),(0,jsx_runtime.jsx)("span",{id:menuTitleId,children})]}),...props},btnAttr={};return onClick&&(btnAttr.onClick=onClick,btnAttr.onKeyDown=e=>(0,src.f$)(e,onClick)),(0,jsx_runtime.jsx)(TagName,{...attrs,...methods,"aria-labelledby":menuTitleId,...btnAttr})},DropdownMenuGroup=({title="",className="",children,_htmlProps={},_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),attrs={className:(0,src.n0)("sui-dropdown__menu-group",{},suiInlineClassname),...(0,src.EX)(_htmlProps)};return(0,jsx_runtime.jsxs)("li",{...attrs,children:[(0,jsx_runtime.jsx)("span",{className:"sui-dropdown__menu-group-title",children:title}),(0,jsx_runtime.jsx)("ul",{className:"sui-dropdown__menu-group-items",children})]})},Dropdown=(0,react.forwardRef)((({label,className,isSmall=!1,iconOnly,isFixedHeight=!0,children,menu,placement="right",buttonIcon,onMenuClick,trigger,renderContentOnTop=!1,isResponsive=!1,colorScheme="black",_htmlProps={},_style={},...props},ref)=>{const dropdownRef=(0,react.useRef)(null),id=`sui-dropdown-${(0,react.useId)()}`,[isOpen,setIsOpen]=(0,react.useState)(!1);(0,hooks_src.xk)(dropdownRef,(()=>{setIsOpen(!1)})),(0,react.useImperativeHandle)(ref,(()=>({open:()=>setIsOpen(!0),close:()=>setIsOpen(!1),toggle:()=>setIsOpen(!isOpen)})));const{suiInlineClassname}=(0,hooks_src.IS)(_style,className),wrapperClasses=(0,src.n0)("sui-dropdown",{sm:isSmall,open:isOpen},suiInlineClassname),renderMenus=menus=>(menus||[])?.map(((menuItem,index)=>menuItem.menus?(0,jsx_runtime.jsx)(DropdownMenuGroup,{title:menuItem.label,children:renderMenus(menuItem.menus)},index):(onMenuClick&&(menuItem.props.onClick=e=>onMenuClick(menuItem.id,e)),(0,jsx_runtime.jsx)(DropdownMenuItem,{...menuItem.props,children:menuItem.label},index))));return(0,jsx_runtime.jsxs)("div",{ref:dropdownRef,className:wrapperClasses,"data-testid":"dropdown",...(0,src.EX)(_htmlProps),children:[trigger||(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(button_src.$,{startIcon:buttonIcon??"Menu",iconOnly:iconOnly??!1,type:"secondary",isSmall:isSmall??!1,onClick:()=>setIsOpen(!isOpen),isResponsive,...!iconOnly&&{endIcon:"ChevronDown"},...props,colorScheme,children:label})}),(0,jsx_runtime.jsxs)("div",{id,tabIndex:-1,className:(0,src.n0)("sui-dropdown__popover",{[`placement-${placement}`]:!(0,src.Im)(placement??""),"fixed-height":isFixedHeight}),...label&&{"aria-labelledby":`${id}__label`,"aria-label":`${id}__label`},children:[renderContentOnTop&&!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children}),!!menu&&(0,jsx_runtime.jsx)(DropdownMenu,{className:"sui-dropdown__menu-nav",children:renderMenus(menu)}),!!children&&!renderContentOnTop&&(0,jsx_runtime.jsx)("div",{className:"sui-dropdown__menu-content",children})]})]})}));Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"Dropdown Component - A reusable dropdown UI component.\n\n@param {DropdownProps} props - The properties and event handlers for the Dropdown component.\n@return {JSX.Element} JSX Element representing the Dropdown component.",methods:[],displayName:"Dropdown",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFixedHeight:{defaultValue:{value:"true",computed:!1},required:!1},placement:{defaultValue:{value:'"right"',computed:!1},required:!1},renderContentOnTop:{defaultValue:{value:"false",computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},colorScheme:{defaultValue:{value:'"black"',computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1},_style:{defaultValue:{value:"{}",computed:!1},required:!1}}}}}]);
//# sourceMappingURL=ui-navigation-stories-navigation-stories.9e8618dd.iframe.bundle.js.map