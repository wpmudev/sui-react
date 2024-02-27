"use strict";(self.webpackChunkwpmudev_sui=self.webpackChunkwpmudev_sui||[]).push([[5397],{"./packages/ui/table/stories/Table.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Table:()=>Table,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Table_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),src=__webpack_require__("./packages/ui/table/src/index.ts"),tag_src=__webpack_require__("./packages/ui/tag/src/index.ts"),button_src=__webpack_require__("./packages/ui/button/src/index.ts"),pagination_src=__webpack_require__("./packages/ui/pagination/src/index.ts"),utils_src=__webpack_require__("./packages/utils/src/index.ts"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),docs_src=__webpack_require__("./packages/docs/src/index.ts"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const anatomy_namespaceObject=__webpack_require__.p+"static/media/anatomy.5a20fae3.svg",popover_filter_namespaceObject=__webpack_require__.p+"static/media/popover-filter.734669a0.svg",inline_filter_namespaceObject=__webpack_require__.p+"static/media/inline-filter.eae55250.svg",button_filter_namespaceObject=__webpack_require__.p+"static/media/button-filter.d91e21f3.svg",sort_column_namespaceObject=__webpack_require__.p+"static/media/sort-column.ac3ae54d.svg",state_default_namespaceObject=__webpack_require__.p+"static/media/state-default.acf4f390.svg",state_hover_namespaceObject=__webpack_require__.p+"static/media/state-hover.0d520a3b.svg",state_expanded_namespaceObject=__webpack_require__.p+"static/media/state-expanded.f2f49915.svg",status_namespaceObject=__webpack_require__.p+"static/media/status.ad399ee6.svg",type_default_namespaceObject=__webpack_require__.p+"static/media/type-default.f03ee9d8.svg",type_stripe_namespaceObject=__webpack_require__.p+"static/media/type-stripe.9c76c86d.svg",draggable_namespaceObject=__webpack_require__.p+"static/media/draggable.789bd1cb.svg",large_number_columns_namespaceObject=__webpack_require__.p+"static/media/large-number-columns.b0a80280.svg",responsive_namespaceObject=__webpack_require__.p+"static/media/responsive.43cd89b3.svg",spacing_row_namespaceObject=__webpack_require__.p+"static/media/spacing-row.02bff9e0.svg",spacing_cell_namespaceObject=__webpack_require__.p+"static/media/spacing-cell.9ad05856.svg",spacing_footer_namespaceObject=__webpack_require__.p+"static/media/spacing-footer.616affe1.svg";function _createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Anatomy",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:anatomy_namespaceObject,alt:"Table Anatomy",style:{marginBottom:20}}),(0,jsx_runtime.jsx)("h3",{children:"1. Toolbar"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Table toolbar is a collection of controls and options that allow users to\ninteract with and manipulate data within a table."})}),(0,jsx_runtime.jsx)("h3",{children:"2. Table head"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Table head provide clear and consistent way to identify the content of each column."})}),(0,jsx_runtime.jsx)("h3",{children:"3. Table body"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Table body contains the actual data rows. It is where the main content of the table resides."})}),(0,jsx_runtime.jsx)("h3",{children:"4. Table footer"}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The table footer is an optional component that appears at the bottom of the table. It can be used to display summary information, totals for columns in the table or pagenations."})})]}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Table Filter",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Depending upon the requirement, filter can be shown inline or on a popover."})}),(0,jsx_runtime.jsx)("h3",{children:"Inline filter"}),(0,jsx_runtime.jsx)("img",{src:inline_filter_namespaceObject,alt:"Table Inline Filter"}),(0,jsx_runtime.jsx)("h3",{children:"Filter shown in popover"}),(0,jsx_runtime.jsx)("img",{src:popover_filter_namespaceObject,alt:"Table Popover Filter"}),(0,jsx_runtime.jsx)("h3",{children:"Filter button"}),(0,jsx_runtime.jsx)("img",{src:button_filter_namespaceObject,alt:"Table Button Filter"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Sort Column",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:sort_column_namespaceObject,alt:"Table Sort Column"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Table State",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:state_default_namespaceObject,alt:"Table State Default"}),(0,jsx_runtime.jsx)("img",{src:state_hover_namespaceObject,alt:"Table State Hover",style:{paddingTop:20}}),(0,jsx_runtime.jsx)("img",{src:state_expanded_namespaceObject,alt:"Table State Expanded",style:{paddingTop:20}})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Table Status",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:status_namespaceObject,alt:"Table Status"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Table Types",style:{paddingTop:20},children:[(0,jsx_runtime.jsx)("img",{src:type_default_namespaceObject,alt:"Table Type Default"}),(0,jsx_runtime.jsx)("img",{src:type_stripe_namespaceObject,alt:"Table Type Stripe",style:{paddingTop:20}})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Draggable Table",style:{paddingTop:20},children:(0,jsx_runtime.jsx)("img",{src:draggable_namespaceObject,alt:"Draggable Table"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Managing the large numbers of columns",children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When a table needs to display data in multiple columns that cannot be\ncovered by the screen, freeze the first few crucial columns so that the\ntable can be scrolled to show the remaining data. The same approach can be\nfollowed for the responsive purpose too."})}),(0,jsx_runtime.jsx)("img",{src:large_number_columns_namespaceObject,alt:"Table Large Number of Columns"})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"Responsive",children:(0,jsx_runtime.jsx)("img",{src:responsive_namespaceObject,alt:"Table Responsive"})}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Spacings",children:[(0,jsx_runtime.jsx)("h3",{children:"Table Row"}),(0,jsx_runtime.jsx)("img",{src:spacing_row_namespaceObject,alt:"Spacing Row"}),(0,jsx_runtime.jsx)("h3",{children:"Table Cell"}),(0,jsx_runtime.jsx)("img",{src:spacing_cell_namespaceObject,alt:"Spacing Cell"}),(0,jsx_runtime.jsx)("h3",{children:"Table Footer"}),(0,jsx_runtime.jsx)("img",{src:spacing_footer_namespaceObject,alt:"Spacing Footer"})]})]})}const TabUsage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};__webpack_require__("./node_modules/assert/build/assert.js");function TabCode_createMdxContent(props){const _components=Object.assign({p:"p"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(docs_src._3,{packageName:"@wpmudev/sui-table"}),"\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Props",border:!0,children:[(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:"The content of the table"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"ariaLabel",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Aria label text for the table to improve accessibility "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"allowCheck",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Determines if the table allows checkable rows with checkboxes."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isDraggable",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:"Determines if the table supports drag-and-drop reordering of rows."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"hasToolbar",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:"Determines if the table has a toolbar."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"noBorderRadius",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"}),", the table will have no border radius"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"noSideBorder",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"}),", the border from the sides will be removed"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"filtersPopover",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"}),", the border from the sides will be removed"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"filters",type:"array",children:(0,jsx_runtime.jsx)("p",{children:"An array of filters that can be used in the table toolbar."})}),(0,jsx_runtime.jsxs)(docs_src.hz,{title:"bulkActions",type:"array",children:[(0,jsx_runtime.jsx)("p",{children:"An array of bulk actions to be displayed in the select element in the toolbar, each item of the array is an object which has the following keys:"}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:"id"}),(0,jsx_runtime.jsx)("span",{label:"label"})]})]}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isStripped",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," The table will have a stripped design"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"onAction",type:"function",children:(0,jsx_runtime.jsx)("p",{children:"Callback function triggered when an action is performed in the table toolbar."})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:"Adds custom css className(s) "})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"stickyCols",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsxs)("p",{children:["Makes columns sticky when set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"showFiltersBtn",type:"boolean",defaultValue:"true",children:(0,jsx_runtime.jsx)("p",{children:"Whether to show the filters' button or not"})})]}),"\n","\n",(0,jsx_runtime.jsxs)(docs_src.wn,{title:"Sub Components",contained:!0,style:{paddingTop:30,paddingBottom:0},children:[(0,jsx_runtime.jsx)("p",{children:"The Table offers a collection of nested subcomponents to be utilized within it. These subcomponents include:"}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"TableHead",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["This component represents the table heading wrapper, it uses the html tag ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"thead"})," under the hood. it has one prop"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"hasActions",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"When true, it reserves space for actions."})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",isRequired:!0,type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the table head"})})})]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"TableBody",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["This component represents the table body wrapper, it uses the html tag ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"tbody"})," under the hood. it has one prop"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the table body"})})})]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"TableFooter",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["This component represents the table footer wrapper, it uses the html tag ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"tfoot"})," under the hood. it has one prop"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the table footer"})})})]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"TableRow",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["This component represents a single row in the table, nested below the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"TableBody"})," component it has the following props"]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"id",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"A unique id for the row"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the row"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isUnderHeader",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Determines if the row is under the table header."})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isExpandable",type:"string",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Determines if the row is expandable (can show additional content when expanded)."})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"expandableContent",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Content to display when the row is expanded (if isExpandable is set to true)."})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"status",type:"string",children:(0,jsx_runtime.jsxs)("p",{children:[(0,jsx_runtime.jsxs)(_components.p,{children:["Status color to appear on the table row.\n",(0,jsx_runtime.jsx)("p",{children:"Allowed Values"})]}),(0,jsx_runtime.jsxs)(docs_src.B8,{children:[(0,jsx_runtime.jsx)("span",{label:"info"}),(0,jsx_runtime.jsx)("span",{label:"success"}),(0,jsx_runtime.jsx)("span",{label:"warning"}),(0,jsx_runtime.jsx)("span",{label:"error"})]})]})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"actions",type:"function",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The actions to be displayed at the last column, the function returns a React Node"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isUnderFooter",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Specifies if the row is under the table footer"})})})]}),(0,jsx_runtime.jsxs)(docs_src.wn,{title:"TableCell",contained:!0,style:{paddingTop:0,paddingLeft:20,paddingRight:0},children:[(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"This component represents a single cell in the table. it has the following props"})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"id",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["Unique identifier for the ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"TableCell"})]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"children",type:"React Node",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"The content of the table cell"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"coldSpan",type:"number",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Specifies the number of columns a cell should span"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isHeading",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:'Render table cell as header cell "th"'})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isSticky",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Makes the cell sticky"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isTrim",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Make cell text single line and trimmable"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isPrimary",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Makes table cell as primary"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"style",type:"object",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Style object for addtional customization"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"hasDragIcon",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Determines if the cell should display a drag icon (Grip icon)"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"className",type:"string",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Additional css className(s) for further styling"})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isSortable",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsxs)(_components.p,{children:["When set to ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"true"})," the cell will be sortable"]})})}),(0,jsx_runtime.jsx)(docs_src.hz,{title:"isAction",type:"boolean",defaultValue:"false",children:(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Indicates if the cell is an Action cell"})})})]})]})]})}const TabCode=function TabCode_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabCode_createMdxContent,props)})):TabCode_createMdxContent(props)},records=[{id:1,title:"Registration Form",tag:"Draft",submission:"April 20, 2022 11:00 am",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:2,title:"Contact Us Form",tag:"Draft",submission:"April 21, 2022 10:30 am",status:"info"},{id:3,title:"Feedback Form",tag:"Draft",submission:"April 22, 2022 10:45 am",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:4,title:"Job Application",tag:"Published",submission:"April 23, 2022 9:15 am",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:5,title:"Subscription Form",tag:"Draft",submission:"April 24, 2022 3:20 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:6,title:"Order Form",tag:"Published",submission:"April 25, 2022 2:00 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:7,title:"Support Request",tag:"Draft",submission:"April 26, 2022 4:45 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:8,title:"Contact Information",tag:"Draft",submission:"April 27, 2022 11:30 am",status:"info"},{id:9,title:"Event Registration",tag:"Published",submission:"April 28, 2022 5:10 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:10,title:"Survey Form",tag:"Draft",submission:"April 29, 2022 9:50 am",status:"info"},{id:11,title:"Product Feedback",tag:"Published",submission:"April 30, 2022 3:30 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:12,title:"Volunteer Registration",tag:"Published",submission:"May 1, 2022 8:15 am",status:"success"},{id:13,title:"Application Form",tag:"Draft",submission:"May 2, 2022 7:20 am",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:14,title:"Membership Application",tag:"Draft",submission:"May 3, 2022 6:45 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:15,title:"Feedback Survey",tag:"Published",submission:"May 4, 2022 5:00 pm",status:"success"},{id:16,title:"Contact Information Update",tag:"Draft",submission:"May 5, 2022 4:10 pm",status:"info"},{id:17,title:"Event Feedback",tag:"Published",submission:"May 6, 2022 3:25 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:18,title:"Product Inquiry",tag:"Draft",submission:"May 7, 2022 2:40 pm",status:"info"},{id:19,title:"Customer Support Request",tag:"Published",submission:"May 8, 2022 1:55 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:20,title:"Demo Request",tag:"Draft",submission:"May 9, 2022 11:30 am",status:"info"},{id:21,title:"Quote Request",tag:"Published",submission:"May 10, 2022 10:45 am",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:22,title:"Customer Feedback",tag:"Published",submission:"May 11, 2022 9:20 am",status:"success"},{id:23,title:"Service Inquiry",tag:"Draft",submission:"May 12, 2022 8:00 am",status:"info"},{id:24,title:"Product Review",tag:"Published",submission:"May 13, 2022 7:30 am",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:25,title:"Bug Report",tag:"Draft",submission:"May 14, 2022 6:45 am",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:26,title:"Feature Request",tag:"Draft",submission:"May 15, 2022 5:15 am",status:"info"},{id:27,title:"Partnership Inquiry",tag:"Published",submission:"May 16, 2022 4:30 am",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:28,title:"Content Submission",tag:"Draft",submission:"May 17, 2022 3:45 am",status:"info"},{id:29,title:"Event RSVP",tag:"Published",submission:"May 18, 2022 3:00 am",status:"success"},{id:30,title:"Product Warranty Claim",tag:"Draft",submission:"May 19, 2022 2:15 am",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:31,title:"Technical Support Request",tag:"Published",submission:"May 20, 2022 1:30 am",status:"success"},{id:32,title:"Survey Feedback",tag:"Draft",submission:"May 21, 2022 12:45 am",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:33,title:"Product Recall Request",tag:"Draft",submission:"May 22, 2022 12:00 am",status:"info"},{id:34,title:"Quote Inquiry",tag:"Published",submission:"May 23, 2022 11:15 pm",status:"success"},{id:35,title:"Customer Satisfaction Survey",tag:"Draft",submission:"May 24, 2022 10:30 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:36,title:"Content Licensing Request",tag:"Draft",submission:"May 25, 2022 9:45 pm",status:"info"},{id:37,title:"Product Inquiry",tag:"Draft",submission:"May 26, 2022 9:00 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:38,title:"Complaint Form",tag:"Draft",submission:"May 27, 2022 8:15 pm",status:"info"},{id:39,title:"Membership Renewal",tag:"Published",submission:"May 28, 2022 7:30 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:40,title:"Product Return Request",tag:"Draft",submission:"May 29, 2022 6:45 pm",status:"info"},{id:41,title:"Demo Request",tag:"Published",submission:"May 30, 2022 6:00 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:42,title:"Quote Request",tag:"Draft",submission:"May 31, 2022 5:15 pm",status:"info"},{id:43,title:"Customer Feedback",tag:"Draft",submission:"June 1, 2022 4:30 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:44,title:"Service Inquiry",tag:"Draft",submission:"June 2, 2022 3:45 pm",status:"info",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:45,title:"Product Review",tag:"Published",submission:"June 3, 2022 3:00 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:46,title:"Bug Report",tag:"Published",submission:"June 4, 2022 2:15 pm",status:"success",props:{isExpandable:!0,expandableContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"}},{id:47,title:"Feature Request",tag:"Draft",submission:"June 5, 2022 1:30 pm",status:"info"}],tableItems=(0,utils_src.ln)(records,5),TableExample=({...props})=>{const[tempRows,setTempRows]=(0,react.useState)([]),[rows,setRows]=(0,react.useState)([]),[page,setPage]=(0,react.useState)(1);(0,react.useEffect)((()=>{setRows(tableItems?.[0]),setTempRows(tableItems?.[0])}),[]),(0,react.useEffect)((()=>{setRows(tableItems?.[page-1])}),[page]);return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)(src.XI,{stickyCols:!0,onAction:(actionType,data)=>{let dRows=[...rows];switch(actionType){case"bulk-action":case"apply-filters":case"sort-rows":break;case"search-items":dRows=tempRows.filter((item=>item.title.includes(data))),dRows=data?dRows:tempRows;break;case"sort-columns":const{column,order}=data;dRows.sort(((a,b)=>"desc"===order?b[column]?.localeCompare(a[column]):a[column]?.localeCompare(b[column])))}setRows([...dRows])},...props,children:[(0,jsx_runtime.jsx)(src.nd,{children:(0,jsx_runtime.jsxs)(src.Hj,{actions:()=>null,children:[(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,isSortable:!1,isPrimary:!0,id:"id",children:"ID"}),(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,isSortable:!0,id:"title",children:"Form name"}),(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,id:"tag",isSortable:!0,children:"Status"}),(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,id:"submission",isSortable:!0,children:"Last Submission"})]})}),(0,jsx_runtime.jsx)(src.BF,{children:rows?.map(((record,index)=>(0,jsx_runtime.jsxs)(src.Hj,{id:record.id,isExpandable:record?.props?.isExpandable,expandableContent:record?.props?.expandableContent,status:record?.status,actions:({id,content})=>((_id,content)=>(0,jsx_runtime.jsxs)("div",{style:{alignItems:"center",display:"flex",justifyContent:"end"},children:[(0,jsx_runtime.jsx)(button_src.$,{icon:"Edit",colorScheme:"black",type:"tertiary",isSmall:!0,iconOnly:!0}),(0,jsx_runtime.jsx)(button_src.$,{icon:"Settings",colorScheme:"black",type:"tertiary",isSmall:!0,iconOnly:!0}),content]}))(0,content),children:[(0,jsx_runtime.jsx)(src.nA,{children:(0,jsx_runtime.jsxs)("strong",{children:["#",record.id]})}),(0,jsx_runtime.jsx)(src.nA,{isTrim:!0,children:(0,jsx_runtime.jsx)("strong",{children:record.title})}),(0,jsx_runtime.jsx)(src.nA,{children:(0,jsx_runtime.jsx)(tag_src.v,{colorScheme:"Published"===record.tag?"blue":"default",children:record.tag})}),(0,jsx_runtime.jsx)(src.nA,{children:record.submission})]},index)))}),(0,jsx_runtime.jsx)(src.Gg,{children:(0,jsx_runtime.jsx)(src.Hj,{id:"0",children:(0,jsx_runtime.jsx)(src.nA,{children:(0,jsx_runtime.jsx)(pagination_src.d,{limit:5,numberOfItems:records.length,onChange:setPage})})})})]})})})};var dedent=__webpack_require__("./node_modules/dedent/dist/dedent.js"),dedent_default=__webpack_require__.n(dedent);function Stripe_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.wn,{border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isStripped={true}"})," to display the table in stripe style "]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(TableExample,{hasToolbar:!1,isStripped:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode("isStripped={true}")})]})}const Stripe=function Stripe_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Stripe_createMdxContent,props)})):Stripe_createMdxContent()};function Selection_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.wn,{border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"allowCheck={true}"})," to allow rows selection "]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(TableExample,{hasToolbar:!1,allowCheck:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode("allowCheck={true}")})]})}const Selection=function Selection_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Selection_createMdxContent,props)})):Selection_createMdxContent()};function Drag_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.wn,{border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"isDraggable={true}"})," to allow rows to be dragged "]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(TableExample,{hasToolbar:!1,isDraggable:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode("isDraggable={true}")})]})}const Drag=function Drag_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Drag_createMdxContent,props)})):Drag_createMdxContent()};function Toolbar_createMdxContent(props){return(0,jsx_runtime.jsxs)(docs_src.wn,{border:!0,style:{paddingRight:0,paddingLeft:0},children:[(0,jsx_runtime.jsxs)("p",{children:["Set the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"hasToolbar={true}"})," to display the toolbar "]}),(0,jsx_runtime.jsxs)("p",{children:["You can use the prop ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"bulkActions"})," to display actions that will be applied to all selected rows "]}),(0,jsx_runtime.jsxs)("p",{children:["Also, you can set ",(0,jsx_runtime.jsx)(docs_src.Cy,{small:!0,children:"filtersPopover={true}"})," to show the filters in a Popover instead of an expanded area"]}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(TableExample,{bulkActions:[{id:"delete",label:"Delete"},{id:"publish",label:"Publish"}],hasToolbar:!0})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode('hasToolbar={true} bulkActions={[\n        {\n            id: "delete",\n            label: "Delete",\n        },\n        {\n            id: "publish",\n            label: "Publish",\n        },\n    ]}')})]})}const Toolbar=function Toolbar_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Toolbar_createMdxContent,props)})):Toolbar_createMdxContent()},generalCode=(props="")=>dedent_default()`
  import React, { useEffect, useState } from "react"

// Import required component
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableRow,
} from "@wpmudev/sui-table"

import { Tag } from "@wpmudev/sui-tag"
import { Button } from "@wpmudev/sui-button"
import { Pagination } from "@wpmudev/sui-pagination"
import { chunkArray } from "@wpmudev/sui-utils"

const records = [
    {
        id: 1,
        title: "Registration Form",
        tag: "Draft",
        submission: "April 20, 2022 11:00 am",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 2,
        title: "Contact Us Form",
        tag: "Draft",
        submission: "April 21, 2022 10:30 am",
        status: "info",
    },
    {
        id: 3,
        title: "Feedback Form",
        tag: "Draft",
        submission: "April 22, 2022 10:45 am",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 4,
        title: "Job Application",
        tag: "Published",
        submission: "April 23, 2022 9:15 am",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 5,
        title: "Subscription Form",
        tag: "Draft",
        submission: "April 24, 2022 3:20 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 6,
        title: "Order Form",
        tag: "Published",
        submission: "April 25, 2022 2:00 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 7,
        title: "Support Request",
        tag: "Draft",
        submission: "April 26, 2022 4:45 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 8,
        title: "Contact Information",
        tag: "Draft",
        submission: "April 27, 2022 11:30 am",
        status: "info",
    },
    {
        id: 9,
        title: "Event Registration",
        tag: "Published",
        submission: "April 28, 2022 5:10 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 10,
        title: "Survey Form",
        tag: "Draft",
        submission: "April 29, 2022 9:50 am",
        status: "info",
    },
    {
        id: 11,
        title: "Product Feedback",
        tag: "Published",
        submission: "April 30, 2022 3:30 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 12,
        title: "Volunteer Registration",
        tag: "Published",
        submission: "May 1, 2022 8:15 am",
        status: "success",
    },
    {
        id: 13,
        title: "Application Form",
        tag: "Draft",
        submission: "May 2, 2022 7:20 am",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 14,
        title: "Membership Application",
        tag: "Draft",
        submission: "May 3, 2022 6:45 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 15,
        title: "Feedback Survey",
        tag: "Published",
        submission: "May 4, 2022 5:00 pm",
        status: "success",
    },
    {
        id: 16,
        title: "Contact Information Update",
        tag: "Draft",
        submission: "May 5, 2022 4:10 pm",
        status: "info",
    },
    {
        id: 17,
        title: "Event Feedback",
        tag: "Published",
        submission: "May 6, 2022 3:25 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 18,
        title: "Product Inquiry",
        tag: "Draft",
        submission: "May 7, 2022 2:40 pm",
        status: "info",
    },
    {
        id: 19,
        title: "Customer Support Request",
        tag: "Published",
        submission: "May 8, 2022 1:55 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 20,
        title: "Demo Request",
        tag: "Draft",
        submission: "May 9, 2022 11:30 am",
        status: "info",
    },
    {
        id: 21,
        title: "Quote Request",
        tag: "Published",
        submission: "May 10, 2022 10:45 am",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 22,
        title: "Customer Feedback",
        tag: "Published",
        submission: "May 11, 2022 9:20 am",
        status: "success",
    },
    {
        id: 23,
        title: "Service Inquiry",
        tag: "Draft",
        submission: "May 12, 2022 8:00 am",
        status: "info",
    },
    {
        id: 24,
        title: "Product Review",
        tag: "Published",
        submission: "May 13, 2022 7:30 am",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 25,
        title: "Bug Report",
        tag: "Draft",
        submission: "May 14, 2022 6:45 am",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 26,
        title: "Feature Request",
        tag: "Draft",
        submission: "May 15, 2022 5:15 am",
        status: "info",
    },
    {
        id: 27,
        title: "Partnership Inquiry",
        tag: "Published",
        submission: "May 16, 2022 4:30 am",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 28,
        title: "Content Submission",
        tag: "Draft",
        submission: "May 17, 2022 3:45 am",
        status: "info",
    },
    {
        id: 29,
        title: "Event RSVP",
        tag: "Published",
        submission: "May 18, 2022 3:00 am",
        status: "success",
    },
    {
        id: 30,
        title: "Product Warranty Claim",
        tag: "Draft",
        submission: "May 19, 2022 2:15 am",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 31,
        title: "Technical Support Request",
        tag: "Published",
        submission: "May 20, 2022 1:30 am",
        status: "success",
    },
    {
        id: 32,
        title: "Survey Feedback",
        tag: "Draft",
        submission: "May 21, 2022 12:45 am",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 33,
        title: "Product Recall Request",
        tag: "Draft",
        submission: "May 22, 2022 12:00 am",
        status: "info",
    },
    {
        id: 34,
        title: "Quote Inquiry",
        tag: "Published",
        submission: "May 23, 2022 11:15 pm",
        status: "success",
    },
    {
        id: 35,
        title: "Customer Satisfaction Survey",
        tag: "Draft",
        submission: "May 24, 2022 10:30 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 36,
        title: "Content Licensing Request",
        tag: "Draft",
        submission: "May 25, 2022 9:45 pm",
        status: "info",
    },
    {
        id: 37,
        title: "Product Inquiry",
        tag: "Draft",
        submission: "May 26, 2022 9:00 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 38,
        title: "Complaint Form",
        tag: "Draft",
        submission: "May 27, 2022 8:15 pm",
        status: "info",
    },
    {
        id: 39,
        title: "Membership Renewal",
        tag: "Published",
        submission: "May 28, 2022 7:30 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 40,
        title: "Product Return Request",
        tag: "Draft",
        submission: "May 29, 2022 6:45 pm",
        status: "info",
    },
    {
        id: 41,
        title: "Demo Request",
        tag: "Published",
        submission: "May 30, 2022 6:00 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 42,
        title: "Quote Request",
        tag: "Draft",
        submission: "May 31, 2022 5:15 pm",
        status: "info",
    },
    {
        id: 43,
        title: "Customer Feedback",
        tag: "Draft",
        submission: "June 1, 2022 4:30 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 44,
        title: "Service Inquiry",
        tag: "Draft",
        submission: "June 2, 2022 3:45 pm",
        status: "info",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 45,
        title: "Product Review",
        tag: "Published",
        submission: "June 3, 2022 3:00 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 46,
        title: "Bug Report",
        tag: "Published",
        submission: "June 4, 2022 2:15 pm",
        status: "success",
        props: {
            isExpandable: true,
            expandableContent: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s",
        },
    },
    {
        id: 47,
        title: "Feature Request",
        tag: "Draft",
        submission: "June 5, 2022 1:30 pm",
        status: "info",
    },
]

const itemsPerPage = 5
// break array into page chunks
const tableItems = chunkArray(records, itemsPerPage)

// Build "Field List" story
export const TableExample = ({ ...props }) => {
    const [tempRows, setTempRows] = useState<Record<string, any>>([])
    const [rows, setRows] = useState<Record<string, any>>([])
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        setRows(tableItems?.[0])
        setTempRows(tableItems?.[0])
    }, [])

    useEffect(() => {
        setRows(tableItems?.[page - 1])
    }, [page])

    const action = (id, content) => {
        return (
            <div
                style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "end",
                }}
            >
                <Button
                    icon="Edit"
                    color="black"
                    type="tertiary"
                    isSmall={true}
                    iconOnly={true}
                />
                <Button
                    icon="Settings"
                    color="black"
                    type="tertiary"
                    isSmall={true}
                    iconOnly={true}
                />
                {content}
            </div>
        )
    }

    return (
        <div className="sui-layout sui-layout--horizontal sui-layout--vertical">
            <div className="sui-layout__content">
                <Table
                    ${props}
                    ${"hasToolbar={true}"!==props?"hasToolbar={false}":""}
                    stickyCols={true}
                    onAction={(actionType, data) => {
                        let dRows: Record<string, any> = [...rows]

                        switch (actionType) {
                            case "bulk-action":
                            case "apply-filters":
                                break
                            // Drag and Drop
                            case "sort-rows":
                                dRows = data.map((id) => rows.find((item) => item.id === id))
                                break
                            case "search-items":
                                dRows = tempRows.filter((item) =>
                                   item.title.includes(data as string),
                                 )
                                dRows = "" !== data ? dRows : tempRows
                                break
                                case "sort-columns":
                                const { column, order } = data as {
                                    column: string | number
                                    order: string
                                }

                                // sort
                                dRows.sort((a, b) =>
                                    "desc" === order
                                        ? b[column]?.localeCompare(a[column])
                                        : a[column]?.localeCompare(b[column]),
                                )
                                break
                        }

                        // set state
                        setRows([...dRows])
                    }}
                    {...props}
                >
                    <TableHead>
                        <TableRow actions={() => null}>
                            <TableCell
                                isHeading={true}
                                isSortable={false}
                                isPrimary={true}
                                id="id"
                            >
                                ID
                            </TableCell>
                            <TableCell isHeading={true} isSortable={true} id="title">
                                Form name
                            </TableCell>
                            <TableCell isHeading={true} id="tag" isSortable={true}>
                                Status
                            </TableCell>
                            <TableCell isHeading={true} id="submission" isSortable={true}>
                                Last Submission
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows?.map((record, index) => (
                            <TableRow
                                key={index}
                                id={record.id}
                                isExpandable={record?.props?.isExpandable}
                                expandableContent={record?.props?.expandableContent}
                                status={record?.status}
                                actions={({ id, content }) => action(id, content)}
                            >
                                <TableCell>
                                    <strong>#{record.id}</strong>
                                </TableCell>
                                <TableCell isTrim={true}>
                                    <strong>{record.title}</strong>
                                </TableCell>
                                <TableCell>
                                    <Tag color={"Published" === record.tag ? "blue" : "default"}>
                                        {record.tag}
                                    </Tag>
                                </TableCell>
                                <TableCell>{record.submission}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow id="0">
                            <TableCell>
                                <Pagination
                                    limit={itemsPerPage}
                                    numberOfItems={records.length}
                                    onChange={setPage}
                                />
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>
    )
}
`;function TabExamples_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\n","\n","\n",(0,jsx_runtime.jsxs)(docs_src.wn,{style:{paddingTop:30},children:[(0,jsx_runtime.jsx)("p",{children:"A basic table example with actions"}),(0,jsx_runtime.jsx)(docs_src.lN,{wrapper:!0,children:(0,jsx_runtime.jsx)(TableExample,{hasToolbar:!1})}),(0,jsx_runtime.jsx)(docs_src.YK,{language:"js",children:generalCode()})]}),"\n",(0,jsx_runtime.jsx)(docs_src.wn,{title:"State",style:{paddingTop:0},children:(0,jsx_runtime.jsxs)(docs_src.ij,{children:[(0,jsx_runtime.jsx)("div",{label:"Stripe",value:"stripe",children:(0,jsx_runtime.jsx)(Stripe,{})}),(0,jsx_runtime.jsx)("div",{label:"Selection",value:"selection",children:(0,jsx_runtime.jsx)(Selection,{})}),(0,jsx_runtime.jsx)("div",{label:"Drag",value:"drag",children:(0,jsx_runtime.jsx)(Drag,{})}),(0,jsx_runtime.jsx)("div",{label:"Toolbar",value:"toolbar",children:(0,jsx_runtime.jsx)(Toolbar,{})})]})})]})}const TabExamples=function TabExamples_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(TabExamples_createMdxContent,props)})):TabExamples_createMdxContent()};function ReactTable_createMdxContent(props){return docs_src.YW||_missingMdxReference("Page",!1),docs_src.YW.Tabs||_missingMdxReference("Page.Tabs",!0),(0,jsx_runtime.jsx)(dist.di,{children:(0,jsx_runtime.jsxs)(docs_src.YW.Tabs,{title:"Table",subtitle:"Tables are used to present structured data in a tabular format.",status:"ready",children:[(0,jsx_runtime.jsx)("div",{id:"usage",label:"Usage",children:(0,jsx_runtime.jsx)(TabUsage,{})}),(0,jsx_runtime.jsx)("div",{id:"code",label:"Code",children:(0,jsx_runtime.jsx)(TabCode,{})}),(0,jsx_runtime.jsx)("div",{id:"examples",label:"Examples",children:(0,jsx_runtime.jsx)(TabExamples,{})})]})})}const ReactTable=function ReactTable_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(ReactTable_createMdxContent,props)})):ReactTable_createMdxContent()};function _missingMdxReference(id,component){throw new Error("Expected "+(component?"component":"object")+" `"+id+"` to be defined: you likely forgot to import, pass, or provide it.")}var box_src=__webpack_require__("./packages/ui/box/src/index.ts");const Table_stories={title:"SUI/Components/Modules/Table",parameters:{layout:"fullscreen",docs:{page:ReactTable}}},Table_stories_records=[{id:1,title:"Registration Form",tag:"Draft",submission:"April 20, 2022 11:00 am",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:2,title:"Contact Us Form",tag:"Draft",submission:"April 21, 2022 10:30 am",status:"info"},{id:3,title:"Feedback Form",tag:"Draft",submission:"April 22, 2022 10:45 am",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:4,title:"Job Application",tag:"Published",submission:"April 23, 2022 9:15 am",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:5,title:"Subscription Form",tag:"Draft",submission:"April 24, 2022 3:20 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:6,title:"Order Form",tag:"Published",submission:"April 25, 2022 2:00 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:7,title:"Support Request",tag:"Draft",submission:"April 26, 2022 4:45 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:8,title:"Contact Information",tag:"Draft",submission:"April 27, 2022 11:30 am",status:"info"},{id:9,title:"Event Registration",tag:"Published",submission:"April 28, 2022 5:10 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:10,title:"Survey Form",tag:"Draft",submission:"April 29, 2022 9:50 am",status:"info"},{id:11,title:"Product Feedback",tag:"Published",submission:"April 30, 2022 3:30 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:12,title:"Volunteer Registration",tag:"Published",submission:"May 1, 2022 8:15 am",status:"success"},{id:13,title:"Application Form",tag:"Draft",submission:"May 2, 2022 7:20 am",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:14,title:"Membership Application",tag:"Draft",submission:"May 3, 2022 6:45 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:15,title:"Feedback Survey",tag:"Published",submission:"May 4, 2022 5:00 pm",status:"success"},{id:16,title:"Contact Information Update",tag:"Draft",submission:"May 5, 2022 4:10 pm",status:"info"},{id:17,title:"Event Feedback",tag:"Published",submission:"May 6, 2022 3:25 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:18,title:"Product Inquiry",tag:"Draft",submission:"May 7, 2022 2:40 pm",status:"info"},{id:19,title:"Customer Support Request",tag:"Published",submission:"May 8, 2022 1:55 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:20,title:"Demo Request",tag:"Draft",submission:"May 9, 2022 11:30 am",status:"info"},{id:21,title:"Quote Request",tag:"Published",submission:"May 10, 2022 10:45 am",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s"})})}},{id:22,title:"Customer Feedback",tag:"Published",submission:"May 11, 2022 9:20 am",status:"success"},{id:23,title:"Service Inquiry",tag:"Draft",submission:"May 12, 2022 8:00 am",status:"info"},{id:24,title:"Product Review",tag:"Published",submission:"May 13, 2022 7:30 am",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:25,title:"Bug Report",tag:"Draft",submission:"May 14, 2022 6:45 am",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:26,title:"Feature Request",tag:"Draft",submission:"May 15, 2022 5:15 am",status:"info"},{id:27,title:"Partnership Inquiry",tag:"Published",submission:"May 16, 2022 4:30 am",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:28,title:"Content Submission",tag:"Draft",submission:"May 17, 2022 3:45 am",status:"info"},{id:29,title:"Event RSVP",tag:"Published",submission:"May 18, 2022 3:00 am",status:"success"},{id:30,title:"Product Warranty Claim",tag:"Draft",submission:"May 19, 2022 2:15 am",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:31,title:"Technical Support Request",tag:"Published",submission:"May 20, 2022 1:30 am",status:"success"},{id:32,title:"Survey Feedback",tag:"Draft",submission:"May 21, 2022 12:45 am",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:33,title:"Product Recall Request",tag:"Draft",submission:"May 22, 2022 12:00 am",status:"info"},{id:34,title:"Quote Inquiry",tag:"Published",submission:"May 23, 2022 11:15 pm",status:"success"},{id:35,title:"Customer Satisfaction Survey",tag:"Draft",submission:"May 24, 2022 10:30 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:36,title:"Content Licensing Request",tag:"Draft",submission:"May 25, 2022 9:45 pm",status:"info"},{id:37,title:"Product Inquiry",tag:"Draft",submission:"May 26, 2022 9:00 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:38,title:"Complaint Form",tag:"Draft",submission:"May 27, 2022 8:15 pm",status:"info"},{id:39,title:"Membership Renewal",tag:"Published",submission:"May 28, 2022 7:30 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:40,title:"Product Return Request",tag:"Draft",submission:"May 29, 2022 6:45 pm",status:"info"},{id:41,title:"Demo Request",tag:"Published",submission:"May 30, 2022 6:00 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:42,title:"Quote Request",tag:"Draft",submission:"May 31, 2022 5:15 pm",status:"info"},{id:43,title:"Customer Feedback",tag:"Draft",submission:"June 1, 2022 4:30 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:44,title:"Service Inquiry",tag:"Draft",submission:"June 2, 2022 3:45 pm",status:"info",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:45,title:"Product Review",tag:"Published",submission:"June 3, 2022 3:00 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:46,title:"Bug Report",tag:"Published",submission:"June 4, 2022 2:15 pm",status:"success",props:{isExpandable:!0,expandableContent:(0,jsx_runtime.jsx)(box_src.a,{children:(0,jsx_runtime.jsx)(box_src.V,{isInline:!1,children:"`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s`,"})})}},{id:47,title:"Feature Request",tag:"Draft",submission:"June 5, 2022 1:30 pm",status:"info"}],Table_stories_tableItems=(0,utils_src.ln)(Table_stories_records,5),Table=({...args})=>{const[tempRows,setTempRows]=(0,react.useState)([]),[rows,setRows]=(0,react.useState)([]),[page,setPage]=(0,react.useState)(1);(0,react.useEffect)((()=>{setRows(Table_stories_tableItems?.[0]),setTempRows(Table_stories_tableItems?.[0])}),[]),(0,react.useEffect)((()=>{setRows(Table_stories_tableItems?.[page-1])}),[page]);return(0,jsx_runtime.jsx)("div",{className:"sui-layout sui-layout--horizontal sui-layout--vertical",children:(0,jsx_runtime.jsx)("div",{className:"sui-layout__content",children:(0,jsx_runtime.jsxs)(src.XI,{...args,stickyCols:!0,_htmlProps:{disabled:!0},onAction:(actionType,data)=>{let dRows=[...rows];switch(actionType){case"bulk-action":case"apply-filters":break;case"sort-rows":dRows=data.map((id=>rows.find((item=>item.id===id))));break;case"search-items":dRows=tempRows.filter((item=>item.title.includes(data))),dRows=""!==data?dRows:tempRows;break;case"sort-columns":const{column,order}=data;dRows.sort(((a,b)=>"desc"===order?b[column]?.localeCompare(a[column]):a[column]?.localeCompare(b[column])))}setRows([...dRows])},children:[(0,jsx_runtime.jsx)(src.nd,{children:(0,jsx_runtime.jsxs)(src.Hj,{actions:()=>null,children:[(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,isSortable:!1,isPrimary:!0,id:"id",children:"ID"}),(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,isSortable:!0,id:"title",children:"Form name"}),(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,id:"tag",isSortable:!0,children:"Status"}),(0,jsx_runtime.jsx)(src.nA,{isHeading:!0,id:"submission",isSortable:!0,children:"Last Submission"})]})}),(0,jsx_runtime.jsx)(src.BF,{children:rows?.map(((record,index)=>(0,jsx_runtime.jsxs)(src.Hj,{id:record.id,isExpandable:record?.props?.isExpandable,expandableContent:record?.props?.expandableContent,status:record?.status,actions:({id,content})=>((_id,content)=>(0,jsx_runtime.jsxs)("div",{style:{alignItems:"center",display:"flex",justifyContent:"end"},children:[(0,jsx_runtime.jsx)(button_src.$,{icon:"Edit",colorScheme:"black",type:"tertiary",isSmall:!0,iconOnly:!0,children:"Edit"}),(0,jsx_runtime.jsx)(button_src.$,{icon:"Settings",colorScheme:"black",type:"tertiary",isSmall:!0,iconOnly:!0,children:"Settings"}),content]}))(0,content),children:[(0,jsx_runtime.jsx)(src.nA,{children:(0,jsx_runtime.jsxs)("strong",{children:["#",record.id]})}),(0,jsx_runtime.jsx)(src.nA,{isTrim:!0,children:(0,jsx_runtime.jsx)("strong",{children:record.title})}),(0,jsx_runtime.jsx)(src.nA,{children:(0,jsx_runtime.jsx)(tag_src.v,{colorScheme:"Published"===record.tag?"blue":"default",children:record.tag})}),(0,jsx_runtime.jsx)(src.nA,{children:record.submission})]},index)))}),(0,jsx_runtime.jsx)(src.Gg,{children:(0,jsx_runtime.jsx)(src.Hj,{id:"0",children:(0,jsx_runtime.jsx)(src.nA,{children:(0,jsx_runtime.jsx)(pagination_src.d,{limit:5,numberOfItems:Table_stories_records.length,onChange:setPage})})})})]})})})};Table.args={allowCheck:!0,isDraggable:!0,hasToolbar:!0,ariaLabel:"",bulkActions:[{id:"delete",label:"Delete"},{id:"publish",label:"Publish"}],showFiltersBtn:!0,filters:[{id:"sort-by",type:"select",title:"Sort By",value:"id",props:{id:"sort-by",isSmall:!0,options:[{id:"id",label:"ID"},{id:"form-name",label:"Form name"},{id:"status",label:"Status"},{id:"last-submission",label:"Last Submission"}]}},{id:"form-name",type:"select",title:"Form name",value:"option-1",props:{id:"form-name",isSmall:!0,options:Table_stories_records.map((record=>({id:record.id,label:record.title})))}},{id:"status",type:"select",title:"Status",value:"1",props:{id:"sort-by",isSmall:!0,options:[{id:"draft",label:"Draft"},{id:"published",label:"Published"}]}},{id:"last-submission",type:"text",title:"Last Submission",value:"1",props:{isSmall:!0}}],filtersPopover:!0,isStripped:!1},Table.argTypes={ariaLabel:{name:"Aria Label",control:{type:"text"}},showFiltersBtn:{name:"Show Filter Button",control:{type:"boolean"},if:{arg:"hasToolbar",eq:!0}},allowCheck:{name:"Allow select",control:"boolean"},isDraggable:{name:"Allow drag",control:"boolean"},hasToolbar:{name:"Toolbar",control:"boolean"},bulkActions:{name:"Bulk Actions"},filters:{name:"Filters",if:{arg:"hasToolbar",eq:!0}},filtersPopover:{name:"Filter Popover",control:{type:"boolean"},if:{arg:"hasToolbar",eq:!0}},isStripped:{name:"Stripe",control:{type:"boolean"}}};const __namedExportsOrder=["Table"]},"./packages/ui/pagination/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>_pagination__WEBPACK_IMPORTED_MODULE_0__.d});var _pagination__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/ui/pagination/src/pagination.tsx");__webpack_require__("./packages/ui/pagination/src/pagination-nav.tsx")},"./packages/ui/pagination/src/pagination-nav.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>PaginationNav});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./packages/ui/button/src/index.ts")),_wpmudev_sui_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/ui/tooltip/src/index.ts"),_wpmudev_sui_hooks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/hooks/src/index.ts"),_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/utils/src/index.ts");const PaginationNav=({pagesArray,elements,selectedPage,handlePreviousPage,handleSkipToFirstPage,handleSkipToLastPage,handlePreviousEllipsis,handlePageClick,handleNextEllipsis,handleNextPage,previousLabel="Go to previous page",nextLabel="Go to next page",startIndex,endIndex,pages,skip,_style={}})=>{const{suiInlineClassname}=(0,_wpmudev_sui_hooks__WEBPACK_IMPORTED_MODULE_4__.IS)(_style);return pagesArray.length<1?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:(0,_wpmudev_sui_utils__WEBPACK_IMPORTED_MODULE_5__.n0)("sui-pagination",{},suiInlineClassname),"data-testid":"pagination",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul",{className:"sui-pagination__nav",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{buttonProps:{type:"tertiary",colorScheme:"black",iconOnly:!0,isSmall:!0,isDisabled:selectedPage<=1,_htmlProps:{"data-testid":"pagination-prev-page"}},className:"sui-pagination__button",icon:"ChevronLeft",onClick:handlePreviousPage,"aria-label":previousLabel,children:previousLabel})}),startIndex>1&&skip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{className:"sui-pagination__button",colorScheme:"black",type:"tertiary",isSmall:!0,isDisabled:selectedPage<=1,onClick:handleSkipToFirstPage,children:"1"})}),startIndex>0&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",icon:"More",iconOnly:!0,isSmall:!0,className:"sui-pagination__button",onClick:handlePreviousEllipsis,children:"Skip pages"})}),pagesArray?.slice(startIndex,endIndex)?.map(((data,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",isSmall:!0,className:"sui-pagination__button"+(selectedPage===data?" sui-pagination__button--active":""),onClick:()=>handlePageClick(Math.floor(data)),"data-testid":"pagination-item",children:data})},index))),endIndex<pages-1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",icon:"More",iconOnly:!0,isSmall:!0,className:"sui-pagination__button",onClick:handleNextEllipsis,children:"Skip pages"})}),endIndex<pages&&skip&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_button__WEBPACK_IMPORTED_MODULE_2__.$,{colorScheme:"black",type:"tertiary",isSmall:!0,className:"sui-pagination__button",isDisabled:selectedPage>=pages,onClick:handleSkipToLastPage,children:pagesArray.length})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li",{className:"sui-pagination__item",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_wpmudev_sui_tooltip__WEBPACK_IMPORTED_MODULE_3__.m,{buttonProps:{type:"tertiary",colorScheme:"black",iconOnly:!0,isSmall:!0,isDisabled:selectedPage>=pages,_htmlProps:{"data-testid":"pagination-next-page"}},className:"sui-pagination__button",icon:"ChevronRight",onClick:handleNextPage,"aria-label":nextLabel,children:nextLabel})})]})})}},"./packages/ui/pagination/src/pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>Pagination});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_pagination_nav__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/pagination/src/pagination-nav.tsx");const Pagination=({limit=5,skip,previousLabel="Previous label",nextLabel="Next label",numberOfItems=20,onChange,hideOnSinglePage=!1,...props})=>{if(0===numberOfItems)throw new Error("Shared UI - Components: Pagination, 'numberOfItems' prop should not be 0.");const pages=Math.ceil(numberOfItems/limit),newEndIndex=pages<=5?5:3,[pagesArray,setPagesArray]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),[selectedPage,setSelectedPage]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1),[startIndex,setStartIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[endIndex,setEndIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.min(newEndIndex,pages)),[pageClickCounter,setPageClickCounter]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[elementsStartIndex,setElementsStartIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),[elementsEndIndex,setElementsEndIndex]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(limit),decrementIndexes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{selectedPage-1<=startIndex+1&&0!==startIndex&&(setStartIndex(startIndex-1),setEndIndex(endIndex-1))}),[selectedPage,startIndex,endIndex]),incrementIndexes=(0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((()=>{selectedPage+1>=endIndex&&endIndex!==pages&&(setStartIndex(startIndex+1),setEndIndex(endIndex+1))}),[selectedPage,startIndex,endIndex,pages]);(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{const pageNumbers=[];for(let i=1;i<=pages;++i)pageNumbers.push(i);setPagesArray(pageNumbers)}),[pages]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{onChange&&onChange(selectedPage)}),[onChange,selectedPage]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{selectedPage>=endIndex&&incrementIndexes(),selectedPage<=startIndex+1&&decrementIndexes()}),[pageClickCounter,incrementIndexes,decrementIndexes,endIndex,startIndex,selectedPage]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{1!==selectedPage&&(setElementsStartIndex(selectedPage*limit-limit),setElementsEndIndex(selectedPage*limit))}),[selectedPage,limit]);const properties={elementsStartIndex,elementsEndIndex,handlePageClick:page=>{setSelectedPage(page??1),setPageClickCounter(pageClickCounter+1)},handleNextEllipsis:()=>{const newStartIndex=Math.min(startIndex+newEndIndex,pages-newEndIndex);setStartIndex(newStartIndex),setEndIndex(startIndex>=newEndIndex?endIndex+newEndIndex:endIndex+(newStartIndex-startIndex)),setSelectedPage(startIndex>=newEndIndex?startIndex+(newEndIndex+1):newStartIndex+1)},handlePreviousEllipsis:()=>{const newStartIndex=Math.max(0,startIndex-newEndIndex);setStartIndex(newStartIndex),setEndIndex(startIndex>=newEndIndex?endIndex-newEndIndex:endIndex-startIndex),setSelectedPage(startIndex>=newEndIndex?startIndex-(newEndIndex-1):1)},handleNextPage:()=>{selectedPage<pages&&setSelectedPage(selectedPage+1),incrementIndexes()},handlePreviousPage:()=>{selectedPage>1&&setSelectedPage(selectedPage-1),decrementIndexes()},handleSkipToLastPage:()=>{setSelectedPage(pages),setStartIndex(Math.max(0,pages-newEndIndex)),setEndIndex(pages)},handleSkipToFirstPage:()=>{setSelectedPage(1),setStartIndex(0),setEndIndex(Math.min(newEndIndex,pages))},pagesArray,selectedPage,startIndex,endIndex,pages,previousLabel,nextLabel,skip,...props};return hideOnSinglePage&&1===pages?null:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_pagination_nav__WEBPACK_IMPORTED_MODULE_2__.S,{...properties})}}}]);
//# sourceMappingURL=ui-table-stories-Table-stories.fe6db9d7.iframe.bundle.js.map