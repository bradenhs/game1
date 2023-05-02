"use strict";var GameEngineComponent=(()=>{var h=Object.create;var f=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var j=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var E=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),L=(e,t)=>{for(var o in t)f(e,o,{get:t[o],enumerable:!0})},x=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of S(t))!D.call(e,n)&&n!==o&&f(e,n,{get:()=>t[n],enumerable:!(r=P(t,n))||r.enumerable});return e};var B=(e,t,o)=>(o=e!=null?h(j(e)):{},x(t||!e||!e.__esModule?f(o,"default",{value:e,enumerable:!0}):o,e)),C=e=>x(f({},"__esModule",{value:!0}),e);var _=E((K,w)=>{"use strict";var m=Object.defineProperty,N=Object.getOwnPropertyDescriptor,G=Object.getOwnPropertyNames,R=Object.prototype.hasOwnProperty,T=(e,t)=>{for(var o in t)m(e,o,{get:t[o],enumerable:!0})},$=(e,t,o,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of G(t))!R.call(e,n)&&n!==o&&m(e,n,{get:()=>t[n],enumerable:!(r=N(t,n))||r.enumerable});return e},V=e=>$(m({},"__esModule",{value:!0}),e),g={};T(g,{BotOutcome:()=>A,GameSpeed:()=>F,createTemplate:()=>W,file:()=>v});w.exports=V(g);var A={Victory:"victory",Defeat:"defeat",Draw:"draw",Error:"error",None:"none"},F={Fast:"fast",Normal:"normal",Paused:"paused"};function d(e=644){return(t,...o)=>{let r="";t.forEach((s,a)=>{r+=s+(o[a]??"")});let n=r.split(`
`);for(;n[0]?.trim()==="";)n.shift();let i=n[0]?.match(/^\s+/)?.[0]??"";return{contents:n.map(s=>s.startsWith(i)?s.slice(i.length):s).join(`
`),mode:e}}}var v=d();v.mode=e=>d(e);v.executable=d(755);function W(e){return e}});var z={};L(z,{play:()=>I});var c=B(_());async function*I(e){let t=e.config.initialTurn,o={board:e.config.initialBoard};for(yield o;;){let r=q(o)?.outcome??null;if(r!==null)return r;let n=t%2===0?0:1,i=e.bots[n],s=J(o),a=await i.move(s).then(k);i.writeln(`\u2937 x=${a.x} y=${a.y}`);let p=o.board[a.x][a.y];if(typeof p=="number")return o.board[a.x][a.y]=[p,t],i.writeln(`Spot { x: ${a.x}, y: ${a.y} } already occupied.`),yield o,[n===0?c.BotOutcome.Error:c.BotOutcome.None,n===1?c.BotOutcome.Error:c.BotOutcome.None];o.board[a.x][a.y]=t,yield o,t++}}function k(e){let[t,o]=e.split(",").map(r=>{if(/(0|1|2)/.test(r))return parseInt(r)});if(t===void 0||o===void 0)throw new Error(`Response invalid: "${e}"`);return{x:t,y:o}}function J(e){return e.board.map(o=>o.map(r=>r===null?"empty":(Array.isArray(r)?r[0]%2===0:r%2===0)?"x":"o")).map(o=>o.join(",")).join("|")}function q(e){let t={x:0,y:0},o={x:0,y:1},r={x:0,y:2},n={x:1,y:0},i={x:1,y:1},s={x:1,y:2},a={x:2,y:0},p={x:2,y:1},y={x:2,y:2},M=[[t,o,r],[n,i,s],[a,p,y],[t,n,a],[o,i,p],[r,s,y],[t,i,y],[a,i,r]];for(let u of[0,1]){let l=M.find(O=>O.every(b=>e.board[b.x][b.y]===u));if(l)return{winningLine:l,outcome:[u===0?c.BotOutcome.Victory:c.BotOutcome.Defeat,u===1?c.BotOutcome.Victory:c.BotOutcome.Defeat]}}for(let u=0;u<3;u++)for(let l=0;l<3;l++)if(e.board[u][l]===null)return null;return{outcome:[c.BotOutcome.Draw,c.BotOutcome.Draw]}}return C(z);})();
