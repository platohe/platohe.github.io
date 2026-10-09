var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'dei_heatmap',\r
  title: 'D E I_ Heatmap',\r
  desc: 'D E I_ Heatmap — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DEI_Heatmap',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","d-e-i_-heatmap"],\r
}\r
\r
export default function DEI_Heatmap({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {"categories":["Engineering","Sales","Marketing","HR","Finance"],"dimensions":["Women %","Minorities %","Leadership %"],"values":[[42,28,35],[38,55,40],[45,35,30],[55,48,50],[40,32,45]]}\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const d = (customData && Array.isArray(customData.categories) && Array.isArray(customData.dimensions) && Array.isArray(customData.values)) ? customData : DEFAULT_DATA\r
    const { categories, dimensions, values } = d\r
    const nRows = categories.length\r
    const nCols = dimensions.length\r
\r
    const cellW = IW / (nCols + 1)\r
    const cellH = (IH - 20) / nRows\r
    const offsetX = cellW * 0.5\r
    const offsetY = M.top\r
\r
    const allVals = values.flat()\r
    const minVal = d3.min(allVals) || 0\r
    const maxVal = d3.max(allVals) || 100\r
    const colorScale = d3.scaleSequential(d3.interpolateRdYlGn).domain([maxVal, minVal])\r
\r
    values.forEach((row, i) => {\r
      row.forEach((val, j) => {\r
        svg.append('rect').attr('x', offsetX + j * cellW).attr('y', offsetY + i * cellH)\r
          .attr('width', cellW - 2).attr('height', cellH - 2)\r
          .attr('fill', colorScale(val)).attr('rx', 3)\r
\r
        svg.append('text').attr('x', offsetX + j * cellW + cellW / 2).attr('y', offsetY + i * cellH + cellH / 2 + 4)\r
          .attr('text-anchor', 'middle').attr('fill', val > 50 ? '#fff' : 'var(--text-primary)')\r
          .attr('font-size', '12px').attr('font-weight', 'bold').text(val + '%')\r
      })\r
    })\r
\r
    // Labels\r
    dimensions.forEach((dim, i) => {\r
      svg.append('text').attr('x', offsetX + i * cellW + cellW / 2).attr('y', offsetY - 6)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(dim)\r
    })\r
    categories.forEach((cat, i) => {\r
      svg.append('text').attr('x', offsetX - 6).attr('y', offsetY + i * cellH + cellH / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(cat)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 18})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('DEI Heatmap by Department')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};