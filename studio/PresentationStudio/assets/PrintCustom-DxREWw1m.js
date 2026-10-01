import{a as c,j as e}from"./fluent-vendor-CigXqcqB.js";function k({slides:a,title:h,onPrint:b,onClose:d}){const[l,u]=c.useState("slides"),[f,g]=c.useState(!1),x=()=>{let i="",r="";switch(l){case"handouts-2":r=".handout-row { display: flex; gap: 20px; page-break-after: always; } .slide-thumb { height: 320px; }",i=a.slice(0,2).map((o,s)=>{var n;return`
          <div class="slide-thumb" style="width: 50%;">
            <div style="height: 320px; position: relative;">
              ${(n=o.elements)==null?void 0:n.map(t=>t.type==="text"?`<div class="el-text" style="position: absolute; left: 10%; top: 10%; width: 80%;"> ${t.content||""} </div>`:"").join("")}
            </div>
          </div>`}).join("");break;case"handouts-4":r=".handout-row { display: flex; gap: 12px; page-break-after: always; } .slide-thumb { height: 160px; }",i=a.slice(0,4).map((o,s)=>{var n;return`
          <div class="slide-thumb" style="width: 25%;">
            <div style="height: 160px; position: relative;">
              ${(n=o.elements)==null?void 0:n.map(t=>t.type==="text"?`<div class="el-text" style="position: absolute; left: 10%; top: 10%; width: 80%;"> ${t.content||""} </div>`:"").join("")}
            </div>
          </div>`}).join("");break;case"notes":r=".notes-page { page-break-after: always; display: flex; gap: 20px; } .slide-thumb { height: 280px; flex: 0 0 55%; } .notes-text { flex: 1; padding: 10px; font-size: 12px; color: #333; }",i=`
          <div style="display: flex; gap: 20px;">
            <div class="slide-thumb" style="height: 280px;">
              ${a.map(o=>{var s,n;return((n=(s=o.elements)==null?void 0:s.find(t=>t.type==="image"))==null?void 0:n.content)||"Slide"}).join("")}
            </div>
            <div class="notes-text">
              ${a.map(o=>o.notes||"").join("<br><br>")}
            </div>
          </div>`;break;default:r="@page { size: landscape; margin: 0.5in; } body { font-family: Aptos, Segoe UI, sans-serif; margin: 12px; }",i=a.map((o,s)=>{var n;return`
          <div style="page-break-after: always;">
            <h2 style="font-size: 18px; margin-bottom: 8px;">Slide ${s+1}: ${o.title||"Untitled"}</h2>
            ${(n=o.elements)==null?void 0:n.map(t=>t.type==="text"?`<div style="margin: 8px 0; white-space: pre-wrap;">${t.content||""}</div>`:t.type==="image"?`<img src="${t.content}" style="max-width: 100%; height: auto;" alt="">`:"").join("")}
          </div>`}).join("");break}const m=`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${h} - ${l==="notes"?"Notes Pages":l==="handouts-2"?"2 Slides per Page":l==="handouts-4"?"4 Slides per Page":"Slides"}</title>
          <style>
            ${r}
            body { font-family: 'Aptos', 'Segoe UI', sans-serif; margin: 0; padding: 12px; }
          </style>
        </head>
        <body>${i}
          <script>window.onload = function() { window.print(); window.onafterprint = function() { window.close(); }; }<\/script>
        </body>
      </html>`,p=window.open("","_blank");p&&(p.document.write(m),p.document.close(),p.focus(),p.print()),d&&d()},y=i=>{u(i.target.value)};return e.jsx("div",{style:{position:"fixed",inset:0,backgroundColor:"rgba(0,0,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1e4},onClick:()=>d(),children:e.jsxs("div",{style:{width:500,height:460,backgroundColor:"#fff",borderRadius:"8px",overflow:"hidden",fontFamily:"Aptos, Segoe UI, sans-serif"},onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 16px",backgroundColor:"#f3f2f1",borderBottom:"1px solid #d1d1d1",fontSize:"13px",fontWeight:"600"},children:[e.jsx("span",{children:"Print Settings"}),e.jsx("button",{onClick:()=>d(),style:{background:"none",border:"none",cursor:"pointer",fontSize:16,color:"#616161"},children:"✕"})]}),e.jsxs("div",{style:{padding:16},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#616161",marginBottom:6,textTransform:"uppercase"},children:"Layout"}),e.jsxs("select",{onChange:y,style:{width:"100%",height:30,fontSize:12,padding:"0 8px",border:"1px solid #d1d1d1",borderRadius:3,marginBottom:12},children:[e.jsx("option",{value:"slides",children:"Full slides (one per page)"}),e.jsx("option",{value:"handouts-2",children:"Handouts (2 slides per page)"}),e.jsx("option",{value:"handouts-4",children:"Handouts (4 slides per page)"}),e.jsx("option",{value:"notes",children:"Notes pages"})]}),l==="notes"&&e.jsxs("div",{style:{marginBottom:12},children:[e.jsx("div",{style:{fontSize:11,fontWeight:600,color:"#616161",marginBottom:6,textTransform:"uppercase"},children:"Include slide thumbnails"}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("input",{type:"checkbox",checked:f,onChange:i=>g(i.target.checked)}),"Show slide thumbnails"]})]}),e.jsx("button",{onClick:x,style:{width:"100%",height:36,fontSize:14,border:"none",borderRadius:4,backgroundColor:"#d83b01",color:"#ffffff",cursor:"pointer",fontWeight:"600",marginTop:16},children:"Print"}),e.jsx("button",{onClick:()=>d(),style:{width:"100%",height:32,fontSize:12,border:"1px solid #d1d1d1",borderRadius:4,backgroundColor:"#fff",cursor:"pointer",marginTop:8,color:"#323130"},children:"Cancel"})]})]})})}export{k as PrintCustomization};
