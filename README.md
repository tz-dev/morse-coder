# Morse Coder

Morse Coder is a browser-based Morse code trainer and game.  
It visualizes the Morse tree with Three.js, gives live input feedback, supports difficulty modes, audio cues, hints, and a simple target-word game mode.

## Features

- Training mode for free Morse practice
- Game mode with target words
- Beginner, Intermediate, and Expert difficulty presets
- Visual Morse tree with live path highlighting
- Optional next-letter hint
- Pause meter for letter separation
- Progress meter in game mode
- Sound effects for dot, dash, wrong input, win, lose, and background noise
- Keyboard and mouse input support

## Screenshot

![Morse Coder screenshot](img/screenshot.png)

## Controls

### Main input

| Action | Mouse | Keyboard |
|---|---|---|
| Dot / short | Left click | Space |
| Dash / long | Right click | Enter |

### Extra shortcuts

- Dot / short: `.`, `,`, Arrow Left
- Dash / long: `-`, `_`, Arrow Right
- Backspace: delete current input
- Escape: open / close menu
- 1 / 2 / 3: switch difficulty

### Other

- Escape: open / close menu or overlay
- Backspace: delete current input
- 1 / 2 / 3: switch difficulty

## File Structure

```text
morse-code/
├─ index.html
├─ css/
│  └─ styles.css
├─ img/
│  └─ screenshot.png
├─ js/
│  └─ app.js
└─ snd/
   ├─ morse_short.wav
   ├─ morse_long.wav
   ├─ wrong.wav
   ├─ win.mp3
   ├─ lose.mp3
   └─ noise.wav
````

## Setup

Clone or download the project and open it through a local server.

Example with Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

A local server is recommended because browsers may restrict audio or module loading from direct `file://` paths.

## Audio Files

Place these files in the `snd/` folder:

```text
morse_short.wav
morse_long.wav
wrong.wav
win.mp3
lose.mp3
noise.wav
```

Background noise can be toggled in the interface.

## Configuration

Most gameplay and visual settings are adjustable at the top of `js/app.js`.

Important sections:

```js
DIFFICULTIES
TARGET_WORDS
SOUND_PATHS
TREE_WIDTH
TREE_ROOT_Y
TREE_STEP_Y
NODE_LABEL_SIZE
```

Each difficulty can define:

```js
interLetterGapMs
autoFinishDelayMs
gameOverPauseUnits
shortInputCooldownMs
longInputCooldownMs
wordPool
```

## GitHub Upload

From the project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/morse-coder.git
git push -u origin main
```

## License

MIT