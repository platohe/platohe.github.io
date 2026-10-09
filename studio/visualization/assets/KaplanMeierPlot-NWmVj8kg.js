var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'kaplan-meier-plot',\r
  title: 'Kaplan Meier Plot',\r
  desc: 'Kaplan Meier Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'KaplanMeierPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","kaplan-meier-plot"],\r
}\r
\r
export default function KaplanMeierPlot({ data: customData }) {\r
  const ref = useRef(null)\r
\r
  const DEFAULT_DATA = {\r
    groups: [\r
      {\r
        name: 'Treatment A',\r
        color: colors[0],\r
        data: [\r
          { time: 0, n_risk: 100, n_event: 0, n_censor: 0 },\r
          { time: 30, n_risk: 100, n_event: 5, n_censor: 2 },\r
          { time: 60, n_risk: 93, n_event: 8, n_censor: 3 },\r
          { time: 90, n_risk: 82, n_event: 12, n_censor: 5 },\r
          { time: 120, n_risk: 65, n_event: 15, n_censor: 8 },\r
          { time: 150, n_risk: 42, n_event: 10, n_censor: 6 },\r
          { time: 180, n_risk: 26, n_event: 8, n_censor: 4 },\r
          { time: 210, n_risk: 14, n_event: 5, n_censor: 3 },\r
          { time: 240, n_risk: 6, n_event: 3, n_censor: 2 },\r
          { time: 270, n_risk: 1, n_event: 1, n_censor: 0 }\r
        ]\r
      },\r
      {\r
        name: 'Treatment B',\r
        color: colors[1],\r
        data: [\r
          { time: 0, n_risk: 100, n_event: 0, n_censor: 0 },\r
          { time: 30, n_risk: 100, n_event: 8, n_censor: 3 },\r
          { time: 60, n_risk: 89, n_event: 12, n_censor: 4 },\r
          { time: 90, n_risk: 73, n_event: 18, n_censor: 6 },\r
          { time: 120, n_risk: 49, n_event: 20, n_censor: 10 },\r
          { time: 150, n_risk: 19, n_event: 12, n_censor: 4 },\r
          { time: 180, n_risk: 3, n_event: 3, n_censor: 0 }\r
        ]\r
      },\r
      {\r
        name: 'Control',\r
        color: colors[2],\r
        data: [\r
          { time: 0, n_risk: 100, n_event: 0, n_censor: 0 },\r
          { time: 30, n_risk: 100, n_event: 12, n_censor: 4 },\r
          { time: 60, n_risk: 84, n_event: 20, n_censor: 5 },\r
          { time: 90, n_risk: 59, n_event: 25, n_censor: 8 },\r
          { time: 120, n_risk: 26, n_event: 18, n_censor: 5 },\r
          { time: 150, n_risk: 3, n_event: 3, n_censor: 0 }\r
        ]\r
      }\r
    ]\r
  }\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const input = (customData && customData.groups) ? customData : DEFAULT_DATA\r
    const groups = input.groups\r
\r
    // Compute Kaplan-Meier survival curves for each group\r
    const survivalCurves = groups.map(group => {\r
      let survival = 1.0\r
      let n_risk = group.data[0].n_risk\r
      const curve = [{ time: 0, survival: 1.0, n_risk, ci_lower: 1.0, ci_upper: 1.0 }]\r
\r
      group.data.slice(1).forEach(row => {\r
        const { time, n_event, n_censor } = row\r
        if (n_risk > 0 && n_event > 0) {\r
          survival *= (n_risk - n_event) / n_risk\r
          // Greenwood's formula for confidence interval\r
          const variance = survival * survival * (1 / (n_risk - n_event) - 1 / n_risk) // simplified\r
          const se = Math.sqrt(variance)\r
          const z = 1.96\r
          curve.push({\r
            time,\r
            survival: Math.max(0, survival),\r
            n_risk,\r
            ci_lower: Math.max(0, survival - z * se),\r
            ci_upper: Math.min(1, survival + z * se)\r
          })\r
        } else if (n_risk > 0) {\r
          curve.push({ time, survival, n_risk, ci_lower: survival, ci_upper: survival })\r
        }\r
        n_risk = row.n_risk - row.n_censor\r
      })\r
\r
      return { ...group, curve }\r
    })\r
\r
    // Find max time across all groups\r
    const maxTime = d3.max(groups.flatMap(g => g.data.map(d => d.time)))\r
    const minSurvival = 0\r
\r
    const x = d3.scaleLinear()\r
      .domain([0, maxTime * 1.05])\r
      .range([M.left, M.left + IW])\r
\r
    const y = d3.scaleLinear()\r
      .domain([minSurvival, 1.05])\r
      .range([M.top + IH, M.top])\r
\r
    const g = svg.append('g')\r
\r
    // Grid\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${M.top + IH})\`)\r
      .call(d3.axisBottom(x).ticks(8).tickSize(-IH).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px'))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(\${M.left},0)\`)\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickPadding(8))\r
      .call(gr => gr.select('.domain').remove())\r
      .call(gr => gr.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-dasharray', '2,2').attr('stroke-opacity', 0.4))\r
      .call(gr => gr.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '8px').attr('font-weight', 500)\r
        .text(d => \`\${Math.round(d * 100)}%\`))\r
\r
    // Survival curves\r
    survivalCurves.forEach((group, i) => {\r
      const { curve, color, name } = group\r
\r
      // Confidence interval area\r
      if (curve.length > 1) {\r
        const ciArea = d3.area()\r
          .curve(d3.curveStepAfter)\r
          .x(d => x(d.time))\r
          .y0(d => y(d.ci_upper))\r
          .y1(d => y(d.ci_lower))\r
\r
        g.append('path')\r
          .datum(curve)\r
          .attr('d', ciArea)\r
          .attr('fill', color)\r
          .attr('fill-opacity', 0.15)\r
          .attr('stroke', 'none')\r
      }\r
\r
      // Survival step line\r
      const line = d3.line()\r
        .curve(d3.curveStepAfter)\r
        .x(d => x(d.time))\r
        .y(d => y(d.survival))\r
\r
      g.append('path')\r
        .datum(curve)\r
        .attr('d', line)\r
        .attr('fill', 'none')\r
        .attr('stroke', color)\r
        .attr('stroke-width', 2.5)\r
        .attr('stroke-linecap', 'round')\r
        .attr('stroke-linejoin', 'round')\r
\r
      // Censoring marks (vertical ticks)\r
      group.data.forEach(row => {\r
        if (row.n_censor > 0 && row.time > 0) {\r
          const surv = curve.find(c => c.time === row.time)?.survival || 1\r
          for (let c = 0; c < row.n_censor; c++) {\r
            const offset = (c - (row.n_censor - 1) / 2) * 3\r
            g.append('line')\r
              .attr('x1', x(row.time) + offset)\r
              .attr('x2', x(row.time) + offset)\r
              .attr('y1', y(surv) - 4)\r
              .attr('y2', y(surv) + 4)\r
              .attr('stroke', color)\r
              .attr('stroke-width', 1.5)\r
              .attr('stroke-linecap', 'round')\r
          }\r
        }\r
      })\r
\r
      // Group label at end of curve\r
      const lastPoint = curve[curve.length - 1]\r
      g.append('text')\r
        .attr('x', x(lastPoint.time) + 8)\r
        .attr('y', y(lastPoint.survival) + 4)\r
        .attr('fill', color)\r
        .attr('font-size', '9px')\r
        .attr('font-weight', 600)\r
        .text(name)\r
    })\r
\r
    // Median survival time markers\r
    survivalCurves.forEach((group, i) => {\r
      const { curve, color } = group\r
      const medianPoint = curve.find(d => d.survival <= 0.5)\r
      if (medianPoint) {\r
        g.append('line')\r
          .attr('x1', x(medianPoint.time))\r
          .attr('x2', x(medianPoint.time))\r
          .attr('y1', M.top)\r
          .attr('y2', y(0.5))\r
          .attr('stroke', color)\r
          .attr('stroke-width', 1)\r
          .attr('stroke-dasharray', '4,4')\r
          .attr('opacity', 0.7)\r
\r
        g.append('text')\r
          .attr('x', x(medianPoint.time))\r
          .attr('y', M.top - 5)\r
          .attr('text-anchor', 'middle')\r
          .attr('fill', color)\r
          .attr('font-size', '7px')\r
          .text(\`Median: \${medianPoint.time}\`)\r
      }\r
    })\r
\r
    // Legend\r
    const legend = g.append('g')\r
      .attr('transform', \`translate(\${M.left + IW - 150}, \${M.top})\`)\r
\r
    groups.forEach((group, i) => {\r
      const yPos = i * 22\r
      legend.append('line')\r
        .attr('x1', 0).attr('x2', 20)\r
        .attr('y1', yPos + 6).attr('y2', yPos + 6)\r
        .attr('stroke', group.color)\r
        .attr('stroke-width', 3)\r
      legend.append('text')\r
        .attr('x', 25).attr('y', yPos + 10)\r
        .attr('fill', 'var(--text)')\r
        .attr('font-size', '8px')\r
        .attr('font-weight', 500)\r
        .text(group.name)\r
    })\r
\r
    // CI legend\r
    const ciY = groups.length * 22\r
    legend.append('rect')\r
      .attr('x', 0).attr('y', ciY)\r
      .attr('width', 16).attr('height', 12)\r
      .attr('fill', '#6366f1').attr('fill-opacity', 0.15)\r
      .attr('stroke', '#6366f1').attr('stroke-width', 0.5)\r
    legend.append('text')\r
      .attr('x', 20).attr('y', ciY + 9)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('95% CI (Greenwood)')\r
\r
    // Censoring legend\r
    legend.append('line')\r
      .attr('x1', 0).attr('x2', 16)\r
      .attr('y1', ciY + 18).attr('y2', ciY + 18)\r
      .attr('stroke', '#6366f1')\r
      .attr('stroke-width', 2)\r
    legend.append('text')\r
      .attr('x', 20).attr('y', ciY + 21)\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Censored')\r
\r
    // Title\r
    svg.append('text')\r
      .attr('x', W / 2)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text-primary)')\r
      .attr('font-size', '10px')\r
      .attr('font-weight', 600)\r
      .text('Kaplan-Meier Survival Curves with 95% CI')\r
\r
    svg.append('text')\r
      .attr('x', W - 14)\r
      .attr('y', 18)\r
      .attr('text-anchor', 'end')\r
      .attr('fill', 'var(--text-secondary)')\r
      .attr('font-size', '7px')\r
      .text('Step function | + = Censored')\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};