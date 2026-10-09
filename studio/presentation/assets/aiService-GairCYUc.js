const u="ps_ai_config";function y(){try{const t=localStorage.getItem(u);return t?JSON.parse(t):null}catch{return null}}function g(t){try{return localStorage.setItem(u,JSON.stringify(t)),!0}catch{return!1}}function f(){localStorage.removeItem(u)}async function h(t,o,e={}){var i;const{model:n="gpt-4o-mini",maxTokens:s=2e3,temperature:c=.7}=e,r=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t.apiKey}`},body:JSON.stringify({model:n,messages:o,max_tokens:s,temperature:c})});if(!r.ok){const l=await r.json().catch(()=>({}));throw new Error(((i=l==null?void 0:l.error)==null?void 0:i.message)||`OpenAI API error: ${r.status}`)}return(await r.json()).choices[0].message.content}async function d(t,o,e={}){var l;const{model:n="claude-3-haiku-20240307",maxTokens:s=2e3,temperature:c=.7}=e,r=o.map(p=>({role:p.role==="user"?"user":"assistant",content:p.content})),a=await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":t.apiKey,"anthropic-version":"2023-06-01"},body:JSON.stringify({model:n,max_tokens:s,temperature:c,messages:r})});if(!a.ok){const p=await a.json().catch(()=>({}));throw new Error(((l=p==null?void 0:p.error)==null?void 0:l.message)||`Anthropic API error: ${a.status}`)}return(await a.json()).content[0].text}async function m(t,o,e,n={}){if(!(t!=null&&t.apiKey))throw new Error("No API key configured");return o==="anthropic"?d(t,e,n):h(t,e,n)}async function S(t,o,e,n=5){const s=`You are a presentation designer. Create an outline for a presentation about "${e}".
Return valid JSON with this exact structure:
{
  "title": "Presentation Title",
  "slides": [
    {
      "title": "Slide Title",
      "layout": "title-content|section-header|two-content|blank|comparison",
      "elements": [
        {
          "type": "text",
          "content": "Text content",
          "style": {"fontSize": 32, "bold": true, "align": "center"}
        }
      ]
    }
  ]
}
Return valid JSON with this exact structure. For slides that involve data, diagrams, or math, emit real elements in the \`elements\` array:
- data intent → \`{type: 'chart', chartType: 'bar', chartData: {...}}\`
- diagram/flow intent → \`{type: 'mermaid', content: 'graph TD; A-->B;'}\`
- math intent → \`{type: 'equation', content: 'E=mc^2', rawLaTeX: 'E=mc^2'}\``,c=`Create a ${n}-slide presentation about: ${e}`,r=await m(t,o,[{role:"system",content:s},{role:"user",content:c}],{maxTokens:3e3});try{const a=r.match(/\{[\s\S]*\}/);return a?JSON.parse(a[0]):null}catch{return null}}async function w(t,o,e,n="professional"){const s=`You are a professional editor. Improve the following text to be more ${n}, concise, and impactful for a presentation slide.
Return only the improved text, no explanation.`;return(await m(t,o,[{role:"system",content:s},{role:"user",content:e}],{maxTokens:500})).trim()}async function O(t,o,e){var a;const n={title:e.title,background:e.background,elementCount:((a=e.elements)==null?void 0:a.length)||0,elementTypes:[...new Set((e.elements||[]).map(i=>i.type))],layouts:["title-content","section-header","two-content","blank","comparison"]},s=`You are a presentation design consultant. Given a slide, suggest up to 4 concrete, high-impact design improvements.
Return valid JSON:
{
  "suggestions": [
    { "type": "layout|color|spacing|font|content", "action": "Short imperative description", "why": "Why it helps" }
  ]
}
Only return JSON.`,c=JSON.stringify(n),r=await m(t,o,[{role:"system",content:s},{role:"user",content:c}],{maxTokens:800});try{const i=r.match(/\{[\s\S]*\}/);if(i)return JSON.parse(i[0]).suggestions||[]}catch{}return[]}const v=[{id:"openai",name:"OpenAI",models:["gpt-4o","gpt-4o-mini","gpt-4-turbo"],endpoint:"https://api.openai.com/v1"},{id:"anthropic",name:"Anthropic",models:["claude-3-5-sonnet-20241022","claude-3-haiku-20240307"],endpoint:"https://api.anthropic.com/v1"}];export{v as AI_PROVIDERS,m as callAI,d as callAnthropic,h as callOpenAI,f as clearAIConfig,S as generatePresentationStructure,y as getAIConfig,w as improveText,g as saveAIConfig,O as suggestSlideDesigns};
