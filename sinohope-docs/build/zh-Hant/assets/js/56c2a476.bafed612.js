"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5308],{69645:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>r});var n=e(87462),i=(e(67294),e(3905));const l={},s="babylon staking",p={unversionedId:"develop/mpc-waas-api/quick-start/qs-3-babylon",id:"develop/mpc-waas-api/quick-start/qs-3-babylon",title:"babylon staking",description:"\u4ec0\u4e48\u662fbabylon",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/quick-start/qs-3-babylon.md",sourceDirName:"develop/mpc-waas-api/quick-start",slug:"/develop/mpc-waas-api/quick-start/qs-3-babylon",permalink:"/zh-Hant/docs/develop/mpc-waas-api/quick-start/qs-3-babylon",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mpcApiSidebar",previous:{title:"MPC Node \u4f7f\u7528\u6307\u5357",permalink:"/zh-Hant/docs/develop/mpc-waas-api/quick-start/qs-2-node"},next:{title:"MPC WaaS API",permalink:"/zh-Hant/docs/category/mpc-waas-api"}},o={},r=[{value:"\u4ec0\u4e48\u662fbabylon",id:"\u4ec0\u4e48\u662fbabylon",level:2},{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u5982\u4f55\u53d1\u8d77\u4e00\u4e2a\u8d28\u62bc",id:"\u5982\u4f55\u53d1\u8d77\u4e00\u4e2a\u8d28\u62bc",level:2},{value:"\u5982\u4f55\u786e\u4fdd\u8d28\u62bc\u662f\u6709\u6548\u7684",id:"\u5982\u4f55\u786e\u4fdd\u8d28\u62bc\u662f\u6709\u6548\u7684",level:2},{value:"\u5982\u4f55\u67e5\u770b\u8d28\u62bc\u7684\u72b6\u6001",id:"\u5982\u4f55\u67e5\u770b\u8d28\u62bc\u7684\u72b6\u6001",level:2}],k={toc:r},b="wrapper";function d(a){let{components:t,...e}=a;return(0,i.kt)(b,(0,n.Z)({},k,e,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"babylon-staking"},"babylon staking"),(0,i.kt)("h2",{id:"\u4ec0\u4e48\u662fbabylon"},"\u4ec0\u4e48\u662fbabylon"),(0,i.kt)("p",null,"\u5173\u4e8ebabylon\u7684\u8be6\u7ec6\u4ecb\u7ecd\u53ef\u4ee5\u79fb\u6b65\u5230",(0,i.kt)("a",{parentName:"p",href:"https://btcstaking.staging.babylonchain.io/"},"babylon\u5b98\u7f51")),(0,i.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,i.kt)("p",null,"\u76ee\u524dbabylon\u8d28\u62bc\u8fd8\u5904\u4e8e\u6d4b\u8bd5\u9636\u6bb5\uff0c\u6211\u4eec\u5bf9\u63a5\u4e86babylon\u7684staging\u73af\u5883\uff0c\u8fd9\u4e2a\u73af\u5883\u5bf9\u8d28\u62bc\u65f6\u957f\u7684\u8981\u6c42\u8f83\u5bbd\u677e\uff08\u6700\u5c0f\u8d28\u62bc\u5468\u671f150\u533a\u5757\uff0c\u89e3\u7ed1\u540e\u6700\u5c0f\u63d0\u53d6\u65f6\u95f45\u4e2a\u533a\u5757\uff09\uff0c\u65b9\u4fbf\u6d4b\u8bd5\u3002\u5176\u5bf9\u5e94\u7684BTC\u7f51\u7edc\u662fsignet\u3002"),(0,i.kt)("h2",{id:"\u5982\u4f55\u53d1\u8d77\u4e00\u4e2a\u8d28\u62bc"},"\u5982\u4f55\u53d1\u8d77\u4e00\u4e2a\u8d28\u62bc"),(0,i.kt)("p",null,"\u53d1\u8d77\u8d28\u62bc\u672c\u8d28\u4e0a\u662f\u53d1\u8d77\u4e00\u7b14BTC\u4ea4\u6613",(0,i.kt)("a",{parentName:"p",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-create"},"create"),"\u5230BTC\u7f51\u7edc\uff0c\u5c06\u6307\u5b9a\u6570\u91cf\u7684BTC\u9501\u5b9a\u5728\u4e00\u4e2aUTXO\u4e2d\uff0c\u8fd9\u4e2aUTXO\u7684\u82b1\u8d39\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5230\u8fbe\u6307\u5b9a\u7684\u65f6\u95f4(stakingTime)\u8fdb\u884c\u63d0\u53d6",(0,i.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx"},"withdraw")),(0,i.kt)("li",{parentName:"ol"},"\u89e3\u9664\u7ed1\u5b9a",(0,i.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-unbond"},"unbond"),"\uff0c\u89e3\u7ed1\u4e4b\u540e\u8d28\u62bc\u7684BTC\u4e0d\u4f1a\u7acb\u5373\u8fd4\u56de\u7ed9\u539f\u5730\u5740\uff0c\u800c\u662f\u4f1a\u9501\u5b9a\u5230\u4e00\u4e2a\u65b0\u7684UTXO\uff0c\u518d\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\uff08unbondingTime\uff09\u540e\u624d\u53ef\u63d0\u53d6",(0,i.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-staking-spending-time-lock-path-tx"},"withdraw"))),(0,i.kt)("h2",{id:"\u5982\u4f55\u786e\u4fdd\u8d28\u62bc\u662f\u6709\u6548\u7684"},"\u5982\u4f55\u786e\u4fdd\u8d28\u62bc\u662f\u6709\u6548\u7684"),(0,i.kt)("p",null,"babylon\u53ea\u8bc6\u522b\u90a3\u4e9b\u6ee1\u8db3\u4e00\u5b9a\u7ea6\u675f\u7684\u4ea4\u6613\u4e3a\u6709\u6548\u7684\u8d28\u62bc\uff0c\u8fd9\u4e9b\u7ea6\u675f\u6761\u4ef6\u4e00\u90e8\u5206sinohope\u5df2\u7ecf\u505a\u4e86\u5904\u7406\uff0c\u8fd8\u5269\u4f59\u4e00\u90e8\u5206\u662f\u9700\u8981\u7531\u7528\u6237\u6765\u4fdd\u8bc1\u7684\uff0c\u5f53\u7136\u5982\u679c\u7528\u6237\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u53c2\u6570\uff0csinohope\u4e5f\u4f1a\u7ed9\u51fa\u63d0\u793a\u8ba9\u7528\u6237\u91cd\u65b0\u8f93\u5165\u5408\u7406\u7684\u503c\u3002\u8fd9\u4e9b\u53c2\u6570\u5305\u62ec"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stakingTime\uff1a\u8d28\u62bc\u5468\u671f\uff08\u533a\u5757\u6570\uff09"),(0,i.kt)("li",{parentName:"ul"},"stakingAmount\uff1a\u8d28\u62bc\u91d1\u989d"),(0,i.kt)("li",{parentName:"ul"},"finalityPubKey\uff1afinality-providers \u7684 pubKey")),(0,i.kt)("p",null,"babylon\u63d0\u4f9b\u4e86\u63a5\u53e3\uff0c\u53ef\u4ee5\u67e5\u770b\u8fd9\u4e9b\u53c2\u6570\u7684\u6709\u6548\u503c\u8303\u56f4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://staking-api.staging.babylonchain.io/v1/global-params"},"\u5168\u5c40\u53c2\u6570")," \u67e5\u770b stakingTime\u3001stakingAmount\u7684\u6709\u6548\u533a\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://staking-api.staging.babylonchain.io/v1/finality-providers"},"finality-providers")," \u67e5\u770b\u6240\u6709finality-providers")),(0,i.kt)("h2",{id:"\u5982\u4f55\u67e5\u770b\u8d28\u62bc\u7684\u72b6\u6001"},"\u5982\u4f55\u67e5\u770b\u8d28\u62bc\u7684\u72b6\u6001"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://staking-api.staging.babylonchain.io/v1/delegation?staking_tx_hash_hex=1f05b1f084295779ebad8de92d8e011d42b2928239beba04172515e7ec874ce8"},"\u67e5\u770b\u8d28\u62bc\u72b6\u6001"),"\n\u5c06staking_tx_hash_hex \u66ff\u6362\u6210\u60a8\u8d28\u62bc\u4ea4\u6613\u7684hash"))}d.isMDXComponent=!0}}]);