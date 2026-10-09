var e=`import { useEffect, useRef, useState } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'annotated-chart',\r
  title: 'Annotated Chart',\r
  desc: 'Annotated Chart — a annotation chart visualization',\r
  category: 'Annotation',\r
  component: 'AnnotatedChart',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["annotation","annotated-chart"],\r
}\r
\r
export default function AnnotatedChart({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
  const [annotations, setAnnotations] = useState(options.initialAnnotations || [])\r
  const [mode, setMode] = useState('view') // 'view', 'annotate', 'edit'\r
  const [selectedAnnotation, setSelectedAnnotation] = useState(null)\r
  const [dragStart, setDragStart] = useState(null)\r
\r
  const DEFAULT_DATA = [{"x":0,"y":59.017,"label":"Point 1"},{"x":10,"y":66.46,"label":"Point 2"},{"x":20,"y":80.721,"label":"Point 3"},{"x":30,"y":83.347,"label":"Point 4"},{"x":40,"y":77.612,"label":"Point 5"},{"x":50,"y":80.631,"label":"Point 6"},{"x":60,"y":70.985,"label":"Point 7"},{"x":70,"y":67.746,"label":"Point 8"},{"x":80,"y":61.523,"label":"Point 9"},{"x":90,"y":46.022,"label":"Point 10"},{"x":100,"y":34.829,"label":"Point 11"},{"x":110,"y":39.441,"label":"Point 12"},{"x":120,"y":36.282,"label":"Point 13"},{"x":130,"y":32.519,"label":"Point 14"},{"x":140,"y":37.177,"label":"Point 15"},{"x":150,"y":50.526,"label":"Point 16"},{"x":160,"y":63.213,"label":"Point 17"},{"x":170,"y":71.512,"label":"Point 18"},{"x":180,"y":69.899,"label":"Point 19"},{"x":190,"y":81.26,"label":"Point 20"},{"x":200,"y":87.294,"label":"Point 21"},{"x":210,"y":72.133,"label":"Point 22"},{"x":220,"y":73.508,"label":"Point 23"},{"x":230,"y":56.045,"label":"Point 24"},{"x":240,"y":49.646,"label":"Point 25"},{"x":250,"y":37.326,"label":"Point 26"},{"x":260,"y":32.09,"label":"Point 27"},{"x":270,"y":37.23,"label":"Point 28"},{"x":280,"y":33.476,"label":"Point 29"},{"x":290,"y":29.836,"label":"Point 30"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const x = d3.scaleLinear().domain(d3.extent(data, d => d.x)).range([0, IW])\r
    const y = d3.scaleLinear().domain([0, d3.max(data, d => d.y) * 1.1]).range([IH, 0])\r
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
      .attr('r', 4)\r
      .attr('fill', colors[0])\r
      .attr('opacity', 0.7)\r
\r
    // Render annotations\r
    const annotationLayer = g.append('g').attr('class', 'annotations')\r
\r
    annotations.forEach((ann, idx) => {\r
      const annX = x(ann.x)\r
      const annY = y(ann.y)\r
\r
      // Connector line\r
      annotationLayer.append('line')\r
        .attr('x1', annX)\r
        .attr('y1', annY)\r
        .attr('x2', annX + ann.dx)\r
        .attr('y2', annY + ann.dy)\r
        .attr('stroke', ann.color || colors[3])\r
        .attr('stroke-width', 1.5)\r
        .attr('stroke-dasharray', '4,4')\r
\r
      // Annotation box\r
      const boxWidth = 180\r
      const boxX = annX + ann.dx + (ann.dx > 0 ? 10 : -boxWidth - 10)\r
      const boxY = annY + ann.dy - 40\r
\r
      // Box background\r
      annotationLayer.append('rect')\r
        .attr('x', boxX)\r
        .attr('y', boxY)\r
        .attr('width', boxWidth)\r
        .attr('height', 60)\r
        .attr('rx', 6)\r
        .attr('fill', 'var(--bg-card)')\r
        .attr('stroke', ann.color || colors[3])\r
        .attr('stroke-width', 1.5)\r
        .style('cursor', mode === 'edit' ? 'move' : 'default')\r
        .on('click', (event) => {\r
          event.stopPropagation()\r
          if (mode === 'edit') setSelectedAnnotation(idx)\r
        })\r
        .call(mode === 'edit' ? d3.drag()\r
          .on('start', (event) => {\r
            setDragStart({ x: event.x, y: event.y, idx })\r
          })\r
          .on('drag', (event) => {\r
            if (!dragStart) return\r
            const newDx = ann.dx + event.x - dragStart.x\r
            const newDy = ann.dy + event.y - dragStart.y\r
            const updated = [...annotations]\r
            updated[idx] = { ...ann, dx: newDx, dy: newDy }\r
            setAnnotations(updated)\r
            setDragStart({ x: event.x, y: event.y, idx })\r
          })\r
          .on('end', () => setDragStart(null)) : null)\r
\r
      // Annotation text\r
      annotationLayer.append('text')\r
        .attr('x', boxX + 10)\r
        .attr('y', boxY + 20)\r
        .attr('font-size', '11px')\r
        .attr('fill', 'var(--text)')\r
        .attr('font-weight', 600)\r
        .text(ann.title || 'Annotation')\r
\r
      annotationLayer.append('text')\r
        .attr('x', boxX + 10)\r
        .attr('y', boxY + 40)\r
        .attr('font-size', '10px')\r
        .attr('fill', 'var(--text-secondary)')\r
        .text(ann.text || '')\r
\r
      // Delete button (in edit mode)\r
      if (mode === 'edit') {\r
        annotationLayer.append('circle')\r
          .attr('cx', boxX + boxWidth - 12)\r
          .attr('cy', boxY + 12)\r
          .attr('r', 10)\r
          .attr('fill', 'var(--destructive)')\r
          .attr('opacity', 0.8)\r
          .style('cursor', 'pointer')\r
          .on('click', (event) => {\r
            event.stopPropagation()\r
            const updated = annotations.filter((_, i) => i !== idx)\r
            setAnnotations(updated)\r
          })\r
\r
        annotationLayer.append('text')\r
          .attr('x', boxX + boxWidth - 12)\r
          .attr('y', boxY + 16)\r
          .attr('text-anchor', 'middle')\r
          .attr('font-size', '12px')\r
          .attr('fill', 'white')\r
          .attr('pointer-events', 'none')\r
          .text('×')\r
      }\r
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
    // Mode toolbar\r
    const toolbar = g.append('g')\r
      .attr('transform', \`translate(10, \${IH + 30})\`);\r
\r
    ['view', 'annotate', 'edit'].forEach((m, i) => {\r
      const btn = toolbar.append('g')\r
        .attr('transform', \`translate(\${i * 90}, 0)\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => setMode(m))\r
\r
      btn.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 80).attr('height', 28)\r
        .attr('rx', 4)\r
        .attr('fill', mode === m ? colors[0] : 'var(--border)')\r
        .attr('opacity', mode === m ? 1 : 0.5)\r
\r
      btn.append('text')\r
        .attr('x', 40).attr('y', 19)\r
        .attr('text-anchor', 'middle')\r
        .attr('font-size', '11px')\r
        .attr('fill', mode === m ? 'white' : 'var(--text)')\r
        .attr('font-weight', mode === m ? 600 : 400)\r
        .text(m.charAt(0).toUpperCase() + m.slice(1))\r
    })\r
\r
    // Add annotation mode: click on chart to add\r
    if (mode === 'annotate') {\r
      g.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', IW).attr('height', IH)\r
        .attr('fill', 'transparent')\r
        .style('cursor', 'crosshair')\r
        .on('click', (event) => {\r
          const [x, y] = d3.pointer(event)\r
          if (x < 0 || x > IW || y < 0 || y > IH) return\r
          \r
          const dataX = x.invert(x)\r
          const dataY = y.invert(y)\r
          \r
          const newAnnotation = {\r
            x: dataX,\r
            y: dataY,\r
            dx: 60,\r
            dy: -80,\r
            title: 'New Annotation',\r
            text: 'Click to edit',\r
            color: colors[annotations.length % colors.length]\r
          }\r
          setAnnotations([...annotations, newAnnotation])\r
          setMode('edit')\r
        })\r
    }\r
\r
    // Clear all button\r
    if (annotations.length > 0) {\r
      const clearBtn = g.append('g')\r
        .attr('transform', \`translate(\${IW - 100}, \${IH + 30})\`)\r
        .style('cursor', 'pointer')\r
        .on('click', () => setAnnotations([]))\r
\r
      clearBtn.append('rect')\r
        .attr('x', 0).attr('y', 0)\r
        .attr('width', 80).attr('height', 28)\r
        .attr('rx', 4)\r
        .attr('fill', 'var(--destructive)')\r
        .attr('opacity', 0.8)\r
\r
      g.append('text')\r
        .attr('x', 40).attr('y', 19)\r
        .attr('text-anchor', 'middle')\r
        .attr('fill', 'white')\r
        .attr('font-size', '11px')\r
        .attr('font-weight', 600)\r
        .text('Clear All')\r
    }\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Annotation Layer')\r
\r
    // Instructions\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 55)\r
      .attr('text-anchor', 'middle')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(mode === 'annotate' ? 'Click on chart to add annotation' : \r
          mode === 'edit' ? 'Drag annotations to reposition, click to edit, click × to delete' : \r
          'Click toolbar to change mode')\r
\r
  }, [customData, annotations, mode, dragStart])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};