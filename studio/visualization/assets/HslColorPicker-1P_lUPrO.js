var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H } from './utils'\r
\r
export const meta = {\r
  id: 'hsl-color-picker',\r
  title: 'Hsl Color Picker',\r
  desc: 'Hsl Color Picker — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'HslColorPicker',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","hsl-color-picker"],\r
}\r
\r
export default function HslColorPicker({ data: customData }) {\r
  const ref = useRef(null)\r
  const [color, setColor] = useState({ h: 200, s: 70, l: 50 })\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const width = 380, height = 265\r
    const margin = { top: 20, right: 20, bottom: 60, left: 60 }\r
    const innerWidth = width - margin.left - margin.right\r
    const innerHeight = height - margin.top - margin.bottom\r
\r
    const g = svg.append('g')\r
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`)\r
\r
    // Convert HSL to RGB for display\r
    const hslColor = d3.hsl(color.h, color.s / 100, color.l / 100)\r
    const rgbColor = hslColor.formatRgb()\r
\r
    // Color preview\r
    const colorPreview = g.append('rect')\r
      .attr('x', innerWidth / 2 - 40)\r
      .attr('y', 10)\r
      .attr('width', 80)\r
      .attr('height', 80)\r
      .attr('fill', rgbColor)\r
      .attr('rx', 8)\r
      .attr('stroke', '#ccc')\r
      .attr('stroke-width', 2)\r
\r
    // Color text\r
    const colorText = g.append('text')\r
      .attr('x', innerWidth / 2)\r
      .attr('y', 110)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 'bold')\r
      .text(\`hsl(\${color.h}, \${color.s}%, \${color.l}%)\`)\r
\r
    // Sliders\r
    const sliders = [\r
      { channel: 'h', label: 'Hue', min: 0, max: 360, y: 130 },\r
      { channel: 's', label: 'Saturation', min: 0, max: 100, y: 170 },\r
      { channel: 'l', label: 'Lightness', min: 0, max: 100, y: 210 }\r
    ]\r
\r
    sliders.forEach(({ channel, label, min, max, y }) => {\r
      // Label\r
      g.append('text')\r
        .attr('x', -10)\r
        .attr('y', y + 4)\r
        .attr('text-anchor', 'end')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '12px')\r
        .text(label)\r
\r
      // Track\r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', y)\r
        .attr('width', innerWidth)\r
        .attr('height', 8)\r
        .attr('fill', '#e5e7eb')\r
        .attr('rx', 4)\r
\r
      // Gradient track\r
      const gradient = g.append('defs')\r
        .append('linearGradient')\r
        .attr('id', \`\${channel}Gradient\`)\r
        .attr('x1', '0%').attr('x2', '100%')\r
\r
      const steps = 10\r
      for (let i = 0; i <= steps; i++) {\r
        const value = min + (max - min) * (i / steps)\r
        let tempColor\r
        if (channel === 'h') {\r
          tempColor = d3.hsl(value, color.s / 100, color.l / 100)\r
        } else if (channel === 's') {\r
          tempColor = d3.hsl(color.h, value / 100, color.l / 100)\r
        } else {\r
          tempColor = d3.hsl(color.h, color.s / 100, value / 100)\r
        }\r
        gradient.append('stop')\r
          .attr('offset', \`\${(i / steps) * 100}%\`)\r
          .attr('stop-color', tempColor.formatRgb())\r
      }\r
\r
      g.append('rect')\r
        .attr('x', 0)\r
        .attr('y', y)\r
        .attr('width', innerWidth)\r
        .attr('height', 8)\r
        .attr('fill', \`url(#\${channel}Gradient)\`)\r
        .attr('rx', 4)\r
\r
      // Slider handle\r
      const handleX = ((color[channel] - min) / (max - min)) * innerWidth\r
      const handle = g.append('circle')\r
        .attr('cx', handleX)\r
        .attr('cy', y + 4)\r
        .attr('r', 10)\r
        .attr('fill', '#6366f1')\r
        .attr('stroke', 'white')\r
        .attr('stroke-width', 2)\r
        .attr('cursor', 'pointer')\r
        .call(d3.drag()\r
          .on('drag', (event) => {\r
            const newX = Math.max(0, Math.min(innerWidth, event.x))\r
            const newValue = Math.round(min + (newX / innerWidth) * (max - min))\r
            setColor(prev => ({ ...prev, [channel]: newValue }))\r
          })\r
        )\r
\r
      // Value text\r
      g.append('text')\r
        .attr('x', innerWidth + 10)\r
        .attr('y', y + 4)\r
        .attr('text-anchor', 'start')\r
        .attr('fill', 'var(--text-secondary)')\r
        .attr('font-size', '11px')\r
        .text(\`\${color[channel]}\${channel === 'h' ? '°' : '%'}\`)\r
    })\r
\r
  }, [color])\r
\r
  // Update D3 visualization when color state changes\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    const hslColor = d3.hsl(color.h, color.s / 100, color.l / 100)\r
    const rgbColor = hslColor.formatRgb()\r
\r
    const preview = svg.select('rect')\r
    const text = svg.selectAll('text').filter((d, i, nodes) => \r
      d3.select(nodes[i]).text().includes('hsl')\r
    )\r
\r
    preview.attr('fill', rgbColor)\r
    text.text(\`hsl(\${color.h}, \${color.s}%, \${color.l}%)\`)\r
\r
    // Update slider positions and gradients\r
    const sliders = [\r
      { channel: 'h', min: 0, max: 360 },\r
      { channel: 's', min: 0, max: 100 },\r
      { channel: 'l', min: 0, max: 100 }\r
    ]\r
    const innerWidth = 300\r
\r
    sliders.forEach(({ channel, min, max }, i) => {\r
      const handleX = ((color[channel] - min) / (max - min)) * innerWidth\r
      svg.selectAll('circle')\r
        .filter((d, j, nodes) => j === i)\r
        .attr('cx', handleX)\r
\r
      // Update gradient\r
      const gradient = svg.select(\`#\${channel}Gradient\`)\r
      const steps = 10\r
      gradient.selectAll('stop').attr('stop-color', (d, j) => {\r
        const value = min + (max - min) * (j / steps)\r
        let tempColor\r
        if (channel === 'h') {\r
          tempColor = d3.hsl(value, color.s / 100, color.l / 100)\r
        } else if (channel === 's') {\r
          tempColor = d3.hsl(color.h, value / 100, color.l / 100)\r
        } else {\r
          tempColor = d3.hsl(color.h, color.s / 100, value / 100)\r
        }\r
        return tempColor.formatRgb()\r
      })\r
\r
      // Update value text\r
      svg.selectAll('text')\r
        .filter((d, j, nodes) => {\r
          const text = d3.select(nodes[j]).text()\r
          return (text.includes('°') || text.includes('%')) && !text.includes('hsl')\r
        })\r
        .filter((d, j, nodes) => j === i + 1)\r
        .text(\`\${color[channel]}\${channel === 'h' ? '°' : '%'}\`)\r
    })\r
  }, [color])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox="0 0 400 300" />\r
}`;export{e as default};