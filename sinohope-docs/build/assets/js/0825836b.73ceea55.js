"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6230],{41786:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>m,default:()=>x,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var t=a(87462),s=(a(67294),a(3905)),i=a(26389),o=a(94891),r=(a(75190),a(47507)),c=a(24310),p=a(63303),d=(a(75035),a(85162));const l={id:"v-1-waas-mpc-mpcnode-list-mpc-requests",title:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",description:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",sidebar_label:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",hide_title:!0,hide_table_of_contents:!0,api:{tags:["MPC Node APIs"],operationId:"/v1/waas/mpc/mpcnode/list_mpc_requests","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/mpcnode/list_mpc_requests/",\n  {\n    "businessExecType": 1,\n    "businessExecStatus": 1,\n    "sinoId": "413497079388421",\n    "pageIndex": 1,\n    "pageSize": 10\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/mpcnode/list_mpc_requests/", map[string]string{\n    "businessExecType": 1,\n    "businessExecStatus": 1,\n    "sinoId": "413497079388421",\n    "pageIndex": 1,\n    "pageSize": 10\n})\n'}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{businessExecType:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u7c7b\u578b\uff08KeyGen \u7c7b\u578b\u8bf7\u6c42\uff1a1\uff0csignTx \u7c7b\u578b\u8bf7\u6c42\uff1a2\uff0csignMessage \u7c7b\u578b\u8bf7\u6c42\uff1a3\uff0csignRawData \u7c7b\u578b\u8bf7\u6c42\uff1a4\uff09",example:1},businessExecStatus:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u72b6\u6001 (\u8fdb\u884c\u4e2d\uff1a0\uff0c\u6210\u529f\uff1a1\uff0c\u5931\u8d25\uff1a2\uff09",example:1},sinoId:{type:"string",description:"sinoId,\u4e0d\u4f20\u6309\u7167\u5206\u9875\u67e5\u8be2",example:"413497079388421"},pageIndex:{type:"integer",description:"\u5f53\u524d\u9875\u7801\uff0c\u9996\u9875\u4e3a 1\u3002",example:1,title:"pageIndex"},pageSize:{type:"integer",description:"\u6bcf\u9875\u6570\u636e\u6761\u6570\uff08\u4e0d\u5f97\u5c0f\u4e8e1,\u4e0d\u5f97\u5927\u4e8e50\uff1b\u9ed8\u8ba4 10\uff09",example:10,title:"pageSize"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{pageIndex:{type:"integer",example:1},pageSize:{type:"integer",example:10},totalSize:{type:"integer",example:10},list:{type:"array",items:{type:"object",properties:{requestId:{type:"string",description:"\u7528\u6237\u53d1\u8d77\u4e1a\u52a1\u81ea\u5df1\u751f\u6210\u7684\u552f\u4e00\u8bf7\u6c42id",example:"asdf123123123"},sinoId:{type:"string",description:"sinoId sinohope \u6839\u636e\u5f53\u524d\u4e1a\u52a1\u751f\u6210\u7684\u552f\u4e00id",example:"123123123"},requestTime:{type:"integer",description:"\u8bf7\u6c42\u65f6\u95f4",example:123123123213},param:{type:"string",description:"\u53c2\u6570",example:"xxxxxxxx"},businessExecType:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u7c7b\u578b\uff08KeyGen \u7c7b\u578b\u8bf7\u6c42\uff1a1\uff0csignTx \u7c7b\u578b\u8bf7\u6c42\uff1a2\uff0csignMessage \u7c7b\u578b\u8bf7\u6c42\uff1a3\uff0csignRawData \u7c7b\u578b\u8bf7\u6c42\uff1a4\uff09",example:8},businessExecStatus:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u72b6\u6001 (\u8fdb\u884c\u4e2d\uff1a0\uff0c\u6210\u529f\uff1a1\uff0c\u5931\u8d25\uff1a2\uff09",example:0},isSuccess:{type:"boolean",description:"\u662f\u5426\u6210\u529f",example:!0},failedReason:{type:"string",description:"\u5931\u8d25\u539f\u56e0",example:""}}}}}},success:{type:"boolean"}},description:""}}}}},"x-codegen-request-body-name":"root",description:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/mpcnode/list_mpc_requests",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{businessExecType:1,businessExecStatus:1,sinoId:"413497079388421",pageIndex:1,pageSize:10},info:{title:"Sinohope WaaS API",version:"0.9.4",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash  |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |\n| v0.9.4 | Cumulative updates: <br/>1. add api `/v1/waas/mpc/transaction/fee`. <br/> 2. Fix: Correct the response feild `sinoId` of api `/v1/waas/mpc/web3/sign_message` from `integer` to `string`, and the request params `chainSymbol` of apis `/v1/waas/mpc/transaction/cancel_transaction` and `/v1/waas/mpc/transaction/speedup_transaction` is modified from `required` to `non-required`. | 2023-12-25 | Shihan, etc. |"},postman:{name:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",description:{type:"text/plain"},url:{path:["v1","waas","mpc","mpcnode","list_mpc_requests"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},m=void 0,u={unversionedId:"develop/mpc-waas-api/v-1-waas-mpc-mpcnode-list-mpc-requests",id:"develop/mpc-waas-api/v-1-waas-mpc-mpcnode-list-mpc-requests",title:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",description:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",source:"@site/docs/develop/mpc-waas-api/v-1-waas-mpc-mpcnode-list-mpc-requests.api.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/v-1-waas-mpc-mpcnode-list-mpc-requests",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-mpcnode-list-mpc-requests",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"v-1-waas-mpc-mpcnode-list-mpc-requests",title:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",description:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",sidebar_label:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",hide_title:!0,hide_table_of_contents:!0,api:{tags:["MPC Node APIs"],operationId:"/v1/waas/mpc/mpcnode/list_mpc_requests","x-codeSamples":[{lang:"python",label:"python",source:'request(\n  "POST",\n  "/v1/waas/mpc/mpcnode/list_mpc_requests/",\n  {\n    "businessExecType": 1,\n    "businessExecStatus": 1,\n    "sinoId": "413497079388421",\n    "pageIndex": 1,\n    "pageSize": 10\n  },\n  api_key, host\n)\n'},{lang:"go",label:"go",source:'Request("POST", "/v1/waas/mpc/mpcnode/list_mpc_requests/", map[string]string{\n    "businessExecType": 1,\n    "businessExecStatus": 1,\n    "sinoId": "413497079388421",\n    "pageIndex": 1,\n    "pageSize": 10\n})\n'}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{businessExecType:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u7c7b\u578b\uff08KeyGen \u7c7b\u578b\u8bf7\u6c42\uff1a1\uff0csignTx \u7c7b\u578b\u8bf7\u6c42\uff1a2\uff0csignMessage \u7c7b\u578b\u8bf7\u6c42\uff1a3\uff0csignRawData \u7c7b\u578b\u8bf7\u6c42\uff1a4\uff09",example:1},businessExecStatus:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u72b6\u6001 (\u8fdb\u884c\u4e2d\uff1a0\uff0c\u6210\u529f\uff1a1\uff0c\u5931\u8d25\uff1a2\uff09",example:1},sinoId:{type:"string",description:"sinoId,\u4e0d\u4f20\u6309\u7167\u5206\u9875\u67e5\u8be2",example:"413497079388421"},pageIndex:{type:"integer",description:"\u5f53\u524d\u9875\u7801\uff0c\u9996\u9875\u4e3a 1\u3002",example:1,title:"pageIndex"},pageSize:{type:"integer",description:"\u6bcf\u9875\u6570\u636e\u6761\u6570\uff08\u4e0d\u5f97\u5c0f\u4e8e1,\u4e0d\u5f97\u5927\u4e8e50\uff1b\u9ed8\u8ba4 10\uff09",example:10,title:"pageSize"}}}}},required:!1},responses:{200:{description:"successful operation",content:{"application/json":{schema:{type:"object",properties:{code:{type:"integer",example:200},msg:{type:"string",example:""},data:{type:"object",properties:{pageIndex:{type:"integer",example:1},pageSize:{type:"integer",example:10},totalSize:{type:"integer",example:10},list:{type:"array",items:{type:"object",properties:{requestId:{type:"string",description:"\u7528\u6237\u53d1\u8d77\u4e1a\u52a1\u81ea\u5df1\u751f\u6210\u7684\u552f\u4e00\u8bf7\u6c42id",example:"asdf123123123"},sinoId:{type:"string",description:"sinoId sinohope \u6839\u636e\u5f53\u524d\u4e1a\u52a1\u751f\u6210\u7684\u552f\u4e00id",example:"123123123"},requestTime:{type:"integer",description:"\u8bf7\u6c42\u65f6\u95f4",example:123123123213},param:{type:"string",description:"\u53c2\u6570",example:"xxxxxxxx"},businessExecType:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u7c7b\u578b\uff08KeyGen \u7c7b\u578b\u8bf7\u6c42\uff1a1\uff0csignTx \u7c7b\u578b\u8bf7\u6c42\uff1a2\uff0csignMessage \u7c7b\u578b\u8bf7\u6c42\uff1a3\uff0csignRawData \u7c7b\u578b\u8bf7\u6c42\uff1a4\uff09",example:8},businessExecStatus:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u72b6\u6001 (\u8fdb\u884c\u4e2d\uff1a0\uff0c\u6210\u529f\uff1a1\uff0c\u5931\u8d25\uff1a2\uff09",example:0},isSuccess:{type:"boolean",description:"\u662f\u5426\u6210\u529f",example:!0},failedReason:{type:"string",description:"\u5931\u8d25\u539f\u56e0",example:""}}}}}},success:{type:"boolean"}},description:""}}}}},"x-codegen-request-body-name":"root",description:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",extensions:[{key:"x-codegen-request-body-name",value:"root"}],method:"post",path:"/v1/waas/mpc/mpcnode/list_mpc_requests",servers:[{url:"https://api.sinohope.com/"},{url:"https://api-sandbox.sinohope.com/"}],jsonRequestBodyExample:{businessExecType:1,businessExecStatus:1,sinoId:"413497079388421",pageIndex:1,pageSize:10},info:{title:"Sinohope WaaS API",version:"0.9.4",description:"# Common Descriptions of Parameters and Return Values \n\n## Unified Return Value Structure\n\n| Name | Description | \n| :-- | :-- |\n| code | Status code (200 for success) |\n| msg | Status description |\n| data | Response data |\n| success | Whether the request succeeded (true for success, false for failure) |\n\n## Common Error Code Definitions\n\nWhen an error occurs in Sinohope WaaS services, uniformly formatted data will be returned to the client:\n\n- `200`: Successful response. Refer to each API for the detailed response data.\n- `400`: Bad Request.\n- `401`: Unauthorized. Either API details are missing or invalid.\n- `403`: Forbidden - You do not have access to the requested resource.\n- `415`: Unsupported media type. You need to use application/json. \n- `500`: Sinohope internal error.\n\n### System Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 1001 | Unknown exception, please contact Sinohope customer service |\n| 1002 | Duplicate request |\n| 1004 | Invalid API Key |\n| 1005 | Signature verification failed |  \n| 1006 | IP call frequency restricted |\n| 1007 | No permission of the current API |\n| 1008 | Invalid IP address |\n| 1009 | Signature in the request header cannot be empty |\n| 1010 | Timestamp in the request header cannot be empty |\n| 1011 | Internal call exception |\n| 1012 | Invalid request, please check if there are missing headers |\n| 1013 | Signature failure |\n| 1014 | Unsupported request type (only GET and POST supported) |\n| 1015 | Missing signature parameter |\n\n### Parameter Level Errors\n\n| Error Code | Description |\n| :-- | :-- |\n| 2001 | The asset is not supported |\n| 2002 | The chain is not supported |\n| 2003 | Invalid input address |\n| 2004 | Transaction record does not exist |\n| 2005 | No permission |\n| 2006 | Abnormal transfer information (kyt check failed) | \n| 2007 | Miner fee too low |\n| 2008 | The to address is not an internal address (transfer protection) |\n| 2009 | Insufficient balance to pay transfer amount and gas fee |\n| 2010 | Insufficient gas (token transfer) | \n| 2011 | Insufficient available balance (token transfer) |\n| 2012 | Name cannot contain backslash \\ |\n| 2013 | Address not found for given path |\n| 2014 | Not enough gas |\n| 2015 | invalid input assetID |\n| 2020 | No token information |\n| 2097 | Invalid pageIndex, require pageIndex >=1 |  \n| 2098 | Invalid pageSize, require pageSize <=50 and >=1 |\n| 2099 | Missing required parameter |\n| 2101 | Specified wallet does not exist |\n| 2102 | Specified asset does not exist |\n| 2103 | Specified chainSymbol does not exist |\n| 2104 | Specified vault does not exist |\n| 2106 | The maximum number of single chain address subscriptions exceeds the limit (50) |\n| 2108 | Parameter type error |\n| 2109 | advancedEnabled must be 0 or 1 |\n| 2110 | algorithmType must be 0 or 1 |\n| 2111 | Must be less then 50 requestIds in one query |\n| 2112 | Must be less then 50 sinoIds in one query |\n| 2113 | signAlgorithm must be one of 'personal_sign, signTypedData, eth_signTypedData_v3, eth_signTypedData_v4' | \n| 2114 | The length of requestId is too long, the maximum is 120 |\n| 2115 | Incorrect message format, or incorrect signAlgorithm parameter |\n| 2116 | Wallet and organization information do not match |\n| 2117 | Wallet and vault information do not match |\n| 2118 | Vault and organization information do not match |\n| 2119 | Current chain does not support self-transfer |\n| 2120 | Chain information organization is not configured |\n| 2121 | chainSymbol does not match with chain |\n| 2122 | Wallet address information not found |\n| 2123 | The whitelist address verification fails |\n| 2124 | Transaction insertion into the database failed |\n\n\n### Business Level Errors\n\n| Error Code | Description |  \n| :-- | :-- |\n| 4001 | Build transaction failed |\n| 4002 | Broadcast failed |\n| 4003 | The transaction of current asset can not be accelerated |\n| 4004 | The transaction to be accelerated has been contained in blockchain or the nonce has been occupied |\n| 4005 | The transaction to be canceled has been contained in blockchain or the nonce has been occupied | \n| 4006 | MPC Node not set |\n| 4007 | DKG not done |  \n| 4008 | Cannot initiate wallet creation operation on the same vault at the same time |\n| 4009 | Wallet names cannot be the same under the same vault |\n| 4010 | The value of the count parameter does not match the length of walletInfos array |\n| 4011 | Wallet quantity limit |\n| 4014 | writing to mq failed |\n| 4015 | Transaction insertion into the database failed |\n| 4017 | The cancelled deal does not exist |\n| 4018 | The accelerated transaction status is no longer padding and the transaction cannot be accelerated |\n| 4019 | The deal accelerated by this transaction does not exist |\n\n## Data Dictionary \n\n### Transaction Fee Rate Levels\n\n| Code | Description |\n| :-- | :-- |\n| LOW | Low |\n| MIDDLE | Medium |\n| HIGH | High |\n\n### Transaction Status  \n\n| Code | Description |\n| :-- | :-- |\n| 0 | Transaction pending on secondary confirmation |\n| 1 | Transaction pending on signature |\n| 2 | Transaction pending | \n| 4 | Broadcast failed |\n| 5 | Transaction failed on blockchain |\n| 6 | Broadcast timeout |\n| 10 | Transaction success |\n| 11 | Transaction has been rollback |\n| 13 | Transaction has rejected |\n\n\n## Changelog\n\n| Version | Log | Date | Modifier |\n|-|-|-|-|\n| v0.9.0 | First version | 2023-08-04 | Owen |\n| v0.9.1 | Added new sections, fixed some APIs | 2023-08-22 | Owen |  \n| v0.9.2 | Quite many changes about transaction information, SO PLEASE JUST IGNORE THE OLD VERSIONS | 2023-09-05 | Owen |\n| v0.9.3 | Updates the request parameters of interfaces `/v1/call_back/transaction/notify` and `/v1/call_back/withdrawal/confirm` | 2023-09-05 | Owen |\n| v0.9.4 | Cumulative updates: <br/>1. add api `/v1/waas/mpc/transaction/fee`. <br/> 2. Fix: Correct the response feild `sinoId` of api `/v1/waas/mpc/web3/sign_message` from `integer` to `string`, and the request params `chainSymbol` of apis `/v1/waas/mpc/transaction/cancel_transaction` and `/v1/waas/mpc/transaction/speedup_transaction` is modified from `required` to `non-required`. | 2023-12-25 | Shihan, etc. |"},postman:{name:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",description:{type:"text/plain"},url:{path:["v1","waas","mpc","mpcnode","list_mpc_requests"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/develop/mpc-waas-api/sinohope-waas-api",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"MPC Node APIs",permalink:"/docs/develop/mpc-waas-api/mpc-node-ap-is"},next:{title:"\u67e5\u8be2MPC node\u72b6\u6001",permalink:"/docs/develop/mpc-waas-api/v-1-waas-mpc-mpcnode-status"}},h={},g=[{value:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",id:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55",level:2}],y={toc:g},f="wrapper";function x(e){let{components:n,...a}=e;return(0,s.kt)(f,(0,t.Z)({},y,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55"},"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55"),(0,s.kt)("p",null,"\u67e5\u8be2mpc\u534f\u8bae\u6267\u884c\u8bb0\u5f55"),(0,s.kt)(o.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"businessExecType",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u7c7b\u578b\uff08KeyGen \u7c7b\u578b\u8bf7\u6c42\uff1a1\uff0csignTx \u7c7b\u578b\u8bf7\u6c42\uff1a2\uff0csignMessage \u7c7b\u578b\u8bf7\u6c42\uff1a3\uff0csignRawData \u7c7b\u578b\u8bf7\u6c42\uff1a4\uff09",example:1},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"businessExecStatus",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u72b6\u6001 (\u8fdb\u884c\u4e2d\uff1a0\uff0c\u6210\u529f\uff1a1\uff0c\u5931\u8d25\uff1a2\uff09",example:1},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"sinoId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"sinoId,\u4e0d\u4f20\u6309\u7167\u5206\u9875\u67e5\u8be2",example:"413497079388421"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"pageIndex",required:!1,schemaName:"pageIndex",qualifierMessage:void 0,schema:{type:"integer",description:"\u5f53\u524d\u9875\u7801\uff0c\u9996\u9875\u4e3a 1\u3002",example:1,title:"pageIndex"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"pageSize",required:!1,schemaName:"pageSize",qualifierMessage:void 0,schema:{type:"integer",description:"\u6bcf\u9875\u6570\u636e\u6761\u6570\uff08\u4e0d\u5f97\u5c0f\u4e8e1,\u4e0d\u5f97\u5927\u4e8e50\uff1b\u9ed8\u8ba4 10\uff09",example:10,title:"pageSize"},mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(i.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"successful operation")),(0,s.kt)("div",null,(0,s.kt)(o.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(p.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"code",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:200},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"data"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(c.Z,{collapsible:!1,name:"pageIndex",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:1},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"pageSize",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:10},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"totalSize",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",example:10},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"list"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,s.kt)(c.Z,{collapsible:!1,name:"requestId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u7528\u6237\u53d1\u8d77\u4e1a\u52a1\u81ea\u5df1\u751f\u6210\u7684\u552f\u4e00\u8bf7\u6c42id",example:"asdf123123123"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"sinoId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"sinoId sinohope \u6839\u636e\u5f53\u524d\u4e1a\u52a1\u751f\u6210\u7684\u552f\u4e00id",example:"123123123"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"requestTime",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u8bf7\u6c42\u65f6\u95f4",example:123123123213},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"param",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u53c2\u6570",example:"xxxxxxxx"},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"businessExecType",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u7c7b\u578b\uff08KeyGen \u7c7b\u578b\u8bf7\u6c42\uff1a1\uff0csignTx \u7c7b\u578b\u8bf7\u6c42\uff1a2\uff0csignMessage \u7c7b\u578b\u8bf7\u6c42\uff1a3\uff0csignRawData \u7c7b\u578b\u8bf7\u6c42\uff1a4\uff09",example:8},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"businessExecStatus",required:!1,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"\u4e1a\u52a1\u6267\u884c\u72b6\u6001 (\u8fdb\u884c\u4e2d\uff1a0\uff0c\u6210\u529f\uff1a1\uff0c\u5931\u8d25\uff1a2\uff09",example:0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"isSuccess",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",description:"\u662f\u5426\u6210\u529f",example:!0},mdxType:"SchemaItem"}),(0,s.kt)(c.Z,{collapsible:!1,name:"failedReason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"\u5931\u8d25\u539f\u56e0",example:""},mdxType:"SchemaItem"}),(0,s.kt)("li",null,(0,s.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,s.kt)(c.Z,{collapsible:!1,name:"success",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"})))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(r.Z,{responseExample:'{\n  "code": 200,\n  "msg": "",\n  "data": {\n    "pageIndex": 1,\n    "pageSize": 10,\n    "totalSize": 10,\n    "list": [\n      {\n        "requestId": "asdf123123123",\n        "sinoId": "123123123",\n        "requestTime": 123123123213,\n        "param": "xxxxxxxx",\n        "businessExecType": 8,\n        "businessExecStatus": 0,\n        "isSuccess": true,\n        "failedReason": ""\n      }\n    ]\n  },\n  "success": true\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);