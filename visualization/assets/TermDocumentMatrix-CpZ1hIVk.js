var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'term-document-matrix',\r
  title: 'Term Document Matrix',\r
  desc: 'Term Document Matrix — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'TermDocumentMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","term-document-matrix"],\r
}\r
\r
export default function TermDocumentMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"docs":["doc1","doc2","doc3","doc4","doc5"],"terms":["algorithm","machine","learning","neural","data","model","train"],"matrix":[[9,7,13,10,3,8,4],[9,13,7,4,13,11,5],[3,8,10,9,0,7,13],[1,9,0,4,1,3,12],[8,0,3,13,7,12,5]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && customData.matrix) ? customData : DEFAULT_DATA\r
    const { docs, terms, matrix } = d\r
    const nDocs = docs.length\r
    const nTerms = terms.length\r
\r
    const cellW = IW / (nTerms + 1)\r
    const cellH = (IH - 10) / nDocs\r
    const offsetX = cellW * 0.5\r
    const offsetY = M.top\r
\r
    const maxVal = d3.max(matrix.flat()) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateBlues).domain([0, maxVal])\r
\r
    matrix.forEach((row, i) => {\r
      row.forEach((val, j) => {\r
        svg.append('rect').attr('x', offsetX + j * cellW).attr('y', offsetY + i * cellH)\r
          .attr('width', cellW - 2).attr('height', cellH - 2)\r
          .attr('fill', colorScale(val)).attr('rx', 2)\r
\r
        if (cellW > 25) {\r
          svg.append('text').attr('x', offsetX + j * cellW + cellW / 2).attr('y', offsetY + i * cellH + cellH / 2 + 4)\r
            .attr('text-anchor', 'middle').attr('fill', val > maxVal * 0.5 ? '#fff' : 'var(--text-primary)')\r
            .attr('font-size', '9px').text(val)\r
        }\r
      })\r
    })\r
\r
    // Labels\r
    terms.forEach((t, i) => {\r
      svg.append('text').attr('x', offsetX + i * cellW + cellW / 2).attr('y', offsetY - 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(t.length > 8 ? t.slice(0, 7) + '…' : t)\r
    })\r
    docs.forEach((doc, i) => {\r
      svg.append('text').attr('x', offsetX - 4).attr('y', offsetY + i * cellH + cellH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(doc)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 18})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Term-Document Matrix')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};