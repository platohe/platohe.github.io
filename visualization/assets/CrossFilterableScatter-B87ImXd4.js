var e=`import { useEffect, useRef, useContext, useMemo } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
import { useCrossFilter } from '../components/CrossFilterManager'\r
\r
export const meta = {\r
  id: 'cross-filterable-scatter',\r
  title: 'Cross Filterable Scatter',\r
  desc: 'Cross Filterable Scatter — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'CrossFilterableScatter',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","cross-filterable-scatter"],\r
}\r
\r
export default function CrossFilterableScatter({ \r
  data: customData, \r
  chartId = 'scatter-main',\r
  xKey = 'x', \r
  yKey = 'y',\r
  options = {} \r
}) {\r
  const ref = useRef(null)\r
  const { state, setFilter, clearFilter, setActiveChart, filterData } = useCrossFilter()\r
  const chartFilters = state.filters[chartId] || {}\r
  const brushSelection = state.brushSelection\r
\r
  const DEFAULT_DATA = [{"x":60.11,"y":44.829,"category":"A","value":42.623,"id":0},{"x":66.973,"y":17.481,"category":"A","value":26.33,"id":1},{"x":27.323,"y":62.474,"category":"A","value":43.274,"id":2},{"x":47.232,"y":24.992,"category":"A","value":44.103,"id":3},{"x":74.574,"y":30.7,"category":"A","value":9.863,"id":4},{"x":50.073,"y":68.661,"category":"A","value":30.531,"id":5},{"x":0.384,"y":47.078,"category":"A","value":41.867,"id":6},{"x":5.121,"y":59.232,"category":"A","value":1.577,"id":7},{"x":26.696,"y":6.178,"category":"A","value":9.284,"id":8},{"x":78.355,"y":53.034,"category":"A","value":1.356,"id":9},{"x":17.301,"y":84.269,"category":"A","value":24.387,"id":10},{"x":80.902,"y":31.946,"category":"A","value":22.495,"id":11},{"x":3.744,"y":5.139,"category":"A","value":27.83,"id":12},{"x":59.673,"y":24.517,"category":"A","value":32.285,"id":13},{"x":20.951,"y":30.363,"category":"A","value":36.931,"id":14},{"x":85.871,"y":50.8,"category":"A","value":10.21,"id":15},{"x":28.421,"y":29.299,"category":"A","value":3.735,"id":16},{"x":65.986,"y":68.077,"category":"A","value":34.654,"id":17},{"x":92.784,"y":8.797,"category":"A","value":47.187,"id":18},{"x":43.114,"y":94.229,"category":"A","value":6.865,"id":19},{"x":11.094,"y":1.584,"category":"A","value":18.022,"id":20},{"x":48.172,"y":61.192,"category":"A","value":44.978,"id":21},{"x":7.758,"y":71.96,"category":"A","value":46.743,"id":22},{"x":27.825,"y":70.659,"category":"A","value":8.981,"id":23},{"x":52.032,"y":82.189,"category":"A","value":6.03,"id":24},{"x":99.564,"y":56.28,"category":"A","value":45.806,"id":25},{"x":43.399,"y":57.845,"category":"A","value":16.848,"id":26},{"x":59.624,"y":32.296,"category":"A","value":36.471,"id":27},{"x":29.521,"y":44.976,"category":"A","value":42.156,"id":28},{"x":69.507,"y":99.401,"category":"A","value":44.51,"id":29},{"x":43.189,"y":54.521,"category":"A","value":14.796,"id":30},{"x":10.088,"y":69.672,"category":"A","value":15.665,"id":31},{"x":78.594,"y":90.478,"category":"A","value":4.682,"id":32},{"x":47.539,"y":82.195,"category":"A","value":6.499,"id":33},{"x":97.275,"y":17.839,"category":"B","value":35.471,"id":34},{"x":69.969,"y":22.318,"category":"B","value":20.643,"id":35},{"x":16.344,"y":65.467,"category":"B","value":16.797,"id":36},{"x":20.695,"y":62.89,"category":"B","value":44.344,"id":37},{"x":32.638,"y":79.243,"category":"B","value":19.647,"id":38},{"x":13.139,"y":86.37,"category":"B","value":18.486,"id":39},{"x":0.953,"y":73.742,"category":"B","value":31.763,"id":40},{"x":87.592,"y":90.816,"category":"B","value":10.449,"id":41},{"x":60.393,"y":48.924,"category":"B","value":9.201,"id":42},{"x":4.747,"y":70.555,"category":"B","value":35.418,"id":43},{"x":29.149,"y":27.548,"category":"B","value":16.83,"id":44},{"x":2.911,"y":22.09,"category":"B","value":49.676,"id":45},{"x":57.235,"y":98.856,"category":"B","value":8.193,"id":46},{"x":17.083,"y":56.096,"category":"B","value":14.625,"id":47},{"x":39.466,"y":43.441,"category":"B","value":20.918,"id":48},{"x":68.614,"y":39.851,"category":"B","value":16.806,"id":49},{"x":89.564,"y":32.732,"category":"B","value":24.763,"id":50},{"x":61.087,"y":54.636,"category":"B","value":29.465,"id":51},{"x":23.541,"y":32.537,"category":"B","value":14.939,"id":52},{"x":32.057,"y":66.93,"category":"B","value":11.045,"id":53},{"x":16.93,"y":69.499,"category":"B","value":15.711,"id":54},{"x":12.491,"y":31.379,"category":"B","value":2.121,"id":55},{"x":57.754,"y":20.769,"category":"B","value":24.077,"id":56},{"x":37.993,"y":71.205,"category":"B","value":45.631,"id":57},{"x":81.17,"y":43.936,"category":"B","value":7.707,"id":58},{"x":86.763,"y":52.568,"category":"B","value":42.019,"id":59},{"x":89.451,"y":45.01,"category":"B","value":7.33,"id":60},{"x":61.874,"y":80.759,"category":"B","value":10.42,"id":61},{"x":38.964,"y":54.566,"category":"B","value":49.225,"id":62},{"x":49.2,"y":85.948,"category":"B","value":42.16,"id":63},{"x":74.362,"y":5.354,"category":"B","value":3.467,"id":64},{"x":16.93,"y":50.654,"category":"B","value":33.833,"id":65},{"x":76.08,"y":99.146,"category":"B","value":40.799,"id":66},{"x":63.161,"y":83.698,"category":"C","value":42.648,"id":67},{"x":59.939,"y":35.108,"category":"C","value":22.345,"id":68},{"x":87.838,"y":68.099,"category":"C","value":17.462,"id":69},{"x":93.753,"y":62.594,"category":"C","value":16.467,"id":70},{"x":84.467,"y":15.159,"category":"C","value":18.288,"id":71},{"x":1.997,"y":8.55,"category":"C","value":32.383,"id":72},{"x":72.636,"y":95.594,"category":"C","value":43.973,"id":73},{"x":46.625,"y":70.748,"category":"C","value":7.258,"id":74},{"x":27.31,"y":13.914,"category":"C","value":2.384,"id":75},{"x":29.098,"y":44.098,"category":"C","value":28.438,"id":76},{"x":71.637,"y":79.357,"category":"C","value":39.24,"id":77},{"x":19.593,"y":66.636,"category":"C","value":25.89,"id":78},{"x":44.354,"y":46.903,"category":"C","value":22.953,"id":79},{"x":42.505,"y":33.192,"category":"C","value":15.38,"id":80},{"x":14.765,"y":50.46,"category":"C","value":13.37,"id":81},{"x":53.056,"y":54.796,"category":"C","value":32.369,"id":82},{"x":43.719,"y":13.483,"category":"C","value":0.188,"id":83},{"x":14.818,"y":94.324,"category":"C","value":3.465,"id":84},{"x":87.066,"y":43.04,"category":"C","value":25.123,"id":85},{"x":9.879,"y":82.167,"category":"C","value":2.837,"id":86},{"x":37.061,"y":22.971,"category":"C","value":35.138,"id":87},{"x":56.405,"y":9.462,"category":"C","value":48.32,"id":88},{"x":75.011,"y":66.12,"category":"C","value":39.819,"id":89},{"x":54.881,"y":80.484,"category":"C","value":26.353,"id":90},{"x":17.683,"y":7.809,"category":"C","value":4.794,"id":91},{"x":5.957,"y":26.278,"category":"C","value":33.607,"id":92},{"x":66.836,"y":56.1,"category":"C","value":48.832,"id":93},{"x":2.213,"y":39.676,"category":"C","value":16.892,"id":94},{"x":28.413,"y":83.31,"category":"C","value":26.834,"id":95},{"x":20.497,"y":94.43,"category":"C","value":47.605,"id":96},{"x":26.625,"y":51.836,"category":"C","value":43.001,"id":97},{"x":93.535,"y":68.498,"category":"C","value":28.427,"id":98},{"x":80.992,"y":31.198,"category":"C","value":24.701,"id":99}]\r
\r
  const data = useMemo(() => {\r
    const rawData = customData || DEFAULT_DATA\r
    // Apply cross-filters from other charts\r
    const filtered = Object.entries(state.filters)\r
      .filter(([id]) => id !== chartId) // Don't apply own filters\r
      .reduce((data, [_, filters]) => {\r
        return data.filter(d => \r
          Object.entries(filters).every(([dim, [min, max]]) => {\r
            const val = d[dim]\r
            return val >= min && val <= max\r
          })\r
        )\r
      }, customData || DEFAULT_DATA)\r
    return filtered\r
  }, [customData, state.filters, chartId])\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const dataToRender = data\r
    if (!dataToRender.length) return\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(dataToRender, d => d[xKey])).nice()\r
      .range([0, IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain(d3.extent(dataToRender, d => d[yKey])).nice()\r
      .range([IH, 0])\r
\r
    const g = d3.select(ref.current)\r
      .append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Points\r
    const points = g.selectAll('.point')\r
      .data(dataToRender)\r
      .enter()\r
      .append('circle')\r
      .attr('class', 'point')\r
      .attr('cx', d => x(d[xKey]))\r
      .attr('cy', d => y(d[yKey]))\r
      .attr('r', 5)\r
      .attr('fill', d => d.category ? colors[['A','B','C'].indexOf(d.category)] : colors[0])\r
      .attr('opacity', 0.7)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1)\r
\r
    // Brush\r
    const brush = d3.brush()\r
      .extent([[0, 0], [IW, IH]])\r
      .on('brush', (event) => {\r
        if (!event.selection) return\r
        const [[x0, y0], [x1, y1]] = event.selection\r
        const xRange = [x.invert(x0), x.invert(x1)].sort((a,b) => a-b)\r
        const yRange = [y.invert(y1), y.invert(y0)].sort((a,b) => a-b)\r
        \r
        // Update brush selection in context\r
        // This will be handled by the parent component\r
      })\r
      .on('end', (event) => {\r
        if (!event.selection) {\r
          clearFilter(chartId, xKey)\r
          clearFilter(chartId, yKey)\r
        } else {\r
          const [[x0, y0], [x1, y1]] = event.selection\r
          const xRange = [x.invert(x0), x.invert(x1)].sort((a,b) => a-b)\r
          const yRange = [y.invert(y1), y.invert(y0)].sort((a,b) => a-b)\r
\r
          setFilter(chartId, xKey, xRange)\r
          setFilter(chartId, yKey, yRange)\r
        }\r
      })\r
\r
    d3.select(ref.current)\r
      .append('g')\r
      .attr('transform', \`translate(\${M.left},\${M.top})\`)\r
      .call(brush)\r
\r
    // Axes\r
    d3.select(ref.current).select('g')\r
      .append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(d3.scaleLinear().domain(d3.extent(data, d => d[xKey])).nice()).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    d3.select(ref.current).select('g')\r
      .append('g')\r
      .call(d3.axisLeft(d3.scaleLinear().domain(d3.extent(data, d => d[yKey])).nice()).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Title\r
    d3.select(ref.current).select('g')\r
      .append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Cross-Filterable Scatter Plot')\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};