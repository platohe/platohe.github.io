const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./markdownConverter.CjtT9rAn.js","./vendor-editor.B6UOiSmK.js","./vendor-editor.CbyJr_c_.css"])))=>i.map(i=>d[i]);
import{_ as i}from"./vendor-editor.B6UOiSmK.js";function m(t,{title:e="Document",katex:o=!1}={}){const a=o?'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css">':"";return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${s(e)}</title>
${a}
<style>
  body { font-family: Georgia, 'Times New Roman', serif; max-width: 760px; margin: 2rem auto; padding: 0 1.25rem; line-height: 1.7; color: #1f2328; }
  pre { background: #f6f8fa; padding: 1rem; border-radius: 6px; overflow-x: auto; }
  code { background: #f6f8fa; padding: 0.15em 0.35em; border-radius: 4px; font-family: 'Cascadia Code', 'Fira Code', Consolas, monospace; font-size: 0.92em; }
  pre code { padding: 0; background: transparent; }
  table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
  th, td { border: 1px solid #d0d7de; padding: 0.5rem 0.75rem; text-align: left; }
  th { background: #f6f8fa; }
  blockquote { border-left: 3px solid #d0d7de; margin-left: 0; padding-left: 1rem; color: #57606a; }
  img { max-width: 100%; }
  h1, h2 { border-bottom: 1px solid #d0d7de; padding-bottom: 0.3rem; }
  @media (prefers-color-scheme: dark) {
    body { background: #0d1117; color: #e6edf3; }
    pre, code, th { background: #161b22; }
    th, td, h1, h2 { border-color: #30363d; }
    blockquote { color: #8b949e; border-color: #30363d; }
  }
</style>
</head>
<body>
${t}
</body>
</html>
`}function s(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function f(t,e,o="text/plain;charset=utf-8"){const a=e instanceof Blob?e:new Blob([e],{type:o}),d=URL.createObjectURL(a),r=document.createElement("a");r.href=d,r.download=t,r.click(),setTimeout(()=>{try{URL.revokeObjectURL?.(d)}catch{}},1e3)}async function h(t,e="document",o={}){const{convertToHtml:a}=await i(async()=>{const{convertToHtml:n}=await import("./markdownConverter.CjtT9rAn.js").then(c=>c.m);return{convertToHtml:n}},__vite__mapDeps([0,1,2]),import.meta.url),d=await a(t,{katex:o.katex!==!1}),r=m(d,{title:o.title||e,katex:o.katex!==!1}),l=e.replace(/\.(md|markdown|mdx)$/i,"")+".html";return f(l,r,"text/html;charset=utf-8"),l}export{m as buildHtmlDocument,f as downloadFile,h as exportMarkdownToHtml};
