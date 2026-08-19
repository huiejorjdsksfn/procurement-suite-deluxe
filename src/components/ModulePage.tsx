/**
 * Aegis Procure — generic D365-style list page: page header + command strip,
 * KPI tiles row, dense data grid with status chips.
 */
import { type ReactNode } from "react";
import { Plus, Filter, Download, RefreshCw, Search } from "lucide-react";
import { T, money } from "@/lib/brand";
import type { Row } from "@/lib/mock";

export type Col = { k: string; l: string; w?: number; money?: boolean; chip?: boolean; right?: boolean };

const TONES: Record<string, { bg: string; fg: string }> = {
  approved: { bg: T.successBg, fg: T.success },
  accepted: { bg: T.successBg, fg: T.success },
  active: { bg: T.successBg, fg: T.success },
  awarded: { bg: T.successBg, fg: T.success },
  closed: { bg: "#e2e8f0", fg: "#475569" },
  issued: { bg: "#e0f2fe", fg: "#075985" },
  open: { bg: "#e0f2fe", fg: "#075985" },
  acknowledged: { bg: "#e0f2fe", fg: "#075985" },
  "in review": { bg: "#ede9fe", fg: "#5b21b6" },
  evaluation: { bg: "#ede9fe", fg: "#5b21b6" },
  "pending approval": { bg: T.warningBg, fg: T.warning },
  pending: { bg: T.warningBg, fg: T.warning },
  partial: { bg: T.warningBg, fg: T.warning },
  "partially received": { bg: T.warningBg, fg: T.warning },
  "under review": { bg: T.warningBg, fg: T.warning },
  expiring: { bg: T.warningBg, fg: T.warning },
  rejected: { bg: T.errorBg, fg: T.error },
  suspended: { bg: T.errorBg, fg: T.error },
  quarantined: { bg: T.errorBg, fg: T.error },
  expired: { bg: T.errorBg, fg: T.error },
};

export function Chip({ v }: { v: string }) {
  const tone = TONES[v.toLowerCase()] ?? { bg: "#eef2f7", fg: T.fgMuted };
  return (
    <span className="status-chip" style={{ display: "inline-block", padding: "2px 9px", borderRadius: 99, background: tone.bg, color: tone.fg, fontSize: 10.5, fontWeight: 700, letterSpacing: ".01em", whiteSpace: "nowrap" }}>
      {v}
    </span>
  );
}

export function Tile({ label, value, sub, col }: { label: string; value: string | number; sub: string; col: string }) {
  return (
    <div style={{ background: T.card, border: `1px solid ${T.border}`, borderLeft: `3px solid ${col}`, borderRadius: T.rMd, padding: "11px 14px", minWidth: 156, flex: "1 1 156px", boxShadow: T.shadow }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: T.fgDim }}>{label}</div>
      <div style={{ fontSize: 22, fontWeight: 800, color: T.fg, letterSpacing: "-.02em", marginTop: 3 }}>{value}</div>
      <div style={{ fontSize: 11, color: T.fgMuted, marginTop: 1 }}>{sub}</div>
    </div>
  );
}

export function Panel({ title, action, children, pad = 14 }: { title: string; action?: ReactNode; children: ReactNode; pad?: number }) {
  return (
    <section style={{ background: T.card, border: `1px solid ${T.border}`, borderRadius: T.rLg, boxShadow: T.shadow, overflow: "hidden" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "10px 14px", borderBottom: `1px solid ${T.border}` }}>
        <h2 style={{ margin: 0, fontSize: 12.5, fontWeight: 800, letterSpacing: ".02em", color: T.fg }}>{title}</h2>
        {action}
      </header>
      <div style={{ padding: pad }}>{children}</div>
    </section>
  );
}

export function DataGrid({ cols, rows, accent }: { cols: Col[]; rows: Row[]; accent: string }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12.5 }}>
        <thead>
          <tr style={{ background: "#f6f8fb" }}>
            {cols.map((c) => (
              <th key={c.k} style={{ textAlign: c.right || c.money ? "right" : "left", padding: "8px 12px", fontSize: 10.5, fontWeight: 800, letterSpacing: ".07em", textTransform: "uppercase", color: T.fgMuted, borderBottom: `1px solid ${T.border}`, whiteSpace: "nowrap" }}>
                {c.l}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
              {cols.map((c, j) => (
                <td key={c.k} style={{ padding: "9px 12px", textAlign: c.right || c.money ? "right" : "left", color: j === 0 ? accent : T.fg, fontWeight: j === 0 ? 700 : 500, whiteSpace: "nowrap" }}>
                  {c.chip ? <Chip v={String(r[c.k])} /> : c.money ? money(Number(r[c.k])) : String(r[c.k])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ModulePage({
  title, subtitle, accent, tiles, cols, rows, primaryAction = "New record", children,
}: {
  title: string; subtitle: string; accent: string;
  tiles: { label: string; value: string | number; sub: string; col?: string }[];
  cols: Col[]; rows: Row[]; primaryAction?: string; children?: ReactNode;
}) {
  const btn = (bg: string, fg: string, brd: string): React.CSSProperties => ({
    display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: T.rMd,
    background: bg, color: fg, border: `1px solid ${brd}`, fontSize: 12, fontWeight: 600, cursor: "pointer",
  });

  return (
    <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14, maxWidth: 1560, margin: "0 auto" }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", textTransform: "uppercase", color: accent }}>{subtitle}</div>
          <h1 style={{ margin: "2px 0 0", fontSize: 22, fontWeight: 800, letterSpacing: "-.02em", color: T.fg }}>{title}</h1>
        </div>
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
          <button style={btn(accent, "#fff", accent)}><Plus size={14} />{primaryAction}</button>
          <button style={btn(T.card, T.fgMuted, T.border)}><Filter size={14} />Filter</button>
          <button style={btn(T.card, T.fgMuted, T.border)}><Download size={14} />Export</button>
          <button style={btn(T.card, T.fgMuted, T.border)} aria-label="Refresh"><RefreshCw size={14} /></button>
        </div>
      </div>

      <div className="kpi-tiles-row" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {tiles.map((t) => <Tile key={t.label} label={t.label} value={t.value} sub={t.sub} col={t.col ?? accent} />)}
      </div>

      <Panel
        title="Records"
        pad={0}
        action={
          <div style={{ position: "relative" }}>
            <Search size={13} style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: T.fgDim }} />
            <input placeholder="Filter records…" style={{ padding: "6px 10px 6px 27px", fontSize: 12, border: `1px solid ${T.border}`, borderRadius: T.rMd, background: "#f8fafc", outline: "none", color: T.fg }} />
          </div>
        }
      >
        <DataGrid cols={cols} rows={rows} accent={accent} />
      </Panel>

      {children}
    </div>
  );
}
