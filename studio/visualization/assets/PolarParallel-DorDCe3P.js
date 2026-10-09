var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'polar-parallel',\r
  title: 'Polar Parallel',\r
  desc: 'Polar Parallel — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PolarParallel',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","polar-parallel"],\r
}\r
\r
export default function PolarParallel({ data: customData }) {\r
  const ref=useRef(null)\r
  useEffect(()=>{\r
    const svg=d3.select(ref.current); svg.selectAll('*').remove()\r
    const gen = () => [{"A":59.099,"B":45.346,"C":81.722,"D":65.276,"E":20.733},{"A":52.393,"B":29.591,"C":61.227,"D":82.893,"E":47.509},{"A":27.493,"B":84.385,"C":72.116,"D":32.63,"E":22.753},{"A":50.066,"B":66.795,"C":59.956,"D":5.346,"E":47.37},{"A":80.36,"B":9.609,"C":58.309,"D":7.838,"E":29.026},{"A":10.56,"B":21.712,"C":75.519,"D":52.73,"E":7.441},{"A":20.57,"B":80.842,"C":48.897,"D":77.812,"E":33.752},{"A":45.491,"B":8.37,"C":9.625,"D":55.094,"E":58.706},{"A":27.066,"B":63.112,"C":23.856,"D":32.327,"E":71.476},{"A":82.284,"B":50.72,"C":23.377,"D":30.579,"E":31.369},{"A":11.723,"B":64.387,"C":66.269,"D":67.378,"E":88.506},{"A":12.917,"B":89.936,"C":43.802,"D":89.807,"E":17.357},{"A":14.985,"B":6.426,"C":37.44,"D":48.355,"E":60.073},{"A":85.96,"B":11.982,"C":69.764,"D":89.138,"E":30.043},{"A":68.593,"B":21.166,"C":51.828,"D":78.97,"E":15.853},{"A":94.607,"B":55.652,"C":87.451,"D":44.059,"E":57.061},{"A":35.327,"B":58.662,"C":34.066,"D":70.647,"E":31.569},{"A":45.479,"B":80.881,"C":67.556,"D":94.461,"E":85.118},{"A":43.87,"B":54.069,"C":31.634,"D":14.079,"E":67.705},{"A":33.198,"B":75.735,"C":86.43,"D":13.428,"E":47.785},{"A":78.976,"B":16.698,"C":92.547,"D":21.056,"E":68.849},{"A":67.972,"B":25.086,"C":42.158,"D":19.709,"E":63.92},{"A":35.234,"B":23.626,"C":61.601,"D":84.819,"E":34.374},{"A":76.318,"B":40.365,"C":16.825,"D":82.733,"E":38.274}]\r
    const data=Array.isArray(customData)&&customData.length&&customData[0].A!=null?customData:gen()\r
    // Derive dimensions from data keys\r
    const dims=Object.keys(data[0]).sort()\r
    const cx=200, cy=148, R=82\r
    const angle=d3.scalePoint().domain(dims).range([0,Math.PI*2])\r
    // Derive radius domain from data\r
    const allVals=data.flatMap(d=>dims.map(k=>d[k]))\r
    const r=d3.scaleLinear().domain([0,d3.max(allVals)]).range([0,R])\r
    const g=svg.append('g')\r
    dims.forEach(d=>{\r
      const a=angle(d)??0\r
      g.append('line').attr('x1',cx).attr('y1',cy).attr('x2',cx+Math.sin(a)*R).attr('y2',cy-Math.cos(a)*R).attr('stroke','var(--border)').attr('opacity',0.48)\r
      g.append('text').attr('x',cx+Math.sin(a)*(R+10)).attr('y',cy-Math.cos(a)*(R+10)+3).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','7px').attr('font-weight',700).text(d)\r
    })\r
    ;[0.25,0.5,0.75,1].forEach(p=> g.append('circle').attr('cx',cx).attr('cy',cy).attr('r',r(d3.max(allVals)*p)).attr('fill','none').attr('stroke','var(--border)').attr('stroke-dasharray','2,2').attr('opacity',0.32))\r
    data.forEach((d,i)=>{\r
      const pts=dims.map(k=>{ const a=angle(k)??0; const rad=r(d[k]); return [cx+Math.sin(a)*rad, cy-Math.cos(a)*rad] })\r
      pts.push(pts[0])\r
      g.append('path').attr('d',d3.line()(pts)).attr('fill','none').attr('stroke',colors[i%colors.length]).attr('stroke-width',0.9).attr('opacity',0.22)\r
    })\r
    // highlight one\r
    const hl=data[0]; const pts=dims.map(k=>{ const a=angle(k)??0; return [cx+Math.sin(a)*r(hl[k]), cy-Math.cos(a)*r(hl[k])] }); pts.push(pts[0])\r
    g.append('path').attr('d',d3.line()(pts)).attr('fill',colors[1]).attr('fill-opacity',0.16).attr('stroke',colors[1]).attr('stroke-width',1.6)\r
    svg.append('text').attr('x',200).attr('y',14).attr('text-anchor','middle').attr('fill','var(--text)').attr('font-size','11px').attr('font-weight',600).text('Polar Parallel Coords')\r
  },[customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};