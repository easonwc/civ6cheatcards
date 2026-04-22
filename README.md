# Civ 6 Strategy Planner

A strategy planning tool for Civilization 6 that recommends victory paths, build orders, and matchup analysis for both single player and multiplayer games. Supports the Better Balanced Game (BBG) mod.

## Features

- **77 Leaders** — Full roster with abilities, unique units/buildings, victory synergies, and BBG 7.4 verified changes
- **Victory Recommendation** — Auto-recommends the best victory path based on your leader, opponents, and map
- **Era-by-Era Build Orders** — Priorities for all 8 eras (Ancient through Information) across 5 victory types
- **Single Player & Multiplayer** — Separate build orders and tips for SP vs MP play
- **Team Planning** — Generate strategies for every player in a multiplayer lobby with tabbed view
- **Opponent Matchups** — Threat assessment with counter-strategies, sorted by danger level
- **Random Opponent Fill** — Empty opponent slots auto-fill with random leaders for realistic analysis
- **Map Analysis** — 15 map types with leader-specific map affinity ratings and density calculations
- **Map Fairness** — Multiplayer fairness analysis that flags lopsided maps and suggests fairer alternatives
- **Eureka & Inspiration Guide** — Leader-specific boost priorities plus general victory-type boosts with Eureka/Inspiration labels
- **Game Speed** — Strategy adjustments for Online, Quick, Standard, Epic, and Marathon speeds
- **Game Modes** — Tips for Barbarian Clans, Secret Societies, and Monopolies & Corporations
- **BBG Mode** — Toggle for Better Balanced Game mod with v7.4 verified data from civ6bbg.github.io
- **Uniqueness Controls** — Independent toggles for unique leaders and unique civilizations
- **Collapsible Sections** — Strategy output uses expandable sections to reduce scrolling
- **Two-Column Layout** — Desktop shows overview and game plan side by side
- **Mobile Responsive** — Works on phone, tablet, and desktop
- **Save Strategy Cards** — Export standalone HTML files that work offline on any device
- **Save All Cards** — Team mode exports a separate card for each player

## How to Use

1. Open `index.html` in a browser (no build step needed)
2. Pick your leader — the card shows their abilities and victory tags
3. Set your map type, size, player count, and game speed
4. Toggle any game modes your group plays with (Barbarian Clans, Secret Societies, Monopolies)
5. Toggle Single Player or Multiplayer mode
6. Fill in known opponents (empty slots get random leaders)
7. Hit **Generate My Strategy** for your personalized plan
8. In Multiplayer, use **Generate Team Strategies** to get plans for everyone
9. Use **Save Strategy Card** to download a standalone HTML file for your phone

## Project Structure

```
index.html          — Main app page (setup + strategy screens)
styles.css          — All styles (dark theme, mobile responsive, print)
app.js              — Application logic
data/
  leaders.js        — 77 leaders with abilities, synergies, BBG 7.4 notes
  builds.js         — Era-based build orders, map tips, density, fairness, speed, game modes
  boosts.js         — Eureka/Inspiration guides, leader-specific boost priorities
  strategy.js       — Multiplayer threat matrix
```

## Local Development

Just open `index.html` directly, or serve it:

```bash
npx http-server -p 4567
# or
node server.js
```

## BBG (Better Balanced Game)

The BBG toggle adjusts leader notes and strategy tips for the popular balance mod used in competitive multiplayer. Leader data is verified against BBG v7.4 from [civ6bbg.github.io](https://civ6bbg.github.io). The version and date are shown next to the toggle.

## Credits

Built for Civ 6 players who want to stop winging it and start winning.
