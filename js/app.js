/* ============================================
   App Controller
   Handles navigation, view rendering, tab
   switching, and wires all modules together.
   ============================================ */

const App = (() => {
  const ALL_MODULES = [MODULE_1, MODULE_2, MODULE_3, MODULE_4, MODULE_5];
  let currentEditor = null;
  let currentView = 'learn';

  /* --- Initialization --- */
  function init() {
    registerServiceWorker();
    renderModuleList();
    renderPracticeList();
    renderCheatsheetList();
    bindTabs();
    bindBackButton();
    bindLessonNav();
    updateHeaderProgress();
  }

  /* --- Service Worker --- */
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    }
  }

  /* --- Tab Navigation --- */
  function bindTabs() {
    document.querySelectorAll('#tab-bar .tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        switchTab(target);
      });
    });
  }

  function switchTab(tabName) {
    document.querySelectorAll('#tab-bar .tab').forEach(t => {
      t.classList.toggle('active', t.dataset.tab === tabName);
    });

    const viewMap = {
      learn: 'view-learn',
      practice: 'view-practice',
      reference: 'view-reference'
    };

    showView(viewMap[tabName] || 'view-learn');
    currentView = tabName;

    document.getElementById('btn-back').classList.add('hidden');
    document.getElementById('header-title').textContent = 'HTML & CSS Teacher';
    updateHeaderProgress();
  }

  function showView(viewId) {
    if (currentEditor) { currentEditor.destroy(); currentEditor = null; }
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(viewId).classList.add('active');
    window.scrollTo(0, 0);
  }

  /* --- Back Button --- */
  function bindBackButton() {
    document.getElementById('btn-back').addEventListener('click', () => {
      if (currentView === 'cheatsheet-detail') {
        switchTab('reference');
      } else {
        switchTab('learn');
      }
    });
  }

  /* --- Header Progress --- */
  function updateHeaderProgress() {
    const allIds = getAllLessonIds();
    const { completed, total } = Progress.getOverallProgress(allIds);
    document.getElementById('header-progress').textContent =
      completed > 0 ? `${completed}/${total}` : '';
  }

  function getAllLessonIds() {
    const ids = [];
    ALL_MODULES.forEach(m => m.lessons.forEach(l => ids.push(l.id)));
    return ids;
  }

  /* --- Module List (Learn Tab) --- */
  function renderModuleList() {
    const container = document.getElementById('module-list');
    container.innerHTML = '';

    ALL_MODULES.forEach(mod => {
      const lessonIds = mod.lessons.map(l => l.id);
      const progress = Progress.getModuleProgress(mod.id, mod.lessons.length, lessonIds);
      const pct = mod.lessons.length ? (progress.completed / progress.total) : 0;
      const circumference = 2 * Math.PI * 12;

      const card = document.createElement('div');
      card.className = 'module-card';
      card.innerHTML = `
        <div class="module-header">
          <div>
            <h3>Module ${mod.id}: ${mod.title}</h3>
            <span style="font-size:13px;color:var(--text-muted);">${progress.completed}/${progress.total} lessons</span>
          </div>
          <div class="module-meta">
            <svg class="module-progress-ring" viewBox="0 0 32 32">
              <circle class="bg" cx="16" cy="16" r="12"/>
              <circle class="fg" cx="16" cy="16" r="12"
                stroke-dasharray="${circumference}"
                stroke-dashoffset="${circumference * (1 - pct)}"
                transform="rotate(-90 16 16)"/>
            </svg>
            <svg class="module-chevron" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>
        <div class="module-lessons"></div>
      `;

      const lessonsContainer = card.querySelector('.module-lessons');
      mod.lessons.forEach(lesson => {
        const isComplete = Progress.isLessonComplete(lesson.id);
        const item = document.createElement('div');
        item.className = 'lesson-item' + (isComplete ? ' completed' : '');
        item.innerHTML = `
          <div class="lesson-number">${isComplete ? '✓' : lesson.id}</div>
          <div class="lesson-item-text">
            <h4>${lesson.title}</h4>
            <p>${mod.title}</p>
          </div>
        `;
        item.addEventListener('click', () => openLesson(mod, lesson));
        lessonsContainer.appendChild(item);
      });

      card.querySelector('.module-header').addEventListener('click', () => {
        card.classList.toggle('expanded');
      });

      container.appendChild(card);
    });
  }

  /* --- Lesson View --- */
  function openLesson(mod, lesson) {
    showView('view-lesson');
    currentView = 'lesson';

    document.getElementById('btn-back').classList.remove('hidden');
    document.getElementById('header-title').textContent = lesson.title;

    Progress.setCurrentPosition(mod.id, lesson.id);
    renderLessonContent(mod, lesson);
    renderLessonEditor(lesson);
    renderLessonChallenges(lesson);
    bindLessonNavFor(mod, lesson);
  }

  function renderLessonContent(mod, lesson) {
    const container = document.getElementById('lesson-content');
    container.innerHTML = `
      <div class="lesson-header">
        <div class="module-label">Module ${mod.id}: ${mod.title}</div>
        <h2>Lesson ${lesson.id}: ${lesson.title}</h2>
      </div>
      <div class="flutter-parallel">
        <strong>Flutter Parallel:</strong> ${lesson.flutterParallel}
      </div>
      <div class="lesson-body">${lesson.content}</div>
    `;
  }

  function renderLessonEditor(lesson) {
    const container = document.getElementById('lesson-editor');
    container.innerHTML = '<h3 style="color:var(--gold);margin-bottom:12px;">Try It Out</h3>';

    const saved = Progress.getSavedCode(lesson.id);
    currentEditor = Editor.create(container, {
      initialHTML: saved?.html ?? lesson.starterHTML,
      initialCSS: saved?.css ?? lesson.starterCSS,
      onUpdate: (html, css) => Progress.saveCode(lesson.id, html, css)
    });
  }

  function renderLessonChallenges(lesson) {
    const container = document.getElementById('lesson-challenges');
    container.innerHTML = '';
    if (!lesson.challenges?.length) return;

    const heading = document.createElement('h3');
    heading.style.cssText = 'color:var(--gold);margin:24px 0 12px;';
    heading.textContent = 'Challenges';
    container.appendChild(heading);

    lesson.challenges.forEach(ch => {
      const isComplete = Progress.isChallengeComplete(ch.id);
      const card = document.createElement('div');
      card.className = 'challenge-card' + (isComplete ? ' completed' : '');
      card.innerHTML = `
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h4>${ch.title}</h4>
          <span class="badge badge-${ch.difficulty}">${ch.difficulty}</span>
        </div>
        <p>${ch.description}</p>
      `;

      const btn = document.createElement('button');
      btn.className = 'btn btn-outline';
      btn.style.cssText = 'font-size:14px;padding:6px 16px;';
      btn.textContent = isComplete ? '✓ Completed — Try Again' : 'Start Challenge';
      btn.addEventListener('click', () => openChallenge(ch));
      card.appendChild(btn);

      container.appendChild(card);
    });
  }

  /* --- Lesson Navigation --- */
  function bindLessonNav() {
    /* Bound dynamically per lesson via bindLessonNavFor */
  }

  function bindLessonNavFor(mod, lesson) {
    const allLessons = flattenLessons();
    const idx = allLessons.findIndex(l => l.lesson.id === lesson.id);

    const prevBtn = document.getElementById('btn-prev-lesson');
    const nextBtn = document.getElementById('btn-next-lesson');
    const completeBtn = document.getElementById('btn-complete-lesson');

    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= allLessons.length - 1;

    const clonePrev = prevBtn.cloneNode(true);
    const cloneNext = nextBtn.cloneNode(true);
    const cloneComplete = completeBtn.cloneNode(true);

    prevBtn.replaceWith(clonePrev);
    nextBtn.replaceWith(cloneNext);
    completeBtn.replaceWith(cloneComplete);

    if (idx > 0) {
      clonePrev.addEventListener('click', () => {
        const prev = allLessons[idx - 1];
        openLesson(prev.mod, prev.lesson);
      });
    }

    if (idx < allLessons.length - 1) {
      cloneNext.addEventListener('click', () => {
        const next = allLessons[idx + 1];
        openLesson(next.mod, next.lesson);
      });
    }

    cloneComplete.addEventListener('click', () => {
      Progress.completeLesson(lesson.id);
      cloneComplete.textContent = 'Completed ✓';
      cloneComplete.disabled = true;
      renderModuleList();
      updateHeaderProgress();
    });

    if (Progress.isLessonComplete(lesson.id)) {
      cloneComplete.textContent = 'Completed ✓';
      cloneComplete.disabled = true;
    }
  }

  function flattenLessons() {
    const flat = [];
    ALL_MODULES.forEach(mod => {
      mod.lessons.forEach(lesson => flat.push({ mod, lesson }));
    });
    return flat;
  }

  /* --- Challenge View --- */
  function openChallenge(challenge) {
    showView('view-challenge');
    currentView = 'challenge';

    document.getElementById('btn-back').classList.remove('hidden');
    document.getElementById('header-title').textContent = challenge.title;

    const headerEl = document.getElementById('challenge-header');
    headerEl.innerHTML = `
      <span class="badge badge-${challenge.difficulty}" style="margin-bottom:8px;">${challenge.difficulty}</span>
      <h2 style="color:var(--gold);margin-bottom:8px;">${challenge.title}</h2>
      <p style="color:var(--text-secondary);margin-bottom:16px;">${challenge.description}</p>
    `;

    if (challenge.targetHTML) {
      Editor.createTargetPreview(headerEl, challenge.targetHTML, challenge.targetCSS || '');
    }

    const editorEl = document.getElementById('challenge-editor');
    editorEl.innerHTML = '';
    currentEditor = Editor.create(editorEl, {
      initialHTML: challenge.starterHTML,
      initialCSS: challenge.starterCSS
    });

    const controlsEl = document.getElementById('challenge-controls');
    controlsEl.innerHTML = '';

    // Hints
    if (challenge.hints?.length) {
      const hintContainer = document.createElement('div');
      hintContainer.className = 'hint-container';

      challenge.hints.forEach((hint, i) => {
        const btn = document.createElement('button');
        btn.className = 'hint-btn';
        btn.textContent = `Hint ${i + 1}`;

        const text = document.createElement('div');
        text.className = 'hint-text';
        text.innerHTML = hint;

        btn.addEventListener('click', () => text.classList.toggle('visible'));
        hintContainer.appendChild(btn);
        hintContainer.appendChild(text);
      });

      controlsEl.appendChild(hintContainer);
    }

    // Complete button
    const doneBtn = document.createElement('button');
    doneBtn.className = 'btn btn-primary';
    doneBtn.style.cssText = 'margin-top:16px;width:100%;';
    doneBtn.textContent = Progress.isChallengeComplete(challenge.id)
      ? '✓ Already Completed — Mark Again' : 'Mark as Complete ✓';

    doneBtn.addEventListener('click', () => {
      Progress.completeChallenge(challenge.id);
      doneBtn.textContent = '✓ Completed!';
      doneBtn.disabled = true;
      updateHeaderProgress();
    });

    controlsEl.appendChild(doneBtn);
  }

  /* --- Practice Tab --- */
  function renderPracticeList() {
    const container = document.getElementById('practice-list');
    container.innerHTML = '';

    ALL_MODULES.forEach(mod => {
      mod.lessons.forEach(lesson => {
        if (!lesson.challenges?.length) return;

        lesson.challenges.forEach(ch => {
          const isComplete = Progress.isChallengeComplete(ch.id);
          const card = document.createElement('div');
          card.className = 'challenge-card' + (isComplete ? ' completed' : '');
          card.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <h4>${ch.title}</h4>
              <span class="badge badge-${ch.difficulty}">${ch.difficulty}</span>
            </div>
            <p style="font-size:13px;color:var(--text-muted);margin-bottom:4px;">
              Module ${mod.id} → Lesson ${lesson.id}
            </p>
            <p>${ch.description}</p>
          `;
          card.style.cursor = 'pointer';
          card.addEventListener('click', () => openChallenge(ch));
          container.appendChild(card);
        });
      });
    });
  }

  /* --- Reference Tab --- */
  function renderCheatsheetList() {
    const container = document.getElementById('cheatsheet-list');
    container.innerHTML = '';

    CHEATSHEETS.forEach(sheet => {
      const card = document.createElement('div');
      card.className = 'cheatsheet-card';
      card.innerHTML = `
        <h3>${sheet.title}</h3>
        <p>${sheet.description}</p>
      `;
      card.addEventListener('click', () => openCheatsheet(sheet));
      container.appendChild(card);
    });
  }

  function openCheatsheet(sheet) {
    showView('view-cheatsheet-detail');
    currentView = 'cheatsheet-detail';

    document.getElementById('btn-back').classList.remove('hidden');
    document.getElementById('header-title').textContent = sheet.title;

    document.getElementById('cheatsheet-content').innerHTML = `
      <div class="cheatsheet-detail">${sheet.content}</div>
    `;
  }

  /* --- Boot --- */
  document.addEventListener('DOMContentLoaded', init);

  return { switchTab };
})();
