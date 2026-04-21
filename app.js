// === State ===
let bbgMode = true;
let plannerMode = 'sp';

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// === BBG Toggle ===
$('#bbg-toggle').addEventListener('change', (e) => {
  bbgMode = e.target.checked;
  renderPlannerLeaderCard();
});

// === Mode Toggle ===
$$('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    plannerMode = btn.dataset.mode;
    const isMP = plannerMode === 'mp';
    $('#generate-team').classList.toggle('hidden', !isMP);
    $('#players-card-title').textContent = isMP ? 'Players' : 'Known Opponents';
    $('#players-card-desc').textContent = isMP
      ? 'Assign leaders to all players. "Team Strategies" generates a plan for everyone.'
      : 'Fill in opponents you know. Leave unknown slots blank.';
    renderPlayerSlots();
  });
});

// === Screen Navigation ===
$('#generate-plan')?.addEventListener('click', () => generateStrategy(false));
$('#generate-team')?.addEventListener('click', () => generateStrategy(true));
$('#back-to-setup')?.addEventListener('click', () => {
  $('#setup-screen').classList.remove('hidden');
  $('#strategy-screen').classList.add('hidden');
  window.scrollTo(0, 0);
});

$('#print-strategy')?.addEventListener('click', () => {
  // Expand all collapsible sections before printing
  $$('.collapsible').forEach(c => c.classList.add('open'));
  window.print();
});

// === Leader Setup ===
function populatePlannerLeaders() {
  const select = $('#planner-leader');
  select.innerHTML = LEADERS.sort((a, b) => a.name.localeCompare(b.name)).map(l =>
    `<option value="${l.id}">${l.name} (${l.civ})</option>`
  ).join('');
  select.addEventListener('change', renderPlannerLeaderCard);
  renderPlannerLeaderCard();
}

function updatePlayerOptions() {
  const info = MAP_SIZES[$('#planner-size').value];
  if (!info) return;
  const sel = $('#planner-players');
  const prev = parseInt(sel.value) || info.defaultPlayers;
  sel.innerHTML = '';
  for (let i = 2; i <= info.maxPlayers; i++) {
    sel.innerHTML += `<option value="${i}" ${i === prev ? 'selected' : ''}>${i}${i === info.defaultPlayers ? ' (default)' : ''}</option>`;
  }
  if (prev > info.maxPlayers || prev < 2) sel.value = info.defaultPlayers;
}

$('#planner-size')?.addEventListener('change', () => { updatePlayerOptions(); renderPlayerSlots(); });
$('#planner-players')?.addEventListener('change', renderPlayerSlots);

// === Leader Card ===
function renderInlineLeaderCard(leader, container) {
  if (!leader || !container) return;
  container.innerHTML = `
    <div class="inline-card-header">
      <div>
        <div class="inline-card-name">${leader.name}</div>
        <div class="inline-card-civ">${leader.civ}</div>
      </div>
      <div class="inline-card-tags">
        ${leader.victoryTypes.map((v, i) => `<span class="victory-tag ${i === 0 ? 'primary' : ''}">${capitalize(v)}</span>`).join('')}
      </div>
    </div>
    <div class="inline-card-abilities">
      <div class="ability-block"><div class="ability-name">${leader.leaderAbility.name}</div><div class="ability-desc">${leader.leaderAbility.desc}</div></div>
      <div class="ability-block"><div class="ability-name">${leader.civAbility.name}</div><div class="ability-desc">${leader.civAbility.desc}</div></div>
      ${leader.unique.map(u => `<div class="ability-block"><div class="ability-name">${u.name}</div><div class="ability-desc">${u.desc}</div></div>`).join('')}
    </div>
    ${bbgMode && leader.bbgNotes ? `<div class="bbg-note" style="margin-top: 8px;">BBG: ${leader.bbgNotes}</div>` : ''}
  `;
}

function renderPlannerLeaderCard() {
  const leader = LEADERS.find(l => l.id === $('#planner-leader')?.value);
  renderInlineLeaderCard(leader, $('#planner-leader-card'));
}

// === Player Slots ===
function getUniquenessMode() {
  const uniqueLeaders = $('#unique-leaders')?.checked ?? true;
  const uniqueCivs = $('#unique-civs')?.checked ?? false;
  return { uniqueLeaders, uniqueCivs };
}

function renderPlayerSlots() {
  const count = parseInt($('#planner-players').value) || 2;
  const slots = count - 1;
  const container = $('#player-slots');
  const existing = [];
  $$('.player-slot-select').forEach(sel => existing.push(sel.value));
  container.innerHTML = '';
  const allOpts = LEADERS.sort((a, b) => a.name.localeCompare(b.name))
    .map(l => `<option value="${l.id}">${l.name} (${l.civ})</option>`).join('');
  for (let i = 0; i < slots; i++) {
    const row = document.createElement('div');
    row.className = 'opponent-row';
    row.innerHTML = `<span class="opponent-num">P${i + 2}</span><select class="filter-select player-slot-select"><option value="">— Unknown —</option>${allOpts}</select>`;
    if (existing[i]) row.querySelector('select').value = existing[i];
    container.appendChild(row);
  }
  $$('.player-slot-select').forEach(sel => sel.addEventListener('change', refreshSlotOptions));
  refreshSlotOptions();
}

function refreshSlotOptions() {
  const { uniqueLeaders, uniqueCivs } = getUniquenessMode();
  if (!uniqueLeaders && !uniqueCivs) {
    $$('.player-slot-select').forEach(sel => {
      Array.from(sel.options).forEach(opt => { opt.disabled = false; opt.style.color = ''; });
    });
    return;
  }
  const yourId = $('#planner-leader').value;
  const usedIds = [yourId];
  const usedCivs = [];
  const you = LEADERS.find(l => l.id === yourId);
  if (you) usedCivs.push(you.civ);
  $$('.player-slot-select').forEach(sel => {
    if (sel.value) {
      usedIds.push(sel.value);
      const l = LEADERS.find(x => x.id === sel.value);
      if (l) usedCivs.push(l.civ);
    }
  });
  $$('.player-slot-select').forEach(sel => {
    const cur = sel.value;
    Array.from(sel.options).forEach(opt => {
      if (!opt.value) return;
      const leader = LEADERS.find(l => l.id === opt.value);
      if (!leader) return;
      let dis = false;
      if (opt.value !== cur) {
        if (uniqueLeaders && usedIds.includes(opt.value)) dis = true;
        if (uniqueCivs && usedCivs.includes(leader.civ)) dis = true;
      }
      opt.disabled = dis;
      opt.style.color = dis ? '#555' : '';
    });
  });
}

$('#unique-leaders')?.addEventListener('change', refreshSlotOptions);
$('#unique-civs')?.addEventListener('change', refreshSlotOptions);
function getSlotPlayers() {
  // Returns all players: your leader (P1) + slot players (P2+), filling blanks with random
  const you = LEADERS.find(l => l.id === $('#planner-leader').value);
  const picked = you ? [you.id] : [];
  const players = you ? [{ leader: you, random: false }] : [];

  $$('.player-slot-select').forEach(sel => {
    if (sel.value) {
      const leader = LEADERS.find(l => l.id === sel.value);
      if (leader) { players.push({ leader, random: false }); picked.push(sel.value); }
    } else {
      players.push({ leader: null, random: true });
    }
  });

  const { uniqueLeaders, uniqueCivs } = getUniquenessMode();
  const usedCivs = players.filter(p => p.leader).map(p => p.leader.civ);
  let available = LEADERS.filter(l => !picked.includes(l.id));
  if (uniqueCivs) available = available.filter(l => !usedCivs.includes(l.civ));
  for (const p of players) {
    if (!p.leader && available.length > 0) {
      const idx = Math.floor(Math.random() * available.length);
      const chosen = available.splice(idx, 1)[0];
      p.leader = chosen;
      picked.push(chosen.id);
      if (uniqueCivs) {
        usedCivs.push(chosen.civ);
        available = available.filter(l => !usedCivs.includes(l.civ));
      }
    }
  }
  return players.filter(p => p.leader);
}

function getOpponentsForLeader(leaderId) {
  const all = getSlotPlayers();
  // In SP mode, "you" is the planner-leader, opponents are the slots
  // In MP team mode, opponents for a given leader are everyone else
  return all.filter(p => p.leader.id !== leaderId);
}

// === Boost Types ===
const BOOST_TYPES = {
  "Mining":"eureka","Pottery":"eureka","Animal Husbandry":"eureka","Sailing":"eureka",
  "Astrology":"eureka","Irrigation":"eureka","Writing":"eureka","Archery":"eureka",
  "Masonry":"eureka","Bronze Working":"eureka","Wheel":"eureka",
  "Celestial Navigation":"eureka","Currency":"eureka","Horseback Riding":"eureka",
  "Iron Working":"eureka","Shipbuilding":"eureka","Mathematics":"eureka",
  "Construction":"eureka","Engineering":"eureka",
  "Apprenticeship":"eureka","Stirrups":"eureka","Machinery":"eureka",
  "Education":"eureka","Military Engineering":"eureka","Castles":"eureka",
  "Cartography":"eureka","Gunpowder":"eureka","Printing":"eureka",
  "Industrialization":"eureka","Scientific Theory":"eureka",
  "Flight":"eureka","Rocketry":"eureka","Chemistry":"eureka",
  "Code of Laws":"inspiration","Craftsmanship":"inspiration","Foreign Trade":"inspiration",
  "Military Tradition":"inspiration","Mysticism":"inspiration","Early Empire":"inspiration",
  "Political Philosophy":"inspiration","Drama and Poetry":"inspiration",
  "Games and Recreation":"inspiration","Theology":"inspiration",
  "Military Training":"inspiration","Defensive Tactics":"inspiration","Recorded History":"inspiration",
  "Feudalism":"inspiration","Civil Service":"inspiration","Mercenaries":"inspiration",
  "Guilds":"inspiration","Humanism":"inspiration","Diplomatic Service":"inspiration",
  "Reformed Church":"inspiration","The Enlightenment":"inspiration",
  "Colonialism":"inspiration","Civil Engineering":"inspiration",
  "Nationalism":"inspiration","Natural History":"inspiration",
  "Conservation":"inspiration","Theocracy":"inspiration",
  "Cultural Heritage":"inspiration","Globalization":"inspiration",
  "ALL Eurekas":"eureka"
};

// === Victory Recommendation ===
function recommendVictory(leader, opponents) {
  return ['domination','science','culture','religion','diplomacy'].map(v => {
    let score = leader.strategy[v].synergy;
    opponents.forEach(o => {
      const opp = o.leader;
      if (opp.victoryTypes[0] === v) score -= 15;
      if (opp.victoryTypes.includes(v)) score -= 5;
      if (THREAT_MATRIX[v]?.counters.includes(opp.victoryTypes[0])) score += 5;
    });
    return { type: v, synergy: leader.strategy[v].synergy, score: Math.max(0, score) };
  }).sort((a, b) => b.score - a.score);
}

// === Build Single Player Strategy HTML ===
// === Collapsible Section Helper ===
function collapsible(title, content, open = false) {
  return `<div class="collapsible ${open ? 'open' : ''}">
    <div class="collapsible-header" onclick="this.parentElement.classList.toggle('open')">
      <span class="collapsible-title">${title}</span>
      <span class="collapsible-icon">›</span>
    </div>
    <div class="collapsible-body">${content}</div>
  </div>`;
}

function buildStrategyHTML(leader, opponents, mapType, mapSize, playerCount) {
  const ranked = recommendVictory(leader, opponents);
  const victory = ranked[0].type;
  const strat = leader.strategy[victory];
  const isMP = plannerMode === 'mp';
  const buildOrder = isMP ? MP_BUILD_ORDERS[victory] : BUILD_ORDERS[victory];
  const mapTip = isMP ? MP_MAP_TIPS[mapType] : MAP_TIPS[mapType];
  const modeLabel = isMP ? 'Multiplayer' : 'Single Player';
  const density = getMapDensity(mapSize, playerCount);
  const densityTips = DENSITY_TIPS[victory]?.[density.level] || [];
  const sizeLabel = MAP_SIZES[mapSize]?.label || mapSize;
  const mapAdvice = getLeaderMapAdvice(leader.id, mapType);

  // Header — full width
  let header = `
    <div class="strategy-section">
      <h3>${leader.name} (${leader.civ}) — ${capitalize(victory)} Victory</h3>
      <div style="font-size:12px;color:#888;margin-bottom:8px;">${modeLabel} · ${bbgMode?'BBG':'Vanilla'} · ${capitalize(mapType)} · ${sizeLabel} · ${playerCount} players</div>
    </div>`;

  // Left column: overview
  let left = '';

  left += collapsible('Recommended Victory Path', `
    <div class="victory-rec-list">
      ${ranked.filter(r => r.synergy >= 30).map((r, i) => `
        <div class="victory-rec-item ${i===0?'victory-rec-best':''}">
          <div class="victory-rec-rank">${i===0?'★':i+1}</div>
          <div class="victory-rec-info"><span class="victory-rec-name">${capitalize(r.type)}</span><span class="victory-rec-score">${r.synergy}% synergy${r.score!==r.synergy?' · '+r.score+'% adjusted':''}</span></div>
          <div class="synergy-bar" style="flex:1;max-width:120px;"><div class="synergy-fill" style="width:${r.score}%;background:${i===0?'#00c850':r.score>=50?'#f59e0b':'#555'}"></div></div>
        </div>`).join('')}
    </div>
    ${opponents.length > 0 ? '<p style="font-size:11px;color:#555;margin-top:6px;">Scores adjusted for opponent matchups.</p>' : ''}
  `, true);

  left += collapsible(`Map: ${capitalize(mapType)} · ${sizeLabel}`, `
    <p>${mapTip}</p>
    ${mapAdvice ? `
      <div class="map-affinity map-affinity-${mapAdvice.rating}" style="margin-top:8px;">
        <div style="font-size:12px;font-weight:600;margin-bottom:4px;">Leader Fit: ${capitalize(mapAdvice.rating)}</div>
        <p style="font-size:12px;color:#ccc;">${mapAdvice.advice}</p>
      </div>
    ` : ''}
    <div class="density-box density-${density.level}" style="margin-top:8px;">
      <div style="font-size:12px;font-weight:600;margin-bottom:4px;">Density: ${capitalize(density.level)}</div>
      <p style="font-size:12px;color:#ccc;margin-bottom:6px;">${density.desc}</p>
      ${densityTips.length>0?`<ul>${densityTips.map(t=>'<li>'+t+'</li>').join('')}</ul>`:''}
    </div>
  `, true);

  if (opponents.length > 0) {
    left += collapsible(`Opponent Matchups (${opponents.length})`, renderMatchupContent(leader, opponents), true);
  }

  left += collapsible('Leader-Specific Tips', `<ul>${strat.tips.map(t=>`<li>${t}</li>`).join('')}</ul>`);

  if (bbgMode) {
    left += collapsible('BBG Notes', `<div class="bbg-note">BBG: ${leader.bbgNotes||'No specific BBG changes.'}</div>`);
  }

  // Right column: game plan details
  let right = '';

  right += collapsible('Era-by-Era Game Plan', Object.entries(buildOrder.eras).map(([era, data]) => `
    <div class="era-block"><div class="era-header"><span class="era-name">${capitalize(era)} Era</span><span class="era-focus">${data.focus}</span></div>
    <div class="build-order">${data.priorities.map((item,i)=>`<div class="build-step"><span class="build-step-num">${i+1}</span><span class="build-step-text">${item}</span></div>`).join('')}</div></div>`).join(''), true);

  right += collapsible('Key Policies', `<ul>${buildOrder.policies.map(p=>`<li>${p}</li>`).join('')}</ul>`);

  right += collapsible('Recommended Wonders', `<ul>${buildOrder.wonders.map(w=>`<li>${w}</li>`).join('')}</ul>`);

  right += collapsible(`General ${capitalize(victory)} Tips`, `<ul>${buildOrder.tips.map(t=>`<li>${t}</li>`).join('')}</ul>`);

  right += collapsible('Key Eurekas & Inspirations', renderBoostContent(leader, victory));

  return `
    ${header}
    <div class="strategy-columns">
      <div class="strategy-col">${left}</div>
      <div class="strategy-col">${right}</div>
    </div>
  `;
}

// === Generate Strategy (single or team) ===
function generateStrategy(teamMode) {
  const mapType = $('#planner-map').value;
  const mapSize = $('#planner-size').value;
  const playerCount = parseInt($('#planner-players').value) || MAP_SIZES[mapSize]?.defaultPlayers || 8;

  if (teamMode) {
    // Team mode: generate for every player
    const allPlayers = getSlotPlayers();
    if (allPlayers.length < 2) return;

    // Build tabs + panels
    let tabsHtml = '<div class="team-tabs">';
    let panelsHtml = '';

    allPlayers.forEach((p, i) => {
      const others = allPlayers.filter((_, j) => j !== i).map(o => ({ leader: o.leader, random: o.random }));
      const stratHtml = buildStrategyHTML(p.leader, others, mapType, mapSize, playerCount);
      const active = i === 0 ? ' active' : '';
      tabsHtml += `<button class="team-tab${active}" data-player="${i}">P${i + 1}: ${p.leader.name}${p.random ? ' *' : ''}</button>`;
      panelsHtml += `<div class="team-panel${active}" data-player="${i}"><div class="strategy-output">${stratHtml}</div></div>`;
    });

    tabsHtml += '</div>';

    $('#strategy-output').innerHTML = tabsHtml + panelsHtml;

    // Wire up tabs
    $$('.team-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        $$('.team-tab').forEach(t => t.classList.remove('active'));
        $$('.team-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        $$(`.team-panel[data-player="${tab.dataset.player}"]`).forEach(p => p.classList.add('active'));
      });
    });
  } else {
    // Single strategy: use planner-leader as "you"
    const leaderId = $('#planner-leader').value;
    const leader = LEADERS.find(l => l.id === leaderId);
    if (!leader) return;

    // In SP mode, opponents are the slot players
    // In MP mode (but not team), same thing — your leader + slot opponents
    const slotPlayers = getSlotPlayers();
    const opponents = slotPlayers.filter(p => p.leader.id !== leaderId);
    // If your leader isn't in the slots, all slots are opponents
    const finalOpponents = opponents.length === slotPlayers.length ? slotPlayers : opponents;

    $('#strategy-output').innerHTML = buildStrategyHTML(leader, finalOpponents, mapType, mapSize, playerCount);
  }

  $('#setup-screen').classList.add('hidden');
  $('#strategy-screen').classList.remove('hidden');
  window.scrollTo(0, 0);
}

// === Matchup Analysis ===
function renderMatchupContent(you, opponents) {
  const THREAT_RANK = { high: 0, medium: 1, low: 2 };
  const rated = opponents.map(o => {
    const opp = o.leader;
    const threatInfo = THREAT_MATRIX[opp.victoryTypes[0]];
    let threatLevel = 'medium';
    if (threatInfo.counters.includes(you.victoryTypes[0])) threatLevel = 'high';
    if (threatInfo.weakTo.includes(you.victoryTypes[0])) threatLevel = 'low';
    return { opp, random: o.random, threatLevel, threatInfo, oppVictory: opp.victoryTypes[0] };
  }).sort((a, b) => THREAT_RANK[a.threatLevel] - THREAT_RANK[b.threatLevel]);

  let html = '';
  rated.forEach(({ opp, random, threatLevel, threatInfo, oppVictory }) => {
    html += `<div class="matchup-card threat-${threatLevel}">
      <h4>${opp.name} (${opp.civ})${random ? ' <span class="random-badge">Random</span>' : ''}</h4>
      <p><strong>Likely going:</strong> ${capitalize(oppVictory)}</p>
      <p><strong>Threat:</strong> <span style="color:${threatLevel==='high'?'#e84040':threatLevel==='medium'?'#f59e0b':'#00c850'}">${capitalize(threatLevel)}</span> — ${threatInfo.threat}</p>
      <ul style="list-style:none;padding:0;margin-top:4px;">${getCounterTips(you, opp).map(t=>`<li style="font-size:12px;color:#ccc;padding:2px 0;">→ ${t}</li>`).join('')}</ul>
    </div>`;
  });

  const highThreats = rated.filter(r => r.threatLevel === 'high');
  if (highThreats.length > 0) {
    html += `<div class="bbg-note" style="border-color:#e8404040;background:#e8404015;color:#e84040;margin-top:8px;">⚠ ${highThreats.length} high-threat opponent(s): ${highThreats.map(h=>h.opp.name).join(', ')}.</div>`;
  }
  return html;
}

// Keep old function name for backwards compat
function renderMatchupAnalysis(you, opponents) {
  return '<div class="strategy-section"><h4>Opponent Matchups</h4>' + renderMatchupContent(you, opponents) + '</div>';
}

function getCounterTips(you, opp) {
  const v = opp.victoryTypes[0], tips = [];
  if (v==='domination') { tips.push("Build walls early and keep a standing army"); tips.push("Settle defensible positions"); if (you.victoryTypes.includes('science')) tips.push("Out-tech them"); }
  else if (v==='science') { tips.push("Military pressure to slow Campus development"); tips.push("Spy on their Spaceport"); }
  else if (v==='culture') { tips.push("Avoid open borders to reduce tourism"); tips.push("Generate your own culture for defense"); }
  else if (v==='religion') { tips.push("Inquisitors to defend from conversion"); tips.push("Declare war to block missionaries"); }
  else if (v==='diplomacy') { tips.push("Vote against them in World Congress"); tips.push("Compete for city-state suzerainty"); }
  return tips;
}

// === Boost Section ===
function renderBoostContent(leader, victory) {
  const general = BOOST_GUIDES[victory];
  const specific = LEADER_BOOSTS[leader.id] || [];
  let html = '';
  if (general) html += `<div class="boost-settling">${general.settling}</div>`;
  if (specific.length > 0) {
    html += `<div class="boost-subheading">${leader.name}-Specific Boosts</div>`;
    html += specific.map(b => {
      const bt = BOOST_TYPES[b.name] || 'eureka';
      return `<div class="boost-item boost-${b.priority}"><div class="boost-header"><span class="boost-name">${b.name}</span><span class="boost-tags"><span class="boost-type boost-type-${bt}">${bt==='eureka'?'Eureka':'Inspiration'}</span><span class="boost-priority">${b.priority}</span></span></div><div class="boost-reason">${b.reason}</div></div>`;
    }).join('');
  }
  if (general) {
    html += `<div class="boost-subheading">${capitalize(victory)} Victory Boosts</div>`;
    html += general.critical.map(b => `<div class="boost-item"><div class="boost-header"><span class="boost-name">${b.name}</span><span class="boost-type boost-type-${b.type}">${b.type==='eureka'?'Eureka':'Inspiration'}</span></div><div class="boost-trigger">Trigger: ${b.trigger}</div><div class="boost-reason">${b.why}</div></div>`).join('');
  }
  return html;
}

function renderBoostSection(leader, victory) {
  return '<div class="strategy-section"><h4>Key Eurekas &amp; Inspirations</h4>' + renderBoostContent(leader, victory) + '</div>';
}

// === Helpers ===
function capitalize(str) { return str.charAt(0).toUpperCase() + str.slice(1); }


// === Init ===
populatePlannerLeaders();
updatePlayerOptions();
renderPlayerSlots();
