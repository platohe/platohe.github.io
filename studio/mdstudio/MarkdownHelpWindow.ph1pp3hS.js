import{r as i,j as e,I as H,u as M,a6 as z,U as O,B as A,a7 as W,t as q}from"./vendor-core.C820_gJZ.js";import{P as E}from"./index.NcYLGbUc.js";import{u as Y}from"./windowStatePersistence.DA-Z5gci.js";import"./vendor-processing.Bbvn02d_.js";import"./vendor-utils.CRxDev2k.js";import"./vendor-documents.Bs4YkNPS.js";const I=`# Markdown Syntax Reference Guide

## Table of Contents

1. [Basic Syntax](#basic-syntax)
2. [Headings](#headings)
3. [Text Formatting](#text-formatting)
4. [Links](#links)
5. [Advanced Link Features](#advanced-link-features)
6. [Advanced Autolinks](#advanced-autolinks)
7. [Images](#images)
8. [Advanced Image Features](#advanced-image-features)
9. [Lists](#lists)
10. [Advanced List Features](#advanced-list-features)
11. [Code](#code)
12. [Advanced Code Features](#advanced-code-features)
13. [Blockquotes](#blockquotes)
14. [Callouts](#callouts)
15. [Horizontal Rules](#horizontal-rules)
16. [Tables](#tables)
17. [Advanced Table Features](#advanced-table-features)
18. [Task Lists](#task-lists)
19. [Footnotes](#footnotes)
20. [Strikethrough](#strikethrough)
21. [Highlighting](#highlighting)
22. [Subscript and Superscript](#subscript-and-superscript)
23. [Advanced Emphasis Rules](#advanced-emphasis-rules)
24. [Emoji](#emoji)
25. [HTML](#html)
26. [Advanced HTML Integration](#advanced-html-integration)
27. [Advanced Extensions](#advanced-extensions)
28. [Security and Performance](#security-and-performance)
29. [Escaping Characters](#escaping-characters)
30. [Advanced Features](#advanced-features)
31. [Quick Reference](#quick-reference)

---

## Basic Syntax

### Paragraphs
Paragraphs are simply one or more consecutive lines of text, separated by one or more blank lines.

\`\`\`markdown
This is the first paragraph.

This is the second paragraph.
\`\`\`

### Line Breaks
To create a line break, end a line with two or more spaces, or press Enter twice.

\`\`\`markdown
This is the first line.␣␣
This is the second line.

Or press Enter twice for a new paragraph.
\`\`\`

---

## Headings

Headings are created using hash symbols (\`#\`). The number of hashes indicates the heading level (1-6).

\`\`\`markdown
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
\`\`\`

### Alternative Heading Syntax
You can also use underlines for H1 and H2:

\`\`\`markdown
Heading 1
=========

Heading 2
---------
\`\`\`

---

## Text Formatting

### Bold
Wrap text with two asterisks \`**\` or two underscores \`__\`.

\`\`\`markdown
**This is bold text**
__This is also bold text__
\`\`\`

### Italic
Wrap text with one asterisk \`*\` or one underscore \`_\`.

\`\`\`markdown
*This is italic text*
_This is also italic text_
\`\`\`

### Bold and Italic
Combine both for bold italic text.

\`\`\`markdown
***This is bold and italic***
**_This is also bold and italic_**
\`\`\`

---

## Links

### Inline Links
\`\`\`markdown
[Link text](https://www.example.com)
[Link text](https://www.example.com "Optional tooltip")
\`\`\`

### Reference Links
\`\`\`markdown
[Link text][reference-id]
[reference-id]: https://www.example.com "Optional tooltip"
\`\`\`

### Email Links
\`\`\`markdown
<email@example.com>
\`\`\`

### URL Links
\`\`\`markdown
<https://www.example.com>
\`\`\`

### Relative Links
\`\`\`markdown
[About page](about.md)
[Contact form](./contact.html)
\`\`\`

### Anchor Links
\`\`\`markdown
[Jump to headings](#headings)
\`\`\`

---

## Images

### Basic Images
\`\`\`markdown
![Alt text](image.jpg)
![Alt text](image.jpg "Optional title")
\`\`\`

### Images with Links
\`\`\`markdown
[![Alt text](image.jpg)](https://www.example.com)
\`\`\`

### Reference-style Images
\`\`\`markdown
![Alt text][image-id]
[image-id]: image.jpg "Optional title"
\`\`\`

---

## Lists

### Unordered Lists
Use asterisks, pluses, or hyphens.

\`\`\`markdown
* Item 1
* Item 2
  * Nested item 2.1
  * Nested item 2.2
* Item 3

+ Item 1
+ Item 2

- Item 1
- Item 2
\`\`\`

### Ordered Lists
Use numbers followed by periods.

\`\`\`markdown
1. First item
2. Second item
3. Third item
   1. Nested item 3.1
   2. Nested item 3.2
\`\`\`

### Loose Lists
Add blank lines between list items for spacing.

\`\`\`markdown
- Item 1

- Item 2

- Item 3
\`\`\`

### Definition Lists (Extended Syntax)
\`\`\`markdown
Term 1
: Definition 1

Term 2
: Definition 2
: Definition 2.1
\`\`\`

---

## Code

### Inline Code
Wrap text with backticks.

\`\`\`markdown
Use \`console.log()\` for debugging.
\`\`\`

### Fenced Code Blocks
Use three backticks or tildes with optional language identifier.

\`\`\`markdown
\`\`\`javascript
function greet(name) {
    console.log(\`Hello, \${name}!\`);
}
\`\`\`

~~~python
def greet(name):
    print(f"Hello, {name}!")
~~~
\`\`\`

### Indented Code Blocks
Indent with four spaces or one tab.

\`\`\`markdown
    <html>
        <head>
            <title>Example</title>
        </head>
    </html>
\`\`\`

### Syntax Highlighting
Add language identifier for syntax highlighting.

\`\`\`markdown
\`\`\`javascript
const message = "Hello, World!";
console.log(message);
\`\`\`

\`\`\`css
body {
    font-family: Arial, sans-serif;
}
\`\`\`

\`\`\`html
<h1>Hello, World!</h1>
\`\`\`
\`\`\`

---

## Blockquotes

### Basic Blockquotes
Use \`>\` at the beginning of a line.

\`\`\`markdown
> This is a blockquote.
> It can span multiple lines.
\`\`\`

### Nested Blockquotes

\`\`\`markdown
> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.
\`\`\`

### Blockquotes with Other Elements

\`\`\`markdown
> ## This is a heading in a blockquote
>
> 1. This is the first list item.
> 2. This is the second list item.
>
> Here's some example code:
>
> \`\`\`javascript
> return shell.exec("code .");
> \`\`\`
>
> ---
>
> ## Callouts
>
> Callouts (also known as Admonitions) are stylized blockquotes used to highlight specific information like notes, tips, and warnings.
>
> ### Callout Syntax
> Use \`> [!TYPE] Optional Title\` at the beginning of a blockquote.
>
> \`\`\`markdown
> > [!NOTE]
> > This is a simple note callout.
>
> > [!TIP] Pro Tip
> > You can add a custom title after the type.
> \`\`\`
>
> ### Supported Types
>
> | Type | Appearance | Usage |
> |------|------------|-------|
> | \`[!NOTE]\` | Blue | General information or side notes. |
> | \`[!TIP]\` | Green | Helpful advice, shortcuts, or suggestions. |
> | \`[!IMPORTANT]\` | Purple | Critical information that shouldn't be missed. |
> | \`[!WARNING]\` | Orange | Potential pitfalls or things to be careful about. |
> | \`[!CAUTION]\` | Red | High-risk warnings or destructive actions. |
> | \`[!ERROR]\` | Red | Critical errors or failure conditions. |
\`\`\`

---

## Horizontal Rules

Create horizontal rules with three or more hyphens, asterisks, or underscores.

\`\`\`markdown
---

***

___
\`\`\`

---

## Tables

### Basic Tables
Use pipes \`|\` to separate columns and hyphens \`-\` for the header row.

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
| Cell 4   | Cell 5   | Cell 6   |
\`\`\`

### Table Alignment
Use colons \`:\` to specify column alignment.

\`\`\`markdown
| Left-aligned | Center-aligned | Right-aligned |
|:-------------|:--------------:|--------------:|
| Content      |    Content     |        Content|
| Cell         |      Cell      |           Cell|
\`\`\`

### Simplified Table Syntax
You don't need the outer pipes.

\`\`\`markdown
Header 1 | Header 2 | Header 3
---|---|---
Cell 1 | Cell 2 | Cell 3
Cell 4 | Cell 5 | Cell 6
\`\`\`

---

## Task Lists

Create task lists with brackets \`[ ]\` for unchecked and \`[x]\` for checked items.

\`\`\`markdown
- [x] Finish the report
- [ ] Send the email
- [ ] Call the client
- [x] Review the presentation

### Nested tasks
- [ ] Project A
  - [x] Research phase
  - [ ] Development phase
  - [ ] Testing phase
- [x] Project B
  - [x] Planning
  - [x] Execution
\`\`\`

---

## Footnotes

Create footnotes using \`[^identifier]\` syntax.

\`\`\`markdown
Here is some text with a footnote[^1].

This is another footnote reference[^note].

[^1]: This is the first footnote.
[^note]: This is the second footnote with more detail.
\`\`\`

### Footnotes with Multiple Paragraphs

\`\`\`markdown
Here's a sentence with a footnote[^long-footnote].

[^long-footnote]: This is the first paragraph of the footnote.

    This is the second paragraph, indented to be part of the footnote.
    
    - You can even have lists in footnotes
    - Like this one
\`\`\`

---

## Strikethrough

Wrap text with double tildes \`~~\`.

\`\`\`markdown
~~This text is struck through~~
~~Mistake~~Correction
\`\`\`

---

## Highlighting

Some markdown processors support highlighting with double equals signs \`==\`.

\`\`\`markdown
==This text is highlighted==
\`\`\`

---

## Subscript and Superscript

Extended syntax may support subscript \`~\` and superscript \`^\`.

\`\`\`markdown
H~2~O is water.
E = mc^2^
\`\`\`

---

## Emoji

Use shortcodes or Unicode emoji.

\`\`\`markdown
:smile: :heart: :thumbsup:

Or use emoji directly: 😊 ❤️ 👍
\`\`\`

---

## HTML

You can use most HTML tags in markdown.

### Inline HTML
\`\`\`markdown
This is <em>HTML emphasis</em> and this is <strong>HTML strong</strong>.
\`\`\`

### Block-level HTML
\`\`\`markdown
<div style="border: 1px solid #ccc; padding: 10px;">
    This is a div with custom styling.
    <p>And this is a paragraph inside it.</p>
</div>
\`\`\`

### HTML Tables
\`\`\`markdown
<table>
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>Cell 1</td>
        <td>Cell 2</td>
    </tr>
</table>
\`\`\`

---

## Escaping Characters

To display literal characters that would otherwise be formatted, use backslashes.

\`\`\`markdown
\\*Not italic\\*
\\**Not bold\\**
\\\`Not code\\\`
\\[Not a link\\](not-a-link)
\`\`\`

### Characters That Need Escaping
\`\`\`
\\   backslash
\`   backtick
*   asterisk
_   underscore
{ } curly braces
[ ] square brackets
( ) parentheses
#   hash
+   plus
-   minus
.   dot
!   exclamation mark
|   pipe
\`\`\`

---

## Advanced Link Features

### Implicit Reference Links
Use empty brackets to reference the next available link definition.

\`\`\`markdown
This is an [implicit][] reference link.

[implicit]: https://www.example.com
\`\`\`

### Shortcut Reference Links
Omit the reference ID entirely for the first matching link text.

\`\`\`markdown
This is a [shortcut] reference link.

[shortcut]: https://www.example.com
\`\`\`

### Link Reference Precedence
When multiple definitions exist, the last one takes precedence.

\`\`\`markdown
[link]: /first-url
[link]: /second-url
[link]: /third-url

This uses /third-url: [link]
\`\`\`

### Link Title Variations
Multiple ways to specify link titles.

\`\`\`markdown
[Single quotes](url 'Title in single quotes')
[Double quotes](url "Title in double quotes")
[Parentheses](url (Title in parentheses))
\`\`\`

---

## Advanced Autolinks

### Extended WWW Autolinks
Automatically link URLs starting with \`www.\` without explicit protocol.

\`\`\`markdown
Visit www.example.com for more information.
www.commonmark.org/help for documentation.
\`\`\`

### Email Autolinks
Email addresses are automatically converted to mailto links.

\`\`\`markdown
Contact us at support@example.com
Email john.doe@company.org for help
\`\`\`

### Protocol-Relative URLs
Use \`//\` for protocol-relative URLs that inherit the current page's protocol.

\`\`\`markdown
Link to //cdn.example.com/script.js
Visit //assets.example.com/images/
\`\`\`

### Autolink Validation
Autolinks follow strict validation rules for domains and paths.

\`\`\`markdown
Valid: www.example.com/path?query=value#anchor
Valid: user@domain.com
Invalid: www.invalid_domain
\`\`\`

---

## Advanced List Features

### Lazy Numbering
Numbers don't need to be sequential - they're auto-corrected.

\`\`\`markdown
1. First item
1. Second item  (renders as 2.)
1. Third item   (renders as 3.)
\`\`\`

### Mixed List Markers
Different bullet types can be used in the same list.

\`\`\`markdown
* Item with asterisk
+ Item with plus
- Item with hyphen
\`\`\`

### List Continuation
Paragraphs in list items require proper indentation.

\`\`\`markdown
1. First item with continuation

   This paragraph is part of item 1.
   
   This is also part of item 1.

2. Second item
\`\`\`

### Nested List Complexity
Complex nesting with different list types.

\`\`\`markdown
1. First ordered item
   * Nested unordered
   * Another nested
   1. Nested ordered
      1. Double nested
2. Second ordered item
\`\`\`

---

## Advanced Code Features

### Multiple Backtick Code Spans
Use multiple backticks to embed backticks in code.

\`\`\`markdown
\`\`Use \`code\` with backticks\`\`
\`\`Use single backtick: \` and multiple: \`\`
\`\`\`

### Tilde Fenced Code Blocks
Use tildes instead of backticks for fenced blocks.

\`\`\`markdown
~~~
echo "Hello, World!"
~~~
\`\`\`

### Info Strings and Metadata
Add language-specific metadata to code blocks.

\`\`\`markdown
\`\`\`javascript {data-line="1,3-5"}
function example() {
    console.log("Line 1");
    console.log("Line 2");
    console.log("Line 3");
}
\`\`\`
\`\`\`

### Code Block Attributes
Some processors support attributes on code blocks.

\`\`\`markdown
\`\`\`python {.line-numbers}
def hello():
    print("Hello, World!")
\`\`\`
\`\`\`

---

## Advanced Emphasis Rules

### Emphasis Precedence
How nested emphasis is resolved according to rules.

\`\`\`markdown
*This is *emphasized* text*
**This is *emphasized in bold* text**
***This is bold and italic***
\`\`\`

### Multiple Underscore Emphasis
Different underscore combinations for emphasis levels.

\`\`\`markdown
_italic text_
__bold text__
___bold and italic___
\`\`\`

### Emphasis Boundaries
Rules for what can and cannot be emphasized.

\`\`\`markdown
*This works* (emphasis within word)
This*doesn't*work (emphasis crossing word boundary)
a*b*c (emphasis spanning multiple characters)
\`\`\`

### Strong Emphasis Variants
Multiple ways to create strong emphasis.

\`\`\`markdown
**Double asterisks**
__Double underscores__
\`\`\`

---

## Advanced Table Features

### Table Cell Attributes
Add classes and styles to table cells.

\`\`\`markdown
| Header 1 | Header 2 | Header 3 |
|-----------|-----------|-----------|
| Cell 1 {.class} | Cell 2 {style="color:red"} | Cell 3 |
\`\`\`

### Table Footers
Some processors support table footer sections.

\`\`\`markdown
| Header 1 | Header 2 |
|-----------|-----------|
| Data 1   | Data 2   |
| Footer 1  | Footer 2  |
|===========|===========|
\`\`\`

### Complex Table Alignment
Multiple alignment options per column.

\`\`\`markdown
| Left | Center | Right | Default |
|:-----|:------:|------:|---------|
| Text | Center | Right | Normal |
\`\`\`

---

## Advanced Image Features

### Image Dimensions
Specify width and height for images.

\`\`\`markdown
![Alt text](image.jpg =100x50)
![Logo](logo.png =200x100 "Scaled logo")
\`\`\`

### Image Classes and Attributes
Add CSS classes to images.

\`\`\`markdown
![Alt text](image.jpg){.responsive .shadow}
![Thumbnail](thumb.jpg){#thumbnail}
\`\`\`

### Figure Captions
Extended syntax for figures with captions.

\`\`\`markdown
![Alt text](image.jpg "Title")
*Figure 1: This is the caption for the image.*
\`\`\`

---

## Advanced HTML Integration

### HTML Comments
Use HTML comments that won't appear in rendered output.

\`\`\`markdown
<!-- This is a comment -->
<!-- 
    Multi-line comment
    with details
-->
\`\`\`

### HTML Attributes on Markdown
Add attributes to markdown elements.

\`\`\`markdown
### Header {#custom-id}
This paragraph has {.custom-class #custom-id}

![Alt](image.jpg){width="300" height="200"}
\`\`\`

### Raw HTML Restrictions
What HTML is allowed and sanitized.

\`\`\`markdown
<!-- Allowed: semantic tags -->
<div>Content</div>
<span>Highlight</span>

<!-- Often disallowed: script tags -->
<script>alert("XSS")<\/script> <!-- Usually stripped -->

<!-- Sanitized attributes -->
<img src="javascript:alert('XSS')" /> <!-- Usually cleaned -->
\`\`\`

---

## Advanced Extensions

### Abbreviations
Define abbreviations that are automatically linked.

\`\`\`markdown
HTML is the standard for web content.

*[HTML]: HyperText Markup Language
*[CSS]: Cascading Style Sheets
*[JS]: JavaScript
\`\`\`

### Citations
Academic citation syntax for references.

\`\`\`markdown
This is a claim that needs citation [@smith2020].

Multiple citations can be combined [@smith2020; @johnson2019].

See the bibliography for full details [@smith2020, pp. 45-48].
\`\`\`

### Definition Lists (Complete)
Term and definition pairs with multiple definitions.

\`\`\`markdown
Apple
: A fruit that keeps the doctor away
: A technology company
: A type of pie

Orange
: A citrus fruit
: A color between red and yellow
\`\`\`

### Footnote Variants
Different footnote syntax styles.

\`\`\`markdown
Inline footnote^[This is an inline footnote]

Reference footnote[^1]

[^1]: This is a reference footnote
\`\`\`

---

## Security and Performance

### HTML Sanitization
Understanding what HTML is stripped for security.

\`\`\`markdown
<!-- Safe: Basic formatting -->
<strong>Bold</strong>
<em>Italic</em>

<!-- Stripped: Dangerous tags -->
<script>alert('XSS')<\/script>
<iframe src="malicious.com"></iframe>

<!-- Cleaned: Dangerous attributes -->
<img src="javascript:alert('XSS')" />
<a href="javascript:void(0)">Click me</a>
\`\`\`

### XSS Prevention
Best practices for safe markdown rendering.

\`\`\`markdown
<!-- Safe image -->
![Alt text](image.jpg)

<!-- Potentially unsafe -->
![Alt](javascript:alert('XSS'))

<!-- Safe link -->
[Safe](https://example.com)

<!-- Potentially unsafe -->
[Unsafe](javascript:alert('XSS'))
\`\`\`

### Performance Considerations
Optimizing large markdown documents.

\`\`\`markdown
<!-- Use efficient list structures -->
- Item 1
- Item 2
- Item 3

<!-- Avoid excessive nesting -->
> > > > > Too deep nesting hurts performance

<!-- Use appropriate code blocks -->
\`\`\`python
# Efficient code highlighting
\`\`\`
\`\`\`

---

## Advanced Features

### Front Matter (YAML)
Some markdown processors support YAML front matter.

\`\`\`markdown
---
title: "My Document"
author: "John Doe"
date: "2023-01-01"
tags: ["markdown", "documentation"]
---

# Content starts here
\`\`\`

### Math Expressions (LaTeX)
Some processors support math with dollar signs.

\`\`\`markdown
Inline math: $E = mc^2$

Block math:
$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$
\`\`\`

### Diagrams and Charts
Extended syntax may support mermaid diagrams.

\`\`\`markdown
\`\`\`mermaid
graph TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E
\`\`\`
\`\`\`

### Alerts and Admonitions
Some processors support special block elements.

\`\`\`markdown
> **Note:** This is important information.
>
> **Warning:** Be careful with this action.
>
> **Tip:** Here's a helpful suggestion.
\`\`\`

---

## Quick Reference

| Element | Syntax | Example |
|---------|--------|---------|
| Heading | \`# Heading\` | \`# H1\` \`## H2\` |
| Bold | \`**text**\` or \`__text__\` | \`**bold**\` |
| Italic | \`*text*\` or \`_text_\` | \`*italic*\` |
| Link | \`[text](url)\` | \`[Google](https://google.com)\` |
| Image | \`![alt](url)\` | \`![Logo](logo.png)\` |
| Code | \`\` \`code\` \`\` | \`\` \`console.log()\` \`\` |
| Code Block | \` \`\`\` \` | \`\`\`javascript\` |
| List | \`- item\` or \`1. item\` | \`- Item 1\` |
| Blockquote | \`> text\` | \`> Quote\` |
| Horizontal Rule | \`---\` | \`---\` |
| Table | \`|col|col|\` | \`|A|B|\` |
| Task List | \`- [x] done\` | \`- [x] Complete\` |
| Callout | \`> [!NOTE]\` | \`> [!TIP] Pro Tip\` |
| Footnote | \`[^1]\` | \`Text[^1]\` |
| Strikethrough | \`~~text~~\` | \`~~deleted~~\` |

### Common Keyboard Shortcuts (in Editors)

| Action | Windows/Linux | Mac |
|--------|---------------|-----|
| Bold | Ctrl+B | Cmd+B |
| Italic | Ctrl+I | Cmd+I |
| Strikethrough | Alt+S | Opt+S |
| Link | Ctrl+K | Cmd+K |
| Image | Ctrl+Shift+I | Cmd+Shift+I |
| Code | Ctrl+\\\` | Cmd+\\\` |
| Code Block | Ctrl+Shift+C | Cmd+Shift+C |
| Heading 1-6 | Ctrl+1 to 6 | Cmd+1 to 6 |
| Bullet List | Ctrl+Shift+8 | Cmd+Shift+8 |
| Numbered List | Ctrl+Shift+9 | Cmd+Shift+9 |
| Table | Ctrl+Shift+T | Cmd+Shift+T |
| Horizontal Rule | Ctrl+Shift+- | Cmd+Shift+- |
| Undo | Ctrl+Z | Cmd+Z |
| Redo | Ctrl+Y | Cmd+Y |
| Find | Ctrl+F | Cmd+F |
| Replace | Ctrl+H | Cmd+H |
| Command Palette | Ctrl+P | Cmd+P |
| Save | Ctrl+S | Cmd+S |

### Best Practices

1. **Be Consistent**: Use the same syntax patterns throughout your document
2. **Use Semantic Headings**: Don't skip heading levels (H1 → H3)
3. **Add Alt Text**: Always include descriptive alt text for images
4. **Use Links Wisely**: Make link text descriptive, not "click here"
5. **Keep Lines Short**: Break long lines for better readability
6. **Use Code Blocks**: For code examples, always specify the language
7. **Test Your Markdown**: Preview your document to ensure proper rendering
8. **Use Footnotes Sparingly**: Don't overuse footnotes in technical documentation
9. **Maintain List Formatting**: Keep list items aligned for readability
10. **Escape When Needed**: Use backslashes to display special characters literally
11. **Consider Security**: Be aware of XSS risks with user-generated content
12. **Optimize Performance**: Use efficient structures for large documents
13. **Validate Links**: Ensure all links and references are properly defined
14. **Use Semantic HTML**: When mixing HTML, use appropriate tags
15. **Test Cross-Platform**: Verify rendering across different markdown processors

---

## Markdown Flavors

### Common Markdown Variants

| Flavor | Features | Common Uses |
|--------|----------|-------------|
| **GitHub Flavored Markdown (GFM)** | Tables, task lists, strikethrough, autolinks | GitHub, GitLab |
| **CommonMark** | Standardized specification | Documentation tools |
| **Markdown Extra** | Footnotes, tables, definition lists | PHP Markdown |
| **MultiMarkdown** | Citations, math, tables | Academic writing |
| **R Markdown** | R code chunks, LaTeX integration | Data science |

### Feature Compatibility

| Feature | CommonMark | GFM | Markdown Extra | MultiMarkdown |
|---------|------------|-----|----------------|---------------|
| Tables | ❌ | ✅ | ✅ | ✅ |
| Task Lists | ❌ | ✅ | ❌ | ❌ |
| Footnotes | ❌ | ❌ | ✅ | ✅ |
| Strikethrough | ❌ | ✅ | ✅ | ✅ |
| Math | ❌ | ❌ | ❌ | ✅ |
| Definition Lists | ❌ | ❌ | ✅ | ✅ |

---

## Tips and Tricks

### Linking Within Documents
\`\`\`markdown
[Link to section](#section-name)
[Link to heading](#headings)
\`\`\`

### Creating Buttons (HTML)
\`\`\`markdown
<a href="#" class="button">Click Me</a>
\`\`\`

### Embedding Videos
\`\`\`markdown
[![Video Thumbnail](thumbnail.jpg)](video-url)
\`\`\`

### Creating Badges
\`\`\`markdown
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
\`\`\`

### Using Emojis in Headers
\`\`\`markdown
## 🚀 Getting Started
## 📚 Documentation
## ⚠️ Important Notes
\`\`\`

### Combining Elements
\`\`\`markdown
> **💡 Tip:** You can combine \`**bold**\`, \`*italic*\`, and \`~~strikethrough~~\` in blockquotes.
\`\`\`

### Creating TOC (Table of Contents)
\`\`\`markdown
## Table of Contents
1. [Section 1](#section-1)
2. [Section 2](#section-2)
3. [Section 3](#section-3)
\`\`\`

---

## Resources

### Official Documentation
- [CommonMark Specification](https://commonmark.org/)
- [GitHub Flavored Markdown](https://github.github.com/gfm/)
- [Markdown Guide](https://www.markdownguide.org/)

### Tools and Editors
- [Typora](https://typora.io/) - Beautiful markdown editor
- [Mark Text](https://marktext.app/) - Open-source editor
- [Obsidian](https://obsidian.md/) - Knowledge base
- [Notion](https://www.notion.so/) - All-in-one workspace

### Online Converters
- [Dillinger](https://dillinger.io/) - Online markdown editor
- [StackEdit](https://stackedit.io/) - In-browser markdown editor
- [Markdown to HTML](https://markdown-it.github.io/) - Live converter

### Cheatsheets
- [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/)
- [GitHub Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

---

*This reference guide covers the most common markdown syntax and extensions. Specific features may vary depending on the markdown processor you're using.*
`,Z=({isVisible:u,onClose:j,onDock:T,isDarkTheme:X,inline:B=!1})=>{const[r,p]=i.useState(""),{position:o,setPosition:R,size:s,setSize:F}=Y("markdown-help-window",{x:100,y:100},{width:500,height:600}),[D,U]=i.useState({width:window.innerWidth,height:window.innerHeight}),l=D.width<600,[m,g]=i.useState(!1),[w,k]=i.useState(!1),[f,y]=i.useState({x:0,y:0}),[d,S]=i.useState({x:0,y:0,width:0,height:0}),P=i.useRef(null);i.useEffect(()=>{u&&p("")},[u]),i.useEffect(()=>{const n=()=>{U({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const _=n=>{l||(n.target.closest(".help-window-header")?(g(!0),y({x:n.clientX-o.x,y:n.clientY-o.y}),n.preventDefault()):n.target.closest(".help-window-resize-handle")&&(k(!0),S({x:n.clientX,y:n.clientY,width:s.width,height:s.height}),n.preventDefault()))},N=n=>{if(l)return;const t=n.touches[0];n.target.closest(".help-window-header")?(g(!0),y({x:t.clientX-o.x,y:t.clientY-o.y})):n.target.closest(".help-window-resize-handle")&&(k(!0),S({x:t.clientX,y:t.clientY,width:s.width,height:s.height}))};i.useEffect(()=>{const n=a=>{const c=a.type==="touchmove"?a.touches[0].clientX:a.clientX,h=a.type==="touchmove"?a.touches[0].clientY:a.clientY;if(m){const x=c-f.x,b=h-f.y,C=window.innerWidth-100,v=window.innerHeight-100;R({x:Math.max(0,Math.min(x,C)),y:Math.max(0,Math.min(b,v))})}else if(w){const x=c-d.x,b=h-d.y,C=Math.max(300,d.width+x),v=Math.max(200,d.height+b);F({width:Math.min(C,window.innerWidth-o.x-20),height:Math.min(v,window.innerHeight-o.y-20)})}},t=()=>{g(!1),k(!1)};if(m||w)return document.addEventListener("mousemove",n),document.addEventListener("mouseup",t),document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",t),document.addEventListener("touchcancel",t),()=>{document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",t),document.removeEventListener("touchmove",n),document.removeEventListener("touchend",t),document.removeEventListener("touchcancel",t)}},[m,w,f,d,o]);const L=i.useMemo(()=>{if(!r.trim())return I;const n=I.split(/\n(?=## )/),t=r.toLowerCase(),a=n.filter((c,h)=>h===0&&!c.toLowerCase().includes(t)?!1:c.toLowerCase().includes(t));return a.length===0?`## No results found
Try a different search term.`:a.join(`

`)},[r]);return u?B?e.jsxs("div",{className:"help-window-container inline",style:{display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("div",{style:{padding:"12px",borderBottom:"1px solid var(--color-neutral-stroke1)",backgroundColor:"var(--color-neutral-background1)"},children:e.jsx(H,{contentBefore:e.jsx(M,{}),placeholder:"Search syntax (e.g., 'table', 'bold', 'image')...",value:r,onChange:(n,t)=>p(t.value),style:{width:"100%"},"aria-label":"Search syntax reference"})}),e.jsx("div",{style:{flex:1,overflow:"auto",padding:"16px",backgroundColor:"var(--color-neutral-background1)"},children:e.jsx("div",{className:"help-preview-container",children:e.jsx(E,{content:L,visible:!0,inline:!0})})})]}):e.jsxs("div",{ref:P,onMouseDown:_,onTouchStart:N,className:`help-window-container ${l?"is-mobile":""}`,style:l?{}:{left:o.x,top:o.y,width:`${s.width}px`,height:`${s.height}px`},children:[e.jsxs("div",{className:"help-window-header",style:{padding:"12px 16px",borderBottom:"1px solid var(--color-neutral-stroke1)",display:"flex",justifyContent:"space-between",alignItems:"center",cursor:l?"default":m?"grabbing":"grab",backgroundColor:"var(--color-neutral-background2)",userSelect:"none"},children:[e.jsxs("span",{style:{fontWeight:600,fontSize:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(z,{})," Markdown Syntax Help"]}),e.jsxs("div",{style:{display:"flex",gap:"4px"},children:[T&&e.jsx(O,{content:"Dock to right panel",relationship:"label",children:e.jsx(A,{appearance:"subtle",icon:e.jsx(W,{}),onClick:T,size:"small"})}),e.jsx(A,{appearance:"subtle",icon:e.jsx(q,{}),onClick:j,size:"small"})]})]}),e.jsx("div",{style:{padding:"12px",borderBottom:"1px solid var(--color-neutral-stroke1)",backgroundColor:"var(--color-neutral-background1)"},children:e.jsx(H,{contentBefore:e.jsx(M,{}),placeholder:"Search syntax (e.g., 'table', 'bold', 'image')...",value:r,onChange:(n,t)=>p(t.value),style:{width:"100%"}})}),e.jsx("div",{style:{flex:1,overflow:"auto",padding:"16px",backgroundColor:"var(--color-neutral-background1)"},children:e.jsx("div",{className:"help-preview-container",children:e.jsx(E,{content:L,visible:!0,inline:!0})})}),e.jsx("div",{className:"help-window-resize-handle",style:{position:"absolute",bottom:0,right:0,width:"20px",height:"20px",cursor:"nwse-resize",zIndex:10,background:"linear-gradient(135deg, transparent 50%, var(--color-neutral-stroke1) 50%)",borderRadius:"0 0 8px 0"}})]}):null};export{Z as default};
