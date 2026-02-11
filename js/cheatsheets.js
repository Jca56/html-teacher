/* ============================================
   Cheat Sheets / Quick Reference
   5 reference cards with HTML and CSS content
   ============================================ */

const CHEATSHEETS = [
  /* ---------- Sheet 1: HTML Tags ---------- */
  {
    id: 'html-tags',
    title: 'HTML Tags Reference',
    description: 'All the essential HTML tags in one place.',
    content: `
<h2>HTML Tags Reference</h2>

<h3>Document Structure</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;!DOCTYPE html&gt;</code></td><td>Declares HTML5 document</td></tr>
  <tr><td><code>&lt;html&gt;</code></td><td>Root element</td></tr>
  <tr><td><code>&lt;head&gt;</code></td><td>Metadata container</td></tr>
  <tr><td><code>&lt;body&gt;</code></td><td>Visible content</td></tr>
  <tr><td><code>&lt;title&gt;</code></td><td>Page title (in browser tab)</td></tr>
  <tr><td><code>&lt;meta&gt;</code></td><td>Metadata (charset, viewport)</td></tr>
  <tr><td><code>&lt;link&gt;</code></td><td>Link external resources (CSS)</td></tr>
</table>

<h3>Text</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;h1&gt;</code> – <code>&lt;h6&gt;</code></td><td>Headings (1 = largest)</td></tr>
  <tr><td><code>&lt;p&gt;</code></td><td>Paragraph</td></tr>
  <tr><td><code>&lt;br&gt;</code></td><td>Line break</td></tr>
  <tr><td><code>&lt;hr&gt;</code></td><td>Horizontal rule</td></tr>
  <tr><td><code>&lt;strong&gt;</code></td><td>Bold (important)</td></tr>
  <tr><td><code>&lt;em&gt;</code></td><td>Italic (emphasis)</td></tr>
  <tr><td><code>&lt;span&gt;</code></td><td>Inline container</td></tr>
</table>

<h3>Lists</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;ul&gt;</code></td><td>Unordered list (bullets)</td></tr>
  <tr><td><code>&lt;ol&gt;</code></td><td>Ordered list (numbers)</td></tr>
  <tr><td><code>&lt;li&gt;</code></td><td>List item</td></tr>
</table>

<h3>Links & Media</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;a href="url"&gt;</code></td><td>Hyperlink</td></tr>
  <tr><td><code>&lt;img src="url" alt=""&gt;</code></td><td>Image</td></tr>
  <tr><td><code>&lt;video&gt;</code></td><td>Video player</td></tr>
  <tr><td><code>&lt;audio&gt;</code></td><td>Audio player</td></tr>
  <tr><td><code>&lt;iframe&gt;</code></td><td>Embed another page</td></tr>
</table>

<h3>Containers & Semantic</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;div&gt;</code></td><td>Generic block container</td></tr>
  <tr><td><code>&lt;header&gt;</code></td><td>Page/section header</td></tr>
  <tr><td><code>&lt;nav&gt;</code></td><td>Navigation links</td></tr>
  <tr><td><code>&lt;main&gt;</code></td><td>Main content</td></tr>
  <tr><td><code>&lt;section&gt;</code></td><td>Thematic section</td></tr>
  <tr><td><code>&lt;article&gt;</code></td><td>Standalone content</td></tr>
  <tr><td><code>&lt;aside&gt;</code></td><td>Sidebar content</td></tr>
  <tr><td><code>&lt;footer&gt;</code></td><td>Page/section footer</td></tr>
</table>

<h3>Forms</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;form&gt;</code></td><td>Form container</td></tr>
  <tr><td><code>&lt;input type="..."&gt;</code></td><td>Text, email, number, password, checkbox, radio</td></tr>
  <tr><td><code>&lt;textarea&gt;</code></td><td>Multi-line text input</td></tr>
  <tr><td><code>&lt;select&gt; + &lt;option&gt;</code></td><td>Dropdown</td></tr>
  <tr><td><code>&lt;button&gt;</code></td><td>Clickable button</td></tr>
  <tr><td><code>&lt;label for="id"&gt;</code></td><td>Input label</td></tr>
</table>

<h3>Tables</h3>
<table class="ref-table">
  <tr><th>Tag</th><th>Purpose</th></tr>
  <tr><td><code>&lt;table&gt;</code></td><td>Table container</td></tr>
  <tr><td><code>&lt;tr&gt;</code></td><td>Table row</td></tr>
  <tr><td><code>&lt;th&gt;</code></td><td>Header cell</td></tr>
  <tr><td><code>&lt;td&gt;</code></td><td>Data cell</td></tr>
</table>`
  },

  /* ---------- Sheet 2: CSS Selectors ---------- */
  {
    id: 'css-selectors',
    title: 'CSS Selectors',
    description: 'How to target elements for styling.',
    content: `
<h2>CSS Selectors</h2>

<h3>Basic Selectors</h3>
<table class="ref-table">
  <tr><th>Selector</th><th>Example</th><th>Selects</th></tr>
  <tr><td>Element</td><td><code>p { }</code></td><td>All &lt;p&gt; elements</td></tr>
  <tr><td>Class</td><td><code>.intro { }</code></td><td>Elements with class="intro"</td></tr>
  <tr><td>ID</td><td><code>#title { }</code></td><td>Element with id="title"</td></tr>
  <tr><td>Universal</td><td><code>* { }</code></td><td>All elements</td></tr>
</table>

<h3>Combinators</h3>
<table class="ref-table">
  <tr><th>Combinator</th><th>Example</th><th>Selects</th></tr>
  <tr><td>Descendant</td><td><code>div p</code></td><td>p inside div (any depth)</td></tr>
  <tr><td>Child</td><td><code>div > p</code></td><td>p directly inside div</td></tr>
  <tr><td>Adjacent</td><td><code>h1 + p</code></td><td>p immediately after h1</td></tr>
  <tr><td>General sibling</td><td><code>h1 ~ p</code></td><td>All p after h1 (same parent)</td></tr>
</table>

<h3>Pseudo-classes</h3>
<table class="ref-table">
  <tr><th>Pseudo-class</th><th>Purpose</th></tr>
  <tr><td><code>:hover</code></td><td>Mouse is over element</td></tr>
  <tr><td><code>:focus</code></td><td>Element has focus</td></tr>
  <tr><td><code>:active</code></td><td>Being clicked</td></tr>
  <tr><td><code>:first-child</code></td><td>First child of parent</td></tr>
  <tr><td><code>:last-child</code></td><td>Last child of parent</td></tr>
  <tr><td><code>:nth-child(n)</code></td><td>nth child (1, 2, odd, even, 2n+1)</td></tr>
</table>

<h3>Attribute Selectors</h3>
<table class="ref-table">
  <tr><th>Selector</th><th>Example</th></tr>
  <tr><td><code>[attr]</code></td><td>Elements with the attribute</td></tr>
  <tr><td><code>[attr="val"]</code></td><td>Exact match</td></tr>
  <tr><td><code>[attr^="val"]</code></td><td>Starts with</td></tr>
  <tr><td><code>[attr$="val"]</code></td><td>Ends with</td></tr>
</table>

<h3>Specificity (Who Wins?)</h3>
<table class="ref-table">
  <tr><th>Level</th><th>Example</th><th>Weight</th></tr>
  <tr><td>Inline style</td><td><code>style="..."</code></td><td>1000</td></tr>
  <tr><td>ID</td><td><code>#title</code></td><td>100</td></tr>
  <tr><td>Class / pseudo-class</td><td><code>.intro</code></td><td>10</td></tr>
  <tr><td>Element</td><td><code>p</code></td><td>1</td></tr>
</table>`
  },

  /* ---------- Sheet 3: Box Model ---------- */
  {
    id: 'box-model',
    title: 'The Box Model',
    description: 'Visual guide to margin, border, padding, and content.',
    content: `
<h2>The CSS Box Model</h2>

<div style="text-align:center;padding:20px;">
  <div style="display:inline-block;background:rgba(212,168,67,0.1);padding:24px;border:2px dashed rgba(212,168,67,0.3);border-radius:8px;">
    <div style="font-size:13px;color:#a89880;margin-bottom:4px;">margin</div>
    <div style="background:rgba(212,168,67,0.15);padding:20px;border:3px solid #d4a843;border-radius:6px;">
      <div style="font-size:13px;color:#d4a843;margin-bottom:4px;">border</div>
      <div style="background:rgba(212,168,67,0.1);padding:16px;border-radius:4px;">
        <div style="font-size:13px;color:#a89880;margin-bottom:4px;">padding</div>
        <div style="background:#2a2218;padding:20px;border-radius:4px;color:#e8dcc8;text-align:center;">
          <strong>Content</strong>
        </div>
      </div>
    </div>
  </div>
</div>

<h3>Properties</h3>
<table class="ref-table">
  <tr><th>Property</th><th>What It Does</th></tr>
  <tr><td><code>width / height</code></td><td>Content area size</td></tr>
  <tr><td><code>padding</code></td><td>Space inside the border</td></tr>
  <tr><td><code>border</code></td><td>The visible edge</td></tr>
  <tr><td><code>margin</code></td><td>Space outside the border</td></tr>
  <tr><td><code>box-sizing</code></td><td>How width is calculated</td></tr>
</table>

<h3>Shorthand Patterns</h3>
<table class="ref-table">
  <tr><th>Shorthand</th><th>Meaning</th></tr>
  <tr><td><code>padding: 10px;</code></td><td>All sides: 10px</td></tr>
  <tr><td><code>padding: 10px 20px;</code></td><td>Top/bottom: 10px, Left/right: 20px</td></tr>
  <tr><td><code>padding: 5px 10px 15px 20px;</code></td><td>Top, Right, Bottom, Left (clockwise)</td></tr>
</table>

<h3>box-sizing</h3>
<table class="ref-table">
  <tr><th>Value</th><th>Behavior</th></tr>
  <tr><td><code>content-box</code></td><td>Default. Width = content only. Padding + border add extra size.</td></tr>
  <tr><td><code>border-box</code></td><td>Width = content + padding + border. Much more predictable!</td></tr>
</table>
<p style="margin-top:12px;font-size:14px;color:#a89880;">Tip: Always use <code>* { box-sizing: border-box; }</code></p>`
  },

  /* ---------- Sheet 4: Flexbox ---------- */
  {
    id: 'flexbox',
    title: 'Flexbox Guide',
    description: 'Flexbox layout with Flutter parallels.',
    content: `
<h2>Flexbox Guide</h2>

<h3>Container Properties</h3>
<table class="ref-table">
  <tr><th>CSS</th><th>Values</th><th>Flutter Equivalent</th></tr>
  <tr><td><code>display: flex</code></td><td>—</td><td>Row() or Column()</td></tr>
  <tr><td><code>flex-direction</code></td><td>row, column, row-reverse, column-reverse</td><td>Row vs Column</td></tr>
  <tr><td><code>justify-content</code></td><td>flex-start, center, flex-end, space-between, space-around, space-evenly</td><td>MainAxisAlignment</td></tr>
  <tr><td><code>align-items</code></td><td>flex-start, center, flex-end, stretch, baseline</td><td>CrossAxisAlignment</td></tr>
  <tr><td><code>flex-wrap</code></td><td>nowrap, wrap, wrap-reverse</td><td>Wrap widget</td></tr>
  <tr><td><code>gap</code></td><td>px, rem, etc.</td><td>SizedBox between children</td></tr>
</table>

<h3>Item Properties</h3>
<table class="ref-table">
  <tr><th>CSS</th><th>Values</th><th>Flutter Equivalent</th></tr>
  <tr><td><code>flex: 1</code></td><td>shorthand for grow/shrink/basis</td><td>Expanded(flex: 1)</td></tr>
  <tr><td><code>flex-grow</code></td><td>0, 1, 2...</td><td>Expanded(flex: n)</td></tr>
  <tr><td><code>flex-shrink</code></td><td>0, 1</td><td>—</td></tr>
  <tr><td><code>align-self</code></td><td>auto, flex-start, center, flex-end</td><td>Align widget</td></tr>
  <tr><td><code>order</code></td><td>integer</td><td>Reorder children list</td></tr>
</table>

<h3>Common Patterns</h3>
<table class="ref-table">
  <tr><th>Pattern</th><th>CSS</th></tr>
  <tr><td>Center everything</td><td><code>display:flex; justify-content:center; align-items:center;</code></td></tr>
  <tr><td>Space between</td><td><code>display:flex; justify-content:space-between;</code></td></tr>
  <tr><td>Equal columns</td><td>Parent: <code>display:flex; gap:16px;</code> Children: <code>flex:1;</code></td></tr>
  <tr><td>Wrapping tags</td><td><code>display:flex; flex-wrap:wrap; gap:8px;</code></td></tr>
</table>`
  },

  /* ---------- Sheet 5: CSS Properties ---------- */
  {
    id: 'css-properties',
    title: 'CSS Properties Reference',
    description: 'Common CSS properties, values, and units.',
    content: `
<h2>CSS Properties Reference</h2>

<h3>Colors & Backgrounds</h3>
<table class="ref-table">
  <tr><th>Property</th><th>Example</th></tr>
  <tr><td><code>color</code></td><td>red, #ff0000, rgb(255,0,0), hsl(0,100%,50%)</td></tr>
  <tr><td><code>background-color</code></td><td>Same formats as color</td></tr>
  <tr><td><code>background</code></td><td>linear-gradient(to right, #000, #fff)</td></tr>
  <tr><td><code>opacity</code></td><td>0 (invisible) to 1 (solid)</td></tr>
</table>

<h3>Typography</h3>
<table class="ref-table">
  <tr><th>Property</th><th>Example Values</th></tr>
  <tr><td><code>font-family</code></td><td>Arial, 'Segoe UI', sans-serif</td></tr>
  <tr><td><code>font-size</code></td><td>16px, 1rem, 1.2em</td></tr>
  <tr><td><code>font-weight</code></td><td>normal, bold, 100-900</td></tr>
  <tr><td><code>line-height</code></td><td>1.6, 24px</td></tr>
  <tr><td><code>text-align</code></td><td>left, center, right, justify</td></tr>
  <tr><td><code>text-decoration</code></td><td>none, underline, line-through</td></tr>
  <tr><td><code>text-transform</code></td><td>uppercase, lowercase, capitalize</td></tr>
  <tr><td><code>letter-spacing</code></td><td>1px, 0.1em</td></tr>
</table>

<h3>Box & Spacing</h3>
<table class="ref-table">
  <tr><th>Property</th><th>Example</th></tr>
  <tr><td><code>width / height</code></td><td>200px, 100%, auto</td></tr>
  <tr><td><code>max-width</code></td><td>720px, 100%</td></tr>
  <tr><td><code>padding</code></td><td>16px, 10px 20px</td></tr>
  <tr><td><code>margin</code></td><td>16px, 0 auto (center block)</td></tr>
  <tr><td><code>border</code></td><td>1px solid #ccc</td></tr>
  <tr><td><code>border-radius</code></td><td>8px, 50% (circle)</td></tr>
  <tr><td><code>box-shadow</code></td><td>0 4px 12px rgba(0,0,0,0.3)</td></tr>
</table>

<h3>Layout</h3>
<table class="ref-table">
  <tr><th>Property</th><th>Values</th></tr>
  <tr><td><code>display</code></td><td>block, inline, inline-block, flex, grid, none</td></tr>
  <tr><td><code>position</code></td><td>static, relative, absolute, fixed, sticky</td></tr>
  <tr><td><code>top/right/bottom/left</code></td><td>px, %, auto</td></tr>
  <tr><td><code>z-index</code></td><td>integer (higher = on top)</td></tr>
  <tr><td><code>overflow</code></td><td>visible, hidden, scroll, auto</td></tr>
</table>

<h3>Units</h3>
<table class="ref-table">
  <tr><th>Unit</th><th>Description</th></tr>
  <tr><td><code>px</code></td><td>Fixed pixels</td></tr>
  <tr><td><code>%</code></td><td>Relative to parent</td></tr>
  <tr><td><code>em</code></td><td>Relative to parent font-size</td></tr>
  <tr><td><code>rem</code></td><td>Relative to root font-size (16px)</td></tr>
  <tr><td><code>vw / vh</code></td><td>% of viewport width/height</td></tr>
  <tr><td><code>fr</code></td><td>Fraction of grid space</td></tr>
</table>

<h3>Transitions & Transforms</h3>
<table class="ref-table">
  <tr><th>Property</th><th>Example</th></tr>
  <tr><td><code>transition</code></td><td>all 0.3s ease</td></tr>
  <tr><td><code>transform</code></td><td>scale(1.05), translateY(-4px), rotate(5deg)</td></tr>
</table>`
  }
];
