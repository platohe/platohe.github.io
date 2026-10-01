var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'roc_curve_multi',\r
  title: 'R O C_ Curve_ Multi',\r
  desc: 'R O C_ Curve_ Multi — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ROC_Curve_Multi',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","r-o-c_-curve_-multi"],\r
}\r
\r
export default function ROC_Curve_Multi({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"models":[{"name":"Model A","points":[{"fpr":0.6,"tpr":0.4},{"fpr":0.6,"tpr":0.422},{"fpr":0.601,"tpr":0.443},{"fpr":0.602,"tpr":0.463},{"fpr":0.603,"tpr":0.483},{"fpr":0.604,"tpr":0.502},{"fpr":0.606,"tpr":0.52},{"fpr":0.608,"tpr":0.538},{"fpr":0.61,"tpr":0.555},{"fpr":0.612,"tpr":0.572},{"fpr":0.615,"tpr":0.588},{"fpr":0.618,"tpr":0.603},{"fpr":0.62,"tpr":0.618},{"fpr":0.624,"tpr":0.632},{"fpr":0.627,"tpr":0.646},{"fpr":0.63,"tpr":0.66},{"fpr":0.634,"tpr":0.673},{"fpr":0.637,"tpr":0.685},{"fpr":0.641,"tpr":0.698},{"fpr":0.645,"tpr":0.709},{"fpr":0.649,"tpr":0.72},{"fpr":0.653,"tpr":0.731},{"fpr":0.657,"tpr":0.742},{"fpr":0.661,"tpr":0.752},{"fpr":0.665,"tpr":0.761},{"fpr":0.669,"tpr":0.771},{"fpr":0.674,"tpr":0.78},{"fpr":0.678,"tpr":0.788},{"fpr":0.682,"tpr":0.797},{"fpr":0.687,"tpr":0.805},{"fpr":0.691,"tpr":0.813},{"fpr":0.695,"tpr":0.82},{"fpr":0.7,"tpr":0.827},{"fpr":0.704,"tpr":0.834},{"fpr":0.709,"tpr":0.841},{"fpr":0.713,"tpr":0.847},{"fpr":0.717,"tpr":0.853},{"fpr":0.722,"tpr":0.859},{"fpr":0.726,"tpr":0.865},{"fpr":0.731,"tpr":0.87},{"fpr":0.735,"tpr":0.875},{"fpr":0.739,"tpr":0.881},{"fpr":0.744,"tpr":0.885},{"fpr":0.748,"tpr":0.89},{"fpr":0.752,"tpr":0.895},{"fpr":0.756,"tpr":0.899},{"fpr":0.76,"tpr":0.903},{"fpr":0.765,"tpr":0.907},{"fpr":0.769,"tpr":0.911},{"fpr":0.773,"tpr":0.914}]},{"name":"Model B","points":[{"fpr":0.5,"tpr":0.6},{"fpr":0.502,"tpr":0.612},{"fpr":0.504,"tpr":0.624},{"fpr":0.507,"tpr":0.636},{"fpr":0.509,"tpr":0.648},{"fpr":0.512,"tpr":0.659},{"fpr":0.515,"tpr":0.671},{"fpr":0.518,"tpr":0.682},{"fpr":0.521,"tpr":0.693},{"fpr":0.525,"tpr":0.704},{"fpr":0.528,"tpr":0.715},{"fpr":0.532,"tpr":0.725},{"fpr":0.535,"tpr":0.735},{"fpr":0.539,"tpr":0.745},{"fpr":0.543,"tpr":0.755},{"fpr":0.547,"tpr":0.764},{"fpr":0.55,"tpr":0.773},{"fpr":0.554,"tpr":0.782},{"fpr":0.559,"tpr":0.791},{"fpr":0.563,"tpr":0.799},{"fpr":0.567,"tpr":0.807},{"fpr":0.571,"tpr":0.815},{"fpr":0.575,"tpr":0.823},{"fpr":0.58,"tpr":0.83},{"fpr":0.584,"tpr":0.837},{"fpr":0.588,"tpr":0.844},{"fpr":0.593,"tpr":0.85},{"fpr":0.597,"tpr":0.857},{"fpr":0.602,"tpr":0.863},{"fpr":0.606,"tpr":0.869},{"fpr":0.611,"tpr":0.874},{"fpr":0.615,"tpr":0.88},{"fpr":0.62,"tpr":0.885},{"fpr":0.624,"tpr":0.89},{"fpr":0.629,"tpr":0.895},{"fpr":0.633,"tpr":0.9},{"fpr":0.638,"tpr":0.904},{"fpr":0.642,"tpr":0.908},{"fpr":0.646,"tpr":0.912},{"fpr":0.651,"tpr":0.916},{"fpr":0.655,"tpr":0.92},{"fpr":0.66,"tpr":0.924},{"fpr":0.664,"tpr":0.927},{"fpr":0.669,"tpr":0.931},{"fpr":0.673,"tpr":0.934},{"fpr":0.677,"tpr":0.937},{"fpr":0.682,"tpr":0.94},{"fpr":0.686,"tpr":0.943},{"fpr":0.69,"tpr":0.945},{"fpr":0.695,"tpr":0.948}]},{"name":"Model C","points":[{"fpr":0,"tpr":0},{"fpr":0.016,"tpr":0.03},{"fpr":0.031,"tpr":0.058},{"fpr":0.047,"tpr":0.086},{"fpr":0.062,"tpr":0.113},{"fpr":0.077,"tpr":0.139},{"fpr":0.092,"tpr":0.165},{"fpr":0.106,"tpr":0.189},{"fpr":0.12,"tpr":0.213},{"fpr":0.134,"tpr":0.237},{"fpr":0.148,"tpr":0.259},{"fpr":0.161,"tpr":0.281},{"fpr":0.175,"tpr":0.302},{"fpr":0.188,"tpr":0.323},{"fpr":0.201,"tpr":0.343},{"fpr":0.213,"tpr":0.362},{"fpr":0.226,"tpr":0.381},{"fpr":0.238,"tpr":0.4},{"fpr":0.25,"tpr":0.417},{"fpr":0.262,"tpr":0.434},{"fpr":0.274,"tpr":0.451},{"fpr":0.285,"tpr":0.467},{"fpr":0.297,"tpr":0.483},{"fpr":0.308,"tpr":0.498},{"fpr":0.319,"tpr":0.513},{"fpr":0.33,"tpr":0.528},{"fpr":0.34,"tpr":0.542},{"fpr":0.351,"tpr":0.555},{"fpr":0.361,"tpr":0.568},{"fpr":0.371,"tpr":0.581},{"fpr":0.381,"tpr":0.593},{"fpr":0.391,"tpr":0.605},{"fpr":0.401,"tpr":0.617},{"fpr":0.41,"tpr":0.628},{"fpr":0.42,"tpr":0.639},{"fpr":0.429,"tpr":0.65},{"fpr":0.438,"tpr":0.66},{"fpr":0.447,"tpr":0.67},{"fpr":0.456,"tpr":0.68},{"fpr":0.464,"tpr":0.69},{"fpr":0.473,"tpr":0.699},{"fpr":0.481,"tpr":0.708},{"fpr":0.489,"tpr":0.716},{"fpr":0.497,"tpr":0.725},{"fpr":0.505,"tpr":0.733},{"fpr":0.513,"tpr":0.741},{"fpr":0.521,"tpr":0.748},{"fpr":0.529,"tpr":0.756},{"fpr":0.536,"tpr":0.763},{"fpr":0.543,"tpr":0.77}]}]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.models) ? customData : DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain([0, 1]).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, 1]).range([IH, 0])\r
\r
    // Grid\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickPadding(0))\r
      .call(g => g.select('.domain').remove()).call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.4)).call(g => g.selectAll('text').remove()).lower()\r
\r
    // Diagonal\r
    svg.append('line').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .attr('x1', x(0)).attr('x2', x(1)).attr('y1', y(0)).attr('y2', y(1))\r
      .attr('stroke', 'var(--text-secondary)').attr('stroke-width', 1.5).attr('stroke-dasharray', '6,4')\r
\r
    // ROC curves\r
    d.models.forEach((model, i) => {\r
      const line = d3.line().x(dd => x(dd.fpr)).y(dd => y(dd.tpr)).curve(d3.curveMonotoneX)\r
      svg.append('path').datum(model.points).attr('transform', \`translate(\${M.left},\${M.top})\`)\r
        .attr('d', line).attr('fill', 'none').attr('stroke', colors[i % colors.length]).attr('stroke-width', 2.5)\r
\r
      // AUC\r
      const auc = model.points.reduce((acc, p, j) => {\r
        if (j === 0) return 0\r
        return acc + (p.fpr - model.points[j-1].fpr) * (p.tpr + model.points[j-1].tpr) / 2\r
      }, 0)\r
      const last = model.points[model.points.length - 1]\r
      svg.append('text').attr('x', M.left + x(last.fpr) + 4).attr('y', M.top + y(last.tpr) - 4)\r
        .attr('fill', colors[i % colors.length]).attr('font-size', '9px').text(model.name + ' AUC=' + auc.toFixed(2))\r
    })\r
\r
    // Axes\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
    svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '11px'))\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top + IH + 28})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('False Positive Rate')\r
    svg.append('text').attr('transform', \`translate(12,\${M.top + IH/2}) rotate(-90)\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-secondary)').attr('font-size', '11px').text('True Positive Rate')\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 10})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('ROC Curves (Multi-Model Comparison)')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};