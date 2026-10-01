import{x as h,c as f}from"./index-CaYrJhqF.js";import"./vendor-fluent-Dsfs_HCI.js";import"./vendor-xlsx-B8aIVL0w.js";import"./vendor-i18n-CxP7tkQA.js";function w(n,l="Workbook"){let t=`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>${c(l)}</title>
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
`;for(const a of n){t+=`<div class="sheet-container">
`,t+=`  <div class="sheet-title">${c(a.name)}</div>
`,t+=`  <table>
`,t+=`    <tr>
`,t+=`      <th class="row-header"></th>
`;for(let e=0;e<26;e++)t+=`      <th class="col-header">${h(e)}</th>
`;t+=`    </tr>
`;for(let e=0;e<100;e++){t+=`    <tr>
`,t+=`      <th class="row-header">${e+1}</th>
`;for(let o=0;o<26;o++){const s=f(e,o),r=a.cells[s],i=(r==null?void 0:r.displayValue)??(r==null?void 0:r.value)??"",d=(r==null?void 0:r.format)||"general";t+=`      <td ${(typeof i=="number"||d==="currency"||d==="percent"?"number":"left")==="number"?'class="number"':""}>${c(String(i))}</td>
`}t+=`    </tr>
`}t+=`  </table>
`,t+=`</div>
`}t+=`</body>
</html>`,g(`${l}.html`,t,"text/html")}function c(n){return n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function g(n,l,t){const a=new Blob([l],{type:t}),e=URL.createObjectURL(a),o=document.createElement("a");o.href=e,o.download=n,document.body.appendChild(o),o.click(),document.body.removeChild(o),URL.revokeObjectURL(e)}export{w as exportToHtml};
