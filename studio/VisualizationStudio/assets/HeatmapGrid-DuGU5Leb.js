var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'heatmap-grid',\r
  title: 'Heatmap Grid',\r
  desc: 'Heatmap Grid — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapGrid',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-grid"],\r
}\r
\r
export default function HeatmapGrid({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [[60.11,44.829,85.247,66.973,17.481,52.659,27.323,62.474],[86.547,47.232,24.992,88.206,74.574,30.7,19.725,50.073],[68.661,61.062,0.384,47.078,83.734,5.121,59.232,3.154],[26.696,6.178,18.569,78.355,53.034,2.712,17.301,84.269],[48.774,80.902,31.946,44.99,3.744,5.139,55.66,59.673],[24.517,64.569,20.951,30.363,73.862,85.871,50.8,20.419],[28.421,29.299,7.469,65.986,68.077,69.309,92.784,8.797],[94.374,43.114,94.229,13.73,11.094,1.584,36.045,48.172],[61.192,89.956,7.758,71.96,93.487,27.825,70.659,17.962],[52.032,82.189,12.059,99.564,56.28,91.612,43.399,57.845]]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (customData && Array.isArray(customData)) ? customData : DEFAULT_DATA\r
    const rows = data.length, cols = data[0]?.length || 0\r
    const cellW = W / cols, cellH = H / rows\r
    const maxVal = d3.max(data.flat()) || 1\r
    const colorScale = d3.scaleSequential(d3.interpolateViridis).domain([0, maxVal])\r
    data.forEach((row, ri) => row.forEach((val, ci) => {\r
      svg.append('rect').attr('x', ci * cellW).attr('y', ri * cellH).attr('width', cellW).attr('height', cellH)\r
        .attr('fill', colorScale(val)).attr('stroke', 'var(--bg)').attr('stroke-width', 0.5)\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};