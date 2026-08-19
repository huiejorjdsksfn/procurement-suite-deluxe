/**
 * Aegis Procure — AppShell
 * Microsoft Dynamics 365 style chrome: navy top bar, coloured ribbon module
 * tabs, sub-command bar, live badge counts, responsive drawer navigation.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import {
  Package, FileText, ShoppingCart, Truck, BarChart3, Settings, LogOut, Bell,
  Building2, FileCheck, Gavel, Scale, ClipboardList, Layers, Search, Shield,
  Activity, Users, CheckCircle, DollarSign, Receipt, Calendar, Printer,
  Database, Globe, Wrench, Eye,
} from "lucide-react";
import { BRAND, T } from "@/lib/brand";
import { KPI } from "@/lib/mock";
import logoImg from "@/assets/aegis-logo.png";

type Item = { l: string; p: string; I: typeof Package; b?: number };
type Mod = { id: string; label: string; col: string; items: Item[] };

const MODS: Mod[] = [
  {
    id: "sourcing", label: "Sourcing", col: T.sourcing, items: [
      { l: "Approvals", p: "/approvals", I: CheckCircle },
      { l: "Requisitions", p: "/requisitions", I: ClipboardList, b: KPI.requisitions },
      { l: "Purchase Orders", p: "/purchase-orders", I: ShoppingCart, b: KPI.pendingPOs },
      { l: "Suppliers", p: "/suppliers", I: Truck },
      { l: "Contracts", p: "/contracts", I: FileCheck },
      { l: "Tenders", p: "/tenders", I: Gavel },
      { l: "Bid Evaluation", p: "/bid-evaluation", I: Scale },
      { l: "Sourcing Plan", p: "/sourcing-plan", I: Calendar },
    ],
  },
  {
    id: "inventory", label: "Inventory", col: T.inventory, items: [
      { l: "Items / Stock", p: "/items", I: Package, b: KPI.lowStock },
      { l: "Goods Received", p: "/goods-received", I: Layers },
      { l: "Warehouses", p: "/warehouses", I: Building2 },
      { l: "Stock Scanner", p: "/scanner", I: Search },
    ],
  },
  {
    id: "finance", label: "Finance", col: T.finance, items: [
      { l: "Spend Control", p: "/spend-control", I: DollarSign },
      { l: "Invoice Matching", p: "/invoice-matching", I: Receipt },
      { l: "Payment Vouchers", p: "/vouchers", I: FileText },
      { l: "Budgets", p: "/budgets", I: BarChart3 },
    ],
  },
  {
    id: "quality", label: "Quality", col: T.quality, items: [
      { l: "QC Dashboard", p: "/quality", I: Shield },
      { l: "Inspections", p: "/inspections", I: Eye },
      { l: "Non-Conformance", p: "/non-conformance", I: Activity },
    ],
  },
  {
    id: "reports", label: "Reports & BI", col: T.reports, items: [
      { l: "Analytics", p: "/reports", I: BarChart3 },
      { l: "Documents", p: "/documents", I: FileText },
      { l: "Print Engine", p: "/print-engine", I: Printer },
    ],
  },
  {
    id: "admin", label: "Administration", col: T.admin, items: [
      { l: "Users & Roles", p: "/users", I: Users },
      { l: "Audit Log", p: "/audit-log", I: Activity },
      { l: "Master Data", p: "/master-data", I: Database },
      { l: "Integrations", p: "/integrations", I: Globe },
      { l: "Settings", p: "/settings", I: Wrench },
    ],
  },
];

const Badge = ({ n, col }: { n: number; col: string }) =>
  n > 0 ? (
    <span style={{ minWidth: 17, height: 17, borderRadius: 10, background: col, color: "#fff", fontSize: 10, fontWeight: 700, lineHeight: "17px", textAlign: "center", padding: "0 4px", display: "inline-block", flexShrink: 0 }}>
      {n > 99 ? "99+" : n}
    </span>
  ) : null;

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const navigate = useNavigate();
  const [activeMod, setActiveMod] = useState<string>("sourcing");
  const [drawer, setDrawer] = useState(false);
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1280);

  useEffect(() => {
    const h = () => setW(window.innerWidth);
    window.addEventListener("resize", h);
    return () => window.removeEventListener("resize", h);
  }, []);

  useEffect(() => {
    const found = MODS.find((m) => m.items.some((i) => pathname.startsWith(i.p)));
    if (found) setActiveMod(found.id);
    setDrawer(false);
  }, [pathname]);

  const isPhone = w <= 767;
  const isMobile = w <= 1023;
  const mod = MODS.find((m) => m.id === activeMod)!;
  const alerts = KPI.pendingPOs + KPI.vouchers;

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", background: T.bg, color: T.fg, overflow: "hidden", fontSize: 13 }}>
      <style>{`@keyframes livePulse{0%,100%{opacity:1}50%{opacity:.3}}`}</style>

      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div style={{ height: isPhone ? 50 : 52, background: `linear-gradient(180deg, ${T.primary}, ${T.primaryDark})`, display: "flex", alignItems: "center", padding: isPhone ? "0 10px" : "0 18px", gap: isPhone ? 8 : 12, flexShrink: 0, boxShadow: "0 2px 10px rgba(8,10,35,.28)" }}>
        {isMobile && (
          <button onClick={() => setDrawer((o) => !o)} aria-label="Open navigation menu"
            style={{ background: drawer ? "rgba(255,255,255,.2)" : "transparent", border: "none", cursor: "pointer", padding: 6, display: "flex", flexDirection: "column", gap: 4, borderRadius: 8, minWidth: 36, minHeight: 36 }}>
            {[0, 1, 2].map((i) => <span key={i} style={{ display: "block", width: 18, height: 2, background: "#fff", borderRadius: 1 }} />)}
          </button>
        )}

        <div style={{ width: isPhone ? 28 : 32, height: isPhone ? 28 : 32, borderRadius: 9, background: "rgba(255,255,255,.16)", border: "1px solid rgba(255,255,255,.22)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <img src={logoImg} alt={`${BRAND.name} logo`} width={20} height={20} style={{ width: isPhone ? 17 : 20, height: isPhone ? 17 : 20, objectFit: "contain" }} />
        </div>

        <div style={{ lineHeight: 1.15, minWidth: 0, overflow: "hidden" }}>
          <div style={{ fontSize: isPhone ? 12 : 13.5, fontWeight: 700, color: "#fff", letterSpacing: "-.01em", whiteSpace: "nowrap" }}>{BRAND.name}</div>
          {!isPhone && <div style={{ fontSize: 9, color: "rgba(255,255,255,.55)", letterSpacing: ".05em", marginTop: 1, textTransform: "uppercase" }}>{BRAND.org}</div>}
        </div>

        {!isPhone && (
          <div style={{ marginLeft: 14, flex: 1, maxWidth: 420, position: "relative" }} className="topbar-search">
            <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,.55)" }} />
            <input placeholder="Search requisitions, POs, suppliers…"
              style={{ width: "100%", padding: "7px 10px 7px 30px", borderRadius: 6, border: "1px solid rgba(255,255,255,.18)", background: "rgba(255,255,255,.12)", color: "#fff", fontSize: 12, outline: "none" }} />
          </div>
        )}
        <div style={{ flex: 1 }} />

        {!isPhone && (
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {alerts > 0 && (
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 11px", borderRadius: 99, background: "rgba(255,255,255,.14)", border: "1px solid rgba(255,255,255,.22)", fontSize: 11, fontWeight: 700, color: "#fff" }}>
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#fbbf24" }} />{alerts} pending
              </div>
            )}
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 10.5, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", animation: "livePulse 2s infinite" }} />Live
            </div>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 6, paddingLeft: isPhone ? 0 : 10, marginLeft: 2, borderLeft: isPhone ? "none" : "1px solid rgba(255,255,255,.14)" }}>
          <button aria-label="Notifications" style={{ padding: 6, background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,.9)", borderRadius: 8, display: "flex", position: "relative" }}>
            <Bell size={15} />
            <span style={{ position: "absolute", top: 4, right: 5, width: 7, height: 7, borderRadius: "50%", background: "#f87171", border: `1.5px solid ${T.primaryDark}` }} />
          </button>
          {!isPhone && (
            <div style={{ padding: "4px 11px", borderRadius: 99, background: "rgba(255,255,255,.1)", fontSize: 10.5, fontWeight: 600, color: "rgba(255,255,255,.85)", whiteSpace: "nowrap" }}>
              Procurement Manager
            </div>
          )}
          <div style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg, ${T.teal}, ${T.accent})`, color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 1.5px rgba(255,255,255,.3)" }}>AK</div>
          <button onClick={() => navigate({ to: "/" })} aria-label="Sign out"
            style={{ padding: 6, background: "transparent", border: "none", cursor: "pointer", color: "rgba(255,255,255,.75)", display: "flex" }}>
            <LogOut size={15} />
          </button>
        </div>
      </div>

      {/* ── RIBBON TABS ─────────────────────────────────────── */}
      {!isPhone && (
        <div style={{ display: "flex", background: T.primaryDark, paddingLeft: 8, flexShrink: 0, overflowX: "auto" }}>
          {MODS.map((m) => {
            const on = m.id === activeMod;
            return (
              <button key={m.id} onClick={() => setActiveMod(m.id)}
                style={{ padding: "0 18px", height: 34, background: on ? T.card : "transparent", border: "none", borderTop: on ? `3px solid ${m.col}` : "3px solid transparent", color: on ? T.fg : "rgba(255,255,255,.72)", fontSize: 12, fontWeight: on ? 700 : 600, cursor: "pointer", whiteSpace: "nowrap", borderRadius: on ? "5px 5px 0 0" : 0 }}>
                {m.label}
              </button>
            );
          })}
        </div>
      )}

      {/* ── SUB COMMAND BAR ─────────────────────────────────── */}
      {!isPhone && (
        <div style={{ display: "flex", alignItems: "center", gap: 2, background: T.card, borderBottom: `1px solid ${T.border}`, padding: "0 10px", height: 40, flexShrink: 0, overflowX: "auto", boxShadow: T.shadow }}>
          <Link to="/dashboard" style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", fontSize: 12, fontWeight: 600, color: pathname === "/dashboard" ? mod.col : T.fgMuted, textDecoration: "none", borderRadius: 5, whiteSpace: "nowrap" }}>
            <BarChart3 size={14} /> Home
          </Link>
          <span style={{ width: 1, height: 20, background: T.border, margin: "0 6px" }} />
          {mod.items.map((it) => {
            const on = pathname.startsWith(it.p);
            return (
              <Link key={it.p} to={it.p}
                style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 10px", fontSize: 12, fontWeight: on ? 700 : 500, color: on ? mod.col : T.fgMuted, background: on ? `${mod.col}12` : "transparent", textDecoration: "none", borderRadius: 5, whiteSpace: "nowrap" }}>
                <it.I size={14} />{it.l}{it.b ? <Badge n={it.b} col={mod.col} /> : null}
              </Link>
            );
          })}
        </div>
      )}

      {/* ── MOBILE DRAWER ───────────────────────────────────── */}
      {drawer && (
        <>
          <div onClick={() => setDrawer(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.48)", zIndex: 8998 }} />
          <nav style={{ position: "fixed", top: 0, bottom: 0, left: 0, width: 278, background: T.card, zIndex: 8999, overflowY: "auto", boxShadow: T.shadowLg }}>
            <div style={{ padding: "14px 16px", background: `linear-gradient(180deg, ${T.primary}, ${T.primaryDark})`, color: "#fff" }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{BRAND.name}</div>
              <div style={{ fontSize: 10, opacity: .6 }}>{BRAND.suite}</div>
            </div>
            <Link to="/dashboard" style={{ display: "block", padding: "11px 16px", fontSize: 13, fontWeight: 700, color: T.fg, textDecoration: "none", borderBottom: `1px solid ${T.border}` }}>Home</Link>
            {MODS.map((m) => (
              <div key={m.id}>
                <div style={{ padding: "9px 16px 5px", fontSize: 10, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", color: m.col }}>{m.label}</div>
                {m.items.map((it) => (
                  <Link key={it.p} to={it.p}
                    style={{ display: "flex", alignItems: "center", gap: 9, padding: "9px 16px", fontSize: 13, color: pathname.startsWith(it.p) ? m.col : T.fgMuted, background: pathname.startsWith(it.p) ? `${m.col}10` : "transparent", textDecoration: "none" }}>
                    <it.I size={15} />{it.l}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </>
      )}

      {/* ── PAGE ────────────────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: "auto", overflowX: "hidden" }}>{children}</div>

      <div style={{ height: 24, flexShrink: 0, background: T.card, borderTop: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", fontSize: 10.5, color: T.fgDim }}>
        <span>{BRAND.name} {BRAND.version} · {BRAND.suite}</span>
        <span>Connected · {BRAND.org}</span>
      </div>
    </div>
  );
}

export { MODS };
