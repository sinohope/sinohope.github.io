"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3394],{59470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>g});var s=n(87462),i=(n(67294),n(3905));const a={sidebar_position:"10"},l="\ud83d\udcd6 Rules Engine",d={unversionedId:"use/user-guide/wallet-management/rules-engine",id:"use/user-guide/wallet-management/rules-engine",title:"\ud83d\udcd6 Rules Engine",description:"1\u3001TAP\u591a\u7ea7\u5ba1\u6279\u8bbe\u7f6e",source:"@site/docs/use/user-guide/wallet-management/rules-engine.md",sourceDirName:"use/user-guide/wallet-management",slug:"/use/user-guide/wallet-management/rules-engine",permalink:"/docs/use/user-guide/wallet-management/rules-engine",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"userGuideSidebar",previous:{title:"\ud83d\udcdd Export Transaction Records",permalink:"/docs/use/user-guide/wallet-management/export-transaction-records"},next:{title:"WaaS",permalink:"/docs/use/user-guide/waas/"}},u={},g=[{value:"1\u3001TAP\u591a\u7ea7\u5ba1\u6279\u8bbe\u7f6e",id:"1tap\u591a\u7ea7\u5ba1\u6279\u8bbe\u7f6e",level:3},{value:"2\u3001\u65b0\u589e\u5ba1\u6279\u7c7b\u578b\uff08\u8bbe\u5907\u53d8\u66f4\u3001\u7b56\u7565\u53d8\u66f4\uff09",id:"2\u65b0\u589e\u5ba1\u6279\u7c7b\u578b\u8bbe\u5907\u53d8\u66f4\u7b56\u7565\u53d8\u66f4",level:3},{value:"3\u3001\u5ba1\u6279\u5355\u64a4\u9500\u3001\u9a73\u56de",id:"3\u5ba1\u6279\u5355\u64a4\u9500\u9a73\u56de",level:3},{value:"4\u3001\u5355\u70b9\u5ba1\u6279\u5f00\u5173",id:"4\u5355\u70b9\u5ba1\u6279\u5f00\u5173",level:3}],r={toc:g},o="wrapper";function p(e){let{components:t,...a}=e;return(0,i.kt)(o,(0,s.Z)({},r,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-rules-engine"},"\ud83d\udcd6 Rules Engine"),(0,i.kt)("h3",{id:"1tap\u591a\u7ea7\u5ba1\u6279\u8bbe\u7f6e"},"1\u3001TAP\u591a\u7ea7\u5ba1\u6279\u8bbe\u7f6e"),(0,i.kt)("p",null,"Sinohope\u76ee\u524d\u652f\u6301\u591a\u5ba1\u6279\u8282\u70b9\u5ba1\u6279\uff0c\u5177\u4f53\u5ba1\u6279\u9608\u503c\u8be6\u89c1\u5728app\u7aef\u201c\u6210\u5458\u7ba1\u7406\u201d\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(71586).Z,width:"494",height:"1086"})),(0,i.kt)("p",null,"\u5982\u9700\u4fee\u6539\u5ba1\u6279\u6743\u9650\u548c\u5ba1\u6279\u9608\u503c\uff0c\u8bf7PC\u7aef\u767b\u5f55sinohope.com\u201c\u89c4\u5219\u5f15\u64ce\u201d\u677f\u5757\u8fdb\u884c\u7f16\u8f91\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(69296).Z,width:"2999",height:"1649"})),(0,i.kt)("p",null,"\u53d1\u8d77\u4eba\uff1a\u53ef\u8bbe\u7f6e\u4efb\u610f\u91d1\u5e93\u6210\u5458\uff1b\n\u5ba1\u6279\u8282\u70b9\uff1a\u53ef\u6dfb\u52a0\u4efb\u610f1\u4e2a\u6216\u591a\u4e2a\u91d1\u5e93\u6210\u5458\u4e3a\u5ba1\u6279\u8282\u70b9\uff0c\u5305\u62ec\u53ef\u4ee5\u8bbe\u7f6e\u591a\u7ea7\u5ba1\u6279\uff0c\u6307\u5b9a\u7279\u5b9a\u6210\u5458\u5ba1\u6279"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55640).Z,width:"1250",height:"1262"})),(0,i.kt)("h3",{id:"2\u65b0\u589e\u5ba1\u6279\u7c7b\u578b\u8bbe\u5907\u53d8\u66f4\u7b56\u7565\u53d8\u66f4"},"2\u3001\u65b0\u589e\u5ba1\u6279\u7c7b\u578b\uff08\u8bbe\u5907\u53d8\u66f4\u3001\u7b56\u7565\u53d8\u66f4\uff09"),(0,i.kt)("p",null,"\u8bbe\u5907\u53d8\u66f4\u662f\u5b89\u5168\u7ba1\u7406\u7c7b\u7684\uff0c\u8fd9\u7c7b\u5ba1\u6279\u7531owner\u3001admin\u6765\u5ba1\u6279\uff1b\n\u7b56\u7565\u53d8\u66f4\u662f\u4ea4\u6613\u7b56\u7565\u76f8\u5173\u7684\uff0c\u8fd9\u7c7b\u5ba1\u6279\u9700\u8981\u6309\u7167\u5f53\u524d\u8bbe\u7f6e\u7684\u5ba1\u6279\u8282\u70b9\u6765\u5ba1\u6279\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(75652).Z,width:"572",height:"1258"}),"\n",(0,i.kt)("img",{src:n(80589).Z,width:"574",height:"1256"})),(0,i.kt)("h3",{id:"3\u5ba1\u6279\u5355\u64a4\u9500\u9a73\u56de"},"3\u3001\u5ba1\u6279\u5355\u64a4\u9500\u3001\u9a73\u56de"),(0,i.kt)("p",null,"\u5ba1\u6279\u5355\u53ef\u4ee5\u8fdb\u884c\u64a4\u9500\u53ca\u9a73\u56de\u64cd\u4f5c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(16222).Z,width:"886",height:"942"})),(0,i.kt)("h3",{id:"4\u5355\u70b9\u5ba1\u6279\u5f00\u5173"},"4\u3001\u5355\u70b9\u5ba1\u6279\u5f00\u5173"),(0,i.kt)("p",null,"\u53ef\u8bbe\u7f6e\u201c\u5355\u70b9\u5ba1\u6279\u4fdd\u62a4\u201d\u5f00\u542f\uff0c\u5f53\u5ba1\u6279\u9608\u503c\u4e3a1\u65f6\u4e14\u5ba1\u6279\u8282\u70b9\u4e3a1\uff0c\u9664owner\u5916\u7981\u6b62\u5ba1\u6279\u81ea\u5df1\u53d1\u8d77\u7684\u5ba1\u6279\u5355\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(43477).Z,width:"1094",height:"1134"})))}p.isMDXComponent=!0},71586:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine1-d4b5a18d3094a17c1b2f61289b482113.png"},69296:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine2-9b0e3379fefed64837c630be23979d50.png"},55640:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine3-ba766b2754ea37ab8b04a7af99afeed9.png"},75652:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine4-e04af97bd3f993d3fa46a398b58e12ab.png"},80589:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine5-1b627a5a15935ac68010667b25f5b00e.png"},16222:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine6-849e94aaff41e54638d55a010126313d.png"},43477:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/engine7-6368e1d7a1dfc100ede230b218d64b13.png"}}]);