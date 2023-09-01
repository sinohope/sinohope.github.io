"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2581],{51582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>m,default:()=>v,frontMatter:()=>c,metadata:()=>h,toc:()=>f});var a=n(87462),s=(n(67294),n(3905)),i=n(26389),o=n(94891),d=(n(75190),n(47507)),l=n(24310),r=n(63303),p=(n(75035),n(85162));const c={id:"exchange-v-1-settlement-finish",title:"/exchange/v1/settlement/finish",description:"Notify the exchange after Sinohope settlement is completed",sidebar_label:"/exchange/v1/settlement/finish",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Custody->Exchange"],description:"Notify the exchange after Sinohope settlement is completed",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{settlementId:{type:"string",description:"Unique identifier for a settlement batch"},data:{type:"array",description:"Asset list transferred from CVA account to the exchange",items:{type:"object",properties:{assetId:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH"},status:{type:"string",description:"Settlement status, enumeration to be determined",example:"COMPLETED"},txHash:{type:"string",nullable:!0,description:"Transaction hash, if the transfer is completed",example:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"}},required:["assetId","status"],title:"assetTransStatusItem"}}},required:["settlementId","data"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{status:{type:"boolean",description:"Status of the settlement finish notification, False/True (failed/success)"}},required:["status"]}}}}},method:"post",path:"/exchange/v1/settlement/finish",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{settlementId:"string",data:[{assetId:"USDT_ETH",status:"COMPLETED",txHash:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"}]},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/exchange/v1/settlement/finish",description:{content:"Notify the exchange after Sinohope settlement is completed",type:"text/plain"},url:{path:["exchange","v1","settlement","finish"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},m=void 0,h={unversionedId:"develop/openloop-api/exchange-v-1-settlement-finish",id:"develop/openloop-api/exchange-v-1-settlement-finish",title:"/exchange/v1/settlement/finish",description:"Notify the exchange after Sinohope settlement is completed",source:"@site/docs/develop/openloop-api/exchange-v-1-settlement-finish.api.mdx",sourceDirName:"develop/openloop-api",slug:"/develop/openloop-api/exchange-v-1-settlement-finish",permalink:"/docs/develop/openloop-api/exchange-v-1-settlement-finish",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"exchange-v-1-settlement-finish",title:"/exchange/v1/settlement/finish",description:"Notify the exchange after Sinohope settlement is completed",sidebar_label:"/exchange/v1/settlement/finish",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Custody->Exchange"],description:"Notify the exchange after Sinohope settlement is completed",requestBody:{required:!0,content:{"application/json":{schema:{type:"object",properties:{settlementId:{type:"string",description:"Unique identifier for a settlement batch"},data:{type:"array",description:"Asset list transferred from CVA account to the exchange",items:{type:"object",properties:{assetId:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH"},status:{type:"string",description:"Settlement status, enumeration to be determined",example:"COMPLETED"},txHash:{type:"string",nullable:!0,description:"Transaction hash, if the transfer is completed",example:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"}},required:["assetId","status"],title:"assetTransStatusItem"}}},required:["settlementId","data"]}}}},responses:{200:{description:"Successful response",content:{"application/json":{schema:{type:"object",properties:{status:{type:"boolean",description:"Status of the settlement finish notification, False/True (failed/success)"}},required:["status"]}}}}},method:"post",path:"/exchange/v1/settlement/finish",securitySchemes:{ApiKeyAuth:{type:"apiKey",in:"header",name:"BIZ-API-KEY",description:"This API key is given to you by Sinohope when onboarding your exchange."},ApiNonce:{type:"apiKey",in:"header",name:"BIZ-API-NONCE",description:"A nonce value (timestamp) that is included in the data to be signed."},ApiSig:{type:"apiKey",in:"header",name:"BIZ-API-SIGNATURE",description:"signature of the request information(nonce,path,body) using the secret_key which is provided by Sinohope when onboarding your exchange."}},jsonRequestBodyExample:{settlementId:"string",data:[{assetId:"USDT_ETH",status:"COMPLETED",txHash:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"}]},info:{title:"OpenLoop API",version:"0.9.12",description:'\n\n# Response code definition\n\nCommonly, for all APIs, the HTTP status codes should use those registered by IANA.\nSee: <https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml>\n\nIn OpenLoop, we should use a few well defined HTTP status codes as follow:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Return Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json.\n- `500`: Exchange/SinoHope internal error.\n\n# Changelog\n\nChanges log, dates are displayed in UTC, shows in a reverse order.\n\n* v0.9.12\n> 2023/06/28 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : update the response.\n\n* v0.9.11\n> 2023/06/16 by Darlzan\n\n- E-custody `/internal/v1/mpc/start` : add fields `transactionId`.\n\n* v0.9.10\n> 2023/06/14 by Darlzan\n\n- `/collateral/v1/settlement/address` : new added api.\n- `/collateral/v1/settlement/finish` : new added api.\n\n* v0.9.9\n> 2023/06/06 by Darlzan\n\n- `/collateral/v1/settlement/tx/build` : add fields `cryptography` in the response.\n- `/collateral/v1/settlement/tx/broadcast` : update single fields `signature` to object type fields `signatures`, in order to adapt to the UTXO transactions.\n\n* v0.9.8\n> 2023/06/01 by Darlzan\n\n- `/exchange/v1/mpc/pubkey` :contains two public keys, ecdsa-secp256k1 public key and eddsa-ed25519 public key.\n- `/exchange/v1/settlement/confirm` : add fields `approved`.\n\n* v0.9.7\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/deposit` : new added.\n- `/collateral/v1/deposit/balance` : new added.\n- `/exchange/v1/withdrawable`: change the type of the fields `amount` in response data from `number` to `string`.\n\n* v0.9.6\n> 2023/05/30 by Darlzan\n\n- `/exchange/v1/settlement/network` : change fields name `perferedNetwork` to `settlementNetwork`\n\n* v0.9.5\n> 2023/05/26 by Darlzan\n\n- `/exchange/v1/mpc/join` and `/internal/v1/mpc/join`: add fields `roomId`, `partyId`, `partyIds`.\n- `/exchange/v1/settlement/list` and `/collateral/v1/settlement`: fix typo, `assetid` -> `assetId`.\n- add some examples, fix some descriptions.\n\n* v0.9.4\n> 2023/05/18 by Darlzan\n\n- `/exchange/v1/settlement/network`: The settlement network should be specified for a currency, so change the field `assetId` to `currency`.\n- Added new apis in the Exchange: `/exchange/v1/transaction/status` and `/exchange/v1/withdrawable`.\n- `/collateral/v1/settlement/tx/build` : add feild `replacedTxId`.\n- `/internal/v1/mpc/signature/result` and `/collateral/v1/settlement/tx/broadcast`: modify the fields about signature.\n- modify the description of `/collateral/v1/transactions`.\n\n* v0.9.3\n> 2023/05/12 by Darlzan\n\n- `/exchange/v1/address` : add request feild `settlementNetwork`.\n- `/collateral/v1/settlement/tx/build` : remove feilds `network`, `address` in request, they should be determined by the settlement details.\n- add security section for all "Exchange->Custody" apis.\n\n* v0.9.2\n> 2023/05/04 by Darlzan\n\n- add apis related to mpc business\n\n* v0.9.1\n> 2023/03/24 by Kevin\n\nSecond working version.\n* v0.9.0\n> 2023/03/12 by Kevin\n\nFirst version'},postman:{name:"/exchange/v1/settlement/finish",description:{content:"Notify the exchange after Sinohope settlement is completed",type:"text/plain"},url:{path:["exchange","v1","settlement","finish"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/openloop-api/openloop-api",custom_edit_url:null},sidebar:"openLoopApiSidebar",previous:{title:"/exchange/v1/settlement/status",permalink:"/docs/develop/openloop-api/exchange-v-1-settlement-status"},next:{title:"/exchange/v1/transaction/status",permalink:"/docs/develop/openloop-api/exchange-v-1-transaction-status"}},u={},f=[{value:"/exchange/v1/settlement/finish",id:"exchangev1settlementfinish",level:2}],y={toc:f},g="wrapper";function v(e){let{components:t,...n}=e;return(0,s.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"exchangev1settlementfinish"},"/exchange/v1/settlement/finish"),(0,s.kt)("p",null,"Notify the exchange after Sinohope settlement is completed"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"settlementId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Unique identifier for a settlement batch"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,s.kt)("p",null,"Asset list transferred from CVA account to the exchange")),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(l.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Asset identifier defined by Sinohope (different asset identifiers for the same currency on different chains, e.g., USDT_ETH, USDT_TRON)",example:"USDT_ETH"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Settlement status, enumeration to be determined",example:"COMPLETED"},mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"txHash",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,description:"Transaction hash, if the transfer is completed",example:"0x1aa0a50ca9db654a7dc2788548b43d121a59463621485be35515063d4a1382b6"},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Successful response")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(r.Z,{mdxType:"SchemaTabs"},(0,s.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"status",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"Status of the settlement finish notification, False/True (failed/success)"},mdxType:"SchemaItem"})))),(0,s.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(d.Z,{responseExample:'{\n  "status": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);