// Multiplayer threat assessment
const THREAT_MATRIX = {
  domination: { counters: ["domination", "religion"], weakTo: ["science"], threat: "Military pressure early and mid-game" },
  science: { counters: ["diplomacy"], weakTo: ["domination"], threat: "Will outpace everyone in late game if unchecked" },
  culture: { counters: ["religion"], weakTo: ["domination", "culture"], threat: "Tourism snowball in late game" },
  religion: { counters: ["culture"], weakTo: ["domination", "science"], threat: "Religious pressure can flip cities" },
  diplomacy: { counters: ["science", "culture"], weakTo: ["domination"], threat: "Accumulates victory points steadily" }
};
