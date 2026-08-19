/**
 * AEGIS PROCURE — Design System (D365 / Power BI style)
 * Live CSS-variable theme object. Every colour reads from a custom property
 * defined in src/styles.css so branding can be re-themed in one place.
 */

export const BRAND = {
  name: "Aegis Procure",
  short: "Aegis",
  org: "Northbridge Industrial Group",
  suite: "Procurement & Supply Chain Suite",
  version: "v1.0",
  currency: "USD",
};

function cssVar(name: string, fallback: string): string {
  if (typeof document === "undefined") return fallback;
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
}

export const T = {
  get bg() { return cssVar("--brand-page-bg", "#f3f5f8"); },
  get card() { return cssVar("--brand-card-bg", "#ffffff"); },
  cardHov: "#f7f9fc",
  get border() { return cssVar("--brand-border", "#dde1e7"); },

  get fg() { return cssVar("--brand-text", "#12203c"); },
  get fgMuted() { return cssVar("--brand-text-muted", "#5a6475"); },
  fgDim: "#8d96a3",

  get primary() { return cssVar("--brand-primary", "#0a2558"); },
  primaryDark: "#061634",
  get accent() { return cssVar("--brand-accent", "#e2680f"); },
  get teal() { return cssVar("--brand-teal", "#0e7490"); },
  teal2: "#0891b2",

  success: "#166534",
  successBg: "#dcfce7",
  warning: "#b45309",
  warningBg: "#fef3c7",
  error: "#dc2626",
  errorBg: "#fee2e2",
  infoBg: "#e0f2fe",

  // Fixed module ribbon palette
  sourcing: "#0078d4",
  finance: "#7719aa",
  inventory: "#038387",
  quality: "#498205",
  logistics: "#d83b01",
  reports: "#5c2d91",
  admin: "#00188f",

  r: 4,
  rMd: 6,
  rLg: 8,
  rXl: 12,
  shadow: "0 2px 8px rgba(12,22,52,.08)",
  shadowLg: "0 8px 32px rgba(8,15,45,.22)",
};

export const money = (n: number) =>
  n >= 1_000_000
    ? `$${(n / 1_000_000).toFixed(2)}M`
    : n >= 1_000
      ? `$${(n / 1_000).toFixed(1)}K`
      : `$${n.toLocaleString("en-US")}`;

export const glass = (extra: React.CSSProperties = {}): React.CSSProperties => ({
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.5)",
  borderRadius: T.rXl,
  boxShadow: T.shadowLg,
  ...extra,
});
