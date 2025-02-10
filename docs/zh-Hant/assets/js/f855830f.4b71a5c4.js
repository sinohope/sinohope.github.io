"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1808],{30991:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>n,default:()=>k,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var o=t(87462),l=(t(67294),t(3905));const p={sidebar_position:"2"},n="MPC WaaS \u5feb\u901f\u5165\u95e8",i={unversionedId:"develop/mpc-waas-api/quick-start/waas/README",id:"develop/mpc-waas-api/quick-start/waas/README",title:"MPC WaaS \u5feb\u901f\u5165\u95e8",description:"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/quick-start/waas/README.md",sourceDirName:"develop/mpc-waas-api/quick-start/waas",slug:"/develop/mpc-waas-api/quick-start/waas/",permalink:"/zh-Hant/docs/develop/mpc-waas-api/quick-start/waas/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"mpcApiSidebar",previous:{title:"Open API \u5feb\u901f\u5165\u95e8",permalink:"/zh-Hant/docs/develop/mpc-waas-api/quick-start/qs-1-openapi"},next:{title:"MPC Node \u4f7f\u7528\u6307\u5357",permalink:"/zh-Hant/docs/develop/mpc-waas-api/quick-start/waas/ws-1-node"}},s={},d=[{value:"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879\uff1a",id:"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879",level:3},{value:"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node",id:"\u90e8\u7f72\u5e76\u914d\u7f6empc-node",level:3},{value:"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd",id:"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd",level:3}],r={toc:d},c="wrapper";function k(e){let{components:a,...t}=e;return(0,l.kt)(c,(0,o.Z)({},r,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mpc-waas-\u5feb\u901f\u5165\u95e8"},"MPC WaaS \u5feb\u901f\u5165\u95e8"),(0,l.kt)("h3",{id:"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879"},"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node"),(0,l.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd")),(0,l.kt)("h3",{id:"\u90e8\u7f72\u5e76\u914d\u7f6empc-node"},"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node"),(0,l.kt)("p",null,"Sinohope WaaS\u4f7f\u7528 MPC-TSS \u6280\u672f\u63d0\u4f9b\u670d\u52a1\uff0c\u5e76\u91c7\u7528 3-3 \u7684\u9608\u503c\u7b7e\u540d\u8bbe\u7f6e\uff0c\u5e73\u53f0\u6301\u67092\u7247\u79c1\u94a5\u5206\u7247\uff0c\u7528\u6237\u6301\u67091\u7247\u79c1\u94a5\u5206\u7247\u3002"),(0,l.kt)("p",null,"Sinohope\u63d0\u4f9b MPC Node\u8f6f\u4ef6\uff0c\u7531\u5ba2\u6237\u90e8\u7f72\u8fd0\u884c\uff0c\u7528\u4e8e\u7ba1\u7406\u5c5e\u4e8e\u7528\u6237\u7684\u79c1\u94a5\u5206\u7247\u3002\u8981\u914d\u7f6e MPC Node\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u51c6\u5907\uff1a\u5f00\u901aMPC WaaS \u8d26\u53f7\uff1b\u51c6\u5907\u597d\u90e8\u7f72\u73af\u5883\uff0c\u83b7\u53d6\u5e76\u9a8c\u8bc1 MPC Node \u5b89\u88c5\u5305\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u8282\u70b9\uff0c\u751f\u6210\u8282\u70b9\u7684 Node ID \u548c \u90e8\u7f72\u56de\u8c03\u670d\u52a1\u6240\u9700\u7684\u8282\u70b9\u516c\u94a5\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\uff08\u6309\u9700\uff09\u90e8\u7f72\u53ca\u914d\u7f6e\u60a8\u7684\u56de\u8c03\u670d\u52a1\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u7ed1\u5b9aMPC Node\uff0c\u767b\u5f55 web console \u914d\u7f6e MPC Node\uff0c\u5c06\u60a8\u7684 Node ID \u4e0e\u60a8\u7684\u7ec4\u7ec7\u8d26\u53f7\u7ed1\u5b9a\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u542f\u52a8MPC Node\uff0c\u8282\u70b9\u5c06\u6301\u7eed\u8fd0\u884c\uff0c\u5e76\u81ea\u52a8\u6309\u9700\u9a71\u52a8MPC\u534f\u8bae\u7684\u8fd0\u884c\uff0c\u5176\u4e2d\uff0c\u7a0d\u7b49\u7247\u523b\u5c06\u53ef\u5b8c\u6210DKG\uff0c\u4e4b\u540e\u5728 Web Console MPC Node\u7ba1\u7406\u754c\u9762\u5c06\u770b\u5230 \u201ckey share \u72b6\u6001\u201d\u4e3a\u201c\u5df2\u751f\u6210\u201d\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u2757\ufe0f\u2757\ufe0f\u91cd\u8981\uff1a\u5b89\u5168\u59a5\u5584\u5907\u4efd MPC Node \u672c\u5730\u6570\u636e\u5e93\u6587\u4ef6\uff01")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8be6\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"ws-1-node"},"MPC Node\u4f7f\u7528\u6307\u5357")," \u7ae0\u8282\u3002")),(0,l.kt)("h3",{id:"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd"},"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd"),(0,l.kt)("p",null,"Sinohope\u63d0\u4f9b\u7684\u94b1\u5305\u670d\u52a1\uff0c\u5bf9\u4e8e\u5f53\u524d\u5df2\u652f\u6301\u7684\u516c\u94fe\uff0cSinohope\u5c06\u4f1a\u7ef4\u62a4\u6240\u6709\u5730\u5740\u7684\u4f59\u989d\u3001\u4ea4\u6613\u7b49\u4fe1\u606f\uff0c\u5c24\u5176\u662f\u5bf9\u4e8eUTXO\u6a21\u578b\u7684\u516c\u94fe\uff0c\u8981\u7ef4\u62a4\u5176\u672a\u82b1\u8d39\u8f93\u51fa\u3002Sinohope\u63d0\u4f9b\u4e86\u76f8\u5e94\u63a5\u53e3\u4f9b\u7528\u6237\u53d1\u8d77\u4ea4\u6613\uff0c\u800c\u6700\u7ec8\u4ea4\u6613\u7684\u6784\u5efa\u3001\u53d1\u8d77MPC\u7b7e\u540d\u6d41\u7a0b\u3001\u4ea4\u6613\u5e7f\u64ad\u53ca\u8ddf\u8e2a\u5747\u7531Sinohope\u8d1f\u8d23\u5904\u7406\u3002"),(0,l.kt)("p",null,"\u5f00\u53d1\u8005\u96c6\u6210MPC WaaS\u670d\u52a1\uff0c\u53ef\u80fd\u8fd8\u4f1a\u6709\u5982\u4e0b\u9700\u6c42\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eSinohope\u5f53\u524d\u4e0d\u652f\u6301\u7684\u516c\u94fe\uff0c\u5f00\u53d1\u8005\u8003\u8651\u81ea\u884c\u652f\u6301\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eSinohope\u5df2\u652f\u6301\u7684\u516c\u94fe\uff0c\u4e5f\u60f3\u5b8c\u5168\u81ea\u884c\u7ba1\u7406\u4ea4\u6613\u3001\u4f59\u989d\u7b49\u4fe1\u606f\u3002")),(0,l.kt)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u4e24\u4e2a\u9700\u6c42\uff0cMPC WaaS \u63d0\u4f9b\u4e86\u9ad8\u7ea7\u529f\u80fd\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u53ea\u4f7f\u7528\u94b1\u5305\u670d\u52a1\u7684\u6700\u6838\u5fc3\u529f\u80fd\uff0c\u5373MPC\u534f\u8bae\u5b9e\u73b0\u4ee5\u53ca\u5206\u7247\u5bc6\u94a5\u7ba1\u7406\u673a\u5236\u3001\u5730\u5740\u6d3e\u751f\u3001MPC\u7b7e\u540d \u7b49\u529f\u80fd\uff0c\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\uff0c\u5f00\u53d1\u8005\u81ea\u884c\u7ba1\u7406\u5730\u5740\u3001\u4f59\u989d\u3001\u4ea4\u6613\u7b49\u4fe1\u606f\u53ca\u76f8\u5173\u4e1a\u52a1\u3002"),(0,l.kt)("p",null,"\u8981\u5f00\u542f\u5e76\u4f7f\u7528\u9ad8\u7ea7\u529f\u80fd\uff0c\u53ef\u6309\u5982\u4e0b\u6d41\u7a0b\u6267\u884c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u901a\u8fc7 web console \u4e3a\u91d1\u5e93\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\uff0c\u53c2\u8003",(0,l.kt)("a",{parentName:"li",href:"/docs/use/user-guide/waas/advanced"},"\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u5728\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\u7684\u91d1\u5e93\u4e0b\uff0c\u521b\u5efa\u94b1\u5305\u65f6\u5bf9\u94b1\u5305\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\uff0c\u6216\u66f4\u6539\u94b1\u5305\u5c5e\u6027\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\u3002\u76f8\u5173\u63a5\u53e3\uff1a",(0,l.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-create-wallets"},"\u521b\u5efa\u94b1\u5305"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet"},"\u94b1\u5305\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173"),"\uff1b\n",(0,l.kt)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a\u53ea\u6709\u5728\u91d1\u5e93\u548c\u94b1\u5305\u5747\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u8be5\u94b1\u5305\u624d\u80fd\u4f7f\u7528\u9ad8\u7ea7\u529f\u80fd\u3002")),(0,l.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u60a8\u7684MPC Node\u5df2\u914d\u7f6e\u597d\u56de\u8c03\u670d\u52a1\uff0c\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"ws-1-node"},"MPC Node\u4f7f\u7528\u6307\u5357"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u201c\u4f7f\u7528\u6307\u5b9a\u8def\u5f84\u521b\u5efa\u5730\u5740\u201d\u63a5\u53e3\uff0c\u6309\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\u6d3e\u751f\u516c\u94a5\uff0c\u5e76\u81ea\u884c\u4ece\u516c\u94a5\u63a8\u5bfc\u51fa\u5730\u5740\u3002\u63a5\u53e3\uff1a",(0,l.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path"},"\u6839\u636e\u6307\u5b9a\u8def\u5f84\u521b\u5efa\u5730\u5740"),"\uff1b"),(0,l.kt)("li",{parentName:"ol"},"\u81ea\u884c\u6784\u9020\u5f85\u7b7e\u540d\u54c8\u5e0c\uff0c\u4f7f\u7528\u201c",(0,l.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data"},"\u539f\u59cb\u6570\u636e\u7b7e\u540d"),"\u201d\u63a5\u53e3\u53d1\u8d77\u7b7e\u540d\u8bf7\u6c42\uff0c\u7b7e\u540d\u5b8c\u6210\u540e\uff0c\u7b7e\u540d\u503c\u5c06\u4f1a\u901a\u8fc7MPC Node\u7684\u56de\u8c03\u63a5\u53e3\u4e0a\u62a5\u3002")),(0,l.kt)("p",null,"\u6309\u7167\u4e0a\u8ff0\u6d41\u7a0b\u5373\u53ef\u5b9e\u73b0\u9ad8\u7ea7\u529f\u80fd\u96c6\u6210\u3002"))}k.isMDXComponent=!0}}]);