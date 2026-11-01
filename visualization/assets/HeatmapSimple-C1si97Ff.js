var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
export const meta = {\r
  id: 'heatmap-simple',\r
  title: 'Heatmap Simple',\r
  desc: 'Heatmap Simple — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HeatmapSimple',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale","d3-color"],\r
  tags: ["bars","heatmap-simple"],\r
}\r
\r
export default function HeatmapSimple({ data: customData }) {\r
  const ref = useRef(null)\r
  const DEFAULT_DATA = [[50,50,50,50,50,50,50,50,50,50],[73.971,72.901,69.784,64.901,58.686,51.696,44.554,37.898,32.324,28.328],[92.074,90.194,84.725,76.153,65.246,52.976,40.441,28.759,18.975,11.962],[99.875,97.647,91.163,81.003,68.073,53.528,38.668,24.821,13.223,4.91],[95.465,93.434,87.524,78.261,66.475,53.216,39.67,27.047,16.474,8.896],[79.924,78.587,74.697,68.601,60.843,52.117,43.201,34.893,27.935,22.947],[57.056,56.741,55.824,54.386,52.557,50.499,48.397,46.438,44.797,43.621],[32.461,33.244,35.524,39.097,43.645,48.759,53.985,58.855,62.933,65.857]]\r
  useEffect(() => {\r
    const svg = d3.select(ref.current); svg.selectAll('*').remove()\r
    const data = (customData && Array.isArray(customData)) ? customData : DEFAULT_DATA\r
    const rows = data.length, cols = data[0]?.length || 0\r
    const cellW = W / cols, cellH = H / rows\r
    const maxVal = d3.max(data.flat()) || 1, minVal = d3.min(data.flat()) || 0\r
    const colorScale = d3.scaleSequential(d3.interpolateOranges).domain([minVal, maxVal])\r
    data.forEach((row, ri) => row.forEach((val, ci) => {\r
      svg.append('rect').attr('x', ci * cellW).attr('y', ri * cellH).attr('width', cellW).attr('height', cellH).attr('fill', colorScale(val)).attr('stroke', 'var(--bg)').attr('stroke-width', 0.5)\r
    }))\r
  }, [customData])\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};