"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[6574],{52991:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(67294),r=n(86010),a=n(53438),c=n(39960),o=n(13919),s=n(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return i.createElement(c.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer)},n)}function m(e){let{href:t,icon:n,title:a,description:c}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,r.Z)("text--truncate",l.cardTitle),title:a},n," ",a),c&&i.createElement("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:c},c))}function p(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?i.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return i.createElement(m,{href:t.href,icon:n,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return i.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return i.createElement(h,e);const c=(0,a.MN)(t);return i.createElement("section",{className:(0,r.Z)("row",n)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},70251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var i=n(87462),r=(n(67294),n(3905)),a=n(52991),c=n(53438);const o={id:"\u9ad8\u7ea7",title:"\u9ad8\u7ea7",description:"\u9ad8\u7ea7",custom_edit_url:null},s=void 0,l={unversionedId:"develop/mpc-waas-api/\u9ad8\u7ea7",id:"develop/mpc-waas-api/\u9ad8\u7ea7",title:"\u9ad8\u7ea7",description:"\u9ad8\u7ea7",source:"@site/i18n/zh-Hant/docusaurus-plugin-content-docs/current/develop/mpc-waas-api/\u9ad8\u7ea7.tag.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/\u9ad8\u7ea7",permalink:"/zh-Hant/docs/develop/mpc-waas-api/\u9ad8\u7ea7",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"\u9ad8\u7ea7",title:"\u9ad8\u7ea7",description:"\u9ad8\u7ea7",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08EIP-191\u3001 EIP-712\uff09",permalink:"/zh-Hant/docs/develop/mpc-waas-api/\u6309\u5df2\u77e5\u7684\u89c4\u8303\u7b7e\u540d\u6d88\u606f\uff08eip-191-\u3001-eip-712-\uff09"},next:{title:"\u539f\u59cb\u6570\u636e\u7b7e\u540d",permalink:"/zh-Hant/docs/develop/mpc-waas-api/\u539f\u59cb\u6570\u636e\u7b7e\u540d"}},d={},m=[],p={toc:m},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u9ad8\u7ea7\u529f\u80fd\u5141\u8bb8\u76f4\u63a5\u7b7e\u540d\u6307\u5b9a\u7684\u539f\u59cb\u6570\u636e\uff0c\u9700\u94b1\u5305\u7ec4\u53ca\u94b1\u5305\u5747\u5f00\u542f\u201c\u9ad8\u7ea7\u529f\u80fd\u201d\u624d\u53ef\u7528"),(0,r.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);