"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[6483],{"./packages/ui/box/stories/box.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Box:()=>Box,__namedExportsOrder:()=>__namedExportsOrder,default:()=>box_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/box/src/index.ts")),grid_src=__webpack_require__("./packages/ui/grid/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);const basicCode=dedent_default()`
    <Box title="Box label" icon="hub" headerLeft="Left content" headerRight="Right content">
			<BoxGroup>
				<Row align={{ md: "inline" }}>
					<Col size="6">
						<div
						style={{
								padding: 20,
								borderRadius: 4,
								background: "#F8F8F8",
							}}
						>Left block</div>
					</Col>
					<Col size="6">
						<div style={{
								padding: 20,
								borderRadius: 4,
								background: "#F8F8F8",
							}}
							>Right block</div>
					</Col>
				</Row>
			</BoxGroup>
		</Box>
`;dedent_default()`
    <FormField
            error={{ state: true, text: "Name must have at least 3 characters" }}
            label="Name"
    >
        <Input value="ab" id="input-example" placeholder="Placeholder" />
    </FormField>
`,dedent_default()`
    <FormField label="Settings" helper="Please Select one option">
        <Select
            id="select-example"
            options={[
                    {
                        icon: "settings",
                        id: "option-1",
                        label: "Option 1",
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
                ]}
        />
    </FormField>
`;function _createMdxContent(props){const _components=Object.assign({span:"span"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(docs_src.$0,{title:"A Form Field with a basic Input",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)(docs_src.MB,{wrapper:!0,children:(0,jsx_runtime.jsx)(src.x,{title:"Box label",icon:"hub",headerLeft:[(0,jsx_runtime.jsx)(_components.span,{className:"sui-tag sui-tag--outlined-navy sui-tag--sm sui-tag--uppercase",children:(0,jsx_runtime.jsx)(_components.span,{className:"sui-tag__label",children:"Pro"})},"1")],headerRight:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,children:"Run Action"},"1")],children:(0,jsx_runtime.jsx)(src.f,{children:(0,jsx_runtime.jsxs)(grid_src.X,{align:{md:"inline"},children:[(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#F8F8F8"},children:"Left block"})}),(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:{padding:20,borderRadius:4,background:"#F8F8F8"},children:"Right block"})})]})})})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:basicCode})]})}const TabExamples=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Box"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Box Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"title",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The title of the box."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"icon",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Hide icon on the mobile view."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"hideMobileIcon",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Hide icon on the mobile view."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"headerLeft",tag:"ReactNode | string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content for the left header section of the box."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"headerRight",tag:"React Node | string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content for the right header section of the box."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"style",tag:"object",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Box inline styles "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isSmall",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Make box small."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"className",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Custom css class Name(s) "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content of the field, it could be any form element "})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"BoxGroup Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isInline",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the boxes should be displayed inline or not."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isHeader",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the boxes should be displayed as box header."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"isFooter",tag:"boolean",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Whether the boxes should be displayed as footer."})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"style",tag:"object",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Box inline styles "})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"The content of the field, it could be any form element "})})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)};function box_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Box",subtitle:"",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const box=function box_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(box_createMdxContent,props)})):box_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const box_stories={title:"SUI/Components/Core/Box",component:src.x,parameters:{layout:"fullscreen",docs:{page:box}}},Box=({...props})=>{const styles={padding:20,borderRadius:4,background:"#F8F8F8"};return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsx)(src.x,{...props,children:(0,jsx_runtime.jsx)(src.f,{children:(0,jsx_runtime.jsxs)(grid_src.X,{align:{md:"inline"},children:[(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:styles,children:"Left block"})}),(0,jsx_runtime.jsx)(grid_src.J,{size:"6",children:(0,jsx_runtime.jsx)("div",{style:styles,children:"Right block"})})]})})})})})};Box.args={title:"Box Label",icon:"hub",headerLeft:[(0,jsx_runtime.jsx)("span",{className:"sui-tag sui-tag--outlined-navy sui-tag--sm sui-tag--uppercase",children:(0,jsx_runtime.jsx)("span",{className:"sui-tag__label",children:"Pro"})},"1")],headerRight:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,children:"Run Action"},"1")]},Box.parameters={...Box.parameters,docs:{...Box.parameters?.docs,source:{originalSource:'({\n  ...props\n}) => {\n  const styles = {\n    padding: 20,\n    borderRadius: 4,\n    background: "#F8F8F8"\n  };\n  return <div className="sui-layout sui-layout--horizontal sui-layout--vertical">\n            <div className="sui-layout__content">\n                <SuiBox {...props}>\n                    <BoxGroup>\n                        <Row align={{\n            md: "inline"\n          }}>\n                            <Col size="6">\n                                <div style={styles}>Left block</div>\n                            </Col>\n                            <Col size="6">\n                                <div style={styles}>Right block</div>\n                            </Col>\n                        </Row>\n                    </BoxGroup>\n                </SuiBox>\n            </div>\n        </div>;\n}',...Box.parameters?.docs?.source}}};const __namedExportsOrder=["Box"]},"./packages/ui/box/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Box,f:()=>BoxGroup});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts");const BoxGroup=({isInline=!0,children,isHeader=!1,isFooter=!1,style})=>{const slots=react.Children.map(children,((child,index)=>{const{slot,children:content}=child?.props??{};return(0,src.Kn)(child)&&["left","right"].includes(slot??"")?(0,jsx_runtime.jsx)("div",{className:`sui-box-group__slot sui-box-group__${slot}`,children:content},`sui-box-group--${index}`):(0,jsx_runtime.jsx)(react.Fragment,{children:child},`sui-box-group--${index}`)})),classNames=(0,src.uY)("sui-box-group",{inline:isInline,header:isHeader,footer:isFooter});return(0,jsx_runtime.jsx)("div",{className:classNames,style,"data-testid":"box-group",children:slots})},Box=({title,icon,hideMobileIcon=!1,headerLeft,headerRight,children,isSmall,className="",style={},...props})=>{const hasTitle=!(0,src.o8)(title)&&!(0,src.xb)(title),hasIcon=!(0,src.o8)(icon)&&!(0,src.xb)(icon),hasLeft=!(0,src.o8)(headerRight)&&!!headerLeft,hasRight=!(0,src.o8)(headerRight)&&!!headerRight,classNames=(0,src.uY)("sui-box",{"size-sm":isSmall},className);return(0,jsx_runtime.jsxs)("div",{className:classNames,style:style??{},...props,children:[hasTitle&&(0,jsx_runtime.jsxs)(BoxGroup,{isInline:!0,children:[(0,jsx_runtime.jsxs)("div",{slot:"left",children:[hasIcon&&(0,jsx_runtime.jsx)("span",{className:(0,src.uY)("suicons",{[icon??""]:!0,lg:!0},hideMobileIcon?"sui-box-group__item sui-icon--hide-sm":"sui-box-group__item"),"aria-hidden":"true"}),hasTitle&&(0,jsx_runtime.jsx)("h2",{className:"sui-heading sui-heading--h3 sui-box-group__item",children:title}),hasLeft&&headerLeft]}),(0,jsx_runtime.jsx)("div",{...hasRight&&{slot:"right"},children:hasRight&&headerRight})]}),children]})}},"./packages/ui/grid/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Col,X:()=>Row});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),src=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/utils/src/index.ts"));const Row=({align,className,children,...props})=>{const expectedAligns={xs:"",sm:"",md:"",lg:"",xl:"",...align};let classNames="sui-row";for(const key in expectedAligns)""!==expectedAligns[key]&&("xs"===key&&"stacked"!==expectedAligns[key]?classNames+=` sui-row--${expectedAligns[key]}`:classNames+=` sui-row-${key}--${expectedAligns[key]}`);return(0,src.xb)(className??"")||(classNames+=` ${className}`),(0,jsx_runtime.jsx)("div",{className:classNames,"data-testid":"grid",...props,children})},Col=({size,children,className,...props})=>{const classNames=(0,src.uY)("sui-col",{[size]:!!size},className);return"colSize"in props&&delete props?.colSize,"size"in props&&delete props?.size,(0,jsx_runtime.jsx)("div",{className:classNames,...props,children})}}}]);
//# sourceMappingURL=ui-box-stories-box-stories.5e7fb292.iframe.bundle.js.map