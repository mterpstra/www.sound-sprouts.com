// Direction 1: Sprout & Soil
// Warm, growth-y, parental. Sage greens, cream, terracotta accent.
// Type: Fraunces (display serif) + Inter (humanist sans)

const sproutTokens = {
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

// Wordmark with the Sprout mark
const SproutWordmark = ({ size = 1, color = sproutTokens.sageDeep, accent = sproutTokens.terracotta, showMark = true, layout = "side" }) => (
  <div style={{ display: "inline-flex", alignItems: "center", gap: 10 * size }}>
    {showMark && (
      <LogoMarkSprout size={56 * size} color={color} accent={accent} tip="seed" />
    )}
    <div style={{ fontFamily: '"Fraunces", "Cormorant Garamond", serif', fontWeight: 500, fontSize: 44 * size, color, letterSpacing: -1.2 * size, lineHeight: 1, fontStyle: "italic", whiteSpace: "nowrap" }}>
      Sound <span style={{ color: accent, fontStyle: "italic" }}>Sprouts</span>
    </div>
  </div>
);

const SproutIdentity = () => (
  <div style={{ width: 1200, height: 900, background: sproutTokens.paper, padding: 64, fontFamily: '"Inter", -apple-system, sans-serif', color: sproutTokens.ink, position: "relative", overflow: "hidden", boxSizing: "border-box" }}>
    {/* Subtle background grain */}
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.4, pointerEvents: "none" }}>
      <filter id="grain-sprout"><feTurbulence baseFrequency="0.9" /><feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.25  0 0 0 0 0.15  0 0 0 0.08 0" /></filter>
      <rect width="100%" height="100%" filter="url(#grain-sprout)" />
    </svg>

    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 48, position: "relative" }}>
      <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: sproutTokens.sageDeep, fontWeight: 600 }}>Direction 01</div>
      <div style={{ fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: sproutTokens.inkSoft, fontFamily: "ui-monospace, Menlo, monospace" }}>Sprout & Soil</div>
    </div>

    <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)", gap: 56, position: "relative" }}>
      {/* Left: wordmark + descriptor */}
      <div>
        <div style={{ fontSize: 13, color: sproutTokens.inkSoft, marginBottom: 16, letterSpacing: 0.5 }}>Wordmark</div>
        <div style={{ marginBottom: 36 }}>
          <SproutWordmark size={1.4} />
        </div>
        <div style={{ fontFamily: '"Fraunces", serif', fontSize: 28, lineHeight: 1.25, color: sproutTokens.ink, fontWeight: 400, marginBottom: 24, letterSpacing: -0.3, maxWidth: 480 }}>
          Because sounds lead to words<br />
          <span style={{ fontStyle: "italic", color: sproutTokens.sageDeep }}>and words lead to sentences.</span>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: sproutTokens.inkSoft, maxWidth: 440 }}>
          A warm, garden-rooted identity. Sage and cream evoke trust and gentle growth — the work of helping a child find their voice, planted one sound at a time.
        </div>

        {/* Stamp / mark */}
        <div style={{ marginTop: 56, display: "inline-flex", alignItems: "center", gap: 12, padding: "10px 16px 10px 14px", border: `1px solid ${sproutTokens.sageDeep}`, borderRadius: 100, color: sproutTokens.sageDeep, fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600 }}>
          <svg width="14" height="14" viewBox="0 0 14 14"><circle cx="7" cy="7" r="3" fill={sproutTokens.terracotta} /></svg>
          By a Speech-Language Pathologist
        </div>
      </div>

      {/* Right: palette + type */}
      <div>
        <div style={{ fontSize: 13, color: sproutTokens.inkSoft, marginBottom: 16, letterSpacing: 0.5 }}>Palette</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: 12, marginBottom: 40 }}>
          <Swatch color={sproutTokens.cream} name="Cream" hex="#F5F1E8" size={70} />
          <Swatch color={sproutTokens.sage} name="Sage" hex="#6B8A6E" size={70} />
          <Swatch color={sproutTokens.sageDeep} name="Moss" hex="#3D5841" size={70} textColor={sproutTokens.ink} />
          <Swatch color={sproutTokens.terracotta} name="Terracotta" hex="#C97A56" size={70} />
          <Swatch color={sproutTokens.butter} name="Butter" hex="#E8C77D" size={70} />
          <Swatch color={sproutTokens.moss} name="Sprout" hex="#A8BFA0" size={70} />
          <Swatch color={sproutTokens.paper} name="Paper" hex="#FBF8F1" size={70} />
          <Swatch color={sproutTokens.ink} name="Ink" hex="#2A2E22" size={70} />
        </div>

        <div style={{ fontSize: 13, color: sproutTokens.inkSoft, marginBottom: 16, letterSpacing: 0.5 }}>Type</div>
        <div style={{ borderTop: `1px solid ${sproutTokens.ink}22`, paddingTop: 20 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 12 }}>
            <div style={{ fontFamily: '"Fraunces", serif', fontSize: 40, fontWeight: 500, color: sproutTokens.ink, letterSpacing: -1, lineHeight: 1 }}>Fraunces</div>
            <div style={{ fontSize: 9, fontFamily: "ui-monospace, Menlo, monospace", color: sproutTokens.inkSoft, whiteSpace: "nowrap" }}>HEADLINE · 400/500</div>
          </div>
          <div style={{ fontFamily: '"Fraunces", serif', fontSize: 18, fontStyle: "italic", color: sproutTokens.sageDeep, marginBottom: 24 }}>The quick brown fox jumps over the lazy dog.</div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4, gap: 12 }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 26, fontWeight: 500, color: sproutTokens.ink, letterSpacing: -0.5 }}>Inter</div>
            <div style={{ fontSize: 9, fontFamily: "ui-monospace, Menlo, monospace", color: sproutTokens.inkSoft, whiteSpace: "nowrap" }}>BODY · 400/500/600</div>
          </div>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: 14, color: sproutTokens.ink, lineHeight: 1.6, maxWidth: 360 }}>
            Each Sound Sprouts book features a set of sounds in different positions of words.
          </div>
        </div>
      </div>
    </div>

    {/* Footer: buttons + tagging */}
    <div style={{ position: "absolute", bottom: 64, left: 64, right: 64, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
      <div style={{ display: "flex", gap: 12 }}>
        <button style={{ background: sproutTokens.sageDeep, color: sproutTokens.paper, border: "none", padding: "14px 22px", borderRadius: 999, fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: 0.2, cursor: "pointer" }}>Buy the Book</button>
        <button style={{ background: "transparent", color: sproutTokens.sageDeep, border: `1.5px solid ${sproutTokens.sageDeep}`, padding: "12.5px 22px", borderRadius: 999, fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Resources</button>
        <button style={{ background: sproutTokens.terracotta, color: sproutTokens.paper, border: "none", padding: "14px 22px", borderRadius: 999, fontFamily: '"Inter", sans-serif', fontSize: 14, fontWeight: 600, cursor: "pointer" }}>Read Sample</button>
      </div>
      <div style={{ display: "flex", gap: 18, fontSize: 11, color: sproutTokens.inkSoft, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 380 }}>
        {["Engaging Stories", "Speech Development", "Rhyming Words", "Phonemic Awareness"].map(t => (
          <div key={t} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="6" height="6"><circle cx="3" cy="3" r="3" fill={sproutTokens.terracotta} /></svg>{t}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SproutHero = () => (
  <div style={{ width: 1440, height: 900, background: sproutTokens.cream, fontFamily: '"Inter", sans-serif', color: sproutTokens.ink, position: "relative", overflow: "hidden" }}>
    {/* Decorative botanical edge */}
    <svg style={{ position: "absolute", left: -40, top: -20, width: 280, height: 280, opacity: 0.18 }} viewBox="0 0 200 200">
      <path d="M100 180 Q100 130 80 100 Q60 70 80 40 Q100 70 100 110" stroke={sproutTokens.sageDeep} strokeWidth="1.5" fill="none" />
      <path d="M100 140 Q130 120 145 90 Q120 100 100 130" fill={sproutTokens.sage} opacity="0.6" />
      <path d="M100 110 Q70 95 55 70 Q80 80 100 100" fill={sproutTokens.sage} opacity="0.6" />
      <circle cx="145" cy="55" r="6" fill={sproutTokens.terracotta} opacity="0.7" />
    </svg>

    {/* Nav */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "32px 80px", position: "relative" }}>
      <SproutWordmark size={0.7} />
      <div style={{ display: "flex", gap: 36, fontSize: 14, fontWeight: 500, color: sproutTokens.ink }}>
        <span>The Books</span>
        <span>About Carol</span>
        <span>Resources</span>
        <span>Contact</span>
      </div>
      <button style={{ background: sproutTokens.sageDeep, color: sproutTokens.paper, border: "none", padding: "10px 18px", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer" }}>Buy Now</button>
    </div>

    {/* Hero content */}
    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", padding: "40px 80px 0", gap: 64, alignItems: "center", position: "relative" }}>
      <div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px 6px 10px", background: sproutTokens.moss + "55", color: sproutTokens.sageDeep, borderRadius: 999, fontSize: 12, fontWeight: 600, letterSpacing: 0.4, marginBottom: 28 }}>
          <svg width="10" height="10"><circle cx="5" cy="5" r="5" fill={sproutTokens.sageDeep} /></svg>
          New series · Written by a speech-language pathologist
        </div>

        <h1 style={{ fontFamily: '"Fraunces", serif', fontSize: 84, lineHeight: 0.98, letterSpacing: -3, fontWeight: 400, color: sproutTokens.ink, margin: 0, marginBottom: 28 }}>
          Because sounds<br />
          lead to <span style={{ fontStyle: "italic", color: sproutTokens.sageDeep }}>words</span>,<br />
          and words to <span style={{ fontStyle: "italic", color: sproutTokens.terracotta }}>sentences</span>.
        </h1>

        <p style={{ fontSize: 17, lineHeight: 1.55, color: sproutTokens.inkSoft, maxWidth: 480, marginBottom: 36 }}>
          A children's book series where speech, language, and literacy meet. Each story focuses on a set of sounds, packed with rhyme, playful characters, and the early skills kids need to grow.
        </p>

        <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
          <button style={{ background: sproutTokens.sageDeep, color: sproutTokens.paper, border: "none", padding: "16px 28px", borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 10 }}>
            Shop the Series
            <svg width="14" height="14" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke={sproutTokens.paper} strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
          </button>
          <button style={{ background: "transparent", color: sproutTokens.ink, border: "none", padding: "16px 8px", fontSize: 15, fontWeight: 600, cursor: "pointer", textDecoration: "underline", textUnderlineOffset: 4 }}>
            Meet Carol
          </button>
        </div>

        <div style={{ marginTop: 56, display: "flex", gap: 32, fontSize: 13, color: sproutTokens.inkSoft }}>
          <div><div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 500, color: sproutTokens.ink, lineHeight: 1 }}>25+</div>years in practice</div>
          <div><div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 500, color: sproutTokens.ink, lineHeight: 1 }}>2</div>books in series</div>
          <div><div style={{ fontFamily: '"Fraunces", serif', fontSize: 32, fontWeight: 500, color: sproutTokens.ink, lineHeight: 1 }}>3–7</div>ages</div>
        </div>
      </div>

      {/* Book stack */}
      <div style={{ position: "relative", height: 520, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", width: 380, height: 380, borderRadius: "50%", background: sproutTokens.butter + "55", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }} />
        <div style={{ position: "relative", transform: "rotate(-7deg) translateX(-40px)" }}>
          <BookCoverPlaceholder title="Papa's Pool Rules" accent={sproutTokens.sageDeep} bg={sproutTokens.paper} width={220} height={300} note="P/B sounds · coming soon" />
        </div>
        <div style={{ position: "relative", transform: "rotate(5deg) translateX(20px) translateY(20px)", zIndex: 2 }}>
          <BookCoverPlaceholder title="Dede's Pet Shop" accent={sproutTokens.terracotta} bg={sproutTokens.cream} width={240} height={330} note="T/D sounds · out now" />
        </div>
      </div>
    </div>
  </div>
);

window.SproutIdentity = SproutIdentity;
window.SproutHero = SproutHero;
