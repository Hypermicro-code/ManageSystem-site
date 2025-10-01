/* ==== [BLOCK: Education] BEGIN ==== */
import React from "react";
import { Link } from "react-router-dom";
import { useI18n } from "../core/i18n";

export default function Education(){
  const { t } = useI18n();
  return (
    <div className="container" style={{display:"grid", gap:12}}>
      <h1 style={{marginTop:0}}>{t("education_title")}</h1>
      <p style={{color:"var(--muted)"}}>{t("education_body")}</p>

      <div className="grid">
        <div className="container">
          <h3 style={{marginTop:0}}>Hva dere får</h3>
          <ul>
            <li>Institusjonslisens eller student-enkeltlisenser</li>
            <li>Rabattordninger og volumpriser</li>
            <li>Enkel utrulling i klasser</li>
            <li>Pedagogressurser: oppgaver og case</li>
          </ul>
        </div>
        <div className="container">
          <h3 style={{marginTop:0}}>Neste steg</h3>
          <ol>
            <li><Link to="/signup">Opprett institusjonskonto</Link> (gratis, uforpliktende)</li>
            <li>Fortell oss antall studenter og behov</li>
            <li>Vi aktiverer rabatter og tilgang</li>
          </ol>
          <div style={{display:"flex", gap:8, marginTop:8}}>
            <Link to="/signup" className="btn">Be om tilbud</Link>
            <Link to="/feedback" className="btn secondary">Kontakt oss</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
/* ==== [BLOCK: Education] END ==== */
