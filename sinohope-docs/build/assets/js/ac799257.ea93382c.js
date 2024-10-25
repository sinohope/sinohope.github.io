"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9974],{18433:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=a(87462),s=(a(67294),a(3905));const i={sidebar_position:"105"},r="\ud83d\udd04 WaaS Security Mechanism Update 2024-08-19",o={unversionedId:"learn/news/WaaS 2024-08-19",id:"learn/news/WaaS 2024-08-19",title:"\ud83d\udd04 WaaS Security Mechanism Update 2024-08-19",description:"I. WaaS Transaction Support for Transaction Review",source:"@site/docs/learn/news/WaaS 2024-08-19.md",sourceDirName:"learn/news",slug:"/learn/news/WaaS 2024-08-19",permalink:"/docs/learn/news/WaaS 2024-08-19",draft:!1,tags:[],version:"current",sidebarPosition:105,frontMatter:{sidebar_position:105},sidebar:"newsSidebar",next:{title:"\ud83d\udd04 \u3010WaaS Update\u3011 2024-07-29",permalink:"/docs/learn/news/WaaS 2024-07-30"}},c={},l=[],p={toc:l},h="wrapper";function d(e){let{components:t,...i}=e;return(0,s.kt)(h,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"-waas-security-mechanism-update-2024-08-19"},"\ud83d\udd04 WaaS Security Mechanism Update 2024-08-19"),(0,s.kt)("p",null,"I. WaaS Transaction Support for Transaction Review\nin Web Console In the ","[Web - Rule Engine - Vault Policy]"," module, switch to the WaaS vault view, and you can observe that the newly created vault has the transaction review function enabled by default."),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(57376).Z,width:"864",height:"164"})),(0,s.kt)("p",null,"During the period when the review function is enabled, specific transactions initiated through the WaaS API must be manually reviewed in the ","[Web - Workflow - Transaction Approval]"," process. These specific transactions include the following interfaces:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"/v1/waas/mpc/transaction/create_transfer\n/v1/waas/mpc/transaction/create_transaction\n/v1/waas/mpc/brc20/inscribe-deploy\n/v1/waas/mpc/brc20/inscribe_mint\n/v1/waas/mpc/brc20/inscribe_transfer_by_id\n/v1/waas/mpc/brc20/one_stop_transfer\n/v1/waas/mpc/runes/transfer\n")),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(3574).Z,width:"864",height:"300"})),(0,s.kt)("p",null,"The assignment of reviewers is determined by the settings of the vault policy, and is usually reviewed by the Owner; users can manually add approval steps or set t-n approval rules on a single node."),(0,s.kt)("p",null,"For vaults that do not require an approval process, this feature can be turned off by accessing the ","[Web - Rule Engine - Vault Policy]"," page and making the appropriate settings. In addition, to disable the transaction review function, the approval process must be completed in ","[Web - Workflow - OpenAPI]"," before it can take effect; the determination of reviewers follows the global policy settings, with the default being the Owner for review."),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(16262).Z,width:"864",height:"241"})),(0,s.kt)("p",null,"II. In the WaaS vault, the activation of the transfer protection function (formerly the risk control - whitelist function) must go through the approval process of the workflow before it can officially take effect."),(0,s.kt)("p",null,"The path setting remains at: ","[Web - WaaS Wallet - Select a Specific Vault - Risk Control]","; after editing the transfer protection switch, it must be reviewed in ","[Web - Workflow - Transfer Protection]"," to take effect."),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(32354).Z,width:"864",height:"293"})),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(95378).Z,width:"864",height:"191"})),(0,s.kt)("p",null,"The reviewer setting for the transfer protection switch is based on the configuration of the ",(0,s.kt)("strong",{parentName:"p"},"global policy"),", with the default reviewer being the Owner."),(0,s.kt)("p",null," ",(0,s.kt)("img",{src:a(65726).Z,width:"864",height:"239"})),(0,s.kt)("p",null,"III. In the WaaS vault, the editing of the whitelist address must go through the approval process of the workflow before it can officially take effect; the selection of reviewers is based on the settings of the ",(0,s.kt)("strong",{parentName:"p"},"vault policy"),"."),(0,s.kt)("p",null,(0,s.kt)("img",{src:a(57485).Z,width:"864",height:"295"})))}d.isMDXComponent=!0},57376:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819001-b775bf38e061450caafa447567861630.png"},3574:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819002-4afebdbb2370f14983e9154a68b6942c.png"},16262:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819003-94c9135051c066eeb493951699e3873b.png"},32354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819004-5845c968376d0b609ab77bc8710731a1.png"},95378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819005-c32313ace61e1eb265271e1882ddb1b0.png"},65726:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819006-1b8a23fe23c7b01fcaff7d5c86dc4ec3.png"},57485:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/20240819007-edc4c6abacd6181e9dc5a2d37c61bfbb.png"}}]);