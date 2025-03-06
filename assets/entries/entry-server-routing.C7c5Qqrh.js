const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_accessories.kQW9C3nO.js","assets/chunks/chunk-OyUVA7kq.js","assets/static/app_generated_index-6937cd5a.CPUmKO5F.css","assets/entries/pages_contact.BUqSkwCM.js","assets/entries/pages_credits.BF7-CqnG.js","assets/entries/pages_index.BXBZvez3.js","assets/entries/pages_style-guide.BXDu3V6J.js"])))=>i.map(i=>d[i]);
function pe(e){return Array.from(new Set(e))}function R(e,t){const n=Ae();return n[e]=n[e]||t}function Ae(){const e="_vike";return globalThis[e]=globalThis[e]||{}}const Fe="0.4.222",he={projectName:"Vike",projectVersion:Fe},v=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),P=R("assertSingleInstance.ts",{instances:[],alreadyLogged:new Set}),ze="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",me="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function ye(){{const e=pe(P.instances);De(e.length<=1,`vike@${v.bold(e[0])} and vike@${v.bold(e[1])} loaded but only one version should be loaded`)}P.checkSingleInstance&&P.instances.length>1&&U(!1,me,{onlyOnce:!0,showStackTrace:!0})}function Le(e){U(P.isClientRouting!==!0,ze,{onlyOnce:!0,showStackTrace:!0}),U(P.isClientRouting===void 0,me,{onlyOnce:!0,showStackTrace:!0}),P.isClientRouting=!1,P.checkSingleInstance=!0,ye()}function We(){P.instances.push(he.projectVersion),ye()}function De(e,t){if(e)return;const n=`[vike][Wrong Usage] ${t}`;throw new Error(n)}function U(e,t,{onlyOnce:n,showStackTrace:r}){if(e)return;const i=`[vike][Warning] ${t}`;if(n){const{alreadyLogged:s}=P,a=n===!0?i:n;if(s.has(a))return;s.add(a)}console.warn(r?new Error(i):i)}function Ve(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function A(e,t){const n=new Error(e);return Ve()&&(n.stack=Ue(n.stack,t)),n}function Ue(e,t){if(!e)return e;const n=He(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Be(s)?(r++,!1):!0).join(`
`)}function Be(e){return e.startsWith("    at ")}function He(e){return e.split(/\r?\n/)}function w(e){return typeof e=="object"&&e!==null}const E=R("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});We();const Ne="[vike]",Ge=`[vike@${he.projectVersion}]`,Je="Bug",F=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return v.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let i=[`You stumbled upon a Vike bug. Go to ${v.blue("https://github.com/vikejs/vike/issues/new")} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,n].filter(Boolean).join(" ");i=L(i),i=z(i,Je),i=W(i,!0);const s=A(i,F);throw(a=E.onBeforeLog)==null||a.call(E),s}function m(e,t,{showStackTrace:n}={}){var i;if(e)return;n=n||E.alwaysShowStackTrace,t=L(t),t=z(t,"Wrong Usage"),t=W(t);const r=A(t,F);throw n&&E.showStackTraceList.add(r),(i=E.onBeforeLog)==null||i.call(E),r}function Ye(e){return e=L(e),e=z(e,"Error"),e=W(e),A(e,F)}function _(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||E.alwaysShowStackTrace,t=L(t),t=z(t,"Warning"),t=W(t),n){const{alreadyLogged:s}=E,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=E.onBeforeLog)==null||i.call(E),r){const s=A(t,F);E.showStackTraceList.add(s),E.logger(s,"warn")}else E.logger(t,"warn")}}function z(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=v.bold(v[r](n)),`${n}${e}`}function L(e){return e.startsWith("[")?e:` ${e}`}function W(e,t=!1){return`${t?Ge:Ne}${e}`}function Y(){return typeof window<"u"&&typeof window.scrollY=="number"}const Q=R("utils/assertRouterType.ts",{});function Me(){qe(Q.isClientRouting!==!0),Q.isClientRouting=!1}function qe(e){m(Y(),`${v.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),_(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function Ke(){o(Y())}function Xe(){Ke()}function Z(e){const t=e/1e3;if(t<120){const n=ee(t);return`${n} second${te(n)}`}{const n=t/60,r=ee(n);return`${r} minute${te(r)}`}}function ee(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function te(e){return e==="1"?"":"s"}const B=R("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function Qe(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let l,u;const c=new Promise((d,h)=>{l=S=>{f(),d(S)},u=S=>{f(),h(S)}}),f=()=>{g&&clearTimeout(g),p&&clearTimeout(p)},g=ne(a)&&setTimeout(()=>{_(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${Z(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),p=ne(s)&&setTimeout(()=>{const d=Ye(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${Z(s)} (https://vike.dev/hooksTimeout)`);u(d)},s);return(async()=>{try{Ze(n);const d=await e();l(d)}catch(d){w(d)&&B.userHookErrors.set(d,{hookName:r,hookFilePath:i}),u(d)}})(),c}function ne(e){return!!e&&e!==1/0}function Ze(e){B.pageContext=e,Promise.resolve().then(()=>{B.pageContext=null})}function D(e){return e instanceof Function||typeof e=="function"}function j(e){return Array.isArray(e)}function et(e){return j(e)&&e.every(t=>typeof t=="string")}function tt(e){return w(e)&&Object.values(e).every(t=>typeof t=="string")}function y(e,t,n){if(!w(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?j(r):n==="object"?w(r):n==="string[]"?et(r):n==="string{}"?tt(r):n==="function"?D(r):j(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function C(e,t){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function ve(e,t,n){return typeof e=="string"?re(e.split(""),t,n).join(""):re(e,t,n)}function re(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function nt(e,t){o(dt(e),e),o(t.startsWith("/"));const{hashString:n,withoutHash:r}=rt(e);o(n===null||n.startsWith("#"));const i=n===null?"":Ee(n.slice(1)),{searchString:s,withoutSearch:a}=ie(r);o(s===null||s.startsWith("?"));let l="";if(s!==null)l=s;else if(e.startsWith("#")){const x=Se();l=x&&ie(x).searchString||""}const u={},c={};Array.from(new URLSearchParams(l)).forEach(([x,X])=>{u[x]=X,c[x]=[...c.hasOwnProperty(x)?c[x]:[],X]});let{protocol:f,origin:g,pathnameAbsoluteWithBase:p}=st(a,t);const d=a.slice((g||"").length);ft(e,g,d,s,n);let{pathname:h,hasBaseServer:S}=ut(p,t);const b=we(g,h,s,n),$=g?g.slice(f.length):null,{hostname:V,port:ke}=ot($,e);return h=it(h),o(h.startsWith("/")),{href:b,protocol:f,hostname:V,port:ke,origin:g,pathname:h,pathnameOriginal:d,hasBaseServer:S,search:u,searchAll:c,searchOriginal:s,hash:i,hashOriginal:n}}function rt(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}function ie(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}function Ee(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function it(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>Ee(t).split("/").join("%2F")).join("/"),e}function st(e,t){o(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:i}=se(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=Se();let r;return n?r=se(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:lt(e,r)}}}function Se(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}function se(e){if(Pe(e)){const{protocol:t,uriWithoutProtocol:n}=be(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function ot(e,t){const n={hostname:null,port:null};if(!e)return n;const r=e.split(":");if(r.length>1){const i=parseInt(r.pop(),10);o(i||i===0,t),n.port=i}return n.hostname=r.join(":"),n}function be(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function at(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function lt(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function ut(e,t){return o(e.startsWith("/")),o(ct(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,hasBaseServer:!0}}function ct(e){return e.startsWith("/")}function ft(e,t,n,r,i){const s=we(t,n,r,i);o(e===s)}function we(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function dt(e){return Pe(e)||e.startsWith("/")||gt(e)}function gt(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function Pe(e){const{protocol:t}=be(e);return!!t&&at(t)}function pt(e){return typeof e=="string"&&ht(e)?`.${e}`:`[${JSON.stringify(e)}]`}function ht(e){return/^[a-z0-9\$_]+$/i.test(e)}Xe();const mt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Ce(e){const t=JSON.parse(e);return M(t)}function M(e){return typeof e=="string"?yt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=M(n)}),e)}function yt(e){for(const{match:t,deserialize:n}of mt)if(t(e))return n(e,Ce);return e}function vt(){const e="vike_pageContext",t=document.getElementById(e);m(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Ce(n);return o(y(r,"pageId","string")),o(y(r,"routeParams","string{}")),r}function Et(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function St(e){return Et(t=>{const n=e(t);return n===null?null:!n})}function bt(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}const wt=e=>e!=null,_e=["js","ts","cjs","cts","mjs","mts"],Pt=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],xe=["vue","svelte","marko","md","mdx"],Ct=[..._e,...Pt,...xe];function je(e){const t=Ct.some(n=>e.endsWith("."+n));return _t(e)&&o(t),t}function _t(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=_e.some(r=>e.endsWith("."+r));return o(t===n),t}function xt(e){return xe.some(t=>e.endsWith("."+t))}function jt(e,t){return Rt(e,t,!0)}function Rt(e,t,n){const r="CLIENT_ONLY",i=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(Tt(n,t)),s=d=>{const h=i.filter(b=>b.pageId===t&&b.isEnv(d?"CLIENT_AND_SERVER":r));m(h.length<=1,`Merge the following files into a single file: ${h.map(b=>b.filePath).join(" ")}`);const S=h[0];return o(S===void 0||!S.isDefaultPageFile),S},a=s(!1),l=s(!0),u=d=>i.filter(h=>h.isRendererPageFile&&h.isEnv(d?"CLIENT_AND_SERVER":r))[0],c=u(!1),f=u(!0),g=i.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,l,...g,c,f].filter(wt)}function Tt(e,t){const n="CLIENT_ONLY";return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return-1;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const u=a.isRendererPageFile,c=l.isRendererPageFile;if(!u&&c)return-1;if(!c&&u)return 1;o(u===c)}{const u=oe(t,a.filePath),c=oe(t,l.filePath);if(u<c)return-1;if(c<u)return 1;o(u===c)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return-1;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function oe(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}const $t=["clientRouting"];function It(e){$t.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;m(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),m(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const Re=["render","clientRouting","prerender","doNotPrerender"];function Ot(e,t){m(!Re.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function kt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function At(e,t,n){return`${H(e,t)} at ${k(n,t)}`}function Ft(e,t,n){return n?`${H(e,t)} at ${k(n,t)}`:`${H(e,t)} internally`}function H(e,t){return`${e} ${v.cyan(t)} defined`}function k(e,t){let n;return j(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const u=kt(a,t);return u&&(l=`${l} > ${v.cyan(u)}`),l}).join(" / ")}function zt(e){if(!e||j(e))return null;const{filePathToShowToUser:t}=e;return o(t),t}function ae(e){const t=Te(e);return{config:t.config,_source:t.source,_sources:t.sources,_from:t.from}}function Lt(e,t,n){const r={},i={},s={};e.forEach(p=>{Wt(p).forEach(({exportName:h,exportValue:S,isFromDefaultExport:b})=>{o(h!=="default"),s[h]=s[h]??[],s[h].push({exportValue:S,exportSource:`${p.filePath} > ${b?`\`export default { ${h} }\``:`\`export { ${h} }\``}`,filePath:p.filePath,_filePath:p.filePath,_fileType:p.fileType,_isFromDefaultExport:b})})});let a,l,u;if(t){const p=Te({configValues:{...n.configValues,...t.configValues}});a=p.source,l=p.sources,u=p.from,Object.assign(r,p.config),Object.assign(i,p.configEntries),Object.assign(s,p.exportsAll)}else a={},l={},u={configsStandard:{},configsCumulative:{},configsComputed:{}};const c=Dt(),f={};return Object.entries(s).forEach(([p,d])=>{d.forEach(({exportValue:h,_fileType:S,_isFromDefaultExport:b})=>{f[p]=f[p]??h,S===".page"&&!b&&(p in c||(c[p]=h))})}),o(!("default"in f)),o(!("default"in s)),{config:r,from:u,source:a,sources:l,configEntries:i,exports:f,exportsAll:s,pageExports:c}}function Te(e){const t={},n={},r={},i={},s={},a={configsStandard:{},configsCumulative:{},configsComputed:{}},l=(u,c)=>{i[c]=u,s[c]??(s[c]=[]),s[c].push(u)};return Object.entries(e.configValues).forEach(([u,c])=>{const{value:f}=c,g=zt(c.definedAtData),p=Ft("Config",u,c.definedAtData);if(t[u]=t[u]??f,n[u]=n[u]??[],o(n[u].length===0),n[u].push({configValue:f,configDefinedAt:p,configDefinedByFile:g}),c.type==="standard"){const h={type:"configsStandard",value:c.value,definedAt:k(c.definedAtData,u)};l(h,u),a.configsStandard[u]=h}if(c.type==="cumulative"){const h={type:"configsCumulative",values:c.value.map((S,b)=>{const $=c.definedAtData[b];o($);const V=k($,u);return{value:S,definedAt:V}})};l(h,u),a.configsCumulative[u]=h}if(c.type==="computed"){const h={type:"configsComputed",value:c.value};l(h,u),a.configsComputed[u]=h}const d=u;r[d]=r[d]??[],r[d].push({exportValue:f,exportSource:p,filePath:g,_filePath:g,_fileType:null,_isFromDefaultExport:null})}),{config:t,configEntries:n,exportsAll:r,source:i,sources:s,from:a}}function Wt(e){const{filePath:t,fileExports:n}=e;o(n),o(je(t));const r=[];return Object.entries(n).sort(St(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(xt(t))i="Page";else{m(w(s),`The ${v.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,u])=>{Ot(l,t),r.push({exportName:l,exportValue:u,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&Re.includes(i)))}),r}function Dt(){return new Proxy({},{get(...e){return Y()||_(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function Vt(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}const Ut=["$$registrations","_rerender_only"],Bt=[".md",".mdx"];function Ht(e,t,n){const r=Object.keys(e),i=c=>c==="default"||c===n,s=r.filter(i),a=v.code("export default"),l=v.code(`export { ${n} }`);s.length===0&&m(!1,`${t} should have ${l} or ${a}`),s.length===2&&m(!1,`${t} is ambiguous: remove ${a} or ${l}`),o(s.length===1);const u=r.filter(c=>!i(c)).filter(c=>!Ut.includes(c));Bt.some(c=>t.endsWith(c))||u.forEach(c=>{_(!1,`${t} unexpected ${v.cyan(`export { ${c} }`)}, see https://vike.dev/no-side-exports`,{onlyOnce:!0})})}function N(e){return Jt(e)}function Nt(e,t){const n=e.map(i=>{const s=N(i.configValuesSerialized),{pageId:a,isErrorPage:l,routeFilesystem:u,loadConfigValuesAll:c}=i;return Gt(s),{pageId:a,isErrorPage:l,routeFilesystem:u,configValues:s,loadConfigValuesAll:c}}),r={configValues:{}};{const i=N(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function Gt(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=At("Config",t,i);m(s==="string"||D(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function Jt(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...l}=i;s={value:a.map((c,f)=>{const{value:g,sideExports:p}=le(c,r,()=>{const d=i.definedAtData[f];return o(d),d});return n(p),g}),...l}}else{const{valueSerialized:a,...l}=i,{value:u,sideExports:c}=le(a,r,()=>(o(i.type!=="computed"),i.definedAtData));n(c),s={value:u,...l}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function le(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=M(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;Ht(i,r.filePathToShowToUser,t);let s,a=!1;const l=[];return Object.entries(i).forEach(([u,c])=>{u!=="default"&&u!==t?l.push({configName:u,configValue:{type:"standard",value:c,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[u]}}}):(s=c,o(!a),a=!0)}),o(a),{value:s,sideExports:l}}o(!1)}async function Yt(e,t){if("isAllLoaded"in e&&!t)return e;const{moduleId:n,moduleExports:r}=e.loadConfigValuesAll(),i=await r;i||o(!1,{moduleExports:r,configValuesLoaded:i,moduleId:n});const s=N(i.configValuesSerialized);return Object.assign(e.configValues,s),C(e,{isAllLoaded:!0}),e}const Mt="__whileFetchingAssets";async function qt(e,t,n,r){const i=jt(t,e),s=Vt(n,e);let a;const l=!1;try{a=(await Promise.all([s&&Yt(s,l),...i.map(g=>{var p;return(p=g.loadFile)==null?void 0:p.call(g)})]))[0]}catch(f){throw Kt(f)&&Object.assign(f,{[Mt]:!0}),f}const u=Lt(i,a,r),c={};return C(c,u),C(c,{_pageFilesLoaded:i}),c}function Kt(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function Xt(e,t){o(!e.startsWith("#"));const{searchOriginal:n,hashOriginal:r,pathname:i}=nt(e,"/");let s=`${i}${n||""}`;return t!=null&&t.withoutHash||(s+=r||""),o(s.startsWith("/")),s}function $e(e){return Xt(window.location.href,e)}function Qt(e){const t=".page.",n=ve(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function q(e,t){return o(!e.includes("\\")),e.includes("/_error")}function Zt(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return q(e)}const en=[".page",".page.server",".page.route",".page.client",".css"];function tn(e){if(e.endsWith(".css"))return".css";o(je(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function Ie(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(ue(i.filePath)||nn(s,i.filePath)),n=tn(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:G(e),isRendererPageFile:n!==".css"&&G(e)&&ue(e),isErrorPageFile:q(e),pageId:Qt(e)};return i}function G(e){return q(e)?!1:e.includes("/_default")}function ue(e){return e.includes("/renderer/")}function nn(e,t){o(!e.endsWith("/")),o(!t.endsWith("/")),o(G(t));const n=ve(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function rn(e){o(y(e,"pageFilesLazy","object")),o(y(e,"pageFilesEager","object")),o(y(e,"pageFilesExportNamesLazy","object")),o(y(e,"pageFilesExportNamesEager","object")),o(y(e.pageFilesLazy,".page")),o(y(e.pageFilesLazy,".page.client")||y(e.pageFilesLazy,".page.server")),o(y(e,"pageFilesList","string[]")),o(y(e,"pageConfigsSerialized")),o(y(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;sn(t),on(n);const{pageConfigs:r,pageConfigGlobal:i}=Nt(t,n),s={};I(e.pageFilesLazy).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const f=c;ce(f),u.loadFile=async()=>{"fileExports"in u||(u.fileExports=await f(),It(u))}}),I(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const f=c;ce(f),u.loadExportNames=async()=>{if(!("exportNames"in u)){const g=await f();o(y(g,"exportNames","string[]"),u.filePath),u.exportNames=g.exportNames}}}),I(e.pageFilesEager).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const f=c;o(w(f)),u.fileExports=f}),I(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:u,globValue:c})=>{u=s[l]=s[l]??u;const f=c;o(w(f)),o(y(f,"exportNames","string[]"),u.filePath),u.exportNames=f.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??Ie(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFilesAll:a,pageConfigs:r,pageConfigGlobal:i}}function I(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(en.includes(n)),o(w(r)),Object.entries(r).forEach(([i,s])=>{const a=Ie(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ce(e){o(D(e))}function sn(e){o(j(e)),e.forEach(t=>{o(w(t)),o(y(t,"pageId","string")),o(y(t,"routeFilesystem")),o(y(t,"configValuesSerialized"))})}function on(e){o(y(e,"configValuesSerialized"))}function an(e){const{pageFilesAll:t,pageConfigs:n,pageConfigGlobal:r}=rn(e),i=ln(t,n),s=ae(r),a=Object.fromEntries(n.map(l=>{var f;const u={...r.configValues,...l.configValues},c={...ae({configValues:u}),route:((f=l.routeFilesystem)==null?void 0:f.routeString)??null};return[l.pageId,c]}));return{pageFilesAll:t,allPageIds:i,pageConfigs:n,pageConfigGlobal:r,globalConfig:s,pageConfigsUserFriendly:a}}function ln(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=pe(n),i=t.map(s=>s.pageId);return[...r,...i]}const un="modulepreload",cn=function(e){return"/"+e},fe={},T=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=cn(u),u in fe)return;fe[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":un,c||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),c)return new Promise((p,d)=>{g.addEventListener("load",p),g.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},K={},fn={},dn={},gn={},pn=[],Oe={},hn=[{pageId:"/pages/accessories",isErrorPage:void 0,routeFilesystem:{routeString:"/accessories",definedBy:"/pages/accessories/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/accessories",moduleExports:T(()=>import("./pages_accessories.kQW9C3nO.js"),__vite__mapDeps([0,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/contact",isErrorPage:void 0,routeFilesystem:{routeString:"/contact",definedBy:"/pages/contact/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/contact",moduleExports:T(()=>import("./pages_contact.BUqSkwCM.js"),__vite__mapDeps([3,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/credits",isErrorPage:void 0,routeFilesystem:{routeString:"/credits",definedBy:"/pages/credits/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/credits",moduleExports:T(()=>import("./pages_credits.BF7-CqnG.js"),__vite__mapDeps([4,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/index",moduleExports:T(()=>import("./pages_index.BXBZvez3.js"),__vite__mapDeps([5,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/style-guide",isErrorPage:void 0,routeFilesystem:{routeString:"/style-guide",definedBy:"/pages/style-guide/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/style-guide",moduleExports:T(()=>import("./pages_style-guide.BXDu3V6J.js"),__vite__mapDeps([6,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}}],mn={configValuesSerialized:{}},yn=Object.assign({}),vn={...yn};K[".page"]=vn;const En=Object.assign({}),Sn={...En};K[".page.client"]=Sn;const bn=Object.assign({}),wn={...bn};Oe[".page.server"]=wn;const Pn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Oe,pageConfigGlobalSerialized:mn,pageConfigsSerialized:hn,pageFilesEager:fn,pageFilesExportNamesEager:gn,pageFilesExportNamesLazy:dn,pageFilesLazy:K,pageFilesList:pn},Symbol.toStringTag,{value:"Module"})),{pageFilesAll:de,pageConfigs:Cn,pageConfigGlobal:_n}=an(Pn),ge=$e({withoutHash:!0});async function xn(){const e=vt();return C(e,{isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1}),C(e,await Rn(e.pageId)),jn(),e}function jn(){const e=$e({withoutHash:!0});m(ge===e,`The URL was manipulated before the hydration finished ('${ge}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function Rn(e){const t={};return C(t,{_pageFilesAll:de,_pageConfigs:Cn,_pageConfigGlobal:_n}),C(t,await qt(e,t._pageFilesAll,t._pageConfigs,t._pageConfigGlobal)),de.filter(n=>n.fileType!==".page.server").forEach(n=>{var r;_(!((r=n.fileExports)!=null&&r.onBeforeRender),`export { onBeforeRender } of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Tn=R("getHook.ts",{});function J(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=On(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),In(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function $n(e,t){J(e,t)}function In(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),m(D(e),`Hook ${t}() defined by ${n} should be a function`)}function On(e,t){const n=kn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=An(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function kn(e){if(e===void 0)return{};if(e===!1)return!1;m(w(e),`Setting ${v.cyan("hooksTimeout")} should be ${v.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}m(w(r),`Setting ${v.cyan(`hooksTimeout.${n}`)} should be ${v.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const l=r[a];if(l===void 0||l===!1)return l;const u=`Setting ${v.cyan(`hooksTimeout.${n}.${a}`)} should be`;return m(typeof l=="number",`${u} ${v.cyan("false")} or a number`),m(l>0,`${u} a positive number`),l});t[n]={error:i,warning:s}}),t}function An(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Tn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}const Fn="not-serializable",O=R("getPageContextProxyForUser.ts",{});function zn(e){return o([!0,!1].includes(e._hasPageContextFromServer)),o([!0,!1].includes(e._hasPageContextFromClient)),new Proxy(e,{get(t,n){const r=e[n],i=pt(n);return m(r!==Fn,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),Ln(e,n,i),r}})}function Ln(e,t,n){if(Vn(t)||t in e||Dn(t)||!e._hasPageContextFromServer)return;const r=`pageContext${n} isn't defined on the client-side, see https://vike.dev/passToClient#error`;e._hasPageContextFromClient?_(!1,r,{onlyOnce:!1,showStackTrace:!0}):m(!1,r)}const Wn=["then","toJSON"];function Dn(e){return!!(Wn.includes(e)||typeof e=="symbol"||typeof e!="string"||e.startsWith("__v_"))}function Vn(e){return O.prev===e||O.prev==="__v_raw"?!0:(O.prev=e,window.setTimeout(()=>{O.prev=void 0},0),!1)}function Un(e){Bn(e),Hn(e)}function Bn(e){Zt(e.pageId,e._pageConfigs)&&o(y(e,"is404","boolean"))}function Hn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!w(t)){_(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}function Nn(e){o(e.pageId),o("config"in e),o("configEntries"in e),Un(e),"_pageId"in e||Object.defineProperty(e,"_pageId",{get(){return _(!1,"pageContext._pageId has been renamed to pageContext.pageId",{showStackTrace:!0,onlyOnce:!0}),e.pageId},enumerable:!1}),Gn(e)}function Gn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>bt(n,r))),Object.defineProperties(e,t)}function Jn(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}const n=e.config.Page||e.exports.Page;return C(e,{Page:n}),Yn(e),Nn(e),zn(e)}function Yn(e){Mn(e)}function Mn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function qn(e,t){const n=Jn(e);let r=null,i;r=J(e,"render"),i="render";{const l=J(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=Kn(e);if(o(l),e._pageConfigs.length>0)m(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const u=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let c;u.length===0?c="No file `*.page.client.*` found for URL "+l:c="One of the following files should export a render() hook: "+u.map(f=>f.filePath).join(" "),m(!1,c)}}o(r);const s=r.hookFn;o(i);const a=await Qe(()=>s(n),r,e);m(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function Kn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Me();Le();Xn();async function Xn(){var t,n;const e=await xn();await qn(e),$n(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
