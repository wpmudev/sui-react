"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[4881],{"./packages/ui/footer/stories/footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:()=>footer_stories_Footer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>footer_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),src=__webpack_require__("./packages/utils/src/index.ts");const logo_namespaceObject=__webpack_require__.p+"static/media/logo.499802c8.svg",socialIcons={facebook:components.s1,instagram:components.mr,twitter:components.tL},Footer=({links,socialLinks,renderBlocks,removeBGColor,className})=>{let blocks=[];if(renderBlocks){blocks=renderBlocks((0,jsx_runtime.jsx)("span",{children:"Made with ♡ by WPMU DEV"}))}const footerCN=(0,src.uY)("sui-footer",{transparent:removeBGColor},className);return(0,jsx_runtime.jsxs)("div",{className:footerCN,"data-testid":"footer",children:[blocks.length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-footer__group sui-footer__group--credits"+(1===blocks.length?" sui-footer__group--center":""),children:(blocks||[])?.map(((block,index)=>(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:block},index)))}),(0,jsx_runtime.jsxs)("div",{className:"sui-footer__group sui-footer__group--links",children:[(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:(0,jsx_runtime.jsx)("a",{href:"https://wpmudev.com",target:"_blank",rel:"noreferrer nofollow",children:(0,jsx_runtime.jsx)("img",{src:logo_namespaceObject,className:"sui-footer__block--logo",alt:"WPMU DEV"})})}),(links??[]).length>0&&(0,jsx_runtime.jsx)("div",{className:"sui-footer__block sui-footer__block--pages","data-testid":"footer-links",children:(0,jsx_runtime.jsx)("ul",{className:"sui-footer__links",children:(links??[])?.map(((list,index)=>(0,jsx_runtime.jsx)("li",{className:"sui-footer__links--item",children:(0,jsx_runtime.jsx)("a",{href:list.url,children:list.title})},index)))})}),(0,jsx_runtime.jsx)("div",{className:"sui-footer__block",children:(socialLinks??[])?.length>0&&(0,jsx_runtime.jsx)("ul",{className:"sui-footer__links sui-footer__links--social","data-testid":"footer-social-links",children:(socialLinks??[])?.map(((socialLink,index)=>{const SocialIcon=socialIcons[socialLink?.type];return(0,jsx_runtime.jsx)("li",{className:"sui-footer__links--item",children:(0,jsx_runtime.jsxs)("a",{href:socialLink.url,target:"_blank",rel:"noopener noreferrer",children:[(0,jsx_runtime.jsx)(SocialIcon,{size:"sm"}),socialLink?.type&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",children:socialLink?.type})]})},index)}))})})]})]})};var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");__webpack_require__.p,__webpack_require__.p;const anatomy_free_namespaceObject=__webpack_require__.p+"static/media/anatomy-free.ac2a67a0.svg",anatomy_pro_namespaceObject=__webpack_require__.p+"static/media/anatomy-pro.1b1f0f8d.svg",free_desktop_spacing_namespaceObject=__webpack_require__.p+"static/media/free-desktop-spacing.fd40d38f.svg",free_tablet_spacing_namespaceObject=__webpack_require__.p+"static/media/free-tablet-spacing.4e091aaa.svg",pro_mobile_spacing_namespaceObject=__webpack_require__.p+"static/media/pro-mobile-spacing.bb085fe4.svg",free_mobile_spacing_namespaceObject=__webpack_require__.p+"static/media/free-mobile-spacing.5960689e.svg",hover_state_namespaceObject=__webpack_require__.p+"static/media/hover-state.562008bf.svg",focus_state_namespaceObject=__webpack_require__.p+"static/media/focus-state.aa068213.svg";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy - Free",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_free_namespaceObject,alt:"Footer - Anatomy Free"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Feature One"}),(0,jsx_runtime.jsx)("p",{children:"This section is used to highlight/make the user aware of the Pro feature/section but not in an upselling manner."}),(0,jsx_runtime.jsx)("h3",{children:"3. Brand Logo (WPMU Dev)"}),(0,jsx_runtime.jsx)("p",{children:"Updated logo of WPMU Dev (Black version)"}),(0,jsx_runtime.jsx)("h3",{children:"5. Social Links"}),(0,jsx_runtime.jsx)("p",{children:"Depending upon the use case, icons can be different. For example, they can replace the icon if the company isn't on some media platform. However, the design will be similar across all the plugins, and those icons will have hyperlinks to the social media account."})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h2",{children:"2. Feature second"}),(0,jsx_runtime.jsx)("p",{children:"This section is used to highlight the pro/free feature, which should be necessary for the user (Like a tutorial in this case)"}),(0,jsx_runtime.jsx)("h2",{children:"4. links"}),(0,jsx_runtime.jsx)("p",{children:"We will put Text as links connected with the brand."})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Anatomy - Pro",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_pro_namespaceObject,alt:"Footer Anatomy Pro"}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Simple Tagline"}),(0,jsx_runtime.jsx)("p",{children:"Made with WP tag."}),(0,jsx_runtime.jsx)("h3",{children:"3. Other links"}),(0,jsx_runtime.jsx)("p",{children:"We will put Text as links connected with the brand."})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h2",{children:"2. Brand Logo (WPMU Dev)"}),(0,jsx_runtime.jsx)("p",{children:"Child group is nested under parent group, it can have sub children items."}),(0,jsx_runtime.jsx)("h2",{children:"4. Social Links"}),(0,jsx_runtime.jsx)("p",{children:"Depending upon the use case, icons can be different. For example, they can replace the icon if the company isn't on some media platform. However, the design will be similar across all the plugins, and those icons will have hyperlinks to the social media account."})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Spacing Guides",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Footer Free - Desktop"}),(0,jsx_runtime.jsx)("img",{src:free_desktop_spacing_namespaceObject,alt:"Footer Free Desktop Spacing"}),(0,jsx_runtime.jsx)("h3",{style:{paddingTop:20},children:"Footer Free - Tablet"}),(0,jsx_runtime.jsx)("img",{src:free_tablet_spacing_namespaceObject,alt:"Footer Free Tablet Spacing",style:{paddingTop:20}}),(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Footer Pro - Mobile"}),(0,jsx_runtime.jsx)("img",{src:pro_mobile_spacing_namespaceObject,alt:"Footer Pro Mobile Spacing"})]}),(0,jsx_runtime.jsxs)(docs_src.JX,{style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Footer Free - Mobile"}),(0,jsx_runtime.jsx)("img",{src:free_mobile_spacing_namespaceObject,alt:"Footer Free Mobile Spacing"})]})]})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Behaviour",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("h3",{children:"Hover State"}),(0,jsx_runtime.jsx)("img",{src:hover_state_namespaceObject,alt:"Footer Hover State"}),(0,jsx_runtime.jsx)("h3",{children:"Focus State"}),(0,jsx_runtime.jsx)("img",{src:focus_state_namespaceObject,alt:"Footer Focus State"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Hl,{packageName:"@wpmudev/sui-footer"}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"links",tag:"array",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Links to be displayed in the footer, each item in the array is an object with the following keys"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"url"})," The url of of the link"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"title"})," The link text"]})})]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"socialLinks",tag:"array",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"The social links to be displayed in the footer, each item in the array is an object with the following keys:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"url"})," The url to the social account or page"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"type"})," could be one of three values: facebook, twitter, instagram"]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"renderBlocks",tag:"function",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"A function to render additional content for the footer"})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const freeVariationCode=dedent_default()`
    <Footer
      renderBlocks={() => [
       <Fragment key={0}>
          Check our{" "}
          <a href="#" target="_blank" rel="nofollow">
            All in One WordPress Toolkit
          </a>
        </Fragment>,
        <Fragment key={2}>
          To get the most out of the plugin,{" "}
          <a href="#" target="_blank" rel="nofollow">
            see the Help section
          </a>
        </Fragment>,
      ]}
      socialLinks={[
        {
          url: "#",
          type: "facebook",
        },
        {
          url: "#",
          type: "instagram",
        },
        {
          url: "#",
          type: "twitter",
        },
      ]}
      links={[
        {
          url: "#",
          title: "Free Plugins",
        },
        {
          url: "#",
          title: "Membership",
        },
        {
          url: "#",
          title: "Roadmap",
        },
        {
          url: "#",
          title: "Support",
        },
        {
          url: "#",
          title: "Community",
        },
        {
          url: "#",
          title: "The Hub",
        },
        {
          url: "#",
          title: "Terms of Service",
        },
        {
          url: "#",
          title: "Privacy Policy",
        },
      ]}
    />
`,proVariationCode=dedent_default()`
    <Footer
      renderBlocks={() => [
       <Fragment key={0}>
          Check our{" "}
          <a href="#" target="_blank" rel="nofollow">
            All in One WordPress Toolkit
          </a>
        </Fragment>,
        <Fragment key={2}>
          To get the most out of the plugin,{" "}
          <a href="#" target="_blank" rel="nofollow">
            see the Help section
          </a>
        </Fragment>,
      ]}
      socialLinks={[
        {
          url: "#",
          type: "facebook",
        },
        {
          url: "#",
          type: "instagram",
        },
        {
          url: "#",
          type: "twitter",
        },
      ]}
      links={[
        {
          url: "#",
          title: "Free Plugins",
        },
        {
          url: "#",
          title: "Membership",
        },
        {
          url: "#",
          title: "Roadmap",
        },
        {
          url: "#",
          title: "Support",
        },
        {
          url: "#",
          title: "Community",
        },
        {
          url: "#",
          title: "The Hub",
        },
        {
          url: "#",
          title: "Terms of Service",
        },
        {
          url: "#",
          title: "Privacy Policy",
        },
      ]}
    />
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the free variation of the footer component"}),(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Footer,{renderBlocks:content=>[content],socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:freeVariationCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"The Pro Variation",style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(Footer,{renderBlocks:content=>[content],socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:proVariationCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function Footer_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Footer",subtitle:"The Footer component serves as the bottom section of a web page, it contains information like copyright notices, contact details, and links to important resources.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const footer_stories={title:"SUI/Components/Collections/Footer",component:Footer,parameters:{layout:"fullscreen",docs:{page:function Footer_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Footer_createMdxContent,props)})):Footer_createMdxContent()}}}},footer_stories_Footer=({example,removeBGColor})=>(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(Footer,{removeBGColor,renderBlocks:"free"===example?()=>[(0,jsx_runtime.jsxs)(react.Fragment,{children:["Check our"," ",(0,jsx_runtime.jsx)("a",{href:"https://wpmudev.com",target:"_blank",rel:"noreferrer nofollow",children:"All in One WordPress Toolkit"})]},0),(0,jsx_runtime.jsxs)(react.Fragment,{children:["To get the most out of the plugin,"," ",(0,jsx_runtime.jsx)("a",{href:"https://wpmudev.com",target:"_blank",rel:"noreferrer nofollow",children:"see the Help section"})]},2)]:content=>[content],socialLinks:[{url:"#",type:"facebook"},{url:"#",type:"instagram"},{url:"#",type:"twitter"}],links:[{url:"#",title:"Free Plugins"},{url:"#",title:"Membership"},{url:"#",title:"Roadmap"},{url:"#",title:"Support"},{url:"#",title:"Community"},{url:"#",title:"The Hub"},{url:"#",title:"Terms of Service"},{url:"#",title:"Privacy Policy"}]})})});footer_stories_Footer.args={example:"free",removeBGColor:!1},footer_stories_Footer.argTypes={example:{name:"Example",options:["free","pro"],control:{type:"select",labels:{free:"Free",pro:"Pro"}}},removeBGColor:{name:"removeBGColor",type:"boolean"}};const __namedExportsOrder=["Footer"]}}]);
//# sourceMappingURL=ui-footer-stories-footer-stories.22723a36.iframe.bundle.js.map