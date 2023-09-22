"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[462],{40748:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>n,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var l=t(87462),o=(t(67294),t(3905));const p={},n="MPC WaaS \u5feb\u901f\u5165\u95e8",i={unversionedId:"develop/mpc-waas-api/quick-start/qs-1-waas",id:"develop/mpc-waas-api/quick-start/qs-1-waas",title:"MPC WaaS \u5feb\u901f\u5165\u95e8",description:"\u57fa\u4e8e\u6574\u4f53\u7684\u5f00\u653e\u5e73\u53f0\u4ecb\u7ecd\uff0c\u672c\u6559\u7a0b\u5c06\u4e3b\u8981\u4ecb\u7ecdMPC WaaS API\u7684\u96c6\u6210\u548c\u4f7f\u7528\u3002",source:"@site/docs/develop/mpc-waas-api/quick-start/qs-1-waas.md",sourceDirName:"develop/mpc-waas-api/quick-start",slug:"/develop/mpc-waas-api/quick-start/qs-1-waas",permalink:"/docs/develop/mpc-waas-api/quick-start/qs-1-waas",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"mpcApiSidebar",next:{title:"MPC Node \u4f7f\u7528\u6307\u5357",permalink:"/docs/develop/mpc-waas-api/quick-start/qs-2-node"}},r={},s=[{value:"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node",id:"\u90e8\u7f72\u5e76\u914d\u7f6empc-node",level:3},{value:"\u521b\u5efa\u91d1\u5e93",id:"\u521b\u5efa\u91d1\u5e93",level:3},{value:"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key",id:"\u521b\u5efa\u5e76\u914d\u7f6eapi-key",level:3},{value:"\uff08\u53ef\u9009\u4f46\u63a8\u8350\uff09\u914d\u7f6eAPI\u56de\u8c03",id:"\u53ef\u9009\u4f46\u63a8\u8350\u914d\u7f6eapi\u56de\u8c03",level:3},{value:"\u5f00\u53d1\u96c6\u6210",id:"\u5f00\u53d1\u96c6\u6210",level:3},{value:"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd",id:"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd",level:3}],k={toc:s},d="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,l.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mpc-waas-\u5feb\u901f\u5165\u95e8"},"MPC WaaS \u5feb\u901f\u5165\u95e8"),(0,o.kt)("p",null,"\u57fa\u4e8e\u6574\u4f53\u7684",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/get-started/quick-start"},"\u5f00\u653e\u5e73\u53f0\u4ecb\u7ecd"),"\uff0c\u672c\u6559\u7a0b\u5c06\u4e3b\u8981\u4ecb\u7ecdMPC WaaS API\u7684\u96c6\u6210\u548c\u4f7f\u7528\u3002"),(0,o.kt)("p",null,"\u672c\u6559\u7a0b\u4e3b\u8981\u6d89\u53ca\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node"),(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u91d1\u5e93"),(0,o.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key"),(0,o.kt)("li",{parentName:"ul"},"\uff08\u53ef\u9009\u4f46\u63a8\u8350\uff09\u914d\u7f6eAPI\u56de\u8c03"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u96c6\u6210"),(0,o.kt)("li",{parentName:"ul"},"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd")),(0,o.kt)("h3",{id:"\u90e8\u7f72\u5e76\u914d\u7f6empc-node"},"\u90e8\u7f72\u5e76\u914d\u7f6eMPC Node"),(0,o.kt)("p",null,"Sinohope\u4f7f\u7528 MPC-TSS \u6280\u672f\u63d0\u4f9b WaaS \u670d\u52a1\uff0c\u5e76\u91c7\u7528 3-3 \u7684\u9608\u503c\u7b7e\u540d\u8bbe\u7f6e\uff0c\u5e73\u53f0\u6301\u67092\u7247\u79c1\u94a5\u5206\u7247\uff0c\u7528\u6237\u6301\u67091\u7247\u79c1\u94a5\u5206\u7247\u3002"),(0,o.kt)("p",null,"Sinohope\u63d0\u4f9b MPC Node\u8f6f\u4ef6\uff0c\u7531\u5ba2\u6237\u90e8\u7f72\u8fd0\u884c\uff0c\u7528\u4e8e\u7ba1\u7406\u5c5e\u4e8e\u7528\u6237\u7684\u79c1\u94a5\u5206\u7247\u3002\u8981\u914d\u7f6e MPC Node\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u51c6\u5907\uff1a\u5f00\u901aMPC WaaS \u8d26\u53f7\uff1b\u51c6\u5907\u597d\u90e8\u7f72\u73af\u5883\uff0c\u83b7\u53d6\u5e76\u9a8c\u8bc1 MPC Node \u5b89\u88c5\u5305\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u521d\u59cb\u5316\u8282\u70b9\uff0c\u751f\u6210\u8282\u70b9\u7684 Node ID \u548c \u90e8\u7f72\u56de\u8c03\u670d\u52a1\u6240\u9700\u7684\u8282\u70b9\u516c\u94a5\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\uff08\u6309\u9700\uff09\u90e8\u7f72\u53ca\u914d\u7f6e\u60a8\u7684\u56de\u8c03\u670d\u52a1\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u7ed1\u5b9aMPC Node\uff0c\u767b\u5f55 web console \u914d\u7f6e MPC Node\uff0c\u5c06\u60a8\u7684 Node ID \u4e0e\u60a8\u7684\u7ec4\u7ec7\u8d26\u53f7\u7ed1\u5b9a\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8MPC Node\uff0c\u8282\u70b9\u5c06\u6301\u7eed\u8fd0\u884c\uff0c\u5e76\u81ea\u52a8\u6309\u9700\u9a71\u52a8MPC\u534f\u8bae\u7684\u8fd0\u884c\uff0c\u5176\u4e2d\uff0c\u7a0d\u7b49\u7247\u523b\u5c06\u53ef\u5b8c\u6210DKG\uff0c\u4e4b\u540e\u5728 Web Console MPC Node\u7ba1\u7406\u754c\u9762\u5c06\u770b\u5230 \u201ckey share \u72b6\u6001\u201d\u4e3a\u201c\u5df2\u751f\u6210\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u2757\ufe0f\u2757\ufe0f\u91cd\u8981\uff1a\u5b89\u5168\u59a5\u5584\u5907\u4efd MPC Node \u672c\u5730\u6570\u636e\u5e93\u6587\u4ef6\uff01")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"qs-2-node"},"MPC Node\u4f7f\u7528\u6307\u5357")," \u7ae0\u8282\u3002")),(0,o.kt)("h3",{id:"\u521b\u5efa\u91d1\u5e93"},"\u521b\u5efa\u91d1\u5e93"),(0,o.kt)("p",null,"\u5728 WaaS\u670d\u52a1\u4e2d\uff0c\u91d1\u5e93\u9700\u8981\u5728Web console\u7ba1\u7406\u754c\u9762\u4eba\u5de5\u521b\u5efa\uff0c\u4e4b\u540e\uff0c\u94b1\u5305\u3001\u94fe\u4e0a\u5730\u5740 \u5747\u9700\u901a\u8fc7API\u5b8c\u6210\u521b\u5efa\u3002"),(0,o.kt)("p",null,"\u5728 \u201cwaas\u94b1\u5305\u201d\u754c\u9762\uff0c\u901a\u8fc7\u201c\u521b\u5efa\u91d1\u5e93\u201d \u529f\u80fd\u5373\u53ef\u5b8c\u6210\u91d1\u5e93\u521b\u5efa\u3002"),(0,o.kt)("p",null,"\u5728\u94b1\u5305\u3001\u5730\u5740\u7684\u5e94\u7528\u6a21\u5f0f\u65b9\u9762\uff0c\u6709\u4e24\u79cd\u6a21\u5f0f\u53ef\u4f9b\u60a8\u53c2\u8003\uff0c\u5177\u4f53\u5e94\u8be5\u7ed3\u5408\u60a8\u7684\u4e1a\u52a1\u800c\u5b9a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e3a\u60a8\u7684\u6bcf\u4e2a\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u5206\u914d\u4e00\u4e2a\u591a\u94fe\u94b1\u5305\uff1b\u5728\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u5bf9\u94fe\u4e0a\u5730\u5740\u7684\u7ba1\u7406\u5c06\u4f1a\u66f4\u52a0\u96c6\u4e2d\uff0c\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u4e4b\u95f4\u53ef\u4ee5\u6709\u8f83\u6e05\u6670\u7684\u5212\u5206\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53ea\u4f7f\u7528\u4e00\u4e2a\u591a\u94fe\u94b1\u5305\uff0c\u5728\u8be5\u94b1\u5305\u4e0b\u6309\u9700\u521b\u5efa\u5e76\u4e3a\u4e1a\u52a1/\u7ec8\u7aef\u7528\u6237 \u5206\u914d\u94fe\u4e0a\u5730\u5740\u3002\u6b64\u79cd\u6a21\u5f0f\u4e0b\uff0c\u76f4\u63a5\u7ba1\u7406\u6700\u7ec8\u7684\u94fe\u4e0a\u5730\u5740\uff0c\u66f4\u63a5\u8fd1\u4e8e\u4f20\u7edf\u7684\u5730\u5740\u7ba1\u7406\u65b9\u5f0f\u3002")),(0,o.kt)("h3",{id:"\u521b\u5efa\u5e76\u914d\u7f6eapi-key"},"\u521b\u5efa\u5e76\u914d\u7f6eAPI Key"),(0,o.kt)("p",null,"\u5f53\u524d\uff0c\u9700\u8981\u5bf9\u6bcf\u4e2a\u91d1\u5e93\u8fdb\u884c\u72ec\u7acb\u914d\u7f6e\uff0c\u5305\u62ec API Key\u8bbe\u7f6e\u3001\u56de\u8c03\u8bbe\u7f6e\u3001\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173\u8bbe\u7f6e \u7b49\u3002"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u521b\u5efa\u4e00\u5bf9 ECDSA \u5bc6\u94a5\u5bf9\u7528\u4e8eWaaS API\u8bf7\u6c42\u9274\u6743\u3002\u60a8\u53ef\u901a\u8fc7 Sinohope \u5b98\u65b9SDK\uff0c\u6216\u8005\u5982\u4e0bjava \u793a\u4f8b\u6765\u521b\u5efa\u60a8\u7684\u5bc6\u94a5\u5bf9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import org.nhex.sinohope.sign.api.ECDSA;\n\nECDSA ecdsa = new ECDSA(SECP256R1);\nKeyPair keyPair = ecdsa.generateKeyPair();\nString publicKey = Hex.toHexString(keyPair.getPublic().getEncoded());\nString privateKey = Hex.toHexString(keyPair.getPrivate().getEncoded());\nSystem.out.println("publicKey = " + publicKey);\nSystem.out.println("privateKey = " + privateKey);\n')),(0,o.kt)("p",null,"\u5176\u4e2d\uff0c\u79c1\u94a5 ",(0,o.kt)("inlineCode",{parentName:"p"},"privateKey"),"\u7531\u60a8\u81ea\u5df1\u59a5\u5584\u4fdd\u7ba1\u5e76\u914d\u7f6e\u5230\u60a8\u7684\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u4ee3\u8868\u60a8\u7684\u8eab\u4efd\uff0c\u7528\u4e8e\u505aAPI\u8bf7\u6c42\u7b7e\u540d\uff1b\u516c\u94a5",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey")," \u5373 API Key\uff0c\u9700\u8981\u60a8\u901a\u8fc7Sinohope web console\u7ba1\u7406\u754c\u9762\uff0c\u914d\u7f6e\u5230\u60a8\u7684\u91d1\u5e93\u4e2d\uff0c\u4ece\u800c\u7ed1\u5b9a\u5176API\u8bbf\u95ee\u6743\u9650\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u63a5\u53e3\u8bf7\u6c42\u7b7e\u540d\u53ca\u9a8c\u7b7e\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003\u201c",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/get-started/general"},"API \u8ba4\u8bc1"),"\u201d \u7ae0\u8282\u3002")),(0,o.kt)("h3",{id:"\u53ef\u9009\u4f46\u63a8\u8350\u914d\u7f6eapi\u56de\u8c03"},"\uff08\u53ef\u9009\u4f46\u63a8\u8350\uff09\u914d\u7f6eAPI\u56de\u8c03"),(0,o.kt)("p",null,"\u5728MPC WaaS \u7684\u4e1a\u52a1\u96c6\u6210\u5b89\u5168\u4f53\u7cfb\u4e2d\uff0c\u6d89\u53ca\u5230\u9700\u8981\u7528\u6237\u63d0\u4f9b\u7684\u56de\u8c03\u670d\u52a1\u6709\u4e24\u4e2a\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u4e2d\u5fc3\u5316\u7684\u4ea4\u6613\u56de\u8c03\u3002\u7528\u6237\u914d\u7f6e\u540e\uff0c\u5728\u4ea4\u6613\u4e0a\u94fe\u3001\u7528\u6237\u53d1\u8d77\u4ea4\u6613\u65f6\uff0cSinohope \u5e73\u53f0\u4f1a\u56de\u8c03\u7528\u6237\u914d\u7f6e\u7684\u63a5\u53e3\uff0c\u505a\u4ea4\u6613\u4e0a\u94fe\u901a\u77e5\u3001\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u53bb\u4e2d\u5fc3\u5316\u7684MPC Node \u56de\u8c03\u3002\u5728\u7528\u6237\u81ea\u5df1\u7684MPC Node\u4e2d\u914d\u7f6e\uff0c\u914d\u7f6eMPC Node\u56de\u8c03\u540e\uff0cMPC Node\u5728\u53d1\u8d77MPC\u534f\u8bae\u8fd0\u884c\u4e4b\u524d\u4f1a\u8c03\u56de\u8c03\u63a5\u53e3\uff0c\u7528\u6237\u53ef\u5728\u56de\u8c03\u670d\u52a1\u4e2d\u96c6\u6210\u98ce\u63a7\u903b\u8f91\u3002\u53e6\u5916\uff0c\u5bf9\u4e8e\u6d88\u606f\u7b7e\u540d\u3001\u539f\u59cb\u6570\u636e\u7b7e\u540d \u7684\u529f\u80fd\uff0c\u5728\u7b7e\u540d\u5b8c\u6210\u540e\u4f1a\u901a\u8fc7\u56de\u8c03\u63a5\u53e3\u5c06\u7b7e\u540d\u7ed3\u679c\u4e0a\u62a5\u7ed9\u56de\u8c03\u670d\u52a1\u3002\u8fd9\u90e8\u5206\u8be6\u89c1 ",(0,o.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/quick-start/qs-2-node"},"MPC Node \u4f7f\u7528\u6307\u5357")," \u4e2d\u6709\u5173MPC Node\u56de\u8c03\u673a\u5236\u7684\u8bf4\u660e\u3002")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4e2d\u5fc3\u5316\u7684\u4ea4\u6613\u56de\u8c03\uff0c\u9700\u8981\u901a\u8fc7web console\u4e2d\u91d1\u5e93\u4e0b\u7684\u201cAPI\u56de\u8c03\u201d \u529f\u80fd\u8fdb\u884c\u914d\u7f6e\u3002\u56de\u8c03\u8bf7\u6c42\uff0c\u5c06\u91c7\u7528\u4e0ewaas \u63a5\u53e3\u76f8\u540c\u7684 API\u8ba4\u8bc1\u673a\u5236\u3002"),(0,o.kt)("p",null,"\u5728\u201cAPI\u56de\u8c03\u201d\u754c\u9762\uff0c\u4f1a\u5c55\u793a Sinohope \u7684\u56de\u8c03\u8bf7\u6c42\u516c\u94a5\uff1b\u53d1\u8d77\u56de\u8c03\u8bf7\u6c42\u65f6\uff0cSinohope\u4f1a\u4f7f\u7528\u79c1\u94a5\u7b7e\u540d\uff0c\u56de\u8c03\u670d\u52a1\u4e2d\u5e94\u4f7f\u7528Sinohope\u63d0\u4f9b\u7684\u516c\u94a5\u8fdb\u884c\u9a8c\u7b7e\uff0c\u4ee5\u786e\u4fdd\u8bf7\u6c42\u6765\u81eaSinohope\u5e76\u4e14\u53c2\u6570\u672a\u88ab\u7be1\u6539\u3002\u540c\u65f6\uff0c\u4e5f\u5efa\u8bae\u56de\u8c03\u670d\u52a1\u5c06Sinohope \u7684IP\u5730\u5740\u8bbe\u7f6e\u4e3a\u8bf7\u6c42\u6765\u6e90\u767d\u540d\u5355\uff0c\u5e76\u4e14\u53ea\u5141\u8bb8\u767d\u540d\u5355\u4e2d\u7684IP\u8bbf\u95ee\u60a8\u7684\u56de\u8c03\u670d\u52a1\uff0c\u4ece\u800c\u589e\u5f3a\u5b89\u5168\u6027\u3002"),(0,o.kt)("p",null,"\u56de\u8c03\u670d\u52a1\u793a\u4f8b\uff0c\u53ef\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-waas-code-demo"},"sinohope-waas-code-demo"),"\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"golang"),"\u76ee\u5f55\u4e0b\u7684\u793a\u4f8b\u3002"),(0,o.kt)("h3",{id:"\u5f00\u53d1\u96c6\u6210"},"\u5f00\u53d1\u96c6\u6210"),(0,o.kt)("p",null,"Sinohope\u5c06\u63d0\u4f9b\u591a\u79cd\u8bed\u8a00\u7684SDK\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u96c6\u6210WaaS\u529f\u80fd\u3002SDK \u4e3b\u8981\u63d0\u4f9b\u4ee5\u4e0b\u529f\u80fd\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u5c01\u88c5\u63a5\u53e3\u8bf7\u6c42\u7b7e\u540d\u5904\u7406\uff1b"),(0,o.kt)("li",{parentName:"ul"},"\u5c01\u88c5API\u63a5\u53e3\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u4ee5\u65b9\u6cd5\u8c03\u7528\u7684\u65b9\u5f0f\u5b8c\u6210\u5bf9WaaS API\u7684\u8bf7\u6c42\u3002")),(0,o.kt)("p",null,"\u5f53\u524d\u63d0\u4f9b\u7684SDK\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/sinohope-java-api"},"java sdk"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/golang-sdk"},"golang sdk"),"\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sinohope/js-sdk"},"JS sdk"),"\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u6682\u672a\u63d0\u4f9bSDK\u7684\u5f00\u53d1\u8bed\u8a00\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4ed4\u7ec6\u4e86\u89e3Sinohope\u7684API\u8ba4\u8bc1\u8981\u6c42\uff0c\u5e76\u81ea\u884c\u5b9e\u73b0\u63a5\u53e3\u8bf7\u6c42\u5904\u7406\uff0c\u8be6\u89c1",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/get-started/general#api-authentication"},"API \u8ba4\u8bc1"),"\u3002"),(0,o.kt)("h3",{id:"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd"},"\u9ad8\u7ea7\u529f\u80fd\u4ecb\u7ecd"),(0,o.kt)("p",null,"Sinohope\u63d0\u4f9b\u7684\u94b1\u5305\u670d\u52a1\uff0c\u5bf9\u4e8e\u5f53\u524d\u5df2\u652f\u6301\u7684\u516c\u94fe\uff0cSinohope\u5c06\u4f1a\u7ef4\u62a4\u6240\u6709\u5730\u5740\u7684\u4f59\u989d\u3001\u4ea4\u6613\u7b49\u4fe1\u606f\uff0c\u5c24\u5176\u662f\u5bf9\u4e8eUTXO\u6a21\u578b\u7684\u516c\u94fe\uff0c\u8981\u7ef4\u62a4\u5176\u672a\u82b1\u8d39\u8f93\u51fa\u3002Sinohope\u63d0\u4f9b\u4e86\u76f8\u5e94\u63a5\u53e3\u4f9b\u7528\u6237\u53d1\u8d77\u4ea4\u6613\uff0c\u800c\u6700\u7ec8\u4ea4\u6613\u7684\u6784\u5efa\u3001\u53d1\u8d77MPC\u7b7e\u540d\u6d41\u7a0b\u3001\u4ea4\u6613\u5e7f\u64ad\u53ca\u8ddf\u8e2a\u5747\u7531Sinohope\u8d1f\u8d23\u5904\u7406\u3002"),(0,o.kt)("p",null,"\u5f00\u53d1\u8005\u96c6\u6210MPC WaaS\u670d\u52a1\uff0c\u53ef\u80fd\u8fd8\u4f1a\u6709\u5982\u4e0b\u9700\u6c42\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eSinohope\u5f53\u524d\u4e0d\u652f\u6301\u7684\u516c\u94fe\uff0c\u5f00\u53d1\u8005\u8003\u8651\u81ea\u884c\u652f\u6301\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u4e8eSinohope\u5df2\u652f\u6301\u7684\u516c\u94fe\uff0c\u4e5f\u60f3\u5b8c\u5168\u81ea\u884c\u7ba1\u7406\u4ea4\u6613\u3001\u4f59\u989d\u7b49\u4fe1\u606f\u3002")),(0,o.kt)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u4e24\u4e2a\u9700\u6c42\uff0cMPC WaaS \u63d0\u4f9b\u4e86\u9ad8\u7ea7\u529f\u80fd\uff0c\u5141\u8bb8\u5f00\u53d1\u8005\u53ea\u4f7f\u7528\u94b1\u5305\u670d\u52a1\u7684\u6700\u6838\u5fc3\u529f\u80fd\uff0c\u5373MPC\u534f\u8bae\u5b9e\u73b0\u4ee5\u53ca\u5206\u7247\u5bc6\u94a5\u7ba1\u7406\u673a\u5236\u3001\u5730\u5740\u6d3e\u751f\u3001MPC\u7b7e\u540d \u7b49\u529f\u80fd\uff0c\u5728\u6b64\u57fa\u7840\u4e4b\u4e0a\uff0c\u5f00\u53d1\u8005\u81ea\u884c\u7ba1\u7406\u5730\u5740\u3001\u4f59\u989d\u3001\u4ea4\u6613\u7b49\u4fe1\u606f\u53ca\u76f8\u5173\u4e1a\u52a1\u3002"),(0,o.kt)("p",null,"\u8981\u5f00\u542f\u5e76\u4f7f\u7528\u9ad8\u7ea7\u529f\u80fd\uff0c\u53ef\u6309\u5982\u4e0b\u6d41\u7a0b\u6267\u884c\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 web console \u4e3a\u91d1\u5e93\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\uff0c\u53c2\u8003",(0,o.kt)("a",{parentName:"li",href:"/docs/use/user-guide/waas/advanced"},"\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\u7684\u91d1\u5e93\u4e0b\uff0c\u521b\u5efa\u94b1\u5305\u65f6\u5bf9\u94b1\u5305\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\uff0c\u6216\u66f4\u6539\u94b1\u5305\u5c5e\u6027\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\u3002\u76f8\u5173\u63a5\u53e3\uff1a",(0,o.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-create-wallets"},"\u521b\u5efa\u94b1\u5305"),"\uff0c",(0,o.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-update-wallet"},"\u94b1\u5305\u9ad8\u7ea7\u529f\u80fd\u5f00\u5173"),"\uff1b\n",(0,o.kt)("strong",{parentName:"li"},"\u6ce8\u610f\uff1a\u53ea\u6709\u5728\u91d1\u5e93\u548c\u94b1\u5305\u5747\u5f00\u542f\u9ad8\u7ea7\u529f\u80fd\u7684\u60c5\u51b5\u4e0b\uff0c\u8be5\u94b1\u5305\u624d\u80fd\u4f7f\u7528\u9ad8\u7ea7\u529f\u80fd\u3002")),(0,o.kt)("li",{parentName:"ol"},"\u786e\u4fdd\u60a8\u7684MPC Node\u5df2\u914d\u7f6e\u597d\u56de\u8c03\u670d\u52a1\uff0c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"qs-2-node"},"MPC Node\u4f7f\u7528\u6307\u5357"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u201c\u4f7f\u7528\u6307\u5b9a\u8def\u5f84\u521b\u5efa\u5730\u5740\u201d\u63a5\u53e3\uff0c\u6309\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\u6d3e\u751f\u516c\u94a5\uff0c\u5e76\u81ea\u884c\u4ece\u516c\u94a5\u63a8\u5bfc\u51fa\u5730\u5740\u3002\u63a5\u53e3\uff1a",(0,o.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-gen-address-by-path"},"\u6839\u636e\u6307\u5b9a\u8def\u5f84\u521b\u5efa\u5730\u5740"),"\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u81ea\u884c\u6784\u9020\u5f85\u7b7e\u540d\u54c8\u5e0c\uff0c\u4f7f\u7528\u201c",(0,o.kt)("a",{parentName:"li",href:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data"},"\u539f\u59cb\u6570\u636e\u7b7e\u540d"),"\u201d\u63a5\u53e3\u53d1\u8d77\u7b7e\u540d\u8bf7\u6c42\uff0c\u7b7e\u540d\u5b8c\u6210\u540e\uff0c\u7b7e\u540d\u503c\u5c06\u4f1a\u901a\u8fc7MPC Node\u7684\u56de\u8c03\u63a5\u53e3\u4e0a\u62a5\u3002")),(0,o.kt)("p",null,"\u6309\u7167\u4e0a\u8ff0\u6d41\u7a0b\u5373\u53ef\u5b9e\u73b0\u9ad8\u7ea7\u529f\u80fd\u96c6\u6210\u3002"))}u.isMDXComponent=!0}}]);