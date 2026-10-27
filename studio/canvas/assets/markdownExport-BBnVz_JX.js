import{l as u,p as f}from"./index-DXpOxDuC.js";import{plainLabel as c}from"./exportModel-BljYxH3U.js";import"./vendor-react-BAFIsrMx.js";import"./vendor-utils-DDKLXWTC.js";import"./vendor-fluent-B9Z5wmXU.js";import"./app-data-CPttggvW.js";import"./app-stencils-PQRM_Wyq.js";const m="```";function d(n){const t=[],i=new Map(n.shapes.map(e=>[e.id,e]));for(const e of n.shapes){if(e.visible===!1)continue;const o=c(e.text);o&&t.push(`- ${o}`)}for(const e of n.connectors){const o=i.get(e.from.shapeId),l=i.get(e.to.shapeId),a=c(o?.text),r=c(l?.text);if(!a||!r)continue;const s=c(e.label);t.push(`- ${a} → ${r}${s?` (${s})`:""}`)}return t}function p(n,t=2,i={}){const e=i.includeMermaid??!0,o=i.includeOutline??!0,a=[`${"#".repeat(Math.min(6,Math.max(1,t)))} ${n.name||"Page"}`];if(o){const s=d(n);s.length>0&&a.push(s.join(`
`))}const r=n.shapes.some(s=>s.visible!==!1);return e&&r&&u(n)&&a.push(`${m}mermaid
${f(n)}
${m}`),a.join(`

`)}function x(n,t={}){const i=[`# ${n.name||"Diagram"}`];for(const e of n.pages){const o=p(e,2,t);o.split(`
`).length<=2||i.push(o)}return i.join(`

`)}function L(n){return`${(n||"diagram").trim().replace(/[\\/:*?"<>|]+/g,"-").slice(0,80)||"diagram"}.md`}export{x as diagramToMarkdown,L as markdownFilename,p as pageToMarkdown};
