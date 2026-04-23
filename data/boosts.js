// Key Eurekas and Inspirations per victory type
const BOOST_GUIDES = {
  domination: {
    critical: [
      { name: "Bronze Working", type: "eureka", trigger: "Kill 3 Barbarians", why: "Unlocks Spearman and reveals Iron — essential for early military" },
      { name: "Iron Working", type: "eureka", trigger: "Build an Iron Mine", why: "Unlocks Swordsman. Settle near Iron if possible." },
      { name: "Masonry", type: "eureka", trigger: "Build a Quarry", why: "Unlocks Ancient Walls. Settle near Stone/Marble for the Quarry boost." },
      { name: "Military Tradition", type: "inspiration", trigger: "Clear a Barbarian Encampment", why: "Unlocks flanking and support bonuses" },
      { name: "Stirrups", type: "eureka", trigger: "Have the Feudalism civic", why: "Unlocks Knights — key timing attack unit" },
      { name: "Gunpowder", type: "eureka", trigger: "Build an Armory", why: "Unlocks Musketman. Build Encampment→Barracks→Armory early." },
      { name: "Military Engineering", type: "eureka", trigger: "Build an Aqueduct", why: "Unlocks Military Engineers and Niter reveal" }
    ],
    settling: "Prioritize settling near Iron, Horses, Niter, and Stone/Marble. Strategic resources fuel your military, and Quarries boost Masonry for walls."
  },
  science: {
    critical: [
      { name: "Writing", type: "eureka", trigger: "Meet another civilization", why: "Unlocks Campus district — your core district" },
      { name: "Education", type: "eureka", trigger: "Earn a Great Scientist", why: "Unlocks University. Prioritize Campus adjacency for Great Scientist points." },
      { name: "Apprenticeship", type: "eureka", trigger: "Build 3 Mines", why: "Unlocks Industrial Zone. Settle near hills for mines." },
      { name: "Industrialization", type: "eureka", trigger: "Build 3 Workshops", why: "Unlocks Coal Power Plant and Factory" },
      { name: "Chemistry", type: "eureka", trigger: "Complete a Research Alliance", why: "Unlocks Research Lab — critical for late science" },
      { name: "Rocketry", type: "eureka", trigger: "Boost a Great Scientist to space", why: "Unlocks Spaceport — your victory building" },
      { name: "Recorded History", type: "inspiration", trigger: "Build 2 Campus districts", why: "Unlocks Natural Philosophy policy (+100% Campus adjacency)" }
    ],
    settling: "Settle near Mountains for Campus adjacency, and near Hills for mine boosts. Fresh water for housing helps cities grow to work Campus slots."
  },
  culture: {
    critical: [
      { name: "Drama and Poetry", type: "inspiration", trigger: "Build a Wonder", why: "Unlocks Theater Square. Plan an early wonder (Monument to the Gods pantheon helps)." },
      { name: "Mysticism", type: "inspiration", trigger: "Found a Pantheon", why: "Unlocks early religious policies" },
      { name: "Humanism", type: "eureka", trigger: "Earn a Great Artist", why: "Unlocks Art Museum — fill with Great Works" },
      { name: "Conservation", type: "eureka", trigger: "Have a Neighborhood at Breathtaking appeal", why: "Unlocks National Parks. Settle near natural wonders and forests." },
      { name: "Flight", type: "eureka", trigger: "Build an Industrial era or later wonder", why: "Unlocks Tourism from improvements (Seaside Resorts, etc.)" },
      { name: "Cultural Heritage", type: "inspiration", trigger: "Have a themed building", why: "Unlocks Heritage Tourism policy" },
      { name: "The Enlightenment", type: "inspiration", trigger: "Earn 3 Great People", why: "Unlocks key Renaissance civic policies" }
    ],
    settling: "Settle near high-appeal tiles: coasts, natural wonders, forests, mountains. Avoid industrial tiles. Appeal drives National Parks and Seaside Resorts."
  },
  religion: {
    critical: [
      { name: "Astrology", type: "eureka", trigger: "Find a Natural Wonder", why: "Unlocks Holy Site — scout aggressively early" },
      { name: "Masonry", type: "eureka", trigger: "Build a Quarry", why: "Unlocks Walls. Settle near Stone/Marble. Walls protect your religious investment." },
      { name: "Mysticism", type: "inspiration", trigger: "Found a Pantheon", why: "Unlocks early religious policies and Governor titles" },
      { name: "Theology", type: "inspiration", trigger: "Earn a Great Prophet", why: "Unlocks Temple and Missionary purchases" },
      { name: "Education", type: "eureka", trigger: "Earn a Great Scientist", why: "Even religion civs need some science to stay relevant" },
      { name: "Reformed Church", type: "inspiration", trigger: "Have 6 cities following your religion", why: "Unlocks key religious policies" },
      { name: "Theocracy", type: "inspiration", trigger: "Research 2 Renaissance civics", why: "Unlocks Theocracy government — essential for religious victory" }
    ],
    settling: "Settle near Natural Wonders (Astrology boost) and Mountains (Holy Site adjacency). Stone/Marble for Quarry→Masonry→Walls. Desert for faith pantheons."
  },
  diplomacy: {
    critical: [
      { name: "Early Empire", type: "inspiration", trigger: "Grow a city to 6 population", why: "Unlocks Colonization policy and Governor titles" },
      { name: "Political Philosophy", type: "inspiration", trigger: "Meet 3 city-states", why: "Unlocks first government — huge for policy cards" },
      { name: "Diplomatic Service", type: "inspiration", trigger: "Earn a level 2 Alliance", why: "Unlocks Diplomatic Quarter and Resident Embassies" },
      { name: "Masonry", type: "eureka", trigger: "Build a Quarry", why: "Unlocks Walls for defense while you play peacefully" },
      { name: "Guilds", type: "inspiration", trigger: "Build a Market and a Bank", why: "Unlocks key Medieval economic policies" },
      { name: "Conservation", type: "eureka", trigger: "Have a Neighborhood at Breathtaking appeal", why: "Unlocks Carbon Recapture project for Diplomatic Victory Points" },
      { name: "Globalization", type: "inspiration", trigger: "Build 3 Airports", why: "Unlocks Online Communities policy for tourism" }
    ],
    settling: "Settle near city-states for early envoys and suzerainty. Fresh water for housing/growth. Stone/Marble for Quarry→Masonry→Walls."
  }
};

// Leader-specific boost priorities (supplements the general guide)
const LEADER_BOOSTS = {
  "tamar": [
    { name: "Masonry", priority: "critical", reason: "Tsikhe replaces Renaissance Walls — you need the Masonry→Construction→path. Settle near Quarries for the boost." },
    { name: "Astrology", priority: "critical", reason: "Holy Site is core to your religion strategy. Scout for Natural Wonders immediately." },
    { name: "Political Philosophy", priority: "high", reason: "Meet 3 city-states ASAP — your double envoy ability needs city-states with your religion." }
  ],
  "hammurabi": [
    { name: "ALL Eurekas", priority: "critical", reason: "Eurekas complete techs for you. Every single Eureka is worth 100% of the tech instead of 50%. Plan everything around triggering boosts." },
    { name: "Apprenticeship", priority: "critical", reason: "Build 3 Mines early — this unlocks Industrial Zone which is huge for production." },
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians to complete this instantly. Reveals Iron for more Eurekas." }
  ],
  "seondeok": [
    { name: "Writing", priority: "critical", reason: "Meet a civ to instantly unlock Campus. Seowon placement is your #1 priority." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines — Mines give +1 Science with Three Kingdoms. More mines = more science." },
    { name: "Education", priority: "high", reason: "Earn a Great Scientist to unlock University for Seowon." }
  ],
  "sejong": [
    { name: "Writing", priority: "critical", reason: "Seowon is your core district. Meet a civ early." },
    { name: "Apprenticeship", priority: "high", reason: "Mines give +1 Science. Build 3 for the boost and the yields." },
    { name: "Early Empire", priority: "high", reason: "Grow to 6 pop for Governor titles — Governors give +2 Science per specialty district." }
  ],
  "peter": [
    { name: "Astrology", priority: "critical", reason: "Lavra is your best district. Find a Natural Wonder to boost Astrology." },
    { name: "Writing", priority: "high", reason: "Meet a civ for Campus. Grand Embassy needs trade routes to more advanced civs." },
    { name: "Foreign Trade", priority: "high", reason: "Earn a Trade Route to start getting Grand Embassy bonuses." }
  ],
  "lady-six-sky": [
    { name: "Writing", priority: "critical", reason: "Observatory replaces Campus. Meet a civ, then surround Observatory with Farms." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource to boost this. Farms adjacent to Observatory give +2 Science." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines for the boost. Settle tightly within 6 tiles of capital." }
  ],
  "alexander": [
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Unlocks Spearman and reveals Iron for Hypaspist." },
    { name: "Iron Working", priority: "critical", reason: "Build an Iron Mine to unlock Hypaspist — your key unique unit." },
    { name: "Military Tradition", priority: "high", reason: "Clear a Barbarian Encampment for flanking bonuses on your rush." }
  ],
  "simon-bolivar": [
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. Flanking + your +1 movement = devastating." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Knights. With +1 movement, your cavalry is untouchable." },
    { name: "Mercenaries", priority: "high", reason: "Unlocks professional army upgrade discount. Upgrade timing attacks." }
  ],
  "basil": [
    { name: "Astrology", priority: "critical", reason: "You need a religion. Find a Natural Wonder to boost Astrology for Holy Site." },
    { name: "Stirrups", priority: "critical", reason: "Tagma replaces Knight. Cavalry does full damage to cities following your religion." },
    { name: "Theology", priority: "high", reason: "Earn a Great Prophet to unlock Temple and Missionary purchases for spreading." }
  ],
  "gandhi": [
    { name: "Astrology", priority: "critical", reason: "Holy Site for Satyagraha faith. Scout for Natural Wonders." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Stepwells adjacent to Farms give +1 Food." },
    { name: "Theology", priority: "high", reason: "Earn a Great Prophet. Dharma collects all follower beliefs — more religions in your cities = better." }
  ],
  "gorgo": [
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. Culture from kills + flanking bonuses = fast civic progression." },
    { name: "Drama and Poetry", priority: "high", reason: "Build a Wonder to unlock Acropolis (Theater Square replacement)." },
    { name: "Bronze Working", priority: "high", reason: "Kill 3 Barbarians for culture AND the Eureka." }
  ],
  "kristina": [
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder to unlock Theater Square. Auto-theming needs Great Work slots." },
    { name: "Humanism", priority: "critical", reason: "Earn a Great Artist to unlock Art Museum. Auto-theming makes this incredibly efficient." },
    { name: "The Enlightenment", priority: "high", reason: "Earn 3 Great People — you'll be generating many with Nobel Prize." }
  ],
  "mansa-musa": [
    { name: "Astrology", priority: "critical", reason: "Desert faith from city centers. Holy Site amplifies this." },
    { name: "Foreign Trade", priority: "high", reason: "Earn a Trade Route. Sahel Merchants gold from desert tiles in origin city." },
    { name: "Currency", priority: "high", reason: "Sell a luxury to another civ. Unlocks Suguba (Commercial Hub replacement) with 20% discount." }
  ],
  "john-curtin": [
    { name: "Writing", priority: "critical", reason: "Campus with appeal adjacency is your core. Settle near Breathtaking tiles." },
    { name: "Conservation", priority: "high", reason: "Breathtaking Neighborhood for the boost. Appeal-based adjacency is your strength." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. Outback Stations + Mines improve your land." }
  ],
  "cleopatra": [
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Iteru gives +15% production for wonders near rivers — Masonry unlocks early wonders." },
    { name: "Drama and Poetry", priority: "high", reason: "Build a Wonder (easy with Iteru) to unlock Theater Square." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Sphinx needs flat land near rivers." }
  ],
  "ramses": [
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Builder charges can rush wonders — Masonry unlocks the first ones." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder to unlock Theater Square. +2 Culture and +2 Gold per Wonder." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Sphinx adjacent to Wonders gives bonus Culture." }
  ],
  "cyrus": [
    { name: "Iron Working", priority: "critical", reason: "Build an Iron Mine. Immortals replace Swordsmen — your key unique unit." },
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. Surprise War + flanking = devastating early." },
    { name: "Foreign Trade", priority: "high", reason: "Earn a Trade Route. Domestic routes give +2 Gold and +1 Culture with Satrapies." }
  ],
  "frederick": [
    { name: "Apprenticeship", priority: "critical", reason: "Build 3 Mines. Hansa adjacency from Commercial Hubs and Aqueducts is your core engine." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. Extra district slot means you can build Campus in every city." },
    { name: "Currency", priority: "high", reason: "Sell a luxury. Commercial Hub adjacent to Hansa gives major adjacency." }
  ],
  "gilgamesh": [
    { name: "Writing", priority: "critical", reason: "Meet a civ. Ziggurats give +2 Science — Campus amplifies your science lead." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Ziggurats need flat river tiles — plan city placement." },
    { name: "Bronze Working", priority: "high", reason: "Kill 3 Barbarians. War-Cart clears camps for Tribal Village rewards via Epic Quest." }
  ],
  "hojo": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Holy Sites build in half time — rush one early." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Theater Squares build in half time — Meiji adjacency stacks." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. District adjacency from Meiji Restoration rewards dense district placement." }
  ],
  "jadwiga": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Holy Sites get +2 adjacency from districts — build early." },
    { name: "Political Philosophy", priority: "critical", reason: "Meet 3 city-states. Wildcard slot from Golden Liberty needs good policies." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Cavalry path for Winged Hussar timing push." }
  ],
  "kupe": [
    { name: "Sailing", priority: "critical", reason: "You start in ocean — Sailing is often auto-boosted. Focus on Celestial Navigation next." },
    { name: "Celestial Navigation", priority: "critical", reason: "Unlocks Harbor. Your coastal cities need Harbors for gold and production." },
    { name: "Mysticism", priority: "high", reason: "Found a Pantheon. Mana faith from unimproved features makes pantheon easy." }
  ],
  "montezuma": [
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Eagle Warriors convert defeated units to Builders — hunt barbs aggressively." },
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Builder charges complete 20% of districts with Legend of Five Suns." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. Builder charges rush districts — Mines give resources for amenities." }
  ],
  "pedro": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Rainforest Holy Site adjacency is strong." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Rainforest Theater Square adjacency + Great Person refund." },
    { name: "Writing", priority: "high", reason: "Meet a civ. Rainforest Campus adjacency is excellent." }
  ],
  "poundmaker": [
    { name: "Pottery", priority: "critical", reason: "Research Pottery for free Trader and +1 Trade Route. This is your first priority." },
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. Nihithaw grabs unclaimed tiles when Traders pass through." },
    { name: "Political Philosophy", priority: "high", reason: "Meet 3 city-states. Favorable Terms needs alliances — meet everyone early." }
  ],
  "saladin": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Guaranteed Great Prophet means you WILL found a religion." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. Madrasa replaces University — Campus + faith combo." },
    { name: "Education", priority: "high", reason: "Earn a Great Scientist. Unlocks Madrasa for science AND faith." }
  ],
  "victoria": [
    { name: "Celestial Navigation", priority: "critical", reason: "Unlocks Harbor. Royal Navy Dockyard replaces Harbor — build on foreign continents." },
    { name: "Cartography", priority: "high", reason: "Cross ocean tiles. Pax Britannica gives free units on foreign continents." },
    { name: "Writing", priority: "high", reason: "Meet a civ. Trade routes from foreign continent cities are your economy." }
  ],
  "wilhelmina": [
    { name: "Writing", priority: "critical", reason: "Meet a civ. River Campus adjacency (+2) is your core science engine." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. River Theater Square adjacency (+2) for culture." },
    { name: "Celestial Navigation", priority: "high", reason: "Unlocks Harbor. Harbor culture bombs expand your territory." }
  ],
  "pachacuti": [
    { name: "Writing", priority: "critical", reason: "Meet a civ. Mountain Campus adjacency is guaranteed with workable mountains." },
    { name: "Irrigation", priority: "critical", reason: "Farm a resource. Terrace Farms get +1 Food per adjacent Mountain — settle in mountain ranges." },
    { name: "Engineering", priority: "high", reason: "Unlocks Aqueduct. Terrace Farms get +1 Production adjacent to Aqueduct." }
  ],
  "pericles": [
    { name: "Political Philosophy", priority: "critical", reason: "Meet 3 city-states. Suzerainty culture bonus is your core ability — meet city-states ASAP." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Acropolis needs hills — plan city placement." },
    { name: "Diplomatic Service", priority: "high", reason: "Level 2 Alliance. Envoy generation for suzerainty is key." }
  ],
  "ambiorix": [
    { name: "Iron Working", priority: "critical", reason: "Build an Iron Mine. Oppidum unlocks at Iron Working — much earlier than normal Industrial Zone." },
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Gaesatae rush needs early military techs." },
    { name: "Mining", priority: "high", reason: "Mines provide adjacency for all specialty districts with Hallstatt Culture." }
  ],
  "amanitore": [
    { name: "Archery", priority: "critical", reason: "Kill a unit with a Slinger. Pítati Archer replaces Archer — your key early rush unit." },
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Nubian Pyramid adjacent to Holy Site gives bonus yields." },
    { name: "Masonry", priority: "high", reason: "Build a Quarry. Nubian Pyramids need Desert tiles — Masonry helps with early infrastructure." }
  ],
  "ba-trieu": [
    { name: "Machinery", priority: "critical", reason: "Unlocks Crossbowman path. Voi Chiến replaces Crossbowman — your key unique unit." },
    { name: "Flight", priority: "high", reason: "Build an Industrial+ wonder. Thành gets +2 Tourism after Flight." },
    { name: "Mysticism", priority: "high", reason: "Found a Pantheon. Feature buildings give bonus yields — Sacred Path pantheon synergizes." }
  ],
  "catherine-black-queen": [
    { name: "Castles", priority: "critical", reason: "Research Castles for free Spy and extra capacity. Your espionage game starts here." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Grand Tour doubles wonder tourism — build mid-era wonders." },
    { name: "Masonry", priority: "high", reason: "Build a Quarry. Château needs river tiles — Masonry helps with early wonder rushing." }
  ],
  "catherine-magnificence": [
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Grand Tour doubles wonder tourism. Theater Squares near luxuries for +2 Culture." },
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Wonder production is your strength — start early." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Château needs river adjacency — plan city placement along rivers." }
  ],
  "chandragupta": [
    { name: "Military Training", priority: "critical", reason: "Unlocks War of Territorial Expansion casus belli. This is your timing attack trigger." },
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Varu replaces Horseman — you need early military techs." },
    { name: "Horseback Riding", priority: "high", reason: "Build a Pasture. Unlocks Varu — your unique unit that debuffs adjacent enemies." }
  ],
  "dido": [
    { name: "Celestial Navigation", priority: "critical", reason: "Unlocks Harbor. Cothon replaces Harbor — +50% Settler and naval production." },
    { name: "Writing", priority: "critical", reason: "Auto-boosted at game start. Use the head start to rush Campus." },
    { name: "Shipbuilding", priority: "high", reason: "Unlocks Bireme upgrade path. Settler movement on water is your expansion tool." }
  ],
  "eleanor-england": [
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Great Works drive loyalty pressure — you need Theater Squares fast." },
    { name: "Humanism", priority: "critical", reason: "Earn a Great Artist. Fill Great Work slots to pressure neighboring cities." },
    { name: "Natural History", priority: "high", reason: "Unlocks Archaeological Museum. British Museum has 6 slots — massive loyalty pressure." }
  ],
  "eleanor-france": [
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Grand Tour doubles wonder tourism + Great Works for loyalty pressure." },
    { name: "Humanism", priority: "critical", reason: "Earn a Great Artist. Great Works are your loyalty weapon." },
    { name: "Masonry", priority: "high", reason: "Build a Quarry. Wonder rushing is key — Château culture near rivers helps too." }
  ],
  "genghis-khan": [
    { name: "Horseback Riding", priority: "critical", reason: "Build a Pasture. Cavalry class units get +3 combat strength — rush this tech." },
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. Örtöö creates Trading Posts instantly — combat strength from Diplomatic Visibility." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Knights. Keshig replaces Cavalry — ranged cavalry is devastating." }
  ],
  "gitarja": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Coastal faith + Holy Site is your religious foundation." },
    { name: "Celestial Navigation", priority: "critical", reason: "Unlocks Harbor. Kampung needs coast adjacent to sea resources." },
    { name: "Shipbuilding", priority: "high", reason: "Coast tiles get +0.5 Faith/Production/Gold. Kampung becomes available." }
  ],
  "harald": [
    { name: "Sailing", priority: "critical", reason: "Unlocks Galley. Naval melee units can coastal raid — start raiding early." },
    { name: "Shipbuilding", priority: "high", reason: "Unlocks Longship upgrade. +50% naval melee production kicks in." },
    { name: "Astrology", priority: "high", reason: "Find a Natural Wonder. Stave Church gets adjacency from Woods for Holy Site." }
  ],
  "harald-varangian": [
    { name: "Sailing", priority: "critical", reason: "Unlocks Galley. Coastal raiding gives Science and Culture with Varangian Guard." },
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. Pillaging for science/culture is your core loop." },
    { name: "Astrology", priority: "high", reason: "Find a Natural Wonder. Stave Church Woods adjacency for faith." }
  ],
  "jayavarman": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Holy Sites give +2 Food and +1 Housing — build them everywhere." },
    { name: "Engineering", priority: "critical", reason: "Unlocks Aqueduct. Aqueducts give +3 Faith and +1 Amenity with Grand Barays." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Farms adjacent to Aqueducts get +2 Food." }
  ],
  "joao": [
    { name: "Celestial Navigation", priority: "critical", reason: "Unlocks Harbor. Navigation School replaces University — science from coast tiles." },
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. +50% yields from international trade is massive." },
    { name: "Education", priority: "high", reason: "Earn a Great Scientist. Unlocks Navigation School for coast science." }
  ],
  "julius-caesar": [
    { name: "Iron Working", priority: "critical", reason: "Build an Iron Mine. Legion replaces Swordsman — can build roads and forts." },
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Conquest gold from barb camps + city captures." },
    { name: "Engineering", priority: "high", reason: "Unlocks Aqueduct. Bath replaces Aqueduct with +2 Housing and +1 Amenity." }
  ],
  "kublai-china": [
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. Trading Posts give +6 Gold, +3 Culture, +2 Science each." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. 60% Eurekas from Dynastic Cycle — every boost matters more." },
    { name: "Drama and Poetry", priority: "high", reason: "Build a Wonder. Great Wall culture + 60% Inspirations." }
  ],
  "kublai-mongolia": [
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. Örtöö creates Trading Posts instantly for Gerege bonuses." },
    { name: "Horseback Riding", priority: "critical", reason: "Build a Pasture. Keshig needs cavalry tech path." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Knights. Keshig replaces Cavalry — ranged + escort formation." }
  ],
  "lautaro": [
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. Governor combat bonus + flanking = strong early military." },
    { name: "Early Empire", priority: "critical", reason: "Grow to 6 pop. Governor titles give +5 combat strength in cities with Governors." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Cavalry path. Malón Raider replaces Cavalry — cheap pillaging." }
  ],
  "ludwig": [
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Wonders give +2 Culture and +2 Tourism — start building them ASAP." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Theater Squares in wonder cities get +1 Culture per Wonder." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. Hansa production fuels wonder building." }
  ],
  "menelik": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Rock-Hewn Church on Hills gives faith from adjacent Mountains/Hills." },
    { name: "Early Empire", priority: "critical", reason: "Grow to 6 pop. Governor titles give +1 Science and +1 Culture per improved resource." },
    { name: "Irrigation", priority: "high", reason: "Farm a resource. Improve diverse resources for Council of Ministers bonuses." }
  ],
  "mvemba": [
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Great Work yields (+2 Food, +2 Production, +4 Gold each) are your engine." },
    { name: "Humanism", priority: "critical", reason: "Earn a Great Artist. Nkisi gives +1 Great Artist/Musician/Merchant per turn." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. Mbanza needs Rainforest/Woods — production from mines helps." }
  ],
  "nzinga-mbande": [
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Great Work yields are massive with Nkisi." },
    { name: "Early Empire", priority: "critical", reason: "Grow to 6 pop. Governors give +2 Food and +2 Faith per specialty district." },
    { name: "Humanism", priority: "high", reason: "Earn a Great Artist. Great People generation is your strength." }
  ],
  "philip": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. You need a religion for El Escorial combat bonus." },
    { name: "Gunpowder", priority: "critical", reason: "Build an Armory. Conquistador replaces Musketman — +10 combat adjacent to religious units." },
    { name: "Theology", priority: "high", reason: "Earn a Great Prophet. Missionaries escort Conquistadors for the combat bonus." }
  ],
  "qin-shi-huang": [
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Builder charges complete 15% of Ancient/Classical wonders." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. 60% Eurekas from Dynastic Cycle — every boost is amplified." },
    { name: "Drama and Poetry", priority: "high", reason: "Build a Wonder (easy with Builder charges). Great Wall culture on borders." }
  ],
  "qin-shi-huang-unifier": [
    { name: "Political Philosophy", priority: "critical", reason: "Meet 3 city-states. Alliance combat bonus needs alliances — meet civs early." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. 60% Eurekas from Dynastic Cycle." },
    { name: "Diplomatic Service", priority: "high", reason: "Level 2 Alliance. +10% combat per active alliance — stack them." }
  ],
  "robert-bruce": [
    { name: "Writing", priority: "critical", reason: "Meet a civ. Scottish Enlightenment needs happy cities — Campus for science bonus." },
    { name: "Games and Recreation", priority: "critical", reason: "Build an Entertainment Complex. Golf Course amenities trigger Enlightenment bonuses." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. Happy cities get +5% Production — amplify with Industrial Zones." }
  ],
  "saladin-vizier": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Guaranteed Great Prophet — rush Holy Site." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. Madrasa gives faith equal to Campus adjacency." },
    { name: "Theology", priority: "high", reason: "Earn a Great Prophet. Worship buildings give free Military policy + 10% building production." }
  ],
  "shaka": [
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Ikanda replaces Encampment — unique promotions for units." },
    { name: "Mercenaries", priority: "critical", reason: "Unlocks Corps formation. Amabutho lets you form Corps at Mercenaries instead of Nationalism." },
    { name: "Military Tradition", priority: "high", reason: "Clear a Barbarian Encampment. Impi flanking bonus stacks — flanking matters." }
  ],
  "suleiman-kanuni": [
    { name: "Gunpowder", priority: "critical", reason: "Build an Armory. Janissary replaces Musketman — stronger, cheaper, free promotion." },
    { name: "Early Empire", priority: "critical", reason: "Grow to 6 pop. Ibrahim Governor is unique — place him early for bonuses." },
    { name: "Masonry", priority: "high", reason: "Build a Quarry. Siege units get +50% production and +5 combat — walls help you defend while building." }
  ],
  "suleiman-muhtesem": [
    { name: "Gunpowder", priority: "critical", reason: "Build an Armory. Janissary + conquest = free Janissaries. Snowball from here." },
    { name: "Masonry", priority: "critical", reason: "Build a Quarry. Siege units are your bread and butter — +50% production." },
    { name: "Military Tradition", priority: "high", reason: "Clear a Barbarian Encampment. Golden Age combat bonus stacks with siege bonuses." }
  ],
  "sundiata": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Desert faith from city centers + Holy Site." },
    { name: "Early Empire", priority: "critical", reason: "Grow to 6 pop. Governors give +2 Food and +2 Faith in cities." },
    { name: "Currency", priority: "high", reason: "Sell a luxury. Suguba 20% discount on faith purchases." }
  ],
  "teddy-bull-moose": [
    { name: "Conservation", priority: "critical", reason: "Breathtaking Neighborhood. National Parks give +2 Science and +2 Culture in that city." },
    { name: "Drama and Poetry", priority: "critical", reason: "Build a Wonder. Film Studio doubles tourism pressure in Modern era." },
    { name: "Flight", priority: "high", reason: "Build an Industrial+ wonder. Seaside Resorts and improvement tourism activate." }
  ],
  "teddy-rough-rider": [
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. Home continent combat bonus + envoys from kills." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Cavalry path. Rough Rider is unique cavalry — +10 on Hills." },
    { name: "Political Philosophy", priority: "high", reason: "Meet 3 city-states. Government legacy bonuses earned in half time." }
  ],
  "tokugawa": [
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. Domestic routes give +1 Culture, +1 Science, +1 Gold. Avoid international." },
    { name: "Apprenticeship", priority: "critical", reason: "Build 3 Mines. Meiji adjacency + Electronics Factory culture to nearby cities." },
    { name: "Drama and Poetry", priority: "high", reason: "Build a Wonder. Theater Square adjacency from Meiji Restoration." }
  ],
  "tomyris": [
    { name: "Horseback Riding", priority: "critical", reason: "Build a Pasture. Saka Horse Archer doesn't need horses but cavalry doubling does." },
    { name: "Bronze Working", priority: "critical", reason: "Kill 3 Barbarians. Double cavalry production — build military early." },
    { name: "Military Tradition", priority: "high", reason: "Clear a Barbarian Encampment. Heal on kill + flanking = sustained aggression." }
  ],
  "trajan": [
    { name: "Iron Working", priority: "critical", reason: "Build an Iron Mine. Legion replaces Swordsman — can build roads and forts." },
    { name: "Engineering", priority: "critical", reason: "Unlocks Aqueduct. Bath gives +2 Housing and +1 Amenity beyond normal." },
    { name: "Writing", priority: "high", reason: "Meet a civ. Free Monuments mean early culture — use the head start for Campus." }
  ],
  "wilfrid-laurier": [
    { name: "Civil Engineering", priority: "critical", reason: "Tundra tiles get +1 Food after Civil Engineering. This transforms your empire." },
    { name: "Conservation", priority: "critical", reason: "Breathtaking Neighborhood. Mountie creates National Parks. Carbon Recapture for Diplomatic VP." },
    { name: "Political Philosophy", priority: "high", reason: "Meet 3 city-states. Diplomatic Favor from tourism + competitions is your path." }
  ],
  "wu-zetian": [
    { name: "Castles", priority: "critical", reason: "Free Spy from Tier 1 Government Plaza building. Spies operate at +2 levels." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. 60% Eurekas from Dynastic Cycle." },
    { name: "Political Philosophy", priority: "high", reason: "Meet 3 city-states. Government Plaza building triggers free Spy." }
  ],
  "yongle": [
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. Extra trade route capacity + project yields from City Center." },
    { name: "Writing", priority: "critical", reason: "Meet a civ. 60% Eurekas from Dynastic Cycle." },
    { name: "Apprenticeship", priority: "high", reason: "Build 3 Mines. City Center projects give +4 Gold, +3 Science, +2 Culture." }
  ],
  "theodora": [
    { name: "Astrology", priority: "critical", reason: "Find a Natural Wonder. Choose ANY belief — this is the most flexible religion start in the game." },
    { name: "Theology", priority: "critical", reason: "Earn a Great Prophet. Pick the best belief combo available — no restrictions." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Knights. Tagma replaces Knight — Taxis combat strength from conversions." }
  ],
  "nader-shah": [
    { name: "Iron Working", priority: "critical", reason: "Build an Iron Mine. Immortals are your key unit — ranged attack with melee strength." },
    { name: "Military Tradition", priority: "critical", reason: "Clear a Barbarian Encampment. +2 base combat strength always active — flanking amplifies." },
    { name: "Foreign Trade", priority: "high", reason: "Earn a Trade Route. Domestic routes give +2 Gold and +1 Culture with Satrapies." }
  ],
  "elizabeth": [
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. +100% Gold from trade routes to city-states." },
    { name: "Celestial Navigation", priority: "critical", reason: "Unlocks Harbor. Royal Navy Dockyard for naval movement." },
    { name: "Natural History", priority: "high", reason: "Unlocks Archaeological Museum. British Museum 6 slots for artifacts." }
  ],
  "abraham-lincoln": [
    { name: "Apprenticeship", priority: "critical", reason: "Build 3 Mines. Industrial Zone gives a free Melee unit first time built." },
    { name: "Political Philosophy", priority: "critical", reason: "Meet 3 city-states. Government legacy bonuses in half time." },
    { name: "Bronze Working", priority: "high", reason: "Kill 3 Barbarians. Melee and anti-cavalry get +5 combat strength." }
  ],
  "matthias-corvinus": [
    { name: "Political Philosophy", priority: "critical", reason: "Meet 3 city-states. Levying city-state units is your core mechanic." },
    { name: "Foreign Trade", priority: "critical", reason: "Earn a Trade Route. River production (+50% for districts/buildings) needs trade income." },
    { name: "Stirrups", priority: "high", reason: "Unlocks Cavalry path. Huszár gets +3 combat per active alliance." }
  ],
  "cleopatra-ptolemaic": [
    { name: "Writing", priority: "critical", reason: "Meet a civ. Campus + alliances = Great Scientist points. Form alliances ASAP." },
    { name: "Political Philosophy", priority: "critical", reason: "Meet 3 city-states. Alliances unlock with civics — you need alliance points flowing early." },
    { name: "Masonry", priority: "high", reason: "Build a Quarry. Iteru river production helps rush wonders and districts." }
  ],
  "victoria-steam": [
    { name: "Apprenticeship", priority: "critical", reason: "Build 3 Mines. Industrial focus — powered buildings give +4 yields." },
    { name: "Industrialization", priority: "critical", reason: "Build 3 Workshops. Coal Power Plant + free Coal from ability." },
    { name: "Military Engineering", priority: "high", reason: "Build an Aqueduct. Military Engineers give +20% Production in their city." }
  ]
};
