var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH } from './utils'\r
\r
export const meta = {\r
  id: 'andrews-curves',\r
  title: 'Andrews Curves',\r
  desc: 'Andrews Curves — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'AndrewsCurves',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","andrews-curves"],\r
}\r
\r
export default function AndrewsCurves({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"class":"Setosa","values":[5.1,3.5,1.4,0.2]},{"class":"Setosa","values":[4.9,3,1.4,0.2]},{"class":"Setosa","values":[4.7,3.2,1.3,0.2]},{"class":"Setosa","values":[5,3.6,1.4,0.3]},{"class":"Versicolor","values":[7,3.2,4.7,1.4]},{"class":"Versicolor","values":[6.4,3.2,4.5,1.5]},{"class":"Versicolor","values":[6.9,3.1,4.9,1.5]},{"class":"Versicolor","values":[5.5,2.3,4,1.3]},{"class":"Virginica","values":[6.3,3.3,6,2.5]},{"class":"Virginica","values":[5.8,2.7,5.1,1.9]},{"class":"Virginica","values":[7.1,3,5.9,2.1]},{"class":"Virginica","values":[6.7,3.3,5.7,2.5]}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    // Fourier function for Andrews curves\r
    function f(t, values) {\r
      let res = (values[0] || 0) / Math.SQRT2\r
      for (let i = 1; i < values.length; i++) {\r
        const k = Math.floor((i + 1) / 2)\r
        if (i % 2 === 1) {\r
          res += (values[i] || 0) * Math.sin(k * t)\r
        } else {\r
          res += (values[i] || 0) * Math.cos(k * t)\r
        }\r
      }\r
      return res\r
    }\r
\r
    const tSteps = 80\r
    const tDomain = [-Math.PI, Math.PI]\r
\r
    const allPoints = data.map((d) => {\r
      const pts = []\r
      for (let i = 0; i <= tSteps; i++) {\r
        const t = tDomain[0] + (i / tSteps) * (tDomain[1] - tDomain[0])\r
        const yVal = f(t, d.values || [])\r
        pts.push({ t, y: yVal })\r
      }\r
      return { class: d.class, pts }\r
    })\r
\r
    const x = d3.scaleLinear()\r
      .domain(tDomain)\r
      .range([0, IW])\r
\r
    const allY = allPoints.flatMap(d => d.pts.map(p => p.y))\r
    const yMin = d3.min(allY) || -10\r
    const yMax = d3.max(allY) || 10\r
    const y = d3.scaleLinear()\r
      .domain([yMin - 1, yMax + 1])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(5).tickSize(-IW).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(5).tickFormat(d => d === -Math.PI ? '-π' : d === 0 ? '0' : d === Math.PI ? 'π' : d.toFixed(1)).tickSize(-IH).tickPadding(6))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '7px'))\r
\r
    const classColors = {\r
      Setosa: '#ef4444',\r
      Versicolor: '#10b981',\r
      Virginica: '#3b82f6',\r
    }\r
\r
    allPoints.forEach((curve) => {\r
      g.append('path')\r
        .datum(curve.pts)\r
        .attr('fill', 'none')\r
        .attr('stroke', classColors[curve.class] || '#6366f1')\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-opacity', 0.75)\r
        .attr('d', d3.line().x(d => x(d.t)).y(d => y(d.y)).curve(d3.curveBasis))\r
    })\r
\r
    // Legend\r
    const uniqueClasses = [...new Set(data.map(d => d.class))]\r
    const legG = svg.append('g').attr('transform', \`translate(\${W - 160}, 14)\`)\r
    uniqueClasses.forEach((cls, idx) => {\r
      legG.append('circle')\r
        .attr('cx', idx * 52 + 3)\r
        .attr('cy', 0)\r
        .attr('r', 3)\r
        .attr('fill', classColors[cls] || '#6366f1')\r
\r
      legG.append('text')\r
        .attr('x', idx * 52 + 9)\r
        .attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .text(cls)\r
    })\r
\r
    // Header\r
    svg.append('text')\r
      .attr('x', 14)\r
      .attr('y', 16)\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '8.5px')\r
      .attr('font-weight', '600')\r
      .text('Andrews Curves (Fourier Spectral Clustering)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};