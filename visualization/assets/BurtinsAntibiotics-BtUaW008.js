var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'burtins-antibiotics',\r
  title: 'Burtins Antibiotics',\r
  desc: 'Burtins Antibiotics — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'BurtinsAntibiotics',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","burtins-antibiotics"],\r
}\r
\r
export default function BurtinsAntibiotics({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"bacteria":"Aerobacter aerogenes","penicillin":870,"streptomycin":1,"neomycin":1.6,"gram":"negative"},{"bacteria":"Brucella abortus","penicillin":1,"streptomycin":2,"neomycin":0.02,"gram":"negative"},{"bacteria":"Escherichia coli","penicillin":100,"streptomycin":0.4,"neomycin":0.1,"gram":"negative"},{"bacteria":"Klebsiella pneumoniae","penicillin":850,"streptomycin":1.2,"neomycin":1,"gram":"negative"},{"bacteria":"Pseudomonas aeruginosa","penicillin":850,"streptomycin":2,"neomycin":0.4,"gram":"negative"},{"bacteria":"Salmonella typhosa","penicillin":1,"streptomycin":0.4,"neomycin":0.008,"gram":"negative"},{"bacteria":"Bacillus anthracis","penicillin":0.001,"streptomycin":0.01,"neomycin":0.005,"gram":"positive"},{"bacteria":"Corynebacterium diphtheriae","penicillin":0.005,"streptomycin":2,"neomycin":0.007,"gram":"positive"},{"bacteria":"Diplococcus pneumoniae","penicillin":0.005,"streptomycin":11,"neomycin":10,"gram":"positive"},{"bacteria":"Staphylococcus albus","penicillin":0.007,"streptomycin":0.1,"neomycin":0.001,"gram":"positive"},{"bacteria":"Staphylococcus aureus","penicillin":0.03,"streptomycin":0.03,"neomycin":0.001,"gram":"positive"},{"bacteria":"Streptococcus hemolyticus","penicillin":0.001,"streptomycin":14,"neomycin":10,"gram":"positive"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0)\r
      ? customData\r
      : DEFAULT_DATA\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
    const innerRadius = 35\r
    const outerRadius = Math.min(width, height) / 2 - 25\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Sort by gram stain\r
    const sorted = [...data].sort((a, b) => (a.gram || '').localeCompare(b.gram || ''))\r
    const n = sorted.length\r
\r
    // Gram background arcs\r
    const gramNegativeCount = sorted.filter(d => d.gram === 'negative').length\r
    const anglePerItem = (2 * Math.PI) / n\r
\r
    const negAngle = gramNegativeCount * anglePerItem\r
    const arcGen = d3.arc()\r
\r
    // Gram negative background\r
    g.append('path')\r
      .attr('d', arcGen({\r
        innerRadius,\r
        outerRadius: outerRadius + 12,\r
        startAngle: 0,\r
        endAngle: negAngle,\r
      }))\r
      .attr('fill', 'rgba(239, 68, 68, 0.08)')\r
      .attr('stroke', 'rgba(239, 68, 68, 0.2)')\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Gram positive background\r
    g.append('path')\r
      .attr('d', arcGen({\r
        innerRadius,\r
        outerRadius: outerRadius + 12,\r
        startAngle: negAngle,\r
        endAngle: 2 * Math.PI,\r
      }))\r
      .attr('fill', 'rgba(59, 130, 246, 0.08)')\r
      .attr('stroke', 'rgba(59, 130, 246, 0.2)')\r
      .attr('stroke-dasharray', '3,3')\r
\r
    // Radial log scale (lower MIC = more effective = larger bar/radius outwards)\r
    const minVal = 0.001\r
    const maxVal = 1000\r
    const rScale = d3.scaleLog()\r
      .domain([minVal, maxVal])\r
      .range([outerRadius, innerRadius]) // Inverted so lower MIC is towards outside\r
\r
    // Grid circles\r
    const gridTicks = [0.001, 0.01, 0.1, 1, 10, 100, 1000]\r
    gridTicks.forEach((tick) => {\r
      const r = rScale(tick)\r
      g.append('circle')\r
        .attr('r', r)\r
        .attr('fill', 'none')\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.4)\r
        .attr('stroke-dasharray', '2,2')\r
\r
      g.append('text')\r
        .attr('x', 3)\r
        .attr('y', -r)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '7px')\r
        .attr('font-family', 'var(--font-mono)')\r
        .text(tick)\r
    })\r
\r
    // Spokes and Bars\r
    sorted.forEach((d, i) => {\r
      const baseAngle = i * anglePerItem - Math.PI / 2\r
      const bisectAngle = baseAngle + anglePerItem / 2\r
\r
      // Spoke line\r
      const spokeX = Math.cos(baseAngle) * (outerRadius + 8)\r
      const spokeY = Math.sin(baseAngle) * (outerRadius + 8)\r
      g.append('line')\r
        .attr('x1', Math.cos(baseAngle) * innerRadius)\r
        .attr('y1', Math.sin(baseAngle) * innerRadius)\r
        .attr('x2', spokeX)\r
        .attr('y2', spokeY)\r
        .attr('stroke', 'var(--border)')\r
        .attr('stroke-opacity', 0.3)\r
\r
      // Antibiotic values: Penicillin, Streptomycin, Neomycin\r
      const drugs = [\r
        { name: 'Penicillin', val: Math.max(minVal, Math.min(maxVal, d.penicillin || 1)), color: '#ef4444' },\r
        { name: 'Streptomycin', val: Math.max(minVal, Math.min(maxVal, d.streptomycin || 1)), color: '#f59e0b' },\r
        { name: 'Neomycin', val: Math.max(minVal, Math.min(maxVal, d.neomycin || 1)), color: '#10b981' },\r
      ]\r
\r
      drugs.forEach((drug, di) => {\r
        const a = baseAngle + (di + 0.8) * (anglePerItem / 4)\r
        const rad = rScale(drug.val)\r
        const px = Math.cos(a) * rad\r
        const py = Math.sin(a) * rad\r
\r
        // Radial line from center\r
        g.append('line')\r
          .attr('x1', Math.cos(a) * innerRadius)\r
          .attr('y1', Math.sin(a) * innerRadius)\r
          .attr('x2', px)\r
          .attr('y2', py)\r
          .attr('stroke', drug.color)\r
          .attr('stroke-width', 2.5)\r
          .attr('stroke-linecap', 'round')\r
\r
        g.append('circle')\r
          .attr('cx', px)\r
          .attr('cy', py)\r
          .attr('r', 2.5)\r
          .attr('fill', drug.color)\r
      })\r
\r
      // Bacteria label\r
      const labelRad = outerRadius + 14\r
      const lx = Math.cos(bisectAngle) * labelRad\r
      const ly = Math.sin(bisectAngle) * labelRad\r
      const isRight = Math.cos(bisectAngle) >= 0\r
\r
      g.append('text')\r
        .attr('x', lx)\r
        .attr('y', ly)\r
        .attr('text-anchor', isRight ? 'start' : 'end')\r
        .attr('dominant-baseline', 'middle')\r
        .attr('fill', d.gram === 'negative' ? '#f87171' : '#60a5fa')\r
        .attr('font-size', '6.5px')\r
        .attr('font-weight', '500')\r
        .text(d.bacteria.length > 15 ? d.bacteria.slice(0, 14) + '…' : d.bacteria)\r
    })\r
\r
    // Legend at top\r
    const legG = svg.append('g').attr('transform', 'translate(12, 16)')\r
    const legendItems = [\r
      { label: 'Penicillin', color: '#ef4444' },\r
      { label: 'Streptomycin', color: '#f59e0b' },\r
      { label: 'Neomycin', color: '#10b981' },\r
    ]\r
    legendItems.forEach((item, idx) => {\r
      legG.append('circle')\r
        .attr('cx', idx * 75 + 4)\r
        .attr('cy', 0)\r
        .attr('r', 3.5)\r
        .attr('fill', item.color)\r
\r
      legG.append('text')\r
        .attr('x', idx * 75 + 12)\r
        .attr('y', 3)\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '8.5px')\r
        .text(item.label)\r
    })\r
\r
    // Gram label\r
    svg.append('text')\r
      .attr('x', W - 12)\r
      .attr('y', 16)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '8px')\r
      .attr('opacity', 0.8)\r
      .text('Outer: Gram- / Gram+ (Log MIC)')\r
  }, [customData])\r
\r
  return (\r
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>\r
      <svg ref={ref} viewBox={\`0 0 \${W} \${H}\`} style={{ width: '100%', height: '100%', maxWidth: '500px' }} />\r
    </div>\r
  )\r
}\r
`;export{e as default};