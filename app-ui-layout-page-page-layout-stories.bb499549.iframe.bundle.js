"use strict";(self.webpackChunk_leather_io_extension=self.webpackChunk_leather_io_extension||[]).push([[833,540],{"./src/app/ui/layout/card/card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Card:()=>card_stories_Card,__namedExportsOrder:()=>__namedExportsOrder,default:()=>card_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),jsx=__webpack_require__("./leather-styles/jsx/index.js"),web=__webpack_require__("./node_modules/.pnpm/@leather.io+ui@1.6.1_@babel+core@7.24.4_@babel+preset-env@7.24.6_@babel+core@7.24.4__@swc+cor_63dua6wjk6pzqdebeyyf3gju4u/node_modules/@leather.io/ui/dist-all/web.js");function Card(param){var children=param.children,dataTestId=param.dataTestId,header=param.header,footer=param.footer;return(0,jsx_runtime.jsxs)(jsx.so,{"data-testid":dataTestId,direction:"column",children:[header,children,footer]})}try{Card.displayName="Card",Card.__docgenInfo={description:"",displayName:"Card",props:{dataTestId:{defaultValue:null,description:"",name:"dataTestId",required:!1,type:{name:"string"}},header:{defaultValue:null,description:"",name:"header",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/ui/layout/card/card.tsx#Card"]={docgenInfo:Card.__docgenInfo,name:"Card",path:"src/app/ui/layout/card/card.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}const card_stories={component:Card,tags:["autodocs"],title:"Layout/Card"};function card_stories_Card(){return(0,jsx_runtime.jsx)(Card,{footer:(0,jsx_runtime.jsx)(web.$n,{fullWidth:!0,onClick:function(){return null},children:"Create new account"}),children:(0,jsx_runtime.jsx)(jsx.az,{height:"200px",bg:"lightModeRed.300"})})}const __namedExportsOrder=["Card"]},"./src/app/ui/layout/page/page.layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Page:()=>page_layout_stories_Page,__namedExportsOrder:()=>__namedExportsOrder,default:()=>page_layout_stories});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),card_stories=__webpack_require__("./src/app/ui/layout/card/card.stories.tsx"),jsx=__webpack_require__("./leather-styles/jsx/index.js");function Page(param){var children=param.children;return(0,jsx_runtime.jsx)(jsx.az,{width:"pageWidth",height:{base:"100%",md:"fit-content"},border:{base:"unset",sm:"default"},rounded:"lg",children})}try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{showLogo:{defaultValue:null,description:"",name:"showLogo",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/ui/layout/page/page.layout.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"src/app/ui/layout/page/page.layout.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}const page_layout_stories={component:Page,tags:["autodocs"],title:"Layout/Page"};function page_layout_stories_Page(){return(0,jsx_runtime.jsx)(Page,{children:(0,jsx_runtime.jsx)(card_stories.Card,{})})}const __namedExportsOrder=["Page"]}}]);