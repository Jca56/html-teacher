/* ============================================
   Module 4 — CSS Layout
   Lessons 14-17: Display & flow, Flexbox,
   Grid, positioning
   ============================================ */

const MODULE_4 = {
  id: 4,
  title: 'CSS Layout',
  lessons: [

    /* ---------- Lesson 14 ---------- */
    {
      id: 14,
      title: 'Display & Flow',
      flutterParallel: 'Block elements behave like widgets in a <code>Column</code> — they stack vertically. Inline elements behave like widgets in a <code>Row</code>.',
      content: `
<h3>The display Property</h3>
<p>The <code>display</code> property controls how an element flows in the page:</p>
<ul>
  <li><code>block</code> — takes full width, starts on a new line (default for div, p, h1)</li>
  <li><code>inline</code> — only takes needed width, sits in a line (default for span, a, strong)</li>
  <li><code>inline-block</code> — sits inline BUT you can set width/height (best of both)</li>
  <li><code>none</code> — completely hidden, takes no space</li>
</ul>

<h3>Visual Example</h3>
<pre><code>.tag {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid gold;
  border-radius: 4px;
  margin: 4px;
}</code></pre>
<p>This creates pill-shaped tags that sit side by side (like Flutter's <code>Chip</code> widget).</p>

<h3>width &amp; height</h3>
<p>Block and inline-block elements can have width/height. Inline elements <strong>cannot</strong>.</p>
<pre><code>.box {
  width: 200px;
  height: 100px;
  max-width: 100%;  /* never wider than parent */
}</code></pre>`,
      starterHTML: '<span class="tag">Flutter</span>\n<span class="tag">Dart</span>\n<span class="tag">Firebase</span>\n<span class="tag">HTML</span>\n<span class="tag">CSS</span>',
      starterCSS: '.tag {\n  display: inline-block;\n  padding: 4px 12px;\n  border: 1px solid #d4a843;\n  border-radius: 4px;\n  margin: 4px;\n  color: #d4a843;\n  font-size: 14px;\n}',
      challenges: [
        {
          id: '14-1',
          title: 'Tag Badges',
          difficulty: 'easy',
          description: 'The tags are stacking vertically. Fix them to sit side-by-side using <code>display: inline-block</code>.',
          hints: [
            'By default, <code>&lt;div&gt;</code> is block (full width). Change it to <code>inline-block</code>.',
            'Add <code>display: inline-block;</code> to the <code>.badge</code> class.'
          ],
          starterHTML: '<div class="badge">HTML</div>\n<div class="badge">CSS</div>\n<div class="badge">JavaScript</div>',
          starterCSS: '.badge {\n  padding: 6px 16px;\n  border: 1px solid #d4a843;\n  border-radius: 20px;\n  color: #d4a843;\n  margin: 4px;\n  /* Fix the display */\n}',
          targetHTML: '<div class="badge">HTML</div>\n<div class="badge">CSS</div>\n<div class="badge">JavaScript</div>',
          targetCSS: '.badge {\n  display: inline-block;\n  padding: 6px 16px;\n  border: 1px solid #d4a843;\n  border-radius: 20px;\n  color: #d4a843;\n  margin: 4px;\n}'
        }
      ]
    },

    /* ---------- Lesson 15 ---------- */
    {
      id: 15,
      title: 'Flexbox',
      flutterParallel: 'Flexbox is <strong>extremely</strong> similar to Flutter layout! <code>Row</code> = <code>flex-direction: row</code>. <code>Column</code> = <code>flex-direction: column</code>. <code>MainAxisAlignment</code> = <code>justify-content</code>. <code>CrossAxisAlignment</code> = <code>align-items</code>.',
      content: `
<h3>Flexbox: The Layout Powerhouse</h3>
<p>Flexbox is CSS's answer to Flutter's <code>Row</code> and <code>Column</code>. You'll use it constantly.</p>

<h3>Enable Flex on the Parent</h3>
<pre><code>.container {
  display: flex;
}</code></pre>
<p>Now all direct children become flex items arranged in a row!</p>

<h3>Key Container Properties</h3>
<pre><code>.container {
  display: flex;
  flex-direction: row;        /* row (default) or column */
  justify-content: center;    /* main axis alignment */
  align-items: center;        /* cross axis alignment */
  gap: 16px;                  /* space between items */
  flex-wrap: wrap;            /* wrap to next line */
}</code></pre>

<h3>Flutter ↔ CSS Cheat Sheet</h3>
<ul>
  <li><code>Row</code> → <code>display: flex; flex-direction: row;</code></li>
  <li><code>Column</code> → <code>display: flex; flex-direction: column;</code></li>
  <li><code>MainAxisAlignment.center</code> → <code>justify-content: center;</code></li>
  <li><code>MainAxisAlignment.spaceBetween</code> → <code>justify-content: space-between;</code></li>
  <li><code>CrossAxisAlignment.center</code> → <code>align-items: center;</code></li>
  <li><code>Expanded</code> → <code>flex: 1;</code></li>
</ul>

<h3>Item Properties</h3>
<pre><code>.item {
  flex: 1;           /* grow to fill space (like Expanded) */
  flex-shrink: 0;    /* don't shrink below natural size */
  align-self: end;   /* override alignment for one item */
}</code></pre>`,
      starterHTML: '<div class="nav">\n  <div class="logo">🏮 Lantern</div>\n  <div class="links">\n    <a href="#">Home</a>\n    <a href="#">About</a>\n    <a href="#">Contact</a>\n  </div>\n</div>',
      starterCSS: '.nav {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  background: #1a1410;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n}\n\n.logo { color: #d4a843; font-weight: bold; }\n\n.links {\n  display: flex;\n  gap: 16px;\n}\n\n.links a { color: #e8dcc8; text-decoration: none; }',
      challenges: [
        {
          id: '15-1',
          title: 'Center Everything',
          difficulty: 'easy',
          description: 'Center the box both horizontally and vertically inside its container using Flexbox.',
          hints: [
            'The container needs <code>display: flex; justify-content: center; align-items: center;</code>',
            'Set a height on the container so there\'s vertical space: <code>height: 300px;</code>'
          ],
          starterHTML: '<div class="container">\n  <div class="box">Centered!</div>\n</div>',
          starterCSS: '.container {\n  height: 300px;\n  background: #f0f0f0;\n  /* Center the box with flexbox */\n}\n\n.box {\n  padding: 20px 40px;\n  background: #d4a843;\n  color: #1a1410;\n  font-weight: bold;\n  border-radius: 8px;\n}',
          targetHTML: '<div class="container">\n  <div class="box">Centered!</div>\n</div>',
          targetCSS: '.container {\n  height: 300px;\n  background: #f0f0f0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.box {\n  padding: 20px 40px;\n  background: #d4a843;\n  color: #1a1410;\n  font-weight: bold;\n  border-radius: 8px;\n}'
        },
        {
          id: '15-2',
          title: 'Three Equal Columns',
          difficulty: 'medium',
          description: 'Make three cards sit side by side with equal width and a 16px gap.',
          hints: [
            'Parent: <code>display: flex; gap: 16px;</code>',
            'Each card: <code>flex: 1;</code> to share space evenly (like <code>Expanded</code> in Flutter).'
          ],
          starterHTML: '<div class="row">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n</div>',
          starterCSS: '.row {\n  /* Make children flex side by side */\n}\n\n.card {\n  padding: 20px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #e8dcc8;\n  /* Share space equally */\n}',
          targetHTML: '<div class="row">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n</div>',
          targetCSS: '.row {\n  display: flex;\n  gap: 16px;\n}\n\n.card {\n  flex: 1;\n  padding: 20px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #e8dcc8;\n}'
        }
      ]
    },

    /* ---------- Lesson 16 ---------- */
    {
      id: 16,
      title: 'CSS Grid',
      flutterParallel: 'Grid is like a supercharged <code>GridView</code> — but CSS Grid gives you precise control over how many columns and rows, and how items span across them.',
      content: `
<h3>CSS Grid: 2D Layout</h3>
<p>Flexbox is great for one direction (row or column). Grid handles both at once — rows AND columns.</p>

<h3>Basic Grid</h3>
<pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 equal columns */
  gap: 16px;
}</code></pre>
<p><code>fr</code> means "fraction of available space." <code>1fr 1fr 1fr</code> = 3 equal parts.</p>

<h3>Useful Patterns</h3>
<pre><code>/* Repeat shorthand */
grid-template-columns: repeat(3, 1fr);

/* Mixed sizes */
grid-template-columns: 200px 1fr 1fr;

/* Auto-fill responsive grid */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));</code></pre>

<h3>Spanning Items</h3>
<pre><code>.wide {
  grid-column: span 2;  /* spans 2 columns */
}

.tall {
  grid-row: span 2;     /* spans 2 rows */
}</code></pre>`,
      starterHTML: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>',
      starterCSS: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.item {\n  padding: 24px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #d4a843;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}',
      challenges: [
        {
          id: '16-1',
          title: 'Two-Column Layout',
          difficulty: 'easy',
          description: 'Change the grid to show 2 columns instead of 3.',
          hints: [
            'Change <code>repeat(3, 1fr)</code> to <code>repeat(2, 1fr)</code>.',
            'Or use <code>grid-template-columns: 1fr 1fr;</code>'
          ],
          starterHTML: '<div class="grid">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n  <div class="item">D</div>\n</div>',
          starterCSS: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.item {\n  padding: 24px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #d4a843;\n  text-align: center;\n}',
          targetHTML: '<div class="grid">\n  <div class="item">A</div>\n  <div class="item">B</div>\n  <div class="item">C</div>\n  <div class="item">D</div>\n</div>',
          targetCSS: '.grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 12px;\n}\n\n.item {\n  padding: 24px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #d4a843;\n  text-align: center;\n}'
        },
        {
          id: '16-2',
          title: 'Responsive Grid',
          difficulty: 'hard',
          description: 'Make the grid responsive: columns should be at least 150px wide and auto-fill to fit the container.',
          hints: [
            'Use <code>repeat(auto-fill, minmax(150px, 1fr))</code>.',
            '<code>auto-fill</code> creates as many columns as fit. <code>minmax</code> sets min and max width.'
          ],
          starterHTML: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>',
          starterCSS: '.grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.item {\n  padding: 24px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #d4a843;\n  text-align: center;\n}',
          targetHTML: '<div class="grid">\n  <div class="item">1</div>\n  <div class="item">2</div>\n  <div class="item">3</div>\n  <div class="item">4</div>\n  <div class="item">5</div>\n  <div class="item">6</div>\n</div>',
          targetCSS: '.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  gap: 12px;\n}\n\n.item {\n  padding: 24px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  color: #d4a843;\n  text-align: center;\n}'
        }
      ]
    },

    /* ---------- Lesson 17 ---------- */
    {
      id: 17,
      title: 'Positioning',
      flutterParallel: 'CSS positioning is like <code>Stack</code> + <code>Positioned</code> in Flutter. <code>position: relative</code> is the Stack, <code>position: absolute</code> is <code>Positioned(top: ..., left: ...)</code>.',
      content: `
<h3>Position Values</h3>
<ul>
  <li><code>static</code> — default, follows normal flow</li>
  <li><code>relative</code> — stays in flow but can be offset with top/left/right/bottom</li>
  <li><code>absolute</code> — removed from flow, positioned relative to nearest positioned ancestor</li>
  <li><code>fixed</code> — stays in place when you scroll (like a sticky header)</li>
  <li><code>sticky</code> — switches between relative and fixed based on scroll</li>
</ul>

<h3>The Relative + Absolute Combo</h3>
<p>This is the most common pattern — like Flutter's Stack:</p>
<pre><code>.parent {
  position: relative;  /* becomes the reference point */
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;         /* positioned relative to .parent */
}</code></pre>

<h3>z-index</h3>
<p>When positioned elements overlap, <code>z-index</code> controls stacking order:</p>
<pre><code>.on-top { z-index: 10; }
.behind { z-index: 1; }</code></pre>
<p>Higher number = closer to the viewer.</p>`,
      starterHTML: '<div class="parent">\n  <img src="https://via.placeholder.com/200x150" alt="Photo">\n  <div class="badge">NEW</div>\n</div>',
      starterCSS: '.parent {\n  position: relative;\n  display: inline-block;\n}\n\n.badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  background: #d4a843;\n  color: #1a1410;\n  padding: 4px 10px;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: bold;\n}',
      challenges: [
        {
          id: '17-1',
          title: 'Corner Badge',
          difficulty: 'medium',
          description: 'Position a notification badge at the top-right corner of a card, overlapping the edge.',
          hints: [
            'Parent needs <code>position: relative;</code>',
            'Badge needs <code>position: absolute; top: -10px; right: -10px;</code>'
          ],
          starterHTML: '<div class="card">\n  <h3>Notifications</h3>\n  <p>You have new messages.</p>\n  <div class="count">3</div>\n</div>',
          starterCSS: '.card {\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 12px;\n  padding: 20px;\n  color: #e8dcc8;\n  width: 200px;\n  /* Make this the positioning parent */\n}\n\n.count {\n  background: red;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n  /* Position at top-right corner */\n}',
          targetHTML: '<div class="card">\n  <h3>Notifications</h3>\n  <p>You have new messages.</p>\n  <div class="count">3</div>\n</div>',
          targetCSS: '.card {\n  position: relative;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 12px;\n  padding: 20px;\n  color: #e8dcc8;\n  width: 200px;\n}\n\n.count {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: red;\n  color: white;\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: bold;\n  font-size: 14px;\n}'
        }
      ]
    }
  ]
};
