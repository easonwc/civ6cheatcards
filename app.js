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

$('#save-card')?.addEventListener('click', exportStrategyCard);
$('#save-all-cards')?.addEventListener('click', exportAllCards);

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
      <div style="font-size:12px;color:#888;margin-bottom:8px;">${modeLabel} · ${bbgMode?'BBG':'Vanilla'} · ${capitalize(mapType)} · ${sizeLabel} · ${playerCount} players · ${GAME_SPEED_DATA[$('#planner-speed')?.value]?.label || 'Standard'} speed${getActiveGameModes().length > 0 ? ' · ' + getActiveGameModes().map(m => GAME_MODE_TIPS[m]?.name || m).join(', ') : ''}</div>
    </div>`;

  // Left column: overview
  let left = '';

  left += collapsible('Recommended Victory Path', `
    <div class="victory-rec-list">
      ${ranked.filter(r => r.synergy >= 30).slice(0, 3).map((r, i) => `
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

  // Map fairness for multiplayer
  if (plannerMode === 'mp' && opponents.length > 0) {
    const allForFairness = [{ leader }, ...opponents];
    const fairness = analyzeMapFairness(allForFairness, mapType);
    if (fairness.rating !== 'fair') {
      let fairHtml = `<div class="fairness-box fairness-${fairness.rating}">`;
      fairHtml += `<div style="font-size:12px;font-weight:600;margin-bottom:6px;">Map Fairness: ${capitalize(fairness.rating.replace('-', ' '))}</div>`;
      fairHtml += `<div class="fairness-scores">`;
      fairness.players.forEach(p => {
        const barColor = p.score >= 65 ? '#00c850' : p.score <= 35 ? '#e84040' : '#f59e0b';
        fairHtml += `<div class="fairness-player"><span class="fairness-name">${p.name}</span><div class="synergy-bar" style="flex:1;max-width:100px;"><div class="synergy-fill" style="width:${p.score}%;background:${barColor}"></div></div><span style="font-size:11px;color:#888;">${p.score}</span></div>`;
      });
      fairHtml += `</div>`;
      if (fairness.bestAlternatives.length > 0) {
        fairHtml += `<div style="font-size:11px;color:#888;margin-top:8px;">Fairer alternatives:</div>`;
        fairHtml += fairness.bestAlternatives.map(a =>
          `<div style="font-size:12px;color:#ccc;padding:2px 0;">→ ${capitalize(a.mapType.replace(/-/g, ' '))} <span style="color:#555;">(spread: ${a.spread} vs ${fairness.selected.spread})</span></div>`
        ).join('');
      }
      fairHtml += `</div>`;
      left += collapsible('⚖ Map Fairness', fairHtml, true);
    }
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




  right += collapsible('Key Eurekas & Inspirations', renderBoostContent(leader, victory));

  const gameModeTipsHtml = renderGameModeTips(victory);
  if (gameModeTipsHtml) {
    right += collapsible('Game Mode Tips', gameModeTipsHtml);
  }

  const speedTips = getGameSpeedTips($('#planner-speed')?.value || 'standard', victory);
  if (speedTips) {
    let speedHtml = `<p style="font-size:12px;color:#ccc;margin-bottom:8px;">${speedTips.victoryTip}</p>`;
    speedHtml += `<ul>${speedTips.general.map(t => '<li>' + t + '</li>').join('')}</ul>`;
    right += collapsible(`${speedTips.label} Speed Tips`, speedHtml);
  }

  return `
    ${header}
    <div class="strategy-columns">
      <div class="strategy-col">${left}</div>
      <div class="strategy-col">${right}</div>
    </div>
  `;
}

// === Generate Strategy (single or team) ===
let lastTeamCards = null;

function generateStrategy(teamMode) {
  const mapType = $('#planner-map').value;
  const mapSize = $('#planner-size').value;
  const playerCount = parseInt($('#planner-players').value) || MAP_SIZES[mapSize]?.defaultPlayers || 8;

  lastTeamCards = null;

  if (teamMode) {
    const allPlayers = getSlotPlayers();
    if (allPlayers.length < 2) return;

    lastTeamCards = [];

    let tabsHtml = '<div class="team-tabs">';
    let panelsHtml = '';

    allPlayers.forEach((p, i) => {
      const others = allPlayers.filter((_, j) => j !== i).map(o => ({ leader: o.leader, random: o.random }));
      const stratHtml = buildStrategyHTML(p.leader, others, mapType, mapSize, playerCount);
      const active = i === 0 ? ' active' : '';
      tabsHtml += `<button class="team-tab${active}" data-player="${i}">P${i + 1}: ${p.leader.name}${p.random ? ' *' : ''}</button>`;
      lastTeamCards.push({ leader: p.leader, html: stratHtml });
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

  // Show/hide appropriate save buttons
  $('#save-card').classList.toggle('hidden', !!lastTeamCards);
  $('#save-all-cards').classList.toggle('hidden', !lastTeamCards);

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

function getActiveGameModes() {
  const modes = [];
  if ($('#mode-barbarian-clans')?.checked) modes.push('barbarian-clans');
  if ($('#mode-secret-societies')?.checked) modes.push('secret-societies');
  if ($('#mode-monopolies')?.checked) modes.push('monopolies');
  return modes;
}

function renderGameModeTips(victory) {
  const modes = getActiveGameModes();
  if (modes.length === 0) return '';
  let html = '';
  modes.forEach(modeId => {
    const mode = GAME_MODE_TIPS[modeId];
    if (!mode) return;
    html += '<div style="margin-bottom:12px;">';
    html += '<div style="font-size:13px;font-weight:600;color:#00c850;margin-bottom:4px;">' + mode.name + '</div>';
    if (modeId === 'secret-societies' && mode.societies) {
      var recName = mode.leaderSynergies[victory] || 'Hermetic Order';
      var society = mode.societies[recName];
      html += '<ul>' + mode.general.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
      html += '<div style="margin-top:8px;padding:8px 10px;background:#1c1c1c;border-left:3px solid #00c850;border-radius:0 4px 4px 0;">';
      html += '<div style="font-size:12px;font-weight:600;color:#f0f0f0;margin-bottom:4px;">Recommended: ' + recName + '</div>';
      if (society) html += '<ul>' + society.tips.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
      html += '</div>';
    } else {
      var synergy = (typeof mode.leaderSynergies === 'object') ? (mode.leaderSynergies[victory] || '') : '';
      if (synergy) html += '<p style="font-size:12px;color:#ccc;margin-bottom:6px;">' + synergy + '</p>';
      html += '<ul>' + mode.general.map(function(t) { return '<li>' + t + '</li>'; }).join('') + '</ul>';
    }
    html += '</div>';
  });
  return html;
}


// === Export All Team Cards ===
function exportAllCards() {
  if (!lastTeamCards || lastTeamCards.length === 0) return;
  lastTeamCards.forEach((card, i) => {
    setTimeout(() => {
      downloadCard(card.leader.name + ' (' + card.leader.civ + ')', card.html);
    }, i * 300); // stagger downloads so browser doesn't block them
  });
}

// === Export Strategy Card ===
function exportStrategyCard() {
  const output = $('#strategy-output');
  if (!output || !output.innerHTML) return;

  // Get the strategy content with all sections expanded
  const clone = output.cloneNode(true);
  clone.querySelectorAll('.collapsible').forEach(c => c.classList.add('open'));

  // Get leader name for filename
  const h3 = clone.querySelector('h3');
  const title = h3 ? h3.textContent : 'Strategy Card';
  const filename = title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase() + '.html';

  const cardHTML = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Arial','Segoe UI',system-ui,sans-serif;font-size:14px;line-height:1.5;color:#f0f0f0;background:#0a0a0a;padding:16px;max-width:800px;margin:0 auto}
h3{font-size:16px;font-weight:600;color:#00c850;margin-bottom:8px}
h4{font-size:14px;font-weight:600;margin-bottom:6px;color:#f0f0f0}
p{color:#888;font-size:13px;margin-bottom:6px}
ul{list-style:none;padding:0}
li{padding:4px 0;font-size:13px;color:#ccc;border-bottom:1px solid #1c1c1c}
li::before{content:'→ ';color:#00c850}
.card-header{margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #2a2a2a}
.card-header small{font-size:11px;color:#555;display:block;margin-top:4px}
.section{margin-bottom:16px}
.collapsible{margin-bottom:8px;border:1px solid #2a2a2a;border-radius:6px;overflow:hidden}
.collapsible-header{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#1c1c1c;cursor:pointer;user-select:none}
.collapsible-title{font-size:14px;font-weight:600;color:#f0f0f0}
.collapsible-icon{font-size:16px;color:#555;transition:transform .15s}
.collapsible.open .collapsible-icon{transform:rotate(90deg);color:#00c850}
.collapsible-body{max-height:0;overflow:hidden;transition:max-height .25s ease-out}
.collapsible.open .collapsible-body{max-height:9999px}
.collapsible-body>*{padding:0 14px}
.collapsible-body>*:first-child{padding-top:10px}
.collapsible-body>*:last-child{padding-bottom:14px}
.collapsible-body ul{padding:0 14px}
.collapsible-body li{padding:4px 0;font-size:13px;color:#ccc;border-bottom:1px solid #1c1c1c}
.collapsible-body li::before{content:'→ ';color:#00c850}
.collapsible-body p{color:#888;font-size:13px;margin-bottom:6px}
.victory-rec-list{display:flex;flex-direction:column;gap:4px;padding:0 14px}
.victory-rec-item{display:flex;align-items:center;gap:10px;padding:6px 10px;background:#1c1c1c;border-radius:4px;border-left:3px solid #2a2a2a}
.victory-rec-best{border-left-color:#00c850;background:#00c85008}
.victory-rec-rank{font-size:13px;font-weight:600;min-width:20px;text-align:center;color:#555}
.victory-rec-best .victory-rec-rank{color:#00c850}
.victory-rec-info{display:flex;flex-direction:column;min-width:100px}
.victory-rec-name{font-size:13px;font-weight:600;color:#f0f0f0}
.victory-rec-score{font-size:11px;color:#888}
.synergy-bar{height:6px;background:#2a2a2a;border-radius:3px;overflow:hidden;margin-top:4px;flex:1;max-width:120px}
.synergy-fill{height:100%;border-radius:3px}
.matchup-card{background:#1c1c1c;border-radius:6px;padding:12px;margin:0 14px 10px}
.matchup-card h4{font-size:14px;font-weight:600;margin-bottom:6px}
.matchup-card p{font-size:13px;color:#888}
.threat-high{border-left:3px solid #e84040}
.threat-medium{border-left:3px solid #f59e0b}
.threat-low{border-left:3px solid #00c850}
.random-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px;background:#2a2a2a;color:#888}
.density-box,.map-affinity{background:#1c1c1c;border-radius:4px;padding:10px 12px;border-left:3px solid #2a2a2a;margin:8px 14px 0}
.density-box ul{list-style:none;padding:0}
.density-box li{font-size:12px;color:#ccc;padding:2px 0}
.density-box li::before{content:'→ ';color:#00c850}
.density-cramped{border-left-color:#e84040}
.density-tight{border-left-color:#f59e0b}
.density-normal{border-left-color:#00c850}
.density-spacious{border-left-color:#2563eb}
.density-empty{border-left-color:#7c3aed}
.map-affinity-excellent{border-left-color:#00c850}
.map-affinity-good{border-left-color:#2563eb}
.map-affinity-neutral{border-left-color:#888}
.map-affinity-mixed{border-left-color:#f59e0b}
.map-affinity-poor{border-left-color:#e84040}
.era-block{margin:0 14px 12px;border-left:2px solid #2a2a2a;padding-left:12px}
.era-header{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}
.era-name{font-size:13px;font-weight:600;color:#00c850}
.era-focus{font-size:12px;color:#888}
.build-order{display:flex;flex-direction:column;gap:4px}
.build-step{display:flex;align-items:center;gap:10px;padding:6px 10px;background:#1c1c1c;border-radius:4px;font-size:13px}
.build-step-num{color:#00c850;font-weight:600;font-size:12px;min-width:24px}
.build-step-text{color:#ccc}
.boost-settling{background:#1c1c1c;border-left:3px solid #00c850;padding:8px 12px;font-size:12px;color:#ccc;margin:0 14px 12px;border-radius:0 4px 4px 0}
.boost-subheading{font-size:12px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:.5px;margin:12px 14px 6px}
.boost-item{background:#1c1c1c;border-radius:4px;padding:8px 10px;margin:0 14px 4px;border-left:3px solid #2a2a2a}
.boost-item.boost-critical{border-left-color:#00c850}
.boost-item.boost-high{border-left-color:#f59e0b}
.boost-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px}
.boost-name{font-size:13px;font-weight:600;color:#f0f0f0}
.boost-tags{display:flex;gap:4px;align-items:center}
.boost-type{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}
.boost-type-eureka{background:#2563eb25;color:#60a5fa}
.boost-type-inspiration{background:#7c3aed25;color:#a78bfa}
.boost-priority{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px;text-transform:uppercase}
.boost-critical .boost-priority{background:#00c85020;color:#00c850}
.boost-high .boost-priority{background:#f59e0b20;color:#f59e0b}
.boost-trigger{font-size:11px;color:#00c850;margin-bottom:2px}
.boost-reason{font-size:12px;color:#888}
.bbg-note{background:#00c85015;border:1px solid #00c85030;border-radius:4px;padding:8px 10px;font-size:12px;color:#00c850;margin:0 14px}
.strategy-columns{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start}
.strategy-col{min-width:0}
@media(max-width:700px){.strategy-columns{grid-template-columns:1fr}.era-header{flex-direction:column;gap:2px}.boost-header{flex-direction:column;align-items:flex-start;gap:4px}.victory-rec-item{flex-wrap:wrap}.synergy-bar{max-width:none!important}}
::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#0a0a0a}::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:3px}
</style>
</head>
<body>
<div class="card-header">
<h3>${title}</h3>
<small>Generated by Civ 6 Planner · ${new Date().toLocaleDateString()}</small>
</div>
${clone.innerHTML}
<script>
document.querySelectorAll('.collapsible-header').forEach(h=>{
h.addEventListener('click',()=>h.parentElement.classList.toggle('open'));
});
</script>
</body>
</html>`;

  const blob = new Blob([cardHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function buildCardHTML(title, contentHTML) {
  const date = new Date().toLocaleDateString();
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<style>*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}body{font-family:'Arial','Segoe UI',system-ui,sans-serif;font-size:14px;line-height:1.5;color:#f0f0f0;background:#0a0a0a;padding:16px;max-width:800px;margin:0 auto}h3{font-size:16px;font-weight:600;color:#00c850;margin-bottom:8px}h4{font-size:14px;font-weight:600;margin-bottom:6px;color:#f0f0f0}p{color:#888;font-size:13px;margin-bottom:6px}ul{list-style:none;padding:0}li{padding:4px 0;font-size:13px;color:#ccc;border-bottom:1px solid #1c1c1c}li::before{content:'→ ';color:#00c850}.card-header{margin-bottom:16px;padding-bottom:12px;border-bottom:1px solid #2a2a2a}.card-header small{font-size:11px;color:#555;display:block;margin-top:4px}.collapsible{margin-bottom:8px;border:1px solid #2a2a2a;border-radius:6px;overflow:hidden}.collapsible-header{display:flex;justify-content:space-between;align-items:center;padding:10px 14px;background:#1c1c1c;cursor:pointer;user-select:none}.collapsible-title{font-size:14px;font-weight:600;color:#f0f0f0}.collapsible-icon{font-size:16px;color:#555;transition:transform .15s}.collapsible.open .collapsible-icon{transform:rotate(90deg);color:#00c850}.collapsible-body{max-height:0;overflow:hidden;transition:max-height .25s ease-out}.collapsible.open .collapsible-body{max-height:9999px}.collapsible-body>*{padding:0 14px}.collapsible-body>*:first-child{padding-top:10px}.collapsible-body>*:last-child{padding-bottom:14px}.collapsible-body ul{padding:0 14px}.collapsible-body li{padding:4px 0;font-size:13px;color:#ccc;border-bottom:1px solid #1c1c1c}.collapsible-body li::before{content:'→ ';color:#00c850}.collapsible-body p{color:#888;font-size:13px;margin-bottom:6px}.victory-rec-list{display:flex;flex-direction:column;gap:4px;padding:0 14px}.victory-rec-item{display:flex;align-items:center;gap:10px;padding:6px 10px;background:#1c1c1c;border-radius:4px;border-left:3px solid #2a2a2a}.victory-rec-best{border-left-color:#00c850;background:#00c85008}.victory-rec-rank{font-size:13px;font-weight:600;min-width:20px;text-align:center;color:#555}.victory-rec-best .victory-rec-rank{color:#00c850}.victory-rec-info{display:flex;flex-direction:column;min-width:100px}.victory-rec-name{font-size:13px;font-weight:600;color:#f0f0f0}.victory-rec-score{font-size:11px;color:#888}.synergy-bar{height:6px;background:#2a2a2a;border-radius:3px;overflow:hidden;margin-top:4px;flex:1;max-width:120px}.synergy-fill{height:100%;border-radius:3px}.matchup-card{background:#1c1c1c;border-radius:6px;padding:12px;margin:0 14px 10px}.matchup-card h4{font-size:14px;font-weight:600;margin-bottom:6px}.matchup-card p{font-size:13px;color:#888}.threat-high{border-left:3px solid #e84040}.threat-medium{border-left:3px solid #f59e0b}.threat-low{border-left:3px solid #00c850}.random-badge{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px;background:#2a2a2a;color:#888}.density-box,.map-affinity{background:#1c1c1c;border-radius:4px;padding:10px 12px;border-left:3px solid #2a2a2a;margin:8px 14px 0}.density-box ul{list-style:none;padding:0}.density-box li{font-size:12px;color:#ccc;padding:2px 0}.density-box li::before{content:'→ ';color:#00c850}.density-cramped{border-left-color:#e84040}.density-tight{border-left-color:#f59e0b}.density-normal{border-left-color:#00c850}.density-spacious{border-left-color:#2563eb}.density-empty{border-left-color:#7c3aed}.map-affinity-excellent{border-left-color:#00c850}.map-affinity-good{border-left-color:#2563eb}.map-affinity-neutral{border-left-color:#888}.map-affinity-mixed{border-left-color:#f59e0b}.map-affinity-poor{border-left-color:#e84040}.era-block{margin:0 14px 12px;border-left:2px solid #2a2a2a;padding-left:12px}.era-header{display:flex;align-items:baseline;gap:8px;margin-bottom:6px}.era-name{font-size:13px;font-weight:600;color:#00c850}.era-focus{font-size:12px;color:#888}.build-order{display:flex;flex-direction:column;gap:4px}.build-step{display:flex;align-items:center;gap:10px;padding:6px 10px;background:#1c1c1c;border-radius:4px;font-size:13px}.build-step-num{color:#00c850;font-weight:600;font-size:12px;min-width:24px}.build-step-text{color:#ccc}.boost-settling{background:#1c1c1c;border-left:3px solid #00c850;padding:8px 12px;font-size:12px;color:#ccc;margin:0 14px 12px;border-radius:0 4px 4px 0}.boost-subheading{font-size:12px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:.5px;margin:12px 14px 6px}.boost-item{background:#1c1c1c;border-radius:4px;padding:8px 10px;margin:0 14px 4px;border-left:3px solid #2a2a2a}.boost-item.boost-critical{border-left-color:#00c850}.boost-item.boost-high{border-left-color:#f59e0b}.boost-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:2px}.boost-name{font-size:13px;font-weight:600;color:#f0f0f0}.boost-tags{display:flex;gap:4px;align-items:center}.boost-type{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px}.boost-type-eureka{background:#2563eb25;color:#60a5fa}.boost-type-inspiration{background:#7c3aed25;color:#a78bfa}.boost-priority{font-size:10px;font-weight:600;padding:1px 6px;border-radius:10px;text-transform:uppercase}.boost-critical .boost-priority{background:#00c85020;color:#00c850}.boost-high .boost-priority{background:#f59e0b20;color:#f59e0b}.boost-trigger{font-size:11px;color:#00c850;margin-bottom:2px}.boost-reason{font-size:12px;color:#888}.bbg-note{background:#00c85015;border:1px solid #00c85030;border-radius:4px;padding:8px 10px;font-size:12px;color:#00c850;margin:0 14px}.strategy-columns{display:grid;grid-template-columns:1fr 1fr;gap:16px;align-items:start}.strategy-col{min-width:0}@media(max-width:700px){.strategy-columns{grid-template-columns:1fr}.era-header{flex-direction:column;gap:2px}.boost-header{flex-direction:column;align-items:flex-start;gap:4px}.victory-rec-item{flex-wrap:wrap}.synergy-bar{max-width:none!important}}::-webkit-scrollbar{width:6px}::-webkit-scrollbar-track{background:#0a0a0a}::-webkit-scrollbar-thumb{background:#2a2a2a;border-radius:3px}</style>
</head>
<body>
<div class="card-header">
<h3>${title}</h3>
<small>Generated by Civ 6 Planner · ${date}</small>
</div>
${contentHTML}
<script>
document.querySelectorAll('.collapsible-header').forEach(h=>{
h.addEventListener('click',()=>h.parentElement.classList.toggle('open'));
});
<\/script>
</body>
</html>`;
}

function downloadFile(filename, content) {
  const blob = new Blob([content], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

function downloadCard(title, strategyHTML) {
  const filename = title.replace(/[^a-zA-Z0-9]+/g, '-').toLowerCase() + '.html';
  downloadFile(filename, buildCardHTML(title, strategyHTML));
}

// === Init ===
populatePlannerLeaders();
updatePlayerOptions();
renderPlayerSlots();
