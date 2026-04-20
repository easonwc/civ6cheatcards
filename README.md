# Civ 6 Strategy Planner

A strategy planning tool for Civilization 6 that helps players choose victory paths, plan build orders, and analyze multiplayer matchups. Supports the Better Balanced Game (BBG) mod.

## Features

- **77 Leaders** — Full roster with abilities, unique units/buildings, and victory synergies
- **Victory Recommendation** — Auto-recommends the best victory path based on your leader and opponents
- **Era-by-Era Build Orders** — Priorities for all 8 eras (Ancient through Information) across 5 victory types
- **Single Player & Multiplayer** — Separate build orders and tips for SP vs MP play
- **Opponent Matchups** — Threat assessment with counter-strategies, sorted by danger level
- **Team Planning** — Generate strategies for every player in a multiplayer lobby
- **Map Analysis** — 15 map types with density calculations based on map size and player count
- **Eureka & Inspiration Guide** — Leader-specific boost priorities plus general victory-type boosts
- **BBG Mode** — Toggle for Better Balanced Game mod adjustments
- **Mobile Responsive** — Works on phone, tablet, and desktop

## How to Use

1. Open `index.html` in a browser (no build step needed)
2. Pick your leader — the card shows their abilities and victory tags
3. Set your map type, size, and player count
4. Toggle Single Player or Multiplayer mode
5. Fill in known opponents (empty slots get random leaders)
6. Hit **Generate My Strategy** for your personalized plan
7. In Multiplayer, use **Generate Team Strategies** to get plans for everyone

## Project Structure

```
index.html          — Main app page
styles.css          — All styles (dark theme, mobile responsive)
app.js              — Application logic
data/
  leaders.js        — 77 leaders with abilities, synergies, BBG notes
  builds.js         — Era-based build orders, map tips, density analysis
  boosts.js         — Eureka/Inspiration guides, leader-specific boost priorities
  strategy.js       — Multiplayer threat matrix
```

## Local Development

Just open `index.html` directly, or serve it:

```bash
# Quick local server
npx http-server -p 4567
```

## BBG (Better Balanced Game)

The BBG toggle adjusts leader notes and strategy tips for the popular balance mod used in competitive multiplayer. Leader data includes both vanilla and BBG context.

## Credits

Built for Civ 6 players who want to stop winging it and start winning.
