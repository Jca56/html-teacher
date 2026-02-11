/* ============================================
   Module 1 — HTML Foundations
   Lessons 1-5: First page, text, lists,
   links & images, attributes
   ============================================ */

const MODULE_1 = {
  id: 1,
  title: 'HTML Foundations',
  lessons: [

    /* ---------- Lesson 1 ---------- */
    {
      id: 1,
      title: 'Your First Web Page',
      flutterParallel: 'Think of <code>&lt;html&gt;</code> like <code>MaterialApp</code> and <code>&lt;body&gt;</code> like <code>Scaffold</code> — they\'re the required wrapper every page needs.',
      content: `
<h3>What is HTML?</h3>
<p>HTML (HyperText Markup Language) is the skeleton of every web page. It tells the browser <strong>what</strong> things are — headings, paragraphs, images, buttons, etc.</p>
<p>In Flutter, you build UIs with widgets. In HTML, you build with <strong>tags</strong>. A tag looks like this:</p>
<pre><code>&lt;tagname&gt;content&lt;/tagname&gt;</code></pre>
<p>The opening tag <code>&lt;tagname&gt;</code> and closing tag <code>&lt;/tagname&gt;</code> wrap around content.</p>

<h3>The Basic Structure</h3>
<p>Every web page has this skeleton:</p>
<pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;My Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;</code></pre>
<ul>
  <li><code>&lt;!DOCTYPE html&gt;</code> — tells the browser "this is HTML5"</li>
  <li><code>&lt;html&gt;</code> — the root container (like <code>MaterialApp</code>)</li>
  <li><code>&lt;head&gt;</code> — metadata (title, styles) — not visible on the page</li>
  <li><code>&lt;body&gt;</code> — everything visible lives here (like <code>Scaffold.body</code>)</li>
</ul>

<h3>Try It Out</h3>
<p>The editor below has a simple page. Try changing the text inside the <code>&lt;h1&gt;</code> tag and watch the preview update!</p>`,
      starterHTML: '<h1>Hello World!</h1>\n<p>This is my first web page.</p>',
      starterCSS: '',
      challenges: [
        {
          id: '1-1',
          title: 'Add a Second Heading',
          difficulty: 'easy',
          description: 'Add an <code>&lt;h2&gt;</code> tag below the paragraph that says "About Me".',
          hints: [
            '<code>&lt;h2&gt;</code> works just like <code>&lt;h1&gt;</code> but smaller.',
            'Type <code>&lt;h2&gt;About Me&lt;/h2&gt;</code> on a new line after the <code>&lt;p&gt;</code> tag.'
          ],
          starterHTML: '<h1>Hello World!</h1>\n<p>This is my first web page.</p>',
          starterCSS: '',
          targetHTML: '<h1>Hello World!</h1>\n<p>This is my first web page.</p>\n<h2>About Me</h2>',
          targetCSS: ''
        },
        {
          id: '1-2',
          title: 'Add a Welcome Paragraph',
          difficulty: 'easy',
          description: 'Add a <code>&lt;p&gt;</code> tag after your <code>&lt;h2&gt;</code> that introduces yourself.',
          hints: [
            'The <code>&lt;p&gt;</code> tag creates a paragraph of text.',
            'Example: <code>&lt;p&gt;I love building apps with Flutter!&lt;/p&gt;</code>'
          ],
          starterHTML: '<h1>Hello World!</h1>\n<p>This is my first web page.</p>\n<h2>About Me</h2>',
          starterCSS: '',
          targetHTML: '<h1>Hello World!</h1>\n<p>This is my first web page.</p>\n<h2>About Me</h2>\n<p>I love building apps!</p>',
          targetCSS: ''
        }
      ]
    },

    /* ---------- Lesson 2 ---------- */
    {
      id: 2,
      title: 'Text Elements',
      flutterParallel: 'Heading tags are like <code>Text(style: TextStyle(fontSize: 32))</code> — different heading levels give different default sizes. <code>&lt;strong&gt;</code> is like <code>FontWeight.bold</code>.',
      content: `
<h3>Heading Levels</h3>
<p>HTML has 6 heading levels, <code>&lt;h1&gt;</code> (biggest) through <code>&lt;h6&gt;</code> (smallest):</p>
<pre><code>&lt;h1&gt;Main Title&lt;/h1&gt;
&lt;h2&gt;Section Title&lt;/h2&gt;
&lt;h3&gt;Subsection&lt;/h3&gt;
&lt;h4&gt;Sub-subsection&lt;/h4&gt;
&lt;h5&gt;Minor heading&lt;/h5&gt;
&lt;h6&gt;Smallest heading&lt;/h6&gt;</code></pre>

<h3>Paragraphs &amp; Line Breaks</h3>
<p><code>&lt;p&gt;</code> creates a paragraph. The browser adds space above and below it automatically.</p>
<p><code>&lt;br&gt;</code> forces a line break (it has no closing tag — it's self-closing).</p>
<p><code>&lt;hr&gt;</code> draws a horizontal line to separate content.</p>

<h3>Bold, Italic &amp; More</h3>
<ul>
  <li><code>&lt;strong&gt;</code> — <strong>bold</strong> (means "important")</li>
  <li><code>&lt;em&gt;</code> — <em>italic</em> (means "emphasis")</li>
  <li><code>&lt;mark&gt;</code> — highlighted text</li>
  <li><code>&lt;small&gt;</code> — smaller text for fine print</li>
</ul>
<p>Try combining them in the editor!</p>`,
      starterHTML: '<h1>My Blog Post</h1>\n<h2>Introduction</h2>\n<p>Welcome to my blog!</p>',
      starterCSS: '',
      challenges: [
        {
          id: '2-1',
          title: 'All Six Headings',
          difficulty: 'easy',
          description: 'Create all 6 heading levels (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>), each with any text.',
          hints: [
            'Start with <code>&lt;h1&gt;Heading 1&lt;/h1&gt;</code> and work down to <code>&lt;h6&gt;</code>.',
            'Each heading goes on its own line.'
          ],
          starterHTML: '',
          starterCSS: '',
          targetHTML: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>',
          targetCSS: ''
        },
        {
          id: '2-2',
          title: 'Bold and Italic',
          difficulty: 'easy',
          description: 'Write a paragraph where one word is <strong>bold</strong> and another is <em>italic</em>.',
          hints: [
            'Wrap a word in <code>&lt;strong&gt;</code> to make it bold.',
            'Wrap a word in <code>&lt;em&gt;</code> to make it italic.',
            'Example: <code>&lt;p&gt;I am &lt;strong&gt;very&lt;/strong&gt; &lt;em&gt;happy&lt;/em&gt; today.&lt;/p&gt;</code>'
          ],
          starterHTML: '<p>Write your sentence here.</p>',
          starterCSS: '',
          targetHTML: '<p>I am <strong>very</strong> <em>happy</em> today.</p>',
          targetCSS: ''
        }
      ]
    },

    /* ---------- Lesson 3 ---------- */
    {
      id: 3,
      title: 'Lists',
      flutterParallel: 'An HTML list is like a <code>ListView</code> with <code>ListTile</code> children. <code>&lt;ul&gt;</code> is the list container, <code>&lt;li&gt;</code> is each item.',
      content: `
<h3>Unordered Lists (Bullet Points)</h3>
<p>Use <code>&lt;ul&gt;</code> (unordered list) with <code>&lt;li&gt;</code> (list items) inside:</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Apples&lt;/li&gt;
  &lt;li&gt;Bananas&lt;/li&gt;
  &lt;li&gt;Cherries&lt;/li&gt;
&lt;/ul&gt;</code></pre>

<h3>Ordered Lists (Numbered)</h3>
<p>Swap <code>&lt;ul&gt;</code> for <code>&lt;ol&gt;</code> to get numbers instead of bullets:</p>
<pre><code>&lt;ol&gt;
  &lt;li&gt;Wake up&lt;/li&gt;
  &lt;li&gt;Code&lt;/li&gt;
  &lt;li&gt;Sleep&lt;/li&gt;
&lt;/ol&gt;</code></pre>

<h3>Nested Lists</h3>
<p>You can put a list inside a list item to create sub-items:</p>
<pre><code>&lt;ul&gt;
  &lt;li&gt;Fruits
    &lt;ul&gt;
      &lt;li&gt;Apple&lt;/li&gt;
      &lt;li&gt;Banana&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
&lt;/ul&gt;</code></pre>`,
      starterHTML: '<h2>My Grocery List</h2>\n<ul>\n  <li>Milk</li>\n  <li>Eggs</li>\n</ul>',
      starterCSS: '',
      challenges: [
        {
          id: '3-1',
          title: 'Top 3 Favorite Things',
          difficulty: 'easy',
          description: 'Create an <strong>ordered list</strong> (<code>&lt;ol&gt;</code>) of your top 3 favorite things.',
          hints: [
            'Use <code>&lt;ol&gt;</code> instead of <code>&lt;ul&gt;</code> for numbered items.',
            'Each item still uses <code>&lt;li&gt;</code>.'
          ],
          starterHTML: '<h2>My Top 3</h2>',
          starterCSS: '',
          targetHTML: '<h2>My Top 3</h2>\n<ol>\n  <li>Coding</li>\n  <li>Music</li>\n  <li>Coffee</li>\n</ol>',
          targetCSS: ''
        },
        {
          id: '3-2',
          title: 'Nested Shopping List',
          difficulty: 'medium',
          description: 'Create a list with two categories, each containing sub-items.',
          hints: [
            'Start with a <code>&lt;ul&gt;</code>, add an <code>&lt;li&gt;</code> for each category.',
            'Inside each category <code>&lt;li&gt;</code>, add another <code>&lt;ul&gt;</code> with items.'
          ],
          starterHTML: '<h2>Shopping List</h2>',
          starterCSS: '',
          targetHTML: '<h2>Shopping List</h2>\n<ul>\n  <li>Fruits\n    <ul>\n      <li>Apples</li>\n      <li>Bananas</li>\n    </ul>\n  </li>\n  <li>Dairy\n    <ul>\n      <li>Milk</li>\n      <li>Cheese</li>\n    </ul>\n  </li>\n</ul>',
          targetCSS: ''
        }
      ]
    },

    /* ---------- Lesson 4 ---------- */
    {
      id: 4,
      title: 'Links & Images',
      flutterParallel: 'A link (<code>&lt;a&gt;</code>) is like wrapping something in <code>GestureDetector</code> + <code>Navigator.push()</code>. An image (<code>&lt;img&gt;</code>) is like <code>Image.network(url)</code>.',
      content: `
<h3>Links</h3>
<p>The <code>&lt;a&gt;</code> (anchor) tag creates clickable links:</p>
<pre><code>&lt;a href="https://google.com"&gt;Go to Google&lt;/a&gt;</code></pre>
<ul>
  <li><code>href</code> — the URL to go to</li>
  <li><code>target="_blank"</code> — opens in a new tab</li>
</ul>

<h3>Images</h3>
<p>The <code>&lt;img&gt;</code> tag displays an image. It's <strong>self-closing</strong> (no closing tag):</p>
<pre><code>&lt;img src="photo.jpg" alt="A nice photo"&gt;</code></pre>
<ul>
  <li><code>src</code> — the image URL or file path</li>
  <li><code>alt</code> — description text (shown if image fails to load, read by screen readers)</li>
  <li><code>width</code> / <code>height</code> — size in pixels</li>
</ul>

<h3>Linking an Image</h3>
<p>Wrap an <code>&lt;img&gt;</code> inside an <code>&lt;a&gt;</code> to make a clickable image:</p>
<pre><code>&lt;a href="https://example.com"&gt;
  &lt;img src="logo.png" alt="Logo"&gt;
&lt;/a&gt;</code></pre>`,
      starterHTML: '<h2>Useful Links</h2>\n<a href="https://developer.mozilla.org">MDN Web Docs</a>\n<p>The best HTML reference online.</p>',
      starterCSS: '',
      challenges: [
        {
          id: '4-1',
          title: 'Open in New Tab',
          difficulty: 'easy',
          description: 'Add <code>target="_blank"</code> to the link so it opens in a new tab.',
          hints: [
            'Attributes go inside the opening tag, after the tag name.',
            'Change <code>&lt;a href="..."&gt;</code> to <code>&lt;a href="..." target="_blank"&gt;</code>'
          ],
          starterHTML: '<a href="https://developer.mozilla.org">MDN Web Docs</a>',
          starterCSS: '',
          targetHTML: '<a href="https://developer.mozilla.org" target="_blank">MDN Web Docs</a>',
          targetCSS: ''
        },
        {
          id: '4-2',
          title: 'Add an Image',
          difficulty: 'easy',
          description: 'Add an image tag using this URL: <code>https://via.placeholder.com/200x100</code> with alt text "Placeholder".',
          hints: [
            '<code>&lt;img&gt;</code> is self-closing — no <code>&lt;/img&gt;</code> needed.',
            '<code>&lt;img src="URL" alt="description"&gt;</code>'
          ],
          starterHTML: '<h2>My Gallery</h2>',
          starterCSS: '',
          targetHTML: '<h2>My Gallery</h2>\n<img src="https://via.placeholder.com/200x100" alt="Placeholder">',
          targetCSS: ''
        }
      ]
    },

    /* ---------- Lesson 5 ---------- */
    {
      id: 5,
      title: 'HTML Attributes',
      flutterParallel: 'Attributes are like named parameters on a widget: <code>Text("hi", style: ...)</code>. In HTML: <code>&lt;p class="intro"&gt;hi&lt;/p&gt;</code>.',
      content: `
<h3>What Are Attributes?</h3>
<p>Attributes add extra info to tags. They go inside the opening tag:</p>
<pre><code>&lt;tag attribute="value"&gt;content&lt;/tag&gt;</code></pre>
<p>You've already seen <code>href</code> and <code>src</code> — those are attributes!</p>

<h3>Common Attributes</h3>
<ul>
  <li><code>id</code> — a unique identifier (like a key in Flutter)</li>
  <li><code>class</code> — a reusable label for styling (you'll use this a LOT with CSS)</li>
  <li><code>style</code> — inline CSS styles directly on the element</li>
  <li><code>title</code> — tooltip text on hover</li>
</ul>

<h3>id vs class</h3>
<p><code>id</code> must be unique — only ONE element should have it. Think of it like a <code>Key</code> in Flutter.</p>
<p><code>class</code> can be shared — many elements can have the same class. Think of it like a <code>TextStyle</code> you reuse across multiple <code>Text</code> widgets.</p>
<pre><code>&lt;h1 id="main-title" class="gold-text"&gt;Welcome&lt;/h1&gt;
&lt;p class="gold-text"&gt;Both have the same class!&lt;/p&gt;</code></pre>

<h3>The style Attribute</h3>
<p>You can add CSS directly to an element (though we'll learn better ways later):</p>
<pre><code>&lt;p style="color: red; font-size: 20px;"&gt;Red text!&lt;/p&gt;</code></pre>`,
      starterHTML: '<h1>Welcome</h1>\n<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>',
      starterCSS: '',
      challenges: [
        {
          id: '5-1',
          title: 'Add Classes',
          difficulty: 'easy',
          description: 'Add <code>class="title"</code> to the <code>&lt;h1&gt;</code> and <code>class="content"</code> to both paragraphs.',
          hints: [
            'Add the class attribute inside the opening tag.',
            '<code>&lt;h1 class="title"&gt;</code>'
          ],
          starterHTML: '<h1>Welcome</h1>\n<p>First paragraph.</p>\n<p>Second paragraph.</p>',
          starterCSS: '',
          targetHTML: '<h1 class="title">Welcome</h1>\n<p class="content">First paragraph.</p>\n<p class="content">Second paragraph.</p>',
          targetCSS: ''
        },
        {
          id: '5-2',
          title: 'Inline Styling',
          difficulty: 'medium',
          description: 'Use the <code>style</code> attribute to make the heading blue and 32px.',
          hints: [
            'The style attribute uses CSS property:value pairs separated by semicolons.',
            '<code>style="color: blue; font-size: 32px;"</code>'
          ],
          starterHTML: '<h1>Style Me!</h1>',
          starterCSS: '',
          targetHTML: '<h1 style="color: blue; font-size: 32px;">Style Me!</h1>',
          targetCSS: ''
        }
      ]
    }
  ]
};
