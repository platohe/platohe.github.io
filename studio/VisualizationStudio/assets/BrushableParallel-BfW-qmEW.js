var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, colors } from './utils'\r
\r
const DEFAULT_DATA = [{"sepal_length":6.604,"sepal_width":3.121,"petal_length":5.689,"petal_width":1.707,"species":"setosa"},{"sepal_length":5.112,"sepal_width":3.316,"petal_length":2.503,"petal_width":1.599,"species":"setosa"},{"sepal_length":7.529,"sepal_width":3.181,"petal_length":2.375,"petal_width":2.217,"species":"setosa"},{"sepal_length":7.11,"sepal_width":2.768,"petal_length":2.085,"petal_width":1.302,"species":"setosa"},{"sepal_length":6.903,"sepal_width":3.527,"petal_length":1.021,"petal_width":1.23,"species":"setosa"},{"sepal_length":7.431,"sepal_width":2.128,"petal_length":4.258,"petal_width":0.176,"species":"setosa"},{"sepal_length":5.434,"sepal_width":2.154,"petal_length":2.021,"petal_width":1.981,"species":"setosa"},{"sepal_length":6.356,"sepal_width":2.068,"petal_length":1.952,"petal_width":2.122,"species":"setosa"},{"sepal_length":6.207,"sepal_width":4.023,"petal_length":2.757,"petal_width":1.18,"species":"setosa"},{"sepal_length":4.631,"sepal_width":2.128,"petal_length":4.061,"petal_width":1.532,"species":"setosa"},{"sepal_length":5.358,"sepal_width":3.614,"petal_length":2.152,"petal_width":0.829,"species":"setosa"},{"sepal_length":7.085,"sepal_width":4.147,"petal_length":3.794,"petal_width":0.59,"species":"setosa"},{"sepal_length":5.495,"sepal_width":2.732,"petal_length":1.411,"petal_width":1.684,"species":"setosa"},{"sepal_length":6.883,"sepal_width":3.733,"petal_length":6.103,"petal_width":0.311,"species":"setosa"},{"sepal_length":7.803,"sepal_width":3.078,"petal_length":6.183,"petal_width":0.43,"species":"setosa"},{"sepal_length":4.888,"sepal_width":2.04,"petal_length":2.982,"petal_width":1.256,"species":"setosa"},{"sepal_length":6.642,"sepal_width":4.249,"petal_length":1.427,"petal_width":1.827,"species":"setosa"},{"sepal_length":7.772,"sepal_width":2.696,"petal_length":4.886,"petal_width":0.531,"species":"setosa"},{"sepal_length":6.321,"sepal_width":4.055,"petal_length":1.663,"petal_width":2.49,"species":"setosa"},{"sepal_length":6.47,"sepal_width":4.29,"petal_length":3.387,"petal_width":1.488,"species":"setosa"},{"sepal_length":5.679,"sepal_width":3.491,"petal_length":2.776,"petal_width":1.851,"species":"versicolor"},{"sepal_length":5.533,"sepal_width":3.124,"petal_length":5.637,"petal_width":1.768,"species":"versicolor"},{"sepal_length":7.979,"sepal_width":4.225,"petal_length":3.375,"petal_width":1.409,"species":"versicolor"},{"sepal_length":5.536,"sepal_width":2.252,"petal_length":4.832,"petal_width":0.852,"species":"versicolor"},{"sepal_length":7.251,"sepal_width":4.262,"petal_length":1.515,"petal_width":1.241,"species":"versicolor"},{"sepal_length":7.377,"sepal_width":2.325,"petal_length":6.35,"petal_width":0.528,"species":"versicolor"},{"sepal_length":6.983,"sepal_width":3.749,"petal_length":2.228,"petal_width":1.091,"species":"versicolor"},{"sepal_length":5.072,"sepal_width":3.637,"petal_length":2.848,"petal_width":0.597,"species":"versicolor"},{"sepal_length":6.701,"sepal_width":4.217,"petal_length":2.795,"petal_width":2.002,"species":"versicolor"},{"sepal_length":5.875,"sepal_width":2.328,"petal_length":5.75,"petal_width":0.987,"species":"versicolor"},{"sepal_length":4.533,"sepal_width":3.844,"petal_length":4.494,"petal_width":2.202,"species":"versicolor"},{"sepal_length":7.679,"sepal_width":2.522,"petal_length":4.322,"petal_width":1.274,"species":"versicolor"},{"sepal_length":5.144,"sepal_width":2.119,"petal_length":4.881,"petal_width":1.8,"species":"versicolor"},{"sepal_length":5.52,"sepal_width":2.689,"petal_length":2.851,"petal_width":0.17,"species":"versicolor"},{"sepal_length":5.273,"sepal_width":4.484,"petal_length":4.148,"petal_width":2.473,"species":"versicolor"},{"sepal_length":5.074,"sepal_width":2.427,"petal_length":4.085,"petal_width":0.802,"species":"versicolor"},{"sepal_length":5.881,"sepal_width":3.086,"petal_length":3.301,"petal_width":1.747,"species":"versicolor"},{"sepal_length":5.895,"sepal_width":2.84,"petal_length":5.926,"petal_width":0.886,"species":"versicolor"},{"sepal_length":6.233,"sepal_width":3.527,"petal_length":4.005,"petal_width":1.514,"species":"versicolor"},{"sepal_length":5.324,"sepal_width":2.813,"petal_length":2.643,"petal_width":0.869,"species":"versicolor"},{"sepal_length":6.843,"sepal_width":2.552,"petal_length":1.931,"petal_width":1.768,"species":"virginica"},{"sepal_length":5.6,"sepal_width":2.312,"petal_length":2.726,"petal_width":0.202,"species":"virginica"},{"sepal_length":6.521,"sepal_width":2.519,"petal_length":3.648,"petal_width":1.012,"species":"virginica"},{"sepal_length":6.992,"sepal_width":4.282,"petal_length":5.464,"petal_width":1.154,"species":"virginica"},{"sepal_length":5.039,"sepal_width":4.169,"petal_length":3.891,"petal_width":2.117,"species":"virginica"},{"sepal_length":7.631,"sepal_width":3.125,"petal_length":1.806,"petal_width":1.585,"species":"virginica"},{"sepal_length":7.327,"sepal_width":2.521,"petal_length":3.143,"petal_width":1.41,"species":"virginica"},{"sepal_length":7.946,"sepal_width":3.23,"petal_length":5.727,"petal_width":2.124,"species":"virginica"},{"sepal_length":7.103,"sepal_width":2.134,"petal_length":1.381,"petal_width":0.506,"species":"virginica"},{"sepal_length":6.273,"sepal_width":3.692,"petal_length":5.184,"petal_width":2.479,"species":"virginica"},{"sepal_length":7.356,"sepal_width":3.579,"petal_length":5.603,"petal_width":2.147,"species":"virginica"},{"sepal_length":6.598,"sepal_width":2.878,"petal_length":3.458,"petal_width":2.208,"species":"virginica"},{"sepal_length":6.883,"sepal_width":2.873,"petal_length":6.156,"petal_width":1.602,"species":"virginica"},{"sepal_length":5.653,"sepal_width":4.112,"petal_length":1.834,"petal_width":0.978,"species":"virginica"},{"sepal_length":4.57,"sepal_width":2.214,"petal_length":4.562,"petal_width":1.843,"species":"virginica"},{"sepal_length":7.846,"sepal_width":4.199,"petal_length":3.564,"petal_width":1.798,"species":"virginica"},{"sepal_length":5.008,"sepal_width":2.683,"petal_length":1.765,"petal_width":0.214,"species":"virginica"},{"sepal_length":5.518,"sepal_width":3.102,"petal_length":4.128,"petal_width":1.819,"species":"virginica"},{"sepal_length":7.278,"sepal_width":3.962,"petal_length":2.078,"petal_width":1.699,"species":"virginica"},{"sepal_length":6.312,"sepal_width":3.109,"petal_length":3.58,"petal_width":1.202,"species":"virginica"}]\r
\r
export const meta = {\r
  id: 'brushable-parallel',\r
  title: 'Brushable Parallel',\r
  desc: 'Brushable Parallel — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BrushableParallel',\r
  complexity: 'beginner',\r
  interactivity: ["brush"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","brushable-parallel"],\r
}\r
\r
export default function BrushableParallel({ data }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const d = (data && Array.isArray(data) && data.length > 0) ? data : DEFAULT_DATA\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const keys = Object.keys(d[0]).filter(k => k !== 'species' && typeof d[0][k] === 'number')\r
    const categories = [...new Set(d.map(dd => dd.species))]\r
    const colorScale = d3.scaleOrdinal().domain(categories).range(colors)\r
\r
    const ml = 30, mr = 30, mt = 30, mb = 40\r
    const innerW = W - ml - mr\r
    const innerH = H - mt - mb\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${ml},\${mt})\`)\r
\r
    const xScale = d3.scalePoint().domain(keys).range([0, innerW])\r
\r
    const yScales = {}\r
    keys.forEach(k => {\r
      yScales[k] = d3.scaleLinear()\r
        .domain(d3.extent(d, dd => +dd[k]))\r
        .range([innerH, 0])\r
        .nice()\r
    })\r
\r
    // Track brush filters per axis\r
    const brushFilters = {}\r
\r
    function isVisible(row) {\r
      return keys.every(k => {\r
        if (!brushFilters[k]) return true\r
        const [lo, hi] = brushFilters[k]\r
        const v = yScales[k](row[k])\r
        return v >= Math.min(lo, hi) && v <= Math.max(lo, hi)\r
      })\r
    }\r
\r
    function lineData(row) {\r
      return keys.map(k => [xScale(k), yScales[k](row[k])])\r
    }\r
\r
    const line = d3.line().x(d => d[0]).y(d => d[1]).curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    // Draw paths\r
    const paths = g.append('g').attr('class', 'paths')\r
\r
    function updatePaths() {\r
      paths.selectAll('.pline').remove()\r
      d.forEach(row => {\r
        paths.append('path').attr('class', 'pline')\r
          .datum(lineData(row))\r
          .attr('d', line)\r
          .attr('fill', 'none')\r
          .attr('stroke', colorScale(row.species))\r
          .attr('stroke-width', isVisible(row) ? 1.5 : 0.3)\r
          .attr('opacity', isVisible(row) ? 0.7 : 0.1)\r
      })\r
    }\r
\r
    updatePaths()\r
\r
    // Axes + brushes\r
    keys.forEach(k => {\r
      const ax = g.append('g').attr('transform', \`translate(\${xScale(k)},0)\`)\r
\r
      // Axis\r
      ax.append('g')\r
        .call(d3.axisLeft(yScales[k]).ticks(5))\r
        .call(gg => gg.select('.domain').attr('stroke', 'var(--border)'))\r
        .call(gg => gg.selectAll('.tick line').attr('stroke', 'var(--border)'))\r
        .call(gg => gg.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '9px'))\r
\r
      // Axis spine\r
      ax.append('line')\r
        .attr('y1', 0).attr('y2', innerH)\r
        .attr('stroke', 'var(--border)').attr('stroke-width', 1.5)\r
\r
      // Label\r
      ax.append('text')\r
        .attr('y', -10).attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '10px').attr('font-weight', 600)\r
        .text(k.replace('_', ' '))\r
\r
      // Brush\r
      const brush = d3.brushY()\r
        .extent([[-12, 0], [12, innerH]])\r
        .on('brush end', (event) => {\r
          if (!event.selection) {\r
            delete brushFilters[k]\r
          } else {\r
            brushFilters[k] = event.selection\r
          }\r
          updatePaths()\r
        })\r
\r
      ax.append('g')\r
        .attr('class', 'brush')\r
        .call(brush)\r
        .call(b => b.selectAll('.selection')\r
          .attr('fill', '#6366f1').attr('fill-opacity', 0.3)\r
          .attr('stroke', '#6366f1').attr('stroke-width', 1))\r
    })\r
\r
    // Legend\r
    const lx = 5\r
    categories.forEach((cat, i) => {\r
      const ly = H - mb + 8 + i * 14\r
      svg.append('circle').attr('cx', lx + 5).attr('cy', ly).attr('r', 4).attr('fill', colorScale(cat))\r
      svg.append('text').attr('x', lx + 13).attr('y', ly + 4)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(cat)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 14)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Brushable Parallel Coordinates')\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};