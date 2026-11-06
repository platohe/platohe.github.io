const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./mermaid.core.BJ2ARnaz.js","./vendor-editor.CdwoYBk3.js","./vendor-editor.BsDkeFqO.css","./index.yTQhvGjf.js","./vendor-core.B6A0zECZ.js","./vendor-utils.Ca2-kcBB.js","./index.BamtkKb1.css"])))=>i.map(i=>d[i]);
import{_ as P,r as f}from"./vendor-editor.CdwoYBk3.js";import{r as _,u as D,b as A,g as O,c as I,j as t,d as z,e as V}from"./index.yTQhvGjf.js";import"./vendor-core.B6A0zECZ.js";import"./vendor-utils.Ca2-kcBB.js";const k=new Map,B=100;function K(a){let l=0;const e=String(a||"");for(let n=0;n<e.length;n++)l=Math.imul(31,l)+e.charCodeAt(n)|0;return`${e.length}:${l}`}function U(a){return k.get(a)}function q(a,l){if(k.set(a,l),k.size>B){const e=k.keys().next().value;k.delete(e)}}function F(a,l){const e=_(a,{}),n=l.split("/").pop().replace(/\.[^.]+$/,"")||"Document",g=`
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
</html>`;return[new Blob([g],{type:"text/html;charset=utf-8"}),"text/html",`${n}.html`]}function X(a,l){const e=_(a,{}),n=l.split("/").pop().replace(/\.[^.]+$/,"")||"Document",g=`
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
</html>`;return[new Blob([g],{type:"text/html;charset=utf-8"}),"text/html",`${n}.pdf`]}async function G(a,l){try{const{Document:e}=await P(async()=>{const{Document:j}=await import("./docxExport.BmeogDUL.js");return{Document:j}},[],import.meta.url),n=l.split("/").pop().replace(/\.[^.]+$/,"")||"Document",h=_(a,{addHeadingIds:!0}).replace(/<[^>]+>/g,"").replace(/&nbsp;/g," ");return[new Blob([h],{type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}),"application/vnd.openxmlformats-officedocument.wordprocessingml.document",`${n}.docx`]}catch{const e=_(a,{});return[new Blob([e],{type:"text/html"}),"text/html",`${l.split("/").pop().replace(/\.[^.]+$/,"")}.html`]}}const W=150;function C(){var e;const a=z();if(a)return a.state.doc.toString();const l=(e=V())==null?void 0:e.getModel();return l?l.getValue():null}function ee({onClose:a}){const{workspace:l,activePath:e}=D(),{settings:n,updateSettings:g}=A(),[h,y]=f.useState(""),[j,H]=f.useState(0),[T,S]=f.useState(!1),E=f.useRef(null),v=f.useRef(!1),x=f.useMemo(()=>!!e&&O(e)==="markdown",[e]);f.useEffect(()=>{const r=m=>{var i;((i=m.detail)==null?void 0:i.path)===e&&H(s=>s+1)};return window.addEventListener("textstudio:word-count",r),()=>window.removeEventListener("textstudio:word-count",r)},[e]),f.useEffect(()=>{if(!l||!e||!x){y("");return}let r=!1;S(!0);const m=setTimeout(()=>{const i=C();(i!==null?Promise.resolve(i):l.readFile(e)).then(async d=>{if(r)return;const c=await I(d,{katex:n.markdownPreviewKatex!==!1,mermaid:n.markdownPreviewMermaid!==!1});r||(y(c),S(!1))}).catch(()=>{r||(y('<p class="md-error">Could not read file</p>'),S(!1))})},W);return()=>{r=!0,clearTimeout(m)}},[l,e,x,j,n.markdownPreviewKatex,n.markdownPreviewMermaid]),f.useEffect(()=>{if(!n.markdownPreviewMermaid||!h)return;const r=E.current;if(!r)return;let m=!1;return(async()=>{var d;const i=[...r.querySelectorAll("code.language-mermaid")];if(i.length===0)return;let s;try{s=(await P(async()=>{const{default:c}=await import("./mermaid.core.BJ2ARnaz.js").then(u=>u.bo);return{default:c}},__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url)).default,s.initialize({startOnLoad:!1,theme:document.documentElement.dataset.theme==="light"?"neutral":"dark",securityLevel:"strict"})}catch{return}for(let c=0;c<i.length;c++){if(m)return;const u=i[c],o=u.textContent||"",p=K(o),b=U(p);try{const w=b||await s.render(`md-mermaid-${c}-${p.replace(/[^a-z0-9]/gi,"")}`,o);b||q(p,w),holder.innerHTML=w,(d=u.parentElement)==null||d.replaceWith(holder)}catch{}}})(),()=>{m=!0}},[h,n.markdownPreviewMermaid]),f.useEffect(()=>{if(!n.markdownPreviewKatex||!h)return;const r=E.current;if(!r)return;let m=!1;return(async()=>{const i=[...r.querySelectorAll("code.language-math")];if(i.length!==0)try{const s=(await P(async()=>{const{default:d}=await import("./katex.C5jXJg4s.js");return{default:d}},[],import.meta.url)).default;for(let d=0;d<i.length;d++){if(m)return;const c=i[d],u=c.textContent||"";try{const o=s.renderToString(u,{throwOnError:!1});c.parentElement.innerHTML=o}catch{c.parentElement.innerHTML="(math — KaTeX not available or error)"}}}catch{}})(),()=>{m=!0}},[h,n.markdownPreviewKatex]);const N=async r=>{if(!e)return;const m=l;let i="";try{i=await m.readFile(e)}catch{i=C()||""}try{let s,d,c;if(r==="html"?[s,d,c]=F(i,e):r==="pdf"?[s,d,c]=X(i,e):r==="docx"&&([s,d,c]=G(i,e)),s){const u=URL.createObjectURL(s),o=document.createElement("a");o.href=u,o.download=c,o.click(),URL.revokeObjectURL(u),notify({type:"success",message:`Exported as ${r.toUpperCase()}`})}}catch(s){notify({type:"error",message:"Export failed: "+(s.message||s)})}};if(f.useEffect(()=>{if(!n.markdownPreviewScrollSync||!x)return;const r=E.current;if(!r)return;const m=o=>{const p=o.scrollHeight-o.clientHeight;return p>0?o.scrollTop/p:0},i=(o,p)=>{o.scrollTop=p*(o.scrollHeight-o.clientHeight)},s=o=>{var M;const p=document.querySelector(".cm-scroller");if(p){i(p,o);return}const b=document.querySelector(".monaco-editor"),w=b==null?void 0:b.__monacoEditor;if(w){const R=((M=w.getLayoutInfo)==null?void 0:M.call(w).height)||0;w.setScrollTop(o*Math.max(0,w.getScrollHeight()-R))}},d=()=>{v.current||(v.current=!0,s(m(r)),setTimeout(()=>{v.current=!1},0))},c=[...document.querySelectorAll(".cm-scroller, .monaco-scrollable-element")],u=o=>{v.current||(v.current=!0,i(r,m(o.currentTarget)),setTimeout(()=>{v.current=!1},0))};return r.addEventListener("scroll",d,{passive:!0}),c.forEach(o=>o.addEventListener("scroll",u,{passive:!0})),()=>{r.removeEventListener("scroll",d),c.forEach(o=>o.removeEventListener("scroll",u))}},[x,n.markdownPreviewScrollSync,h,T]),!e)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"No file open"})})]});if(!x)return t.jsxs("div",{className:"markdown-preview",children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsx("span",{className:"markdown-preview-title",children:"Preview"}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),t.jsx("div",{className:"markdown-body",children:t.jsx("p",{className:"md-hint",children:"Open a Markdown file to preview it"})})]});const L=n.markdownPreviewTheme||"auto",$=L==="auto"?document.documentElement.dataset.theme==="light"?"light":"dark":L;return t.jsxs("div",{className:`markdown-preview preview-theme-${$}`,children:[t.jsxs("div",{className:"markdown-preview-header",children:[t.jsxs("span",{className:"markdown-preview-title",children:["Preview: ",e.split("/").pop()]}),t.jsxs("div",{className:"md-export-toolbar",children:[t.jsxs("button",{className:"md-export-btn",title:"Export HTML",onClick:()=>N("html"),children:[t.jsx(Icon,{name:"download",size:12})," HTML"]}),t.jsxs("button",{className:"md-export-btn",title:"Export PDF",onClick:()=>N("pdf"),children:[t.jsx(Icon,{name:"save",size:12})," PDF"]}),t.jsxs("button",{className:"md-export-btn",title:"Export DOCX",onClick:()=>N("docx"),children:[t.jsx(Icon,{name:"format-docx",size:12})," DOCX"]})]}),t.jsxs("label",{className:"md-sync-toggle",title:"Sync scrolling between editor and preview",children:[t.jsx("input",{type:"checkbox",checked:n.markdownPreviewScrollSync!==!1,onChange:r=>g({markdownPreviewScrollSync:r.target.checked})}),"Sync"]}),a&&t.jsx("button",{className:"markdown-preview-close",onClick:a,"aria-label":"Close preview",children:"×"})]}),T&&t.jsx("div",{className:"markdown-preview-loading",children:"Rendering…"}),t.jsx("div",{className:"markdown-body",ref:E,dangerouslySetInnerHTML:{__html:h}})]})}export{ee as default};
