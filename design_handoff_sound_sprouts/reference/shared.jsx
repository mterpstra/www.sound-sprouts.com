// Shared utilities for all brand directions

// Placeholder book cover — striped SVG with monospace label
const BookCoverPlaceholder = ({ title, accent = "#cccccc", bg = "#f4f4f4", width = 200, height = 280, note = "book cover" }) => (
  <div style={{
    width, height,
    background: bg,
    border: `1px dashed ${accent}`,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 14,
    boxShadow: "0 12px 28px rgba(28,30,22,0.12), 0 2px 6px rgba(28,30,22,0.08)",
    borderRadius: 2,
  }}>
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
      <defs>
        <pattern id={`stripe-${title.replace(/\s/g, "")}`} width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="10" stroke={accent} strokeWidth="1" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#stripe-${title.replace(/\s/g, "")})`} />
    </svg>
    <div style={{ position: "relative", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9, letterSpacing: 0.5, textTransform: "uppercase", color: accent, opacity: 0.7 }}>
      {note}
    </div>
    <div style={{ position: "relative", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10, color: "#3a3a3a", lineHeight: 1.3 }}>
      <div style={{ opacity: 0.5, fontSize: 8, letterSpacing: 1, marginBottom: 4 }}>SOUND SPROUTS</div>
      <div style={{ fontWeight: 600 }}>{title}</div>
    </div>
  </div>
);

// Placeholder portrait
const PortraitPlaceholder = ({ accent = "#cccccc", bg = "#f4f4f4", width = 220, height = 260, label = "author portrait" }) => (
  <div style={{
    width, height,
    background: bg,
    border: `1px dashed ${accent}`,
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: 12,
  }}>
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4 }}>
      <defs>
        <pattern id={`p-${label.replace(/\s/g, "")}`} width="8" height="8" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="8" y2="8" stroke={accent} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#p-${label.replace(/\s/g, "")})`} />
    </svg>
    {/* Simple silhouette */}
    <svg viewBox="0 0 100 120" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.15 }}>
      <circle cx="50" cy="42" r="18" fill={accent} />
      <path d={`M20,120 Q20,75 50,75 Q80,75 80,120 Z`} fill={accent} />
    </svg>
    <div style={{ position: "relative", fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9, letterSpacing: 0.5, textTransform: "uppercase", color: accent, opacity: 0.8 }}>
      {label}
    </div>
  </div>
);

// Color swatch for palette displays
const Swatch = ({ color, name, hex, textColor = "#1a1a1a", size = 80 }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
    <div style={{
      width: size, height: size,
      background: color,
      borderRadius: 4,
      border: "1px solid rgba(0,0,0,0.06)",
    }} />
    <div style={{ fontSize: 10, lineHeight: 1.3 }}>
      <div style={{ fontWeight: 600, color: textColor }}>{name}</div>
      <div style={{ fontFamily: "ui-monospace, Menlo, monospace", color: textColor, opacity: 0.6 }}>{hex}</div>
    </div>
  </div>
);

window.BookCoverPlaceholder = BookCoverPlaceholder;
window.PortraitPlaceholder = PortraitPlaceholder;
window.Swatch = Swatch;
