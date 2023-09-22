"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7746],{36289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>f});var a=n(87462),i=(n(67294),n(3905)),s=n(26389),r=n(94891),o=(n(75190),n(47507)),c=n(24310),l=n(63303),d=(n(75035),n(85162));const p={id:"v-1-call-back-transaction-notify",title:"\u4ea4\u6613\u901a\u77e5",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",sidebar_label:"\u4ea4\u6613\u901a\u77e5",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Callback APIs"],operationId:"/v1/call_back/transaction/notify",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",requestBody:{content:{"application/json":{schema:{required:["requestDetail","requestId","requestType"],type:"object",properties:{requestType:{type:"integer",description:"\u56de\u8c03\u8bf7\u6c42\u7c7b\u578b (0-\u63d0\u73b0\uff1b1-\u5145\u503c)",example:1},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},requestDetail:{required:["txHash","blockHash","confirmNumber","long","chainSymbol","assetId","txDirection","from","to","amount","decimal","fee","feeAsset","feeAssetDecimal","usedFee","state"],type:"object",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON\u5b57\u7b26\u4e32\uff0c\u5f53\u524d\u5305\u542b\u5982\u4e0b\u53c2\u6570\u5185\u5bb9",properties:{sinoId:{type:"string",description:"\u4ea4\u6613\u6d41\u6c34\u53f7\uff0c\u8f6c\u8d26\u65f6\u4f1a\u8fd4\u56de\uff0c\u5145\u503c\u56fa\u5b9a\u8fd40",example:"456417158498373"},txHash:{type:"string",description:"\u4ea4\u6613hash\uff0c\u94fe\u4e0a\u6570\u636e",example:"0xee506b40220af3692be8b84a95a6e02d956164007d875812c1be26b594c2c27a"},confirmNumber:{type:"integer",description:"\u786e\u8ba4\u6570\uff0c\u5f53\u524d\u56fa\u5b9a\u7ed90",example:0},walletId:{type:"string",description:"\u94b1\u5305id",example:"456541901231941"},chainSymbol:{type:"string",description:"\u94fe\u552f\u4e00\u6807\u8bc6",example:"ETH"},assetId:{type:"string",description:"asset\u552f\u4e00\u6807\u8bc6",example:"ETH_ETH"},txDirection:{type:"integer",description:"\u4ea4\u6613\u7c7b\u578b\uff1a0-\u63d0\u73b0\uff1b1-\u5145\u503c",example:0},note:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u586b\u5199\u503c\uff0c\u5145\u503c\u4ea4\u6613\u65e0",example:"user notes"},nonce:{type:"integer",description:"EVM\u517c\u5bb9\u94fe\u4ea4\u6613nonce\u503c\uff0c\u4ea4\u6613\u7c7b\u578b\u4e3a0\uff08\u63d0\u73b0\uff09\u65f6\uff0c\u8fd4\u56de\uff1b\u5f53\u4ea4\u6613\u7c7b\u578b\u4e3a1\uff08\u5145\u503c\uff09\u65f6\uff0c\u8fd4\u56de\u4e3a0",example:2},from:{type:"string",description:"from\u5730\u5740",example:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558"},to:{type:"string",description:"to\u5730\u5740",example:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138"},toTag:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u4f20\u5165\u503c\uff0c\u5145\u503c\u4ea4\u6613\u4e3anull",example:"1001"},amount:{type:"string",description:"\u91d1\u989d",example:"1230000000000000000"},decimal:{type:"integer",description:"\u7cbe\u5ea6",example:18},fee:{type:"string",description:"\u5bf9\u4e8e\u63d0\u73b0\u4ea4\u6613\uff0c\u6784\u9020\u4ea4\u6613\u65f6\u786e\u5b9a\u7684\u624b\u7eed\u8d39",example:"30000000000000"},feeAsset:{type:"string",description:"\u624b\u7eed\u8d39\u4ee3\u5e01\u6807\u8bc6",example:"ETH_ETH"},feeAssetDecimal:{type:"integer",description:"\u624b\u7eed\u8d39\u4ee3\u5e01\u552f\u7cbe\u5ea6",example:18},usedFee:{type:"string",description:"\u5b9e\u9645\u4f7f\u7528\u7684\u624b\u7eed\u8d39",example:"21000000000000"},gasPrice:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"1000000000"},gasLimit:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"60000"},state:{type:"integer",description:"10-\u4ea4\u6613\u4e0a\u94fe\u6210\u529f",example:10}}},extraInfo:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u5f53\u524d\u6682\u65e0\u660e\u786e\u4fe1\u606f"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},message:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""}}}}}}},"x-codegen-request-body-name":"root",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/call_back/transaction/notify",servers:[{url:"https://your.callback.url/"}],jsonRequestBodyExample:{requestType:1,requestId:"413497079388421",requestDetail:{sinoId:"456417158498373",txHash:"0xee506b40220af3692be8b84a95a6e02d956164007d875812c1be26b594c2c27a",confirmNumber:0,walletId:"456541901231941",chainSymbol:"ETH",assetId:"ETH_ETH",txDirection:0,note:"user notes",nonce:2,from:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558",to:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138",toTag:"1001",amount:"1230000000000000000",decimal:18,fee:"30000000000000",feeAsset:"ETH_ETH",feeAssetDecimal:18,usedFee:"21000000000000",gasPrice:"1000000000",gasLimit:"60000",state:10},extraInfo:"string"},info:{title:"Sinohope WaaS API",version:"0.9.3",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |"},postman:{name:"\u4ea4\u6613\u901a\u77e5",description:{content:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",type:"text/plain"},url:{path:["v1","call_back","transaction","notify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-call-back-transaction-notify",id:"develop/mpc-waas-api/v-1-call-back-transaction-notify",title:"\u4ea4\u6613\u901a\u77e5",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",source:"@site/docs/develop/mpc-waas-api/v-1-call-back-transaction-notify.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-call-back-transaction-notify",permalink:"/docs/develop/mpc-waas-api/v-1-call-back-transaction-notify",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-call-back-transaction-notify",title:"\u4ea4\u6613\u901a\u77e5",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",sidebar_label:"\u4ea4\u6613\u901a\u77e5",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Callback APIs"],operationId:"/v1/call_back/transaction/notify",description:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",requestBody:{content:{"application/json":{schema:{required:["requestDetail","requestId","requestType"],type:"object",properties:{requestType:{type:"integer",description:"\u56de\u8c03\u8bf7\u6c42\u7c7b\u578b (0-\u63d0\u73b0\uff1b1-\u5145\u503c)",example:1},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},requestDetail:{required:["txHash","blockHash","confirmNumber","long","chainSymbol","assetId","txDirection","from","to","amount","decimal","fee","feeAsset","feeAssetDecimal","usedFee","state"],type:"object",description:"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON\u5b57\u7b26\u4e32\uff0c\u5f53\u524d\u5305\u542b\u5982\u4e0b\u53c2\u6570\u5185\u5bb9",properties:{sinoId:{type:"string",description:"\u4ea4\u6613\u6d41\u6c34\u53f7\uff0c\u8f6c\u8d26\u65f6\u4f1a\u8fd4\u56de\uff0c\u5145\u503c\u56fa\u5b9a\u8fd40",example:"456417158498373"},txHash:{type:"string",description:"\u4ea4\u6613hash\uff0c\u94fe\u4e0a\u6570\u636e",example:"0xee506b40220af3692be8b84a95a6e02d956164007d875812c1be26b594c2c27a"},confirmNumber:{type:"integer",description:"\u786e\u8ba4\u6570\uff0c\u5f53\u524d\u56fa\u5b9a\u7ed90",example:0},walletId:{type:"string",description:"\u94b1\u5305id",example:"456541901231941"},chainSymbol:{type:"string",description:"\u94fe\u552f\u4e00\u6807\u8bc6",example:"ETH"},assetId:{type:"string",description:"asset\u552f\u4e00\u6807\u8bc6",example:"ETH_ETH"},txDirection:{type:"integer",description:"\u4ea4\u6613\u7c7b\u578b\uff1a0-\u63d0\u73b0\uff1b1-\u5145\u503c",example:0},note:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u586b\u5199\u503c\uff0c\u5145\u503c\u4ea4\u6613\u65e0",example:"user notes"},nonce:{type:"integer",description:"EVM\u517c\u5bb9\u94fe\u4ea4\u6613nonce\u503c\uff0c\u4ea4\u6613\u7c7b\u578b\u4e3a0\uff08\u63d0\u73b0\uff09\u65f6\uff0c\u8fd4\u56de\uff1b\u5f53\u4ea4\u6613\u7c7b\u578b\u4e3a1\uff08\u5145\u503c\uff09\u65f6\uff0c\u8fd4\u56de\u4e3a0",example:2},from:{type:"string",description:"from\u5730\u5740",example:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558"},to:{type:"string",description:"to\u5730\u5740",example:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138"},toTag:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u4f20\u5165\u503c\uff0c\u5145\u503c\u4ea4\u6613\u4e3anull",example:"1001"},amount:{type:"string",description:"\u91d1\u989d",example:"1230000000000000000"},decimal:{type:"integer",description:"\u7cbe\u5ea6",example:18},fee:{type:"string",description:"\u5bf9\u4e8e\u63d0\u73b0\u4ea4\u6613\uff0c\u6784\u9020\u4ea4\u6613\u65f6\u786e\u5b9a\u7684\u624b\u7eed\u8d39",example:"30000000000000"},feeAsset:{type:"string",description:"\u624b\u7eed\u8d39\u4ee3\u5e01\u6807\u8bc6",example:"ETH_ETH"},feeAssetDecimal:{type:"integer",description:"\u624b\u7eed\u8d39\u4ee3\u5e01\u552f\u7cbe\u5ea6",example:18},usedFee:{type:"string",description:"\u5b9e\u9645\u4f7f\u7528\u7684\u624b\u7eed\u8d39",example:"21000000000000"},gasPrice:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"1000000000"},gasLimit:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"60000"},state:{type:"integer",description:"10-\u4ea4\u6613\u4e0a\u94fe\u6210\u529f",example:10}}},extraInfo:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u5f53\u524d\u6682\u65e0\u660e\u786e\u4fe1\u606f"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},requestId:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},message:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""}}}}}}},"x-codegen-request-body-name":"root",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/call_back/transaction/notify",servers:[{url:"https://your.callback.url/"}],jsonRequestBodyExample:{requestType:1,requestId:"413497079388421",requestDetail:{sinoId:"456417158498373",txHash:"0xee506b40220af3692be8b84a95a6e02d956164007d875812c1be26b594c2c27a",confirmNumber:0,walletId:"456541901231941",chainSymbol:"ETH",assetId:"ETH_ETH",txDirection:0,note:"user notes",nonce:2,from:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558",to:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138",toTag:"1001",amount:"1230000000000000000",decimal:18,fee:"30000000000000",feeAsset:"ETH_ETH",feeAssetDecimal:18,usedFee:"21000000000000",gasPrice:"1000000000",gasLimit:"60000",state:10},extraInfo:"string"},info:{title:"Sinohope WaaS API",version:"0.9.3",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |"},postman:{name:"\u4ea4\u6613\u901a\u77e5",description:{content:"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316",type:"text/plain"},url:{path:["v1","call_back","transaction","notify"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"Callback APIs",permalink:"/docs/develop/mpc-waas-api/callback-ap-is"},next:{title:"\u63d0\u73b0\u4e8c\u6b21\u786e\u8ba4",permalink:"/docs/develop/mpc-waas-api/v-1-call-back-withdrawal-confirm"}},h={},f=[{value:"\u4ea4\u6613\u901a\u77e5",id:"\u4ea4\u6613\u901a\u77e5",level:2}],g={toc:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u4ea4\u6613\u901a\u77e5"},"\u4ea4\u6613\u901a\u77e5"),(0,i.kt)("p",null,"\u4ea4\u6613\u4e0a\u94fe\u6210\u529f\u540e\uff0c\u63a8\u9001\u786e\u8ba4\u6570\u53d8\u5316"),(0,i.kt)(r.Z,{mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"requestType",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u56de\u8c03\u8bf7\u6c42\u7c7b\u578b (0-\u63d0\u73b0\uff1b1-\u5145\u503c)",example:1},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"requestId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"413497079388421"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"requestDetail"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"\u56de\u8c03\u8bf7\u6c42\u7684\u8be6\u7ec6\u4fe1\u606f\uff1b\u683c\u5f0f\u4e3a\u5e8f\u5217\u5316\u7684 JSON\u5b57\u7b26\u4e32\uff0c\u5f53\u524d\u5305\u542b\u5982\u4e0b\u53c2\u6570\u5185\u5bb9")),(0,i.kt)(c.Z,{collapsible:!1,name:"sinoId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613\u6d41\u6c34\u53f7\uff0c\u8f6c\u8d26\u65f6\u4f1a\u8fd4\u56de\uff0c\u5145\u503c\u56fa\u5b9a\u8fd40",example:"456417158498373"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"txHash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4ea4\u6613hash\uff0c\u94fe\u4e0a\u6570\u636e",example:"0xee506b40220af3692be8b84a95a6e02d956164007d875812c1be26b594c2c27a"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"confirmNumber",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u786e\u8ba4\u6570\uff0c\u5f53\u524d\u56fa\u5b9a\u7ed90",example:0},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"walletId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94b1\u5305id",example:"456541901231941"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"chainSymbol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u94fe\u552f\u4e00\u6807\u8bc6",example:"ETH"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"assetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"asset\u552f\u4e00\u6807\u8bc6",example:"ETH_ETH"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"txDirection",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4ea4\u6613\u7c7b\u578b\uff1a0-\u63d0\u73b0\uff1b1-\u5145\u503c",example:0},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u586b\u5199\u503c\uff0c\u5145\u503c\u4ea4\u6613\u65e0",example:"user notes"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"nonce",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"EVM\u517c\u5bb9\u94fe\u4ea4\u6613nonce\u503c\uff0c\u4ea4\u6613\u7c7b\u578b\u4e3a0\uff08\u63d0\u73b0\uff09\u65f6\uff0c\u8fd4\u56de\uff1b\u5f53\u4ea4\u6613\u7c7b\u578b\u4e3a1\uff08\u5145\u503c\uff09\u65f6\uff0c\u8fd4\u56de\u4e3a0",example:2},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"from",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"from\u5730\u5740",example:"0xc9cf7d652a036d65b3392dfcabc3d3c332082558"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"to",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"to\u5730\u5740",example:"0xca1b41bc3c4ffa88e3a31bff85e3289ec375d138"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"toTag",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u63d0\u73b0\u4ea4\u6613\u521b\u5efa\u65f6\u4f20\u5165\u503c\uff0c\u5145\u503c\u4ea4\u6613\u4e3anull",example:"1001"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"amount",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u91d1\u989d",example:"1230000000000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"decimal",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u7cbe\u5ea6",example:18},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"fee",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5bf9\u4e8e\u63d0\u73b0\u4ea4\u6613\uff0c\u6784\u9020\u4ea4\u6613\u65f6\u786e\u5b9a\u7684\u624b\u7eed\u8d39",example:"30000000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"feeAsset",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u624b\u7eed\u8d39\u4ee3\u5e01\u6807\u8bc6",example:"ETH_ETH"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"feeAssetDecimal",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u624b\u7eed\u8d39\u4ee3\u5e01\u552f\u7cbe\u5ea6",example:18},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"usedFee",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5b9e\u9645\u4f7f\u7528\u7684\u624b\u7eed\u8d39",example:"21000000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasPrice",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"1000000000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"gasLimit",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"ethlike\u4f1a\u6709\u503c\uff0c\u975eethlike\u7ed90",example:"60000"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"state",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"10-\u4ea4\u6613\u4e0a\u94fe\u6210\u529f",example:10},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!1,name:"extraInfo",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u4e0e\u56de\u8c03\u8bf7\u6c42\u76f8\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff1b\u5f53\u524d\u6682\u65e0\u660e\u786e\u4fe1\u606f"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"successful operation")),(0,i.kt)("div",null,(0,i.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"requestId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u8bf7\u6c42\u7684\u552f\u4e00id,\u591a\u6b21\u8c03\u7528\u4e0d\u53d8",example:"431431431431431"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u9519\u8bef\u4fe1\u606f",example:""},mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "code": 200,\n  "requestId": "431431431431431",\n  "message": ""\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);