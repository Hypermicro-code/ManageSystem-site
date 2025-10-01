/* ==== [BLOCK: Home] BEGIN ==== */
import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../core/i18n";

export default function Home(){
  const { t } = useI18n();

  return (
    <div className="container">
      <section style={{display:"grid", gap:14}}>
        <h1 style={{margin:"4px 0 0"}}>{t("hero_title")}</h1>
        <p style={{color:"var(--muted)"}}>{t("hero_sub")}</p>
        <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
          <Link to="/signup" className="btn">{t("cta_try")}</Link>
          <Link to="/apps/manage-progress" className="btn secondary">Manage Progress</Link>
        </div>
      </section>

      <div className="hr" />

      <section>
        <h2 style={{marginTop:0}}>{t("apps_title")}</h2>
        <div className="grid cols-3">
          <div className="container">
            <h3 style={{marginTop:0}}>Manage Progress</h3>
            <p style={{color:"var(--muted)"}}>
              {t("mp_tagline")}
            </p>
            <div style={{display:"flex", gap:8}}>
              <Link to="/apps/manage-progress" className="btn secondary">
                {t("learn_more")}
              </Link>
              <Link to="/signup" className="btn">{t("cta_try")}</Link>
            </div>
          </div>

          <div className="container" style={{opacity:.6}}>
            <h3 style={{marginTop:0}}>Manage Calculations</h3>
            <p style={{color:"var(--muted)"}}>Coming soon</p>
            <div style={{display:"flex", gap:8}}>
              <button className="btn secondary" disabled>Learn more</button>
              <button className="btn" disabled>Try</button>
            </div>
          </div>

          <div className="container" style={{opacity:.6}}>
            <h3 style={{marginTop:0}}>Manage System Suite</h3>
            <p style={{color:"var(--muted)"}}>Coming later</p>
            <div style={{display:"flex", gap:8}}>
              <button className="btn secondary" disabled>Learn more</button>
              <button className="btn" disabled>Try</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
/* ==== [BLOCK: Home] END ==== */
