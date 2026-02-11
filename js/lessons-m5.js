/* ============================================
   Module 5 — CSS Responsive & Effects
   Lessons 18-20: Responsive design,
   transitions & transforms, capstone project
   ============================================ */

const MODULE_5 = {
  id: 5,
  title: 'Responsive & Effects',
  lessons: [

    /* ---------- Lesson 18 ---------- */
    {
      id: 18,
      title: 'Responsive Design',
      flutterParallel: 'Media queries are like <code>MediaQuery.of(context).size.width</code> and <code>LayoutBuilder</code> in Flutter — you check the screen size and adjust layout accordingly.',
      content: `
<h3>What is Responsive Design?</h3>
<p>Your page should look good on a phone (360px wide) AND a desktop (1920px wide). Responsive design makes that happen.</p>

<h3>The Viewport Meta Tag</h3>
<p>This tag is essential for mobile — it tells the browser to use the device's width:</p>
<pre><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code></pre>
<p>Without it, mobile browsers zoom out and your page looks tiny.</p>

<h3>Relative Units</h3>
<ul>
  <li><code>%</code> — relative to parent: <code>width: 100%;</code></li>
  <li><code>vw / vh</code> — viewport width/height: <code>100vw</code> = full screen width</li>
  <li><code>rem</code> — relative to root font size (usually 16px)</li>
  <li><code>em</code> — relative to parent font size</li>
</ul>

<h3>Media Queries</h3>
<p>Apply CSS only when certain conditions are met:</p>
<pre><code>/* Base styles (mobile first) */
.grid {
  display: grid;
  grid-template-columns: 1fr;
}

/* When screen is 768px or wider */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}

/* When screen is 1024px or wider */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}</code></pre>
<p><strong>Mobile-first</strong> means: write mobile styles first, then add larger screen overrides with <code>min-width</code>.</p>`,
      starterHTML: '<div class="grid">\n  <div class="card">Card 1</div>\n  <div class="card">Card 2</div>\n  <div class="card">Card 3</div>\n  <div class="card">Card 4</div>\n</div>',
      starterCSS: '.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n  padding: 16px;\n}\n\n@media (min-width: 500px) {\n  .grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n\n.card {\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  padding: 20px;\n  color: #d4a843;\n  text-align: center;\n}',
      challenges: [
        {
          id: '18-1',
          title: 'Responsive Breakpoint',
          difficulty: 'medium',
          description: 'Make the cards stack in 1 column on small screens, 2 columns at 400px+, and 3 columns at 600px+.',
          hints: [
            'Base style: <code>grid-template-columns: 1fr;</code>',
            'Add <code>@media (min-width: 400px)</code> for 2 columns.',
            'Add <code>@media (min-width: 600px)</code> for 3 columns.'
          ],
          starterHTML: '<div class="grid">\n  <div class="card">1</div>\n  <div class="card">2</div>\n  <div class="card">3</div>\n  <div class="card">4</div>\n  <div class="card">5</div>\n  <div class="card">6</div>\n</div>',
          starterCSS: '.grid {\n  display: grid;\n  gap: 12px;\n  /* Start with 1 column, add media queries */\n}\n\n.card {\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  padding: 20px;\n  color: #d4a843;\n  text-align: center;\n}',
          targetHTML: '<div class="grid">\n  <div class="card">1</div>\n  <div class="card">2</div>\n  <div class="card">3</div>\n  <div class="card">4</div>\n  <div class="card">5</div>\n  <div class="card">6</div>\n</div>',
          targetCSS: '.grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n@media (min-width: 400px) {\n  .grid { grid-template-columns: 1fr 1fr; }\n}\n\n@media (min-width: 600px) {\n  .grid { grid-template-columns: 1fr 1fr 1fr; }\n}\n\n.card {\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 8px;\n  padding: 20px;\n  color: #d4a843;\n  text-align: center;\n}'
        }
      ]
    },

    /* ---------- Lesson 19 ---------- */
    {
      id: 19,
      title: 'Transitions & Transforms',
      flutterParallel: '<code>transition</code> is like <code>AnimatedContainer</code> — smoothly animates between states. <code>transform</code> is like the <code>Transform</code> widget (scale, rotate, translate).',
      content: `
<h3>CSS Transitions</h3>
<p>Transitions smoothly animate property changes over time:</p>
<pre><code>.button {
  background: #d4a843;
  transition: background 0.3s ease;
}

.button:hover {
  background: #f0c860;
}</code></pre>
<p>This animates the background color over 0.3 seconds when hovered.</p>

<h3>Transition Shorthand</h3>
<pre><code>/* property | duration | timing | delay */
transition: all 0.3s ease 0s;

/* Multiple properties */
transition: background 0.3s, transform 0.2s;</code></pre>

<h3>Pseudo-classes for Interaction</h3>
<ul>
  <li><code>:hover</code> — mouse over (desktop)</li>
  <li><code>:focus</code> — element is focused (keyboard/tap)</li>
  <li><code>:active</code> — being clicked/tapped</li>
</ul>

<h3>CSS Transforms</h3>
<pre><code>.card:hover {
  transform: scale(1.05);        /* grow 5% */
  transform: translateY(-4px);   /* move up */
  transform: rotate(5deg);       /* tilt */
}</code></pre>

<h3>Combining Them</h3>
<pre><code>.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}</code></pre>`,
      starterHTML: '<button class="glow-btn">Hover Me</button>\n\n<div class="card">A card that lifts on hover</div>',
      starterCSS: '.glow-btn {\n  background: #d4a843;\n  color: #1a1410;\n  border: none;\n  padding: 12px 32px;\n  font-size: 16px;\n  font-weight: bold;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n\n.glow-btn:hover {\n  background: #f0c860;\n  box-shadow: 0 0 20px rgba(212, 168, 67, 0.4);\n  transform: scale(1.05);\n}\n\n.card {\n  margin-top: 20px;\n  padding: 20px;\n  background: #2a2218;\n  border: 1px solid rgba(212, 168, 67, 0.3);\n  border-radius: 12px;\n  color: #e8dcc8;\n  transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n.card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}',
      challenges: [
        {
          id: '19-1',
          title: 'Glow on Hover',
          difficulty: 'medium',
          description: 'Add a transition that changes the card\'s border color to gold and adds a gold glow shadow on hover.',
          hints: [
            'Add <code>transition: border-color 0.3s, box-shadow 0.3s;</code> to the card.',
            'On hover: <code>border-color: #d4a843; box-shadow: 0 0 20px rgba(212, 168, 67, 0.3);</code>'
          ],
          starterHTML: '<div class="card">\n  <h3>Hover for Glow</h3>\n  <p>Watch the border light up!</p>\n</div>',
          starterCSS: '.card {\n  padding: 24px;\n  background: #1a1410;\n  border: 1px solid rgba(212, 168, 67, 0.2);\n  border-radius: 12px;\n  color: #e8dcc8;\n  /* Add transition */\n}\n\n.card:hover {\n  /* Add hover effects */\n}\n\n.card h3 { color: #d4a843; }',
          targetHTML: '<div class="card">\n  <h3>Hover for Glow</h3>\n  <p>Watch the border light up!</p>\n</div>',
          targetCSS: '.card {\n  padding: 24px;\n  background: #1a1410;\n  border: 1px solid rgba(212, 168, 67, 0.2);\n  border-radius: 12px;\n  color: #e8dcc8;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n\n.card:hover {\n  border-color: #d4a843;\n  box-shadow: 0 0 20px rgba(212, 168, 67, 0.3);\n}\n\n.card h3 { color: #d4a843; }'
        }
      ]
    },

    /* ---------- Lesson 20 ---------- */
    {
      id: 20,
      title: 'Capstone: Mini Website',
      flutterParallel: 'This is like building a complete Flutter app — assembling <code>Scaffold</code>, <code>AppBar</code>, <code>body</code>, <code>BottomNavigationBar</code> all together.',
      content: `
<h3>Putting It All Together!</h3>
<p>You've learned HTML structure, text, lists, links, forms, tables, CSS selectors, colors, box model, flexbox, grid, positioning, responsive design, and transitions. Time to build!</p>

<h3>Your Mission</h3>
<p>Build a simple portfolio page with:</p>
<ol>
  <li>A <code>&lt;header&gt;</code> with your name and navigation links</li>
  <li>A <code>&lt;main&gt;</code> with a heading, intro paragraph, and a grid of 3 "project" cards</li>
  <li>Each card should have a title, description, and a link</li>
  <li>A <code>&lt;footer&gt;</code> with copyright text</li>
  <li>Responsive: cards stack on mobile, grid on wider screens</li>
  <li>Hover effect on the cards</li>
</ol>

<h3>Starter Code</h3>
<p>We've given you the HTML structure. Your job is to write the CSS to make it look great! Use everything you've learned.</p>

<h3>Tips</h3>
<ul>
  <li>Use Flexbox for the header layout</li>
  <li>Use Grid for the project cards</li>
  <li>Add transitions for card hover effects</li>
  <li>Style it in the Lantern Labs theme if you want!</li>
</ul>`,
      starterHTML: '<header>\n  <h1>My Portfolio</h1>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">Projects</a>\n    <a href="#">Contact</a>\n  </nav>\n</header>\n\n<main>\n  <section class="hero">\n    <h2>Hello, I\'m a Developer!</h2>\n    <p>I build things with code.</p>\n  </section>\n\n  <section class="projects">\n    <h2>My Projects</h2>\n    <div class="grid">\n      <div class="card">\n        <h3>Project One</h3>\n        <p>A cool app I built.</p>\n        <a href="#">View →</a>\n      </div>\n      <div class="card">\n        <h3>Project Two</h3>\n        <p>Another awesome project.</p>\n        <a href="#">View →</a>\n      </div>\n      <div class="card">\n        <h3>Project Three</h3>\n        <p>My latest creation.</p>\n        <a href="#">View →</a>\n      </div>\n    </div>\n  </section>\n</main>\n\n<footer>\n  <p>&copy; 2026 My Portfolio</p>\n</footer>',
      starterCSS: '/* Reset */\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: sans-serif; background: #1a1410; color: #e8dcc8; }\na { color: #d4a843; text-decoration: none; }\n\n/* Style the rest! */\nheader {\n  /* Use flexbox to space out title and nav */\n}\n\n.hero {\n  /* Center the text, add padding */\n}\n\n.grid {\n  /* Create a responsive card grid */\n}\n\n.card {\n  /* Style the cards with border, padding, hover effect */\n}\n\nfooter {\n  /* Simple footer styling */\n}',
      challenges: [
        {
          id: '20-1',
          title: 'Complete the Portfolio',
          difficulty: 'hard',
          description: 'Write the CSS to make this portfolio look professional. Use flexbox for the header, grid for the cards, and add hover transitions.',
          hints: [
            'Header: <code>display: flex; justify-content: space-between; align-items: center; padding: 16px 24px;</code>',
            'Grid: <code>display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;</code>',
            'Card hover: <code>transition: transform 0.3s; + :hover { transform: translateY(-4px); }</code>'
          ],
          starterHTML: '<header>\n  <h1>My Portfolio</h1>\n  <nav>\n    <a href="#">Home</a>\n    <a href="#">Projects</a>\n    <a href="#">Contact</a>\n  </nav>\n</header>\n<main>\n  <section class="hero">\n    <h2>Hello!</h2>\n    <p>I build things with code.</p>\n  </section>\n  <section class="projects">\n    <div class="grid">\n      <div class="card">\n        <h3>Project 1</h3>\n        <p>Description</p>\n      </div>\n      <div class="card">\n        <h3>Project 2</h3>\n        <p>Description</p>\n      </div>\n      <div class="card">\n        <h3>Project 3</h3>\n        <p>Description</p>\n      </div>\n    </div>\n  </section>\n</main>\n<footer><p>&copy; 2026</p></footer>',
          starterCSS: '* { box-sizing: border-box; margin: 0; padding: 0; }\nbody { font-family: sans-serif; background: #1a1410; color: #e8dcc8; }\na { color: #d4a843; }\n\n/* Your CSS here! */',
          targetHTML: '',
          targetCSS: ''
        }
      ]
    }
  ]
};
