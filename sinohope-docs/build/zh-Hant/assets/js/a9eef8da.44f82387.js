"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4227],{52991:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),i=a(86010),r=a(53438),c=a(39960),s=a(13919),o=a(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:a}=e;return n.createElement(c.Z,{href:t,className:(0,i.Z)("card padding--lg",l.cardContainer)},a)}function p(e){let{href:t,icon:a,title:r,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",l.cardTitle),title:r},a," ",r),c&&n.createElement("p",{className:(0,i.Z)("text--truncate",l.cardDescription),title:c},c))}function m(e){let{item:t}=e;const a=(0,r.Wl)(t);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const a=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const a=(0,r.jA)();return n.createElement(w,{items:a.items,className:t})}function w(e){const{items:t,className:a}=e;if(!t)return n.createElement(h,e);const c=(0,r.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",a)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},31347:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(52991),c=a(53438);const s={id:"transaction-ap-is",title:"Transaction APIs",description:"Transaction APIs",custom_edit_url:null},o=void 0,l={unversionedId:"develop/mpc-waas-api/transaction-ap-is",id:"develop/mpc-waas-api/transaction-ap-is",title:"Transaction APIs",description:"Transaction APIs",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/transaction-ap-is.tag.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/transaction-ap-is",permalink:"/zh-Hant/docs/develop/mpc-waas-api/transaction-ap-is",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"transaction-ap-is",title:"Transaction APIs",description:"Transaction APIs",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u67e5\u8be2\u5f53\u524d\u91d1\u5e93\u662f\u5426\u8bbe\u7f6e\u4e86\u98ce\u63a7\u5f00\u5173",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-transfer-risk-control-switch"},next:{title:"\u4f30\u7b97\u4ea4\u6613\u6240\u9700\u8d39\u7528",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-api-transaction-fee"}},d={},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u521b\u5efa\u53ca\u67e5\u8be2\u4ea4\u6613\u4fe1\u606f\uff0c\u521b\u5efa\u79bb\u7ebf\u7b7e\u540d"),(0,i.kt)(r.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);