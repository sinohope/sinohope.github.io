"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[981],{61951:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var a=t(87462),i=(t(67294),t(3905)),s=t(26389),o=t(94891),r=(t(75190),t(47507)),c=t(24310),l=t(63303),d=(t(75035),t(85162));const p={id:"v-1-call-back-withdrawal-confirm",title:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",description:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002",sidebar_label:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Callback APIs"],operationId:"/v1/call_back/withdrawal/confirm",description:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002\n\u5173\u4e8e\u56de\u8c03\u89c4\u5219\uff0c\u53ef\u53c2\u8003 [MPC WaaS \u5feb\u901f\u5165\u95e8](./quick-start/qs-1-waas) \u4e2d\u7684\u76f8\u5173\u8bf4\u660e\u3002\n",requestBody:{content:{"application/json":{schema:{required:["requestDetail","requestId"],type:"object",properties:{requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},requestDetail:{required:["txHash","sinoId","walletId","chainSymbol","assetId","from","to","toTag","amount","decimal","fee"],type:"object",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684requestDetail\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON\u5b57\u7b26\u4e32",properties:{sinoId:{type:"string",description:"Sinohope \u5bf9\u63d0\u73b0\u4ea4\u6613\u7684\u552f\u4e00\u6807\u8bc6",example:"456417158498373"},walletId:{type:"string",description:"\u94b1\u5305id",example:"456541901231941"},chainSymbol:{type:"string",description:"\u94fe\u552f\u4e00\u6807\u8bc6",example:"ETH"},assetId:{type:"integer",description:"\u4ee3\u5e01\u552f\u4e00\u6807\u8bc6",example:"ETH_ETH"},from:{type:"string",description:"from\u5730\u5740",example:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558"},to:{type:"string",description:"to\u5730\u5740",example:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138"},toTag:{type:"string",description:"tag",example:"1001"},note:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u586b\u5199\u503c",example:"user notes"},amount:{type:"string",description:"\u91d1\u989d\uff08\u7cbe\u5ea6\u8f6c\u6362\u524d\uff09",example:"1230000000000000000"},decimal:{type:"integer",description:"\u7cbe\u5ea6",example:18},fee:{type:"string",description:"\u624b\u7eed\u8d39",example:"30000000000000"},gasPrice:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"1000000000"},gasLimit:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"60000"}}},extraInfo:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u5f53\u524d\u6682\u65e0\u660e\u786e\u4fe1\u606f\u3002"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},message:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""},action:{type:"string",description:"\u4efb\u52a1\u6267\u884c\u8bf4\u660e\uff0cAPPROVE \u6279\u51c6\u3001REJECT \u62d2\u7edd",example:"APPROVE"}}}}}}},"x-codegen-request-body-name":"root",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/call_back/withdrawal/confirm",servers:[{url:"https://your.callback.url/"}],jsonRequestBodyExample:{requestId:"413497079388421",requestDetail:{sinoId:"456417158498373",walletId:"456541901231941",chainSymbol:"ETH",assetId:"ETH_ETH",from:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558",to:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138",toTag:"1001",note:"user notes",amount:"1230000000000000000",decimal:18,fee:"30000000000000",gasPrice:"1000000000",gasLimit:"60000"},extraInfo:"string"},info:{title:"Sinohope WaaS API",version:"0.9.3",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |"},postman:{name:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",description:{content:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002\n\u5173\u4e8e\u56de\u8c03\u89c4\u5219\uff0c\u53ef\u53c2\u8003 [MPC WaaS \u5feb\u901f\u5165\u95e8](./quick-start/qs-1-waas) \u4e2d\u7684\u76f8\u5173\u8bf4\u660e\u3002\n",type:"text/plain"},url:{path:["v1","call_back","withdrawal","confirm"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-call-back-withdrawal-confirm",id:"develop/mpc-waas-api/v-1-call-back-withdrawal-confirm",title:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",description:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/v-1-call-back-withdrawal-confirm.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-call-back-withdrawal-confirm",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-call-back-withdrawal-confirm",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-call-back-withdrawal-confirm",title:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",description:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002",sidebar_label:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Callback APIs"],operationId:"/v1/call_back/withdrawal/confirm",description:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002\n\u5173\u4e8e\u56de\u8c03\u89c4\u5219\uff0c\u53ef\u53c2\u8003 [MPC WaaS \u5feb\u901f\u5165\u95e8](./quick-start/qs-1-waas) \u4e2d\u7684\u76f8\u5173\u8bf4\u660e\u3002\n",requestBody:{content:{"application/json":{schema:{required:["requestDetail","requestId"],type:"object",properties:{requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},requestDetail:{required:["txHash","sinoId","walletId","chainSymbol","assetId","from","to","toTag","amount","decimal","fee"],type:"object",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684requestDetail\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON\u5b57\u7b26\u4e32",properties:{sinoId:{type:"string",description:"Sinohope \u5bf9\u63d0\u73b0\u4ea4\u6613\u7684\u552f\u4e00\u6807\u8bc6",example:"456417158498373"},walletId:{type:"string",description:"\u94b1\u5305id",example:"456541901231941"},chainSymbol:{type:"string",description:"\u94fe\u552f\u4e00\u6807\u8bc6",example:"ETH"},assetId:{type:"integer",description:"\u4ee3\u5e01\u552f\u4e00\u6807\u8bc6",example:"ETH_ETH"},from:{type:"string",description:"from\u5730\u5740",example:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558"},to:{type:"string",description:"to\u5730\u5740",example:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138"},toTag:{type:"string",description:"tag",example:"1001"},note:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u586b\u5199\u503c",example:"user notes"},amount:{type:"string",description:"\u91d1\u989d\uff08\u7cbe\u5ea6\u8f6c\u6362\u524d\uff09",example:"1230000000000000000"},decimal:{type:"integer",description:"\u7cbe\u5ea6",example:18},fee:{type:"string",description:"\u624b\u7eed\u8d39",example:"30000000000000"},gasPrice:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"1000000000"},gasLimit:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"60000"}}},extraInfo:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u5f53\u524d\u6682\u65e0\u660e\u786e\u4fe1\u606f\u3002"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},message:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""},action:{type:"string",description:"\u4efb\u52a1\u6267\u884c\u8bf4\u660e\uff0cAPPROVE \u6279\u51c6\u3001REJECT \u62d2\u7edd",example:"APPROVE"}}}}}}},"x-codegen-request-body-name":"root",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/call_back/withdrawal/confirm",servers:[{url:"https://your.callback.url/"}],jsonRequestBodyExample:{requestId:"413497079388421",requestDetail:{sinoId:"456417158498373",walletId:"456541901231941",chainSymbol:"ETH",assetId:"ETH_ETH",from:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558",to:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138",toTag:"1001",note:"user notes",amount:"1230000000000000000",decimal:18,fee:"30000000000000",gasPrice:"1000000000",gasLimit:"60000"},extraInfo:"string"},info:{title:"Sinohope WaaS API",version:"0.9.3",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |"},postman:{name:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",description:{content:"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002\n\u5173\u4e8e\u56de\u8c03\u89c4\u5219\uff0c\u53ef\u53c2\u8003 [MPC WaaS \u5feb\u901f\u5165\u95e8](./quick-start/qs-1-waas) \u4e2d\u7684\u76f8\u5173\u8bf4\u660e\u3002\n",type:"text/plain"},url:{path:["v1","call_back","withdrawal","confirm"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u4ea4\u6613\u901a\u77e5",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-call-back-transaction-notify"},next:{title:"Common APIs",permalink:"/zh-Hant/docs/develop/mpc-waas-api/common-ap-is"}},h={},f=[{value:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",id:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",level:2}],g={toc:f},y="wrapper";function b(e){let{components:n,...t}=e;return(0,i.kt)(y,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4"},"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4"),(0,i.kt)("p",null,"\u5f53sinohope\u6536\u5230\u63d0\u73b0\u8bf7\u6c42\u65f6\uff0c\u4f1a\u5411\u5546\u6237\u6307\u5b9a\u7684url\u53d1\u9001\u786e\u8ba4\u8bf7\u6c42\u3002\n\u5173\u4e8e\u56de\u8c03\u89c4\u5219\uff0c\u53ef\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"./quick-start/qs-1-waas"},"MPC WaaS \u5feb\u901f\u5165\u95e8")," \u4e2d\u7684\u76f8\u5173\u8bf4\u660e\u3002"),(0,i.kt)(o.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"requestDetail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u6bcf\u79cd\u7c7b\u578b\u7684\u56de\u8c03\u8bf7\u6c42\u5bf9\u5e94\u4e8e\u4e0d\u540c\u7684requestDetail\u7ed3\u6784\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON\u5b57\u7b26\u4e32")),(0,i.kt)(c.Z,{collapsible:!1,name:"sinoId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Sinohope \u5bf9\u63d0\u73b0\u4ea4\u6613\u7684\u552f\u4e00\u6807\u8bc6",example:"456417158498373"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"walletId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94b1\u5305id",example:"456541901231941"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u552f\u4e00\u6807\u8bc6",example:"ETH"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4ee3\u5e01\u552f\u4e00\u6807\u8bc6",example:"ETH_ETH"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"from",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"from\u5730\u5740",example:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"to",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"to\u5730\u5740",example:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"toTag",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"tag",example:"1001"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u586b\u5199\u503c",example:"user notes"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u91d1\u989d\uff08\u7cbe\u5ea6\u8f6c\u6362\u524d\uff09",example:"1230000000000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"decimal",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u7cbe\u5ea6",example:18},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"fee",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u624b\u7eed\u8d39",example:"30000000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasPrice",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"1000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasLimit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"60000"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!1,name:"extraInfo",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u5f53\u524d\u6682\u65e0\u660e\u786e\u4fe1\u606f\u3002"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"requestId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"action",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4efb\u52a1\u6267\u884c\u8bf4\u660e\uff0cAPPROVE \u6279\u51c6\u3001REJECT \u62d2\u7edd",example:"APPROVE"},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "requestId": "431431431431431",\n  "message": "",\n  "action": "APPROVE"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);