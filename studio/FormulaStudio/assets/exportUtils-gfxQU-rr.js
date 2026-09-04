import{r as h,k as l}from"./katex-BG8lPIKR.js";import{h as p}from"./utils-Bulhz3Hl.js";var T=h();function L(n){const{format:o,content:e,filename:t="formula",mode:r="source"}=n;switch(o){case"latex":s(e,`${t}.tex`,"application/x-tex");break;case"mathml":const a=e.includes("<math")&&r==="source"?b(e):e;s(a,`${t}.mml`,"application/mathml+xml");break;case"json":s(JSON.stringify({content:e,format:o,exportedAt:new Date().toISOString()},null,2),`${t}.json`,"application/json");break;case"png":r==="rendered"&&typeof document<"u"?f(e,t):w(e,t);break;case"svg":r==="rendered"&&typeof document<"u"?x(e,t):y(e,t);break;case"pdf":v(e,t);break;default:s(e,`${t}.txt`,"text/plain")}}async function f(n,o){const e=document.createElement("div");e.style.cssText=`
    position: fixed; top: -9999px; left: -9999px;
    background: #0f1218; padding: 40px; font-size: 24px;
  `,e.innerHTML=n,document.body.appendChild(e);try{const t=await p(e,{background:"#0f1218",useCORS:!0,allowTaint:!0}),r=document.createElement("canvas"),a=2;r.width=t.width*a,r.height=t.height*a;const c=r.getContext("2d");c.scale(a,a),c.drawImage(t,0,0),r.toBlob(i=>{i&&u(i,`${o}.png`)},"image/png")}finally{document.body.removeChild(e)}}async function w(n,o){let e;try{e=l.renderToString(n,{output:"html",throwOnError:!0,displayMode:!0})}catch{e=`<pre style="font-family:monospace;font-size:18px;color:#e8e9ed;">${d(n)}</pre>`}const t=document.createElement("div");t.style.cssText=`
    position: fixed; top: -9999px; left: -9999px;
    background: #0f1218; padding: 40px;
  `,t.innerHTML=e,document.body.appendChild(t);try{const r=await p(t,{background:"#0f1218",useCORS:!0,allowTaint:!0}),a=document.createElement("canvas"),c=2;a.width=r.width*c,a.height=r.height*c;const i=a.getContext("2d");i.scale(c,c),i.drawImage(r,0,0),a.toBlob(m=>{m&&u(m,`${o}.png`)},"image/png")}finally{document.body.removeChild(t)}}async function x(n,o){const e=document.createElement("div");e.style.cssText=`
    position: fixed; top: -9999px; left: -9999px;
    background: #0f1218; padding: 40px;
  `,e.innerHTML=n,document.body.appendChild(e);try{const t=await p(e,{background:"#0f1218",useCORS:!0,allowTaint:!0}),r=document.createElement("canvas"),a=2;r.width=t.width*a,r.height=t.height*a;const c=r.getContext("2d");c.scale(a,a),c.drawImage(t,0,0);const i=k(r);s(i,`${o}.svg`,"image/svg+xml")}finally{document.body.removeChild(e)}}function y(n,o){try{const e=l.renderToString(n,{output:"svg",throwOnError:!0,displayMode:!0});s(e,`${o}.svg`,"image/svg+xml")}catch{s(`<svg xmlns="http://www.w3.org/2000/svg"><text x="10" y="20" fill="#e8e9ed" font-family="monospace">${g(n)}</text></svg>`,`${o}.svg`,"image/svg+xml")}}function v(n,o){const e=window.open("","_blank");if(!e){window.print();return}const t=`
    <!DOCTYPE html>
    <html>
    <head>
      <title>${d(o)}</title>
      <style>
        body {
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
        }
        pre {
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          line-height: 1.6;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .meta {
          color: #666;
          font-size: 12px;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="meta">Exported from FormulaStudio · ${new Date().toLocaleString()}</div>
      <pre>${d(n)}</pre>
    </body>
    </html>
  `;e.document.write(t),e.document.close(),e.focus(),setTimeout(()=>{e.print()},250)}function b(n){try{return l.renderToString(n,{output:"mathml",throwOnError:!1,displayMode:!0})}catch{return`<math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mi>${g(n)}</mi></mrow></math>`}}function s(n,o,e){const t=new Blob([n],{type:e}),r=URL.createObjectURL(t),a=document.createElement("a");a.href=r,a.download=o,document.body.appendChild(a),a.click(),document.body.removeChild(a),URL.revokeObjectURL(r)}function u(n,o){const e=URL.createObjectURL(n),t=document.createElement("a");t.href=e,t.download=o,document.body.appendChild(t),t.click(),document.body.removeChild(t),URL.revokeObjectURL(e)}function k(n){const o=n.width,e=n.height;return`<svg xmlns="http://www.w3.org/2000/svg" width="${o}" height="${e}">
    <image href="${n.toDataURL("image/png")}" width="${o}" height="${e}"/>
  </svg>`}function d(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function g(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}function S(n){return navigator.clipboard.writeText(n)}function R(n){const o=encodeURIComponent(n);return`${window.location.origin}${window.location.pathname}?formula=${o}`}export{S as c,L as e,R as g,T as r};
