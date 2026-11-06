import{Q as h,c as f,N as g}from"./index-BPU3Gd_q.js";import"./vendor-fluent-BWPSxtN_.js";import"./vendor-xlsx-CvA_JfHi.js";import"./vendor-i18n-ClpGDzxP.js";function w(r,l="Workbook"){let t=`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${n(l)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Calibri, sans-serif; background: #f3f2f1; }
    .sheet-container { margin: 20px; }
    .sheet-title { font-size: 16pt; font-weight: bold; color: #107c41; margin-bottom: 8px; }
    table { border-collapse: collapse; background: white; }
    th, td { border: 1px solid #d1d1d1; padding: 4px 8px; text-align: left; font-size: 11pt; min-width: 80px; }
    th { background: #f3f2f1; font-weight: 600; color: #616161; }
    .row-header { background: #f3f2f1; font-weight: 600; color: #616161; width: 40px; text-align: center; }
    .col-header { background: #f3f2f1; font-weight: 600; color: #616161; text-align: center; }
    .number { text-align: right; }
    .currency { text-align: right; color: #107c41; }
    .percent { text-align: right; }
    tr:nth-child(even) { background: #fafafa; }
  </style>
</head>
<body>
`;for(const c of r){t+=`<div class="sheet-container">
`,t+=`  <div class="sheet-title">${n(c.name)}</div>
`,t+=`  <table>
`,t+=`    <tr>
`,t+=`      <th class="row-header"></th>
`;for(let o=0;o<26;o++)t+=`      <th class="col-header">${h(o)}</th>
`;t+=`    </tr>
`;for(let o=0;o<100;o++){t+=`    <tr>
`,t+=`      <th class="row-header">${o+1}</th>
`;for(let a=0;a<26;a++){const s=f(o,a),e=c.cells[s],i=(e==null?void 0:e.displayValue)??(e==null?void 0:e.value)??"",d=(e==null?void 0:e.format)||"general";t+=`      <td ${(typeof i=="number"||d==="currency"||d==="percent"?"number":"left")==="number"?'class="number"':""}>${n(String(i))}</td>
`}t+=`    </tr>
`}t+=`  </table>
`,t+=`</div>
`}return t+=`</body>
</html>`,g(t,"text/html",`${l}.html`)}function n(r){return r.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}export{w as exportToHtml};
