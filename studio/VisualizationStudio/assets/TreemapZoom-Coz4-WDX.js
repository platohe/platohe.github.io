var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
export const meta = {\r
  id: 'treemap-zoom',\r
  title: 'Treemap Zoom',\r
  desc: 'Treemap Zoom — a hierarchies chart visualization',\r
  category: 'Hierarchies',\r
  component: 'TreemapZoom',\r
  complexity: 'beginner',\r
  interactivity: ["zoom"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["hierarchies","treemap-zoom"],\r
}\r
\r
export default function TreemapZoom({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
    const toNum=n=>{ const x=Number(n); return Number.isFinite(x)?x:null}\r
    const rawRows=Array.isArray(customData)&&customData.length?customData:null\r
    let normRows=null\r
    if(rawRows){\r
      const mapped=rawRows.map((r,i)=>{\r
        if(r==null) return null\r
        if(typeof r==='number') return {label:String.fromCharCode(65+i), value: toNum(r)??0}\r
        if(typeof r==='object'){\r
          const label=r.label??r.name??String.fromCharCode(65+i)\r
          const v=toNum(r.value??r.v)\r
          if(v===null) return null\r
          return {label:String(label), value:v}\r
        }\r
        return null\r
      }).filter(Boolean).filter(d=>d.value>0)\r
      if(mapped.length) normRows=mapped\r
    }\r
    const data = { name: 'root', children: normRows\r
      ? normRows.map((r, i) => ({ name: String(r.label), value: r.value, color: colors[i % colors.length] }))\r
      : [\r
      { name: 'A', value: 40, color: colors[0] }, { name: 'B', value: 30, color: colors[1] },\r
      { name: 'C', value: 20, color: colors[2] }, { name: 'D', value: 10, color: colors[3] },\r
    ]}\r
    // ensure finite positive values\r
    data.children=data.children.map(d=>({ ...d, value: Number.isFinite(d.value)&&d.value>0? d.value:10 })).filter(d=>d.value>0)\r
    if(!data.children.length) data.children=[{name:'A',value:40,color:colors[0]}]\r
    const totalVal = data.children.reduce((s, d) => s + d.value, 0) || 1\r
    const rectW = Number.isFinite(W)? W/2 : 200, rectH = Number.isFinite(H)? H-60 : 240\r
    let accX = 0, accY = 0\r
    const half = Math.ceil(data.children.length / 2)\r
    const rects = data.children.map((d, i) => {\r
      const vSafe=Number.isFinite(d.value)? d.value:10\r
      if (i < half) {\r
        const wRaw = rectW * 0.9 * (vSafe / totalVal) * half + rectW * 0.1\r
        const w=Number.isFinite(wRaw)? wRaw: rectW/data.children.length\r
        const r = { x: accX, y: 0, w, h: rectH * 0.5, label: d.name, color: d.color }\r
        accX += w\r
        return r\r
      }\r
      const wRaw = rectW * 0.9 * (vSafe / totalVal) * (data.children.length - half) + rectW * 0.1\r
      const w=Number.isFinite(wRaw)? wRaw: rectW/data.children.length\r
      const r = { x: accY, y: rectH * 0.5, w, h: rectH * 0.5, label: d.name, color: d.color }\r
      accY += w\r
      return r\r
    }).filter(r=> Number.isFinite(r.x)&&Number.isFinite(r.y)&&Number.isFinite(r.w)&&Number.isFinite(r.h)&&r.w>0&&r.h>0)\r
    const g = svg.append('g')\r
    const rEls = rects.map(r =>{\r
      const xSafe=Number.isFinite(r.x)?r.x:0, ySafe=Number.isFinite(r.y)?r.y:0, wSafe=Number.isFinite(r.w)?r.w:10, hSafe=Number.isFinite(r.h)?r.h:10\r
      return g.append('rect').attr('x', xSafe).attr('y', ySafe).attr('width', wSafe).attr('height', hSafe)\r
        .attr('fill', r.color).attr('opacity', 0.8).attr('rx', 3)\r
    })\r
    rects.forEach((r, i) =>{\r
      const xC=Number.isFinite(r.x+r.w/2)? r.x+r.w/2:0\r
      const yC=Number.isFinite(r.y+r.h/2)? r.y+r.h/2:0\r
      if(!Number.isFinite(xC)||!Number.isFinite(yC)) return\r
      g.append('text').attr('x', xC).attr('y', yC)\r
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'middle')\r
        .attr('fill', 'white').attr('font-size', '16px').attr('font-weight', 700).text(r.label)\r
    })\r
    const timer = d3.timer(elapsed => {\r
      rEls.forEach((sel, i) => {\r
        const scale = 0.85 + Math.sin(elapsed * 0.002 + i * 0.5) * 0.15\r
        const d=rects[i]\r
        if(!d) return\r
        const cx = d.x + d.w / 2, cy = d.y + d.h / 2\r
        if(!Number.isFinite(cx)||!Number.isFinite(cy)||!Number.isFinite(scale)) return\r
        sel.attr('transform', \`translate(\${cx},\${cy}) scale(\${scale}) translate(\${-cx},\${-cy})\`)\r
      })\r
    })\r
    return () => timer.stop()\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};