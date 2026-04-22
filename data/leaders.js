// Civ 6 Leader Data — includes BBG adjustments
const LEADERS = [
  {
    id: "alexander", name: "Alexander", civ: "Macedon",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "To the World's End", desc: "Cities never incur war weariness. All military units heal when capturing a city with a Wonder." },
    civAbility: { name: "Hellenistic Fusion", desc: "Gain a Eureka and Inspiration when conquering a city with an Encampment or Campus (and other districts)." },
    unique: [
      { name: "Hypaspist (UU)", desc: "Replaces Swordsman. +5 combat strength when besieging. Extra support bonus." },
      { name: "Hetairoi (UU)", desc: "Replaces Horseman. +5 when adjacent to a Great General. Generates Great General points on kill." },
      { name: "Basilikoi Paides (UB)", desc: "Replaces Barracks. Provides Science when a non-civilian unit is trained." }
    ],
    bbgNotes: "BBG: Combat victories give Science (20% of defeated unit strength). Hellenistic Fusion gives +20% Production for 10 turns on conquest plus Eurekas/Inspirations from districts. Hypaspist +10 CS vs districts. Hetairoi unlocked at Horseback Riding with free promotion.",
    strategy: {
      domination: { synergy: 95, tips: ["Rush Classical era units", "Chain city captures for healing", "Use Eurekas from conquest to stay ahead in tech"] },
      science: { synergy: 50, tips: ["Basilikoi Paides gives science", "Conquer cities with Campuses", "Not ideal but workable through conquest"] },
      culture: { synergy: 30, tips: ["Conquer cities with Theater Squares", "Hellenistic Fusion helps but not focused"] },
      religion: { synergy: 15, tips: ["No religious bonuses", "Would need to conquer Holy Cities"] },
      diplomacy: { synergy: 20, tips: ["War weariness immunity helps but diplomacy penalizes wars"] }
    }
  },
  {
    id: "basil", name: "Basil II", civ: "Byzantium",
    victoryTypes: ["domination", "religion"],
    tier: { vanilla: "S", bbg: "A" },
    leaderAbility: { name: "Porphyrogennetos", desc: "Heavy and light cavalry units do full damage to cities following Byzantium's religion." },
    civAbility: { name: "Taxis", desc: "+3 combat strength or +3 religious strength for each Holy City converted to Byzantium's religion." },
    unique: [
      { name: "Dromon (UU)", desc: "Replaces Quadrireme. +10 ranged strength. Additional range." },
      { name: "Tagma (UU)", desc: "Replaces Knight. +4 combat or religious strength to nearby land units." },
      { name: "Hippodrome (UD)", desc: "Replaces Entertainment Complex. Provides a free heavy cavalry unit when built and buildings completed." }
    ],
    bbgNotes: "BBG: Taxis gives +2 CS/RS per converted Holy City (not +3). +1 Great Prophet from Holy Sites. Kills spread religion. Tagma gives +2 CS/RS (not +4). Dromon +5 CS vs units (not +10). Hippodrome still gives free cavalry on buildings.",
    strategy: {
      domination: { synergy: 90, tips: ["Spread religion first, then attack", "Tagma + cavalry = devastating", "Hippodrome for free units"] },
      science: { synergy: 30, tips: ["No direct science bonuses", "Must rely on conquest for campuses"] },
      culture: { synergy: 25, tips: ["Not suited for culture victory"] },
      religion: { synergy: 85, tips: ["Taxis boosts religious strength", "Spread religion aggressively", "Combine with military pressure"] },
      diplomacy: { synergy: 20, tips: ["Aggressive playstyle conflicts with diplomacy"] }
    }
  },
  {
    id: "cleopatra", name: "Cleopatra", civ: "Egypt",
    victoryTypes: ["culture", "diplomacy"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Mediterranean's Bride", desc: "Trade routes to other civs provide +4 Gold. Other civs' trade routes to Egypt provide +2 Food and +2 Gold." },
    civAbility: { name: "Iteru", desc: "+15% production toward districts and wonders built next to rivers. Floodplains don't block district/wonder placement." },
    unique: [
      { name: "Maryannu Chariot Archer (UU)", desc: "Replaces Heavy Chariot. 2 movement when starting on open terrain. Ranged attack." },
      { name: "Sphinx (UI)", desc: "+1 Culture, +1 Faith. +1 Culture if adjacent to a Wonder. Cannot be built on hills." }
    ],
    bbgNotes: "BBG: Iteru unchanged (+15% Production near rivers). Mediterranean's Bride unchanged. Maryannu Chariot Archer has 4 Movement on open terrain.",
    strategy: {
      domination: { synergy: 25, tips: ["Maryannu Chariot Archer is decent early", "No lasting military bonuses"] },
      science: { synergy: 40, tips: ["River production helps build Campuses", "Trade route gold funds research agreements"] },
      culture: { synergy: 75, tips: ["Sphinx provides culture and faith", "Wonder production bonus is huge", "Build wonders along rivers"] },
      religion: { synergy: 55, tips: ["Sphinx faith generation", "River production for Holy Sites"] },
      diplomacy: { synergy: 65, tips: ["Trade route bonuses encourage alliances", "Wonder building scores diplomatic favor"] }
    }
  },
  {
    id: "cyrus", name: "Cyrus", civ: "Persia",
    victoryTypes: ["domination", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Fall of Babylon", desc: "+2 movement for all units for 10 turns after declaring a Surprise War. No penalties for declaring Surprise Wars." },
    civAbility: { name: "Satrapies", desc: "+1 Trade Route capacity with Political Philosophy. Domestic trade routes provide +2 Gold and +1 Culture." },
    unique: [
      { name: "Immortal (UU)", desc: "Replaces Swordsman. Ranged attack with melee strength. Heals faster." },
      { name: "Pairidaeza (UI)", desc: "+1 Culture, +2 Gold, +2 Appeal. Bonus Culture/Gold from adjacent districts and wonders." }
    ],
    bbgNotes: "BBG: Fall of Babylon reworked — +3 CS when attacking (always active, not just Surprise War). +5 Loyalty in occupied cities with garrison. Surprise War counts as Formal War for grievances. Domestic trade routes give Culture scaling with civics.",
    strategy: {
      domination: { synergy: 85, tips: ["Surprise War timing attacks", "Immortals are incredibly versatile", "Use movement bonus to blitz"] },
      science: { synergy: 40, tips: ["No direct science bonuses", "Conquer campuses with Surprise Wars"] },
      culture: { synergy: 70, tips: ["Pairidaeza is excellent for culture", "Domestic trade routes give culture", "Build Pairidaeza adjacent to wonders"] },
      religion: { synergy: 30, tips: ["No religious synergy"] },
      diplomacy: { synergy: 25, tips: ["Surprise Wars hurt diplomatic standing"] }
    }
  },
  {
    id: "frederick", name: "Frederick Barbarossa", civ: "Germany",
    victoryTypes: ["science", "domination"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Holy Roman Emperor", desc: "+7 combat strength when attacking city-states. Extra Military policy slot." },
    civAbility: { name: "Free Imperial Cities", desc: "Each city can build one more district than the population limit allows." },
    unique: [
      { name: "U-Boat (UU)", desc: "Replaces Submarine. Cheaper, +1 sight, +10 combat in ocean." },
      { name: "Hansa (UD)", desc: "Replaces Industrial Zone. Major adjacency from Commercial Hubs, Aqueducts, and other Hansas." }
    ],
    bbgNotes: "BBG: Free Imperial Cities now requires Guilds civic to unlock extra district. Hansa loses Commercial Hub major adjacency (gets it from Encampments instead via Holy Roman Emperor). Tiger I unique tank replaces U-Boat timing. Extra Military policy slot unchanged.",
    strategy: {
      domination: { synergy: 70, tips: ["Extra Military policy slot is huge", "Hansa production powers military", "Bully city-states early"] },
      science: { synergy: 85, tips: ["Extra district = Campus in every city", "Hansa production accelerates space projects", "Build Campus + Hansa combos"] },
      culture: { synergy: 60, tips: ["Extra district for Theater Squares", "Production helps build wonders"] },
      religion: { synergy: 35, tips: ["Extra district for Holy Sites", "Not focused on religion"] },
      diplomacy: { synergy: 45, tips: ["City-state aggression hurts suzerainty", "Production helps build diplomatic wonders"] }
    }
  },
  {
    id: "gandhi", name: "Gandhi", civ: "India",
    victoryTypes: ["religion", "diplomacy"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Satyagraha", desc: "+5 Faith for each civ met that has founded a religion and is at peace. Opponents receive double war weariness for fighting Gandhi." },
    civAbility: { name: "Dharma", desc: "Gains follower beliefs of all religions present in their cities." },
    unique: [
      { name: "Varu (UU)", desc: "Replaces Horseman. -5 combat strength to adjacent enemy units." },
      { name: "Stepwell (UI)", desc: "+1 Food, +1 Housing. +1 Faith if adjacent to Holy Site. +1 Food if adjacent to Farm." }
    ],
    bbgNotes: "BBG: Satyagraha reworked — grants extra belief when founding religion. +5 Faith per civ met with religion and at peace. Settlers/Builders from Holy Site cities get +1 Movement. Dharma gives +1 Amenity per religion following yours. Missionaries get +2 spreads. +100% religious pressure from trade routes.",
    strategy: {
      domination: { synergy: 25, tips: ["Varu is decent but era-limited", "War weariness on enemies helps defensively"] },
      science: { synergy: 45, tips: ["Stepwell housing helps city growth", "No direct science bonuses"] },
      culture: { synergy: 50, tips: ["Dharma can grab culture-boosting beliefs", "Stepwells provide food for growth"] },
      religion: { synergy: 90, tips: ["Satyagraha faith generation is massive", "Dharma collects all follower beliefs", "Stepwell faith near Holy Sites"] },
      diplomacy: { synergy: 70, tips: ["Peace-focused gameplay suits diplomacy", "War weariness deters aggression", "Faith can buy Great People"] }
    }
  },
  {
    id: "gilgamesh", name: "Gilgamesh", civ: "Sumeria",
    victoryTypes: ["domination", "science"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Adventures with Enkidu", desc: "When at war with a common foe, allies share pillage rewards and combat XP within 5 tiles. Alliances gain additional Alliance Points for being at war with a common foe. Bonus influence points from max alliance level. Tribal Village reward from Barbarian Outposts. Half-cost city-state levies." },
    civAbility: { name: "The Cradle of Civilization", desc: "Farms receive +1 Food adjacent to rivers, and +1 Production adjacent to a Ziggurat with Early Empire. Does not receive damage from Floods." },
    unique: [
      { name: "War-Cart (UU)", desc: "Ancient era unit. 4 Movement on open terrain. Can escort civilians. No penalty vs anti-cavalry. +4 Combat Strength vs Barbarians." },
      { name: "Ziggurat (UI)", desc: "+2 Science, +1 Housing. +1 Culture if adjacent to river. +1 Faith after Early Empire for each adjacent district or every 2 adjacent Farms. Cannot be built on hills." }
    ],
    bbgNotes: "BBG: Civ ability reworked — Farms get +1 Food adjacent to rivers, +1 Production adjacent to Ziggurat with Early Empire. No flood damage. Adventures of Enkidu adds tribal village rewards from barb camps, half-cost levies, and alliance bonuses. War-Cart gets 4 Movement on open terrain, escorts civilians.",
    strategy: {
      domination: { synergy: 80, tips: ["War-Cart rush is devastating early", "Joint wars with allies for no penalties", "Barbarian outposts = free bonuses"] },
      science: { synergy: 75, tips: ["Ziggurat is one of the best early science improvements", "Build Ziggurats along rivers", "War-Cart protects early expansion"] },
      culture: { synergy: 45, tips: ["Ziggurat gives some culture", "Not focused on culture"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 50, tips: ["Alliance-friendly leader ability", "Joint wars without penalties"] }
    }
  },
  {
    id: "hojo", name: "Hojo Tokimune", civ: "Japan",
    victoryTypes: ["culture", "domination", "religion"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Divine Wind", desc: "+5 combat strength in land tiles adjacent to coast and in shallow water. Encampment, Holy Site, and Theater Square districts build in half time." },
    civAbility: { name: "Meiji Restoration", desc: "Districts receive +1 adjacency bonus for each adjacent district." },
    unique: [
      { name: "Samurai (UU)", desc: "Replaces Man-at-Arms. Does not suffer combat penalties when damaged." },
      { name: "Electronics Factory (UB)", desc: "Replaces Factory. Provides Culture to all cities within 6 tiles in addition to Production." }
    ],
    bbgNotes: "BBG: Meiji Restoration changed — all districts except Commercial Hubs/Harbors get standard adjacency from adjacent districts. Commercial Hubs lose river adjacency. Divine Wind gives +100% Production to Theater Square/Holy Site/Encampment. +3 CS (not +5) near coast/shallow water. Hurricane immunity.",
    strategy: {
      domination: { synergy: 70, tips: ["Samurai are strong mid-game", "Coastal combat bonus on island maps", "Half-price Encampments"] },
      science: { synergy: 65, tips: ["Meiji Restoration boosts Campus adjacency", "Electronics Factory production helps"] },
      culture: { synergy: 80, tips: ["Half-price Theater Squares", "Electronics Factory gives culture", "Meiji Restoration for adjacency"] },
      religion: { synergy: 70, tips: ["Half-price Holy Sites", "Meiji Restoration adjacency", "Strong religious foundation"] },
      diplomacy: { synergy: 45, tips: ["Flexible but not focused on diplomacy"] }
    }
  },
  {
    id: "jadwiga", name: "Jadwiga", civ: "Poland",
    victoryTypes: ["religion", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Lithuanian Union", desc: "Taking territory from another civ with culture bomb converts it to Poland's religion. Holy Sites receive +2 adjacency from districts." },
    civAbility: { name: "Golden Liberty", desc: "Culture bomb when building Encampments or Fort. One Military policy slot converted to Wildcard." },
    unique: [
      { name: "Winged Hussar (UU)", desc: "Replaces Cavalry. Pushes back defenders when dealing more damage." },
      { name: "Sukiennice (UB)", desc: "Replaces Market. International trade routes provide +2 Production, domestic +4 Gold." }
    ],
    bbgNotes: "BBG: Golden Liberty and Lithuanian Union unchanged from vanilla. Relics provide bonus Faith (+2), Culture (+2), Gold (+4). Winged Hussar replaces Cuirassier (not Cavalry), unlocked at Reformed Church civic.",
    strategy: {
      domination: { synergy: 55, tips: ["Winged Hussar is a strong timing push", "Culture bombs expand territory", "Wildcard slot is flexible"] },
      science: { synergy: 40, tips: ["No direct science bonuses", "Wildcard slot can hold science policies"] },
      culture: { synergy: 70, tips: ["Culture bombs for territory", "Sukiennice trade bonuses", "Wildcard policy slot flexibility"] },
      religion: { synergy: 90, tips: ["Holy Site adjacency from districts is top-tier", "Culture bombs spread religion", "Lithuanian Union auto-converts"] },
      diplomacy: { synergy: 45, tips: ["Wildcard slot helps", "Not focused on diplomacy"] }
    }
  },
  {
    id: "john-curtin", name: "John Curtin", civ: "Australia",
    victoryTypes: ["science", "diplomacy"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Citadel of Civilization", desc: "+100% Production for 10 turns when war is declared on Australia or when liberating a city." },
    civAbility: { name: "Land Down Under", desc: "+3 Housing in coastal cities. Campuses, Commercial Hubs, Holy Sites, and Theater Squares gain +1 for Charming, +3 for Breathtaking appeal." },
    unique: [
      { name: "Digger (UU)", desc: "Replaces Infantry. +10 combat on coastal tiles, +5 outside home territory." },
      { name: "Outback Station (UI)", desc: "+1 Food, +1 Production. Bonus from adjacent Pastures." }
    ],
    bbgNotes: "BBG: Citadel of Civilization nerfed to +50% Production only from liberating cities (no longer triggers from being declared on). Land Down Under adds +1 Production on Pastures at Political Philosophy, Pastures trigger Culture Bomb. Appeal adjacency unchanged.",
    strategy: {
      domination: { synergy: 45, tips: ["Digger is strong late-game", "Production bonus when attacked", "Defensive into counter-attack"] },
      science: { synergy: 85, tips: ["Appeal-based Campus adjacency is incredible", "Settle near mountains + coast", "Production bonus accelerates space race"] },
      culture: { synergy: 65, tips: ["Appeal boosts Theater Squares too", "Outback Stations improve land"] },
      religion: { synergy: 50, tips: ["Holy Site appeal adjacency", "Not primary focus"] },
      diplomacy: { synergy: 75, tips: ["Liberation production bonus", "Defensive playstyle suits diplomacy", "Coastal housing for growth"] }
    }
  },
  {
    id: "kupe", name: "Kupe", civ: "Maori",
    victoryTypes: ["culture", "religion"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Kupe's Voyage", desc: "Starts in Ocean. +2 Science and +2 Culture per turn before settling. First city receives a free Builder and extra population." },
    civAbility: { name: "Mana", desc: "Unimproved Woods and Rainforest provide +1 Production and +1 Faith. Fishing Boats provide +1 Food. Cannot harvest resources or earn Great Writers." },
    unique: [
      { name: "Toa (UU)", desc: "Replaces Swordsman. Can construct Pa improvement. Adjacent enemies get -5 combat strength." },
      { name: "Marae (UB)", desc: "Replaces Amphitheater. +1 Culture and +1 Faith for each passable feature tile in the city." }
    ],
    bbgNotes: "BBG: Mana reworked — embarked units +2 Movement with Shipbuilding. Fishing Boats Culture Bomb and give +1 Food with Celestial Navigation. Unimproved Woods/Rainforest gain Production scaling through eras. Cannot harvest resources. Kupe's Voyage — Settlers can embark with Sailing, Palace gives +3 Housing.",
    strategy: {
      domination: { synergy: 35, tips: ["Toa debuff is useful defensively", "Not suited for aggression"] },
      science: { synergy: 55, tips: ["Early science from voyage", "No direct science infrastructure bonuses"] },
      culture: { synergy: 85, tips: ["Marae is incredible for culture", "Preserve forests and rainforests", "Early culture from voyage"] },
      religion: { synergy: 70, tips: ["Mana faith from unimproved terrain", "Marae provides faith", "Strong religious foundation"] },
      diplomacy: { synergy: 50, tips: ["Peaceful playstyle works", "Not specifically focused"] }
    }
  },
  {
    id: "lady-six-sky", name: "Lady Six Sky", civ: "Maya",
    victoryTypes: ["science"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Ix Mutal Ajaw", desc: "Non-capital cities within 6 tiles of the capital gain +10% to all yields. Cities beyond 6 tiles get -15% to all yields." },
    civAbility: { name: "Mayab", desc: "Farms provide +1 Housing and +1 Gold. +1 Amenity for Luxury resources adjacent to the City Center. No Housing or adjacency from fresh water." },
    unique: [
      { name: "Hul'che (UU)", desc: "Replaces Archer. +5 ranged strength when attacking wounded units." },
      { name: "Observatory (UD)", desc: "Replaces Campus. +2 Science from adjacent Farms and +1 from adjacent Plantations." }
    ],
    bbgNotes: "BBG: Ix Mutal Ajaw changed to +5% yields within 6 tiles (not +10%), -10% beyond (not -15%). +3 CS for units within 6 tiles of capital. Mayab adds +1 Production per adjacent Observatory on Farms, +1 Gold on Farms. Plantations give +1 Science per adjacent Observatory.",
    strategy: {
      domination: { synergy: 40, tips: ["Hul'che is a strong early unit", "Compact empire limits expansion"] },
      science: { synergy: 95, tips: ["Observatory + Farms = massive adjacency", "Compact empire maximizes yield bonus", "Settle tightly around capital"] },
      culture: { synergy: 45, tips: ["Yield bonus applies to culture too", "Not specifically focused"] },
      religion: { synergy: 40, tips: ["Yield bonus helps Holy Sites near capital"] },
      diplomacy: { synergy: 35, tips: ["Compact empire limits influence"] }
    }
  },
  {
    id: "mansa-musa", name: "Mansa Musa", civ: "Mali",
    victoryTypes: ["religion", "diplomacy"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Sahel Merchants", desc: "International trade routes gain +1 Gold per flat desert tile in the origin city." },
    civAbility: { name: "Songs of the Jeli", desc: "City Centers gain +1 Faith and +1 Food for each adjacent Desert and Desert Hills. Mines receive -1 Production. May purchase Commercial Hub buildings with Faith." },
    unique: [
      { name: "Mandekalu Cavalry (UU)", desc: "Replaces Knight. Prevents traders within 4 tiles from being plundered. Gains Gold from kills." },
      { name: "Suguba (UD)", desc: "Replaces Commercial Hub. 20% discount on Gold and Faith purchases in the city." }
    ],
    bbgNotes: "BBG: Sahel Merchants reworked — +1 Trade Route with Banking. Holy Sites give major adjacency to Suguba. +15% Production toward Holy Sites. Songs of the Jeli unchanged. Suguba gets standard adjacency from Holy Sites.",
    strategy: {
      domination: { synergy: 35, tips: ["Mandekalu Cavalry is decent", "Gold can fund military purchases", "Production penalty hurts unit building"] },
      science: { synergy: 50, tips: ["Gold purchases can supplement", "Suguba discount helps"] },
      culture: { synergy: 45, tips: ["Faith and gold for Great People"] },
      religion: { synergy: 90, tips: ["Desert faith generation is massive", "Suguba faith purchases at discount", "Buy religious units cheaply"] },
      diplomacy: { synergy: 80, tips: ["Gold generation is top-tier", "Trade route bonuses", "Buy diplomatic favor"] }
    }
  },
  {
    id: "montezuma", name: "Montezuma", civ: "Aztec",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Gifts for the Tlatoani", desc: "+1 Amenity for each different Luxury resource improved in Aztec territory. Combat bonus for each different Luxury." },
    civAbility: { name: "Legend of the Five Suns", desc: "Can spend Builder charges to complete 20% of a district's production cost." },
    unique: [
      { name: "Eagle Warrior (UU)", desc: "Replaces Warrior. Can convert defeated units into Builders." },
      { name: "Tlachtli (UB)", desc: "Replaces Arena. +2 Faith, +1 Great General point, +1 Amenity." }
    ],
    bbgNotes: "BBG: Legend of Five Suns buffed to 30% district completion per Builder charge (not 20%). +50% Production toward land melee units. Gifts for the Tlatoani — luxuries give Amenity to 2 extra cities. +1 CS per luxury when attacking. Tlachtli gives +1 Culture to nearby cities, +3 Tourism.",
    strategy: {
      domination: { synergy: 90, tips: ["Eagle Warrior rush is iconic", "Convert enemies to Builders", "Luxury combat bonus stacks"] },
      science: { synergy: 55, tips: ["Builder charges rush Campuses", "Legend of Five Suns is versatile"] },
      culture: { synergy: 50, tips: ["Builder charges rush Theater Squares", "Amenities help growth"] },
      religion: { synergy: 40, tips: ["Tlachtli provides faith", "Builder charges for Holy Sites"] },
      diplomacy: { synergy: 30, tips: ["Aggressive playstyle conflicts with diplomacy"] }
    }
  },
  {
    id: "pedro", name: "Pedro II", civ: "Brazil",
    victoryTypes: ["culture", "religion"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Magnanimous", desc: "Recruiting or patronizing a Great Person refunds 20% of their point cost." },
    civAbility: { name: "Amazon", desc: "Rainforest tiles provide +1 adjacency to Campus, Commercial Hub, Holy Site, and Theater Square districts." },
    unique: [
      { name: "Minas Geraes (UU)", desc: "Replaces Battleship. Stronger ranged and combat strength." },
      { name: "Street Carnival (UD)", desc: "Replaces Entertainment Complex. Provides Great People points." }
    ],
    bbgNotes: "BBG: Amazon adds +1 Production to unimproved Rainforest at Construction. Rainforest adjacency and appeal bonus unchanged. Magnanimous 20% refund unchanged. Minas Geraes unlocked at Nationalism with +10 Ranged/Melee CS with Refining.",
    strategy: {
      domination: { synergy: 30, tips: ["Minas Geraes is strong but late", "Not suited for domination"] },
      science: { synergy: 55, tips: ["Rainforest Campus adjacency", "Great Scientist refund"] },
      culture: { synergy: 80, tips: ["Rainforest Theater Square adjacency", "Great Artist/Writer/Musician refund", "Street Carnival Great People points"] },
      religion: { synergy: 65, tips: ["Rainforest Holy Site adjacency", "Great Prophet refund"] },
      diplomacy: { synergy: 45, tips: ["Not specifically focused on diplomacy"] }
    }
  },
  {
    id: "peter", name: "Peter", civ: "Russia",
    victoryTypes: ["religion", "culture"],
    tier: { vanilla: "S", bbg: "A" },
    leaderAbility: { name: "The Grand Embassy", desc: "Trade routes to more advanced civs grant +1 Science/Culture per 3 techs/civics ahead." },
    civAbility: { name: "Mother Russia", desc: "Extra territory when founding cities. Tundra provides +1 Faith and +1 Production." },
    unique: [
      { name: "Cossack (UU)", desc: "Replaces Cavalry. +5 combat in or adjacent to home territory. Can move after attacking." },
      { name: "Lavra (UD)", desc: "Replaces Holy Site. +1 Great Prophet point. City gains a tile when a Great Person is used." }
    ],
    bbgNotes: "BBG: Mother Russia changed — +1 Production from Tundra (not +1 Faith). Cities in Tundra with Shrine get +1 Food. Blizzard immunity. Grand Embassy unchanged. Lavra gives +1 Great Writer with Temple, +1 Great Artist with Worship building.",
    strategy: {
      domination: { synergy: 50, tips: ["Cossack is strong defensively", "Tundra production helps military"] },
      science: { synergy: 55, tips: ["Grand Embassy catches up in tech", "Not primary focus"] },
      culture: { synergy: 80, tips: ["Grand Embassy culture from trade", "Lavra territory expansion", "Great People from Lavra"] },
      religion: { synergy: 95, tips: ["Lavra is the best Holy Site replacement", "Tundra faith is massive", "Extra territory for more tundra"] },
      diplomacy: { synergy: 50, tips: ["Trade route bonuses help", "Not specifically focused"] }
    }
  },
  {
    id: "poundmaker", name: "Poundmaker", civ: "Cree",
    victoryTypes: ["diplomacy", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Favorable Terms", desc: "All Alliance types provide Shared Visibility. Trade routes gain +1 Food per Camp or Pasture at destination." },
    civAbility: { name: "Nihithaw", desc: "Gain a free Trader and +1 Trade Route capacity when researching Pottery. Unclaimed tiles within 3 of a Cree city come under Cree control when a Trader first moves into them." },
    unique: [
      { name: "Okihtcitaw (UU)", desc: "Replaces Scout. Stronger combat, free promotion." },
      { name: "Mekewap (UI)", desc: "+1 Production, +1 Housing. Bonus Gold from adjacent Luxury resources, Food from adjacent Bonus resources." }
    ],
    bbgNotes: "BBG: Nihithaw unchanged. Favorable Terms — allies share visibility, trade routes give +1 Food per Camp/Pasture at destination, incoming trade gives +1 Gold per Camp/Pasture. Okihtcitaw gets +5 CS vs stronger units.",
    strategy: {
      domination: { synergy: 30, tips: ["Okihtcitaw is a better scout, not a military unit", "Not suited for aggression"] },
      science: { synergy: 60, tips: ["Trade routes fund science", "Mekewap production helps", "Alliance shared visibility"] },
      culture: { synergy: 50, tips: ["Mekewap provides some yields", "Not focused"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 80, tips: ["Alliance-focused abilities", "Shared Visibility builds trust", "Trade route bonuses encourage cooperation"] }
    }
  },
  {
    id: "saladin", name: "Saladin", civ: "Arabia",
    victoryTypes: ["religion", "science"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Righteousness of the Faith", desc: "Worship building costs 90% less Faith. +10% Science, Faith, and Culture in cities with that building." },
    civAbility: { name: "The Last Prophet", desc: "Automatically receives the last available Great Prophet. +1 Science per foreign city following Arabia's religion." },
    unique: [
      { name: "Mamluk (UU)", desc: "Replaces Knight. Heals at the end of every turn even after moving or attacking." },
      { name: "Madrasa (UB)", desc: "Replaces University. Provides Faith equal to the adjacency bonus of the Campus." }
    ],
    bbgNotes: "BBG: Righteousness of the Faith — worship building costs 1/10 Faith. Gives 5% Science/Culture/Faith, +5% with Reformed Church, +5% when completing religion. Last Prophet unchanged.",
    strategy: {
      domination: { synergy: 45, tips: ["Mamluk self-healing is strong", "Religious combat support"] },
      science: { synergy: 80, tips: ["Madrasa provides science AND faith", "Last Prophet guarantees religion for bonuses", "+1 Science per converted foreign city"] },
      culture: { synergy: 50, tips: ["Worship building bonuses include culture", "Not primary focus"] },
      religion: { synergy: 90, tips: ["Guaranteed Great Prophet", "Cheap worship buildings", "Spread religion for science bonus"] },
      diplomacy: { synergy: 45, tips: ["Religion spread can help or hurt relations"] }
    }
  },
  {
    id: "seondeok", name: "Seondeok", civ: "Korea",
    victoryTypes: ["science"],
    tier: { vanilla: "S", bbg: "A" },
    leaderAbility: { name: "Hwarang", desc: "+3% Culture and Science for each promoted Governor." },
    civAbility: { name: "Three Kingdoms", desc: "Mines receive +1 Science. Farms receive +1 Food if adjacent to a Seowon." },
    unique: [
      { name: "Hwacha (UU)", desc: "Replaces Field Cannon. Stronger ranged attack but cannot move and attack in the same turn." },
      { name: "Seowon (UD)", desc: "Replaces Campus. +4 base Science but loses Science for each adjacent district." }
    ],
    bbgNotes: "BBG: Hwarang reworked — +1 Amenity in cities with Governor. +30% yield to Seowon buildings per Governor promotion. Cities without Governor get -10% yields after Feudalism. +1 Governor Title at Feudalism. Seowon reworked — +1 base Science, +1 per 2 adjacent mines, +2 per Geothermal. Culture bombs. Science specialists give +1 Food.",
    strategy: {
      domination: { synergy: 30, tips: ["Hwacha is defensive", "Tech lead enables advanced units"] },
      science: { synergy: 98, tips: ["Seowon is the best Campus replacement", "Place Seowon away from other districts", "Mines give science", "Promote Governors for bonus"] },
      culture: { synergy: 40, tips: ["Hwarang gives some culture", "Not focused"] },
      religion: { synergy: 25, tips: ["No religious bonuses", "Seowon placement conflicts with Holy Sites"] },
      diplomacy: { synergy: 35, tips: ["Tech lead helps but not focused"] }
    }
  },
  {
    id: "simon-bolivar", name: "Simón Bolívar", civ: "Gran Colombia",
    victoryTypes: ["domination"],
    tier: { vanilla: "S", bbg: "S" },
    leaderAbility: { name: "Campaña Admirable", desc: "Earn a Comandante General (unique Great General) when entering a new era." },
    civAbility: { name: "Ejército Patriota", desc: "+1 Movement to all units." },
    unique: [
      { name: "Llanero (UU)", desc: "Replaces Cavalry. Low maintenance. +4 combat per adjacent Llanero. Fully heals when in range of a retiring Comandante General." },
      { name: "Hacienda (UI)", desc: "+2 Gold, +1 Production, +0.5 Housing. Bonus Food from adjacent Plantations." }
    ],
    bbgNotes: "BBG: Ejército Patriota nerfed — +1 Movement only after Political Philosophy (not from start). Promoting cavalry/air/spies doesn't end turn. Campaña Admirable — may not recruit Great Generals. Llanero +2 CS per adjacent (not +4).",
    strategy: {
      domination: { synergy: 98, tips: ["+1 movement is game-breaking for military", "Comandante Generals every era", "Llanero swarms are devastating", "Best domination civ in the game"] },
      science: { synergy: 45, tips: ["Movement helps exploration", "Hacienda provides some yields"] },
      culture: { synergy: 40, tips: ["Not focused on culture"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 25, tips: ["Aggressive playstyle conflicts with diplomacy"] }
    }
  },
  {
    id: "victoria", name: "Victoria", civ: "England",
    victoryTypes: ["domination", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Pax Britannica", desc: "Free melee unit when settling on a foreign continent. +1 Trade Route per foreign continent city." },
    civAbility: { name: "British Museum", desc: "Archaeological Museums have 6 slots and can hold 2 full artifact sets." },
    unique: [
      { name: "Redcoat (UU)", desc: "Replaces Infantry. +10 combat on foreign continent. Can disembark without movement cost." },
      { name: "Royal Navy Dockyard (UD)", desc: "Replaces Harbor. +1 Movement for naval units. Gold and Loyalty when built on foreign continent." }
    ],
    bbgNotes: "BBG: Pax Britannica reworked — cities 10+ tiles from capital get free melee unit. Royal Navy Dockyard grants strongest naval unit you can build. Naval melee escorts civilians. Redcoat +5 CS on foreign continent (not +10). Workshop of the World is now the civ ability — Iron/Coal mines +2 resources, Harbor buildings +10 stockpile, +100% Production to Military Engineers.",
    strategy: {
      domination: { synergy: 65, tips: ["Redcoat is strong on foreign continents", "Free units when settling abroad", "Naval dominance with Dockyard"] },
      science: { synergy: 55, tips: ["Trade routes from foreign continents fund science", "Not directly focused"] },
      culture: { synergy: 70, tips: ["British Museum is incredible for culture", "6-slot Archaeological Museums", "Artifact tourism is powerful"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 45, tips: ["Trade route bonuses help", "Not specifically focused"] }
    }
  },
  {
    id: "wilhelmina", name: "Wilhelmina", civ: "Netherlands",
    victoryTypes: ["science", "culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Radio Oranje", desc: "Domestic trade routes provide +1 Loyalty. Trade routes to/from foreign civs provide +1 Culture." },
    civAbility: { name: "Grote Rivieren", desc: "+2 adjacency for Campus, Theater Square, and Industrial Zone if adjacent to a river. Building a Harbor triggers a Culture Bomb." },
    unique: [
      { name: "De Zeven Provinciën (UU)", desc: "Replaces Frigate. +7 ranged strength when attacking defensible districts." },
      { name: "Polder (UI)", desc: "+1 Food, +1 Production, +1 Gold. +0.5 Housing. Must be built on coast adjacent to 3+ land tiles." }
    ],
    bbgNotes: "BBG: Grote Rivieren adds +50% Production toward Dam and Flood Barrier. Radio Oranje reworked — domestic trade gives +2 Loyalty, international trade gives +2 Culture to you. +3 CS for naval units defending on Polder. Dutch Campuses give +1 Great Admiral point.",
    strategy: {
      domination: { synergy: 35, tips: ["De Zeven Provinciën is a strong naval unit", "Not focused on domination"] },
      science: { synergy: 75, tips: ["River Campus adjacency is excellent", "Settle along rivers", "Industrial Zone adjacency helps production"] },
      culture: { synergy: 75, tips: ["River Theater Square adjacency", "Trade route culture", "Harbor culture bombs"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 50, tips: ["Trade route bonuses", "Loyalty from domestic trade"] }
    }
  },
  {
    id: "pachacuti", name: "Pachacuti", civ: "Inca",
    victoryTypes: ["science", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Qhapaq Ñan", desc: "Domestic trade routes gain +1 Food for each Mountain tile in the origin city." },
    civAbility: { name: "Mit'a", desc: "Citizens can work Mountain tiles. Mountain tiles provide +2 Production. Gain the Qhapaq Ñan improvement." },
    unique: [
      { name: "Warak'aq (UU)", desc: "Replaces Skirmisher. Can attack twice if it hasn't moved." },
      { name: "Terrace Farm (UI)", desc: "+1 Food. +1 Food for each adjacent Mountain. +1 Production for adjacent Aqueduct." }
    ],
    bbgNotes: "BBG: Mit'a buffed — Mountains give +2 Production (+3 in Industrial era), +1 Food per adjacent Terrace Farm. Cities don't suffer non-food yield penalties from negative amenities. Warak'aq gets +1 additional attack per turn.",
    strategy: {
      domination: { synergy: 35, tips: ["Warak'aq is decent but niche", "Mountain terrain is defensive"] },
      science: { synergy: 80, tips: ["Mountain Campus adjacency is guaranteed", "Huge population from Terrace Farms", "Production from mountains"] },
      culture: { synergy: 70, tips: ["Population growth drives culture", "Mountain adjacency for Theater Squares"] },
      religion: { synergy: 50, tips: ["Mountain Holy Site adjacency", "Food surplus supports religion"] },
      diplomacy: { synergy: 45, tips: ["Peaceful playstyle works", "Not specifically focused"] }
    }
  },
  {
    id: "gorgo", name: "Gorgo", civ: "Greece",
    victoryTypes: ["domination", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Thermopylae", desc: "Gain Culture equal to 50% of the combat strength of defeated units." },
    civAbility: { name: "Plato's Republic", desc: "One extra Wildcard policy slot." },
    unique: [
      { name: "Hoplite (UU)", desc: "Replaces Spearman. +10 combat when adjacent to another Hoplite." },
      { name: "Acropolis (UD)", desc: "Replaces Theater Square. +1 adjacency from districts. Must be built on hills." }
    ],
    bbgNotes: "BBG: Plato's Republic — Wildcard slot requires Early Empire civic. Thermopylae adds +1 CS per Military policy slot. Culture from kills at 50% of defeated unit CS. Hoplite +7 CS (not +10) when adjacent to another Hoplite.",
    strategy: {
      domination: { synergy: 75, tips: ["Culture from kills accelerates civics", "Hoplite formation is strong early", "Wildcard slot for military policies"] },
      science: { synergy: 45, tips: ["Wildcard slot can hold science policies", "Not directly focused"] },
      culture: { synergy: 85, tips: ["Acropolis is excellent", "Culture from combat", "Wildcard slot flexibility", "Kill barbarians for culture"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 40, tips: ["Wildcard slot helps", "Combat focus conflicts with diplomacy"] }
    }
  },
  {
    id: "pericles", name: "Pericles", civ: "Greece",
    victoryTypes: ["culture", "diplomacy"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Surrounded by Glory", desc: "+5% Culture per city-state where you are Suzerain." },
    civAbility: { name: "Plato's Republic", desc: "One extra Wildcard policy slot." },
    unique: [
      { name: "Hoplite (UU)", desc: "Replaces Spearman. +10 combat when adjacent to another Hoplite." },
      { name: "Acropolis (UD)", desc: "Replaces Theater Square. +1 adjacency from districts. Must be built on hills." }
    ],
    bbgNotes: "BBG: Surrounded by Glory buffed — +5% Culture AND +5% Tourism per suzerain city-state. +1 Envoy when Amphitheater completed. Acropolis gets Production adjacency from wonders/districts. Wildcard slot requires Early Empire.",
    strategy: {
      domination: { synergy: 30, tips: ["Hoplite is decent early", "Not focused on domination"] },
      science: { synergy: 40, tips: ["Wildcard slot flexibility", "Not focused"] },
      culture: { synergy: 90, tips: ["Suzerainty culture bonus stacks", "Acropolis adjacency", "Wildcard slot", "Invest in envoys"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 75, tips: ["City-state focus aligns with diplomacy", "Suzerainty provides diplomatic favor", "Wildcard slot flexibility"] }
    }
  },
  // === BATCH 1: Missing leaders ===
  {
    id: "ambiorix", name: "Ambiorix", civ: "Gaul",
    victoryTypes: ["domination", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "King of the Eburones", desc: "Units receive +2 combat strength for each adjacent combat unit." },
    civAbility: { name: "Hallstatt Culture", desc: "Mines provide a minor adjacency bonus for all specialty districts. Specialty districts cannot be built adjacent to the City Center. +1 Culture for each non-adjacent specialty district." },
    unique: [
      { name: "Gaesatae (UU)", desc: "Replaces Warrior. +10 combat vs stronger units and district defenses. +5 combat from adjacent units." },
      { name: "Oppidum (UD)", desc: "Replaces Industrial Zone. Unlocked at Iron Working. Lower cost. Can perform a ranged attack. Major adjacency from Quarries and strategic resources." }
    ],
    bbgNotes: "BBG: Hallstatt Culture reworked — Quarries give standard adjacency (doubled for Oppidum), Mines give minor adjacency. Districts can't be adjacent to City Center. King of Eburones — Mines trigger Culture Bomb. +1 CS per adjacent military unit for melee/anti-cav. Culture equal to 25% of military unit production cost.",
    strategy: {
      domination: { synergy: 85, tips: ["Gaesatae rush is devastating early", "Adjacent unit bonus stacks well", "Oppidum production fuels military"] },
      science: { synergy: 45, tips: ["Oppidum production helps", "No direct science bonuses"] },
      culture: { synergy: 65, tips: ["Non-adjacent district culture bonus", "Hallstatt Culture rewards wide play"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 25, tips: ["Aggressive playstyle conflicts with diplomacy"] }
    }
  },
  {
    id: "amanitore", name: "Amanitore", civ: "Nubia",
    victoryTypes: ["domination", "religion"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Kandake of Meroë", desc: "+20% Production toward districts if a Nubian Pyramid is adjacent. +40% if adjacent to the City Center." },
    civAbility: { name: "Ta-Seti", desc: "+50% Production toward Ranged units. Ranged units gain +50% combat experience. Mines over strategic resources provide +1 Production. Mines over bonus/luxury provide +2 Gold." },
    unique: [
      { name: "Pítati Archer (UU)", desc: "Replaces Archer. Stronger, faster. Upgrades to Crossbowman." },
      { name: "Nubian Pyramid (UI)", desc: "+2 Faith. Bonus yields from adjacent districts. Must be built on Desert/Desert Hills." }
    ],
    bbgNotes: "BBG: Ta-Seti changed to +30% Production toward Ranged and Naval Ranged units (not +50%). +50% combat XP for ranged. Kandake of Meroë — +20% Production to all districts, +40% if Nubian Pyramid in city (not just adjacent to City Center).",
    strategy: {
      domination: { synergy: 80, tips: ["Pítati Archer rush is top-tier", "Ranged unit production bonus is huge", "Upgrade path to Crossbowman"] },
      science: { synergy: 55, tips: ["Nubian Pyramid adjacent to Campus", "Production bonus for districts"] },
      culture: { synergy: 45, tips: ["Nubian Pyramid adjacent to Theater Square", "Not primary focus"] },
      religion: { synergy: 75, tips: ["Nubian Pyramid base faith is strong", "Adjacent to Holy Site for more yields", "Desert start suits religion"] },
      diplomacy: { synergy: 35, tips: ["Not focused on diplomacy"] }
    }
  },
  {
    id: "ba-trieu", name: "Bà Triệu", civ: "Vietnam",
    victoryTypes: ["culture", "domination"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Drive Out the Aggressors", desc: "+5 combat strength when fighting in Rainforest, Marsh, or Woods. +1 Movement in those features." },
    civAbility: { name: "Nine Dragon River Delta", desc: "Land specialty districts can only be built on Rainforest, Marsh, or Woods. Buildings in those features provide bonus yields." },
    unique: [
      { name: "Voi Chiến (UU)", desc: "Replaces Crossbowman. +5 combat strength when in features. Can move after attacking." },
      { name: "Thành (UI)", desc: "+2 Culture. +2 Tourism after Flight. +4 Culture if adjacent to a district. Provides +2 Science, +2 Production, +2 Faith from features." }
    ],
    bbgNotes: "BBG: Drive Out the Aggressors reworked — +2 Movement in features within your empire. +2 CS in features, +4 in your own territory features. Nine Dragon River Delta adds Floodplains as buildable terrain. Woods plantable with Medieval Faires.",
    strategy: {
      domination: { synergy: 70, tips: ["Feature combat bonus is strong defensively", "Voi Chiến is a great crossbow replacement", "Fight in forests/jungles"] },
      science: { synergy: 55, tips: ["Feature buildings give science", "District placement is restrictive"] },
      culture: { synergy: 80, tips: ["Thành provides culture and tourism", "Feature buildings boost culture", "Strong late-game tourism"] },
      religion: { synergy: 45, tips: ["Feature buildings give faith", "Not primary focus"] },
      diplomacy: { synergy: 35, tips: ["Not focused on diplomacy"] }
    }
  },
  {
    id: "catherine-black-queen", name: "Catherine de Medici (Black Queen)", civ: "France",
    victoryTypes: ["culture", "diplomacy"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Catherine's Flying Squadron", desc: "Has 1 extra level of Diplomatic Visibility. Gains a free Spy and extra Spy capacity with Castles. All Spies start with a free promotion." },
    civAbility: { name: "Grand Tour", desc: "+20% Production toward Medieval, Renaissance, and Industrial era wonders. Tourism from wonders of any era is doubled." },
    unique: [
      { name: "Garde Impériale (UU)", desc: "Replaces Line Infantry. +10 combat on home continent. Generates Great General points on kill." },
      { name: "Château (UI)", desc: "+1 Culture, +2 Gold. +1 Culture per adjacent Wonder. Must be adjacent to river." }
    ],
    bbgNotes: "BBG: Grand Tour adds free Spy with Castles, all spies get free promotion. +20% Production toward mid-era wonders. +50% Tourism from wonders (not +100%). Catherine's Flying Squadron — +1 Diplomatic Visibility unchanged.",
    strategy: {
      domination: { synergy: 35, tips: ["Garde Impériale is decent defensively", "Spies for sabotage"] },
      science: { synergy: 40, tips: ["Spies can steal tech", "Not focused"] },
      culture: { synergy: 80, tips: ["Wonder tourism doubled", "Château culture near rivers", "Build mid-era wonders"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 60, tips: ["Diplomatic visibility advantage", "Spy network for intel"] }
    }
  },
  {
    id: "catherine-magnificence", name: "Catherine de Medici (Magnificence)", civ: "France",
    victoryTypes: ["culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Catherine's Magnificences", desc: "Improved resources receive +1 Culture at Craftsmanship. Improved resources adjacent to a Theater Square receive +1 Culture. Château adjacent to a luxury gives +1 Amenity. Happy cities gain scaling Culture bonus. Theater Square cities gain Great People points based on happiness. May initiate the Court Festival project." },
    civAbility: { name: "Grand Tour", desc: "+20% Production toward Medieval, Renaissance, and Industrial era wonders. +50% Tourism from wonders of any era. Free Spy with Castles, all spies start with a free promotion." },
    unique: [
      { name: "Garde Impériale (UU)", desc: "Replaces Line Infantry. +10 combat on home continent. Generates Great General points on kill." },
      { name: "Château (UI)", desc: "+1 Culture, +2 Gold. +1 Culture per adjacent Wonder. Must be adjacent to river." }
    ],
    bbgNotes: "BBG: Catherine's Magnificences reworked — improved resources get +1 Culture at Craftsmanship. +1 Culture adjacent to Theater Square. Chateau adjacent to luxury gives +1 Amenity. Happy cities gain scaling Culture bonus. Theater Square cities gain Great People points based on happiness. Court Festival project available.",
    strategy: {
      domination: { synergy: 30, tips: ["Garde Impériale is decent defensively", "Not focused"] },
      science: { synergy: 35, tips: ["Not focused on science"] },
      culture: { synergy: 85, tips: ["Wonder tourism doubled", "Luxury culture bonus near Theater Squares", "Château for river culture"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 50, tips: ["Diplomatic visibility from luxuries"] }
    }
  },
  {
    id: "chandragupta", name: "Chandragupta", civ: "India",
    victoryTypes: ["domination"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Arthashastra", desc: "Can declare a War of Territorial Expansion. +2 Movement and +5 combat strength for 10 turns after declaring a War of Territorial Expansion." },
    civAbility: { name: "Dharma", desc: "Gains follower beliefs of all religions present in their cities." },
    unique: [
      { name: "Varu (UU)", desc: "Replaces Horseman. -5 combat strength to adjacent enemy units." },
      { name: "Stepwell (UI)", desc: "+1 Food, +1 Housing. +1 Faith if adjacent to Holy Site. +1 Food if adjacent to Farm." }
    ],
    bbgNotes: "BBG: Arthashastra completely reworked — Shrines grant +1 Movement, Temples grant +1 Sight to newly trained military units. Units get +1 CS per Holy Site building in production city. Dharma gives +1 Amenity per religion, Missionaries +2 spreads, +100% religious pressure from trade.",
    strategy: {
      domination: { synergy: 75, tips: ["Territorial Expansion timing attack", "Varu debuff weakens defenders", "Movement bonus for blitz"] },
      science: { synergy: 40, tips: ["Stepwell housing helps growth", "Not focused"] },
      culture: { synergy: 40, tips: ["Dharma can grab culture beliefs", "Not focused"] },
      religion: { synergy: 60, tips: ["Dharma collects follower beliefs", "Stepwell faith near Holy Sites"] },
      diplomacy: { synergy: 30, tips: ["War-focused leader conflicts with diplomacy"] }
    }
  },
  {
    id: "dido", name: "Dido", civ: "Phoenicia",
    victoryTypes: ["domination", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Founder of Carthage", desc: "Can move the Capital to any city with a Cothon. +50% Production toward districts in the city with the Government Plaza." },
    civAbility: { name: "Mediterranean Colonies", desc: "Starts with the Eureka for Writing. Coastal cities founded by Phoenicia on the same continent as the Capital are 100% Loyal. Settlers receive +2 Movement and sight when embarked." },
    unique: [
      { name: "Bireme (UU)", desc: "Replaces Galley. +5 combat strength. Protects adjacent Traders from plunder." },
      { name: "Cothon (UD)", desc: "Replaces Harbor. +50% Production toward naval units and Settlers in this city. Naval units healed fully each turn in this city." }
    ],
    bbgNotes: "BBG: Founder of Carthage — Settlers get +2 Movement/Sight embarked, ignore embark/disembark costs. +1 Trade Route per Government Plaza building. +50% Production toward districts in Government Plaza city. Cothon gives +25% Production to naval/Settlers (not +50%).",
    strategy: {
      domination: { synergy: 60, tips: ["Naval dominance with Bireme and Cothon", "Settler spam for wide empire", "Move capital strategically"] },
      science: { synergy: 55, tips: ["Wide empire means more Campuses", "Cothon production helps", "Writing Eureka is nice early"] },
      culture: { synergy: 45, tips: ["Wide empire for more Theater Squares", "Not focused"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 40, tips: ["Wide empire generates some favor"] }
    }
  },
  {
    id: "eleanor-england", name: "Eleanor of Aquitaine (England)", civ: "England",
    victoryTypes: ["culture"],
    tier: { vanilla: "C", bbg: "C" },
    leaderAbility: { name: "Court of Love", desc: "Great Works in Eleanor's cities cause -1 Loyalty per turn to foreign cities within 9 tiles. Cities that leave another civ due to Loyalty join Eleanor." },
    civAbility: { name: "Workshop of the World", desc: "Iron and Coal Mines accumulate 2 more resources per turn. Harbor buildings increase Strategic Resource Stockpiles by +10. +100% Production toward Military Engineers. Military Engineers receive +2 charges." },
    unique: [
      { name: "Sea Dog (UU)", desc: "Replaces Privateer. Chance to capture defeated enemy ships. Can only be seen by other Naval Raiders unless adjacent." },
      { name: "Royal Navy Dockyard (UD)", desc: "Replaces Harbor. +1 Movement for naval units built here. +2 Gold adjacency and +4 Loyalty per turn when built on a foreign continent." }
    ],
    bbgNotes: "BBG: Court of Love unchanged. Workshop of the World is now England's civ ability — Iron/Coal mines +2 resources, Harbor buildings +10 stockpile, +100% Production to Military Engineers, +2 charges. Sea Dog replaces Privateer (not Redcoat).",
    strategy: {
      domination: { synergy: 25, tips: ["Loyalty pressure is passive domination", "Very slow approach"] },
      science: { synergy: 35, tips: ["Not focused on science"] },
      culture: { synergy: 75, tips: ["Great Works drive loyalty pressure", "British Museum for artifacts", "Peaceful conquest through culture"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 40, tips: ["Peaceful expansion suits diplomacy"] }
    }
  },
  {
    id: "eleanor-france", name: "Eleanor of Aquitaine (France)", civ: "France",
    victoryTypes: ["culture"],
    tier: { vanilla: "C", bbg: "C" },
    leaderAbility: { name: "Court of Love", desc: "Great Works in Eleanor's cities cause -1 Loyalty per turn to foreign cities within 9 tiles. Cities that leave another civ due to Loyalty join Eleanor." },
    civAbility: { name: "Grand Tour", desc: "+20% Production toward Medieval, Renaissance, and Industrial era wonders. Tourism from wonders of any era is doubled." },
    unique: [
      { name: "Garde Impériale (UU)", desc: "Replaces Line Infantry. +10 combat on home continent." },
      { name: "Château (UI)", desc: "+1 Culture, +2 Gold. +1 Culture per adjacent Wonder. Must be adjacent to river." }
    ],
    bbgNotes: "BBG: Court of Love unchanged. Grand Tour — free Spy with Castles, +20% mid-era wonder Production, +50% wonder Tourism.",
    strategy: {
      domination: { synergy: 25, tips: ["Loyalty flipping is passive", "Very slow"] },
      science: { synergy: 35, tips: ["Not focused"] },
      culture: { synergy: 80, tips: ["Wonder tourism doubled", "Loyalty flipping through Great Works", "Château culture", "Best Eleanor version"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 40, tips: ["Peaceful expansion suits diplomacy"] }
    }
  },
  {
    id: "genghis-khan", name: "Genghis Khan", civ: "Mongolia",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Mongol Horde", desc: "All cavalry class units gain +3 combat strength. Capturing a cavalry unit from another civ grants a free level of Diplomatic Visibility." },
    civAbility: { name: "Örtöö", desc: "Sending a trade route immediately creates a Trading Post. +6 combat strength for all units for each level of Diplomatic Visibility over the opponent." },
    unique: [
      { name: "Keshig (UU)", desc: "Replaces Cavalry. Ranged unit. Shares movement speed with civilian and support units in formation." },
      { name: "Ordu (UB)", desc: "Replaces Stable. +1 Movement for cavalry trained in this city." }
    ],
    bbgNotes: "BBG: Örtöö — Mongolian units double the usual combat bonus from Diplomatic Visibility (not +6 flat). Mongol Horde — light cavalry and Keshig get +3 CS, chance to capture enemy cavalry. Ordu gives +1 Movement to cavalry, +25% XP for cavalry and siege.",
    strategy: {
      domination: { synergy: 90, tips: ["Keshig is one of the best unique units", "Diplomatic Visibility stacking is huge", "Send trade routes before attacking", "Ordu movement bonus for cavalry"] },
      science: { synergy: 30, tips: ["Must conquer for science"] },
      culture: { synergy: 25, tips: ["Not focused on culture"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 20, tips: ["Aggressive playstyle conflicts with diplomacy"] }
    }
  },
  {
    id: "gitarja", name: "Gitarja", civ: "Indonesia",
    victoryTypes: ["religion", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Exalted Goddess of the Three Worlds", desc: "May purchase naval units with Faith. Religious units pay no movement to embark/disembark. +2 Faith for city centers adjacent to coast." },
    civAbility: { name: "Great Nusantara", desc: "Coast and Lake tiles provide +0.5 Faith, +0.5 Production, +0.5 Gold with Shipbuilding. Entertainment Complexes built adjacent to coast/lake provide +1 Amenity." },
    unique: [
      { name: "Jong (UU)", desc: "Replaces Frigate. Stronger. Gains escort formation movement bonus. +5 combat in formation." },
      { name: "Kampung (UI)", desc: "+1 Production, +1 Housing, +1 Food. Must be built on coast adjacent to a sea resource. Bonus yields with tech." }
    ],
    bbgNotes: "BBG: Exalted Goddess reworked — after Sailing, City Centers near coast give +2 Faith, other districts near coast give +1 Faith (+2 with Shipbuilding). Naval units and Harbor buildings purchasable with Faith. Religious units free embark/disembark. Great Nusantara — coast/lake give minor adjacency to Campus/Theater/Holy Site/Industrial Zone.",
    strategy: {
      domination: { synergy: 55, tips: ["Jong is a strong naval unit", "Faith-buy navy is flexible", "Strong on water maps"] },
      science: { synergy: 45, tips: ["Kampung production helps", "Not focused"] },
      culture: { synergy: 65, tips: ["Kampung provides yields for growth", "Coastal cities can be cultural"] },
      religion: { synergy: 85, tips: ["Coastal faith generation is massive", "Faith-buy naval units", "Religious units move freely on water"] },
      diplomacy: { synergy: 45, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "hammurabi", name: "Hammurabi", civ: "Babylon",
    victoryTypes: ["science", "domination"],
    tier: { vanilla: "S", bbg: "A" },
    leaderAbility: { name: "Ninu Ilu Sirum", desc: "Eurekas provide full tech completion instead of 50%. -50% Science per turn in all cities." },
    civAbility: { name: "Enuma Anu Enlil", desc: "Gain a free building each time you build a specialty district for the first time. Eurekas are even more important." },
    unique: [
      { name: "Sabum Kibittum (UU)", desc: "Ancient era melee unit. +17 combat vs anti-cavalry. 3 movement." },
      { name: "Palgum (UB)", desc: "Replaces Water Mill. +2 Food, +1 Faith. +1 Food for each freshwater Farm." }
    ],
    bbgNotes: "BBG: Enuma Anu Enlil completely reworked — receive a free Eureka after constructing each Library (not full tech completion from all Eurekas). Ninu Ilu Sirum — first specialty district of each type gives lowest-cost building. Palgum reworked — +2 Production, +1 Food to improved freshwater tiles, +1 Production to all farms.",
    strategy: {
      domination: { synergy: 75, tips: ["Sabum Kibittum is strong early", "Eureka-rush advanced military techs", "Can access units eras ahead"] },
      science: { synergy: 90, tips: ["Eureka completion IS your science", "Plan city builds around Eurekas", "Free buildings from first districts", "-50% science means Eurekas are essential"] },
      culture: { synergy: 40, tips: ["Free buildings help", "Not focused"] },
      religion: { synergy: 40, tips: ["Palgum provides faith", "Not focused"] },
      diplomacy: { synergy: 35, tips: ["Not focused on diplomacy"] }
    }
  },
  {
    id: "harald", name: "Harald Hardrada (Konge)", civ: "Norway",
    victoryTypes: ["domination"],
    tier: { vanilla: "C", bbg: "C" },
    leaderAbility: { name: "Thunderbolt of the North", desc: "+50% Production toward naval melee units. Naval melee units can perform coastal raids." },
    civAbility: { name: "Knarr", desc: "Units pay no movement cost to embark/disembark. Naval units can heal in neutral territory." },
    unique: [
      { name: "Berserker (UU)", desc: "Replaces Man-at-Arms. +7 attack, -7 defense. +2 Movement when in enemy territory." },
      { name: "Viking Longship (UU)", desc: "Replaces Galley. Can coastal raid and capture civilians. 4 Movement in coastal waters." },
      { name: "Stave Church (UB)", desc: "Replaces Temple. +1 Faith for each adjacent Woods tile. Holy Site gets adjacency from Woods." }
    ],
    bbgNotes: "BBG: Knarr reworked — adds +50% Production toward Holy Sites. Coast/Lake give standard adjacency to Holy Sites. Harbors get major adjacency from Holy Sites. Thunderbolt of the North — +3 CS and +25% Production to naval melee. Coastal raids give Science from Mines, Culture from Quarries/Pastures/Plantations/Camps. Viking Longship has 4 Movement in coastal waters, can coastal raid and capture civilians.",
    strategy: {
      domination: { synergy: 70, tips: ["Coastal raids for pillaging", "Berserker blitz in enemy territory", "Naval dominance on water maps"] },
      science: { synergy: 30, tips: ["No science bonuses"] },
      culture: { synergy: 30, tips: ["No culture bonuses"] },
      religion: { synergy: 50, tips: ["Stave Church woods adjacency", "Decent religious foundation"] },
      diplomacy: { synergy: 20, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "harald-varangian", name: "Harald Hardrada (Varangian)", civ: "Norway",
    victoryTypes: ["domination"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Varangian Guard", desc: "Gain Science and Culture when pillaging or coastal raiding. +50% Production toward naval melee units." },
    civAbility: { name: "Knarr", desc: "Units pay no movement cost to embark/disembark. Naval units can heal in neutral territory." },
    unique: [
      { name: "Berserker (UU)", desc: "Replaces Man-at-Arms. +7 attack, -7 defense. +2 Movement in enemy territory." },
      { name: "Stave Church (UB)", desc: "Replaces Temple. +1 Faith for each adjacent Woods tile." }
    ],
    bbgNotes: "BBG: Knarr same as Konge version — +50% Holy Site Production, coast adjacency for Holy Sites. Varangian Guard ability details not fully specified in BBG 7.4 changelog. Berserker reworked — +2 Movement in enemy territory or embarked, +10 CS attacking, purchasable with Faith.",
    strategy: {
      domination: { synergy: 75, tips: ["Pillage for science and culture", "Coastal raids are more rewarding", "Berserker + pillage combo"] },
      science: { synergy: 40, tips: ["Pillaging gives science", "Requires aggression"] },
      culture: { synergy: 40, tips: ["Pillaging gives culture", "Requires aggression"] },
      religion: { synergy: 50, tips: ["Stave Church woods adjacency"] },
      diplomacy: { synergy: 20, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "jayavarman", name: "Jayavarman VII", civ: "Khmer",
    victoryTypes: ["religion", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Monasteries of the King", desc: "Holy Sites provide +2 Food and +1 Housing. Culture Bomb adjacent tiles when completing a Holy Site." },
    civAbility: { name: "Grand Barays", desc: "Aqueducts provide +3 Faith and +1 Amenity. Farms adjacent to Aqueducts gain +2 Food." },
    unique: [
      { name: "Domrey (UU)", desc: "Replaces Trebuchet. Can move and shoot in the same turn. +10 combat vs districts." },
      { name: "Prasat (UB)", desc: "Replaces Temple. Missionaries from this city gain the Martyr promotion. +6 Faith." }
    ],
    bbgNotes: "BBG: Monasteries of the King reworked — Holy Sites get major adjacency from rivers, Culture Bomb, Food equal to adjacency bonus, +2 Housing if on river. Grand Barays — Aqueducts give +1 Amenity, Farms +2 Food adjacent to Aqueduct, +1 Faith adjacent to Holy Site.",
    strategy: {
      domination: { synergy: 40, tips: ["Domrey is a strong siege unit", "Not focused on domination"] },
      science: { synergy: 50, tips: ["Population growth helps science", "Not focused"] },
      culture: { synergy: 70, tips: ["Prasat Martyrs create relics", "Relics generate tourism", "Population growth for culture"] },
      religion: { synergy: 90, tips: ["Holy Site food and housing is incredible", "Aqueduct faith generation", "Prasat for Martyr missionaries", "Culture bomb from Holy Sites"] },
      diplomacy: { synergy: 40, tips: ["Not focused on diplomacy"] }
    }
  },
  {
    id: "joao", name: "João III", civ: "Portugal",
    victoryTypes: ["science", "diplomacy"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Porta Do Cerco", desc: "All units receive +1 sight. +1 Trade Route capacity when meeting a new civ. Open Borders with all city-states." },
    civAbility: { name: "Casa Da Índia", desc: "International Trade Routes can only reach cities on the coast or with a Harbor. +50% yields from Trade Routes to foreign cities." },
    unique: [
      { name: "Nau (UU)", desc: "Replaces Caravel. Cheaper maintenance. Can build Feitorias." },
      { name: "Navigation School (UB)", desc: "Replaces University. +25% Production toward naval units. +1 Science for every 2 coast/lake tiles in the city." }
    ],
    bbgNotes: "BBG: Casa da Índia reworked — international trade must originate from coastal city, can only travel over water/canal tiles. +50% Gold with Cartography, +50% Science with Education, +50% Culture with Medieval Faires. Porta do Cerco — +1 Trade Route per new era (not per civ met). Open Borders with city-states.",
    strategy: {
      domination: { synergy: 35, tips: ["Naval units from Navigation School", "Gold funds military"] },
      science: { synergy: 80, tips: ["Navigation School science from coast tiles", "Trade route gold funds research", "+50% trade yields are huge"] },
      culture: { synergy: 45, tips: ["Trade route yields help", "Not focused"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 75, tips: ["Trade route bonuses", "City-state open borders", "Gold generation for diplomatic favor"] }
    }
  },
  {
    id: "julius-caesar", name: "Julius Caesar", civ: "Rome",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Veni, Vidi, Vici", desc: "Gain Gold when conquering cities and clearing Barbarian Outposts. +5 combat strength when attacking." },
    civAbility: { name: "All Roads Lead to Rome", desc: "Founded or conquered cities start with a Trading Post and road to the Capital. Trade Routes earn +1 Gold per Trading Post." },
    unique: [
      { name: "Legion (UU)", desc: "Replaces Swordsman. Can build roads and forts. Stronger." },
      { name: "Bath (UD)", desc: "Replaces Aqueduct. Provides +2 Housing and +1 Amenity beyond normal Aqueduct." }
    ],
    bbgNotes: "BBG: Veni Vidi Vici completely reworked — melee/siege/ranged/heavy cavalry get +50% XP (+100% in Medieval). +1 CS per promotion. Free melee unit when founding non-capital cities. Extra Wildcard slot from capturing a major civ's city. Onager unique siege unit replaces Catapult.",
    strategy: {
      domination: { synergy: 85, tips: ["Conquest gold fuels expansion", "Legion can build forts for defense", "+5 attack is always active", "Roads from conquest help logistics"] },
      science: { synergy: 45, tips: ["Bath housing helps growth", "Not focused"] },
      culture: { synergy: 35, tips: ["Not focused on culture"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 25, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "kublai-china", name: "Kublai Khan (China)", civ: "China",
    victoryTypes: ["culture", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Gerege", desc: "+1 Economic policy slot. +6 Gold, +3 Culture, +2 Science per turn for each active Trading Post in a foreign city." },
    civAbility: { name: "Dynastic Cycle", desc: "Eurekas and Inspirations provide 60% instead of 50%." },
    unique: [
      { name: "Crouching Tiger (UU)", desc: "Replaces Crossbowman. No resource requirement. Short range but high power." },
      { name: "Great Wall (UI)", desc: "+2 Gold, +2 Culture when adjacent to other Great Wall segments. Must be built on border." }
    ],
    bbgNotes: "BBG: Dynastic Cycle nerfed — Eurekas/Inspirations give 45% (not 60%). Gerege unchanged. Crouching Tiger reworked — +7 Ranged Strength vs adjacent enemies.",
    strategy: {
      domination: { synergy: 35, tips: ["Crouching Tiger is decent defensively", "Not focused"] },
      science: { synergy: 65, tips: ["60% Eurekas help tech progression", "Trade post science bonuses"] },
      culture: { synergy: 70, tips: ["Great Wall culture", "Trade post culture bonuses", "Extra Economic policy slot"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 50, tips: ["Gold from trade posts", "Economic policy flexibility"] }
    }
  },
  {
    id: "kublai-mongolia", name: "Kublai Khan (Mongolia)", civ: "Mongolia",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Gerege", desc: "+1 Economic policy slot. +6 Gold, +3 Culture, +2 Science per turn for each active Trading Post in a foreign city." },
    civAbility: { name: "Örtöö", desc: "Sending a trade route immediately creates a Trading Post. +6 combat strength for each level of Diplomatic Visibility over the opponent." },
    unique: [
      { name: "Keshig (UU)", desc: "Replaces Cavalry. Ranged unit. Shares movement speed with civilian and support units." },
      { name: "Ordu (UB)", desc: "Replaces Stable. +1 Movement for cavalry trained in this city." }
    ],
    bbgNotes: "BBG: Örtöö — double combat bonus from Diplomatic Visibility. Gerege unchanged. Ordu gives +1 Movement to cavalry, +25% XP for cavalry/siege.",
    strategy: {
      domination: { synergy: 85, tips: ["Trade routes give combat strength AND gold", "Keshig is excellent", "Economic policy slot for military policies"] },
      science: { synergy: 45, tips: ["Trade post science bonuses", "Not primary focus"] },
      culture: { synergy: 40, tips: ["Trade post culture bonuses", "Not focused"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 35, tips: ["Gold generation helps but aggressive"] }
    }
  },
  {
    id: "kristina", name: "Kristina", civ: "Sweden",
    victoryTypes: ["culture", "diplomacy"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Minerva of the North", desc: "Buildings with 3+ Great Work slots are automatically themed. Can build the Queen's Bibliotheque in the Government Plaza." },
    civAbility: { name: "Nobel Prize", desc: "Gain 50 Diplomatic Favor when earning a Great Person. +1 Great Engineer point from Factories, +1 Great Scientist from Universities." },
    unique: [
      { name: "Carolean (UU)", desc: "Replaces Pike and Shot. +3 combat strength for each unused Movement point." },
      { name: "Open-Air Museum (UB)", desc: "Replaces Broadcast Center. +2 Culture and +2 Tourism for each type of terrain in the city." }
    ],
    bbgNotes: "BBG: Nobel Prize and Minerva of the North unchanged. Queen's Bibliotheque gives +6 Great Work slots (any type), +1 Governor Title. Open-Air Museum gives +2 Culture/Tourism per terrain type where a Swedish city is founded, +2 Loyalty.",
    strategy: {
      domination: { synergy: 30, tips: ["Carolean is decent", "Not focused"] },
      science: { synergy: 50, tips: ["Great Scientist points from Universities", "Not primary focus"] },
      culture: { synergy: 95, tips: ["Auto-theming is the best culture ability", "Open-Air Museum tourism", "Queen's Bibliotheque for Great Works", "Fill museums easily"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 80, tips: ["50 Diplomatic Favor per Great Person", "Great People generation is high", "Nobel Prize stacks quickly"] }
    }
  },
  {
    id: "lautaro", name: "Lautaro", civ: "Mapuche",
    victoryTypes: ["domination"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Swift Hawk", desc: "Defeating an enemy unit within the borders of an enemy city causes that city to lose 20 Loyalty." },
    civAbility: { name: "Toqui", desc: "+10 combat strength when fighting civs in a Golden Age. +5 combat strength for all units trained in a city with a Governor." },
    unique: [
      { name: "Malón Raider (UU)", desc: "Replaces Cavalry. +5 combat within 4 tiles of friendly territory. Pillaging costs 1 movement." },
      { name: "Chemamull (UI)", desc: "+1 Production. +1 Culture for every 2 Appeal. Tourism after Flight." }
    ],
    bbgNotes: "BBG: Toqui reworked — cities with Governor give +5% Culture, +5% Production, +10% XP. Tripled in non-founded cities. +4 Loyalty per turn within 9 tiles of Governor city. Swift Hawk — +10 CS vs Free Cities or civs in Golden/Heroic Age. Kills cause -20 Loyalty (-40 vs Golden Age civs). Chemamull requires Breathtaking appeal, gives Culture equal to 75% of appeal.",
    strategy: {
      domination: { synergy: 75, tips: ["Target civs in Golden Ages", "Loyalty pressure from kills", "Governor combat bonus in all cities", "Malón Raider for pillaging"] },
      science: { synergy: 35, tips: ["Not focused on science"] },
      culture: { synergy: 50, tips: ["Chemamull provides culture and tourism", "Appeal-based scaling"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 25, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "ludwig", name: "Ludwig II", civ: "Germany",
    victoryTypes: ["culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Swan King", desc: "Wonders provide +2 Culture and +2 Tourism. +1 Culture for each Wonder in a city with a Theater Square." },
    civAbility: { name: "Free Imperial Cities", desc: "Each city can build one more district than the population limit allows." },
    unique: [
      { name: "U-Boat (UU)", desc: "Replaces Submarine. Cheaper, +1 sight, +10 combat in ocean." },
      { name: "Hansa (UD)", desc: "Replaces Industrial Zone. Major adjacency from Commercial Hubs, Aqueducts, and other Hansas." }
    ],
    bbgNotes: "BBG: Free Imperial Cities requires Guilds. Swan King — Wonders get +1 Culture per adjacent district as adjacency. All Culture adjacencies provide Tourism with Castles. Hansa gets major adjacency from Commercial Hubs.",
    strategy: {
      domination: { synergy: 30, tips: ["Not focused on domination"] },
      science: { synergy: 55, tips: ["Extra district for Campus", "Hansa production"] },
      culture: { synergy: 90, tips: ["Wonder tourism stacking", "Extra district for Theater Squares", "Hansa production for wonder building", "Build every wonder possible"] },
      religion: { synergy: 35, tips: ["Extra district for Holy Sites", "Not focused"] },
      diplomacy: { synergy: 45, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "menelik", name: "Menelik II", civ: "Ethiopia",
    victoryTypes: ["religion", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Council of Ministers", desc: "+1 Science and +1 Culture for each resource type improved in a city with a Governor. +4 combat strength on Hills." },
    civAbility: { name: "Aksumite Legacy", desc: "+1 Faith from each resource type improved. International trade routes from cities with a resource grant +1 Faith." },
    unique: [
      { name: "Oromo Cavalry (UU)", desc: "Replaces Courser. Stronger. No sight penalty from terrain. +10 combat on Hills." },
      { name: "Rock-Hewn Church (UI)", desc: "+1 Faith. Can only be built on Hills. +1 Faith for adjacent Mountains and Hills." }
    ],
    bbgNotes: "BBG: Aksumite Legacy — international trade gives +0.5 Faith per resource at origin. Improved resources give +1 Faith after Political Philosophy. Can purchase Archaeological Museums/Archaeologists with Faith. Council of Ministers — Science and Culture equal to 10% of Faith generation in cities on Hills or Resources. Rock-Hewn Church buildable on Hills or Volcanic Soil.",
    strategy: {
      domination: { synergy: 55, tips: ["Oromo Cavalry is strong on hills", "+4 combat on hills is always useful", "Defensive terrain advantage"] },
      science: { synergy: 55, tips: ["Governor science from resources", "Not primary focus"] },
      culture: { synergy: 65, tips: ["Governor culture from resources", "Rock-Hewn Church faith for purchases"] },
      religion: { synergy: 85, tips: ["Aksumite Legacy faith from resources", "Rock-Hewn Church on hills", "Strong religious foundation", "Governor bonuses help"] },
      diplomacy: { synergy: 40, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "mvemba", name: "Mvemba a Nzinga", civ: "Kongo",
    victoryTypes: ["culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Religious Convert", desc: "Cannot build Holy Sites or found a religion. Gains all beliefs of any religion that has established itself in a majority of Kongo cities. +2 Faith per Relic, Artifact, and Sculpture." },
    civAbility: { name: "Nkisi", desc: "+2 Food, +2 Production, +4 Gold from each Relic, Artifact, and Sculpture. +1 Great Artist, Great Musician, and Great Merchant point per turn." },
    unique: [
      { name: "Ngao Mbeba (UU)", desc: "Replaces Swordsman. No iron required. +10 defense vs ranged attacks." },
      { name: "Mbanza (UD)", desc: "Replaces Neighborhood. Available earlier. +5 Housing, +2 Food, +4 Gold. Can only be built in Rainforest/Woods." }
    ],
    bbgNotes: "BBG: Religious Convert — cannot build Holy Sites or found religion. Gets all beliefs of majority religion. Receives Apostle when finishing Mbanza or Theater Square. Nkisi unchanged.",
    strategy: {
      domination: { synergy: 35, tips: ["Ngao Mbeba is decent early", "Not focused"] },
      science: { synergy: 45, tips: ["Mbanza housing helps growth", "Not focused"] },
      culture: { synergy: 85, tips: ["Great Work yields are massive", "Relic/Artifact/Sculpture bonuses", "Great People point generation", "Mbanza for population growth"] },
      religion: { synergy: 0, tips: ["Cannot found a religion", "Depends entirely on other civs"] },
      diplomacy: { synergy: 40, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "nzinga-mbande", name: "Nzinga Mbande", civ: "Kongo",
    victoryTypes: ["culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Fierce Grace", desc: "+2 Food and +2 Faith for each specialty district in a city with a Governor. Cities with Governors gain +20% combat experience for units." },
    civAbility: { name: "Nkisi", desc: "+2 Food, +2 Production, +4 Gold from each Relic, Artifact, and Sculpture. +1 Great Artist, Great Musician, and Great Merchant point per turn." },
    unique: [
      { name: "Ngao Mbeba (UU)", desc: "Replaces Swordsman. No iron required. +10 defense vs ranged attacks." },
      { name: "Mbanza (UD)", desc: "Replaces Neighborhood. Available earlier. +5 Housing, +2 Food, +4 Gold." }
    ],
    bbgNotes: "BBG: Queen of Ndongo and Matamba reworked — +15% Gold and Culture in cities with Mbanza. Mbanza gives +2 adjacency to Theater Squares and Commercial Hubs. Archaeologists 50% cheaper. Civilians ignore forest/jungle movement penalty. +50% Great Merchant points.",
    strategy: {
      domination: { synergy: 40, tips: ["Governor combat XP bonus", "Ngao Mbeba is decent"] },
      science: { synergy: 50, tips: ["Governor food helps growth", "Not focused"] },
      culture: { synergy: 85, tips: ["Great Work yields are massive", "Governor food/faith per district", "Great People generation"] },
      religion: { synergy: 0, tips: ["Cannot found a religion"] },
      diplomacy: { synergy: 40, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "philip", name: "Philip II", civ: "Spain",
    victoryTypes: ["religion", "domination"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "El Escorial", desc: "+4 combat strength when fighting civilizations following a different religion. Inquisitors have +1 extra removal charge." },
    civAbility: { name: "Treasure Fleet", desc: "Trade routes between cities on different continents gain +1 Food, +1 Production, +3 Gold. +25% Production toward districts on different continent from Capital." },
    unique: [
      { name: "Conquistador (UU)", desc: "Replaces Musketman. +10 combat when adjacent to a Missionary, Apostle, or Inquisitor. Converts city to Spain's religion on capture." },
      { name: "Mission (UI)", desc: "+2 Faith. +1 Science on foreign continent. +2 Faith if adjacent to Campus." }
    ],
    bbgNotes: "BBG: El Escorial reworked — Inquisitors get extra Remove Heresy charge, eliminate 100% of other religions. +3 CS (not +5) vs other religions for combat and religious units. Missionaries 25% cheaper. Conquistador +5 CS (not +10) near religious units.",
    strategy: {
      domination: { synergy: 70, tips: ["Conquistador + religious unit combo", "Religious combat strength bonus", "Convert cities on capture"] },
      science: { synergy: 45, tips: ["Mission science on foreign continent", "Not primary focus"] },
      culture: { synergy: 35, tips: ["Not focused on culture"] },
      religion: { synergy: 80, tips: ["Religious combat bonus", "Inquisitor extra charges", "Conquistador converts on capture", "Mission faith generation"] },
      diplomacy: { synergy: 35, tips: ["Not focused on diplomacy"] }
    }
  },
  {
    id: "qin-shi-huang", name: "Qin Shi Huang (Mandate of Heaven)", civ: "China",
    victoryTypes: ["culture", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "The First Emperor", desc: "Builders receive +1 charge. Can spend Builder charges to complete 15% of Ancient and Classical wonders." },
    civAbility: { name: "Dynastic Cycle", desc: "Eurekas and Inspirations provide 60% instead of 50%." },
    unique: [
      { name: "Crouching Tiger (UU)", desc: "Replaces Crossbowman. No resource requirement. Short range but high power." },
      { name: "Great Wall (UI)", desc: "+2 Gold, +2 Culture when adjacent to other Great Wall segments." }
    ],
    bbgNotes: "BBG: The First Emperor unchanged — Builder charges for 15% wonder cost, extra Builder charge, Canals at Masonry. Dynastic Cycle nerfed to 45% Eurekas/Inspirations (not 60%).",
    strategy: {
      domination: { synergy: 30, tips: ["Crouching Tiger is decent defensively", "Not focused"] },
      science: { synergy: 60, tips: ["60% Eurekas help tech", "Builder charges for early wonders"] },
      culture: { synergy: 70, tips: ["Great Wall culture", "Wonder rushing with Builders", "60% Inspirations for civics"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 40, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "qin-shi-huang-unifier", name: "Qin Shi Huang (Unifier)", civ: "China",
    victoryTypes: ["domination", "culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Unifier", desc: "+10% combat strength for each active alliance. Gain a random Inspiration when you form an alliance." },
    civAbility: { name: "Dynastic Cycle", desc: "Eurekas and Inspirations provide 60% instead of 50%." },
    unique: [
      { name: "Crouching Tiger (UU)", desc: "Replaces Crossbowman. No resource requirement." },
      { name: "Great Wall (UI)", desc: "+2 Gold, +2 Culture when adjacent to other Great Wall segments." }
    ],
    bbgNotes: "BBG: Thirty-Six Stratagems completely reworked — melee units can Convert Barbarians (consumes the unit). +50% Encampment building Production. +1 Great Writer from Encampments. Barracks/Stable get 2 Great Work of Writing slots. Great Works of Writing give +1 Food. Great General/Writer recruitment gives random Eureka and Inspiration. Dynastic Cycle at 45%.",
    strategy: {
      domination: { synergy: 60, tips: ["Alliance combat bonus stacks", "Form alliances before attacking others"] },
      science: { synergy: 55, tips: ["60% Eurekas", "Alliance Inspirations help"] },
      culture: { synergy: 65, tips: ["Great Wall culture", "60% Inspirations", "Alliance Inspirations"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 50, tips: ["Alliance-focused abilities"] }
    }
  },
  {
    id: "ramses", name: "Ramses II", civ: "Egypt",
    victoryTypes: ["culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Abu Simbel", desc: "+2 Culture and +2 Gold for each Wonder. Builders can spend charges to complete 15% of a Wonder." },
    civAbility: { name: "Iteru", desc: "+15% production toward districts and wonders built next to rivers." },
    unique: [
      { name: "Maryannu Chariot Archer (UU)", desc: "Replaces Heavy Chariot. 2 movement on open terrain. Ranged attack." },
      { name: "Sphinx (UI)", desc: "+1 Culture, +1 Faith. +1 Culture if adjacent to a Wonder." }
    ],
    bbgNotes: "BBG: Abu Simbel reworked — gain Culture equal to 10% of building cost (doubled in wonder cities, 25% for wonders). Holy Sites get +1 Production adjacent to river. +15% Production for Holy Sites and Industrial Zones on rivers. Iteru unchanged.",
    strategy: {
      domination: { synergy: 25, tips: ["Not focused on domination"] },
      science: { synergy: 40, tips: ["River production helps", "Not focused"] },
      culture: { synergy: 90, tips: ["Wonder culture and gold stacking", "Builder wonder rushing", "Iteru river production", "Sphinx adjacent to wonders"] },
      religion: { synergy: 50, tips: ["Sphinx faith", "River production for Holy Sites"] },
      diplomacy: { synergy: 50, tips: ["Wonder building can score diplomatic points"] }
    }
  },
  {
    id: "robert-bruce", name: "Robert the Bruce", civ: "Scotland",
    victoryTypes: ["science", "domination"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Bannockburn", desc: "Can declare a War of Liberation. +100% Production and +2 Movement for 10 turns after declaring a War of Liberation." },
    civAbility: { name: "Scottish Enlightenment", desc: "Happy cities receive +5% Science and +5% Production. Ecstatic cities double these bonuses." },
    unique: [
      { name: "Highlander (UU)", desc: "Replaces Ranger. +5 combat in Hills and Woods." },
      { name: "Golf Course (UI)", desc: "+2 Gold, +1 Culture, +1 Amenity. +1 Culture if adjacent to City Center or Entertainment Complex." }
    ],
    bbgNotes: "BBG: Bannockburn reworked — Recon units get +50% combat XP (no longer War of Liberation). Scottish Enlightenment buffed — happy cities get +5% Science/Production plus Great Scientist/Engineer points. Ecstatic doubles, Euphoric (+8 amenity) triples.",
    strategy: {
      domination: { synergy: 55, tips: ["War of Liberation production bonus", "Highlander in terrain", "Liberation wars are justified"] },
      science: { synergy: 75, tips: ["Happy/Ecstatic science bonus", "Golf Course amenities help happiness", "Production bonus for districts"] },
      culture: { synergy: 50, tips: ["Golf Course culture", "Happy cities help"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 55, tips: ["Liberation wars are diplomatic", "Happy cities are productive"] }
    }
  },
  {
    id: "saladin-vizier", name: "Saladin (Vizier)", civ: "Arabia",
    victoryTypes: ["religion", "science"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Sultan of Egypt", desc: "When building a Worship building, gain a free random Military policy card. +10% Production toward all buildings." },
    civAbility: { name: "The Last Prophet", desc: "Automatically receives the last available Great Prophet. +1 Science per foreign city following Arabia's religion." },
    unique: [
      { name: "Mamluk (UU)", desc: "Replaces Knight. Heals at the end of every turn." },
      { name: "Madrasa (UB)", desc: "Replaces University. Provides Faith equal to Campus adjacency." }
    ],
    bbgNotes: "BBG: Same as base Saladin — Righteousness of the Faith worship building at 1/10 cost, 5% yields scaling. Last Prophet unchanged.",
    strategy: {
      domination: { synergy: 50, tips: ["Mamluk self-healing", "Free military policies from worship buildings"] },
      science: { synergy: 80, tips: ["Madrasa science + faith", "Guaranteed Prophet for religion bonuses", "+10% building production"] },
      culture: { synergy: 45, tips: ["Not primary focus"] },
      religion: { synergy: 85, tips: ["Guaranteed Prophet", "+10% building production for temples", "Madrasa faith"] },
      diplomacy: { synergy: 45, tips: ["Not specifically focused"] }
    }
  },
  {
    id: "sejong", name: "Sejong", civ: "Korea",
    victoryTypes: ["science"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Hangul", desc: "+2 Science for each specialty district in a city with a Governor. Governors provide +3% Culture and +3% Science." },
    civAbility: { name: "Three Kingdoms", desc: "Mines receive +1 Science. Farms receive +1 Food if adjacent to a Seowon." },
    unique: [
      { name: "Hwacha (UU)", desc: "Replaces Field Cannon. Stronger ranged attack but cannot move and attack." },
      { name: "Seowon (UD)", desc: "Replaces Campus. +4 base Science but loses Science for each adjacent district." }
    ],
    bbgNotes: "BBG: Hangul reworked — completing first tech from a new era gives double Science per turn as Culture. Seowon gets -1 Science per adjacent district. Seowon and Theater Squares get major adjacency from each other. Cities with both get +1 Culture and +2 Tourism per district. +30% Builder Production in cities without Governors after Feudalism.",
    strategy: {
      domination: { synergy: 30, tips: ["Hwacha is defensive", "Tech lead for advanced units"] },
      science: { synergy: 95, tips: ["Governor science per district is incredible", "Seowon + Mines for science", "Promote Governors for bonus", "Build many districts per city"] },
      culture: { synergy: 40, tips: ["Governor culture bonus", "Not focused"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 35, tips: ["Not focused"] }
    }
  },
  {
    id: "shaka", name: "Shaka", civ: "Zulu",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Amabutho", desc: "Can form Corps with Mercenaries and Armies with Nationalism. Corps and Armies gain +5 base combat strength." },
    civAbility: { name: "Isibongo", desc: "Cities with a garrisoned unit gain +3 Loyalty and +1 to all yields. Conquering a city with a unit upgrades it to a Corps or Army." },
    unique: [
      { name: "Impi (UU)", desc: "Replaces Pike and Shot. Cheaper, faster, earns XP faster. +25 flanking bonus." },
      { name: "Ikanda (UD)", desc: "Replaces Encampment. Provides +1 Housing. Units gain unique promotions." }
    ],
    bbgNotes: "BBG: Isibongo — garrisoned units give +3 Loyalty (+5 for Corps/Army). Conquest upgrades to Corps/Army. Amabutho — Corps at Mercenaries, Armies at Nationalism. +2 base CS to Corps/Armies at Mobilization. Ikanda buildings get +2 Gold and +1 Culture. Direct Corps/Army training with scaling cost reduction.",
    strategy: {
      domination: { synergy: 95, tips: ["Early Corps and Armies are devastating", "Impi flanking bonus stacks", "Conquering upgrades units", "Ikanda promotions are unique"] },
      science: { synergy: 30, tips: ["Must conquer for science"] },
      culture: { synergy: 25, tips: ["Not focused on culture"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 20, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "suleiman-kanuni", name: "Suleiman (Kanuni)", civ: "Ottoman",
    victoryTypes: ["domination", "science"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Kanuni", desc: "Has a unique Governor: Ibrahim. +15% Production toward buildings in cities with Governors." },
    civAbility: { name: "Great Turkish Bombard", desc: "+50% Production toward siege units. Siege units gain +5 combat strength. Conquered cities don't lose population. +1 Amenity and +4 Loyalty in conquered cities." },
    unique: [
      { name: "Janissary (UU)", desc: "Replaces Musketman. Stronger and cheaper. Starts with a free promotion. -1 population in non-conquered cities when trained." },
      { name: "Grand Bazaar (UB)", desc: "Replaces Bank. +1 extra amenity and strategic resource for each type of resource improved." }
    ],
    bbgNotes: "BBG: Grand Vizier — unique Governor Ibrahim with military/diplomatic abilities. Janissary and Governor Title at Gunpowder. Great Turkish Bombard — +50% siege Production, +3 CS for siege (not +5). Conquered cities keep population, +1 Amenity, +4 Loyalty. Grand Bazaar gives Governor Title on first build, +1 Trade Route.",
    strategy: {
      domination: { synergy: 90, tips: ["Siege units are incredibly strong", "Conquered cities keep population", "Janissary is a top-tier unique unit", "Ibrahim Governor for loyalty/combat"] },
      science: { synergy: 55, tips: ["Conquer cities with Campuses", "Governor production bonus for buildings"] },
      culture: { synergy: 35, tips: ["Not focused on culture"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 30, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "suleiman-muhtesem", name: "Suleiman (Muhteşem)", civ: "Ottoman",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Muhteşem", desc: "Gain a free Janissary when conquering a city with a Musketman or Janissary. +4 combat strength for all units during a Golden Age." },
    civAbility: { name: "Great Turkish Bombard", desc: "+50% Production toward siege units. Siege units gain +5 combat strength. Conquered cities don't lose population." },
    unique: [
      { name: "Janissary (UU)", desc: "Replaces Musketman. Stronger and cheaper. Free promotion." },
      { name: "Grand Bazaar (UB)", desc: "Replaces Bank. +1 extra amenity and strategic resource." }
    ],
    bbgNotes: "BBG: Same civ ability as Kanuni. Muhteşem leader ability details not fully specified in BBG 7.4 — likely similar conquest bonuses.",
    strategy: {
      domination: { synergy: 85, tips: ["Free Janissaries from conquest", "Golden Age combat bonus", "Siege unit bonuses", "Snowball through conquest"] },
      science: { synergy: 40, tips: ["Conquer for science"] },
      culture: { synergy: 30, tips: ["Not focused"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 25, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "sundiata", name: "Sundiata Keita", civ: "Mali",
    victoryTypes: ["religion", "culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Manden Kurufaba", desc: "Cities with a Governor gain +2 Food and +2 Faith. Traders gain +2 Gold for each flat Desert tile in the origin city." },
    civAbility: { name: "Songs of the Jeli", desc: "City Centers gain +1 Faith and +1 Food for each adjacent Desert. Mines receive -1 Production. May purchase Commercial Hub buildings with Faith." },
    unique: [
      { name: "Mandekalu Cavalry (UU)", desc: "Replaces Knight. Protects traders. Gains Gold from kills." },
      { name: "Suguba (UD)", desc: "Replaces Commercial Hub. 20% discount on Gold and Faith purchases." }
    ],
    bbgNotes: "BBG: Sogolon leader ability — details not fully specified in BBG 7.4 changelog. Songs of the Jeli civ ability same as Mansa Musa. Suguba and Mandekalu Cavalry unchanged.",
    strategy: {
      domination: { synergy: 35, tips: ["Mandekalu Cavalry is decent", "Production penalty hurts"] },
      science: { synergy: 45, tips: ["Gold/faith purchases supplement", "Not focused"] },
      culture: { synergy: 55, tips: ["Governor food helps growth", "Faith for Great People purchases"] },
      religion: { synergy: 85, tips: ["Desert faith + Governor faith", "Suguba faith purchases at discount", "Strong religious foundation"] },
      diplomacy: { synergy: 60, tips: ["Gold generation", "Trade route bonuses"] }
    }
  },
  {
    id: "tamar", name: "Tamar", civ: "Georgia",
    victoryTypes: ["religion", "diplomacy"],
    tier: { vanilla: "C", bbg: "C" },
    leaderAbility: { name: "Glory of the World, Kingdom, and Faith", desc: "+100% Faith for 10 turns after declaring a Protectorate War. Each Envoy sent to a city-state of your majority religion counts as 2 Envoys." },
    civAbility: { name: "Strength in Unity", desc: "+1 Faith per turn for each Envoy sent to a city-state. Dedications chosen at the start of a Golden Age last until the next Normal or Golden Age." },
    unique: [
      { name: "Khevsur (UU)", desc: "Replaces Man-at-Arms. +7 combat in Hills. No movement penalty on Hills." },
      { name: "Tsikhe (UB)", desc: "Replaces Renaissance Walls. Higher defense. +3 Faith. +4 Tourism after Conservation." }
    ],
    bbgNotes: "BBG: Glory of the World, Kingdom, and Faith — details not fully specified in BBG 7.4. Strength in Unity unchanged. Tsikhe and Khevsur unchanged.",
    strategy: {
      domination: { synergy: 30, tips: ["Khevsur is decent in hills", "Not focused"] },
      science: { synergy: 35, tips: ["Not focused on science"] },
      culture: { synergy: 40, tips: ["Tsikhe tourism after Conservation", "Not primary focus"] },
      religion: { synergy: 75, tips: ["Protectorate War faith bonus", "Double envoys with religion", "Tsikhe faith generation"] },
      diplomacy: { synergy: 70, tips: ["Double envoys for suzerainty", "City-state focus", "Envoy faith generation"] }
    }
  },
  {
    id: "teddy-bull-moose", name: "Teddy Roosevelt (Bull Moose)", civ: "America",
    victoryTypes: ["culture", "science"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Antiquities and Parks", desc: "+2 Science and +2 Culture in cities with a National Park. +1 Appeal to all tiles in a city with a National Park." },
    civAbility: { name: "Founding Fathers", desc: "Earn all government legacy bonuses in half the usual time." },
    unique: [
      { name: "P-51 Mustang (UU)", desc: "Replaces Fighter. +5 combat vs fighters. +2 flight range. +50% XP." },
      { name: "Film Studio (UB)", desc: "Replaces Broadcast Center. +100% Tourism pressure to civs in a Modern era or later." }
    ],
    bbgNotes: "BBG: Founding Fathers reworked — all Diplomatic policy slots converted to Wildcard. +1 Diplomatic Favor per Wildcard slot. Antiquities and Parks reworked — breathtaking tiles get +1 Science near Natural Wonders/Mountains (doubled with Astronomy), +1 Culture near Wonders/Woods (doubled with Enlightenment). Woods plantable with Medieval Faires. Film Studio nerfed to +30% Tourism (not +100%).",
    strategy: {
      domination: { synergy: 30, tips: ["P-51 Mustang is strong but late", "Not focused"] },
      science: { synergy: 65, tips: ["National Park science bonus", "Government legacy bonuses help"] },
      culture: { synergy: 85, tips: ["National Parks are core strategy", "Film Studio doubles tourism pressure", "Appeal management is key", "Government legacy bonuses"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 50, tips: ["Government legacy bonuses", "Not specifically focused"] }
    }
  },
  {
    id: "teddy-rough-rider", name: "Teddy Roosevelt (Rough Rider)", civ: "America",
    victoryTypes: ["domination", "diplomacy"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Roosevelt Corollary", desc: "+5 combat strength on home continent. Gain Envoys when you defeat units on your continent. Rough Rider unique unit." },
    civAbility: { name: "Founding Fathers", desc: "Earn all government legacy bonuses in half the usual time." },
    unique: [
      { name: "Rough Rider (UU)", desc: "Unique cavalry. +10 combat on Hills. Earns Culture from kills on home continent. Low maintenance." },
      { name: "Film Studio (UB)", desc: "Replaces Broadcast Center. +100% Tourism pressure." }
    ],
    bbgNotes: "BBG: Roosevelt Corollary reworked — units get +1 CS per era reached (capped at +5 in Industrial). Envoys to city-states with trade routes count as two. Rough Rider unlocked at Ballistics, replaces Cuirassier. +5 CS on Hills (not +10). Culture from kills at 25% of CS. Founding Fathers same as Bull Moose. Film Studio +30%.",
    strategy: {
      domination: { synergy: 65, tips: ["Home continent combat bonus", "Rough Rider on hills", "Envoys from kills"] },
      science: { synergy: 40, tips: ["Government legacy bonuses", "Not focused"] },
      culture: { synergy: 55, tips: ["Film Studio tourism", "Rough Rider culture from kills"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 65, tips: ["Envoys from kills", "Government legacy bonuses", "City-state influence"] }
    }
  },
  {
    id: "tokugawa", name: "Tokugawa", civ: "Japan",
    victoryTypes: ["domination", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Bakuhan System", desc: "Domestic trade routes provide +1 Culture, +1 Science, and +1 Gold. International trade routes provide -2 Culture, -2 Science, -2 Gold." },
    civAbility: { name: "Meiji Restoration", desc: "Districts receive +1 adjacency bonus for each adjacent district." },
    unique: [
      { name: "Samurai (UU)", desc: "Replaces Man-at-Arms. Does not suffer combat penalties when damaged." },
      { name: "Electronics Factory (UB)", desc: "Replaces Factory. Provides Culture to all cities within 6 tiles." }
    ],
    bbgNotes: "BBG: Bakuhan reworked — international trade gets -25% yields and Tourism. Domestic trade gives +0.5 Culture (+1 with Humanism) and +0.5 Science (+1 with Education) per specialty district at destination. Cities within 6 tiles of capital get 100% Loyalty. After Flight, +1 Tourism per district. Meiji Restoration same as Hojo (minus Commercial Hub/Harbor adjacency).",
    strategy: {
      domination: { synergy: 65, tips: ["Samurai doesn't weaken when damaged", "Domestic trade for self-sufficiency", "Meiji adjacency for production"] },
      science: { synergy: 60, tips: ["Domestic trade science", "Meiji adjacency for Campus"] },
      culture: { synergy: 75, tips: ["Domestic trade culture", "Electronics Factory culture", "Meiji adjacency for Theater Squares"] },
      religion: { synergy: 55, tips: ["Meiji adjacency for Holy Sites", "Domestic trade helps"] },
      diplomacy: { synergy: 35, tips: ["International trade penalty hurts diplomacy"] }
    }
  },
  {
    id: "tomyris", name: "Tomyris", civ: "Scythia",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "B" },
    leaderAbility: { name: "Killer of Cyrus", desc: "All units receive +5 combat strength when attacking wounded units. When a unit defeats an enemy, it heals 30 HP." },
    civAbility: { name: "People of the Steppe", desc: "Receive a second light cavalry or Saka Horse Archer each time you train one." },
    unique: [
      { name: "Saka Horse Archer (UU)", desc: "Unique ranged cavalry. 4 movement. Does not require horses." },
      { name: "Kurgan (UI)", desc: "+1 Faith, +1 Gold. +1 Faith for each adjacent Pasture." }
    ],
    bbgNotes: "BBG: People of the Steppe reworked — may purchase light, heavy, and ranged cavalry with Faith (no longer double production). Killer of Cyrus — +3 CS vs wounded (+5 after Medieval era). Heal 30 HP on kill. Saka Horse Archer has Range 2 and 4 Movement.",
    strategy: {
      domination: { synergy: 85, tips: ["Double cavalry production is incredible", "Saka Horse Archer rush", "Heal on kill sustains attacks", "+5 vs wounded units for finishing"] },
      science: { synergy: 30, tips: ["Must conquer for science"] },
      culture: { synergy: 25, tips: ["Not focused on culture"] },
      religion: { synergy: 40, tips: ["Kurgan faith generation", "Not primary focus"] },
      diplomacy: { synergy: 20, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "trajan", name: "Trajan", civ: "Rome",
    victoryTypes: ["domination", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Trajan's Column", desc: "All cities start with a free Monument." },
    civAbility: { name: "All Roads Lead to Rome", desc: "Founded or conquered cities start with a Trading Post and road to the Capital." },
    unique: [
      { name: "Legion (UU)", desc: "Replaces Swordsman. Can build roads and forts. Stronger." },
      { name: "Bath (UD)", desc: "Replaces Aqueduct. +2 Housing and +1 Amenity beyond normal." }
    ],
    bbgNotes: "BBG: Trajan's Column — free City Center building after Early Empire (not immediate Monument). All Roads Lead to Rome unchanged. Bath gets +1 Culture per 2 adjacent districts.",
    strategy: {
      domination: { synergy: 70, tips: ["Legion is strong early", "Free roads for logistics", "Wide empire with free Monuments"] },
      science: { synergy: 55, tips: ["Bath housing helps growth", "Wide empire for more Campuses"] },
      culture: { synergy: 65, tips: ["Free Monuments = early culture", "Wide empire for Theater Squares", "Bath amenities help growth"] },
      religion: { synergy: 40, tips: ["Free Monuments help early civics", "Not focused"] },
      diplomacy: { synergy: 45, tips: ["Wide empire generates some favor"] }
    }
  },
  {
    id: "wilfrid-laurier", name: "Wilfrid Laurier", civ: "Canada",
    victoryTypes: ["diplomacy", "culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "The Last Best West", desc: "Can build Farms on Tundra. Tundra tiles provide +1 Food after Civil Engineering. Purchasing Snow and Tundra tiles is 50% cheaper." },
    civAbility: { name: "Four Faces of Peace", desc: "Cannot declare or be target of Surprise Wars. +1 Diplomatic Favor per 100 Tourism. Gain +100% Diplomatic Favor from successfully completing Emergencies and Scored Competitions." },
    unique: [
      { name: "Mountie (UU)", desc: "Unique cavalry. Can create National Parks. +5 combat near a National Park." },
      { name: "Ice Hockey Rink (UI)", desc: "+1 Amenity, +1 Culture. +2 Culture if adjacent to Stadium. +4 Tourism after Flight." }
    ],
    bbgNotes: "BBG: The Last Best West massively buffed — City Centers in Tundra get +1 Food. Farms on Tundra. After Civil Engineering, Farms on Tundra Hills. Tundra/Snow improvements get bonus yields: Mines/Lumber Mills +2 Production, Farms/Camps +2 Food, Pastures +1 Food. Double strategic resource accumulation in Tundra/Snow. Four Faces of Peace unchanged. Ice Hockey Rink gives +1 Culture per adjacent Tundra/Snow tile. Mountie has Sight 4, creates 2 National Parks.",
    strategy: {
      domination: { synergy: 20, tips: ["Cannot declare Surprise Wars", "Mountie is decent defensively"] },
      science: { synergy: 40, tips: ["Tundra farming helps growth", "Not focused"] },
      culture: { synergy: 70, tips: ["Ice Hockey Rink tourism", "Mountie creates National Parks", "Tourism generates Diplomatic Favor"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 90, tips: ["Cannot be surprise warred", "Diplomatic Favor from tourism", "Emergency/Competition bonuses", "Best diplomacy civ in the game"] }
    }
  },
  {
    id: "wu-zetian", name: "Wu Zetian", civ: "China",
    victoryTypes: ["culture", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Empress Wu", desc: "Gain a free Spy when building a Tier 1 Government Plaza building. +1 Spy capacity. Spies operate at +2 levels." },
    civAbility: { name: "Dynastic Cycle", desc: "Eurekas and Inspirations provide 60% instead of 50%." },
    unique: [
      { name: "Crouching Tiger (UU)", desc: "Replaces Crossbowman. No resource requirement." },
      { name: "Great Wall (UI)", desc: "+2 Gold, +2 Culture when adjacent to other Great Wall segments." }
    ],
    bbgNotes: "BBG: Manual of Entrapment — details not fully specified in BBG 7.4. Dynastic Cycle at 45% Eurekas/Inspirations.",
    strategy: {
      domination: { synergy: 30, tips: ["Spies for sabotage", "Not focused"] },
      science: { synergy: 60, tips: ["60% Eurekas", "Spies can steal tech", "Spy sabotage slows opponents"] },
      culture: { synergy: 65, tips: ["Great Wall culture", "60% Inspirations", "Spy network for intel"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 45, tips: ["Spy intel helps diplomacy"] }
    }
  },
  {
    id: "yongle", name: "Yongle", civ: "China",
    victoryTypes: ["science", "culture"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Lijia", desc: "Projects in the City Center provide +4 Gold, +3 Science, and +2 Culture per turn while active. +1 Trade Route capacity." },
    civAbility: { name: "Dynastic Cycle", desc: "Eurekas and Inspirations provide 60% instead of 50%." },
    unique: [
      { name: "Crouching Tiger (UU)", desc: "Replaces Crossbowman. No resource requirement." },
      { name: "Great Wall (UI)", desc: "+2 Gold, +2 Culture when adjacent to other Great Wall segments." }
    ],
    bbgNotes: "BBG: Lijia — details not fully specified in BBG 7.4. Dynastic Cycle at 45% Eurekas/Inspirations.",
    strategy: {
      domination: { synergy: 30, tips: ["Not focused on domination"] },
      science: { synergy: 65, tips: ["Project science yields", "60% Eurekas", "Trade route for gold"] },
      culture: { synergy: 65, tips: ["Project culture yields", "Great Wall culture", "60% Inspirations"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 45, tips: ["Gold from projects and trade"] }
    }
  },
  {
    id: "theodora", name: "Theodora", civ: "Byzantium",
    victoryTypes: ["religion", "domination"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Metanoia", desc: "Can choose any belief when founding a religion, regardless of availability. Holy Cities exert +2 Loyalty to nearby cities." },
    civAbility: { name: "Taxis", desc: "+3 combat strength or +3 religious strength for each Holy City converted to Byzantium's religion." },
    unique: [
      { name: "Dromon (UU)", desc: "Replaces Quadrireme. +10 ranged strength." },
      { name: "Tagma (UU)", desc: "Replaces Knight. +4 combat or religious strength to nearby units." },
      { name: "Hippodrome (UD)", desc: "Replaces Entertainment Complex. Free heavy cavalry unit." }
    ],
    bbgNotes: "BBG: Metanoia reworked — after Political Philosophy, Holy Sites give +1 Culture per adjacent district. Farms give Faith adjacency to Hippodromes and Holy Sites. Taxis same as Basil (+2 CS/RS per converted Holy City). Hippodrome and Dromon same as Basil.",
    strategy: {
      domination: { synergy: 75, tips: ["Taxis combat strength from conversions", "Hippodrome free units", "Tagma support bonus"] },
      science: { synergy: 30, tips: ["Not focused on science"] },
      culture: { synergy: 30, tips: ["Not focused on culture"] },
      religion: { synergy: 95, tips: ["Choose ANY belief — pick the best combo", "Taxis religious strength", "Holy City loyalty", "Most flexible religion civ"] },
      diplomacy: { synergy: 30, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "nader-shah", name: "Nader Shah", civ: "Persia",
    victoryTypes: ["domination"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Sword of Persia", desc: "+2 combat strength for all units. Gain +5 combat strength and +2 Movement for 10 turns after conquering a city." },
    civAbility: { name: "Satrapies", desc: "+1 Trade Route capacity with Political Philosophy. Domestic trade routes provide +2 Gold and +1 Culture." },
    unique: [
      { name: "Immortal (UU)", desc: "Replaces Swordsman. Ranged attack with melee strength. Heals faster." },
      { name: "Pairidaeza (UI)", desc: "+1 Culture, +2 Gold, +2 Appeal. Bonus from adjacent districts and wonders." }
    ],
    bbgNotes: "BBG: Sword of Persia — +5 CS when attacking defensible districts and full health units. Domestic trade gives +1 Science, scaling with Education and Scientific Theory. Satrapies same as Cyrus — +1 Trade Route at Political Philosophy, domestic trade gives Gold scaling.",
    strategy: {
      domination: { synergy: 90, tips: ["+2 combat strength always active", "Conquest triggers movement and combat bonus", "Immortals are versatile", "Chain conquests for permanent bonuses"] },
      science: { synergy: 35, tips: ["Must conquer for science"] },
      culture: { synergy: 50, tips: ["Pairidaeza culture", "Domestic trade culture"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 25, tips: ["Aggressive playstyle conflicts"] }
    }
  },
  {
    id: "elizabeth", name: "Elizabeth I", civ: "England",
    victoryTypes: ["culture", "science"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Drake's Legacy", desc: "+100% Gold from Trade Routes to city-states. +2 Gold for each improved Luxury resource." },
    civAbility: { name: "Workshop of the World", desc: "Iron and Coal Mines accumulate 2 more resources per turn. Harbor buildings increase Strategic Resource Stockpiles by +10. +100% Production toward Military Engineers. Military Engineers receive +2 charges." },
    unique: [
      { name: "Sea Dog (UU)", desc: "Replaces Privateer. Chance to capture defeated enemy ships. Can only be seen by other Naval Raiders unless adjacent." },
      { name: "Royal Navy Dockyard (UD)", desc: "Replaces Harbor. +1 Movement for naval units built here. +2 Gold adjacency and +4 Loyalty per turn when built on a foreign continent." }
    ],
    bbgNotes: "BBG: Drake's Legacy — details not fully specified in BBG 7.4. Workshop of the World is civ ability — Iron/Coal mines +2 resources, Harbor buildings +10 stockpile, +100% Military Engineer Production, +2 charges. Sea Dog replaces Privateer.",
    strategy: {
      domination: { synergy: 35, tips: ["Redcoat on foreign continents", "Gold funds military"] },
      science: { synergy: 55, tips: ["Gold funds research", "British Museum not science-focused"] },
      culture: { synergy: 75, tips: ["British Museum artifacts", "Gold for Great People patronage"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 55, tips: ["City-state trade bonuses", "Gold for diplomatic favor"] }
    }
  },
  {
    id: "abraham-lincoln", name: "Abraham Lincoln", civ: "America",
    victoryTypes: ["diplomacy", "domination"],
    tier: { vanilla: "B", bbg: "B" },
    leaderAbility: { name: "Emancipation", desc: "Melee and anti-cavalry class units gain +5 combat strength. Gain a free Melee unit when building an Industrial Zone for the first time in a city." },
    civAbility: { name: "Founding Fathers", desc: "Earn all government legacy bonuses in half the usual time." },
    unique: [
      { name: "P-51 Mustang (UU)", desc: "Replaces Fighter. +5 combat vs fighters. +2 flight range." },
      { name: "Film Studio (UB)", desc: "Replaces Broadcast Center. +100% Tourism pressure." }
    ],
    bbgNotes: "BBG: Emancipation Proclamation reworked — +100% Production to Industrial Zone and Aqueduct. Industrial Zones give +2 Amenities and +3 Loyalty. Plantations give -2 Loyalty. Free melee unit from Industrial Zone and buildings (+5 CS, no resource cost). Founding Fathers — Diplomatic slots become Wildcard, +1 Favor per Wildcard. Film Studio +30%.",
    strategy: {
      domination: { synergy: 65, tips: ["+5 melee/anti-cav combat strength", "Free units from Industrial Zones", "Government legacy bonuses"] },
      science: { synergy: 45, tips: ["Government legacy bonuses", "Not focused"] },
      culture: { synergy: 55, tips: ["Film Studio tourism", "Government legacy bonuses"] },
      religion: { synergy: 25, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 60, tips: ["Government legacy bonuses", "Defensive playstyle works"] }
    }
  },
  {
    id: "matthias-corvinus", name: "Matthias Corvinus", civ: "Hungary",
    victoryTypes: ["domination", "diplomacy"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Raven King", desc: "Levied city-state units gain +2 Movement and +5 combat strength. Levied units can be upgraded at 75% discount. Gain 2 Envoys when levying units." },
    civAbility: { name: "Pearl of the Danube", desc: "+50% Production toward districts and buildings built across a river from a City Center." },
    unique: [
      { name: "Huszár (UU)", desc: "Replaces Cavalry. +3 combat strength for each active alliance." },
      { name: "Thermal Bath (UB)", desc: "Replaces Zoo. +2 Amenities, +2 Production, +3 Tourism. +3 Amenities if adjacent to a Geothermal Fissure." }
    ],
    bbgNotes: "BBG: Pearl of the Danube unchanged (+50% Production across river). Raven King — levied units get +1 Movement. 75% cheaper upgrades for levied units. +1 Envoy when levying. Black Army unique Courser at Castles (+2 CS per adjacent levied unit). Huszár — +2 CS per suzerain city-state (not per alliance).",
    strategy: {
      domination: { synergy: 80, tips: ["Levy city-state armies with bonuses", "Huszár alliance combat stacking", "Cheap upgrades for levied units", "River production for military buildings"] },
      science: { synergy: 50, tips: ["River production for Campuses", "Not primary focus"] },
      culture: { synergy: 45, tips: ["Thermal Bath tourism", "Not focused"] },
      religion: { synergy: 35, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 70, tips: ["City-state levy synergy", "Envoys from levying", "Alliance-focused Huszár"] }
    }
  },
  {
    id: "cleopatra-ptolemaic", name: "Cleopatra (Ptolemaic)", civ: "Egypt",
    victoryTypes: ["science", "culture"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Ptolemaic Dynasty", desc: "+100% Alliance points from trade routes. +15% Production toward projects in cities with a Campus. Gain +1 Great Scientist point per turn for each Alliance." },
    civAbility: { name: "Iteru", desc: "+15% production toward districts and wonders built next to rivers. Floodplains don't block district/wonder placement." },
    unique: [
      { name: "Maryannu Chariot Archer (UU)", desc: "Replaces Heavy Chariot. 2 movement when starting on open terrain. Ranged attack." },
      { name: "Sphinx (UI)", desc: "+1 Culture, +1 Faith. +1 Culture if adjacent to a Wonder. Cannot be built on hills." }
    ],
    bbgNotes: "BBG: Arrival of Hapi reworked — military units cross rivers without penalty from Classical era. +15% Production for Campus and Encampment on rivers. Campus and Encampment get major Science adjacency from rivers. Iteru unchanged.",
    strategy: {
      domination: { synergy: 25, tips: ["Not focused on domination", "Maryannu Chariot Archer is decent early"] },
      science: { synergy: 80, tips: ["Great Scientist points from alliances", "+15% project production with Campus", "Form alliances early and trade"] },
      culture: { synergy: 70, tips: ["Sphinx culture and faith", "Iteru wonder production", "Alliance points for diplomacy"] },
      religion: { synergy: 50, tips: ["Sphinx faith generation", "River production for Holy Sites"] },
      diplomacy: { synergy: 65, tips: ["Alliance-focused abilities", "Trade route alliance points", "Natural diplomatic playstyle"] }
    }
  },
  {
    id: "victoria-steam", name: "Victoria (Age of Steam)", civ: "England",
    victoryTypes: ["science", "domination"],
    tier: { vanilla: "A", bbg: "A" },
    leaderAbility: { name: "Workshop of the World", desc: "+20% Production in cities with a Military Engineer. +2 Iron and +2 Coal per turn. Powered buildings provide +4 yields." },
    civAbility: { name: "British Museum", desc: "Archaeological Museums have 6 slots and can hold 2 full artifact sets." },
    unique: [
      { name: "Redcoat (UU)", desc: "Replaces Infantry. +10 combat on foreign continent." },
      { name: "Royal Navy Dockyard (UD)", desc: "Replaces Harbor. +1 Movement for naval units." }
    ],
    bbgNotes: "BBG: Age of Steam reworked — +5% Production per Factory and Power Plant in city. Powered buildings get +4 of their yield. Industrial Zones get standard adjacency from Royal Navy Dockyards. +20% Production toward Industrial Zone buildings. Lighthouse gives +1 Great Engineer point. Workshop of the World civ ability.",
    strategy: {
      domination: { synergy: 60, tips: ["Free Iron and Coal for units", "Military Engineer production bonus", "Redcoat on foreign continents"] },
      science: { synergy: 75, tips: ["Powered buildings +4 yields is huge", "Production for space projects", "Industrial focus accelerates late game"] },
      culture: { synergy: 55, tips: ["British Museum artifacts", "Powered building yields"] },
      religion: { synergy: 30, tips: ["No religious bonuses"] },
      diplomacy: { synergy: 45, tips: ["Production helps but not focused"] }
    }
  },

];
