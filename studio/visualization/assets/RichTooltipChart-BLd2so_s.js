var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'rich-tooltip-chart',\r
  title: 'Rich Tooltip Chart',\r
  desc: 'Rich Tooltip Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'RichTooltipChart',\r
  complexity: 'beginner',\r
  interactivity: ["hover"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","rich-tooltip-chart"],\r
}\r
\r
export default function RichTooltipChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [hoveredPoint, setHoveredPoint] = useState(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":62.022,"category":"A","value":44.829,"timestamp":"2026-07-05"},{"x":2,"y":75.915,"category":"B","value":66.973,"timestamp":"2026-07-06"},{"x":4,"y":70.436,"category":"C","value":52.659,"timestamp":"2026-07-07"},{"x":6,"y":78.964,"category":"A","value":62.474,"timestamp":"2026-07-08"},{"x":8,"y":95.271,"category":"B","value":47.232,"timestamp":"2026-07-09"},{"x":10,"y":84.923,"category":"C","value":88.206,"timestamp":"2026-07-10"},{"x":12,"y":94.13,"category":"A","value":30.7,"timestamp":"2026-07-11"},{"x":14,"y":79.841,"category":"B","value":50.073,"timestamp":"2026-07-12"},{"x":16,"y":83.996,"category":"C","value":61.062,"timestamp":"2026-07-13"},{"x":18,"y":62.898,"category":"A","value":47.078,"timestamp":"2026-07-14"},{"x":20,"y":70.98,"category":"B","value":5.121,"timestamp":"2026-07-15"},{"x":22,"y":57.114,"category":"C","value":3.154,"timestamp":"2026-07-16"},{"x":24,"y":42.064,"category":"A","value":6.178,"timestamp":"2026-07-17"},{"x":26,"y":33.081,"category":"B","value":78.355,"timestamp":"2026-07-18"},{"x":28,"y":34.459,"category":"C","value":2.712,"timestamp":"2026-07-19"},{"x":30,"y":24.134,"category":"A","value":84.269,"timestamp":"2026-07-20"},{"x":32,"y":29.87,"category":"B","value":80.902,"timestamp":"2026-07-21"},{"x":34,"y":28.615,"category":"C","value":44.99,"timestamp":"2026-07-22"},{"x":36,"y":27.566,"category":"A","value":5.139,"timestamp":"2026-07-23"},{"x":38,"y":44.611,"category":"B","value":59.673,"timestamp":"2026-07-24"},{"x":40,"y":46.521,"category":"C","value":64.569,"timestamp":"2026-07-25"},{"x":42,"y":54.695,"category":"A","value":30.363,"timestamp":"2026-07-26"},{"x":44,"y":74.119,"category":"B","value":85.871,"timestamp":"2026-07-27"},{"x":46,"y":77.513,"category":"C","value":20.419,"timestamp":"2026-07-28"},{"x":48,"y":79.494,"category":"A","value":29.299,"timestamp":"2026-07-29"},{"x":50,"y":79.634,"category":"B","value":65.986,"timestamp":"2026-07-30"},{"x":52,"y":93.572,"category":"C","value":69.309,"timestamp":"2026-07-31"},{"x":54,"y":97.653,"category":"A","value":8.797,"timestamp":"2026-08-01"},{"x":56,"y":94.513,"category":"B","value":43.114,"timestamp":"2026-08-02"},{"x":58,"y":88.735,"category":"C","value":13.73,"timestamp":"2026-08-03"},{"x":60,"y":64.582,"category":"A","value":1.584,"timestamp":"2026-08-04"},{"x":62,"y":60.943,"category":"B","value":48.172,"timestamp":"2026-08-05"},{"x":64,"y":57.009,"category":"C","value":89.956,"timestamp":"2026-08-06"},{"x":66,"y":37.826,"category":"A","value":71.96,"timestamp":"2026-08-07"},{"x":68,"y":47.701,"category":"B","value":27.825,"timestamp":"2026-08-08"},{"x":70,"y":37.741,"category":"C","value":17.962,"timestamp":"2026-08-09"},{"x":72,"y":30.978,"category":"A","value":82.189,"timestamp":"2026-08-10"},{"x":74,"y":22.575,"category":"B","value":99.564,"timestamp":"2026-08-11"},{"x":76,"y":33.676,"category":"C","value":91.612,"timestamp":"2026-08-12"},{"x":78,"y":35.82,"category":"A","value":57.845,"timestamp":"2026-08-13"},{"x":80,"y":40.642,"category":"B","value":59.624,"timestamp":"2026-08-14"},{"x":82,"y":48.562,"category":"C","value":72.941,"timestamp":"2026-08-15"},{"x":84,"y":56.913,"category":"A","value":44.976,"timestamp":"2026-08-16"},{"x":86,"y":76.687,"category":"B","value":69.507,"timestamp":"2026-08-17"},{"x":88,"y":87.642,"category":"C","value":89.02,"timestamp":"2026-08-18"},{"x":90,"y":82.751,"category":"A","value":54.521,"timestamp":"2026-08-19"},{"x":92,"y":84.229,"category":"B","value":10.088,"timestamp":"2026-08-20"},{"x":94,"y":93.914,"category":"C","value":31.331,"timestamp":"2026-08-21"},{"x":96,"y":94.689,"category":"A","value":90.478,"timestamp":"2026-08-22"},{"x":98,"y":77.245,"category":"B","value":47.539,"timestamp":"2026-08-23"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const xExtent = d3.extent(data, d => d.x)\r
    const yMax = d3.max(data, d => d.y)\r
\r
    // Guard against NaN from empty or invalid data\r
    if (isNaN(xExtent[0]) || isNaN(xExtent[1]) || isNaN(yMax)) return\r
\r
    const x = d3.scaleLinear().domain(xExtent).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, yMax * 1.1]).range([IH, 0])\r
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
    // Line\r
    const line = d3.line()\r
      .x(d => x(d.x))\r
      .y(d => y(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', line)\r
      .attr('fill', 'none')\r
      .attr('stroke', colors[0])\r
      .attr('stroke-width', 2)\r
\r
    // Area\r
    const area = d3.area()\r
      .x(d => x(d.x))\r
      .y0(IH)\r
      .y1(d => y(d.y))\r
      .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
    g.append('path')\r
      .datum(data)\r
      .attr('d', area)\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.1)\r
\r
    // Points\r
    g.selectAll('.point')\r
      .data(data)\r
      .enter()\r
      .append('circle')\r
      .attr('cx', d => x(d.x))\r
      .attr('cy', d => y(d.y))\r
      .attr('r', 5)\r
      .attr('fill', d => colors[['A','B','C'].indexOf(d.category)])\r
      .attr('opacity', 0.8)\r
      .attr('stroke', 'var(--bg)')\r
      .attr('stroke-width', 1.5)\r
      .on('mouseenter', function(event, d) {\r
        d3.select(this).attr('r', 8).attr('opacity', 1)\r
        setHoveredPoint({ ...d, xPos: x(d.x), yPos: y(d.y) })\r
      })\r
      .on('mouseleave', function() {\r
        d3.select(this).attr('r', 5).attr('opacity', 0.8)\r
        setHoveredPoint(null)\r
      })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Rich Tooltip with Mini-Charts')\r
\r
  }, [customData])\r
\r
  // Render tooltip as React component overlay\r
  if (!hoveredPoint) return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
\r
  // Calculate tooltip position\r
  const tooltipX = M.left + hoveredPoint.xPos + 20\r
  const tooltipY = M.top + hoveredPoint.yPos - 200\r
\r
  return (\r
    <>\r
      <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
      <div\r
        style={{\r
          position: 'absolute',\r
          left: tooltipX,\r
          top: tooltipY,\r
          zIndex: 1000,\r
          pointerEvents: 'none'\r
        }}\r
      >\r
        <div style={{\r
          background: 'var(--bg-card)',\r
          border: '1px solid var(--border)',\r
          borderRadius: '8px',\r
          padding: '16px',\r
          minWidth: '280px',\r
          boxShadow: '0 8px 24px rgba(0,0,0,0.15)',\r
          fontFamily: 'system-ui, -apple-system, sans-serif'\r
        }}>\r
          {/* Main info */}\r
          <div style={{ marginBottom: '12px' }}>\r
            <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>\r
              Data Point Details\r
            </div>\r
            <div style={{ fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '8px' }}>\r
              {hoveredPoint.timestamp || \`X: \${hoveredPoint.x}, Y: \${hoveredPoint.y}\`}\r
            </div>\r
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>\r
              <span style={{ color: 'var(--text)' }}><strong>X:</strong> {hoveredPoint.x}</span>\r
              <span style={{ color: 'var(--text)' }}><strong>Y:</strong> {hoveredPoint.y.toFixed(1)}</span>\r
              <span style={{ color: 'var(--text)' }}><strong>Value:</strong> {hoveredPoint.value?.toFixed(1)}</span>\r
            </div>\r
          </div>\r
\r
          {/* Mini sparkline - trend around this point */}\r
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px' }}>\r
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Local Trend (5 points)</div>\r
            <MiniSparkline data={generateLocalTrend(hoveredPoint, data)} color={colors[0]} />\r
          </div>\r
\r
          {/* Mini bar chart - category breakdown */}\r
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '12px' }}>\r
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginBottom: '8px' }}>Category Distribution</div>\r
            <MiniBarChart data={generateCategoryData()} colors={colors} />\r
          </div>\r
\r
          {/* Key metrics */}\r
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '12px', marginTop: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>\r
            <div>\r
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Avg (5 pts)</div>\r
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{calculateLocalAvg(hoveredPoint, data).toFixed(1)}</div>\r
            </div>\r
            <div>\r
              <div style={{ fontSize: '10px', color: 'var(--text-secondary)' }}>Peak (window)</div>\r
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{calculateLocalPeak(hoveredPoint, data).toFixed(1)}</div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </>\r
  )\r
\r
  function generateLocalTrend(point, dataset) {\r
    const idx = dataset.findIndex(d => d.x === point.x && d.y === point.y)\r
    const start = Math.max(0, idx - 2)\r
    const end = Math.min(dataset.length, idx + 3)\r
    return dataset.slice(start, end).map(d => ({ x: d.x, y: d.y }))\r
  }\r
\r
  function generateCategoryData() {\r
    const cats = ['A', 'B', 'C']\r
    return cats.map((cat, i) => ({\r
      category: cat,\r
      count: Math.floor(Math.random() * 20) + 5,\r
      color: colors[i]\r
    }))\r
  }\r
\r
  function calculateLocalAvg(point, dataset) {\r
    const idx = dataset.findIndex(d => d.x === point.x && d.y === point.y)\r
    const start = Math.max(0, idx - 2)\r
    const end = Math.min(dataset.length, idx + 3)\r
    const window = dataset.slice(start, end)\r
    return d3.mean(window, d => d.y)\r
  }\r
\r
  function calculateLocalPeak(point, dataset) {\r
    const idx = dataset.findIndex(d => d.x === point.x && d.y === point.y)\r
    const start = Math.max(0, idx - 2)\r
    const end = Math.min(dataset.length, idx + 3)\r
    const window = dataset.slice(start, end)\r
    return d3.max(window, d => d.y)\r
  }\r
}\r
\r
// Mini Sparkline Component\r
function MiniSparkline({ data, color }) {\r
  if (!data || data.length < 2) return <div style={{ height: 40, opacity: 0.3 }}>Insufficient data</div>\r
\r
  const width = 240\r
  const height = 40\r
  const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, width])\r
  const y = d3.scaleLinear().domain(d3.extent(data, d => d.y)).range([30, 0])\r
\r
  const line = d3.line()\r
    .x(d => x(d.x))\r
    .y(d => y(d.y))\r
    .curve(d3.curveCatmullRom.alpha(0.5))\r
\r
  return (\r
    <svg width={width} height={height} style={{ background: 'var(--bg)', borderRadius: '4px' }}>\r
      <path\r
        d={line(data)}\r
        fill="none"\r
        stroke={color}\r
        strokeWidth={2}\r
        strokeLinecap="round"\r
      />\r
      {data.map((d, i) => (\r
        <circle\r
          key={i}\r
          cx={x(d.x)}\r
          cy={y(d.y)}\r
          r={3}\r
          fill={color}\r
          stroke="var(--bg)"\r
          strokeWidth={1}\r
        />\r
      ))}\r
    </svg>\r
  )\r
}\r
\r
// Mini Bar Chart Component\r
function MiniBarChart({ data, colors }) {\r
  const maxCount = d3.max(data, d => d.count) || 1\r
  const barHeight = 20\r
  const gap = 4\r
  const height = data.length * (barHeight + gap)\r
\r
  return (\r
    <svg width={240} height={height} style={{ background: 'var(--bg)', borderRadius: '4px' }}>\r
      {data.map((d, i) => (\r
        <g key={i}>\r
          <rect\r
            x={10}\r
            y={i * (barHeight + gap)}\r
            width={(d.count / d3.max(data, d => d.count)) * 200}\r
            height={barHeight}\r
            fill={d.color}\r
            rx={2}\r
            opacity={0.8}\r
          />\r
          <text\r
            x={8}\r
            y={i * (barHeight + gap) + barHeight / 2 + 4}\r
            fontSize="10"\r
            fill="var(--text)"\r
            textAnchor="end"\r
            dominantBaseline="middle"\r
          >\r
            {d.category}\r
          </text>\r
          <text\r
            x={(d.count / d3.max(data, d => d.count)) * 200 + 15}\r
            y={i * (barHeight + gap) + barHeight / 2 + 4}\r
            fontSize="10"\r
            fill="var(--text)"\r
            dominantBaseline="middle"\r
          >\r
            {d.count}\r
          </text>\r
        </g>\r
      ))}\r
    </svg>\r
  )\r
}`;export{e as default};