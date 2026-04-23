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

// Map characteristics — what terrain/features each map emphasizes
const MAP_CHARACTERISTICS = {
  pangaea:              { tags: ["land", "hills", "wide"], water: "low", desc: "One large landmass" },
  continents:           { tags: ["land", "coastal", "naval"], water: "medium", desc: "Multiple continents with ocean" },
  "continents-islands": { tags: ["coastal", "naval", "islands"], water: "medium-high", desc: "Continents plus islands" },
  "small-continents":   { tags: ["coastal", "naval"], water: "medium-high", desc: "Many medium landmasses" },
  fractal:              { tags: ["mixed", "coastal"], water: "variable", desc: "Unpredictable terrain" },
  archipelago:          { tags: ["naval", "coastal", "islands"], water: "high", desc: "Many small islands" },
  islands:              { tags: ["naval", "coastal", "islands"], water: "high", desc: "Island plates" },
  "inland-sea":         { tags: ["coastal", "land"], water: "medium", desc: "Central sea surrounded by land" },
  lakes:                { tags: ["land", "freshwater", "wide"], water: "low", desc: "Many lakes, lots of fresh water" },
  terra:                { tags: ["land", "coastal", "wide", "colonial"], water: "medium", desc: "One settled continent, one empty" },
  primordial:           { tags: ["volcanic", "jungle", "marsh"], water: "medium", desc: "Volcanic terrain with disasters" },
  "splintered-fractal": { tags: ["land", "chokepoints", "coastal"], water: "medium", desc: "Fragmented with land bridges" },
  "seven-seas":         { tags: ["coastal", "naval", "mixed"], water: "medium-high", desc: "Multiple small seas" },
  "tilted-axis":        { tags: ["tundra", "desert", "extreme"], water: "low", desc: "Extreme climate zones" },
  shuffle:              { tags: ["mixed"], water: "variable", desc: "Random generation" }
};

// Leader map affinities — what terrain/features benefit each leader
const LEADER_MAP_AFFINITY = {
  "alexander":            { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Domination needs land borders. Water maps slow conquest." },
  "basil":                { strong: ["land", "mixed"], weak: ["islands"], note: "Needs land neighbors to spread religion then attack. Naval maps limit cavalry." },
  "cleopatra":            { strong: ["freshwater", "land"], weak: [], note: "Rivers everywhere = Iteru production bonus on everything." },
  "cyrus":                { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Surprise War blitz needs land borders. Water maps negate movement bonus." },
  "frederick":            { strong: ["land", "wide", "hills"], weak: [], note: "Extra district works everywhere. Hansa adjacency from rivers/aqueducts." },
  "gandhi":               { strong: ["land", "mixed"], weak: [], note: "Stepwells need flat land. Works on most maps." },
  "gilgamesh":            { strong: ["land", "freshwater"], weak: ["naval", "islands"], note: "Ziggurats need rivers. War-Cart rush needs land neighbors." },
  "hojo":                 { strong: ["coastal", "islands", "naval"], weak: [], note: "Coastal combat bonus + half-price districts. Excellent on water maps." },
  "jadwiga":              { strong: ["land", "mixed"], weak: [], note: "Culture bombs work everywhere. Holy Site adjacency from districts." },
  "john-curtin":          { strong: ["coastal", "hills"], weak: [], note: "Appeal adjacency loves coast + mountains. Coastal housing bonus." },
  "kupe":                 { strong: ["naval", "islands", "coastal"], weak: ["land"], note: "Ocean start is perfect for water maps. Struggles on Pangaea." },
  "lady-six-sky":         { strong: ["land"], weak: ["wide", "islands"], note: "Compact empire — needs tight settling. Large maps spread cities too far." },
  "mansa-musa":           { strong: ["desert", "extreme"], weak: ["tundra"], note: "Desert faith is massive. Tilted Axis is ideal. Tundra is terrible." },
  "montezuma":            { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Eagle Warrior rush needs land neighbors. Luxury diversity helps." },
  "pedro":                { strong: ["jungle"], weak: ["tundra", "desert"], note: "Rainforest adjacency is everything. Needs jungle-heavy maps." },
  "peter":                { strong: ["tundra", "extreme"], weak: ["desert"], note: "Tundra faith + production. Tilted Axis is Peter's dream map." },
  "poundmaker":           { strong: ["land", "wide"], weak: [], note: "Trade routes grab territory. Wide maps give room to expand." },
  "saladin":              { strong: ["desert", "mixed"], weak: [], note: "Guaranteed Prophet works everywhere. Desert starts boost Madrasa." },
  "seondeok":             { strong: ["hills", "land"], weak: [], note: "Seowon away from districts + mines for science. Hills maps are ideal." },
  "simon-bolivar":        { strong: ["land", "wide"], weak: ["naval", "islands"], note: "+1 movement is best on land. Water maps waste the movement bonus." },
  "victoria":             { strong: ["coastal", "colonial", "naval"], weak: ["land"], note: "Foreign continent bonuses. Continents/Terra maps are ideal." },
  "wilhelmina":           { strong: ["freshwater", "coastal"], weak: [], note: "River adjacency for districts. Polder needs specific coast tiles." },
  "pachacuti":            { strong: ["hills"], weak: ["islands", "naval"], note: "Mountains are everything. Terrace Farms scale with mountain adjacency." },
  "gorgo":                { strong: ["land", "hills"], weak: [], note: "Culture from kills works everywhere. Acropolis needs hills." },
  "pericles":             { strong: ["mixed"], weak: [], note: "City-state suzerainty works on any map." },
  "ambiorix":             { strong: ["land", "hills"], weak: ["naval", "islands"], note: "Adjacent unit bonus needs land combat. Oppidum from quarries/strategic resources." },
  "amanitore":            { strong: ["desert"], weak: ["tundra"], note: "Nubian Pyramids need desert tiles. Desert starts are essential." },
  "ba-trieu":             { strong: ["jungle", "marsh"], weak: ["desert", "tundra"], note: "Districts only on features. Needs jungle/marsh/woods-heavy maps." },
  "catherine-black-queen":{ strong: ["mixed"], weak: [], note: "Spy network works everywhere. Wonder tourism from any map." },
  "catherine-magnificence":{ strong: ["mixed"], weak: [], note: "Luxury culture works everywhere. Wonder tourism from any map." },
  "chandragupta":         { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Territorial Expansion war needs land borders." },
  "dido":                 { strong: ["coastal", "naval", "colonial"], weak: ["land"], note: "Cothon + settler production. Capital moving. Best on water/continents maps." },
  "eleanor-england":      { strong: ["land"], weak: ["islands"], note: "Loyalty pressure needs adjacent cities. Islands spread cities too far." },
  "eleanor-france":       { strong: ["land"], weak: ["islands"], note: "Loyalty pressure needs adjacent cities. Wonder tourism helps." },
  "genghis-khan":         { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Cavalry dominance needs open land. Trade routes for visibility." },
  "gitarja":              { strong: ["naval", "coastal", "islands"], weak: ["land"], note: "Faith-buy navy + Kampung on coast. Water maps are ideal." },
  "hammurabi":            { strong: ["mixed"], weak: [], note: "Eureka completion works everywhere. Adapt to whatever terrain you get." },
  "harald":               { strong: ["naval", "coastal"], weak: ["land"], note: "Coastal raids + naval production. Needs water to function." },
  "harald-varangian":     { strong: ["naval", "coastal"], weak: ["land"], note: "Pillage yields from coastal raids. Water maps are essential." },
  "jayavarman":           { strong: ["freshwater", "land"], weak: [], note: "Aqueducts + Holy Sites. Rivers and mountains are key." },
  "joao":                 { strong: ["coastal", "naval"], weak: ["land"], note: "Trade routes to coastal cities only. Harbors are mandatory." },
  "julius-caesar":        { strong: ["land", "wide"], weak: ["naval"], note: "Conquest gold + roads. Land maps for Legion rush." },
  "kublai-china":         { strong: ["mixed"], weak: [], note: "Trade post bonuses work everywhere. 60% Eurekas are universal." },
  "kublai-mongolia":      { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Trade routes + cavalry. Needs land for Keshig." },
  "kristina":             { strong: ["mixed"], weak: [], note: "Auto-theming works everywhere. Open-Air Museum likes terrain variety." },
  "lautaro":              { strong: ["land", "hills"], weak: [], note: "Governor combat bonus + Chemamull appeal. Hills help." },
  "ludwig":               { strong: ["mixed"], weak: [], note: "Wonder building works everywhere. Hansa production helps." },
  "menelik":              { strong: ["hills"], weak: ["islands"], note: "Rock-Hewn Church on hills. Oromo Cavalry +10 on hills. Hill-heavy maps are ideal." },
  "mvemba":               { strong: ["jungle"], weak: ["desert", "tundra"], note: "Mbanza needs rainforest/woods. Great Works need population from food." },
  "nzinga-mbande":        { strong: ["jungle"], weak: ["desert", "tundra"], note: "Mbanza needs rainforest/woods. Governor bonuses per district." },
  "philip":               { strong: ["land", "colonial"], weak: [], note: "Conquistador + religion. Mission science on foreign continents." },
  "qin-shi-huang":        { strong: ["mixed"], weak: [], note: "Builder wonder rushing works everywhere. Great Wall on borders." },
  "qin-shi-huang-unifier":{ strong: ["mixed"], weak: [], note: "Alliance combat works everywhere. 60% Eurekas are universal." },
  "ramses":               { strong: ["freshwater", "land"], weak: [], note: "Wonder rushing + Iteru river production. Settle along rivers." },
  "robert-bruce":         { strong: ["mixed"], weak: [], note: "Amenity bonuses work everywhere. Golf Course for amenities." },
  "saladin-vizier":       { strong: ["desert", "mixed"], weak: [], note: "Guaranteed Prophet + building production. Desert starts help." },
  "sejong":               { strong: ["hills", "land"], weak: [], note: "Seowon + mines. Governor science per district. Hills maps ideal." },
  "shaka":                { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Corps/Armies need land combat. Impi flanking needs open terrain." },
  "suleiman-kanuni":      { strong: ["land", "wide"], weak: ["islands"], note: "Siege bonuses + conquered city loyalty. Land maps for conquest." },
  "suleiman-muhtesem":    { strong: ["land", "wide"], weak: ["islands"], note: "Conquest snowball needs land neighbors." },
  "sundiata":             { strong: ["desert", "extreme"], weak: ["tundra"], note: "Desert faith + Governor bonuses. Similar to Mansa Musa." },
  "tamar":                { strong: ["mixed"], weak: [], note: "City-state envoys work everywhere. Tsikhe faith + tourism." },
  "teddy-bull-moose":     { strong: ["coastal", "hills"], weak: [], note: "Appeal matters — coast, forests, mountains. National Parks need high appeal." },
  "teddy-rough-rider":    { strong: ["land", "hills"], weak: [], note: "Home continent combat. Rough Rider on hills." },
  "tokugawa":             { strong: ["land", "mixed"], weak: [], note: "Domestic trade focus. Meiji adjacency works everywhere." },
  "tomyris":              { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Double cavalry needs open land. Saka Horse Archer rush needs neighbors." },
  "trajan":               { strong: ["land", "wide"], weak: [], note: "Free Monuments + roads. Wide play on any land map." },
  "wilfrid-laurier":      { strong: ["tundra", "extreme"], weak: ["desert"], note: "Tundra farming + cheap tundra tiles. Tilted Axis is perfect." },
  "wu-zetian":            { strong: ["mixed"], weak: [], note: "Spy bonuses work everywhere. 60% Eurekas are universal." },
  "yongle":               { strong: ["mixed"], weak: [], note: "Project yields + trade routes work everywhere." },
  "theodora":             { strong: ["land", "mixed"], weak: ["islands"], note: "Any belief choice. Needs land neighbors for religion + cavalry." },
  "nader-shah":           { strong: ["land", "wide"], weak: ["naval", "islands"], note: "Conquest snowball needs land borders. Immortals are land units." },
  "elizabeth":            { strong: ["coastal", "naval"], weak: [], note: "City-state trade gold. British Museum for artifacts." },
  "abraham-lincoln":      { strong: ["land", "mixed"], weak: [], note: "Melee bonus + Industrial Zone free units. Works on most maps." },
  "matthias-corvinus":    { strong: ["freshwater", "mixed"], weak: [], note: "River production + city-state levies. Rivers are key." },
  "cleopatra-ptolemaic":  { strong: ["freshwater", "land"], weak: [], note: "Alliance science + Iteru river production. Rivers and allies are key." },
  "victoria-steam":       { strong: ["land", "mixed"], weak: [], note: "Industrial production works everywhere. Powered buildings are universal." }
};

// Generate leader-specific map advice
function getLeaderMapAdvice(leaderId, mapType) {
  const affinity = LEADER_MAP_AFFINITY[leaderId];
  const mapChars = MAP_CHARACTERISTICS[mapType];
  if (!affinity || !mapChars) return null;

  const mapTags = mapChars.tags;
  const strongMatches = affinity.strong.filter(t => mapTags.includes(t));
  const weakMatches = affinity.weak.filter(t => mapTags.includes(t));

  let rating, advice;
  if (weakMatches.length > 0 && strongMatches.length === 0) {
    rating = "poor";
    advice = "This map type works against your strengths. " + affinity.note;
  } else if (weakMatches.length > 0) {
    rating = "mixed";
    advice = "Mixed fit — some advantages but also challenges. " + affinity.note;
  } else if (strongMatches.length >= 2) {
    rating = "excellent";
    advice = "Great map for this leader. " + affinity.note;
  } else if (strongMatches.length === 1) {
    rating = "good";
    advice = "Solid map choice. " + affinity.note;
  } else {
    rating = "neutral";
    advice = affinity.note;
  }

  return { rating, advice, strongMatches, weakMatches };
}

// Map fairness analysis for multiplayer
function analyzeMapFairness(players, selectedMap) {
  const maps = Object.keys(MAP_CHARACTERISTICS);
  
  function scorePlayerOnMap(leader, mapType) {
    const affinity = LEADER_MAP_AFFINITY[leader.id];
    const mapChars = MAP_CHARACTERISTICS[mapType];
    if (!affinity || !mapChars) return 50; // neutral
    const mapTags = mapChars.tags;
    const strong = affinity.strong.filter(t => mapTags.includes(t)).length;
    const weak = affinity.weak.filter(t => mapTags.includes(t)).length;
    return 50 + (strong * 15) - (weak * 20);
  }

  function fairnessForMap(mapType) {
    const scores = players.map(p => scorePlayerOnMap(p.leader, mapType));
    const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
    const spread = Math.max(...scores) - Math.min(...scores);
    return { mapType, scores, avg, spread, label: MAP_CHARACTERISTICS[mapType]?.desc || mapType };
  }

  const selected = fairnessForMap(selectedMap);
  const alternatives = maps
    .filter(m => m !== selectedMap && m !== 'shuffle')
    .map(fairnessForMap)
    .sort((a, b) => a.spread - b.spread);

  let rating;
  if (selected.spread <= 15) rating = 'fair';
  else if (selected.spread <= 30) rating = 'slight-edge';
  else if (selected.spread <= 45) rating = 'uneven';
  else rating = 'unfair';

  const bestAlternatives = alternatives.filter(a => a.spread < selected.spread).slice(0, 3);

  return { selected, rating, bestAlternatives, players: players.map((p, i) => ({
    name: p.leader.name,
    score: selected.scores[i]
  }))};
}

// Game mode strategy tips
const GAME_MODE_TIPS = {
  "barbarian-clans": {
    name: "Barbarian Clans",
    general: [
      "Barbarian outposts can be bribed, hired from, or converted into city-states",
      "Don't auto-clear every outpost — some are worth keeping for hire or conversion",
      "Hiring barbarian units is cheap early game military",
      "Converting an outpost to a city-state gives you a new suzerain target",
      "Outposts near your cities can be bribed to stop raiding while you build up"
    ],
    leaderSynergies: {
      domination: "Hire barbarian units for cheap early military. Clear outposts you don't need for gold.",
      science: "Bribe nearby outposts to leave you alone while you focus on Campuses. Convert distant ones to city-states for suzerainty bonuses.",
      culture: "Convert outposts to city-states — more city-states means more envoy targets and potential cultural bonuses.",
      religion: "Convert outposts to city-states, then spread your religion to them for Taxis/religious bonuses.",
      diplomacy: "Convert outposts to city-states for more suzerainty opportunities and Diplomatic Favor."
    }
  },
  "secret-societies": {
    name: "Secret Societies",
    general: [
      "Join a society ASAP — the earlier you join, the more governor promotions you get",
      "You can only join ONE society per game — choose based on your victory path"
    ],
    societies: {
      "Sanguine Pact": {
        bestFor: ["domination"],
        tips: [
          "Vampires are unique units that gain Combat Strength permanently from kills",
          "Vampires heal fully when adjacent to a Vampire Castle",
          "Vampire Castles provide yields based on adjacent tiles — place them well",
          "You get 1 Vampire per era — protect them, they don't come back if killed",
          "Vampires can teleport between Vampire Castles"
        ]
      },
      "Hermetic Order": {
        bestFor: ["science", "culture"],
        tips: [
          "Ley Lines provide adjacency bonus to ALL specialty districts",
          "Settle cities where Ley Lines are near planned district clusters",
          "Alchemical Society building (Industrial Zone) boosts Great People generation",
          "Ley Lines are revealed when you join — scout for them before placing districts",
          "Late game: Ley Lines provide Tourism after researching certain techs"
        ]
      },
      "Voidsingers": {
        bestFor: ["religion"],
        tips: [
          "Old God Obelisk (Monument replacement) gives Faith from population",
          "Cultists can be purchased with Faith and spread loyalty pressure to enemy cities",
          "Dark Summoning building gives Faith and Great Prophet points",
          "Massive faith generation scales with city population — grow tall",
          "Cultists don't consume charges — they can repeatedly pressure cities"
        ]
      },
      "Owls of Minerva": {
        bestFor: ["diplomacy", "culture"],
        tips: [
          "Gilded Vault (Bank replacement) gives extra Trade Route capacity",
          "Extra Economic policy slot from the first Governor promotion",
          "Trade routes to city-states grant an Envoy when completed",
          "War Department building gives Gold and Production",
          "Best for gold generation and city-state suzerainty"
        ]
      }
    },
    leaderSynergies: {
      domination: "Sanguine Pact",
      science: "Hermetic Order",
      culture: "Hermetic Order",
      religion: "Voidsingers",
      diplomacy: "Owls of Minerva"
    }
  },
  "monopolies": {
    name: "Monopolies & Corporations",
    general: [
      "Control all copies of a luxury resource to create a Monopoly (+5 Tourism per resource type)",
      "Build Industries and Corporations on improved luxury resources for massive yields",
      "Industries provide yields to the city; Corporations extend yields to nearby cities",
      "Great Merchants can create Products that boost Corporation yields further",
      "Monopolies give Tourism — this can be a culture victory shortcut",
      "In multiplayer, trading away luxuries prevents you from getting monopolies — be strategic"
    ],
    leaderSynergies: {
      domination: "Conquer cities to control all copies of luxury resources. Monopoly tourism is a backup win condition.",
      science: "Corporation yields boost production for space projects. Not primary focus but helpful.",
      culture: "Monopolies give +5 Tourism per type — this is HUGE for culture victory. Prioritize controlling all copies of luxuries.",
      religion: "Faith from Corporation yields can fund religious units. Not primary synergy.",
      diplomacy: "Corporation gold helps buy Diplomatic Favor. Monopoly tourism generates favor with Canada's ability."
    }
  }
};

// Game speed strategy adjustments
const GAME_SPEED_DATA = {
  online:   { label: "Online",   prodMod: 0.5,  turnScale: 0.5 },
  quick:    { label: "Quick",    prodMod: 0.67, turnScale: 0.67 },
  standard: { label: "Standard", prodMod: 1.0,  turnScale: 1.0 },
  epic:     { label: "Epic",     prodMod: 1.5,  turnScale: 1.5 },
  marathon: { label: "Marathon", prodMod: 3.0,  turnScale: 3.0 }
};

const GAME_SPEED_TIPS = {
  online: {
    general: [
      "Everything is faster — timing attacks hit before opponents can react",
      "Units are cheap relative to their combat strength, making military very efficient",
      "BBG competitive play is balanced around Online speed",
      "Wonders are risky — someone else may finish first due to fast production"
    ],
    domination: "Domination is strongest on Online speed. Units are cheap, wars are fast, and timing attacks are devastating.",
    science: "Science victory is harder to reach — games often end before the space race. Build military as insurance.",
    culture: "Culture victory is fast but so is everyone else. Rock Bands and Great Works matter more than long-term tourism.",
    religion: "Religious spread is fast. Rush your religion and spread aggressively before others can counter.",
    diplomacy: "Games may end before enough World Congress sessions. Focus on emergencies and competitions."
  },
  quick: {
    general: [
      "Slightly faster than Standard — timing attacks are a bit stronger",
      "Good balance between military and builder strategies",
      "Wonders are still competitive but more achievable"
    ],
    domination: "Military is efficient. Classical and Medieval timing attacks are strong.",
    science: "Science victory is viable but keep a military deterrent.",
    culture: "Culture plays normally, slightly faster pace.",
    religion: "Religion spreads at a good pace. Standard approach works.",
    diplomacy: "Standard diplomatic approach works well."
  },
  standard: {
    general: [
      "The baseline speed — all strategies are balanced",
      "Most guides and tier lists assume Standard speed"
    ],
    domination: "Standard domination approach — all timing windows work as expected.",
    science: "Science victory is well-paced. Campus adjacency and Research Labs are key.",
    culture: "Culture victory has time to develop tourism engines.",
    religion: "Religion has a natural pace for spreading and defending.",
    diplomacy: "Full diplomatic game with multiple World Congress sessions."
  },
  epic: {
    general: [
      "Units are expensive — losing an army is devastating",
      "Walls and defensive structures are much more valuable",
      "Builder strategies (science, culture) have more time to develop",
      "Timing attacks are weaker because replacement units take longer to build",
      "Great People are more impactful since there are more turns to use them"
    ],
    domination: "Domination is harder — units are expensive and wars drag out. Pillaging is more important for sustaining attacks.",
    science: "Science victory is strong. You have more turns to build infrastructure and the space race is less rushed.",
    culture: "Culture victory benefits from the longer game. National Parks and Seaside Resorts have more time to generate tourism.",
    religion: "Religion has more time to spread but also more time for opponents to counter. Inquisitor defense is critical.",
    diplomacy: "More World Congress sessions means more chances for Diplomatic Victory Points. Favor management is key."
  },
  marathon: {
    general: [
      "Units are extremely expensive — every unit matters",
      "Wars can last dozens of turns. Attrition and pillaging are everything",
      "Peaceful victory types are strongly favored",
      "Walls are essential — they're relatively cheap compared to units",
      "Improvements and districts take many turns — plan ahead carefully",
      "Healing and unit maintenance become major strategic factors"
    ],
    domination: "Domination is very difficult. Units cost 3x and wars are grueling. Only attempt with strong military civs.",
    science: "Science victory is very strong. Tons of time to build Campuses and research. The space race is a long but steady path.",
    culture: "Culture victory thrives on Marathon. Tourism engines have maximum time to compound.",
    religion: "Religion is a marathon (literally). Slow spread but also slow counters. Patience wins.",
    diplomacy: "Many World Congress sessions. Diplomatic Favor accumulation over time is powerful."
  }
};

function getGameSpeedTips(speed, victory) {
  const data = GAME_SPEED_TIPS[speed];
  if (!data || speed === 'standard') return null;
  return {
    label: GAME_SPEED_DATA[speed]?.label || speed,
    general: data.general,
    victoryTip: data[victory] || ''
  };
}
