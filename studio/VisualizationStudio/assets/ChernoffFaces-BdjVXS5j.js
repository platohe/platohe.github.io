var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'chernoff-faces',\r
  title: 'Chernoff Faces',\r
  desc: 'Chernoff Faces — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'ChernoffFaces',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","chernoff-faces"],\r
}\r
\r
export default function ChernoffFaces({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = [{"name":"Alice","face":{"eyeSize":0.7,"smile":0.8,"roundness":0.6,"eyeSep":0.5,"mouth":0.7}},{"name":"Bob","face":{"eyeSize":0.4,"smile":0.3,"roundness":0.8,"eyeSep":0.6,"mouth":0.4}},{"name":"Carol","face":{"eyeSize":0.9,"smile":0.6,"roundness":0.5,"eyeSep":0.4,"mouth":0.9}},{"name":"Dave","face":{"eyeSize":0.5,"smile":0.9,"roundness":0.7,"eyeSep":0.7,"mouth":0.3}},{"name":"Eve","face":{"eyeSize":0.6,"smile":0.4,"roundness":0.9,"eyeSep":0.3,"mouth":0.8}},{"name":"Frank","face":{"eyeSize":0.8,"smile":0.7,"roundness":0.4,"eyeSep":0.8,"mouth":0.5}}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = (Array.isArray(customData) && customData.length > 0 && customData[0]?.face) ? customData : DEFAULT_DATA\r
    const n = data.length\r
    const cols = Math.ceil(Math.sqrt(n))\r
    const rows = Math.ceil(n / cols)\r
    const cellW = IW / cols\r
    const cellH = IH / rows\r
    const faceR = Math.min(cellW, cellH) * 0.35\r
\r
    const drawFace = (cx, cy, r, f) => {\r
      // Head\r
      svg.append('circle').attr('cx', cx).attr('cy', cy).attr('r', r)\r
        .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
      // Eyes\r
      const eyeR = r * f.eyeSize * 0.25\r
      const eyeSepX = r * f.eyeSep * 0.3\r
      svg.append('circle').attr('cx', cx - eyeSepX).attr('cy', cy - r * 0.15).attr('r', eyeR)\r
        .attr('fill', colors[0]).attr('opacity', 0.8)\r
      svg.append('circle').attr('cx', cx + eyeSepX).attr('cy', cy - r * 0.15).attr('r', eyeR)\r
        .attr('fill', colors[0]).attr('opacity', 0.8)\r
\r
      // Smile (arc)\r
      const smileW = r * f.mouth * 0.5\r
      const smileH = r * f.smile * 0.2\r
      svg.append('path').attr('d', \`M\${cx - smileW},\${cy + r * 0.15} Q\${cx},\${cy + r * 0.15 + smileH} \${cx + smileW},\${cy + r * 0.15}\`)\r
        .attr('fill', 'none').attr('stroke', colors[0]).attr('stroke-width', 2)\r
\r
      // Eyebrows (roundness)\r
      const browH = r * f.roundness * 0.15\r
      svg.append('line').attr('x1', cx - eyeSepX - r * 0.2).attr('x2', cx - eyeSepX + r * 0.2)\r
        .attr('y1', cy - r * 0.15 - browH).attr('y2', cy - r * 0.15).attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
      svg.append('line').attr('x1', cx + eyeSepX - r * 0.2).attr('x2', cx + eyeSepX + r * 0.2)\r
        .attr('y1', cy - r * 0.15 - browH).attr('y2', cy - r * 0.15).attr('stroke', colors[0]).attr('stroke-width', 1.5)\r
    }\r
\r
    data.forEach((d, i) => {\r
      const col = i % cols\r
      const row = Math.floor(i / cols)\r
      const cx = M.left + col * cellW + cellW / 2\r
      const cy = M.top + row * cellH + cellH / 2 - 8\r
\r
      drawFace(cx, cy, faceR, d.face)\r
\r
      svg.append('text').attr('x', cx).attr('y', M.top + row * cellH + cellH - 8)\r
        .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '10px').text(d.name)\r
    })\r
\r
    // Feature labels\r
    const features = [\r
      { key: 'eyeSize', label: 'Eye Size' },\r
      { key: 'smile', label: 'Smile' },\r
      { key: 'roundness', label: 'Roundness' },\r
      { key: 'eyeSep', label: 'Eye Sep' },\r
      { key: 'mouth', label: 'Mouth' },\r
    ]\r
    const lgX = IW - 120\r
    features.forEach((f, i) => {\r
      svg.append('circle').attr('cx', lgX).attr('cy', M.top + 8 + i * 16).attr('r', 3).attr('fill', colors[0])\r
      svg.append('text').attr('x', lgX + 8).attr('y', M.top + 12 + i * 16)\r
        .attr('fill', 'var(--text-secondary)').attr('font-size', '9px').text(f.label)\r
    })\r
\r
    svg.append('text').attr('transform', \`translate(\${M.left + IW/2},\${M.top - 16})\`)\r
      .attr('text-anchor', 'middle').attr('fill', 'var(--text-primary)').attr('font-size', '14px').attr('font-weight', 'bold').text('Chernoff Faces')\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};