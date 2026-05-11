const sessions = [
  {
    id: "j1",
    day: "Jour 1",
    title: "Force bas du corps + kettlebell",
    level: "Intermédiaire",
    duration: 60,
    calories: 520,
    focus: "Jambes, chaîne postérieure, puissance",
    warmup: [
      "5 min vélo léger ou marche inclinée",
      "2 tours: 10 squats poids du corps, 10 hip hinges, 20 mountain climbers",
      "Activation: 2 x 12 glute bridges"
    ],
    exercises: [
      ["Back squat", "5 x 5", "2 min 30"],
      ["Split Stance Barbell RDL", "3 x 10 par côté", "90 sec", "Choisi dans le PDF Josh Bridges"],
      ["Romanian deadlift", "3 x 8", "2 min"],
      ["Kettlebell swing", "8 x 15 EMOM", "reste de la minute"],
      ["Goblet squat tempo", "3 x 12", "90 sec"],
      ["Farmer carry kettlebell", "4 x 40 m", "75 sec"]
    ],
    finisher: "AMRAP 8 min: 10 swings, 8 burpees, 12 walking lunges."
  },
  {
    id: "j2",
    day: "Jour 2",
    title: "Course à pied intervalles",
    level: "Intermédiaire",
    duration: 45,
    calories: 460,
    focus: "Vitesse, VO2 max, mental",
    warmup: [
      "10 min footing facile",
      "Mobilité chevilles et hanches",
      "4 accélérations progressives de 20 sec"
    ],
    exercises: [
      ["Intervalles", "8 x 400 m rapide", "90 sec marche ou trot"],
      ["Tempo contrôlé", "8 min allure soutenue", "3 min"],
      ["Retour au calme", "8-10 min footing lent", "aucun"]
    ],
    finisher: "Respiration nasale 3 min et note ton niveau mental."
  },
  {
    id: "j3",
    day: "Jour 3",
    title: "Haut du corps barbell + kettlebell",
    level: "Intermédiaire",
    duration: 58,
    calories: 500,
    focus: "Poussée, tirage, gainage",
    warmup: [
      "5 min rameur ou corde",
      "2 tours: 12 band pull-aparts, 10 pompes, 8 scap pull-ups",
      "Séries progressives sur le mouvement principal"
    ],
    exercises: [
      ["Bench press", "5 x 5", "2 min 30"],
      ["Barbell row", "4 x 8", "2 min"],
      ["Barbell Z-Press", "3 x 9-11", "90 sec", "Choisi dans le PDF Josh Bridges"],
      ["Kettlebell clean and press", "5 x 5 par cote", "90 sec"],
      ["Pull-ups ou tirage", "4 x 8-10", "90 sec"],
      ["Hollow hold", "4 x 35 sec", "45 sec"]
    ],
    finisher: "EMOM 10 min: minute impaire 12 push-ups, minute paire 12 KB rows."
  },
  {
    id: "j4",
    day: "Jour 4",
    title: "Vélo endurance + mobilité",
    level: "Débutant à avancé",
    duration: 70,
    calories: 560,
    focus: "Zone 2, récupération active, amplitude",
    warmup: [
      "10 min pédalage facile",
      "Cadence progressive jusqu'à 90 rpm",
      "Contrôle respiration et posture"
    ],
    exercises: [
      ["Vélo zone 2", "45-55 min", "continu"],
      ["Cadence haute", "6 x 45 sec", "75 sec facile"],
      ["Couch stretch", "2 x 60 sec par côté", "30 sec"],
      ["90/90 hanches", "2 x 8 par côté", "30 sec"],
      ["Respiration au sol", "5 min", "aucun"]
    ],
    finisher: "Objectif: finir frais, pas détruit."
  },
  {
    id: "j5",
    day: "Jour 5",
    title: "Full body hybride",
    level: "Intermédiaire avancé",
    duration: 65,
    calories: 640,
    focus: "Force, cardio, tolérance à l'effort",
    warmup: [
      "6 min course facile",
      "2 tours: 10 KB deadlifts, 10 push-ups, 10 air squats",
      "3 montées progressives sur deadlift"
    ],
    exercises: [
      ["Deadlift", "5 x 3", "3 min"],
      ["Kettlebell snatch", "6 x 8 par cote", "90 sec"],
      ["Run", "5 x 2 min rapide", "1 min lent"],
      ["Dumbbell thruster", "4 x 10", "90 sec"],
      ["Plank drag kettlebell", "3 x 12", "60 sec"]
    ],
    finisher: "AMRAP 12 min: 250 m run, 15 swings, 10 thrusters."
  }
];

const quotes = [
  "Discipline avant motivation",
  "Chaque séance construit ton futur",
  "Tu n'es pas en train de t'entraîner, tu es en train de renaître"
];

const hardKettlebellExercises = [
  {
    name: "2-Hand Swing",
    format: "EMOM 20 min: 10 à 15 reps puissantes",
    rest: "reste de la minute"
  },
  {
    name: "1-Hand Swing",
    format: "20 min: 10 reps gauche + 10 reps droite",
    rest: "45 à 60 sec"
  },
  {
    name: "Get Up",
    format: "AMRAP 15 min: 1 rep par côté, qualité stricte",
    rest: "au besoin"
  },
  {
    name: "Snatch",
    format: "Ladder 20 min: 1-2-3-4-5 par côté",
    rest: "60 à 90 sec"
  },
  {
    name: "1H Clean + Jerk",
    format: "Ladder 20 min: 1-2-3-4-5 par côté",
    rest: "60 à 90 sec"
  },
  {
    name: "1H Clean + Press",
    format: "20 min: séries de 5 par côté",
    rest: "90 sec"
  },
  {
    name: "Suitcase Carry",
    format: "20 min: 40 m gauche + 40 m droite",
    rest: "marche retour contrôlée"
  },
  {
    name: "Rack Carry",
    format: "20 min: 40 m gauche + 40 m droite",
    rest: "60 sec"
  },
  {
    name: "Overhead Carry",
    format: "20 min: 20 à 30 m par côté",
    rest: "60 à 90 sec"
  },
  {
    name: "Bottom's Up Press",
    format: "Ladder technique: 1-2-3 par côté",
    rest: "90 sec"
  },
  {
    name: "Single KB Front Squat",
    format: "Ladder 20 min: 1-2-3-4-5 par côté",
    rest: "60 à 90 sec"
  },
  {
    name: "Goblet Squat",
    format: "AMRAP 20 min: séries de 10 reps",
    rest: "60 sec"
  },
  {
    name: "Push Press",
    format: "20 min: 10 reps gauche + 10 reps droite",
    rest: "90 sec"
  },
  {
    name: "Clean",
    format: "EMOM 20 min: 5 reps par côté",
    rest: "reste de la minute"
  },
  {
    name: "Jerk",
    format: "20 min: séries de 5 par côté",
    rest: "90 sec"
  },
  {
    name: "High Pull",
    format: "AMRAP 20 min: 8 reps par côté",
    rest: "60 sec"
  },
  {
    name: "Clean + Front Squat + Press",
    format: "Complex 20 min: 5 tours par côté",
    rest: "90 à 120 sec"
  },
  {
    name: "Swing + Clean + High Pull + Snatch",
    format: "Complex 20 min: 5 cycles par côté",
    rest: "90 à 120 sec"
  },
  {
    name: "Double Kettlebell Swing",
    format: "EMOM 20 min: 5 à 10 reps lourdes",
    rest: "reste de la minute"
  },
  {
    name: "Double Clean + Double Front Squat + Double Push Press",
    format: "Circuit 30 min: 5 + 5 + 5 reps",
    rest: "2 min"
  }
];

const timerConfigs = {
  amrap: {
    label: "AMRAP",
    minutes: 10,
    seconds: 0,
    description: "AMRAP 10 minutes: travaille en continu avec une technique propre."
  },
  emom: {
    label: "EMOM",
    minutes: 12,
    seconds: 0,
    description: "EMOM: lance une série au début de chaque minute."
  },
  run: {
    label: "Intervalles",
    minutes: 0,
    seconds: 90,
    description: "Intervalles course: alterne effort rapide et récupération contrôlée."
  },
  rest: {
    label: "Repos",
    minutes: 2,
    seconds: 0,
    description: "Repos entre séries: respire, note ta charge, recommence propre."
  }
};

const storageKeys = {
  completed: "hybrid_completed_sessions",
  history: "hybrid_training_history",
  streak: "hybrid_training_streak"
};

let completed = new Set(JSON.parse(localStorage.getItem(storageKeys.completed) || "[]"));
let history = JSON.parse(localStorage.getItem(storageKeys.history) || "[]");
let streak = Number(localStorage.getItem(storageKeys.streak) || "0");
let currentTimerMode = "amrap";
let remainingSeconds = 600;
let timerInterval = null;

const $ = (selector) => document.querySelector(selector);

function saveState() {
  localStorage.setItem(storageKeys.completed, JSON.stringify([...completed]));
  localStorage.setItem(storageKeys.history, JSON.stringify(history));
  localStorage.setItem(storageKeys.streak, String(streak));
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function renderDashboard() {
  const doneSessions = sessions.filter((session) => completed.has(session.id));
  const totalCalories = doneSessions.reduce((sum, session) => sum + session.calories, 0);
  const totalMinutes = doneSessions.reduce((sum, session) => sum + session.duration, 0);
  const progress = Math.round((doneSessions.length / sessions.length) * 100);

  $("#progressPercent").textContent = `${progress}%`;
  $("#progressBar").style.width = `${progress}%`;
  $("#caloriesValue").textContent = `${totalCalories} kcal`;
  $("#minutesValue").textContent = `${totalMinutes} min`;
  $("#sessionsValue").textContent = `${doneSessions.length}/5`;
  $("#streakValue").textContent = streak;
  $("#weekStatus").textContent =
    doneSessions.length === 5 ? "Semaine validée" : "Objectif: 5 séances";

  $("#dashboardSessions").innerHTML = sessions
    .map(
      (session) => `
        <article class="session-card ${completed.has(session.id) ? "completed" : ""}">
          <div class="session-top">
            <div>
              <h3>${session.title}</h3>
              <div class="session-meta">
                <span>${session.level}</span>
                <span>${session.duration} min</span>
                <span>${session.calories} kcal</span>
              </div>
            </div>
            <span class="day-pill">${session.day}</span>
          </div>
          <button class="ghost-btn" data-open="${session.id}">Voir la séance</button>
        </article>
      `
    )
    .join("");
}

function renderProgram() {
  $("#programList").innerHTML = sessions
    .map(
      (session) => `
        <article class="session-card ${completed.has(session.id) ? "completed" : ""}">
          <div class="session-top">
            <div>
              <span class="eyebrow">${session.day}</span>
              <h3>${session.title}</h3>
              <p>${session.focus}</p>
              <div class="session-meta">
                <span>Niveau: ${session.level}</span>
                <span>${session.duration} min</span>
                <span>Repos inclus</span>
              </div>
            </div>
          </div>
          <div class="button-row">
            <button class="ghost-btn" data-open="${session.id}">Details</button>
            <button class="primary-btn" data-complete="${session.id}">
              ${completed.has(session.id) ? "Terminée" : "Séance terminée"}
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderKettlebellHardList() {
  $("#kettlebellHardList").innerHTML = hardKettlebellExercises
    .map(
      (exercise, index) => `
        <article class="kb-hard-item">
          <span class="kb-number">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>${exercise.name}</strong>
            <p>${exercise.format}</p>
            <small>Repos: ${exercise.rest}</small>
          </div>
        </article>
      `
    )
    .join("");
}

function renderSessionOptions() {
  $("#logSession").innerHTML = sessions
    .map((session) => `<option value="${session.id}">${session.day} - ${session.title}</option>`)
    .join("");
}

function renderHistory() {
  if (!history.length) {
    $("#historyList").innerHTML = `
      <article class="history-item">
        <strong>Aucun historique pour le moment</strong>
        <small>Ajoute une entrée après ta prochaine séance.</small>
      </article>
    `;
    return;
  }

  $("#historyList").innerHTML = history
    .map((entry) => {
      const session = sessions.find((item) => item.id === entry.sessionId);
      return `
        <article class="history-item">
          <strong>${session ? session.title : "Séance libre"}</strong>
          <small>${entry.date}</small>
          <div class="history-metrics">
            <span>${entry.weight || 0} kg</span>
            <span>Course ${entry.run || 0} km</span>
            <span>Velo ${entry.bike || 0} km</span>
            <span>${entry.time || 0} min</span>
          </div>
          <p>${entry.notes || "Pas de note."}</p>
        </article>
      `;
    })
    .join("");
}

function openSession(sessionId) {
  const session = sessions.find((item) => item.id === sessionId);
  if (!session) return;

  $("#sessionDetails").innerHTML = `
    <span class="eyebrow">${session.day}</span>
    <h2>${session.title}</h2>
    <p>${session.focus}</p>
    <div class="session-meta">
      <span>Niveau: ${session.level}</span>
      <span>Duree: ${session.duration} min</span>
      <span>Calories: ${session.calories} kcal</span>
    </div>

    <div class="detail-block">
      <h3>Échauffement</h3>
      <ul>${session.warmup.map((item) => `<li>${item}</li>`).join("")}</ul>
    </div>

    <div class="detail-block">
      <h3>Exercices</h3>
      <ul class="exercise-list">
        ${session.exercises
          .map(
            ([name, volume, rest, source]) => `
              <li>
                <strong>${name}</strong><br />
                ${source ? `<span class="source-tag">${source}</span><br />` : ""}
                Séries / répétitions / temps: ${volume}<br />
                Repos: ${rest}
              </li>
            `
          )
          .join("")}
      </ul>
    </div>

    <div class="detail-block">
      <h3>Finisher</h3>
      <p>${session.finisher}</p>
    </div>

    <button class="primary-btn full" data-complete="${session.id}">
      ${completed.has(session.id) ? "Séance déjà terminée" : "Séance terminée"}
    </button>
  `;

  $("#sessionModal").classList.add("open");
  $("#sessionModal").setAttribute("aria-hidden", "false");
}

function closeSession() {
  $("#sessionModal").classList.remove("open");
  $("#sessionModal").setAttribute("aria-hidden", "true");
}

function completeSession(sessionId) {
  const wasCompleted = completed.has(sessionId);
  completed.add(sessionId);
  if (!wasCompleted) streak += 1;
  saveState();
  renderAll();
}

function renderTimerModes() {
  $("#timerModes").innerHTML = Object.entries(timerConfigs)
    .map(
      ([key, config]) => `
        <button class="timer-tab ${key === currentTimerMode ? "active" : ""}" data-mode="${key}">
          ${config.label}
        </button>
      `
    )
    .join("");
}

function setTimerMode(mode) {
  currentTimerMode = mode;
  const config = timerConfigs[mode];
  $("#timerMinutes").value = config.minutes;
  $("#timerSeconds").value = config.seconds;
  $("#timerDescription").textContent = config.description;
  remainingSeconds = config.minutes * 60 + config.seconds;
  $("#timerDisplay").textContent = formatTime(remainingSeconds);
  clearInterval(timerInterval);
  timerInterval = null;
  renderTimerModes();
}

function syncTimerFromInputs() {
  const minutes = Math.max(0, Number($("#timerMinutes").value) || 0);
  const seconds = Math.min(59, Math.max(0, Number($("#timerSeconds").value) || 0));
  remainingSeconds = minutes * 60 + seconds;
  $("#timerSeconds").value = seconds;
  $("#timerDisplay").textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (timerInterval || remainingSeconds <= 0) return;

  timerInterval = setInterval(() => {
    remainingSeconds -= 1;
    $("#timerDisplay").textContent = formatTime(remainingSeconds);

    if (remainingSeconds <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      $("#timerDescription").textContent = "Temps terminé. Respire, note, recommence.";
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  setTimerMode(currentTimerMode);
}

function renderAll() {
  renderDashboard();
  renderProgram();
  renderKettlebellHardList();
  renderHistory();
}

function bindEvents() {
  document.querySelectorAll(".nav-btn").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach((item) => item.classList.remove("active"));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      button.classList.add("active");
      $(`#${button.dataset.view}`).classList.add("active");
      $("#motivationQuote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
    });
  });

  document.body.addEventListener("click", (event) => {
    const openButton = event.target.closest("[data-open]");
    const completeButton = event.target.closest("[data-complete]");

    if (openButton) openSession(openButton.dataset.open);
    if (completeButton) completeSession(completeButton.dataset.complete);
  });

  $("#closeSession").addEventListener("click", closeSession);
  $("#sessionModal").addEventListener("click", (event) => {
    if (event.target.id === "sessionModal") closeSession();
  });

  $("#timerModes").addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) setTimerMode(modeButton.dataset.mode);
  });

  $("#timerMinutes").addEventListener("input", syncTimerFromInputs);
  $("#timerSeconds").addEventListener("input", syncTimerFromInputs);
  $("#startTimer").addEventListener("click", startTimer);
  $("#pauseTimer").addEventListener("click", pauseTimer);
  $("#resetTimer").addEventListener("click", resetTimer);

  $("#progressForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const entry = {
      sessionId: $("#logSession").value,
      weight: $("#logWeight").value,
      run: $("#logRun").value,
      bike: $("#logBike").value,
      time: $("#logTime").value,
      notes: $("#logNotes").value.trim(),
      date: new Date().toLocaleDateString("fr-FR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    };

    history = [entry, ...history].slice(0, 20);
    completed.add(entry.sessionId);
    streak += 1;
    saveState();
    event.target.reset();
    renderAll();
  });
}

renderSessionOptions();
renderTimerModes();
setTimerMode(currentTimerMode);
renderAll();
bindEvents();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // L'app reste utilisable sans cache hors ligne.
    });
  });
}
