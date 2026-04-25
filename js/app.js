/* =========================
   CONFIGURATION / TUNING
   ========================= */

const CONFIG = {
  // Letter timing
  DEFAULT_INTER_LETTER_GAP_MS: 850,
  DEFAULT_AUTO_FINISH_DELAY_MS: 1500,

  // Difficulty presets
  DIFFICULTIES: {
    beginner: {
      label: "Beginner",
      description: "Long pause",
      interLetterGapMs: 1000,
      autoFinishDelayMs: 1900,
      gameOverPauseUnits: 5,

      shortInputCooldownMs: 80,
      longInputCooldownMs: 450,
      wordPool: "beginner"
    },
    intermediate: {
      label: "Intermediate",
      description: "Medium pause",
      interLetterGapMs: 550,
      autoFinishDelayMs: 1150,
      gameOverPauseUnits: 3,

      shortInputCooldownMs: 50,
      longInputCooldownMs: 320,
      wordPool: "intermediate"
    },
    expert: {
      label: "Expert",
      description: "Short pause",
      interLetterGapMs: 450,
      autoFinishDelayMs: 950,
      gameOverPauseUnits: 2,

      shortInputCooldownMs: 30,
      longInputCooldownMs: 340,
      wordPool: "expert"
    }
  },
  DEFAULT_DIFFICULTY: "intermediate",

  // Round timer
  ROUND_TIMER_INTERVAL_MS: 50,

  // Audio
  SOUND_ENABLED: true,
  BACKGROUND_NOISE_ENABLED: true,
  SOUND_PATHS: {
    short: "snd/morse_short.wav",
    long: "snd/morse_long.wav",
    wrong: "snd/wrong.wav",
    click: "snd/click.mp3",
    win: "snd/win.wav",
    lose: "snd/lose.wav",
    noise: "snd/noise.wav"
  },

  // Game mode words
  TARGET_WORDS: {
    beginner: [
      "SOS",
      "TO",
      "ME",
      "ON",
      "NO",
      "GO",
      "TON",
      "TEAM",
      "CODE",
      "TONE",
      "NOTE",
      "ATOM",
      "NODE",
      "DATA",
      "EAST",
      "WEST",
      "STAR",
      "MOON"
    ],
    intermediate: [
      "MORSE",
      "SIGNAL",
      "RADIO",
      "ROGER",
      "ALERT",
      "BEACON",
      "VECTOR",
      "STATIC",
      "TUNING",
      "ANTENNA",
      "RELAY",
      "PACKET",
      "STATION",
      "CONTACT",
      "CHANNEL",
      "RECEIVE",
      "DECODE"
    ],
    expert: [
      "MORSECODE",
      "SIGNALING",
      "TRANSMISSION",
      "OPERATOR",
      "TELEGRAPH",
      "FREQUENCY",
      "BROADCAST",
      "NAVIGATION",
      "COMMUNICATION",
      "TRANSCEIVER",
      "OSCILLATOR",
      "MODULATION",
      "AMPLITUDE",
      "DIRECTIONAL",
      "WAVELENGTH",
      "SHORTWAVE",
      "RADIOBEACON"
    ]
  },

  // Display formatting
  INPUT_JOINER: "   /   ",
  SYMBOL_DOT: "•",
  SYMBOL_DASH: "—",
  EMPTY_PLACEHOLDER: "\u00A0",

  // Button flash
  BUTTON_FLASH_MS: 110,

  // Training right meter feedback
  SIGNAL_FEEDBACK_MS: 700,
  DOT_FEEDBACK_FILL_RATIO: 0.45,
  DASH_FEEDBACK_FILL_RATIO: 1.0,

  // Three.js rendering
  MAX_DEVICE_PIXEL_RATIO: 2,
  CAMERA_VIEW_HEIGHT: 14.8,

  BOARD_WIDTH: 18.0,
  BOARD_HEIGHT: 18.0,

  TREE_WIDTH: 16.8,
  TREE_ROOT_Y: 5.0,
  TREE_STEP_Y: 2.65,

  DOT_RADIUS: 0.38,
  DASH_WIDTH: 0.92,
  DASH_HEIGHT: 0.52,

  NODE_BORDER_THICKNESS: 0.032,
  NODE_VISUAL_PADDING: 0.12,
  NODE_DEPTH_OFFSET_X: 0.075,
  NODE_DEPTH_OFFSET_Y: -0.075,
  NODE_SHADOW_OPACITY: 0.34,
  NODE_HIGHLIGHT_OPACITY: 0.13,
  NODE_HIGHLIGHT_OFFSET_X: -0.035,
  NODE_HIGHLIGHT_OFFSET_Y: 0.045,
  DASH_CORNER_RADIUS: 0.16,
  EDGE_THICKNESS: 0.032,

  TITLE_Y: 8.2,
  TITLE_LEFT_X: -4.85,
  TITLE_RIGHT_X: 4.85,

  // Letters inside symbols
  NODE_LABEL_SIZE: 120,
  LABEL_OFFSET_X: -0.03,
  LABEL_OFFSET_Y: 0.03,
  LABEL_SHADOW_BLUR: 8,
  LABEL_SHADOW_OFFSET_X: 6,
  LABEL_SHADOW_OFFSET_Y: 7,
  LABEL_STROKE_WIDTH: 7,
  DOT_LABEL_SCALE_X: 1.95,
  DOT_LABEL_SCALE_Y: 0.98,
  DASH_LABEL_SCALE_X: 2.05,
  DASH_LABEL_SCALE_Y: 1.02,

  // Root / radio symbol
  ROOT_SYMBOL_OFFSET_Y: -0.5,
  ROOT_STEM_HEIGHT: 1.5,
  ROOT_TRIANGLE_HEIGHT: 0.92,
  ROOT_TRIANGLE_HALF_WIDTH: 0.76,
  ROOT_READY_FILL_OPACITY: 1.0,

  // Glow
  NODE_GLOW_SCALE: 1.9,
  DASH_GLOW_SCALE_X: 1.5,
  DASH_GLOW_SCALE_Y: 1.9,
  GLOW_FADE_SPEED_PER_SECOND: 2.8,
  NODE_BASE_GLOW_OPACITY: 0.18,
  NODE_CURRENT_GLOW_OPACITY: 0.28,
  NODE_PULSE_GLOW_OPACITY: 0.62,
  EDGE_BASE_GLOW_OPACITY: 0.32,
  EDGE_PULSE_GLOW_OPACITY: 0.82,

  // Screen / post FX
  FX_ENABLED: true,
  FX_SIGNAL_FLASH_MS: 90,
  FX_CAMERA_DRIFT_ENABLED: true,
  FX_CAMERA_DRIFT_X: 0.018,
  FX_CAMERA_DRIFT_Y: 0.012,
  FX_CAMERA_DRIFT_SPEED: 0.0014,
  FX_TONE_MAPPING_EXPOSURE: 1.08
};

/* =========================
   DOM
   ========================= */

const stage = document.getElementById("stage");
const morseBtn = document.getElementById("morseBtn");
const resetBtn = document.getElementById("resetBtn");
const menuBtn = document.getElementById("menuBtn");
const helpBtn = document.getElementById("helpBtn");
const hintToggleBtn = document.getElementById("hintToggleBtn");
const musicToggleBtn = document.getElementById("musicToggleBtn");

const greetingBox = document.getElementById("greetingBox");
const helpBox = document.getElementById("helpBox");
const closeHelpBtn = document.getElementById("closeHelpBtn");

const roundEndBox = document.getElementById("roundEndBox");
const roundEndTitle = document.getElementById("roundEndTitle");
const roundEndText = document.getElementById("roundEndText");
const againYesBtn = document.getElementById("againYesBtn");
const againNoBtn = document.getElementById("againNoBtn");

const trainingModeBtn = document.getElementById("trainingModeBtn");
const gameModeBtn = document.getElementById("gameModeBtn");
const beginnerDifficultyBtn = document.getElementById("beginnerDifficultyBtn");
const intermediateDifficultyBtn = document.getElementById("intermediateDifficultyBtn");
const expertDifficultyBtn = document.getElementById("expertDifficultyBtn");
const startGameBtn = document.getElementById("startGameBtn");

const headlineText = document.getElementById("headlineText");
const subHeadlineText = document.getElementById("subHeadlineText");

const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

const roundTimer = document.getElementById("roundTimer");

const pauseFill = document.getElementById("pauseFill");
const pauseLabel = document.getElementById("pauseLabel");

const pressFill = document.getElementById("pressFill");
const pressTypeLabel = document.getElementById("pressTypeLabel");

/* =========================
   MORSE DATA
   ========================= */

const morse = {
  ".": "E", "-": "T",
  "..": "I", ".-": "A", "-.": "N", "--": "M",
  "...": "S", "..-": "U", ".-.": "R", ".--": "W",
  "-..": "D", "-.-": "K", "--.": "G", "---": "O",
  "....": "H", "...-": "V", "..-.": "F",
  ".-..": "L", ".--.": "P", ".---": "J",
  "-...": "B", "-..-": "X", "-.-.": "C", "-.--": "Y",
  "--..": "Z", "--.-": "Q"
};

const letterToMorse = Object.fromEntries(
  Object.entries(morse).map(([code, letter]) => [letter, code])
);

/* =========================
   STATE
   ========================= */

const nodeMap = new Map();
const edgeMap = new Map();

let rootTriangleLine = null;
let rootTriangleFill = null;

let mode = null; // null | "training" | "game"
let pendingMode = "training";
let difficulty = CONFIG.DEFAULT_DIFFICULTY;

let currentSequence = "";
let inputHistory = [];
let outputHistory = [];

let finishTimerId = null;
let roundTimerId = null;
let buttonFlashTimeoutId = null;

let lastInputEndedAt = 0;
let lastSignalSymbol = null;
let lastSignalAt = 0;
let nextSignalAllowedAt = 0;

let targetWord = "";
let roundStarted = false;
let roundFinished = false;
let roundStartAt = 0;
let roundResult = null; // null | "success" | "fail"
let gameIdleStartedAt = 0;

let roundEndSelection = "yes"; // "yes" | "no"

let visualHintEnabled = true;
let backgroundMusicEnabled = CONFIG.BACKGROUND_NOISE_ENABLED;

let menuFocusIndex = 0;

let stageFxTimeoutId = null;
let lastFrameTime = performance.now();

const wordPoolIndexes = {
  beginner: 0,
  intermediate: 0,
  expert: 0
};

/* =========================
   AUDIO
   ========================= */

const sounds = {
  short: new Audio(CONFIG.SOUND_PATHS.short),
  long: new Audio(CONFIG.SOUND_PATHS.long),
  wrong: new Audio(CONFIG.SOUND_PATHS.wrong),
  click: new Audio(CONFIG.SOUND_PATHS.click),
  win: new Audio(CONFIG.SOUND_PATHS.win),
  lose: new Audio(CONFIG.SOUND_PATHS.lose),
  noise: new Audio(CONFIG.SOUND_PATHS.noise)
};

sounds.noise.loop = true;
sounds.noise.volume = 0.25;

for (const sound of Object.values(sounds)) {
  sound.preload = "auto";
}

function playSound(name) {
  if (!CONFIG.SOUND_ENABLED) return;

  const sound = sounds[name];
  if (!sound) return;

  sound.currentTime = 0;
  sound.play().catch(() => {
    // Audio can be blocked until the first user gesture.
  });
}

function updateHintToggleButton() {
  if (!hintToggleBtn) return;

  hintToggleBtn.textContent = visualHintEnabled ? "Hint On" : "Hint Off";
  hintToggleBtn.classList.toggle("is-muted", !visualHintEnabled);
  hintToggleBtn.setAttribute("aria-pressed", visualHintEnabled ? "true" : "false");
}

function toggleVisualHint() {
  visualHintEnabled = !visualHintEnabled;
  updateHintToggleButton();
  updateHighlight();
}

function updateMusicToggleButton() {
  if (!musicToggleBtn) return;

  musicToggleBtn.textContent = backgroundMusicEnabled ? "Music On" : "Music Off";
  musicToggleBtn.classList.toggle("is-muted", !backgroundMusicEnabled);
  musicToggleBtn.setAttribute("aria-pressed", backgroundMusicEnabled ? "true" : "false");
}

function startBackgroundNoise() {
  if (!backgroundMusicEnabled) return;

  const noise = sounds.noise;
  if (!noise) return;

  noise.play().catch(() => {
    // Background audio starts after a valid user gesture.
  });
}

function stopBackgroundNoise() {
  const noise = sounds.noise;
  if (!noise) return;

  noise.pause();
}

function playClickSound() {
  playSound("click");
}

function toggleBackgroundMusic() {
  backgroundMusicEnabled = !backgroundMusicEnabled;

  if (backgroundMusicEnabled) {
    startBackgroundNoise();
  } else {
    stopBackgroundNoise();
  }

  updateMusicToggleButton();
}

/* =========================
   COLORS
   ========================= */

const normalColor = 0x385066;
const activeColor = 0x16d832;
const currentColor = 0xff6b4a;

const lineColor = 0x9fb6c6;
const activeLineColor = 0x49ff7b;
const currentLineColor = 0xffb199;

const hintColor = 0x43d8ff;
const hintLineColor = 0x8af2ff;

/* =========================
   THREE SETUP
   ========================= */

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0b1118);

const camera = new THREE.OrthographicCamera(-8, 8, 8, -8, 0.1, 100);
camera.position.z = 20;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
renderer.setPixelRatio(
  Math.min(window.devicePixelRatio || 1, CONFIG.MAX_DEVICE_PIXEL_RATIO)
);

if (THREE.SRGBColorSpace) {
  renderer.outputColorSpace = THREE.SRGBColorSpace;
}

if (THREE.ACESFilmicToneMapping) {
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = CONFIG.FX_TONE_MAPPING_EXPOSURE;
}

stage.appendChild(renderer.domElement);

const boardGroup = new THREE.Group();
scene.add(boardGroup);

/* =========================
   GENERAL HELPERS
   ========================= */

function getDifficultyConfig() {
  return (
    CONFIG.DIFFICULTIES[difficulty] || {
      label: "Custom",
      interLetterGapMs: CONFIG.DEFAULT_INTER_LETTER_GAP_MS,
      autoFinishDelayMs: CONFIG.DEFAULT_AUTO_FINISH_DELAY_MS,
      gameOverPauseUnits: 3
    }
  );
}

function getInterLetterGapMs() {
  return getDifficultyConfig().interLetterGapMs;
}

function getAutoFinishDelayMs() {
  return getDifficultyConfig().autoFinishDelayMs;
}

function getInputCooldownMs(symbol) {
  const difficultyConfig = getDifficultyConfig();
  const letterGap = difficultyConfig.interLetterGapMs ?? CONFIG.DEFAULT_INTER_LETTER_GAP_MS;

  const configuredCooldown =
    symbol === "-"
      ? difficultyConfig.longInputCooldownMs ?? 300
      : difficultyConfig.shortInputCooldownMs ?? 0;

  // Prevent cooldown from exceeding the pause that starts the next letter.
  // This keeps fast expert input possible while preserving the long-signal delay feel.
  return Math.min(configuredCooldown, Math.max(0, letterGap - 40));
}

function getGameOverPauseLimitMs() {
  const difficultyConfig = getDifficultyConfig();
  return difficultyConfig.interLetterGapMs * difficultyConfig.gameOverPauseUnits;
}

function isVisible(element) {
  return !!element && !element.classList.contains("is-hidden");
}

function isOverlayOpen() {
  return isVisible(greetingBox) || isVisible(helpBox) || isVisible(roundEndBox);
}

function updateOverlayBlur() {
  const app = document.querySelector(".app");
  if (!app) return;

  app.classList.toggle("has-overlay", isOverlayOpen());
}

function formatSequenceDisplay(sequence) {
  return sequence
    .split("")
    .map((char) => (char === "." ? CONFIG.SYMBOL_DOT : CONFIG.SYMBOL_DASH))
    .join(" ");
}

function flashInputButton() {
  clearTimeout(buttonFlashTimeoutId);
  morseBtn.classList.add("pressed");

  buttonFlashTimeoutId = setTimeout(() => {
    morseBtn.classList.remove("pressed");
  }, CONFIG.BUTTON_FLASH_MS);
}

function scrollDisplayToEnd() {
  const inputBox = inputText.closest(".card-value");
  const outputBox = outputText.closest(".card-value");

  if (inputBox) {
    inputBox.scrollLeft = inputBox.scrollWidth;
  }

  if (outputBox) {
    outputBox.scrollLeft = outputBox.scrollWidth;
  }
}

function flashStageFx(type) {
  if (!CONFIG.FX_ENABLED || !stage) return;

  clearTimeout(stageFxTimeoutId);

  stage.classList.remove("is-signal-flash", "is-wrong-flash");

  if (type === "wrong") {
    stage.classList.add("is-wrong-flash");
  } else {
    const color =
      type === "-"
        ? "rgba(255, 177, 153, 0.22)"
        : "rgba(138, 255, 154, 0.20)";

    stage.style.setProperty("--signal-flash-color", color);
    stage.classList.add("is-signal-flash");
  }

  stageFxTimeoutId = setTimeout(() => {
    stage.classList.remove("is-signal-flash", "is-wrong-flash");
  }, CONFIG.FX_SIGNAL_FLASH_MS);
}

function updateCameraFx(now) {
  if (!CONFIG.FX_ENABLED || !CONFIG.FX_CAMERA_DRIFT_ENABLED) {
    camera.position.x = 0;
    camera.position.y = 0;
    return;
  }

  camera.position.x = Math.sin(now * CONFIG.FX_CAMERA_DRIFT_SPEED) * CONFIG.FX_CAMERA_DRIFT_X;
  camera.position.y = Math.cos(now * CONFIG.FX_CAMERA_DRIFT_SPEED * 0.73) * CONFIG.FX_CAMERA_DRIFT_Y;
}

/* =========================
   MENU HELPERS
   ========================= */

function getMenuButtons() {
  return [
    trainingModeBtn,
    gameModeBtn,
    beginnerDifficultyBtn,
    intermediateDifficultyBtn,
    expertDifficultyBtn,
    startGameBtn
  ].filter(Boolean);
}

function updateMenuFocus() {
  const buttons = getMenuButtons();

  buttons.forEach((button, index) => {
    button.classList.toggle("is-focused", index === menuFocusIndex);
  });
}

function moveMenuFocus(direction) {
  const buttons = getMenuButtons();
  if (!buttons.length) return;

  menuFocusIndex = (menuFocusIndex + direction + buttons.length) % buttons.length;
  updateMenuFocus();
}

function activateMenuFocus() {
  const buttons = getMenuButtons();
  const button = buttons[menuFocusIndex];

  if (button) {
    button.click();
  }
}

function setPendingMode(nextMode) {
  if (nextMode !== "training" && nextMode !== "game") return;

  pendingMode = nextMode;
  updateMenuSelection();

  if (!mode) {
    subHeadlineText.textContent =
      nextMode === "game" ? "Game Mode selected" : "Training Mode selected";
  }
}

function setDifficulty(nextDifficulty) {
  if (!CONFIG.DIFFICULTIES[nextDifficulty]) return;

  difficulty = nextDifficulty;
  updateMenuSelection();
  updateHeader();

  if (mode) {
    resetAll();
  }
}

function updateMenuSelection() {
  if (trainingModeBtn) {
    trainingModeBtn.classList.toggle("is-active", pendingMode === "training");
  }

  if (gameModeBtn) {
    gameModeBtn.classList.toggle("is-active", pendingMode === "game");
  }

  if (beginnerDifficultyBtn) {
    beginnerDifficultyBtn.classList.toggle("is-active", difficulty === "beginner");
  }

  if (intermediateDifficultyBtn) {
    intermediateDifficultyBtn.classList.toggle("is-active", difficulty === "intermediate");
  }

  if (expertDifficultyBtn) {
    expertDifficultyBtn.classList.toggle("is-active", difficulty === "expert");
  }

  updateMenuFocus();
}

function startSelectedMode() {
  mode = pendingMode || "training";
  startBackgroundNoise();
  closeHelp();
  closeRoundEndBox();

  if (greetingBox) {
    greetingBox.classList.add("is-hidden");
  }

  resetAll();
  updateResetButtonState();
  updateOverlayBlur();
}

function openMenu() {
  closeHelp();
  closeRoundEndBox();

  if (mode) {
    pendingMode = mode;
  }

  if (greetingBox) {
    greetingBox.classList.remove("is-hidden");
  }

  updateMenuSelection();
  updateMenuFocus();
  updateHeader();
  updateOverlayBlur();
}

function closeMenu() {
  if (!mode) return;

  if (greetingBox) {
    greetingBox.classList.add("is-hidden");
  }

  updateOverlayBlur();
}

function openHelp() {
  if (greetingBox && mode) {
    greetingBox.classList.add("is-hidden");
  }

  if (roundEndBox) {
    roundEndBox.classList.add("is-hidden");
  }

  if (helpBox) {
    helpBox.classList.remove("is-hidden");
  }

  updateOverlayBlur();
}

function closeHelp() {
  if (helpBox) {
    helpBox.classList.add("is-hidden");
  }

  updateOverlayBlur();
}

function openRoundEndBox(success) {
  if (!roundEndBox) return;

  closeHelp();

  if (greetingBox) {
    greetingBox.classList.add("is-hidden");
  }

  roundEndTitle.textContent = success ? "Success" : "Game Over";

  if (success && roundStarted) {
    const seconds = ((performance.now() - roundStartAt) / 1000).toFixed(1);
    roundEndText.textContent = `Time: ${seconds}s · Again?`;
  } else {
    roundEndText.textContent = "Again?";
  }

  roundEndSelection = "yes";
  roundEndBox.classList.remove("is-hidden");
  updateRoundEndSelection();
  updateOverlayBlur();
}

function updateRoundEndSelection() {
  if (againYesBtn) {
    againYesBtn.classList.toggle("is-active", roundEndSelection === "yes");
  }

  if (againNoBtn) {
    againNoBtn.classList.toggle("is-active", roundEndSelection === "no");
  }
}

function selectRoundEndOption(nextSelection) {
  if (nextSelection !== "yes" && nextSelection !== "no") return;

  roundEndSelection = nextSelection;
  updateRoundEndSelection();
}

function confirmRoundEndSelection() {
  if (roundEndSelection === "yes") {
    closeRoundEndBox();
    resetAll();
    return;
  }

  closeRoundEndBox();
  openMenu();
}

function closeRoundEndBox() {
  if (roundEndBox) {
    roundEndBox.classList.add("is-hidden");
  }

  updateOverlayBlur();
}

/* =========================
   UI HELPERS
   ========================= */

function chooseNextTargetWord() {
  const difficultyConfig = getDifficultyConfig();
  const poolName = difficultyConfig.wordPool || difficulty;
  const words =
    CONFIG.TARGET_WORDS[poolName] ||
    CONFIG.TARGET_WORDS[difficulty] ||
    CONFIG.TARGET_WORDS.intermediate;

  if (!wordPoolIndexes[poolName]) {
    wordPoolIndexes[poolName] = 0;
  }

  const index = wordPoolIndexes[poolName] % words.length;
  targetWord = words[index];

  wordPoolIndexes[poolName] = (index + 1) % words.length;
}

function setRoundTimerState(state) {
  roundTimer.classList.remove("is-idle", "is-running", "is-success", "is-fail");
  roundTimer.classList.add(state);
}

function updateResetButtonState() {
  if (!resetBtn) return;

  resetBtn.disabled = false;
  resetBtn.textContent = mode === "game" ? "New Word" : "Reset";
}

function updateHeader() {
  const difficultyLabel = getDifficultyConfig().label;

  if (mode === "game") {
    if (roundFinished && roundResult === "fail") {
      headlineText.textContent = "GAME OVER";
      subHeadlineText.textContent = "Again?";
      return;
    }

    if (roundFinished && roundResult === "success") {
      headlineText.textContent = "SUCCESS";
      subHeadlineText.textContent = "Again?";
      return;
    }

    headlineText.textContent = targetWord || "TARGET";
    subHeadlineText.textContent = `Game Mode · ${difficultyLabel}`;
    return;
  }

  if (mode === "training") {
    headlineText.textContent = "TRAINING MODE";
    subHeadlineText.textContent = `Free Practice · ${difficultyLabel}`;
    return;
  }

  headlineText.textContent = "MORSE CODER";
  subHeadlineText.textContent = "Choose mode and difficulty";
}

function updateRoundTimer() {
  if (!roundStarted || roundFinished) return;

  const seconds = ((performance.now() - roundStartAt) / 1000).toFixed(1);
  roundTimer.textContent = `${seconds}s`;
}

function startRoundIfNeeded() {
  if (mode !== "game") return;
  if (roundStarted || roundFinished) return;

  roundStarted = true;
  roundStartAt = performance.now();
  roundResult = null;

  setRoundTimerState("is-running");

  clearInterval(roundTimerId);
  roundTimerId = setInterval(updateRoundTimer, CONFIG.ROUND_TIMER_INTERVAL_MS);
  updateRoundTimer();
}

function finishRound(success) {
  if (roundFinished) return;

  roundFinished = true;
  roundResult = success ? "success" : "fail";
  gameIdleStartedAt = 0;

  clearTimeout(finishTimerId);
  finishTimerId = null;

  clearInterval(roundTimerId);
  roundTimerId = null;

  if (roundStarted) {
    const seconds = ((performance.now() - roundStartAt) / 1000).toFixed(1);
    roundTimer.textContent = `${seconds}s`;
  }

  setRoundTimerState(success ? "is-success" : "is-fail");
  updateHeader();
  playSound(success ? "win" : "lose");
  updateResetButtonState();
  openRoundEndBox(success);
}

function evaluateRoundProgress() {
  if (mode !== "game") return;

  const enteredWord = outputHistory.join("");

  if (!targetWord) return;

  if (!targetWord.startsWith(enteredWord)) {
    finishRound(false);
    return;
  }

  if (enteredWord === targetWord) {
    finishRound(true);
  }
}

/* =========================
   TREE / DRAWING
   ========================= */

function createBoard() {
  const shape = new THREE.Shape();
  const w = CONFIG.BOARD_WIDTH;
  const h = CONFIG.BOARD_HEIGHT;
  const r = 0.6;

  shape.moveTo(-w / 2 + r, -h / 2);
  shape.lineTo(w / 2 - r, -h / 2);
  shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);

  shape.lineTo(w / 2, h / 2 - r);
  shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);

  shape.lineTo(-w / 2 + r, h / 2);
  shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);

  shape.lineTo(-w / 2, -h / 2 + r);
  shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

  const board = new THREE.Mesh(
    new THREE.ShapeGeometry(shape),
    new THREE.MeshBasicMaterial({ color: 0x111c27 })
  );
  board.position.z = -0.2;
  boardGroup.add(board);

  const border = new THREE.LineLoop(
    new THREE.BufferGeometry().setFromPoints(shape.getPoints(120)),
    new THREE.LineBasicMaterial({ color: 0x9fb6c6 })
  );
  border.position.z = -0.1;
  boardGroup.add(border);
}

function createTextSprite(text, size = 44, color = "#f3fbff") {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 512;

  const ctx = canvas.getContext("2d");
  const x = canvas.width / 2 - 2;
  const y = canvas.height / 2 - 2;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = `650 ${size * 2}px system-ui, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.62)";
  ctx.shadowBlur = CONFIG.LABEL_SHADOW_BLUR;
  ctx.shadowOffsetX = CONFIG.LABEL_SHADOW_OFFSET_X;
  ctx.shadowOffsetY = CONFIG.LABEL_SHADOW_OFFSET_Y;
  ctx.lineWidth = CONFIG.LABEL_STROKE_WIDTH;
  ctx.strokeStyle = "rgba(5, 10, 16, 0.82)";
  ctx.strokeText(text, x, y);
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.32;
  ctx.fillStyle = "#ffffff";
  ctx.fillText(text, x - 4, y - 5);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.generateMipmaps = false;

  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false
    })
  );

  return sprite;
}

function createRoundedRectShape(width, height, radius) {
  const w = width;
  const h = height;
  const r = Math.max(0, Math.min(radius, w / 2, h / 2));

  const shape = new THREE.Shape();
  shape.moveTo(-w / 2 + r, -h / 2);
  shape.lineTo(w / 2 - r, -h / 2);
  shape.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  shape.lineTo(w / 2, h / 2 - r);
  shape.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  shape.lineTo(-w / 2 + r, h / 2);
  shape.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  shape.lineTo(-w / 2, -h / 2 + r);
  shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

  return shape;
}

function createEdgeBar(start, end, thickness, color, opacity = 1, transparent = false, blending = THREE.NormalBlending) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.hypot(dx, dy);

  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(length, thickness),
    new THREE.MeshBasicMaterial({
      color,
      transparent,
      opacity,
      blending,
      depthWrite: false
    })
  );

  mesh.position.set((start.x + end.x) / 2, (start.y + end.y) / 2, 0);
  mesh.rotation.z = Math.atan2(dy, dx);

  return mesh;
}

function positionForSequence(seq) {
  const level = seq.length;

  if (level === 0) {
    return new THREE.Vector3(0, CONFIG.TREE_ROOT_Y, 0);
  }

  const y = CONFIG.TREE_ROOT_Y - level * CONFIG.TREE_STEP_Y;

  // The fourth Morse row has missing theoretical tree slots.
  // Distribute the actually visible letters evenly instead.
  if (level === 4) {
    const fourthRowOrder = [
      "....", // H
      "...-", // V
      "..-.", // F
      ".-..", // L
      ".--.", // P
      ".---", // J
      "-...", // B
      "-..-", // X
      "-.-.", // C
      "-.--", // Y
      "--..", // Z
      "--.-"  // Q
    ];

    const visibleIndex = fourthRowOrder.indexOf(seq);
    const visibleSlots = fourthRowOrder.length;

    if (visibleIndex !== -1) {
      const x = ((visibleIndex + 0.5) / visibleSlots - 0.5) * CONFIG.TREE_WIDTH;
      return new THREE.Vector3(x, y, 0);
    }
  }

  let index = 0;
  for (const char of seq) {
    index <<= 1;
    if (char === "-") index += 1;
  }

  const slots = Math.pow(2, level);
  const x = ((index + 0.5) / slots - 0.5) * CONFIG.TREE_WIDTH;

  return new THREE.Vector3(x, y, 0);
}

function createRootAntenna() {
  const rootPos = positionForSequence("");

  const baseY = rootPos.y + CONFIG.ROOT_SYMBOL_OFFSET_Y;
  const stemTopY = baseY + CONFIG.ROOT_STEM_HEIGHT;
  const peakY = stemTopY + CONFIG.ROOT_TRIANGLE_HEIGHT;

  const connector = createEdgeBar(
    new THREE.Vector3(rootPos.x, rootPos.y, 0),
    new THREE.Vector3(rootPos.x, baseY, 0),
    CONFIG.EDGE_THICKNESS,
    lineColor
  );
  connector.position.z = -0.03;
  boardGroup.add(connector);

  const vertical = createEdgeBar(
    new THREE.Vector3(rootPos.x, baseY, 0),
    new THREE.Vector3(rootPos.x, stemTopY, 0),
    CONFIG.EDGE_THICKNESS,
    lineColor
  );
  vertical.position.z = -0.03;
  boardGroup.add(vertical);

  const triangleShape = new THREE.Shape();
  triangleShape.moveTo(rootPos.x - CONFIG.ROOT_TRIANGLE_HALF_WIDTH, stemTopY);
  triangleShape.lineTo(rootPos.x, peakY);
  triangleShape.lineTo(rootPos.x + CONFIG.ROOT_TRIANGLE_HALF_WIDTH, stemTopY);
  triangleShape.lineTo(rootPos.x - CONFIG.ROOT_TRIANGLE_HALF_WIDTH, stemTopY);

  rootTriangleFill = new THREE.Mesh(
    new THREE.ShapeGeometry(triangleShape),
    new THREE.MeshBasicMaterial({
      color: normalColor,
      depthWrite: false
    })
  );
  rootTriangleFill.position.z = -0.04;
  boardGroup.add(rootTriangleFill);

  rootTriangleLine = new THREE.Line(
    new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(rootPos.x - CONFIG.ROOT_TRIANGLE_HALF_WIDTH, stemTopY, 0),
      new THREE.Vector3(rootPos.x, peakY, 0),
      new THREE.Vector3(rootPos.x + CONFIG.ROOT_TRIANGLE_HALF_WIDTH, stemTopY, 0),
      new THREE.Vector3(rootPos.x - CONFIG.ROOT_TRIANGLE_HALF_WIDTH, stemTopY, 0)
    ]),
    new THREE.LineBasicMaterial({ color: lineColor })
  );
  rootTriangleLine.position.z = -0.02;
  boardGroup.add(rootTriangleLine);
}

function createNode(seq, letter) {
  const pos = positionForSequence(seq);
  const isDot = seq.endsWith(".");
  const borderThickness = CONFIG.NODE_BORDER_THICKNESS;
  const visualPadding = CONFIG.NODE_VISUAL_PADDING;

  const outerDotRadius = CONFIG.DOT_RADIUS + visualPadding;
  const innerDotRadius = Math.max(0.01, outerDotRadius - borderThickness);

  const outerDashWidth = CONFIG.DASH_WIDTH + visualPadding * 2;
  const outerDashHeight = CONFIG.DASH_HEIGHT + visualPadding * 2;
  const innerDashWidth = Math.max(0.01, outerDashWidth - borderThickness * 2);
  const innerDashHeight = Math.max(0.01, outerDashHeight - borderThickness * 2);

  const dashRadius = Math.min(
    CONFIG.DASH_CORNER_RADIUS + visualPadding * 0.35,
    outerDashWidth / 2,
    outerDashHeight / 2
  );

  const innerDashRadius = Math.max(
    0.01,
    Math.min(dashRadius - borderThickness, innerDashWidth / 2, innerDashHeight / 2)
  );

  let borderGeometry;
  let mainGeometry;
  let glowGeometry;

  if (isDot) {
    borderGeometry = new THREE.CircleGeometry(outerDotRadius, 64);
    mainGeometry = new THREE.CircleGeometry(innerDotRadius, 64);
    glowGeometry = new THREE.CircleGeometry(outerDotRadius * CONFIG.NODE_GLOW_SCALE, 64);
  } else {
    borderGeometry = new THREE.ShapeGeometry(
      createRoundedRectShape(outerDashWidth, outerDashHeight, dashRadius)
    );

    mainGeometry = new THREE.ShapeGeometry(
      createRoundedRectShape(innerDashWidth, innerDashHeight, innerDashRadius)
    );

    glowGeometry = new THREE.ShapeGeometry(
      createRoundedRectShape(
        outerDashWidth * CONFIG.DASH_GLOW_SCALE_X,
        outerDashHeight * CONFIG.DASH_GLOW_SCALE_Y,
        dashRadius * CONFIG.DASH_GLOW_SCALE_Y
      )
    );
  }

  const glow = new THREE.Mesh(
    glowGeometry,
    new THREE.MeshBasicMaterial({
      color: activeColor,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  glow.position.copy(pos);
  glow.position.z = 0.01;
  boardGroup.add(glow);

  const shadow = new THREE.Mesh(
    borderGeometry.clone(),
    new THREE.MeshBasicMaterial({
      color: 0x050910,
      transparent: true,
      opacity: CONFIG.NODE_SHADOW_OPACITY,
      depthWrite: false
    })
  );
  shadow.position.set(
    pos.x + CONFIG.NODE_DEPTH_OFFSET_X,
    pos.y + CONFIG.NODE_DEPTH_OFFSET_Y,
    0.025
  );
  boardGroup.add(shadow);

  const border = new THREE.Mesh(
    borderGeometry,
    new THREE.MeshBasicMaterial({ color: lineColor })
  );
  border.position.copy(pos);
  border.position.z = 0.04;
  boardGroup.add(border);

  const mesh = new THREE.Mesh(
    mainGeometry,
    new THREE.MeshBasicMaterial({ color: normalColor })
  );
  mesh.position.copy(pos);
  mesh.position.z = 0.05;
  boardGroup.add(mesh);

  const highlight = new THREE.Mesh(
    mainGeometry.clone(),
    new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: CONFIG.NODE_HIGHLIGHT_OPACITY,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })
  );
  highlight.position.set(
    pos.x + CONFIG.NODE_HIGHLIGHT_OFFSET_X,
    pos.y + CONFIG.NODE_HIGHLIGHT_OFFSET_Y,
    0.06
  );
  highlight.scale.set(0.82, 0.72, 1);
  boardGroup.add(highlight);

  const label = createTextSprite(letter, CONFIG.NODE_LABEL_SIZE, "#f6fcff");
  label.position.set(
    pos.x + CONFIG.LABEL_OFFSET_X,
    pos.y + CONFIG.LABEL_OFFSET_Y,
    0.105
  );

  if (isDot) {
    label.scale.set(CONFIG.DOT_LABEL_SCALE_X, CONFIG.DOT_LABEL_SCALE_Y, 1);
  } else {
    label.scale.set(CONFIG.DASH_LABEL_SCALE_X, CONFIG.DASH_LABEL_SCALE_Y, 1);
  }

  boardGroup.add(label);

  nodeMap.set(seq, {
    mesh,
    border,
    glow,
    label,
    baseGlowOpacity: 0,
    pulseGlowOpacity: 0
  });

  const parentSeq = seq.length > 1 ? seq.slice(0, -1) : "";
  const parentPos = positionForSequence(parentSeq);

  const glowLine = createEdgeBar(
    parentPos,
    pos,
    CONFIG.EDGE_THICKNESS * 2.2,
    activeLineColor,
    0,
    true,
    THREE.AdditiveBlending
  );
  glowLine.position.z = -0.06;
  boardGroup.add(glowLine);

  const line = createEdgeBar(
    parentPos,
    pos,
    CONFIG.EDGE_THICKNESS,
    lineColor
  );
  line.position.z = -0.04;
  boardGroup.add(line);

  edgeMap.set(seq, {
    line,
    glow: glowLine,
    baseGlowOpacity: 0,
    pulseGlowOpacity: 0
  });
}

function buildTree() {
  createBoard();

  const titleLeft = createTextSprite("MORSE", 58, "#d3e7f4");
  titleLeft.position.set(CONFIG.TITLE_LEFT_X, CONFIG.TITLE_Y, 0.1);
  titleLeft.scale.set(3.0, 0.95, 1);
  boardGroup.add(titleLeft);

  const titleRight = createTextSprite("CODE", 58, "#d3e7f4");
  titleRight.position.set(CONFIG.TITLE_RIGHT_X, CONFIG.TITLE_Y, 0.1);
  titleRight.scale.set(2.8, 0.95, 1);
  boardGroup.add(titleRight);

  createRootAntenna();

  for (const [seq, letter] of Object.entries(morse)) {
    createNode(seq, letter);
  }
}

/* =========================
   DISPLAY
   ========================= */

function shouldShowTrailingSequenceJoiner() {
  if (!inputHistory.length) return false;
  if (currentSequence) return false;
  if (roundFinished) return false;

  if (mode === "training") {
    return true;
  }

  if (mode === "game") {
    return outputHistory.length < targetWord.length;
  }

  return false;
}

function updateDisplay() {
  const sequenceText = inputHistory.length
    ? inputHistory.join(CONFIG.INPUT_JOINER)
    : CONFIG.EMPTY_PLACEHOLDER;

  inputText.textContent =
    inputHistory.length && shouldShowTrailingSequenceJoiner()
      ? `${sequenceText}${CONFIG.INPUT_JOINER}`
      : sequenceText;

  outputText.textContent = outputHistory.length
    ? outputHistory.join("")
    : CONFIG.EMPTY_PLACEHOLDER;

  liveInput.textContent = currentSequence
    ? `${inputHistory.length ? CONFIG.INPUT_JOINER : ""}${formatSequenceDisplay(currentSequence)}`
    : CONFIG.EMPTY_PLACEHOLDER;

  liveOutput.textContent = currentSequence
    ? morse[currentSequence] ?? "?"
    : CONFIG.EMPTY_PLACEHOLDER;

  requestAnimationFrame(scrollDisplayToEnd);
}

function getNextTargetLetter() {
  if (mode !== "game") return null;
  if (!targetWord) return null;
  if (roundFinished) return null;

  const index = outputHistory.length;
  return targetWord[index] || null;
}

function getNextTargetSequence() {
  const nextLetter = getNextTargetLetter();
  if (!nextLetter) return null;

  return letterToMorse[nextLetter] || null;
}

function applyTargetHint() {
  if (!visualHintEnabled) return;
  if (mode !== "game") return;
  if (roundFinished) return;

  const targetSequence = getNextTargetSequence();
  if (!targetSequence) return;

  const targetNode = nodeMap.get(targetSequence);

  if (targetNode) {
    if (targetNode.border) {
      targetNode.border.material.color.set(hintLineColor);
    }

    targetNode.glow.material.color.set(hintColor);
    targetNode.baseGlowOpacity = Math.max(targetNode.baseGlowOpacity, 0.2);
  }

  let prefix = "";

  for (const char of targetSequence) {
    prefix += char;

    const edge = edgeMap.get(prefix);

    if (edge) {
      edge.line.material.color.set(hintLineColor);
      edge.glow.material.color.set(hintColor);
      edge.baseGlowOpacity = Math.max(edge.baseGlowOpacity, 0.16);
    }
  }
}

function updateHighlight() {
  for (const node of nodeMap.values()) {
    node.mesh.material.color.set(normalColor);

    if (node.border) {
      node.border.material.color.set(lineColor);
    }

    node.glow.material.color.set(activeColor);
    node.baseGlowOpacity = 0;
  }

  for (const edge of edgeMap.values()) {
    edge.line.material.color.set(lineColor);
    edge.glow.material.color.set(activeLineColor);
    edge.baseGlowOpacity = 0;
  }

  applyTargetHint();

  let prefix = "";

  for (const char of currentSequence) {
    prefix += char;

    const node = nodeMap.get(prefix);
    const edge = edgeMap.get(prefix);

    if (node) {
      node.mesh.material.color.set(normalColor);

      if (node.border) {
        node.border.material.color.set(activeLineColor);
      }

      node.glow.material.color.set(activeColor);
      node.baseGlowOpacity = CONFIG.NODE_BASE_GLOW_OPACITY;
    }

    if (edge) {
      edge.line.material.color.set(activeLineColor);
      edge.glow.material.color.set(activeLineColor);
      edge.baseGlowOpacity = CONFIG.EDGE_BASE_GLOW_OPACITY;
    }
  }

  const currentNode = nodeMap.get(currentSequence);

  if (currentNode) {
    currentNode.mesh.material.color.set(normalColor);

    if (currentNode.border) {
      currentNode.border.material.color.set(currentLineColor);
    }

    currentNode.glow.material.color.set(currentColor);
    currentNode.baseGlowOpacity = CONFIG.NODE_CURRENT_GLOW_OPACITY;
  }

  updateDisplay();
}

function pulseCurrentPath() {
  let prefix = "";

  for (const char of currentSequence) {
    prefix += char;

    const node = nodeMap.get(prefix);
    const edge = edgeMap.get(prefix);

    if (node) {
      node.pulseGlowOpacity = CONFIG.NODE_PULSE_GLOW_OPACITY;
    }

    if (edge) {
      edge.pulseGlowOpacity = CONFIG.EDGE_PULSE_GLOW_OPACITY;
    }
  }
}

function updateGlowFade(deltaSeconds) {
  const fadeAmount = CONFIG.GLOW_FADE_SPEED_PER_SECOND * deltaSeconds;

  for (const node of nodeMap.values()) {
    node.pulseGlowOpacity = Math.max(0, node.pulseGlowOpacity - fadeAmount);
    node.glow.material.opacity = Math.max(node.baseGlowOpacity, node.pulseGlowOpacity);
  }

  for (const edge of edgeMap.values()) {
    edge.pulseGlowOpacity = Math.max(0, edge.pulseGlowOpacity - fadeAmount);
    edge.glow.material.opacity = Math.max(edge.baseGlowOpacity, edge.pulseGlowOpacity);
  }
}

/* =========================
   METERS / TIMER
   ========================= */

function setRootReady(isReady) {
  if (rootTriangleLine) {
    rootTriangleLine.material.color.set(isReady ? activeLineColor : lineColor);
  }

  if (rootTriangleFill) {
    rootTriangleFill.material.color.set(isReady ? activeColor : normalColor);
    rootTriangleFill.material.opacity = CONFIG.ROOT_READY_FILL_OPACITY;
  }
}

function updatePauseMeter(now) {
  if (!currentSequence && !(mode === "game" && roundStarted && !roundFinished && gameIdleStartedAt)) {
    setRootReady(false);
    pauseFill.style.height = "0%";
    pauseFill.classList.remove("is-ready", "is-danger");
    pauseLabel.textContent = "PAUSE";
    return;
  }

  if (currentSequence && lastInputEndedAt) {
    const elapsed = now - lastInputEndedAt;
    const letterGap = getInterLetterGapMs();
    const ratio = Math.max(0, Math.min(elapsed / letterGap, 1));
    const ready = ratio >= 1;

    setRootReady(ready);
    pauseFill.style.height = `${ratio * 100}%`;
    pauseFill.classList.toggle("is-ready", ready);
    pauseFill.classList.remove("is-danger");
    pauseLabel.textContent = ready ? "NEXT" : "PAUSE";
    return;
  }

  if (mode === "game" && roundStarted && !roundFinished && gameIdleStartedAt) {
    const elapsed = now - gameIdleStartedAt;
    const limit = getGameOverPauseLimitMs();
    const ratio = Math.max(0, Math.min(elapsed / limit, 1));
    const remainingMs = Math.max(0, limit - elapsed);

    setRootReady(false);
    pauseFill.style.height = `${ratio * 100}%`;
    pauseFill.classList.remove("is-ready");
    pauseFill.classList.add("is-danger");
    pauseLabel.textContent = `${(remainingMs / 1000).toFixed(1)}s`;
    return;
  }

  setRootReady(false);
  pauseFill.style.height = "0%";
  pauseFill.classList.remove("is-ready", "is-danger");
  pauseLabel.textContent = "PAUSE";
}

function updateRightMeter(now) {
  if (mode === "game") {
    const total = Math.max(targetWord.length, 1);
    const done = Math.min(outputHistory.length, total);
    const ratio = done / total;

    pressFill.style.height = `${ratio * 100}%`;
    pressFill.classList.toggle("is-long", true);
    pressTypeLabel.textContent = `${Math.round(ratio * 100)}%`;
    return;
  }

  if (!lastSignalSymbol || !lastSignalAt) {
    pressFill.style.height = "0%";
    pressFill.classList.remove("is-long");
    pressTypeLabel.textContent = "INPUT";
    return;
  }

  const elapsed = now - lastSignalAt;

  if (elapsed >= CONFIG.SIGNAL_FEEDBACK_MS) {
    pressFill.style.height = "0%";
    pressFill.classList.remove("is-long");
    pressTypeLabel.textContent = "INPUT";
    return;
  }

  const fade = 1 - elapsed / CONFIG.SIGNAL_FEEDBACK_MS;
  const baseRatio =
    lastSignalSymbol === "-"
      ? CONFIG.DASH_FEEDBACK_FILL_RATIO
      : CONFIG.DOT_FEEDBACK_FILL_RATIO;

  pressFill.style.height = `${baseRatio * fade * 100}%`;
  pressFill.classList.toggle("is-long", lastSignalSymbol === "-");
  pressTypeLabel.textContent = lastSignalSymbol === "-" ? "DASH" : "DOT";
}

/* =========================
   INPUT LOGIC
   ========================= */

function scheduleLetterFinish() {
  clearTimeout(finishTimerId);
  finishTimerId = setTimeout(finishLetter, getAutoFinishDelayMs());
}

function addSignal(symbol) {
  if (roundFinished) return false;

  const next = currentSequence + symbol;
  const hasValidPrefix = Object.keys(morse).some((code) => code.startsWith(next));

  if (!hasValidPrefix) {
    return false;
  }

  startRoundIfNeeded();

  currentSequence = next;
  updateHighlight();
  pulseCurrentPath();

  if (mode === "game" && next === getNextTargetSequence()) {
    finishLetter();
    return true;
  }

  scheduleLetterFinish();

  return true;
}

function finishLetter() {
  clearTimeout(finishTimerId);
  finishTimerId = null;

  if (!currentSequence || roundFinished) {
    return;
  }

  const finishedAt = performance.now();

  inputHistory.push(formatSequenceDisplay(currentSequence));
  outputHistory.push(morse[currentSequence] ?? "?");

  currentSequence = "";
  lastInputEndedAt = 0;

  updateHighlight();
  evaluateRoundProgress();

  if (mode === "game" && roundStarted && !roundFinished) {
    gameIdleStartedAt = finishedAt;
  }
}

function handleWrongSignal() {
  flashStageFx("wrong");
  playSound("wrong");

  if (mode === "game") {
    finishRound(false);
  }
}

function triggerSignal(symbol) {
  if (!mode) return;
  if (roundFinished) return;
  if (isOverlayOpen()) return;

  const now = performance.now();

  if (now < nextSignalAllowedAt) {
    return;
  }

  if (
    currentSequence &&
    lastInputEndedAt &&
    now - lastInputEndedAt >= getInterLetterGapMs()
  ) {
    finishLetter();
  }

  lastSignalSymbol = symbol;
  lastSignalAt = now;
  lastInputEndedAt = now;

  const accepted = addSignal(symbol);

  if (!accepted) {
    handleWrongSignal();
    return;
  }

  if (mode !== "game" || currentSequence) {
    gameIdleStartedAt = 0;
  }

  nextSignalAllowedAt = now + getInputCooldownMs(symbol);

  flashInputButton();
  flashStageFx(symbol);
  playSound(symbol === "-" ? "long" : "short");
}

function resetAll() {
  clearTimeout(finishTimerId);
  clearInterval(roundTimerId);
  clearTimeout(buttonFlashTimeoutId);

  currentSequence = "";
  inputHistory = [];
  outputHistory = [];

  lastInputEndedAt = 0;
  lastSignalSymbol = null;
  lastSignalAt = 0;
  nextSignalAllowedAt = 0;
  gameIdleStartedAt = 0;

  roundStarted = false;
  roundFinished = false;
  roundStartAt = 0;
  roundResult = null;

  morseBtn.classList.remove("pressed");

  roundTimer.textContent = "0.0s";
  setRoundTimerState("is-idle");

  if (mode === "game") {
    chooseNextTargetWord();
  } else {
    targetWord = "";
  }

  updateHeader();
  updateResetButtonState();

  pauseFill.style.height = "0%";
  pauseFill.classList.remove("is-ready", "is-danger");
  pauseLabel.textContent = "PAUSE";

  pressFill.style.height = "0%";
  pressFill.classList.remove("is-long");
  pressTypeLabel.textContent = mode === "game" ? "0%" : "INPUT";

  for (const node of nodeMap.values()) {
    node.baseGlowOpacity = 0;
    node.pulseGlowOpacity = 0;
  }

  for (const edge of edgeMap.values()) {
    edge.baseGlowOpacity = 0;
    edge.pulseGlowOpacity = 0;
  }

  updateHighlight();
}

/* =========================
   RESIZE / LOOP
   ========================= */

function resize() {
  const canvas = renderer.domElement;
  const rect = canvas.getBoundingClientRect();

  if (rect.width === 0 || rect.height === 0) return;

  renderer.setSize(rect.width, rect.height, false);

  const aspect = rect.width / rect.height;
  const viewHeight = CONFIG.CAMERA_VIEW_HEIGHT;
  const viewWidth = viewHeight * aspect;

  camera.left = -viewWidth / 2;
  camera.right = viewWidth / 2;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.updateProjectionMatrix();
}

function updateGameOverIdle(now) {
  if (mode !== "game") return;
  if (!roundStarted || roundFinished) return;
  if (currentSequence) return;
  if (!gameIdleStartedAt) return;

  const enteredLetters = outputHistory.length;
  const targetLetters = targetWord.length;

  if (enteredLetters >= targetLetters) return;

  const elapsed = now - gameIdleStartedAt;
  const limit = getGameOverPauseLimitMs();

  if (elapsed >= limit) {
    finishRound(false);
  }
}

function animate(now = performance.now()) {
  requestAnimationFrame(animate);

  const deltaSeconds = Math.min((now - lastFrameTime) / 1000, 0.1);
  lastFrameTime = now;

  updatePauseMeter(now);
  updateRightMeter(now);
  updateGameOverIdle(now);
  updateGlowFade(deltaSeconds);
  updateCameraFx(now);

  renderer.render(scene, camera);
}

/* =========================
   EVENTS
   ========================= */

morseBtn.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

morseBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();

  if (e.button === 2) {
    triggerSignal("-");
    return;
  }

  if (e.button === 0) {
    triggerSignal(".");
  }
});

resetBtn.addEventListener("click", () => {
  playClickSound();
  resetAll();
});

menuBtn.addEventListener("click", () => {
  playClickSound();
  openMenu();
});

helpBtn.addEventListener("click", () => {
  playClickSound();
  openHelp();
});

if (hintToggleBtn) {
  hintToggleBtn.addEventListener("click", () => {
    playClickSound();
    toggleVisualHint();
  });
}

if (musicToggleBtn) {
  musicToggleBtn.addEventListener("click", () => {
    playClickSound();
    toggleBackgroundMusic();
  });
}

if (closeHelpBtn) {
  closeHelpBtn.addEventListener("click", () => {
    playClickSound();
    closeHelp();
  });
}

if (againYesBtn) {
  againYesBtn.addEventListener("click", () => {
    playClickSound();
    selectRoundEndOption("yes");
    confirmRoundEndSelection();
  });
}

if (againNoBtn) {
  againNoBtn.addEventListener("click", () => {
    playClickSound();
    selectRoundEndOption("no");
    confirmRoundEndSelection();
  });
}

trainingModeBtn.addEventListener("click", () => {
  playClickSound();
  setPendingMode("training");
});

gameModeBtn.addEventListener("click", () => {
  playClickSound();
  setPendingMode("game");
});

beginnerDifficultyBtn.addEventListener("click", () => {
  playClickSound();
  setDifficulty("beginner");
});

intermediateDifficultyBtn.addEventListener("click", () => {
  playClickSound();
  setDifficulty("intermediate");
});

expertDifficultyBtn.addEventListener("click", () => {
  playClickSound();
  setDifficulty("expert");
});

startGameBtn.addEventListener("click", () => {
  playClickSound();
  startSelectedMode();
});

window.addEventListener("keydown", (e) => {
  if (isVisible(greetingBox)) {
    if (e.code === "ArrowLeft" || e.code === "ArrowUp") {
      e.preventDefault();
      moveMenuFocus(-1);
      return;
    }

    if (e.code === "ArrowRight" || e.code === "ArrowDown") {
      e.preventDefault();
      moveMenuFocus(1);
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      activateMenuFocus();
      return;
    }
  }

  if (isVisible(roundEndBox)) {
    const key = e.key.toLowerCase();

    if (e.code === "ArrowLeft") {
      e.preventDefault();
      playClickSound();
      selectRoundEndOption("yes");
      return;
    }

    if (e.code === "ArrowRight") {
      e.preventDefault();
      playClickSound();
      selectRoundEndOption("no");
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      playClickSound();
      confirmRoundEndSelection();
      return;
    }

    if (key === "y") {
      e.preventDefault();
      playClickSound();
      selectRoundEndOption("yes");
      confirmRoundEndSelection();
      return;
    }

    if (key === "n") {
      e.preventDefault();
      playClickSound();
      selectRoundEndOption("no");
      confirmRoundEndSelection();
      return;
    }
  }

  if (e.code === "Space") {
    e.preventDefault();

    if (!e.repeat) {
      triggerSignal(".");
    }

    return;
  }

  if (e.key === "Enter") {
    e.preventDefault();

    if (!e.repeat) {
      triggerSignal("-");
    }

    return;
  }

  if (e.key === "." || e.key === "," || e.code === "ArrowLeft") {
    e.preventDefault();
    triggerSignal(".");
    return;
  }

  if (e.key === "-" || e.key === "_" || e.code === "ArrowRight") {
    e.preventDefault();
    triggerSignal("-");
    return;
  }

  if (e.key === "1") {
    e.preventDefault();
    setDifficulty("beginner");
    return;
  }

  if (e.key === "2") {
    e.preventDefault();
    setDifficulty("intermediate");
    return;
  }

  if (e.key === "3") {
    e.preventDefault();
    setDifficulty("expert");
    return;
  }

  if (e.key === "Backspace") {
    e.preventDefault();

    if (roundFinished) return;
    if (isOverlayOpen()) return;

    if (currentSequence) {
      currentSequence = currentSequence.slice(0, -1);
      updateHighlight();

      if (currentSequence) {
        scheduleLetterFinish();
      } else {
        clearTimeout(finishTimerId);
        finishTimerId = null;
      }
    } else {
      inputHistory.pop();
      outputHistory.pop();
      updateDisplay();
    }

    return;
  }

  if (e.key === "Escape") {
    e.preventDefault();

    if (isVisible(roundEndBox)) {
      closeRoundEndBox();
      return;
    }

    if (isVisible(helpBox)) {
      closeHelp();
      return;
    }

    if (isVisible(greetingBox)) {
      closeMenu();
      return;
    }

    openMenu();
  }
});

window.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

window.addEventListener("resize", resize);

/* =========================
   START
   ========================= */

buildTree();
updateMenuSelection();
updateHintToggleButton();
updateMusicToggleButton();

requestAnimationFrame(() => {
  resize();
  updateHeader();
  updateDisplay();
  updateHighlight();
  updateOverlayBlur();
});

animate();