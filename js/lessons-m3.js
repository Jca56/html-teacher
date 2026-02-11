/* ============================================
   Module 3 — CSS Basics
   Lessons 10-13: Intro to CSS, colors &
   typography, box model, backgrounds & borders
   ============================================ */

const MODULE_3 = {
  id: 3,
  title: 'CSS Basics',
  lessons: [

    /* ---------- Lesson 10 ---------- */
    {
      id: 10,
      title: 'Intro to CSS',
      flutterParallel: 'CSS is like Flutter\'s <code>ThemeData</code> — you define styles centrally and they cascade down the widget tree. Selectors are how you target which widgets to style.',
      content: `
<h3>What is CSS?</h3>
<p>CSS (Cascading Style Sheets) controls how elements <strong>look</strong> — colors, sizes, spacing, layout. HTML says <em>what</em>, CSS says <em>how it looks</em>.</p>

<h3>Three Ways to Add CSS</h3>
<ol>
  <li><strong>Inline</strong> — <code>style</code> attribute on the element (you've seen this)</li>
  <li><strong>Internal</strong> — <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code></li>
  <li><strong>External</strong> — separate <code>.css</code> file linked with <code>&lt;link&gt;</code> (best practice!)</li>
</ol>
<p>In this app, the CSS tab acts as your external stylesheet.</p>

<h3>CSS Syntax</h3>
<pre><code>selector {
  property: value;
  property: value;
}</code></pre>

<h3>Basic Selectors</h3>
<ul>
  <li><code>p</code> — selects ALL <code>&lt;p&gt;</code> elements (element selector)</li>
  <li><code>.intro</code> — selects elements with <code>class="intro"</code> (class selector)</li>
  <li><code>#title</code> — selects the element with <code>id="title"</code> (ID selector)</li>
</ul>

<h3>The Cascade</h3>
<p>When multiple rules target the same element, specificity decides who wins:</p>
<p><strong>Inline style</strong> &gt; <strong>ID</strong> &gt; <strong>Class</strong> &gt; <strong>Element</strong></p>`,
      starterHTML: '<h1 class="title">Welcome</h1>\n<p class="intro">This is styled with CSS!</p>\n<p>This is a normal paragraph.</p>',
      starterCSS: '.title {\n  color: darkblue;\n}\n\n.intro {\n  font-size: 18px;\n  color: gray;\n}',
      challenges: [
        {
          id: '10-1',
          title: 'Style by Element',
          difficulty: 'easy',
          description: 'Use an <strong>element selector</strong> to make all <code>&lt;p&gt;</code> elements green.',
          hints: [
            'An element selector uses just the tag name: <code>p { }</code>',
            'The color property sets text color: <code>color: green;</code>'
          ],
          starterHTML: '<p>Paragraph one</p>\n<p>Paragraph two</p>\n<p>Paragraph three</p>',
          starterCSS: '/* Style all paragraphs here */',
          targetHTML: '<p>Paragraph one</p>\n<p>Paragraph two</p>\n<p>Paragraph three</p>',
          targetCSS: 'p {\n  color: green;\n}'
        },
        {
          id: '10-2',
          title: 'Class vs ID',
          difficulty: 'medium',
          description: 'Style the <code>#main-title</code> as red and all <code>.highlight</code> elements with a yellow background.',
          hints: [
            'ID selector uses a hash: <code>#main-title { }</code>',
            'Class selector uses a dot: <code>.highlight { }</code>',
            'Background color: <code>background-color: yellow;</code>'
          ],
          starterHTML: '<h1 id="main-title">Title</h1>\n<p class="highlight">Highlighted text</p>\n<p>Normal text</p>\n<p class="highlight">Also highlighted</p>',
          starterCSS: '',
          targetHTML: '<h1 id="main-title">Title</h1>\n<p class="highlight">Highlighted text</p>\n<p>Normal text</p>\n<p class="highlight">Also highlighted</p>',
          targetCSS: '#main-title {\n  color: red;\n}\n\n.highlight {\n  background-color: yellow;\n}'
        }
      ]
    },

    /* ---------- Lesson 11 ---------- */
    {
      id: 11,
      title: 'Colors & Typography',
      flutterParallel: 'CSS color properties map directly to <code>TextStyle(color: ..., fontSize: ..., fontWeight: ...)</code> in Flutter.',
      content: `
<h3>Color Values</h3>
<p>CSS supports many ways to write colors:</p>
<ul>
  <li><strong>Named:</strong> <code>red</code>, <code>tomato</code>, <code>cornflowerblue</code></li>
  <li><strong>Hex:</strong> <code>#ff0000</code> (red), <code>#333</code> (dark gray)</li>
  <li><strong>RGB:</strong> <code>rgb(255, 0, 0)</code></li>
  <li><strong>RGBA:</strong> <code>rgba(255, 0, 0, 0.5)</code> — with transparency!</li>
  <li><strong>HSL:</strong> <code>hsl(0, 100%, 50%)</code> — hue, saturation, lightness</li>
</ul>

<h3>Typography Properties</h3>
<pre><code>p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  font-weight: bold;       /* or 100-900 */
  line-height: 1.6;
  text-align: center;      /* left, right, center, justify */
  text-decoration: underline;
  text-transform: uppercase;
  letter-spacing: 2px;
}</code></pre>

<h3>Units for font-size</h3>
<ul>
  <li><code>px</code> — fixed pixels</li>
  <li><code>em</code> — relative to parent's font size</li>
  <li><code>rem</code> — relative to root (html) font size (most predictable)</li>
</ul>`,
      starterHTML: '<h1>Typography Demo</h1>\n<p class="fancy">This text is styled!</p>\n<p class="subtle">This text is subtle.</p>',
      starterCSS: '.fancy {\n  font-family: Georgia, serif;\n  font-size: 20px;\n  color: #2c3e50;\n}\n\n.subtle {\n  color: #999;\n  font-style: italic;\n}',
      challenges: [
        {
          id: '11-1',
          title: 'Lantern Style Text',
          difficulty: 'easy',
          description: 'Style the heading: gold color (<code>#d4a843</code>), uppercase, letter-spacing of 3px.',
          hints: [
            'Use <code>text-transform: uppercase;</code> for all caps.',
            'Use <code>letter-spacing: 3px;</code> for spacing between letters.'
          ],
          starterHTML: '<h1 class="lantern">Lantern Labs</h1>',
          starterCSS: '.lantern {\n  /* Add your styles here */\n}',
          targetHTML: '<h1 class="lantern">Lantern Labs</h1>',
          targetCSS: '.lantern {\n  color: #d4a843;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n}'
        },
        {
          id: '11-2',
          title: 'RGBA Transparency',
          difficulty: 'medium',
          description: 'Create two overlapping boxes where the top one has a semi-transparent red background using <code>rgba</code>.',
          hints: [
            '<code>rgba(255, 0, 0, 0.5)</code> is red at 50% opacity.',
            'The fourth value (0.5) controls transparency: 0 = invisible, 1 = solid.'
          ],
          starterHTML: '<div class="box blue">Blue Box</div>\n<div class="box red">Red Box (transparent)</div>',
          starterCSS: '.box {\n  padding: 40px;\n  color: white;\n  font-weight: bold;\n}\n.blue {\n  background-color: blue;\n}\n.red {\n  /* Make this semi-transparent red */\n  margin-top: -20px;\n}',
          targetHTML: '<div class="box blue">Blue Box</div>\n<div class="box red">Red Box (transparent)</div>',
          targetCSS: '.box {\n  padding: 40px;\n  color: white;\n  font-weight: bold;\n}\n.blue {\n  background-color: blue;\n}\n.red {\n  background-color: rgba(255, 0, 0, 0.5);\n  margin-top: -20px;\n}'
        }
      ]
    },

    /* ---------- Lesson 12 ---------- */
    {
      id: 12,
      title: 'The Box Model',
      flutterParallel: 'This maps almost exactly to Flutter\'s <code>Container(padding: ..., margin: ..., decoration: BoxDecoration(border: ...))</code>.',
      content: `
<h3>Every Element Is a Box</h3>
<p>Every HTML element is a rectangular box with four layers (from inside out):</p>
<ol>
  <li><strong>Content</strong> — the text/image inside</li>
  <li><strong>Padding</strong> — space between content and border</li>
  <li><strong>Border</strong> — the edge of the box</li>
  <li><strong>Margin</strong> — space outside the border</li>
</ol>

<h3>Shorthand</h3>
<pre><code>/* All four sides */
padding: 10px;

/* Vertical | Horizontal */
padding: 10px 20px;

/* Top | Right | Bottom | Left (clockwise) */
padding: 10px 20px 10px 20px;

/* Individual sides */
padding-top: 10px;
margin-left: 20px;</code></pre>

<h3>The box-sizing Fix</h3>
<p>By default, <code>width</code> does NOT include padding/border. This is confusing!</p>
<p>Add this to fix it (most devs do):</p>
<pre><code>* { box-sizing: border-box; }</code></pre>
<p>Now <code>width: 200px</code> means the <strong>total</strong> box is 200px, padding included.</p>`,
      starterHTML: '<div class="box">I am a box with padding, border, and margin.</div>\n<div class="box">I am another box.</div>',
      starterCSS: '* { box-sizing: border-box; }\n\n.box {\n  width: 250px;\n  padding: 20px;\n  border: 3px solid #333;\n  margin: 16px;\n  background: #e8f4f8;\n}',
      challenges: [
        {
          id: '12-1',
          title: 'Padded Card',
          difficulty: 'easy',
          description: 'Create a card with 24px padding, a 1px solid gray border, and 16px margin on all sides.',
          hints: [
            '<code>padding: 24px;</code> for inner spacing.',
            '<code>border: 1px solid gray;</code> for the border.',
            '<code>margin: 16px;</code> for outer spacing.'
          ],
          starterHTML: '<div class="card">\n  <h3>My Card</h3>\n  <p>Some content here.</p>\n</div>',
          starterCSS: '.card {\n  /* Add box model properties */\n}',
          targetHTML: '<div class="card">\n  <h3>My Card</h3>\n  <p>Some content here.</p>\n</div>',
          targetCSS: '.card {\n  padding: 24px;\n  border: 1px solid gray;\n  margin: 16px;\n}'
        }
      ]
    },

    /* ---------- Lesson 13 ---------- */
    {
      id: 13,
      title: 'Backgrounds & Borders',
      flutterParallel: 'These map to <code>BoxDecoration(color, borderRadius, boxShadow, gradient)</code> in Flutter. Almost 1:1.',
      content: `
<h3>Background Properties</h3>
<pre><code>.card {
  background-color: #1a1a2e;
  /* Or use a gradient: */
  background: linear-gradient(to right, #1a1a2e, #16213e);
}</code></pre>

<h3>Border Radius (Rounded Corners)</h3>
<pre><code>.card {
  border-radius: 8px;          /* all corners */
  border-radius: 50%;          /* makes a circle */
  border-radius: 8px 0 0 8px;  /* top-left only */
}</code></pre>

<h3>Box Shadow</h3>
<pre><code>/* offset-x | offset-y | blur | spread | color */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);</code></pre>

<h3>Opacity</h3>
<p><code>opacity: 0.5;</code> — makes the entire element semi-transparent (0 = invisible, 1 = fully visible).</p>

<h3>Putting It Together</h3>
<p>These properties combine to create the card-style UI you see on modern websites.</p>`,
      starterHTML: '<div class="card">\n  <h3>Styled Card</h3>\n  <p>A card with rounded corners, shadow, and gradient background.</p>\n</div>',
      starterCSS: '.card {\n  padding: 24px;\n  color: white;\n  background: linear-gradient(135deg, #1a1a2e, #16213e);\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);\n}',
      challenges: [
        {
          id: '13-1',
          title: 'Lantern Card',
          difficulty: 'medium',
          description: 'Style the card to match the Lantern Labs theme: dark background, gold border, gold text heading, rounded corners, and a warm glow shadow.',
          hints: [
            'Background: <code>#1a1410</code>, border: <code>1px solid rgba(212, 168, 67, 0.3)</code>',
            'Box shadow with gold glow: <code>box-shadow: 0 0 20px rgba(212, 168, 67, 0.15);</code>',
            'Heading color: <code>#d4a843</code>'
          ],
          starterHTML: '<div class="card">\n  <h3>Lantern Card</h3>\n  <p>Matching the Lantern Labs style.</p>\n</div>',
          starterCSS: '.card {\n  padding: 24px;\n  /* Add your Lantern Labs styles */\n}\n\n.card h3 {\n  /* Style the heading */\n}',
          targetHTML: '<div class="card">\n  <h3>Lantern Card</h3>\n  <p>Matching the Lantern Labs style.</p>\n</div>',
          targetCSS: '.card {\n  padding: 24px;\n  background: #1a1410;\n  color: #e8dcc8;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 12px;\n  box-shadow: 0 0 20px rgba(212, 168, 67, 0.15);\n}\n\n.card h3 {\n  color: #d4a843;\n}'
        }
      ]
    }
  ]
};
