var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'density-ridge-enhanced',\r
  title: 'Density Ridge Enhanced',\r
  desc: 'Density Ridge Enhanced — a analysis chart visualization',\r
  category: 'Analysis',\r
  component: 'DensityRidgeEnhanced',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["analysis","density-ridge-enhanced"],\r
}\r
\r
export default function DensityRidgeEnhanced({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const groups=['North','South','East','West']\r
    const gen = () => [{"group":"North","v":36.526},{"group":"North","v":44.724},{"group":"North","v":25.9},{"group":"North","v":34.309},{"group":"North","v":41.647},{"group":"North","v":62.743},{"group":"North","v":44.778},{"group":"North","v":26.378},{"group":"North","v":40.008},{"group":"North","v":8.651},{"group":"North","v":54.783},{"group":"North","v":60.041},{"group":"North","v":66.052},{"group":"North","v":52.607},{"group":"North","v":61.319},{"group":"North","v":60.363},{"group":"North","v":53.211},{"group":"North","v":30.762},{"group":"North","v":77.169},{"group":"North","v":37.336},{"group":"North","v":35.737},{"group":"North","v":40.985},{"group":"North","v":53.896},{"group":"North","v":51.965},{"group":"North","v":42.921},{"group":"North","v":33.333},{"group":"North","v":44.317},{"group":"North","v":51.953},{"group":"North","v":44.292},{"group":"North","v":50.691},{"group":"North","v":73.04},{"group":"North","v":30.97},{"group":"North","v":57.602},{"group":"North","v":42.848},{"group":"North","v":47.222},{"group":"North","v":52.28},{"group":"North","v":53.988},{"group":"North","v":72.673},{"group":"North","v":59.121},{"group":"North","v":34.341},{"group":"North","v":33.439},{"group":"North","v":45.673},{"group":"South","v":44.181},{"group":"South","v":59.628},{"group":"South","v":63.014},{"group":"South","v":47.073},{"group":"South","v":77.089},{"group":"South","v":58.048},{"group":"South","v":68.882},{"group":"South","v":36.195},{"group":"South","v":67.145},{"group":"South","v":63.227},{"group":"South","v":58.909},{"group":"South","v":44.255},{"group":"South","v":49.122},{"group":"South","v":66.736},{"group":"South","v":70.759},{"group":"South","v":66.731},{"group":"South","v":73.123},{"group":"South","v":57.562},{"group":"South","v":59.11},{"group":"South","v":70.13},{"group":"South","v":63.342},{"group":"South","v":49.976},{"group":"South","v":83.104},{"group":"South","v":59.408},{"group":"South","v":58.996},{"group":"South","v":79.413},{"group":"South","v":82.837},{"group":"South","v":74.644},{"group":"South","v":72.89},{"group":"South","v":58.595},{"group":"South","v":47.006},{"group":"South","v":55.812},{"group":"South","v":53.616},{"group":"South","v":59.369},{"group":"South","v":51.089},{"group":"South","v":50.829},{"group":"South","v":52.692},{"group":"South","v":53.998},{"group":"South","v":63.956},{"group":"South","v":54.337},{"group":"South","v":74.918},{"group":"South","v":79.625},{"group":"East","v":55.304},{"group":"East","v":41.429},{"group":"East","v":60.437},{"group":"East","v":44.804},{"group":"East","v":67.632},{"group":"East","v":59.319},{"group":"East","v":46.61},{"group":"East","v":34.731},{"group":"East","v":54.027},{"group":"East","v":36.198},{"group":"East","v":49.881},{"group":"East","v":55.65},{"group":"East","v":60.719},{"group":"East","v":65.462},{"group":"East","v":45.776},{"group":"East","v":60.86},{"group":"East","v":46.818},{"group":"East","v":56.315},{"group":"East","v":44.797},{"group":"East","v":62.996},{"group":"East","v":45.857},{"group":"East","v":48.97},{"group":"East","v":62.022},{"group":"East","v":36.503},{"group":"East","v":80.843},{"group":"East","v":50.345},{"group":"East","v":54.618},{"group":"East","v":48.086},{"group":"East","v":48.59},{"group":"East","v":74.772},{"group":"East","v":34.426},{"group":"East","v":49.326},{"group":"East","v":53.77},{"group":"East","v":41.13},{"group":"East","v":39.089},{"group":"East","v":37.72},{"group":"East","v":44.272},{"group":"East","v":63.05},{"group":"East","v":50.469},{"group":"East","v":39.098},{"group":"East","v":41.67},{"group":"East","v":76.016},{"group":"West","v":63.974},{"group":"West","v":61.063},{"group":"West","v":26.42},{"group":"West","v":53.238},{"group":"West","v":22.241},{"group":"West","v":35.981},{"group":"West","v":52.639},{"group":"West","v":42.002},{"group":"West","v":45.136},{"group":"West","v":46.441},{"group":"West","v":48.026},{"group":"West","v":64.329},{"group":"West","v":39.715},{"group":"West","v":36.751},{"group":"West","v":54.764},{"group":"West","v":15.6},{"group":"West","v":38.238},{"group":"West","v":34.94},{"group":"West","v":62.07},{"group":"West","v":41.617},{"group":"West","v":50.77},{"group":"West","v":40.257},{"group":"West","v":46.688},{"group":"West","v":23.697},{"group":"West","v":33.343},{"group":"West","v":32.206},{"group":"West","v":54.918},{"group":"West","v":42.222},{"group":"West","v":29.537},{"group":"West","v":49.114},{"group":"West","v":53.908},{"group":"West","v":55.251},{"group":"West","v":33.482},{"group":"West","v":48.982},{"group":"West","v":49.938},{"group":"West","v":48.013},{"group":"West","v":60.414},{"group":"West","v":39.762},{"group":"West","v":43.531},{"group":"West","v":39.951},{"group":"West","v":54.571},{"group":"West","v":36.779}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].group?customData:gen()\r
    const margin={top:28,right:14,bottom:24,left:36}\r
    const width=W-margin.left-margin.right, height=H-margin.top-margin.bottom\r
    const x=d3.scaleLinear().domain([0,100]).range([0,width])\r
    const y=d3.scalePoint().domain(groups).range([0,height]).padding(0.5)\r
    const g=svg.append('g').attr('transform',\`translate(\${margin.left},\${margin.top})\`)\r
    g.append('g').attr('transform',\`translate(0,\${height})\`).call(d3.axisBottom(x).ticks(5).tickSize(-height).tickPadding(6))\r
      .call(g2=>g2.select('.domain').remove()).call(g2=>g2.selectAll('.tick line').attr('stroke','var(--border)').attr('stroke-dasharray','2,3'))\r
      .call(g2=>g2.selectAll('text').attr('fill','var(--text-secondary)').attr('font-size','7px'))\r
    groups.forEach((gr,i)=>{\r
      const vals=data.filter(d=>d.group===gr).map(d=>d.v)\r
      const kde=d3.range(0,101,1).map(xx=>{ let s=0; vals.forEach(v=>{const d=(xx-v)/7; s+=Math.exp(-0.5*d*d)}); return {xx, d:s}})\r
      const maxD=d3.max(kde,d=>d.d)||1\r
      const h=d3.scaleLinear().domain([0,maxD]).range([0, 32])\r
      const yy=y(gr)??0\r
      const area=d3.area().x(d=>x(d.xx)).y0(yy).y1(d=>yy - h(d.d)).curve(d3.curveBasis)\r
      const gradId=\`ridgeGrad\${i}\`\r
      const grad=svg.append('defs').append('linearGradient').attr('id',gradId).attr('x1','0%').attr('y1','0%').attr('x2','0%').attr('y2','100%')\r
      grad.append('stop').attr('offset','0%').attr('stop-color',colors[i]).attr('stop-opacity',0.82)\r
      grad.append('stop').attr('offset','100%').attr('stop-color',colors[i]).attr('stop-opacity',0.08)\r
      g.append('path').datum(kde).attr('d',area).attr('fill',\`url(#\${gradId})\`).attr('stroke',colors[i]).attr('stroke-width',1)\r
      g.append('text').attr('x',-6).attr('y',yy+3).attr('text-anchor','end').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',600).text(gr)\r
    })\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Density Ridge Enhanced')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};