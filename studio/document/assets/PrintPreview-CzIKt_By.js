import{r as c,j as e,M as _,D as H,P,m as z}from"./index-DISOiR9H.js";const A=z({overlay:{position:"fixed",inset:0,background:"rgba(0,0,0,0.5)",zIndex:2e3,display:"flex",alignItems:"center",justifyContent:"center"},previewWindow:{width:"min(1100px, 96vw)",height:"min(92vh, 96vh)",background:"var(--bg-surface)",borderRadius:"var(--radius-xl)",boxShadow:"var(--shadow-xl)",overflow:"hidden",display:"flex",flexDirection:"column"},header:{padding:"12px 20px",borderBottom:"1px solid var(--border-color)",display:"flex",justifyContent:"space-between",alignItems:"center",background:"var(--bg-elevated)",flexWrap:"wrap",gap:"12px"},title:{fontWeight:600,fontSize:"14px",color:"var(--text-primary)"},actions:{display:"flex",gap:"8px",alignItems:"center"},btn:{padding:"6px 14px",borderRadius:"var(--radius-sm)",border:"none",fontSize:"12px",fontWeight:600,cursor:"pointer",background:"var(--brand-gradient)",color:"white",":hover":{opacity:.9}},btnSecondary:{padding:"6px 14px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",background:"transparent",fontSize:"12px",cursor:"pointer",color:"var(--text-secondary)",":hover":{background:"var(--bg-hover)"}},settingsBtn:{padding:"6px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",background:"transparent",cursor:"pointer",color:"var(--text-secondary)",display:"flex",alignItems:"center",justifyContent:"center",":hover":{background:"var(--bg-hover)"}},contentArea:{flex:1,overflow:"auto",padding:"24px",background:"var(--bg-app)"},page:{width:"100%",maxWidth:"816px",minHeight:"1056px",margin:"0 auto 24px",padding:"96px 72px",boxShadow:"0 4px 24px rgba(0,0,0,0.12)",border:"1px solid var(--border-color)",background:"white",fontFamily:"'Calibri', 'Aptos', sans-serif",fontSize:"11pt",lineHeight:"1.5",color:"#222",position:"relative",boxSizing:"border-box"},pageHeader:{position:"absolute",top:"24px",left:"72px",right:"72px",height:"48px",borderBottom:"1px dashed transparent",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"9pt",color:"var(--text-tertiary)",pointerEvents:"none"},pageFooter:{position:"absolute",bottom:"24px",left:"72px",right:"72px",height:"48px",borderTop:"1px dashed transparent",display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"9pt",color:"var(--text-tertiary)",pointerEvents:"none"},settingsPanel:{position:"absolute",top:"56px",right:"16px",width:"280px",background:"var(--bg-surface)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-md)",boxShadow:"var(--shadow-lg)",padding:"16px",zIndex:100},settingRow:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"8px 0",borderBottom:"1px solid var(--border-color)"},settingLabel:{fontSize:"12px",color:"var(--text-secondary)"},select:{padding:"4px 8px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border-color)",background:"var(--bg-surface)",color:"var(--text-primary)",fontSize:"12px",fontFamily:"var(--font-sans)"},checkboxRow:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 0",fontSize:"12px",color:"var(--text-primary)"}}),$=`
@font-face {
  font-family: 'Noto Sans';
  src: url('/fonts/NotoSans-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Noto Sans';
  src: url('/fonts/NotoSans-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Noto Sans';
  src: url('/fonts/NotoSans-Italic.ttf') format('truetype');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
`;function F({isOpen:k,onClose:v,contentHtml:m,title:N="Document",pageCount:g=1,onPrint:f,paperSize:d="a4",orientation:p="portrait",margins:x="1in",sections:s=[],pages:h}){if(!k)return null;const r=A(),[y,S]=c.useState(!1),[b,C]=c.useState(!0),[u,R]=c.useState(!0),l=c.useMemo(()=>{let t=794,o=1123;d==="letter"?(t=816,o=1056):d==="legal"&&(t=816,o=1344),p==="landscape"&&([t,o]=[o,t]);const a={"0.5in":48,"0.75in":72,"1in":96,"1.5in":144,"2in":192}[x]||96;return{width:t,height:o,margin:a}},[d,p,x]),I=c.useMemo(()=>{if(h&&h.length>0)return h.map((o,n)=>{var a;return{pageNum:n+1,total:o.totalPages||h.length,html:o.contentHtml,headerHtml:o.headerHtml||((a=s[0])==null?void 0:a.headerHtml)||"",footerHtml:o.footerHtml||""}});if(!s.length)return Array.from({length:Math.max(1,g||1)},(o,n)=>{var a,i;return{pageNum:n+1,total:Math.max(1,g||1),html:m,headerHtml:((a=s[0])==null?void 0:a.headerHtml)||"",footerHtml:((i=s[0])==null?void 0:i.footerHtml)||""}});const t=Math.max(1,g||1);return Array.from({length:t},(o,n)=>{var a,i,j,w;return{pageNum:n+1,total:t,html:m,headerHtml:((a=s[n%s.length])==null?void 0:a.headerHtml)||((i=s[0])==null?void 0:i.headerHtml)||"",footerHtml:((j=s[n%s.length])==null?void 0:j.footerHtml)||((w=s[0])==null?void 0:w.footerHtml)||""}})},[h,m,g,s]),L=c.useMemo(()=>{const{width:t,height:o,margin:n}=l,a=p==="landscape";return`
      @page {
        size: ${d} ${p};
        margin: ${x};
        @top-center { content: element(header); }
        @bottom-center { content: element(footer); }
      }
      
      @page :first {
        @top-center { content: element(headerFirst); }
        @bottom-center { content: element(footerFirst); }
      }
      
      @page :left {
        @top-center { content: element(headerLeft); }
        @bottom-center { content: element(footerLeft); }
      }
      
      @page :right {
        @top-center { content: element(headerRight); }
        @bottom-center { content: element(footerRight); }
      }
      
      .print-page {
        width: ${a?o:t}px;
        min-height: ${a?t:o}px;
        margin: 0 auto 24px;
        padding: ${n}px;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        border: 1px solid var(--border-color);
        background: white;
        font-family: 'Calibri', 'Aptos', sans-serif;
        font-size: 11pt;
        line-height: 1.5;
        color: #222;
        position: relative;
        box-sizing: border-box;
        page-break-after: always;
      }
      
      .print-page:last-child {
        page-break-after: auto;
      }
      
      .page-header, .page-footer {
        position: absolute;
        left: ${n}px;
        right: ${n}px;
        height: 48px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 9pt;
        color: var(--text-tertiary);
        pointer-events: none;
        font-family: 'Calibri', 'Aptos', sans-serif;
      }
      
      .page-header { top: ${n/2}px; border-bottom: 1px dashed transparent; }
      .page-footer { bottom: ${n/2}px; border-top: 1px dashed transparent; }
      
      .print-content {
        min-height: calc(100% - 96px);
      }
      
      ${b?`
        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
      `:""}
      
      ${u?$:""}
      
      /* Page-specific headers/footers for different first/odd/even */
      @media print {
        .no-print { display: none !important; }
        .print-page { page-break-after: always; }
        .print-page:last-child { page-break-after: auto; }
      }
    `},[d,p,x,b,u]),M=()=>{setTimeout(()=>{window.print(),f==null||f()},100)};return e.jsxs("div",{className:r.overlay,onClick:v,children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:L}}),e.jsxs("div",{className:r.previewWindow,onClick:t=>t.stopPropagation(),children:[e.jsxs("div",{className:r.header,children:[e.jsxs("span",{className:r.title,children:["Print Preview — ",N]}),e.jsxs("div",{className:r.actions,children:[e.jsx("button",{className:r.settingsBtn,onClick:()=>S(!y),title:"Print settings",children:e.jsx(_,{})}),e.jsxs("button",{className:r.btnSecondary,onClick:v,title:"Close print preview",children:[e.jsx(H,{})," Close"]}),e.jsxs("button",{className:r.btn,onClick:M,title:"Print document",children:[e.jsx(P,{})," Print"]})]})]}),y&&e.jsxs("div",{className:r.settingsPanel,children:[e.jsx("div",{style:{fontWeight:600,marginBottom:"12px",color:"var(--text-primary)"},children:"Print Settings"}),e.jsxs("div",{className:r.settingRow,children:[e.jsx("span",{className:r.settingLabel,children:"Paper Size"}),e.jsxs("select",{className:r.select,value:d,onChange:t=>{},children:[e.jsx("option",{value:"a4",children:"A4"}),e.jsx("option",{value:"letter",children:"Letter"}),e.jsx("option",{value:"legal",children:"Legal"})]})]}),e.jsxs("div",{className:r.settingRow,children:[e.jsx("span",{className:r.settingLabel,children:"Orientation"}),e.jsxs("select",{className:r.select,value:p,onChange:t=>{},children:[e.jsx("option",{value:"portrait",children:"Portrait"}),e.jsx("option",{value:"landscape",children:"Landscape"})]})]}),e.jsxs("div",{className:r.settingRow,children:[e.jsx("span",{className:r.settingLabel,children:"Margins"}),e.jsxs("select",{className:r.select,value:x,onChange:t=>{},children:[e.jsx("option",{value:"0.5in",children:"0.5 in (Narrow)"}),e.jsx("option",{value:"1in",children:"1 in (Normal)"}),e.jsx("option",{value:"1.5in",children:"1.5 in (Wide)"}),e.jsx("option",{value:"2in",children:"2 in"})]})]}),e.jsxs("div",{className:r.checkboxRow,children:[e.jsx("input",{type:"checkbox",checked:b,onChange:t=>C(t.target.checked)}),e.jsx("span",{children:"Print background graphics"})]}),e.jsxs("div",{className:r.checkboxRow,children:[e.jsx("input",{type:"checkbox",checked:u,onChange:t=>R(t.target.checked)}),e.jsx("span",{children:"Embed fonts (Calibri/Aptos)"})]}),e.jsxs("div",{className:r.checkboxRow,children:[e.jsx("input",{type:"checkbox",checked:!!s.length,onChange:()=>{},disabled:!0}),e.jsx("span",{children:"Per-section headers/footers"})]})]}),e.jsx("div",{className:r.contentArea,style:{background:"#f0f0f0"},children:I.map(({pageNum:t,total:o,html:n,headerHtml:a,footerHtml:i})=>e.jsxs("div",{className:"print-page",children:[e.jsx("div",{className:"page-header",style:{position:"absolute",top:l.margin/2,left:l.margin,right:l.margin,borderBottom:a?"1px solid var(--border-color)":"1px dashed transparent",height:a?"48px":"0",overflow:"hidden"},children:a&&e.jsx("span",{dangerouslySetInnerHTML:{__html:a}})}),e.jsx("div",{className:"print-content",children:e.jsx("div",{dangerouslySetInnerHTML:{__html:n},style:{width:"100%",height:"100%",color:"inherit"}})}),e.jsxs("div",{className:"page-footer",style:{position:"absolute",bottom:l.margin/2,left:l.margin,right:l.margin,borderTop:i?"1px solid var(--border-color)":"1px dashed transparent",height:i?"48px":"0",overflow:"hidden"},children:[i&&e.jsx("span",{dangerouslySetInnerHTML:{__html:i}}),!i&&e.jsxs("span",{style:{textAlign:"center",width:"100%"},children:["Page ",t," of ",o]})]})]},t))})]})]})}export{F as PrintPreview};
