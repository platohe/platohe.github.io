var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, colors } from './utils'\r
export const meta = {\r
  id: 'point-figure-ohlc2',\r
  title: 'Point Figure O H L C2',\r
  desc: 'Point Figure O H L C2 — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'PointFigureOHLC2',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","point-figure-o-h-l-c2"],\r
}\r
\r
export default function PointFigureOHLC2({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const DEFAULT_DATA = [{"date":"2024-01-01","open":100,"high":105,"low":98,"close":103},{"date":"2024-01-02","open":103,"high":108,"low":102,"close":107},{"date":"2024-01-03","open":107,"high":110,"low":104,"close":106}]\r
    const data = (customData && customData[0] && customData[0].open !== undefined) ? customData : DEFAULT_DATA\r
    const parse = d3.timeParse('%Y-%m-%d')\r
    const pts = data.map(d=>({ ...d, date: parse(d.date) }))\r
    const hi = d3.max(pts,d=>d.high), lo = d3.min(pts,d=>d.low)\r
    const x = d3.scaleBand().domain(pts.map(d=>d.date)).range([M.left,W-M.right]).padding(0.3)\r
    const xc = d=>x(d.date)+x.bandwidth()/2\r
    const y = d3.scaleLinear().domain([lo*0.97,hi*1.03]).range([H-M.bottom,M.top])\r
    const g = svg.append('g')\r
\r
    const runs=[]\r
    for(let i=1;i<pts.length;i++){\r
      const d=Math.sign(pts[i].close-pts[i-1].close)\r
      if(!d) continue\r
      if(runs.length && runs[runs.length-1].dir===d) runs[runs.length-1].len++\r
      else runs.push({dir:d,len:1})\r
    }\r
    const colW=Math.min(34,(W-M.left-M.right)/Math.max(1,runs.length))\r
    const boxH=(H-M.top-M.bottom)/8\r
    runs.forEach((run,r)=>{\r
      const cx=M.left+24+r*colW\r
      const boxes=Math.min(run.len,6)\r
      for(let k=0;k<boxes;k++){\r
        const yc = run.dir>0 ? (H-M.bottom)-(k+0.5)*boxH : M.top+(k+0.5)*boxH\r
        if(run.dir>0){\r
          g.append('path').attr('d','M'+(cx-7)+','+(yc-7)+'L'+(cx+7)+','+(yc+7)+'M'+(cx+7)+','+(yc-7)+'L'+(cx-7)+','+(yc+7)).attr('stroke',colors[0]).attr('stroke-width',2.5).attr('fill','none')\r
        } else {\r
          g.append('circle').attr('cx',cx).attr('cy',yc).attr('r',7).attr('fill','none').attr('stroke',colors[3]).attr('stroke-width',2.5)\r
        }\r
      }\r
    })\r
    g.append('text').attr('x',M.left).attr('y',M.top-6).attr('fill','var(--text-secondary)').attr('font-size','9px').text('Point & Figure (X up / O down)')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};