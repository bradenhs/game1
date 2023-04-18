"use strict";var GameEngineComponent=(()=>{var o=Object.defineProperty;var s=Object.getOwnPropertyDescriptor;var u=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var m=(t,n)=>{for(var e in n)o(t,e,{get:n[e],enumerable:!0})},p=(t,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of u(n))!l.call(t,r)&&r!==e&&o(t,r,{get:()=>n[r],enumerable:!(i=s(n,r))||i.enumerable});return t};var f=t=>p(o({},"__esModule",{value:!0}),t);var d={};m(d,{configSchema:()=>g,defaultConfig:()=>c,parseConfig:()=>y,serializeConfig:()=>C,summarizeConfig:()=>h});var g={type:"object",required:["startingPosition"],properties:{startingPosition:{type:"array",minItems:3,maxItems:3,items:{type:"array",minItems:3,maxItems:3,items:{type:["string","null"],enum:["X","O",null]}}}}},c=`{
  "startingPosition": [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
}
`;function y(t){let n=0,e=0,i=t.startingPosition.map(r=>r.map(a=>a==="X"?n++*2:a==="O"?e++*2+1:null));if(n-e!==0&&n-e!==1)throw new Error("There should be an even number of Xs and Os (or just one more X than O) in the starting position.");return{initialBoard:i,initialTurn:e+n}}function C(t){return t.initialBoard.map(e=>e.map(i=>i===null?"empty":i%2===0?"x":"o")).map(e=>e.join(",")).join("|")}function h(t){return t.initialTurn===0?"standard starting position":"custom starting position"}return f(d);})();
