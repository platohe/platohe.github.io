function u(o){const e=(Array.isArray(o)?o:[]).map(t=>({text:String(t&&t.text||"").trim(),start:Number(t&&t.start)||0,end:Number(t&&t.end)||0})).filter(t=>t.text);if(e.length===0)return[];const n=Math.min(...e.map(t=>t.start));return e.map(t=>{const r=Math.max(0,t.start-n);let s=t.end-n;return s<=r&&(s=r+1500),{start:r,end:s,text:t.text}})}function i(o,e){const n=Math.max(0,Math.round(o)),t=Math.floor(n/36e5),r=Math.floor(n%36e5/6e4),s=Math.floor(n%6e4/1e3),c=n%1e3,a=(d,l=2)=>String(d).padStart(l,"0");return`${a(t)}:${a(r)}:${a(s)}${e}${a(c,3)}`}function f(o){const e=u(o);return e.length===0?"":`WEBVTT

${e.map((t,r)=>`${r+1}
${i(t.start,".")} --> ${i(t.end,".")}
${t.text}
`).join(`
`)}`}function m(o){const e=u(o);return e.length===0?"":e.map((n,t)=>`${t+1}
${i(n.start,",")} --> ${i(n.end,",")}
${n.text}
`).join(`
`)}function p(o,e="presentation",n="vtt"){const t=n==="srt",r=t?m(o):f(o);if(!r)return!1;const s=new Blob([r],{type:t?"application/x-subrip":"text/vtt;charset=utf-8"}),c=URL.createObjectURL(s),a=document.createElement("a");return a.href=c,a.download=`${e||"presentation"}.${t?"srt":"vtt"}`,document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout(()=>URL.revokeObjectURL(c),2e3),!0}export{p as downloadCaptions,m as toSrt,f as toVtt};
