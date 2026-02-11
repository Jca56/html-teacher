/* ============================================
   Progress Tracking (localStorage)
   Saves lesson completion, challenge status,
   current position, and user code per lesson.
   ============================================ */

const Progress = (() => {
  const STORAGE_KEY = 'htmlteacher_progress';

  const DEFAULT_DATA = {
    version: 1,
    lessons: {},
    challenges: {},
    currentModuleId: 1,
    currentLessonId: 1,
    savedCode: {},
    settings: { fontSize: 16 }
  };

  function load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...DEFAULT_DATA };
      const data = JSON.parse(raw);
      return { ...DEFAULT_DATA, ...data };
    } catch {
      return { ...DEFAULT_DATA };
    }
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* Storage full — silently fail */
    }
  }

  function isLessonComplete(lessonId) {
    return load().lessons[lessonId]?.completed === true;
  }

  function completeLesson(lessonId) {
    const data = load();
    data.lessons[lessonId] = {
      completed: true,
      completedAt: new Date().toISOString()
    };
    save(data);
  }

  function isChallengeComplete(challengeId) {
    return load().challenges[challengeId]?.completed === true;
  }

  function completeChallenge(challengeId) {
    const data = load();
    if (!data.challenges[challengeId]) {
      data.challenges[challengeId] = { completed: false, attempts: 0 };
    }
    data.challenges[challengeId].completed = true;
    data.challenges[challengeId].attempts += 1;
    save(data);
  }

  function getModuleProgress(moduleId, totalLessons, lessonIds) {
    const data = load();
    let completed = 0;
    lessonIds.forEach(id => {
      if (data.lessons[id]?.completed) completed++;
    });
    return { completed, total: totalLessons };
  }

  function saveCode(lessonId, html, css) {
    const data = load();
    data.savedCode[lessonId] = { html, css };
    save(data);
  }

  function getSavedCode(lessonId) {
    return load().savedCode[lessonId] || null;
  }

  function setCurrentPosition(moduleId, lessonId) {
    const data = load();
    data.currentModuleId = moduleId;
    data.currentLessonId = lessonId;
    save(data);
  }

  function getCurrentPosition() {
    const data = load();
    return {
      moduleId: data.currentModuleId,
      lessonId: data.currentLessonId
    };
  }

  function getOverallProgress(allLessonIds) {
    const data = load();
    let completed = 0;
    allLessonIds.forEach(id => {
      if (data.lessons[id]?.completed) completed++;
    });
    return { completed, total: allLessonIds.length };
  }

  function resetAll() {
    localStorage.removeItem(STORAGE_KEY);
  }

  return {
    isLessonComplete,
    completeLesson,
    isChallengeComplete,
    completeChallenge,
    getModuleProgress,
    saveCode,
    getSavedCode,
    setCurrentPosition,
    getCurrentPosition,
    getOverallProgress,
    resetAll
  };
})();
