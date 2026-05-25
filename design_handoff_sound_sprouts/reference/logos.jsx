// Logo Explorations — Sprout & Soil direction
// 5 fresh options + the original for comparison. All drawn flat, in palette.

const logoTokens = {
  cream: "#F5F1E8",
  paper: "#FBF8F1",
  ink: "#2A2E22",
  inkSoft: "#5C5F50",
  sage: "#6B8A6E",
  sageDeep: "#3D5841",
  moss: "#A8BFA0",
  terracotta: "#C97A56",
  butter: "#E8C77D",
};

// ─────────────────────────────────────────────
// Logo marks — each is just an SVG component
// ─────────────────────────────────────────────

// 01 — Sprout-glyph: straight stem touches brown soil hill (no gap, no dip below)
// `tip` controls what sits at the top: 'seed' (default), 'bud', or 'flower'
const LogoMarkSprout = ({ size = 80, color = logoTokens.sageDeep, accent = logoTokens.terracotta, soilColor = "#7A4F2E", center = logoTokens.butter, tip = "seed" }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Straight stem — bottom at y=58 to meet the hill peak; doesn't go below */}
    <path d="M32 58 Q32 44 32 30" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    {/* Right leaf */}
    <path d="M32 36 Q44 32 50 22 Q42 22 36 28 Q32 32 32 36" fill={color} />
    {/* Left leaf (smaller) */}
    <path d="M32 28 Q24 26 18 18 Q24 18 28 22 Q32 24 32 28" fill={color} />
    {/* Brown soil hill — convex up, peak at y=58, stem touches but does not cross */}
    <path d="M22 62 Q32 58 42 62" stroke={soilColor} strokeWidth="2" strokeLinecap="round" />
    {/* Tip — variants */}
    {tip === "seed" && (
      <circle cx="32" cy="22" r="3" fill={accent} />
    )}
    {tip === "bud" && (
      // Pointed teardrop bud
      <path d="M32 16 Q35 20 33 25 Q32 26.5 31 25 Q29 20 32 16 Z" fill={accent} />
    )}
    {tip === "flower" && (
      // Simple 4-petal flower with a small yellow center
      <g>
        <ellipse cx="32" cy="17" rx="2.2" ry="3.2" fill={accent} />
        <ellipse cx="36.5" cy="21" rx="3.2" ry="2.2" fill={accent} />
        <ellipse cx="32" cy="25" rx="2.2" ry="3.2" fill={accent} />
        <ellipse cx="27.5" cy="21" rx="3.2" ry="2.2" fill={accent} />
        <circle cx="32" cy="21" r="1.6" fill={center} />
      </g>
    )}
  </svg>
);

// 01-v1 — Original "The Sprout": straight stem, soft soil arc
const LogoMarkSproutV1 = ({ size = 80, color = logoTokens.sageDeep, accent = logoTokens.terracotta }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Stem */}
    <path d="M32 56 Q32 42 32 30" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    {/* Right leaf */}
    <path d="M32 36 Q44 32 50 22 Q42 22 36 28 Q32 32 32 36" fill={color} />
    {/* Left leaf (smaller) */}
    <path d="M32 28 Q24 26 18 18 Q24 18 28 22 Q32 24 32 28" fill={color} />
    {/* Sprout tip seed */}
    <circle cx="32" cy="22" r="3" fill={accent} />
    {/* Soil line */}
    <path d="M22 58 Q32 60 42 58" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
  </svg>
);

// 02 — Sprout-with-soundwave: leaf with three small dots/arcs to one side (sounds emerging)
const LogoMarkSounds = ({ size = 80, color = logoTokens.sageDeep, accent = logoTokens.terracotta }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Single stem with one leaf */}
    <path d="M28 58 Q28 40 28 26" stroke={color} strokeWidth="3.5" strokeLinecap="round" />
    <path d="M28 32 Q40 30 46 20 Q38 18 32 24 Q28 28 28 32" fill={color} />
    {/* Tip */}
    <circle cx="28" cy="24" r="2.5" fill={color} />
    {/* Sound dots emerging to the right */}
    <circle cx="44" cy="38" r="2" fill={accent} />
    <circle cx="50" cy="44" r="2.5" fill={accent} />
    <circle cx="55" cy="52" r="3" fill={accent} />
  </svg>
);

// 03 — Circular bookplate: thin ring, sprout inside, no fills competing
const LogoMarkBookplate = ({ size = 80, color = logoTokens.sageDeep, accent = logoTokens.terracotta, bg = logoTokens.cream }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <circle cx="32" cy="32" r="29" fill={bg} stroke={color} strokeWidth="1.2" />
    {/* Stem */}
    <path d="M32 48 Q32 38 32 26" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    {/* Right leaf */}
    <path d="M32 30 Q40 28 44 22 Q38 20 34 24 Q32 27 32 30" fill={color} />
    {/* Left leaf */}
    <path d="M32 36 Q24 35 20 28 Q26 28 30 32 Q32 34 32 36" fill={color} />
    {/* Tip seed */}
    <circle cx="32" cy="22" r="2" fill={accent} />
  </svg>
);

// 04 — Wordmark-led, sprout-as-diacritic: tiny leaf flourish over the 'u' or first S
const LogoMarkWordmarkMonogram = ({ size = 80, color = logoTokens.sageDeep, accent = logoTokens.terracotta }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Monogram 'ss' interlocked with leaf */}
    <text x="32" y="48" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="46" fontWeight="500" fontStyle="italic" fill={color}>S</text>
    {/* Leaf sprouting from top of S */}
    <path d="M38 18 Q44 12 48 6 Q42 10 38 16 Z" fill={accent} />
    <path d="M38 18 Q35 10 35 4" stroke={accent} strokeWidth="1.5" fill="none" strokeLinecap="round" />
  </svg>
);

// 05 — Letters-on-leaves: 3 leaves, each holding a tiny letter (a/b/c or sound)
const LogoMarkLetterLeaves = ({ size = 80, color = logoTokens.sageDeep, accent = logoTokens.terracotta }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* Curved stem */}
    <path d="M32 58 Q28 44 30 30 Q34 18 32 8" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
    {/* Three leaves with tiny letters */}
    <g>
      <ellipse cx="20" cy="42" rx="9" ry="5" fill={color} transform="rotate(-30 20 42)" />
      <text x="20" y="45" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="9" fontWeight="600" fill={logoTokens.cream} transform="rotate(-30 20 45)">a</text>
    </g>
    <g>
      <ellipse cx="44" cy="32" rx="9" ry="5" fill={color} transform="rotate(20 44 32)" />
      <text x="44" y="35" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="9" fontWeight="600" fill={logoTokens.cream} transform="rotate(20 44 35)">b</text>
    </g>
    <g>
      <ellipse cx="22" cy="18" rx="9" ry="5" fill={accent} transform="rotate(-15 22 18)" />
      <text x="22" y="21" textAnchor="middle" fontFamily="Fraunces, serif" fontSize="9" fontWeight="600" fill={logoTokens.cream} transform="rotate(-15 22 21)">c</text>
    </g>
  </svg>
);

// Original logo — using uploaded image
const LogoMarkOriginal = ({ size = 80 }) => (
  <img src="uploads/logo.png" width={size} height={size} style={{ objectFit: "contain" }} alt="Original logo" />
);

// ─────────────────────────────────────────────
// Wordmark variations to pair with marks
// ─────────────────────────────────────────────
const LogoWordmark = ({ size = 1, color = logoTokens.sageDeep, accent = logoTokens.terracotta, layout = "side" }) => {
  if (layout === "stacked") {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 * size }}>
        <div style={{ fontFamily: '"Fraunces", serif', fontStyle: "italic", fontWeight: 500, fontSize: 28 * size, color, lineHeight: 1, letterSpacing: -0.8 * size }}>
          Sound <span style={{ color: accent }}>Sprouts</span>
        </div>
      </div>
    );
  }
  return (
    <div style={{ fontFamily: '"Fraunces", serif', fontStyle: "italic", fontWeight: 500, fontSize: 32 * size, color, lineHeight: 1, letterSpacing: -1 * size, whiteSpace: "nowrap" }}>
      Sound <span style={{ color: accent }}>Sprouts</span>
    </div>
  );
};

// ─────────────────────────────────────────────
// Artboard: each option shows the mark big,
// then locked-up with wordmark, then 3 sizes
// ─────────────────────────────────────────────
const LogoOption = ({ number, name, description, Mark, bg = logoTokens.paper, note, isOriginal = false }) => (
  <div style={{
    width: 520, height: 720,
    background: bg,
    fontFamily: '"Inter", -apple-system, sans-serif',
    color: logoTokens.ink,
    boxSizing: "border-box",
    padding: 32,
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
  }}>
    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
      <div style={{ fontSize: 10, letterSpacing: 2.5, textTransform: "uppercase", color: isOriginal ? logoTokens.terracotta : logoTokens.sageDeep, fontWeight: 600 }}>
        {isOriginal ? "Current" : `Option ${number}`}
      </div>
      <div style={{ fontSize: 9, letterSpacing: 2, textTransform: "uppercase", color: logoTokens.inkSoft, fontFamily: "ui-monospace, Menlo, monospace" }}>
        {isOriginal ? "for comparison" : "exploration"}
      </div>
    </div>
    <div style={{ fontFamily: '"Fraunces", serif', fontSize: 22, fontWeight: 500, color: logoTokens.ink, marginBottom: 4, letterSpacing: -0.3 }}>{name}</div>
    <div style={{ fontSize: 12, color: logoTokens.inkSoft, lineHeight: 1.4, marginBottom: 20 }}>{description}</div>

    {/* Hero mark */}
    <div style={{
      flex: 1,
      background: logoTokens.cream,
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
      position: "relative",
    }}>
      <Mark size={180} />
      {note && (
        <div style={{ position: "absolute", bottom: 12, left: 12, right: 12, fontSize: 10, color: logoTokens.inkSoft, fontFamily: "ui-monospace, Menlo, monospace", textAlign: "center", letterSpacing: 0.3 }}>
          {note}
        </div>
      )}
    </div>

    {/* Lock-up: mark + wordmark */}
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", background: logoTokens.cream, borderRadius: 4, marginBottom: 12 }}>
      <Mark size={44} />
      <LogoWordmark size={0.85} />
    </div>

    {/* Size-down test */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: logoTokens.ink, borderRadius: 4 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ background: logoTokens.cream, padding: 4, borderRadius: 4, display: "flex" }}>
          <Mark size={32} />
        </div>
        <div style={{ background: logoTokens.cream, padding: 3, borderRadius: 3, display: "flex" }}>
          <Mark size={20} />
        </div>
        <div style={{ background: logoTokens.cream, padding: 2, borderRadius: 2, display: "flex" }}>
          <Mark size={14} />
        </div>
      </div>
      <div style={{ fontSize: 9, color: logoTokens.cream, opacity: 0.6, fontFamily: "ui-monospace, Menlo, monospace", letterSpacing: 1 }}>32 · 20 · 14 px</div>
    </div>
  </div>
);

// ─────────────────────────────────────────────
// Section container — exports the full panel
// ─────────────────────────────────────────────
const LogoExploration = () => null; // not used — we render artboards directly

window.LogoMarkSprout = LogoMarkSprout;
window.LogoMarkSproutV1 = LogoMarkSproutV1;
window.LogoMarkSounds = LogoMarkSounds;
window.LogoMarkBookplate = LogoMarkBookplate;
window.LogoMarkWordmarkMonogram = LogoMarkWordmarkMonogram;
window.LogoMarkLetterLeaves = LogoMarkLetterLeaves;
window.LogoMarkOriginal = LogoMarkOriginal;
window.LogoOption = LogoOption;
window.LogoWordmark = LogoWordmark;
window.logoTokens = logoTokens;
