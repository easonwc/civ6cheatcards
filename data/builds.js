// Build order templates per victory type — organized by era
const BUILD_ORDERS = {
  domination: {
    eras: {
      ancient:     { focus: "Establish military foundation", priorities: ["Scout", "Slinger ×2", "Monument", "Warrior", "Settler", "Builder"] },
      classical:   { focus: "First timing attack window", priorities: ["Encampment", "Barracks/Stable", "Iron Working → Swordsman", "Battering Ram", "2nd Settler"] },
      medieval:    { focus: "Knight timing push", priorities: ["Armory", "Knights/Crossbowmen", "Siege Tower", "Conquer nearest neighbor"] },
      renaissance: { focus: "Consolidate and upgrade", priorities: ["Musketman upgrades", "Niter stockpile", "Walls in conquered cities", "Commercial Hubs for gold"] },
      industrial:  { focus: "Artillery era", priorities: ["Military Academy", "Artillery", "Form Corps", "Industrial Zone for production"] },
      modern:      { focus: "Mechanized warfare", priorities: ["Tanks/Infantry", "Form Armies", "Bombers", "Oil stockpile"] },
      atomic:      { focus: "Air superiority", priorities: ["Bombers", "Fighter escorts", "Nuclear weapons if available", "Helicopter gunships"] },
      information: { focus: "Close it out", priorities: ["Modern Armor", "Jet Bombers", "Giant Death Robot", "Capture remaining capitals"] }
    },
    policies: ["Agoge/Maneuver", "Conscription", "Professional Army", "Lightning Warfare"],
    wonders: ["Terracotta Army", "Alhambra", "Venetian Arsenal (naval)"],
    tips: ["Timing attacks are key — hit when you have a unit advantage", "Always bring siege units when attacking cities", "Pillage improvements for healing and yields", "In BBG, early aggression is riskier due to balance changes"]
  },
  science: {
    eras: {
      ancient:     { focus: "Campus foundation", priorities: ["Scout ×2", "Slinger", "Settler", "Builder", "Campus (mountain adjacency)"] },
      classical:   { focus: "Library and expand", priorities: ["Library", "2nd Settler", "2nd Campus", "Commercial Hub", "Walls"] },
      medieval:    { focus: "University rush", priorities: ["University in all cities", "Industrial Zone", "Apprenticeship tech", "Medieval Faires civic"] },
      renaissance: { focus: "Scientific infrastructure", priorities: ["Research Agreements", "More cities with Campuses", "Banking for gold", "Printing tech"] },
      industrial:  { focus: "Research Labs", priorities: ["Research Lab in all cities", "Spaceport site prep", "Coal Power Plant", "Ruhr Valley wonder"] },
      modern:      { focus: "Space Race begins", priorities: ["Spaceport", "Launch Earth Satellite", "Launch Moon Landing", "Rocketry tech"] },
      atomic:      { focus: "Space projects", priorities: ["Launch Mars Colony modules", "Exoplanet Expedition", "Protect Spaceport with spies"] },
      information: { focus: "Final push", priorities: ["Complete remaining space projects", "Laser Station", "Counter-spy Spaceport"] }
    },
    policies: ["Natural Philosophy", "Rationalism", "International Space Agency"],
    wonders: ["Great Library", "Oxford University", "Kilwa Kisiwani"],
    tips: ["Campus adjacency is critical — plan city placement around mountains", "Trade routes should feed your science cities", "Rush Spaceport and start projects ASAP", "In BBG, science victory is slightly slower — plan accordingly"]
  },
  culture: {
    eras: {
      ancient:     { focus: "Early culture lead", priorities: ["Scout", "Monument", "Slinger", "Settler", "Builder", "Holy Site or Theater Square"] },
      classical:   { focus: "Theater Squares online", priorities: ["Theater Square", "Amphitheater", "Oracle wonder", "2nd city Theater Square"] },
      medieval:    { focus: "Great Works collection", priorities: ["Art Museum or Archaeological Museum", "Great People generation", "Entertainment Complex"] },
      renaissance: { focus: "Wonder spam", priorities: ["Bolshoi Theatre", "Key wonders for Great Work slots", "Exploration civic for Museum theming"] },
      industrial:  { focus: "Tourism engine", priorities: ["Broadcast Center", "Eiffel Tower wonder", "Archaeologists", "Natural History civic"] },
      modern:      { focus: "Tourism acceleration", priorities: ["National Parks", "Seaside Resorts", "Cristo Redentor wonder", "Flight tech"] },
      atomic:      { focus: "Tourism pressure", priorities: ["Rock Bands", "Open borders for +25% tourism", "Heritage Tourism policy"] },
      information: { focus: "Close it out", priorities: ["Online Communities policy", "More Rock Bands", "Target highest domestic tourism civ"] }
    },
    policies: ["Inspiration", "Heritage Tourism", "Online Communities"],
    wonders: ["Oracle", "Bolshoi Theatre", "Cristo Redentor", "Eiffel Tower"],
    tips: ["Great Works are essential — fill every slot", "Tourism from National Parks and Seaside Resorts wins late game", "Open borders with everyone for +25% tourism", "In BBG, culture victory requires more active tourism generation"]
  },
  religion: {
    eras: {
      ancient:     { focus: "Found religion ASAP", priorities: ["Scout", "Slinger", "Holy Site", "Shrine", "Settler", "Builder"] },
      classical:   { focus: "Establish religion", priorities: ["Earn Great Prophet", "Found Religion — pick strong beliefs", "Temple", "2nd Holy Site"] },
      medieval:    { focus: "Spread aggressively", priorities: ["Missionaries ×3+", "Worship Building", "Apostles with Debater", "Theology civic"] },
      renaissance: { focus: "Theological combat", priorities: ["Apostles for contested civs", "Inquisitors for defense", "Theocracy government", "Mont St. Michel wonder"] },
      industrial:  { focus: "Convert remaining civs", priorities: ["Mass Apostle purchases", "Inquisitor defense network", "Faith generation buildings"] },
      modern:      { focus: "Mop up holdouts", priorities: ["Target unconverted capitals", "Defend against enemy Inquisitors", "Military escort for missionaries"] },
      atomic:      { focus: "Defend your religion", priorities: ["Inquisitors in every city", "Prevent enemy religious flips"] },
      information: { focus: "Maintain majority", priorities: ["Keep majority in all civs", "Counter any late religious pushes"] }
    },
    policies: ["God King", "Scripture", "Simultaneum", "Theocracy"],
    wonders: ["Stonehenge", "Mahabodhi Temple", "Hagia Sophia", "Mont St. Michel"],
    tips: ["Found your religion ASAP — beliefs get taken", "Apostle promotions matter — Debater for theological combat", "Defend your religion with Inquisitors", "In BBG, religious combat is more balanced — plan apostle fights carefully"]
  },
  diplomacy: {
    eras: {
      ancient:     { focus: "Meet everyone", priorities: ["Scout ×2", "Monument", "Settler", "Builder", "Meet city-states for envoys"] },
      classical:   { focus: "Government and alliances", priorities: ["Government Plaza", "Political Philosophy civic", "First alliances", "Commercial Hub"] },
      medieval:    { focus: "City-state suzerainty", priorities: ["Envoy generation", "Suzerain 2-3 city-states", "Diplomatic Service civic", "Alliances to level 2"] },
      renaissance: { focus: "World Congress", priorities: ["Vote correctly for Diplomatic VP", "Win emergencies", "Potala Palace wonder", "Accumulate Diplomatic Favor"] },
      industrial:  { focus: "Scored competitions", priorities: ["Win Aid Requests", "Win scored competitions", "Diplomatic Quarter", "Statue of Liberty wonder"] },
      modern:      { focus: "Favor stockpile", priorities: ["Hoard Diplomatic Favor", "Carbon Recapture project", "Continue winning competitions"] },
      atomic:      { focus: "Final votes", priorities: ["Spend favor on key World Congress votes", "Block opponents from VP", "Win remaining emergencies"] },
      information: { focus: "Secure victory", priorities: ["Final Diplomatic VP push", "Spend all remaining favor strategically"] }
    },
    policies: ["Charismatic Leader", "Containment", "Arsenal of Democracy"],
    wonders: ["Potala Palace", "Statue of Liberty", "Mahabodhi Temple", "Kilwa Kisiwani"],
    tips: ["Accumulate Diplomatic Favor through alliances and city-state suzerainty", "Vote correctly in World Congress for Diplomatic Victory Points", "Aid requests and emergencies are free points", "In BBG, diplomacy victory is viable but requires careful favor management"]
  }
};

// Map type modifiers
const MAP_TIPS = {
  pangaea: "On Pangaea, expect early aggression. Prioritize military defense and forward settling. Domination civs thrive here.",
  continents: "Continents maps reward naval power and cross-continent expansion. Plan for a navy by the Medieval era.",
  "continents-islands": "Similar to Continents but with more small islands between landmasses. Naval civs get extra settling options. Control the sea lanes.",
  "small-continents": "Many medium landmasses. You'll likely share your continent with 1-2 civs. Navy is important for reaching other continents mid-game.",
  fractal: "Unpredictable coastlines and landmasses. Could be anything from near-Pangaea to near-Archipelago. Scout early and adapt.",
  archipelago: "Mostly water with many small islands. Navy is mandatory. Harbors in every city. Land domination is nearly impossible.",
  islands: "Island Plates heavily favor naval civs. Harbors are essential. Land domination is very difficult.",
  "inland-sea": "A large central sea surrounded by land on all sides. Coastal cities around the sea are prime real estate. No map wraparound.",
  lakes: "Lakes maps provide fresh water bonuses everywhere. Settle aggressively and use the housing advantage.",
  terra: "All civs start on one continent with an empty second continent to colonize. Race to Cartography to settle the new world first.",
  primordial: "Volcanic, marshy terrain with lots of geothermal fissures and floodplains. High yields but natural disasters are frequent.",
  "splintered-fractal": "Highly fragmented landmasses with narrow land bridges. Chokepoints are key — control the bridges to control the map.",
  "seven-seas": "Multiple small seas divide the landmasses. Coastal cities and harbors are important. Mixed land/naval gameplay.",
  "tilted-axis": "Extreme climate zones — heavy tundra and desert. Civs that benefit from extreme terrain (Russia, Mali) are strong here.",
  shuffle: "Shuffle is unpredictable — scout early and adapt your strategy to the terrain you find."
};

const MP_MAP_TIPS = {
  pangaea: "Pangaea in MP is hyper-aggressive. Expect early rushes. Wall up, keep 3-4 military units at all times, and don't over-expand without defense.",
  continents: "Continents in MP gives breathing room early but naval control of the strait is critical. Whoever controls the crossing controls the game.",
  "continents-islands": "Like Continents but the islands are contested settling spots. Grab key islands early for strategic resources and forward bases.",
  "small-continents": "You'll share land with fewer players. Early diplomacy with your continent-mate is crucial — you'll either ally or fight.",
  fractal: "Fractal in MP is chaotic. Scout aggressively — the map shape determines whether it plays like Pangaea or Archipelago.",
  archipelago: "Archipelago in MP is a naval arms race. Ignore navy and you die. Harbors first, then military navy ASAP.",
  islands: "Island Plates in MP is a naval arms race. Harbors are mandatory. Ignore navy at your own peril — you will get invaded.",
  "inland-sea": "The inland sea is the contested zone. Coastal cities around it are high-value targets. Naval control of the sea wins games.",
  lakes: "Lakes in MP means everyone has housing. Games go longer. Plan for a mid-game power spike rather than early aggression.",
  terra: "In MP, the race to the second continent is everything. First to settle it gets a massive advantage. Rush Cartography.",
  primordial: "Disasters can wreck improvements but also boost yields. Settle near volcanoes for long-term gains. Expect chaotic early game.",
  "splintered-fractal": "Chokepoints are everything. Fortify land bridges. Whoever controls the narrow passages controls movement across the map.",
  "seven-seas": "Mixed naval/land combat. You need both an army and a navy. Coastal raids are common — protect your shoreline.",
  "tilted-axis": "Extreme terrain means some civs get huge advantages. Russia and Mali love this map. Others struggle with low-yield tiles.",
  shuffle: "Shuffle in MP is chaotic. Scout aggressively and adapt. Don't commit to a rigid build order until you know the map."
};

// Multiplayer build order adjustments
const MP_BUILD_ORDERS = {
  domination: {
    eras: {
      ancient:     { focus: "Survive and scout", priorities: ["Scout", "Slinger ×2", "Warrior", "Settler", "Builder", "Walls if threatened"] },
      classical:   { focus: "Timing attack or defend", priorities: ["Encampment", "Barracks/Stable", "Swordsman/Horseman", "Battering Ram", "Walls in exposed cities"] },
      medieval:    { focus: "Knight timing push", priorities: ["Armory", "Knights", "Crossbowmen", "Siege Tower", "Pillage before capturing"] },
      renaissance: { focus: "Upgrade and consolidate", priorities: ["Musketman upgrades", "Walls in all cities", "Commercial Hub for gold", "Watch for joint wars against you"] },
      industrial:  { focus: "Corps and artillery", priorities: ["Military Academy", "Form Corps", "Artillery", "Industrial Zone", "Spy on opponents"] },
      modern:      { focus: "Mechanized push", priorities: ["Tanks", "Form Armies", "Bombers", "Anti-air in defense"] },
      atomic:      { focus: "Air dominance", priorities: ["Bombers + Fighters", "Nuclear weapons", "Capture remaining capitals"] },
      information: { focus: "End the game", priorities: ["Modern Armor", "Jet Bombers", "Giant Death Robot", "Don't let science civs finish space race"] }
    },
    policies: ["Agoge/Maneuver", "Limes (walls)", "Conscription", "Professional Army"],
    wonders: ["Terracotta Army", "Alhambra", "Forbidden City (Wildcard slot)"],
    tips: ["Scout your neighbors — know who's next to you by turn 20", "Never leave your cities undefended, even when attacking", "Timing attacks around unit upgrades (Swords→Knights, Crossbows→Field Cannon)", "Pillage before capturing — the yields are worth more than a fast cap", "In BBG, early rushes are weaker — plan for Classical or Medieval timing instead", "Watch for joint wars — human players coordinate against the strongest player"]
  },
  science: {
    eras: {
      ancient:     { focus: "Defend and Campus", priorities: ["Scout", "Slinger ×2", "Settler", "Builder", "Campus", "Walls"] },
      classical:   { focus: "Library and defense", priorities: ["Library", "Walls in every city", "2nd Settler", "2nd Campus", "Archer for defense"] },
      medieval:    { focus: "University rush", priorities: ["University in all cities", "Crossbowmen for defense", "Industrial Zone", "Commercial Hub"] },
      renaissance: { focus: "Fortify and research", priorities: ["Research Lab prep", "Counter-spy setup", "Renaissance Walls", "Keep military visible as deterrent"] },
      industrial:  { focus: "Research Labs", priorities: ["Research Lab in all cities", "Spaceport planning", "Coal Power Plant", "Encampment if not built"] },
      modern:      { focus: "Spaceport defense", priorities: ["Spaceport", "Counter-spy on Spaceport", "Anti-air units", "Launch Earth Satellite"] },
      atomic:      { focus: "Space race sprint", priorities: ["Mars Colony modules", "Defend against invasion", "Spy sabotage on rival Spaceports"] },
      information: { focus: "Finish before they stop you", priorities: ["Complete space projects", "Maximum Spaceport defense", "Laser Station"] }
    },
    policies: ["Natural Philosophy", "Limes", "Rationalism", "International Space Agency"],
    wonders: ["Kilwa Kisiwani", "Oxford University", "Ruhr Valley"],
    tips: ["You WILL be targeted if you're visibly ahead in science — always have a military", "Walls in every city, no exceptions. Humans will punish greed.", "Spies on your Spaceport — opponents will sabotage your projects", "Counter-spy your Spaceport district starting in the Renaissance", "Trade routes to city-states are safer than to human players", "In BBG, science victory takes longer — budget extra turns for defense"]
  },
  culture: {
    eras: {
      ancient:     { focus: "Culture and defense", priorities: ["Scout", "Slinger", "Monument", "Settler", "Builder", "Theater Square", "Walls"] },
      classical:   { focus: "Amphitheater and wonders", priorities: ["Amphitheater", "Oracle wonder", "Walls", "2nd city Theater Square"] },
      medieval:    { focus: "Great Works", priorities: ["Art Museum", "Great People generation", "Encampment for defense", "Keep military visible"] },
      renaissance: { focus: "Wonder building", priorities: ["Bolshoi Theatre", "Key wonder slots", "DO NOT open borders with opponents"] },
      industrial:  { focus: "Tourism engine", priorities: ["Broadcast Center", "Eiffel Tower", "Archaeologists", "Defend against aggression"] },
      modern:      { focus: "Tourism push", priorities: ["National Parks", "Seaside Resorts", "Cristo Redentor", "Keep defensive military"] },
      atomic:      { focus: "Rock Band assault", priorities: ["Rock Bands targeting highest tourism civ", "Heritage Tourism policy", "Defend your Great Works"] },
      information: { focus: "Close it out", priorities: ["Online Communities policy", "More Rock Bands", "Prevent opponents from declaring war"] }
    },
    policies: ["Inspiration", "Limes", "Heritage Tourism", "Online Communities"],
    wonders: ["Oracle", "Bolshoi Theatre", "Eiffel Tower", "Cristo Redentor"],
    tips: ["DO NOT open borders with opponents — they'll deny you the same", "Culture victory is slow and visible — expect military pressure", "Rock Bands are your late-game closer, target the civ with highest domestic tourism", "Theming bonuses matter — plan Great Work placement carefully", "Keep a defensive military at all times, culture civs are prime targets", "In BBG, tourism modifiers are adjusted — you need more active tourism sources"]
  },
  religion: {
    eras: {
      ancient:     { focus: "Holy Site rush", priorities: ["Scout", "Slinger", "Holy Site", "Shrine", "Settler", "Warrior", "Walls"] },
      classical:   { focus: "Found religion", priorities: ["Earn Great Prophet", "Found Religion", "Temple", "2nd Holy Site", "Walls in all cities"] },
      medieval:    { focus: "Spread with escorts", priorities: ["Apostles (Debater)", "Military escort for missionaries", "Worship Building", "Inquisitors for defense"] },
      renaissance: { focus: "Theological warfare", priorities: ["Mass Apostle purchases", "Theocracy government", "Inquisitor network", "Watch for war declarations"] },
      industrial:  { focus: "Convert holdouts", priorities: ["Target unconverted civs", "Escort missionaries with military", "Defend against counter-religion"] },
      modern:      { focus: "Maintain and defend", priorities: ["Inquisitors everywhere", "Military deterrent", "Convert remaining cities"] },
      atomic:      { focus: "Prevent flips", priorities: ["Inquisitor defense", "Counter enemy Apostles"] },
      information: { focus: "Hold majority", priorities: ["Maintain religious majority in all civs", "Counter late pushes"] }
    },
    policies: ["God King", "Scripture", "Theocracy", "Simultaneum"],
    wonders: ["Stonehenge (risky in MP)", "Hagia Sophia", "Mont St. Michel", "Mahabodhi Temple"],
    tips: ["Founding a religion is harder in MP — other players contest Great Prophets", "Debater Apostles are mandatory — you will fight theological combat constantly", "Escort missionaries with military units, humans will declare war to kill them", "Inquisitors are cheaper than Apostles — use them to defend, Apostles to attack", "Don't spread to a domination player's cities — they'll use it as a war excuse", "In BBG, religious combat is rebalanced — Debater is less dominant, plan mixed promotions"]
  },
  diplomacy: {
    eras: {
      ancient:     { focus: "Meet everyone", priorities: ["Scout ×2", "Slinger", "Monument", "Settler", "Builder", "Meet all city-states"] },
      classical:   { focus: "Government and allies", priorities: ["Government Plaza", "Political Philosophy", "First alliances", "Walls for safety"] },
      medieval:    { focus: "Suzerainty and favor", priorities: ["Envoy generation", "Suzerain city-states", "Level 2 alliances", "Diplomatic Service civic"] },
      renaissance: { focus: "World Congress", priorities: ["Vote correctly", "Win emergencies", "Potala Palace", "Don't appear threatening"] },
      industrial:  { focus: "Competitions", priorities: ["Win Aid Requests", "Diplomatic Quarter", "Statue of Liberty", "Accumulate favor"] },
      modern:      { focus: "Favor hoarding", priorities: ["Save Diplomatic Favor", "Carbon Recapture", "Win competitions", "Stay friendly with everyone"] },
      atomic:      { focus: "Strategic voting", priorities: ["Spend favor on key votes", "Block opponents from VP", "Humans will vote against you — save favor"] },
      information: { focus: "Final push", priorities: ["All-in on final World Congress vote", "Spend remaining favor", "Win last competition"] }
    },
    policies: ["Charismatic Leader", "Limes", "Containment", "Arsenal of Democracy"],
    wonders: ["Potala Palace", "Statue of Liberty", "Kilwa Kisiwani", "Mahabodhi Temple"],
    tips: ["Diplomatic victory is about not being a threat — stay friendly with everyone", "Hoard Diplomatic Favor for key World Congress votes", "Vote WITH the majority on proposals that don't matter to deny others points", "Win every emergency and scored competition you can", "Humans will vote against you once you're close to winning — save favor for the final push", "In BBG, diplomatic favor costs are adjusted — don't overspend early"]
  }
};

// Map size data
const MAP_SIZES = {
  duel:     { label: "Duel",     defaultPlayers: 2,  maxPlayers: 4,  tiles: 2048 },
  tiny:     { label: "Tiny",     defaultPlayers: 4,  maxPlayers: 6,  tiles: 2800 },
  small:    { label: "Small",    defaultPlayers: 6,  maxPlayers: 8,  tiles: 3600 },
  standard: { label: "Standard", defaultPlayers: 8,  maxPlayers: 10, tiles: 5040 },
  large:    { label: "Large",    defaultPlayers: 10, maxPlayers: 12, tiles: 6720 },
  huge:     { label: "Huge",     defaultPlayers: 12, maxPlayers: 16, tiles: 9072 }
};

// Density analysis: how crowded is the map?
function getMapDensity(size, playerCount) {
  const info = MAP_SIZES[size];
  if (!info) return { level: "normal", tilesPerPlayer: 500 };
  const tpp = Math.round(info.tiles / playerCount);
  let level, desc;
  if (tpp < 350) {
    level = "cramped";
    desc = `Very crowded (${tpp} tiles/player). Expect early conflict. Domination civs thrive, peaceful builders struggle. Prioritize military from turn 1.`;
  } else if (tpp < 500) {
    level = "tight";
    desc = `Tight map (${tpp} tiles/player). Limited expansion room. You'll likely border 2-3 civs early. Balance military defense with your victory plan.`;
  } else if (tpp < 700) {
    level = "normal";
    desc = `Standard density (${tpp} tiles/player). Room for 3-4 cities before bumping into neighbors. Balanced game — all victory types are viable.`;
  } else if (tpp < 1000) {
    level = "spacious";
    desc = `Spacious map (${tpp} tiles/player). Room to expand freely. Science and culture civs can boom. Less early aggression, but watch for mid-game attacks.`;
  } else {
    level = "empty";
    desc = `Very open map (${tpp} tiles/player). Tons of room. Settle aggressively — land is free. Late-game victories (science, culture) are favored. Domination is harder due to distance.`;
  }
  return { level, tilesPerPlayer: tpp, desc };
}

// Density-specific tips per victory type
const DENSITY_TIPS = {
  domination: {
    cramped: ["You're in your element — early rushes are devastating on cramped maps", "Your neighbors are close, scout and attack before they wall up", "Skip settlers early, take cities instead"],
    tight: ["Forward settle aggressively to claim key territory", "Keep 2-3 military units ready at all times", "Timing attacks in Classical/Medieval era are ideal"],
    normal: ["Standard domination approach — build 3-4 cities then attack", "Scout to find the weakest neighbor", "Pillage before capturing for maximum value"],
    spacious: ["Domination is harder — cities are far apart", "Build a strong economy first, then strike", "Consider cavalry-heavy armies for the distance"],
    empty: ["Domination is very difficult — too much ground to cover", "Focus on conquering your closest neighbor only", "Consider pivoting to a secondary victory type"]
  },
  science: {
    cramped: ["You WILL be attacked — walls in every city, no exceptions", "Delay Campus if you need military first", "Turtle up and out-tech your neighbors"],
    tight: ["Build walls early, then focus on Campus", "Keep a small defensive army while teching", "Trade routes to fund science"],
    normal: ["Standard science approach — Campus in every city", "Settle near mountains for adjacency", "You have time to build infrastructure"],
    spacious: ["Science paradise — settle wide for more Campuses", "You have room to breathe, focus on growth", "Build 6+ cities with Campuses"],
    empty: ["Settle as many cities as possible — each one gets a Campus", "Distance protects you from aggression", "You'll win the tech race with sheer city count"]
  },
  culture: {
    cramped: ["Culture victory is risky — you'll face military pressure", "Build walls and keep a standing army", "Focus on Great Works over tourism improvements"],
    tight: ["Defend your cities while building Theater Squares", "Great Works are safer than National Parks on tight maps", "Rock Bands are your late-game closer"],
    normal: ["Standard culture approach — Theater Squares and wonders", "Plan National Parks in safe interior cities", "Open borders for tourism bonus"],
    spacious: ["Great map for culture — room for National Parks and Seaside Resorts", "Settle coastal cities for Seaside Resorts", "Appeal management is easier with space"],
    empty: ["Settle diverse terrain for Open-Air Museum / tourism variety", "National Parks everywhere — you have the room", "Culture victory is very strong on open maps"]
  },
  religion: {
    cramped: ["Religious combat will be constant — bring Debater Apostles", "Your missionaries will get killed if unescorted", "Consider military escort for religious units"],
    tight: ["Spread religion to close neighbors first", "Inquisitors to defend, Apostles to attack", "Religious pressure is strong when cities are close"],
    normal: ["Standard religious approach — spread methodically", "Target one civ at a time", "Use trade routes to exert passive pressure"],
    spacious: ["Religion is harder — cities are far apart", "Focus on converting nearby civs first", "Missionaries need more movement to reach distant cities"],
    empty: ["Religious victory is very difficult — too many distant cities", "Consider focusing on your continent only", "You may need to pivot to a secondary victory"]
  },
  diplomacy: {
    cramped: ["Stay out of wars — let others fight", "Accumulate favor while neighbors weaken each other", "Win emergencies from others' aggression"],
    tight: ["Defensive posture — walls and alliances", "City-state suzerainty for favor", "Vote with the majority on unimportant proposals"],
    normal: ["Standard diplomacy approach — alliances and favor", "Compete for city-state suzerainty", "Win every emergency and competition"],
    spacious: ["Diplomacy works well — less conflict means more favor", "Build alliances with distant civs", "Focus on scored competitions"],
    empty: ["Diplomacy is strong — peaceful map means steady favor", "Maximize city-state relationships", "Carbon Recapture projects for late-game points"]
  }
};
