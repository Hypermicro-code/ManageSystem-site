/* ==== [BLOCK: Home] BEGIN ==== */
import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../core/i18n";

export default function Home(){
  const { t } = useI18n();

  return (
    <div>
      {/* Hero med gradient bakgrunn */}
      <section className="hero">
        <div className="heroInner">
          <img 
            src="/logo.svg" 
            alt="ManageSystem logo" 
            className="heroLogo"
          />
          <h1>{t("hero_title")}</h1>
          <p className="heroSub">{t("hero_sub")}</p>
          <div className="heroCtas">
            <Link to="/signup" className="btn">{t("cta_try")}</Link>
            <Link to="/apps/manage-progress" className="btn secondary">Manage Progress</Link>
          </div>
        </div>
      </section>

      {/* Seksjon: Apper */}
      <section className="appsSection">
        <h2>{t("apps_title")}</h2>
        <div className="container" style={{textAlign:"left"}}>
          <h3 style={{marginTop:0}}>Manage Progress</h3>
          <p style={{color:"var(--muted)"}}>{t("mp_tagline")}</p>
          <div style={{display:"flex", gap:8}}>
            <Link to="/apps/manage-progress" className="btn secondary">
              {t("learn_more")}
            </Link>
            <Link to="/signup" className="btn">{t("cta_try")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
/* ==== [BLOCK: Home] END ==== */
