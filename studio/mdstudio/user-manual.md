Welcome to MarkdownStudio, a distraction-free markdown writing tool designed for the Nexus personal productivity suite. It provides a clean, efficient environment for creating and managing your markdown documents.

## Table of Contents

1. [Getting Started](#getting-started)
2. [File Management](#file-management)
3. [Editing Features](#editing-features)
4. [View Modes & Layouts](#view-modes--layouts)
5. [Panels & Functionality](#panels--functionality)
6. [Search & Navigation](#search--navigation)
7. [Accessibility](#accessibility)
8. [Writing Statistics](#writing-statistics)
9. [Advanced Features](#advanced-features)
10. [Troubleshooting](#troubleshooting)

---

## Getting Started

### Quick Start

1. **Create a New File:** Click the "New" button in the ribbon menu to create a new markdown document
2. **Open Existing Files:** Click "Open" to import markdown files from your device
3. **Start Writing:** Begin typing in the editor pane and see your formatted content in the preview pane
4. **Save Your Work:** Click "Save" to save changes to your file

### Interface Overview

The interface consists of three main areas:

- **Ribbon Menu:** Top toolbar with all file operations and settings.
- **File Tabs:** Switch between open documents.
- **Workspace:** The main area containing your editor, preview, and floating/docked functionality panels.

---

## File Management

### Working with Files

#### Creating New Files

Click the "New" button (📄) in the ribbon menu to create a new markdown document. You can open a standard blank document, or explicitly pick from built-in templates like Meeting Notes, Blog Posts, or READMEs. 

#### Opening Files

Use the "Open" button (📁) to browse and open existing markdown files from your device. The app uses the File System Access API for direct file access, meaning your changes stay synced locally.

#### Saving Files

Click "Save" (💾) to save your changes:

- **First Save:** You'll be prompted to choose a location and filename.
- **Subsequent Saves:** Changes are saved directly to the original file.
- **Auto-save:** The background service will routinely stash your document changes so you don't lose data.
- **Auto-indicator:** The file name pill in the top header features a glowing dot when unsaved changes are present.

#### File Tabs Breadcrumb

Multiple files can be open simultaneously:

- Click the file name dropdown pill in the center of the menu bar to see your open files.
- Click on any file name to switch between files.
- Click the × button next to a file name to close it.

#### Import & Export

**Import:** Use the import button (⬇️) to bring multiple files into your workspace at once. The editor supports importing `.md`, `.txt`, `.docx`, `.csv`, `.xlsx`, `.pdf`, and `.epub` files.

**Export:** Use the export button (⬆️) to generate standalone files from your current markdown document. The supported formats are:
- Markdown (.md)
- HTML web page (.html)
- Word Document (.doc)
- EPUB eBook (.epub)
- PowerPoint presentation (.pptx)
- PDF (via your browser's print dialog)

---

## Editing Features

### Editor Features

The editor is powered by CodeMirror 6 and includes:

- **Syntax Highlighting:** Color-coded markdown syntax.
- **Auto-completion:** Suggestions for markdown syntax.
- **Bracket Matching:** Visual pairing of brackets and parentheses.
- **Real-Time Linter:** Instantly detects broken formatting or structure warnings directly on the line numbers gutter.
- **Search & Replace:** Find and replace text (Ctrl+F/Ctrl+H).

### Command Palette
Press **Ctrl+P** (or click the lightning bolt icon) to open the Command Palette. This fuzzy-searchable interface allows you to instantly invoke almost any command, format, or layout toggle in the app without letting your hands leave the keyboard.

### Slash Commands
Type `/` at the beginning of an empty line (or after a space) to open the in-line **Slash Commands** popup. This menu allows you to rapidly insert rich structural blocks—such as tables (`/table`), KaTeX math (`/math`), Mermaid diagrams (`/mermaid`), callouts (`/note`), or headings (`/h2`)—instantly without lifting your hands from the keyboard.

### Quick Formatting

Highlight text and use the right-click Context Menu, Ribbon Menu buttons, or keyboard shortcuts:

- **Bold:** Ctrl+B
- **Italic:** Ctrl+I
- **Code:** Ctrl+`
- **Link:** Ctrl+K
- **Strikethrough:** Alt+S

### Structural Editing

Take control of your document layout with structural selection. Use the Command Palette to:
- **Select Current Section:** Automatically highlight all text in the current header's block.
- **Move Section Up/Down:** Shift an entire header and all of its accompanying paragraphs up or down in the document structure.
- **Select All Headings / Lists:** Multicursor grab all lists or headings in the document.

### Wikilinks

Create connections between notes using double-bracket syntax. The app automatically detects and highlights wikilinks:
- `[[Note Title]]`
- `[[Note Title|Display Text]]`

---

## View Modes & Layouts

Use the View sections in the ribbon menu or the command palette to adjust your workspace.

### Core Layouts
- **Split View:** Editor and live preview side-by-side (default).
- **Editor Only:** Full-width markdown editor.
- **Preview Only:** Switch the toggle switch in the top right to exclusively read the document. Editing commands are safely disabled in this mode.

### Writing Modes
Specialized writing environments for different tasks:
- **Zen Mode (🧘):** Fades out the entire ribbon and interface, leaving you with just the bare editor.
- **Focus Mode (🎯):** An enhanced distraction-free mode that fades out the background and brilliantly illuminates the specific paragraph or Markdown block your cursor is actively inside, keeping you entirely focused on your current thought.
- **Typewriter Mode (⌨️):** Keeps the line you are currently typing vertically centered on your screen, preventing neck strain.
- **WYSIWYG Mode (🛗):** Hides markdown formatting characters (like `**` or `#`) when your cursor is not on the line, rendering the text in place and providing a cleaner, read-focused editing experience similar to a pure WYSIWYG editor.

### UI Themes
- **Light Theme (☀️):** Bright, clean interface for daytime use.
- **Dark Theme (🌙):** Dark interface for reduced eye strain and late-night coding.
- **High Contrast:** Available in Settings for WCAG compliance and vivid borders.

---

## Panels & Functionality

MarkdownStudio offers powerful panels that can be docked to the side of the screen or dragged out as floating windows.

### Live Preview
See a real-time rendered version of your markdown. Standard HTML, styled code blocks, mathematical equations ($KaTeX$), and even Mermaid flowcharts (```mermaid) are fully supported and rendered securely.

### Outline View
Generates a clickable, nested table of contents based on the headers currently present in your document. Easily jump around large files.

### Property (Metadata)
An interactive viewer and editor for the YAML frontmatter of your markdown document. Add key-value pairs like `author`, `date`, or custom variables, which update live at the very top of your raw markdown document.

### History
Browse local snapshots of your current document and restore to a previous state if you accidentally deleted critical text.

### Snippets
A floating toolbox equipped with useful Markdown, Math, HTML, and Mermaid templates. Click on a snippet to instantly drop its code directly into your editor where your cursor is resting.

---

## Accessibility

MarkdownStudio is highly committed to WCAG 2.1 AAA compliance.

### Visual Accessibility
- **High Contrast Mode:** Enhanced text contrast, vivid outlines, and disabled gradients.
- **Adaptive Sizing:** Fully respects browser/device text scaling and zoom increments.
- **Clear Focus:** Generous visual focus states on all interactive elements.

### Keyboard Navigation
All primary features are fully accessible via keyboard:
- Command Palette (Ctrl+P) makes every sub-feature discoverable instantly without a mouse.
- Arrow keys navigate through lists, and the Escape key gracefully backs out of any open dialog or menu.

### Screen Reader Support
The application utilizes Semantic HTML, highly-detailed ARIA labeling, and dynamic context updates internally so screen readers stay informed about the interface state.

---

## Writing Statistics

Toggle the stats panel (📊) running along the bottom bar to see real-time writing metrics:
- **Word & Character Count:** Including or excluding spaces.
- **Reading Time:** Estimated time reading based on standard WPM bounds.
- **Writing Time:** Active time tracked inside the current file block.

---

## Advanced Features

### Export & Presentation
Because MarkdownStudio runs purely in the browser and connects directly to your local file system, its extraction ecosystem is robust.
- Transform your markup into styling-preserved Word Documents or standalone HTML files.
- **eBook ready:** Auto-generates EPUB directories directly from your headings, instantly ready for an e-reader.
- **Presentation mode:** Compiles H1/H2 chunks into a structured PowerPoint Presentation without requiring Office installed.

### Developer Tooling
- **Component Architecture:** Modern React 19 + Fluent UI.
- **Extensible File Layer:** Services cleanly separate the File System Access API from the editor layout.
- **Performant CodeMirror:** Handlers implemented for smooth scrolling in 10,000+ word monolithic documents.

---

## Troubleshooting

### Common Issues & Solutions

**Problem: Can't open or save files**
*Solution:* Ensure your browser supports the File System Access API. Chrome, Edge, and Opera represent the most secure and supported environments for direct file manipulation.

**Problem: Exported PowerPoint limits images**
*Solution:* At this time, PPTX generation parses textual headers and lists to automatically design structural slides. Raw inline embedded images are not natively transformed in the initial pass.

**Problem: Keyboard commands don't work in View Mode**
*Solution:* This is expected. Destructive file operations and structural layout actions are intentionally blocked when editing functionality is disabled to prevent accidental state mismatches.

### Getting Help
If you encounter issues not covered here:
- Open your Browser Developer Tools (`F12`) to check for runtime or parsing errors.
- Ensure all third-party browser extensions (like spellcheckers) are not conflicting with CodeMirror's DOM structure.
- Try clearing your browser cache and triggering a hard refresh.
