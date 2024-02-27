"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[4933],{"./packages/ui/upsell-notice/stories/upsell-notice.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UpsellNotice:()=>upsell_notice_stories_UpsellNotice,__namedExportsOrder:()=>__namedExportsOrder,default:()=>upsell_notice_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),tag_src=__webpack_require__("./packages/ui/tag/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const UpsellNotice=({title="Title of Upsell",tagTitle="",description="",variation="hummingbird",features=[],actions=null,_style={}})=>{const{suiInlineClassname}=(0,hooks_src.IS)(_style),classNames=(0,src.n0)("sui-upsell-notice",{[variation]:!(0,src.Im)(variation??"")},suiInlineClassname);return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"upsell-notice",children:[(0,jsx_runtime.jsx)("div",{className:"sui-upsell-notice__header",children:(0,jsx_runtime.jsxs)("h3",{className:"sui-upsell-notice__header-title sui-heading--h5",children:[title,!(0,src.Im)(tagTitle??"")&&(0,jsx_runtime.jsx)(tag_src.v,{design:"outlined",isSmall:!0,colorScheme:"black",children:tagTitle})]})}),(0,jsx_runtime.jsxs)("div",{className:"sui-upsell-notice__body",children:[(0,jsx_runtime.jsx)("p",{children:description}),features?.length>0&&(0,jsx_runtime.jsx)("ul",{className:"sui-upsell-notice__features","data-testid":"features",children:features?.map(((feature,index)=>(0,jsx_runtime.jsxs)("li",{className:"sui-upsell-notice__features-item",children:[(0,jsx_runtime.jsx)(components.Jl,{size:"sm",className:"sui-upsell-notice__features-item-icon"}),(0,jsx_runtime.jsx)("span",{children:feature})]},index)))})]}),actions&&(0,jsx_runtime.jsx)("div",{className:"sui-upsell-notice__footer","data-testid":"upsell-notice-actions",children:actions})]})};UpsellNotice.displayName="UpsellNoticeProps";var button_src=__webpack_require__("./packages/ui/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.ed18c56c.svg",spacings_namespaceObject=__webpack_require__.p+"static/media/spacings.f79e1a50.svg",high_contrast_mode_namespaceObject=__webpack_require__.p+"static/media/high-contrast-mode.e560f438.svg",location_namespaceObject=__webpack_require__.p+"static/media/location.fa2e47f2.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.wn,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.fI,{children:[(0,jsx_runtime.jsxs)(docs_src.fv,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Title"}),(0,jsx_runtime.jsx)("p",{children:"The title should be prominent and easily readable. It may come with the tag to enhance the visual communication of the upsell."}),(0,jsx_runtime.jsx)("h3",{children:"2. Description"}),(0,jsx_runtime.jsx)("p",{children:"Provide a brief description or additional details about the upsell offer."}),(0,jsx_runtime.jsx)("h3",{children:"3. Feature list"}),(0,jsx_runtime.jsx)("p",{children:"Highlight the benefits of accepting the offer. "}),(0,jsx_runtime.jsx)("h3",{children:"4. Call to actions"}),(0,jsx_runtime.jsx)("p",{children:"Include a prominent call-to-action button that encourages users to take the desired action, such as upgrading, purchasing, or learning more. "})]}),(0,jsx_runtime.jsx)(docs_src.fv,{size:"3",children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Upsell Notice Anatomy"})})]})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Spacings",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Upsell notice has 16px spacing around the main wrapper by default, however\nit can be modified if necessary."})}),(0,jsx_runtime.jsx)("img",{src:spacings_namespaceObject,alt:"Upsell Notice Spacings"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"High Contrast Mode",children:(0,jsx_runtime.jsx)("img",{src:high_contrast_mode_namespaceObject,alt:"Upsell Notice High Contrast Mode"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Where and how to display?",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Upsell notice generally appear on the settings or features that is available\nfor premium memberships."})}),(0,jsx_runtime.jsx)("img",{src:location_namespaceObject,alt:"Upsell Notice Position"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-upsell-notice"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"title",type:"string",defaultValue:"Title of Upsell",children:(0,jsx_runtime.jsx)("p",{children:"The main heading text for the Notice"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"tagTitle",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"The tag text"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"description",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Descriptive text that accompagnes the title"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"actions",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"Optional actions button to be displayed at the bottom"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"features",type:"Array",children:(0,jsx_runtime.jsx)("p",{children:"A list of features to be displayed, the array of items could be strings or React Nodes"})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"variation",type:"string",defaultValue:"hummingbird",children:[(0,jsx_runtime.jsx)("p",{children:" The Upsell variation, which include our list of plugins:"}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"hummingbird"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"smush"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"snapshot"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"smartcrawl"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"ivt"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"hustle"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"forminator"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"defender"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"branda"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"beehive"})})]})]})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent()};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const Code=dedent_default()`
    <UpsellNotice
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
`;function Hummingbird_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"hummingbird",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Code})]})}const Hummingbird=function Hummingbird_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Hummingbird_createMdxContent,props)})):Hummingbird_createMdxContent(props)},Smush_Code=dedent_default()`
    <UpsellNotice
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
`;function Smush_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"smush",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Smush_Code})]})}const Smush=function Smush_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Smush_createMdxContent,props)})):Smush_createMdxContent(props)},Snapshot_Code=dedent_default()`
    <UpsellNotice
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
`;function Snapshot_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"snapshot",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Snapshot_Code})]})}const Snapshot=function Snapshot_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Snapshot_createMdxContent,props)})):Snapshot_createMdxContent(props)},Smartcrawl_Code=dedent_default()`
    <UpsellNotice
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
`;function Smartcrawl_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"smartcrawl",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Smartcrawl_Code})]})}const Smartcrawl=function Smartcrawl_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Smartcrawl_createMdxContent,props)})):Smartcrawl_createMdxContent(props)},Shipper_Code=dedent_default()`
    <UpsellNotice
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
`;function Shipper_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"shipper",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Shipper_Code})]})}const Shipper=function Shipper_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Shipper_createMdxContent,props)})):Shipper_createMdxContent(props)},Ivt_Code=dedent_default()`
    <UpsellNotice
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
`;function Ivt_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"ivt",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Ivt_Code})]})}const Ivt=function Ivt_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Ivt_createMdxContent,props)})):Ivt_createMdxContent(props)},Hustle_Code=dedent_default()`
    <UpsellNotice
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
`;function Hustle_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"hustle",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Hustle_Code})]})}const Hustle=function Hustle_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Hustle_createMdxContent,props)})):Hustle_createMdxContent(props)},Forminator_Code=dedent_default()`
    <UpsellNotice
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
`;function Forminator_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"forminator",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Forminator_Code})]})}const Forminator=function Forminator_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Forminator_createMdxContent,props)})):Forminator_createMdxContent(props)},Defender_Code=dedent_default()`
    <UpsellNotice
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
`;function Defender_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"defender",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Defender_Code})]})}const Defender=function Defender_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Defender_createMdxContent,props)})):Defender_createMdxContent(props)},Branda_Code=dedent_default()`
    <UpsellNotice
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
`;function Branda_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"branda",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Branda_Code})]})}const Branda=function Branda_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Branda_createMdxContent,props)})):Branda_createMdxContent(props)},Beehive_Code=dedent_default()`
    <UpsellNotice
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
`;function Beehive_createMdxContent(props){const _components=Object.assign({div:"div"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{variation:"beehive",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:Beehive_Code})]})}const Beehive=function Beehive_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Beehive_createMdxContent,props)})):Beehive_createMdxContent(props)},generalCode=dedent_default()`
    <UpsellNotice
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
`,tagCode=dedent_default()`
    <UpsellNotice
      tagTitle="Pro"
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
`;function TabExamples_createMdxContent(props){const _components=Object.assign({div:"div",p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.wn,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Below is the general form of the Upsell Notice component"}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{title:"Upgrade to Smush pro",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"With a Tag",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Use the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"tagTitle"})," to display a tag beside the\ntitle"]})}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(UpsellNotice,{tagTitle:"Pro",features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"],actions:[(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"black",isSmall:!0,children:"Upgrade now"})},0),(0,jsx_runtime.jsx)(_components.div,{children:(0,jsx_runtime.jsx)(button_src.$,{href:"#",target:"_blank",type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"})},1)]})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:tagCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Variations",style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"variation"})," prop to change the Upsell Notice\nplugin variation."]}),(0,jsx_runtime.jsxs)(docs_src.ij,{children:[(0,jsx_runtime.jsx)("div",{label:"hummingbird",value:"hummingbird",children:(0,jsx_runtime.jsx)(Hummingbird,{})}),(0,jsx_runtime.jsx)("div",{label:"smush",value:"smush",children:(0,jsx_runtime.jsx)(Smush,{})}),(0,jsx_runtime.jsx)("div",{label:"snapshot",value:"snapshot",children:(0,jsx_runtime.jsx)(Snapshot,{})}),(0,jsx_runtime.jsx)("div",{label:"smartcrawl",value:"smartcrawl",children:(0,jsx_runtime.jsx)(Smartcrawl,{})}),(0,jsx_runtime.jsx)("div",{label:"shipper",value:"shipper",children:(0,jsx_runtime.jsx)(Shipper,{})}),(0,jsx_runtime.jsx)("div",{label:"shipper",value:"shipper",children:(0,jsx_runtime.jsx)(Shipper,{})}),(0,jsx_runtime.jsx)("div",{label:"ivt",value:"ivt",children:(0,jsx_runtime.jsx)(Ivt,{})}),(0,jsx_runtime.jsx)("div",{label:"hustle",value:"hustle",children:(0,jsx_runtime.jsx)(Hustle,{})}),(0,jsx_runtime.jsx)("div",{label:"forminator",value:"forminator",children:(0,jsx_runtime.jsx)(Forminator,{})}),(0,jsx_runtime.jsx)("div",{label:"defender",value:"defender",children:(0,jsx_runtime.jsx)(Defender,{})}),(0,jsx_runtime.jsx)("div",{label:"branda",value:"branda",children:(0,jsx_runtime.jsx)(Branda,{})}),(0,jsx_runtime.jsx)("div",{label:"beehive",value:"beehive",children:(0,jsx_runtime.jsx)(Beehive,{})})]})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)};function upsell_notice_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Upsell Notice",subtitle:"The upsell notice is used to upsell any features in the plugins.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const upsell_notice_stories={title:"SUI/Components/Collections/Upsell Notice",component:UpsellNotice,parameters:{layout:"fullscreen",docs:{page:function upsell_notice_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(upsell_notice_createMdxContent,props)})):upsell_notice_createMdxContent()}}}},upsell_notice_stories_UpsellNotice=props=>{const actions=[(0,jsx_runtime.jsx)(button_src.$,{type:"primary",colorScheme:"hub"===props?.variation?"blue":"black",isSmall:!0,children:"Primary"},0),(0,jsx_runtime.jsx)(button_src.$,{type:"tertiary",colorScheme:"black",isSmall:!0,children:"Learn more"},1)];return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(UpsellNotice,{...props,actions,features:["Performance Test Reporting","Uptime monitoring","Enhanced file minification with CDN","Database Cleanup notifications"]})})})})};upsell_notice_stories_UpsellNotice.args={title:"Upsell notice",tagTitle:"PRO",variation:"hummingbird",description:"Get our full WordPress performance optimization suite with Hummingbird Pro and the additional benefits of WPMU DEV membership. Get yours today now Lorem ipsum Lorem Ipsum."},upsell_notice_stories_UpsellNotice.argTypes={title:{name:"Title",control:{type:"text"}},tagTitle:{name:"Tag Title",control:{type:"text"}},description:{name:"Description",control:{type:"text"}},variation:{name:"Variation",options:["hummingbird","smush","snapshot","smartcrawl","shipper","ivt","hustle","forminator","defender","branda","beehive","hub"],control:{type:"select",labels:{hummingbird:"Hummingbird",smush:"Smush",snapshot:"Snapshot",smartcrawl:"Smartcrawl",shipper:"Shipper",ivt:"Ivt",hustle:"Hustle",forminator:"Forminator",defender:"Defender",branda:"Branda",beehive:"Beehive",hub:"Hub"}}}},upsell_notice_stories_UpsellNotice.parameters={...upsell_notice_stories_UpsellNotice.parameters,docs:{...upsell_notice_stories_UpsellNotice.parameters?.docs,source:{originalSource:'(props: UpsellNoticeProps) => {\n  const actions = [<Button key={0} type="primary" colorScheme={"hub" === props?.variation ? "blue" : "black"} isSmall={true}>\n            Primary\n        </Button>, <Button key={1} type="tertiary" colorScheme="black" isSmall={true}>\n            Learn more\n        </Button>];\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <div>\n                    <SuiUpsellNotice {...props} actions={actions} features={["Performance Test Reporting", "Uptime monitoring", "Enhanced file minification with CDN", "Database Cleanup notifications"]} />\n                </div>\n            </div>\n        </div>;\n}',...upsell_notice_stories_UpsellNotice.parameters?.docs?.source}}};const __namedExportsOrder=["UpsellNotice"]},"./packages/ui/button/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/hooks/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts");const Label=({hidden=!1,children})=>{if((0,utils_src.b0)(hidden)&&!(0,utils_src.Lm)(hidden))throw new Error('Incorrect parameter type. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe parameter "hidden" used in the label element is not a boolean type.\n\n');return(0,jsx_runtime.jsxs)(react.Fragment,{children:[hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children}),!hidden&&(0,jsx_runtime.jsx)("span",{className:"sui-button__label","data-testid":"button-label",children})]})};var components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Icon=({name,size="sm"})=>{if(!(!(0,utils_src.b0)(name)&&!(0,utils_src.Im)(name??"")))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Button\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const IconName=name,IconTag=components.Ay[IconName];return(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true","data-testid":"button-icon",children:(0,jsx_runtime.jsx)(IconTag,{size})})},Loader=({children})=>(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"sui-button__icon","aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.$l,{className:"suicons--spin",size:"sm"})}),children?(0,jsx_runtime.jsx)("span",{className:"sui-button__label sui-hidden",tabIndex:-1,children}):(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Loading"})]}),Button=(0,react.forwardRef)((({href,target,htmlFor,type,colorScheme,isSmall=!1,isFullWidth=!1,isDisabled=!1,isUnwrapped=!1,className,children,icon,startIcon=icon,endIcon,iconOnly,iconSize="sm",isResponsive=!1,isLoading=!1,_htmlProps={},_style,...restProps},ref)=>{children=(0,src.Q8)(children,"button label");const{suiInlineClassname}=(0,src.IS)(_style,className??"");isLoading&&(isUnwrapped=!0,children=(0,jsx_runtime.jsx)(Loader,{children}));const[isHovered,isFocused,interactionMethods]=(0,src.Mj)({onMouseEnter:restProps?.onMouseEnter,onMouseLeave:restProps?.onMouseLeave,onFocus:restProps?.onFocus,onBlur:restProps?.onBlur}),isLink=!(0,utils_src.b0)(href),label=!(0,utils_src.b0)(htmlFor),isEndIcon=((0,utils_src.Im)(startIcon??""),!(0,utils_src.Im)(endIcon??"")),attrClasses={sm:isSmall,hover:isHovered&&!isDisabled,focus:isFocused&&!isDisabled,disabled:isDisabled,"full-width":isFullWidth,"is-icon":(startIcon||endIcon)&&iconOnly,[`${type}-${colorScheme}`]:!!type&&!!colorScheme,inline:iconOnly&&!type,responsive:isResponsive,loading:isLoading},attrs={ref,href:isLink&&href?href:void 0,target:target||"_blank",htmlFor:(0,utils_src.Me)(label),className:(0,utils_src.n0)("sui-button",attrClasses,suiInlineClassname),disabled:isDisabled,"aria-busy":isLoading,...isLoading&&{"aria-live":"polite"},"data-testid":"button",...(0,utils_src.EX)(_htmlProps),...interactionMethods??{},...(0,utils_src.EX)(restProps)};let TagName=isLink?"a":"button";return htmlFor&&(TagName="label"),(0,jsx_runtime.jsxs)(TagName,{...attrs,children:[(startIcon||icon)&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:startIcon??"",size:iconSize}),isUnwrapped&&children,!isUnwrapped&&(0,jsx_runtime.jsx)(Label,{...iconOnly&&{hidden:!0},children}),isEndIcon&&!isLoading&&(0,jsx_runtime.jsx)(Icon,{name:endIcon??"",size:iconSize})]})}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{isSmall:{defaultValue:{value:"false",computed:!1},required:!1},isFullWidth:{defaultValue:{value:"false",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1},isUnwrapped:{defaultValue:{value:"false",computed:!1},required:!1},startIcon:{defaultValue:{value:"icon",computed:!1},required:!1},iconSize:{defaultValue:{value:'"sm"',computed:!1},required:!1},isResponsive:{defaultValue:{value:"false",computed:!1},required:!1},isLoading:{defaultValue:{value:"false",computed:!1},required:!1},_htmlProps:{defaultValue:{value:"{}",computed:!1},required:!1}}}},"./packages/ui/tag/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Tag});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts")),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),components=__webpack_require__("./packages/assets/icons/src/components/index.ts");const Tag=({design,colorScheme,contentWrap="default",className,isSmall=!1,isUppercase=!1,isDisabled=!1,isDismissable=!1,children,onDismiss=()=>{},_htmlProps={},_style={}})=>{const hasDesign="outlined"===design,hasColor=!(0,src.b0)(colorScheme)&&!(0,src.Im)(colorScheme),hasStyle=["multiline","truncated"].includes(contentWrap),{suiInlineClassname}=(0,hooks_src.IS)(_style,className),classNames=(0,src.n0)("sui-tag",{[`${design}-${colorScheme}`]:hasDesign&&hasColor,[design]:hasDesign&&!hasColor,[colorScheme]:!hasDesign&&hasColor,[contentWrap]:hasStyle,sm:isSmall,uppercase:isUppercase,disabled:isDisabled},suiInlineClassname);return children=(0,hooks_src.Q8)(children,"{tag content}"),(0,jsx_runtime.jsx)("span",{className:classNames,...(0,src.EX)(_htmlProps),"data-testid":"tag",children:(0,jsx_runtime.jsxs)("div",{className:"sui-tag__wrapper",children:[(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children}),isDismissable&&(0,jsx_runtime.jsxs)("button",{className:"sui-tag__cta",onClick:onDismiss,children:[(0,jsx_runtime.jsx)("span",{"aria-hidden":"true",children:(0,jsx_runtime.jsx)(components.bm,{size:"xs"})}),(0,jsx_runtime.jsx)("span",{className:"sui-screen-reader-only",tabIndex:-1,children:"Dismiss"})]})]})})}}}]);
//# sourceMappingURL=ui-upsell-notice-stories-upsell-notice-stories.32cbcc0d.iframe.bundle.js.map