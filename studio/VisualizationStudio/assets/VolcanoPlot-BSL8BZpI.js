var e=`import { useEffect, useRef } from 'react'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
\r
export const meta = {\r
  id: 'volcano-plot',\r
  title: 'Volcano Plot',\r
  desc: 'Volcano Plot — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'VolcanoPlot',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","volcano-plot"],\r
}\r
\r
export default function VolcanoPlot({ data: customData, options = {} }) {\r
  const ref = useRef(null)\r
\r
  // p-values of 0 (or negative/missing) would make -log10(p) = Infinity and poison the\r
  // y-scale domain; clamp to the smallest positive double before taking the log.\r
  const negLog10 = (p) => -Math.log10(Math.max(Number(p) || 0, Number.MIN_VALUE))\r
\r
  const DEFAULT_DATA = [{"gene":"GENE_0","log2FC":0.607,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_1","log2FC":2.115,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_2","log2FC":-1.951,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_3","log2FC":-1.361,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_4","log2FC":2.193,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_5","log2FC":-1.5,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_6","log2FC":1.474,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_7","log2FC":-1.816,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_8","log2FC":1.12,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_9","log2FC":-2.977,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_10","log2FC":2.024,"pvalue":0.049,"significant":true,"direction":"up"},{"gene":"GENE_11","log2FC":0.554,"pvalue":0.065,"significant":false,"direction":"none"},{"gene":"GENE_12","log2FC":-1.398,"pvalue":0.043,"significant":true,"direction":"down"},{"gene":"GENE_13","log2FC":-1.886,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_14","log2FC":0.182,"pvalue":0.069,"significant":false,"direction":"none"},{"gene":"GENE_15","log2FC":-1.962,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_16","log2FC":-0.074,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_17","log2FC":-1.083,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_18","log2FC":-2.775,"pvalue":0.049,"significant":true,"direction":"down"},{"gene":"GENE_19","log2FC":0.34,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_20","log2FC":-1.529,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_21","log2FC":-1.743,"pvalue":0.002,"significant":true,"direction":"down"},{"gene":"GENE_22","log2FC":1.432,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_23","log2FC":0.048,"pvalue":0.006,"significant":false,"direction":"none"},{"gene":"GENE_24","log2FC":-1.295,"pvalue":0.002,"significant":true,"direction":"down"},{"gene":"GENE_25","log2FC":-2.552,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_26","log2FC":1.085,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_27","log2FC":2.567,"pvalue":0.03,"significant":true,"direction":"up"},{"gene":"GENE_28","log2FC":2.662,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_29","log2FC":2.654,"pvalue":0.015,"significant":true,"direction":"up"},{"gene":"GENE_30","log2FC":-2.334,"pvalue":0.08,"significant":false,"direction":"none"},{"gene":"GENE_31","log2FC":-0.837,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_32","log2FC":0.672,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_33","log2FC":-2.535,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_34","log2FC":2.609,"pvalue":0.002,"significant":true,"direction":"up"},{"gene":"GENE_35","log2FC":1.24,"pvalue":0.008,"significant":true,"direction":"up"},{"gene":"GENE_36","log2FC":0.122,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_37","log2FC":-2.276,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_38","log2FC":0.377,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_39","log2FC":-0.396,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_40","log2FC":-0.978,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_41","log2FC":-1.062,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_42","log2FC":-1.229,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_43","log2FC":2.059,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_44","log2FC":2.964,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_45","log2FC":-0.409,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_46","log2FC":-1.224,"pvalue":0.025,"significant":true,"direction":"down"},{"gene":"GENE_47","log2FC":1.18,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_48","log2FC":1.716,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_49","log2FC":-2.438,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_50","log2FC":1.932,"pvalue":0.017,"significant":true,"direction":"up"},{"gene":"GENE_51","log2FC":2.836,"pvalue":0.009,"significant":true,"direction":"up"},{"gene":"GENE_52","log2FC":1.257,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_53","log2FC":-1.661,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_54","log2FC":-2.019,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_55","log2FC":-0.984,"pvalue":0.006,"significant":false,"direction":"none"},{"gene":"GENE_56","log2FC":0.773,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_57","log2FC":-1.042,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_58","log2FC":-0.642,"pvalue":0.016,"significant":false,"direction":"none"},{"gene":"GENE_59","log2FC":2.182,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_60","log2FC":-2.943,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_61","log2FC":0.812,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_62","log2FC":2.449,"pvalue":0.006,"significant":true,"direction":"up"},{"gene":"GENE_63","log2FC":0.624,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_64","log2FC":-1.896,"pvalue":0.052,"significant":false,"direction":"none"},{"gene":"GENE_65","log2FC":1.233,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_66","log2FC":-1.251,"pvalue":0.002,"significant":true,"direction":"down"},{"gene":"GENE_67","log2FC":-0.98,"pvalue":0.067,"significant":false,"direction":"none"},{"gene":"GENE_68","log2FC":-1.675,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_69","log2FC":0.434,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_70","log2FC":-2.017,"pvalue":0.009,"significant":true,"direction":"down"},{"gene":"GENE_71","log2FC":0.366,"pvalue":0.002,"significant":false,"direction":"none"},{"gene":"GENE_72","log2FC":-0.632,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_73","log2FC":-0.49,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_74","log2FC":-0.609,"pvalue":0.001,"significant":false,"direction":"none"},{"gene":"GENE_75","log2FC":2.374,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_76","log2FC":-0.028,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_77","log2FC":0.278,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_78","log2FC":-1.588,"pvalue":0.001,"significant":true,"direction":"down"},{"gene":"GENE_79","log2FC":-1.207,"pvalue":0.001,"significant":true,"direction":"down"},{"gene":"GENE_80","log2FC":1.016,"pvalue":0.005,"significant":true,"direction":"up"},{"gene":"GENE_81","log2FC":-1.984,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_82","log2FC":-1.115,"pvalue":0.018,"significant":true,"direction":"down"},{"gene":"GENE_83","log2FC":-1.117,"pvalue":0.056,"significant":false,"direction":"none"},{"gene":"GENE_84","log2FC":0.465,"pvalue":0.006,"significant":false,"direction":"none"},{"gene":"GENE_85","log2FC":-0.111,"pvalue":0.001,"significant":false,"direction":"none"},{"gene":"GENE_86","log2FC":1.272,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_87","log2FC":1.87,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_88","log2FC":-2.075,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_89","log2FC":0.154,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_90","log2FC":2.367,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_91","log2FC":-2.12,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_92","log2FC":1.846,"pvalue":0.006,"significant":true,"direction":"up"},{"gene":"GENE_93","log2FC":-0.662,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_94","log2FC":2.907,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_95","log2FC":2.157,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_96","log2FC":1.462,"pvalue":0.048,"significant":true,"direction":"up"},{"gene":"GENE_97","log2FC":-2.584,"pvalue":0.01,"significant":true,"direction":"down"},{"gene":"GENE_98","log2FC":0.039,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_99","log2FC":1.565,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_100","log2FC":1.896,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_101","log2FC":2.022,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_102","log2FC":0.596,"pvalue":0.001,"significant":false,"direction":"none"},{"gene":"GENE_103","log2FC":-0.319,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_104","log2FC":1.086,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_105","log2FC":2.625,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_106","log2FC":-1.024,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_107","log2FC":-2.09,"pvalue":0.001,"significant":true,"direction":"down"},{"gene":"GENE_108","log2FC":-2.88,"pvalue":0.031,"significant":true,"direction":"down"},{"gene":"GENE_109","log2FC":0.886,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_110","log2FC":2.736,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_111","log2FC":-0.203,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_112","log2FC":-2.129,"pvalue":0.002,"significant":true,"direction":"down"},{"gene":"GENE_113","log2FC":-2.165,"pvalue":0.052,"significant":false,"direction":"none"},{"gene":"GENE_114","log2FC":-1.254,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_115","log2FC":0.413,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_116","log2FC":1.761,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_117","log2FC":-1.824,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_118","log2FC":0.107,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_119","log2FC":-0.186,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_120","log2FC":-0.45,"pvalue":0.001,"significant":false,"direction":"none"},{"gene":"GENE_121","log2FC":-1.154,"pvalue":0.013,"significant":true,"direction":"down"},{"gene":"GENE_122","log2FC":0.028,"pvalue":0.002,"significant":false,"direction":"none"},{"gene":"GENE_123","log2FC":0.183,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_124","log2FC":0.884,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_125","log2FC":-2.191,"pvalue":0.095,"significant":false,"direction":"none"},{"gene":"GENE_126","log2FC":-2.111,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_127","log2FC":-2.584,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_128","log2FC":-0.418,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_129","log2FC":-2.407,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_130","log2FC":-2.66,"pvalue":0.001,"significant":true,"direction":"down"},{"gene":"GENE_131","log2FC":-1.622,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_132","log2FC":0.384,"pvalue":0.027,"significant":false,"direction":"none"},{"gene":"GENE_133","log2FC":2.798,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_134","log2FC":0.967,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_135","log2FC":0.293,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_136","log2FC":0.162,"pvalue":0.009,"significant":false,"direction":"none"},{"gene":"GENE_137","log2FC":-2.531,"pvalue":0.027,"significant":true,"direction":"down"},{"gene":"GENE_138","log2FC":-2.643,"pvalue":0.003,"significant":true,"direction":"down"},{"gene":"GENE_139","log2FC":1.033,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_140","log2FC":0.366,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_141","log2FC":-2.867,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_142","log2FC":-0.973,"pvalue":0.002,"significant":false,"direction":"none"},{"gene":"GENE_143","log2FC":1.999,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_144","log2FC":-1.77,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_145","log2FC":2.713,"pvalue":0.003,"significant":true,"direction":"up"},{"gene":"GENE_146","log2FC":0.11,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_147","log2FC":2.612,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_148","log2FC":0.411,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_149","log2FC":-1.128,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_150","log2FC":1.502,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_151","log2FC":1.124,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_152","log2FC":0.276,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_153","log2FC":2.906,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_154","log2FC":-1.148,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_155","log2FC":1.008,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_156","log2FC":-0.679,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_157","log2FC":-1.098,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_158","log2FC":-0.521,"pvalue":0.001,"significant":false,"direction":"none"},{"gene":"GENE_159","log2FC":0.197,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_160","log2FC":0.707,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_161","log2FC":1.149,"pvalue":0.012,"significant":true,"direction":"up"},{"gene":"GENE_162","log2FC":-1.28,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_163","log2FC":-0.08,"pvalue":0.002,"significant":false,"direction":"none"},{"gene":"GENE_164","log2FC":0.785,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_165","log2FC":1.43,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_166","log2FC":-1.885,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_167","log2FC":2.415,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_168","log2FC":-0.172,"pvalue":0.037,"significant":false,"direction":"none"},{"gene":"GENE_169","log2FC":-0.001,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_170","log2FC":1.052,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_171","log2FC":-0.343,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_172","log2FC":1.304,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_173","log2FC":-2.74,"pvalue":0.01,"significant":true,"direction":"down"},{"gene":"GENE_174","log2FC":-2.415,"pvalue":0.019,"significant":true,"direction":"down"},{"gene":"GENE_175","log2FC":-0.748,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_176","log2FC":2.027,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_177","log2FC":-2.492,"pvalue":0.064,"significant":false,"direction":"none"},{"gene":"GENE_178","log2FC":-1.378,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_179","log2FC":-1.382,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_180","log2FC":0.757,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_181","log2FC":2.329,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_182","log2FC":-2.401,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_183","log2FC":-1.561,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_184","log2FC":-1.328,"pvalue":0.003,"significant":true,"direction":"down"},{"gene":"GENE_185","log2FC":1.323,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_186","log2FC":-0.071,"pvalue":0,"significant":false,"direction":"none"},{"gene":"GENE_187","log2FC":-2.346,"pvalue":0,"significant":true,"direction":"down"},{"gene":"GENE_188","log2FC":1.135,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_189","log2FC":-2.3,"pvalue":0.044,"significant":true,"direction":"down"},{"gene":"GENE_190","log2FC":-2.801,"pvalue":0.001,"significant":true,"direction":"down"},{"gene":"GENE_191","log2FC":-1.559,"pvalue":0.004,"significant":true,"direction":"down"},{"gene":"GENE_192","log2FC":2.942,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_193","log2FC":2.04,"pvalue":0.001,"significant":true,"direction":"up"},{"gene":"GENE_194","log2FC":0.895,"pvalue":0.064,"significant":false,"direction":"none"},{"gene":"GENE_195","log2FC":1.408,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_196","log2FC":-0.745,"pvalue":0.006,"significant":false,"direction":"none"},{"gene":"GENE_197","log2FC":1.713,"pvalue":0,"significant":true,"direction":"up"},{"gene":"GENE_198","log2FC":-2.171,"pvalue":0.032,"significant":true,"direction":"down"},{"gene":"GENE_199","log2FC":1.635,"pvalue":0,"significant":true,"direction":"up"}]\r
\r
  useEffect(() => {\r
    const svg = d3.select(ref.current)\r
    svg.selectAll('*').remove()\r
\r
    const data = customData || DEFAULT_DATA\r
\r
    const x = d3.scaleLinear()\r
      .domain(d3.extent(data, d => +d.log2FC))\r
      .range([0, IW])\r
      .nice()\r
\r
    const y = d3.scaleLinear()\r
      .domain([0, d3.max(data, d => negLog10(d.pvalue)) * 1.1])\r
      .range([IH, 0])\r
\r
    const g = svg.append('g').attr('transform', \`translate(\${M.left},\${M.top})\`)\r
\r
    // Grid\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(-IW).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(-IH).tickFormat(''))\r
      .call(g => g.select('.domain').remove())\r
      .call(g => g.selectAll('.tick line').attr('stroke', 'var(--border)').attr('stroke-opacity', 0.3))\r
\r
    // Significance thresholds\r
    const fcThreshold = 1\r
    const pThreshold = 0.05\r
\r
    // Vertical lines for fold change\r
    g.append('line')\r
      .attr('x1', x(-fcThreshold)).attr('x2', x(-fcThreshold))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '4,4')\r
    g.append('line')\r
      .attr('x1', x(fcThreshold)).attr('x2', x(fcThreshold))\r
      .attr('y1', 0).attr('y2', IH)\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // Horizontal line for p-value\r
    g.append('line')\r
      .attr('x1', 0).attr('x2', IW)\r
      .attr('y1', y(-Math.log10(pThreshold)))\r
      .attr('y2', y(-Math.log10(pThreshold)))\r
      .attr('stroke', 'var(--border)')\r
      .attr('stroke-dasharray', '4,4')\r
\r
    // Points\r
    g.selectAll('.point')\r
      .data(data)\r
      .enter()\r
      .append('circle')\r
      .attr('cx', d => x(+d.log2FC))\r
      .attr('cy', d => y(negLog10(d.pvalue)))\r
      .attr('r', 3)\r
      .attr('fill', d => {\r
        if (d.direction === 'up') return colors[2]\r
        if (d.direction === 'down') return colors[1]\r
        return '#94a3b8'\r
      })\r
      .attr('opacity', d => d.direction === 'none' ? 0.3 : 0.7)\r
      .on('mouseover', function(event, d) {\r
        d3.select(this).attr('r', 6).attr('opacity', 1)\r
        showTooltip(event, d)\r
      })\r
      .on('mouseout', function() {\r
        d3.select(this).attr('r', 3).attr('opacity', d => d.direction === 'none' ? 0.3 : 0.7)\r
        hideTooltip()\r
      })\r
\r
    // Axes\r
    g.append('g')\r
      .attr('transform', \`translate(0,\${IH})\`)\r
      .call(d3.axisBottom(x).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    g.append('g')\r
      .call(d3.axisLeft(y).ticks(6).tickSize(0).tickPadding(8))\r
      .call(g => g.select('.domain').attr('stroke', 'var(--border)'))\r
      .call(g => g.selectAll('text').attr('fill', 'var(--text-secondary)').attr('font-size', '10px'))\r
\r
    // Axis labels\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', IH + 38)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('log2 Fold Change')\r
\r
    g.append('text')\r
      .attr('transform', 'rotate(-90)')\r
      .attr('x', -IH / 2)\r
      .attr('y', -45)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '12px')\r
      .attr('font-weight', 500)\r
      .text('-log10(p-value)')\r
\r
    // Title\r
    g.append('text')\r
      .attr('x', IW / 2)\r
      .attr('y', -10)\r
      .attr('text-anchor', 'middle')\r
      .attr('fill', 'var(--text)')\r
      .attr('font-size', '14px')\r
      .attr('font-weight', 600)\r
      .text('Volcano Plot - Differential Expression')\r
\r
    // Legend\r
    const lg = g.append('g').attr('transform', \`translate(20, 20)\`)\r
    lg.append('circle').attr('cx', 0).attr('cy', 0).attr('r', 6).attr('fill', colors[2])\r
    lg.append('text').attr('x', 12).attr('y', 4).attr('font-size', '10px').attr('fill', 'var(--text)').text('Up-regulated')\r
    lg.append('circle').attr('cx', 0).attr('cy', 20).attr('r', 6).attr('fill', colors[1])\r
    lg.append('text').attr('x', 12).attr('y', 24).attr('font-size', '10px').attr('fill', 'var(--text)').text('Down-regulated')\r
    lg.append('circle').attr('cx', 0).attr('cy', 40).attr('r', 6).attr('fill', '#94a3b8')\r
    lg.append('text').attr('x', 12).attr('y', 44).attr('font-size', '10px').attr('fill', 'var(--text)').text('Not significant')\r
\r
    // Counts\r
    const upCount = data.filter(d => d.direction === 'up').length\r
    const downCount = data.filter(d => d.direction === 'down').length\r
    g.append('text')\r
      .attr('x', IW - 10)\r
      .attr('y', 30)\r
      .attr('text-anchor', 'end')\r
      .attr('font-size', '10px')\r
      .attr('fill', 'var(--text-secondary)')\r
      .text(\`Up: \${upCount} | Down: \${downCount} | Total: \${data.length}\`)\r
\r
    // Tooltip\r
    const tooltip = d3.select('body').append('div')\r
      .style('position', 'absolute')\r
      .style('pointer-events', 'none')\r
      .style('opacity', 0)\r
      .style('background', 'var(--bg-card)')\r
      .style('border', '1px solid var(--border)')\r
      .style('border-radius', '6px')\r
      .style('padding', '8px 12px')\r
      .style('font-size', '11px')\r
      .style('color', 'var(--text)')\r
      .style('box-shadow', '0 4px 12px rgba(0,0,0,0.15)')\r
      .style('z-index', 1000)\r
\r
    function showTooltip(event, d) {\r
      const logFC = Number(d.log2FC) || 0\r
      tooltip.html(\`\r
        <strong>\${d.gene}</strong><br/>\r
        log2FC: \${logFC.toFixed(2)}<br/>\r
        p-value: \${d.pvalue.toExponential(2)}<br/>\r
        -log10(p): \${negLog10(d.pvalue).toFixed(2)}<br/>\r
        Direction: \${d.direction}\r
      \`)\r
        .style('left', \`\${event.pageX + 10}px\`)\r
        .style('top', \`\${event.pageY - 10}px\`)\r
        .style('opacity', 1)\r
    }\r
\r
    function hideTooltip() {\r
      tooltip.style('opacity', 0)\r
    }\r
\r
    return () => {\r
      tooltip.remove()\r
    }\r
\r
  }, [customData])\r
\r
  return <svg ref={ref} width={W} height={H} viewBox={\`0 0 \${W} \${H}\`} />\r
}`;export{e as default};