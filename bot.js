"use strict";var GameEngineComponent=(()=>{var e=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var c=(r,o)=>{for(var n in o)e(r,n,{get:o[n],enumerable:!0})},m=(r,o,n,i)=>{if(o&&typeof o=="object"||typeof o=="function")for(let t of g(o))!p.call(r,t)&&t!==n&&e(r,t,{get:()=>o[t],enumerable:!(i=s(o,t))||i.enumerable});return r};var a=r=>m(e({},"__esModule",{value:!0}),r);var l={};c(l,{Bot:()=>f});var f=class{type;config;constructor(o,n){this.type=o,this.config=n}move(o){let n=o.split("|").map(i=>i.split(","));for(let i=0;i<3;i++)for(let t=0;t<3;t++)if(n[i][t]==="empty")return`${i},${t}`;return"0,0"}};return a(l);})();