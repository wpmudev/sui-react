"use strict";(self.webpackChunk_wpmudev_sui_react=self.webpackChunk_wpmudev_sui_react||[]).push([[4365],{"./packages/ui/modal/stories/modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Modal:()=>modal_stories_Modal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>modal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts");const ModalContext=(0,react.createContext)(null),Modal=(0,react.forwardRef)((({id,size="sm",children,variant="simple",...props},ref)=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);(0,hooks_src.GT)({component:Modal,propsToCheck:{id}});const openModal=(0,react.useCallback)((()=>{setIsOpen(!0)}),[]),closeModal=(0,react.useCallback)((()=>{setIsOpen(!1)}),[]);(0,react.useImperativeHandle)(ref,(()=>({openModal,closeModal})));const[render]=(0,hooks_src.vI)();if(!isOpen)return null;const classNames=(0,src.uY)("sui-modal",{"is-open":isOpen,[variant]:!(0,src.xb)(variant??""),[size]:!(0,src.xb)(size??"")});return render((0,jsx_runtime.jsxs)(ModalContext.Provider,{value:{openModal,closeModal,variant:variant??"simple",size:size??"sm"},children:[(0,jsx_runtime.jsx)("section",{tabIndex:-1,role:"dialog",className:classNames,"aria-modal":!0,"data-testid":"modal",children:(0,jsx_runtime.jsx)("div",{className:(0,src.uY)("sui-modal__container",{}),children})}),(0,jsx_runtime.jsx)("div",{className:"sui-modal__overlay",role:"presentation"})]}))}));Modal.displayName="Modal";var components=__webpack_require__("./packages/assets/icons/src/components/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const ModalHeader=({title="",children})=>{const ctx=(0,react.useContext)(ModalContext),{closeModal,variant}=ctx;return(0,hooks_src.GT)({component:ModalHeader,propsToCheck:{title}}),(0,jsx_runtime.jsxs)("header",{className:"sui-modal__header",children:[(0,jsx_runtime.jsxs)("div",{className:"sui-modal__header-actions",children:[(0,jsx_runtime.jsx)(components.Uo,{className:"sui-modal__header-actions-icon"}),!(0,src.xb)(title??"")&&"app-connect"!==variant&&(0,jsx_runtime.jsx)("h4",{children:title}),(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-modal__header-actions-close",icon:"Close",appearance:"tertiary",color:"black",onClick:closeModal||(()=>{}),isSmall:!0,iconOnly:!0,slot:"right"})]}),"app-connect"===variant&&(0,jsx_runtime.jsxs)("div",{className:"sui-modal__header-info",children:[(0,jsx_runtime.jsx)("h3",{children:title}),!!children&&(0,jsx_runtime.jsx)("div",{className:"sui-modal__header-info-content",children}),(0,jsx_runtime.jsx)("figure",{className:"sui-modal__header-logo",children:(0,jsx_runtime.jsx)("img",{src:"https://placehold.co/200x200",alt:"App logo"})})]})]})},ModalBody=({children})=>(0,jsx_runtime.jsx)("div",{className:"sui-modal__body",children}),ModalFooter=({children})=>(0,jsx_runtime.jsx)("footer",{className:"sui-modal__footer",children});var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:"Installation",contained:!0,style:{paddingTop:20,paddingBottom:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Install the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"Modal"})," package as an individual\ncomponent or follow the Overview page instructions to get the complete SUI\nComponents package."]})})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"id*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Unique id for the modal"})}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"variant*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Variant type of the modal "}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"simple"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"advanced"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"app-connect"})})]})]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"size*",tag:"string",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:"Indicates the size of the modal "}),(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsx)(_components.p,{children:"Allowed options:"}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"sm"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"md"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"lg"})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"xl"})})]})]})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:{content:"ref*",tag:"object",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsxs)("p",{children:["The React ref object is utilized to access the methods responsible for opening and closing the modal. these functions are available in the ",(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"current"})," object property of the ref"]}),(0,jsx_runtime.jsxs)(docs_src.aV,{children:[(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"ref.current.openModal"})," Opens the modal"]})}),(0,jsx_runtime.jsx)("span",{label:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.EK,{small:!0,children:"ref.current.closeModal"})," Closes the modal"]})})]})]}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:"Content of the modal"})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Sub Components",contained:!0,style:{paddingTop:30,paddingBottom:0},children:[(0,jsx_runtime.jsx)("p",{children:"The Modal component offers a collection of nested subcomponents to be utilized within it. These subcomponents include:"}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:"ModalHeader",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component represents the modal header"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"title*",tag:"string",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Title for the modal header"})})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the component"})})})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:"ModalBody",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component represents the modal body"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the component"})})})]}),(0,jsx_runtime.jsxs)(docs_src.$0,{title:"ModalFooter",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component represents the modal footer"})}),(0,jsx_runtime.jsx)(docs_src.$0,{title:{content:"children*",tag:"React Node",small:!0},contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the component"})})})]})]})]})}const TabCode=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent),input_src=__webpack_require__("./packages/ui/input/src/index.ts"),form_field_src=__webpack_require__("./packages/ui/form-field/src/index.ts");const simpleCode=dedent_default()`

    export const SimpleModal = () => {

    const ref = useRef();

    return (
        <>
            <Modal id="simple-modal" ref={ref}>

                <ModalHeader title="Apply Config">
                    Choose the audience you want to send form data to.
                </ModalHeader>

                <ModalBody>
                    Are you sure you want to apply the Default config to this site? We
                    recommend you have a backup available as your existing settings
                    configuration will be overridden.
                </ModalBody>

                <ModalFooter>
                    <Button
                        appearance="secondary"
                        color="blue"
                        isSmall={true}
                        onClick={() => ref.current.closeModal()}
                    >
                       Cancel
                    </Button>

                    <Button
                        appearance="primary"
                        color="blue"
                        isSmall={true}
                        onClick={() => {
                            console.log("Submitted")
                        }}
                    >
                        Apply
                    </Button>
                </ModalFooter>
            </Modal>

            <Button
               appearance="primary"
               color="blue"
               onClick={() => {
    	          ref.current.openModal()
               }}
            >
                Apply Config
            </Button>
        </>
    )

}

`,SimpleModal=()=>{const ref=(0,react.useRef)();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Modal,{id:"simple-modal",ref,children:[(0,jsx_runtime.jsx)(ModalHeader,{title:"Apply Config",children:"Choose the audience you want to send form data to."}),(0,jsx_runtime.jsx)(ModalBody,{children:"Are you sure you want to apply the Default config to this site? We recommend you have a backup available as your existing settings configuration will be overridden."}),(0,jsx_runtime.jsxs)(ModalFooter,{children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"blue",isSmall:!0,onClick:()=>ref.current.closeModal(),children:"Cancel"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,onClick:()=>{console.log("Submitted")},children:"Apply"})]})]}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",onClick:()=>{ref.current.openModal()},children:"Apply Config"})]})},advancedCode=dedent_default()`
    export const AdvancedModal = () => {

    const ref = useRef();

    return (
        <>
            <Modal id="advanced-modal" ref={ref}>

                <ModalHeader title="Submit Button" />

                <ModalBody>
                    <FormField label="Button Text">
                        <Input id="button-text" placeholder="Enter Text" />
                    </FormField>
                    <FormField label="Button Processing Text" helper="This text will appear as button text while the quiz is being submitted.">
                        <Input id="button-processing-text" placeholder="Sending..." />
                    </FormField>
                    <hr />
                    <FormField label="Custom CSS Class" helper='These will be output as you see them here. To add multiple classes, separate them with a space. For example, "form-submit-btn button" will add two classes "form-submit-btn" and "button".'>
                        <Input id="custom-css-class" placeholder="Eg., form-submit-btn" />
                    </FormField>
                </ModalBody>

                <ModalFooter>
                    <Button
                        appearance="tertiary"
                        color="black"
                        isSmall={true}
                        onClick={() => ref.current.closeModal()}
                    >
                        Tertiary
                    </Button>
                    <Button
                        appearance="secondary"
                        color="black"
                        isSmall={true}
                        onClick={() => ref.current.closeModal()}
                    >
                        Secondary
                    </Button>

                    <Button
                        appearance="primary"
                        color="blue"
                        isSmall={true}
                        onClick={() => {
                            console.log("Submitted")
                        }}
                    >
                        Primary
                    </Button>
                </ModalFooter>
            </Modal>

                <Button
                    appearance="primary"
                    color="blue"
                    onClick={() => {
                        ref.current.openModal()
                    }}
                >
                    Open form
                </Button>
        </>
    )

} `,AdvancedModal=()=>{const _components=Object.assign({hr:"hr"},(0,lib.ah)()),ref=(0,react.useRef)();return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Modal,{id:"advanced-modal",ref,children:[(0,jsx_runtime.jsx)(ModalHeader,{title:"Submit Button"}),(0,jsx_runtime.jsxs)(ModalBody,{children:[(0,jsx_runtime.jsx)(form_field_src.W,{label:"Button Text",children:(0,jsx_runtime.jsx)(input_src.I,{id:"button-text",placeholder:"Enter Text"})}),(0,jsx_runtime.jsx)(form_field_src.W,{label:"Button Processing Text",helper:"This text will appear as button text while the quiz is being submitted.",children:(0,jsx_runtime.jsx)(input_src.I,{id:"button-processing-text",placeholder:"Sending..."})}),(0,jsx_runtime.jsx)(_components.hr,{}),(0,jsx_runtime.jsx)(form_field_src.W,{label:"Custom CSS Class",helper:'These will be output as you see them here. To add multiple classes, separate them with a space. For example, "form-submit-btn button" will add two classes "form-submit-btn" and "button".',children:(0,jsx_runtime.jsx)(input_src.I,{id:"custom-css-class",placeholder:"Eg., form-submit-btn"})})]}),(0,jsx_runtime.jsxs)(ModalFooter,{children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"tertiary",color:"black",isSmall:!0,onClick:()=>ref.current.closeModal(),children:"Tertiary"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"black",isSmall:!0,onClick:()=>ref.current.closeModal(),children:"Secondary"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,onClick:()=>{console.log("Submitted")},children:"Primary"})]})]}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",onClick:()=>{ref.current.openModal()},children:"Open form"})]})};function TabExamples_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Simple Dialog",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"Simple dialogs are commonly used to display confirmation messages."}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(SimpleModal,{})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:simpleCode})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Advanced Dialog",contained:!0,style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Advanced dialogs are utilised when the body contains extensive content such\nas forms and other lengthy information."})}),(0,jsx_runtime.jsx)("div",{className:"sui-wrap sui-theme--light",style:{marginBottom:30},children:(0,jsx_runtime.jsx)(AdvancedModal,{})}),(0,jsx_runtime.jsx)(docs_src.pP,{language:"js",children:advancedCode})]})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent(props)},overview_namespaceObject=__webpack_require__.p+"static/media/overview.2d689cfb.svg",anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.307d989f.svg",header_variations_namespaceObject=__webpack_require__.p+"static/media/header-variations.c0859686.svg",body_namespaceObject=__webpack_require__.p+"static/media/body.017561ef.svg",footer_namespaceObject=__webpack_require__.p+"static/media/footer.ad5898f2.svg",spacing_namespaceObject=__webpack_require__.p+"static/media/spacing.6cdd0b70.svg",size_namespaceObject=__webpack_require__.p+"static/media/size.a7bd7706.svg",max_height_namespaceObject=__webpack_require__.p+"static/media/max-height.1a5e1f5e.svg",examples_namespaceObject=__webpack_require__.p+"static/media/examples.af0c2ab7.svg";function TabUsage_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src.$0,{style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:overview_namespaceObject,alt:"Overview",style:{marginBottom:20}})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Anatomy",children:(0,jsx_runtime.jsxs)(docs_src.X2,{children:[(0,jsx_runtime.jsxs)(docs_src.JX,{children:[(0,jsx_runtime.jsx)("h3",{style:{marginTop:0},children:"1. Dialog header"}),(0,jsx_runtime.jsx)("p",{children:'The header appears at the top of the modal with the title and close icon. The title provides a brief and descriptive heading that indicates the purpose or topic of the modal dialog. It helps users understand the context and provides a visual cue for what they can expect.\nModal dialogs typically include a close button or "X" icon in the top-right corner. This allows users to dismiss the modal without taking any further action.'}),(0,jsx_runtime.jsx)("h3",{children:"2. Dialog body"}),(0,jsx_runtime.jsx)("p",{children:"The Dialog body is where the main information or interaction elements of the modal are placed. It can include text, images, forms, buttons, or any other relevant content specific to the purpose of the modal. The content should be concise and well-organized, focusing on the most important information or actions."}),(0,jsx_runtime.jsx)("h3",{children:"2. Dialog Footer"}),(0,jsx_runtime.jsx)("p",{children:"Dialog footer is an optional component that appears at the bottom of the modal. It is generally used to display actions and it can be also used to display additional information or supplemental content related to the modal. For example, it may include links to related resources, additional options, or help documentation."}),(0,jsx_runtime.jsx)("p",{children:"Depending on the purpose of the modal, there may be one or more action buttons\nincluded. The specific labels and number of action buttons will vary based on\nthe modal's functionality and the user flow it supports."})]}),(0,jsx_runtime.jsx)(docs_src.JX,{children:(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Item Anatomy"})})]})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Header Variations",children:(0,jsx_runtime.jsx)("img",{src:header_variations_namespaceObject,alt:"Modal Header Variations"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Modal Body",children:(0,jsx_runtime.jsx)("img",{src:body_namespaceObject,alt:"Modal Body"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Modal Footer",children:(0,jsx_runtime.jsx)("img",{src:footer_namespaceObject,alt:"Modal Footer"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Spacing",children:(0,jsx_runtime.jsx)("img",{src:spacing_namespaceObject,alt:"Modal Spacing"})}),"\n",(0,jsx_runtime.jsx)(docs_src.$0,{title:"Size",children:(0,jsx_runtime.jsx)("img",{src:size_namespaceObject,alt:"Modal Size"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Maximum Height",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The modal body will be scrollable when the modal content exceeds the screen\nsize fixing the modal header and footer."})}),(0,jsx_runtime.jsx)("img",{src:max_height_namespaceObject,alt:"Modal Maximum Height "})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.$0,{title:"Examples",children:[(0,jsx_runtime.jsx)("img",{src:examples_namespaceObject,alt:"Modal Examples"}),(0,jsx_runtime.jsx)("h3",{style:{marginTop:30},children:"1. Simple dialog"}),(0,jsx_runtime.jsx)("p",{children:"Simple dialogs are commonly used to display confirmation messages. They typically include a header, where the presence of an icon is optional. Depending on the content of the dialog, appropriate actions should be used."}),(0,jsx_runtime.jsx)("h3",{children:"2. Advanced dislog"}),(0,jsx_runtime.jsx)("p",{children:"Advanced dialogs are utilised when the body contains extensive content such as forms and other lengthy information. When the modal body exceeds the screen size, an advanced dialog is employed with a fixed header and footer."}),(0,jsx_runtime.jsx)("h3",{children:"3. App connect"}),(0,jsx_runtime.jsx)("p",{children:"We use App-connect dialog when user needs to connect third party apps with WPMU DEV plugins. It can be used for add-ons as well."})]})]})}const TabUsage=function TabUsage_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabUsage_createMdxContent,props)})):TabUsage_createMdxContent(props)};function modal_createMdxContent(props){return docs_src.T3||_missingMdxReference("Page",!1),docs_src.T3.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.E$,{children:(0,jsx_runtime.jsxs)(docs_src.T3.Tabs,{title:"Modal",subtitle:"The modal dialog purpose is to notify and inform users or ask them certain question about their preferences",status:"draft",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}const modal_stories={title:"SUI/Components/Advanced/Modal",component:Modal,parameters:{layout:"fullscreen",docs:{page:function modal_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(modal_createMdxContent,props)})):modal_createMdxContent()}}}},modal_stories_Modal=({...props})=>{const ref=(0,react.useRef)(null);return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)("div",{style:{padding:20,borderRadius:4,background:"#fff"},children:[(0,jsx_runtime.jsxs)(Modal,{...props,ref,children:[(0,jsx_runtime.jsx)(ModalHeader,{title:"Apply Config",children:"Choose the audience you want to send form data to."}),(0,jsx_runtime.jsx)(ModalBody,{children:"Are you sure you want to apply the Default config to this site? We recommend you have a backup available as your existing settings configuration will be overridden."}),(0,jsx_runtime.jsxs)(ModalFooter,{children:[(0,jsx_runtime.jsx)(button_src.zx,{appearance:"secondary",color:"blue",isSmall:!0,onClick:()=>ref.current?.closeModal(),children:"Cancel"}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",isSmall:!0,children:"Apply"})]})]}),(0,jsx_runtime.jsx)(button_src.zx,{appearance:"primary",color:"blue",onClick:()=>{ref.current?.openModal()},children:"Apply Config"})]})})})};modal_stories_Modal.args={id:"uniqueId",icon:{name:"info-alt",color:"blue"},size:"sm",variant:"simple"},modal_stories_Modal.argTypes={id:{name:"Id",control:{type:"text"}},icon:{name:"Icon",control:{type:"object"}},size:{name:"Size",options:["sm","lg","xl"],control:{type:"select",labels:{sm:"Small (sm)",lg:"Large (lg)",xl:"Extra Large (xl)"}}},variant:{name:"Variant",options:["simple","advanced","app-connect"],control:{type:"select",labels:{simple:"Simple",advanced:"Advanced","app-connect":"App connect"}}}};const __namedExportsOrder=["Modal"]},"./packages/ui/form-field/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>FormField});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const Label=({id,hidden=!1,children})=>{if(!("string"==typeof children?!(0,src.xb)(children??""):!!children))throw new Error('Empty content is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Form Field\n\nThe "Label" component requires a child element to be passed to it.\n\n');const classNames=classnames_default()({"sui-screen-reader-only":hidden,"sui-form-field__label":!hidden});return(0,jsx_runtime.jsx)("label",{htmlFor:id,id:`${id}-label`,className:classNames,children})},Helper=({id,children})=>{const classNames=classnames_default()({"sui-form-field__helper":!0});return(0,jsx_runtime.jsx)("span",{id:`${id}-helper`,className:classNames,children})},ErrorMessage=({id,show=!1,children})=>(0,jsx_runtime.jsx)("span",{id:`${id}-error-message`,className:"sui-form-field__helper sui-color-error--50",children:show&&children}),FormField=({id="",label,helper,error,className,isSmall=!1,isDisabled=!1,isLabelHidden=!1,children,...props})=>{let fieldId=(0,react.useId)();(0,src.xb)(id)||(fieldId=id);const isErrored="string"==typeof error?!(0,src.xb)(error??""):!!error,classNames=(0,src.uY)("sui-form-field",{sm:isSmall,disabled:isDisabled},className),ariaAttrs={id:fieldId,isSmall,isDisabled,...!(0,src.xb)(label??"")&&{"aria-labelledby":`${fieldId}-label`},...!!helper&&{"aria-describedby":`${fieldId}-helper`},...isErrored&&{"aria-errormessage":`${fieldId}-error-message`,isError:!0}};return(0,jsx_runtime.jsxs)("div",{className:classNames,...props,"data-testid":"form-field",children:[!(0,src.xb)(label??"")&&(0,jsx_runtime.jsx)(Label,{id:fieldId,hidden:isLabelHidden??!1,children:label}),Object.keys(ariaAttrs).length>0?react.Children.map(children,(child=>(0,react.isValidElement)(child)?(0,react.cloneElement)(child,{...ariaAttrs}):child)):children,isErrored&&(0,jsx_runtime.jsx)(ErrorMessage,{id:fieldId,show:isErrored,children:error}),!!helper&&(0,jsx_runtime.jsx)(Helper,{id:fieldId,children:helper})]})}},"./packages/ui/input/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/utils/src/index.ts"),hooks_src=__webpack_require__("./packages/hooks/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts");const Icon=({name="",size="lg",position="start"})=>{if((0,src.xb)(name??""))throw new Error('Required parameter is empty. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe "name" parameter in the icon element is required and must not be empty.\n\n');const classNames=(0,src.uY)("suicons",{[name]:!0,[size||"md"]:["sm","md","lg"].includes(size||"md"),icon:!0},"sui-input__icon");return(0,jsx_runtime.jsx)("span",{className:classNames,"aria-hidden":"true","data-testid":`input-icon-${position}`})},Input=(0,react.forwardRef)((({type,defaultValue,placeholder,hint,id,className,inputClass,isMultiLine=!1,isSmall=!1,isReadOnly=!1,isError=!1,isDisabled=!1,onMouseEnter=()=>{},onMouseLeave=()=>{},onChange,icon,iconPosition,allowClear=!1,disableInteractions=!1,...props},ref)=>{const[value,setValue]=(0,react.useState)(defaultValue),[isHovered,isFocused,interactionMethods]=(0,hooks_src.X2)({});if(!(!(0,src.o8)(id)&&!(0,src.xb)(id)))throw new Error('Empty parameter is not valid. More details below:\n\n⬇️ ⬇️ ⬇️\n\n📦 Shared UI - Components: Input\n\nThe parameter "id" in the "Input" component is required.\n\n');(0,react.useEffect)((()=>{setValue(defaultValue)}),[defaultValue]);const handleChange=(0,react.useCallback)((e=>{isReadOnly||setValue(e?.target?.value??""),onChange&&onChange(e)}),[isReadOnly,onChange]),onClear=(0,react.useCallback)((()=>{setValue(""),onChange&&onChange("")}),[onChange]),hasValue=!(0,src.o8)(value)&&!(0,src.xb)(value??""),hasPlaceholder=!(0,src.o8)(placeholder)&&!(0,src.xb)(placeholder),hasClassInput=!(0,src.o8)(inputClass)&&!(0,src.xb)(inputClass);let inputType="text";["email","number","password","search","tel","url"].includes(type)&&(inputType=type);const classNames=(0,src.uY)("sui-input",{sm:isSmall,readonly:isReadOnly,hover:isHovered&&!isReadOnly,focus:isFocused&&!isReadOnly,filled:hasValue,"has-icon":!(0,src.xb)(icon),"icon-start":!(0,src.xb)(iconPosition)&&"start"===iconPosition,"icon-end":!(0,src.xb)(iconPosition)&&"end"===iconPosition,error:isError,disabled:isDisabled,["multiline"+(isSmall?"-sm":"")]:isMultiLine},className??""),inputClassNames=(0,src.uY)("sui-input__input",{"allow-clear":allowClear&&!(0,src.xb)(value)&&!isMultiLine},hasClassInput?inputClass:"");let TagName="input";isMultiLine&&(TagName="textarea");const attrs={id,ref,type:(0,src.CI)(!isMultiLine,inputType),placeholder:(0,src.CI)(hasPlaceholder,placeholder),"aria-label":placeholder||"input",readOnly:(0,src.CI)(isReadOnly,!0),disabled:(0,src.CI)(isDisabled,!0),value:value??"",className:inputClassNames,onChange:handleChange,...disableInteractions?{}:interactionMethods,...props},hasHintText=!(0,src.xb)(hint??"");return(0,jsx_runtime.jsxs)("div",{className:classNames,"data-testid":"input",children:[icon&&!isMultiLine&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),(0,jsx_runtime.jsxs)("div",{className:(0,src.uY)("sui-input__input-field",{"has-hint":hasHintText}),children:[(0,jsx_runtime.jsx)(TagName,{...attrs}),hasHintText&&(0,jsx_runtime.jsxs)(react.Fragment,{children:[!(0,src.xb)(value)&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-text",children:value}),hasHintText&&(0,jsx_runtime.jsx)("div",{className:"sui-input__input-field-hint",children:hint})]})]}),icon&&!isMultiLine&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{name:icon??"",size:isSmall?"md":"lg",position:iconPosition}),allowClear&&!(0,src.xb)(value)&&!isMultiLine&&(0,jsx_runtime.jsx)(button_src.zx,{className:"sui-input__input-clear",icon:"CloseAlt",color:"black",appearance:"tertiary",iconOnly:!0,iconSize:isSmall?"sm":"md",onClick:onClear,isSmall,onKeyDown:e=>(0,src.Jw)(e,onClear),children:"Clear"})]})}));Input.displayName="Input"},"./node_modules/dedent/dist/dedent.js":module=>{module.exports=function dedent(strings){var raw=void 0;raw="string"==typeof strings?[strings]:strings.raw;for(var result="",i=0;i<raw.length;i++)result+=raw[i].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),i<(arguments.length<=1?0:arguments.length-1)&&(result+=arguments.length<=i+1?void 0:arguments[i+1]);var lines=result.split("\n"),mindent=null;return lines.forEach((function(l){var m=l.match(/^(\s+)\S+/);if(m){var indent=m[1].length;mindent=mindent?Math.min(mindent,indent):indent}})),null!==mindent&&(result=lines.map((function(l){return" "===l[0]?l.slice(mindent):l})).join("\n")),(result=result.trim()).replace(/\\n/g,"\n")}}}]);
//# sourceMappingURL=ui-modal-stories-modal-stories.b8939133.iframe.bundle.js.map