// === Civ 6 Planner Tests ===
// Run with: node test.js

const fs = require('fs');
let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    passed++;
  } catch (e) {
    console.log(`  ✗ ${name}`);
    console.log(`    ${e.message}`);
    failed++;
  }
}

function assert(condition, msg) {
  if (!condition) throw new Error(msg || 'Assertion failed');
}

// === 1. Syntax checks ===
console.log('\n=== Syntax Checks ===');

const files = ['data/leaders.js', 'data/builds.js', 'data/boosts.js', 'data/strategy.js', 'app.js'];
files.forEach(f => {
  test(`${f} has valid syntax`, () => {
    const code = fs.readFileSync(f, 'utf8');
    new Function(code);
  });
});

// === 2. Data integrity ===
console.log('\n=== Data Integrity ===');

const leadersCode = fs.readFileSync('data/leaders.js', 'utf8');
const LEADERS = new Function(leadersCode + '; return LEADERS;')();

test('LEADERS array has 77 entries', () => {
  assert(LEADERS.length === 77, `Expected 77, got ${LEADERS.length}`);
});

test('All leaders have unique IDs', () => {
  const ids = LEADERS.map(l => l.id);
  const unique = new Set(ids);
  assert(ids.length === unique.size, `Duplicate IDs found: ${ids.filter((id, i) => ids.indexOf(id) !== i)}`);
});

test('All leaders have required fields', () => {
  LEADERS.forEach(l => {
    assert(l.id, `Missing id`);
    assert(l.name, `Missing name for ${l.id}`);
    assert(l.civ, `Missing civ for ${l.id}`);
    assert(l.victoryTypes && l.victoryTypes.length > 0, `Missing victoryTypes for ${l.id}`);
    assert(l.leaderAbility && l.leaderAbility.name && l.leaderAbility.desc, `Missing leaderAbility for ${l.id}`);
    assert(l.civAbility && l.civAbility.name && l.civAbility.desc, `Missing civAbility for ${l.id}`);
    assert(l.unique && l.unique.length > 0, `Missing unique units for ${l.id}`);
    assert(l.strategy, `Missing strategy for ${l.id}`);
    assert(l.bbgNotes, `Missing bbgNotes for ${l.id}`);
  });
});

test('All leaders have strategy for all 5 victory types', () => {
  const types = ['domination', 'science', 'culture', 'religion', 'diplomacy'];
  LEADERS.forEach(l => {
    types.forEach(v => {
      assert(l.strategy[v], `Missing strategy.${v} for ${l.id}`);
      assert(typeof l.strategy[v].synergy === 'number', `Missing synergy for ${l.id}.${v}`);
      assert(l.strategy[v].tips && l.strategy[v].tips.length > 0, `Missing tips for ${l.id}.${v}`);
    });
  });
});

test('Victory types are valid', () => {
  const valid = ['domination', 'science', 'culture', 'religion', 'diplomacy'];
  LEADERS.forEach(l => {
    l.victoryTypes.forEach(v => {
      assert(valid.includes(v), `Invalid victory type "${v}" for ${l.id}`);
    });
  });
});

// === 3. Builds data ===
console.log('\n=== Builds Data ===');

const buildsCode = fs.readFileSync('data/builds.js', 'utf8');
const buildsData = new Function(buildsCode + '; return { BUILD_ORDERS, MP_BUILD_ORDERS, MAP_TIPS, MP_MAP_TIPS, MAP_SIZES, MAP_CHARACTERISTICS, LEADER_MAP_AFFINITY, GAME_MODE_TIPS, GAME_SPEED_TIPS };')();

test('BUILD_ORDERS has all 5 victory types', () => {
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    assert(buildsData.BUILD_ORDERS[v], `Missing BUILD_ORDERS.${v}`);
    assert(buildsData.BUILD_ORDERS[v].eras, `Missing eras for BUILD_ORDERS.${v}`);
  });
});

test('MP_BUILD_ORDERS has all 5 victory types', () => {
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    assert(buildsData.MP_BUILD_ORDERS[v], `Missing MP_BUILD_ORDERS.${v}`);
    assert(buildsData.MP_BUILD_ORDERS[v].eras, `Missing eras for MP_BUILD_ORDERS.${v}`);
  });
});

test('All era blocks have 8 eras', () => {
  const expectedEras = ['ancient', 'classical', 'medieval', 'renaissance', 'industrial', 'modern', 'atomic', 'information'];
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    const eras = Object.keys(buildsData.BUILD_ORDERS[v].eras);
    expectedEras.forEach(e => {
      assert(eras.includes(e), `Missing era "${e}" in BUILD_ORDERS.${v}`);
    });
    const mpEras = Object.keys(buildsData.MP_BUILD_ORDERS[v].eras);
    expectedEras.forEach(e => {
      assert(mpEras.includes(e), `Missing era "${e}" in MP_BUILD_ORDERS.${v}`);
    });
  });
});

test('Era priorities are capped at 10 items', () => {
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    Object.entries(buildsData.BUILD_ORDERS[v].eras).forEach(([era, data]) => {
      assert(data.priorities.length <= 10, `SP ${v}.${era} has ${data.priorities.length} priorities (max 10)`);
    });
    Object.entries(buildsData.MP_BUILD_ORDERS[v].eras).forEach(([era, data]) => {
      assert(data.priorities.length <= 10, `MP ${v}.${era} has ${data.priorities.length} priorities (max 10)`);
    });
  });
});

test('MAP_TIPS has all 15 map types', () => {
  const maps = ['pangaea', 'continents', 'continents-islands', 'small-continents', 'fractal', 'archipelago', 'islands', 'inland-sea', 'lakes', 'terra', 'primordial', 'splintered-fractal', 'seven-seas', 'tilted-axis', 'shuffle'];
  maps.forEach(m => {
    assert(buildsData.MAP_TIPS[m], `Missing MAP_TIPS.${m}`);
    assert(buildsData.MP_MAP_TIPS[m], `Missing MP_MAP_TIPS.${m}`);
  });
});

test('MAP_SIZES has all 6 sizes', () => {
  ['duel', 'tiny', 'small', 'standard', 'large', 'huge'].forEach(s => {
    assert(buildsData.MAP_SIZES[s], `Missing MAP_SIZES.${s}`);
  });
});

test('All 77 leaders have map affinity data', () => {
  LEADERS.forEach(l => {
    assert(buildsData.LEADER_MAP_AFFINITY[l.id], `Missing LEADER_MAP_AFFINITY for ${l.id}`);
  });
});

test('GAME_MODE_TIPS has all 3 modes', () => {
  ['barbarian-clans', 'secret-societies', 'monopolies'].forEach(m => {
    assert(buildsData.GAME_MODE_TIPS[m], `Missing GAME_MODE_TIPS.${m}`);
  });
});

// === 4. Boosts data ===
console.log('\n=== Boosts Data ===');

const boostsCode = fs.readFileSync('data/boosts.js', 'utf8');
const boostsData = new Function(boostsCode + '; return { BOOST_GUIDES, LEADER_BOOSTS };')();

test('BOOST_GUIDES has all 5 victory types', () => {
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    assert(boostsData.BOOST_GUIDES[v], `Missing BOOST_GUIDES.${v}`);
    assert(boostsData.BOOST_GUIDES[v].critical.length > 0, `Empty critical boosts for ${v}`);
    assert(boostsData.BOOST_GUIDES[v].settling, `Missing settling advice for ${v}`);
  });
});

test('All 77 leaders have boost priorities', () => {
  LEADERS.forEach(l => {
    assert(boostsData.LEADER_BOOSTS[l.id], `Missing LEADER_BOOSTS for ${l.id}`);
    assert(boostsData.LEADER_BOOSTS[l.id].length >= 2, `${l.id} has fewer than 2 boost priorities`);
  });
});

// === 5. Strategy data ===
console.log('\n=== Strategy Data ===');

const stratCode = fs.readFileSync('data/strategy.js', 'utf8');
const stratData = new Function(stratCode + '; return { THREAT_MATRIX };')();

test('THREAT_MATRIX has all 5 victory types', () => {
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    assert(stratData.THREAT_MATRIX[v], `Missing THREAT_MATRIX.${v}`);
    assert(stratData.THREAT_MATRIX[v].counters, `Missing counters for ${v}`);
    assert(stratData.THREAT_MATRIX[v].weakTo, `Missing weakTo for ${v}`);
    assert(stratData.THREAT_MATRIX[v].threat, `Missing threat for ${v}`);
  });
});

// === 6. HTML structure ===
console.log('\n=== HTML Structure ===');

const html = fs.readFileSync('index.html', 'utf8');

test('HTML loads all 4 data files', () => {
  assert(html.includes('data/leaders.js'), 'Missing leaders.js script tag');
  assert(html.includes('data/builds.js'), 'Missing builds.js script tag');
  assert(html.includes('data/boosts.js'), 'Missing boosts.js script tag');
  assert(html.includes('data/strategy.js'), 'Missing strategy.js script tag');
});

test('HTML has required form elements', () => {
  assert(html.includes('id="planner-leader"'), 'Missing leader select');
  assert(html.includes('id="planner-map"'), 'Missing map select');
  assert(html.includes('id="planner-size"'), 'Missing size select');
  assert(html.includes('id="planner-players"'), 'Missing players select');
  assert(html.includes('id="planner-speed"'), 'Missing speed select');
  assert(html.includes('id="bbg-toggle"'), 'Missing BBG toggle');
  assert(html.includes('id="generate-plan"'), 'Missing generate button');
});

test('HTML has all 15 map type options', () => {
  const maps = ['pangaea', 'continents', 'continents-islands', 'small-continents', 'fractal', 'archipelago', 'islands', 'inland-sea', 'lakes', 'terra', 'primordial', 'splintered-fractal', 'seven-seas', 'tilted-axis', 'shuffle'];
  maps.forEach(m => {
    assert(html.includes(`value="${m}"`), `Missing map option: ${m}`);
  });
});

// === 7. Logic Tests ===
console.log('\n=== Logic Tests ===');

// Load functions from builds.js
const buildsFns = new Function(buildsCode + `; return {
  getMapDensity, getLeaderMapAdvice, analyzeMapFairness,
  getGameSpeedTips, MAP_SIZES, MAP_CHARACTERISTICS, LEADER_MAP_AFFINITY,
  GAME_SPEED_TIPS, GAME_SPEED_DATA, DENSITY_TIPS
};`)();

// --- getMapDensity ---
test('getMapDensity: duel with 2 players is empty', () => {
  const d = buildsFns.getMapDensity('duel', 2);
  assert(d.level === 'empty', `Expected empty, got ${d.level}`);
  assert(d.tilesPerPlayer === 1024, `Expected 1024 tpp, got ${d.tilesPerPlayer}`);
});

test('getMapDensity: tiny with 6 players is tight', () => {
  const d = buildsFns.getMapDensity('tiny', 6);
  assert(d.level === 'tight', `Expected tight, got ${d.level}`);
});

test('getMapDensity: huge with 4 players is empty', () => {
  const d = buildsFns.getMapDensity('huge', 4);
  assert(d.level === 'empty', `Expected empty, got ${d.level}`);
});

test('getMapDensity: standard with 8 players is normal', () => {
  const d = buildsFns.getMapDensity('standard', 8);
  assert(d.level === 'normal', `Expected normal, got ${d.level}`);
});

test('getMapDensity: standard with 10 players is normal', () => {
  const d = buildsFns.getMapDensity('standard', 10);
  assert(d.level === 'normal', `Expected normal, got ${d.level}`);
});

test('getMapDensity: invalid size returns normal', () => {
  const d = buildsFns.getMapDensity('nonexistent', 4);
  assert(d.level === 'normal', `Expected normal fallback, got ${d.level}`);
});

// --- getLeaderMapAdvice ---
test('getLeaderMapAdvice: Kupe on archipelago is excellent', () => {
  const a = buildsFns.getLeaderMapAdvice('kupe', 'archipelago');
  assert(a.rating === 'excellent', `Expected excellent, got ${a.rating}`);
});

test('getLeaderMapAdvice: Kupe on pangaea is poor', () => {
  const a = buildsFns.getLeaderMapAdvice('kupe', 'pangaea');
  assert(a.rating === 'poor', `Expected poor, got ${a.rating}`);
});

test('getLeaderMapAdvice: Simon Bolivar on islands is poor', () => {
  const a = buildsFns.getLeaderMapAdvice('simon-bolivar', 'islands');
  assert(a.rating === 'poor', `Expected poor, got ${a.rating}`);
});

test('getLeaderMapAdvice: Peter on tilted-axis is mixed (tundra strong but desert weak)', () => {
  const a = buildsFns.getLeaderMapAdvice('peter', 'tilted-axis');
  assert(a.rating === 'mixed', `Expected mixed, got ${a.rating}`);
});

test('getLeaderMapAdvice: Hammurabi on fractal is neutral', () => {
  const a = buildsFns.getLeaderMapAdvice('hammurabi', 'fractal');
  assert(a.rating === 'neutral' || a.rating === 'good', `Expected neutral/good, got ${a.rating}`);
});

test('getLeaderMapAdvice: returns null for unknown leader', () => {
  const a = buildsFns.getLeaderMapAdvice('nonexistent', 'pangaea');
  assert(a === null, 'Expected null for unknown leader');
});

// --- analyzeMapFairness ---
const kupe = LEADERS.find(l => l.id === 'kupe');
const shaka = LEADERS.find(l => l.id === 'shaka');
const hammurabi = LEADERS.find(l => l.id === 'hammurabi');
const peter = LEADERS.find(l => l.id === 'peter');

test('analyzeMapFairness: archipelago with Kupe vs Shaka is unfair', () => {
  const f = buildsFns.analyzeMapFairness([{ leader: kupe }, { leader: shaka }], 'archipelago');
  assert(f.rating === 'unfair' || f.rating === 'uneven', `Expected unfair/uneven, got ${f.rating}`);
});

test('analyzeMapFairness: primordial with mixed leaders is fair', () => {
  const f = buildsFns.analyzeMapFairness([{ leader: hammurabi }, { leader: peter }], 'primordial');
  assert(f.rating === 'fair', `Expected fair, got ${f.rating}`);
});

test('analyzeMapFairness: suggests alternatives when unfair', () => {
  const f = buildsFns.analyzeMapFairness([{ leader: kupe }, { leader: shaka }], 'archipelago');
  assert(f.bestAlternatives.length > 0, 'Expected alternative map suggestions');
  assert(f.bestAlternatives[0].spread < f.selected.spread, 'Alternatives should have lower spread');
});

test('analyzeMapFairness: player scores are returned', () => {
  const f = buildsFns.analyzeMapFairness([{ leader: kupe }, { leader: shaka }], 'pangaea');
  assert(f.players.length === 2, `Expected 2 players, got ${f.players.length}`);
  assert(typeof f.players[0].score === 'number', 'Player score should be a number');
});

// --- getGameSpeedTips ---
test('getGameSpeedTips: standard returns null', () => {
  const t = buildsFns.getGameSpeedTips('standard', 'science');
  assert(t === null, 'Standard speed should return null (no extra tips)');
});

test('getGameSpeedTips: online returns tips', () => {
  const t = buildsFns.getGameSpeedTips('online', 'domination');
  assert(t !== null, 'Online should return tips');
  assert(t.general.length > 0, 'Should have general tips');
  assert(t.victoryTip.length > 0, 'Should have victory-specific tip');
});

test('getGameSpeedTips: marathon returns tips', () => {
  const t = buildsFns.getGameSpeedTips('marathon', 'science');
  assert(t !== null, 'Marathon should return tips');
  assert(t.label === 'Marathon', `Expected Marathon label, got ${t.label}`);
});

test('getGameSpeedTips: epic has tips for all victory types', () => {
  ['domination', 'science', 'culture', 'religion', 'diplomacy'].forEach(v => {
    const t = buildsFns.getGameSpeedTips('epic', v);
    assert(t !== null, `Epic should have tips for ${v}`);
    assert(t.victoryTip.length > 0, `Epic should have victory tip for ${v}`);
  });
});

// --- Victory Recommendation (extracted from app.js) ---
// Recreate the function since it depends on THREAT_MATRIX
const { THREAT_MATRIX } = stratData;

function recommendVictory(leader, opponents) {
  return ['domination','science','culture','religion','diplomacy'].map(v => {
    let score = leader.strategy[v].synergy;
    opponents.forEach(o => {
      const opp = o.leader;
      if (opp.victoryTypes[0] === v) score -= 15;
      if (opp.victoryTypes.includes(v)) score -= 5;
      if (THREAT_MATRIX[v] && THREAT_MATRIX[v].counters.includes(opp.victoryTypes[0])) score += 5;
    });
    return { type: v, synergy: leader.strategy[v].synergy, score: Math.max(0, score) };
  }).sort((a, b) => b.score - a.score);
}

const alexander = LEADERS.find(l => l.id === 'alexander');
const seondeok = LEADERS.find(l => l.id === 'seondeok');
const kristina = LEADERS.find(l => l.id === 'kristina');
const gandhi = LEADERS.find(l => l.id === 'gandhi');

test('recommendVictory: Alexander recommends domination', () => {
  const r = recommendVictory(alexander, []);
  assert(r[0].type === 'domination', `Expected domination, got ${r[0].type}`);
});

test('recommendVictory: Seondeok recommends science', () => {
  const r = recommendVictory(seondeok, []);
  assert(r[0].type === 'science', `Expected science, got ${r[0].type}`);
});

test('recommendVictory: Kristina recommends culture', () => {
  const r = recommendVictory(kristina, []);
  assert(r[0].type === 'culture', `Expected culture, got ${r[0].type}`);
});

test('recommendVictory: Gandhi recommends religion', () => {
  const r = recommendVictory(gandhi, []);
  assert(r[0].type === 'religion', `Expected religion, got ${r[0].type}`);
});

test('recommendVictory: returns 5 victory types sorted by score', () => {
  const r = recommendVictory(alexander, []);
  assert(r.length === 5, `Expected 5 results, got ${r.length}`);
  for (let i = 1; i < r.length; i++) {
    assert(r[i].score <= r[i-1].score, 'Results should be sorted by score descending');
  }
});

test('recommendVictory: opponent competition penalizes shared victory type', () => {
  const alone = recommendVictory(seondeok, []);
  const withRival = recommendVictory(seondeok, [{ leader: LEADERS.find(l => l.id === 'sejong') }]);
  const sciAlone = alone.find(r => r.type === 'science').score;
  const sciRival = withRival.find(r => r.type === 'science').score;
  assert(sciRival < sciAlone, `Science score should drop with rival: ${sciAlone} vs ${sciRival}`);
});

test('recommendVictory: scores are never negative', () => {
  // Put many domination opponents against a domination leader
  const manyOpps = LEADERS.filter(l => l.victoryTypes[0] === 'domination').slice(0, 5).map(l => ({ leader: l }));
  const r = recommendVictory(alexander, manyOpps);
  r.forEach(v => {
    assert(v.score >= 0, `Score for ${v.type} should be >= 0, got ${v.score}`);
  });
});

test('recommendVictory: may recommend different victory with opponents', () => {
  // Kristina normally goes culture, but with many culture opponents might shift
  const cultureOpps = LEADERS.filter(l => l.victoryTypes[0] === 'culture').slice(0, 4).map(l => ({ leader: l }));
  const r = recommendVictory(kristina, cultureOpps);
  // Culture score should be penalized
  const cultureScore = r.find(v => v.type === 'culture').score;
  const topScore = r[0].score;
  assert(cultureScore < kristina.strategy.culture.synergy, 'Culture should be penalized with rivals');
});

// === Summary ===
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
