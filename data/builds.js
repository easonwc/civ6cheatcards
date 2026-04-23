// Build order templates per victory type — organized by era
const BUILD_ORDERS = {
  domination: {
    eras: {
      ancient: { focus: "Military foundation + early boosts", priorities: ["Scout — explore for barbarians and neighbors", "Slinger ×2 — Kill a unit with Slinger for Archery Eureka", "Kill 3 Barbarians — triggers Bronze Working Eureka", "Clear a Barbarian Encampment — triggers Military Tradition Inspiration", "Build a Quarry — triggers Masonry Eureka for Ancient Walls", "Settler — expand to strategic resources (Iron, Horses)", "Builder — improve Iron/Horses/Stone", "Monument — early culture for civics", "Slot Agoge policy — +50% Production toward melee and ranged units", "Build Ancient Walls in exposed cities"] },
      classical: { focus: "First timing attack", priorities: ["Build an Iron Mine — triggers Iron Working Eureka for Swordsman", "Encampment + Barracks/Stable — triggers Gunpowder Eureka chain", "Battering Ram or Siege Tower — essential for city attacks", "Iron Working → Swordsman — core attack unit", "Build a Pasture — triggers Horseback Riding Eureka", "2nd Settler if safe — expand while attacking", "Slot Conscription policy — -1 Gold maintenance per unit", "Target weakest neighbor — scout before committing", "Pillage improvements before capturing cities", "Build Ancient Walls in new cities"] },
      medieval: { focus: "Knight timing push", priorities: ["Armory — triggers Gunpowder Eureka", "Knights or Crossbowmen — key timing attack units", "Siege Tower for walled cities", "Terracotta Army wonder — free promotion for all land units", "Slot Professional Army — 50% upgrade discount", "Conquer nearest neighbor — chain city captures", "Pillage for yields before capturing", "Build 3 Mines — triggers Apprenticeship Eureka", "Commercial Hub for gold income", "Alhambra wonder — extra Military policy slot + free promotions"] },
      renaissance: { focus: "Consolidate and upgrade", priorities: ["Musketman upgrades — use Professional Army discount", "Niter stockpile — essential for gunpowder units", "Walls in all conquered cities", "Commercial Hubs for gold to fund upgrades", "Build an Aqueduct — triggers Military Engineering Eureka", "Venetian Arsenal wonder if naval map — doubles naval production", "Slot Lightning Warfare — +1 Movement for cavalry", "Maintain army while building economy", "Spy on opponents for intel", "Plan next conquest target"] },
      industrial: { focus: "Artillery and Corps", priorities: ["Military Academy — enables Corps/Army training", "Artillery — devastating siege unit", "Form Corps — combine experienced units", "Industrial Zone for production", "Build 3 Workshops — triggers Industrialization Eureka", "Coal Power Plant for production boost", "Upgrade to modern units as available", "Maintain gold income for upgrades", "Scout for next target", "Build walls in frontier cities"] },
      modern: { focus: "Mechanized warfare", priorities: ["Tanks and Infantry — core modern army", "Form Armies — combine Corps for maximum strength", "Bombers — air support for ground forces", "Oil stockpile for modern units", "Anti-air in defensive cities", "Continue conquering capitals", "Spy sabotage on science leaders", "Maintain production in core cities", "Upgrade remaining old units", "Push for remaining capitals"] },
      atomic: { focus: "Air superiority", priorities: ["Bombers + Fighter escorts", "Nuclear weapons if available", "Helicopter gunships for mobility", "Capture remaining capitals", "Anti-air defense in your cities", "Spy operations on opponents", "Maintain army replacements", "Push through final defenses"] },
      information: { focus: "Close it out", priorities: ["Modern Armor — strongest land unit", "Jet Bombers — strongest air unit", "Giant Death Robot if available", "Capture remaining capitals to win", "Prevent science civs from finishing space race", "Maximum military pressure on all fronts"] }
    }
    },
    policies: [{ name: "Agoge/Maneuver", why: "+50% Production toward melee/ranged (Agoge) or cavalry (Maneuver). Slot early for unit spam." }, { name: "Conscription", why: "-1 Gold maintenance per unit. Essential for large armies." }, { name: "Professional Army", why: "50% discount on unit upgrades. Save gold then mass-upgrade." }, { name: "Lightning Warfare", why: "+3 Movement for Great Generals, +1 for cavalry. Late-game blitz." }],
    wonders: [{ name: "Terracotta Army", why: "All current land units receive a promotion. Massive power spike for timing attacks." }, { name: "Alhambra", why: "Extra Military policy slot. All newly trained units get +1 promotion level." }, { name: "Venetian Arsenal", why: "Doubles naval unit production. Essential for naval domination maps." }],
    tips: ["Timing attacks are key — hit when you have a unit advantage", "Always bring siege units when attacking cities", "Pillage improvements for healing and yields", "In BBG, early aggression is riskier due to balance changes"]
  },
  science: {
    eras: {
      ancient: { focus: "Campus foundation + key boosts", priorities: ["Scout ×2 — meet a civilization for Writing Eureka", "Slinger — early defense", "Settle near Mountains — Campus adjacency is everything", "Campus (mountain adjacency) — your core district", "Builder — Build 3 Mines for Apprenticeship Eureka", "Slot God King — +1 Faith for early Pantheon", "Find a Natural Wonder — triggers Astrology Eureka", "Settler — 2nd city with mountain access", "Monument — culture for early civics", "Meet 3 city-states — triggers Political Philosophy Inspiration"] },
      classical: { focus: "Library and expand", priorities: ["Library in all Campuses — core science building", "2nd Campus in 2nd city", "Build 2 Campus districts — triggers Recorded History Inspiration", "Slot Natural Philosophy — +100% Campus adjacency bonus", "Commercial Hub — gold for infrastructure", "Walls in exposed cities — protect your investment", "Settler for 3rd city with Campus potential", "Build a Quarry — triggers Masonry Eureka for walls", "Earn a Great Scientist — triggers Education Eureka", "Trade routes to feed science cities"] },
      medieval: { focus: "University rush", priorities: ["University in all cities — massive science boost", "Slot Rationalism — +100% science from Campus buildings", "Industrial Zone — production for late game", "Build 3 Mines if not done — Apprenticeship Eureka", "Build a Wonder — triggers Drama and Poetry Inspiration", "Medieval Faires civic — unlocks key policies", "Crossbowmen for defense if threatened", "Great Library wonder — boosts Ancient/Classical techs", "Trade routes to science cities", "Grow cities for more district slots"] },
      renaissance: { focus: "Research Lab preparation", priorities: ["Oxford University wonder — +20% Science + 2 free techs", "Complete a Research Alliance — triggers Chemistry Eureka", "More cities with Campuses — wide science empire", "Banking for gold income", "Printing tech — unlocked by 2 Universities", "Renaissance Walls in all cities", "Counter-spy setup for later", "Kilwa Kisiwani wonder — +15% yields per suzerain type", "Build 2 Universities — triggers Printing Eureka", "Plan Spaceport city location"] },
      industrial: { focus: "Research Labs + Spaceport prep", priorities: ["Research Lab in all cities — critical science building", "Spaceport site prep — high production city", "Coal Power Plant — production boost", "Ruhr Valley wonder — +20% Production + Mine/Quarry bonus", "Build 3 Workshops — triggers Industrialization Eureka", "Slot International Space Agency — +5% Science per suzerain", "Counter-spy your future Spaceport district", "Maintain defensive military as deterrent", "Trade routes for gold and production", "Grow Spaceport city population"] },
      modern: { focus: "Space Race begins", priorities: ["Spaceport — your victory building", "Launch Earth Satellite — first space project", "Launch Moon Landing", "Rocketry tech — boosted by Great Scientist or Spy", "Counter-spy on Spaceport — opponents will sabotage", "Anti-air units near Spaceport city", "Continue Research Lab construction", "Trade routes to Spaceport city", "Maintain military deterrent", "Rush remaining space techs"] },
      atomic: { focus: "Space projects sprint", priorities: ["Launch Mars Colony modules", "Exoplanet Expedition project", "Protect Spaceport with spies and military", "Spy sabotage on rival Spaceports", "Maximum science output — all policies toward science", "Defend against invasion attempts", "Complete remaining space projects", "Rush any missing techs"] },
      information: { focus: "Final push", priorities: ["Complete remaining space projects", "Laser Station project", "Counter-spy Spaceport at all times", "Maximum production in Spaceport city", "Defend against last-ditch attacks"] }
    }
    },
    policies: [{ name: "Natural Philosophy", why: "+100% Campus adjacency bonus. Double your science from well-placed Campuses." }, { name: "Rationalism", why: "+100% science from Campus buildings. Massive mid-late boost." }, { name: "International Space Agency", why: "+5% Science per city-state suzerain." }],
    wonders: [{ name: "Great Library", why: "Boosts all Ancient/Classical techs. Huge early science acceleration." }, { name: "Oxford University", why: "+20% Science in this city. 2 free techs. Build in your best Campus city." }, { name: "Kilwa Kisiwani", why: "+15% yields in all cities for each type of city-state you are suzerain of." }],
    tips: ["Campus adjacency is critical — plan city placement around mountains", "Trade routes should feed your science cities", "Rush Spaceport and start projects ASAP", "In BBG, science victory is slightly slower — plan accordingly"]
  },
  culture: {
    eras: {
      ancient: { focus: "Early culture + wonder foundation", priorities: ["Scout — explore for Natural Wonders and city-states", "Monument — early culture lead", "Slinger — basic defense", "Found a Pantheon — triggers Mysticism Inspiration", "Settler — expand to high-appeal locations", "Builder — improve tiles for appeal", "Build a Wonder — triggers Drama and Poetry Inspiration", "Holy Site or Theater Square — first specialty district", "Meet 3 city-states — triggers Political Philosophy Inspiration", "Slot God King — +1 Faith for Pantheon"] },
      classical: { focus: "Theater Squares + Oracle", priorities: ["Theater Square — your core district", "Amphitheater — Great Work slots", "Oracle wonder — -25% Great People patronage cost, +2 GP points", "2nd city Theater Square", "Build 2 Campus districts — triggers Recorded History Inspiration", "Slot Inspiration policy — +2 Great Person points from districts", "Earn a Great Artist — triggers Humanism Eureka", "Walls for protection", "Trade routes for gold", "Grow cities for more districts"] },
      medieval: { focus: "Great Works collection", priorities: ["Art Museum or Archaeological Museum — Great Work storage", "Bolshoi Theatre wonder — 2 free civics + Great Work slots", "Great People generation — fill every slot", "Entertainment Complex for amenities", "Build a Wonder — triggers Flight Eureka chain", "Earn 3 Great People — triggers The Enlightenment Inspiration", "Slot Heritage Tourism when available — +100% Art/Artifact Tourism", "Crossbowmen for defense", "Trade routes to cultural city-states", "Plan National Park locations for later"] },
      renaissance: { focus: "Wonder tourism engine", priorities: ["Key wonders for Great Work slots", "Exploration civic for Museum theming", "Have a Themed Museum — triggers Cultural Heritage Inspiration", "Cristo Redentor wonder — full appeal Seaside Resorts", "Build an Archaeological Museum — triggers Natural History Inspiration", "Archaeologists — dig up artifacts", "Eiffel Tower wonder — +2 Appeal empire-wide", "Open borders with everyone — +25% tourism", "Slot Heritage Tourism — +100% Art/Artifact Tourism", "Plan Seaside Resort locations"] },
      industrial: { focus: "Tourism acceleration", priorities: ["Broadcast Center — Tourism from Great Works of Music", "National Parks in high-appeal interior cities", "Seaside Resorts on coast — Tourism from appeal", "Flight tech — unlocks improvement Tourism", "Eiffel Tower if not built — +2 Appeal everywhere", "Cristo Redentor if not built — full Seaside Resort Tourism", "Slot Online Communities — +50% Tourism from Trade Routes", "Archaeologists for remaining artifacts", "Rock Bands when available", "Trade routes to highest domestic tourism civ"] },
      modern: { focus: "Tourism pressure", priorities: ["More National Parks and Seaside Resorts", "Rock Bands — target civ with highest domestic tourism", "Film Studio if America — Tourism pressure bonus", "Online Communities policy — +50% Trade Route Tourism", "Open borders with all civs", "Continue Great People generation", "Defend against military pressure", "Trade routes to tourism targets"] },
      atomic: { focus: "Close it out", priorities: ["Rock Bands — your late-game closer", "Heritage Tourism policy — +100% Art/Artifact Tourism", "Target highest domestic tourism civ with Rock Bands", "Maintain open borders", "Defend Great Works from conquest", "Maximum tourism output"] },
      information: { focus: "Win", priorities: ["Online Communities — +50% Trade Route Tourism", "More Rock Bands", "Prevent opponents from declaring war on you", "Maximum tourism pressure on remaining holdouts"] }
    }
    },
    policies: [{ name: "Inspiration", why: "+2 Great Person points from all districts. Accelerates Great People generation." }, { name: "Heritage Tourism", why: "+100% Tourism from Great Works of Art and Artifacts." }, { name: "Online Communities", why: "+50% Tourism from Trade Routes." }],
    wonders: [{ name: "Oracle", why: "Patronage of Great People costs 25% less Faith. +2 Great Person points from districts." }, { name: "Bolshoi Theatre", why: "2 free civics. 2 Great Work of Writing slots. Accelerates civic tree." }, { name: "Cristo Redentor", why: "Seaside Resorts provide Tourism from their full appeal instead of half. Religious Tourism is not reduced." }, { name: "Eiffel Tower", why: "+2 Appeal to all tiles in your empire. Enables more National Parks and Seaside Resorts." }],
    tips: ["Great Works are essential — fill every slot", "Tourism from National Parks and Seaside Resorts wins late game", "Open borders with everyone for +25% tourism", "In BBG, culture victory requires more active tourism generation"]
  },
  religion: {
    eras: {
      ancient: { focus: "Found religion ASAP + key boosts", priorities: ["Scout — Find a Natural Wonder for Astrology Eureka", "Slinger — basic defense", "Holy Site — your core district, place near mountains", "Shrine — +1 Great Prophet point", "Slot God King — +1 Faith for early Pantheon", "Found a Pantheon — triggers Mysticism Inspiration", "Build a Quarry — triggers Masonry Eureka for walls", "Settler — 2nd city for 2nd Holy Site", "Builder — improve resources", "Stonehenge wonder — free Great Prophet (risky but huge if you get it)"] },
      classical: { focus: "Establish religion", priorities: ["Earn Great Prophet — Found Religion with strong beliefs", "Found a Religion — triggers Theology Inspiration", "Temple in Holy Site — enables Missionary/Apostle purchases", "2nd Holy Site in 2nd city", "Slot Scripture — +100% Holy Site adjacency bonus", "Walls in all cities — protect your religious investment", "Mahabodhi Temple wonder — 2 free Apostles", "Build 2 Campus districts — stay relevant in science", "Trade routes for gold income", "Begin spreading to nearest neighbor"] },
      medieval: { focus: "Spread aggressively", priorities: ["Missionaries ×3+ — spread to nearby civs", "Worship Building — unlocks powerful belief bonuses", "Apostles with Debater promotion — win theological combat", "Hagia Sophia wonder — +1 spread charge on all religious units", "Slot Simultaneum — +2 Faith from all Holy Site buildings", "Have 6 cities following your religion — triggers Reformed Church Inspiration", "Inquisitors for defense — cheaper than Apostles", "Mont St. Michel wonder — Apostles gain Martyr ability", "Military escort for missionaries if needed", "Target one civ at a time for conversion"] },
      renaissance: { focus: "Theological warfare", priorities: ["Adopt Theocracy government — faith-purchase units, +5 Religious Strength", "Mass Apostle purchases — overwhelm opponents", "Inquisitor defense network — protect your cities", "Slot Theocracy — faith-purchase land units for military backup", "Continue spreading to unconverted civs", "Defend against military aggression", "Trade routes for passive religious pressure", "Build walls in frontier cities", "Maintain faith generation", "Target Holy Cities for maximum Taxis/belief impact"] },
      industrial: { focus: "Convert remaining civs", priorities: ["Mass Apostle purchases — push for final conversions", "Inquisitor defense in every city", "Faith generation buildings in all Holy Sites", "Military escort for missionaries in hostile territory", "Target unconverted capitals", "Defend against counter-religion pushes", "Maintain economy behind religious effort"] },
      modern: { focus: "Mop up holdouts", priorities: ["Target remaining unconverted capitals", "Defend against enemy Inquisitors", "Military escort for missionaries", "Maintain Inquisitor defense network", "Continue faith generation"] },
      atomic: { focus: "Defend your religion", priorities: ["Inquisitors in every city", "Prevent enemy religious flips", "Counter any late Apostle pushes", "Maintain majority in all converted civs"] },
      information: { focus: "Maintain majority", priorities: ["Keep majority in all civs", "Counter any late religious pushes", "Inquisitor defense"] }
    }
    },
    policies: [{ name: "God King", why: "+1 Faith and +1 Gold from Palace. Slot immediately for early Pantheon." }, { name: "Scripture", why: "+100% Holy Site adjacency bonus. Double your faith." }, { name: "Simultaneum", why: "+2 Faith from all Holy Site buildings. Stacks across cities." }, { name: "Theocracy", why: "Government: faith-purchase land units, +5 Religious Strength in theological combat." }],
    wonders: [{ name: "Stonehenge", why: "Grants a free Great Prophet. Found your religion without competing for Prophet points." }, { name: "Mahabodhi Temple", why: "2 free Apostles. Jumpstarts your religious spread." }, { name: "Hagia Sophia", why: "Missionaries and Apostles get +1 spread charge. Huge efficiency boost." }, { name: "Mont St. Michel", why: "All Apostles gain the Martyr ability. Dying Apostles create Relics for tourism." }],
    tips: ["Found your religion ASAP — beliefs get taken", "Apostle promotions matter — Debater for theological combat", "Defend your religion with Inquisitors", "In BBG, religious combat is more balanced — plan apostle fights carefully"]
  },
  diplomacy: {
    eras: {
      ancient: { focus: "Meet everyone + early envoys", priorities: ["Scout ×2 — meet civilizations and city-states", "Meet 3 city-states — triggers Political Philosophy Inspiration", "Monument — culture for early civics", "Settler — expand for more territory", "Builder — improve tiles", "Slot God King — +1 Faith for Pantheon", "Grow a city to 6 Population — triggers Early Empire Inspiration", "Build a Quarry — triggers Masonry Eureka for walls", "Send envoys to city-states — start building suzerainty", "Slot Charismatic Leader — +2 Influence points per turn"] },
      classical: { focus: "Government + alliances", priorities: ["Government Plaza — your diplomatic hub", "Political Philosophy civic — first government", "First alliances with neighbors — start building Alliance Points", "Commercial Hub — gold for economy", "Walls in all cities — defense while playing peacefully", "Slot Charismatic Leader — faster envoy generation", "Build any district — triggers State Workforce Inspiration", "Trade routes to allies and city-states", "Earn envoys from city-state quests", "Potala Palace wonder — +1 Diplomatic policy slot"] },
      medieval: { focus: "City-state suzerainty + favor", priorities: ["Envoy generation — become suzerain of 2-3 city-states", "Have an alliance — triggers Diplomatic Service Inspiration", "Diplomatic Service civic — unlocks Diplomatic Quarter", "Level 2 alliances — deeper cooperation", "Slot Containment — +3 Envoys to contested city-states", "Build 2 Markets — triggers Guilds Inspiration", "Kilwa Kisiwani wonder — +15% yields per suzerain type", "Win emergencies for Diplomatic Victory Points", "Accumulate Diplomatic Favor", "Maintain defensive military as deterrent"] },
      renaissance: { focus: "World Congress", priorities: ["Vote correctly for Diplomatic Victory Points", "Win emergencies and scored competitions", "Potala Palace wonder if not built — +1 Diplomatic policy slot", "Accumulate Diplomatic Favor — don't spend frivolously", "Slot Arsenal of Democracy — +4 Diplomatic Favor per turn", "Maintain alliances at level 2+", "Continue city-state suzerainty", "Build Diplomatic Quarter", "Aid requests — free Diplomatic VP", "Don't appear threatening — stay friendly with everyone"] },
      industrial: { focus: "Scored competitions + Statue of Liberty", priorities: ["Win Aid Requests and scored competitions", "Statue of Liberty wonder — +4 Diplomatic Victory Points", "Diplomatic Quarter — favor generation", "Continue accumulating Diplomatic Favor", "Slot Arsenal of Democracy — +4 Favor per turn", "Maintain suzerainties", "Win every emergency", "Build 3 Airports eventually — triggers Globalization Inspiration", "Carbon Recapture project for Diplomatic VP", "Hoard favor for key votes"] },
      modern: { focus: "Favor stockpile", priorities: ["Hoard Diplomatic Favor for key World Congress votes", "Carbon Recapture project — Diplomatic Victory Points", "Continue winning competitions", "Maintain all alliances and suzerainties", "Slot Arsenal of Democracy", "Stay friendly with everyone", "Vote with majority on unimportant proposals"] },
      atomic: { focus: "Strategic voting", priorities: ["Spend favor on key World Congress votes for VP", "Block opponents from getting VP", "Win remaining emergencies", "Save favor for final push — opponents will vote against you", "Maintain suzerainties and alliances"] },
      information: { focus: "Final push", priorities: ["All-in on final World Congress vote", "Spend all remaining favor strategically", "Win last competition if possible", "Secure final Diplomatic Victory Points"] }
    }
    },
    policies: [{ name: "Charismatic Leader", why: "+2 Influence points per turn toward envoys. Faster suzerainty." }, { name: "Containment", why: "+3 Envoys when sending to a city-state where another civ is suzerain." }, { name: "Arsenal of Democracy", why: "+4 Diplomatic Favor per turn. Major favor generation." }],
    wonders: [{ name: "Potala Palace", why: "+1 Diplomatic policy slot. Extra Diplomatic Favor generation." }, { name: "Statue of Liberty", why: "+4 Diplomatic Victory Points. The single biggest diplomacy wonder." }, { name: "Mahabodhi Temple", why: "2 free Apostles. Religion helps with city-state suzerainty and favor." }, { name: "Kilwa Kisiwani", why: "+15% yields per suzerain city-state type. Amplifies your city-state strategy." }],
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
      ancient: { focus: "Survive, scout, and prepare", priorities: ["Scout — know who's next to you by turn 20", "Slinger ×2 — Kill with Slinger for Archery Eureka", "Warrior — early defense is mandatory in MP", "Kill 3 Barbarians — Bronze Working Eureka", "Clear Barbarian Encampment — Military Tradition Inspiration", "Build a Quarry — Masonry Eureka for walls", "Walls if neighbor is aggressive — Slot Limes (+100% wall Production)", "Settler — expand only when safe", "Builder — improve strategic resources", "Slot Agoge — +50% melee/ranged Production"] },
      classical: { focus: "Timing attack or defend", priorities: ["Encampment + Barracks/Stable", "Build an Iron Mine — Iron Working Eureka for Swordsman", "Swordsman/Horseman — core attack units", "Battering Ram — essential for walled cities", "Walls in exposed cities — humans WILL attack undefended cities", "Slot Conscription — -1 Gold maintenance per unit", "Scout neighbors before committing to attack", "Pillage before capturing — yields are worth more than fast cap", "Build a Pasture — Horseback Riding Eureka", "Watch for joint wars — humans coordinate"] },
      medieval: { focus: "Knight timing push", priorities: ["Armory — triggers Gunpowder Eureka", "Knights and Crossbowmen — key timing window", "Siege Tower for walled cities", "Terracotta Army wonder — free promotion for all units", "Slot Professional Army — 50% upgrade discount", "Pillage before capturing cities", "Build 3 Mines — Apprenticeship Eureka", "Alhambra wonder — extra Military policy + free promotions", "Watch for backstabs from allies", "Maintain walls in all cities"] },
      renaissance: { focus: "Upgrade and consolidate", priorities: ["Musketman upgrades — use Professional Army discount", "Walls in ALL cities — no exceptions", "Commercial Hub for gold income", "Build an Aqueduct — Military Engineering Eureka", "Forbidden City wonder — extra Wildcard policy slot", "Spy on opponents for intel", "Watch for joint wars against you", "Maintain army while building economy", "Niter stockpile for gunpowder units", "Plan next conquest target carefully"] },
      industrial: { focus: "Corps and artillery", priorities: ["Military Academy — Corps/Army training", "Form Corps — combine experienced units", "Artillery — devastating siege", "Industrial Zone for production", "Spy on opponents", "Maintain gold for upgrades", "Anti-air preparation", "Slot Lightning Warfare — cavalry movement bonus", "Continue conquering when opportunity arises"] },
      modern: { focus: "Mechanized push", priorities: ["Tanks and Form Armies", "Bombers — air support", "Anti-air in defense", "Oil stockpile", "Don't let science civs finish space race", "Push for remaining capitals"] },
      atomic: { focus: "Air dominance", priorities: ["Bombers + Fighters", "Nuclear weapons if available", "Capture remaining capitals", "Spy sabotage on science leaders"] },
      information: { focus: "End the game", priorities: ["Modern Armor + Jet Bombers", "Giant Death Robot if available", "Prevent science victory — sabotage Spaceports", "Capture final capitals"] }
    }
    },
    policies: [{ name: "Agoge/Maneuver", why: "+50% Production toward melee/ranged or cavalry. Rush units for timing attacks." }, { name: "Limes", why: "+100% Production toward walls. Essential in MP — wall up early." }, { name: "Conscription", why: "-1 Gold maintenance per unit. Sustain large armies." }, { name: "Professional Army", why: "50% upgrade discount. Mass-upgrade for timing pushes." }],
    wonders: [{ name: "Terracotta Army", why: "Free promotion for all land units. Time this before a major push." }, { name: "Alhambra", why: "Extra Military policy slot + free promotion on new units." }, { name: "Forbidden City", why: "Extra Wildcard policy slot. Flexibility for any situation." }],
    tips: ["Scout your neighbors — know who's next to you by turn 20", "Never leave your cities undefended, even when attacking", "Timing attacks around unit upgrades (Swords→Knights, Crossbows→Field Cannon)", "Pillage before capturing — the yields are worth more than a fast cap", "In BBG, early rushes are weaker — plan for Classical or Medieval timing instead", "Watch for joint wars — human players coordinate against the strongest player"]
  },
  science: {
    eras: {
      ancient: { focus: "Defend and Campus", priorities: ["Scout — meet a civ for Writing Eureka", "Slinger ×2 — defense is critical in MP", "Campus (mountain adjacency) — your core district", "Walls — Slot Limes (+100% wall Production). No exceptions.", "Build a Quarry — Masonry Eureka for walls", "Builder — Build 3 Mines for Apprenticeship Eureka", "Settler — 2nd city near mountains", "Slot Natural Philosophy — +100% Campus adjacency", "Find a Natural Wonder — Astrology Eureka", "Meet 3 city-states — Political Philosophy Inspiration"] },
      classical: { focus: "Library and defense", priorities: ["Library in all Campuses", "Walls in every city — humans punish greed", "2nd Campus in 2nd city", "Archer for defense — keep military visible as deterrent", "Build 2 Campus districts — Recorded History Inspiration", "Earn a Great Scientist — Education Eureka", "Commercial Hub for gold", "Trade routes to city-states (safer than human players)", "Slot Rationalism when available — +100% Campus building science", "Grow cities for district slots"] },
      medieval: { focus: "University rush", priorities: ["University in all cities", "Crossbowmen for defense — keep military visible", "Industrial Zone for production", "Build 3 Mines if not done — Apprenticeship Eureka", "Commercial Hub for gold income", "Great Library wonder if safe — boosts Ancient/Classical techs", "Slot Rationalism — +100% Campus building science", "Trade routes to science cities", "Maintain defensive military", "Plan Spaceport city"] },
      renaissance: { focus: "Fortify and research", priorities: ["Oxford University wonder — +20% Science + 2 free techs", "Counter-spy setup — opponents WILL sabotage you", "Renaissance Walls in all cities", "Complete a Research Alliance — Chemistry Eureka", "Keep military visible as deterrent", "Kilwa Kisiwani wonder — +15% yields per suzerain type", "Slot International Space Agency — +5% Science per suzerain", "Build 2 Universities — Printing Eureka", "Trade routes to city-states", "Plan Spaceport location"] },
      industrial: { focus: "Research Labs + Spaceport", priorities: ["Research Lab in all cities", "Spaceport planning — highest production city", "Coal Power Plant for production", "Ruhr Valley wonder — +20% Production + Mine/Quarry bonus", "Counter-spy your Spaceport district", "Encampment if not built — military deterrent", "Build 3 Workshops — Industrialization Eureka", "Anti-air units near Spaceport", "Maintain defensive army", "Rush remaining science techs"] },
      modern: { focus: "Spaceport defense + launch", priorities: ["Spaceport — your victory building", "Counter-spy on Spaceport — opponents will sabotage", "Anti-air units — protect from bombers", "Launch Earth Satellite", "Spy sabotage on rival Spaceports", "Maintain military deterrent", "Trade routes to Spaceport city", "Rush space techs"] },
      atomic: { focus: "Space race sprint", priorities: ["Mars Colony modules", "Defend against invasion — you WILL be targeted", "Spy sabotage on rival Spaceports", "Maximum science output", "Complete space projects ASAP"] },
      information: { focus: "Finish before they stop you", priorities: ["Complete remaining space projects", "Maximum Spaceport defense", "Laser Station", "Counter-spy at all times"] }
    }
    },
    policies: [{ name: "Natural Philosophy", why: "+100% Campus adjacency. Primary science multiplier." }, { name: "Limes", why: "+100% wall Production. Humans punish undefended cities." }, { name: "Rationalism", why: "+100% science from Campus buildings." }, { name: "International Space Agency", why: "+5% Science per suzerain city-state." }],
    wonders: [{ name: "Kilwa Kisiwani", why: "+15% yields from suzerain city-state types. Science and production boost." }, { name: "Oxford University", why: "+20% Science in this city + 2 free techs. Build in your best Campus city." }, { name: "Ruhr Valley", why: "+20% Production in this city + Production from each Mine and Quarry. Accelerates space projects." }],
    tips: ["You WILL be targeted if you're visibly ahead in science — always have a military", "Walls in every city, no exceptions. Humans will punish greed.", "Spies on your Spaceport — opponents will sabotage your projects", "Counter-spy your Spaceport district starting in the Renaissance", "Trade routes to city-states are safer than to human players", "In BBG, science victory takes longer — budget extra turns for defense"]
  },
  culture: {
    eras: {
      ancient: { focus: "Culture and defense", priorities: ["Scout — explore for city-states and wonders", "Slinger — defense is mandatory in MP", "Monument — early culture", "Founded a Pantheon — Mysticism Inspiration", "Settler — expand to high-appeal locations", "Builder — improve tiles", "Theater Square — your core district", "Walls — Slot Limes. Culture civs are prime targets.", "Build a Wonder — Drama and Poetry Inspiration", "Meet 3 city-states — Political Philosophy Inspiration"] },
      classical: { focus: "Amphitheater + Oracle", priorities: ["Amphitheater — Great Work slots", "Oracle wonder — -25% Great People cost, +2 GP points", "Walls in all cities — you WILL be attacked", "2nd city Theater Square", "Slot Inspiration — +2 Great Person points from districts", "Earn a Great Artist — Humanism Eureka", "Keep military visible — deter aggression", "Trade routes for gold", "Build 2 Campus districts — Recorded History Inspiration", "DO NOT open borders with opponents"] },
      medieval: { focus: "Great Works + defense", priorities: ["Art Museum — Great Work storage", "Bolshoi Theatre wonder — 2 free civics + Great Work slots", "Great People generation — fill every slot", "Encampment for defense — keep military visible", "Earn 3 Great People — The Enlightenment Inspiration", "Slot Heritage Tourism — +100% Art/Artifact Tourism", "Crossbowmen for defense", "Have a Themed Museum — Cultural Heritage Inspiration", "Trade routes to cultural city-states", "Plan National Park locations"] },
      renaissance: { focus: "Wonder building + tourism", priorities: ["Eiffel Tower wonder — +2 Appeal empire-wide", "Cristo Redentor wonder — full Seaside Resort Tourism", "DO NOT open borders with opponents — they'll deny you the same", "Archaeologists — dig up artifacts", "Build an Archaeological Museum — Natural History Inspiration", "Slot Heritage Tourism — +100% Art/Artifact Tourism", "Keep defensive military at all times", "Plan Seaside Resort locations", "Trade routes to tourism targets", "Theming bonuses matter — plan Great Work placement"] },
      industrial: { focus: "Tourism engine", priorities: ["Broadcast Center — Music Tourism", "National Parks in safe interior cities", "Seaside Resorts on coast", "Slot Online Communities — +50% Trade Route Tourism", "Rock Bands when available — your late-game closer", "Defend against aggression — culture civs are targets", "Continue Great People generation", "Trade routes to highest domestic tourism civ"] },
      modern: { focus: "Tourism push", priorities: ["Rock Bands — target civ with highest domestic tourism", "More National Parks and Seaside Resorts", "Online Communities policy", "Keep defensive military", "Open borders only if opponent also opens"] },
      atomic: { focus: "Rock Band assault", priorities: ["Rock Bands targeting highest tourism civ", "Heritage Tourism policy", "Defend your Great Works from conquest", "Maximum tourism pressure"] },
      information: { focus: "Close it out", priorities: ["Online Communities — +50% Trade Route Tourism", "More Rock Bands", "Prevent opponents from declaring war"] }
    }
    },
    policies: [{ name: "Inspiration", why: "+2 Great Person points from districts." }, { name: "Limes", why: "+100% wall Production. Culture civs are prime targets." }, { name: "Heritage Tourism", why: "+100% Tourism from Art and Artifacts." }, { name: "Online Communities", why: "+50% Tourism from Trade Routes." }],
    wonders: [{ name: "Oracle", why: "Cheaper Great People patronage + Great Person points from districts." }, { name: "Bolshoi Theatre", why: "2 free civics + Great Work slots. Civic tree acceleration." }, { name: "Eiffel Tower", why: "+2 Appeal empire-wide. Enables National Parks and Seaside Resorts everywhere." }, { name: "Cristo Redentor", why: "Full appeal tourism from Seaside Resorts. Religious Tourism not reduced." }],
    tips: ["DO NOT open borders with opponents — they'll deny you the same", "Culture victory is slow and visible — expect military pressure", "Rock Bands are your late-game closer, target the civ with highest domestic tourism", "Theming bonuses matter — plan Great Work placement carefully", "Keep a defensive military at all times, culture civs are prime targets", "In BBG, tourism modifiers are adjusted — you need more active tourism sources"]
  },
  religion: {
    eras: {
      ancient: { focus: "Holy Site rush + defense", priorities: ["Scout — Find Natural Wonder for Astrology Eureka", "Slinger — defense is critical", "Holy Site — place near mountains for adjacency", "Shrine — Great Prophet points", "Slot God King — +1 Faith for Pantheon", "Founded a Pantheon — Mysticism Inspiration", "Warrior — basic defense", "Walls — Slot Limes. Protect your religious investment.", "Build a Quarry — Masonry Eureka for walls", "Settler — 2nd city for 2nd Holy Site"] },
      classical: { focus: "Found religion + defend", priorities: ["Earn Great Prophet — Found Religion with strong beliefs", "Founded a Religion — Theology Inspiration", "Temple — enables Missionary/Apostle purchases", "2nd Holy Site", "Walls in all cities — humans will attack religious civs", "Slot Scripture — +100% Holy Site adjacency", "Mahabodhi Temple wonder — 2 free Apostles", "Begin spreading to nearest neighbor", "Build 2 Campus districts — stay relevant in science", "Military escort for missionaries"] },
      medieval: { focus: "Spread with escorts", priorities: ["Apostles with Debater promotion — theological combat is constant in MP", "Military escort for missionaries — humans WILL declare war to kill them", "Worship Building — powerful belief bonuses", "Hagia Sophia wonder — +1 spread charge on all religious units", "Inquisitors for defense — cheaper than Apostles", "Have 6 cities following religion — Reformed Church Inspiration", "Mont St. Michel wonder — Apostles gain Martyr", "Slot Simultaneum — +2 Faith from Holy Site buildings", "Don't spread to domination player's cities — they'll use it as war excuse", "Target one civ at a time"] },
      renaissance: { focus: "Theological warfare", priorities: ["Adopt Theocracy — faith-purchase units, +5 Religious Strength", "Mass Apostle purchases — overwhelm opponents", "Inquisitor network — defend your cities", "Watch for war declarations — humans attack religious civs", "Continue spreading to unconverted civs", "Maintain military deterrent", "Trade routes for passive religious pressure", "Walls in frontier cities"] },
      industrial: { focus: "Convert holdouts", priorities: ["Target unconverted civs with Apostle waves", "Escort missionaries with military", "Defend against counter-religion", "Maintain Inquisitor defense", "Faith generation from all Holy Sites"] },
      modern: { focus: "Maintain and defend", priorities: ["Inquisitors everywhere", "Military deterrent", "Convert remaining cities", "Defend against late aggression"] },
      atomic: { focus: "Prevent flips", priorities: ["Inquisitor defense", "Counter enemy Apostles", "Maintain majority"] },
      information: { focus: "Hold majority", priorities: ["Maintain religious majority in all civs", "Counter late pushes"] }
    }
    },
    policies: [{ name: "God King", why: "+1 Faith from Palace. Slot turn 1 for fastest Pantheon." }, { name: "Scripture", why: "+100% Holy Site adjacency. Double faith output." }, { name: "Theocracy", why: "Faith-purchase land units. +5 Religious Strength." }, { name: "Simultaneum", why: "+2 Faith from all Holy Site buildings." }],
    wonders: [{ name: "Stonehenge", why: "Free Great Prophet — but very risky in MP as opponents may rush it or attack you while building." }, { name: "Hagia Sophia", why: "+1 spread charge on Missionaries and Apostles. Huge efficiency in theological combat." }, { name: "Mont St. Michel", why: "Apostles gain Martyr — dying creates Relics for tourism backup." }, { name: "Mahabodhi Temple", why: "2 free Apostles to jumpstart spreading." }],
    tips: ["Founding a religion is harder in MP — other players contest Great Prophets", "Debater Apostles are mandatory — you will fight theological combat constantly", "Escort missionaries with military units, humans will declare war to kill them", "Inquisitors are cheaper than Apostles — use them to defend, Apostles to attack", "Don't spread to a domination player's cities — they'll use it as a war excuse", "In BBG, religious combat is rebalanced — Debater is less dominant, plan mixed promotions"]
  },
  diplomacy: {
    eras: {
      ancient: { focus: "Meet everyone + early envoys", priorities: ["Scout ×2 — meet all civs and city-states", "Meet 3 city-states — Political Philosophy Inspiration", "Slinger — basic defense", "Monument — culture for civics", "Settler — expand", "Builder — improve tiles", "Grow to 6 Population — Early Empire Inspiration", "Slot Charismatic Leader — +2 Influence per turn", "Send envoys to city-states", "Build a Quarry — Masonry Eureka for walls"] },
      classical: { focus: "Government + allies", priorities: ["Government Plaza — diplomatic hub", "Political Philosophy civic — first government", "First alliances with neighbors", "Walls for safety — Slot Limes", "Slot Charismatic Leader — faster envoys", "Commercial Hub for gold", "Trade routes to allies", "Earn envoys from city-state quests", "Potala Palace wonder — +1 Diplomatic policy slot", "Don't appear threatening — stay friendly"] },
      medieval: { focus: "Suzerainty + favor", priorities: ["Become suzerain of 2-3 city-states", "Have an alliance — Diplomatic Service Inspiration", "Level 2 alliances", "Slot Containment — +3 Envoys to contested city-states", "Build 2 Markets — Guilds Inspiration", "Kilwa Kisiwani wonder — +15% yields per suzerain type", "Win emergencies for Diplomatic VP", "Accumulate Diplomatic Favor", "Maintain defensive military as deterrent", "Vote with majority on unimportant proposals"] },
      renaissance: { focus: "World Congress", priorities: ["Vote correctly for Diplomatic VP", "Win emergencies and competitions", "Potala Palace if not built", "Slot Arsenal of Democracy — +4 Favor per turn", "Maintain alliances at level 2+", "Continue suzerainty", "Diplomatic Quarter", "Aid requests — free VP", "Don't appear threatening", "Hoard favor for key votes"] },
      industrial: { focus: "Competitions + Statue of Liberty", priorities: ["Win Aid Requests and competitions", "Statue of Liberty wonder — +4 Diplomatic VP", "Diplomatic Quarter — favor generation", "Slot Arsenal of Democracy", "Carbon Recapture project for VP", "Maintain suzerainties", "Build 3 Airports — Globalization Inspiration", "Hoard favor for final push"] },
      modern: { focus: "Favor hoarding", priorities: ["Save Diplomatic Favor for key votes", "Carbon Recapture projects", "Win competitions", "Stay friendly with everyone", "Humans will vote against you — save favor"] },
      atomic: { focus: "Strategic voting", priorities: ["Spend favor on key votes", "Block opponents from VP", "Save favor for final push"] },
      information: { focus: "Final push", priorities: ["All-in on final World Congress vote", "Spend remaining favor", "Win last competition"] }
    }
    },
    policies: [{ name: "Charismatic Leader", why: "+2 Influence points per turn for envoys." }, { name: "Limes", why: "+100% wall Production. Stay alive while playing peacefully." }, { name: "Containment", why: "+3 Envoys to city-states where another civ is suzerain." }, { name: "Arsenal of Democracy", why: "+4 Diplomatic Favor per turn." }],
    wonders: [{ name: "Potala Palace", why: "+1 Diplomatic policy slot for extra favor generation." }, { name: "Statue of Liberty", why: "+4 Diplomatic Victory Points. The most important diplomacy wonder." }, { name: "Kilwa Kisiwani", why: "+15% yields per suzerain type. Amplifies city-state strategy." }, { name: "Mahabodhi Temple", why: "2 free Apostles. Religion helps suzerainty and favor." }],
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
