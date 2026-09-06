var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M } from './utils'\r
\r
export const meta = {\r
  id: 'waterfall-chart',\r
  title: 'Waterfall Chart',\r
  desc: 'Waterfall Chart — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'WaterfallChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","waterfall-chart"],\r
}\r
\r
export default function WaterfallChart({ data }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const DEFAULT_DATA = [{"label":"Revenue","value":420,"isTotal":false},{"label":"COGS","value":-180,"isTotal":false},{"label":"Gross Profit","value":null,"isTotal":true},{"label":"Marketing","value":-55,"isTotal":false},{"label":"R&D","value":-40,"isTotal":false},{"label":"Admin","value":-25,"isTotal":false},{"label":"Net Income","value":null,"isTotal":true}]\r
    const toNum=n=>{const x=Number(n);return Number.isFinite(x)?x:null}\r
    const raw0 = (data && Array.isArray(data) && data.length > 0) ? data : DEFAULT_DATA\r
    const raw = raw0.flatMap(d=>{\r
      if(!d||typeof d!=='object') return []\r
      const label=d.label??d.cat??d.name; if(label==null) return []\r
      const v=toNum(d.value??d.v); // totals may have null, allow null but keep isTotal\r
      return [{label:String(label), value: v, isTotal:!!d.isTotal}]\r
    })\r
    const effRaw = raw.length?raw:DEFAULT_DATA.map(d=>({label:d.label, value:d.value, isTotal:!!d.isTotal}))\r
\r
    // Compute running totals\r
    let cumulative = 0\r
    const processed = effRaw.map(d => {\r
      if (d.isTotal) {\r
        const start = 0\r
        const end = cumulative\r
        return { ...d, start, end, value: cumulative }\r
      }\r
      const v=Number.isFinite(d.value)?d.value:0\r
      const start = cumulative\r
      const end = cumulative + v\r
      cumulative = end\r
      return { ...d, start, end, value: v }\r
    })\r
\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const innerW = W - M.left - M.right\r
    const innerH = H - M.top - M.bottom\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    const allEndsRaw = processed.map(d => d.end).concat(processed.map(d => d.start)).filter(v=>Number.isFinite(v))\r
    const yMinRaw = allEndsRaw.length? Math.min(0, d3.min(allEndsRaw)):0\r
    const yMaxRaw = allEndsRaw.length? d3.max(allEndsRaw):100\r
    const yMin = Number.isFinite(yMinRaw)? yMinRaw*1.1 : 0\r
    const yMax = Number.isFinite(yMaxRaw)? yMaxRaw*1.15 : 100\r
    const yDomainMin = Number.isFinite(yMin)? yMin : 0\r
    const yDomainMax = Number.isFinite(yMax)&&yMin!==yMax? yMax : yMin+100\r
\r
    const x = d3.scaleBand()\r
      .domain(processed.map(d => d.label))\r
      .range([0, innerW])\r
      .padding(0.25)\r
\r
    const y = d3.scaleLinear()\r
      .domain([yDomainMin, yDomainMax])\r
      .range([innerH, 0])\r
    const safeY=v=>{const yy=y(v);return Number.isFinite(yy)?yy:innerH}\r
    const safeX=v=>{const xx=x(v);return Number.isFinite(xx)?xx:0}\r
\r
    // Gridlines\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-innerW).tickPadding(6))\r
      .call(gg => gg.select('.domain').remove())\r
      .call(gg => gg.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,3'))\r
      .call(gg => gg.selectAll('.tick text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Zero baseline\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', innerW)\r
      .attr('y1', safeY(0)).attr('y2', safeY(0))\r
      .attr('stroke', 'var(--text-secondary)')\r
      .attr('stroke-width', 1)\r
      .attr('stroke-dasharray', '4,2')\r
      .attr('opacity', 0.5)\r
\r
    // X axis\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${innerH})\`)\r
      .call(d3.axisBottom(x).tickSize(0))\r
      .call(gg => gg.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(gg => gg.selectAll('.tick text')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '10px')\r
        .attr('transform', 'rotate(-20)')\r
        .attr('text-anchor', 'end')\r
        .attr('dy', '0.5em'))\r
\r
    // Connector lines between bars\r
    processed.forEach((d, i) => {\r
      if (i < processed.length - 1) {\r
        const next = processed[i + 1]\r
        const x1 = safeX(d.label) + (x.bandwidth()||0)\r
        const x2 = safeX(next.label)\r
        const yVal = safeY(d.end)\r
        if(!Number.isFinite(x1)||!Number.isFinite(x2)||!Number.isFinite(yVal)) return\r
        g.append('line')\r
          .attr('x1', x1).attr('x2', x2)\r
          .attr('y1', yVal).attr('y2', yVal)\r
          .attr('stroke', 'var(--text-secondary)')\r
          .attr('stroke-width', 1)\r
          .attr('stroke-dasharray', '3,3')\r
          .attr('opacity', 0.5)\r
      }\r
    })\r
\r
    // Bars\r
    processed.forEach(d => {\r
      const barTop = Math.min(safeY(d.start), safeY(d.end))\r
      const barHeight = Math.abs(safeY(d.start) - safeY(d.end))\r
\r
      let color\r
      if (d.isTotal) {\r
        color = '#6366f1'\r
      } else if (d.value > 0) {\r
        color = '#10b981'\r
      } else {\r
        color = '#ef4444'\r
      }\r
\r
      const bw=x.bandwidth(); const bwSafe=Number.isFinite(bw)?bw:0\r
      g.append('rect')\r
        .attr('x', safeX(d.label))\r
        .attr('y', barTop)\r
        .attr('width', bwSafe)\r
        .attr('height', Math.max(Math.abs(barHeight)||0, 2))\r
        .attr('fill', color)\r
        .attr('rx', 3)\r
        .attr('opacity', 0.9)\r
\r
      // Value label\r
      const labelY = Number.isFinite(d.value)&&d.value >= 0\r
        ? barTop - 5\r
        : barTop + (Number.isFinite(barHeight)?barHeight:0) + 13\r
      g.append('text')\r
        .attr('x', safeX(d.label) + bwSafe / 2)\r
        .attr('y', labelY)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', color)\r
        .attr('font-size', '10px')\r
        .attr('font-weight', 700)\r
        .text(d.value >= 0 ? \`+\${d.value}\` : \`\${d.value}\`)\r
    })\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2).attr('y', 14)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '11px').attr('font-weight', 600)\r
      .text('Waterfall · Financial Bridge Chart')\r
\r
  }, [data])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};