/* ==== [BLOCK: About] BEGIN ==== */
import React from "react";
import { useI18n } from "../core/i18n";

export default function About(){
  const { t } = useI18n();
  return (
    <div className="pageWithWatermark">
      <div className="container" style={{display:"grid", gap:12}}>
        <h1 style={{margin:0}}>{t("about_title")}</h1>
        <p style={{color:"var(--muted)"}}>{t("about_body")}</p>
        <ul>
          <li>Fokus på profesjonelle kunder</li>
          <li>Testbrukere nå, betaling kommer</li>
          <li>Bygget av Morning Coffee Labs</li>
        </ul>
      </div>
    </div>
  );
}
/* ==== [BLOCK: About] END ==== */

