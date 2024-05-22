"use strict";(self.webpackChunk_leather_wallet_extension=self.webpackChunk_leather_wallet_extension||[]).push([[3907],{"./node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{B:()=>$1746a345f3d73bb7$export$f680877a34711e37});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-layout-effect@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2)))["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react__WEBPACK_IMPORTED_MODULE_0__.useState($1746a345f3d73bb7$var$useReactId());return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_1__.N)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}},"./src/app/ui/pages/home.layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HomeLayout:()=>home_layout_stories_HomeLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>home_layout_stories});var RouteUrls,RouteUrls2,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),jsx=__webpack_require__("./leather-styles/jsx/index.js");(RouteUrls2=RouteUrls||(RouteUrls={})).Onboarding="/get-started",RouteUrls2.BackUpSecretKey="/back-up-secret-key",RouteUrls2.SetPassword="/set-password",RouteUrls2.SignIn="/sign-in",RouteUrls2.ConnectLedger="connect-your-ledger",RouteUrls2.ConnectLedgerError="ledger-connection-error",RouteUrls2.ConnectLedgerSuccess="successfully-connected-your-ledger",RouteUrls2.DeviceBusy="please-wait",RouteUrls2.AwaitingDeviceUserAction="awaiting-approval",RouteUrls2.LedgerDisconnected="your-ledger-disconnected",RouteUrls2.LedgerOperationRejected="action-rejected",RouteUrls2.LedgerPublicKeyMismatch="wrong-ledger-device",RouteUrls2.LedgerDevicePayloadInvalid="ledger-payload-invalid",RouteUrls2.LedgerUnsupportedBrowser="unsupported-browser",RouteUrls2.LedgerOutdatedAppWarning="outdated-app-warning",RouteUrls2.LedgerBroadcastError="transaction-broadcast-error",RouteUrls2.ConnectLedgerStart="connect-ledger",RouteUrls2.Home="/",RouteUrls2.AddNetwork="/add-network",RouteUrls2.Fund="/fund/:currency",RouteUrls2.FundChooseCurrency="/fund-choose-currency",RouteUrls2.IncreaseStxFee="/increase-fee/stx",RouteUrls2.IncreaseBtcFee="/increase-fee/btc",RouteUrls2.Send="/send-transaction",RouteUrls2.ViewSecretKey="/view-secret-key",RouteUrls2.Activity="/activity",RouteUrls2.Receive="receive",RouteUrls2.ReceiveStx="receive/stx",RouteUrls2.ReceiveBtc="receive/btc",RouteUrls2.ReceiveBtcStamp="receive/btc-stamp",RouteUrls2.ReceiveCollectible="receive/collectible",RouteUrls2.ReceiveCollectibleOrdinal="receive/collectible/ordinal",RouteUrls2.Unlock="/unlock",RouteUrls2.BitcoinContractLockSuccess="/bitcoin-contract-lock-success",RouteUrls2.BitcoinContractLockError="/bitcoin-contract-lock-error",RouteUrls2.BitcoinContractList="/bitcoin-contract-list",RouteUrls2.EditNonce="edit-nonce",RouteUrls2.SignOutConfirm="sign-out",RouteUrls2.RetrieveTaprootFunds="retrieve-taproot-funds",RouteUrls2.SendCryptoAsset="/send",RouteUrls2.SendCryptoAssetForm="/send/:symbol",RouteUrls2.SendSip10Form="/send/:symbol/:contractId",RouteUrls2.SendCryptoAssetFormRecipientAccounts="recipient-accounts",RouteUrls2.SendCryptoAssetFormRecipientBns="recipient-bns",RouteUrls2.SendBtcChooseFee="/send/btc/choose-fee",RouteUrls2.SendBtcError="/send/btc/error",RouteUrls2.SendBtcConfirmation="/send/btc/confirm",RouteUrls2.SendBtcDisabled="/send/btc/disabled",RouteUrls2.SendStxConfirmation="/send/stx/confirm",RouteUrls2.SendStacksSip10Confirmation="/send/:symbol/confirm",RouteUrls2.SentBtcTxSummary="/sent/btc/:txId",RouteUrls2.SentStxTxSummary="/sent/stx/:txId",RouteUrls2.SendBrc20SendForm="/send/brc20/:ticker",RouteUrls2.SendBrc20ChooseFee="/send/brc20/:ticker/choose-fee",RouteUrls2.SendBrc20Confirmation="/send/brc20/:ticker/confirm",RouteUrls2.SentBrc20Summary="/send/brc20/:ticker/summary",RouteUrls2.SendOrdinalInscription="send/ordinal-inscription",RouteUrls2.SendOrdinalInscriptionChooseFee="choose-fee",RouteUrls2.SendOrdinalInscriptionReview="review",RouteUrls2.SendOrdinalInscriptionSent="sent",RouteUrls2.SendOrdinalInscriptionError="error",RouteUrls2.Swap="/swap/:base/:quote?",RouteUrls2.SwapAssetSelectBase="select-base",RouteUrls2.SwapAssetSelectQuote="select-quote",RouteUrls2.SwapError="/swap/error",RouteUrls2.SwapReview="/swap/:base/:quote/review",RouteUrls2.ProfileUpdateRequest="/update-profile",RouteUrls2.PsbtRequest="/psbt",RouteUrls2.SignatureRequest="/signature",RouteUrls2.TransactionRequest="/transaction",RouteUrls2.TransactionBroadcastError="broadcast-error",RouteUrls2.RpcGetAddresses="/get-addresses",RouteUrls2.RpcSignPsbt="/sign-psbt",RouteUrls2.RpcSignPsbtSummary="/sign-psbt/summary",RouteUrls2.RpcSendTransfer="/send-transfer",RouteUrls2.RpcSendTransferChooseFee="/send-transfer/choose-fee",RouteUrls2.RpcSendTransferConfirmation="/send-transfer/confirm",RouteUrls2.RpcSendTransferSummary="/send-transfer/summary",RouteUrls2.RpcReceiveBitcoinContractOffer="/bitcoin-contract-offer/:bitcoinContractOffer/:counterpartyWalletURL",RouteUrls2.RpcSignBip322Message="/sign-bip322-message",RouteUrls2.RpcStacksSignature="/sign-stacks-message",RouteUrls2.ChooseAccount="/choose-account",RouteUrls2.RequestError="/request-error",RouteUrls2.UnauthorizedRequest="/unauthorized-request",RouteUrls2.RpcSignStacksTransaction="/sign-stacks-transaction";var HomePageSelectors,HomePageSelectors2,icon_button=__webpack_require__("./src/app/ui/components/icon-button/icon-button.tsx"),tabs=__webpack_require__("./src/app/ui/components/tabs/tabs.tsx"),icons=__webpack_require__("./src/app/ui/icons/index.ts");function HomeLayout(param){var children=param.children,accountCard=param.accountCard;return(0,jsx_runtime.jsxs)(jsx.BJ,{"data-testid":HomePageSelectors.HomePageContainer,maxWidth:{base:"unset",md:"fullPageMaxWidth"},px:{base:0,md:"space.05"},py:{base:0,md:"space.07"},gap:{base:0,md:"space.06"},width:"100%",bg:"ink.1",borderRadius:"lg",animation:"fadein",animationDuration:"500ms",children:[(0,jsx_runtime.jsx)(jsx.az,{px:{base:"space.05",md:0},pb:{base:"space.05",md:0},children:accountCard}),children]})}(HomePageSelectors2=HomePageSelectors||(HomePageSelectors={})).AssetList="asset-list",HomePageSelectors2.HomePageContainer="home-page-container",HomePageSelectors2.ReceiveCryptoAssetBtn="receive-crypto-asset-btn",HomePageSelectors2.ReceiveBtcNativeSegwitQrCodeBtn="receive-native-segwit-qr-code-btn",HomePageSelectors2.ReceiveAssetsTab="receive-assets-tab",HomePageSelectors2.ReceiveCollectiblesTab="receive-collectibles-tab",HomePageSelectors2.ReceiveBtcTaprootQrCodeBtn="receive-taproot-qr-code-btn",HomePageSelectors2.ReceiveStxQrCodeBtn="receive-stx-qr-code-btn",HomePageSelectors2.SendCryptoAssetBtn="send-crypto-asset-btn",HomePageSelectors2.ActivityTabBtn="tab-activity",HomePageSelectors2.BalancesTabBtn="tab-balances",HomePageSelectors2.SwapBtn="swap-btn",HomePageSelectors2.FundAccountBtn="fund-account-btn";try{HomeLayout.displayName="HomeLayout",HomeLayout.__docgenInfo={description:"",displayName:"HomeLayout",props:{accountCard:{defaultValue:null,description:"",name:"accountCard",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/ui/pages/home.layout.tsx#HomeLayout"]={docgenInfo:HomeLayout.__docgenInfo,name:"HomeLayout",path:"src/app/ui/pages/home.layout.tsx#HomeLayout"})}catch(__react_docgen_typescript_loader_error){}const home_layout_stories={component:HomeLayout,tags:["autodocs"],title:"Pages/Home"};function home_layout_stories_HomeLayout(){return(0,jsx_runtime.jsx)(HomeLayout,{accountCard:(0,jsx_runtime.jsxs)(jsx.so,{justify:"space-between",children:[(0,jsx_runtime.jsx)(icon_button.K,{icon:(0,jsx_runtime.jsx)(icons.ArrowUpIcon,{}),label:"Send"}),(0,jsx_runtime.jsx)(icon_button.K,{icon:(0,jsx_runtime.jsx)(icons.ArrowDownIcon,{}),label:"Receive"}),(0,jsx_runtime.jsx)(icon_button.K,{icon:(0,jsx_runtime.jsx)(icons.PlusIcon,{}),label:"Buy"}),(0,jsx_runtime.jsx)(icon_button.K,{icon:(0,jsx_runtime.jsx)(icons.SwapIcon,{}),label:"Swap"})]}),children:(0,jsx_runtime.jsxs)(jsx.BJ,{flexGrow:1,mt:"space.05",gap:"space.06",children:[(0,jsx_runtime.jsx)(tabs.t.Root,{children:(0,jsx_runtime.jsxs)(tabs.t.List,{children:[(0,jsx_runtime.jsx)(tabs.t.Trigger,{"data-testid":"tab-assets",value:RouteUrls.Home,children:"Assets"}),(0,jsx_runtime.jsx)(tabs.t.Trigger,{"data-testid":"tab-activity",value:"".concat(RouteUrls.Home).concat(RouteUrls.Activity),children:"Activity"})]})}),(0,jsx_runtime.jsx)(jsx.az,{width:"100%",height:"400px",bg:"lightModeRed.300"})]})})}const __namedExportsOrder=["HomeLayout"]},"./src/app/ui/components/tabs/tabs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>Tabs});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),esm_extends=__webpack_require__("./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/extends.js"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+primitive@1.0.1/node_modules/@radix-ui/primitive/dist/index.mjs"),react_context_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-context@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-context/dist/index.mjs"),react_roving_focus_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-roving-focus@1.0.4_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-presence@1.0.1_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-presence/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-primitive@1.0.3_@types+react-dom@18.2.19_@types+react@18.2.57_react-dom@18.2.0_react@18.2.0/node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_direction_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-direction@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-direction/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-use-controllable-state@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-id@1.0.1_@types+react@18.2.57_react@18.2.0/node_modules/@radix-ui/react-id/dist/index.mjs");const[$69cb30bb0017df05$var$createTabsContext,$69cb30bb0017df05$export$355f5bd209d7b13a]=(0,react_context_dist.A)("Tabs",[react_roving_focus_dist.RG]),$69cb30bb0017df05$var$useRovingFocusGroupScope=(0,react_roving_focus_dist.RG)(),[$69cb30bb0017df05$var$TabsProvider,$69cb30bb0017df05$var$useTabsContext]=$69cb30bb0017df05$var$createTabsContext("Tabs"),$69cb30bb0017df05$export$b2539bed5023c21c=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value:valueProp,onValueChange,defaultValue,orientation="horizontal",dir,activationMode="automatic",...tabsProps}=props,direction=(0,react_direction_dist.jH)(dir),[value,setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,onChange:onValueChange,defaultProp:defaultValue});return(0,react.createElement)($69cb30bb0017df05$var$TabsProvider,{scope:__scopeTabs,baseId:(0,react_id_dist.B)(),value,onValueChange:setValue,orientation,dir:direction,activationMode},(0,react.createElement)(react_primitive_dist.sG.div,(0,esm_extends.A)({dir:direction,"data-orientation":orientation},tabsProps,{ref:forwardedRef})))})),$69cb30bb0017df05$export$9712d22edc0d78c1=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,loop=!0,...listProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsList",__scopeTabs),rovingFocusGroupScope=$69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs);return(0,react.createElement)(react_roving_focus_dist.bL,(0,esm_extends.A)({asChild:!0},rovingFocusGroupScope,{orientation:context.orientation,dir:context.dir,loop}),(0,react.createElement)(react_primitive_dist.sG.div,(0,esm_extends.A)({role:"tablist","aria-orientation":context.orientation},listProps,{ref:forwardedRef})))})),$69cb30bb0017df05$export$8114b9fdfdf9f3ba=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value,disabled=!1,...triggerProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsTrigger",__scopeTabs),rovingFocusGroupScope=$69cb30bb0017df05$var$useRovingFocusGroupScope(__scopeTabs),triggerId=$69cb30bb0017df05$var$makeTriggerId(context.baseId,value),contentId=$69cb30bb0017df05$var$makeContentId(context.baseId,value),isSelected=value===context.value;return(0,react.createElement)(react_roving_focus_dist.q7,(0,esm_extends.A)({asChild:!0},rovingFocusGroupScope,{focusable:!disabled,active:isSelected}),(0,react.createElement)(react_primitive_dist.sG.button,(0,esm_extends.A)({type:"button",role:"tab","aria-selected":isSelected,"aria-controls":contentId,"data-state":isSelected?"active":"inactive","data-disabled":disabled?"":void 0,disabled,id:triggerId},triggerProps,{ref:forwardedRef,onMouseDown:(0,dist.m)(props.onMouseDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey?event.preventDefault():context.onValueChange(value)})),onKeyDown:(0,dist.m)(props.onKeyDown,(event=>{[" ","Enter"].includes(event.key)&&context.onValueChange(value)})),onFocus:(0,dist.m)(props.onFocus,(()=>{const isAutomaticActivation="manual"!==context.activationMode;isSelected||disabled||!isAutomaticActivation||context.onValueChange(value)}))})))})),$69cb30bb0017df05$export$bd905d70e8fd2ebb=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeTabs,value,forceMount,children,...contentProps}=props,context=$69cb30bb0017df05$var$useTabsContext("TabsContent",__scopeTabs),triggerId=$69cb30bb0017df05$var$makeTriggerId(context.baseId,value),contentId=$69cb30bb0017df05$var$makeContentId(context.baseId,value),isSelected=value===context.value,isMountAnimationPreventedRef=(0,react.useRef)(isSelected);return(0,react.useEffect)((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,react.createElement)(react_presence_dist.C,{present:forceMount||isSelected},(({present})=>(0,react.createElement)(react_primitive_dist.sG.div,(0,esm_extends.A)({"data-state":isSelected?"active":"inactive","data-orientation":context.orientation,role:"tabpanel","aria-labelledby":triggerId,hidden:!present,id:contentId,tabIndex:0},contentProps,{ref:forwardedRef,style:{...props.style,animationDuration:isMountAnimationPreventedRef.current?"0s":void 0}}),present&&children)))}));function $69cb30bb0017df05$var$makeTriggerId(baseId,value){return`${baseId}-trigger-${value}`}function $69cb30bb0017df05$var$makeContentId(baseId,value){return`${baseId}-content-${value}`}const $69cb30bb0017df05$export$be92b6f5f03c0fe9=$69cb30bb0017df05$export$b2539bed5023c21c,$69cb30bb0017df05$export$54c2e3dc7acea9f5=$69cb30bb0017df05$export$9712d22edc0d78c1,$69cb30bb0017df05$export$41fb9f06171c75f4=$69cb30bb0017df05$export$8114b9fdfdf9f3ba,$69cb30bb0017df05$export$7c6e2c02157bb7d2=$69cb30bb0017df05$export$bd905d70e8fd2ebb;var css=__webpack_require__("./leather-styles/css/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}var tabRootStyles=(0,css.AH)({display:"flex",flexDirection:"column"}),Root=(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)($69cb30bb0017df05$export$be92b6f5f03c0fe9,_object_spread({className:tabRootStyles,ref},props))})),tabsTriggerStyles=(0,css.AH)({position:"relative",textStyle:"label.01",flex:1,display:"flex",alignItems:"center",justifyContent:"center",py:"space.04",userSelect:"none",color:"ink.text-subdued",_hover:{background:"ink.component-background-hover"},'&[data-state="active"]':{color:"ink.text-primary",_before:{content:'""',position:"absolute",bottom:0,height:"2px",width:"100%",bg:"ink.text-subdued",zIndex:10}},_focusVisible:{outline:0,_before:{bg:"lightModeBlue.500"}}}),Trigger=(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)($69cb30bb0017df05$export$41fb9f06171c75f4,_object_spread({className:tabsTriggerStyles,ref},props))})),tabsListStyles=(0,css.AH)({flexShrink:0,display:"flex",position:"relative",_before:{content:'""',position:"absolute",bottom:0,height:"2px",width:"100%",bg:"ink.border-default",zIndex:9}}),Tabs={Root,List:(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)($69cb30bb0017df05$export$54c2e3dc7acea9f5,_object_spread({className:tabsListStyles,ref},props))})),Trigger,Content:$69cb30bb0017df05$export$7c6e2c02157bb7d2}}}]);