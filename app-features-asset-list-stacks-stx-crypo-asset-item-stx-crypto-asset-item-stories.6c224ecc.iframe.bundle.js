(self.webpackChunk_leather_io_extension=self.webpackChunk_leather_io_extension||[]).push([[160],{"./src/app/features/asset-list/stacks/stx-crypo-asset-item/stx-crypto-asset-item.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StxCryptoAssetItem:()=>stx_crypto_asset_item_stories_StxCryptoAssetItem,StxCryptoAssetItemWithLockedBalance:()=>StxCryptoAssetItemWithLockedBalance,__namedExportsOrder:()=>__namedExportsOrder,default:()=>stx_crypto_asset_item_stories});var _process_env_GITHUB_HEAD_REF,_process_env_COINBASE_APP_ID,_process_env_MOONPAY_API_KEY,_process_env_SEGMENT_WRITE_KEY,_process_env_SENTRY_DSN,_process_env_TRANSAK_API_KEY,_process_env_WALLET_ENVIRONMENT,jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-tooltip@1.0.7_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-tooltip/dist/index.mjs"),QueryClientProvider=__webpack_require__("./node_modules/.pnpm/@tanstack+react-query@5.45.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),bignumber=__webpack_require__("./node_modules/.pnpm/bignumber.js@9.1.2/node_modules/bignumber.js/bignumber.mjs"),modern=__webpack_require__("./node_modules/.pnpm/@tanstack+query-async-storage-persister@5.45.0/node_modules/@tanstack/query-async-storage-persister/build/modern/index.js"),queryClient=__webpack_require__("./node_modules/.pnpm/@tanstack+query-core@5.45.0/node_modules/@tanstack/query-core/build/modern/queryClient.js"),queryCache=__webpack_require__("./node_modules/.pnpm/@tanstack+query-core@5.45.0/node_modules/@tanstack/query-core/build/modern/queryCache.js"),mutationCache=__webpack_require__("./node_modules/.pnpm/@tanstack+query-core@5.45.0/node_modules/@tanstack/query-core/build/modern/mutationCache.js"),constants_dist=__webpack_require__("./node_modules/.pnpm/@leather.io+constants@0.8.1/node_modules/@leather.io/constants/dist/index.js"),process=__webpack_require__("./node_modules/.pnpm/process@0.11.10/node_modules/process/browser.js"),environment_IS_TEST_ENV=(process.env.GITHUB_REF,null!==(_process_env_GITHUB_HEAD_REF=process.env.GITHUB_HEAD_REF)&&void 0!==_process_env_GITHUB_HEAD_REF||process.env.BRANCH_NAME,process.env.PR_NUMBER,_process_env_COINBASE_APP_ID=process.env.COINBASE_APP_ID,process.env.COMMIT_SHA,process.env.WALLET_ENVIRONMENT,"testing"===process.env.WALLET_ENVIRONMENT),browser=(_process_env_MOONPAY_API_KEY=process.env.MOONPAY_API_KEY,_process_env_SEGMENT_WRITE_KEY=process.env.SEGMENT_WRITE_KEY,_process_env_SENTRY_DSN=process.env.SENTRY_DSN,_process_env_TRANSAK_API_KEY=process.env.TRANSAK_API_KEY,_process_env_WALLET_ENVIRONMENT=process.env.WALLET_ENVIRONMENT,process.env.SWAP_ENABLED,__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),__webpack_require__("./node_modules/.pnpm/@segment+analytics-next@1.70.0_encoding@0.1.13/node_modules/@segment/analytics-next/dist/pkg/browser/index.js"));__webpack_require__("./leather-styles/tokens/index.js");var analytics=new browser.N;var chrome=__webpack_require__("./tests/mocks/mock-chrome.ts").h;function persistence_asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function persistence_async_to_generator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){persistence_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){persistence_asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}function persistence_ts_generator(thisArg,body){var f,y,t,g,_={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return g={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function verb(n){return function(v){return function step(op){if(f)throw new TypeError("Generator is already executing.");for(;_;)try{if(f=1,y&&(t=2&op[0]?y.return:op[0]?y.throw||((t=y.return)&&t.call(y),0):y.next)&&!(t=t.call(y,op[1])).done)return t;switch(y=0,t&&(op=[2&op[0],t.value]),op[0]){case 0:case 1:t=op;break;case 4:return _.label++,{value:op[1],done:!1};case 5:_.label++,y=op[1],op=[0];continue;case 7:op=_.ops.pop(),_.trys.pop();continue;default:if(!(t=_.trys,(t=t.length>0&&t[t.length-1])||6!==op[0]&&2!==op[0])){_=0;continue}if(3===op[0]&&(!t||op[1]>t[0]&&op[1]<t[3])){_.label=op[1];break}if(6===op[0]&&_.label<t[1]){_.label=t[1],t=op;break}if(t&&_.label<t[2]){_.label=t[2],_.ops.push(op);break}t[2]&&_.ops.pop(),_.trys.pop();continue}op=body.call(thisArg,_)}catch(e){op=[6,e],y=0}finally{f=t=0}if(5&op[0])throw op[1];return{value:op[0]?op[1]:void 0,done:!0}}([n,v])}}}var _ref,storage={getItem:(_ref=persistence_async_to_generator((function(key){return persistence_ts_generator(this,(function(_state){switch(_state.label){case 0:return[4,chrome.storage.local.get(key)];case 1:return[2,_state.sent()[key]]}}))})),function(key){return _ref.apply(this,arguments)}),setItem:function(key,value){return chrome.storage.local.set(function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},key,value))},removeItem:function(key){return chrome.storage.local.remove([key])}},persistence_queryClient=((0,modern.$)({storage}),new queryClient.E({queryCache:new queryCache.$({onError:function onError(_error,query){return persistence_async_to_generator((function(){var _query_queryKey_,queryKey;return persistence_ts_generator(this,(function(_state){return queryKey=null!==(_query_queryKey_=query.queryKey[0])&&void 0!==_query_queryKey_?_query_queryKey_:"",analytics.track("query_error",{queryKey}),[2]}))}))()}}),mutationCache:new mutationCache.q({onError:function onError2(_error,_variables,_context,mutation){return persistence_async_to_generator((function(){var _mutation_options_mutationKey,_mutation_options_mutationKey_,mutationPrefix;return persistence_ts_generator(this,(function(_state){return mutationPrefix=null!==(_mutation_options_mutationKey_=null==mutation||null===(_mutation_options_mutationKey=mutation.options.mutationKey)||void 0===_mutation_options_mutationKey?void 0:_mutation_options_mutationKey[0])&&void 0!==_mutation_options_mutationKey_?_mutation_options_mutationKey_:"",analytics.track("mutation_error",{mutationPrefix}),[2]}))}))()}}),defaultOptions:{queries:{gcTime:constants_dist.n4,retry:!environment_IS_TEST_ENV&&3}}}));var CryptoAssetSelectors,CryptoAssetSelectors2,jsx=__webpack_require__("./leather-styles/jsx/index.js"),query_dist=__webpack_require__("./node_modules/.pnpm/@leather.io+query@0.10.0_@stacks+network@6.13.0_encoding@0.1.13__encoding@0.1.13_react@18.3.1/node_modules/@leather.io/query/dist/index.js"),web=__webpack_require__("./node_modules/.pnpm/@leather.io+ui@1.6.1_@babel+core@7.24.4_@babel+preset-env@7.24.6_@babel+core@7.24.4__@swc+cor_63dua6wjk6pzqdebeyyf3gju4u/node_modules/@leather.io/ui/dist-all/web.js"),utils_dist=__webpack_require__("./node_modules/.pnpm/@leather.io+utils@0.9.3/node_modules/@leather.io/utils/dist/index.js"),basic_tooltip=__webpack_require__("./src/app/ui/components/tooltip/basic-tooltip.tsx");(CryptoAssetSelectors2=CryptoAssetSelectors||(CryptoAssetSelectors={})).CryptoAssetList="crypto-asset-list",CryptoAssetSelectors2.CryptoAssetListItem="crypto-asset-list-item-{symbol}";__webpack_require__("./node_modules/.pnpm/punycode@2.3.1/node_modules/punycode/punycode.es6.js"),__webpack_require__("./node_modules/.pnpm/@leather.io+models@0.10.1/node_modules/@leather.io/models/dist/index.js"),__webpack_require__("./node_modules/.pnpm/buffer@6.0.3/node_modules/buffer/index.js").Buffer;var abbreviateNumber=function(n){return n<1e3?n.toString():n>=1e3&&n<1e6?+(n/1e3).toFixed(2)+"K":n>=1e6&&n<1e9?+(n/1e6).toFixed(2)+"M":n>=1e9&&n<1e12?+(n/1e9).toFixed(2)+"B":n>=1e12?+(n/1e12).toFixed(2)+"T":n.toString()};(function isFullPage(){return document.location.pathname.startsWith("/index.html")})();function parseCryptoAssetBalance(availableBalance){var availableBalanceString=(0,utils_dist.gu)(availableBalance);return{availableBalanceString,dataTestId:CryptoAssetSelectors.CryptoAssetListItem.replace("{symbol}",availableBalance.symbol.toLowerCase()),formattedBalance:function formatBalance(amount){var noCommas=function removeCommas(amountWithCommas){return amountWithCommas.replace(/,/g,"")}(amount),number=noCommas.includes(".")?parseFloat(noCommas):parseInt(noCommas);return number>1e4?{isAbbreviated:!0,value:abbreviateNumber(number)}:{isAbbreviated:!1,value:amount}}(availableBalanceString)}}function CryptoAssetItemLayout(param){var availableBalance=param.availableBalance,balanceSuffix=param.balanceSuffix,captionLeft=param.captionLeft,captionRightBulletInfo=param.captionRightBulletInfo,contractId=param.contractId,fiatBalance=param.fiatBalance,icon=param.icon,_param_isLoading=param.isLoading,isLoading=void 0!==_param_isLoading&&_param_isLoading,onSelectAsset=param.onSelectAsset,titleLeft=param.titleLeft,titleRightBulletInfo=param.titleRightBulletInfo,_parseCryptoAssetBalance=parseCryptoAssetBalance(availableBalance),availableBalanceString=_parseCryptoAssetBalance.availableBalanceString,dataTestId=_parseCryptoAssetBalance.dataTestId,formattedBalance=_parseCryptoAssetBalance.formattedBalance,titleRight=(0,jsx_runtime.jsx)(web.jt,{width:"126px",isLoading,children:(0,jsx_runtime.jsx)(basic_tooltip.G,{asChild:!0,label:formattedBalance.isAbbreviated?availableBalanceString:void 0,side:"left",children:(0,jsx_runtime.jsx)(jsx.so,{alignItems:"center",gap:"space.02",textStyle:"label.02",children:(0,jsx_runtime.jsxs)(web.ay,{children:[(0,jsx_runtime.jsxs)(jsx.I4.span,{children:[formattedBalance.value," ",balanceSuffix]}),titleRightBulletInfo]})})})}),captionRight=(0,jsx_runtime.jsx)(web.jt,{width:"78px",isLoading,children:(0,jsx_runtime.jsx)(jsx.so,{alignItems:"center",color:"ink.text-subdued",gap:"space.02",children:(0,jsx_runtime.jsxs)(web.ay,{children:[(0,jsx_runtime.jsx)(web.HL,{children:availableBalance.amount.toNumber()>0?fiatBalance:null}),captionRightBulletInfo]})})}),isInteractive=!!onSelectAsset,content=(0,jsx_runtime.jsx)(web.E7,{flagImg:icon,titleLeft:(0,utils_dist.sc)(titleLeft),captionLeft:(0,utils_dist.sc)(captionLeft),titleRight,captionRight});return isInteractive?(0,jsx_runtime.jsx)(web.oz,{"data-testid":dataTestId,onClick:function(){return onSelectAsset(availableBalance.symbol,contractId)},my:"space.02",children:content}):(0,jsx_runtime.jsx)(jsx.az,{my:"space.02",children:content})}try{CryptoAssetItemLayout.displayName="CryptoAssetItemLayout",CryptoAssetItemLayout.__docgenInfo={description:"",displayName:"CryptoAssetItemLayout",props:{availableBalance:{defaultValue:null,description:"",name:"availableBalance",required:!0,type:{name:"Money"}},balanceSuffix:{defaultValue:null,description:"",name:"balanceSuffix",required:!1,type:{name:"string"}},captionLeft:{defaultValue:null,description:"",name:"captionLeft",required:!0,type:{name:"string"}},captionRightBulletInfo:{defaultValue:null,description:"",name:"captionRightBulletInfo",required:!1,type:{name:"ReactNode"}},contractId:{defaultValue:null,description:"",name:"contractId",required:!1,type:{name:"string"}},fiatBalance:{defaultValue:null,description:"",name:"fiatBalance",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!0,type:{name:"ReactNode"}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},onSelectAsset:{defaultValue:null,description:"",name:"onSelectAsset",required:!1,type:{name:"((symbol: string, contractId?: string) => void)"}},titleLeft:{defaultValue:null,description:"",name:"titleLeft",required:!0,type:{name:"string"}},titleRightBulletInfo:{defaultValue:null,description:"",name:"titleRightBulletInfo",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/components/crypto-asset-item/crypto-asset-item.layout.tsx#CryptoAssetItemLayout"]={docgenInfo:CryptoAssetItemLayout.__docgenInfo,name:"CryptoAssetItemLayout",path:"src/app/components/crypto-asset-item/crypto-asset-item.layout.tsx#CryptoAssetItemLayout"})}catch(__react_docgen_typescript_loader_error){}function StxCryptoAssetItem(param){var balance=param.balance,isLoading=param.isLoading,onSelectAsset=param.onSelectAsset,marketData=(0,query_dist.Uo)("STX"),availableBalance=balance.availableBalance,lockedBalance=balance.lockedBalance,showLockedBalance=lockedBalance.amount.isGreaterThan(0),fiatLockedBalance=(0,utils_dist.Lx)((0,utils_dist.uE)(lockedBalance,marketData)),fiatAvailableBalance=(0,utils_dist.Lx)((0,utils_dist.uE)(availableBalance,marketData)),titleRightBulletInfo=(0,jsx_runtime.jsxs)(jsx.I4.span,{children:[(0,utils_dist.gu)(lockedBalance)," locked"]}),captionRightBulletInfo=(0,jsx_runtime.jsxs)(web.HL,{children:[fiatLockedBalance," locked"]});return(0,jsx_runtime.jsx)(CryptoAssetItemLayout,{availableBalance:balance.availableBalance,captionLeft:"STX",captionRightBulletInfo:showLockedBalance&&captionRightBulletInfo,fiatBalance:fiatAvailableBalance,icon:(0,jsx_runtime.jsx)(web.sC,{}),isLoading,onSelectAsset,titleLeft:"Stacks",titleRightBulletInfo:showLockedBalance&&titleRightBulletInfo})}try{StxCryptoAssetItem.displayName="StxCryptoAssetItem",StxCryptoAssetItem.__docgenInfo={description:"",displayName:"StxCryptoAssetItem",props:{balance:{defaultValue:null,description:"",name:"balance",required:!0,type:{name:"StxCryptoAssetBalance"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},onSelectAsset:{defaultValue:null,description:"",name:"onSelectAsset",required:!1,type:{name:"((symbol: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/features/asset-list/stacks/stx-crypo-asset-item/stx-crypto-asset-item.tsx#StxCryptoAssetItem"]={docgenInfo:StxCryptoAssetItem.__docgenInfo,name:"StxCryptoAssetItem",path:"src/app/features/asset-list/stacks/stx-crypo-asset-item/stx-crypto-asset-item.tsx#StxCryptoAssetItem"})}catch(__react_docgen_typescript_loader_error){}function stx_crypto_asset_item_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys2=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys2=ownKeys2.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys2.forEach((function(key){stx_crypto_asset_item_stories_define_property(target,key,source[key])}))}return target}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}const stx_crypto_asset_item_stories={component:StxCryptoAssetItem,tags:["autodocs"],title:"Feature/StxCryptoAssetItem",argTypes:{},parameters:{},decorators:[function(Story){return(0,jsx_runtime.jsx)(QueryClientProvider.Ht,{client:persistence_queryClient,children:(0,jsx_runtime.jsx)(dist.Bc,{children:(0,jsx_runtime.jsx)(Story,{})})})}]};var stxCryptoAssetBalance={availableBalance:{amount:new bignumber.A(1e11),decimals:6,symbol:"STX"},availableUnlockedBalance:{amount:new bignumber.A(1e11),decimals:6,symbol:"STX"},inboundBalance:{amount:new bignumber.A(0),decimals:6,symbol:"STX"},outboundBalance:{amount:new bignumber.A(0),decimals:6,symbol:"STX"},pendingBalance:{amount:new bignumber.A(0),decimals:6,symbol:"STX"},totalBalance:{amount:new bignumber.A(0),decimals:6,symbol:"STX"},unlockedBalance:{amount:new bignumber.A(0),decimals:6,symbol:"STX"}},stx_crypto_asset_item_stories_StxCryptoAssetItem={args:{balance:_object_spread_props(_object_spread({},stxCryptoAssetBalance),{lockedBalance:{amount:new bignumber.A(0),decimals:6,symbol:"STX"}}),isLoading:!1}},StxCryptoAssetItemWithLockedBalance={args:{balance:_object_spread_props(_object_spread({},stxCryptoAssetBalance),{lockedBalance:{amount:new bignumber.A(1e9),decimals:6,symbol:"STX"}}),isLoading:!1}};const __namedExportsOrder=["StxCryptoAssetItem","StxCryptoAssetItemWithLockedBalance"]},"./src/app/ui/components/tooltip/basic-tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>BasicTooltip});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"),dist=__webpack_require__("./node_modules/.pnpm/@radix-ui+react-tooltip@1.0.7_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-tooltip/dist/index.mjs"),css=__webpack_require__("./leather-styles/css/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Tooltip={Root:function Root(props){return(0,jsx_runtime.jsx)(dist.bL,_object_spread({},props))},Portal:function Portal(props){return(0,jsx_runtime.jsx)(dist.ZL,_object_spread({},props))},Trigger:(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)(dist.l9,_object_spread({ref},props))})),Content:(0,react.forwardRef)((function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,jsx_runtime.jsx)(dist.UC,_object_spread({className:"".concat(defaultContentStyles," ").concat(className),ref},props))})),Arrow:(0,react.forwardRef)((function(_param,ref){var className=_param.className,props=_object_without_properties(_param,["className"]);return(0,jsx_runtime.jsx)(dist.i3,_object_spread({className:"".concat(defaultTooltipArrowStyles," ").concat(className),ref},props))}))},defaultContentStyles=(0,css.AH)({bg:"ink.action-primary-default",borderRadius:"xs",px:"space.03",py:"space.02",textStyle:"body.02",animationDuration:"400ms",animationTimingFunction:"cubic-bezier(0.16, 1, 0.3, 1)",willChange:"transform, opacity",maxWidth:"250px",textAlign:"center",wordWrap:"break-word",color:"ink.background-primary",zIndex:4,"&[data-state='delayed-open'][data-side='top']":{animationName:"slideDownAndFade"},"&[data-state='delayed-open'][data-side='right']":{animationName:"slideLeftAndFade"},"&[data-state='delayed-open'][data-side='bottom']":{animationName:"slideUpAndFade"},"&[data-state='delayed-open'][data-side='left']":{animationName:"slideRightAndFade"}}),defaultTooltipArrowStyles=(0,css.AH)({fill:"ink.action-primary-default"});function BasicTooltip(param){var children=param.children,label=param.label,disabled=param.disabled,side=param.side,asChild=param.asChild,isDisabled=!label||disabled;return(0,jsx_runtime.jsxs)(Tooltip.Root,{children:[(0,jsx_runtime.jsx)(Tooltip.Trigger,{asChild,children}),(0,jsx_runtime.jsx)(Tooltip.Portal,{children:(0,jsx_runtime.jsxs)(Tooltip.Content,{hidden:isDisabled,side,sideOffset:5,children:[label,(0,jsx_runtime.jsx)(Tooltip.Arrow,{})]})})]})}try{BasicTooltip.displayName="BasicTooltip",BasicTooltip.__docgenInfo={description:"",displayName:"BasicTooltip",props:{label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},side:{defaultValue:null,description:"",name:"side",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/app/ui/components/tooltip/basic-tooltip.tsx#BasicTooltip"]={docgenInfo:BasicTooltip.__docgenInfo,name:"BasicTooltip",path:"src/app/ui/components/tooltip/basic-tooltip.tsx#BasicTooltip"})}catch(__react_docgen_typescript_loader_error){}},"./tests/mocks/mock-chrome.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>chrome});var chrome={storage:{local:{clear:function clear(){},get:function get(){},getBytesInUse:function getBytesInUse(){},onChanged:function onChanged(){},remove:function remove(){},set:function set(){}}},tabs:{sendMessage:function sendMessage(){}},runtime:{sendMessage:function sendMessage2(){}}}},"?c692":()=>{},"?ddd9":()=>{},"?8d76":()=>{},"?b231":()=>{},"?9bba":()=>{}}]);