"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6267],{52991:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),c=a(86010),i=a(53438),r=a(39960),s=a(13919),d=a(95999);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:a}=e;return n.createElement(r.Z,{href:t,className:(0,c.Z)("card padding--lg",o.cardContainer)},a)}function p(e){let{href:t,icon:a,title:i,description:r}=e;return n.createElement(l,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",o.cardTitle),title:i},a," ",i),r&&n.createElement("p",{className:(0,c.Z)("text--truncate",o.cardDescription),title:r},r))}function m(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,d.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const a=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:a,title:t.label,description:c?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(u,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(h,{items:a.items,className:t})}function h(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const r=(0,i.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},6046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>v,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(87462),c=(a(67294),a(3905)),i=a(52991),r=a(53438);const s={id:"advanced-ap-is",title:"Advanced APIs",description:"Advanced APIs",custom_edit_url:null},d=void 0,o={unversionedId:"develop/mpc-waas-api/advanced-ap-is",id:"develop/mpc-waas-api/advanced-ap-is",title:"Advanced APIs",description:"Advanced APIs",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/advanced-ap-is.tag.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/advanced-ap-is",permalink:"/zh-Hant/docs/develop/mpc-waas-api/advanced-ap-is",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"advanced-ap-is",title:"Advanced APIs",description:"Advanced APIs",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u67e5\u8be2\u6307\u5b9a\u5730\u5740BTC\u4f59\u989d\u8be6\u60c5\uff08\u603b\u4f59\u989d\u3001\u975e\u94ed\u6587\u4f59\u989d\u3001\u94ed\u6587\u76f8\u5173\u4f59\u989d\uff09",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-waas-mpc-brc-20-address-balance"},next:{title:"\u539f\u59cb\u6570\u636e\u7b7e\u540d",permalink:"/zh-Hant/docs/develop/mpc-waas-api/v-1-waas-mpc-wallet-advance-sign-raw-data"}},l={},p=[],m={toc:p},u="wrapper";function v(e){let{components:t,...a}=e;return(0,c.kt)(u,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u9ad8\u7ea7\u529f\u80fd\u5141\u8bb8\u76f4\u63a5\u7b7e\u540d\u6307\u5b9a\u7684\u539f\u59cb\u6570\u636e\uff0c\u9700\u94b1\u5305\u7ec4\u53ca\u94b1\u5305\u5747\u5f00\u542f\u201c\u9ad8\u7ea7\u529f\u80fd\u201d\u624d\u53ef\u7528"),(0,c.kt)(i.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);