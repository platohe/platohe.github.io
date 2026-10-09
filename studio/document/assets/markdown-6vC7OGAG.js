import{_ as g,p as k,S as $}from"./index-CuMrE5yY.js";async function w(){const t=await g(()=>import("./turndown.browser.es-kLzRgxYD.js"),[],import.meta.url);return t.default??t}async function _(t,i={}){if(!t||!t.trim())return"";const{marked:a}=await g(async()=>{const{marked:s}=await import("./marked.esm-BoD7PVZH.js");return{marked:s}},[],import.meta.url),o=await a.parse(t,{gfm:i.gfm??!0,breaks:!1,async:!0});return String(k.sanitize(o,$))}function N(t){let i=0,a=t.parentElement;for(;a;){if((a.nodeName==="UL"||a.nodeName==="OL")&&(i+=1),a.nodeName==="LI")return i;a=a.parentElement}return Math.max(1,i)}function L(t){return t.replace(/\|/g,"\\|").replace(/\r?\n/g," ").trim()}function T(t){const i=[],a=Array.from(t.querySelectorAll("tr"));for(const o of a){const s=Array.from(o.querySelectorAll("th, td"));i.push(s.map(e=>L(e.textContent||"")))}return i}const A="",I="div[data-mermaid], div[data-equation], div[data-page-break], div.page-break";function x(t){if(typeof DOMParser>"u")return t;let i;try{i=new DOMParser().parseFromString(`<body>${t}</body>`,"text/html")}catch{return t}const a=i.body.querySelectorAll(I);if(a.length===0)return t;for(const o of Array.from(a))(o.textContent||"").trim()===""&&(o.textContent=A);return i.body.innerHTML}function h(t){return(t.textContent||"").indexOf(A)!==-1}async function E(t,i={}){if(!t||!t.trim())return"";const a=await w(),o=new a({headingStyle:"atx",hr:"---",bulletListMarker:"-",codeBlockStyle:"fenced",fence:"```",emDelimiter:"_",strongDelimiter:"**"});o.addRule("taskListItem",{filter:e=>e.nodeName==="LI"&&e.hasAttribute("data-checked"),replacement:(e,n)=>{const c=n.getAttribute("data-checked")==="true",r=N(n),l=" ".repeat(2*Math.max(0,r-1)),d=e.replace(/\n+/g,`
${l}  `).replace(/^\n+/,"").replace(/\s+$/,"");return`
${l}- [${c?"x":" "}] ${d}`}}),o.addRule("compactListItem",{filter:e=>e.nodeName==="LI"&&!e.hasAttribute("data-checked"),replacement:(e,n,c)=>{const r=n.parentNode,d=((r==null?void 0:r.nodeName)??"")==="OL",b=d?Number((r==null?void 0:r.getAttribute("start"))||1):1,f=r?Array.prototype.indexOf.call(r.children,n):0,p=d?`${b+(f<0?0:f)}.`:c.bulletListMarker,y=" ".repeat(p.length+1),u=e.replace(/\n+/g,`
${y}`).replace(/^\n+/,"").replace(/\n+$/,`
`);return`
${p} ${u}`}}),o.addRule("mermaidBlock",{filter:e=>e.nodeName==="DIV"&&e.hasAttribute("data-mermaid")&&h(e),replacement:(e,n)=>{const c=n.getAttribute("data-mermaid-code")||"",r=n.getAttribute("data-mermaid-label")||"",l=r?`
<!-- ${r} -->`:"";return`

\`\`\`mermaid
${c}
\`\`\`${l}

`}}),o.addRule("equationBlock",{filter:e=>e.nodeName==="DIV"&&e.hasAttribute("data-equation")&&h(e),replacement:(e,n)=>{const c=n.getAttribute("data-equation-linear")||"",r=n.getAttribute("data-equation-kind")||"display",l=`$$${c}$$`;return r==="inline"?` ${l} `:`

${l}

`}}),o.addRule("pageBreak",{filter:e=>e.nodeName==="DIV"&&(e.hasAttribute("data-page-break")||e.classList.contains("page-break"))&&h(e),replacement:()=>`

<!-- page break -->

`}),o.addRule("footnoteRef",{filter:e=>e.nodeName==="SUP"&&e.hasAttribute("data-footnote-ref"),replacement:(e,n)=>`[^${n.getAttribute("data-footnote-ref")||""}]`}),i.tables!==!1&&o.addRule("gfmTable",{filter:e=>e.nodeName==="TABLE",replacement:(e,n)=>{const c=T(n);if(c.length===0)return"";const r=c.reduce((u,m)=>Math.max(u,m.length),0);if(r===0)return"";const l=u=>{const m=[...u];for(;m.length<r;)m.push("");return`| ${m.join(" | ")} |`},d=n.querySelector("thead th")!==null,b=d?c.slice(1):c,f=d?c[0]:new Array(r).fill(""),p=`| ${new Array(r).fill("---").join(" | ")} |`;return`

${[l(f),p,...b.map(l)].join(`
`)}

`}});const s=x(t);return o.turndown(s).replace(/\n{3,}/g,`

`).trim()}const O={markdownToHtml:_,htmlToMarkdown:E};export{O as default,E as htmlToMarkdown,_ as markdownToHtml};
