var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
// ClusteringDendrogramWard: ward linkage.\r
export const meta = {\r
  id: 'clustering-dendrogram-ward',\r
  title: 'Clustering Dendrogram Ward',\r
  desc: 'Clustering Dendrogram Ward — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ClusteringDendrogramWard',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","clustering-dendrogram-ward"],\r
}\r
\r
export default function ClusteringDendrogramWard({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const leaves = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6']\r
    // manual agglomerative merges [i, j, height]\r
    const merges = [[0,1,4],[3,4,6],[2,5,12],[6,7,20]]\r
    const leafCount=Math.max(leaves.length,1)\r
    const span= W - 110\r
    const step= leafCount>1 ? span/(leafCount-1) : 0\r
    const xs = leaves.map((_, i) => 50 + i * step)\r
    const baseY=250\r
    const active = leaves.map((l, i) => ({ id: 'L' + i, x: Number.isFinite(xs[i])?xs[i]:50, yBot: baseY }))\r
    let nodeCount = leaves.length\r
    merges.forEach(([ai, bi], mi) => {\r
      const aRaw = active[ai], bRaw = active[bi]\r
      if(!aRaw||!bRaw) return\r
      const a={ x: Number.isFinite(aRaw.x)?aRaw.x:50, yBot: Number.isFinite(aRaw.yBot)?aRaw.yBot:baseY }\r
      const b={ x: Number.isFinite(bRaw.x)?bRaw.x:50, yBot: Number.isFinite(bRaw.yBot)?bRaw.yBot:baseY }\r
      const midXRaw=(a.x + b.x)/2\r
      const midX=Number.isFinite(midXRaw)?midXRaw: a.x\r
      const topY=40 + mi*42\r
      if(!Number.isFinite(midX)||!Number.isFinite(topY)) return\r
      ;[[a, topY],[b, topY]].forEach(([nd, ty])=>{\r
        const x0=Number.isFinite(nd.x)?nd.x:midX\r
        const y0=Number.isFinite(nd.yBot)?nd.yBot:baseY\r
        const y1=Number.isFinite(ty)?ty:40\r
        const xm=Number.isFinite(midX)?midX:x0\r
        const dStr='M'+x0+' '+y0+' V'+y1+' H'+xm\r
        if(dStr.includes('NaN')||dStr.includes('undefined')) return\r
        g.append('path').attr('d', dStr)\r
          .attr('fill','none').attr('stroke','var(--border)').attr('stroke-width',1.5)\r
      })\r
      active.push({ id: 'M' + nodeCount++, x: midX, yBot: topY })\r
    })\r
    leaves.forEach((l, i) => {\r
      g.append('circle').attr('cx', xs[i]).attr('cy', 250).attr('r', 4).attr('fill', colors[i % colors.length])\r
      g.append('text').attr('x', xs[i]).attr('y', 266).attr('text-anchor', 'middle').attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(l)\r
    })\r
    \r
    g.append('text').attr('x', W / 2).attr('y', 24).attr('text-anchor', 'middle').attr('font-size', '9px').attr('fill', 'var(--text-secondary)').text('ward linkage dendrogram')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};