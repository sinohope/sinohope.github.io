"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7117],{5669:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>y,frontMatter:()=>p,metadata:()=>u,toc:()=>b});var t=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),r=(a(75190),a(47507)),d=a(24310),c=a(63303),l=(a(75035),a(85162));const p={id:"v-1-waas-mpc-wallet-get-address-balance",title:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",description:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",sidebar_label:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Account&address APIs"],operationId:"/v1/waas/mpc/wallet/get_address_balance","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/wallet/get_address_balance/",\n  {\n    "assetId": "USDT_ETH",\n    "address": "0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/wallet/get_address_balance/", map[string]string{\n    "assetId": "USDT_ETH",\n    "address": "0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["address","assetId"],type:"object",properties:{assetId:{type:"string",description:"\u5e01\u540d\u79f0 \u7b80\u79f0 \u5e01\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"USDT_ETH"},address:{type:"string",description:"\u5730\u5740",example:"0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{required:["assetDecimal","assetId","balance","chainSymbol"],type:"object",properties:{chainSymbol:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6",example:"BTC"},assetId:{type:"string",description:"\u5e01\u540d\u79f0 \u7b80\u79f0 \u5e01\u6807\u8bc6",example:"USDT_BTC"},balance:{type:"string",description:"\u91d1\u989d\n<p>\u6bd4\u59821\u4e2aeth,\u7cbe\u5ea618\u4f4d, \u8fd9\u91cc\u5c31\u662f 10^18 Wei,   1,000,000,000,000,000,000<p/>",example:"12223111"},assetDecimal:{type:"integer",description:"\u5e01\u79cd\u7cbe\u5ea6",example:18}}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/wallet/get_address_balance",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{assetId:"USDT_ETH",address:"0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"},info:{title:"Sinohope WaaS API",version:"0.9.2",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |"},postman:{name:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",description:{type:"text/plain"},url:{path:["v1","waas","mpc","wallet","get_address_balance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-waas-mpc-wallet-get-address-balance",id:"develop/mpc-waas-api/v-1-waas-mpc-wallet-get-address-balance",title:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",description:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",source:"@site/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-get-address-balance.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-waas-mpc-wallet-get-address-balance",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-get-address-balance",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-mpc-wallet-get-address-balance",title:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",description:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",sidebar_label:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Account&address APIs"],operationId:"/v1/waas/mpc/wallet/get_address_balance","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/wallet/get_address_balance/",\n  {\n    "assetId": "USDT_ETH",\n    "address": "0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/wallet/get_address_balance/", map[string]string{\n    "assetId": "USDT_ETH",\n    "address": "0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"\n})\n'}],requestBody:{content:{"application/json":{schema:{required:["address","assetId"],type:"object",properties:{assetId:{type:"string",description:"\u5e01\u540d\u79f0 \u7b80\u79f0 \u5e01\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"USDT_ETH"},address:{type:"string",description:"\u5730\u5740",example:"0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{required:["assetDecimal","assetId","balance","chainSymbol"],type:"object",properties:{chainSymbol:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6",example:"BTC"},assetId:{type:"string",description:"\u5e01\u540d\u79f0 \u7b80\u79f0 \u5e01\u6807\u8bc6",example:"USDT_BTC"},balance:{type:"string",description:"\u91d1\u989d\n<p>\u6bd4\u59821\u4e2aeth,\u7cbe\u5ea618\u4f4d, \u8fd9\u91cc\u5c31\u662f 10^18 Wei,   1,000,000,000,000,000,000<p/>",example:"12223111"},assetDecimal:{type:"integer",description:"\u5e01\u79cd\u7cbe\u5ea6",example:18}}},success:{type:"boolean"}}}}}}},"x-codegen-request-body-name":"root",description:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/wallet/get_address_balance",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{assetId:"USDT_ETH",address:"0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"},info:{title:"Sinohope WaaS API",version:"0.9.2",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |"},postman:{name:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",description:{type:"text/plain"},url:{path:["v1","waas","mpc","wallet","get_address_balance"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u67e5\u8be2\u6307\u5b9a\u94b1\u5305\u4e0b\u5df2\u6dfb\u52a0\u5730\u5740\u7684\u94fe\u53ca\u5176\u9996\u4e2a\u5730\u5740\u4fe1\u606f",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-list-added-chains"},next:{title:"\u68c0\u67e5\u5e01\u79cd\u5730\u5740\u662f\u5426\u6b63\u786e",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-is-valid-address"}},h={},b=[{value:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",id:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f",level:2}],f={toc:b},g="wrapper";function y(e){let{components:n,...a}=e;return(0,s.kt)(g,(0,t.Z)({},f,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f"},"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f"),(0,s.kt)("p",null,"\u67e5\u8be2\u5730\u5740\u4f59\u989d\u4fe1\u606f"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5e01\u540d\u79f0 \u7b80\u79f0 \u5e01\u6807\u8bc6 \u5177\u6709\u552f\u4e00\u6027",example:"USDT_ETH"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"address",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5730\u5740",example:"0x4dac0911bbb5f363e04c425d84a84a98355285fb359ca212701528bf9f4164d4"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(l.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(l.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(c.Z,{mdxType:"SchemaTabs"},(0,s.kt)(l.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(d.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u540d\u79f0 \u7b80\u79f0 \u94fe\u6807\u8bc6",example:"BTC"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5e01\u540d\u79f0 \u7b80\u79f0 \u5e01\u6807\u8bc6",example:"USDT_BTC"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"balance",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u91d1\u989d\n<p>\u6bd4\u59821\u4e2aeth,\u7cbe\u5ea618\u4f4d, \u8fd9\u91cc\u5c31\u662f 10^18 Wei,   1,000,000,000,000,000,000<p/>",example:"12223111"},mdxType:"SchemaItem"}),(0,s.kt)(d.Z,{collapsible:!1,name:"assetDecimal",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u5e01\u79cd\u7cbe\u5ea6",example:18},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": {\n    "chainSymbol": "BTC",\n    "assetId": "USDT_BTC",\n    "balance": "12223111",\n    "assetDecimal": 18\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}y.isMDXComponent=!0}}]);