var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
const DEFAULT_SHAPES = [\r
  { name: 'Circle', d: 'M150,150 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0' },\r
  { name: 'Square', d: 'M100,100 L200,100 L200,200 L100,200 Z' },\r
  { name: 'Triangle', d: 'M150,100 L200,200 L100,200 Z' },\r
  { name: 'Star', d: 'M150,100 L160,140 L200,140 L170,165 L180,200 L150,180 L120,200 L130,165 L100,140 L140,140 Z' },\r
]\r
\r
const DEFAULT_CONFIG = {\r
  shapes: DEFAULT_SHAPES,\r
  duration: 1800,\r
  radius: 95,\r
}\r
\r
export const meta = {\r
  id: 'shape-tween',\r
  title: 'Shape Tween',\r
  desc: 'Shape Tween — a animation chart visualization',\r
  category: 'Animation',\r
  component: 'ShapeTween',\r
  complexity: 'beginner',\r
  interactivity: ["animate"],\r
  d3Api: ["d3-scale"],\r
  tags: ["animation","shape-tween"],\r
}\r
\r
export default function ShapeTween({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const config = (customData && typeof customData === 'object') ? { ...DEFAULT_CONFIG, ...customData } : DEFAULT_CONFIG\r
    const shapes = (Array.isArray(config.shapes) && config.shapes.length > 0) ? config.shapes : DEFAULT_SHAPES\r
    const radius = config.radius || 95\r
    const N = 180\r
\r
    const width = W\r
    const height = H\r
    const cx = width / 2\r
    const cy = height / 2 + 10\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${cx},\${cy})\`)\r
\r
    // Generate shape points from SVG path data, recentered to origin\r
    function getShapePoints(pathStr) {\r
      const tmp = document.createElementNS('http://www.w3.org/2000/svg', 'path')\r
      tmp.setAttribute('d', pathStr)\r
      let pts\r
      if (typeof tmp.getTotalLength !== 'function') {\r
        // jsdom fallback: parse absolute coords from the path string\r
        const nums = (pathStr.match(/-?\\d+(?:\\.\\d+)?/g) || []).map(Number)\r
        pts = []\r
        for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]])\r
        while (pts.length < N) pts.push(pts[pts.length - 1] || [0, 0])\r
        pts = pts.slice(0, N)\r
      } else {\r
        const len = tmp.getTotalLength()\r
        pts = []\r
        for (let i = 0; i < N; i++) {\r
          const p = tmp.getPointAtLength((i / N) * len)\r
          pts.push([p.x, p.y])\r
        }\r
      }\r
      // Recenter around 0,0 — all DEFAULT_SHAPES are defined around 150,150\r
      // Compute bbox center for robustness with custom shapes\r
      let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity\r
      for (const [x, y] of pts) { if (x < minX) minX = x; if (x > maxX) maxX = x; if (y < minY) minY = y; if (y > maxY) maxY = y }\r
      const cx0 = (minX + maxX) / 2\r
      const cy0 = (minY + maxY) / 2\r
      return pts.map(([x, y]) => [x - cx0, y - cy0])\r
    }\r
\r
    let currentIdx = 0\r
    let currentPts = getShapePoints(shapes[0].d)\r
\r
    const shapeColors = ['#38bdf8', '#f59e0b', '#10b981', '#ec4899']\r
\r
    function renderShape(idx) {\r
      const shape = shapes[idx % shapes.length]\r
      const targetPts = getShapePoints(shape.d)\r
      const color = shapeColors[idx % shapeColors.length]\r
\r
      const pathEl = g.selectAll('path').data([currentPts]).join('path')\r
        .attr('d', d => 'M' + d.map(p => p.join(',')).join('L') + 'Z')\r
        .attr('fill', color)\r
        .attr('fill-opacity', 0.25)\r
        .attr('stroke', color)\r
        .attr('stroke-width', 2.5)\r
\r
      // Label\r
      g.selectAll('.shape-label').remove()\r
      g.append('text').attr('class', 'shape-label')\r
        .attr('x', 0).attr('y', radius + 20)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'var(--text-primary)')\r
        .attr('font-size', '12px').attr('font-weight', '700')\r
        .text(shape.name)\r
    }\r
\r
    renderShape(currentIdx)\r
\r
    // Auto-transition\r
    let timer = null\r
    let active = true\r
\r
    function transitionToNext() {\r
      if (!active) return\r
      const nextIdx = (currentIdx + 1) % shapes.length\r
      const nextPts = getShapePoints(shapes[nextIdx].d)\r
      const color = shapeColors[nextIdx % shapeColors.length]\r
\r
      const interpolator = (t) => {\r
        const pts = []\r
        for (let i = 0; i < N; i++) {\r
          const x = currentPts[i][0] * (1 - t) + nextPts[i][0] * t\r
          const y = currentPts[i][1] * (1 - t) + nextPts[i][1] * t\r
          pts.push([x, y])\r
        }\r
        return 'M' + pts.map(p => p.join(',')).join('L') + 'Z'\r
      }\r
\r
      g.selectAll('path')\r
        .transition()\r
        .duration(config.duration || 1800)\r
        .ease(d3.easeCubicInOut)\r
        .attrTween('d', () => interpolator)\r
        .attr('stroke', color)\r
        .attr('fill', color)\r
\r
      g.selectAll('.shape-label').transition()\r
        .duration(config.duration || 1800)\r
        .text(shapes[nextIdx].name)\r
\r
      timer = setTimeout(() => {\r
        currentIdx = nextIdx\r
        currentPts = nextPts\r
        if (active) transitionToNext()\r
      }, (config.duration || 1800) + 800)\r
    }\r
\r
    timer = setTimeout(transitionToNext, 1000)\r
\r
    return () => {\r
      active = false\r
      if (timer) clearTimeout(timer)\r
    }\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}\r
`;export{e as default};