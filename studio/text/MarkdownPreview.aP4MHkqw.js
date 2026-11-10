const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core.Bqum78rY.js","./vendor-editor.B6UOiSmK.js","./vendor-editor.CbyJr_c_.css","./index.CBda6-mS.js","./vendor-core.C0ct0auQ.js","./vendor-utils.D3dQyaZm.js","./index.Dw7dsJ-k.css"])))=>i.map(i=>d[i]);
import{_ as P,a as u}from"./vendor-editor.B6UOiSmK.js";import{r as E,u as R,c as D,g as A,d as O,b as t,e as I,f as z}from"./index.CBda6-mS.js";import"./vendor-core.C0ct0auQ.js";import"./vendor-utils.D3dQyaZm.js";const b=new Map,V=100;function B(a){let c=0;const e=String(a||"");for(let n=0;n<e.length;n++)c=Math.imul(31,c)+e.charCodeAt(n)|0;return`${e.length}:${c}`}function K(a){return b.get(a)}function U(a,c){if(b.set(a,c),b.size>V){const e=b.keys().next().value;b.delete(e)}}function q(a,c){const e=E(a,{}),n=c.split("/").pop().replace(/\.[^.]+$/,"")||"Document",w=`
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
</html>`;return[new Blob([w],{type:"text/html;charset=utf-8"}),"text/html",`${n}.html`]}function F(a,c){const e=E(a,{}),n=c.split("/").pop().replace(/\.[^.]+$/,"")||"Document",w=`
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
</html>`;return[new Blob([w],{type:"text/html;charset=utf-8"}),"text/html",`${n}.pdf`]}async function X(a,c){try{const{Document:e}=await P(async()=>{const{Document:_}=await import("./docxExport.3pspBBVB.js");return{Document:_}},[],import.meta.url),n=c.split("/").pop().replace(/\.[^.]+$/,"")||"Document",p=E(a,{addHeadingIds:!0}).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ");return[new Blob([p],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),"application/vnd.openxmlformats-officedocument.wordprocessingml.document",`${n}.docx`]}catch{const e=E(a,{});return[new Blob([e],{type:"text/html"}),"text/html",`${c.split("/").pop().replace(/\.[^.]+$/,"")}.html`]}}const G=150;function M(){const a=I();if(a)return a.state.doc.toString();const c=z()?.getModel();return c?c.getValue():null}function Z({onClose:a}){const{workspace:c,activePath:e}=R(),{settings:n,updateSettings:w}=D(),[p,x]=u.useState(""),[_,C]=u.useState(0),[T,j]=u.useState(!1),k=u.useRef(null),g=u.useRef(!1),v=u.useMemo(()=>!!e&&A(e)==="markdown",[e]);u.useEffect(()=>{const r=m=>{m.detail?.path===e&&C(i=>i+1)};return window.addEventListener("textstudio:word-count",r),()=>window.removeEventListener("textstudio:word-count",r)},[e]),u.useEffect(()=>{if(!c||!e||!v){x("");return}let r=!1;j(!0);const m=setTimeout(()=>{const i=M();(i!==null?Promise.resolve(i):c.readFile(e)).then(async l=>{if(r)return;const s=await O(l,{katex:n.markdownPreviewKatex!==!1,mermaid:n.markdownPreviewMermaid!==!1});r||(x(s),j(!1))}).catch(()=>{r||(x('<p class="md-error">Could not read file</p>'),j(!1))})},G);return()=>{r=!0,clearTimeout(m)}},[c,e,v,_,n.markdownPreviewKatex,n.markdownPreviewMermaid]),u.useEffect(()=>{if(!n.markdownPreviewMermaid||!p)return;const r=k.current;if(!r)return;let m=!1;return(async()=>{const i=[...r.querySelectorAll("code.language-mermaid")];if(i.length===0)return;let d;try{d=(await P(async()=>{const{default:l}=await import("./mermaid.core.Bqum78rY.js").then(s=>s.bo);return{default:l}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).default,d.initialize({startOnLoad:!1,theme:document.documentElement.dataset.theme==="light"?"neutral":"dark",securityLevel:"strict"})}catch{return}for(let l=0;l<i.length;l++){if(m)return;const s=i[l],f=s.textContent||"",o=B(f),h=K(o);try{const N=h||await d.render(`md-mermaid-${l}-${o.replace(/[^a-z0-9]/gi,"")}`,f);h||U(o,N),holder.innerHTML=N,s.parentElement?.replaceWith(holder)}catch{}}})(),()=>{m=!0}},[p,n.markdownPreviewMermaid]),u.useEffect(()=>{if(!n.markdownPreviewKatex||!p)return;const r=k.current;if(!r)return;let m=!1;return(async()=>{const i=[...r.querySelectorAll("code.language-math")];if(i.length!==0)try{const d=(await P(async()=>{const{default:l}=await import("./katex.HP8lGamR.js");return{default:l}},[],import.meta.url)).default;for(let l=0;l<i.length;l++){if(m)return;const s=i[l],f=s.textContent||"";try{const o=d.renderToString(f,{throwOnError:!1});s.parentElement.innerHTML=o}catch{s.parentElement.innerHTML="(math — KaTeX not available or error)"}}}catch{}})(),()=>{m=!0}},[p,n.markdownPreviewKatex]);const S=async r=>{if(!e)return;const m=c;let i="";try{i=await m.readFile(e)}catch{i=M()||""}try{let d,l,s;if(r==="html"?[d,l,s]=q(i,e):r==="pdf"?[d,l,s]=F(i,e):r==="docx"&&([d,l,s]=X(i,e)),d){const f=URL.createObjectURL(d),o=document.createElement("a");o.href=f,o.download=s,o.click(),URL.revokeObjectURL(f),notify({type:"success",message:`Exported as ${r.toUpperCase()}`})}}catch(d){notify({type:"error",message:"Export failed: "+(d.message||d)})}};if(u.useEffect(()=>{if(!n.markdownPreviewScrollSync||!v)return;const r=k.current;if(!r)return;const m=o=>{const h=o.scrollHeight-o.clientHeight;return h>0?o.scrollTop/h:0},i=(o,h)=>{o.scrollTop=h*(o.scrollHeight-o.clientHeight)},d=o=>{const h=document.querySelector(".cm-scroller");if(h){i(h,o);return}const y=document.querySelector(".monaco-editor")?.__monacoEditor;if(y){const $=y.getLayoutInfo?.().height||0;y.setScrollTop(o*Math.max(0,y.getScrollHeight()-$))}},l=()=>{g.current||(g.current=!0,d(m(r)),setTimeout(()=>{g.current=!1},0))},s=[...document.querySelectorAll(".cm-scroller, .monaco-scrollable-element")],f=o=>{g.current||(g.current=!0,i(r,m(o.currentTarget)),setTimeout(()=>{g.current=!1},0))};return r.addEventListener("scroll",l,{passive:!0}),s.forEach(o=>o.addEventListener("scroll",f,{passive:!0})),()=>{r.removeEventListener("scroll",l),s.forEach(o=>o.removeEventListener("scroll",f))}},[v,n.markdownPreviewScrollSync,p,T]),!e)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"No file open"})})]});if(!v)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"Open a Markdown file to preview it"})})]});const L=n.markdownPreviewTheme||"auto",H=L==="auto"?document.documentElement.dataset.theme==="light"?"light":"dark":L;return t.jsxs("div",{className:`markdown-preview preview-theme-${H}`,children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsxs("span",{className:"markdown-preview-title",children:["Preview: ",e.split("/").pop()]}),t.jsxs("div",{className:"md-export-toolbar",children:[t.jsxs("button",{className:"md-export-btn",title:"Export HTML",onClick:()=>S("html"),children:[t.jsx(Icon,{name:"download",size:12})," HTML"]}),t.jsxs("button",{className:"md-export-btn",title:"Export PDF",onClick:()=>S("pdf"),children:[t.jsx(Icon,{name:"save",size:12})," PDF"]}),t.jsxs("button",{className:"md-export-btn",title:"Export DOCX",onClick:()=>S("docx"),children:[t.jsx(Icon,{name:"format-docx",size:12})," DOCX"]})]}),t.jsxs("label",{className:"md-sync-toggle",title:"Sync scrolling between editor and preview",children:[t.jsx("input",{type:"checkbox",checked:n.markdownPreviewScrollSync!==!1,onChange:r=>w({markdownPreviewScrollSync:r.target.checked})}),"Sync"]}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),T&&t.jsx("div",{className:"markdown-preview-loading",children:"Rendering…"}),t.jsx("div",{className:"markdown-body",ref:k,dangerouslySetInnerHTML:{__html:p}})]})}export{Z as default};
