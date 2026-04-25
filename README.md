# Morse Coder

Morse Coder is a browser-based Morse code trainer and game.  
It visualizes the Morse tree with Three.js, gives live input feedback, supports difficulty modes, audio cues, hints, and a simple target-word game mode.

## Live Verion

[Check the live version right here!](https://tz-dev.github.io/morse-coder/)

## Features

- Training mode for free Morse practice
- Game mode with target words
- Beginner, Intermediate, and Expert difficulty presets
- Visual Morse tree with live path highlighting
- Optional next-letter hint
- Pause meter for letter separation
- Progress meter in game mode
- Keyboard and mouse input support

## Screenshots

![Morse Coder screenshot](img/screenshot00.png)  

![Morse Coder screenshot](img/screenshot01.png)  

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
   ├─ screenshot00.png
│  └─ screenshot01.png
├─ js/
│  └─ app.js
└─ snd/
   ├─ morse_short.wav
   ├─ morse_long.wav
   ├─ wrong.wav
   ├─ win.wav
   ├─ lose.wav
   └─ noise.wav
````

## Setup

Just download the repository and open index.html.

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

## License

MIT
