/* ============================================
   Module 2 — HTML Intermediate
   Lessons 6-9: Tables, forms, semantic HTML,
   media & embedding
   ============================================ */

const MODULE_2 = {
  id: 2,
  title: 'HTML Intermediate',
  lessons: [

    /* ---------- Lesson 6 ---------- */
    {
      id: 6,
      title: 'Tables',
      flutterParallel: 'An HTML table is like Flutter\'s <code>DataTable</code> widget — rows of data with header cells across the top.',
      content: `
<h3>Building a Table</h3>
<p>Tables use a nesting pattern: table → rows → cells.</p>
<pre><code>&lt;table&gt;
  &lt;tr&gt;
    &lt;th&gt;Name&lt;/th&gt;
    &lt;th&gt;Age&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Alice&lt;/td&gt;
    &lt;td&gt;25&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre>
<ul>
  <li><code>&lt;table&gt;</code> — the table container</li>
  <li><code>&lt;tr&gt;</code> — table row</li>
  <li><code>&lt;th&gt;</code> — table header cell (bold, centered by default)</li>
  <li><code>&lt;td&gt;</code> — table data cell</li>
</ul>

<h3>Spanning Columns & Rows</h3>
<p>Use <code>colspan</code> to make a cell span multiple columns:</p>
<pre><code>&lt;td colspan="2"&gt;Spans two columns&lt;/td&gt;</code></pre>
<p>Use <code>rowspan</code> to span multiple rows the same way.</p>`,
      starterHTML: '<table>\n  <tr>\n    <th>Language</th>\n    <th>Type</th>\n  </tr>\n  <tr>\n    <td>Dart</td>\n    <td>Compiled</td>\n  </tr>\n</table>',
      starterCSS: 'table { border-collapse: collapse; width: 100%; }\nth, td { border: 1px solid #ccc; padding: 8px; text-align: left; }\nth { background: #f0f0f0; }',
      challenges: [
        {
          id: '6-1',
          title: 'Add More Rows',
          difficulty: 'easy',
          description: 'Add two more rows to the table for JavaScript and Python.',
          hints: [
            'Each row is a <code>&lt;tr&gt;</code> with <code>&lt;td&gt;</code> cells inside.',
            'Copy the Dart row and change the text.'
          ],
          starterHTML: '<table>\n  <tr>\n    <th>Language</th>\n    <th>Type</th>\n  </tr>\n  <tr>\n    <td>Dart</td>\n    <td>Compiled</td>\n  </tr>\n</table>',
          starterCSS: 'table { border-collapse: collapse; width: 100%; }\nth, td { border: 1px solid #ccc; padding: 8px; text-align: left; }\nth { background: #f0f0f0; }',
          targetHTML: '<table>\n  <tr>\n    <th>Language</th>\n    <th>Type</th>\n  </tr>\n  <tr>\n    <td>Dart</td>\n    <td>Compiled</td>\n  </tr>\n  <tr>\n    <td>JavaScript</td>\n    <td>Interpreted</td>\n  </tr>\n  <tr>\n    <td>Python</td>\n    <td>Interpreted</td>\n  </tr>\n</table>',
          targetCSS: 'table { border-collapse: collapse; width: 100%; }\nth, td { border: 1px solid #ccc; padding: 8px; text-align: left; }\nth { background: #f0f0f0; }'
        }
      ]
    },

    /* ---------- Lesson 7 ---------- */
    {
      id: 7,
      title: 'Forms & Input',
      flutterParallel: 'HTML forms are like Flutter\'s <code>Form</code> widget. <code>&lt;input&gt;</code> is like <code>TextField</code>, <code>&lt;select&gt;</code> is like <code>DropdownButton</code>.',
      content: `
<h3>The Form Element</h3>
<p>A <code>&lt;form&gt;</code> groups input fields together. It's a container, like Flutter's <code>Form</code> widget.</p>

<h3>Common Input Types</h3>
<pre><code>&lt;input type="text" placeholder="Your name"&gt;
&lt;input type="email" placeholder="you@email.com"&gt;
&lt;input type="number" min="0" max="100"&gt;
&lt;input type="password"&gt;
&lt;input type="checkbox"&gt; Remember me
&lt;input type="radio" name="color"&gt; Red</code></pre>

<h3>Labels</h3>
<p>Always pair inputs with <code>&lt;label&gt;</code> — it tells users what the input is for:</p>
<pre><code>&lt;label for="name"&gt;Name:&lt;/label&gt;
&lt;input type="text" id="name"&gt;</code></pre>
<p>The <code>for</code> attribute matches the input's <code>id</code>. Clicking the label focuses the input!</p>

<h3>Textarea &amp; Select</h3>
<pre><code>&lt;textarea rows="4" cols="30"&gt;&lt;/textarea&gt;

&lt;select&gt;
  &lt;option value="js"&gt;JavaScript&lt;/option&gt;
  &lt;option value="dart"&gt;Dart&lt;/option&gt;
&lt;/select&gt;</code></pre>

<h3>Buttons</h3>
<pre><code>&lt;button type="submit"&gt;Send&lt;/button&gt;
&lt;button type="button"&gt;Click Me&lt;/button&gt;</code></pre>`,
      starterHTML: '<form>\n  <label for="name">Name:</label><br>\n  <input type="text" id="name" placeholder="Enter your name"><br><br>\n  <button type="submit">Submit</button>\n</form>',
      starterCSS: 'input, button { padding: 8px; font-size: 16px; margin-top: 4px; }',
      challenges: [
        {
          id: '7-1',
          title: 'Contact Form',
          difficulty: 'medium',
          description: 'Build a contact form with: Name (text), Email (email), Message (textarea), and a Submit button. Include labels!',
          hints: [
            'Use <code>&lt;label for="..."&gt;</code> with matching <code>id</code> on each input.',
            'Use <code>&lt;textarea&gt;&lt;/textarea&gt;</code> for the message — not <code>&lt;input&gt;</code>.',
            'Wrap it all in <code>&lt;form&gt;</code>.'
          ],
          starterHTML: '<h2>Contact Us</h2>\n<form>\n  <!-- Build your form here -->\n</form>',
          starterCSS: 'input, textarea, button {\n  display: block;\n  width: 100%;\n  padding: 8px;\n  font-size: 16px;\n  margin: 4px 0 12px;\n  box-sizing: border-box;\n}',
          targetHTML: '<h2>Contact Us</h2>\n<form>\n  <label for="name">Name:</label>\n  <input type="text" id="name">\n  <label for="email">Email:</label>\n  <input type="email" id="email">\n  <label for="msg">Message:</label>\n  <textarea id="msg" rows="4"></textarea>\n  <button type="submit">Send</button>\n</form>',
          targetCSS: 'input, textarea, button {\n  display: block;\n  width: 100%;\n  padding: 8px;\n  font-size: 16px;\n  margin: 4px 0 12px;\n  box-sizing: border-box;\n}'
        }
      ]
    },

    /* ---------- Lesson 8 ---------- */
    {
      id: 8,
      title: 'Semantic HTML',
      flutterParallel: 'Semantic tags are like naming your widgets meaningfully. Instead of a <code>Container</code> for everything, you use <code>AppBar</code>, <code>Drawer</code>, <code>BottomNavigationBar</code>.',
      content: `
<h3>Why Semantic HTML?</h3>
<p>You <em>could</em> build a whole page with just <code>&lt;div&gt;</code> tags. But semantic tags tell the browser (and screen readers) what each section <strong>means</strong>.</p>

<h3>The Semantic Tags</h3>
<ul>
  <li><code>&lt;header&gt;</code> — top section (logo, nav)</li>
  <li><code>&lt;nav&gt;</code> — navigation links</li>
  <li><code>&lt;main&gt;</code> — the primary content</li>
  <li><code>&lt;article&gt;</code> — standalone content (blog post, news article)</li>
  <li><code>&lt;section&gt;</code> — a thematic group of content</li>
  <li><code>&lt;aside&gt;</code> — sidebar content</li>
  <li><code>&lt;footer&gt;</code> — bottom section (links, copyright)</li>
</ul>

<h3>Before vs After</h3>
<pre><code>&lt;!-- Bad: all divs --&gt;
&lt;div class="header"&gt;...&lt;/div&gt;
&lt;div class="content"&gt;...&lt;/div&gt;
&lt;div class="footer"&gt;...&lt;/div&gt;

&lt;!-- Good: semantic --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;main&gt;...&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>
<p>Both look the same visually, but semantic HTML helps accessibility, SEO, and code readability.</p>`,
      starterHTML: '<header>\n  <h1>My Site</h1>\n  <nav>\n    <a href="#">Home</a> |\n    <a href="#">About</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Content goes here.</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2026 My Site</p>\n</footer>',
      starterCSS: 'header { background: #333; color: white; padding: 16px; }\nnav a { color: #5bc0de; }\nmain { padding: 16px; }\nfooter { background: #333; color: #aaa; padding: 12px; text-align: center; }',
      challenges: [
        {
          id: '8-1',
          title: 'Add a Sidebar',
          difficulty: 'medium',
          description: 'Add an <code>&lt;aside&gt;</code> element after the <code>&lt;article&gt;</code> with a list of related links.',
          hints: [
            '<code>&lt;aside&gt;</code> goes inside <code>&lt;main&gt;</code>, after <code>&lt;article&gt;</code>.',
            'Put a heading and a <code>&lt;ul&gt;</code> with link items inside the aside.'
          ],
          starterHTML: '<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Content goes here.</p>\n  </article>\n</main>',
          starterCSS: 'main { padding: 16px; }\naside { background: #f5f5f5; padding: 12px; margin-top: 16px; border-radius: 8px; }',
          targetHTML: '<main>\n  <article>\n    <h2>Blog Post</h2>\n    <p>Content goes here.</p>\n  </article>\n  <aside>\n    <h3>Related</h3>\n    <ul>\n      <li><a href="#">Link 1</a></li>\n      <li><a href="#">Link 2</a></li>\n    </ul>\n  </aside>\n</main>',
          targetCSS: 'main { padding: 16px; }\naside { background: #f5f5f5; padding: 12px; margin-top: 16px; border-radius: 8px; }'
        }
      ]
    },

    /* ---------- Lesson 9 ---------- */
    {
      id: 9,
      title: 'Media & Block vs Inline',
      flutterParallel: '<code>&lt;div&gt;</code> is like <code>Container</code> (takes full width). <code>&lt;span&gt;</code> is like a <code>Text</code> widget inside a <code>Row</code> (only as wide as its content).',
      content: `
<h3>Block vs Inline Elements</h3>
<p>This is a key concept! HTML elements are either <strong>block</strong> or <strong>inline</strong>:</p>
<ul>
  <li><strong>Block</strong> elements take the full width and start on a new line: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;h1&gt;</code>, <code>&lt;ul&gt;</code></li>
  <li><strong>Inline</strong> elements only take the space they need and sit alongside other content: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;img&gt;</code></li>
</ul>

<h3>div vs span</h3>
<p><code>&lt;div&gt;</code> — a generic block container (use for layout sections).</p>
<p><code>&lt;span&gt;</code> — a generic inline container (use for styling parts of text).</p>
<pre><code>&lt;div class="card"&gt;
  &lt;p&gt;Price: &lt;span class="price"&gt;$19.99&lt;/span&gt;&lt;/p&gt;
&lt;/div&gt;</code></pre>

<h3>Audio &amp; Video</h3>
<pre><code>&lt;video src="clip.mp4" controls width="100%"&gt;&lt;/video&gt;
&lt;audio src="song.mp3" controls&gt;&lt;/audio&gt;</code></pre>
<p>The <code>controls</code> attribute adds play/pause/volume buttons.</p>

<h3>Embedding with iframe</h3>
<p>An <code>&lt;iframe&gt;</code> embeds another page inside yours:</p>
<pre><code>&lt;iframe src="https://example.com" width="100%" height="300"&gt;&lt;/iframe&gt;</code></pre>
<p>Fun fact: the live editor in this app uses an iframe to show your preview!</p>`,
      starterHTML: '<div class="card">\n  <h3>Product</h3>\n  <p>Price: <span class="price">$29.99</span></p>\n  <p>Status: <span class="status">In Stock</span></p>\n</div>',
      starterCSS: '.card { border: 1px solid #ccc; padding: 16px; border-radius: 8px; max-width: 300px; }\n.price { color: green; font-weight: bold; }\n.status { color: blue; }',
      challenges: [
        {
          id: '9-1',
          title: 'Block & Inline Layout',
          difficulty: 'easy',
          description: 'Create two <code>&lt;div&gt;</code> boxes each containing a <code>&lt;span&gt;</code> with colored text.',
          hints: [
            '<code>&lt;div&gt;</code> will stack vertically (block). <code>&lt;span&gt;</code> wraps text inline.',
            'Use the <code>style</code> attribute for quick colors.'
          ],
          starterHTML: '',
          starterCSS: 'div { padding: 12px; margin: 8px 0; background: #f0f0f0; border-radius: 4px; }',
          targetHTML: '<div>\n  <span style="color: red;">Red text</span> and <span style="color: blue;">blue text</span>\n</div>\n<div>\n  <span style="color: green;">Green text</span> and <span style="color: orange;">orange text</span>\n</div>',
          targetCSS: 'div { padding: 12px; margin: 8px 0; background: #f0f0f0; border-radius: 4px; }'
        }
      ]
    }
  ]
};
