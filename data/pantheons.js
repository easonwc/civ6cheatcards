// Civ 6 Pantheon Data — synergy scores per victory type
const PANTHEONS = [
  {
    id: "divine-spark",
    name: "Divine Spark",
    desc: "+1 Great Person point from Holy Sites (Prophet), Campuses (Scientist), and Theater Squares (Writer).",
    synergy: { domination: 20, science: 70, culture: 65, religion: 60, diplomacy: 40 },
    tags: ["great-people", "science", "culture", "religion"],
    tip: "Excellent for science or culture — accelerates Great People across the board."
  },
  {
    id: "religious-settlements",
    name: "Religious Settlements",
    desc: "+15% faster border expansion.",
    synergy: { domination: 35, science: 40, culture: 50, religion: 40, diplomacy: 35 },
    tags: ["expansion", "general"],
    tip: "Grab more tiles passively — great for culture civs that want high-appeal land or wonder tiles."
  },
  {
    id: "god-of-the-forge",
    name: "God of the Forge",
    desc: "+25% Production toward Ancient and Classical military units.",
    synergy: { domination: 85, science: 20, culture: 15, religion: 20, diplomacy: 15 },
    tags: ["military", "production", "domination"],
    tip: "The domination pantheon. Pump out early units fast for a Classical timing attack."
  },
  {
    id: "goddess-of-the-harvest",
    name: "Goddess of the Harvest",
    desc: "Harvesting a resource or removing a feature receives Faith equal to the other yield's quantity.",
    synergy: { domination: 30, science: 35, culture: 30, religion: 65, diplomacy: 30 },
    tags: ["faith", "harvest", "religion"],
    tip: "Burst Faith from chopping — can fund an early religion or Monumentality settlers."
  },
  {
    id: "monument-to-the-gods",
    name: "Monument to the Gods",
    desc: "+15% Production toward Ancient and Classical era Wonders.",
    synergy: { domination: 20, science: 30, culture: 70, religion: 30, diplomacy: 50 },
    tags: ["wonders", "production", "culture"],
    tip: "Secures early wonders like Stonehenge, Oracle, or Pyramids. Great for culture and diplomacy."
  },
  {
    id: "fertility-rites",
    name: "Fertility Rites",
    desc: "City growth rate is 10% higher.",
    synergy: { domination: 25, science: 55, culture: 45, religion: 35, diplomacy: 40 },
    tags: ["growth", "general"],
    tip: "More population means more districts. Solid for science civs that need tall cities."
  },
  {
    id: "earth-goddess",
    name: "Earth Goddess",
    desc: "+2 Faith from tiles with Breathtaking Appeal.",
    synergy: { domination: 15, science: 25, culture: 60, religion: 70, diplomacy: 35 },
    tags: ["faith", "appeal", "religion", "culture"],
    tip: "Massive Faith on the right map. Pairs perfectly with National Parks and Seaside Resorts."
  },
  {
    id: "dance-of-the-aurora",
    name: "Dance of the Aurora",
    desc: "Holy Site districts get +1 Faith from adjacent Tundra tiles.",
    synergy: { domination: 15, science: 20, culture: 20, religion: 75, diplomacy: 25 },
    tags: ["faith", "tundra", "religion"],
    tip: "Niche but powerful on tundra starts. Huge Holy Site adjacency for religion-focused civs."
  },
  {
    id: "desert-folklore",
    name: "Desert Folklore",
    desc: "Holy Site districts get +1 Faith from adjacent Desert tiles.",
    synergy: { domination: 15, science: 20, culture: 20, religion: 75, diplomacy: 25 },
    tags: ["faith", "desert", "religion"],
    tip: "The desert version of Dance of the Aurora. Essential for desert-start religion civs like Mali."
  },
  {
    id: "sacred-path",
    name: "Sacred Path",
    desc: "Holy Site districts get +1 Faith from adjacent Rainforest tiles.",
    synergy: { domination: 15, science: 20, culture: 20, religion: 75, diplomacy: 25 },
    tags: ["faith", "rainforest", "religion"],
    tip: "Strong on jungle-heavy maps. Pairs well with civs that preserve rainforest like Brazil."
  },
  {
    id: "river-goddess",
    name: "River Goddess",
    desc: "+2 Amenities and +2 Housing to cities with a Holy Site district adjacent to a River.",
    synergy: { domination: 25, science: 45, culture: 40, religion: 55, diplomacy: 40 },
    tags: ["amenities", "housing", "religion", "growth"],
    tip: "Solid for tall empires. The amenities and housing let your cities grow bigger."
  },
  {
    id: "lady-of-the-reeds-and-marshes",
    name: "Lady of the Reeds and Marshes",
    desc: "+2 Production from Marsh, Oasis, and Floodplains.",
    synergy: { domination: 40, science: 45, culture: 35, religion: 30, diplomacy: 35 },
    tags: ["production", "marsh", "floodplains"],
    tip: "Extra production from terrain most civs ignore. Great on flood-heavy maps like Egypt starts."
  },
  {
    id: "god-of-the-sea",
    name: "God of Tides",
    desc: "+1 Production from Fishing Boats.",
    synergy: { domination: 35, science: 40, culture: 30, religion: 25, diplomacy: 35 },
    tags: ["production", "naval", "coast"],
    tip: "Essential for coastal/island starts. The production from fishing boats adds up fast."
  },
  {
    id: "god-of-the-open-sky",
    name: "God of the Open Sky",
    desc: "+1 Culture from Pastures.",
    synergy: { domination: 25, science: 25, culture: 60, religion: 25, diplomacy: 30 },
    tags: ["culture", "pastures"],
    tip: "Free culture from pastures — strong if your start has horses, cattle, or sheep."
  },
  {
    id: "goddess-of-the-hunt",
    name: "Goddess of the Hunt",
    desc: "+1 Food and +1 Production from Camps.",
    synergy: { domination: 35, science: 40, culture: 30, religion: 25, diplomacy: 30 },
    tags: ["food", "production", "camps"],
    tip: "Camps become solid tiles. Good if you have deer, furs, or truffles near your capital."
  },
  {
    id: "stone-circles",
    name: "Stone Circles",
    desc: "+2 Faith from Quarries.",
    synergy: { domination: 20, science: 25, culture: 30, religion: 60, diplomacy: 25 },
    tags: ["faith", "quarries", "religion"],
    tip: "Reliable Faith if you have stone, marble, or gypsum. Helps fund a religion."
  },
  {
    id: "oral-tradition",
    name: "Oral Tradition",
    desc: "+1 Culture from Plantations.",
    synergy: { domination: 20, science: 25, culture: 60, religion: 25, diplomacy: 30 },
    tags: ["culture", "plantations"],
    tip: "Free culture from plantations — strong on maps with sugar, spices, or cocoa."
  },
  {
    id: "initiation-rites",
    name: "Initiation Rites",
    desc: "+50 Faith for each Barbarian Outpost cleared.",
    synergy: { domination: 45, science: 25, culture: 25, religion: 55, diplomacy: 25 },
    tags: ["faith", "barbarians", "domination"],
    tip: "Pairs well with early military. Clear camps for burst Faith — can fund a Pantheon or religion."
  },
  {
    id: "goddess-of-fire",
    name: "Fire Goddess",
    desc: "+2 Faith from Geothermal Fissures and Volcanic Soil.",
    synergy: { domination: 15, science: 25, culture: 25, religion: 65, diplomacy: 25 },
    tags: ["faith", "volcanic", "religion"],
    tip: "Map-dependent but strong. If you spawned near volcanoes, this is free Faith."
  },
  {
    id: "city-patron-goddess",
    name: "City Patron Goddess",
    desc: "+25% Production toward districts in cities without a specialty district.",
    synergy: { domination: 30, science: 50, culture: 50, religion: 45, diplomacy: 40 },
    tags: ["production", "districts", "general"],
    tip: "Helps new cities get their first district up fast. Great for wide empires."
  },
  {
    id: "religious-idols",
    name: "Religious Idols",
    desc: "+2 Faith from Mines over luxury and bonus resources.",
    synergy: { domination: 25, science: 30, culture: 25, religion: 65, diplomacy: 25 },
    tags: ["faith", "mines", "religion"],
    tip: "Consistent Faith from mines. Strong if you have lots of mineable luxuries."
  },
  {
    id: "god-of-war",
    name: "God of War and Plunder",
    desc: "Bonus Faith equal to 50% of the strength of each enemy unit killed within 8 tiles of a Holy Site.",
    synergy: { domination: 70, science: 15, culture: 15, religion: 50, diplomacy: 15 },
    tags: ["faith", "military", "domination", "religion"],
    tip: "Fight near your Holy Sites for burst Faith. Pairs domination with religion funding."
  },
  {
    id: "god-of-healing",
    name: "God of Healing*",
    desc: "Increases units' healing by 30 in Holy Site districts, or any adjacent tiles.",
    synergy: { domination: 55, science: 20, culture: 15, religion: 45, diplomacy: 20 },
    tags: ["healing", "military", "holy-site"],
    tip: "Turns your Holy Sites into field hospitals. Great for defensive wars or prolonged campaigns. (*May not be available with some mods.)"
  },
  {
    id: "goddess-of-festivals",
    name: "Goddess of Festivals",
    desc: "+1 Food from Plantations.",
    synergy: { domination: 20, science: 40, culture: 35, religion: 30, diplomacy: 35 },
    tags: ["food", "plantations", "growth"],
    tip: "Food from all plantations — helps cities grow if you have sugar, spices, cocoa, or similar nearby."
  },
  {
    id: "god-of-craftsmen",
    name: "God of Craftsmen",
    desc: "+1 Production and +1 Faith from Mines over strategic resources.",
    synergy: { domination: 45, science: 40, culture: 20, religion: 40, diplomacy: 25 },
    tags: ["production", "faith", "strategic", "mines"],
    tip: "Production and Faith from iron, niter, coal mines. Solid for military or religion."
  },
  // === Religion Expanded mod pantheons ===
  {
    id: "chthonic-cult",
    name: "Chthonic Cult",
    desc: "+1 Science from tiles with Breathtaking Appeal.",
    synergy: { domination: 15, science: 65, culture: 45, religion: 20, diplomacy: 30 },
    tags: ["science", "appeal", "mod"],
    tip: "The science counterpart to Earth Goddess. Strong on high-appeal maps for tech-focused civs."
  },
  {
    id: "tundra-spirits",
    name: "Tundra Spirits",
    desc: "+1 Culture from Tundra terrain.",
    synergy: { domination: 15, science: 20, culture: 60, religion: 25, diplomacy: 25 },
    tags: ["culture", "tundra", "mod"],
    tip: "Turns tundra tiles into culture generators. Great for tundra-start civs like Canada or Russia."
  },
  {
    id: "desert-miracles",
    name: "Desert Miracles",
    desc: "+1 Faith from Desert terrain.",
    synergy: { domination: 15, science: 20, culture: 20, religion: 70, diplomacy: 25 },
    tags: ["faith", "desert", "mod"],
    tip: "Faith from every desert tile — pairs with Desert Folklore for massive Holy Site adjacency."
  },
  {
    id: "rainforest-rituals",
    name: "Rainforest Rituals",
    desc: "+1 Culture from Rainforests.",
    synergy: { domination: 15, science: 20, culture: 65, religion: 25, diplomacy: 25 },
    tags: ["culture", "rainforest", "mod"],
    tip: "Culture from every rainforest tile. Excellent for Brazil or any jungle-heavy start."
  },
  {
    id: "hallowed-groves",
    name: "Hallowed Groves",
    desc: "+1 Faith from Woods.",
    synergy: { domination: 15, science: 20, culture: 25, religion: 65, diplomacy: 25 },
    tags: ["faith", "woods", "mod"],
    tip: "Passive Faith from woods — strong on forested maps. Avoid chopping your woods away."
  },
  {
    id: "primordial-waters",
    name: "Primordial Waters",
    desc: "+2 Amenities and +2 Housing from Holy Sites adjacent to a Coast or Lake tile.",
    synergy: { domination: 20, science: 40, culture: 35, religion: 55, diplomacy: 35 },
    tags: ["amenities", "housing", "coast", "mod"],
    tip: "The coastal version of River Goddess. Great for island or coastal starts with Holy Sites."
  },
  {
    id: "messenger-of-the-gods",
    name: "Messenger of the Gods",
    desc: "+1 Trade Route capacity and a free Trader in the Capital. +1 Gold from all Trade Routes.",
    synergy: { domination: 30, science: 45, culture: 40, religion: 30, diplomacy: 50 },
    tags: ["trade", "gold", "general", "mod"],
    tip: "Early trade route is huge for any strategy. The gold scales well into mid-game."
  },
  {
    id: "sacred-emissaries",
    name: "Sacred Emissaries",
    desc: "Receive two City-State Envoys. +1 Influence point per turn.",
    synergy: { domination: 20, science: 40, culture: 40, religion: 25, diplomacy: 75 },
    tags: ["envoys", "city-states", "diplomacy", "mod"],
    tip: "The diplomacy pantheon. Early envoys secure suzerainties and the influence keeps compounding."
  },
  {
    id: "goddess-of-calm-waters",
    name: "Goddess of Calm Waters",
    desc: "+1 Faith from Fishing Boats.",
    synergy: { domination: 15, science: 20, culture: 20, religion: 60, diplomacy: 25 },
    tags: ["faith", "naval", "coast", "mod"],
    tip: "Faith from fishing boats on coastal starts. Pairs well with God of the Sea for a naval economy."
  },
  {
    id: "animal-worship",
    name: "Animal Worship",
    desc: "+1 Culture from Camps.",
    synergy: { domination: 20, science: 25, culture: 55, religion: 25, diplomacy: 25 },
    tags: ["culture", "camps", "mod"],
    tip: "Culture from camps — solid if you have deer, furs, or ivory near your cities."
  },
  {
    id: "votive-offerings",
    name: "Votive Offerings",
    desc: "+1 Culture from Quarries.",
    synergy: { domination: 20, science: 25, culture: 55, religion: 25, diplomacy: 25 },
    tags: ["culture", "quarries", "mod"],
    tip: "Culture from quarries. Good if you have stone, marble, or gypsum to work."
  },
  {
    id: "god-of-metallurgy",
    name: "God of Metallurgy",
    desc: "+1 Science from Mines over Luxury and Bonus resources.",
    synergy: { domination: 30, science: 60, culture: 20, religion: 20, diplomacy: 25 },
    tags: ["science", "mines", "mod"],
    tip: "Science from mines — the tech counterpart to Religious Idols. Strong with lots of mineable resources."
  },
  {
    id: "sun-god",
    name: "Sun God",
    desc: "+1 Food and +1 Production from Farms over Bonus resources.",
    synergy: { domination: 35, science: 45, culture: 30, religion: 25, diplomacy: 35 },
    tags: ["food", "production", "farms", "mod"],
    tip: "Boosts farms on wheat, rice, and maize. Helps cities grow tall and build faster."
  }
];

// Leader/civ keyword → pantheon bonus mappings
// Each rule: if a keyword appears in the leader's combined text, boost that pantheon's score
const PANTHEON_LEADER_BONUSES = [
  // Terrain-based
  { keywords: ["tundra", "blizzard"], pantheons: ["dance-of-the-aurora", "tundra-spirits"], bonus: 25 },
  { keywords: ["desert", "oasis"], pantheons: ["desert-folklore", "desert-miracles", "lady-of-the-reeds-and-marshes"], bonus: 25 },
  { keywords: ["rainforest", "jungle"], pantheons: ["sacred-path", "rainforest-rituals"], bonus: 25 },
  { keywords: ["woods", "forest"], pantheons: ["hallowed-groves"], bonus: 15 },
  { keywords: ["coast", "naval", "harbor", "embark", "island", "sea ", "ocean", "fishing"], pantheons: ["god-of-the-sea", "goddess-of-calm-waters", "primordial-waters"], bonus: 20 },
  { keywords: ["river", "floodplain"], pantheons: ["river-goddess", "lady-of-the-reeds-and-marshes"], bonus: 15 },
  { keywords: ["marsh"], pantheons: ["lady-of-the-reeds-and-marshes"], bonus: 20 },
  { keywords: ["mountain"], pantheons: ["dance-of-the-aurora"], bonus: 10 },
  { keywords: ["appeal", "breathtaking", "national park", "seaside resort"], pantheons: ["earth-goddess", "chthonic-cult"], bonus: 20 },
  { keywords: ["volcanic", "geothermal"], pantheons: ["goddess-of-fire"], bonus: 25 },

  // Improvement-based
  { keywords: ["mine", "mining"], pantheons: ["religious-idols", "god-of-craftsmen", "god-of-metallurgy"], bonus: 15 },
  { keywords: ["quarr"], pantheons: ["stone-circles", "votive-offerings"], bonus: 15 },
  { keywords: ["pasture", "cattle", "horse", "sheep"], pantheons: ["god-of-the-open-sky"], bonus: 15 },
  { keywords: ["camp", "deer", "fur", "ivory"], pantheons: ["goddess-of-the-hunt", "animal-worship"], bonus: 15 },
  { keywords: ["plantation"], pantheons: ["oral-tradition", "goddess-of-festivals"], bonus: 15 },
  { keywords: ["farm"], pantheons: ["sun-god", "fertility-rites"], bonus: 10 },

  // Playstyle-based
  { keywords: ["combat strength", "military unit", "melee", "cavalry", "siege"], pantheons: ["god-of-the-forge", "god-of-war", "initiation-rites", "god-of-healing"], bonus: 10 },
  { keywords: ["wonder"], pantheons: ["monument-to-the-gods"], bonus: 15 },
  { keywords: ["great person", "great people", "great scientist", "great writer", "great artist", "great prophet"], pantheons: ["divine-spark"], bonus: 15 },
  { keywords: ["holy site"], pantheons: ["god-of-war", "god-of-healing", "river-goddess"], bonus: 10 },
  { keywords: ["trade route", "trader", "trade capacity"], pantheons: ["messenger-of-the-gods"], bonus: 15 },
  { keywords: ["envoy", "city-state", "suzerain"], pantheons: ["sacred-emissaries"], bonus: 20 },
  { keywords: ["barbarian"], pantheons: ["initiation-rites"], bonus: 15 },
  { keywords: ["district", "specialty district"], pantheons: ["city-patron-goddess"], bonus: 10 },
  { keywords: ["faith purchase", "purchase with faith", "purchasable with faith"], pantheons: ["earth-goddess", "desert-folklore", "religious-idols"], bonus: 10 },

  // Religion-focused leaders get a general faith boost
  { keywords: ["religion", "religious", "prophet", "missionary", "apostle", "inquisitor"], pantheons: ["divine-spark", "earth-goddess"], bonus: 5 },
];

// Recommend top pantheons based on victory type AND leader/civ synergy
function recommendPantheons(victoryType, count, leader) {
  count = count || 3;

  // Build a combined text blob from leader abilities for keyword matching
  var leaderText = '';
  if (leader) {
    leaderText = [
      leader.name, leader.civ,
      leader.leaderAbility ? leader.leaderAbility.desc : '',
      leader.civAbility ? leader.civAbility.desc : '',
      leader.bbgNotes || '',
      (leader.unique || []).map(function(u) { return u.name + ' ' + u.desc; }).join(' '),
      (leader.victoryTypes || []).join(' ')
    ].join(' ').toLowerCase();
  }

  return PANTHEONS
    .map(function(p) {
      var score = p.synergy[victoryType] || 0;

      // Add leader-specific bonuses
      if (leaderText) {
        PANTHEON_LEADER_BONUSES.forEach(function(rule) {
          // Check if any keyword matches the leader text
          var matched = rule.keywords.some(function(kw) {
            return leaderText.indexOf(kw) !== -1;
          });
          if (matched) {
            // Check if this pantheon is in the rule's boosted list
            if (rule.pantheons.indexOf(p.id) !== -1) {
              score += rule.bonus;
            }
          }
        });
      }

      return { pantheon: p, score: score };
    })
    .sort(function(a, b) { return b.score - a.score; })
    .slice(0, count)
    .map(function(entry) {
      // Attach the computed score for display
      var result = {};
      for (var key in entry.pantheon) { result[key] = entry.pantheon[key]; }
      result.adjustedScore = entry.score;
      return result;
    });
}
