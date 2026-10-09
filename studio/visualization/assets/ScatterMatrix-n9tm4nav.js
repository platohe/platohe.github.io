var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'scatter-matrix',\r
  title: 'Scatter Matrix',\r
  desc: 'Scatter Matrix — a dots chart visualization',\r
  category: 'Dots',\r
  component: 'ScatterMatrix',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["dots","scatter-matrix"],\r
}\r
\r
export default function ScatterMatrix({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"x1":5.803,"x2":3.121,"x3":5.262,"x4":1.707},{"x1":4.524,"x2":3.316,"x3":2.366,"x4":1.599},{"x1":6.596,"x2":3.181,"x3":2.25,"x4":2.217},{"x1":6.237,"x2":2.768,"x3":1.986,"x4":1.302},{"x1":6.06,"x2":3.527,"x3":1.019,"x4":1.23},{"x1":6.512,"x2":2.128,"x3":3.962,"x4":0.176},{"x1":4.801,"x2":2.154,"x3":1.928,"x4":1.981},{"x1":5.591,"x2":2.068,"x3":1.865,"x4":2.122},{"x1":5.463,"x2":4.023,"x3":2.597,"x4":1.18},{"x1":4.112,"x2":2.128,"x3":3.783,"x4":1.532},{"x1":4.736,"x2":3.614,"x3":2.048,"x4":0.829},{"x1":6.216,"x2":4.147,"x3":3.54,"x4":0.59},{"x1":4.853,"x2":2.732,"x3":1.373,"x4":1.684},{"x1":6.042,"x2":3.733,"x3":5.639,"x4":0.311},{"x1":6.831,"x2":3.078,"x3":5.711,"x4":0.43},{"x1":4.333,"x2":2.04,"x3":2.802,"x4":1.256},{"x1":5.836,"x2":4.249,"x3":1.388,"x4":1.827},{"x1":6.805,"x2":2.696,"x3":4.533,"x4":0.531},{"x1":5.561,"x2":4.055,"x3":1.603,"x4":2.49},{"x1":5.688,"x2":4.29,"x3":3.17,"x4":1.488},{"x1":5.011,"x2":3.491,"x3":2.615,"x4":1.851},{"x1":4.886,"x2":3.124,"x3":5.216,"x4":1.768},{"x1":6.982,"x2":4.225,"x3":3.159,"x4":1.409},{"x1":4.888,"x2":2.252,"x3":4.484,"x4":0.852},{"x1":6.358,"x2":4.262,"x3":1.468,"x4":1.241},{"x1":6.466,"x2":2.325,"x3":5.864,"x4":0.528},{"x1":6.128,"x2":3.749,"x3":2.116,"x4":1.091},{"x1":4.49,"x2":3.637,"x3":2.68,"x4":0.597},{"x1":5.887,"x2":4.217,"x3":2.632,"x4":2.002},{"x1":5.179,"x2":2.328,"x3":5.319,"x4":0.987},{"x1":4.029,"x2":3.844,"x3":4.176,"x4":2.202},{"x1":6.724,"x2":2.522,"x3":4.02,"x4":1.274},{"x1":4.552,"x2":2.119,"x3":4.528,"x4":1.8},{"x1":4.874,"x2":2.689,"x3":2.683,"x4":0.17},{"x1":4.663,"x2":4.484,"x3":3.862,"x4":2.473},{"x1":4.492,"x2":2.427,"x3":3.805,"x4":0.802},{"x1":5.184,"x2":3.086,"x3":3.092,"x4":1.747},{"x1":5.196,"x2":2.84,"x3":5.478,"x4":0.886},{"x1":5.486,"x2":3.527,"x3":3.732,"x4":1.514},{"x1":4.706,"x2":2.813,"x3":2.494,"x4":0.869},{"x1":6.008,"x2":2.552,"x3":1.847,"x4":1.768},{"x1":4.943,"x2":2.312,"x3":2.569,"x4":0.202},{"x1":5.733,"x2":2.519,"x3":3.408,"x4":1.012},{"x1":6.136,"x2":4.282,"x3":5.058,"x4":1.154},{"x1":4.462,"x2":4.169,"x3":3.628,"x4":2.117},{"x1":6.684,"x2":3.125,"x3":1.733,"x4":1.585},{"x1":6.423,"x2":2.521,"x3":2.948,"x4":1.41},{"x1":6.953,"x2":3.23,"x3":5.297,"x4":2.124},{"x1":6.231,"x2":2.134,"x3":1.347,"x4":0.506},{"x1":5.52,"x2":3.692,"x3":4.804,"x4":2.479},{"x1":6.448,"x2":3.579,"x3":5.185,"x4":2.147},{"x1":5.798,"x2":2.878,"x3":3.235,"x4":2.208},{"x1":6.043,"x2":2.873,"x3":5.688,"x4":1.602},{"x1":4.988,"x2":4.112,"x3":1.758,"x4":0.978},{"x1":4.06,"x2":2.214,"x3":4.238,"x4":1.843},{"x1":6.868,"x2":4.199,"x3":3.331,"x4":1.798},{"x1":4.435,"x2":2.683,"x3":1.696,"x4":0.214},{"x1":4.873,"x2":3.102,"x3":3.844,"x4":1.819},{"x1":6.381,"x2":3.962,"x3":1.98,"x4":1.699},{"x1":5.553,"x2":3.109,"x3":3.345,"x4":1.202}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && typeof customData[0]?.x1 === 'number') ? customData : DEFAULT_DATA\r
    const keys = Object.keys(data[0])\r
    const n = keys.length\r
    const cellSize = Math.min(IW, IH) / n\r
    const gap = 4\r
\r
    keys.forEach((key, i) => {\r
      keys.forEach((key2, j) => {\r
        const cx = M.left + j * (cellSize + gap)\r
        const cy = M.top + i * (cellSize + gap)\r
\r
        if (i === j) {\r
          // Histogram on diagonal\r
          const vals = data.map(d => d[key])\r
          const hist = d3.histogram().domain(d3.extent(vals)).thresholds(10)(vals)\r
          const maxBin = (hist && d3.max(hist, b => b.length)) || 1\r
          const x = d3.scaleLinear().domain(d3.extent(vals)).range([0, cellSize])\r
          const y = d3.scaleLinear().domain([0, maxBin]).range([cellSize, 0])\r
\r
          if (hist) {\r
            hist.forEach(b => {\r
              svg.append('rect').attr('x', cx + x(b.x0)).attr('y', cy + y(b.length))\r
                .attr('width', Math.max(1, x(b.x1) - x(b.x0))).attr('height', cellSize - y(b.length))\r
                .attr('fill', colors[0]).attr('opacity', 0.7)\r
            })\r
          }\r
        } else {\r
          // Scatter plot\r
          const xs = d3.scaleLinear().domain(d3.extent(data, d => d[key])).range([0, cellSize])\r
          const ys = d3.scaleLinear().domain(d3.extent(data, d => d[key2])).range([cellSize, 0])\r
\r
          data.forEach(d => {\r
            svg.append('circle')\r
              .attr('cx', cx + xs(d[key]))\r
              .attr('cy', cy + ys(d[key2]))\r
              .attr('r', 2).attr('fill', colors[0]).attr('opacity', 0.4)\r
          })\r
        }\r
\r
        // Border\r
        svg.append('rect').attr('x', cx).attr('y', cy).attr('width', cellSize).attr('height', cellSize)\r
          .attr('fill', 'none').attr('stroke', 'var(--border)').attr('stroke-width', 0.5)\r
      })\r
    })\r
\r
    // Axis labels\r
    keys.forEach((key, i) => {\r
      svg.append('text').attr('x', M.left + i * (cellSize + gap) + cellSize / 2).attr('y', M.top - 4)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(key)\r
      svg.append('text').attr('x', M.left - 4).attr('y', M.top + i * (cellSize + gap) + cellSize / 2 + 4)\r
        .attr('text-anchor', 'end').attr('fill', 'var(--text-primary)').attr('font-size', '9px').text(key)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + n * (cellSize + gap) / 2},\${M.top - 16})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Scatter Plot Matrix')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};