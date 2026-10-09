var e=`import { useState, useRef, useCallback, useEffect, useMemo } from 'react'\r
import { useTranslation } from 'react-i18next'\r
import * as d3 from 'd3'\r
import { W, H, M, IW, IH, colors } from './utils'\r
import { getComponent } from './index'\r
import LazyChart from '../components/LazyChart'\r
import { getDefaultData } from './defaultData'\r
import { CHARTS } from '../data/charts'\r
\r
// Grid configuration\r
const GRID_COLS = 12\r
const GRID_ROWS = 8\r
const CELL_W = IW / GRID_COLS\r
const CELL_H = IH / GRID_ROWS\r
const GAP = 4\r
\r
// Available widget types from our chart registry\r
const WIDGET_TEMPLATES = CHARTS.filter(c => c.category !== 'Math & Simulation' && c.category !== 'Animation')\r
  .slice(0, 30)\r
  .map(chart => ({\r
    type: chart.component,\r
    title: chart.title,\r
    category: chart.category,\r
    defaultSize: { w: 6, h: 4 },\r
    minSize: { w: 3, h: 2 },\r
    maxSize: { w: 12, h: 8 }\r
  }))\r
\r
// Dashboard state persistence\r
const STORAGE_KEY = 'visualization_dashboard_layout'\r
\r
function loadLayout() {\r
  try {\r
    const saved = localStorage.getItem('visualization_dashboard_layout')\r
    return saved ? JSON.parse(saved) : []\r
  } catch {\r
    return []\r
  }\r
}\r
\r
function saveLayout(layout) {\r
  localStorage.setItem('visualization_dashboard_layout', JSON.stringify(layout))\r
}\r
\r
export const meta = {\r
  id: 'dashboard-builder',\r
  title: 'Dashboard Builder',\r
  desc: 'Dashboard Builder — a bars chart visualization',\r
  category: 'Bars',\r
  component: 'DashboardBuilder',\r
  complexity: 'beginner',\r
  interactivity: ["none"],\r
  d3Api: ["d3-scale"],\r
  tags: ["bars","dashboard-builder"],\r
}\r
\r
export default function DashboardBuilder({ onClose }) {\r
  const { t } = useTranslation()\r
  const [widgets, setWidgets] = useState(() => loadLayout())\r
  const [selectedWidget, setSelectedWidget] = useState(null)\r
  const [draggedTemplate, setDraggedTemplate] = useState(null)\r
  const [editMode, setEditMode] = useState(true)\r
  const [showPalette, setShowPalette] = useState(true)\r
  const [gridSnap, setGridSnap] = useState(true)\r
  const [activeCategory, setActiveCategory] = useState('All')\r
  \r
  const containerRef = useRef(null)\r
  const sidebarRef = useRef(null)\r
\r
  // Persist layout changes\r
  useEffect(() => {\r
    saveLayout(widgets)\r
  }, [widgets])\r
\r
  // Categories for palette filtering\r
  const categories = useMemo(() => {\r
    const cats = [...new Set(WIDGET_TEMPLATES.map(t => t.category))]\r
    return ['All', ...cats.sort()]\r
  }, [])\r
\r
  // Filtered templates\r
  const filteredTemplates = useMemo(() => {\r
    if (activeCategory === 'All') return WIDGET_TEMPLATES\r
    return WIDGET_TEMPLATES.filter(t => t.category === activeCategory)\r
  }, [activeCategory])\r
\r
  // Generate unique ID for new widgets\r
  const generateId = () => \`widget_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`\r
\r
  // Find first empty grid position\r
  const findEmptyPosition = (size) => {\r
    const occupied = new Set()\r
    widgets.forEach(w => {\r
      for (let x = w.x; x < w.x + w.w; x++) {\r
        for (let y = w.y; y < w.h + w.y; y++) {\r
          occupied.add(\`\${x},\${y}\`)\r
        }\r
      }\r
    })\r
\r
    for (let y = 0; y <= GRID_ROWS - size.h; y++) {\r
      for (let x = 0; x <= GRID_COLS - size.w; x++) {\r
        let free = true\r
        for (let dx = 0; dx < size.w; dx++) {\r
          for (let dy = 0; dy < size.h; dy++) {\r
            if (occupied.has(\`\${x + dx},\${y + dy}\`)) {\r
              free = false\r
              break\r
            }\r
          }\r
          if (!free) break\r
        }\r
        if (free) return { x, y }\r
      }\r
    }\r
    return { x: 0, y: 0 }\r
  }\r
\r
  // Add widget from template\r
  const addWidget = useCallback((template) => {\r
    const pos = findEmptyPosition(template.defaultSize)\r
    const newWidget = {\r
      id: generateId(),\r
      type: template.type,\r
      title: template.title,\r
      category: template.category,\r
      x: pos.x,\r
      y: pos.y,\r
      w: template.defaultSize.w,\r
      h: template.defaultSize.h,\r
      minW: template.minSize.w,\r
      minH: template.minSize.h,\r
      maxW: template.maxSize.w,\r
      maxH: template.maxSize.h,\r
      config: {}\r
    }\r
    setWidgets(prev => [...prev, newWidget])\r
  }, [])\r
\r
  // Remove widget\r
  const removeWidget = useCallback((id) => {\r
    setWidgets(prev => prev.filter(w => w.id !== id))\r
    setSelectedWidget(null)\r
  }, [])\r
\r
  // Update widget position/size\r
  const updateWidget = useCallback((id, updates) => {\r
    setWidgets(prev => prev.map(w => w.id === id ? { ...w, ...updates } : w))\r
  }, [])\r
\r
  // Duplicate widget\r
  const duplicateWidget = useCallback((id) => {\r
    const widget = widgets.find(w => w.id === id)\r
    if (!widget) return\r
    const pos = findEmptyPosition({ w: widget.w, h: widget.h })\r
    setWidgets(prev => [...prev, { ...widget, id: generateId(), x: pos.x, y: pos.y }])\r
  }, [])\r
\r
  // Check if position is occupied (for collision detection)\r
  const isPositionFree = (x, y, w, h, excludeId) => {\r
    for (let dx = 0; dx < w; dx++) {\r
      for (let dy = 0; dy < h; dy++) {\r
        for (const widget of widgets) {\r
          if (widget.id === excludeId) continue\r
          if (x + dx >= widget.x && x + dx < widget.x + widget.w &&\r
              y + dy >= widget.y && y + dy < widget.y + widget.h) {\r
            return false\r
          }\r
        }\r
      }\r
    }\r
    return true\r
  }\r
\r
  // Snap to grid\r
  const snapToGrid = (value, cellSize) => {\r
    if (!gridSnap) return value\r
    return Math.round(value / cellSize) * cellSize\r
  }\r
\r
  // Keyboard shortcuts\r
  useEffect(() => {\r
    const handler = (e) => {\r
      if (e.key === 'Delete' && selectedWidget) {\r
        removeWidget(selectedWidget.id)\r
      }\r
      if (e.key === 'Escape') {\r
        setSelectedWidget(null)\r
      }\r
      if (e.key === 'd' && e.ctrlKey && selectedWidget) {\r
        e.preventDefault()\r
        duplicateWidget(selectedWidget.id)\r
      }\r
      if (e.key === 'e') {\r
        setEditMode(!editMode)\r
      }\r
    }\r
    window.addEventListener('keydown', handler)\r
    return () => window.removeEventListener('keydown', handler)\r
  }, [selectedWidget, removeWidget, duplicateWidget, editMode])\r
\r
  // Render grid background\r
  const renderGrid = () => {\r
    if (!editMode) return null\r
    const lines = []\r
    for (let i = 0; i <= GRID_COLS; i++) {\r
      lines.push(<line key={\`v\${i}\`} x1={i * CELL_W} y1={0} x2={i * CELL_W} y2={IH} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4,4" opacity={0.3} />)\r
    }\r
    for (let i = 0; i <= GRID_ROWS; i++) {\r
      lines.push(<line key={\`h\${i}\`} x1={0} y1={i * CELL_H} x2={IW} y2={i * CELL_H} stroke="var(--border)" strokeWidth="0.5" strokeDasharray="4,4" opacity={0.3} />)\r
    }\r
    return <g>{lines}</g>\r
  }\r
\r
  // Widget component\r
  const Widget = ({ widget, onSelect, onDragStart, onDrag, onDragEnd, onResizeStart, onResize, onResizeEnd, isSelected }) => {\r
    const Component = getComponent(widget.type)\r
    const [dragState, setDragState] = useState(null)\r
    const [resizeState, setResizeState] = useState(null)\r
\r
    const handleMouseDown = (e) => {\r
      if (e.target.classList.contains('resize-handle')) return\r
      e.stopPropagation()\r
      onSelect(widget)\r
      if (editMode) {\r
        const rect = e.currentTarget.getBoundingClientRect()\r
        setDragState({\r
          startX: e.clientX,\r
          startY: e.clientY,\r
          startLeft: widget.x * CELL_W,\r
          startTop: widget.y * CELL_H\r
        })\r
      }\r
    }\r
\r
    const handleMouseMove = (e) => {\r
      if (!dragState) return\r
      e.preventDefault()\r
      const dx = e.clientX - dragState.startX\r
      const dy = e.clientY - dragState.startY\r
      const newX = snapToGrid(dragState.startLeft + dx, CELL_W) / CELL_W\r
      const newY = snapToGrid(dragState.startTop + dy, CELL_H) / CELL_H\r
      \r
      const clampedX = Math.max(0, Math.min(GRID_COLS - widget.w, Math.round(newX)))\r
      const clampedY = Math.max(0, Math.min(GRID_ROWS - widget.h, Math.round(newY)))\r
      \r
      if (isPositionFree(clampedX, clampedY, widget.w, widget.h, widget.id)) {\r
        onDrag(widget.id, { x: clampedX, y: clampedY })\r
      }\r
    }\r
\r
    const handleMouseUp = () => {\r
      if (dragState) onDragEnd()\r
      setDragState(null)\r
    }\r
\r
    const handleResizeStart = (e, direction) => {\r
      e.stopPropagation()\r
      e.preventDefault()\r
      setResizeState({ direction, startX: e.clientX, startY: e.clientY, startW: widget.w, startH: widget.h })\r
    }\r
\r
    const handleResizeMove = (e) => {\r
      if (!resizeState) return\r
      e.preventDefault()\r
      const dx = (e.clientX - resizeState.startX) / CELL_W\r
      const dy = (e.clientY - resizeState.startY) / CELL_H\r
      \r
      let newW = resizeState.startW\r
      let newH = resizeState.startH\r
      let newX = widget.x\r
      let newY = widget.y\r
      \r
      if (resizeState.direction.includes('e')) newW = Math.max(widget.minW, Math.min(widget.maxW, Math.round(resizeState.startW + dx)))\r
      if (resizeState.direction.includes('w')) { newW = Math.max(widget.minW, Math.min(widget.maxW, Math.round(resizeState.startW - dx))); newX = widget.x + widget.w - newW }\r
      if (resizeState.direction.includes('s')) newH = Math.max(widget.minH, Math.min(widget.maxH, Math.round(resizeState.startH + dy)))\r
      if (resizeState.direction.includes('n')) { newH = Math.max(widget.minH, Math.min(widget.maxH, Math.round(resizeState.startH - dy))); newY = widget.y + widget.h - newH }\r
      \r
      if (isPositionFree(newX, newY, newW, newH, widget.id)) {\r
        onResize(widget.id, { w: newW, h: newH, x: newX, y: newY })\r
      }\r
    }\r
\r
    const handleResizeEnd = () => {\r
      setResizeState(null)\r
    }\r
\r
    useEffect(() => {\r
      window.addEventListener('mousemove', handleMouseMove)\r
      window.addEventListener('mouseup', handleMouseUp)\r
      return () => { window.removeEventListener('mousemove', handleMouseMove); window.removeEventListener('mouseup', handleMouseUp) }\r
    }, [dragState, resizeState])\r
\r
    const style = {\r
      left: widget.x * CELL_W,\r
      top: widget.y * CELL_H,\r
      width: widget.w * CELL_W - GAP,\r
      height: widget.h * CELL_H - GAP,\r
      zIndex: isSelected ? 10 : 1\r
    }\r
\r
    return (\r
      <div\r
        key={widget.id}\r
        className={\`dashboard-widget \${isSelected ? 'selected' : ''}\`}\r
        style={style}\r
        onMouseDown={handleMouseDown}\r
        onClick={() => onSelect(widget)}\r
        data-widget-id={widget.id}\r
      >\r
        <div className="widget-header">\r
          <span className="widget-title">{widget.title}</span>\r
          <div className="widget-actions">\r
            {editMode && (\r
              <>\r
                <button className="widget-btn" onClick={(e) => { e.stopPropagation(); duplicateWidget(widget.id) }} title="Duplicate">⧉</button>\r
                <button className="widget-btn" onClick={(e) => { e.stopPropagation(); removeWidget(widget.id) }} title="Remove">✕</button>\r
              </>\r
            )}\r
          </div>\r
        </div>\r
        <div className="widget-content" style={{ width: '100%', height: \`calc(100% - 32px)\` }}>\r
          <LazyChart title={widget.title}>\r
            <Component data={getDefaultData(widget.type)} />\r
          </LazyChart>\r
        </div>\r
        {editMode && (\r
          <>\r
            <div className="resize-handle se" onMouseDown={(e) => handleResizeStart(e, 'se')} />\r
            <div className="resize-handle sw" onMouseDown={(e) => handleResizeStart(e, 'sw')} />\r
            <div className="resize-handle ne" onMouseDown={(e) => handleResizeStart(e, 'ne')} />\r
            <div className="resize-handle nw" onMouseDown={(e) => handleResizeStart(e, 'nw')} />\r
            <div className="resize-handle e" onMouseDown={(e) => handleResizeStart(e, 'e')} />\r
            <div className="resize-handle w" onMouseDown={(e) => handleResizeStart(e, 'w')} />\r
            <div className="resize-handle s" onMouseDown={(e) => handleResizeStart(e, 's')} />\r
            <div className="resize-handle n" onMouseDown={(e) => handleResizeStart(e, 'n')} />\r
          </>\r
        )}\r
      </div>\r
    )\r
  }\r
\r
  // Sidebar palette\r
  const Sidebar = () => (\r
    <aside className="dashboard-sidebar" ref={sidebarRef} style={{ display: showPalette ? 'flex' : 'none' }}>\r
      <div className="sidebar-header">\r
        <h3>{t('builder.add_charts', 'Add Charts')}</h3>\r
        <button className="sidebar-toggle" onClick={() => setShowPalette(false)}>✕</button>\r
      </div>\r
      <div className="sidebar-filters">\r
        <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className="category-filter">\r
          {categories.map(c => <option key={c} value={c}>{c}</option>)}\r
        </select>\r
        <input type="text" placeholder="Search..." className="palette-search" />\r
      </div>\r
      <div className="palette-grid">\r
        {filteredTemplates.map((template, idx) => (\r
          <div\r
            key={template.type}\r
            className="palette-item"\r
            draggable\r
            onDragStart={(e) => {\r
              e.dataTransfer.setData('application/json', JSON.stringify(template))\r
              e.dataTransfer.effectAllowed = 'copy'\r
              setDraggedTemplate(template)\r
            }}\r
            onDragEnd={() => setDraggedTemplate(null)}\r
          >\r
            <div className="palette-item-preview">\r
              <div className="mini-chart">\r
                {(() => {\r
                  const PreviewComponent = getComponent(template.type)\r
                  return PreviewComponent ? <PreviewComponent data={getDefaultData(template.type)} /> : null\r
                })()}\r
              </div>\r
            </div>\r
            <div className="palette-item-info">\r
              <span className="palette-item-title">{template.title}</span>\r
              <span className="palette-item-category">{template.category}</span>\r
            </div>\r
          </div>\r
        ))}\r
      </div>\r
    </aside>\r
  )\r
\r
  // Toolbar\r
  const Toolbar = () => (\r
    <header className="dashboard-toolbar">\r
      <div className="toolbar-left">\r
        <h2>{t('builder.title', 'Dashboard Builder')}</h2>\r
        <span className="widget-count">{widgets.length} widgets</span>\r
      </div>\r
      <div className="toolbar-center">\r
        <label className="toolbar-toggle">\r
          <input type="checkbox" checked={editMode} onChange={(e) => setEditMode(e.target.checked)} />\r
          <span>Edit Mode</span>\r
        </label>\r
        <label className="toolbar-toggle">\r
          <input type="checkbox" checked={gridSnap} onChange={(e) => setGridSnap(e.target.checked)} />\r
          <span>Snap to Grid</span>\r
        </label>\r
        <label className="toolbar-toggle">\r
          <input type="checkbox" checked={showPalette} onChange={(e) => setShowPalette(e.target.checked)} />\r
          <span>Palette</span>\r
        </label>\r
      </div>\r
      <div className="toolbar-right">\r
        <button className="toolbar-btn" onClick={() => setWidgets([])} disabled={widgets.length === 0}>Clear All</button>\r
        <button className="toolbar-btn primary" onClick={() => setWidgets([])}>{t('builder.new_dashboard', 'New Dashboard')}</button>\r
        <button className="toolbar-btn secondary" onClick={onClose}>Exit Builder</button>\r
      </div>\r
    </header>\r
  )\r
\r
  // Main canvas area\r
  const Canvas = () => (\r
    <main className="dashboard-canvas" ref={containerRef}>\r
      <svg className="grid-svg" width={IW} height={IH}>{renderGrid()}</svg>\r
      <div className="widget-layer">\r
        {widgets.map(widget => (\r
          <Widget\r
            key={widget.id}\r
            widget={widget}\r
            isSelected={selectedWidget?.id === widget.id}\r
            onSelect={setSelectedWidget}\r
            onDragStart={() => {}}\r
            onDrag={(id, pos) => updateWidget(id, pos)}\r
            onDragEnd={() => {}}\r
            onResizeStart={() => {}}\r
            onResize={(id, size) => updateWidget(id, size)}\r
            onResizeEnd={() => {}}\r
          />\r
        ))}\r
        {widgets.length === 0 && editMode && (\r
          <div className="empty-state">\r
            <p>Drag charts from the sidebar to build your dashboard</p>\r
            <p className="hint">Click charts in the sidebar to add them, or drag & drop</p>\r
          </div>\r
        )}\r
      </div>\r
    </main>\r
  )\r
\r
  return (\r
    <div className="dashboard-builder">\r
      <Toolbar />\r
      <div className="dashboard-layout">\r
        <Sidebar />\r
        <Canvas />\r
        {selectedWidget && editMode && (\r
          <WidgetInspector widget={selectedWidget} onUpdate={updateWidget} onClose={() => setSelectedWidget(null)} />\r
        )}\r
      </div>\r
    </div>\r
  )\r
}\r
\r
// Widget inspector panel\r
function WidgetInspector({ widget, onUpdate, onClose }) {\r
  const [config, setConfig] = useState(widget.config || {})\r
  \r
  useEffect(() => {\r
    setConfig(widget.config || {})\r
  }, [widget])\r
\r
  const handleConfigChange = (key, value) => {\r
    const newConfig = { ...config, [key]: value }\r
    setConfig(newConfig)\r
    onUpdate(widget.id, { config: newConfig })\r
  }\r
\r
  return (\r
    <aside className="widget-inspector">\r
      <div className="inspector-header">\r
        <h4>Widget Settings</h4>\r
        <button onClick={onClose}>✕</button>\r
      </div>\r
      <div className="inspector-body">\r
        <div className="setting-group">\r
          <label>Title</label>\r
          <input value={widget.title} onChange={(e) => onUpdate(widget.id, { title: e.target.value })} />\r
        </div>\r
        <div className="setting-group">\r
          <label>Position (x, y)</label>\r
          <div className="position-inputs">\r
            <input type="number" value={widget.x} onChange={(e) => onUpdate(widget.id, { x: parseInt(e.target.value) })} min={0} max={GRID_COLS - widget.w} />\r
            <input type="number" value={widget.y} onChange={(e) => onUpdate(widget.id, { y: parseInt(e.target.value) })} min={0} max={GRID_ROWS - widget.h} />\r
          </div>\r
        </div>\r
        <div className="setting-group">\r
          <label>Size (w, h)</label>\r
          <div className="size-inputs">\r
            <input type="number" value={widget.w} onChange={(e) => onUpdate(widget.id, { w: parseInt(e.target.value) })} min={widget.minW} max={widget.maxW} />\r
            <input type="number" value={widget.h} onChange={(e) => onUpdate(widget.id, { h: parseInt(e.target.value) })} min={widget.minH} max={widget.maxH} />\r
          </div>\r
        </div>\r
        <hr />\r
        <h5>Chart Configuration</h5>\r
        {/* Chart-specific config would go here */}\r
      </div>\r
    </aside>\r
  )\r
}`;export{e as default};