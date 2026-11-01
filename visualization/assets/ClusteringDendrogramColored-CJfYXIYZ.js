var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'clustering-dendrogram-colored',\r
  title: 'Clustering Dendrogram Colored',\r
  desc: 'Clustering Dendrogram Colored — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ClusteringDendrogramColored',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-hierarchy"],\r
  tags: ["bars","clustering-dendrogram-colored"],\r
}\r
\r
export default function ClusteringDendrogramColored({ data: customData }) {\r
  const ref = useRef(null)\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    void customData\r
    const g = svg.append('g')\r
    const leaves = ['A1', 'A2', 'B1', 'B2', 'B3', 'C1']\r
    const groups = [[0, 1], [2, 3, 4], [5]]\r
    const xs = leaves.map((_, i) => 55 + i * ((W - 120) / (leaves.length - 1)))\r
    const cutY = 120\r
    leaves.forEach((l, i) => {\r
      let gi = 0; groups.forEach((grp, k) => { if (grp.includes(i)) gi = k })\r
      g.append('path').attr('d', 'M' + xs[i] + ' 250 V' + cutY).attr('stroke', colors[gi % colors.length]).attr('stroke-width', 2.2).attr('fill', 'none')\r
      g.append('circle').attr('cx', xs[i]).attr('cy', 250).attr('r', 4).attr('fill', colors[gi % colors.length])\r
      g.append('text').attr('x', xs[i]).attr('y', 266).attr('text-anchor', 'middle').attr('font-size', '8px').attr('fill', 'var(--text-secondary)').text(l)\r
    })\r
    // join pairs above the cut\r
    let acc = 0\r
    groups.forEach(grp => {\r
      const gx = d3.mean(grp, i => xs[i]); const span = (xs[grp[grp.length - 1]] - xs[grp[0]]) / 2\r
      grp.forEach((i, k) => { if (k > 0) { g.append('path').attr('d', 'M' + xs[i] + ' ' + cutY + ' V' + (cutY - 14 - k * 6) + ' H' + gx).attr('stroke', colors[acc % colors.length]).attr('fill', 'none').attr('stroke-width', 1.6) } })\r
      g.append('path').attr('d', 'M' + xs[grp[0]] + ' ' + cutY + ' V' + (cutY - 14) + ' H' + gx).attr('stroke', colors[acc % colors.length]).attr('fill', 'none').attr('stroke-width', 1.6)\r
      g.append('circle').attr('cx', gx).attr('cy', cutY - 14).attr('r', 3).attr('fill', colors[acc % colors.length])\r
      acc++\r
      void span\r
    })\r
    g.append('line').attr('x1', 40).attr('x2', 370).attr('y1', cutY + 8).attr('y2', cutY + 8).attr('stroke', '#ef4444').attr('stroke-dasharray', '4,3')\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}\r
`;export{e as default};