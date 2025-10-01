/* ==== [BLOCK: AppDetail Manage Progress] BEGIN ==== */
import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../core/i18n";

export default function AppDetailManageProgress(){
  const { t } = useI18n();

  return (
    <div className="container" style={{display:"grid", gap:12}}>
      <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
        <h1 style={{margin:0}}>Manage Progress</h1>
        <span className="badge">Beta</span>
      </div>
      <p style={{color:"var(--muted)"}}>
        {t("mp_tagline")}. Start gratis som testbruker – full versjon kommer med
        mulighet for kjøp via Stripe senere.
      </p>
      <div style={{display:"flex", gap:8}}>
        <Link className="btn" to="/signup">{t("cta_try")}</Link>
        <a className="btn secondary" href="https://managesystem.no/app/progress" onClick={(e)=>e.preventDefault()}>
          Demo (placeholder)
        </a>
      </div>

      <div className="hr" />

      <section className="grid">
        <div className="container">
          <h3 style={{marginTop:0}}>Hovedfunksjoner</h3>
          <ul>
            <li>Tabell + Gantt i parallell</li>
            <li>Zoom (dag/uke/måned), helgeskygge, i-dag-linje</li>
            <li>Avhengigheter og forskyvning</li>
            <li>Kalender/arbeidsdager og eksport</li>
          </ul>
        </div>
        <div className="container">
          <h3 style={{marginTop:0}}>For hvem</h3>
          <ul>
            <li>Prosjektledere og team</li>
            <li>Studenter i planlegging/prosjektfag</li>
            <li>Bygg/IT/konsulent – små og mellomstore prosjekter</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
/* ==== [BLOCK: AppDetail Manage Progress] END ==== */
