"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[1380],{"./packages/ui/accordion/stories/Accordion.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accordion:()=>Accordion_stories_Accordion,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/button/src/index.ts")),components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),accordion_src=__webpack_require__("./packages/ui/accordion/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.Qr,{packageName:"@wpmudev/sui-accordion"}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Props",border:!0,children:[(0,jsx_runtime.jsxs)(docs_src._6,{title:"state",type:"string",defaultValue:"default",children:[(0,jsx_runtime.jsx)("p",{children:"Sets the semantic type for the accordion"}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src._u,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"default"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"neutral"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"informative"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"success"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"warning"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"critical"})})]})]})]}),(0,jsx_runtime.jsx)(docs_src._6,{title:"allowMultipleExpand",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)(_components.p,{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{size:"small",children:"true"}),", multiple accordions can be expanded at the same time"]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"noBorderRadius",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)(_components.p,{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{size:"small",children:"true"}),", the accordion won't have border radius"]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"noSideBorders",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)(_components.p,{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{size:"small",children:"true"}),", the accordion won't have side borders"]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)(_components.p,{children:"The nested content inside the accordion"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"className",type:"string",children:(0,jsx_runtime.jsx)(_components.p,{children:"Additional className(s) for further styling"})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Sub Components",contained:!0,style:{paddingTop:30,paddingBottom:0},children:[(0,jsx_runtime.jsx)("p",{children:"The Accordion component offers a collection of nested subcomponents to be utilized within it. These subcomponents include:"}),(0,jsx_runtime.jsxs)(docs_src.iG,{title:"AccordionItem",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component represents an individual item or section of the accordion and comes with its\nown set of props."})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"title",type:"string",defaultValue:"{title}",children:(0,jsx_runtime.jsx)(_components.p,{children:"Title of the accordion item"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"description",type:"string",children:(0,jsx_runtime.jsx)(_components.p,{children:"Description of the accordion item"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"isDisabled",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)(_components.p,{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Md,{isSmall:!0,children:"true"}),", the accordion item will be disabled"]})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"icon",type:"string",children:(0,jsx_runtime.jsx)(_components.p,{children:"Adds an Icon to the accordion item"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"hasCheckbox",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)(_components.p,{children:"Whether to display the Checkbox or not"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"onCheck",type:"function",children:(0,jsx_runtime.jsx)(_components.p,{children:"A callback function to be invoked when the the checkbox state changes"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)(_components.p,{children:"The nested content inside the accordion item"})})]}),(0,jsx_runtime.jsxs)(docs_src.iG,{title:"AccordionItemBody",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component serves as the body content\nfor each item and also accepts specific props to customize its behavior, it has the following props:"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)(_components.p,{children:"The nested content inside the accordion item body"})})]}),(0,jsx_runtime.jsxs)(docs_src.iG,{title:"AccordionItemFooter",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component serves as the body content for each item and also accepts specific props to customize its behavior, it has the following props:"})}),(0,jsx_runtime.jsx)(docs_src._6,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)(_components.p,{children:"The nested content inside the accordion item footer"})})]})]})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const NeutralCode=dedent_default()`
<Accordion state="neutral">
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
       <p>
        Hi, I am accordion content body. you can swap me with your local
        component.
       </p>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
      <p>
      Hi, I am accordion content body. you can swap me with your local
      component.
      </p>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
`;function Neutral_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{state:"neutral",children:[(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:NeutralCode})]})}const Neutral=function Neutral_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Neutral_createMdxContent,props)})):Neutral_createMdxContent(props)},InformativeCode=dedent_default()`
<Accordion state="informative">
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
       <p>
        Hi, I am accordion content body. you can swap me with your local
        component.
       </p>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
      <p>
      Hi, I am accordion content body. you can swap me with your local
      component.
      </p>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
`;function Informative_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{state:"informative",children:[(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:InformativeCode})]})}const Informative=function Informative_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Informative_createMdxContent,props)})):Informative_createMdxContent(props)},SuccessCode=dedent_default()`
<Accordion state="success">
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
       <p>
        Hi, I am accordion content body. you can swap me with your local
        component.
       </p>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
      <p>
      Hi, I am accordion content body. you can swap me with your local
      component.
      </p>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
`;function Success_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{state:"success",children:[(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:SuccessCode})]})}const Success=function Success_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Success_createMdxContent,props)})):Success_createMdxContent(props)},CriticalCode=dedent_default()`
<Accordion state="critical">
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
       <p>
        Hi, I am accordion content body. you can swap me with your local
        component.
       </p>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
      <p>
      Hi, I am accordion content body. you can swap me with your local
      component.
      </p>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
`;function Critical_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{state:"critical",children:[(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:CriticalCode})]})}const Critical=function Critical_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Critical_createMdxContent,props)})):Critical_createMdxContent(props)},WarningCode=dedent_default()`
<Accordion state="warning">
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
       <p>
        Hi, I am accordion content body. you can swap me with your local
        component.
       </p>
    </AccordionItemBody>
  </AccordionItem>
  <AccordionItem title="Accordion title">
    <AccordionItemBody>
      <p>
      Hi, I am accordion content body. you can swap me with your local
      component.
      </p>
    </AccordionItemBody>
  </AccordionItem>
</Accordion>
`;function Warning_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{state:"warning",children:[(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:WarningCode})]})}const Warning=function Warning_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Warning_createMdxContent,props)})):Warning_createMdxContent(props)},DisabledCode=dedent_default()`
<Accordion>
        <AccordionItem
            isDisabled={true}
            title="Accordion title"
        >
            <AccordionItemBody>
                <p>
                Hi, I am accordion content body. you can swap me with your local
                component.
                </p>
            </AccordionItemBody>
        </AccordionItem>
</Accordion>
`;function Disabled_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Disabled",style:{paddingTop:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["When ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"isDisabled"})," prop is set to"," ","\n",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"true"})," the ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"AccordionItem"})," ","\nwill be disabled"]})}),(0,jsx_runtime.jsx)(docs_src.Su,{children:(0,jsx_runtime.jsx)(accordion_src.G7,{children:(0,jsx_runtime.jsx)(accordion_src.eS,{isDisabled:!0,title:"Disabled Accordion",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:DisabledCode})]})})}const Disabled=function Disabled_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Disabled_createMdxContent,props)})):Disabled_createMdxContent(props)},DescriptionCode=dedent_default()`
<Accordion>
    <AccordionItem
      title="Accordion title"
      description="Accordion Item Description"
    >
      <AccordionItemBody>
        <p>
          Hi, I am accordion content body. you can swap me with your local
          component.
        </p>
      </AccordionItemBody>
    </AccordionItem>
</Accordion>
`;function Description_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Description",style:{paddingTop:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"description"})," prop to add a description to\nthe ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"AccordionItem"})]})}),(0,jsx_runtime.jsx)(docs_src.Su,{children:(0,jsx_runtime.jsx)(accordion_src.G7,{children:(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",description:"Accordion Item Description",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:DescriptionCode})]})})}const Description=function Description_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Description_createMdxContent,props)})):Description_createMdxContent(props)},IconCode=dedent_default()`
<Accordion>
        <AccordionItem
            icon={<InfoAlt />}
            title="Accordion title"
        >
            <AccordionItemBody>
                <p>
                Hi, I am accordion content body. you can swap me with your local
                component.
                </p>
            </AccordionItemBody>
        </AccordionItem>
</Accordion>
`;function Icon_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Icon",style:{paddingTop:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"icon"})," prop to add an icon to the"," ","\n",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"AccordionItem"})]})}),(0,jsx_runtime.jsx)(docs_src.Su,{children:(0,jsx_runtime.jsx)(accordion_src.G7,{children:(0,jsx_runtime.jsx)(accordion_src.eS,{icon:(0,jsx_runtime.jsx)(components.MZ,{}),title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:IconCode})]})})}const Icon=function Icon_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Icon_createMdxContent,props)})):Icon_createMdxContent(props)},CheckboxCode=dedent_default()`
<Accordion>
        <AccordionItem
            hasCheckbox={true}
            onCheck={(checked) => console.log(checked)}
            title="Accordion title"
        >
            <AccordionItemBody>
                <p>
                Hi, I am accordion content body. you can swap me with your local
                component.
                </p>
            </AccordionItemBody>
        </AccordionItem>
</Accordion>
`;function Checkbox_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Checkbox",style:{paddingTop:0,paddingLeft:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["When ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"checkbox"})," prop is set to"," ","\n",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"true"})," the ",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"AccordionItem"})," ","\nwill have a checkbox"]})}),(0,jsx_runtime.jsx)(docs_src.Su,{children:(0,jsx_runtime.jsx)(accordion_src.G7,{children:(0,jsx_runtime.jsx)(accordion_src.eS,{onCheck:checked=>console.log(checked),hasCheckbox:!0,isExpanded:!0,title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:CheckboxCode})]})})}const Checkbox=function Checkbox_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Checkbox_createMdxContent,props)})):Checkbox_createMdxContent(props)};dedent_default()`
<Accordion>
    <AccordionItem title="Accordion title">
       <AccordionItemBody>
        <p>
         Hi, I am accordion content body. you can swap me with your local
         component.
        </p>
       </AccordionItemBody>
       <AccordionItemFooter>
         <Button color="black" appearance="secondary">
           Secondary
         </Button>
         <Button color="blue" appearance="primary">
          Primary
         </Button>
       </AccordionItemFooter>
   </AccordionItem>
</Accordion>
`;const sampleCode=dedent_default()`
     <Accordion>
      <AccordionItem title="Accordion title">
        <AccordionItemBody>
          <p>
            Hi, I am accordion content body. you can swap me with your local component.
          </p>
        </AccordionItemBody>
        </AccordionItem>
        <AccordionItem
          title="Accordion title"
        >
          <AccordionItemBody>
            <p>
              Hi, I am accordion content body. you can swap me with your local component.
            </p>
          </AccordionItemBody>
        </AccordionItem>
      <AccordionItem
          title="Accordion title"
        >
          <AccordionItemBody>
            <p>
              Hi, I am accordion content body. you can swap me with your local component.
            </p>
          </AccordionItemBody>
        </AccordionItem>
    </Accordion>
`;function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.iG,{contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Basic Accordion Example"}),(0,jsx_runtime.jsx)(docs_src.Su,{wrapper:!0,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{children:[(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Accordion title",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Hi, I am accordion content body. you can swap me with your local\ncomponent."})})})})]})}),(0,jsx_runtime.jsx)(docs_src.O,{language:"js",children:sampleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"State",style:{paddingTop:0},children:[(0,jsx_runtime.jsxs)(_components.p,{children:["You can change the symentic type of the accordion by changing the"," ","\n",(0,jsx_runtime.jsx)(docs_src.Md,{small:!0,children:"state"})," prop"]}),(0,jsx_runtime.jsxs)(docs_src.mg,{children:[(0,jsx_runtime.jsx)("div",{label:"neutral",value:"neutral",children:(0,jsx_runtime.jsx)(Neutral,{})}),(0,jsx_runtime.jsx)("div",{label:"informative",value:"informative",children:(0,jsx_runtime.jsx)(Informative,{})}),(0,jsx_runtime.jsx)("div",{label:"success",value:"success",children:(0,jsx_runtime.jsx)(Success,{})}),(0,jsx_runtime.jsx)("div",{label:"warning",value:"warning",children:(0,jsx_runtime.jsx)(Warning,{})}),(0,jsx_runtime.jsx)("div",{label:"critical",value:"critical",children:(0,jsx_runtime.jsx)(Critical,{})})]})]}),"\n",(0,jsx_runtime.jsx)(Disabled,{}),"\n",(0,jsx_runtime.jsx)(Description,{}),"\n",(0,jsx_runtime.jsx)(Icon,{}),"\n",(0,jsx_runtime.jsx)(Checkbox,{})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)},overview_namespaceObject=__webpack_require__.p+"static/media/overview.333bbe3c.svg",item_anatomy_namespaceObject=__webpack_require__.p+"static/media/item-anatomy.4ed0306a.svg",header_namespaceObject=__webpack_require__.p+"static/media/header.2b1fb21f.svg",body_namespaceObject=__webpack_require__.p+"static/media/body.e0f6c64f.svg",anatomy_desktop_namespaceObject=__webpack_require__.p+"static/media/anatomy-desktop.d431d09b.svg",anatomy_mobile_namespaceObject=__webpack_require__.p+"static/media/anatomy-mobile.2c3edab4.svg",states_namespaceObject=__webpack_require__.p+"static/media/states.68362cd3.svg",neutral_namespaceObject=__webpack_require__.p+"static/media/neutral.9d269b81.svg",informative_namespaceObject=__webpack_require__.p+"static/media/informative.fe754a9c.svg",success_namespaceObject=__webpack_require__.p+"static/media/success.787ffd6b.svg",warning_namespaceObject=__webpack_require__.p+"static/media/warning.036f2580.svg",critical_namespaceObject=__webpack_require__.p+"static/media/critical.e064ba37.svg";function TabUsage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.MN)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.iG,{style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:overview_namespaceObject,alt:"Overview",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Accordion Item Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Accordion header"}),(0,jsx_runtime.jsx)("p",{children:"Accordion header contains the section title and chevron icon that expands and collapses accordion content."}),(0,jsx_runtime.jsx)("h3",{children:"2. Expanded content"}),(0,jsx_runtime.jsx)("p",{children:"Accordion content that is revealed or concealed when the corresponding accordion header is interacted with. It may also contain the footer where generally includes action buttons if necessary."})]}),(0,jsx_runtime.jsx)(docs_src.qq,{children:(0,jsx_runtime.jsx)("img",{src:item_anatomy_namespaceObject,alt:"Item Anatomy"})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Accordion Header",children:(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsx)(docs_src.qq,{children:(0,jsx_runtime.jsx)(_components.p,{children:"The accordion can include optional elements such as supporting text, an info icon, or a checkbox. These elements can be utilized individually or all together."})}),(0,jsx_runtime.jsx)(docs_src.qq,{children:(0,jsx_runtime.jsx)("img",{src:header_namespaceObject,alt:"Accordion Header"})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"Accordion Body",children:(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsx)(docs_src.qq,{children:(0,jsx_runtime.jsx)(_components.p,{children:"Accordion body may have different components and layouts as the design requirement."})}),(0,jsx_runtime.jsx)(docs_src.qq,{children:(0,jsx_runtime.jsx)("img",{src:body_namespaceObject,alt:"Accordion Body"})})]})}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Anatomy",children:[(0,jsx_runtime.jsx)("h3",{children:"1. Desktop"}),(0,jsx_runtime.jsx)("img",{src:anatomy_desktop_namespaceObject,alt:"Anatomy Desktop"}),(0,jsx_runtime.jsx)("h3",{children:"2. Mobile"}),(0,jsx_runtime.jsx)("img",{src:anatomy_mobile_namespaceObject,alt:"Anatomy Mobile"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.iG,{title:"States",children:(0,jsx_runtime.jsx)("img",{src:states_namespaceObject,alt:"Accordion States"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.iG,{title:"Semantic Types",children:[(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Neutral"}),(0,jsx_runtime.jsx)("img",{src:neutral_namespaceObject,alt:"Neutral"})]}),(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Informative"}),(0,jsx_runtime.jsx)("img",{src:informative_namespaceObject,alt:"Informative"})]})]}),(0,jsx_runtime.jsxs)(docs_src.WA,{children:[(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Success"}),(0,jsx_runtime.jsx)("img",{src:success_namespaceObject,alt:"Success"})]}),(0,jsx_runtime.jsxs)(docs_src.qq,{children:[(0,jsx_runtime.jsx)("h3",{children:"1. Warning"}),(0,jsx_runtime.jsx)("img",{src:warning_namespaceObject,alt:"Warning"})]})]}),(0,jsx_runtime.jsx)(docs_src.WA,{children:(0,jsx_runtime.jsxs)(docs_src.qq,{size:"3",children:[(0,jsx_runtime.jsx)("h3",{children:"1. Critical"}),(0,jsx_runtime.jsx)("img",{src:critical_namespaceObject,alt:"Critical"})]})})]})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent(props)};function Accordion_createMdxContent(props){return docs_src.K2||_missingMdxReference("Page",!1),docs_src.K2.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.C,{children:(0,jsx_runtime.jsxs)(docs_src.K2.Tabs,{title:"Accordion",subtitle:"The Accordion allows users to show and hide the content of related titles on\na page.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const stories_Accordion=function Accordion_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.MN)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Accordion_createMdxContent,props)})):Accordion_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const Accordion_stories_Accordion=({color,state,allowMultipleExpand,noBorderRadius,noSideBorders,isFlushed})=>{const boxStyles={padding:20,borderRadius:4,background:"white"!==color?"#fff":"#333"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)("div",{style:boxStyles,children:(0,jsx_runtime.jsxs)(accordion_src.G7,{state,allowMultipleExpand,noBorderRadius,noSideBorders,isFlushed,children:[(0,jsx_runtime.jsxs)(accordion_src.eS,{title:"Tab Title 1",children:[(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})}),(0,jsx_runtime.jsxs)(accordion_src.wh,{children:[(0,jsx_runtime.jsx)(src.q,{color:"black",appearance:"secondary",children:"Secondary"}),(0,jsx_runtime.jsx)(src.q,{color:"blue",appearance:"primary",children:"Primary"})]})]}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Tab Title 2",description:"Supportive description for the accordion item",children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Tab Title 3",description:"Supportive description for the accordion item",icon:(0,jsx_runtime.jsx)(components.MZ,{}),children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Tab Title 4",description:"Supportive description for the accordion item",hasCheckbox:!0,icon:(0,jsx_runtime.jsx)(components.MZ,{}),children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})}),(0,jsx_runtime.jsx)(accordion_src.eS,{title:"Disabled Tab",description:"Supportive description for the accordion item",hasCheckbox:!0,icon:(0,jsx_runtime.jsx)(components.MZ,{}),children:(0,jsx_runtime.jsx)(accordion_src.X_,{children:(0,jsx_runtime.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."})})})]})})})})};Accordion_stories_Accordion.argTypes={state:{name:"State",options:["default","neutral","informative","success","warning","critical"],control:{type:"select",labels:{default:"Default",neutral:"Neutral",informative:"Informative",success:"Success",warning:"Warning",critical:"Critical"}}},allowMultipleExpand:{name:"Multiple Expands",control:{type:"boolean"}},noBorderRadius:{name:"No Border Radius",control:{type:"boolean"}},noSideBorders:{name:"No Side Borders",control:{type:"boolean"}},isFlushed:{name:"Content wrapper",control:{type:"boolean"}}};const Accordion_stories={title:"SUI/Components/Advanced/Accordion",component:Accordion_stories_Accordion,parameters:{layout:"fullscreen",docs:{page:stories_Accordion}}},__namedExportsOrder=["Accordion"]}}]);
//# sourceMappingURL=ui-accordion-stories-Accordion-stories.dc37aa9f.iframe.bundle.js.map