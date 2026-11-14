const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core.DjXaGs5Q.js","./vendor-editor.DKIrOb_U.js","./vendor-editor.B8tIeeJt.css","./index.DP-8_mAF.js","./vendor-core.D7gtlf10.js","./vendor-utils.Bq5s6Lbs.js","./index.VAIgAmMC.css"])))=>i.map(i=>d[i]);
import{_ as T,r as p}from"./vendor-editor.DKIrOb_U.js";import{r as _,u as I,b as V,g as B,c as K,j as t,I as L,d as M,e as U,f as q}from"./index.DP-8_mAF.js";import"./vendor-core.D7gtlf10.js";import"./vendor-utils.Bq5s6Lbs.js";const k=new Map,F=100;function X(a){let l=0;const e=String(a||"");for(let n=0;n<e.length;n++)l=Math.imul(31,l)+e.charCodeAt(n)|0;return`${e.length}:${l}`}function G(a){return k.get(a)}function W(a,l){if(k.set(a,l),k.size>F){const e=k.keys().next().value;k.delete(e)}}function J(a,l){const e=_(a,{}),n=l.split("/").pop().replace(/\.[^.]+$/,"")||"Document",g=`
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
</html>`;return[new Blob([g],{type:"text/html;charset=utf-8"}),"text/html",`${n}.html`]}function Q(a,l){const e=_(a,{}),n=l.split("/").pop().replace(/\.[^.]+$/,"")||"Document",g=`
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
</html>`;return[new Blob([g],{type:"text/html;charset=utf-8"}),"text/html",`${n}.pdf`]}async function Y(a,l){try{const{Document:e}=await T(async()=>{const{Document:j}=await import("./docxExport.BmeogDUL.js");return{Document:j}},[],import.meta.url),n=l.split("/").pop().replace(/\.[^.]+$/,"")||"Document",u=_(a,{addHeadingIds:!0}).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ");return[new Blob([u],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),"application/vnd.openxmlformats-officedocument.wordprocessingml.document",`${n}.docx`]}catch{const e=_(a,{});return[new Blob([e],{type:"text/html"}),"text/html",`${l.split("/").pop().replace(/\.[^.]+$/,"")}.html`]}}const Z=150;function D(){var e;const a=U();if(a)return a.state.doc.toString();const l=(e=q())==null?void 0:e.getModel();return l?l.getValue():null}function ne({onClose:a}){const{workspace:l,activePath:e}=I(),{settings:n,updateSettings:g}=V(),[u,y]=p.useState(""),[j,O]=p.useState(0),[C,S]=p.useState(!1),[N,R]=p.useState(!1);p.useEffect(()=>{R(!1)},[e]);const E=p.useRef(null),v=p.useRef(!1),x=p.useMemo(()=>!!e&&B(e)==="markdown",[e]);p.useEffect(()=>{const r=m=>{var i;((i=m.detail)==null?void 0:i.path)===e&&O(c=>c+1)};return window.addEventListener("textstudio:word-count",r),()=>window.removeEventListener("textstudio:word-count",r)},[e]),p.useEffect(()=>{if(!l||!e||!x){y("");return}let r=!1;S(!0);const m=setTimeout(()=>{const i=D();(i!==null?Promise.resolve(i):l.readFile(e)).then(async d=>{if(r)return;const s=await K(d,{katex:n.markdownPreviewKatex!==!1,mermaid:n.markdownPreviewMermaid!==!1,blockRemote:!N});r||(y(s),S(!1))}).catch(()=>{r||(y('<p class="md-error">Could not read file</p>'),S(!1))})},Z);return()=>{r=!0,clearTimeout(m)}},[l,e,x,j,n.markdownPreviewKatex,n.markdownPreviewMermaid,N]),p.useEffect(()=>{if(!n.markdownPreviewMermaid||!u)return;const r=E.current;if(!r)return;let m=!1;return(async()=>{var d;const i=[...r.querySelectorAll("code.language-mermaid")];if(i.length===0)return;let c;try{c=(await T(async()=>{const{default:s}=await import("./mermaid.core.DjXaGs5Q.js").then(f=>f.bo);return{default:s}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).default,c.initialize({startOnLoad:!1,theme:document.documentElement.dataset.theme==="light"?"neutral":"dark",securityLevel:"strict"})}catch{return}for(let s=0;s<i.length;s++){if(m)return;const f=i[s],o=f.textContent||"",h=X(o),b=G(h);try{const w=b||await c.render(`md-mermaid-${s}-${h.replace(/[^a-z0-9]/gi,"")}`,o);b||W(h,w),holder.innerHTML=w,(d=f.parentElement)==null||d.replaceWith(holder)}catch{}}})(),()=>{m=!0}},[u,n.markdownPreviewMermaid]),p.useEffect(()=>{if(!n.markdownPreviewKatex||!u)return;const r=E.current;if(!r)return;let m=!1;return(async()=>{const i=[...r.querySelectorAll("code.language-math")];if(i.length!==0)try{const c=(await T(async()=>{const{default:d}=await import("./katex.C5jXJg4s.js");return{default:d}},[],import.meta.url)).default;for(let d=0;d<i.length;d++){if(m)return;const s=i[d],f=s.textContent||"";try{const o=c.renderToString(f,{throwOnError:!1});s.parentElement.innerHTML=o}catch{s.parentElement.innerHTML="(math — KaTeX not available or error)"}}}catch{}})(),()=>{m=!0}},[u,n.markdownPreviewKatex]);const P=async r=>{if(!e)return;const m=l;let i="";try{i=await m.readFile(e)}catch{i=D()||""}try{let c,d,s;if(r==="html"?[c,d,s]=J(i,e):r==="pdf"?[c,d,s]=Q(i,e):r==="docx"&&([c,d,s]=Y(i,e)),c){const f=URL.createObjectURL(c),o=document.createElement("a");o.href=f,o.download=s,o.click(),URL.revokeObjectURL(f),notify({type:"success",message:`Exported as ${r.toUpperCase()}`})}}catch(c){notify({type:"error",message:"Export failed: "+(c.message||c)})}};if(p.useEffect(()=>{if(!n.markdownPreviewScrollSync||!x)return;const r=E.current;if(!r)return;const m=o=>{const h=o.scrollHeight-o.clientHeight;return h>0?o.scrollTop/h:0},i=(o,h)=>{o.scrollTop=h*(o.scrollHeight-o.clientHeight)},c=o=>{var $;const h=document.querySelector(".cm-scroller");if(h){i(h,o);return}const b=document.querySelector(".monaco-editor"),w=b==null?void 0:b.__monacoEditor;if(w){const z=(($=w.getLayoutInfo)==null?void 0:$.call(w).height)||0;w.setScrollTop(o*Math.max(0,w.getScrollHeight()-z))}},d=()=>{v.current||(v.current=!0,c(m(r)),setTimeout(()=>{v.current=!1},0))},s=[...document.querySelectorAll(".cm-scroller, .monaco-scrollable-element")],f=o=>{v.current||(v.current=!0,i(r,m(o.currentTarget)),setTimeout(()=>{v.current=!1},0))};return r.addEventListener("scroll",d,{passive:!0}),s.forEach(o=>o.addEventListener("scroll",f,{passive:!0})),()=>{r.removeEventListener("scroll",d),s.forEach(o=>o.removeEventListener("scroll",f))}},[x,n.markdownPreviewScrollSync,u,C]),!e)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"No file open"})})]});if(!x)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"Open a Markdown file to preview it"})})]});const H=n.markdownPreviewTheme||"auto",A=H==="auto"?document.documentElement.dataset.theme==="light"?"light":"dark":H;return t.jsxs("div",{className:`markdown-preview preview-theme-${A}`,children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsxs("span",{className:"markdown-preview-title",children:["Preview: ",e.split("/").pop()]}),t.jsxs("div",{className:"md-export-toolbar",children:[t.jsxs("button",{className:"md-export-btn",title:"Export HTML",onClick:()=>P("html"),children:[t.jsx(L,{name:"download",size:12})," HTML"]}),t.jsxs("button",{className:"md-export-btn",title:"Export PDF",onClick:()=>P("pdf"),children:[t.jsx(L,{name:"save",size:12})," PDF"]}),t.jsxs("button",{className:"md-export-btn",title:"Export DOCX",onClick:()=>P("docx"),children:[t.jsx(L,{name:"format-docx",size:12})," DOCX"]})]}),t.jsxs("label",{className:"md-sync-toggle",title:"Sync scrolling between editor and preview",children:[t.jsx("input",{type:"checkbox",checked:n.markdownPreviewScrollSync!==!1,onChange:r=>g({markdownPreviewScrollSync:r.target.checked})}),"Sync"]}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),C&&t.jsx("div",{className:"markdown-preview-loading",children:"Rendering…"}),!N&&M(u)>0&&t.jsxs("div",{className:"md-remote-banner",role:"status",children:[M(u)," remote image",M(u)===1?"":"s"," blocked for privacy."," ",t.jsx("button",{className:"md-export-btn",onClick:()=>R(!0),children:"Load once"})]}),t.jsx("div",{className:"markdown-body",ref:E,dangerouslySetInnerHTML:{__html:u}})]})}export{ne as default};
