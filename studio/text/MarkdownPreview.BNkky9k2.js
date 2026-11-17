const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core.Tk5pCbZQ.js","./vendor-editor.B6UOiSmK.js","./vendor-editor.CbyJr_c_.css","./index.B0HvunNb.js","./vendor-core.C0ct0auQ.js","./vendor-utils.D3dQyaZm.js","./index._E74Ynzw.css"])))=>i.map(i=>d[i]);
import{_ as T,a as p}from"./vendor-editor.B6UOiSmK.js";import{r as E,u as z,c as I,g as V,d as B,b as t,I as L,e as M,f as K,h as U}from"./index.B0HvunNb.js";import"./vendor-core.C0ct0auQ.js";import"./vendor-utils.D3dQyaZm.js";const b=new Map,q=100;function F(a){let s=0;const e=String(a||"");for(let n=0;n<e.length;n++)s=Math.imul(31,s)+e.charCodeAt(n)|0;return`${e.length}:${s}`}function X(a){return b.get(a)}function G(a,s){if(b.set(a,s),b.size>q){const e=b.keys().next().value;b.delete(e)}}function W(a,s){const e=E(a,{}),n=s.split("/").pop().replace(/\.[^.]+$/,"")||"Document",w=`
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${n}</title>
    <style>
        body {font-family: ui-serif, Georgia, serif; line-height: 1.6; max-width: 800px; margin: 2rem auto; padding: 0 1rem; color: #24292e; background: #fff;}
        h1, h2, h3, h4, h5, h6 {color: #1e1b1f; margin-top: 2rem; margin-bottom: 1rem;}
        h1 {font-size: 2rem; border-bottom: 1px solid #e1e4e8; padding-bottom: .3rem;}
        code {background: #f6f8fa; border-radius: 3px; padding: 0.2em 0.4em;}
        pre {background: #f6f8fa; padding: 1rem; border-radius: 5px; overflow-x: auto;}
        table {border-collapse: collapse; width: 100%; margin: 1.5rem 0;}
        th, td {border: 1px solid #d1d5db; padding: 0.5rem; text-align: left;}
        th {background: #fafafa;}
        a {color: #056684; text-decoration: none;}
        a:hover {text-decoration: underline;}
        ul, ol {margin: 0; padding-left: 2rem;}
        li {margin-bottom: 0.5rem;}
        hr {border: none; border-top: 1px solid #e5e5e5; margin: 2rem 0;}
    </style>
</head>
<body>
    ${e}
</body>
</html>`;return[new Blob([w],{type:"text/html;charset=utf-8"}),"text/html",`${n}.html`]}function J(a,s){const e=E(a,{}),n=s.split("/").pop().replace(/\.[^.]+$/,"")||"Document",w=`
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>${n}</title>
    <style>
        @media print {
            body {font-family: ui-serif, Georgia, serif; line-height: 1.6; color: #24292e; background: #fff;}
            a {text-decoration: underline; color: #1e1b1f;}
            pre, code {background: #f6f8fa; padding: 2px 4px; border-radius: 3px;}
            table {border-collapse: collapse; width: 100%; margin: 1rem 0;}
            th, td {border: 1px solid #d1d5db; padding: 4px; font-size: 85%;}
            h1, h2, h3, h4, h5, h6 {page-break-after: avoid; color: #1e1b1f;}
            h1 {font-size: 1.8rem; margin-top: 1rem; margin-bottom: 0.5rem; border-bottom: 1px solid #e5e5e5; page-break-after: avoid;}
            ul, ol {margin: 0; padding-left: 2rem; page-break-inside: avoid;}
            li {margin-bottom: 0.5rem; page-break-inside: avoid;}
            hr {border: none; border-top: 1px solid #e5e5e5; margin: 2rem 0; page-break-after: avoid;}
            img {max-width: 100%; height: auto; page-break-after: avoid;}
        }
        body {font-family: ui-serif, Georgia, serif; line-height: 1.6; color: #24292e; background: #fff;}
    </style>
</head>
<body>
    ${e}
    <script>
        window.print()
        setTimeout(() => { window.close() }, 500)
    <\/script>
</body>
</html>`;return[new Blob([w],{type:"text/html;charset=utf-8"}),"text/html",`${n}.pdf`]}async function Q(a,s){try{const{Document:e}=await T(async()=>{const{Document:_}=await import("./docxExport.3pspBBVB.js");return{Document:_}},[],import.meta.url),n=s.split("/").pop().replace(/\.[^.]+$/,"")||"Document",u=E(a,{addHeadingIds:!0}).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ");return[new Blob([u],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),"application/vnd.openxmlformats-officedocument.wordprocessingml.document",`${n}.docx`]}catch{const e=E(a,{});return[new Blob([e],{type:"text/html"}),"text/html",`${s.split("/").pop().replace(/\.[^.]+$/,"")}.html`]}}const Y=150;function $(){const a=K();if(a)return a.state.doc.toString();const s=U()?.getModel();return s?s.getValue():null}function oe({onClose:a}){const{workspace:s,activePath:e}=z(),{settings:n,updateSettings:w}=I(),[u,x]=p.useState(""),[_,D]=p.useState(0),[C,j]=p.useState(!1),[S,R]=p.useState(!1);p.useEffect(()=>{R(!1)},[e]);const k=p.useRef(null),g=p.useRef(!1),v=p.useMemo(()=>!!e&&V(e)==="markdown",[e]);p.useEffect(()=>{const r=m=>{m.detail?.path===e&&D(i=>i+1)};return window.addEventListener("textstudio:word-count",r),()=>window.removeEventListener("textstudio:word-count",r)},[e]),p.useEffect(()=>{if(!s||!e||!v){x("");return}let r=!1;j(!0);const m=setTimeout(()=>{const i=$();(i!==null?Promise.resolve(i):s.readFile(e)).then(async l=>{if(r)return;const c=await B(l,{katex:n.markdownPreviewKatex!==!1,mermaid:n.markdownPreviewMermaid!==!1,blockRemote:!S});r||(x(c),j(!1))}).catch(()=>{r||(x('<p class="md-error">Could not read file</p>'),j(!1))})},Y);return()=>{r=!0,clearTimeout(m)}},[s,e,v,_,n.markdownPreviewKatex,n.markdownPreviewMermaid,S]),p.useEffect(()=>{if(!n.markdownPreviewMermaid||!u)return;const r=k.current;if(!r)return;let m=!1;return(async()=>{const i=[...r.querySelectorAll("code.language-mermaid")];if(i.length===0)return;let d;try{d=(await T(async()=>{const{default:l}=await import("./mermaid.core.Tk5pCbZQ.js").then(c=>c.bo);return{default:l}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).default,d.initialize({startOnLoad:!1,theme:document.documentElement.dataset.theme==="light"?"neutral":"dark",securityLevel:"strict"})}catch{return}for(let l=0;l<i.length;l++){if(m)return;const c=i[l],f=c.textContent||"",o=F(f),h=X(o);try{const P=h||await d.render(`md-mermaid-${l}-${o.replace(/[^a-z0-9]/gi,"")}`,f);h||G(o,P),holder.innerHTML=P,c.parentElement?.replaceWith(holder)}catch{}}})(),()=>{m=!0}},[u,n.markdownPreviewMermaid]),p.useEffect(()=>{if(!n.markdownPreviewKatex||!u)return;const r=k.current;if(!r)return;let m=!1;return(async()=>{const i=[...r.querySelectorAll("code.language-math")];if(i.length!==0)try{const d=(await T(async()=>{const{default:l}=await import("./katex.HP8lGamR.js");return{default:l}},[],import.meta.url)).default;for(let l=0;l<i.length;l++){if(m)return;const c=i[l],f=c.textContent||"";try{const o=d.renderToString(f,{throwOnError:!1});c.parentElement.innerHTML=o}catch{c.parentElement.innerHTML="(math — KaTeX not available or error)"}}}catch{}})(),()=>{m=!0}},[u,n.markdownPreviewKatex]);const N=async r=>{if(!e)return;const m=s;let i="";try{i=await m.readFile(e)}catch{i=$()||""}try{let d,l,c;if(r==="html"?[d,l,c]=W(i,e):r==="pdf"?[d,l,c]=J(i,e):r==="docx"&&([d,l,c]=Q(i,e)),d){const f=URL.createObjectURL(d),o=document.createElement("a");o.href=f,o.download=c,o.click(),URL.revokeObjectURL(f),notify({type:"success",message:`Exported as ${r.toUpperCase()}`})}}catch(d){notify({type:"error",message:"Export failed: "+(d.message||d)})}};if(p.useEffect(()=>{if(!n.markdownPreviewScrollSync||!v)return;const r=k.current;if(!r)return;const m=o=>{const h=o.scrollHeight-o.clientHeight;return h>0?o.scrollTop/h:0},i=(o,h)=>{o.scrollTop=h*(o.scrollHeight-o.clientHeight)},d=o=>{const h=document.querySelector(".cm-scroller");if(h){i(h,o);return}const y=document.querySelector(".monaco-editor")?.__monacoEditor;if(y){const A=y.getLayoutInfo?.().height||0;y.setScrollTop(o*Math.max(0,y.getScrollHeight()-A))}},l=()=>{g.current||(g.current=!0,d(m(r)),setTimeout(()=>{g.current=!1},0))},c=[...document.querySelectorAll(".cm-scroller, .monaco-scrollable-element")],f=o=>{g.current||(g.current=!0,i(r,m(o.currentTarget)),setTimeout(()=>{g.current=!1},0))};return r.addEventListener("scroll",l,{passive:!0}),c.forEach(o=>o.addEventListener("scroll",f,{passive:!0})),()=>{r.removeEventListener("scroll",l),c.forEach(o=>o.removeEventListener("scroll",f))}},[v,n.markdownPreviewScrollSync,u,C]),!e)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"No file open"})})]});if(!v)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"Open a Markdown file to preview it"})})]});const H=n.markdownPreviewTheme||"auto",O=H==="auto"?document.documentElement.dataset.theme==="light"?"light":"dark":H;return t.jsxs("div",{className:`markdown-preview preview-theme-${O}`,children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsxs("span",{className:"markdown-preview-title",children:["Preview: ",e.split("/").pop()]}),t.jsxs("div",{className:"md-export-toolbar",children:[t.jsxs("button",{className:"md-export-btn",title:"Export HTML",onClick:()=>N("html"),children:[t.jsx(L,{name:"download",size:12})," HTML"]}),t.jsxs("button",{className:"md-export-btn",title:"Export PDF",onClick:()=>N("pdf"),children:[t.jsx(L,{name:"save",size:12})," PDF"]}),t.jsxs("button",{className:"md-export-btn",title:"Export DOCX",onClick:()=>N("docx"),children:[t.jsx(L,{name:"format-docx",size:12})," DOCX"]})]}),t.jsxs("label",{className:"md-sync-toggle",title:"Sync scrolling between editor and preview",children:[t.jsx("input",{type:"checkbox",checked:n.markdownPreviewScrollSync!==!1,onChange:r=>w({markdownPreviewScrollSync:r.target.checked})}),"Sync"]}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),C&&t.jsx("div",{className:"markdown-preview-loading",children:"Rendering…"}),!S&&M(u)>0&&t.jsxs("div",{className:"md-remote-banner",role:"status",children:[M(u)," remote image",M(u)===1?"":"s"," blocked for privacy."," ",t.jsx("button",{className:"md-export-btn",onClick:()=>R(!0),children:"Load once"})]}),t.jsx("div",{className:"markdown-body",ref:k,dangerouslySetInnerHTML:{__html:u}})]})}export{oe as default};
