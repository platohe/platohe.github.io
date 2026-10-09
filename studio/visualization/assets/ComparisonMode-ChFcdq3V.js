var e=`import { useEffect, useRef, useState, useMemo, useCallback } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
import { getComponent } from './index'\r
import { getDefaultData } from './defaultData'\r
import { CHARTS } from '../data/charts'\r
\r
export const meta = {\r
  id: 'comparison-mode',\r
  title: 'Comparison Mode',\r
  desc: 'Comparison Mode — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ComparisonMode',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","comparison-mode"],\r
}\r
\r
export default function ComparisonMode({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [chartA, setChartA] = useState({ component: 'BarChart', config: {} })\r
  const [chartB, setChartB] = useState({ component: 'LineChart', config: {} })\r
  const [layout, setLayout] = useState('horizontal') // 'horizontal', 'vertical', 'overlay'\r
  const [syncZoom, setSyncZoom] = useState(true)\r
  const [zoomState, setZoomState] = useState({ x: null, y: null })\r
  const [showDiff, setShowDiff] = useState(false)\r
  const [diffMode, setDiffMode] = useState('absolute') // 'absolute', 'relative', 'percentage'\r
\r
  const availableCharts = CHARTS.filter(c => \r
    c.category !== 'Math & Simulation' && \r
    c.category !== 'Animation' &&\r
    c.category !== 'Miscellaneous'\r
  ).slice(0, 50)\r
\r
  const data = useMemo(() => customData || getDefaultData(chartA.component), [customData, chartA.component])\r
\r
  const handleChartChange = useCallback((side, component) => {\r
    if (side === 'A') {\r
      setChartA(prev => ({ ...prev, component, config: {} }))\r
    } else {\r
      setChartB(prev => ({ ...prev, component, config: {} }))\r
    }\r
  }, [])\r
\r
  const handleConfigChange = useCallback((side, key, value) => {\r
    if (side === 'A') {\r
      setChartA(prev => ({ ...prev, config: { ...prev.config, [key]: value } }))\r
    } else {\r
      setChartB(prev => ({ ...prev, config: { ...prev.config, [key]: value } }))\r
    }\r
  }, [])\r
\r
  const toggleLayout = useCallback(() => {\r
    setLayout(prev => prev === 'horizontal' ? 'vertical' : prev === 'vertical' ? 'overlay' : 'horizontal')\r
  }, [])\r
\r
  const handleZoom = useCallback((zoom) => {\r
    setZoomState(zoom)\r
    if (syncZoom) {\r
      // Apply zoom to both charts\r
    }\r
  }, [syncZoom])\r
\r
  const computeDiff = useCallback((dataA, dataB) => {\r
    if (!dataA || !dataB) return null\r
    \r
    // Simple diff computation for arrays of objects\r
    if (Array.isArray(dataA) && Array.isArray(dataB)) {\r
      return dataA.map((a, i) => {\r
        const b = dataB[i]\r
        if (!b) return { ...a, _diff: null }\r
        \r
        const diff = {}\r
        Object.keys(a).forEach(key => {\r
          if (typeof a[key] === 'number' && typeof b[key] === 'number') {\r
            const diff = b[key] - a[key]\r
            const relDiff = a[key] !== 0 ? diff / a[key] : 0\r
            diff[key] = { a: a[key], b: b[key], diff, relDiff }\r
          }\r
        })\r
        return { ...a, _diff: diff }\r
      })\r
    }\r
    return null\r
  }, [])\r
\r
  const diffData = useMemo(() => {\r
    if (!showDiff) return null\r
    return computeDiff(\r
      getDefaultData(chartA.component),\r
      getDefaultData(chartB.component)\r
    )\r
  }, [showDiff, chartA.component, chartB.component])\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const dataA = getDefaultData(chartA.component)\r
    const dataB = getDefaultData(chartB.component)\r
\r
    const ComponentA = getComponent(chartA.component)\r
    const ComponentB = getComponent(chartB.component)\r
\r
    if (!ComponentA || !ComponentB) return\r
\r
    const svgNode = d3.select(ref.current)\r
    svgNode.selectAll('*').remove()\r
\r
    const g = svgNode.append('g')\r
\r
    const widthA = layout === 'horizontal' ? IW / 2 : IW\r
    const widthB = layout === 'horizontal' ? IW / 2 : IW\r
    const heightA = layout === 'vertical' ? IH / 2 : IH\r
    const heightB = layout === 'vertical' ? IH / 2 : IH\r
\r
    // Render Chart A\r
    const gA = g.append('g')\r
      .attr('class', 'chart-a')\r
      .attr('transform', layout === 'vertical' \r
        ? \`translate(\${M.left},\${M.top})\`\r
        : \`translate(\${M.left},\${M.top})\`)\r
\r
    // Render Chart B\r
    const gB = g.append('g')\r
      .attr('class', 'chart-b')\r
      .attr('transform', layout === 'vertical' \r
        ? \`translate(\${M.left},\${M.top + IH / 2})\`\r
        : \`translate(\${M.left + IW / 2},\${M.top})\`)\r
\r
    // Render both charts using their components\r
    // This is a simplified version - in practice we'd render the actual components\r
    // For now, render placeholder representations\r
\r
    // Chart A placeholder\r
    gA.append('rect')\r
      .attr('x', M.left).attr('y', M.top)\r
      .attr('width', layout === 'horizontal' ? IW / 2 - M.left - M.right : IW - M.left - M.right)\r
      .attr('height', layout === 'vertical' ? IH / 2 - M.top - M.bottom : IH - M.top - M.bottom)\r
      .attr('fill', 'var(--bg-card)')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('rx', 4)\r
\r
    gA.append('text')\r
      .attr('x', layout === 'horizontal' ? (IW / 4) : IW / 2)\r
      .attr('y', M.top + 30)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(\`Chart A: \${CHARTS.find(c => c.component === chartA.component)?.title || chartA.component}\`)\r
\r
    // Chart B placeholder\r
    gB.append('rect')\r
      .attr('x', layout === 'horizontal' ? M.left + IW / 2 : M.left)\r
      .attr('y', layout === 'vertical' ? M.top + IH / 2 : M.top)\r
      .attr('width', layout === 'horizontal' ? IW / 2 - M.left - M.right : IW - M.left - M.right)\r
      .attr('height', layout === 'vertical' ? IH / 2 - M.top - M.bottom : IH - M.top - M.bottom)\r
      .attr('fill', 'var(--bg-card)')\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-width', 1)\r
      .attr('rx', 4)\r
\r
    gB.append('text')\r
      .attr('x', layout === 'horizontal' ? 3 * IW / 4 : IW / 2)\r
      .attr('y', layout === 'vertical' ? IH / 2 + 30 : 30)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text(\`Chart B: \${CHARTS.find(c => c.component === chartB.component)?.title || chartB.component}\`)\r
\r
    // Diff visualization\r
    if (showDiff && diffData) {\r
      const diffG = g.append('g').attr('class', 'diff-overlay')\r
      \r
      diffG.append('text')\r
        .attr('x', IW / 2)\r
        .attr('y', 20)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', colors[2])\r
        .attr('font-size', '12px')\r
        .attr('font-weight', 600)\r
        .text(\`Diff Mode: \${diffMode.charAt(0).toUpperCase() + diffMode.slice(1)}\`)\r
\r
      // Simple diff bars\r
      if (Array.isArray(diffData)) {\r
        const diffValues = diffData\r
          .filter(d => d._diff)\r
          .map(d => {\r
            const key = Object.keys(d._diff)[0]\r
            if (key) {\r
              return {\r
                label: d.label || d.x || 'Item',\r
                diff: d._diff[key]?.diff || 0,\r
                relDiff: d._diff[key]?.relDiff || 0\r
              }\r
            }\r
            return null\r
          })\r
          .filter(Boolean)\r
\r
        if (diffValues.length > 0) {\r
          const x = d3.scaleBand()\r
            .domain(diffValues.map(d => d.label))\r
            .range([0, IW])\r
            .padding(0.2)\r
\r
          const y = d3.scaleLinear()\r
            .domain(d3.extent(diffValues, d => d.diff))\r
            .range([IH / 2, 0])\r
            .nice()\r
\r
          const diffG = g.append('g')\r
            .attr('class', 'diff-bars')\r
            .attr('transform', \`translate(\${M.left}, \${M.top + IH / 2})\`)\r
\r
          diffG.selectAll('.diff-bar')\r
            .data(diffValues)\r
            .enter()\r
            .append('rect')\r
            .attr('class', 'diff-bar')\r
            .attr('x', d => x(d.label))\r
            .attr('y', d => d.diff >= 0 ? y(d.diff) : y(0))\r
            .attr('width', x.bandwidth())\r
            .attr('height', d => Math.abs(y(d.diff) - y(0)))\r
            .attr('fill', d => d.diff >= 0 ? colors[2] : colors[1])\r
            .attr('opacity', 0.7)\r
        }\r
      }\r
    }\r
\r
    // Toolbar\r
    const toolbar = d3.select(ref.current).append('g')\r
      .attr('class', 'comparison-toolbar')\r
      .attr('transform', \`translate(\${M.left}, \${M.top - 40})\`)\r
\r
    // Layout buttons\r
    ;['horizontal', 'vertical', 'overlay'].forEach((layoutOption, i) => {\r
      const btn = g.append('g')\r
        .attr('class', 'toolbar-btn')\r
        .attr('transform', \`translate(\${M.left + i * 100}, \${M.top - 40})\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => setLayout(layoutOption))\r
\r
      d3.select(ref.current).select('.comparison-toolbar').selectAll('g').filter((_, i) => i === 0)\r
        .append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 80).attr('height', 28)\r
        .attr('rx', 4)\r
        .attr('fill', layout === layoutOption ? colors[0] : 'var(--border)')\r
        .attr('opacity', layout === layoutOption ? 1 : 0.5)\r
\r
      g.append('text')\r
        .attr('x', 40).attr('y', 19)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '10px')\r
        .attr('fill', layout === layoutOption ? 'white' : 'var(--text)')\r
        .attr('font-weight', layout === layoutOption ? 600 : 400)\r
        .text(layoutOption.charAt(0).toUpperCase() + layoutOption.slice(1))\r
    })\r
\r
    // Sync zoom toggle\r
    const syncBtn = g.append('g')\r
      .attr('class', 'toolbar-btn')\r
      .attr('transform', \`translate(\${M.left + 300}, \${M.top - 40})\`)\r
      .style('cursor', 'pointer')\r
      .on('click', () => setSyncZoom(!syncZoom))\r
\r
    g.append('rect')\r
      .attr('x', 300).attr('y', -40)\r
      .attr('width', 100).attr('height', 28)\r
      .attr('rx', 4)\r
      .attr('fill', syncZoom ? colors[0] : 'var(--border)')\r
      .attr('opacity', syncZoom ? 1 : 0.5)\r
\r
    g.append('text')\r
      .attr('x', 350).attr('y', -21)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', syncZoom ? 'white' : 'var(--text)')\r
      .attr('font-weight', syncZoom ? 600 : 400)\r
      .text('Sync Zoom')\r
\r
    // Show diff toggle\r
    const diffBtn = g.append('g')\r
      .attr('class', 'toolbar-btn')\r
      .attr('transform', \`translate(\${M.left + 410}, \${M.top - 40})\`)\r
      .style('cursor', 'pointer')\r
      .on('click', () => setShowDiff(!showDiff))\r
\r
    g.append('rect')\r
      .attr('x', 410).attr('y', -40)\r
      .attr('width', 100).attr('height', 28)\r
      .attr('rx', 4)\r
      .attr('fill', showDiff ? colors[2] : 'var(--border)')\r
      .attr('opacity', showDiff ? 1 : 0.5)\r
\r
    g.append('text')\r
      .attr('x', 460).attr('y', -21)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', showDiff ? 'white' : 'var(--text)')\r
      .attr('font-weight', showDiff ? 600 : 400)\r
      .text('Show Diff')\r
\r
    // Chart selectors\r
    const chartSelectorA = g.append('g')\r
      .attr('class', 'chart-selector')\r
      .attr('transform', \`translate(\${M.left}, \${M.top - 80})\`)\r
\r
    gA.append('text')\r
      .attr('x', 0).attr('y', -20)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '10px')\r
      .text('Chart A:')\r
\r
    // Chart selector dropdown would go here - simplified for now\r
\r
  }, [chartA, chartB, layout, syncZoom, showDiff, diffData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};