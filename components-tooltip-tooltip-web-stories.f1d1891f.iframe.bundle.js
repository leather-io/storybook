/*! For license information please see components-tooltip-tooltip-web-stories.f1d1891f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_leather_io_ui=self.webpackChunk_leather_io_ui||[]).push([[690],{"../../node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>$921a889cee6df7e8$export$99c2b779aa4e8b8b});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react-dom@18.2.0_react@18.2.0/node_modules/react-dom/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.79_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $921a889cee6df7e8$export$99c2b779aa4e8b8b=props=>{const{present,children}=props,presence=function $921a889cee6df7e8$var$usePresence(present){const[node1,setNode]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),stylesRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}),prevPresentRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(present),prevAnimationNameRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)("none"),initialState=present?"mounted":"unmounted",[state,send]=function $fe963b355347cc68$export$3e6543de14f8614f(initialState,machine){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((state,event)=>{const nextState=machine[state][event];return null!=nextState?nextState:state}),initialState)}(initialState,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const currentAnimationName=$921a889cee6df7e8$var$getAnimationName(stylesRef.current);prevAnimationNameRef.current="mounted"===state?currentAnimationName:"none"}),[state]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)((()=>{const styles=stylesRef.current,wasPresent=prevPresentRef.current;if(wasPresent!==present){const prevAnimationName=prevAnimationNameRef.current,currentAnimationName=$921a889cee6df7e8$var$getAnimationName(styles);if(present)send("MOUNT");else if("none"===currentAnimationName||"none"===(null==styles?void 0:styles.display))send("UNMOUNT");else{send(wasPresent&&prevAnimationName!==currentAnimationName?"ANIMATION_OUT":"UNMOUNT")}prevPresentRef.current=present}}),[present,send]),(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_3__.N)((()=>{if(node1){const handleAnimationEnd=event=>{const isCurrentAnimation=$921a889cee6df7e8$var$getAnimationName(stylesRef.current).includes(event.animationName);event.target===node1&&isCurrentAnimation&&(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync)((()=>send("ANIMATION_END")))},handleAnimationStart=event=>{event.target===node1&&(prevAnimationNameRef.current=$921a889cee6df7e8$var$getAnimationName(stylesRef.current))};return node1.addEventListener("animationstart",handleAnimationStart),node1.addEventListener("animationcancel",handleAnimationEnd),node1.addEventListener("animationend",handleAnimationEnd),()=>{node1.removeEventListener("animationstart",handleAnimationStart),node1.removeEventListener("animationcancel",handleAnimationEnd),node1.removeEventListener("animationend",handleAnimationEnd)}}send("ANIMATION_END")}),[node1,send]),{isPresent:["mounted","unmountSuspended"].includes(state),ref:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((node=>{node&&(stylesRef.current=getComputedStyle(node)),setNode(node)}),[])}}(present),child="function"==typeof children?children({present:presence.isPresent}):react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children),ref=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(presence.ref,child.ref);return"function"==typeof children||presence.isPresent?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child,{ref}):null};function $921a889cee6df7e8$var$getAnimationName(styles){return(null==styles?void 0:styles.animationName)||"none"}$921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName="Presence"},"../../node_modules/.pnpm/@radix-ui+react-visually-hidden@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom_t562yqnlh5v4kitdumi3rcu3ne/node_modules/@radix-ui/react-visually-hidden/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$ea1ef594cf570d83$export$be92b6f5f03c0fe9,s:()=>$ea1ef594cf570d83$export$439d29a4e110a164});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2._q2hdzynczbqlprxkwgklkdriia/node_modules/@radix-ui/react-primitive/dist/index.mjs");const $ea1ef594cf570d83$export$439d29a4e110a164=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.sG.span,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.A)({},props,{ref:forwardedRef,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...props.style}})))),$ea1ef594cf570d83$export$be92b6f5f03c0fe9=$ea1ef594cf570d83$export$439d29a4e110a164},"./src/components/tooltip/tooltip.web.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Tooltip:()=>Tooltip,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-tooltip@1.0.7_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-tooltip/dist/index.mjs"),leather_styles_jsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./leather-styles/jsx/index.js"),_icons_info_circle_icon_web__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/icons/info-circle-icon.web.tsx"),_basic_tooltip_web__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/tooltip/basic-tooltip.web.tsx");const __WEBPACK_DEFAULT_EXPORT__={component:_basic_tooltip_web__WEBPACK_IMPORTED_MODULE_3__.G,tags:["autodocs"],title:"Tooltip"},Tooltip={args:{label:"Some tooltip",side:"top",disabled:!1},render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_4__.Kq,{delayDuration:300,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_basic_tooltip_web__WEBPACK_IMPORTED_MODULE_3__.G,{...args,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(leather_styles_jsx__WEBPACK_IMPORTED_MODULE_1__.az,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_icons_info_circle_icon_web__WEBPACK_IMPORTED_MODULE_2__.e,{color:"ink.text-subdued",variant:"small"})})})})},__namedExportsOrder=["Tooltip"]},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/tooltip/basic-tooltip.web.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>BasicTooltip});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),_tooltip_web__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/tooltip/tooltip.web.tsx");function BasicTooltip({children,label,disabled,side,asChild}){const isDisabled=!label||disabled;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tooltip_web__WEBPACK_IMPORTED_MODULE_1__.m.Root,{delayDuration:400,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tooltip_web__WEBPACK_IMPORTED_MODULE_1__.m.Trigger,{asChild,children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tooltip_web__WEBPACK_IMPORTED_MODULE_1__.m.Portal,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tooltip_web__WEBPACK_IMPORTED_MODULE_1__.m.Content,{hidden:isDisabled,side,sideOffset:5,children:[label,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tooltip_web__WEBPACK_IMPORTED_MODULE_1__.m.Arrow,{})]})})]})}try{BasicTooltip.displayName="BasicTooltip",BasicTooltip.__docgenInfo={description:"",displayName:"BasicTooltip",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/basic-tooltip.web.tsx#BasicTooltip"]={docgenInfo:BasicTooltip.__docgenInfo,name:"BasicTooltip",path:"src/components/tooltip/basic-tooltip.web.tsx#BasicTooltip"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/tooltip/tooltip.web.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>Tooltip});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-tooltip@1.0.7_@types+react-dom@18.2.25_@types+react@18.2.79_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@radix-ui/react-tooltip/dist/index.mjs"),leather_styles_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./leather-styles/css/index.js");const Trigger=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.l9,{ref,...props})));Trigger.displayName="Tooltip.Trigger";const Content=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.UC,{className:`${defaultContentStyles} ${className}`,ref,...props})));Content.displayName="Tooltip.Content";const Arrow=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.i3,{className:`${defaultTooltipArrowStyles} ${className}`,ref,...props})));Arrow.displayName="Tooltip.Arrow";const Tooltip={Root:function Root(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.bL,{...props})},Portal:function Portal(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_radix_ui_react_tooltip__WEBPACK_IMPORTED_MODULE_3__.ZL,{...props})},Trigger,Content,Arrow},defaultContentStyles=(0,leather_styles_css__WEBPACK_IMPORTED_MODULE_2__.AH)({bg:"ink.action-primary-default",borderRadius:"xs",px:"space.03",py:"space.02",textStyle:"body.02",animationDuration:"400ms",animationTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",willChange:"transform, opacity",maxWidth:"250px",textAlign:"center",wordWrap:"break-word",color:"ink.background-primary","&[data-state='delayed-open'][data-side='top']":{animationName:"slideDownAndFade"},"&[data-state='delayed-open'][data-side='right']":{animationName:"slideLeftAndFade"},"&[data-state='delayed-open'][data-side='bottom']":{animationName:"slideUpAndFade"},"&[data-state='delayed-open'][data-side='left']":{animationName:"slideRightAndFade"},'&[data-state="closed"]':{animation:"fadeout 0.2s ease-out"}}),defaultTooltipArrowStyles=(0,leather_styles_css__WEBPACK_IMPORTED_MODULE_2__.AH)({fill:"ink.action-primary-default"})},"./src/icons/icon/icon.web.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Icon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),leather_styles_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./leather-styles/tokens/index.js");const Icon=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((({children,...props},ref)=>{const child=react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child,{color:(0,leather_styles_tokens__WEBPACK_IMPORTED_MODULE_2__.S)("colors.ink.action-primary-default"),ref,...props})})}));Icon.displayName="Icon";try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/icon/icon.web.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"src/icons/icon/icon.web.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}},"./src/icons/info-circle-icon.web.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>InfoCircleIcon});var _path,_rect,jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const info_circle_16_16=function SvgInfoCircle1616(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7.167 7.333H8v3.5M14.167 8A6.167 6.167 0 1 1 1.834 8a6.167 6.167 0 0 1 12.333 0"})),_rect||(_rect=react.createElement("rect",{width:.917,height:.917,x:7.542,y:4.875,fill:"currentColor",stroke:"currentColor",strokeWidth:.25,rx:.458})))};var info_circle_24_24_path,info_circle_24_24_rect;function info_circle_24_24_extends(){return info_circle_24_24_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},info_circle_24_24_extends.apply(null,arguments)}const info_circle_24_24=function SvgInfoCircle2424(props){return react.createElement("svg",info_circle_24_24_extends({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 24 24"},props),info_circle_24_24_path||(info_circle_24_24_path=react.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M11 11h1v5m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})),info_circle_24_24_rect||(info_circle_24_24_rect=react.createElement("rect",{width:1.5,height:1.5,x:11.25,y:7.25,fill:"currentColor",stroke:"currentColor",strokeWidth:.5,rx:.75})))};var icon_web=__webpack_require__("./src/icons/icon/icon.web.tsx");const InfoCircleIcon=(0,react.forwardRef)((({variant,...props},ref)=>"small"===variant?(0,jsx_runtime.jsx)(icon_web.I,{ref,...props,children:(0,jsx_runtime.jsx)(info_circle_16_16,{})}):(0,jsx_runtime.jsx)(icon_web.I,{ref,...props,children:(0,jsx_runtime.jsx)(info_circle_24_24,{})})));InfoCircleIcon.displayName="InfoCircleIcon";try{InfoCircleIcon.displayName="InfoCircleIcon",InfoCircleIcon.__docgenInfo={description:"",displayName:"InfoCircleIcon",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/icons/info-circle-icon.web.tsx#InfoCircleIcon"]={docgenInfo:InfoCircleIcon.__docgenInfo,name:"InfoCircleIcon",path:"src/icons/info-circle-icon.web.tsx#InfoCircleIcon"})}catch(__react_docgen_typescript_loader_error){}}}]);