/* ============================================
   Live Code Editor
   Creates an interactive HTML/CSS editor with
   a live preview using an iframe's srcdoc.
   ============================================ */

const Editor = (() => {
  let currentEditor = null;
  let debounceTimer = null;

  /**
   * Create an editor instance inside a container element.
   * Returns an object with methods to get/set code and destroy.
   */
  function create(container, options = {}) {
    const {
      initialHTML = '',
      initialCSS = '',
      onUpdate = null,
      readOnly = false
    } = options;

    const wrapper = document.createElement('div');
    wrapper.className = 'editor-container';

    // Tab bar
    const tabs = document.createElement('div');
    tabs.className = 'editor-tabs';
    tabs.innerHTML = `
      <button class="editor-tab active" data-pane="html">HTML</button>
      <button class="editor-tab" data-pane="css">CSS</button>
      <button class="editor-tab tab-preview" data-pane="preview">Preview</button>
    `;

    // HTML pane
    const htmlPane = document.createElement('div');
    htmlPane.className = 'editor-pane active';
    htmlPane.dataset.pane = 'html';
    const htmlArea = document.createElement('textarea');
    htmlArea.value = initialHTML;
    htmlArea.placeholder = 'Write your HTML here...';
    htmlArea.spellcheck = false;
    htmlArea.readOnly = readOnly;
    htmlPane.appendChild(htmlArea);

    // CSS pane
    const cssPane = document.createElement('div');
    cssPane.className = 'editor-pane';
    cssPane.dataset.pane = 'css';
    const cssArea = document.createElement('textarea');
    cssArea.value = initialCSS;
    cssArea.placeholder = 'Write your CSS here...';
    cssArea.spellcheck = false;
    cssArea.readOnly = readOnly;
    cssPane.appendChild(cssArea);

    // Preview pane
    const previewPane = document.createElement('div');
    previewPane.className = 'editor-preview';
    previewPane.dataset.pane = 'preview';
    const iframe = document.createElement('iframe');
    iframe.sandbox = 'allow-scripts';
    iframe.title = 'Preview';
    previewPane.appendChild(iframe);

    // Toolbar
    const toolbar = document.createElement('div');
    toolbar.className = 'editor-toolbar';
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '↺ Reset';
    resetBtn.title = 'Reset to starter code';
    const runBtn = document.createElement('button');
    runBtn.textContent = '▶ Run';
    runBtn.title = 'Update preview';
    toolbar.appendChild(resetBtn);
    toolbar.appendChild(runBtn);

    // Assemble
    wrapper.appendChild(tabs);
    const editorBody = document.createElement('div');
    editorBody.className = 'editor-body';
    editorBody.appendChild(htmlPane);
    editorBody.appendChild(cssPane);
    editorBody.appendChild(previewPane);
    wrapper.appendChild(editorBody);
    wrapper.appendChild(toolbar);
    container.appendChild(wrapper);

    // Tab switching
    tabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.editor-tab');
      if (!btn) return;
      const pane = btn.dataset.pane;

      tabs.querySelectorAll('.editor-tab').forEach(t => t.classList.remove('active'));
      btn.classList.add('active');

      htmlPane.classList.toggle('active', pane === 'html');
      cssPane.classList.toggle('active', pane === 'css');
      previewPane.classList.toggle('active', pane === 'preview');

      if (pane === 'preview') updatePreview();
    });

    // Live update on input
    function scheduleUpdate() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        updatePreview();
        if (onUpdate) onUpdate(htmlArea.value, cssArea.value);
      }, 250);
    }

    htmlArea.addEventListener('input', scheduleUpdate);
    cssArea.addEventListener('input', scheduleUpdate);

    // Tab key support in textareas
    [htmlArea, cssArea].forEach(area => {
      area.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = area.selectionStart;
          const end = area.selectionEnd;
          area.value = area.value.substring(0, start) + '  ' + area.value.substring(end);
          area.selectionStart = area.selectionEnd = start + 2;
          scheduleUpdate();
        }
      });
    });

    // Run button
    runBtn.addEventListener('click', updatePreview);

    // Reset button
    resetBtn.addEventListener('click', () => {
      htmlArea.value = initialHTML;
      cssArea.value = initialCSS;
      updatePreview();
      if (onUpdate) onUpdate(initialHTML, initialCSS);
    });

    function updatePreview() {
      const doc = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body { font-family: sans-serif; padding: 12px; margin: 0; }
${cssArea.value}
</style>
</head>
<body>
${htmlArea.value}
</body>
</html>`;
      iframe.srcdoc = doc;
    }

    // Initial render
    updatePreview();

    const instance = {
      getHTML: () => htmlArea.value,
      getCSS: () => cssArea.value,
      setHTML: (val) => { htmlArea.value = val; updatePreview(); },
      setCSS: (val) => { cssArea.value = val; updatePreview(); },
      refresh: updatePreview,
      getIframe: () => iframe,
      destroy: () => { wrapper.remove(); }
    };

    currentEditor = instance;
    return instance;
  }

  /**
   * Create a read-only preview (for showing target output).
   */
  function createTargetPreview(container, html, css) {
    const wrapper = document.createElement('div');
    wrapper.className = 'target-preview';

    const label = document.createElement('div');
    label.className = 'target-preview-label';
    label.textContent = '🎯 Target Output';

    const iframe = document.createElement('iframe');
    iframe.title = 'Target';
    iframe.srcdoc = `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>body{font-family:sans-serif;padding:12px;margin:0;}${css}</style>
</head><body>${html}</body></html>`;

    wrapper.appendChild(label);
    wrapper.appendChild(iframe);
    container.appendChild(wrapper);
    return wrapper;
  }

  return { create, createTargetPreview };
})();
