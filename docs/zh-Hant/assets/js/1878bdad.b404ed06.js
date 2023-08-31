(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8754],{44765:(e,t,n)=>{"use strict";n(67294),n(93162)},92272:(e,t,n)=>{"use strict";n(67294),n(44996),n(50941)},22071:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var l=n(87462),a=(n(67294),n(3905)),i=(n(92272),n(63303)),o=n(85162);n(44765);const r={id:"openloop-api",title:"OpenLoop API",description:"# Changelog",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},d=void 0,s={unversionedId:"develop/openloop-api/openloop-api",id:"develop/openloop-api/openloop-api",title:"OpenLoop API",description:"# Changelog",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/openloop-api/openloop-api.info.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/openloop-api",permalink:"/zh-Hant/docs/develop/openloop-api/openloop-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"openloop-api",title:"OpenLoop API",description:"# Changelog",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"Openloop API",permalink:"/zh-Hant/docs/category/openloop-api"},next:{title:"Custody->Exchange",permalink:"/zh-Hant/docs/develop/openloop-api/custody-exchange"}},p={},u=[{value:"v0.9.12",id:"v0912",level:3},{value:"v0.9.11",id:"v0911",level:3},{value:"v0.9.10",id:"v0910",level:3},{value:"v0.9.9",id:"v099",level:3},{value:"v0.9.8",id:"v098",level:3},{value:"v0.9.7",id:"v097",level:3},{value:"v0.9.6",id:"v096",level:3},{value:"v0.9.5",id:"v095",level:3},{value:"v0.9.4",id:"v094",level:3},{value:"v0.9.3",id:"v093",level:3},{value:"v0.9.2",id:"v092",level:3},{value:"v0.9.1",id:"v091",level:3},{value:"v0.9.0",id:"v090",level:3},{value:"Initiate",id:"initiate",level:2},{value:"Deposit",id:"deposit",level:2},{value:"Settlement",id:"settlement",level:2},{value:"Withdrawal",id:"withdrawal",level:2}],c={toc:u},k="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,l.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.9.12"),(0,a.kt)("h1",{id:"openloop-api"},"OpenLoop API"),(0,a.kt)("h1",{id:"changelog"},"Changelog"),(0,a.kt)("p",null,"Changes log, dates are displayed in UTC, shows in a reverse order."),(0,a.kt)("h3",{id:"v0912"},"v0.9.12"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/28 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/tx/build")," : update the response.")),(0,a.kt)("h3",{id:"v0911"},"v0.9.11"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/16 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"E-custody ",(0,a.kt)("inlineCode",{parentName:"li"},"/internal/v1/mpc/start")," : add fields ",(0,a.kt)("inlineCode",{parentName:"li"},"transactionId"),".")),(0,a.kt)("h3",{id:"v0910"},"v0.9.10"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/14 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/address")," : new added api."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/finish")," : new added api.")),(0,a.kt)("h3",{id:"v099"},"v0.9.9"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/06 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/tx/build")," : add fields ",(0,a.kt)("inlineCode",{parentName:"li"},"cryptography")," in the response."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/tx/broadcast")," : update single fields ",(0,a.kt)("inlineCode",{parentName:"li"},"signature")," to object type fields ",(0,a.kt)("inlineCode",{parentName:"li"},"signatures"),", in order to adapt to the UTXO transactions.")),(0,a.kt)("h3",{id:"v098"},"v0.9.8"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/06/01 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/mpc/pubkey")," :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/settlement/confirm")," : add fields ",(0,a.kt)("inlineCode",{parentName:"li"},"approved"),".")),(0,a.kt)("h3",{id:"v097"},"v0.9.7"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/05/30 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/deposit")," : new added."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/deposit/balance")," : new added."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/withdrawable"),": change the type of the fields ",(0,a.kt)("inlineCode",{parentName:"li"},"amount")," in response data from ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),".")),(0,a.kt)("h3",{id:"v096"},"v0.9.6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/05/30 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/settlement/network")," : change fields name ",(0,a.kt)("inlineCode",{parentName:"li"},"perferedNetwork")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"settlementNetwork"))),(0,a.kt)("h3",{id:"v095"},"v0.9.5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/05/26 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/mpc/join")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/internal/v1/mpc/join"),": add fields ",(0,a.kt)("inlineCode",{parentName:"li"},"roomId"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"partyId"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"partyIds"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/settlement/list")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement"),": fix typo, ",(0,a.kt)("inlineCode",{parentName:"li"},"assetid")," -",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"assetId"),"."),(0,a.kt)("li",{parentName:"ul"},"add some examples, fix some descriptions.")),(0,a.kt)("h3",{id:"v094"},"v0.9.4"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/05/18 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/settlement/network"),": The settlement network should be specified for a currency, so change the field ",(0,a.kt)("inlineCode",{parentName:"li"},"assetId")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"currency"),"."),(0,a.kt)("li",{parentName:"ul"},"Added new apis in the Exchange: ",(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/transaction/status")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/withdrawable"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/tx/build")," : add feild ",(0,a.kt)("inlineCode",{parentName:"li"},"replacedTxId"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/internal/v1/mpc/signature/result")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/tx/broadcast"),": modify the fields about signature."),(0,a.kt)("li",{parentName:"ul"},"modify the description of ",(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/transactions"),".")),(0,a.kt)("h3",{id:"v093"},"v0.9.3"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/05/12 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/exchange/v1/address")," : add request feild ",(0,a.kt)("inlineCode",{parentName:"li"},"settlementNetwork"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/collateral/v1/settlement/tx/build")," : remove feilds ",(0,a.kt)("inlineCode",{parentName:"li"},"network"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"address")," in request, they should be determined by the settlement details."),(0,a.kt)("li",{parentName:"ul"},'add security section for all "Exchange-',">",'Custody" apis.')),(0,a.kt)("h3",{id:"v092"},"v0.9.2"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/05/04 by Darlzan")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add apis related to mpc business")),(0,a.kt)("h3",{id:"v091"},"v0.9.1"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/03/24 by Kevin")),(0,a.kt)("p",null,"Second working version."),(0,a.kt)("h3",{id:"v090"},"v0.9.0"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"2023/03/12 by Kevin")),(0,a.kt)("p",null,"First version"),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("p",null,"Roles: User U, Exchange E, Custodian Platform C."),(0,a.kt)("p",null,"Main Exchange Account: Abbreviated as MEA. It is an account opened by user U on exchange E, usually identified by an API key."),(0,a.kt)("p",null,"Collateral Vault Account: Abbreviated as CVA. When user U needs to map assets to exchange E, a CVA is created on custodian platform C. CVA is one-to-one mapped with MEA. The unique ID of CVA is collateralId."),(0,a.kt)("h1",{id:"main-steps"},"Main Steps"),(0,a.kt)("h2",{id:"initiate"},"Initiate"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32076).Z,width:"1224",height:"600"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81025).Z,width:"2766",height:"1026"})),(0,a.kt)("h2",{id:"deposit"},"Deposit"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(58482).Z,width:"3312",height:"1244"})),(0,a.kt)("h2",{id:"settlement"},"Settlement"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17583).Z,width:"3312",height:"1784"})),(0,a.kt)("h2",{id:"withdrawal"},"Withdrawal"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(18430).Z,width:"3312",height:"1764"})),(0,a.kt)("h1",{id:"response-code-definition"},"Response code definition"),(0,a.kt)("p",null,"Commonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: ",(0,a.kt)("a",{parentName:"p",href:"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml%5C"},"https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml\\")),(0,a.kt)("p",null,"In OpenLoop, we should use a few well defined HTTP status codes as follow:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"200"),": Successful response. Refer to each API for the detailed response data."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"400"),": Return Bad Request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"401"),": Unauthorized. Either API details are missing or invalid"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"403"),": Forbidden - You do not have access to the requested resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"415"),": Unsupported media type. You need to use application/json."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"500"),": Exchange/SinoHope internal error.")),(0,a.kt)("div",{style:{marginBottom:"2rem"}},(0,a.kt)("h2",{id:"authentication",style:{marginBottom:"1rem"}},"Authentication"),(0,a.kt)(i.Z,{className:"openapi-tabs__security-schemes",mdxType:"SchemaTabs"},(0,a.kt)(o.Z,{label:"API Key: ApiKeyAuth",value:"ApiKeyAuth",mdxType:"TabItem"},(0,a.kt)("p",null,"This API key is given to you by Sinohope when onboarding your exchange."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"apiKey")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Header parameter name:"),(0,a.kt)("td",null,"BIZ-API-KEY")))))),(0,a.kt)(o.Z,{label:"API Key: ApiNonce",value:"ApiNonce",mdxType:"TabItem"},(0,a.kt)("p",null,"A nonce value (timestamp) that is included in the data to be signed."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"apiKey")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Header parameter name:"),(0,a.kt)("td",null,"BIZ-API-NONCE")))))),(0,a.kt)(o.Z,{label:"API Key: ApiSig",value:"ApiSig",mdxType:"TabItem"},(0,a.kt)("p",null,"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."),(0,a.kt)("div",null,(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Security Scheme Type:"),(0,a.kt)("td",null,"apiKey")),(0,a.kt)("tr",null,(0,a.kt)("th",null,"Header parameter name:"),(0,a.kt)("td",null,"BIZ-API-SIGNATURE")))))))))}m.isMDXComponent=!0},93162:function(e,t,n){var l,a,i,o=n(25108);a=[],void 0===(i="function"==typeof(l=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(o.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function l(e,t,n){var l=new XMLHttpRequest;l.open("GET",e),l.responseType="blob",l.onload=function(){s(l.response,t,n)},l.onerror=function(){o.error("could not download file")},l.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function i(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(l){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var r="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,d=r.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=r.saveAs||("object"!=typeof window||window!==r?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(e,t,n){var o=r.URL||r.webkitURL,d=document.createElement("a");t=t||e.name||"download",d.download=t,d.rel="noopener","string"==typeof e?(d.href=e,d.origin===location.origin?i(d):a(d.href)?l(e,t,n):i(d,d.target="_blank")):(d.href=o.createObjectURL(e),setTimeout((function(){o.revokeObjectURL(d.href)}),4e4),setTimeout((function(){i(d)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,o),n);else if(a(e))l(e,n,o);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout((function(){i(r)}))}}:function(e,t,n,a){if((a=a||open("","_blank"))&&(a.document.title=a.document.body.innerText="downloading..."),"string"==typeof e)return l(e,t,n);var i="application/octet-stream"===e.type,o=/constructor/i.test(r.HTMLElement)||r.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||i&&o||d)&&"undefined"!=typeof FileReader){var p=new FileReader;p.onloadend=function(){var e=p.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),a?a.location.href=e:location=e,a=null},p.readAsDataURL(e)}else{var u=r.URL||r.webkitURL,c=u.createObjectURL(e);a?a.location=c:location.href=c,a=null,setTimeout((function(){u.revokeObjectURL(c)}),4e4)}});r.saveAs=s.saveAs=s,e.exports=s})?l.apply(t,a):l)||(e.exports=i)},58482:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/deposit-8f72b6728bdb95aef3ed49c733ad21a3.png"},17583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/settlement-0c1f15768bcdd48eb44ffde5195ee8d1.png"},32076:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/setup_cva_share-78c55ff1cef4c9693bfde7293109d943.png"},81025:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/setup_seq-69769a01ad2e4b62f704c12185480715.png"},18430:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=n.p+"assets/images/withdraw-e10f9dcfe9f65581d6da5647c89a7b68.png"}}]);