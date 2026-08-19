import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Eye, EyeOff, Lock, User, Shield, RefreshCw } from "lucide-react";
import { BRAND, T } from "@/lib/brand";
import bgImg from "@/assets/procure-bg.jpg";
import logoImg from "@/assets/aegis-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aegis Procure — Enterprise Procurement Suite Sign In" },
      { name: "description", content: "Sign in to Aegis Procure: requisitions, purchase orders, supplier management, tendering, inventory and spend analytics in one suite." },
      { property: "og:title", content: "Aegis Procure — Enterprise Procurement Suite" },
      { property: "og:description", content: "Source-to-pay control for industrial operations: requisitions, POs, suppliers, tenders, inventory and spend analytics." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [ready, setReady] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const signIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => nav({ to: "/dashboard" }), 450);
  };

  const s: Record<string, React.CSSProperties> = {
    root: { position: "fixed", inset: 0, overflow: "hidden" },
    bg: { position: "absolute", inset: 0, backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center 45%", filter: "brightness(.72) saturate(1.2)" },
    ov: { position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(4,14,38,.82) 0%,rgba(0,0,0,.28) 50%,rgba(3,20,50,.85) 100%)" },
    wrap: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 },
    card: {
      background: "rgba(255,255,255,.975)", borderRadius: 10, width: "100%", maxWidth: "min(410px,95vw)",
      padding: "38px 36px 30px", boxShadow: "0 28px 80px rgba(0,0,0,.45),0 4px 20px rgba(0,0,0,.2)",
      opacity: ready ? 1 : 0, transform: ready ? "translateY(0) scale(1)" : "translateY(24px) scale(.96)",
      transition: "opacity .45s cubic-bezier(.4,0,.2,1),transform .45s cubic-bezier(.4,0,.2,1)",
    },
    lbl: { display: "block", fontSize: 11, fontWeight: 700, color: "#374151", marginBottom: 4 },
    field: { position: "relative", marginBottom: 14 },
    icon: { position: "absolute", left: 11, top: "50%", transform: "translateY(-50%)", color: "#9ca3af", display: "flex" },
    inp: { width: "100%", boxSizing: "border-box", padding: "10px 38px 10px 34px", fontSize: 13, color: T.primary, background: "#f8fafc", border: "1.5px solid #e5e7eb", borderRadius: 7, outline: "none" },
    btn: {
      width: "100%", padding: "11px 0", background: `linear-gradient(135deg,${T.teal} 0%,${T.teal2} 100%)`, color: "#fff",
      fontWeight: 800, fontSize: 13.5, letterSpacing: ".03em", border: "none", borderRadius: 7, cursor: "pointer",
      boxShadow: `0 4px 16px ${T.teal}44`, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 6,
    },
    footer: { position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(4,10,26,.88)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "9px 20px", opacity: ready ? 1 : 0, transition: "opacity .8s .35s" },
  };

  return (
    <div style={s.root}>
      <div style={s.bg} />
      <div style={s.ov} />
      <div style={s.wrap}>
        <div style={s.card}>
          <div style={{ height: 4, margin: "-1px -1px 16px", borderRadius: "8px 8px 0 0", background: `linear-gradient(90deg, ${T.primary}, ${T.teal}, ${T.accent})` }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 6 }}>
            <img src={logoImg} alt="Aegis Procure logo" width={46} height={46}
              style={{ height: 46, width: 46, objectFit: "contain", borderRadius: 8, border: `2px solid ${T.teal}28`, padding: 3, background: "#f0f9ff" }} />
            <div>
              <div style={{ fontSize: 22, fontWeight: 900, color: T.primary, letterSpacing: "-.03em", lineHeight: 1.1 }}>{BRAND.name}</div>
              <div style={{ fontSize: 9.5, color: "#9ca3af", fontWeight: 700, letterSpacing: ".09em", textTransform: "uppercase" }}>{BRAND.org}</div>
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <span style={{ display: "inline-block", background: `${T.teal}12`, border: `1px solid ${T.teal}28`, color: T.teal, fontSize: 9.5, fontWeight: 700, letterSpacing: ".1em", padding: "2px 10px", borderRadius: 20, textTransform: "uppercase", marginTop: 8 }}>
              {BRAND.suite}
            </span>
          </div>

          <div style={{ textAlign: "center", fontSize: 10.5, fontWeight: 800, color: T.teal, letterSpacing: ".2em", textTransform: "uppercase", margin: "20px 0 20px" }}>
            Secure Sign In
          </div>

          <form onSubmit={signIn}>
            <label style={s.lbl} htmlFor="u">Username</label>
            <div style={s.field}>
              <span style={s.icon}><User size={15} /></span>
              <input id="u" style={s.inp} placeholder="a.kowalski" defaultValue="a.kowalski" autoComplete="username" />
            </div>

            <label style={s.lbl} htmlFor="p">Password</label>
            <div style={s.field}>
              <span style={s.icon}><Lock size={15} /></span>
              <input id="p" style={s.inp} type={show ? "text" : "password"} placeholder="••••••••" defaultValue="demo1234" autoComplete="current-password" />
              <button type="button" onClick={() => setShow((v) => !v)} aria-label="Toggle password visibility"
                style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9ca3af", padding: 2 }}>
                {show ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>

            <button type="submit" style={s.btn} disabled={loading}>
              {loading ? <RefreshCw size={15} className="spin" /> : <Shield size={15} />}
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <div style={{ marginTop: 16, textAlign: "center", fontSize: 10.5, color: "#9ca3af" }}>
            Demo environment · single sign-on and MFA available on deployment
          </div>
        </div>
      </div>

      <div style={s.footer}>
        <span style={{ width: 6, height: 6, borderRadius: "50%", background: `${T.accent}cc` }} />
        <span style={{ fontSize: 10.5, color: "rgba(255,255,255,.7)", fontWeight: 500 }}>
          {BRAND.name} {BRAND.version} · Source-to-Pay · ISO 9001 aligned workflows
        </span>
      </div>
    </div>
  );
}
