"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8580],{52991:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(67294),a=n(86010),o=n(53438),r=n(39960),c=n(13919),s=n(95999);const m={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function l(e){let{href:t,children:n}=e;return i.createElement(r.Z,{href:t,className:(0,a.Z)("card padding--lg",m.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:r}=e;return i.createElement(l,{href:t},i.createElement("h2",{className:(0,a.Z)("text--truncate",m.cardTitle),title:o},n," ",o),r&&i.createElement("p",{className:(0,a.Z)("text--truncate",m.cardDescription),title:r},r))}function d(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?i.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return i.createElement(p,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return i.createElement(u,{item:t});case"category":return i.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return i.createElement(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return i.createElement(h,e);const r=(0,o.MN)(t);return i.createElement("section",{className:(0,a.Z)("row",n)},r.map(((e,t)=>i.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},i.createElement(f,{item:e})))))}},84795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>p});var i=n(87462),a=(n(67294),n(3905)),o=n(52991),r=n(53438);const c={id:"common-ap-is",title:"Common APIs",description:"Common APIs",custom_edit_url:null},s=void 0,m={unversionedId:"develop/mpc-waas-api/common-ap-is",id:"develop/mpc-waas-api/common-ap-is",title:"Common APIs",description:"Common APIs",source:"@site/docs/develop/mpc-waas-api/common-ap-is.tag.mdx",sourceDirName:"develop/mpc-waas-api",slug:"/develop/mpc-waas-api/common-ap-is",permalink:"/docs/develop/mpc-waas-api/common-ap-is",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"common-ap-is",title:"Common APIs",description:"Common APIs",custom_edit_url:null},sidebar:"mpcApiSidebar",previous:{title:"Withdrawal Confirmation",permalink:"/docs/develop/mpc-waas-api/v-1-call-back-withdrawal-confirm"},next:{title:"Query system support chain",permalink:"/docs/develop/mpc-waas-api/v-1-api-common-get-supported-chains"}},l={},p=[],d={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Query interfaces for multiple business lines"),(0,a.kt)(o.Z,{items:(0,r.jA)().items,mdxType:"DocCardList"}))}f.isMDXComponent=!0}}]);