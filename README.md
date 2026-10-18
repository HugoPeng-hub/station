# EchoPath Host Server

Live demo: https://HugoPeng-hub.github.io/station/

A local visual prototype for a tactile semantic navigation system, designed for portfolio screenshots and interaction demonstrations.

**Everything is simulated.** No hardware connection, server, speech recognition, VoiceOver integration, document parsing, or external services are implemented.

## Run

```sh
npm install
npm run dev
```

Open the Local URL printed by Vite. For a production build: `npm run build`; preview it with `npm run preview`.

The production build is written to `docs/` for GitHub Pages. After changing the source, run `npm run build` and commit the updated `docs/` folder. GitHub Pages serves `main` → `/docs`.

## Demo

The initial scene is paused at Section 3.2 / 42% for a stable screenshot. **Play Demo** advances the semantic focus, touch coordinates, speech transcript, haptic pattern, and event stream every 4.2 seconds. **Pause** freezes the scene. **Reset** restores the initial screenshot composition. Physical buttons and the progress slider also simulate inputs. No sound is emitted.

Recommended capture: 1440 × 1000 or 1600 × 1000; the layout also adapts to 16:9 displays and smaller windows. Browser zoom can adjust the framing.

## Source

- `src/components/`: the eight dashboard modules and shared panel
- `src/data/mockData.js`: semantic states and starting event stream
- `src/simulation/demoSequence.js`: timing and simulated event mapping
- `src/App.jsx`: local interaction state and page composition
- `src/styles.css`: warm paper palette, technical grid, responsive layout

Concept: **Touch = Where · Speech = What · Vibration = Confirmation**.
