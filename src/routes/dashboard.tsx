import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Clock, RefreshCw, TrendingUp, ArrowUpRight } from "lucide-react";
import AppShell from "@/components/AppShell";
import { BRAND, T, money, glass } from "@/lib/brand";
import { KPI, activity, spendByCategory, monthlySpend } from "@/lib/mock";
import bgImg from "@/assets/procure-bg.jpg";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Command Centre — Aegis Procure" },
      { name: "description", content: "Live procurement command centre: open requisitions, purchase order value, supplier base, budget consumption and spend analytics." },
      { property: "og:title", content: "Aegis Procure Command Centre" },
      { property: "og:description", content: "Live source-to-pay KPIs, approvals queue and spend analytics for industrial procurement teams." },
    ],
  }),
  component: () => (
    <AppShell>
      <Dashboard />
    </AppShell>
  ),
});

const TILES = [
  { label: "Requisitions", value: KPI.requisitions, sub: "Raised this quarter", col: "#7c3aed", to: "/requisitions" as const },
  { label: "Purchase Orders", value: KPI.pendingPOs, sub: `${money(KPI.poValue)} committed`, col: T.sourcing, to: "/purchase-orders" as const },
  { label: "Goods Received", value: KPI.grn, sub: "GRN records", col: "#059669", to: "/goods-received" as const },
  { label: "Suppliers", value: KPI.suppliers, sub: "Registered vendors", col: T.accent, to: "/suppliers" as const },
  { label: "Contracts", value: KPI.contracts, sub: "Active agreements", col: T.primary, to: "/contracts" as const },
  { label: "Tenders", value: KPI.tenders, sub: "In the market", col: T.teal, to: "/tenders" as const },
  { label: "Inventory Lines", value: KPI.inventory.toLocaleString(), sub: `${KPI.lowStock} below reorder`, col: T.inventory, to: "/items" as const },
  { label: "Budget Used", value: `${Math.round((KPI.budgetSpent / KPI.budgetTotal) * 100)}%`, sub: `${money(KPI.budgetSpent)} of ${money(KPI.budgetTotal)}`, col: T.logistics, to: "/reports" as const },
];

function Dashboard() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }));
    tick();
    const iv = setInterval(tick, 30_000);
    return () => clearInterval(iv);
  }, []);

  const maxCat = Math.max(...spendByCategory.map((c) => c.value));
  const maxMonth = Math.max(...monthlySpend.map((m) => m.v));

  return (
    <div style={{ position: "relative", minHeight: "100%" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(165deg, ${T.primaryDark}ee 0%, rgba(10,14,38,.78) 45%, rgba(6,9,26,.92) 100%)` }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, padding: 18, maxWidth: 1560, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <div>
            <div style={{ color: "#fff", fontSize: 26, fontWeight: 800, letterSpacing: "-.025em" }}>Welcome back, Ada</div>
            <div style={{ color: "rgba(255,255,255,.62)", fontSize: 12.5, marginTop: 3 }}>
              {BRAND.org} · Procurement Manager · {BRAND.name} {BRAND.version}
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 12px", borderRadius: 99, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", color: "rgba(255,255,255,.85)", fontSize: 11.5 }}>
              <Clock size={12} />{time}
            </div>
            <button style={{ width: 32, height: 32, borderRadius: 99, background: "rgba(255,255,255,.12)", border: "1px solid rgba(255,255,255,.2)", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }} aria-label="Refresh">
              <RefreshCw size={14} />
            </button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(196px,1fr))", gap: 12 }}>
          {TILES.map((t) => (
            <Link key={t.label} to={t.to} style={{ textDecoration: "none" }}>
              <div style={glass({ padding: "14px 16px", borderTop: `3px solid ${t.col}` })}>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: T.fgDim }}>{t.label}</div>
                <div style={{ fontSize: 27, fontWeight: 800, color: T.fg, letterSpacing: "-.03em", marginTop: 4 }}>{t.value}</div>
                <div style={{ fontSize: 11.5, color: T.fgMuted, marginTop: 2, display: "flex", alignItems: "center", gap: 4 }}>
                  {t.sub}<ArrowUpRight size={12} color={t.col} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14 }}>
          <div style={glass({ padding: 16 })}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
              <h2 style={{ margin: 0, fontSize: 12.5, fontWeight: 800, letterSpacing: ".02em", color: T.fg }}>Spend by category · YTD</h2>
              <span style={{ fontSize: 10.5, color: T.fgMuted }}>{money(spendByCategory.reduce((a, c) => a + c.value, 0))}</span>
            </div>
            {spendByCategory.map((c, i) => (
              <div key={c.label} style={{ marginBottom: 10 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, color: T.fgMuted, marginBottom: 4 }}>
                  <span style={{ fontWeight: 600, color: T.fg }}>{c.label}</span><span>{money(c.value)}</span>
                </div>
                <div style={{ height: 7, borderRadius: 99, background: "#e8edf4", overflow: "hidden" }}>
                  <div style={{ width: `${(c.value / maxCat) * 100}%`, height: "100%", borderRadius: 99, background: [T.sourcing, T.accent, T.teal, T.reports, T.inventory, T.logistics][i % 6] }} />
                </div>
              </div>
            ))}
          </div>

          <div style={glass({ padding: 16 })}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 12.5, fontWeight: 800, color: T.fg }}>Committed spend · monthly ($K)</h2>
              <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 10.5, color: T.success, fontWeight: 700 }}><TrendingUp size={12} />+22% QoQ</span>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 148 }}>
              {monthlySpend.map((m) => (
                <div key={m.m} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: T.fgMuted }}>{m.v}</div>
                  <div style={{ width: "100%", height: `${(m.v / maxMonth) * 108}px`, borderRadius: "4px 4px 0 0", background: `linear-gradient(180deg, ${T.teal2}, ${T.primary})` }} />
                  <div style={{ fontSize: 10.5, color: T.fgDim, fontWeight: 600 }}>{m.m}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={glass({ padding: 16 })}>
            <h2 style={{ margin: "0 0 12px", fontSize: 12.5, fontWeight: 800, color: T.fg }}>Activity feed</h2>
            {activity.map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: i < activity.length - 1 ? `1px solid ${T.border}` : "none" }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", marginTop: 5, flexShrink: 0, background: a.tone === "ok" ? T.success : a.tone === "warn" ? T.warning : T.sourcing }} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 12, color: T.fg }}><strong>{a.who}</strong> {a.what}</div>
                  <div style={{ fontSize: 10.5, color: T.fgDim }}>{a.t}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
