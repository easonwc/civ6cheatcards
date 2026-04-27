// Government recommendations per victory type and era
const GOVERNMENT_RECS = {
  domination: {
    classical: { name: "Oligarchy", why: "All melee, anti-cavalry, and ranged units get +4 Combat Strength. Best early military government.", alt: "Autocracy — +1 Military slot, +10% Production toward Wonders if you want early wonders." },
    medieval: { name: "Monarchy", why: "+1 Military, +1 Economic, +1 Diplomatic, +1 Wildcard slot. Housing from walls. Balanced military government.", alt: "Theocracy — if combining religion with domination (Basil, Philip). Faith-purchase units, +5 Religious Strength." },
    modern: { name: "Fascism", why: "+5 Combat Strength for all units. +50% Production toward military units. The domination government.", alt: "Corporate Libertarianism — if you need gold to fund upgrades and maintenance." },
    future: { name: "Digital Democracy", why: "+4 Diplomatic Favor per Wildcard slot. Flexible policy slots for late-game military.", alt: "Synthetic Technocracy — +20% Production toward space projects if pivoting to science backup." }
  },
  science: {
    classical: { name: "Classical Republic", why: "+1 Economic, +1 Diplomatic, +1 Wildcard slot. Great People points +15%. Best for Campus-focused play.", alt: "Oligarchy — if you need military defense early." },
    medieval: { name: "Merchant Republic", why: "+2 Economic, +1 Diplomatic, +1 Military, +1 Wildcard. +15% Gold. Trade route capacity +2. Strong economy for science.", alt: "Monarchy — if you need more military defense. Housing from walls helps growth." },
    modern: { name: "Democracy", why: "+1 Economic, +1 Diplomatic, +2 Wildcard slots. +15% Great People points. Best for late-game science.", alt: "Communism — +10% Production in all cities. Better if you need raw production for Spaceport." },
    future: { name: "Synthetic Technocracy", why: "+20% Production toward space projects. The science victory government.", alt: "Digital Democracy — if you need Diplomatic Favor as backup." }
  },
  culture: {
    classical: { name: "Classical Republic", why: "+15% Great People points. Wildcard slot for flexibility. Best for early Great Person generation.", alt: "Autocracy — +10% Wonder Production if rushing early wonders." },
    medieval: { name: "Merchant Republic", why: "+15% Gold, +2 Trade Routes. Gold funds Great People patronage. Wildcard slot for Heritage Tourism.", alt: "Theocracy — if combining religion with culture (relics strategy)." },
    modern: { name: "Democracy", why: "+15% Great People points. +2 Wildcard slots for Heritage Tourism + Online Communities. The culture government.", alt: "Corporate Libertarianism — if you need gold for Rock Band purchases." },
    future: { name: "Digital Democracy", why: "+4 Diplomatic Favor per Wildcard slot. Maximum policy flexibility for tourism.", alt: "Synthetic Technocracy — if you need production for National Parks/wonders." }
  },
  religion: {
    classical: { name: "Oligarchy", why: "+4 Combat Strength helps protect religious units. Military slots for Agoge while building Holy Sites.", alt: "Classical Republic — if you're not threatened militarily. Great People points help." },
    medieval: { name: "Theocracy", why: "Faith-purchase land units. +5 Religious Strength in theological combat. THE religion government.", alt: "Monarchy — if you need military defense alongside religion. Housing from walls." },
    modern: { name: "Theocracy (keep)", why: "Stay in Theocracy as long as possible. Faith-purchase and +5 Religious Strength are irreplaceable.", alt: "Democracy — only switch if you've already converted most civs and need Great People." },
    future: { name: "Digital Democracy", why: "Wildcard slots for religious policies. Diplomatic Favor as backup victory path.", alt: "Stay in Theocracy if still spreading religion." }
  },
  diplomacy: {
    classical: { name: "Classical Republic", why: "+1 Diplomatic slot. Wildcard slot for Charismatic Leader. Great People points help.", alt: "Oligarchy — if you need military deterrent early." },
    medieval: { name: "Merchant Republic", why: "+2 Trade Routes for gold and Diplomatic Favor generation. +1 Diplomatic slot.", alt: "Monarchy — if you need military defense. Diplomatic slot still available." },
    modern: { name: "Democracy", why: "+2 Wildcard slots. +1 Diplomatic slot. +15% Great People points. Best for late-game diplomacy.", alt: "Corporate Libertarianism — +15% Gold for buying Diplomatic Favor." },
    future: { name: "Digital Democracy", why: "+4 Diplomatic Favor per Wildcard slot. Maximum favor generation. THE diplomacy government.", alt: "Synthetic Technocracy — only if pivoting to science backup." }
  }
};

// Get government recommendation for a victory type and era
function getGovernmentRec(victory, era) {
  const recs = GOVERNMENT_RECS[victory];
  if (!recs) return null;
  
  // Map eras to government tiers
  if (era === 'ancient') return null; // No government choice yet
  if (era === 'classical') return recs.classical;
  if (era === 'medieval' || era === 'renaissance') return recs.medieval;
  if (era === 'industrial' || era === 'modern') return recs.modern;
  if (era === 'atomic' || era === 'information') return recs.future;
  return null;
}
