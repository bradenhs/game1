"use strict";var GameEngineComponent=(()=>{var o=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var l=(e,r)=>{for(var s in r)o(e,s,{get:r[s],enumerable:!0})},c=(e,r,s,a)=>{if(r&&typeof r=="object"||typeof r=="function")for(let t of p(r))!n.call(e,t)&&t!==s&&o(e,t,{get:()=>r[t],enumerable:!(a=i(r,t))||a.enumerable});return e};var f=e=>c(o({},"__esModule",{value:!0}),e);var g={};l(g,{Bot:()=>m});var m=class{params;constructor(r){this.params=r}move(r){let s=r.split("|").map(a=>a.split(","));for(let a=0;a<3;a++)for(let t=0;t<3;t++)if(s[a][t]==="empty")return`${a},${t}`;return"0,0"}};return f(g);})();