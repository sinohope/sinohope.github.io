"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[4936],{52991:(e,t,r)=>{r.d(t,{Z:()=>y});var i=r(67294),n=r(86010),a=r(53438),c=r(39960),l=r(13919),o=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:r}=e;return i.createElement(c.Z,{href:t,className:(0,n.Z)("card padding--lg",s.cardContainer)},r)}function u(e){let{href:t,icon:r,title:a,description:c}=e;return i.createElement(d,{href:t},i.createElement("h2",{className:(0,n.Z)("text--truncate",s.cardTitle),title:a},r," ",a),c&&i.createElement("p",{className:(0,n.Z)("text--truncate",s.cardDescription),title:c},c))}function m(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?i.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){let{item:t}=e;const r=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return i.createElement(u,{href:t.href,icon:r,title:t.label,description:n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(p,{item:t});case"category":return i.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.jA)();return i.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return i.createElement(h,e);const c=(0,a.MN)(t);return i.createElement("section",{className:(0,n.Z)("row",r)},c.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},73236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var i=r(87462),n=(r(67294),r(3905)),a=r(52991),c=r(53438);const l={id:"\u8d26\u6237-\u5730\u5740",title:"\u8d26\u6237&\u5730\u5740",description:"\u8d26\u6237&\u5730\u5740",custom_edit_url:null},o=void 0,s={unversionedId:"develop/full-custody-waas-api/\u8d26\u6237-\u5730\u5740",id:"develop/full-custody-waas-api/\u8d26\u6237-\u5730\u5740",title:"\u8d26\u6237&\u5730\u5740",description:"\u8d26\u6237&\u5730\u5740",source:"@site/docs/develop/full-custody-waas-api/\u8d26\u6237-\u5730\u5740.tag.mdx",sourceDirName:"develop/full-custody-waas-api",slug:"/develop/full-custody-waas-api/\u8d26\u6237-\u5730\u5740",permalink:"/docs/develop/full-custody-waas-api/\u8d26\u6237-\u5730\u5740",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"\u8d26\u6237-\u5730\u5740",title:"\u8d26\u6237&\u5730\u5740",description:"\u8d26\u6237&\u5730\u5740",custom_edit_url:null},sidebar:"fullCustodyApiSidebar",previous:{title:"\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u7684\u94fe",permalink:"/docs/develop/full-custody-waas-api/\u67e5\u8be2\u7cfb\u7edf\u652f\u6301\u7684\u94fe"},next:{title:"\u521b\u5efa\u94b1\u5305",permalink:"/docs/develop/full-custody-waas-api/\u521b\u5efa\u94b1\u5305"}},d={},u=[],m={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u521b\u5efa\u3001\u7ba1\u7406\u3001\u67e5\u8be2\u94b1\u5305\u8d26\u6237\u4e0e\u5730\u5740\u4fe1\u606f"),(0,n.kt)(a.Z,{items:(0,c.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);