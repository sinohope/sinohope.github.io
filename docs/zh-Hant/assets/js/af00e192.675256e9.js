(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2207],{44765:(t,e,a)=>{"use strict";a(67294),a(93162)},92272:(t,e,a)=>{"use strict";a(67294),a(44996),a(50941)},8233:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));a(92272),a(63303),a(85162),a(44765);const l={id:"sinohope-waas-api",title:"Sinohope WaaS API",description:"# Common Descriptions of Parameters and Return Values",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},i=void 0,o={unversionedId:"develop/mpc-waas-api/sinohope-waas-api",id:"develop/mpc-waas-api/sinohope-waas-api",title:"Sinohope WaaS API",description:"# Common Descriptions of Parameters and Return Values",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/sinohope-waas-api.info.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/sinohope-waas-api",permalink:"/zh-Hant/docs/develop/mpc-waas-api/sinohope-waas-api",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"sinohope-waas-api",title:"Sinohope WaaS API",description:"# Common Descriptions of Parameters and Return Values",sidebar_label:"Introduction",sidebar_position:0,hide_title:!0,custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"MPC WaaS API",permalink:"/zh-Hant/docs/category/mpc-waas-api"},next:{title:"Callback APIs",permalink:"/zh-Hant/docs/develop/mpc-waas-api/callback-ap-is"}},d={},p=[{value:"Unified Return Value Structure",id:"unified-return-value-structure",level:2},{value:"Common Error Code Definitions",id:"common-error-code-definitions",level:2},{value:"System Level Errors",id:"system-level-errors",level:3},{value:"Parameter Level Errors",id:"parameter-level-errors",level:3},{value:"Business Level Errors",id:"business-level-errors",level:3},{value:"Data Dictionary",id:"data-dictionary",level:2},{value:"Transaction Fee Rate Levels",id:"transaction-fee-rate-levels",level:3},{value:"Transaction Status",id:"transaction-status",level:3},{value:"Changelog",id:"changelog",level:2}],m={toc:p},s="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("span",{className:"theme-doc-version-badge badge badge--secondary"},"Version: 0.9.3"),(0,r.kt)("h1",{id:"sinohope-waas-api"},"Sinohope WaaS API"),(0,r.kt)("h1",{id:"common-descriptions-of-parameters-and-return-values"},"Common Descriptions of Parameters and Return Values"),(0,r.kt)("h2",{id:"unified-return-value-structure"},"Unified Return Value Structure"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"code"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status code (200 for success)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"msg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Status description")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"data"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Response data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"success"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Whether the request succeeded (true for success, false for failure)")))),(0,r.kt)("h2",{id:"common-error-code-definitions"},"Common Error Code Definitions"),(0,r.kt)("p",null,"When an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"200"),": Successful response. Refer to each API for the detailed response data."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"400"),": Bad Request."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"401"),": Unauthorized. Either API details are missing or invalid."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"403"),": Forbidden - You do not have access to the requested resource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"415"),": Unsupported media type. You need to use application/json. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"500"),": Sinohope internal error.")),(0,r.kt)("h3",{id:"system-level-errors"},"System Level Errors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Error Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1001"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unknown exception, please contact Sinohope customer service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Duplicate request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1004"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid API Key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1005"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signature verification failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1006"),(0,r.kt)("td",{parentName:"tr",align:"left"},"IP call frequency restricted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1007"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No permission of the current API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1008"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid IP address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signature in the request header cannot be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1010"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp in the request header cannot be empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1011"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Internal call exception")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1012"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid request, please check if there are missing headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1013"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signature failure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1014"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unsupported request type (only GET and POST supported)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1015"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Missing signature parameter")))),(0,r.kt)("h3",{id:"parameter-level-errors"},"Parameter Level Errors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Error Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2001"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The asset is not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The chain is not supported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2003"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid input address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2004"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction record does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2005"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No permission")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2006"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Abnormal transfer information (kyt check failed)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2007"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Miner fee too low")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2008"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The to address is not an internal address (transfer protection)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Insufficient balance to pay transfer amount and gas fee")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2010"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Insufficient gas (token transfer)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2011"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Insufficient available balance (token transfer)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2012"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Name cannot contain backslash \\ ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2013"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Address not found for given path")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2097"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid pageIndex, require pageIndex >=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2098"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Invalid pageSize, require pageSize <=50 and >=1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2099"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Missing required parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2101"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specified wallet does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2102"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specified asset does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2103"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specified chainSymbol does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2104"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Specified vault does not exist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2106"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The maximum number of single chain address subscriptions exceeds the limit (50)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2108"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Parameter type error")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2109"),(0,r.kt)("td",{parentName:"tr",align:"left"},"advancedEnabled must be 0 or 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2110"),(0,r.kt)("td",{parentName:"tr",align:"left"},"algorithmType must be 0 or 1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2111"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Must be less then 50 requestIds in one query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Must be less then 50 sinoIds in one query")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2113"),(0,r.kt)("td",{parentName:"tr",align:"left"},"signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2114"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The length of requestId is too long, the maximum is 120")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2115"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Incorrect message format, or incorrect signAlgorithm parameter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2116"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wallet and organization information do not match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2117"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wallet and vault information do not match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2118"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vault and organization information do not match")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2119"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current chain does not support self-transfer")))),(0,r.kt)("h3",{id:"business-level-errors"},"Business Level Errors"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Error Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4001"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Build transaction failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4002"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broadcast failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4003"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The transaction of current asset can not be accelerated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4004"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The transaction to be accelerated has been contained in blockchain or the nonce has been occupied")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4005"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The transaction to be canceled has been contained in blockchain or the nonce has been occupied")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4006"),(0,r.kt)("td",{parentName:"tr",align:"left"},"MPC Node not set")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4007"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DKG not done")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4008"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cannot initiate wallet creation operation on the same vault at the same time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4009"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wallet names cannot be the same under the same vault")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4010"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value of the count parameter does not match the length of walletInfos array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4011"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wallet quantity limit")))),(0,r.kt)("h2",{id:"data-dictionary"},"Data Dictionary"),(0,r.kt)("h3",{id:"transaction-fee-rate-levels"},"Transaction Fee Rate Levels"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LOW"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Low")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MIDDLE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Medium")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HIGH"),(0,r.kt)("td",{parentName:"tr",align:"left"},"High")))),(0,r.kt)("h3",{id:"transaction-status"},"Transaction Status"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction pending on secondary confirmation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction pending on signature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction pending")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broadcast failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction failed on blockchain")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Broadcast timeout")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"10"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction success")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"11"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction has been rollback")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"13"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction has rejected")))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Log"),(0,r.kt)("th",{parentName:"tr",align:null},"Date"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifier"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.9.0"),(0,r.kt)("td",{parentName:"tr",align:null},"First version"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-08-04"),(0,r.kt)("td",{parentName:"tr",align:null},"Owen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.9.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Added new sections, fixed some APIs"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-08-22"),(0,r.kt)("td",{parentName:"tr",align:null},"Owen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.9.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"2023-09-05"),(0,r.kt)("td",{parentName:"tr",align:null},"Owen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v0.9.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Updates the request parameters of interfaces ",(0,r.kt)("inlineCode",{parentName:"td"},"/v1/call_back/transaction/notify")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"/v1/call_back/withdrawal/confirm")),(0,r.kt)("td",{parentName:"tr",align:null},"2023-09-05"),(0,r.kt)("td",{parentName:"tr",align:null},"Owen")))))}k.isMDXComponent=!0},93162:function(t,e,a){var n,r,l,i=a(25108);r=[],void 0===(l="function"==typeof(n=function(){"use strict";function e(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(i.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){p(n.response,e,a)},n.onerror=function(){i.error("could not download file")},n.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function l(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a.g&&a.g.global===a.g?a.g:void 0,d=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),p=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!d?function(t,e,a){var i=o.URL||o.webkitURL,d=document.createElement("a");e=e||t.name||"download",d.download=e,d.rel="noopener","string"==typeof t?(d.href=t,d.origin===location.origin?l(d):r(d.href)?n(t,e,a):l(d,d.target="_blank")):(d.href=i.createObjectURL(t),setTimeout((function(){i.revokeObjectURL(d.href)}),4e4),setTimeout((function(){l(d)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,i){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,i),a);else if(r(t))n(t,a,i);else{var o=document.createElement("a");o.href=t,o.target="_blank",setTimeout((function(){l(o)}))}}:function(t,e,a,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var l="application/octet-stream"===t.type,i=/constructor/i.test(o.HTMLElement)||o.safari,p=/CriOS\/[\d]+/.test(navigator.userAgent);if((p||l&&i||d)&&"undefined"!=typeof FileReader){var m=new FileReader;m.onloadend=function(){var t=m.result;t=p?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},m.readAsDataURL(t)}else{var s=o.URL||o.webkitURL,k=s.createObjectURL(t);r?r.location=k:location.href=k,r=null,setTimeout((function(){s.revokeObjectURL(k)}),4e4)}});o.saveAs=p.saveAs=p,t.exports=p})?n.apply(e,r):n)||(t.exports=l)}}]);